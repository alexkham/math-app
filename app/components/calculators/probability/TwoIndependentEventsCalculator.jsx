


import React, { useState } from 'react';

export default function TwoIndependentEventsCalculator() {
  const [pA, setPA] = useState('');
  const [pB, setPB] = useState('');
  const [results, setResults] = useState(null);
  const [errors, setErrors] = useState({ pA: '', pB: '' });

  const validateInput = (value, field) => {
    if (value === '') {
      setErrors(prev => ({ ...prev, [field]: '' }));
      return true;
    }
    
    if (!/^\d*\.?\d*$/.test(value)) {
      setErrors(prev => ({ ...prev, [field]: 'Invalid number format' }));
      return false;
    }
    
    const num = parseFloat(value);
    if (num < 0 || num > 1) {
      setErrors(prev => ({ ...prev, [field]: 'Must be between 0 and 1' }));
      return false;
    }
    
    setErrors(prev => ({ ...prev, [field]: '' }));
    return true;
  };

  const handlePAChange = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPA(value);
      validateInput(value, 'pA');
    }
  };

  const handlePBChange = (value) => {
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setPB(value);
      validateInput(value, 'pB');
    }
  };

  const calculate = () => {
    if (pA === '' || pB === '') {
      return;
    }

    const pa = parseFloat(pA);
    const pb = parseFloat(pB);

    if (isNaN(pa) || isNaN(pb) || pa < 0 || pa > 1 || pb < 0 || pb > 1) {
      return;
    }

    const calculated = {
      pA: pa,
      pB: pb,
      pANot: 1 - pa,
      pBNot: 1 - pb,
      pAandB: pa * pb,
      pAorB: pa + pb - (pa * pb),
      pAxorB: pa + pb - 2 * (pa * pb),
      pNeither: (1 - pa) * (1 - pb),
      pAnotB: pa * (1 - pb),
      pBnotA: (1 - pa) * pb
    };

    setResults(calculated);
  };

  const reset = () => {
    setPA('');
    setPB('');
    setResults(null);
    setErrors({ pA: '', pB: '' });
  };

  const VennDiagram = ({ type }) => {
    const blueShade = '#7fa8f5';
    
    return (
      <svg width="80" height="60" viewBox="0 0 80 60" style={{ display: 'block' }}>
        <defs>
          <clipPath id={`clipLeft-${type}`}>
            <ellipse cx="30" cy="30" rx="20" ry="18" />
          </clipPath>
          <clipPath id={`clipRight-${type}`}>
            <ellipse cx="50" cy="30" rx="20" ry="18" />
          </clipPath>
        </defs>
        
        <rect width="80" height="60" fill="#f0f0f0" rx="4" />
        
        {type === 'pA' && (
          <ellipse cx="30" cy="30" rx="20" ry="18" fill={blueShade} />
        )}
        
        {type === 'pB' && (
          <ellipse cx="50" cy="30" rx="20" ry="18" fill={blueShade} />
        )}
        
        {type === 'pAorB' && (
          <>
            <ellipse cx="30" cy="30" rx="20" ry="18" fill={blueShade} />
            <ellipse cx="50" cy="30" rx="20" ry="18" fill={blueShade} />
          </>
        )}
        
        {type === 'pAandB' && (
          <ellipse cx="30" cy="30" rx="20" ry="18" fill={blueShade} clipPath={`url(#clipRight-${type})`} />
        )}
        
        {type === 'pAxorB' && (
          <>
            <ellipse cx="30" cy="30" rx="20" ry="18" fill={blueShade} />
            <ellipse cx="50" cy="30" rx="20" ry="18" fill={blueShade} />
            <ellipse cx="30" cy="30" rx="20" ry="18" fill="white" clipPath={`url(#clipRight-${type})`} />
          </>
        )}
        
        {type === 'pNeither' && (
          <>
            <rect width="80" height="60" fill={blueShade} rx="4" />
            <ellipse cx="30" cy="30" rx="20" ry="18" fill="white" />
            <ellipse cx="50" cy="30" rx="20" ry="18" fill="white" />
          </>
        )}
        
        {type === 'pAnotB' && (
          <>
            <ellipse cx="30" cy="30" rx="20" ry="18" fill={blueShade} />
            <ellipse cx="50" cy="30" rx="20" ry="18" fill="#f0f0f0" />
          </>
        )}
        
        {type === 'pBnotA' && (
          <>
            <ellipse cx="30" cy="30" rx="20" ry="18" fill="#f0f0f0" />
            <ellipse cx="50" cy="30" rx="20" ry="18" fill={blueShade} />
          </>
        )}
        
        {type === 'pANot' && (
          <>
            <rect width="80" height="60" fill={blueShade} rx="4" />
            <ellipse cx="30" cy="30" rx="20" ry="18" fill="white" />
          </>
        )}
        
        {type === 'pBNot' && (
          <>
            <rect width="80" height="60" fill={blueShade} rx="4" />
            <ellipse cx="50" cy="30" rx="20" ry="18" fill="white" />
          </>
        )}
        
        <ellipse cx="30" cy="30" rx="20" ry="18" fill="none" stroke="#333" strokeWidth="1.5" />
        <ellipse cx="50" cy="30" rx="20" ry="18" fill="none" stroke="#333" strokeWidth="1.5" />
        
        <text x="22" y="35" fontSize="12" fontWeight="bold" fill="#000">A</text>
        <text x="54" y="35" fontSize="12" fontWeight="bold" fill="#000">B</text>
      </svg>
    );
  };

  const resultFields = [
    { key: 'pA', label: 'P(A)', desc: 'Probability of A occurring' },
    { key: 'pB', label: 'P(B)', desc: 'Probability of B occurring' },
    { key: 'pANot', label: "P(A')", desc: 'Probability of A NOT occurring' },
    { key: 'pBNot', label: "P(B')", desc: 'Probability of B NOT occurring' },
    { key: 'pAandB', label: 'P(A∩B)', desc: 'Probability of A and B both occurring' },
    { key: 'pAorB', label: 'P(A∪B)', desc: 'Probability of A or B or both occurring' },
    { key: 'pAxorB', label: 'P(A∆B)', desc: 'Probability that A or B occurs but NOT both' },
    { key: 'pNeither', label: "P((A∪B)')", desc: 'Probability of neither A nor B occurring' },
    { key: 'pAnotB', label: "P(A∩B')", desc: 'Probability of A occurring but NOT B' },
    { key: 'pBnotA', label: "P(A'∩B)", desc: 'Probability of B occurring but NOT A' }
  ];

  const canCalculate = pA !== '' && pB !== '' && !errors.pA && !errors.pB;

  return (
    <div style={{
      minHeight: '100vh',
      // background: '#f5f7fa',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '16px',
        overflow: 'hidden',
         border:'solid 1.5px lightgray'
        // boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
      }}>
        <div style={{
          background: '#245de1',
          padding: '40px',
          textAlign: 'center',
          color: 'white'
        }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '32px', fontWeight: '600' }}>
            Independent Events Probability Calculator
          </h1>
          <p style={{ margin: 0, fontSize: '16px', opacity: 0.95 }}>
            Enter P(A) and P(B) to calculate all probabilities
          </p>
        </div>

        <div style={{ padding: '40px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: results ? '400px 1fr' : '1fr',
            gap: '40px'
          }}>
            <div>
              <div style={{
                background: '#f8f9fa',
                padding: '24px',
                borderRadius: '12px',
                border: pA !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '20px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#2d3748'
                }}>
                  P(A)
                </label>
                <p style={{
                  fontSize: '14px',
                  color: '#718096',
                  marginBottom: '12px'
                }}>
                  Probability of A occurring
                </p>
                <input
                  type="text"
                  placeholder="e.g., 0.6"
                  value={pA}
                  onChange={(e) => handlePAChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '18px',
                    border: errors.pA ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.pA && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '13px',
                    marginTop: '8px',
                    fontWeight: '500'
                  }}>
                    {errors.pA}
                  </div>
                )}
              </div>

              <div style={{
                background: '#f8f9fa',
                padding: '24px',
                borderRadius: '12px',
                border: pB !== '' ? '2px solid #245de1' : '2px solid #e2e8f0',
                marginBottom: '24px'
              }}>
                <label style={{
                  display: 'block',
                  fontSize: '20px',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#2d3748'
                }}>
                  P(B)
                </label>
                <p style={{
                  fontSize: '14px',
                  color: '#718096',
                  marginBottom: '12px'
                }}>
                  Probability of B occurring
                </p>
                <input
                  type="text"
                  placeholder="e.g., 0.5"
                  value={pB}
                  onChange={(e) => handlePBChange(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px',
                    fontSize: '18px',
                    border: errors.pB ? '2px solid #e53e3e' : '2px solid #e2e8f0',
                    borderRadius: '8px',
                    outline: 'none',
                    boxSizing: 'border-box'
                  }}
                />
                {errors.pB && (
                  <div style={{
                    color: '#e53e3e',
                    fontSize: '13px',
                    marginTop: '8px',
                    fontWeight: '500'
                  }}>
                    {errors.pB}
                  </div>
                )}
              </div>

              <div style={{
                display: 'flex',
                gap: '16px'
              }}>
                <button
                  onClick={calculate}
                  disabled={!canCalculate}
                  style={{
                    flex: 1,
                    background: canCalculate ? '#245de1' : '#cbd5e0',
                    color: 'white',
                    border: 'none',
                    padding: '16px',
                    fontSize: '18px',
                    fontWeight: '600',
                    borderRadius: '8px',
                    cursor: canCalculate ? 'pointer' : 'not-allowed'
                  }}
                >
                  Calculate
                </button>
                <button
                  onClick={reset}
                  style={{
                    flex: 1,
                    background: 'white',
                    color: '#245de1',
                    border: '2px solid #245de1',
                    padding: '16px',
                    fontSize: '18px',
                    fontWeight: '600',
                    borderRadius: '8px',
                    cursor: 'pointer'
                  }}
                >
                  Reset
                </button>
              </div>
            </div>

            {results && (
              <div>
                <div style={{
                  display: 'grid',
                  gap: '16px'
                }}>
                  {resultFields.map(({ key, label, desc }) => (
                    <div key={key} style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#f8f9fa',
                      padding: '20px',
                      borderRadius: '12px',
                      border: '2px solid #e2e8f0'
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: '18px', fontWeight: '600', color: '#2d3748', marginBottom: '4px' }}>
                          {label}
                        </div>
                        <div style={{ fontSize: '14px', color: '#718096' }}>
                          {desc}
                        </div>
                      </div>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#245de1',
                        marginRight: '20px',
                        minWidth: '100px',
                        textAlign: 'right'
                      }}>
                        {results[key].toFixed(4)}
                      </div>
                      <VennDiagram type={key} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}