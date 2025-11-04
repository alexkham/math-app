
import { useState } from 'react';
import styles from './FractionCalculator.module.css';
import { defaultExplanations } from './explanations';
import { processContent } from '@/app/utils/contentProcessor';

export default function FractionCalculator({ explanations = defaultExplanations }) {
  const [operation, setOperation] = useState('calculate_fraction');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [num1, setNum1] = useState('');
  const [den1, setDen1] = useState('');
  const [num2, setNum2] = useState('');
  const [den2, setDen2] = useState('');
  const [fractionOp, setFractionOp] = useState('add');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const [apiError, setApiError] = useState(null);
  
  const API_URL = 'https://www.pickjourney.com';

  const resetForm = () => {
    setInput1('');
    setInput2('');
    setNum1('');
    setDen1('');
    setNum2('');
    setDen2('');
    setResult(null);
    setValidationError(null);
    setApiError(null);
  };

  const getDynamicExplanation = () => {
    switch (operation) {
      case 'calculate_fraction':
        if (!num1 || !den1 || !num2 || !den2) return null;
        
        const ops = {
          add: { symbol: '+', name: 'Adding' },
          subtract: { symbol: '−', name: 'Subtracting' },
          multiply: { symbol: '×', name: 'Multiplying' },
          divide: { symbol: '÷', name: 'Dividing' }
        };
        
        const op = ops[fractionOp];
        const n1 = parseInt(num1);
        const d1 = parseInt(den1);
        const n2 = parseInt(num2);
        const d2 = parseInt(den2);
        
        if (fractionOp === 'add' || fractionOp === 'subtract') {
          const commonDen = d1 * d2;
          const newNum1 = n1 * d2;
          const newNum2 = n2 * d1;
          const resultNum = fractionOp === 'add' ? newNum1 + newNum2 : newNum1 - newNum2;
          
          return (
            <div>
              <p><strong>{op.name} {processContent(`$\\frac{${n1}}{${d1}}$`)} {op.symbol} {processContent(`$\\frac{${n2}}{${d2}}$`)}:</strong></p>
              <p>Step 1: Find common denominator → {d1} × {d2} = {commonDen}</p>
              <p>Step 2: Convert fractions:</p>
              <p style={{paddingLeft: '20px'}}>• {processContent(`$\\frac{${n1}}{${d1}} = \\frac{${newNum1}}{${commonDen}}$`)}</p>
              <p style={{paddingLeft: '20px'}}>• {processContent(`$\\frac{${n2}}{${d2}} = \\frac{${newNum2}}{${commonDen}}$`)}</p>
              <p>Step 3: {fractionOp === 'add' ? 'Add' : 'Subtract'} numerators → {newNum1} {op.symbol} {newNum2} = {resultNum}</p>
              <p>Step 4: Result = {processContent(`$\\frac{${resultNum}}{${commonDen}}$`)} (then simplify)</p>
            </div>
          );
        } else if (fractionOp === 'multiply') {
          const resultNum = n1 * n2;
          const resultDen = d1 * d2;
          
          return (
            <div>
              <p><strong>Multiplying {processContent(`$\\frac{${n1}}{${d1}}$`)} × {processContent(`$\\frac{${n2}}{${d2}}$`)}:</strong></p>
              <p>Step 1: Multiply numerators → {n1} × {n2} = {resultNum}</p>
              <p>Step 2: Multiply denominators → {d1} × {d2} = {resultDen}</p>
              <p>Step 3: Result = {processContent(`$\\frac{${resultNum}}{${resultDen}}$`)} (then simplify)</p>
            </div>
          );
        } else if (fractionOp === 'divide') {
          const resultNum = n1 * d2;
          const resultDen = d1 * n2;
          
          return (
            <div>
              <p><strong>Dividing {processContent(`$\\frac{${n1}}{${d1}}$`)} ÷ {processContent(`$\\frac{${n2}}{${d2}}$`)}:</strong></p>
              <p>Step 1: Flip second fraction → {processContent(`$\\frac{${d2}}{${n2}}$`)}</p>
              <p>Step 2: Multiply → {processContent(`$\\frac{${n1}}{${d1}}$`)} × {processContent(`$\\frac{${d2}}{${n2}}$`)}</p>
              <p>Step 3: Numerator → {n1} × {d2} = {resultNum}</p>
              <p>Step 4: Denominator → {d1} × {n2} = {resultDen}</p>
              <p>Step 5: Result = {processContent(`$\\frac{${resultNum}}{${resultDen}}$`)} (then simplify)</p>
            </div>
          );
        }
        break;
        
      case 'float_to_frac':
        if (!input1 || isNaN(parseFloat(input1))) return null;
        
        const num = parseFloat(input1);
        const decimalPlaces = (input1.split('.')[1] || '').length;
        const denominator = Math.pow(10, decimalPlaces);
        const numerator = num * denominator;
        
        return (
          <div>
            <p><strong>Converting {input1} to fraction:</strong></p>
            <p>Step 1: Count decimal places → {decimalPlaces}</p>
            <p>Step 2: Multiply by {processContent(`$10^{${decimalPlaces}}$`)} → {num} × {denominator} = {numerator}</p>
            <p>Step 3: Create fraction → {processContent(`$\\frac{${numerator}}{${denominator}}$`)}</p>
            <p>Step 4: Simplify by finding GCD</p>
          </div>
        );
        
      case 'float_to_mixed':
        if (!input1 || isNaN(parseFloat(input1))) return null;
        
        const numVal = parseFloat(input1);
        const isNegative = numVal < 0;
        const absNum = Math.abs(numVal);
        const wholePart = Math.floor(absNum);
        const decimalPart = absNum - wholePart;
        const decPlaces = (input1.split('.')[1] || '').length;
        const denom = Math.pow(10, decPlaces);
        const numer = Math.round(decimalPart * denom);
        
        return (
          <div>
            <p><strong>Converting {input1} to mixed number:</strong></p>
            <p>Step 1: Separate whole part → {isNegative ? '-' : ''}{wholePart}</p>
            <p>Step 2: Decimal part → {decimalPart.toFixed(decPlaces)}</p>
            <p>Step 3: Convert to fraction → {processContent(`$\\frac{${numer}}{${denom}}$`)}</p>
            <p>Step 4: Combine → {processContent(`$${isNegative ? '-' : ''}${wholePart}\\frac{${numer}}{${denom}}$`)} (then simplify)</p>
          </div>
        );
        
      case 'frac_to_float':
        if (!num1 || !den1 || isNaN(parseInt(num1)) || isNaN(parseInt(den1))) return null;
        
        const n = parseInt(num1);
        const d = parseInt(den1);
        const decimalResult = n / d;
        
        return (
          <div>
            <p><strong>Converting {processContent(`$\\frac{${n}}{${d}}$`)} to decimal:</strong></p>
            <p>Step 1: Divide numerator by denominator</p>
            <p>Step 2: {n} ÷ {d} = {decimalResult}</p>
          </div>
        );
        
      case 'inverse':
        if (!input1 || isNaN(parseFloat(input1))) return null;
        
        const value = parseFloat(input1);
        const inverseValue = 1 / value;
        
        return (
          <div>
            <p><strong>Finding inverse of {input1}:</strong></p>
            <p>Step 1: Use formula {processContent(`$\\frac{1}{x}$`)}</p>
            <p>Step 2: Calculate → {processContent(`$\\frac{1}{${input1}}$`)} = {inverseValue}</p>
            <p>Step 3: Verify → {input1} × {inverseValue.toFixed(6)} ≈ 1</p>
          </div>
        );
        
      case 'mixed_to_float':
        if (!input1) return null;
        
        const mixedPattern = /^(-?\d+)\s+(\d+)\/(\d+)$/;
        const fracPattern = /^(-?\d+)\/(\d+)$/;
        const matchMixed = input1.match(mixedPattern);
        const matchFrac = input1.match(fracPattern);
        
        if (matchMixed) {
          const [, whole, n, d] = matchMixed;
          const fracValue = parseInt(n) / parseInt(d);
          const total = parseInt(whole) + fracValue;
          
          return (
            <div>
              <p><strong>Converting {processContent(`$${whole}\\frac{${n}}{${d}}$`)} to decimal:</strong></p>
              <p>Step 1: Whole number part → {whole}</p>
              <p>Step 2: Fraction part → {processContent(`$\\frac{${n}}{${d}}$`)} = {fracValue.toFixed(6)}</p>
              <p>Step 3: Add together → {whole} + {fracValue.toFixed(6)} = {total.toFixed(6)}</p>
            </div>
          );
        } else if (matchFrac) {
          const [, n, d] = matchFrac;
          const result = parseInt(n) / parseInt(d);
          return (
            <div>
              <p><strong>Converting {processContent(`$\\frac{${n}}{${d}}$`)} to decimal:</strong></p>
              <p>Step 1: Divide → {n} ÷ {d} = {result.toFixed(6)}</p>
            </div>
          );
        }
        return <p style={{color: '#64748b', fontStyle: 'italic'}}>Enter a mixed number (e.g., 1 1/2) to see steps</p>;
        
      case 'add_mixed':
      case 'subtract_mixed':
      case 'multiply_mixed':
      case 'divide_mixed':
        if (!input1 || !input2) return null;
        
        const mixedPat = /^(-?\d+)\s+(\d+)\/(\d+)$/;
        const fractionPat = /^(-?\d+)\/(\d+)$/;
        
        let whole1 = 0, num1Val = 0, den1Val = 1;
        const match1Mixed = input1.match(mixedPat);
        const match1Frac = input1.match(fractionPat);
        
        if (match1Mixed) {
          whole1 = parseInt(match1Mixed[1]);
          num1Val = parseInt(match1Mixed[2]);
          den1Val = parseInt(match1Mixed[3]);
        } else if (match1Frac) {
          num1Val = parseInt(match1Frac[1]);
          den1Val = parseInt(match1Frac[2]);
        } else {
          return <p style={{color: '#64748b', fontStyle: 'italic'}}>Enter valid mixed numbers to see steps</p>;
        }
        
        let whole2 = 0, num2Val = 0, den2Val = 1;
        const match2Mixed = input2.match(mixedPat);
        const match2Frac = input2.match(fractionPat);
        
        if (match2Mixed) {
          whole2 = parseInt(match2Mixed[1]);
          num2Val = parseInt(match2Mixed[2]);
          den2Val = parseInt(match2Mixed[3]);
        } else if (match2Frac) {
          num2Val = parseInt(match2Frac[1]);
          den2Val = parseInt(match2Frac[2]);
        } else {
          return <p style={{color: '#64748b', fontStyle: 'italic'}}>Enter valid mixed numbers to see steps</p>;
        }
        
        const improper1Num = Math.abs(whole1) * den1Val + num1Val;
        const improper1 = whole1 < 0 ? -improper1Num : improper1Num;
        const improper2Num = Math.abs(whole2) * den2Val + num2Val;
        const improper2 = whole2 < 0 ? -improper2Num : improper2Num;
        
        const opNames = {
          add_mixed: { name: 'Adding', symbol: '+' },
          subtract_mixed: { name: 'Subtracting', symbol: '−' },
          multiply_mixed: { name: 'Multiplying', symbol: '×' },
          divide_mixed: { name: 'Dividing', symbol: '÷' }
        };
        
        const opInfo = opNames[operation];
        
        return (
          <div>
            <p><strong>{opInfo.name} {input1} {opInfo.symbol} {input2}:</strong></p>
            <p>Step 1: Convert to improper fractions</p>
            <p style={{paddingLeft: '20px'}}>• {input1} = {processContent(`$\\frac{${Math.abs(whole1)} \\times ${den1Val} + ${num1Val}}{${den1Val}} = \\frac{${improper1}}{${den1Val}}$`)}</p>
            <p style={{paddingLeft: '20px'}}>• {input2} = {processContent(`$\\frac{${Math.abs(whole2)} \\times ${den2Val} + ${num2Val}}{${den2Val}} = \\frac{${improper2}}{${den2Val}}$`)}</p>
            {operation === 'add_mixed' || operation === 'subtract_mixed' ? (
              <>
                <p>Step 2: Find common denominator → {den1Val} × {den2Val} = {den1Val * den2Val}</p>
                <p>Step 3: Convert fractions</p>
                <p style={{paddingLeft: '20px'}}>• {processContent(`$\\frac{${improper1}}{${den1Val}} = \\frac{${improper1 * den2Val}}{${den1Val * den2Val}}$`)}</p>
                <p style={{paddingLeft: '20px'}}>• {processContent(`$\\frac{${improper2}}{${den2Val}} = \\frac{${improper2 * den1Val}}{${den1Val * den2Val}}$`)}</p>
                <p>Step 4: {operation === 'add_mixed' ? 'Add' : 'Subtract'} numerators → {improper1 * den2Val} {opInfo.symbol} {improper2 * den1Val} = {operation === 'add_mixed' ? improper1 * den2Val + improper2 * den1Val : improper1 * den2Val - improper2 * den1Val}</p>
                <p>Step 5: Result = {processContent(`$\\frac{${operation === 'add_mixed' ? improper1 * den2Val + improper2 * den1Val : improper1 * den2Val - improper2 * den1Val}}{${den1Val * den2Val}}$`)} (then simplify)</p>
              </>
            ) : operation === 'multiply_mixed' ? (
              <>
                <p>Step 2: Multiply numerators → {improper1} × {improper2} = {improper1 * improper2}</p>
                <p>Step 3: Multiply denominators → {den1Val} × {den2Val} = {den1Val * den2Val}</p>
                <p>Step 4: Result = {processContent(`$\\frac{${improper1 * improper2}}{${den1Val * den2Val}}$`)} (then simplify)</p>
              </>
            ) : (
              <>
                <p>Step 2: Flip second fraction → {processContent(`$\\frac{${den2Val}}{${improper2}}$`)}</p>
                <p>Step 3: Multiply → {processContent(`$\\frac{${improper1}}{${den1Val}} \\times \\frac{${den2Val}}{${improper2}}$`)}</p>
                <p>Step 4: Numerator → {improper1} × {den2Val} = {improper1 * den2Val}</p>
                <p>Step 5: Denominator → {den1Val} × {improper2} = {den1Val * improper2}</p>
                <p>Step 6: Result = {processContent(`$\\frac{${improper1 * den2Val}}{${den1Val * improper2}}$`)} (then simplify)</p>
              </>
            )}
          </div>
        );
        
      default:
        return null;
    }
  };

  const validateInputs = () => {
    switch (operation) {
      case 'float_to_frac':
      case 'float_to_mixed':
      case 'inverse':
        if (!input1 || isNaN(parseFloat(input1))) {
          setValidationError('Please enter a valid number.');
          return false;
        }
        break;
      case 'frac_to_float':
        if (!num1 || isNaN(parseInt(num1))) {
          setValidationError('Please enter a valid numerator.');
          return false;
        }
        if (!den1 || isNaN(parseInt(den1))) {
          setValidationError('Please enter a valid denominator.');
          return false;
        }
        if (parseInt(den1) === 0) {
          setValidationError('Denominator cannot be zero.');
          return false;
        }
        break;
      case 'calculate_fraction':
        if (!num1 || isNaN(parseInt(num1))) {
          setValidationError('Please enter a valid numerator for the first fraction.');
          return false;
        }
        if (!den1 || isNaN(parseInt(den1))) {
          setValidationError('Please enter a valid denominator for the first fraction.');
          return false;
        }
        if (parseInt(den1) === 0) {
          setValidationError('First denominator cannot be zero.');
          return false;
        }
        if (!num2 || isNaN(parseInt(num2))) {
          setValidationError('Please enter a valid numerator for the second fraction.');
          return false;
        }
        if (!den2 || isNaN(parseInt(den2))) {
          setValidationError('Please enter a valid denominator for the second fraction.');
          return false;
        }
        if (parseInt(den2) === 0) {
          setValidationError('Second denominator cannot be zero.');
          return false;
        }
        if (fractionOp === 'divide' && parseInt(num2) === 0) {
          setValidationError('Cannot divide by zero.');
          return false;
        }
        break;
      case 'mixed_to_float':
        const mixedPattern = /^-?\d+\s+\d+\/\d+$|^-?\d+\/\d+$/;
        if (!mixedPattern.test(input1)) {
          setValidationError('Please enter a valid mixed number (e.g., 1 1/2) or fraction (e.g., 3/4).');
          return false;
        }
        break;
      case 'add_mixed':
      case 'subtract_mixed':
      case 'multiply_mixed':
      case 'divide_mixed':
        const pattern = /^-?\d+\s+\d+\/\d+$|^-?\d+\/\d+$/;
        if (!pattern.test(input1)) {
          setValidationError('Please enter a valid first mixed number (e.g., 1 1/2) or fraction (e.g., 3/4).');
          return false;
        }
        if (!pattern.test(input2)) {
          setValidationError('Please enter a valid second mixed number (e.g., 2 3/4) or fraction (e.g., 1/2).');
          return false;
        }
        if (operation === 'divide_mixed' && input2 === '0' || input2 === '0/1') {
          setValidationError('Cannot divide by zero.');
          return false;
        }
        break;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidationError(null);
    setApiError(null);
    
    if (!validateInputs()) {
      return;
    }
    
    setLoading(true);
    
    try {
      let url = '';
      
      switch (operation) {
        case 'float_to_frac':
          url = `${API_URL}/fractions/float_to_frac/${input1}/`;
          break;
        case 'float_to_mixed':
          url = `${API_URL}/fractions/float_to_mixed/${input1}`;
          break;
        case 'frac_to_float':
          const floatResult = parseFloat(num1) / parseFloat(den1);
          setResult({ result: floatResult.toString() });
          setLoading(false);
          return;
        case 'inverse':
          url = `${API_URL}/fractions/inverse/${input1}/`;
          break;
        case 'calculate_fraction':
          url = `${API_URL}/fractions/calculate_fraction?num1=${num1}&den1=${den1}&operation=${fractionOp}&num2=${num2}&den2=${den2}`;
          break;
        case 'mixed_to_float':
          url = `${API_URL}/fractions/mixed_to_float?x=${encodeURIComponent(input1)}`;
          break;
        case 'add_mixed':
          url = `${API_URL}/fractions/add_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        case 'subtract_mixed':
          url = `${API_URL}/fractions/subtract_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        case 'multiply_mixed':
          url = `${API_URL}/fractions/multiply_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        case 'divide_mixed':
          url = `${API_URL}/fractions/divide_mixed?x=${encodeURIComponent(input1)}&y=${encodeURIComponent(input2)}`;
          break;
        default:
          throw new Error('Invalid operation');
      }
      
      if (url) {
        const response = await fetch(url);
        
        if (!response.ok) {
          const errorData = await response.json();
          if (errorData.error) {
            setValidationError(errorData.error);
          } else {
            setApiError(`Server error: ${response.status} ${response.statusText}`);
          }
          return;
        }
        
        const data = await response.json();
        if (data.error) {
          setValidationError(data.error);
        } else {
          setResult(data);
        }
      }
    } catch (err) {
      setApiError(`Connection error: ${err.message}. Please check your network connection or try again later.`);
    } finally {
      setLoading(false);
    }
  };

  const currentExplanation = explanations[operation];
  const dynamicExplanation = getDynamicExplanation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Operation:</label>
            <select 
              value={operation} 
              onChange={(e) => {
                setOperation(e.target.value);
                resetForm();
              }}
              className={styles.select}
            >
              <option value="calculate_fraction">Basic Fraction Operations</option>
              <option value="float_to_frac">Convert Float to Fraction</option>
              <option value="float_to_mixed">Convert Float to Mixed Number</option>
              <option value="frac_to_float">Convert Fraction to Decimal</option>
              <option value="mixed_to_float">Convert Mixed Number to Float</option>
              <option value="inverse">Find Inverse (1/x)</option>
              <option value="add_mixed">Add Mixed Numbers</option>
              <option value="subtract_mixed">Subtract Mixed Numbers</option>
              <option value="multiply_mixed">Multiply Mixed Numbers</option>
              <option value="divide_mixed">Divide Mixed Numbers</option>
            </select>
          </div>
          
          {operation === 'calculate_fraction' ? (
            <div className={styles.fractionCalculator}>
              <div className={styles.formGroup}>
                <label className={styles.label}>First Fraction:</label>
                <div className={styles.fractionInputs}>
                  <input
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Numerator"
                    className={styles.input}
                  />
                  <span className={styles.fractionDivider}>⁄</span>
                  <input
                    type="text"
                    value={den1}
                    onChange={(e) => setDen1(e.target.value)}
                    placeholder="Denominator"
                    className={styles.input}
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Operation:</label>
                <select 
                  value={fractionOp} 
                  onChange={(e) => setFractionOp(e.target.value)}
                  className={styles.select}
                >
                  <option value="add">Add (+)</option>
                  <option value="subtract">Subtract (-)</option>
                  <option value="multiply">Multiply (×)</option>
                  <option value="divide">Divide (÷)</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Second Fraction:</label>
                <div className={styles.fractionInputs}>
                  <input
                    type="text"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    placeholder="Numerator"
                    className={styles.input}
                  />
                  <span className={styles.fractionDivider}>⁄</span>
                  <input
                    type="text"
                    value={den2}
                    onChange={(e) => setDen2(e.target.value)}
                    placeholder="Denominator"
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          ) : operation === 'frac_to_float' ? (
            <div className={styles.fractionCalculator}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Fraction:</label>
                <div className={styles.fractionInputs}>
                  <input
                    type="text"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    placeholder="Numerator"
                    className={styles.input}
                  />
                  <span className={styles.fractionDivider}>⁄</span>
                  <input
                    type="text"
                    value={den1}
                    onChange={(e) => setDen1(e.target.value)}
                    placeholder="Denominator"
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          ) : ['add_mixed', 'subtract_mixed', 'multiply_mixed', 'divide_mixed'].includes(operation) ? (
            <div className={styles.mixedNumbers}>
              <div className={styles.formGroup}>
                <label className={styles.label}>First Mixed Number:</label>
                <input
                  type="text"
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                  placeholder="e.g., 1 1/2"
                  className={styles.input}
                />
                <p className={styles.hint}>Format: whole number space fraction (e.g., 1 1/2)</p>
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Second Mixed Number:</label>
                <input
                  type="text"
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                  placeholder="e.g., 2 3/4"
                  className={styles.input}
                />
              </div>
            </div>
          ) : (
            <div className={styles.formGroup}>
              <label className={styles.label}>Input:</label>
              <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder={operation === 'mixed_to_float' ? "e.g., 1 1/2" : "e.g., 0.5"}
                className={styles.input}
              />
              {operation === 'mixed_to_float' && (
                <p className={styles.hint}>Format: whole number space fraction (e.g., 1 1/2)</p>
              )}
            </div>
          )}
          
          <div className={styles.buttonGroup}>
            <button 
              type="submit" 
              disabled={loading}
              className={styles.button}
            >
              {loading ? 'Calculating...' : 'Calculate'}
            </button>
            
            <button 
              type="button" 
              onClick={resetForm}
              className={`${styles.button} ${styles.resetButton}`}
            >
              Reset
            </button>
          </div>
        </form>
        
        {validationError && (
          <div className={styles.validationError}>
            <p>{validationError}</p>
          </div>
        )}
        
        {apiError && (
          <div className={styles.apiError}>
            <p>{apiError}</p>
          </div>
        )}
        
        {result && (
          <div className={styles.result}>
            <h2 className={styles.resultTitle}>Result:</h2>
            {result.result && (
              <div className={styles.resultDisplay}>
                <span className={styles.resultValue}>{result.result}</span>
              </div>
            )}
          </div>
        )}
      </div>

      <div className={styles.explanationSidebar}>
        <div className={styles.explanationPanel}>
          <h3 className={styles.explanationTitle}>{currentExplanation.title}</h3>
          <p className={styles.explanationContent}>{processContent(currentExplanation.content)}</p>
        </div>
        
        {dynamicExplanation && (
          <div className={styles.dynamicExplanation}>
            <h3 className={styles.explanationTitle}>Step-by-Step</h3>
            <div className={styles.stepsContent}>
              {dynamicExplanation}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}