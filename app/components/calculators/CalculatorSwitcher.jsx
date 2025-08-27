

import React, { useState } from 'react';
import TrigoCalculator from '../trigo-calculator/TrigoCalculator';
import InverseTrigoCalculator from '../trigo-calculator/InverseTrigoCalculator';

const styles = {
  container: {
    width: '100%',
    margin: '0'
  },
  radioGroup: {
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    gap: '2px',
    padding: '4px',
    width: '500px',
    background: 'white',
    borderRadius: '7px',
    border: '1px solid #ddd',
    margin: '0 auto 0px',
    marginTop: '-10px',
    marginBottom: '-20px'
  },
  label: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '14px 18px',
    borderRadius: '2px'
  },
  hiddenInput: {
    position: 'absolute',
    opacity: 0,
    cursor: 'pointer',
    height: 0,
    width: 0
  },
  radioText: {
    fontSize: '14px',
    fontWeight: 700,
    transition: 'all 0.2s ease-in-out'
  },
  activeLabel: {
    background: '#1d6bd8',
    color: '#f5f5f5'
  },
  inactiveLabel: {
    background: '#f5f5f5',
    color: '#555'
  }
};

const CalculatorSwitcher = ({ standardExplanations, inverseExplanations, scale = 1 }) => {
  const [activeCalculator, setActiveCalculator] = useState('standard');

  const calculatorOptions = [
    { id: 'standard', label: 'Standard Trigonometry Functions' },
    { id: 'inverse', label: 'Inverse Trigonometry Functions' }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.radioGroup}>
        {calculatorOptions.map((option) => (
          <label
            key={option.id}
            style={{
              ...styles.label,
              ...(activeCalculator === option.id ? styles.activeLabel : styles.inactiveLabel)
            }}
          >
            <input
              type="radio"
              name="calculator-type"
              value={option.id}
              checked={activeCalculator === option.id}
              onChange={(e) => setActiveCalculator(e.target.value)}
              style={styles.hiddenInput}
            />
            <span style={styles.radioText}>
              {option.label}
            </span>
          </label>
        ))}
      </div>

      <div style={{ transform: `scale(${scale})` }}>
        {activeCalculator === 'standard' ? (
          <TrigoCalculator explanations={standardExplanations} />
        ) : (
          <InverseTrigoCalculator explanations={inverseExplanations} />
        )}
      </div>
    </div>
  );
};

export default CalculatorSwitcher;