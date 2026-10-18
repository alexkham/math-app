import React, { useState } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

// prime factorization for the step display: [[prime, exponent], ...]; null when the number is too large for trial division
const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹' };
const sup = (e) => String(e).split('').map((c) => SUP[c]).join('');
function factorize(n) {
  if (n > 1e12) return null;
  const out = [];
  let m = n;
  for (let p = 2; p * p <= m; p += (p === 2 ? 1 : 2)) {
    let e = 0;
    while (m % p === 0) { m /= p; e += 1; }
    if (e) out.push([p, e]);
  }
  if (m > 1) out.push([m, 1]);
  return out;
}
const showFactors = (f) => (f.length === 0 ? '1' : f.map(([p, e]) => (e === 1 ? String(p) : p + sup(e))).join(' · '));

function LCMCalculator({ explanations }) {
  const [numbers, setNumbers] = useState(['', '']);
  const [result, setResult] = useState('');
  const [details, setDetails] = useState([]);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [method, setMethod] = useState('prime');

  const handleNumberChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);
    // an answer for the old numbers must not stay on screen
    setResult('');
    setDetails([]);
  };

  const addNumberField = () => {
    if (numbers.length < 6) {
      setNumbers([...numbers, '']);
    }
  };

  const removeNumberField = (index) => {
    if (numbers.length > 2) {
      const newNumbers = numbers.filter((_, i) => i !== index);
      setNumbers(newNumbers);
      setResult('');
      setDetails([]);
    }
  };

  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const lcm = (a, b) => {
    return Math.abs(a * b) / gcd(a, b);
  };

  const calculateLCM = () => {
    // every filled box must hold a positive whole number; blank boxes are skipped
    const entries = numbers.map((n) => String(n).trim()).filter((s) => s !== '');
    const bad = entries.find((s) => !/^\d+$/.test(s) || Number(s) === 0);
    if (bad !== undefined) {
      setDetails([]);
      setResult(`Error: "${bad}" is not a positive whole number`);
      return;
    }
    const validNumbers = entries.map(Number);

    if (validNumbers.length < 2) {
      setDetails([]);
      setResult('Error: Enter at least 2 valid integers');
      return;
    }

    let lcmResult = validNumbers[0];
    const chain = [];
    for (let i = 1; i < validNumbers.length; i++) {
      const g = gcd(lcmResult, validNumbers[i]);
      const next = lcm(lcmResult, validNumbers[i]);
      chain.push(`LCM(${lcmResult}, ${validNumbers[i]}) = ${lcmResult} × ${validNumbers[i]} / GCF(${lcmResult}, ${validNumbers[i]}) = ${lcmResult * validNumbers[i]} / ${g} = ${next}`);
      lcmResult = next;
    }
    if (!Number.isSafeInteger(lcmResult)) {
      setDetails([]);
      setResult('Error: The result is too large to show exactly');
      return;
    }

    let lines = [];
    if (method === 'prime') {
      const facs = validNumbers.map(factorize);
      if (facs.every((f) => f !== null)) {
        const best = {};
        facs.forEach((f) => f.forEach(([p, e]) => { best[p] = Math.max(best[p] || 0, e); }));
        const merged = Object.keys(best).map(Number).sort((a, b) => a - b).map((p) => [p, best[p]]);
        lines = validNumbers.map((n, k) => `${n} = ${showFactors(facs[k])}`);
        lines.push(`Highest power of each prime: ${showFactors(merged)} = ${lcmResult}`);
      } else {
        lines = ['A number above 10¹² is too large to factor here; the result was found with GCF.'];
      }
    } else {
      lines = chain;
    }
    setDetails(lines);
    setResult(lcmResult.toString());
  };

  const resetAll = () => {
    setNumbers(['', '']);
    setResult('');
    setDetails([]);
  };

  // page texts (explanations prop) are rendered with the site's processContent; the built-in defaults stay plain text

  const defaultExplanations = {
    prime: {
      text: "The prime factorization method finds LCM by breaking each number into prime factors, then taking the highest power of each prime that appears. This gives you the smallest number divisible by all inputs."
      // links: [
      //   { title: "GCF Calculator", link: "/calculators/gcf-calculator" },
      //   { title: "Factoring Calculator", link: "/algebra/calculators/factoring" }
      // ]
    },
    formula: {
      text: "The formula method uses LCM(a,b) = (a × b) / GCF(a,b). For multiple numbers, apply this formula repeatedly. This method is efficient and works well for any set of numbers."
      // links: [
      //   { title: "GCF Calculator", link: "/calculators/gcf-calculator" }
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
        {/* Method Selection */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            display: 'block',
            marginBottom: '12px',
            fontWeight: '600',
            color: '#1e293b',
            fontSize: '14px',
            letterSpacing: '0.01em'
          }}>
            Calculation Method
          </label>
          
          <div style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            {[
              { value: 'prime', label: 'Prime Factorization' },
              { value: 'formula', label: 'GCF Formula' }
            ].map((option) => (
              <React.Fragment key={option.value}>
                <input
                  type="radio"
                  id={`method-${option.value}`}
                  name="method"
                  value={option.value}
                  checked={method === option.value}
                  onChange={(e) => setMethod(e.target.value)}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor={`method-${option.value}`}
                  style={{
                    cursor: 'pointer',
                    color: method === option.value ? '#ffffff' : '#475569',
                    fontSize: '15px',
                    padding: '10px 20px',
                    border: '2px solid',
                    borderColor: method === option.value ? '#3498db' : '#cbd5e1',
                    borderRadius: '8px',
                    backgroundColor: method === option.value ? '#3498db' : '#ffffff',
                    transition: 'all 0.2s',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    if (method !== option.value) {
                      e.target.style.borderColor = '#3498db';
                      e.target.style.backgroundColor = '#f8fafc';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (method !== option.value) {
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
            <label style={{
              display: 'block',
              marginBottom: '12px',
              fontWeight: '600',
              color: '#1e293b',
              fontSize: '14px'
            }}>
              Enter Numbers (2-6)
            </label>

            {numbers.map((num, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flex: '1'
                }}>
                  <input
                    type="text"
                    value={num}
                    onChange={(e) => handleNumberChange(index, e.target.value)}
                    placeholder={`Number ${index + 1}`}
                    style={{
                      width: '100%',
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
                    onMouseEnter={() => setActiveTooltip(`num${index}`)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    ?
                    {activeTooltip === `num${index}` && (
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
                        Enter an integer
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
                
                {numbers.length > 2 && (
                  <button
                    onClick={() => removeNumberField(index)}
                    style={{
                      padding: '8px 12px',
                      border: '2px solid #ef4444',
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      backgroundColor: '#ffffff',
                      color: '#ef4444',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#fef2f2';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#ffffff';
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
            ))}

            {numbers.length < 6 && (
              <button
                onClick={addNumberField}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '2px dashed #cbd5e1',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  backgroundColor: '#f8fafc',
                  color: '#64748b',
                  transition: 'all 0.2s',
                  marginTop: '8px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#3498db';
                  e.target.style.color = '#3498db';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#cbd5e1';
                  e.target.style.color = '#64748b';
                }}
              >
                + Add Number
              </button>
            )}

            <div style={{
              marginTop: '20px',
              padding: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              border: '2px solid #cbd5e1'
            }}>
              <div style={{
                fontSize: '14px',
                color: '#64748b',
                marginBottom: '8px',
                fontWeight: '500'
              }}>
                LCM Result:
              </div>
              <div style={{
                fontSize: '24px',
                fontWeight: '600',
                color: result.includes('Error') ? '#ef4444' : '#0c4a6e',
                textAlign: 'center'
              }}>
                {result || '—'}
              </div>
              {details.length > 0 && (
                <div style={{ marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #e2e8f0', fontSize: '14px', color: '#475569', lineHeight: 1.6, textAlign: 'left' }}>
                  {details.map((line, i) => (<div key={i}>{line}</div>))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px'
        }}>
          <button
            onClick={calculateLCM}
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
            Calculate
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
      {displayExplanations && displayExplanations[method] && (
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
              {explanations && typeof displayExplanations[method].text === 'string' ? processContent(displayExplanations[method].text) : displayExplanations[method].text}
            </div>
            
            {displayExplanations[method].links && (
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
                  {displayExplanations[method].links.map((link, index) => (
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

export default LCMCalculator;