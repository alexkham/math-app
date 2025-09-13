// // // // // // // // import React, { useState, useEffect, useCallback, useMemo } from 'react';

// // // // // // // // // Error Boundary Component
// // // // // // // // class ErrorBoundary extends React.Component {
// // // // // // // //   constructor(props) {
// // // // // // // //     super(props);
// // // // // // // //     this.state = { hasError: false, error: null };
// // // // // // // //   }

// // // // // // // //   static getDerivedStateFromError(error) {
// // // // // // // //     return { hasError: true, error };
// // // // // // // //   }

// // // // // // // //   componentDidCatch(error, errorInfo) {
// // // // // // // //     console.error('BaseConverter Error:', error, errorInfo);
// // // // // // // //   }

// // // // // // // //   render() {
// // // // // // // //     if (this.state.hasError) {
// // // // // // // //       return (
// // // // // // // //         <div style={{
// // // // // // // //           padding: '20px',
// // // // // // // //           background: '#f8d7da',
// // // // // // // //           border: '1px solid #f5c6cb',
// // // // // // // //           borderRadius: '4px',
// // // // // // // //           color: '#721c24'
// // // // // // // //         }}>
// // // // // // // //           <h3>Something went wrong</h3>
// // // // // // // //           <p>Please refresh the page and try again.</p>
// // // // // // // //           <button 
// // // // // // // //             onClick={() => this.setState({ hasError: false, error: null })}
// // // // // // // //             style={{
// // // // // // // //               padding: '8px 16px',
// // // // // // // //               background: '#dc3545',
// // // // // // // //               color: 'white',
// // // // // // // //               border: 'none',
// // // // // // // //               borderRadius: '4px',
// // // // // // // //               cursor: 'pointer'
// // // // // // // //             }}
// // // // // // // //           >
// // // // // // // //             Try Again
// // // // // // // //           </button>
// // // // // // // //         </div>
// // // // // // // //       );
// // // // // // // //     }

// // // // // // // //     return this.props.children;
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // // Input sanitization
// // // // // // // // const sanitizeInput = (input) => {
// // // // // // // //   if (typeof input !== 'string') return '';
// // // // // // // //   // Remove any characters that aren't alphanumeric, minus sign, or whitespace
// // // // // // // //   return input.replace(/[^a-zA-Z0-9\-\s]/g, '').trim();
// // // // // // // // };

// // // // // // // // // Debounce hook
// // // // // // // // const useDebounce = (value, delay) => {
// // // // // // // //   const [debouncedValue, setDebouncedValue] = useState(value);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handler = setTimeout(() => {
// // // // // // // //       setDebouncedValue(value);
// // // // // // // //     }, delay);

// // // // // // // //     return () => {
// // // // // // // //       clearTimeout(handler);
// // // // // // // //     };
// // // // // // // //   }, [value, delay]);

// // // // // // // //   return debouncedValue;
// // // // // // // // };

// // // // // // // // const BaseConverter = () => {
// // // // // // // //   const [inputValue, setInputValue] = useState('');
// // // // // // // //   const [inputBase, setInputBase] = useState(10);
// // // // // // // //   const [outputBase, setOutputBase] = useState(2);
// // // // // // // //   const [customInputBase, setCustomInputBase] = useState('');
// // // // // // // //   const [customOutputBase, setCustomOutputBase] = useState('');
// // // // // // // //   const [useCustomInput, setUseCustomInput] = useState(false);
// // // // // // // //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// // // // // // // //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// // // // // // // //   const [bitWidth, setBitWidth] = useState(8);
// // // // // // // //   const [result, setResult] = useState('');
// // // // // // // //   const [error, setError] = useState('');
// // // // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // // // //   // Debounce input value to prevent excessive calculations
// // // // // // // //   const debouncedInputValue = useDebounce(inputValue, 300);

// // // // // // // //   const commonBases = useMemo(() => [
// // // // // // // //     { value: 2, name: 'Binary' },
// // // // // // // //     { value: 8, name: 'Octal' },
// // // // // // // //     { value: 10, name: 'Decimal' },
// // // // // // // //     { value: 16, name: 'Hexadecimal' },
// // // // // // // //   ], []);

// // // // // // // //   const getBaseCharacters = useCallback((base) => {
// // // // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // // //     return chars.slice(0, base);
// // // // // // // //   }, []);

// // // // // // // //   const isValidForBase = useCallback((value, base) => {
// // // // // // // //     if (!value) return true;
    
// // // // // // // //     const isNegative = value.startsWith('-');
// // // // // // // //     const absoluteValue = isNegative ? value.slice(1) : value;
    
// // // // // // // //     if (!absoluteValue) return false;
    
// // // // // // // //     const validChars = getBaseCharacters(base).toLowerCase();
// // // // // // // //     return absoluteValue.toLowerCase().split('').every(char => validChars.includes(char));
// // // // // // // //   }, [getBaseCharacters]);

// // // // // // // //   const toDecimal = useCallback((value, fromBase) => {
// // // // // // // //     if (!value) return 0;
    
// // // // // // // //     let decimal = 0;
// // // // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // // //     const valueUpper = value.toUpperCase();
    
// // // // // // // //     for (let i = 0; i < valueUpper.length; i++) {
// // // // // // // //       const digit = chars.indexOf(valueUpper[i]);
// // // // // // // //       if (digit === -1 || digit >= fromBase) {
// // // // // // // //         throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// // // // // // // //       }
// // // // // // // //       decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// // // // // // // //     }
    
// // // // // // // //     return decimal;
// // // // // // // //   }, []);

// // // // // // // //   const fromDecimal = useCallback((decimal, toBase) => {
// // // // // // // //     if (decimal === 0) return '0';
    
// // // // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // // //     let result = '';
// // // // // // // //     let num = Math.abs(decimal);
    
// // // // // // // //     while (num > 0) {
// // // // // // // //       result = chars[num % toBase] + result;
// // // // // // // //       num = Math.floor(num / toBase);
// // // // // // // //     }
    
// // // // // // // //     return result;
// // // // // // // //   }, []);

// // // // // // // //   const convertBase = useCallback((value, fromBase, toBase) => {
// // // // // // // //     try {
// // // // // // // //       if (!value.trim()) return '';
      
// // // // // // // //       const isNegative = value.startsWith('-');
// // // // // // // //       const absoluteValue = isNegative ? value.slice(1) : value;
      
// // // // // // // //       if (!isValidForBase(value, fromBase)) {
// // // // // // // //         throw new Error(`Invalid input for base ${fromBase}`);
// // // // // // // //       }
      
// // // // // // // //       const decimal = toDecimal(absoluteValue, fromBase);
      
// // // // // // // //       // Handle two's complement for negative numbers
// // // // // // // //       if (isNegative && useTwosComplement) {
// // // // // // // //         // Check if number fits in the bit width
// // // // // // // //         const minValue = -Math.pow(2, bitWidth - 1);
// // // // // // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // // // // // //         if (-decimal < minValue || -decimal > maxValue) {
// // // // // // // //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range (${minValue} to ${maxValue})`);
// // // // // // // //         }
        
// // // // // // // //         const maxValue2 = Math.pow(2, bitWidth);
// // // // // // // //         const twosCompValue = maxValue2 + (-decimal);
// // // // // // // //         return fromDecimal(twosCompValue, toBase);
// // // // // // // //       }
      
// // // // // // // //       // Check positive numbers for two's complement mode too
// // // // // // // //       if (!isNegative && useTwosComplement) {
// // // // // // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // // // // // //         if (decimal > maxValue) {
// // // // // // // //           throw new Error(`Number ${decimal} cannot fit in ${bitWidth}-bit signed range (-${Math.pow(2, bitWidth - 1)} to ${maxValue})`);
// // // // // // // //         }
// // // // // // // //       }
      
// // // // // // // //       // Regular conversion
// // // // // // // //       const converted = fromDecimal(decimal, toBase);
// // // // // // // //       return isNegative ? '-' + converted : converted;
      
// // // // // // // //     } catch (err) {
// // // // // // // //       throw err;
// // // // // // // //     }
// // // // // // // //   }, [isValidForBase, toDecimal, fromDecimal, useTwosComplement, bitWidth]);

// // // // // // // //   const performConversion = useCallback(async () => {
// // // // // // // //     try {
// // // // // // // //       setIsLoading(true);
// // // // // // // //       setError('');
      
// // // // // // // //       const sanitizedInput = sanitizeInput(debouncedInputValue);
      
// // // // // // // //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// // // // // // // //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// // // // // // // //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// // // // // // // //         throw new Error('Input base must be between 2 and 36');
// // // // // // // //       }
// // // // // // // //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// // // // // // // //         throw new Error('Output base must be between 2 and 36');
// // // // // // // //       }

// // // // // // // //       if (!sanitizedInput.trim()) {
// // // // // // // //         setResult('');
// // // // // // // //         return;
// // // // // // // //       }

// // // // // // // //       // Simulate async operation for loading state
// // // // // // // //       await new Promise(resolve => setTimeout(resolve, 50));

// // // // // // // //       const converted = convertBase(sanitizedInput.trim(), fromBase, toBase);
// // // // // // // //       setResult(converted);
// // // // // // // //     } catch (err) {
// // // // // // // //       setError(err.message);
// // // // // // // //       setResult('');
// // // // // // // //     } finally {
// // // // // // // //       setIsLoading(false);
// // // // // // // //     }
// // // // // // // //   }, [debouncedInputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, convertBase]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     performConversion();
// // // // // // // //   }, [performConversion]);

// // // // // // // //   const quickConversions = useMemo(() => [
// // // // // // // //     { from: 10, to: 2, label: 'Dec → Bin' },
// // // // // // // //     { from: 2, to: 10, label: 'Bin → Dec' },
// // // // // // // //     { from: 10, to: 16, label: 'Dec → Hex' },
// // // // // // // //     { from: 16, to: 10, label: 'Hex → Dec' },
// // // // // // // //     { from: 2, to: 16, label: 'Bin → Hex' },
// // // // // // // //     { from: 16, to: 2, label: 'Hex → Bin' },
// // // // // // // //   ], []);

// // // // // // // //   const handleQuickConversion = useCallback((from, to) => {
// // // // // // // //     setUseCustomInput(false);
// // // // // // // //     setUseCustomOutput(false);
// // // // // // // //     setInputBase(from);
// // // // // // // //     setOutputBase(to);
// // // // // // // //   }, []);

// // // // // // // //   const handleInputChange = useCallback((e) => {
// // // // // // // //     const sanitized = sanitizeInput(e.target.value);
// // // // // // // //     setInputValue(sanitized);
// // // // // // // //   }, []);

// // // // // // // //   const copyResult = useCallback(() => {
// // // // // // // //     if (result) {
// // // // // // // //       navigator.clipboard.writeText(result).catch(() => {
// // // // // // // //         // Fallback for older browsers
// // // // // // // //         const textArea = document.createElement('textarea');
// // // // // // // //         textArea.value = result;
// // // // // // // //         document.body.appendChild(textArea);
// // // // // // // //         textArea.select();
// // // // // // // //         document.execCommand('copy');
// // // // // // // //         document.body.removeChild(textArea);
// // // // // // // //       });
// // // // // // // //     }
// // // // // // // //   }, [result]);

// // // // // // // //   return (
// // // // // // // //     <ErrorBoundary>
// // // // // // // //       <div style={{ 
// // // // // // // //         minHeight: '100vh', 
// // // // // // // //         background: '#f8f9fa',
// // // // // // // //         padding: '20px',
// // // // // // // //         fontFamily: 'system-ui, -apple-system, sans-serif'
// // // // // // // //       }}>
// // // // // // // //         <div style={{
// // // // // // // //           maxWidth: '900px',
// // // // // // // //           margin: '0 auto',
// // // // // // // //           background: '#ffffff',
// // // // // // // //           borderRadius: '8px',
// // // // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // // // // //           border: '1px solid #e9ecef'
// // // // // // // //         }}>
// // // // // // // //           <header style={{
// // // // // // // //             background: '#2c3e50',
// // // // // // // //             color: 'white',
// // // // // // // //             padding: '32px',
// // // // // // // //             borderTopLeftRadius: '8px',
// // // // // // // //             borderTopRightRadius: '8px'
// // // // // // // //           }}>
// // // // // // // //             <h1 style={{ margin: '0 0 8px 0', fontSize: '2.2rem', fontWeight: '600' }}>
// // // // // // // //               Base Converter
// // // // // // // //             </h1>
// // // // // // // //             <p style={{ margin: 0, opacity: 0.8, fontSize: '1rem' }}>
// // // // // // // //               Convert between any number bases from 2 to 36
// // // // // // // //             </p>
// // // // // // // //           </header>

// // // // // // // //           <main style={{ padding: '32px' }}>
// // // // // // // //             <section style={{ marginBottom: '32px' }}>
// // // // // // // //               <h2 style={{ marginBottom: '16px', color: '#2c3e50', fontSize: '1.1rem', fontWeight: '600' }}>Quick Conversions</h2>
// // // // // // // //               <div style={{ 
// // // // // // // //                 display: 'grid', 
// // // // // // // //                 gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
// // // // // // // //                 gap: '12px' 
// // // // // // // //               }}>
// // // // // // // //                 {quickConversions.map((conv, index) => (
// // // // // // // //                   <button
// // // // // // // //                     key={index}
// // // // // // // //                     onClick={() => handleQuickConversion(conv.from, conv.to)}
// // // // // // // //                     aria-label={`Convert from base ${conv.from} to base ${conv.to}`}
// // // // // // // //                     style={{
// // // // // // // //                       padding: '12px 16px',
// // // // // // // //                       border: '1px solid #3498db',
// // // // // // // //                       borderRadius: '4px',
// // // // // // // //                       background: '#3498db',
// // // // // // // //                       color: 'white',
// // // // // // // //                       cursor: 'pointer',
// // // // // // // //                       fontSize: '0.9rem',
// // // // // // // //                       fontWeight: '500',
// // // // // // // //                       transition: 'all 0.2s ease'
// // // // // // // //                     }}
// // // // // // // //                     onMouseOver={(e) => e.target.style.background = '#2980b9'}
// // // // // // // //                     onMouseOut={(e) => e.target.style.background = '#3498db'}
// // // // // // // //                   >
// // // // // // // //                     {conv.label}
// // // // // // // //                   </button>
// // // // // // // //                 ))}
// // // // // // // //               </div>
// // // // // // // //             </section>

// // // // // // // //             <section style={{ 
// // // // // // // //               background: '#f8f9fa', 
// // // // // // // //               padding: '24px', 
// // // // // // // //               borderRadius: '6px', 
// // // // // // // //               marginBottom: '24px',
// // // // // // // //               border: '1px solid #dee2e6'
// // // // // // // //             }}>
// // // // // // // //               <h2 style={{ marginBottom: '20px', color: '#2c3e50', fontSize: '1.1rem', fontWeight: '600' }}>Input</h2>
              
// // // // // // // //               <div style={{ marginBottom: '20px' }}>
// // // // // // // //                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: '#495057' }}>
// // // // // // // //                   Value to convert:
// // // // // // // //                 </label>
// // // // // // // //                 <input
// // // // // // // //                   id="input-value"
// // // // // // // //                   type="text"
// // // // // // // //                   value={inputValue}
// // // // // // // //                   onChange={handleInputChange}
// // // // // // // //                   placeholder="Enter number to convert..."
// // // // // // // //                   aria-describedby="input-help"
// // // // // // // //                   style={{
// // // // // // // //                     width: '100%',
// // // // // // // //                     padding: '12px',
// // // // // // // //                     border: '1px solid #ced4da',
// // // // // // // //                     borderRadius: '4px',
// // // // // // // //                     fontSize: '1rem',
// // // // // // // //                     transition: 'border-color 0.2s ease',
// // // // // // // //                     boxSizing: 'border-box'
// // // // // // // //                   }}
// // // // // // // //                   onFocus={(e) => e.target.style.borderColor = '#3498db'}
// // // // // // // //                   onBlur={(e) => e.target.style.borderColor = '#ced4da'}
// // // // // // // //                 />
// // // // // // // //                 <div id="input-help" style={{ fontSize: '0.8rem', color: '#6c757d', marginTop: '4px' }}>
// // // // // // // //                   Enter numbers using valid characters for the selected base
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               <div style={{ marginBottom: '15px' }}>
// // // // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontWeight: '500', color: '#495057' }}>
// // // // // // // //                   <input
// // // // // // // //                     type="checkbox"
// // // // // // // //                     checked={useCustomInput}
// // // // // // // //                     onChange={(e) => setUseCustomInput(e.target.checked)}
// // // // // // // //                     aria-describedby="custom-input-help"
// // // // // // // //                     style={{ marginRight: '8px' }}
// // // // // // // //                   />
// // // // // // // //                   Use custom base
// // // // // // // //                 </label>
// // // // // // // //                 <div id="custom-input-help" style={{ fontSize: '0.8rem', color: '#6c757d' }}>
// // // // // // // //                   Check to specify a custom base between 2 and 36
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {useCustomInput ? (
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="2"
// // // // // // // //                   max="36"
// // // // // // // //                   value={customInputBase}
// // // // // // // //                   onChange={(e) => setCustomInputBase(e.target.value)}
// // // // // // // //                   placeholder="Enter base (2-36)"
// // // // // // // //                   aria-label="Custom input base"
// // // // // // // //                   style={{
// // // // // // // //                     width: '200px',
// // // // // // // //                     padding: '10px',
// // // // // // // //                     border: '1px solid #ced4da',
// // // // // // // //                     borderRadius: '4px',
// // // // // // // //                     fontSize: '1rem',
// // // // // // // //                     boxSizing: 'border-box'
// // // // // // // //                   }}
// // // // // // // //                 />
// // // // // // // //               ) : (
// // // // // // // //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px' }} role="group" aria-label="Input base selection">
// // // // // // // //                   {commonBases.map((base) => (
// // // // // // // //                     <button
// // // // // // // //                       key={base.value}
// // // // // // // //                       onClick={() => setInputBase(base.value)}
// // // // // // // //                       aria-pressed={inputBase === base.value}
// // // // // // // //                       style={{
// // // // // // // //                         padding: '12px 16px',
// // // // // // // //                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // // // //                         borderRadius: '4px',
// // // // // // // //                         background: inputBase === base.value ? '#3498db' : 'white',
// // // // // // // //                         color: inputBase === base.value ? 'white' : '#495057',
// // // // // // // //                         cursor: 'pointer',
// // // // // // // //                         fontSize: '0.9rem',
// // // // // // // //                         fontWeight: '500',
// // // // // // // //                         transition: 'all 0.2s ease'
// // // // // // // //                       }}
// // // // // // // //                     >
// // // // // // // //                       {base.name} ({base.value})
// // // // // // // //                     </button>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </section>

// // // // // // // //             <section style={{ 
// // // // // // // //               background: '#f8f9fa', 
// // // // // // // //               padding: '24px', 
// // // // // // // //               borderRadius: '6px', 
// // // // // // // //               marginBottom: '24px',
// // // // // // // //               border: '1px solid #dee2e6'
// // // // // // // //             }}>
// // // // // // // //               <h2 style={{ marginBottom: '20px', color: '#2c3e50', fontSize: '1.1rem', fontWeight: '600' }}>Output</h2>

// // // // // // // //               <div style={{ marginBottom: '15px' }}>
// // // // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontWeight: '500', color: '#495057' }}>
// // // // // // // //                   <input
// // // // // // // //                     type="checkbox"
// // // // // // // //                     checked={useCustomOutput}
// // // // // // // //                     onChange={(e) => setUseCustomOutput(e.target.checked)}
// // // // // // // //                     style={{ marginRight: '8px' }}
// // // // // // // //                   />
// // // // // // // //                   Use custom base
// // // // // // // //                 </label>
// // // // // // // //               </div>

// // // // // // // //               {useCustomOutput ? (
// // // // // // // //                 <input
// // // // // // // //                   type="number"
// // // // // // // //                   min="2"
// // // // // // // //                   max="36"
// // // // // // // //                   value={customOutputBase}
// // // // // // // //                   onChange={(e) => setCustomOutputBase(e.target.value)}
// // // // // // // //                   placeholder="Enter base (2-36)"
// // // // // // // //                   aria-label="Custom output base"
// // // // // // // //                   style={{
// // // // // // // //                     width: '200px',
// // // // // // // //                     padding: '10px',
// // // // // // // //                     border: '1px solid #ced4da',
// // // // // // // //                     borderRadius: '4px',
// // // // // // // //                     fontSize: '1rem',
// // // // // // // //                     marginBottom: '20px',
// // // // // // // //                     boxSizing: 'border-box'
// // // // // // // //                   }}
// // // // // // // //                 />
// // // // // // // //               ) : (
// // // // // // // //                 <div style={{ 
// // // // // // // //                   display: 'grid', 
// // // // // // // //                   gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
// // // // // // // //                   gap: '12px',
// // // // // // // //                   marginBottom: '20px'
// // // // // // // //                 }} role="group" aria-label="Output base selection">
// // // // // // // //                   {commonBases.map((base) => (
// // // // // // // //                     <button
// // // // // // // //                       key={base.value}
// // // // // // // //                       onClick={() => setOutputBase(base.value)}
// // // // // // // //                       aria-pressed={outputBase === base.value}
// // // // // // // //                       style={{
// // // // // // // //                         padding: '12px 16px',
// // // // // // // //                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // // // //                         borderRadius: '4px',
// // // // // // // //                         background: outputBase === base.value ? '#3498db' : 'white',
// // // // // // // //                         color: outputBase === base.value ? 'white' : '#495057',
// // // // // // // //                         cursor: 'pointer',
// // // // // // // //                         fontSize: '0.9rem',
// // // // // // // //                         fontWeight: '500',
// // // // // // // //                         transition: 'all 0.2s ease'
// // // // // // // //                       }}
// // // // // // // //                     >
// // // // // // // //                       {base.name} ({base.value})
// // // // // // // //                     </button>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               <div style={{ marginBottom: '20px', padding: '16px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// // // // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', fontWeight: '500', color: '#ef6c00' }}>
// // // // // // // //                   <input
// // // // // // // //                     type="checkbox"
// // // // // // // //                     checked={useTwosComplement}
// // // // // // // //                     onChange={(e) => setUseTwosComplement(e.target.checked)}
// // // // // // // //                     aria-describedby="twos-complement-help"
// // // // // // // //                     style={{ marginRight: '8px' }}
// // // // // // // //                   />
// // // // // // // //                   Use Two's Complement for negative numbers
// // // // // // // //                 </label>
// // // // // // // //                 <div id="twos-complement-help" style={{ fontSize: '0.8rem', color: '#bf6000', marginBottom: '8px' }}>
// // // // // // // //                   Represents negative numbers using two's complement notation
// // // // // // // //                 </div>
                
// // // // // // // //                 {useTwosComplement && (
// // // // // // // //                   <div style={{ marginTop: '12px' }}>
// // // // // // // //                     <label htmlFor="bit-width" style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// // // // // // // //                       Bit Width:
// // // // // // // //                     </label>
// // // // // // // //                     <select
// // // // // // // //                       id="bit-width"
// // // // // // // //                       value={bitWidth}
// // // // // // // //                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
// // // // // // // //                       aria-describedby="bit-width-help"
// // // // // // // //                       style={{
// // // // // // // //                         padding: '8px 12px',
// // // // // // // //                         border: '1px solid #ffb74d',
// // // // // // // //                         borderRadius: '4px',
// // // // // // // //                         fontSize: '0.9rem',
// // // // // // // //                         background: 'white'
// // // // // // // //                       }}
// // // // // // // //                     >
// // // // // // // //                       <option value={4}>4-bit</option>
// // // // // // // //                       <option value={8}>8-bit</option>
// // // // // // // //                       <option value={16}>16-bit</option>
// // // // // // // //                       <option value={32}>32-bit</option>
// // // // // // // //                     </select>
// // // // // // // //                     <div id="bit-width-help" style={{ fontSize: '0.8rem', color: '#bf6000', marginTop: '4px' }}>
// // // // // // // //                       Determines the range of numbers that can be represented
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //               </div>

// // // // // // // //               <div style={{
// // // // // // // //                 background: '#ffffff',
// // // // // // // //                 border: '2px solid #e9ecef',
// // // // // // // //                 borderRadius: '4px',
// // // // // // // //                 padding: '16px',
// // // // // // // //                 minHeight: '48px',
// // // // // // // //                 display: 'flex',
// // // // // // // //                 alignItems: 'center',
// // // // // // // //                 justifyContent: 'space-between',
// // // // // // // //                 fontSize: '1.1rem',
// // // // // // // //                 fontWeight: '500',
// // // // // // // //                 fontFamily: 'monospace'
// // // // // // // //               }}>
// // // // // // // //                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
// // // // // // // //                   {isLoading ? (
// // // // // // // //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Converting...</span>
// // // // // // // //                   ) : error ? (
// // // // // // // //                     <span style={{ color: '#dc3545' }} role="alert">{error}</span>
// // // // // // // //                   ) : result ? (
// // // // // // // //                     <span style={{ color: '#28a745' }}>{result}</span>
// // // // // // // //                   ) : (
// // // // // // // //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// // // // // // // //                   )}
// // // // // // // //                 </div>
// // // // // // // //                 {result && (
// // // // // // // //                   <button
// // // // // // // //                     onClick={copyResult}
// // // // // // // //                     aria-label="Copy result to clipboard"
// // // // // // // //                     style={{
// // // // // // // //                       marginLeft: '12px',
// // // // // // // //                       padding: '8px 12px',
// // // // // // // //                       background: '#28a745',
// // // // // // // //                       color: 'white',
// // // // // // // //                       border: 'none',
// // // // // // // //                       borderRadius: '4px',
// // // // // // // //                       cursor: 'pointer',
// // // // // // // //                       fontSize: '0.8rem',
// // // // // // // //                       fontWeight: '500'
// // // // // // // //                     }}
// // // // // // // //                   >
// // // // // // // //                     Copy
// // // // // // // //                   </button>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             </section>

// // // // // // // //             <section style={{ 
// // // // // // // //               background: '#e3f2fd', 
// // // // // // // //               padding: '20px', 
// // // // // // // //               borderRadius: '6px',
// // // // // // // //               border: '1px solid #bbdefb'
// // // // // // // //             }}>
// // // // // // // //               <h3 style={{ margin: '0 0 12px 0', color: '#1976d2', fontSize: '1rem', fontWeight: '600' }}>Information</h3>
// // // // // // // //               <ul style={{ margin: 0, paddingLeft: '20px', color: '#424242', lineHeight: '1.5', fontSize: '0.9rem' }}>
// // // // // // // //                 <li>Supports all bases from 2 to 36</li>
// // // // // // // //                 <li>Uses digits 0-9 and letters A-Z for bases above 10</li>
// // // // // // // //                 <li>Negative numbers: Default uses sign-magnitude (minus sign)</li>
// // // // // // // //                 <li>Two's complement option available for computer-style negative representation</li>
// // // // // // // //                 <li>Input is case-insensitive</li>
// // // // // // // //               </ul>
// // // // // // // //             </section>

// // // // // // // //             {(useCustomInput || useCustomOutput) && (
// // // // // // // //               <section style={{ 
// // // // // // // //                 background: '#fff3e0', 
// // // // // // // //                 padding: '16px', 
// // // // // // // //                 borderRadius: '6px',
// // // // // // // //                 marginTop: '16px',
// // // // // // // //                 border: '1px solid #ffcc02'
// // // // // // // //               }}>
// // // // // // // //                 <h4 style={{ margin: '0 0 8px 0', color: '#ef6c00', fontSize: '0.95rem', fontWeight: '600' }}>Character Reference:</h4>
// // // // // // // //                 <p style={{ 
// // // // // // // //                   fontFamily: 'monospace', 
// // // // // // // //                   fontSize: '0.85rem', 
// // // // // // // //                   margin: 0, 
// // // // // // // //                   color: '#424242',
// // // // // // // //                   letterSpacing: '2px'
// // // // // // // //                 }}>
// // // // // // // //                   0 1 2 3 4 5 6 7 8 9 A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// // // // // // // //                 </p>
// // // // // // // //               </section>
// // // // // // // //             )}
// // // // // // // //           </main>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </ErrorBoundary>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default BaseConverter;


// // // // // // // // // import React, { useState, useEffect, useCallback, useMemo } from 'react';

// // // // // // // // // // Error Boundary Component
// // // // // // // // // class ErrorBoundary extends React.Component {
// // // // // // // // //   constructor(props) {
// // // // // // // // //     super(props);
// // // // // // // // //     this.state = { hasError: false, error: null };
// // // // // // // // //   }

// // // // // // // // //   static getDerivedStateFromError(error) {
// // // // // // // // //     return { hasError: true, error };
// // // // // // // // //   }

// // // // // // // // //   componentDidCatch(error, errorInfo) {
// // // // // // // // //     console.error('BaseConverter Error:', error, errorInfo);
// // // // // // // // //   }

// // // // // // // // //   render() {
// // // // // // // // //     if (this.state.hasError) {
// // // // // // // // //       return (
// // // // // // // // //         <div style={{
// // // // // // // // //           padding: '20px',
// // // // // // // // //           background: '#f8d7da',
// // // // // // // // //           border: '1px solid #f5c6cb',
// // // // // // // // //           borderRadius: '4px',
// // // // // // // // //           color: '#721c24'
// // // // // // // // //         }}>
// // // // // // // // //           <h3>Something went wrong</h3>
// // // // // // // // //           <p>Please refresh the page and try again.</p>
// // // // // // // // //           <button 
// // // // // // // // //             onClick={() => this.setState({ hasError: false, error: null })}
// // // // // // // // //             style={{
// // // // // // // // //               padding: '8px 16px',
// // // // // // // // //               background: '#dc3545',
// // // // // // // // //               color: 'white',
// // // // // // // // //               border: 'none',
// // // // // // // // //               borderRadius: '4px',
// // // // // // // // //               cursor: 'pointer'
// // // // // // // // //             }}
// // // // // // // // //           >
// // // // // // // // //             Try Again
// // // // // // // // //           </button>
// // // // // // // // //         </div>
// // // // // // // // //       );
// // // // // // // // //     }

// // // // // // // // //     return this.props.children;
// // // // // // // // //   }
// // // // // // // // // }

// // // // // // // // // // Input sanitization - removed to fix typing issues
// // // // // // // // // const sanitizeInput = (input) => {
// // // // // // // // //   if (typeof input !== 'string') return '';
// // // // // // // // //   return input;
// // // // // // // // // };

// // // // // // // // // // Debounce hook
// // // // // // // // // const useDebounce = (value, delay) => {
// // // // // // // // //   const [debouncedValue, setDebouncedValue] = useState(value);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handler = setTimeout(() => {
// // // // // // // // //       setDebouncedValue(value);
// // // // // // // // //     }, delay);

// // // // // // // // //     return () => {
// // // // // // // // //       clearTimeout(handler);
// // // // // // // // //     };
// // // // // // // // //   }, [value, delay]);

// // // // // // // // //   return debouncedValue;
// // // // // // // // // };

// // // // // // // // // const BaseConverter = () => {
// // // // // // // // //   const [inputValue, setInputValue] = useState('');
// // // // // // // // //   const [inputBase, setInputBase] = useState(10);
// // // // // // // // //   const [outputBase, setOutputBase] = useState(2);
// // // // // // // // //   const [customInputBase, setCustomInputBase] = useState('');
// // // // // // // // //   const [customOutputBase, setCustomOutputBase] = useState('');
// // // // // // // // //   const [useCustomInput, setUseCustomInput] = useState(false);
// // // // // // // // //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// // // // // // // // //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// // // // // // // // //   const [bitWidth, setBitWidth] = useState(8);
// // // // // // // // //   const [result, setResult] = useState('');
// // // // // // // // //   const [error, setError] = useState('');
// // // // // // // // //   const [isLoading, setIsLoading] = useState(false);

// // // // // // // // //   const debouncedInputValue = useDebounce(inputValue, 300);

// // // // // // // // //   const commonBases = useMemo(() => [
// // // // // // // // //     { value: 2, name: 'Binary' },
// // // // // // // // //     { value: 8, name: 'Octal' },
// // // // // // // // //     { value: 10, name: 'Decimal' },
// // // // // // // // //     { value: 16, name: 'Hexadecimal' },
// // // // // // // // //   ], []);

// // // // // // // // //   const getBaseCharacters = useCallback((base) => {
// // // // // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // // // //     return chars.slice(0, base);
// // // // // // // // //   }, []);

// // // // // // // // //   const isValidForBase = useCallback((value, base) => {
// // // // // // // // //     if (!value) return true;
    
// // // // // // // // //     const isNegative = value.startsWith('-');
// // // // // // // // //     const absoluteValue = isNegative ? value.slice(1) : value;
    
// // // // // // // // //     if (!absoluteValue) return false;
    
// // // // // // // // //     const validChars = getBaseCharacters(base).toLowerCase();
// // // // // // // // //     return absoluteValue.toLowerCase().split('').every(char => validChars.includes(char));
// // // // // // // // //   }, [getBaseCharacters]);

// // // // // // // // //   const toDecimal = useCallback((value, fromBase) => {
// // // // // // // // //     if (!value) return 0;
    
// // // // // // // // //     let decimal = 0;
// // // // // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // // // //     const valueUpper = value.toUpperCase();
    
// // // // // // // // //     for (let i = 0; i < valueUpper.length; i++) {
// // // // // // // // //       const digit = chars.indexOf(valueUpper[i]);
// // // // // // // // //       if (digit === -1 || digit >= fromBase) {
// // // // // // // // //         throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// // // // // // // // //       }
// // // // // // // // //       decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// // // // // // // // //     }
    
// // // // // // // // //     return decimal;
// // // // // // // // //   }, []);

// // // // // // // // //   const fromDecimal = useCallback((decimal, toBase) => {
// // // // // // // // //     if (decimal === 0) return '0';
    
// // // // // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // // // //     let result = '';
// // // // // // // // //     let num = Math.abs(decimal);
    
// // // // // // // // //     while (num > 0) {
// // // // // // // // //       result = chars[num % toBase] + result;
// // // // // // // // //       num = Math.floor(num / toBase);
// // // // // // // // //     }
    
// // // // // // // // //     return result;
// // // // // // // // //   }, []);

// // // // // // // // //   const convertBase = useCallback((value, fromBase, toBase) => {
// // // // // // // // //     try {
// // // // // // // // //       if (!value.trim()) return '';
      
// // // // // // // // //       const isNegative = value.startsWith('-');
// // // // // // // // //       const absoluteValue = isNegative ? value.slice(1) : value;
      
// // // // // // // // //       // Validate here instead of during typing
// // // // // // // // //       const validChars = getBaseCharacters(fromBase).toLowerCase();
// // // // // // // // //       const isValid = absoluteValue.toLowerCase().split('').every(char => validChars.includes(char));
      
// // // // // // // // //       if (!isValid) {
// // // // // // // // //         throw new Error(`Invalid input for base ${fromBase}`);
// // // // // // // // //       }
      
// // // // // // // // //       const decimal = toDecimal(absoluteValue, fromBase);
      
// // // // // // // // //       if (isNegative && useTwosComplement) {
// // // // // // // // //         const minValue = -Math.pow(2, bitWidth - 1);
// // // // // // // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // // // // // // //         if (-decimal < minValue || -decimal > maxValue) {
// // // // // // // // //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range (${minValue} to ${maxValue})`);
// // // // // // // // //         }
        
// // // // // // // // //         const maxValue2 = Math.pow(2, bitWidth);
// // // // // // // // //         const twosCompValue = maxValue2 + (-decimal);
// // // // // // // // //         return fromDecimal(twosCompValue, toBase);
// // // // // // // // //       }
      
// // // // // // // // //       if (!isNegative && useTwosComplement) {
// // // // // // // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // // // // // // //         if (decimal > maxValue) {
// // // // // // // // //           throw new Error(`Number ${decimal} cannot fit in ${bitWidth}-bit signed range (-${Math.pow(2, bitWidth - 1)} to ${maxValue})`);
// // // // // // // // //         }
// // // // // // // // //       }
      
// // // // // // // // //       const converted = fromDecimal(decimal, toBase);
// // // // // // // // //       return isNegative ? '-' + converted : converted;
      
// // // // // // // // //     } catch (err) {
// // // // // // // // //       throw err;
// // // // // // // // //     }
// // // // // // // // //   }, [getBaseCharacters, toDecimal, fromDecimal, useTwosComplement, bitWidth]);

// // // // // // // // //   const performConversion = useCallback(async () => {
// // // // // // // // //     try {
// // // // // // // // //       setIsLoading(true);
// // // // // // // // //       setError('');
      
// // // // // // // // //       const sanitizedInput = sanitizeInput(debouncedInputValue);
      
// // // // // // // // //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// // // // // // // // //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// // // // // // // // //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// // // // // // // // //         throw new Error('Input base must be between 2 and 36');
// // // // // // // // //       }
// // // // // // // // //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// // // // // // // // //         throw new Error('Output base must be between 2 and 36');
// // // // // // // // //       }

// // // // // // // // //       if (!sanitizedInput.trim()) {
// // // // // // // // //         setResult('');
// // // // // // // // //         return;
// // // // // // // // //       }

// // // // // // // // //       await new Promise(resolve => setTimeout(resolve, 50));

// // // // // // // // //       const converted = convertBase(sanitizedInput.trim(), fromBase, toBase);
// // // // // // // // //       setResult(converted);
// // // // // // // // //     } catch (err) {
// // // // // // // // //       setError(err.message);
// // // // // // // // //       setResult('');
// // // // // // // // //     } finally {
// // // // // // // // //       setIsLoading(false);
// // // // // // // // //     }
// // // // // // // // //   }, [debouncedInputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, convertBase]);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     performConversion();
// // // // // // // // //   }, [performConversion]);

// // // // // // // // //   const quickConversions = useMemo(() => [
// // // // // // // // //     { from: 10, to: 2, label: 'Dec → Bin' },
// // // // // // // // //     { from: 2, to: 10, label: 'Bin → Dec' },
// // // // // // // // //     { from: 10, to: 16, label: 'Dec → Hex' },
// // // // // // // // //     { from: 16, to: 10, label: 'Hex → Dec' },
// // // // // // // // //     { from: 2, to: 16, label: 'Bin → Hex' },
// // // // // // // // //     { from: 16, to: 2, label: 'Hex → Bin' },
// // // // // // // // //   ], []);

// // // // // // // // //   const handleQuickConversion = useCallback((from, to) => {
// // // // // // // // //     setUseCustomInput(false);
// // // // // // // // //     setUseCustomOutput(false);
// // // // // // // // //     setInputBase(from);
// // // // // // // // //     setOutputBase(to);
// // // // // // // // //   }, []);

// // // // // // // // //   const handleInputChange = useCallback((e) => {
// // // // // // // // //     setInputValue(e.target.value);
// // // // // // // // //   }, []);

// // // // // // // // //   const copyResult = useCallback(() => {
// // // // // // // // //     if (result) {
// // // // // // // // //       navigator.clipboard.writeText(result).catch(() => {
// // // // // // // // //         const textArea = document.createElement('textarea');
// // // // // // // // //         textArea.value = result;
// // // // // // // // //         document.body.appendChild(textArea);
// // // // // // // // //         textArea.select();
// // // // // // // // //         document.execCommand('copy');
// // // // // // // // //         document.body.removeChild(textArea);
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //   }, [result]);

// // // // // // // // //   const resetAll = useCallback(() => {
// // // // // // // // //     setInputValue('');
// // // // // // // // //     setInputBase(10);
// // // // // // // // //     setOutputBase(2);
// // // // // // // // //     setCustomInputBase('');
// // // // // // // // //     setCustomOutputBase('');
// // // // // // // // //     setUseCustomInput(false);
// // // // // // // // //     setUseCustomOutput(false);
// // // // // // // // //     setUseTwosComplement(false);
// // // // // // // // //     setBitWidth(8);
// // // // // // // // //     setResult('');
// // // // // // // // //     setError('');
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <ErrorBoundary>
// // // // // // // // //       <div style={{ 
// // // // // // // // //         height: '100vh', 
// // // // // // // // //         background: '#f8f9fa',
// // // // // // // // //         padding: '16px',
// // // // // // // // //         fontFamily: 'system-ui, -apple-system, sans-serif',
// // // // // // // // //         overflow: 'hidden'
// // // // // // // // //       }}>
// // // // // // // // //         <div style={{
// // // // // // // // //           height: '100%',
// // // // // // // // //           maxWidth: '1200px',
// // // // // // // // //           margin: '0 auto',
// // // // // // // // //           background: '#ffffff',
// // // // // // // // //           borderRadius: '8px',
// // // // // // // // //           boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // // // // // //           border: '1px solid #e9ecef',
// // // // // // // // //           display: 'flex',
// // // // // // // // //           flexDirection: 'column'
// // // // // // // // //         }}>
// // // // // // // // //           <header style={{
// // // // // // // // //             background: '#2c3e50',
// // // // // // // // //             color: 'white',
// // // // // // // // //             padding: '16px 24px',
// // // // // // // // //             borderTopLeftRadius: '8px',
// // // // // // // // //             borderTopRightRadius: '8px',
// // // // // // // // //             flexShrink: 0
// // // // // // // // //           }}>
// // // // // // // // //             <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
// // // // // // // // //               Base Converter
// // // // // // // // //             </h1>
// // // // // // // // //             <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
// // // // // // // // //               Convert between any number bases from 2 to 36
// // // // // // // // //             </p>
// // // // // // // // //           </header>

// // // // // // // // //           <div style={{ 
// // // // // // // // //             flex: 1, 
// // // // // // // // //             display: 'flex', 
// // // // // // // // //             overflow: 'hidden'
// // // // // // // // //           }}>
// // // // // // // // //             {/* Main Content */}
// // // // // // // // //             <main style={{ 
// // // // // // // // //               flex: '2', 
// // // // // // // // //               padding: '20px', 
// // // // // // // // //               overflow: 'auto'
// // // // // // // // //             }}>
// // // // // // // // //               {/* Quick Conversions */}
// // // // // // // // //               <section style={{ marginBottom: '20px' }}>
// // // // // // // // //                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
// // // // // // // // //                   <h2 style={{ margin: 0, color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={resetAll}
// // // // // // // // //                     style={{
// // // // // // // // //                       padding: '6px 12px',
// // // // // // // // //                       border: '1px solid #dc3545',
// // // // // // // // //                       borderRadius: '4px',
// // // // // // // // //                       background: '#dc3545',
// // // // // // // // //                       color: 'white',
// // // // // // // // //                       cursor: 'pointer',
// // // // // // // // //                       fontSize: '0.8rem',
// // // // // // // // //                       fontWeight: '500'
// // // // // // // // //                     }}
// // // // // // // // //                   >
// // // // // // // // //                     Reset
// // // // // // // // //                   </button>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div style={{ 
// // // // // // // // //                   display: 'grid', 
// // // // // // // // //                   gridTemplateColumns: 'repeat(3, 1fr)', 
// // // // // // // // //                   gap: '8px' 
// // // // // // // // //                 }}>
// // // // // // // // //                   {quickConversions.map((conv, index) => (
// // // // // // // // //                     <button
// // // // // // // // //                       key={index}
// // // // // // // // //                       onClick={() => handleQuickConversion(conv.from, conv.to)}
// // // // // // // // //                       aria-label={`Convert from base ${conv.from} to base ${conv.to}`}
// // // // // // // // //                       style={{
// // // // // // // // //                         padding: '8px 12px',
// // // // // // // // //                         border: '1px solid #3498db',
// // // // // // // // //                         borderRadius: '4px',
// // // // // // // // //                         background: '#3498db',
// // // // // // // // //                         color: 'white',
// // // // // // // // //                         cursor: 'pointer',
// // // // // // // // //                         fontSize: '0.8rem',
// // // // // // // // //                         fontWeight: '500',
// // // // // // // // //                         transition: 'all 0.2s ease'
// // // // // // // // //                       }}
// // // // // // // // //                       onMouseOver={(e) => e.target.style.background = '#2980b9'}
// // // // // // // // //                       onMouseOut={(e) => e.target.style.background = '#3498db'}
// // // // // // // // //                     >
// // // // // // // // //                       {conv.label}
// // // // // // // // //                     </button>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </section>

// // // // // // // // //               {/* Input Section */}
// // // // // // // // //               <section style={{ 
// // // // // // // // //                 background: '#f8f9fa', 
// // // // // // // // //                 padding: '16px', 
// // // // // // // // //                 borderRadius: '6px', 
// // // // // // // // //                 marginBottom: '16px',
// // // // // // // // //                 border: '1px solid #dee2e6'
// // // // // // // // //               }}>
// // // // // // // // //                 <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
                
// // // // // // // // //                 <div style={{ marginBottom: '12px' }}>
// // // // // // // // //                   <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // // // // //                     Value to convert:
// // // // // // // // //                   </label>
// // // // // // // // //                   <input
// // // // // // // // //                     id="input-value"
// // // // // // // // //                     type="text"
// // // // // // // // //                     value={inputValue}
// // // // // // // // //                     onChange={handleInputChange}
// // // // // // // // //                     placeholder="Enter number to convert..."
// // // // // // // // //                     style={{
// // // // // // // // //                       width: '100%',
// // // // // // // // //                       padding: '8px 12px',
// // // // // // // // //                       border: '1px solid #ced4da',
// // // // // // // // //                       borderRadius: '4px',
// // // // // // // // //                       fontSize: '0.9rem',
// // // // // // // // //                       transition: 'border-color 0.2s ease',
// // // // // // // // //                       boxSizing: 'border-box'
// // // // // // // // //                     }}
// // // // // // // // //                     onFocus={(e) => e.target.style.borderColor = '#3498db'}
// // // // // // // // //                     onBlur={(e) => e.target.style.borderColor = '#ced4da'}
// // // // // // // // //                   />
// // // // // // // // //                 </div>

// // // // // // // // //                 <div style={{ marginBottom: '12px' }}>
// // // // // // // // //                   <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // // // // //                     <input
// // // // // // // // //                       type="checkbox"
// // // // // // // // //                       checked={useCustomInput}
// // // // // // // // //                       onChange={(e) => setUseCustomInput(e.target.checked)}
// // // // // // // // //                       style={{ marginRight: '6px' }}
// // // // // // // // //                     />
// // // // // // // // //                     Use custom base
// // // // // // // // //                   </label>
// // // // // // // // //                 </div>

// // // // // // // // //                 {useCustomInput ? (
// // // // // // // // //                   <input
// // // // // // // // //                     type="number"
// // // // // // // // //                     min="2"
// // // // // // // // //                     max="36"
// // // // // // // // //                     value={customInputBase}
// // // // // // // // //                     onChange={(e) => setCustomInputBase(e.target.value)}
// // // // // // // // //                     placeholder="Enter base (2-36)"
// // // // // // // // //                     style={{
// // // // // // // // //                       width: '140px',
// // // // // // // // //                       padding: '6px 8px',
// // // // // // // // //                       border: '1px solid #ced4da',
// // // // // // // // //                       borderRadius: '4px',
// // // // // // // // //                       fontSize: '0.9rem',
// // // // // // // // //                       boxSizing: 'border-box'
// // // // // // // // //                     }}
// // // // // // // // //                   />
// // // // // // // // //                 ) : (
// // // // // // // // //                   <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
// // // // // // // // //                     {commonBases.map((base) => (
// // // // // // // // //                       <button
// // // // // // // // //                         key={base.value}
// // // // // // // // //                         onClick={() => setInputBase(base.value)}
// // // // // // // // //                         style={{
// // // // // // // // //                           padding: '8px 12px',
// // // // // // // // //                           border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // // // // //                           borderRadius: '4px',
// // // // // // // // //                           background: inputBase === base.value ? '#3498db' : 'white',
// // // // // // // // //                           color: inputBase === base.value ? 'white' : '#495057',
// // // // // // // // //                           cursor: 'pointer',
// // // // // // // // //                           fontSize: '0.8rem',
// // // // // // // // //                           fontWeight: '500',
// // // // // // // // //                           transition: 'all 0.2s ease'
// // // // // // // // //                         }}
// // // // // // // // //                       >
// // // // // // // // //                         {base.name} ({base.value})
// // // // // // // // //                       </button>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 )}
// // // // // // // // //               </section>

// // // // // // // // //               {/* Output Section */}
// // // // // // // // //               <section style={{ 
// // // // // // // // //                 background: '#f8f9fa', 
// // // // // // // // //                 padding: '16px', 
// // // // // // // // //                 borderRadius: '6px',
// // // // // // // // //                 border: '1px solid #dee2e6'
// // // // // // // // //               }}>
// // // // // // // // //                 <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

// // // // // // // // //                 <div style={{ marginBottom: '12px' }}>
// // // // // // // // //                   <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // // // // //                     <input
// // // // // // // // //                       type="checkbox"
// // // // // // // // //                       checked={useCustomOutput}
// // // // // // // // //                       onChange={(e) => setUseCustomOutput(e.target.checked)}
// // // // // // // // //                       style={{ marginRight: '6px' }}
// // // // // // // // //                     />
// // // // // // // // //                     Use custom base
// // // // // // // // //                   </label>
// // // // // // // // //                 </div>

// // // // // // // // //                 {useCustomOutput ? (
// // // // // // // // //                   <input
// // // // // // // // //                     type="text"
// // // // // // // // //                     value={customOutputBase}
// // // // // // // // //                     onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // // // // // // //                     placeholder="Enter base (2-36)"
// // // // // // // // //                     style={{
// // // // // // // // //                       width: '140px',
// // // // // // // // //                       padding: '6px 8px',
// // // // // // // // //                       border: '1px solid #ced4da',
// // // // // // // // //                       borderRadius: '4px',
// // // // // // // // //                       fontSize: '0.9rem',
// // // // // // // // //                       marginBottom: '12px',
// // // // // // // // //                       boxSizing: 'border-box'
// // // // // // // // //                     }}
// // // // // // // // //                   />
// // // // // // // // //                 ) : (
// // // // // // // // //                   <div style={{ 
// // // // // // // // //                     display: 'grid', 
// // // // // // // // //                     gridTemplateColumns: 'repeat(2, 1fr)', 
// // // // // // // // //                     gap: '8px',
// // // // // // // // //                     marginBottom: '12px'
// // // // // // // // //                   }}>
// // // // // // // // //                     {commonBases.map((base) => (
// // // // // // // // //                       <button
// // // // // // // // //                         key={base.value}
// // // // // // // // //                         onClick={() => setOutputBase(base.value)}
// // // // // // // // //                         style={{
// // // // // // // // //                           padding: '8px 12px',
// // // // // // // // //                           border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // // // // //                           borderRadius: '4px',
// // // // // // // // //                           background: outputBase === base.value ? '#3498db' : 'white',
// // // // // // // // //                           color: outputBase === base.value ? 'white' : '#495057',
// // // // // // // // //                           cursor: 'pointer',
// // // // // // // // //                           fontSize: '0.8rem',
// // // // // // // // //                           fontWeight: '500',
// // // // // // // // //                           transition: 'all 0.2s ease'
// // // // // // // // //                         }}
// // // // // // // // //                       >
// // // // // // // // //                         {base.name} ({base.value})
// // // // // // // // //                       </button>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {/* Two's Complement */}
// // // // // // // // //                 <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// // // // // // // // //                   <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// // // // // // // // //                     <input
// // // // // // // // //                       type="checkbox"
// // // // // // // // //                       checked={useTwosComplement}
// // // // // // // // //                       onChange={(e) => setUseTwosComplement(e.target.checked)}
// // // // // // // // //                       style={{ marginRight: '6px' }}
// // // // // // // // //                     />
// // // // // // // // //                     Use Two's Complement
// // // // // // // // //                   </label>
                  
// // // // // // // // //                   {useTwosComplement && (
// // // // // // // // //                     <div style={{ marginTop: '8px' }}>
// // // // // // // // //                       <label htmlFor="bit-width" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
// // // // // // // // //                         Bit Width:
// // // // // // // // //                       </label>
// // // // // // // // //                       <select
// // // // // // // // //                         id="bit-width"
// // // // // // // // //                         value={bitWidth}
// // // // // // // // //                         onChange={(e) => setBitWidth(parseInt(e.target.value))}
// // // // // // // // //                         style={{
// // // // // // // // //                           padding: '4px 8px',
// // // // // // // // //                           border: '1px solid #ffb74d',
// // // // // // // // //                           borderRadius: '4px',
// // // // // // // // //                           fontSize: '0.8rem',
// // // // // // // // //                           background: 'white'
// // // // // // // // //                         }}
// // // // // // // // //                       >
// // // // // // // // //                         <option value={4}>4-bit</option>
// // // // // // // // //                         <option value={8}>8-bit</option>
// // // // // // // // //                         <option value={16}>16-bit</option>
// // // // // // // // //                         <option value={32}>32-bit</option>
// // // // // // // // //                       </select>
// // // // // // // // //                     </div>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>

// // // // // // // // //                 {/* Result */}
// // // // // // // // //                 <div style={{
// // // // // // // // //                   background: '#ffffff',
// // // // // // // // //                   border: '2px solid #e9ecef',
// // // // // // // // //                   borderRadius: '4px',
// // // // // // // // //                   padding: '12px',
// // // // // // // // //                   minHeight: '40px',
// // // // // // // // //                   display: 'flex',
// // // // // // // // //                   alignItems: 'center',
// // // // // // // // //                   justifyContent: 'space-between',
// // // // // // // // //                   fontSize: '1rem',
// // // // // // // // //                   fontWeight: '500',
// // // // // // // // //                   fontFamily: 'monospace'
// // // // // // // // //                 }}>
// // // // // // // // //                   <div style={{ flex: 1, wordBreak: 'break-all' }}>
// // // // // // // // //                     {isLoading ? (
// // // // // // // // //                       <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Converting...</span>
// // // // // // // // //                     ) : error ? (
// // // // // // // // //                       <span style={{ color: '#dc3545', fontSize: '0.8rem' }} role="alert">{error}</span>
// // // // // // // // //                     ) : result ? (
// // // // // // // // //                       <span style={{ color: '#28a745' }}>{result}</span>
// // // // // // // // //                     ) : (
// // // // // // // // //                       <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// // // // // // // // //                     )}
// // // // // // // // //                   </div>
// // // // // // // // //                   {result && (
// // // // // // // // //                     <button
// // // // // // // // //                       onClick={copyResult}
// // // // // // // // //                       style={{
// // // // // // // // //                         marginLeft: '8px',
// // // // // // // // //                         padding: '4px 8px',
// // // // // // // // //                         background: '#28a745',
// // // // // // // // //                         color: 'white',
// // // // // // // // //                         border: 'none',
// // // // // // // // //                         borderRadius: '4px',
// // // // // // // // //                         cursor: 'pointer',
// // // // // // // // //                         fontSize: '0.7rem',
// // // // // // // // //                         fontWeight: '500'
// // // // // // // // //                       }}
// // // // // // // // //                     >
// // // // // // // // //                       Copy
// // // // // // // // //                     </button>
// // // // // // // // //                   )}
// // // // // // // // //                 </div>
// // // // // // // // //               </section>
// // // // // // // // //             </main>

// // // // // // // // //             {/* Information Sidebar */}
// // // // // // // // //             <aside style={{ 
// // // // // // // // //               flex: '0 0 300px', 
// // // // // // // // //               background: '#e3f2fd', 
// // // // // // // // //               padding: '20px',
// // // // // // // // //               borderLeft: '1px solid #bbdefb',
// // // // // // // // //               overflow: 'auto'
// // // // // // // // //             }}>
// // // // // // // // //               <h3 style={{ margin: '0 0 12px 0', color: '#1976d2', fontSize: '1rem', fontWeight: '600' }}>Information</h3>
// // // // // // // // //               <ul style={{ margin: '0 0 16px 0', paddingLeft: '16px', color: '#424242', lineHeight: '1.4', fontSize: '0.8rem' }}>
// // // // // // // // //                 <li>Supports all bases from 2 to 36</li>
// // // // // // // // //                 <li>Uses digits 0-9 and letters A-Z for bases above 10</li>
// // // // // // // // //                 <li>Negative numbers: Default uses sign-magnitude (minus sign)</li>
// // // // // // // // //                 <li>Two's complement option available for computer-style negative representation</li>
// // // // // // // // //                 <li>Input is case-insensitive</li>
// // // // // // // // //               </ul>


// // // // // // // // //             </aside>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     </ErrorBoundary>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default BaseConverter;


// // // // // // // import React, { useState, useEffect, useCallback, useMemo } from 'react';

// // // // // // // const BaseConverter = () => {
// // // // // // //   const [inputValue, setInputValue] = useState('');
// // // // // // //   const [inputBase, setInputBase] = useState(10);
// // // // // // //   const [outputBase, setOutputBase] = useState(2);
// // // // // // //   const [customInputBase, setCustomInputBase] = useState('');
// // // // // // //   const [customOutputBase, setCustomOutputBase] = useState('');
// // // // // // //   const [useCustomInput, setUseCustomInput] = useState(false);
// // // // // // //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// // // // // // //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// // // // // // //   const [bitWidth, setBitWidth] = useState(8);
// // // // // // //   const [result, setResult] = useState('');
// // // // // // //   const [error, setError] = useState('');

// // // // // // //   const commonBases = useMemo(() => [
// // // // // // //     { value: 2, name: 'Binary' },
// // // // // // //     { value: 8, name: 'Octal' },
// // // // // // //     { value: 10, name: 'Decimal' },
// // // // // // //     { value: 16, name: 'Hexadecimal' },
// // // // // // //   ], []);

// // // // // // //   const quickConversions = useMemo(() => [
// // // // // // //     { from: 10, to: 2, label: 'Dec → Bin' },
// // // // // // //     { from: 2, to: 10, label: 'Bin → Dec' },
// // // // // // //     { from: 10, to: 16, label: 'Dec → Hex' },
// // // // // // //     { from: 16, to: 10, label: 'Hex → Dec' },
// // // // // // //     { from: 2, to: 16, label: 'Bin → Hex' },
// // // // // // //     { from: 16, to: 2, label: 'Hex → Bin' },
// // // // // // //   ], []);

// // // // // // //   const isValidChar = (char, base) => {
// // // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // //     const index = chars.indexOf(char.toUpperCase());
// // // // // // //     return index !== -1 && index < base;
// // // // // // //   };

// // // // // // //   const handleKeyDown = (e) => {

// // // // // // //     console.log('Current base:', useCustomInput ? parseInt(customInputBase) || 10 : inputBase);
// // // // // // //     const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// // // // // // //     const key = e.key;
    
// // // // // // //     // Allow control keys (backspace, delete, arrows, etc)
// // // // // // //     if (key.length > 1) return;
    
// // // // // // //     // Block invalid characters completely
// // // // // // //     if (key !== '-' && !isValidChar(key, currentBase)) {
// // // // // // //       e.preventDefault();
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleInputChange = (e) => {
// // // // // // //     setInputValue(e.target.value);
// // // // // // //   };

// // // // // // //   const convertNumber = useCallback(() => {
// // // // // // //     setError('');
    
// // // // // // //     if (!inputValue.trim()) {
// // // // // // //       setResult('');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// // // // // // //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// // // // // // //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// // // // // // //         throw new Error('Input base must be between 2 and 36');
// // // // // // //       }
// // // // // // //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// // // // // // //         throw new Error('Output base must be between 2 and 36');
// // // // // // //       }

// // // // // // //       const isNegative = inputValue.startsWith('-');
// // // // // // //       const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
// // // // // // //       // Convert to decimal
// // // // // // //       let decimal = 0;
// // // // // // //       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // // //       const valueUpper = absoluteValue.toUpperCase();
      
// // // // // // //       for (let i = 0; i < valueUpper.length; i++) {
// // // // // // //         const digit = chars.indexOf(valueUpper[i]);
// // // // // // //         if (digit === -1 || digit >= fromBase) {
// // // // // // //           throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// // // // // // //         }
// // // // // // //         decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// // // // // // //       }

// // // // // // //       // Handle two's complement
// // // // // // //       if (isNegative && useTwosComplement) {
// // // // // // //         const minValue = -Math.pow(2, bitWidth - 1);
// // // // // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // // // // //         if (-decimal < minValue || -decimal > maxValue) {
// // // // // // //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
// // // // // // //         }
        
// // // // // // //         const maxValue2 = Math.pow(2, bitWidth);
// // // // // // //         decimal = maxValue2 + (-decimal);
// // // // // // //       }

// // // // // // //       // Convert from decimal to target base
// // // // // // //       if (decimal === 0) {
// // // // // // //         setResult('0');
// // // // // // //         return;
// // // // // // //       }

// // // // // // //       let converted = '';
// // // // // // //       let num = Math.abs(decimal);
      
// // // // // // //       while (num > 0) {
// // // // // // //         converted = chars[num % toBase] + converted;
// // // // // // //         num = Math.floor(num / toBase);
// // // // // // //       }
      
// // // // // // //       setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
// // // // // // //     } catch (err) {
// // // // // // //       setError(err.message);
// // // // // // //       setResult('');
// // // // // // //     }
// // // // // // //   }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

// // // // // // //   useEffect(() => {
// // // // // // //     const timer = setTimeout(convertNumber, 300);
// // // // // // //     return () => clearTimeout(timer);
// // // // // // //   }, [convertNumber]);

// // // // // // //   const handleQuickConversion = useCallback((from, to) => {
// // // // // // //     setUseCustomInput(false);
// // // // // // //     setUseCustomOutput(false);
// // // // // // //     setInputBase(from);
// // // // // // //     setOutputBase(to);
// // // // // // //   }, []);

// // // // // // //   const resetAll = useCallback(() => {
// // // // // // //     setInputValue('');
// // // // // // //     setInputBase(10);
// // // // // // //     setOutputBase(2);
// // // // // // //     setCustomInputBase('');
// // // // // // //     setCustomOutputBase('');
// // // // // // //     setUseCustomInput(false);
// // // // // // //     setUseCustomOutput(false);
// // // // // // //     setUseTwosComplement(false);
// // // // // // //     setBitWidth(8);
// // // // // // //     setResult('');
// // // // // // //     setError('');
// // // // // // //   }, []);

// // // // // // //   const copyResult = useCallback(() => {
// // // // // // //     if (result) {
// // // // // // //       navigator.clipboard.writeText(result).catch(() => {
// // // // // // //         const textArea = document.createElement('textarea');
// // // // // // //         textArea.value = result;
// // // // // // //         document.body.appendChild(textArea);
// // // // // // //         textArea.select();
// // // // // // //         document.execCommand('copy');
// // // // // // //         document.body.removeChild(textArea);
// // // // // // //       });
// // // // // // //     }
// // // // // // //   }, [result]);

// // // // // // //   return (
// // // // // // //     <div style={{ 
// // // // // // //       height: '100vh', 
// // // // // // //       background: '#f8f9fa',
// // // // // // //       padding: '16px',
// // // // // // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // // // // // //       overflow: 'hidden'
// // // // // // //     }}>
// // // // // // //       <div style={{
// // // // // // //         height: '100%',
// // // // // // //         maxWidth: '1200px',
// // // // // // //         margin: '0 auto',
// // // // // // //         background: '#ffffff',
// // // // // // //         borderRadius: '8px',
// // // // // // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // // // //         border: '1px solid #e9ecef',
// // // // // // //         display: 'flex',
// // // // // // //         flexDirection: 'column'
// // // // // // //       }}>
// // // // // // //         <header style={{
// // // // // // //           background: '#2c3e50',
// // // // // // //           color: 'white',
// // // // // // //           padding: '16px 24px',
// // // // // // //           borderTopLeftRadius: '8px',
// // // // // // //           borderTopRightRadius: '8px',
// // // // // // //           flexShrink: 0
// // // // // // //         }}>
// // // // // // //           <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
// // // // // // //             Base Converter
// // // // // // //           </h1>
// // // // // // //           <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
// // // // // // //             Convert between any number bases from 2 to 36
// // // // // // //           </p>
// // // // // // //         </header>

// // // // // // //         <div style={{ 
// // // // // // //           flex: 1, 
// // // // // // //           display: 'flex', 
// // // // // // //           overflow: 'hidden'
// // // // // // //         }}>
// // // // // // //           <main style={{ 
// // // // // // //             flex: '2', 
// // // // // // //             padding: '20px', 
// // // // // // //             overflow: 'auto'
// // // // // // //           }}>
// // // // // // //             <section style={{ marginBottom: '20px' }}>
// // // // // // //               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
// // // // // // //                 <h2 style={{ margin: 0, color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
// // // // // // //                 <button
// // // // // // //                   onClick={resetAll}
// // // // // // //                   style={{
// // // // // // //                     padding: '6px 12px',
// // // // // // //                     border: '1px solid #dc3545',
// // // // // // //                     borderRadius: '4px',
// // // // // // //                     background: '#dc3545',
// // // // // // //                     color: 'white',
// // // // // // //                     cursor: 'pointer',
// // // // // // //                     fontSize: '0.8rem',
// // // // // // //                     fontWeight: '500'
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Reset
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //               <div style={{ 
// // // // // // //                 display: 'grid', 
// // // // // // //                 gridTemplateColumns: 'repeat(3, 1fr)', 
// // // // // // //                 gap: '8px' 
// // // // // // //               }}>
// // // // // // //                 {quickConversions.map((conv, index) => (
// // // // // // //                   <button
// // // // // // //                     key={index}
// // // // // // //                     onClick={() => handleQuickConversion(conv.from, conv.to)}
// // // // // // //                     style={{
// // // // // // //                       padding: '8px 12px',
// // // // // // //                       border: '1px solid #3498db',
// // // // // // //                       borderRadius: '4px',
// // // // // // //                       background: '#3498db',
// // // // // // //                       color: 'white',
// // // // // // //                       cursor: 'pointer',
// // // // // // //                       fontSize: '0.8rem',
// // // // // // //                       fontWeight: '500',
// // // // // // //                       transition: 'all 0.2s ease'
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     {conv.label}
// // // // // // //                   </button>
// // // // // // //                 ))}
// // // // // // //               </div>
// // // // // // //             </section>

// // // // // // //             <section style={{ 
// // // // // // //               background: '#f8f9fa', 
// // // // // // //               padding: '16px', 
// // // // // // //               borderRadius: '6px', 
// // // // // // //               marginBottom: '16px',
// // // // // // //               border: '1px solid #dee2e6'
// // // // // // //             }}>
// // // // // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
// // // // // // //               <div style={{ marginBottom: '12px' }}>
// // // // // // //                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // // //                   Value to convert:
// // // // // // //                 </label>
// // // // // // //                 <input
// // // // // // //                   id="input-value"
// // // // // // //                   type="text"
// // // // // // //                   value={inputValue}
// // // // // // //                   onChange={handleInputChange}
// // // // // // //                   onKeyDown={handleKeyDown}
// // // // // // //                   placeholder="Enter number to convert..."
// // // // // // //                   style={{
// // // // // // //                     width: '100%',
// // // // // // //                     padding: '8px 12px',
// // // // // // //                     border: '1px solid #ced4da',
// // // // // // //                     borderRadius: '4px',
// // // // // // //                     fontSize: '0.9rem',
// // // // // // //                     transition: 'border-color 0.2s ease',
// // // // // // //                     boxSizing: 'border-box'
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               <div style={{ marginBottom: '12px' }}>
// // // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // // //                   <input
// // // // // // //                     type="checkbox"
// // // // // // //                     checked={useCustomInput}
// // // // // // //                     onChange={(e) => setUseCustomInput(e.target.checked)}
// // // // // // //                     style={{ marginRight: '6px' }}
// // // // // // //                   />
// // // // // // //                   Use custom base
// // // // // // //                 </label>
// // // // // // //               </div>

// // // // // // //               {useCustomInput ? (
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   value={customInputBase}
// // // // // // //                   onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // // // // //                   placeholder="Enter base (2-36)"
// // // // // // //                   style={{
// // // // // // //                     width: '140px',
// // // // // // //                     padding: '6px 8px',
// // // // // // //                     border: '1px solid #ced4da',
// // // // // // //                     borderRadius: '4px',
// // // // // // //                     fontSize: '0.9rem',
// // // // // // //                     boxSizing: 'border-box'
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               ) : (
// // // // // // //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
// // // // // // //                   {commonBases.map((base) => (
// // // // // // //                     <button
// // // // // // //                       key={base.value}
// // // // // // //                       onClick={() => setInputBase(base.value)}
// // // // // // //                       style={{
// // // // // // //                         padding: '8px 12px',
// // // // // // //                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // // //                         borderRadius: '4px',
// // // // // // //                         background: inputBase === base.value ? '#3498db' : 'white',
// // // // // // //                         color: inputBase === base.value ? 'white' : '#495057',
// // // // // // //                         cursor: 'pointer',
// // // // // // //                         fontSize: '0.8rem',
// // // // // // //                         fontWeight: '500',
// // // // // // //                         transition: 'all 0.2s ease'
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       {base.name} ({base.value})
// // // // // // //                     </button>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               )}
// // // // // // //             </section>

// // // // // // //             <section style={{ 
// // // // // // //               background: '#f8f9fa', 
// // // // // // //               padding: '16px', 
// // // // // // //               borderRadius: '6px',
// // // // // // //               border: '1px solid #dee2e6'
// // // // // // //             }}>
// // // // // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

// // // // // // //               <div style={{ marginBottom: '12px' }}>
// // // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // // //                   <input
// // // // // // //                     type="checkbox"
// // // // // // //                     checked={useCustomOutput}
// // // // // // //                     onChange={(e) => setUseCustomOutput(e.target.checked)}
// // // // // // //                     style={{ marginRight: '6px' }}
// // // // // // //                   />
// // // // // // //                   Use custom base
// // // // // // //                 </label>
// // // // // // //               </div>

// // // // // // //               {useCustomOutput ? (
// // // // // // //                 <input
// // // // // // //                   type="text"
// // // // // // //                   value={customOutputBase}
// // // // // // //                   onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // // // // //                   placeholder="Enter base (2-36)"
// // // // // // //                   style={{
// // // // // // //                     width: '140px',
// // // // // // //                     padding: '6px 8px',
// // // // // // //                     border: '1px solid #ced4da',
// // // // // // //                     borderRadius: '4px',
// // // // // // //                     fontSize: '0.9rem',
// // // // // // //                     marginBottom: '12px',
// // // // // // //                     boxSizing: 'border-box'
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               ) : (
// // // // // // //                 <div style={{ 
// // // // // // //                   display: 'grid', 
// // // // // // //                   gridTemplateColumns: 'repeat(2, 1fr)', 
// // // // // // //                   gap: '8px',
// // // // // // //                   marginBottom: '12px'
// // // // // // //                 }}>
// // // // // // //                   {commonBases.map((base) => (
// // // // // // //                     <button
// // // // // // //                       key={base.value}
// // // // // // //                       onClick={() => setOutputBase(base.value)}
// // // // // // //                       style={{
// // // // // // //                         padding: '8px 12px',
// // // // // // //                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // // //                         borderRadius: '4px',
// // // // // // //                         background: outputBase === base.value ? '#3498db' : 'white',
// // // // // // //                         color: outputBase === base.value ? 'white' : '#495057',
// // // // // // //                         cursor: 'pointer',
// // // // // // //                         fontSize: '0.8rem',
// // // // // // //                         fontWeight: '500',
// // // // // // //                         transition: 'all 0.2s ease'
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       {base.name} ({base.value})
// // // // // // //                     </button>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// // // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// // // // // // //                   <input
// // // // // // //                     type="checkbox"
// // // // // // //                     checked={useTwosComplement}
// // // // // // //                     onChange={(e) => setUseTwosComplement(e.target.checked)}
// // // // // // //                     style={{ marginRight: '6px' }}
// // // // // // //                   />
// // // // // // //                   Use Two's Complement
// // // // // // //                 </label>
                
// // // // // // //                 {useTwosComplement && (
// // // // // // //                   <div style={{ marginTop: '8px' }}>
// // // // // // //                     <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
// // // // // // //                       Bit Width:
// // // // // // //                     </label>
// // // // // // //                     <select
// // // // // // //                       value={bitWidth}
// // // // // // //                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
// // // // // // //                       style={{
// // // // // // //                         padding: '4px 8px',
// // // // // // //                         border: '1px solid #ffb74d',
// // // // // // //                         borderRadius: '4px',
// // // // // // //                         fontSize: '0.8rem',
// // // // // // //                         background: 'white'
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       <option value={4}>4-bit</option>
// // // // // // //                       <option value={8}>8-bit</option>
// // // // // // //                       <option value={16}>16-bit</option>
// // // // // // //                       <option value={32}>32-bit</option>
// // // // // // //                     </select>
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>

// // // // // // //               <div style={{
// // // // // // //                 background: '#ffffff',
// // // // // // //                 border: '2px solid #e9ecef',
// // // // // // //                 borderRadius: '4px',
// // // // // // //                 padding: '12px',
// // // // // // //                 minHeight: '40px',
// // // // // // //                 display: 'flex',
// // // // // // //                 alignItems: 'center',
// // // // // // //                 justifyContent: 'space-between',
// // // // // // //                 fontSize: '1rem',
// // // // // // //                 fontWeight: '500',
// // // // // // //                 fontFamily: 'monospace'
// // // // // // //               }}>
// // // // // // //                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
// // // // // // //                   {error ? (
// // // // // // //                     <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
// // // // // // //                   ) : result ? (
// // // // // // //                     <span style={{ color: '#28a745' }}>{result}</span>
// // // // // // //                   ) : (
// // // // // // //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //                 {result && (
// // // // // // //                   <button
// // // // // // //                     onClick={copyResult}
// // // // // // //                     style={{
// // // // // // //                       marginLeft: '8px',
// // // // // // //                       padding: '4px 8px',
// // // // // // //                       background: '#28a745',
// // // // // // //                       color: 'white',
// // // // // // //                       border: 'none',
// // // // // // //                       borderRadius: '4px',
// // // // // // //                       cursor: 'pointer',
// // // // // // //                       fontSize: '0.7rem',
// // // // // // //                       fontWeight: '500'
// // // // // // //                     }}
// // // // // // //                   >
// // // // // // //                     Copy
// // // // // // //                   </button>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </section>
// // // // // // //           </main>

// // // // // // //           <aside style={{ 
// // // // // // //             flex: '0 0 300px', 
// // // // // // //             background: '#e3f2fd', 
// // // // // // //             padding: '20px',
// // // // // // //             borderLeft: '1px solid #bbdefb',
// // // // // // //             overflow: 'auto'
// // // // // // //           }}>
// // // // // // //             <h3 style={{ margin: '0 0 12px 0', color: '#1976d2', fontSize: '1rem', fontWeight: '600' }}>Information</h3>
// // // // // // //             <ul style={{ margin: '0 0 16px 0', paddingLeft: '16px', color: '#424242', lineHeight: '1.4', fontSize: '0.8rem' }}>
// // // // // // //               <li>Supports all bases from 2 to 36</li>
// // // // // // //               <li>Uses digits 0-9 and letters A-Z for bases above 10</li>
// // // // // // //               <li>Negative numbers: Default uses sign-magnitude (minus sign)</li>
// // // // // // //               <li>Two's complement option available for computer-style negative representation</li>
// // // // // // //               <li>Input is case-insensitive</li>
// // // // // // //             </ul>
// // // // // // //           </aside>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default BaseConverter;


// // // // // // import React, { useState, useEffect, useCallback, useMemo } from 'react';

// // // // // // const BaseConverter = () => {
// // // // // //   const [inputValue, setInputValue] = useState('');
// // // // // //   const [inputBase, setInputBase] = useState(10);
// // // // // //   const [outputBase, setOutputBase] = useState(2);
// // // // // //   const [customInputBase, setCustomInputBase] = useState('');
// // // // // //   const [customOutputBase, setCustomOutputBase] = useState('');
// // // // // //   const [useCustomInput, setUseCustomInput] = useState(false);
// // // // // //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// // // // // //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// // // // // //   const [bitWidth, setBitWidth] = useState(8);
// // // // // //   const [result, setResult] = useState('');
// // // // // //   const [error, setError] = useState('');

// // // // // //   const commonBases = useMemo(() => [
// // // // // //     { value: 2, name: 'Binary' },
// // // // // //     { value: 8, name: 'Octal' },
// // // // // //     { value: 10, name: 'Decimal' },
// // // // // //     { value: 16, name: 'Hexadecimal' },
// // // // // //   ], []);

// // // // // //   const quickConversions = useMemo(() => [
// // // // // //     { from: 10, to: 2, label: 'Dec → Bin' },
// // // // // //     { from: 2, to: 10, label: 'Bin → Dec' },
// // // // // //     { from: 10, to: 16, label: 'Dec → Hex' },
// // // // // //     { from: 16, to: 10, label: 'Hex → Dec' },
// // // // // //     { from: 2, to: 16, label: 'Bin → Hex' },
// // // // // //     { from: 16, to: 2, label: 'Hex → Bin' },
// // // // // //   ], []);

// // // // // //   const isValidChar = (char, base) => {
// // // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // //     const index = chars.indexOf(char.toUpperCase());
// // // // // //     return index !== -1 && index < base;
// // // // // //   };

// // // // // //   const handleKeyDown = (e) => {
// // // // // //     const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// // // // // //     const key = e.key;
    
// // // // // //     // Allow control keys
// // // // // //     if (key.length > 1) return;
    
// // // // // //     // Allow valid characters
// // // // // //     if (key === '-' || isValidChar(key, currentBase)) {
// // // // // //       return;
// // // // // //     }
    
// // // // // //     // Block everything else
// // // // // //     e.preventDefault();
// // // // // //   };

// // // // // //   const handleInputChange = (e) => {
// // // // // //     setInputValue(e.target.value);
// // // // // //   };

// // // // // //   const convertNumber = useCallback(() => {
// // // // // //     setError('');
    
// // // // // //     if (!inputValue.trim()) {
// // // // // //       setResult('');
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// // // // // //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// // // // // //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// // // // // //         throw new Error('Input base must be between 2 and 36');
// // // // // //       }
// // // // // //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// // // // // //         throw new Error('Output base must be between 2 and 36');
// // // // // //       }

// // // // // //       const isNegative = inputValue.startsWith('-');
// // // // // //       const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
// // // // // //       // Convert to decimal
// // // // // //       let decimal = 0;
// // // // // //       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // // //       const valueUpper = absoluteValue.toUpperCase();
      
// // // // // //       for (let i = 0; i < valueUpper.length; i++) {
// // // // // //         const digit = chars.indexOf(valueUpper[i]);
// // // // // //         if (digit === -1 || digit >= fromBase) {
// // // // // //           throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// // // // // //         }
// // // // // //         decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// // // // // //       }

// // // // // //       // Handle two's complement
// // // // // //       if (isNegative && useTwosComplement) {
// // // // // //         const minValue = -Math.pow(2, bitWidth - 1);
// // // // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // // // //         if (-decimal < minValue || -decimal > maxValue) {
// // // // // //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
// // // // // //         }
        
// // // // // //         const maxValue2 = Math.pow(2, bitWidth);
// // // // // //         decimal = maxValue2 + (-decimal);
// // // // // //       }

// // // // // //       // Convert from decimal to target base
// // // // // //       if (decimal === 0) {
// // // // // //         setResult('0');
// // // // // //         return;
// // // // // //       }

// // // // // //       let converted = '';
// // // // // //       let num = Math.abs(decimal);
      
// // // // // //       while (num > 0) {
// // // // // //         converted = chars[num % toBase] + converted;
// // // // // //         num = Math.floor(num / toBase);
// // // // // //       }
      
// // // // // //       setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
// // // // // //     } catch (err) {
// // // // // //       setError(err.message);
// // // // // //       setResult('');
// // // // // //     }
// // // // // //   }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setTimeout(convertNumber, 300);
// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, [convertNumber]);

// // // // // //   const handleQuickConversion = useCallback((from, to) => {
// // // // // //     setUseCustomInput(false);
// // // // // //     setUseCustomOutput(false);
// // // // // //     setInputBase(from);
// // // // // //     setOutputBase(to);
// // // // // //   }, []);

// // // // // //   const resetAll = useCallback(() => {
// // // // // //     setInputValue('');
// // // // // //     setInputBase(10);
// // // // // //     setOutputBase(2);
// // // // // //     setCustomInputBase('');
// // // // // //     setCustomOutputBase('');
// // // // // //     setUseCustomInput(false);
// // // // // //     setUseCustomOutput(false);
// // // // // //     setUseTwosComplement(false);
// // // // // //     setBitWidth(8);
// // // // // //     setResult('');
// // // // // //     setError('');
// // // // // //   }, []);

// // // // // //   const copyResult = useCallback(() => {
// // // // // //     if (result) {
// // // // // //       navigator.clipboard.writeText(result).catch(() => {
// // // // // //         const textArea = document.createElement('textarea');
// // // // // //         textArea.value = result;
// // // // // //         document.body.appendChild(textArea);
// // // // // //         textArea.select();
// // // // // //         document.execCommand('copy');
// // // // // //         document.body.removeChild(textArea);
// // // // // //       });
// // // // // //     }
// // // // // //   }, [result]);

// // // // // //   return (
// // // // // //     <div style={{ 
// // // // // //       height: '100vh', 
// // // // // //       background: '#f8f9fa',
// // // // // //       padding: '16px',
// // // // // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // // // // //       overflow: 'hidden'
// // // // // //     }}>
// // // // // //       <div style={{
// // // // // //         height: '100%',
// // // // // //         maxWidth: '1200px',
// // // // // //         margin: '0 auto',
// // // // // //         background: '#ffffff',
// // // // // //         borderRadius: '8px',
// // // // // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // // //         border: '1px solid #e9ecef',
// // // // // //         display: 'flex',
// // // // // //         flexDirection: 'column'
// // // // // //       }}>
// // // // // //         <header style={{
// // // // // //           background: '#2c3e50',
// // // // // //           color: 'white',
// // // // // //           padding: '16px 24px',
// // // // // //           borderTopLeftRadius: '8px',
// // // // // //           borderTopRightRadius: '8px',
// // // // // //           flexShrink: 0
// // // // // //         }}>
// // // // // //           <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
// // // // // //             Base Converter
// // // // // //           </h1>
// // // // // //           <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
// // // // // //             Convert between any number bases from 2 to 36
// // // // // //           </p>
// // // // // //         </header>

// // // // // //         <div style={{ 
// // // // // //           flex: 1, 
// // // // // //           display: 'flex', 
// // // // // //           overflow: 'hidden'
// // // // // //         }}>
// // // // // //           <main style={{ 
// // // // // //             flex: '2', 
// // // // // //             padding: '20px', 
// // // // // //             overflow: 'auto'
// // // // // //           }}>
// // // // // //             <section style={{ marginBottom: '20px' }}>
// // // // // //               <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
// // // // // //                 <h2 style={{ margin: 0, color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
// // // // // //                 {/* <button
// // // // // //                   onClick={resetAll}
// // // // // //                   style={{
// // // // // //                     padding: '6px 12px',
// // // // // //                     border: '1px solid #dc3545',
// // // // // //                     borderRadius: '4px',
// // // // // //                     background: '#dc3545',
// // // // // //                     color: 'white',
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontSize: '0.8rem',
// // // // // //                     fontWeight: '500'
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Reset
// // // // // //                 </button> */}
// // // // // //               </div>
// // // // // //               <div style={{ 
// // // // // //                 display: 'grid', 
// // // // // //                 gridTemplateColumns: 'repeat(3, 1fr)', 
// // // // // //                 gap: '8px' 
// // // // // //               }}>
// // // // // //                 {quickConversions.map((conv, index) => (
// // // // // //                   <button
// // // // // //                     key={index}
// // // // // //                     onClick={() => handleQuickConversion(conv.from, conv.to)}
// // // // // //                     style={{
// // // // // //                       padding: '8px 12px',
// // // // // //                       border: '1px solid #3498db',
// // // // // //                       borderRadius: '4px',
// // // // // //                       background: '#3498db',
// // // // // //                       color: 'white',
// // // // // //                       cursor: 'pointer',
// // // // // //                       fontSize: '0.8rem',
// // // // // //                       fontWeight: '500',
// // // // // //                       transition: 'all 0.2s ease'
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     {conv.label}
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             </section>

// // // // // //             <section style={{ 
// // // // // //               background: '#f8f9fa', 
// // // // // //               padding: '16px', 
// // // // // //               borderRadius: '6px', 
// // // // // //               marginBottom: '16px',
// // // // // //               border: '1px solid #dee2e6'
// // // // // //             }}>
// // // // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
// // // // // //               <div style={{ marginBottom: '12px' }}>
// // // // // //                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // //                   Value to convert:
// // // // // //                 </label>
// // // // // //                 <input
// // // // // //                   id="input-value"
// // // // // //                   type="text"
// // // // // //                   value={inputValue}
// // // // // //                   onChange={handleInputChange}
// // // // // //                   onKeyDown={handleKeyDown}
// // // // // //                   placeholder="Enter number to convert..."
// // // // // //                   style={{
// // // // // //                     width: '100%',
// // // // // //                     padding: '8px 12px',
// // // // // //                     border: '1px solid #ced4da',
// // // // // //                     borderRadius: '4px',
// // // // // //                     fontSize: '0.9rem',
// // // // // //                     transition: 'border-color 0.2s ease',
// // // // // //                     boxSizing: 'border-box'
// // // // // //                   }}
// // // // // //                 />
              
// // // // // //                  <button
// // // // // //                   onClick={resetAll}
// // // // // //                   style={{
// // // // // //                     padding: '6px 12px',
// // // // // //                     border: '1px solid #dc3545',
// // // // // //                     borderRadius: '4px',
// // // // // //                     background: '#dc3545',
// // // // // //                     color: 'white',
// // // // // //                     cursor: 'pointer',
// // // // // //                     fontSize: '0.8rem',
// // // // // //                     fontWeight: '500',
// // // // // //                     marginTop:'10px'
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Reset
// // // // // //                 </button>
// // // // // //               </div>

// // // // // //               <div style={{ marginBottom: '12px' }}>
// // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // //                   <input
// // // // // //                     type="checkbox"
// // // // // //                     checked={useCustomInput}
// // // // // //                     onChange={(e) => setUseCustomInput(e.target.checked)}
// // // // // //                     style={{ marginRight: '6px' }}
// // // // // //                   />
// // // // // //                   Use custom base
// // // // // //                 </label>
// // // // // //               </div>

// // // // // //               {useCustomInput ? (
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   value={customInputBase}
// // // // // //                   onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // // // //                   placeholder="Enter base (2-36)"
// // // // // //                   style={{
// // // // // //                     width: '140px',
// // // // // //                     padding: '6px 8px',
// // // // // //                     border: '1px solid #ced4da',
// // // // // //                     borderRadius: '4px',
// // // // // //                     fontSize: '0.9rem',
// // // // // //                     boxSizing: 'border-box'
// // // // // //                   }}
// // // // // //                 />
// // // // // //               ) : (
// // // // // //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
// // // // // //                   {commonBases.map((base) => (
// // // // // //                     <button
// // // // // //                       key={base.value}
// // // // // //                       onClick={() => setInputBase(base.value)}
// // // // // //                       style={{
// // // // // //                         padding: '8px 12px',
// // // // // //                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // //                         borderRadius: '4px',
// // // // // //                         background: inputBase === base.value ? '#3498db' : 'white',
// // // // // //                         color: inputBase === base.value ? 'white' : '#495057',
// // // // // //                         cursor: 'pointer',
// // // // // //                         fontSize: '0.8rem',
// // // // // //                         fontWeight: '500',
// // // // // //                         transition: 'all 0.2s ease'
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       {base.name} ({base.value})
// // // // // //                     </button>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </section>

// // // // // //             <section style={{ 
// // // // // //               background: '#f8f9fa', 
// // // // // //               padding: '16px', 
// // // // // //               borderRadius: '6px',
// // // // // //               border: '1px solid #dee2e6'
// // // // // //             }}>
// // // // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

// // // // // //               <div style={{ marginBottom: '12px' }}>
// // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // // //                   <input
// // // // // //                     type="checkbox"
// // // // // //                     checked={useCustomOutput}
// // // // // //                     onChange={(e) => setUseCustomOutput(e.target.checked)}
// // // // // //                     style={{ marginRight: '6px' }}
// // // // // //                   />
// // // // // //                   Use custom base
// // // // // //                 </label>
// // // // // //               </div>

// // // // // //               {useCustomOutput ? (
// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   value={customOutputBase}
// // // // // //                   onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // // // //                   placeholder="Enter base (2-36)"
// // // // // //                   style={{
// // // // // //                     width: '140px',
// // // // // //                     padding: '6px 8px',
// // // // // //                     border: '1px solid #ced4da',
// // // // // //                     borderRadius: '4px',
// // // // // //                     fontSize: '0.9rem',
// // // // // //                     marginBottom: '12px',
// // // // // //                     boxSizing: 'border-box'
// // // // // //                   }}
// // // // // //                 />
// // // // // //               ) : (
// // // // // //                 <div style={{ 
// // // // // //                   display: 'grid', 
// // // // // //                   gridTemplateColumns: 'repeat(2, 1fr)', 
// // // // // //                   gap: '8px',
// // // // // //                   marginBottom: '12px'
// // // // // //                 }}>
// // // // // //                   {commonBases.map((base) => (
// // // // // //                     <button
// // // // // //                       key={base.value}
// // // // // //                       onClick={() => setOutputBase(base.value)}
// // // // // //                       style={{
// // // // // //                         padding: '8px 12px',
// // // // // //                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // // //                         borderRadius: '4px',
// // // // // //                         background: outputBase === base.value ? '#3498db' : 'white',
// // // // // //                         color: outputBase === base.value ? 'white' : '#495057',
// // // // // //                         cursor: 'pointer',
// // // // // //                         fontSize: '0.8rem',
// // // // // //                         fontWeight: '500',
// // // // // //                         transition: 'all 0.2s ease'
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       {base.name} ({base.value})
// // // // // //                     </button>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// // // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// // // // // //                   <input
// // // // // //                     type="checkbox"
// // // // // //                     checked={useTwosComplement}
// // // // // //                     onChange={(e) => setUseTwosComplement(e.target.checked)}
// // // // // //                     style={{ marginRight: '6px' }}
// // // // // //                   />
// // // // // //                   Use Two's Complement
// // // // // //                 </label>
                
// // // // // //                 {useTwosComplement && (
// // // // // //                   <div style={{ marginTop: '8px' }}>
// // // // // //                     <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
// // // // // //                       Bit Width:
// // // // // //                     </label>
// // // // // //                     <select
// // // // // //                       value={bitWidth}
// // // // // //                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
// // // // // //                       style={{
// // // // // //                         padding: '4px 8px',
// // // // // //                         border: '1px solid #ffb74d',
// // // // // //                         borderRadius: '4px',
// // // // // //                         fontSize: '0.8rem',
// // // // // //                         background: 'white'
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       <option value={4}>4-bit</option>
// // // // // //                       <option value={8}>8-bit</option>
// // // // // //                       <option value={16}>16-bit</option>
// // // // // //                       <option value={32}>32-bit</option>
// // // // // //                     </select>
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </div>

// // // // // //               <div style={{
// // // // // //                 background: '#ffffff',
// // // // // //                 border: '2px solid #e9ecef',
// // // // // //                 borderRadius: '4px',
// // // // // //                 padding: '12px',
// // // // // //                 minHeight: '40px',
// // // // // //                 display: 'flex',
// // // // // //                 alignItems: 'center',
// // // // // //                 justifyContent: 'space-between',
// // // // // //                 fontSize: '1rem',
// // // // // //                 fontWeight: '500',
// // // // // //                 fontFamily: 'monospace'
// // // // // //               }}>
// // // // // //                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
// // // // // //                   {error ? (
// // // // // //                     <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
// // // // // //                   ) : result ? (
// // // // // //                     <span style={{ color: '#28a745' }}>{result}</span>
// // // // // //                   ) : (
// // // // // //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //                 {result && (
// // // // // //                   <button
// // // // // //                     onClick={copyResult}
// // // // // //                     style={{
// // // // // //                       marginLeft: '8px',
// // // // // //                       padding: '4px 8px',
// // // // // //                       background: '#28a745',
// // // // // //                       color: 'white',
// // // // // //                       border: 'none',
// // // // // //                       borderRadius: '4px',
// // // // // //                       cursor: 'pointer',
// // // // // //                       fontSize: '0.7rem',
// // // // // //                       fontWeight: '500'
// // // // // //                     }}
// // // // // //                   >
// // // // // //                     Copy
// // // // // //                   </button>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             </section>
// // // // // //           </main>

// // // // // //           <aside style={{ 
// // // // // //             flex: '0 0 300px', 
// // // // // //             background: '#e3f2fd', 
// // // // // //             padding: '20px',
// // // // // //             borderLeft: '1px solid #bbdefb',
// // // // // //             overflow: 'auto'
// // // // // //           }}>
// // // // // //             <h3 style={{ margin: '0 0 12px 0', color: '#1976d2', fontSize: '1rem', fontWeight: '600' }}>Information</h3>
// // // // // //             <ul style={{ margin: '0 0 16px 0', paddingLeft: '16px', color: '#424242', lineHeight: '1.4', fontSize: '0.8rem' }}>
// // // // // //               <li>Supports all bases from 2 to 36</li>
// // // // // //               <li>Uses digits 0-9 and letters A-Z for bases above 10</li>
// // // // // //               <li>Negative numbers: Default uses sign-magnitude (minus sign)</li>
// // // // // //               <li>Two's complement option available for computer-style negative representation</li>
// // // // // //               <li>Input is case-insensitive</li>
// // // // // //             </ul>
// // // // // //           </aside>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default BaseConverter;


// // // // // import React, { useState, useEffect, useCallback, useMemo } from 'react';

// // // // // const BaseConverter = () => {
// // // // //   const [inputValue, setInputValue] = useState('');
// // // // //   const [inputBase, setInputBase] = useState(10);
// // // // //   const [outputBase, setOutputBase] = useState(2);
// // // // //   const [customInputBase, setCustomInputBase] = useState('');
// // // // //   const [customOutputBase, setCustomOutputBase] = useState('');
// // // // //   const [useCustomInput, setUseCustomInput] = useState(false);
// // // // //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// // // // //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// // // // //   const [bitWidth, setBitWidth] = useState(8);
// // // // //   const [result, setResult] = useState('');
// // // // //   const [error, setError] = useState('');

// // // // //   const commonBases = useMemo(() => [
// // // // //     { value: 2, name: 'Binary' },
// // // // //     { value: 8, name: 'Octal' },
// // // // //     { value: 10, name: 'Decimal' },
// // // // //     { value: 16, name: 'Hexadecimal' },
// // // // //   ], []);

// // // // //   const quickConversions = useMemo(() => [
// // // // //     { from: 10, to: 2, label: 'Dec → Bin' },
// // // // //     { from: 2, to: 10, label: 'Bin → Dec' },
// // // // //     { from: 10, to: 16, label: 'Dec → Hex' },
// // // // //     { from: 16, to: 10, label: 'Hex → Dec' },
// // // // //     { from: 2, to: 16, label: 'Bin → Hex' },
// // // // //     { from: 16, to: 2, label: 'Hex → Bin' },
// // // // //   ], []);

// // // // //   const isValidChar = (char, base) => {
// // // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // //     const index = chars.indexOf(char.toUpperCase());
// // // // //     return index !== -1 && index < base;
// // // // //   };

// // // // //   const handleKeyDown = (e) => {
// // // // //     const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// // // // //     const key = e.key;
    
// // // // //     if (key.length > 1) return;
    
// // // // //     if (key === '-' || isValidChar(key, currentBase)) {
// // // // //       return;
// // // // //     }
    
// // // // //     e.preventDefault();
// // // // //   };

// // // // //   const handleInputChange = (e) => {
// // // // //     setInputValue(e.target.value);
// // // // //   };

// // // // //   const convertNumber = useCallback(() => {
// // // // //     setError('');
    
// // // // //     if (!inputValue.trim()) {
// // // // //       setResult('');
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// // // // //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// // // // //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// // // // //         throw new Error('Input base must be between 2 and 36');
// // // // //       }
// // // // //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// // // // //         throw new Error('Output base must be between 2 and 36');
// // // // //       }

// // // // //       const isNegative = inputValue.startsWith('-');
// // // // //       const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
// // // // //       let decimal = 0;
// // // // //       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // // //       const valueUpper = absoluteValue.toUpperCase();
      
// // // // //       for (let i = 0; i < valueUpper.length; i++) {
// // // // //         const digit = chars.indexOf(valueUpper[i]);
// // // // //         if (digit === -1 || digit >= fromBase) {
// // // // //           throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// // // // //         }
// // // // //         decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// // // // //       }

// // // // //       if (isNegative && useTwosComplement) {
// // // // //         const minValue = -Math.pow(2, bitWidth - 1);
// // // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // // //         if (-decimal < minValue || -decimal > maxValue) {
// // // // //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
// // // // //         }
        
// // // // //         const maxValue2 = Math.pow(2, bitWidth);
// // // // //         decimal = maxValue2 + (-decimal);
// // // // //       }

// // // // //       if (decimal === 0) {
// // // // //         setResult('0');
// // // // //         return;
// // // // //       }

// // // // //       let converted = '';
// // // // //       let num = Math.abs(decimal);
      
// // // // //       while (num > 0) {
// // // // //         converted = chars[num % toBase] + converted;
// // // // //         num = Math.floor(num / toBase);
// // // // //       }
      
// // // // //       setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
// // // // //     } catch (err) {
// // // // //       setError(err.message);
// // // // //       setResult('');
// // // // //     }
// // // // //   }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

// // // // //   useEffect(() => {
// // // // //     const timer = setTimeout(convertNumber, 300);
// // // // //     return () => clearTimeout(timer);
// // // // //   }, [convertNumber]);

// // // // //   const handleQuickConversion = useCallback((from, to) => {
// // // // //     setUseCustomInput(false);
// // // // //     setUseCustomOutput(false);
// // // // //     setInputBase(from);
// // // // //     setOutputBase(to);
// // // // //   }, []);

// // // // //   const resetAll = useCallback(() => {
// // // // //     setInputValue('');
// // // // //     setInputBase(10);
// // // // //     setOutputBase(2);
// // // // //     setCustomInputBase('');
// // // // //     setCustomOutputBase('');
// // // // //     setUseCustomInput(false);
// // // // //     setUseCustomOutput(false);
// // // // //     setUseTwosComplement(false);
// // // // //     setBitWidth(8);
// // // // //     setResult('');
// // // // //     setError('');
// // // // //   }, []);

// // // // //   const copyResult = useCallback(() => {
// // // // //     if (result) {
// // // // //       navigator.clipboard.writeText(result).catch(() => {
// // // // //         const textArea = document.createElement('textarea');
// // // // //         textArea.value = result;
// // // // //         document.body.appendChild(textArea);
// // // // //         textArea.select();
// // // // //         document.execCommand('copy');
// // // // //         document.body.removeChild(textArea);
// // // // //       });
// // // // //     }
// // // // //   }, [result]);

// // // // //   return (
// // // // //     <div style={{ 
// // // // //       height: '100vh', 
// // // // //       background: '#f8f9fa',
// // // // //       padding: '16px',
// // // // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // // // //       overflow: 'hidden'
// // // // //     }}>
// // // // //       <div style={{
// // // // //         height: '100%',
// // // // //         maxWidth: '1200px',
// // // // //         margin: '0 auto',
// // // // //         background: '#ffffff',
// // // // //         borderRadius: '8px',
// // // // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // //         border: '1px solid #e9ecef',
// // // // //         display: 'flex',
// // // // //         flexDirection: 'column'
// // // // //       }}>
// // // // //         <header style={{
// // // // //           background: '#2c3e50',
// // // // //           color: 'white',
// // // // //           padding: '16px 24px',
// // // // //           borderTopLeftRadius: '8px',
// // // // //           borderTopRightRadius: '8px',
// // // // //           flexShrink: 0
// // // // //         }}>
// // // // //           <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
// // // // //             Base Converter
// // // // //           </h1>
// // // // //           <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
// // // // //             Convert between any number bases from 2 to 36
// // // // //           </p>
// // // // //         </header>

// // // // //         <div style={{ 
// // // // //           flex: 1, 
// // // // //           display: 'flex', 
// // // // //           overflow: 'hidden'
// // // // //         }}>
// // // // //           <main style={{ 
// // // // //             flex: '2', 
// // // // //             padding: '20px', 
// // // // //             overflow: 'auto'
// // // // //           }}>
// // // // //             <section style={{ marginBottom: '20px' }}>
// // // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
// // // // //               <div style={{ 
// // // // //                 display: 'grid', 
// // // // //                 gridTemplateColumns: 'repeat(3, 1fr)', 
// // // // //                 gap: '8px' 
// // // // //               }}>
// // // // //                 {quickConversions.map((conv, index) => (
// // // // //                   <button
// // // // //                     key={index}
// // // // //                     onClick={() => handleQuickConversion(conv.from, conv.to)}
// // // // //                     style={{
// // // // //                       padding: '8px 12px',
// // // // //                       border: '1px solid #3498db',
// // // // //                       borderRadius: '4px',
// // // // //                       background: '#3498db',
// // // // //                       color: 'white',
// // // // //                       cursor: 'pointer',
// // // // //                       fontSize: '0.8rem',
// // // // //                       fontWeight: '500',
// // // // //                       transition: 'all 0.2s ease'
// // // // //                     }}
// // // // //                   >
// // // // //                     {conv.label}
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             </section>

// // // // //             <section style={{ 
// // // // //               background: '#f8f9fa', 
// // // // //               padding: '16px', 
// // // // //               borderRadius: '6px', 
// // // // //               marginBottom: '16px',
// // // // //               border: '1px solid #dee2e6'
// // // // //             }}>
// // // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
// // // // //               <div style={{ marginBottom: '12px' }}>
// // // // //                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // //                   Value to convert:
// // // // //                 </label>
// // // // //                 <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
// // // // //                   <input
// // // // //                     id="input-value"
// // // // //                     type="text"
// // // // //                     value={inputValue}
// // // // //                     onChange={handleInputChange}
// // // // //                     onKeyDown={handleKeyDown}
// // // // //                     placeholder="Enter number to convert..."
// // // // //                     style={{
// // // // //                       flex: 1,
// // // // //                       padding: '8px 12px',
// // // // //                       border: '1px solid #ced4da',
// // // // //                       borderRadius: '4px',
// // // // //                       fontSize: '0.9rem',
// // // // //                       transition: 'border-color 0.2s ease',
// // // // //                       boxSizing: 'border-box'
// // // // //                     }}
// // // // //                   />
// // // // //                   <button
// // // // //                     onClick={resetAll}
// // // // //                     style={{
// // // // //                       padding: '8px 12px',
// // // // //                       border: '1px solid #dc3545',
// // // // //                       borderRadius: '4px',
// // // // //                       background: '#dc3545',
// // // // //                       color: 'white',
// // // // //                       cursor: 'pointer',
// // // // //                       fontSize: '0.8rem',
// // // // //                       fontWeight: '500',
// // // // //                       whiteSpace: 'nowrap'
// // // // //                     }}
// // // // //                   >
// // // // //                     Reset
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div style={{ marginBottom: '12px' }}>
// // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // //                   <input
// // // // //                     type="checkbox"
// // // // //                     checked={useCustomInput}
// // // // //                     onChange={(e) => setUseCustomInput(e.target.checked)}
// // // // //                     style={{ marginRight: '6px' }}
// // // // //                   />
// // // // //                   Use custom base
// // // // //                 </label>
// // // // //               </div>

// // // // //               {useCustomInput ? (
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   value={customInputBase}
// // // // //                   onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // // //                   placeholder="Enter base (2-36)"
// // // // //                   style={{
// // // // //                     width: '140px',
// // // // //                     padding: '6px 8px',
// // // // //                     border: '1px solid #ced4da',
// // // // //                     borderRadius: '4px',
// // // // //                     fontSize: '0.9rem',
// // // // //                     boxSizing: 'border-box'
// // // // //                   }}
// // // // //                 />
// // // // //               ) : (
// // // // //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
// // // // //                   {commonBases.map((base) => (
// // // // //                     <button
// // // // //                       key={base.value}
// // // // //                       onClick={() => setInputBase(base.value)}
// // // // //                       style={{
// // // // //                         padding: '8px 12px',
// // // // //                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // //                         borderRadius: '4px',
// // // // //                         background: inputBase === base.value ? '#3498db' : 'white',
// // // // //                         color: inputBase === base.value ? 'white' : '#495057',
// // // // //                         cursor: 'pointer',
// // // // //                         fontSize: '0.8rem',
// // // // //                         fontWeight: '500',
// // // // //                         transition: 'all 0.2s ease'
// // // // //                       }}
// // // // //                     >
// // // // //                       {base.name} ({base.value})
// // // // //                     </button>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
// // // // //             </section>

// // // // //             <section style={{ 
// // // // //               background: '#f8f9fa', 
// // // // //               padding: '16px', 
// // // // //               borderRadius: '6px',
// // // // //               border: '1px solid #dee2e6'
// // // // //             }}>
// // // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

// // // // //               <div style={{ marginBottom: '12px' }}>
// // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // // //                   <input
// // // // //                     type="checkbox"
// // // // //                     checked={useCustomOutput}
// // // // //                     onChange={(e) => setUseCustomOutput(e.target.checked)}
// // // // //                     style={{ marginRight: '6px' }}
// // // // //                   />
// // // // //                   Use custom base
// // // // //                 </label>
// // // // //               </div>

// // // // //               {useCustomOutput ? (
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   value={customOutputBase}
// // // // //                   onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // // //                   placeholder="Enter base (2-36)"
// // // // //                   style={{
// // // // //                     width: '140px',
// // // // //                     padding: '6px 8px',
// // // // //                     border: '1px solid #ced4da',
// // // // //                     borderRadius: '4px',
// // // // //                     fontSize: '0.9rem',
// // // // //                     marginBottom: '12px',
// // // // //                     boxSizing: 'border-box'
// // // // //                   }}
// // // // //                 />
// // // // //               ) : (
// // // // //                 <div style={{ 
// // // // //                   display: 'grid', 
// // // // //                   gridTemplateColumns: 'repeat(2, 1fr)', 
// // // // //                   gap: '8px',
// // // // //                   marginBottom: '12px'
// // // // //                 }}>
// // // // //                   {commonBases.map((base) => (
// // // // //                     <button
// // // // //                       key={base.value}
// // // // //                       onClick={() => setOutputBase(base.value)}
// // // // //                       style={{
// // // // //                         padding: '8px 12px',
// // // // //                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // // //                         borderRadius: '4px',
// // // // //                         background: outputBase === base.value ? '#3498db' : 'white',
// // // // //                         color: outputBase === base.value ? 'white' : '#495057',
// // // // //                         cursor: 'pointer',
// // // // //                         fontSize: '0.8rem',
// // // // //                         fontWeight: '500',
// // // // //                         transition: 'all 0.2s ease'
// // // // //                       }}
// // // // //                     >
// // // // //                       {base.name} ({base.value})
// // // // //                     </button>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}

// // // // //               <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// // // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// // // // //                   <input
// // // // //                     type="checkbox"
// // // // //                     checked={useTwosComplement}
// // // // //                     onChange={(e) => setUseTwosComplement(e.target.checked)}
// // // // //                     style={{ marginRight: '6px' }}
// // // // //                   />
// // // // //                   Use Two's Complement
// // // // //                 </label>
                
// // // // //                 {useTwosComplement && (
// // // // //                   <div style={{ marginTop: '8px' }}>
// // // // //                     <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
// // // // //                       Bit Width:
// // // // //                     </label>
// // // // //                     <select
// // // // //                       value={bitWidth}
// // // // //                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
// // // // //                       style={{
// // // // //                         padding: '4px 8px',
// // // // //                         border: '1px solid #ffb74d',
// // // // //                         borderRadius: '4px',
// // // // //                         fontSize: '0.8rem',
// // // // //                         background: 'white'
// // // // //                       }}
// // // // //                     >
// // // // //                       <option value={4}>4-bit</option>
// // // // //                       <option value={8}>8-bit</option>
// // // // //                       <option value={16}>16-bit</option>
// // // // //                       <option value={32}>32-bit</option>
// // // // //                     </select>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               <div style={{
// // // // //                 background: '#ffffff',
// // // // //                 border: '2px solid #e9ecef',
// // // // //                 borderRadius: '4px',
// // // // //                 padding: '12px',
// // // // //                 minHeight: '40px',
// // // // //                 display: 'flex',
// // // // //                 alignItems: 'center',
// // // // //                 justifyContent: 'space-between',
// // // // //                 fontSize: '1rem',
// // // // //                 fontWeight: '500',
// // // // //                 fontFamily: 'monospace'
// // // // //               }}>
// // // // //                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
// // // // //                   {error ? (
// // // // //                     <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
// // // // //                   ) : result ? (
// // // // //                     <span style={{ color: '#28a745' }}>{result}</span>
// // // // //                   ) : (
// // // // //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// // // // //                   )}
// // // // //                 </div>
// // // // //                 {result && (
// // // // //                   <button
// // // // //                     onClick={copyResult}
// // // // //                     style={{
// // // // //                       marginLeft: '8px',
// // // // //                       padding: '4px 8px',
// // // // //                       background: '#28a745',
// // // // //                       color: 'white',
// // // // //                       border: 'none',
// // // // //                       borderRadius: '4px',
// // // // //                       cursor: 'pointer',
// // // // //                       fontSize: '0.7rem',
// // // // //                       fontWeight: '500'
// // // // //                     }}
// // // // //                   >
// // // // //                     Copy
// // // // //                   </button>
// // // // //                 )}
// // // // //               </div>
// // // // //             </section>
// // // // //           </main>

// // // // //           <aside style={{ 
// // // // //             flex: '0 0 300px', 
// // // // //             background: '#e3f2fd', 
// // // // //             padding: '20px',
// // // // //             borderLeft: '1px solid #bbdefb',
// // // // //             overflow: 'auto'
// // // // //           }}>
// // // // //             <h3 style={{ margin: '0 0 12px 0', color: '#1976d2', fontSize: '1rem', fontWeight: '600' }}>Information</h3>
// // // // //             <ul style={{ margin: '0 0 16px 0', paddingLeft: '16px', color: '#424242', lineHeight: '1.4', fontSize: '0.8rem' }}>
// // // // //               <li>Supports all bases from 2 to 36</li>
// // // // //               <li>Uses digits 0-9 and letters A-Z for bases above 10</li>
// // // // //               <li>Negative numbers: Default uses sign-magnitude (minus sign)</li>
// // // // //               <li>Two's complement option available for computer-style negative representation</li>
// // // // //               <li>Input is case-insensitive</li>
// // // // //             </ul>
// // // // //           </aside>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BaseConverter;


// // // // import React, { useState, useEffect, useCallback, useMemo } from 'react';
// // // // import baseConversionsExplanations from './baseConversionsExplanations';

// // // // const BaseConverter = ({ explanations = baseConversionsExplanations }) => {
// // // //   const [inputValue, setInputValue] = useState('');
// // // //   const [inputBase, setInputBase] = useState(10);
// // // //   const [outputBase, setOutputBase] = useState(2);
// // // //   const [customInputBase, setCustomInputBase] = useState('');
// // // //   const [customOutputBase, setCustomOutputBase] = useState('');
// // // //   const [useCustomInput, setUseCustomInput] = useState(false);
// // // //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// // // //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// // // //   const [bitWidth, setBitWidth] = useState(8);
// // // //   const [result, setResult] = useState('');
// // // //   const [error, setError] = useState('');

// // // //   const commonBases = useMemo(() => [
// // // //     { value: 2, name: 'Binary' },
// // // //     { value: 8, name: 'Octal' },
// // // //     { value: 10, name: 'Decimal' },
// // // //     { value: 16, name: 'Hexadecimal' },
// // // //   ], []);

// // // //   const quickConversions = useMemo(() => [
// // // //     { from: 10, to: 2, label: 'Dec → Bin' },
// // // //     { from: 2, to: 10, label: 'Bin → Dec' },
// // // //     { from: 10, to: 16, label: 'Dec → Hex' },
// // // //     { from: 16, to: 10, label: 'Hex → Dec' },
// // // //     { from: 2, to: 16, label: 'Bin → Hex' },
// // // //     { from: 16, to: 2, label: 'Hex → Bin' },
// // // //   ], []);

// // // //   const isValidChar = (char, base) => {
// // // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // //     const index = chars.indexOf(char.toUpperCase());
// // // //     return index !== -1 && index < base;
// // // //   };

// // // //   const handleKeyDown = (e) => {
// // // //     const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// // // //     const key = e.key;
    
// // // //     if (key.length > 1) return;
    
// // // //     if (key === '-' || isValidChar(key, currentBase)) {
// // // //       return;
// // // //     }
    
// // // //     e.preventDefault();
// // // //   };

// // // //   const handleInputChange = (e) => {
// // // //     setInputValue(e.target.value);
// // // //   };

// // // //   const convertNumber = useCallback(() => {
// // // //     setError('');
    
// // // //     if (!inputValue.trim()) {
// // // //       setResult('');
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// // // //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// // // //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// // // //         throw new Error('Input base must be between 2 and 36');
// // // //       }
// // // //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// // // //         throw new Error('Output base must be between 2 and 36');
// // // //       }

// // // //       const isNegative = inputValue.startsWith('-');
// // // //       const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
// // // //       let decimal = 0;
// // // //       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // // //       const valueUpper = absoluteValue.toUpperCase();
      
// // // //       for (let i = 0; i < valueUpper.length; i++) {
// // // //         const digit = chars.indexOf(valueUpper[i]);
// // // //         if (digit === -1 || digit >= fromBase) {
// // // //           throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// // // //         }
// // // //         decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// // // //       }

// // // //       if (isNegative && useTwosComplement) {
// // // //         const minValue = -Math.pow(2, bitWidth - 1);
// // // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // // //         if (-decimal < minValue || -decimal > maxValue) {
// // // //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
// // // //         }
        
// // // //         const maxValue2 = Math.pow(2, bitWidth);
// // // //         decimal = maxValue2 + (-decimal);
// // // //       }

// // // //       if (decimal === 0) {
// // // //         setResult('0');
// // // //         return;
// // // //       }

// // // //       let converted = '';
// // // //       let num = Math.abs(decimal);
      
// // // //       while (num > 0) {
// // // //         converted = chars[num % toBase] + converted;
// // // //         num = Math.floor(num / toBase);
// // // //       }
      
// // // //       setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
// // // //     } catch (err) {
// // // //       setError(err.message);
// // // //       setResult('');
// // // //     }
// // // //   }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

// // // //   useEffect(() => {
// // // //     const timer = setTimeout(convertNumber, 300);
// // // //     return () => clearTimeout(timer);
// // // //   }, [convertNumber]);

// // // //   const handleQuickConversion = useCallback((from, to) => {
// // // //     setUseCustomInput(false);
// // // //     setUseCustomOutput(false);
// // // //     setInputBase(from);
// // // //     setOutputBase(to);
// // // //   }, []);

// // // //   const resetAll = useCallback(() => {
// // // //     setInputValue('');
// // // //     setInputBase(10);
// // // //     setOutputBase(2);
// // // //     setCustomInputBase('');
// // // //     setCustomOutputBase('');
// // // //     setUseCustomInput(false);
// // // //     setUseCustomOutput(false);
// // // //     setUseTwosComplement(false);
// // // //     setBitWidth(8);
// // // //     setResult('');
// // // //     setError('');
// // // //   }, []);

// // // //   const copyResult = useCallback(() => {
// // // //     if (result) {
// // // //       navigator.clipboard.writeText(result).catch(() => {
// // // //         const textArea = document.createElement('textarea');
// // // //         textArea.value = result;
// // // //         document.body.appendChild(textArea);
// // // //         textArea.select();
// // // //         document.execCommand('copy');
// // // //         document.body.removeChild(textArea);
// // // //       });
// // // //     }
// // // //   }, [result]);

// // // //   return (
// // // //     <div style={{ 
// // // //       height: '100vh', 
// // // //       background: '#f8f9fa',
// // // //       padding: '16px',
// // // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // // //       overflow: 'hidden'
// // // //     }}>
// // // //       <div style={{
// // // //         height: '100%',
// // // //         maxWidth: '1600px',
// // // //         margin: '0 auto',
// // // //         background: '#ffffff',
// // // //         borderRadius: '8px',
// // // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // //         border: '1px solid #e9ecef',
// // // //         display: 'flex',
// // // //         flexDirection: 'column'
// // // //       }}>
// // // //         <header style={{
// // // //           background: '#2c3e50',
// // // //           color: 'white',
// // // //           padding: '16px 24px',
// // // //           borderTopLeftRadius: '8px',
// // // //           borderTopRightRadius: '8px',
// // // //           flexShrink: 0
// // // //         }}>
// // // //           <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
// // // //             Base Converter
// // // //           </h1>
// // // //           <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
// // // //             Convert between any number bases from 2 to 36
// // // //           </p>
// // // //         </header>

// // // //         <div style={{ 
// // // //           flex: 1, 
// // // //           display: 'flex', 
// // // //           overflow: 'hidden'
// // // //         }}>
// // // //           <main style={{ 
// // // //             flex: '2', 
// // // //             padding: '20px', 
// // // //             overflow: 'auto'
// // // //           }}>
// // // //             <section style={{ marginBottom: '20px' }}>
// // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
// // // //               <div style={{ 
// // // //                 display: 'grid', 
// // // //                 gridTemplateColumns: 'repeat(3, 1fr)', 
// // // //                 gap: '8px' 
// // // //               }}>
// // // //                 {quickConversions.map((conv, index) => (
// // // //                   <button
// // // //                     key={index}
// // // //                     onClick={() => handleQuickConversion(conv.from, conv.to)}
// // // //                     style={{
// // // //                       padding: '8px 12px',
// // // //                       border: '1px solid #3498db',
// // // //                       borderRadius: '4px',
// // // //                       background: '#3498db',
// // // //                       color: 'white',
// // // //                       cursor: 'pointer',
// // // //                       fontSize: '0.8rem',
// // // //                       fontWeight: '500',
// // // //                       transition: 'all 0.2s ease'
// // // //                     }}
// // // //                   >
// // // //                     {conv.label}
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             </section>

// // // //             <section style={{ 
// // // //               background: '#f8f9fa', 
// // // //               padding: '16px', 
// // // //               borderRadius: '6px', 
// // // //               marginBottom: '16px',
// // // //               border: '1px solid #dee2e6'
// // // //             }}>
// // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
// // // //               <div style={{ marginBottom: '12px' }}>
// // // //                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // //                   Value to convert:
// // // //                 </label>
// // // //                 <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
// // // //                   <input
// // // //                     id="input-value"
// // // //                     type="text"
// // // //                     value={inputValue}
// // // //                     onChange={handleInputChange}
// // // //                     onKeyDown={handleKeyDown}
// // // //                     placeholder="Enter number to convert..."
// // // //                     style={{
// // // //                       flex: 1,
// // // //                       padding: '8px 12px',
// // // //                       border: '1px solid #ced4da',
// // // //                       borderRadius: '4px',
// // // //                       fontSize: '0.9rem',
// // // //                       transition: 'border-color 0.2s ease',
// // // //                       boxSizing: 'border-box'
// // // //                     }}
// // // //                   />
// // // //                   <button
// // // //                     onClick={resetAll}
// // // //                     style={{
// // // //                       padding: '8px 12px',
// // // //                       border: '1px solid #dc3545',
// // // //                       borderRadius: '4px',
// // // //                       background: '#dc3545',
// // // //                       color: 'white',
// // // //                       cursor: 'pointer',
// // // //                       fontSize: '0.8rem',
// // // //                       fontWeight: '500',
// // // //                       whiteSpace: 'nowrap'
// // // //                     }}
// // // //                   >
// // // //                     Reset
// // // //                   </button>
// // // //                 </div>
// // // //               </div>

// // // //               <div style={{ marginBottom: '12px' }}>
// // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // //                   <input
// // // //                     type="checkbox"
// // // //                     checked={useCustomInput}
// // // //                     onChange={(e) => setUseCustomInput(e.target.checked)}
// // // //                     style={{ marginRight: '6px' }}
// // // //                   />
// // // //                   Use custom base
// // // //                 </label>
// // // //               </div>

// // // //               {useCustomInput ? (
// // // //                 <input
// // // //                   type="text"
// // // //                   value={customInputBase}
// // // //                   onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // //                   placeholder="Enter base (2-36)"
// // // //                   style={{
// // // //                     width: '140px',
// // // //                     padding: '6px 8px',
// // // //                     border: '1px solid #ced4da',
// // // //                     borderRadius: '4px',
// // // //                     fontSize: '0.9rem',
// // // //                     boxSizing: 'border-box'
// // // //                   }}
// // // //                 />
// // // //               ) : (
// // // //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
// // // //                   {commonBases.map((base) => (
// // // //                     <button
// // // //                       key={base.value}
// // // //                       onClick={() => setInputBase(base.value)}
// // // //                       style={{
// // // //                         padding: '8px 12px',
// // // //                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // //                         borderRadius: '4px',
// // // //                         background: inputBase === base.value ? '#3498db' : 'white',
// // // //                         color: inputBase === base.value ? 'white' : '#495057',
// // // //                         cursor: 'pointer',
// // // //                         fontSize: '0.8rem',
// // // //                         fontWeight: '500',
// // // //                         transition: 'all 0.2s ease'
// // // //                       }}
// // // //                     >
// // // //                       {base.name} ({base.value})
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </section>

// // // //             <section style={{ 
// // // //               background: '#f8f9fa', 
// // // //               padding: '16px', 
// // // //               borderRadius: '6px',
// // // //               border: '1px solid #dee2e6'
// // // //             }}>
// // // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

// // // //               <div style={{ marginBottom: '12px' }}>
// // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // // //                   <input
// // // //                     type="checkbox"
// // // //                     checked={useCustomOutput}
// // // //                     onChange={(e) => setUseCustomOutput(e.target.checked)}
// // // //                     style={{ marginRight: '6px' }}
// // // //                   />
// // // //                   Use custom base
// // // //                 </label>
// // // //               </div>

// // // //               {useCustomOutput ? (
// // // //                 <input
// // // //                   type="text"
// // // //                   value={customOutputBase}
// // // //                   onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // // //                   placeholder="Enter base (2-36)"
// // // //                   style={{
// // // //                     width: '140px',
// // // //                     padding: '6px 8px',
// // // //                     border: '1px solid #ced4da',
// // // //                     borderRadius: '4px',
// // // //                     fontSize: '0.9rem',
// // // //                     marginBottom: '12px',
// // // //                     boxSizing: 'border-box'
// // // //                   }}
// // // //                 />
// // // //               ) : (
// // // //                 <div style={{ 
// // // //                   display: 'grid', 
// // // //                   gridTemplateColumns: 'repeat(2, 1fr)', 
// // // //                   gap: '8px',
// // // //                   marginBottom: '12px'
// // // //                 }}>
// // // //                   {commonBases.map((base) => (
// // // //                     <button
// // // //                       key={base.value}
// // // //                       onClick={() => setOutputBase(base.value)}
// // // //                       style={{
// // // //                         padding: '8px 12px',
// // // //                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // // //                         borderRadius: '4px',
// // // //                         background: outputBase === base.value ? '#3498db' : 'white',
// // // //                         color: outputBase === base.value ? 'white' : '#495057',
// // // //                         cursor: 'pointer',
// // // //                         fontSize: '0.8rem',
// // // //                         fontWeight: '500',
// // // //                         transition: 'all 0.2s ease'
// // // //                       }}
// // // //                     >
// // // //                       {base.name} ({base.value})
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //               )}

// // // //               <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// // // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// // // //                   <input
// // // //                     type="checkbox"
// // // //                     checked={useTwosComplement}
// // // //                     onChange={(e) => setUseTwosComplement(e.target.checked)}
// // // //                     style={{ marginRight: '6px' }}
// // // //                   />
// // // //                   Use Two's Complement
// // // //                 </label>
                
// // // //                 {useTwosComplement && (
// // // //                   <div style={{ marginTop: '8px' }}>
// // // //                     <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
// // // //                       Bit Width:
// // // //                     </label>
// // // //                     <select
// // // //                       value={bitWidth}
// // // //                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
// // // //                       style={{
// // // //                         padding: '4px 8px',
// // // //                         border: '1px solid #ffb74d',
// // // //                         borderRadius: '4px',
// // // //                         fontSize: '0.8rem',
// // // //                         background: 'white'
// // // //                       }}
// // // //                     >
// // // //                       <option value={4}>4-bit</option>
// // // //                       <option value={8}>8-bit</option>
// // // //                       <option value={16}>16-bit</option>
// // // //                       <option value={32}>32-bit</option>
// // // //                     </select>
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               <div style={{
// // // //                 background: '#ffffff',
// // // //                 border: '2px solid #e9ecef',
// // // //                 borderRadius: '4px',
// // // //                 padding: '12px',
// // // //                 minHeight: '40px',
// // // //                 display: 'flex',
// // // //                 alignItems: 'center',
// // // //                 justifyContent: 'space-between',
// // // //                 fontSize: '1rem',
// // // //                 fontWeight: '500',
// // // //                 fontFamily: 'monospace'
// // // //               }}>
// // // //                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
// // // //                   {error ? (
// // // //                     <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
// // // //                   ) : result ? (
// // // //                     <span style={{ color: '#28a745' }}>{result}</span>
// // // //                   ) : (
// // // //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// // // //                   )}
// // // //                 </div>
// // // //                 {result && (
// // // //                   <button
// // // //                     onClick={copyResult}
// // // //                     style={{
// // // //                       marginLeft: '8px',
// // // //                       padding: '4px 8px',
// // // //                       background: '#28a745',
// // // //                       color: 'white',
// // // //                       border: 'none',
// // // //                       borderRadius: '4px',
// // // //                       cursor: 'pointer',
// // // //                       fontSize: '0.7rem',
// // // //                       fontWeight: '500'
// // // //                     }}
// // // //                   >
// // // //                     Copy
// // // //                   </button>
// // // //                 )}
// // // //               </div>
// // // //             </section>
// // // //           </main>

// // // //           <aside style={{ 
// // // //             flex: '0 0 500px', 
// // // //             background: '#e3f2fd', 
// // // //             padding: '20px',
// // // //             borderLeft: '1px solid #bbdefb',
// // // //             overflow: 'auto'
// // // //           }}>
// // // //             <h3 style={{ margin: '0 0 16px 0', color: '#1976d2', fontSize: '1.1rem', fontWeight: '600' }}>Base System Information</h3>
            
// // // //             <div style={{ marginBottom: '20px' }}>
// // // //               <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>{explanations.binary.title}</h4>
// // // //               <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>{explanations.binary.description}</p>
// // // //               <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>{explanations.binary.example}</p>
// // // //             </div>

// // // //             <div style={{ marginBottom: '20px' }}>
// // // //               <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>{explanations.octal.title}</h4>
// // // //               <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>{explanations.octal.description}</p>
// // // //               <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>{explanations.octal.example}</p>
// // // //             </div>

// // // //             <div style={{ marginBottom: '20px' }}>
// // // //               <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>{explanations.decimal.title}</h4>
// // // //               <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>{explanations.decimal.description}</p>
// // // //               <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>{explanations.decimal.example}</p>
// // // //             </div>

// // // //             <div style={{ marginBottom: '20px' }}>
// // // //               <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>{explanations.hexadecimal.title}</h4>
// // // //               <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>{explanations.hexadecimal.description}</p>
// // // //               <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>{explanations.hexadecimal.example}</p>
// // // //             </div>

// // // //             <div style={{ marginBottom: '20px' }}>
// // // //               <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>{explanations.twosComplement.title}</h4>
// // // //               <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>{explanations.twosComplement.description}</p>
// // // //               <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>{explanations.twosComplement.example}</p>
// // // //             </div>

// // // //             <div style={{ marginBottom: '20px' }}>
// // // //               <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>{explanations.conversion.title}</h4>
// // // //               <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>{explanations.conversion.description}</p>
// // // //               <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>{explanations.conversion.example}</p>
// // // //             </div>

// // // //             <div style={{ background: '#f3e5f5', padding: '12px', borderRadius: '4px', border: '1px solid #e1bee7' }}>
// // // //               <p style={{ margin: 0, color: '#6a1b9a', fontSize: '0.8rem', lineHeight: '1.4' }}>
// // // //                 <strong>Tip:</strong> Use the quick conversion buttons for common operations, or enable custom bases for any base from 2-36.
// // // //               </p>
// // // //             </div>
// // // //           </aside>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BaseConverter;


// // // import React, { useState, useEffect, useCallback, useMemo } from 'react';
// // // import baseConversionsExplanations from './baseConversionsExplanations';

// // // const BaseConverter = ({ explanations = baseConversionsExplanations }) => {
// // //   const [inputValue, setInputValue] = useState('');
// // //   const [inputBase, setInputBase] = useState(10);
// // //   const [outputBase, setOutputBase] = useState(2);
// // //   const [customInputBase, setCustomInputBase] = useState('');
// // //   const [customOutputBase, setCustomOutputBase] = useState('');
// // //   const [useCustomInput, setUseCustomInput] = useState(false);
// // //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// // //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// // //   const [bitWidth, setBitWidth] = useState(8);
// // //   const [result, setResult] = useState('');
// // //   const [error, setError] = useState('');

// // //   const commonBases = useMemo(() => [
// // //     { value: 2, name: 'Binary' },
// // //     { value: 8, name: 'Octal' },
// // //     { value: 10, name: 'Decimal' },
// // //     { value: 16, name: 'Hexadecimal' },
// // //   ], []);

// // //   const quickConversions = useMemo(() => [
// // //     { from: 10, to: 2, label: 'Dec → Bin' },
// // //     { from: 2, to: 10, label: 'Bin → Dec' },
// // //     { from: 10, to: 16, label: 'Dec → Hex' },
// // //     { from: 16, to: 10, label: 'Hex → Dec' },
// // //     { from: 2, to: 16, label: 'Bin → Hex' },
// // //     { from: 16, to: 2, label: 'Hex → Bin' },
// // //   ], []);

// // //   const getRelevantExplanations = useMemo(() => {
// // //     const currentInputBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// // //     const currentOutputBase = useCustomOutput ? parseInt(customOutputBase) || 2 : outputBase;
    
// // //     const relevantKeys = new Set();
    
// // //     // Add explanations based on input base
// // //     if (currentInputBase === 2) relevantKeys.add('binary');
// // //     if (currentInputBase === 8) relevantKeys.add('octal');
// // //     if (currentInputBase === 10) relevantKeys.add('decimal');
// // //     if (currentInputBase === 16) relevantKeys.add('hexadecimal');
    
// // //     // Add explanations based on output base
// // //     if (currentOutputBase === 2) relevantKeys.add('binary');
// // //     if (currentOutputBase === 8) relevantKeys.add('octal');
// // //     if (currentOutputBase === 10) relevantKeys.add('decimal');
// // //     if (currentOutputBase === 16) relevantKeys.add('hexadecimal');
    
// // //     // Always add conversion explanation
// // //     relevantKeys.add('conversion');
    
// // //     // Add two's complement if enabled
// // //     if (useTwosComplement) relevantKeys.add('twosComplement');
    
// // //     return Array.from(relevantKeys).map(key => ({
// // //       key,
// // //       ...explanations[key]
// // //     }));
// // //   }, [inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, explanations]);

// // //   const isValidChar = (char, base) => {
// // //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // //     const index = chars.indexOf(char.toUpperCase());
// // //     return index !== -1 && index < base;
// // //   };

// // //   const handleKeyDown = (e) => {
// // //     const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// // //     const key = e.key;
    
// // //     if (key.length > 1) return;
    
// // //     if (key === '-' || isValidChar(key, currentBase)) {
// // //       return;
// // //     }
    
// // //     e.preventDefault();
// // //   };

// // //   const handleInputChange = (e) => {
// // //     setInputValue(e.target.value);
// // //   };

// // //   const convertNumber = useCallback(() => {
// // //     setError('');
    
// // //     if (!inputValue.trim()) {
// // //       setResult('');
// // //       return;
// // //     }

// // //     try {
// // //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// // //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// // //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// // //         throw new Error('Input base must be between 2 and 36');
// // //       }
// // //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// // //         throw new Error('Output base must be between 2 and 36');
// // //       }

// // //       const isNegative = inputValue.startsWith('-');
// // //       const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
// // //       let decimal = 0;
// // //       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// // //       const valueUpper = absoluteValue.toUpperCase();
      
// // //       for (let i = 0; i < valueUpper.length; i++) {
// // //         const digit = chars.indexOf(valueUpper[i]);
// // //         if (digit === -1 || digit >= fromBase) {
// // //           throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// // //         }
// // //         decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// // //       }

// // //       if (isNegative && useTwosComplement) {
// // //         const minValue = -Math.pow(2, bitWidth - 1);
// // //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// // //         if (-decimal < minValue || -decimal > maxValue) {
// // //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
// // //         }
        
// // //         const maxValue2 = Math.pow(2, bitWidth);
// // //         decimal = maxValue2 + (-decimal);
// // //       }

// // //       if (decimal === 0) {
// // //         setResult('0');
// // //         return;
// // //       }

// // //       let converted = '';
// // //       let num = Math.abs(decimal);
      
// // //       while (num > 0) {
// // //         converted = chars[num % toBase] + converted;
// // //         num = Math.floor(num / toBase);
// // //       }
      
// // //       setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
// // //     } catch (err) {
// // //       setError(err.message);
// // //       setResult('');
// // //     }
// // //   }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

// // //   useEffect(() => {
// // //     const timer = setTimeout(convertNumber, 300);
// // //     return () => clearTimeout(timer);
// // //   }, [convertNumber]);

// // //   const handleQuickConversion = useCallback((from, to) => {
// // //     setUseCustomInput(false);
// // //     setUseCustomOutput(false);
// // //     setInputBase(from);
// // //     setOutputBase(to);
// // //   }, []);

// // //   const resetAll = useCallback(() => {
// // //     setInputValue('');
// // //     setInputBase(10);
// // //     setOutputBase(2);
// // //     setCustomInputBase('');
// // //     setCustomOutputBase('');
// // //     setUseCustomInput(false);
// // //     setUseCustomOutput(false);
// // //     setUseTwosComplement(false);
// // //     setBitWidth(8);
// // //     setResult('');
// // //     setError('');
// // //   }, []);

// // //   const copyResult = useCallback(() => {
// // //     if (result) {
// // //       navigator.clipboard.writeText(result).catch(() => {
// // //         const textArea = document.createElement('textarea');
// // //         textArea.value = result;
// // //         document.body.appendChild(textArea);
// // //         textArea.select();
// // //         document.execCommand('copy');
// // //         document.body.removeChild(textArea);
// // //       });
// // //     }
// // //   }, [result]);

// // //   return (
// // //     <div style={{ 
// // //       height: '100vh', 
// // //       background: '#f8f9fa',
// // //       padding: '16px',
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       overflow: 'hidden'
// // //     }}>
// // //       <div style={{
// // //         height: '100%',
// // //         maxWidth: '1600px',
// // //         margin: '0 auto',
// // //         background: '#ffffff',
// // //         borderRadius: '8px',
// // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // //         border: '1px solid #e9ecef',
// // //         display: 'flex',
// // //         flexDirection: 'column'
// // //       }}>
// // //         <header style={{
// // //           background: '#2c3e50',
// // //           color: 'white',
// // //           padding: '16px 24px',
// // //           borderTopLeftRadius: '8px',
// // //           borderTopRightRadius: '8px',
// // //           flexShrink: 0
// // //         }}>
// // //           <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
// // //             Base Converter
// // //           </h1>
// // //           <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
// // //             Convert between any number bases from 2 to 36
// // //           </p>
// // //         </header>

// // //         <div style={{ 
// // //           flex: 1, 
// // //           display: 'flex', 
// // //           overflow: 'hidden'
// // //         }}>
// // //           <main style={{ 
// // //             flex: '2', 
// // //             padding: '20px', 
// // //             overflow: 'auto'
// // //           }}>
// // //             <section style={{ marginBottom: '20px' }}>
// // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
// // //               <div style={{ 
// // //                 display: 'grid', 
// // //                 gridTemplateColumns: 'repeat(3, 1fr)', 
// // //                 gap: '8px' 
// // //               }}>
// // //                 {quickConversions.map((conv, index) => (
// // //                   <button
// // //                     key={index}
// // //                     onClick={() => handleQuickConversion(conv.from, conv.to)}
// // //                     style={{
// // //                       padding: '8px 12px',
// // //                       border: '1px solid #3498db',
// // //                       borderRadius: '4px',
// // //                       background: '#3498db',
// // //                       color: 'white',
// // //                       cursor: 'pointer',
// // //                       fontSize: '0.8rem',
// // //                       fontWeight: '500',
// // //                       transition: 'all 0.2s ease'
// // //                     }}
// // //                   >
// // //                     {conv.label}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </section>

// // //             <section style={{ 
// // //               background: '#f8f9fa', 
// // //               padding: '16px', 
// // //               borderRadius: '6px', 
// // //               marginBottom: '16px',
// // //               border: '1px solid #dee2e6'
// // //             }}>
// // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
// // //               <div style={{ marginBottom: '12px' }}>
// // //                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // //                   Value to convert:
// // //                 </label>
// // //                 <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
// // //                   <input
// // //                     id="input-value"
// // //                     type="text"
// // //                     value={inputValue}
// // //                     onChange={handleInputChange}
// // //                     onKeyDown={handleKeyDown}
// // //                     placeholder="Enter number to convert..."
// // //                     style={{
// // //                       flex: 1,
// // //                       padding: '8px 12px',
// // //                       border: '1px solid #ced4da',
// // //                       borderRadius: '4px',
// // //                       fontSize: '0.9rem',
// // //                       transition: 'border-color 0.2s ease',
// // //                       boxSizing: 'border-box'
// // //                     }}
// // //                   />
// // //                   <button
// // //                     onClick={resetAll}
// // //                     style={{
// // //                       padding: '8px 12px',
// // //                       border: '1px solid #dc3545',
// // //                       borderRadius: '4px',
// // //                       background: '#dc3545',
// // //                       color: 'white',
// // //                       cursor: 'pointer',
// // //                       fontSize: '0.8rem',
// // //                       fontWeight: '500',
// // //                       whiteSpace: 'nowrap'
// // //                     }}
// // //                   >
// // //                     Reset
// // //                   </button>
// // //                 </div>
// // //               </div>

// // //               <div style={{ marginBottom: '12px' }}>
// // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // //                   <input
// // //                     type="checkbox"
// // //                     checked={useCustomInput}
// // //                     onChange={(e) => setUseCustomInput(e.target.checked)}
// // //                     style={{ marginRight: '6px' }}
// // //                   />
// // //                   Use custom base
// // //                 </label>
// // //               </div>

// // //               {useCustomInput ? (
// // //                 <input
// // //                   type="text"
// // //                   value={customInputBase}
// // //                   onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // //                   placeholder="Enter base (2-36)"
// // //                   style={{
// // //                     width: '140px',
// // //                     padding: '6px 8px',
// // //                     border: '1px solid #ced4da',
// // //                     borderRadius: '4px',
// // //                     fontSize: '0.9rem',
// // //                     boxSizing: 'border-box'
// // //                   }}
// // //                 />
// // //               ) : (
// // //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
// // //                   {commonBases.map((base) => (
// // //                     <button
// // //                       key={base.value}
// // //                       onClick={() => setInputBase(base.value)}
// // //                       style={{
// // //                         padding: '8px 12px',
// // //                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // //                         borderRadius: '4px',
// // //                         background: inputBase === base.value ? '#3498db' : 'white',
// // //                         color: inputBase === base.value ? 'white' : '#495057',
// // //                         cursor: 'pointer',
// // //                         fontSize: '0.8rem',
// // //                         fontWeight: '500',
// // //                         transition: 'all 0.2s ease'
// // //                       }}
// // //                     >
// // //                       {base.name} ({base.value})
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </section>

// // //             <section style={{ 
// // //               background: '#f8f9fa', 
// // //               padding: '16px', 
// // //               borderRadius: '6px',
// // //               border: '1px solid #dee2e6'
// // //             }}>
// // //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

// // //               <div style={{ marginBottom: '12px' }}>
// // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// // //                   <input
// // //                     type="checkbox"
// // //                     checked={useCustomOutput}
// // //                     onChange={(e) => setUseCustomOutput(e.target.checked)}
// // //                     style={{ marginRight: '6px' }}
// // //                   />
// // //                   Use custom base
// // //                 </label>
// // //               </div>

// // //               {useCustomOutput ? (
// // //                 <input
// // //                   type="text"
// // //                   value={customOutputBase}
// // //                   onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
// // //                   placeholder="Enter base (2-36)"
// // //                   style={{
// // //                     width: '140px',
// // //                     padding: '6px 8px',
// // //                     border: '1px solid #ced4da',
// // //                     borderRadius: '4px',
// // //                     fontSize: '0.9rem',
// // //                     marginBottom: '12px',
// // //                     boxSizing: 'border-box'
// // //                   }}
// // //                 />
// // //               ) : (
// // //                 <div style={{ 
// // //                   display: 'grid', 
// // //                   gridTemplateColumns: 'repeat(2, 1fr)', 
// // //                   gap: '8px',
// // //                   marginBottom: '12px'
// // //                 }}>
// // //                   {commonBases.map((base) => (
// // //                     <button
// // //                       key={base.value}
// // //                       onClick={() => setOutputBase(base.value)}
// // //                       style={{
// // //                         padding: '8px 12px',
// // //                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// // //                         borderRadius: '4px',
// // //                         background: outputBase === base.value ? '#3498db' : 'white',
// // //                         color: outputBase === base.value ? 'white' : '#495057',
// // //                         cursor: 'pointer',
// // //                         fontSize: '0.8rem',
// // //                         fontWeight: '500',
// // //                         transition: 'all 0.2s ease'
// // //                       }}
// // //                     >
// // //                       {base.name} ({base.value})
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               )}

// // //               <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// // //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// // //                   <input
// // //                     type="checkbox"
// // //                     checked={useTwosComplement}
// // //                     onChange={(e) => setUseTwosComplement(e.target.checked)}
// // //                     style={{ marginRight: '6px' }}
// // //                   />
// // //                   Use Two's Complement
// // //                 </label>
                
// // //                 {useTwosComplement && (
// // //                   <div style={{ marginTop: '8px' }}>
// // //                     <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
// // //                       Bit Width:
// // //                     </label>
// // //                     <select
// // //                       value={bitWidth}
// // //                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
// // //                       style={{
// // //                         padding: '4px 8px',
// // //                         border: '1px solid #ffb74d',
// // //                         borderRadius: '4px',
// // //                         fontSize: '0.8rem',
// // //                         background: 'white'
// // //                       }}
// // //                     >
// // //                       <option value={4}>4-bit</option>
// // //                       <option value={8}>8-bit</option>
// // //                       <option value={16}>16-bit</option>
// // //                       <option value={32}>32-bit</option>
// // //                     </select>
// // //                   </div>
// // //                 )}
// // //               </div>

// // //               <div style={{
// // //                 background: '#ffffff',
// // //                 border: '2px solid #e9ecef',
// // //                 borderRadius: '4px',
// // //                 padding: '12px',
// // //                 minHeight: '40px',
// // //                 display: 'flex',
// // //                 alignItems: 'center',
// // //                 justifyContent: 'space-between',
// // //                 fontSize: '1rem',
// // //                 fontWeight: '500',
// // //                 fontFamily: 'monospace'
// // //               }}>
// // //                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
// // //                   {error ? (
// // //                     <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
// // //                   ) : result ? (
// // //                     <span style={{ color: '#28a745' }}>{result}</span>
// // //                   ) : (
// // //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// // //                   )}
// // //                 </div>
// // //                 {result && (
// // //                   <button
// // //                     onClick={copyResult}
// // //                     style={{
// // //                       marginLeft: '8px',
// // //                       padding: '4px 8px',
// // //                       background: '#28a745',
// // //                       color: 'white',
// // //                       border: 'none',
// // //                       borderRadius: '4px',
// // //                       cursor: 'pointer',
// // //                       fontSize: '0.7rem',
// // //                       fontWeight: '500'
// // //                     }}
// // //                   >
// // //                     Copy
// // //                   </button>
// // //                 )}
// // //               </div>
// // //             </section>
// // //           </main>

// // //           <aside style={{ 
// // //             flex: '0 0 500px', 
// // //             background: '#e3f2fd', 
// // //             padding: '20px',
// // //             borderLeft: '1px solid #bbdefb',
// // //             overflow: 'auto'
// // //           }}>
// // //             <h3 style={{ margin: '0 0 16px 0', color: '#1976d2', fontSize: '1.1rem', fontWeight: '600' }}>
// // //               Relevant Information
// // //             </h3>
            
// // //             {getRelevantExplanations.map((explanation, index) => (
// // //               <div key={explanation.key} style={{ marginBottom: '20px' }}>
// // //                 <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>
// // //                   {explanation.title}
// // //                 </h4>
// // //                 <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>
// // //                   {explanation.description}
// // //                 </p>
// // //                 <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>
// // //                   {explanation.example}
// // //                 </p>
// // //               </div>
// // //             ))}

// // //             <div style={{ background: '#f3e5f5', padding: '12px', borderRadius: '4px', border: '1px solid #e1bee7' }}>
// // //               <p style={{ margin: 0, color: '#6a1b9a', fontSize: '0.8rem', lineHeight: '1.4' }}>
// // //                 <strong>Tip:</strong> Use the quick conversion buttons for common operations, or enable custom bases for any base from 2-36.
// // //               </p>
// // //             </div>
// // //           </aside>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BaseConverter;


// // import React, { useState, useEffect, useCallback, useMemo } from 'react';
// // import baseConversionsExplanations from './baseConversionsExplanations';

// // const BaseConverter = ({ explanations = baseConversionsExplanations }) => {
// //   const [inputValue, setInputValue] = useState('');
// //   const [inputBase, setInputBase] = useState(10);
// //   const [outputBase, setOutputBase] = useState(2);
// //   const [customInputBase, setCustomInputBase] = useState('');
// //   const [customOutputBase, setCustomOutputBase] = useState('');
// //   const [useCustomInput, setUseCustomInput] = useState(false);
// //   const [useCustomOutput, setUseCustomOutput] = useState(false);
// //   const [useTwosComplement, setUseTwosComplement] = useState(false);
// //   const [bitWidth, setBitWidth] = useState(8);
// //   const [result, setResult] = useState('');
// //   const [error, setError] = useState('');

// //   const commonBases = useMemo(() => [
// //     { value: 2, name: 'Binary' },
// //     { value: 8, name: 'Octal' },
// //     { value: 10, name: 'Decimal' },
// //     { value: 16, name: 'Hexadecimal' },
// //   ], []);

// //   const quickConversions = useMemo(() => [
// //     { from: 10, to: 2, label: 'Dec → Bin' },
// //     { from: 2, to: 10, label: 'Bin → Dec' },
// //     { from: 10, to: 16, label: 'Dec → Hex' },
// //     { from: 16, to: 10, label: 'Hex → Dec' },
// //     { from: 2, to: 16, label: 'Bin → Hex' },
// //     { from: 16, to: 2, label: 'Hex → Bin' },
// //   ], []);

// //   const getRelevantExplanations = useMemo(() => {
// //     const currentInputBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// //     const currentOutputBase = useCustomOutput ? parseInt(customOutputBase) || 2 : outputBase;
    
// //     const relevantKeys = new Set();
    
// //     // Add explanations based on input base
// //     if (currentInputBase === 2) relevantKeys.add('binary');
// //     if (currentInputBase === 8) relevantKeys.add('octal');
// //     if (currentInputBase === 10) relevantKeys.add('decimal');
// //     if (currentInputBase === 16) relevantKeys.add('hexadecimal');
    
// //     // Add explanations based on output base
// //     if (currentOutputBase === 2) relevantKeys.add('binary');
// //     if (currentOutputBase === 8) relevantKeys.add('octal');
// //     if (currentOutputBase === 10) relevantKeys.add('decimal');
// //     if (currentOutputBase === 16) relevantKeys.add('hexadecimal');
    
// //     // Add two's complement if enabled
// //     if (useTwosComplement) relevantKeys.add('twosComplement');
    
// //     return Array.from(relevantKeys).map(key => {
// //       if (key === 'conversion') {
// //         return {
// //           key,
// //           title: `Conversion Process (Base ${currentInputBase} → Base ${currentOutputBase})`,
// //           description: `Convert from base ${currentInputBase} to decimal first, then to base ${currentOutputBase} using repeated division.`,
// //           example: `Example: Converting from base ${currentInputBase} to base ${currentOutputBase}`
// //         };
// //       }
// //       return {
// //         key,
// //         ...explanations[key]
// //       };
// //     }).concat([{
// //       key: 'conversion',
// //       title: `Conversion Process (Base ${currentInputBase} → Base ${currentOutputBase})`,
// //       description: `Convert from base ${currentInputBase} to decimal first, then to base ${currentOutputBase} using repeated division.`,
// //       example: `Example: Converting from base ${currentInputBase} to base ${currentOutputBase}`
// //     }]);
// //   }, [inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, explanations]);

// //   const isValidChar = (char, base) => {
// //     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// //     const index = chars.indexOf(char.toUpperCase());
// //     return index !== -1 && index < base;
// //   };

// //   const handleKeyDown = (e) => {
// //     const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
// //     const key = e.key;
    
// //     if (key.length > 1) return;
    
// //     if (key === '-' || isValidChar(key, currentBase)) {
// //       return;
// //     }
    
// //     e.preventDefault();
// //   };

// //   const handleInputChange = (e) => {
// //     setInputValue(e.target.value);
// //   };

// //   const convertNumber = useCallback(() => {
// //     setError('');
    
// //     if (!inputValue.trim()) {
// //       setResult('');
// //       return;
// //     }

// //     try {
// //       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
// //       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

// //       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
// //         throw new Error('Input base must be between 2 and 36');
// //       }
// //       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
// //         throw new Error('Output base must be between 2 and 36');
// //       }

// //       const isNegative = inputValue.startsWith('-');
// //       const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
// //       let decimal = 0;
// //       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// //       const valueUpper = absoluteValue.toUpperCase();
      
// //       for (let i = 0; i < valueUpper.length; i++) {
// //         const digit = chars.indexOf(valueUpper[i]);
// //         if (digit === -1 || digit >= fromBase) {
// //           throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
// //         }
// //         decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
// //       }

// //       if (isNegative && useTwosComplement) {
// //         const minValue = -Math.pow(2, bitWidth - 1);
// //         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
// //         if (-decimal < minValue || -decimal > maxValue) {
// //           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
// //         }
        
// //         const maxValue2 = Math.pow(2, bitWidth);
// //         decimal = maxValue2 + (-decimal);
// //       }

// //       if (decimal === 0) {
// //         setResult('0');
// //         return;
// //       }

// //       let converted = '';
// //       let num = Math.abs(decimal);
      
// //       while (num > 0) {
// //         converted = chars[num % toBase] + converted;
// //         num = Math.floor(num / toBase);
// //       }
      
// //       setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
// //     } catch (err) {
// //       setError(err.message);
// //       setResult('');
// //     }
// //   }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

// //   useEffect(() => {
// //     const timer = setTimeout(convertNumber, 300);
// //     return () => clearTimeout(timer);
// //   }, [convertNumber]);

// //   const handleQuickConversion = useCallback((from, to) => {
// //     setUseCustomInput(false);
// //     setUseCustomOutput(false);
// //     setInputBase(from);
// //     setOutputBase(to);
// //   }, []);

// //   const resetAll = useCallback(() => {
// //     setInputValue('');
// //     setInputBase(10);
// //     setOutputBase(2);
// //     setCustomInputBase('');
// //     setCustomOutputBase('');
// //     setUseCustomInput(false);
// //     setUseCustomOutput(false);
// //     setUseTwosComplement(false);
// //     setBitWidth(8);
// //     setResult('');
// //     setError('');
// //   }, []);

// //   const copyResult = useCallback(() => {
// //     if (result) {
// //       navigator.clipboard.writeText(result).catch(() => {
// //         const textArea = document.createElement('textarea');
// //         textArea.value = result;
// //         document.body.appendChild(textArea);
// //         textArea.select();
// //         document.execCommand('copy');
// //         document.body.removeChild(textArea);
// //       });
// //     }
// //   }, [result]);

// //   return (
// //     <div style={{ 
// //       height: '100vh', 
// //       background: '#f8f9fa',
// //       padding: '16px',
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       overflow: 'hidden'
// //     }}>
// //       <div style={{
// //         height: '100%',
// //         maxWidth: '1600px',
// //         margin: '0 auto',
// //         background: '#ffffff',
// //         borderRadius: '8px',
// //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //         border: '1px solid #e9ecef',
// //         display: 'flex',
// //         flexDirection: 'column'
// //       }}>
// //         <header style={{
// //           background: '#2c3e50',
// //           color: 'white',
// //           padding: '16px 24px',
// //           borderTopLeftRadius: '8px',
// //           borderTopRightRadius: '8px',
// //           flexShrink: 0
// //         }}>
// //           <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
// //             Base Converter
// //           </h1>
// //           <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
// //             Convert between any number bases from 2 to 36
// //           </p>
// //         </header>

// //         <div style={{ 
// //           flex: 1, 
// //           display: 'flex', 
// //           overflow: 'hidden'
// //         }}>
// //           <main style={{ 
// //             flex: '2', 
// //             padding: '20px', 
// //             overflow: 'auto'
// //           }}>
// //             <section style={{ marginBottom: '20px' }}>
// //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
// //               <div style={{ 
// //                 display: 'grid', 
// //                 gridTemplateColumns: 'repeat(3, 1fr)', 
// //                 gap: '8px' 
// //               }}>
// //                 {quickConversions.map((conv, index) => (
// //                   <button
// //                     key={index}
// //                     onClick={() => handleQuickConversion(conv.from, conv.to)}
// //                     style={{
// //                       padding: '8px 12px',
// //                       border: '1px solid #3498db',
// //                       borderRadius: '4px',
// //                       background: '#3498db',
// //                       color: 'white',
// //                       cursor: 'pointer',
// //                       fontSize: '0.8rem',
// //                       fontWeight: '500',
// //                       transition: 'all 0.2s ease'
// //                     }}
// //                   >
// //                     {conv.label}
// //                   </button>
// //                 ))}
// //               </div>
// //             </section>

// //             <section style={{ 
// //               background: '#f8f9fa', 
// //               padding: '16px', 
// //               borderRadius: '6px', 
// //               marginBottom: '16px',
// //               border: '1px solid #dee2e6'
// //             }}>
// //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
// //               <div style={{ marginBottom: '12px' }}>
// //                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// //                   Value to convert:
// //                 </label>
// //                 <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
// //                   <input
// //                     id="input-value"
// //                     type="text"
// //                     value={inputValue}
// //                     onChange={handleInputChange}
// //                     onKeyDown={handleKeyDown}
// //                     placeholder="Enter number to convert..."
// //                     style={{
// //                       flex: 1,
// //                       padding: '8px 12px',
// //                       border: '1px solid #ced4da',
// //                       borderRadius: '4px',
// //                       fontSize: '0.9rem',
// //                       transition: 'border-color 0.2s ease',
// //                       boxSizing: 'border-box'
// //                     }}
// //                   />
// //                   <button
// //                     onClick={resetAll}
// //                     style={{
// //                       padding: '8px 12px',
// //                       border: '1px solid #dc3545',
// //                       borderRadius: '4px',
// //                       background: '#dc3545',
// //                       color: 'white',
// //                       cursor: 'pointer',
// //                       fontSize: '0.8rem',
// //                       fontWeight: '500',
// //                       whiteSpace: 'nowrap'
// //                     }}
// //                   >
// //                     Reset
// //                   </button>
// //                 </div>
// //               </div>

// //               <div style={{ marginBottom: '12px' }}>
// //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// //                   <input
// //                     type="checkbox"
// //                     checked={useCustomInput}
// //                     onChange={(e) => setUseCustomInput(e.target.checked)}
// //                     style={{ marginRight: '6px' }}
// //                   />
// //                   Use custom base
// //                 </label>
// //               </div>

// //               {useCustomInput ? (
// //                 <input
// //                   type="text"
// //                   value={customInputBase}
// //                   onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
// //                   placeholder="Enter base (2-36)"
// //                   style={{
// //                     width: '140px',
// //                     padding: '6px 8px',
// //                     border: '1px solid #ced4da',
// //                     borderRadius: '4px',
// //                     fontSize: '0.9rem',
// //                     boxSizing: 'border-box'
// //                   }}
// //                 />
// //               ) : (
// //                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
// //                   {commonBases.map((base) => (
// //                     <button
// //                       key={base.value}
// //                       onClick={() => setInputBase(base.value)}
// //                       style={{
// //                         padding: '8px 12px',
// //                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// //                         borderRadius: '4px',
// //                         background: inputBase === base.value ? '#3498db' : 'white',
// //                         color: inputBase === base.value ? 'white' : '#495057',
// //                         cursor: 'pointer',
// //                         fontSize: '0.8rem',
// //                         fontWeight: '500',
// //                         transition: 'all 0.2s ease'
// //                       }}
// //                     >
// //                       {base.name} ({base.value})
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}
// //             </section>

// //             <section style={{ 
// //               background: '#f8f9fa', 
// //               padding: '16px', 
// //               borderRadius: '6px',
// //               border: '1px solid #dee2e6'
// //             }}>
// //               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

// //               <div style={{ marginBottom: '12px' }}>
// //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
// //                   <input
// //                     type="checkbox"
// //                     checked={useCustomOutput}
// //                     onChange={(e) => setUseCustomOutput(e.target.checked)}
// //                     style={{ marginRight: '6px' }}
// //                   />
// //                   Use custom base
// //                 </label>
// //               </div>

// //               {useCustomOutput ? (
// //                 <input
// //                   type="text"
// //                   value={customOutputBase}
// //                   onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
// //                   placeholder="Enter base (2-36)"
// //                   style={{
// //                     width: '140px',
// //                     padding: '6px 8px',
// //                     border: '1px solid #ced4da',
// //                     borderRadius: '4px',
// //                     fontSize: '0.9rem',
// //                     marginBottom: '12px',
// //                     boxSizing: 'border-box'
// //                   }}
// //                 />
// //               ) : (
// //                 <div style={{ 
// //                   display: 'grid', 
// //                   gridTemplateColumns: 'repeat(2, 1fr)', 
// //                   gap: '8px',
// //                   marginBottom: '12px'
// //                 }}>
// //                   {commonBases.map((base) => (
// //                     <button
// //                       key={base.value}
// //                       onClick={() => setOutputBase(base.value)}
// //                       style={{
// //                         padding: '8px 12px',
// //                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
// //                         borderRadius: '4px',
// //                         background: outputBase === base.value ? '#3498db' : 'white',
// //                         color: outputBase === base.value ? 'white' : '#495057',
// //                         cursor: 'pointer',
// //                         fontSize: '0.8rem',
// //                         fontWeight: '500',
// //                         transition: 'all 0.2s ease'
// //                       }}
// //                     >
// //                       {base.name} ({base.value})
// //                     </button>
// //                   ))}
// //                 </div>
// //               )}

// //               <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
// //                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
// //                   <input
// //                     type="checkbox"
// //                     checked={useTwosComplement}
// //                     onChange={(e) => setUseTwosComplement(e.target.checked)}
// //                     style={{ marginRight: '6px' }}
// //                   />
// //                   Use Two's Complement
// //                 </label>
                
// //                 {useTwosComplement && (
// //                   <div style={{ marginTop: '8px' }}>
// //                     <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
// //                       Bit Width:
// //                     </label>
// //                     <select
// //                       value={bitWidth}
// //                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
// //                       style={{
// //                         padding: '4px 8px',
// //                         border: '1px solid #ffb74d',
// //                         borderRadius: '4px',
// //                         fontSize: '0.8rem',
// //                         background: 'white'
// //                       }}
// //                     >
// //                       <option value={4}>4-bit</option>
// //                       <option value={8}>8-bit</option>
// //                       <option value={16}>16-bit</option>
// //                       <option value={32}>32-bit</option>
// //                     </select>
// //                   </div>
// //                 )}
// //               </div>

// //               <div style={{
// //                 background: '#ffffff',
// //                 border: '2px solid #e9ecef',
// //                 borderRadius: '4px',
// //                 padding: '12px',
// //                 minHeight: '40px',
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'space-between',
// //                 fontSize: '1rem',
// //                 fontWeight: '500',
// //                 fontFamily: 'monospace'
// //               }}>
// //                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
// //                   {error ? (
// //                     <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
// //                   ) : result ? (
// //                     <span style={{ color: '#28a745' }}>{result}</span>
// //                   ) : (
// //                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
// //                   )}
// //                 </div>
// //                 {result && (
// //                   <button
// //                     onClick={copyResult}
// //                     style={{
// //                       marginLeft: '8px',
// //                       padding: '4px 8px',
// //                       background: '#28a745',
// //                       color: 'white',
// //                       border: 'none',
// //                       borderRadius: '4px',
// //                       cursor: 'pointer',
// //                       fontSize: '0.7rem',
// //                       fontWeight: '500'
// //                     }}
// //                   >
// //                     Copy
// //                   </button>
// //                 )}
// //               </div>
// //             </section>
// //           </main>

// //           <aside style={{ 
// //             flex: '0 0 500px', 
// //             background: '#e3f2fd', 
// //             padding: '20px',
// //             borderLeft: '1px solid #bbdefb',
// //             overflow: 'auto'
// //           }}>
// //             <h3 style={{ margin: '0 0 16px 0', color: '#1976d2', fontSize: '1.1rem', fontWeight: '600' }}>
// //               Relevant Information
// //             </h3>
            
// //             {getRelevantExplanations.map((explanation, index) => (
// //               <div key={explanation.key} style={{ marginBottom: '20px' }}>
// //                 <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>
// //                   {explanation.title}
// //                 </h4>
// //                 <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>
// //                   {explanation.description}
// //                 </p>
// //                 <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>
// //                   {explanation.example}
// //                 </p>
// //               </div>
// //             ))}

// //             <div style={{ background: '#f3e5f5', padding: '12px', borderRadius: '4px', border: '1px solid #e1bee7' }}>
// //               <p style={{ margin: 0, color: '#6a1b9a', fontSize: '0.8rem', lineHeight: '1.4' }}>
// //                 <strong>Tip:</strong> Use the quick conversion buttons for common operations, or enable custom bases for any base from 2-36.
// //               </p>
// //             </div>
// //           </aside>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BaseConverter;

// import React, { useState, useEffect, useCallback, useMemo } from 'react';
// import baseConversionsExplanations from './baseConversionsExplanations';

// const BaseConverter = ({ explanations = baseConversionsExplanations }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [inputBase, setInputBase] = useState(10);
//   const [outputBase, setOutputBase] = useState(2);
//   const [customInputBase, setCustomInputBase] = useState('');
//   const [customOutputBase, setCustomOutputBase] = useState('');
//   const [useCustomInput, setUseCustomInput] = useState(false);
//   const [useCustomOutput, setUseCustomOutput] = useState(false);
//   const [useTwosComplement, setUseTwosComplement] = useState(false);
//   const [bitWidth, setBitWidth] = useState(8);
//   const [result, setResult] = useState('');
//   const [error, setError] = useState('');

//   const commonBases = useMemo(() => [
//     { value: 2, name: 'Binary' },
//     { value: 8, name: 'Octal' },
//     { value: 10, name: 'Decimal' },
//     { value: 16, name: 'Hexadecimal' },
//   ], []);

//   const quickConversions = useMemo(() => [
//     { from: 10, to: 2, label: 'Dec → Bin' },
//     { from: 2, to: 10, label: 'Bin → Dec' },
//     { from: 10, to: 16, label: 'Dec → Hex' },
//     { from: 16, to: 10, label: 'Hex → Dec' },
//     { from: 2, to: 16, label: 'Bin → Hex' },
//     { from: 16, to: 2, label: 'Hex → Bin' },
//   ], []);

//   const getRelevantExplanations = useMemo(() => {
//     const currentInputBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
//     const currentOutputBase = useCustomOutput ? parseInt(customOutputBase) || 2 : outputBase;
    
//     const relevantKeys = new Set();
    
//     // Add explanations based on input base
//     if (currentInputBase === 2) relevantKeys.add('binary');
//     if (currentInputBase === 8) relevantKeys.add('octal');
//     if (currentInputBase === 10) relevantKeys.add('decimal');
//     if (currentInputBase === 16) relevantKeys.add('hexadecimal');
    
//     // Add explanations based on output base
//     if (currentOutputBase === 2) relevantKeys.add('binary');
//     if (currentOutputBase === 8) relevantKeys.add('octal');
//     if (currentOutputBase === 10) relevantKeys.add('decimal');
//     if (currentOutputBase === 16) relevantKeys.add('hexadecimal');
    
//     // Add two's complement if enabled
//     if (useTwosComplement) relevantKeys.add('twosComplement');
    
//     return Array.from(relevantKeys).map(key => {
//       if (key === 'conversion') {
//         return {
//           key,
//           title: `Conversion Process (Base ${currentInputBase} → Base ${currentOutputBase})`,
//           description: `Convert from base ${currentInputBase} to decimal first, then to base ${currentOutputBase} using repeated division.`,
//           example: `Example: Converting from base ${currentInputBase} to base ${currentOutputBase}`
//         };
//       }
//       return {
//         key,
//         ...explanations[key]
//       };
//     }).concat([{
//       key: 'conversion',
//       title: `Conversion Process (Base ${currentInputBase} → Base ${currentOutputBase})`,
//       description: `Convert from base ${currentInputBase} to decimal first, then to base ${currentOutputBase} using repeated division.`,
//       example: `Example: Converting from base ${currentInputBase} to base ${currentOutputBase}`
//     }]);
//   }, [inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, explanations]);

//   const isValidChar = (char, base) => {
//     const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const index = chars.indexOf(char.toUpperCase());
//     return index !== -1 && index < base;
//   };

//   const handleKeyDown = (e) => {
//     const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
//     const key = e.key;
    
//     if (key.length > 1) return;
    
//     if (key === '-' || isValidChar(key, currentBase)) {
//       return;
//     }
    
//     e.preventDefault();
//   };

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const convertNumber = useCallback(() => {
//     setError('');
    
//     if (!inputValue.trim()) {
//       setResult('');
//       return;
//     }

//     try {
//       const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
//       const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

//       if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
//         throw new Error('Input base must be between 2 and 36');
//       }
//       if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
//         throw new Error('Output base must be between 2 and 36');
//       }

//       const isNegative = inputValue.startsWith('-');
//       const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
//       let decimal = 0;
//       const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//       const valueUpper = absoluteValue.toUpperCase();
      
//       for (let i = 0; i < valueUpper.length; i++) {
//         const digit = chars.indexOf(valueUpper[i]);
//         if (digit === -1 || digit >= fromBase) {
//           throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
//         }
//         decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
//       }

//       if (isNegative && useTwosComplement) {
//         const minValue = -Math.pow(2, bitWidth - 1);
//         const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
//         if (-decimal < minValue || -decimal > maxValue) {
//           throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
//         }
        
//         const maxValue2 = Math.pow(2, bitWidth);
//         decimal = maxValue2 + (-decimal);
//       }

//       if (decimal === 0) {
//         setResult('0');
//         return;
//       }

//       let converted = '';
//       let num = Math.abs(decimal);
      
//       while (num > 0) {
//         converted = chars[num % toBase] + converted;
//         num = Math.floor(num / toBase);
//       }
      
//       setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
//     } catch (err) {
//       setError(err.message);
//       setResult('');
//     }
//   }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

//   useEffect(() => {
//     const timer = setTimeout(convertNumber, 300);
//     return () => clearTimeout(timer);
//   }, [convertNumber]);

//   const handleQuickConversion = useCallback((from, to) => {
//     setUseCustomInput(false);
//     setUseCustomOutput(false);
//     setInputBase(from);
//     setOutputBase(to);
//   }, []);

//   const resetAll = useCallback(() => {
//     setInputValue('');
//     setInputBase(10);
//     setOutputBase(2);
//     setCustomInputBase('');
//     setCustomOutputBase('');
//     setUseCustomInput(false);
//     setUseCustomOutput(false);
//     setUseTwosComplement(false);
//     setBitWidth(8);
//     setResult('');
//     setError('');
//   }, []);

//   const copyResult = useCallback(() => {
//     if (result) {
//       navigator.clipboard.writeText(result).catch(() => {
//         const textArea = document.createElement('textarea');
//         textArea.value = result;
//         document.body.appendChild(textArea);
//         textArea.select();
//         document.execCommand('copy');
//         document.body.removeChild(textArea);
//       });
//     }
//   }, [result]);

//   return (
//     <div style={{ 
//       height: '100vh', 
//       background: '#f8f9fa',
//       padding: '16px',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       overflow: 'hidden'
//     }}>
//       <div style={{
//         height: '100%',
//         maxWidth: '1600px',
//         margin: '0 auto',
//         background: '#ffffff',
//         borderRadius: '8px',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//         border: '1px solid #e9ecef',
//         display: 'flex',
//         flexDirection: 'column'
//       }}>
//         <header style={{
//           background: '#2c3e50',
//           color: 'white',
//           padding: '16px 24px',
//           borderTopLeftRadius: '8px',
//           borderTopRightRadius: '8px',
//           flexShrink: 0
//         }}>
//           <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
//             Base Converter
//           </h1>
//           <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
//             Convert between any number bases from 2 to 36
//           </p>
//         </header>

//         <div style={{ 
//           flex: 1, 
//           display: 'flex', 
//           overflow: 'hidden'
//         }}>
//           <main style={{ 
//             flex: '2', 
//             padding: '20px', 
//             overflow: 'auto'
//           }}>
//             <section style={{ marginBottom: '20px' }}>
//               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
//               <div style={{ 
//                 display: 'grid', 
//                 gridTemplateColumns: 'repeat(3, 1fr)', 
//                 gap: '8px' 
//               }}>
//                 {quickConversions.map((conv, index) => (
//                   <button
//                     key={index}
//                     onClick={() => handleQuickConversion(conv.from, conv.to)}
//                     style={{
//                       padding: '8px 12px',
//                       border: '1px solid #3498db',
//                       borderRadius: '4px',
//                       background: '#3498db',
//                       color: 'white',
//                       cursor: 'pointer',
//                       fontSize: '0.8rem',
//                       fontWeight: '500',
//                       transition: 'all 0.2s ease'
//                     }}
//                   >
//                     {conv.label}
//                   </button>
//                 ))}
//               </div>
//             </section>

//             <section style={{ 
//               background: '#f8f9fa', 
//               padding: '16px', 
//               borderRadius: '6px', 
//               marginBottom: '16px',
//               border: '1px solid #dee2e6'
//             }}>
//               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
//               <div style={{ marginBottom: '12px' }}>
//                 <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
//                   Value to convert:
//                 </label>
//                 <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
//                   <input
//                     id="input-value"
//                     type="text"
//                     value={inputValue}
//                     onChange={handleInputChange}
//                     onKeyDown={handleKeyDown}
//                     placeholder="Enter number to convert..."
//                     style={{
//                       flex: 1,
//                       padding: '8px 12px',
//                       border: '1px solid #ced4da',
//                       borderRadius: '4px',
//                       fontSize: '0.9rem',
//                       transition: 'border-color 0.2s ease',
//                       boxSizing: 'border-box'
//                     }}
//                   />
//                   <button
//                     onClick={resetAll}
//                     style={{
//                       padding: '8px 12px',
//                       border: '1px solid #dc3545',
//                       borderRadius: '4px',
//                       background: '#dc3545',
//                       color: 'white',
//                       cursor: 'pointer',
//                       fontSize: '0.8rem',
//                       fontWeight: '500',
//                       whiteSpace: 'nowrap'
//                     }}
//                   >
//                     Reset
//                   </button>
//                 </div>
//               </div>

//               <div style={{ marginBottom: '12px' }}>
//                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
//                   <input
//                     type="checkbox"
//                     checked={useCustomInput}
//                     onChange={(e) => setUseCustomInput(e.target.checked)}
//                     style={{ marginRight: '6px' }}
//                   />
//                   Use custom base
//                 </label>
//               </div>

//               {useCustomInput ? (
//                 <input
//                   type="text"
//                   value={customInputBase}
//                   onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
//                   placeholder="Enter base (2-36)"
//                   style={{
//                     width: '140px',
//                     padding: '6px 8px',
//                     border: '1px solid #ced4da',
//                     borderRadius: '4px',
//                     fontSize: '0.9rem',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//               ) : (
//                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
//                   {commonBases.map((base) => (
//                     <button
//                       key={base.value}
//                       onClick={() => setInputBase(base.value)}
//                       style={{
//                         padding: '8px 12px',
//                         border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
//                         borderRadius: '4px',
//                         background: inputBase === base.value ? '#3498db' : 'white',
//                         color: inputBase === base.value ? 'white' : '#495057',
//                         cursor: 'pointer',
//                         fontSize: '0.8rem',
//                         fontWeight: '500',
//                         transition: 'all 0.2s ease'
//                       }}
//                     >
//                       {base.name} ({base.value})
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </section>

//             <section style={{ 
//               background: '#f8f9fa', 
//               padding: '16px', 
//               borderRadius: '6px',
//               border: '1px solid #dee2e6'
//             }}>
//               <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

//               <div style={{ marginBottom: '12px' }}>
//                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
//                   <input
//                     type="checkbox"
//                     checked={useCustomOutput}
//                     onChange={(e) => setUseCustomOutput(e.target.checked)}
//                     style={{ marginRight: '6px' }}
//                   />
//                   Use custom base
//                 </label>
//               </div>

//               {useCustomOutput ? (
//                 <input
//                   type="text"
//                   value={customOutputBase}
//                   onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
//                   placeholder="Enter base (2-36)"
//                   style={{
//                     width: '140px',
//                     padding: '6px 8px',
//                     border: '1px solid #ced4da',
//                     borderRadius: '4px',
//                     fontSize: '0.9rem',
//                     marginBottom: '12px',
//                     boxSizing: 'border-box'
//                   }}
//                 />
//               ) : (
//                 <div style={{ 
//                   display: 'grid', 
//                   gridTemplateColumns: 'repeat(2, 1fr)', 
//                   gap: '8px',
//                   marginBottom: '12px'
//                 }}>
//                   {commonBases.map((base) => (
//                     <button
//                       key={base.value}
//                       onClick={() => setOutputBase(base.value)}
//                       style={{
//                         padding: '8px 12px',
//                         border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
//                         borderRadius: '4px',
//                         background: outputBase === base.value ? '#3498db' : 'white',
//                         color: outputBase === base.value ? 'white' : '#495057',
//                         cursor: 'pointer',
//                         fontSize: '0.8rem',
//                         fontWeight: '500',
//                         transition: 'all 0.2s ease'
//                       }}
//                     >
//                       {base.name} ({base.value})
//                     </button>
//                   ))}
//                 </div>
//               )}

//               <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
//                 <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
//                   <input
//                     type="checkbox"
//                     checked={useTwosComplement}
//                     onChange={(e) => setUseTwosComplement(e.target.checked)}
//                     style={{ marginRight: '6px' }}
//                   />
//                   Use Two's Complement
//                 </label>
                
//                 {useTwosComplement && (
//                   <div style={{ marginTop: '8px' }}>
//                     <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
//                       Bit Width:
//                     </label>
//                     <select
//                       value={bitWidth}
//                       onChange={(e) => setBitWidth(parseInt(e.target.value))}
//                       style={{
//                         padding: '4px 8px',
//                         border: '1px solid #ffb74d',
//                         borderRadius: '4px',
//                         fontSize: '0.8rem',
//                         background: 'white'
//                       }}
//                     >
//                       <option value={4}>4-bit</option>
//                       <option value={8}>8-bit</option>
//                       <option value={16}>16-bit</option>
//                       <option value={32}>32-bit</option>
//                     </select>
//                   </div>
//                 )}
//               </div>

//               <div style={{
//                 background: '#ffffff',
//                 border: '2px solid #e9ecef',
//                 borderRadius: '4px',
//                 padding: '12px',
//                 minHeight: '40px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'space-between',
//                 fontSize: '1rem',
//                 fontWeight: '500',
//                 fontFamily: 'monospace'
//               }}>
//                 <div style={{ flex: 1, wordBreak: 'break-all' }}>
//                   {error ? (
//                     <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
//                   ) : result ? (
//                     <span style={{ color: '#28a745' }}>{result}</span>
//                   ) : (
//                     <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
//                   )}
//                 </div>
//                 {result && (
//                   <button
//                     onClick={copyResult}
//                     style={{
//                       marginLeft: '8px',
//                       padding: '4px 8px',
//                       background: '#28a745',
//                       color: 'white',
//                       border: 'none',
//                       borderRadius: '4px',
//                       cursor: 'pointer',
//                       fontSize: '0.7rem',
//                       fontWeight: '500'
//                     }}
//                   >
//                     Copy
//                   </button>
//                 )}
//               </div>
//             </section>
//           </main>

//           <aside style={{ 
//             flex: '0 0 500px', 
//             background: '#e3f2fd', 
//             padding: '20px',
//             borderLeft: '1px solid #bbdefb',
//             overflow: 'auto'
//           }}>
//             <section style={{
//               background: '#e3f2fd',
//               padding: '20px',
//               borderRadius: '6px',
//               border: '1px solid #bbdefb',
//               marginBottom: '20px'
//             }}>
//               <h3 style={{ margin: '0 0 12px 0', color: '#1976d2', fontSize: '1rem', fontWeight: '600' }}>Information</h3>
//               <ul style={{ margin: 0, paddingLeft: '20px', color: '#424242', lineHeight: '1.5', fontSize: '0.9rem' }}>
//                 <li>Supports all bases from 2 to 36</li>
//                 <li>Uses digits 0-9 and letters A-Z for bases above 10</li>
//                 <li>Negative numbers: Default uses sign-magnitude (minus sign)</li>
//                 <li>Two's complement option available for computer-style negative representation</li>
//                 <li>Input is case-insensitive</li>
//               </ul>
//             </section>

//             <h3 style={{ margin: '0 0 16px 0', color: '#1976d2', fontSize: '1.1rem', fontWeight: '600' }}>
//               Relevant Information
//             </h3>
            
//             {getRelevantExplanations.map((explanation, index) => (
//               <div key={explanation.key} style={{ marginBottom: '20px' }}>
//                 <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>
//                   {explanation.title}
//                 </h4>
//                 <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>
//                   {explanation.description}
//                 </p>
//                 <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>
//                   {explanation.example}
//                 </p>
//               </div>
//             ))}

//             <div style={{ background: '#f3e5f5', padding: '12px', borderRadius: '4px', border: '1px solid #e1bee7' }}>
//               <p style={{ margin: 0, color: '#6a1b9a', fontSize: '0.8rem', lineHeight: '1.4' }}>
//                 <strong>Tip:</strong> Use the quick conversion buttons for common operations, or enable custom bases for any base from 2-36.
//               </p>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BaseConverter;


import React, { useState, useEffect, useCallback, useMemo } from 'react';
import baseConversionsExplanations from './baseConversionsExplanations';

const BaseConverter = ({ explanations = baseConversionsExplanations }) => {
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

  const commonBases = useMemo(() => [
    { value: 2, name: 'Binary' },
    { value: 8, name: 'Octal' },
    { value: 10, name: 'Decimal' },
    { value: 16, name: 'Hexadecimal' },
  ], []);

  const quickConversions = useMemo(() => [
    { from: 10, to: 2, label: 'Dec → Bin' },
    { from: 2, to: 10, label: 'Bin → Dec' },
    { from: 10, to: 16, label: 'Dec → Hex' },
    { from: 16, to: 10, label: 'Hex → Dec' },
    { from: 2, to: 16, label: 'Bin → Hex' },
    { from: 16, to: 2, label: 'Hex → Bin' },
  ], []);

  const getRelevantExplanations = useMemo(() => {
    const currentInputBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
    const currentOutputBase = useCustomOutput ? parseInt(customOutputBase) || 2 : outputBase;
    
    const relevantKeys = new Set();
    
    // Add explanations based on input base
    if (currentInputBase === 2) relevantKeys.add('binary');
    if (currentInputBase === 8) relevantKeys.add('octal');
    if (currentInputBase === 10) relevantKeys.add('decimal');
    if (currentInputBase === 16) relevantKeys.add('hexadecimal');
    
    // Add explanations based on output base
    if (currentOutputBase === 2) relevantKeys.add('binary');
    if (currentOutputBase === 8) relevantKeys.add('octal');
    if (currentOutputBase === 10) relevantKeys.add('decimal');
    if (currentOutputBase === 16) relevantKeys.add('hexadecimal');
    
    // Add appropriate conversion explanation
    if (currentOutputBase === 10) {
      relevantKeys.add('conversionToDecimal');
    } else if (currentInputBase === 10) {
      relevantKeys.add('conversionFromDecimal');
    } else {
      relevantKeys.add('conversionBetweenBases');
    }
    
    // Add two's complement if enabled
    if (useTwosComplement) relevantKeys.add('twosComplement');
    
    return Array.from(relevantKeys).map(key => ({
      key,
      ...explanations[key]
    }));
  }, [inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, explanations]);

  const isValidChar = (char, base) => {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const index = chars.indexOf(char.toUpperCase());
    return index !== -1 && index < base;
  };

  const handleKeyDown = (e) => {
    const currentBase = useCustomInput ? parseInt(customInputBase) || 10 : inputBase;
    const key = e.key;
    
    if (key.length > 1) return;
    
    if (key === '-' || isValidChar(key, currentBase)) {
      return;
    }
    
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const convertNumber = useCallback(() => {
    setError('');
    
    if (!inputValue.trim()) {
      setResult('');
      return;
    }

    try {
      const fromBase = useCustomInput ? parseInt(customInputBase) : inputBase;
      const toBase = useCustomOutput ? parseInt(customOutputBase) : outputBase;

      if (fromBase < 2 || fromBase > 36 || isNaN(fromBase)) {
        throw new Error('Input base must be between 2 and 36');
      }
      if (toBase < 2 || toBase > 36 || isNaN(toBase)) {
        throw new Error('Output base must be between 2 and 36');
      }

      const isNegative = inputValue.startsWith('-');
      const absoluteValue = isNegative ? inputValue.slice(1) : inputValue;
      
      let decimal = 0;
      const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const valueUpper = absoluteValue.toUpperCase();
      
      for (let i = 0; i < valueUpper.length; i++) {
        const digit = chars.indexOf(valueUpper[i]);
        if (digit === -1 || digit >= fromBase) {
          throw new Error(`Invalid digit '${valueUpper[i]}' for base ${fromBase}`);
        }
        decimal += digit * Math.pow(fromBase, valueUpper.length - 1 - i);
      }

      if (isNegative && useTwosComplement) {
        const minValue = -Math.pow(2, bitWidth - 1);
        const maxValue = Math.pow(2, bitWidth - 1) - 1;
        
        if (-decimal < minValue || -decimal > maxValue) {
          throw new Error(`Number ${-decimal} cannot fit in ${bitWidth}-bit signed range`);
        }
        
        const maxValue2 = Math.pow(2, bitWidth);
        decimal = maxValue2 + (-decimal);
      }

      if (decimal === 0) {
        setResult('0');
        return;
      }

      let converted = '';
      let num = Math.abs(decimal);
      
      while (num > 0) {
        converted = chars[num % toBase] + converted;
        num = Math.floor(num / toBase);
      }
      
      setResult(isNegative && !useTwosComplement ? '-' + converted : converted);
    } catch (err) {
      setError(err.message);
      setResult('');
    }
  }, [inputValue, inputBase, outputBase, customInputBase, customOutputBase, useCustomInput, useCustomOutput, useTwosComplement, bitWidth]);

  useEffect(() => {
    const timer = setTimeout(convertNumber, 300);
    return () => clearTimeout(timer);
  }, [convertNumber]);

  const handleQuickConversion = useCallback((from, to) => {
    setUseCustomInput(false);
    setUseCustomOutput(false);
    setInputBase(from);
    setOutputBase(to);
  }, []);

  const resetAll = useCallback(() => {
    setInputValue('');
    setInputBase(10);
    setOutputBase(2);
    setCustomInputBase('');
    setCustomOutputBase('');
    setUseCustomInput(false);
    setUseCustomOutput(false);
    setUseTwosComplement(false);
    setBitWidth(8);
    setResult('');
    setError('');
  }, []);

  const copyResult = useCallback(() => {
    if (result) {
      navigator.clipboard.writeText(result).catch(() => {
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
    <div style={{ 
      height: '100vh', 
      background: '#f8f9fa',
      padding: '16px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden'
    }}>
      <div style={{
        height: '100%',
        maxWidth: '1600px',
        margin: '0 auto',
        background: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: '1px solid #e9ecef',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header style={{
          background: '#2c3e50',
          color: 'white',
          padding: '16px 24px',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
          flexShrink: 0
        }}>
          {/* <h1 style={{ margin: '0 0 4px 0', fontSize: '1.6rem', fontWeight: '600' }}>
            Base Converter
          </h1> */}
          <p style={{ margin: 0, opacity: 0.8, fontSize: '0.9rem' }}>
            Convert between any number bases from 2 to 36
          </p>
        </header>

        <div style={{ 
          flex: 1, 
          display: 'flex', 
          overflow: 'hidden'
        }}>
          <main style={{ 
            flex: '2', 
            padding: '20px', 
            overflow: 'auto'
          }}>
            <section style={{ marginBottom: '20px' }}>
              <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Quick Conversions</h2>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '8px' 
              }}>
                {quickConversions.map((conv, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickConversion(conv.from, conv.to)}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #3498db',
                      borderRadius: '4px',
                      background: '#3498db',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {conv.label}
                  </button>
                ))}
              </div>
            </section>

            <section style={{ 
              background: '#f8f9fa', 
              padding: '16px', 
              borderRadius: '6px', 
              marginBottom: '16px',
              border: '1px solid #dee2e6'
            }}>
              <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Input</h2>
              
              <div style={{ marginBottom: '12px' }}>
                <label htmlFor="input-value" style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
                  Value to convert:
                </label>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <input
                    id="input-value"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter number to convert..."
                    style={{
                      flex: 1,
                      padding: '8px 12px',
                      border: '1px solid #ced4da',
                      borderRadius: '4px',
                      fontSize: '0.9rem',
                      transition: 'border-color 0.2s ease',
                      boxSizing: 'border-box'
                    }}
                  />
                  <button
                    onClick={resetAll}
                    style={{
                      padding: '8px 12px',
                      border: '1px solid #dc3545',
                      borderRadius: '4px',
                      background: '#dc3545',
                      color: 'white',
                      cursor: 'pointer',
                      fontSize: '0.8rem',
                      fontWeight: '500',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
                  <input
                    type="checkbox"
                    checked={useCustomInput}
                    onChange={(e) => setUseCustomInput(e.target.checked)}
                    style={{ marginRight: '6px' }}
                  />
                  Use custom base
                </label>
              </div>

              {useCustomInput ? (
                <input
                  type="text"
                  value={customInputBase}
                  onChange={(e) => setCustomInputBase(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Enter base (2-36)"
                  style={{
                    width: '140px',
                    padding: '6px 8px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    boxSizing: 'border-box'
                  }}
                />
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
                  {commonBases.map((base) => (
                    <button
                      key={base.value}
                      onClick={() => setInputBase(base.value)}
                      style={{
                        padding: '8px 12px',
                        border: inputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
                        borderRadius: '4px',
                        background: inputBase === base.value ? '#3498db' : 'white',
                        color: inputBase === base.value ? 'white' : '#495057',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
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
              padding: '16px', 
              borderRadius: '6px',
              border: '1px solid #dee2e6'
            }}>
              <h2 style={{ marginBottom: '12px', color: '#2c3e50', fontSize: '1rem', fontWeight: '600' }}>Output</h2>

              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#495057', fontSize: '0.9rem' }}>
                  <input
                    type="checkbox"
                    checked={useCustomOutput}
                    onChange={(e) => setUseCustomOutput(e.target.checked)}
                    style={{ marginRight: '6px' }}
                  />
                  Use custom base
                </label>
              </div>

              {useCustomOutput ? (
                <input
                  type="text"
                  value={customOutputBase}
                  onChange={(e) => setCustomOutputBase(e.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Enter base (2-36)"
                  style={{
                    width: '140px',
                    padding: '6px 8px',
                    border: '1px solid #ced4da',
                    borderRadius: '4px',
                    fontSize: '0.9rem',
                    marginBottom: '12px',
                    boxSizing: 'border-box'
                  }}
                />
              ) : (
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  {commonBases.map((base) => (
                    <button
                      key={base.value}
                      onClick={() => setOutputBase(base.value)}
                      style={{
                        padding: '8px 12px',
                        border: outputBase === base.value ? '2px solid #3498db' : '1px solid #ced4da',
                        borderRadius: '4px',
                        background: outputBase === base.value ? '#3498db' : 'white',
                        color: outputBase === base.value ? 'white' : '#495057',
                        cursor: 'pointer',
                        fontSize: '0.8rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {base.name} ({base.value})
                    </button>
                  ))}
                </div>
              )}

              <div style={{ marginBottom: '12px', padding: '12px', background: '#fff8e1', borderRadius: '4px', border: '1px solid #ffecb3' }}>
                <label style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontWeight: '500', color: '#ef6c00', fontSize: '0.9rem' }}>
                  <input
                    type="checkbox"
                    checked={useTwosComplement}
                    onChange={(e) => setUseTwosComplement(e.target.checked)}
                    style={{ marginRight: '6px' }}
                  />
                  Use Two's Complement
                </label>
                
                {useTwosComplement && (
                  <div style={{ marginTop: '8px' }}>
                    <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500', color: '#ef6c00', fontSize: '0.8rem' }}>
                      Bit Width:
                    </label>
                    <select
                      value={bitWidth}
                      onChange={(e) => setBitWidth(parseInt(e.target.value))}
                      style={{
                        padding: '4px 8px',
                        border: '1px solid #ffb74d',
                        borderRadius: '4px',
                        fontSize: '0.8rem',
                        background: 'white'
                      }}
                    >
                      <option value={4}>4-bit</option>
                      <option value={8}>8-bit</option>
                      <option value={16}>16-bit</option>
                      <option value={32}>32-bit</option>
                    </select>
                  </div>
                )}
              </div>

              <div style={{
                background: '#ffffff',
                border: '2px solid #e9ecef',
                borderRadius: '4px',
                padding: '12px',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '1rem',
                fontWeight: '500',
                fontFamily: 'monospace'
              }}>
                <div style={{ flex: 1, wordBreak: 'break-all' }}>
                  {error ? (
                    <span style={{ color: '#dc3545', fontSize: '0.8rem' }}>{error}</span>
                  ) : result ? (
                    <span style={{ color: '#28a745' }}>{result}</span>
                  ) : (
                    <span style={{ color: '#6c757d', fontStyle: 'italic' }}>Result will appear here</span>
                  )}
                </div>
                {result && (
                  <button
                    onClick={copyResult}
                    style={{
                      marginLeft: '8px',
                      padding: '4px 8px',
                      background: '#28a745',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.7rem',
                      fontWeight: '500'
                    }}
                  >
                    Copy
                  </button>
                )}
              </div>
            </section>
          </main>

          <aside style={{ 
            flex: '0 0 500px', 
            background: '#e3f2fd', 
            padding: '20px',
            borderLeft: '1px solid #bbdefb',
            overflow: 'auto'
          }}>
            <section style={{
              background: '#e3f2fd',
              padding: '20px',
              borderRadius: '6px',
              border: '1px solid #bbdefb',
              marginBottom: '20px'
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

            <h3 style={{ margin: '0 0 16px 0', color: '#1976d2', fontSize: '1.1rem', fontWeight: '600' }}>
              Relevant Information
            </h3>
            
            {getRelevantExplanations.map((explanation, index) => (
              <div key={explanation.key} style={{ marginBottom: '20px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#1976d2', fontSize: '0.95rem', fontWeight: '600' }}>
                  {explanation.title}
                </h4>
                <p style={{ margin: '0 0 6px 0', color: '#424242', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  {explanation.description}
                </p>
                <p style={{ margin: 0, color: '#666', fontSize: '0.75rem', fontStyle: 'italic', fontFamily: 'monospace' }}>
                  {explanation.example}
                </p>
              </div>
            ))}

            <div style={{ background: '#f3e5f5', padding: '12px', borderRadius: '4px', border: '1px solid #e1bee7' }}>
              <p style={{ margin: 0, color: '#6a1b9a', fontSize: '0.8rem', lineHeight: '1.4' }}>
                <strong>Tip:</strong> Use the quick conversion buttons for common operations, or enable custom bases for any base from 2-36.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BaseConverter;