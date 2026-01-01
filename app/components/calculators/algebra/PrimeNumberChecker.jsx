import React, { useState } from 'react';

function PrimeNumberChecker({ explanations }) {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const [factors, setFactors] = useState([]);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [mode, setMode] = useState('check');

  const handleNumberChange = (value) => {
    setNumber(value);
    setResult('');
    setFactors([]);
  };

  const isPrime = (num) => {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const getFactors = (num) => {
    const factorsList = [];
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        factorsList.push(i);
      }
    }
    return factorsList;
  };

  const getPrimeFactors = (num) => {
    const primeFactorsList = [];
    let n = num;
    
    for (let i = 2; i <= n; i++) {
      while (n % i === 0) {
        primeFactorsList.push(i);
        n = n / i;
      }
    }
    return primeFactorsList;
  };

  const checkPrime = () => {
    const num = parseFloat(number);

    if (isNaN(num) || !Number.isInteger(num) || num < 1) {
      setResult('Error: Enter a positive integer');
      setFactors([]);
      return;
    }

    const prime = isPrime(num);

    if (prime) {
      setResult(`${num} is a PRIME number`);
      setFactors([1, num]);
    } else {
      setResult(`${num} is NOT a prime number (composite)`);
      
      if (mode === 'detailed') {
        const allFactors = getFactors(num);
        setFactors(allFactors);
      }
    }
  };

  const resetAll = () => {
    setNumber('');
    setResult('');
    setFactors([]);
  };

  const processContent = (text) => text;

  const defaultExplanations = {
    check: {
      text: "A prime number has exactly two factors: 1 and itself. This checker tests if your number can be divided by any number other than 1 and itself. Numbers less than 2 are not considered prime."
      // links: [
      //   { title: "Factoring Calculator", link: "/calculators/factoring-calculator" },
      //   { title: "List of Prime Numbers", link: "/reference/prime-numbers" }
      // ]
    },
    detailed: {
      text: "Detailed mode shows all factors when a number is composite (not prime). This helps you understand why a number isn't prime and see what divides into it evenly."
      // links: [
      //   { title: "Factoring Calculator", link: "/calculators/factoring-calculator" },
      //   { title: "Divisibility Calculator", link: "/calculators/divisibility-calculator" }
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
              { value: 'check', label: 'Quick Check' },
              { value: 'detailed', label: 'Show Factors' }
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
                    setFactors([]);
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
                Enter Number to Check
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
                  placeholder="Enter a positive integer"
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
                      Enter a positive integer
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

            {/* Result Display */}
            <div style={{
              marginTop: '20px',
              padding: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              border: '2px solid #cbd5e1',
              minHeight: '60px'
            }}>
              <div style={{
                fontSize: '16px',
                color: result.includes('Error') ? '#ef4444' : result.includes('PRIME') ? '#10b981' : result.includes('NOT') ? '#f59e0b' : '#64748b',
                textAlign: 'center',
                fontWeight: '600'
              }}>
                {result || 'Result will appear here'}
              </div>
            </div>

            {/* Factors Display */}
            {factors.length > 0 && (
              <div style={{
                marginTop: '16px',
                padding: '16px',
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                border: '2px solid #cbd5e1'
              }}>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '8px'
                }}>
                  Factors:
                </div>
                <div style={{
                  fontSize: '15px',
                  color: '#475569',
                  lineHeight: '1.8'
                }}>
                  {factors.join(', ')}
                </div>
                {factors.length > 2 && (
                  <div style={{
                    fontSize: '13px',
                    color: '#64748b',
                    marginTop: '8px',
                    fontStyle: 'italic'
                  }}>
                    {factors.length} factors found (composite number)
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px'
        }}>
          <button
            onClick={checkPrime}
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

export default PrimeNumberChecker;