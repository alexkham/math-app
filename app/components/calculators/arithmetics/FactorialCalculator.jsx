'use client'
import React, { useState } from 'react';
import Big from 'big.js';
import styles from './LogarithmCalculator14.module.css';

function FactorialCalculator() {
  const [value, setValue] = useState('');
  const [kValue, setKValue] = useState('');
  const [factorialType, setFactorialType] = useState('basic');
  const [result, setResult] = useState('');
  const [activeTooltip, setActiveTooltip] = useState(null);

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const handleChangeKValue = (event) => {
    setKValue(event.target.value);
  };

  const toggleFactorialType = (event) => {
    setFactorialType(event.target.value);
    if (event.target.value !== 'multi') {
      setKValue('');
    }
  };

  const calculateFactorial = () => {
    const n = parseInt(value);
    if (isNaN(n) || n < 0) {
      setResult('Error: Invalid input');
      return;
    }

    let factorialResult;
    try {
      switch (factorialType) {
        case 'basic':
          factorialResult = basicFactorial(n);
          break;
        case 'double':
          factorialResult = doubleFactorial(n);
          break;
        case 'sub':
          factorialResult = subfactorial(n);
          break;
        case 'multi':
          const k = parseInt(kValue);
          if (isNaN(k) || k <= 0) {
            setResult('Error: Invalid k value');
            return;
          }
          factorialResult = multifactorial(n, k);
          break;
        case 'primorial':
          factorialResult = primorial(n);
          break;
        default:
          setResult('Error: Invalid factorial type');
          return;
      }
      setResult(factorialResult.toString());
    } catch (error) {
      setResult('Error: Calculation failed');
    }
  };

  const basicFactorial = (n) => {
    if (n > 170) return `e^${logarithmicFactorial(n).toFixed(4)}`;
    let result = new Big(1);
    for (let i = 2; i <= n; i++) {
      result = result.times(i);
    }
    return result;
  };

  const doubleFactorial = (n) => {
    if (n > 300) return `e^${logarithmicDoubleFactorial(n).toFixed(4)}`;
    let result = new Big(1);
    for (let i = n; i > 0; i -= 2) {
      result = result.times(i);
    }
    return result;
  };

  const subfactorial = (n) => {
    if (n === 0) return new Big(1);
    if (n === 1) return new Big(0);
    let result = new Big(0);
    for (let i = 2; i <= n; i++) {
      result = result.plus(basicFactorial(i).times((i % 2 === 0 ? 1 : -1)));
    }
    return result;
  };

  const multifactorial = (n, k) => {
    if (n > 1000) return `e^${logarithmicMultifactorial(n, k).toFixed(4)}`;
    let result = new Big(1);
    for (let i = n; i > 0; i -= k) {
      result = result.times(i);
    }
    return result;
  };

  const primorial = (n) => {
    if (n > 1000) return `e^${logarithmicPrimorial(n).toFixed(4)}`;
    let result = new Big(1);
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        result = result.times(i);
      }
    }
    return result;
  };

  const isPrime = (num) => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if (num % i === 0) return false;
    return num > 1;
  };

  const logarithmicFactorial = (n) => {
    let logFact = 0;
    for (let i = 2; i <= n; i++) {
      logFact += Math.log(i);
    }
    return logFact;
  };

  const logarithmicDoubleFactorial = (n) => {
    let logFact = 0;
    for (let i = n; i > 0; i -= 2) {
      logFact += Math.log(i);
    }
    return logFact;
  };

  const logarithmicMultifactorial = (n, k) => {
    let logFact = 0;
    for (let i = n; i > 0; i -= k) {
      logFact += Math.log(i);
    }
    return logFact;
  };

  const logarithmicPrimorial = (n) => {
    let logFact = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        logFact += Math.log(i);
      }
    }
    return logFact;
  };

  const resetAll = () => {
    setValue('');
    setKValue('');
    setFactorialType('basic');
    setResult('');
  };

  const showTooltip = (tooltipId) => {
    setActiveTooltip(tooltipId);
  };

  const hideTooltip = () => {
    setActiveTooltip(null);
  };

  return (
    <div className={styles.container} style={{maxWidth:'1000px'}}>
        
      <div className={styles.baseSelection}>
        <label>Choose Factorial Type</label>
        <div className={styles.radio_container}>
          <input 
            type="radio" 
            checked={factorialType === 'basic'} 
            value="basic" 
            onChange={toggleFactorialType} 
            id="basic"
          />
          <label htmlFor="basic">Basic (n!)</label>
          <input 
            type="radio" 
            checked={factorialType === 'double'} 
            value="double" 
            onChange={toggleFactorialType} 
            id="double"
          />
          <label htmlFor="double">Double (n!!)</label>
          <input 
            type="radio" 
            checked={factorialType === 'sub'} 
            value="sub" 
            onChange={toggleFactorialType} 
            id="sub"
          />
          <label htmlFor="sub">Subfactorial (!n)</label>
          <input 
            type="radio" 
            checked={factorialType === 'multi'} 
            value="multi" 
            onChange={toggleFactorialType} 
            id="multi"
          />
          <label htmlFor="multi">Multifactorial (n(k)!)</label>
          <input 
            type="radio" 
            checked={factorialType === 'primorial'} 
            value="primorial" 
            onChange={toggleFactorialType} 
            id="primorial"
          />
          <label htmlFor="primorial">Primorial (n#)</label>
        </div>
      </div>
      <div className={styles.calculatorBody}>
        <table className={styles.calcTable}>
          <tbody>
            <tr>
              <td style={{width:'200px'}}>
                <div className={styles.inputWrapper}>
                  <input  
                    className={styles.valueInput} 
                    type="text" 
                    value={value} 
                    onChange={handleChangeValue} 
                    placeholder="Enter n"
                  />
                  <span 
                    className={styles.tooltipTrigger} 
                    onMouseEnter={() => showTooltip('value')}
                    onMouseLeave={hideTooltip}
                  >
                    ?
                    {activeTooltip === 'value' && (
                      <span className={styles.tooltip}>
                        Enter the number to calculate the factorial of
                      </span>
                    )}
                  </span>
                </div>
              </td>
              {factorialType === 'multi' ? (
                <td style={{width:'200px'}}>
                  <div className={styles.inputWrapper}>
                    <input  
                      className={styles.valueInput} 
                      type="text" 
                      value={kValue} 
                      onChange={handleChangeKValue} 
                      placeholder="Enter k"
                    />
                    <span 
                      className={styles.tooltipTrigger} 
                      onMouseEnter={() => showTooltip('kValue')}
                      onMouseLeave={hideTooltip}
                    >
                      ?
                      {activeTooltip === 'kValue' && (
                        <span className={styles.tooltip}>
                          Enter k for multifactorial
                        </span>
                      )}
                    </span>
                  </div>
                </td>
              ):<td style={{width:'3px'}}></td>}
              {/* <td className={styles.result}>= {result}</td> */}
              {result?( <td className={styles.resultCell} style={{overflowX:'scroll'}}>
                  = {result}
                </td>):(<td className={styles.resultCell}>=</td>)}
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.buttonContainer}>
        <button 
          onClick={calculateFactorial}
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
  );
}

export default FactorialCalculator;