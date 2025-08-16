import React, { useState, useEffect, useCallback, useMemo } from 'react';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('BaseConverter Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '20px',
          background: '#f8d7da',
          border: '1px solid #f5c6cb',
          borderRadius: '4px',
          color: '#721c24'
        }}>
          <h3>Something went wrong</h3>
          <p>Please refresh the page and try again.</p>
          <button 
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              padding: '8px 16px',
              background: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Input sanitization
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  // Remove any characters that aren't alphanumeric, minus sign, or whitespace
  return input.replace(/[^a-zA-Z0-9\-\s]/g, '').trim();
};

// Debounce hook
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const BaseConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [inputBase, setInputBase] = useState(10);
  const [outputBase, setOutputBase] = useState(2);
  const [customInputBase, setCustomInputBase] = useState('');
  const [customOutputBase, setCustomOutputBase] = useState('');
  const [useCustomInput, setUseCustomInput] = useState(false);
  const [useCustomOutput, setUseCustomOutput] = useState(false);
  const [useTwosComplement, setUseTwosComplement] = useState(false);
  const [bitWidth, setBitWidth] = useState(8);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Debounce input value to prevent excessive calculations
  const debouncedInputValue = useDebounce(inputValue, 300);

  const commonBases = useMemo(() => [
    { value: 2, name: 'Binary' },
    { value: 8, name: 'Octal' },
    { value: 10, name: 'Decimal' },
    { value: 16, name: 'Hexadecimal' },
  ], []);

  const getBaseCharacters = useCallback((base) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars.slice(0, base);
  }, []);

  const isValidForBase = useCallback((value, base) => {
    if (!value) return true;
    
    const isNegative = value.startsWith('-');
    const absoluteValue = isNegative ? value.slice(1) : value;
    
    if (!absoluteValue) return false;
    
    const validChars = getBaseCharacters(base).toLowerCase();
    return absoluteValue.toLowerCase().split('').every(char => validChars.includes(char));
  }, [getBaseCharacters]);

  const toDecimal = useCallback((value, fromBase) => {
    if (!value) return 0;
    
    let decimal = 0;
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const valueUpper = value.toUpperCase();
    
    for (let i = 0; i < valueUpper.length; i++) {
      const digit = chars.indexOf(valueUpper[i]);
      if (digit === -1 || digit >= fromBase) {
        throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
      }
      decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
    }
    
    return decimal;
  }, []);

  const fromDecimal = useCallback((decimal, toBase) => {
    if (decimal === 0) return '0';
    
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    let num = Math.abs(decimal);
    
    while (num > 0) {
      result = chars[num % toBase] + result;
      num = Math.floor(num / toBase);
    }
    
    return result;
  }, []);

  const convertBase = useCallback((value, fromBase, toBase) => {
    try {
      if (!value.trim()) return '';
      
      const isNegative = value.startsWith('-');
      const absoluteValue = isNegative ? value.slice(1) : value;
      
      if (!isValidForBase(value, fromBase)) {
        throw new Error(`Invalid input for base ${fromBase}`);
      }
      
      const decimal = toDecimal(absoluteValue, fromBase);
      
      // Handle two's complement for negative numbers
      if (isNegative && useTwosComplement) {
        // Check if number fits in the bit width
        const minValue = -Math.pow(2, bitWidth - 1);
        const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
        if (-decimal < minValue || -decimal > maxValue) {
          throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range (${minValue} to ${maxValue})`);
        }
        
        const maxValue2 = Math.pow(2, bitWidth);
        const twosCompValue = maxValue2 + (-decimal);
        return fromDecimal(twosCompValue, toBase);
      }
      
      // Check positive numbers for two's complement mode too
      if (!isNegative && useTwosComplement) {
        const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
        if (decimal > maxValue) {
          throw new Error(`Number ${decimal} cannot fit in ${bitWidth}-bit signed range (-${Math.pow(2, bitWidth - 1)} to ${maxValue})`);
        }
      }
      
      // Regular conversion
      const converted = fromDecimal(decimal, toBase);
      return isNegative ? '-' + converted : converted;
      
    } catch (err) {
      throw err;
    }
  }, [isValidForBase, toDecimal, fromDecimal, useTwosComplement, bitWidth]);

  const performConversion = useCallback(async () => {
    try {
      setIsLoading(true);
      setError('');
      
      const sanitizedInput = sanitizeInput(debouncedInputValue);
      
      const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
      const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

      if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
        throw new Error('Input base must be between 2 and 36');
      }
      if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
        throw new Error('Output base must be between 2 and 36');
      }

      if (!sanitizedInput.trim()) {
        setResult('');
        return;
      }

      // Simulate async operation for loading state
      await new Promise(resolve => setTimeout(resolve, 50));

      const converted = convertBase(sanitizedInput.trim(), fromBase, toBase);
      setResult(converted);
    } catch (err) {
      setError(err.message);
      setResult('');
    } finally {
      setIsLoading(false);
    }
  }, [debouncedInputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, convertBase]);

  useEffect(() => {
    performConversion();
  }, [performConversion]);

  const quickConversions = useMemo(() => [
    { from: 10, to: 2, label: 'Dec → Bin' },
    { from: 2, to: 10, label: 'Bin → Dec' },
    { from: 10, to: 16, label: 'Dec → Hex' },
    { from: 16, to: 10, label: 'Hex → Dec' },
    { from: 2, to: 16, label: 'Bin → Hex' },
    { from: 16, to: 2, label: 'Hex → Bin' },
  ], []);

  const handleQuickConversion = useCallback((from, to) => {
    setUseCustomInput(false);
    setUseCustomOutput(false);
    setInputBase(from);
    setOutputBase(to);
  }, []);

  const handleInputChange = useCallback((e) => {
    const sanitized = sanitizeInput(e.target.value);
    setInputValue(sanitized);
  }, []);

  const copyResult = useCallback(() => {
    if (result) {
      navigator.clipboard.writeText(result).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = result;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      });
    }
  }, [result]);

  return (
    <ErrorBoundary>
      <div style={{ 
        minHeight: '100vh', 
        background: '#f8f9fa',
        padding: '20px',
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          background: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e9ecef'
        }}>
          <header style={{
            background: '#2c3e50',
            color: 'white',
            padding: '32px',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px'
          }}>
            {/* <h1 style={{ margin: '0 0 8px 0', fontSize: '2.2rem', fontWeight: '600' }}>
              Base Converter
            </h1> */}
            <p style={{ margin: 0, opacity: 0.8, fontSize: '1rem' }}>
              Convert between any number bases from 2 to 36
            </p>
          </header>

          <main style={{ padding: '32px' }}>
            <section style={{ marginBottom: '32px' }}>
              <h2 style={{ marginBottom: '16px', color: '#2c3e50', fontSize: '1.1rem', fontWeight: '600' }}>Quick Conversions</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                gap: '12px' 
              }}>
                {quickConversions.map((conv, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickConversion(conv.from, conv.to)}
                    aria-label={`Convert from base ${conv.from} to base ${conv.to}`}
                    style={{
                      padding: '12px 16px',
                      border: '1px solid #3498db',
                      borderRadius: '4px',
                      background: '#3498db',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.background = '#2980b9'}
                    onMouseOut={(e) => e.target.style.background = '#3498db'}
                  >
                    {conv.label}
                  </button>
                ))}
              </div>
            </section>

            <section style={{ 
              background: '#f8f9fa', 
              padding: '24px', 
              borderRadius: '6px', 
              marginBottom: '24px',
              border: '1px solid #dee2e6'
            }}>
              <h2 style={{ marginBottom: '20px', color: '#2c3e50', fontSize: '1.1rem', fontWeight: '600' }}>Input</h2>
              
              <div style={{ marginBottom: '20px' }}>
                <label htmlFor="input-value" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#495057' }}>
                  Value to convert:
                </label>
                <input
                  id="input-value"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder="Enter number to convert..."
                  aria-describedby="input-help"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    transition: 'border-color 0.2s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3498db'}
                  onBlur={(e) => e.target.style.borderColor = '#ced4da'}
                />
                <div id="input-help" style={{ fontSize: '0.8rem', color: '#6c757d', marginTop: '4px' }}>
                  Enter numbers using valid characters for the selected base
                </div>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontWeight: '500', color: '#495057' }}>
                  <input
                    type="checkbox"
                    checked={useCustomInput}
                    onChange={(e) => setUseCustomInput(e.target.checked)}
                    aria-describedby="custom-input-help"
                    style={{ marginRight: '8px' }}
                  />
                  Use custom base
                </label>
                <div id="custom-input-help" style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                  Check to specify a custom base between 2 and 36
                </div>
              </div>

              {useCustomInput ? (
                <input
                  type="number"
                  min="2"
                  max="36"
                  value={customInputBase}
                  onChange={(e) => setCustomInputBase(e.target.value)}
                  placeholder="Enter base (2-36)"
                  aria-label="Custom input base"
                  style={{
                    width: '200px',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    boxSizing: 'border-box'
                  }}
                />
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }} role="group" aria-label="Input base selection">
                  {commonBases.map((base) => (
                    <button
                      key={base.value}
                      onClick={() => setInputBase(base.value)}
                      aria-pressed={inputBase === base.value}
                      style={{
                        padding: '12px 16px',
                        border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
                        borderRadius: '4px',
                        background: inputBase === base.value ? '#3498db' : 'white',
                        color: inputBase === base.value ? 'white' : '#495057',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {base.name} ({base.value})
                    </button>
                  ))}
                </div>
              )}
            </section>

            <section style={{ 
              background: '#f8f9fa', 
              padding: '24px', 
              borderRadius: '6px', 
              marginBottom: '24px',
              border: '1px solid #dee2e6'
            }}>
              <h2 style={{ marginBottom: '20px', color: '#2c3e50', fontSize: '1.1rem', fontWeight: '600' }}>Output</h2>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontWeight: '500', color: '#495057' }}>
                  <input
                    type="checkbox"
                    checked={useCustomOutput}
                    onChange={(e) => setUseCustomOutput(e.target.checked)}
                    style={{ marginRight: '8px' }}
                  />
                  Use custom base
                </label>
              </div>

              {useCustomOutput ? (
                <input
                  type="number"
                  min="2"
                  max="36"
                  value={customOutputBase}
                  onChange={(e) => setCustomOutputBase(e.target.value)}
                  placeholder="Enter base (2-36)"
                  aria-label="Custom output base"
                  style={{
                    width: '200px',
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    marginBottom: '20px',
                    boxSizing: 'border-box'
                  }}
                />
              ) : (
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                  gap: '12px',
                  marginBottom: '20px'
                }} role="group" aria-label="Output base selection">
                  {commonBases.map((base) => (
                    <button
                      key={base.value}
                      onClick={() => setOutputBase(base.value)}
                      aria-pressed={outputBase === base.value}
                      style={{
                        padding: '12px 16px',
                        border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
                        borderRadius: '4px',
                        background: outputBase === base.value ? '#3498db' : 'white',
                        color: outputBase === base.value ? 'white' : '#495057',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {base.name} ({base.value})
                    </button>
                  ))}
                </div>
              )}

              <div style={{ marginBottom: '20px', padding: '16px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontWeight: '500', color: '#ef6c00' }}>
                  <input
                    type="checkbox"
                    checked={useTwosComplement}
                    onChange={(e) => setUseTwosComplement(e.target.checked)}
                    aria-describedby="twos-complement-help"
                    style={{ marginRight: '8px' }}
                  />
                  Use Two's Complement for negative numbers
                </label>
                <div id="twos-complement-help" style={{ fontSize: '0.8rem', color: '#bf6000', marginBottom: '8px' }}>
                  Represents negative numbers using two's complement notation
                </div>
                
                {useTwosComplement && (
                  <div style={{ marginTop: '12px' }}>
                    <label htmlFor="bit-width" style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
                      Bit Width:
                    </label>
                    <select
                      id="bit-width"
                      value={bitWidth}
                      onChange={(e) => setBitWidth(parseInt(e.target.value))}
                      aria-describedby="bit-width-help"
                      style={{
                        padding: '8px 12px',
                        border: '1px solid #ffb74d',
                        borderRadius: '4px',
                        fontSize: '0.9rem',
                        background: 'white'
                      }}
                    >
                      <option value={4}>4-bit</option>
                      <option value={8}>8-bit</option>
                      <option value={16}>16-bit</option>
                      <option value={32}>32-bit</option>
                    </select>
                    <div id="bit-width-help" style={{ fontSize: '0.8rem', color: '#bf6000', marginTop: '4px' }}>
                      Determines the range of numbers that can be represented
                    </div>
                  </div>
                )}
              </div>

              <div style={{
                background: '#ffffff',
                border: '2px solid #e9ecef',
                borderRadius: '4px',
                padding: '16px',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '1.1rem',
                fontWeight: '500',
                fontFamily: 'monospace'
              }}>
                <div style={{ flex: 1, wordBreak: 'break-all' }}>
                  {isLoading ? (
                    <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Converting...</span>
                  ) : error ? (
                    <span style={{ color: '#dc3545' }} role="alert">{error}</span>
                  ) : result ? (
                    <span style={{ color: '#28a745' }}>{result}</span>
                  ) : (
                    <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
                  )}
                </div>
                {result && (
                  <button
                    onClick={copyResult}
                    aria-label="Copy result to clipboard"
                    style={{
                      marginLeft: '12px',
                      padding: '8px 12px',
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    Copy
                  </button>
                )}
              </div>
            </section>

            <section style={{ 
              background: '#e3f2fd', 
              padding: '20px', 
              borderRadius: '6px',
              border: '1px solid #bbdefb'
            }}>
              <h3 style={{ margin: '0 0 12px 0', color: '#1976d2', fontSize: '1rem', fontWeight: '600' }}>Information</h3>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#424242', lineHeight: '1.5', fontSize: '0.9rem' }}>
                <li>Supports all bases from 2 to 36</li>
                <li>Uses digits 0-9 and letters A-Z for bases above 10</li>
                <li>Negative numbers: Default uses sign-magnitude (minus sign)</li>
                <li>Two's complement option available for computer-style negative representation</li>
                <li>Input is case-insensitive</li>
              </ul>
            </section>

            {(useCustomInput || useCustomOutput) && (
              <section style={{ 
                background: '#fff3e0', 
                padding: '16px', 
                borderRadius: '6px',
                marginTop: '16px',
                border: '1px solid #ffcc02'
              }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#ef6c00', fontSize: '0.95rem', fontWeight: '600' }}>Character Reference:</h4>
                <p style={{ 
                  fontFamily: 'monospace', 
                  fontSize: '0.85rem', 
                  margin: 0, 
                  color: '#424242',
                  letterSpacing: '2px'
                }}>
                  0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
                </p>
              </section>
            )}
          </main>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default BaseConverter;