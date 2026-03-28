

import React, { useState } from 'react';
import katex from 'katex';
import { RotateCcw } from 'lucide-react';
import 'katex/dist/katex.min.css';
// import { generateQuadraticExplanations } from './quadraticExplanations';
import styles from './QuadraticSolver.module.css';

const QuadraticSolver = ({generateQuadraticExplanations}) => {
  const initialState = {
    coefficients: { a: '', b: '', c: '' },
    signs: { a: '+', b: '+', c: '+' }
  };

  const [coefficients, setCoefficients] = useState(initialState.coefficients);
  const [signs, setSigns] = useState(initialState.signs);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [showComplexSolution, setShowComplexSolution] = useState(false);

  const normalizeNumber = (value) => {
    if (value === '') return '';
    const num = parseFloat(value);
    return isNaN(num) ? '' : num.toString();
  };

  const hasAnyCoefficient = () => {
    return coefficients.a !== '' || coefficients.b !== '' || coefficients.c !== '';
  };

  const getCurrentEquation = () => {
    if (!hasAnyCoefficient()) return '';

    const a = parseFloat(coefficients.a || '0') * (signs.a === '+' ? 1 : -1);
    const b = parseFloat(coefficients.b || '0') * (signs.b === '+' ? 1 : -1);
    const c = parseFloat(coefficients.c || '0') * (signs.c === '+' ? 1 : -1);

    if (coefficients.a === '' && coefficients.b === '' && coefficients.c !== '') return '';

    const formatCoef = (num, isFirst = false, hasX = true) => {
      if (num === 0 && !(!hasX && isFirst)) return '';
      const sign = num < 0 ? '-' : (isFirst ? '' : '+');
      const absNum = Math.abs(num);
      const numStr = absNum === 1 && hasX ? '' : absNum.toString();
      return `${sign}${numStr}`;
    };

    const aStr = formatCoef(a, true);
    const bStr = formatCoef(b, false);
    const cStr = formatCoef(c, false, false);

    let equation = '';
    if (aStr !== '') equation += `${aStr}x^2`;
    if (bStr !== '') equation += ` ${bStr}x`;
    if (cStr !== '') equation += ` ${cStr}`;
    equation += ' = 0';

    return equation.trim();
  };

  const renderKaTeX = (tex) => {
    if (!tex) return { __html: '' };
    return { __html: katex.renderToString(tex, { throwOnError: false, displayMode: false }) };
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newCoefficients = { ...coefficients, [name]: normalizeNumber(value) };
    setCoefficients(newCoefficients);
    setError('');
    
    if (name === 'c' && newCoefficients.a === '' && newCoefficients.b === '' && value !== '') {
      setError('Please enter at least one coefficient for x or x² terms');
    }
  };

  const handleSignChange = (e) => {
    const { name, value } = e.target;
    setSigns(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setCoefficients(initialState.coefficients);
    setSigns(initialState.signs);
    setResult(null);
    setError('');
    setShowComplexSolution(false);
  };

  const handleResetCoefficient = (coefficient) => {
    setCoefficients(prev => ({...prev, [coefficient]: ''}));
    setSigns(prev => ({...prev, [coefficient]: '+'}));
  };

  const handleShowComplexSolution = () => {
    setShowComplexSolution(true);
  };

  const validateInputs = () => {
    if (!hasAnyCoefficient()) {
      setError('Please enter at least one coefficient');
      return false;
    }

    if (coefficients.a === '' && coefficients.b === '' && coefficients.c !== '') {
      setError('Please enter at least one coefficient for x or x² terms');
      return false;
    }

    return true;
  };

  const solveQuadratic = () => {
    setShowComplexSolution(false);
    setError('');
    setResult(null);

    if (!validateInputs()) return;

    const a = parseFloat(coefficients.a || '0') * (signs.a === '+' ? 1 : -1);
    const b = parseFloat(coefficients.b || '0') * (signs.b === '+' ? 1 : -1);
    const c = parseFloat(coefficients.c || '0') * (signs.c === '+' ? 1 : -1);
    const discriminant = b * b - 4 * a * c;

    if (a === 0 && b === 0 && c !== 0) {
      setError('Please enter at least one coefficient for x or x² terms');
      return;
    }

    if (a === 0 && b !== 0) {
      const x = -c / b;
      setResult({ 
        type: 'linear', 
        x: x.toFixed(4),
        explanations: generateQuadraticExplanations(a, b, c, discriminant).linear
      });
      return;
    }

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
      setResult({ 
        type: 'real', 
        x1: x1.toFixed(4), 
        x2: x2.toFixed(4),
        explanations: generateQuadraticExplanations(a, b, c, discriminant).real
      });
    } else if (discriminant === 0) {
      const x = -b / (2 * a);
      setResult({ 
        type: 'equal', 
        x: x.toFixed(4),
        explanations: generateQuadraticExplanations(a, b, c, discriminant).equal
      });
    } else {
      const realPart = (-b / (2 * a)).toFixed(4);
      const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(4);
      setResult({ 
        type: 'complex', 
        real: realPart, 
        imaginary: imaginaryPart,
        explanations: generateQuadraticExplanations(a, b, c, discriminant).complex
      });
    }
  };

  const SignToggle = ({ name, value, onChange }) => (
    <div className={styles.signToggleWrapper}>
      <button
        type="button"
        className={`${styles.signToggle} ${value === '-' ? styles.negative : ''}`}
        onClick={() => onChange({ target: { name, value: value === '+' ? '-' : '+' }})}
        aria-label="Toggle sign"
      >
        {value}
      </button>
      <span className={styles.tooltipText}>Click to Toggle Sign</span>
    </div>
  );

  const renderSolutions = () => {
    if (!result) return null;

    return (
      <div className={styles.solutionsWrapper}>
        {result.type === 'linear' && (
          <p className={styles.solution} dangerouslySetInnerHTML={renderKaTeX(`x = ${result.x}`)} />
        )}

        {result.type === 'real' && (
          <>
            <p className={styles.solution} dangerouslySetInnerHTML={renderKaTeX(`x_1 = ${result.x1}`)} />
            <p className={styles.solution} dangerouslySetInnerHTML={renderKaTeX(`x_2 = ${result.x2}`)} />
          </>
        )}

        {result.type === 'equal' && (
          <p className={styles.solution} dangerouslySetInnerHTML={renderKaTeX(`x = ${result.x}`)} />
        )}

        {result.type === 'complex' && showComplexSolution && (
          <>
            <p className={styles.solution} dangerouslySetInnerHTML={renderKaTeX(`x_1 = ${result.real} + ${result.imaginary}i`)} />
            <p className={styles.solution} dangerouslySetInnerHTML={renderKaTeX(`x_2 = ${result.real} - ${result.imaginary}i`)} />
          </>
        )}

        {result.type === 'complex' && !showComplexSolution && (
          <button onClick={handleShowComplexSolution} className={styles.showComplexButton}>
            Show complex solutions
          </button>
        )}
      </div>
    );
  };

  const renderExplanations = () => {
    if (!result) return null;

    return (
      <div className={styles.explanationsWrapper}>
        {result.explanations.initial.map((explanation, index) => (
          <div key={index} className={styles.explanation}>
            {explanation.text && (
              <p className={styles.explanationText}>{explanation.text}</p>
            )}
            {explanation.math && (
              <div className={styles.explanationMath} dangerouslySetInnerHTML={renderKaTeX(explanation.math)} />
            )}
          </div>
        ))}

        {result.type === 'complex' && showComplexSolution && result.explanations.detailed && (
          <>
            {result.explanations.detailed.map((explanation, index) => (
              <div key={index} className={styles.explanation}>
                {explanation.text && (
                  <p className={styles.explanationText}>{explanation.text}</p>
                )}
                {explanation.math && (
                  <div className={styles.explanationMath} dangerouslySetInnerHTML={renderKaTeX(explanation.math)} />
                )}
              </div>
            ))}
          </>
        )}
      </div>
    );
  };

  return (
    <div className={styles.solverContainer}>
      <div className={styles.mainColumn}>
        <div className={styles.solverCard}>
          <div className={styles.currentEquation} dangerouslySetInnerHTML={renderKaTeX(getCurrentEquation())} />
          
          <div className={styles.inputContainer}>
            <div className={styles.inputGroup}>
              <SignToggle name="a" value={signs.a} onChange={handleSignChange} />
              <div className={styles.inputWrapper}>
                <input
                  type="number"
                  name="a"
                  value={coefficients.a}
                  onChange={handleInputChange}
                  placeholder="0"
                  className={styles.coefficientInput}
                />
                <button 
                  onClick={() => handleResetCoefficient('a')} 
                  className={styles.inlineResetBtn}
                  title="Reset value"
                >
                  <RotateCcw size={12} />
                </button>
                <span className={styles.term} dangerouslySetInnerHTML={renderKaTeX("x^2")} />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <SignToggle name="b" value={signs.b} onChange={handleSignChange} />
              <div className={styles.inputWrapper}>
                <input
                  type="number"
                  name="b"
                  value={coefficients.b}
                  onChange={handleInputChange}
                  placeholder="0"
                  className={styles.coefficientInput}
                />
                <button 
                  onClick={() => handleResetCoefficient('b')} 
                  className={styles.inlineResetBtn}
                  title="Reset value"
                  style={{marginRight:'-12px'}}
                >
                  <RotateCcw size={12} />
                </button>
                <span className={styles.term} dangerouslySetInnerHTML={renderKaTeX("x")} />
              </div>
            </div>
            
            <div className={styles.inputGroup}>
              <SignToggle name="c" value={signs.c} onChange={handleSignChange} />
              <div className={styles.inputWrapper}>
                <input
                  type="number"
                  name="c"
                  value={coefficients.c}
                  onChange={handleInputChange}
                  placeholder="0"
                  className={styles.coefficientInput}
                />
                <button 
                  onClick={() => handleResetCoefficient('c')} 
                  className={styles.inlineResetBtn}
                  title="Reset value"
                  style={{marginRight:'-28px'}}
                >
                  <RotateCcw size={12} />
                </button>
              </div>
            </div>
            <span className={styles.operator}>=</span>
            <span className={styles.term}>0</span>
          </div>

          <div className={styles.buttonContainer}>
            <button onClick={solveQuadratic} className={styles.solveButton}>Solve</button>
            <button onClick={handleReset} className={styles.resetButton}>Reset</button>
          </div>

          {error && <div className={styles.errorMessage}>{error}</div>}
        </div>
        
        {renderSolutions()}
      </div>

      <div className={styles.resultContainer}>
        {renderExplanations()}
      </div>
    </div>
  );
};

export default QuadraticSolver;