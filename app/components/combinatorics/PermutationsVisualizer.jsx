import React, { useState, useEffect } from 'react';
import styles from './PermutationsVisualizer.module.css';

const PermutationsVisualizer = () => {
  const [n, setN] = useState(1);
  const [inputValue, setInputValue] = useState('1');
  const [permutations, setPermutations] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [useColors, setUseColors] = useState(false);
  const [colors, setColors] = useState([]);
  const [showAll, setShowAll] = useState(true);
  const [warning, setWarning] = useState('');

  const MAX_SAFE_PERMUTATIONS = 1000;

  const factorial = (num) => {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  };

  const generateDistinctColors = (count) => {
    const hueStep = 360 / count;
    return Array.from({ length: count }, (_, i) => {
      const hue = i * hueStep;
      const saturation = 70 + Math.random() * 30; // 70-100%
      const lightness = 40 + Math.random() * 20;  // 40-60%
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
  };

  const generatePermutations = (n) => {
    const items = Array.from({ length: n }, (_, i) => i);
    const result = [];

    const permute = (arr, m = []) => {
      if (arr.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    }

    permute(items);
    return result;
  };

  useEffect(() => {
    const totalPermutations = factorial(n);
    if (totalPermutations > MAX_SAFE_PERMUTATIONS) {
      setWarning(`Generating ${totalPermutations} permutations may affect performance. Consider using a smaller number.`);
      setPermutations([]);
    } else {
      setWarning('');
      setPermutations(generatePermutations(n));
    }
    setColors(generateDistinctColors(n));
    setCurrentIndex(0);
  }, [n]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setN(parsedValue);
    }
  };

  const nextPermutation = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % permutations.length);
  };

  const renderPermutation = (perm, index) => (
    <div key={index} className={styles.permutation}>
      <span className={styles.permutationIndex}>{index + 1}.</span>
      {perm.map((item, itemIndex) => (
        useColors ? (
          <div
            key={itemIndex}
            className={styles.colorCircle}
            style={{ backgroundColor: colors[item] }}
          />
        ) : (
          <span key={itemIndex} className={styles.letter}>
            {String.fromCharCode(65 + item)}
          </span>
        )
      ))}
    </div>
  );

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>Permutations Visualizer</h2>
        <p className={styles.instructions}>
          Enter a number to see  permutations.<br />
          Use the switches to toggle between colors/letters and all/one-by-one view.<br /> 
          The circles or letters represent the items being permuted.
        </p>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.inputGroup}>
          <label htmlFor="n-input">Number of items (n):</label>
          <input
            id="n-input"
            type="number"
            min="1"
            value={inputValue}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        {warning && (
          <div className={styles.alert}>
            {warning}
          </div>
        )}
        <div className={styles.switchGroup}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={useColors}
              onChange={(e) => setUseColors(e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
          <span>{useColors ? "Use letters" : "Use colors"}</span>
        </div>
        <div className={styles.switchGroup}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={showAll}
              onChange={(e) => setShowAll(e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
          <span>{showAll ? "Show one at a time" : "Show all"}</span>
        </div>
        <p>Total number of permutations: {factorial(n)}</p>
        {permutations.length > 0 && (
          <div className={styles.permutationsContainer}>
            {showAll ? (
              permutations.map((perm, index) => renderPermutation(perm, index))
            ) : (
              <div>
                {renderPermutation(permutations[currentIndex], currentIndex)}
                <p className={styles.permutationCount}>Showing permutation {currentIndex + 1} of {permutations.length}</p>
                <button onClick={nextPermutation} className={styles.button}>
                  Show Next Permutation
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PermutationsVisualizer;