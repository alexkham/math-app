
'use client'
import React, { useState } from 'react';
import Decimal from 'decimal.js';
import styles from './Arithmetics.module.css';
import ExplanationDetails from '@/app/components/ExplanationDetails';

function LogarithmCalculator({ explanations, detailInstructions }) {
  const [value, setValue] = useState('');
  const [base, setBase] = useState('2');
  const [result, setResult] = useState('');
  const [standard, setStandard] = useState(true);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [error, setError] = useState('');

  const handleChangeValue = (event) => {
    setValue(event.target.value);
    setError('');
  };

  const handleChangeBase = (event) => {
    setBase(event.target.value);
    setError('');
  };

  const toggleBaseInput = (event) => {
    setStandard(event.target.value === 'standard');
    if (event.target.value === 'standard') {
      setBase('2');
    } else {
      setBase('');
    }
    setError('');
  };

  const calculateLogarithm = () => {
    if (!/^-?\d*\.?\d*$/.test(value) || !/^\d*\.?\d*$/.test(base)) {
      setError('Warning: Input contains invalid characters');
      return;
    }

    const numericalValue = parseFloat(value);
    const numericalBase = parseFloat(base);
  
    if (numericalValue <= 0 || numericalBase <= 0 || isNaN(numericalValue) || isNaN(numericalBase)) {
      setError('Error: Both value and base must be positive numbers');
      return;
    }

    try {
      const decimalValue = new Decimal(numericalValue);
      const decimalBase = new Decimal(numericalBase);
      const logResult = decimalValue.log().div(decimalBase.log());
      setResult(logResult.toFixed(4));
      setError('');
    } catch (error) {
      setError('Error: Calculation failed');
    }
  };

  const resetAll = () => {
    setValue('');
    setBase('2');
    setStandard(true);
    setResult('');
    setError('');
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
        title="How to use Logarithm Calculator" 
        instructions={detailInstructions}
      />
      <div className={styles.container}>
        <div className={styles.baseSelection}>
          <label>Choose Base</label>
          <div className={styles.radio_container}>
            <input 
              type="radio" 
              checked={standard} 
              value="standard" 
              onChange={toggleBaseInput} 
              id="standard"
            />
            <label htmlFor="standard">Standard</label>
            <input 
              type="radio" 
              checked={!standard} 
              value="custom" 
              onChange={toggleBaseInput} 
              id="custom"
            />
            <label htmlFor="custom">Custom</label>
          </div>
        </div>
        <div className={styles.calculatorBodyWrapper}>
          <div className={styles.calculatorBody}>
            <table className={styles.calcTable}>
              <tbody>
                <tr>
                  <td style={{width:'80px'}}><span className={styles.logSymbol}>log</span></td>
                  <td style={{width:'80px'}}></td>
                  <td>
                    <div className={styles.inputWrapper}>
                      <input  
                        className={`${styles.valueInput} ${error ? styles.inputError : ''}`}
                        type="text" 
                        value={value} 
                        onChange={handleChangeValue} 
                        placeholder="Enter number"
                      />
                      <span 
                        className={styles.tooltipTrigger} 
                        onMouseEnter={() => showTooltip('value')}
                        onMouseLeave={hideTooltip}
                      >
                        ?
                        {activeTooltip === 'value' && (
                          <span className={styles.tooltip}>
                            Enter the value to calculate the logarithm of
                          </span>
                        )}
                      </span>
                    </div>
                  </td>
                  <td className={styles.resultCell}>= {result}</td>
                </tr>
                <tr>
                  <td></td>
                  <td className={styles.baseCol} style={{minWidth:'150px'}}>
                    <div className={styles.inputWrapper} style={{minWidth:'150px'}}>
                      {standard ? (
                        <select 
                          className={`${styles.selectBase} ${error ? styles.inputError : ''}`}
                          value={base} 
                          onChange={handleChangeBase}
                        >
                          <option value="2">2</option>
                          <option value={Math.E.toFixed(4)}>e</option>
                          <option value="10">10</option>
                        </select>
                      ) : (
                        <input
                          className={`${styles.logBase} ${error ? styles.inputError : ''}`}
                          type='text'
                          value={base}
                          onChange={handleChangeBase}
                          placeholder="Enter base"
                        />
                      )}
                      <span 
                        className={styles.tooltipTrigger}
                        onMouseEnter={() => showTooltip('base')}
                        onMouseLeave={hideTooltip}
                      >
                        ?
                        {activeTooltip === 'base' && (
                          <span className={styles.tooltip}>
                            Enter the base of the logarithm
                          </span>
                        )}
                      </span>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <div className={styles.buttonContainer}>
          <button 
            onClick={calculateLogarithm}
            className={styles.calculateButton}
          >
            Calculate
          </button>
          <button 
            onClick={resetAll}
            className={styles.resetButton}
          >
            Reset
          </button>
        </div>
      </div>
      
      {explanations && explanations[standard ? 'standard' : 'custom'] && (
        <div className={styles.explanationContainer}>
          <div className={styles.explanationContent}>
            <p className={styles.explanationText}>
              {explanations[standard ? 'standard' : 'custom'].text}
            </p>
            {explanations[standard ? 'standard' : 'custom'].links && (
              <div className={styles.explanationLinks}>
                <p className={styles.linksTitle}>Learn more:</p>
                <ul className={styles.linksList}>
                  {explanations[standard ? 'standard' : 'custom'].links.map((link, index) => (
                    <li key={index}>
                      <a href={link.link}  rel="noopener noreferrer" className={styles.explanationLink}>
                      {/* Use  target="_blank" for external links */}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
             {explanations[standard ? 'standard' : 'custom'].externalLinks && (
              <div className={styles.explanationLinks}>
                <p className={styles.linksTitle}>Learn more:</p>
                <ul className={styles.linksList}>
                  {explanations[standard ? 'standard' : 'custom'].externalLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.link} target="_blank" rel="noopener noreferrer" className={styles.explanationLink}>
                      {/* Use  target="_blank" for external links */}
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

export default LogarithmCalculator;