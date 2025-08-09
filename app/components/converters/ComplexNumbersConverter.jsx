import { useState, useEffect } from 'react'

export default function ComplexNumberConverter() {
  const [values, setValues] = useState({
    // Rectangular form: a + bi
    real: '',
    imaginary: '',
    // Polar form: r∠θ or r(cos θ + i sin θ)
    magnitude: '',
    angle: '',
    angleUnit: 'radians',
    // Exponential form: re^(iθ)
    expMagnitude: '',
    expAngle: '',
    expAngleUnit: 'radians'
  })

  const [activeForm, setActiveForm] = useState('rectangular')
  const [result, setResult] = useState(null)

  const convertFromRectangular = (a, b) => {
    const r = Math.sqrt(a * a + b * b)
    let theta = Math.atan2(b, a)
    
    return {
      magnitude: r,
      angle: theta,
      angleInDegrees: theta * (180 / Math.PI)
    }
  }

  const convertFromPolar = (r, theta, unit = 'radians') => {
    const angleInRadians = unit === 'degrees' ? theta * (Math.PI / 180) : theta
    const real = r * Math.cos(angleInRadians)
    const imaginary = r * Math.sin(angleInRadians)
    
    return { real, imaginary, angleInRadians }
  }

  const formatNumber = (num) => {
    return Math.abs(num) < 1e-10 ? '0' : num.toFixed(4).replace(/\.?0+$/, '')
  }

  const calculate = () => {
    let a, b, r, theta, thetaRad

    if (activeForm === 'rectangular') {
      a = parseFloat(values.real) || 0
      b = parseFloat(values.imaginary) || 0
      const polar = convertFromRectangular(a, b)
      r = polar.magnitude
      theta = polar.angle
      thetaRad = theta
    } else if (activeForm === 'polar') {
      r = parseFloat(values.magnitude) || 0
      theta = parseFloat(values.angle) || 0
      const rect = convertFromPolar(r, theta, values.angleUnit)
      a = rect.real
      b = rect.imaginary
      thetaRad = rect.angleInRadians
    } else if (activeForm === 'exponential') {
      r = parseFloat(values.expMagnitude) || 0
      theta = parseFloat(values.expAngle) || 0
      const rect = convertFromPolar(r, theta, values.expAngleUnit)
      a = rect.real
      b = rect.imaginary
      thetaRad = rect.angleInRadians
    }

    const thetaDeg = thetaRad * (180 / Math.PI)

    setResult({
      rectangular: {
        standard: `${formatNumber(a)}${b >= 0 ? ' + ' : ' - '}${formatNumber(Math.abs(b))}i`,
        components: { real: formatNumber(a), imaginary: formatNumber(b) }
      },
      polar: {
        standard: `${formatNumber(r)}∠${formatNumber(thetaDeg)}°`,
        trigonometric: `${formatNumber(r)}(cos(${formatNumber(thetaDeg)}°) + i sin(${formatNumber(thetaDeg)}°))`,
        radians: `${formatNumber(r)}∠${formatNumber(thetaRad)} rad`,
        components: { magnitude: formatNumber(r), angleDeg: formatNumber(thetaDeg), angleRad: formatNumber(thetaRad) }
      },
      exponential: {
        degrees: `${formatNumber(r)}e^(i${formatNumber(thetaDeg)}°)`,
        radians: `${formatNumber(r)}e^(i${formatNumber(thetaRad)})`,
        components: { magnitude: formatNumber(r), angleDeg: formatNumber(thetaDeg), angleRad: formatNumber(thetaRad) }
      }
    })
  }

  useEffect(() => {
    if (hasValidInput()) {
      calculate()
    } else {
      setResult(null)
    }
  }, [values, activeForm])

  const hasValidInput = () => {
    if (activeForm === 'rectangular') {
      return values.real !== '' || values.imaginary !== ''
    } else if (activeForm === 'polar') {
      return values.magnitude !== '' && values.angle !== ''
    } else if (activeForm === 'exponential') {
      return values.expMagnitude !== '' && values.expAngle !== ''
    }
    return false
  }

  const clearForm = () => {
    setValues({
      real: '',
      imaginary: '',
      magnitude: '',
      angle: '',
      angleUnit: 'radians',
      expMagnitude: '',
      expAngle: '',
      expAngleUnit: 'radians'
    })
    setResult(null)
  }

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
        Complex Number Form Converter
      </h1>

      {/* Form Selection */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '30px'
      }}>
        {['rectangular', 'polar', 'exponential'].map(form => (
          <button
            key={form}
            onClick={() => setActiveForm(form)}
            style={{
              padding: '10px 20px',
              border: activeForm === form ? '2px solid #007bff' : '2px solid #ddd',
              borderRadius: '8px',
              backgroundColor: activeForm === form ? '#007bff' : '#fff',
              color: activeForm === form ? '#fff' : '#333',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontWeight: '500'
            }}
          >
            {form} Form
          </button>
        ))}
      </div>

      {/* Input Forms */}
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '12px',
        marginBottom: '20px'
      }}>
        {activeForm === 'rectangular' && (
          <div>
            <h3 style={{ color: '#495057', marginBottom: '15px' }}>Rectangular Form: a + bi</h3>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Real part (a):</label>
                <input
                  type="number"
                  value={values.real}
                  onChange={(e) => setValues({...values, real: e.target.value})}
                  placeholder="e.g., 3"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '120px'
                  }}
                />
              </div>
              <span style={{ fontSize: '18px', margin: '20px 0 0 0' }}>+</span>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Imaginary part (b):</label>
                <input
                  type="number"
                  value={values.imaginary}
                  onChange={(e) => setValues({...values, imaginary: e.target.value})}
                  placeholder="e.g., 4"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '120px'
                  }}
                />
              </div>
              <span style={{ fontSize: '18px', margin: '20px 0 0 0' }}>i</span>
            </div>
          </div>
        )}

        {activeForm === 'polar' && (
          <div>
            <h3 style={{ color: '#495057', marginBottom: '15px' }}>Polar Form: r∠θ</h3>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Magnitude (r):</label>
                <input
                  type="number"
                  value={values.magnitude}
                  onChange={(e) => setValues({...values, magnitude: e.target.value})}
                  placeholder="e.g., 5"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '120px'
                  }}
                />
              </div>
              <span style={{ fontSize: '18px', margin: '20px 0 0 0' }}>∠</span>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Angle (θ):</label>
                <input
                  type="number"
                  value={values.angle}
                  onChange={(e) => setValues({...values, angle: e.target.value})}
                  placeholder="e.g., 0.927"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '120px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Unit:</label>
                <select
                  value={values.angleUnit}
                  onChange={(e) => setValues({...values, angleUnit: e.target.value})}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value="radians">Radians</option>
                  <option value="degrees">Degrees</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeForm === 'exponential' && (
          <div>
            <h3 style={{ color: '#495057', marginBottom: '15px' }}>Exponential Form: re^(iθ)</h3>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Magnitude (r):</label>
                <input
                  type="number"
                  value={values.expMagnitude}
                  onChange={(e) => setValues({...values, expMagnitude: e.target.value})}
                  placeholder="e.g., 5"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '120px'
                  }}
                />
              </div>
              <span style={{ fontSize: '18px', margin: '20px 0 0 0' }}>e^(i</span>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Angle (θ):</label>
                <input
                  type="number"
                  value={values.expAngle}
                  onChange={(e) => setValues({...values, expAngle: e.target.value})}
                  placeholder="e.g., 0.927"
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    width: '120px'
                  }}
                />
              </div>
              <span style={{ fontSize: '18px', margin: '20px 0 0 0' }}>)</span>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Unit:</label>
                <select
                  value={values.expAngleUnit}
                  onChange={(e) => setValues({...values, expAngleUnit: e.target.value})}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: '4px'
                  }}
                >
                  <option value="radians">Radians</option>
                  <option value="degrees">Degrees</option>
                </select>
              </div>
            </div>
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          <button
            onClick={clearForm}
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div style={{
          backgroundColor: '#e7f3ff',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid #17a2b8'
        }}>
          <h3 style={{ color: '#0c5460', marginBottom: '20px' }}>All Forms:</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {/* Rectangular Form */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: '#495057', marginBottom: '10px' }}>📐 Rectangular Form</h4>
              <div style={{ fontFamily: 'monospace', fontSize: '16px', marginBottom: '8px' }}>
                <strong>{result.rectangular.standard}</strong>
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                Real: {result.rectangular.components.real}<br/>
                Imaginary: {result.rectangular.components.imaginary}
              </div>
            </div>

            {/* Polar Form */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: '#495057', marginBottom: '10px' }}>🔄 Polar Form</h4>
              <div style={{ fontFamily: 'monospace', fontSize: '14px', marginBottom: '8px' }}>
                <strong>{result.polar.standard}</strong><br/>
                {result.polar.radians}<br/>
                <div style={{ fontSize: '12px', marginTop: '5px' }}>
                  {result.polar.trigonometric}
                </div>
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                |z| = {result.polar.components.magnitude}<br/>
                arg(z) = {result.polar.components.angleDeg}° = {result.polar.components.angleRad} rad
              </div>
            </div>

            {/* Exponential Form */}
            <div style={{ backgroundColor: 'rgba(255,255,255,0.7)', padding: '15px', borderRadius: '8px' }}>
              <h4 style={{ color: '#495057', marginBottom: '10px' }}>🌟 Exponential Form</h4>
              <div style={{ fontFamily: 'monospace', fontSize: '14px', marginBottom: '8px' }}>
                <strong>{result.exponential.radians}</strong><br/>
                {result.exponential.degrees}
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                Magnitude: {result.exponential.components.magnitude}<br/>
                Exponent: i({result.exponential.components.angleRad})
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Information Panel */}
      <div style={{
        backgroundColor: '#fff3cd',
        padding: '15px',
        borderRadius: '8px',
        border: '1px solid #ffeaa7',
        marginTop: '20px'
      }}>
        <h4 style={{ color: '#856404', marginBottom: '10px' }}>📚 Forms Explained:</h4>
        <div style={{ fontSize: '14px', color: '#856404', lineHeight: '1.6' }}>
          <strong>Rectangular:</strong> z = a + bi (real and imaginary components)<br/>
          <strong>Polar:</strong> z = r∠θ = r(cos θ + i sin θ) (magnitude and angle)<br/>
          <strong>Exponential:</strong> z = re^(iθ) (Euler&apos;s formula representation)
        </div>
      </div>
    </div>
  )
}