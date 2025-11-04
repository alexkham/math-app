
'use client';
import React, { useState } from 'react';
import Decimal from 'decimal.js';
import styles from './Exponent.module.css';
import ExplanationDetails from '@/app/components/ExplanationDetails';
import { processContent } from '@/app/utils/contentProcessor';

function ExponentCalculator({ explanations, detailInstructions }) {
  const [base, setBase] = useState('');
  const [exponent, setExponent] = useState('2');
  const [result, setResult] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [powerType, setPowerType] = useState('square');
  const [error, setError] = useState('');
  const [warning, setWarning] = useState('');

  const handleChangeBase = (event) => {
    const value = event.target.value;
    setBase(value);
    setError('');
    
    if (value && !/^-?\d*\.?\d*$/.test(value)) {
      setWarning('Warning: Please use only numbers and decimal point');
    } else {
      setWarning('');
    }
  };

  const handleChangeExponent = (event) => {
    const value = event.target.value;
    setExponent(value);
    setError('');
    
    if (value && !/^-?\d*\.?\d*$/.test(value)) {
      setWarning('Warning: Please use only numbers and decimal point');
    } else {
      setWarning('');
    }
  };

  const handlePowerTypeChange = (event) => {
    const type = event.target.value;
    setPowerType(type);
    setWarning('');
    switch (type) {
      case 'square':
        setExponent('2');
        break;
      case 'cube':
        setExponent('3');
        break;
      case 'custom':
        setExponent('');
        break;
      default:
        break;
    }
    setError('');
  };

  const formatResult = (decimalResult) => {
    const absValue = decimalResult.abs();
    
    if (absValue.gte(1e9) || (absValue.gt(0) && absValue.lt(1e-4))) {
      return decimalResult.toExponential(4);
    }
    
    return decimalResult.toFixed(4);
  };
  
  const calculateExponent = () => {
    setWarning('');
    
    if (!/^-?\d*\.?\d*$/.test(base) || base === '') {
      setError('Error: Invalid base number');
      setResult('');
      return;
    }

    if (!/^-?\d*\.?\d*$/.test(exponent) || exponent === '') {
      setError('Error: Invalid exponent');
      setResult('');
      return;
    }

    const baseNum = parseFloat(base);
    const expNum = parseFloat(exponent);

    if (isNaN(baseNum) || isNaN(expNum)) {
      setError('Error: Both base and exponent must be valid numbers');
      setResult('');
      return;
    }

    try {
      const decimalBase = new Decimal(baseNum);
      const result = decimalBase.pow(expNum);
      setResult(formatResult(result));
      setError('');
    } catch (error) {
      setError('Error: Calculation failed');
      setResult('');
    }
  };

  const resetAll = () => {
    setBase('');
    setExponent('2');
    setPowerType('square');
    setResult('');
    setError('');
    setWarning('');
  };

  const showTooltip = (tooltipId) => {
    setActiveTooltip(tooltipId);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div className={styles.pageLayout}>
      <ExplanationDetails 
        title="How to use Exponent Calculator" 
        instructions={detailInstructions}
      />
      <div className={styles.container}>
        <div className={styles.baseSelection}>
          <label>Choose Power Type</label>
          <div className={styles.radio_container}>
            <input
              type="radio"
              id="square"
              name="powerType"
              value="square"
              checked={powerType === 'square'}
              onChange={handlePowerTypeChange}
            />
            <label htmlFor="square">Square</label>

            <input
              type="radio"
              id="cube"
              name="powerType"
              value="cube"
              checked={powerType === 'cube'}
              onChange={handlePowerTypeChange}
            />
            <label htmlFor="cube">Cube</label>

            <input
              type="radio"
              id="custom"
              name="powerType"
              value="custom"
              checked={powerType === 'custom'}
              onChange={handlePowerTypeChange}
            />
            <label htmlFor="custom">Custom Power</label>
          </div>
        </div>
        <div className={styles.calculatorBodyWrapper}>
          <div className={styles.calculatorBody}>
            <table className={styles.calcTable}>
              <tbody>
                <tr>
                  <td className={styles.baseCell}>
                    <div className={styles.inputWrapper}>
                      <input
                        className={`${styles.valueInput} ${error ? styles.inputError : ''}`}
                        type="text"
                        value={base}
                        onChange={handleChangeBase}
                        placeholder="Enter base"
                      />
                      <span
                        className={styles.tooltipTrigger}
                        onMouseEnter={() => showTooltip('base')}
                        onMouseLeave={hideTooltip}
                      >
                        ?
                        {activeTooltip === 'base' && (
                          <span className={styles.tooltip}>Enter the base number</span>
                        )}
                      </span>
                    </div>
                  </td>
                  <td className={styles.exponentCell}>
                    <div className={styles.inputWrapper}>
                      <input
                        className={`${styles.nthInput} ${error ? styles.inputError : ''}`}
                        type="text"
                        value={exponent}
                        onChange={handleChangeExponent}
                        readOnly={powerType !== 'custom'}
                        placeholder="Power"
                      />
                      <span
                        className={styles.tooltipTrigger}
                        onMouseEnter={() => showTooltip('exponent')}
                        onMouseLeave={hideTooltip}
                      >
                        ?
                        {activeTooltip === 'exponent' && (
                          <span className={styles.tooltip}>
                            Enter the exponent (power)
                          </span>
                        )}
                      </span>
                    </div>
                  </td>
                  <td className={styles.resultCell}>= {result}</td>
                </tr>
              </tbody>
            </table>
            {error && <div className={styles.errorMessage}>{error}</div>}
            {warning && <div className={styles.warningMessage}>{warning}</div>}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={calculateExponent} className={styles.calculateButton}>
            Calculate
          </button>
          <button onClick={resetAll} className={styles.resetButton}>
            Reset
          </button>
        </div>
      </div>

      {explanations && explanations[powerType] && (
        <div className={styles.explanationContainer}>
          <div className={styles.explanationContent}>
            <div className={styles.explanationText}>
              {processContent(explanations[powerType].text)}
            </div>
            {explanations[powerType].links && (
              <div className={styles.explanationLinks}>
                <p className={styles.linksTitle}>Learn more:</p>
                <ul className={styles.linksList}>
                  {explanations[powerType].links.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} rel="noopener noreferrer" className={styles.explanationLink}>
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

export default ExponentCalculator;