import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CombinatoricsVisualization.module.css';

const Ball = ({ item, color }) => (
  <div className={styles.ball} style={{ backgroundColor: color }}>
    {item}
  </div>
);

const PermutationRow = ({ label, permutation, colors }) => (
  <div className={styles.permutationSet}>
    <span className={styles.permutationLabel}>{label}</span>
    <div className={styles.ballContainer}>
      {permutation.map((item, index) => (
        <Ball key={index} item={item} color={colors[item]} />
      ))}
    </div>
  </div>
);

const PermutationsWithIdenticalVisualizer = ({ items = ['A', 'B', 'C', 'C'] }) => {
  const colors = { 'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A' };
  const [permutationStacks, setPermutationStacks] = useState({});
  const [currentPermutation, setCurrentPermutation] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const generatePermutations = (arr) => {
    const result = [];
    const counter = arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});

    const permute = (current = []) => {
      if (current.length === arr.length) {
        result.push([...current]);
        return;
      }
      
      for (let item in counter) {
        if (counter[item] > 0) {
          counter[item]--;
          current.push(item);
          permute(current);
          current.pop();
          counter[item]++;
        }
      }
    };

    permute();
    return result;
  };

  const allPermutations = useMemo(() => generatePermutations(items), [items]);

  const updatePermutation = (index) => {
    if (index >= 0 && index < allPermutations.length) {
      const newPerm = allPermutations[index];
      setCurrentPermutation(newPerm);
      setPermutationStacks(prev => {
        const firstItem = newPerm[0];
        const updatedStack = [...(prev[firstItem] || []), newPerm];
        return {
          ...prev,
          [firstItem]: updatedStack.slice(-6)
        };
      });
    }
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          if (prevIndex < allPermutations.length - 1) {
            const nextIndex = prevIndex + 1;
            updatePermutation(nextIndex);
            return nextIndex;
          } else {
            setIsPlaying(false);
            return prevIndex;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, allPermutations.length]);

  const handlePlay = () => {
    setIsPlaying(true);
    if (currentIndex === -1) {
      setCurrentIndex(0);
      updatePermutation(0);
    }
  };

  const handlePause = () => setIsPlaying(false);

  const handleForward = () => {
    if (currentIndex < allPermutations.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      updatePermutation(nextIndex);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      updatePermutation(prevIndex);
    }
  };

  const handleReset = () => {
    setCurrentIndex(-1);
    setPermutationStacks({});
    setCurrentPermutation([]);
    setIsPlaying(false);
  };

  const uniqueItems = [...new Set(items)];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Combinatorics Visualization</h1>
      <div className={styles.permutationsRow}>
        <PermutationRow label="Original Set" permutation={items} colors={colors} />
        <PermutationRow label="Current" permutation={currentPermutation} colors={colors} />
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={handlePlay} disabled={isPlaying || currentIndex === allPermutations.length - 1}>Play</button>
        <button className={styles.button} onClick={handlePause} disabled={!isPlaying}>Pause</button>
        <button className={styles.button} onClick={handleForward} disabled={currentIndex === allPermutations.length - 1}>Forward</button>
        <button className={styles.button} onClick={handleBack} disabled={currentIndex <= 0}>Back</button>
        <button className={styles.button} onClick={handleReset}>Reset</button>
      </div>
      <div className={styles.stacksContainer}>
        {uniqueItems.map((item) => (
          <div key={item} className={styles.stack}>
            <h3 className={styles.stackTitle} style={{ color: colors[item] }}>
              Stack {item}
            </h3>
            <AnimatePresence>
              {permutationStacks[item]?.map((perm, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <PermutationRow 
                    label={`Permutation ${index + 1}`} 
                    permutation={perm}
                    colors={colors}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PermutationsWithIdenticalVisualizer;