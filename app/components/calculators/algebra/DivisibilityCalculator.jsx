import React, { useState } from 'react';

function DivisibilityCalculator({ explanations }) {
  const [number, setNumber] = useState('');
  const [divisor, setDivisor] = useState('');
  const [result, setResult] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [mode, setMode] = useState('single');
  const [commonResults, setCommonResults] = useState({});

  const handleNumberChange = (value) => {
    setNumber(value);
    setResult('');
  };

  const handleDivisorChange = (value) => {
    setDivisor(value);
    setResult('');
  };

  const checkDivisibility = () => {
    const num = parseFloat(number);
    const div = parseFloat(divisor);

    if (isNaN(num) || !Number.isInteger(num)) {
      setResult('Error: Enter a valid integer');
      return;
    }

    if (mode === 'single') {
      if (isNaN(div) || !Number.isInteger(div) || div === 0) {
        setResult('Error: Enter a valid divisor (non-zero integer)');
        return;
      }

      const isDivisible = num % div === 0;
      if (isDivisible) {
        setResult(`Yes, ${num} is divisible by ${div}. Result: ${num / div}`);
      } else {
        setResult(`No, ${num} is not divisible by ${div}. Remainder: ${num % div}`);
      }
    } else {
      // Common divisors mode
      const divisors = [2, 3, 4, 5, 6, 8, 9, 10, 12];
      const results = {};
      
      divisors.forEach(d => {
        results[d] = num % d === 0;
      });
      
      setCommonResults(results);
      setResult('Divisibility check complete');
    }
  };

  const resetAll = () => {
    setNumber('');
    setDivisor('');
    setResult('');
    setCommonResults({});
  };

  const processContent = (text) => text;

  const defaultExplanations = {
    single: {
      text: "Check if one number divides evenly into another. If the remainder is 0, the number is divisible. For example, 12 ÷ 3 = 4 with remainder 0, so 12 is divisible by 3."
      // links: [
      //   { title: "Factoring Calculator", link: "/calculators/factoring-calculator" },
      //   { title: "Modulo Calculator", link: "/calculators/modulo-calculator" }
      // ]
    },
    common: {
      text: "Test divisibility by common numbers (2, 3, 4, 5, 6, 8, 9, 10, 12) all at once. Useful for quick factorability checks and understanding number properties."
      // links: [
      //   { title: "Prime Number Checker", link: "/calculators/prime-checker" },
      //   { title: "Factoring Calculator", link: "/calculators/factoring-calculator" }
      // ]
    }
  };

  const displayExplanations = explanations || defaultExplanations;

  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    }}>
      {/* Main Calculator Container */}
      <div style={{
        flex: '1',
        maxWidth: '450px',
        backgroundColor: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '2px solid #e2e8f0'
      }}>
        {/* Mode Selection */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            marginBottom: '12px',
            fontWeight: '600',
            color: '#1e293b',
            fontSize: '14px',
            letterSpacing: '0.01em'
          }}>
            Check Mode
          </label>
          
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {[
              { value: 'single', label: 'Single Divisor' },
              { value: 'common', label: 'Common Divisors' }
            ].map((option) => (
              <React.Fragment key={option.value}>
                <input
                  type="radio"
                  id={`mode-${option.value}`}
                  name="mode"
                  value={option.value}
                  checked={mode === option.value}
                  onChange={(e) => {
                    setMode(e.target.value);
                    setResult('');
                    setCommonResults({});
                  }}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor={`mode-${option.value}`}
                  style={{
                    cursor: 'pointer',
                    color: mode === option.value ? '#ffffff' : '#475569',
                    fontSize: '15px',
                    padding: '10px 20px',
                    border: '2px solid',
                    borderColor: mode === option.value ? '#3498db' : '#cbd5e1',
                    borderRadius: '8px',
                    backgroundColor: mode === option.value ? '#3498db' : '#ffffff',
                    transition: 'all 0.2s',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    if (mode !== option.value) {
                      e.target.style.borderColor = '#3498db';
                      e.target.style.backgroundColor = '#f8fafc';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (mode !== option.value) {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.backgroundColor = '#ffffff';
                    }
                  }}
                >
                  {option.label}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Calculator Body */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{
            backgroundColor: '#f8fafc',
            border: '2px solid #e2e8f0',
            borderLeft: '4px solid #3498db',
            padding: '20px',
            borderRadius: '8px'
          }}>
            {/* Number Input */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '600',
                color: '#1e293b',
                fontSize: '14px'
              }}>
                Number to Check
              </label>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => handleNumberChange(e.target.value)}
                  placeholder="Enter a number"
                  style={{
                    flex: '1',
                    padding: '11px 14px',
                    border: '2px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'all 0.2s',
                    outline: 'none',
                    backgroundColor: '#ffffff'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                />
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    backgroundColor: '#e2e8f0',
                    color: '#64748b',
                    borderRadius: '50%',
                    fontSize: '12px',
                    fontWeight: '600',
                    cursor: 'help',
                    flexShrink: '0'
                  }}
                  onMouseEnter={() => setActiveTooltip('number')}
                  onMouseLeave={() => setActiveTooltip(null)}
                >
                  ?
                  {activeTooltip === 'number' && (
                    <span style={{
                      position: 'absolute',
                      bottom: '28px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: '#1e293b',
                      color: '#ffffff',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '13px',
                      whiteSpace: 'nowrap',
                      zIndex: '1000',
                      pointerEvents: 'none'
                    }}>
                      Enter the number to test
                      <span style={{
                        content: '',
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        border: '5px solid transparent',
                        borderTopColor: '#1e293b'
                      }} />
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Divisor Input - Only for Single Mode */}
            {mode === 'single' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '600',
                  color: '#1e293b',
                  fontSize: '14px'
                }}>
                  Divide By
                </label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <input
                    type="text"
                    value={divisor}
                    onChange={(e) => handleDivisorChange(e.target.value)}
                    placeholder="Enter divisor"
                    style={{
                      flex: '1',
                      padding: '11px 14px',
                      border: '2px solid #cbd5e1',
                      borderRadius: '8px',
                      fontSize: '16px',
                      transition: 'all 0.2s',
                      outline: 'none',
                      backgroundColor: '#ffffff'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#3498db'}
                    onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                  />
                  <span
                    style={{
                      position: 'relative',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '20px',
                      height: '20px',
                      backgroundColor: '#e2e8f0',
                      color: '#64748b',
                      borderRadius: '50%',
                      fontSize: '12px',
                      fontWeight: '600',
                      cursor: 'help',
                      flexShrink: '0'
                    }}
                    onMouseEnter={() => setActiveTooltip('divisor')}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    ?
                    {activeTooltip === 'divisor' && (
                      <span style={{
                        position: 'absolute',
                        bottom: '28px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#1e293b',
                        color: '#ffffff',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        zIndex: '1000',
                        pointerEvents: 'none'
                      }}>
                        Enter the divisor
                        <span style={{
                          content: '',
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          border: '5px solid transparent',
                          borderTopColor: '#1e293b'
                        }} />
                      </span>
                    )}
                  </span>
                </div>
              </div>
            )}

            {/* Result Display */}
            {mode === 'single' ? (
              <div style={{
                marginTop: '20px',
                padding: '16px',
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                border: '2px solid #cbd5e1',
                minHeight: '60px'
              }}>
                <div style={{
                  fontSize: '15px',
                  color: result.includes('Error') ? '#ef4444' : result.includes('Yes') ? '#10b981' : result.includes('No') ? '#f59e0b' : '#64748b',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  {result || 'Result will appear here'}
                </div>
              </div>
            ) : (
              Object.keys(commonResults).length > 0 && (
                <div style={{
                  marginTop: '20px',
                  backgroundColor: '#ffffff',
                  borderRadius: '6px',
                  border: '2px solid #cbd5e1',
                  padding: '16px'
                }}>
                  <div style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '12px'
                  }}>
                    Divisibility Results:
                  </div>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px'
                  }}>
                    {Object.entries(commonResults).map(([div, isDivisible]) => (
                      <div
                        key={div}
                        style={{
                          padding: '8px',
                          borderRadius: '4px',
                          fontSize: '13px',
                          textAlign: 'center',
                          backgroundColor: isDivisible ? '#d1fae5' : '#fee2e2',
                          color: isDivisible ? '#065f46' : '#991b1b',
                          fontWeight: '500'
                        }}
                      >
                        {div}: {isDivisible ? '✓' : '✗'}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px'
        }}>
          <button
            onClick={checkDivisibility}
            style={{
              flex: '1',
              padding: '14px 24px',
              border: '2px solid #3498db',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              outline: 'none',
              backgroundColor: '#3498db',
              color: '#ffffff'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2980b9';
              e.target.style.borderColor = '#2980b9';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#3498db';
              e.target.style.borderColor = '#3498db';
            }}
          >
            Check
          </button>
          <button
            onClick={resetAll}
            style={{
              flex: '1',
              padding: '14px 24px',
              border: '2px solid #cbd5e1',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s',
              outline: 'none',
              backgroundColor: '#ffffff',
              color: '#64748b'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f8fafc';
              e.target.style.borderColor = '#94a3b8';
              e.target.style.color = '#475569';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.borderColor = '#cbd5e1';
              e.target.style.color = '#64748b';
            }}
          >
            Reset
          </button>
        </div>
      </div>

      {/* Explanation Panel - Right Side */}
      {displayExplanations && displayExplanations[mode] && (
        <div style={{
          flex: '1',
          maxWidth: '400px',
          alignSelf: 'flex-start',
          position: 'sticky',
          top: '20px'
        }}>
          <div style={{
            backgroundColor: '#f8fafc',
            padding: '24px',
            borderRadius: '12px',
            border: '2px solid #e2e8f0',
            borderLeft: '4px solid #3498db'
          }}>
            <div style={{
              color: '#475569',
              fontSize: '15px',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              {processContent(displayExplanations[mode].text)}
            </div>
            
            {displayExplanations[mode].links && (
              <div style={{
                borderTop: '2px solid #e2e8f0',
                paddingTop: '16px'
              }}>
                <p style={{
                  fontWeight: '600',
                  color: '#1e293b',
                  fontSize: '14px',
                  margin: '0 0 12px 0'
                }}>
                  Learn more:
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {displayExplanations[mode].links.map((link, index) => (
                    <li key={index} style={{ marginBottom: '8px' }}>
                      <a
                        href={link.link}
                        rel="noopener noreferrer"
                        style={{
                          color: '#3498db',
                          textDecoration: 'none',
                          fontSize: '14px',
                          transition: 'color 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = '#2980b9';
                          e.target.style.textDecoration = 'underline';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = '#3498db';
                          e.target.style.textDecoration = 'none';
                        }}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default DivisibilityCalculator;