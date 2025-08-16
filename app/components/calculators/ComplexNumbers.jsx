import { useState, useEffect } from 'react'

export default function ComplexNumbersCalculator() {
  const [z1, setZ1] = useState({ real: '', imaginary: '' })
  const [z2, setZ2] = useState({ real: '', imaginary: '' })
  const [operation, setOperation] = useState('add')
  const [result, setResult] = useState(null)
  const [showSteps, setShowSteps] = useState(false)

  const operations = [
    { value: 'add', label: 'Addition (z₁ + z₂)', symbol: '+' },
    { value: 'subtract', label: 'Subtraction (z₁ - z₂)', symbol: '-' },
    { value: 'multiply', label: 'Multiplication (z₁ × z₂)', symbol: '×' },
    { value: 'divide', label: 'Division (z₁ ÷ z₂)', symbol: '÷' },
    { value: 'conjugate', label: 'Conjugate (z₁*)', symbol: '*' },
    { value: 'modulus', label: 'Modulus (|z₁|)', symbol: '||' },
    { value: 'power', label: 'Power (z₁ⁿ)', symbol: '^' }
  ]

  const formatComplex = (real, imaginary, showParens = false) => {
    const r = parseFloat(real) || 0
    const i = parseFloat(imaginary) || 0
    
    if (i === 0) return r.toString()
    if (r === 0) return i === 1 ? 'i' : i === -1 ? '-i' : `${i}i`
    
    const sign = i >= 0 ? ' + ' : ' - '
    const imagPart = Math.abs(i) === 1 ? 'i' : `${Math.abs(i)}i`
    const result = `${r}${sign}${imagPart}`
    
    return showParens ? `(${result})` : result
  }

  const calculate = () => {
    const a = parseFloat(z1.real) || 0
    const b = parseFloat(z1.imaginary) || 0
    const c = parseFloat(z2.real) || 0
    const d = parseFloat(z2.imaginary) || 0

    let resultReal, resultImaginary, steps = []

    switch (operation) {
      case 'add':
        resultReal = a + c
        resultImaginary = b + d
        steps = [
          `(${a} + ${b}i) + (${c} + ${d}i)`,
          `= (${a} + ${c}) + (${b} + ${d})i`,
          `= ${resultReal} + ${resultImaginary}i`
        ]
        break

      case 'subtract':
        resultReal = a - c
        resultImaginary = b - d
        steps = [
          `(${a} + ${b}i) - (${c} + ${d}i)`,
          `= (${a} - ${c}) + (${b} - ${d})i`,
          `= ${resultReal} + ${resultImaginary}i`
        ]
        break

      case 'multiply':
        resultReal = a * c - b * d
        resultImaginary = a * d + b * c
        steps = [
          `(${a} + ${b}i)(${c} + ${d}i)`,
          `= ${a}×${c} + ${a}×${d}i + ${b}i×${c} + ${b}i×${d}i`,
          `= ${a * c} + ${a * d}i + ${b * c}i + ${b * d}i²`,
          `= ${a * c} + ${a * d}i + ${b * c}i - ${b * d}`,
          `= (${a * c} - ${b * d}) + (${a * d} + ${b * c})i`,
          `= ${resultReal} + ${resultImaginary}i`
        ]
        break

      case 'divide':
        const denominator = c * c + d * d
        if (denominator === 0) {
          setResult({ error: 'Division by zero' })
          return
        }
        resultReal = (a * c + b * d) / denominator
        resultImaginary = (b * c - a * d) / denominator
        steps = [
          `(${a} + ${b}i) ÷ (${c} + ${d}i)`,
          `= (${a} + ${b}i) × (${c} - ${d}i) ÷ ((${c} + ${d}i) × (${c} - ${d}i))`,
          `= (${a * c + b * d} + ${b * c - a * d}i) ÷ (${c * c + d * d})`,
          `= ${resultReal.toFixed(4)} + ${resultImaginary.toFixed(4)}i`
        ]
        break

      case 'conjugate':
        resultReal = a
        resultImaginary = -b
        steps = [
          `Conjugate of (${a} + ${b}i)`,
          `= ${a} - ${b}i`,
          `= ${resultReal} + ${resultImaginary}i`
        ]
        break

      case 'modulus':
        const modulus = Math.sqrt(a * a + b * b)
        steps = [
          `|${a} + ${b}i|`,
          `= √(${a}² + ${b}²)`,
          `= √(${a * a} + ${b * b})`,
          `= √${a * a + b * b}`,
          `= ${modulus.toFixed(4)}`
        ]
        setResult({
          real: modulus,
          imaginary: 0,
          isReal: true,
          steps: steps,
          formatted: modulus.toFixed(4)
        })
        return

      default:
        return
    }

    setResult({
      real: resultReal,
      imaginary: resultImaginary,
      steps: steps,
      formatted: formatComplex(resultReal, resultImaginary)
    })
  }

  const clearAll = () => {
    setZ1({ real: '', imaginary: '' })
    setZ2({ real: '', imaginary: '' })
    setResult(null)
  }

  useEffect(() => {
    if ((z1.real !== '' || z1.imaginary !== '') && 
        (operation === 'conjugate' || operation === 'modulus' || 
         z2.real !== '' || z2.imaginary !== '')) {
      calculate()
    } else {
      setResult(null)
    }
  }, [z1, z2, operation])

  const needsSecondNumber = !['conjugate', 'modulus'].includes(operation)

  return (
    <div style={{
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Complex Numbers Calculator
      </h1> */}

      <div style={{
        display: 'grid',
        gridTemplateColumns: needsSecondNumber ? '1fr 1fr' : '1fr',
        gap: '20px',
        marginBottom: '20px'
      }}>
        {/* First Complex Number */}
        <div style={{
          backgroundColor: '#f8f9fa',
          padding: '20px',
          borderRadius: '12px',
          border: '2px solid #dee2e6'
        }}>
          <h3 style={{ color: '#495057', marginBottom: '15px', textAlign: 'center' }}>
            First Number (z₁)
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
            <input
              type="number"
              value={z1.real}
              onChange={(e) => setZ1({...z1, real: e.target.value})}
              placeholder="Real part"
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                width: '100px',
                textAlign: 'center'
              }}
            />
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>+</span>
            <input
              type="number"
              value={z1.imaginary}
              onChange={(e) => setZ1({...z1, imaginary: e.target.value})}
              placeholder="Imaginary"
              style={{
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '6px',
                width: '100px',
                textAlign: 'center'
              }}
            />
            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>i</span>
          </div>
          <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', color: '#666' }}>
            {formatComplex(z1.real, z1.imaginary) || 'Enter values'}
          </div>
        </div>

        {/* Second Complex Number */}
        {needsSecondNumber && (
          <div style={{
            backgroundColor: '#f8f9fa',
            padding: '20px',
            borderRadius: '12px',
            border: '2px solid #dee2e6'
          }}>
            <h3 style={{ color: '#495057', marginBottom: '15px', textAlign: 'center' }}>
              Second Number (z₂)
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
              <input
                type="number"
                value={z2.real}
                onChange={(e) => setZ2({...z2, real: e.target.value})}
                placeholder="Real part"
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  width: '100px',
                  textAlign: 'center'
                }}
              />
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>+</span>
              <input
                type="number"
                value={z2.imaginary}
                onChange={(e) => setZ2({...z2, imaginary: e.target.value})}
                placeholder="Imaginary"
                style={{
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '6px',
                  width: '100px',
                  textAlign: 'center'
                }}
              />
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>i</span>
            </div>
            <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '16px', color: '#666' }}>
              {formatComplex(z2.real, z2.imaginary) || 'Enter values'}
            </div>
          </div>
        )}
      </div>

      {/* Operation Selection */}
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '12px',
        border: '2px solid #007bff',
        marginBottom: '20px'
      }}>
        <h3 style={{ color: '#007bff', marginBottom: '15px', textAlign: 'center' }}>
          Choose Operation
        </h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '10px'
        }}>
          {operations.map(op => (
            <button
              key={op.value}
              onClick={() => setOperation(op.value)}
              style={{
                padding: '12px',
                border: operation === op.value ? '2px solid #007bff' : '2px solid #ddd',
                borderRadius: '8px',
                backgroundColor: operation === op.value ? '#007bff' : '#fff',
                color: operation === op.value ? '#fff' : '#333',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {op.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginBottom: '20px'
      }}>
        <button
          onClick={() => setShowSteps(!showSteps)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          {showSteps ? 'Hide Steps' : 'Show Steps'}
        </button>
        <button
          onClick={clearAll}
          style={{
            padding: '10px 20px',
            backgroundColor: '#dc3545',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        >
          Clear All
        </button>
      </div>

      {/* Result */}
      {result && (
        <div style={{
          backgroundColor: result.error ? '#f8d7da' : '#d4edda',
          padding: '20px',
          borderRadius: '12px',
          border: `2px solid ${result.error ? '#f5c6cb' : '#c3e6cb'}`
        }}>
          <h3 style={{
            color: result.error ? '#721c24' : '#155724',
            marginBottom: '15px',
            textAlign: 'center'
          }}>
            Result:
          </h3>
          
          {result.error ? (
            <div style={{
              textAlign: 'center',
              fontSize: '18px',
              color: '#721c24',
              fontWeight: 'bold'
            }}>
              {result.error}
            </div>
          ) : (
            <>
              <div style={{
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#155724',
                marginBottom: '15px',
                fontFamily: 'monospace'
              }}>
                {result.formatted}
              </div>

              {showSteps && result.steps && (
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  padding: '15px',
                  borderRadius: '8px',
                  marginTop: '15px'
                }}>
                  <h4 style={{ color: '#155724', marginBottom: '10px' }}>Step-by-step:</h4>
                  {result.steps.map((step, index) => (
                    <div 
                      key={index}
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '14px',
                        color: '#2d5a3d',
                        marginBottom: '5px',
                        paddingLeft: index > 0 ? '20px' : '0'
                      }}
                    >
                      {step}
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* Information */}
      <div style={{
        backgroundColor: '#fff3cd',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #ffeaa7',
        marginTop: '20px'
      }}>
        <h4 style={{ color: '#856404', marginBottom: '10px' }}>💡 Quick Guide:</h4>
        <div style={{ fontSize: '14px', color: '#856404', lineHeight: '1.6' }}>
          <strong>Complex Number:</strong> z = a + bi where a is real part, b is imaginary part<br/>
          <strong>Examples:</strong> 3 + 4i, -2 + 5i, 7 - 3i, 0 + 2i (pure imaginary)<br/>
          <strong>Operations:</strong> Add/subtract components separately, multiply using FOIL, divide by multiplying by conjugate
        </div>
      </div>
    </div>
  )
}