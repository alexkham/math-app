
import React, { useState } from 'react';
import styles from './FactoringCalculator.module.css';

// Helper function to find all factors of a number
function findAllFactors(num) {
  const factors = new Set();
  const absNum = Math.abs(num);
  
  for (let i = 1; i <= Math.sqrt(absNum); i++) {
    if (absNum % i === 0) {
      if (num < 0) {
        factors.add(-i);
        factors.add(i);
        factors.add(-(absNum / i));
        factors.add(absNum / i);
      } else {
        factors.add(i);
        factors.add(absNum / i);
      }
    }
  }
  return Array.from(factors).sort((a, b) => a - b);
}

// Updated helper function to create factor pairs
function createFactorPairs(number, factors) {
  const pairs = [];
  const workingFactors = [...factors];
  
  while (workingFactors.length > 0) {
    const firstFactor = workingFactors.shift();
    const secondFactor = number / firstFactor;
    
    if (workingFactors.includes(secondFactor)) {
      pairs.push(`${firstFactor} × ${secondFactor}`);
      workingFactors.splice(workingFactors.indexOf(secondFactor), 1);
    }
  }
  
  return pairs;
}

// Helper function to find prime factors of a number
function findPrimeFactors(num) {
  if (num < 0) {
    return 'Cannot find prime factors of negative numbers';
  }
  if (num === 1) {
    return [1];
  }

  const factors = [];
  let n = Math.abs(num);
  let i = 2;
  
  while (i * i <= n) {
    if (n % i === 0) {
      factors.push(i);
      n /= i;
    } else {
      i += 1;
    }
  }
  if (n > 1) {
    factors.push(n);
  }
  return factors;
}

const FactoringCalculator = () => {
  const [number, setNumber] = useState('');
  const [factorType, setFactorType] = useState('prime');
  const [factors, setFactors] = useState([]);
  const [factorPairs, setFactorPairs] = useState([]);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      if (factorType === 'prime') {
        const primeFactors = findPrimeFactors(num);
        if (typeof primeFactors === 'string') {
          setError(primeFactors);
          setFactors([]);
        } else {
          setFactors(primeFactors);
          setError('');
        }
        setFactorPairs([]);
      } else {
        const allFactors = findAllFactors(num);
        setFactors(allFactors);
        const pairs = createFactorPairs(num, allFactors);
        setFactorPairs(pairs);
        setError('');
      }
    } else {
      setFactors([]);
      setFactorPairs([]);
      setError('Please enter a valid number');
    }
  };

  const handleFactorTypeChange = (event) => {
    setFactorType(event.target.value);
    setFactors([]);
    setFactorPairs([]);
    setError('');
  };

  const handleReset = () => {
    setNumber('');
    setFactorType('prime');
    setFactors([]);
    setFactorPairs([]);
    setError('');
  };

  return (
    <div className={styles.container}>
      <p className={styles.prompt}>Enter a number to find its factors:</p>
      <div className={styles.inputContainer}>
        <input
          type="number"
          className={styles.input}
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className={styles.factorTypeContainer}>
        <label className={styles.label}>Factoring Type:</label>
        <div className={styles.radioContainer}>
          <input
            type="radio"
            id="prime"
            name="factor-type"
            value="prime"
            checked={factorType === 'prime'}
            onChange={handleFactorTypeChange}
            className={styles.radio}
          />
          <label htmlFor="prime" className={styles.radioLabel}>
            Prime Factoring
          </label>
          <input
            type="radio"
            id="complete"
            name="factor-type"
            value="complete"
            checked={factorType === 'complete'}
            onChange={handleFactorTypeChange}
            className={styles.radio}
          />
          <label htmlFor="complete" className={styles.radioLabel}>
            Complete Factoring
          </label>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          onClick={handleCalculate}
          className={`${styles.button} ${styles.calculateButton}`}
        >
          Calculate Factors
        </button>
        <button
          onClick={handleReset}
          className={`${styles.button} ${styles.resetButton}`}
        >
          Reset
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.resultsContainer}>
        {factors.length > 0 && (
          <div className={styles.factorGroup}>
            <p className={styles.resultsTitle}>
              The {factorType === 'prime' ? 'prime ' : ''}factors of {number} are:
            </p>
            <ul className={styles.factorList}>
              {factors.map((factor, index) => (
                <li key={index} className={styles.factor}>{factor}</li>
              ))}
            </ul>
          </div>
        )}
        {factorType === 'complete' && factorPairs.length > 0 && (
          <div className={styles.factorGroup}>
            <p className={styles.resultsTitle}>The factor pairs are:</p>
            <ul className={styles.factorList}>
              {factorPairs.map((pair, index) => (
                <li key={index} className={styles.factor}>{pair}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FactoringCalculator;