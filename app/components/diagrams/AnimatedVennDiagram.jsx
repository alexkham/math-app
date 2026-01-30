
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './AnimatedVennDiagram.module.css';

const AnimatedVennDiagram = () => {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [circle1, setCircle1] = useState({ cx: 150, cy: 150, radius: 80, color: '#FF0000', label: 'Set A' });
  const [circle2, setCircle2] = useState({ cx: 250, cy: 150, radius: 80, color: '#0000FF', label: 'Set B' });

  const nextStage = useCallback(() => {
    setStage(prev => Math.min(prev + 1, 3));
  }, []);

  const previousStage = useCallback(() => {
    setStage(prev => Math.max(prev - 1, 0));
  }, []);

  const handleReset = useCallback(() => {
    setStage(0);
    setIsPlaying(false);
  }, []);

  const handlePlayPause = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(() => {
        setStage(prev => {
          if (prev < 3) {
            return prev + 1;
          } else {
            setIsPlaying(false);
            return prev;
          }
        });
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying]);

  const calculateIntersection = useCallback(() => {
    const dx = circle2.cx - circle1.cx;
    const dy = circle2.cy - circle1.cy;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > circle1.radius + circle2.radius) {
      return null; // Circles don't intersect
    }

    const a = (circle1.radius * circle1.radius - circle2.radius * circle2.radius + distance * distance) / (2 * distance);
    const h = Math.sqrt(circle1.radius * circle1.radius - a * a);

    const cx = circle1.cx + (a * dx) / distance;
    const cy = circle1.cy + (a * dy) / distance;

    const intersectionX1 = cx + (h * dy) / distance;
    const intersectionY1 = cy - (h * dx) / distance;
    const intersectionX2 = cx - (h * dy) / distance;
    const intersectionY2 = cy + (h * dx) / distance;

    return `M ${intersectionX1} ${intersectionY1} A ${circle1.radius} ${circle1.radius} 0 0 1 ${intersectionX2} ${intersectionY2} A ${circle2.radius} ${circle2.radius} 0 0 1 ${intersectionX1} ${intersectionY1}`;
  }, [circle1, circle2]);

  const intersectionPath = calculateIntersection();

  const circle1Variants = {
    hidden: { ...circle1, r: 0, opacity: 0 },
    visible: { ...circle1, r: circle1.radius, opacity: 1 },
  };

  const circle2Variants = {
    hidden: { ...circle2, r: 0, opacity: 0 },
    visible: { ...circle2, r: circle2.radius, opacity: 1 },
  };

  const intersectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const labelVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className={styles.container}>
      <svg width="400" height="300" viewBox="0 0 400 300">
        <AnimatePresence>
          {stage >= 1 && (
            <motion.circle
              key="circle1"
              variants={circle1Variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              fill={`${circle1.color}4D`}
              stroke={circle1.color}
              strokeWidth="2"
            />
          )}
          {stage >= 2 && (
            <motion.circle
              key="circle2"
              variants={circle2Variants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
              fill={`${circle2.color}4D`}
              stroke={circle2.color}
              strokeWidth="2"
            />
          )}
          {stage >= 3 && intersectionPath && (
            <motion.path
              key="intersection"
              d={intersectionPath}
              fill="rgba(128, 0, 128, 0.5)"
              stroke="purple"
              strokeWidth="2"
              variants={intersectionVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 1 }}
            />
          )}
          {stage >= 3 && (
            <>
              <motion.text x={circle1.cx - 30} y={circle1.cy} variants={labelVariants} initial="hidden" animate="visible" exit="hidden">{circle1.label}</motion.text>
              <motion.text x={circle2.cx + 30} y={circle2.cy} variants={labelVariants} initial="hidden" animate="visible" exit="hidden">{circle2.label}</motion.text>
              <motion.text x={(circle1.cx + circle2.cx) / 2} y={circle1.cy + 30} variants={labelVariants} initial="hidden" animate="visible" exit="hidden">A ∩ B</motion.text>
            </>
          )}
        </AnimatePresence>
      </svg>
      <div className={styles.controls}>
        <button onClick={previousStage} disabled={stage === 0}>Previous</button>
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        <button onClick={nextStage} disabled={stage === 3}>Next</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className={styles.stageInfo}>
        Stage: {stage} / 3
      </div>
      <div className={styles.customizationControls}>
        <div>
          <label>Set A Radius:</label>
          <input 
            type="range" 
            min="50" 
            max="120" 
            value={circle1.radius} 
            onChange={(e) => setCircle1({...circle1, radius: Number(e.target.value)})}
          />
        </div>
        <div>
          <label>Set A Color:</label>
          <input 
            type="color" 
            value={circle1.color} 
            onChange={(e) => setCircle1({...circle1, color: e.target.value})}
          />
        </div>
        <div>
          <label>Set A Label:</label>
          <input 
            type="text" 
            value={circle1.label} 
            onChange={(e) => setCircle1({...circle1, label: e.target.value})}
          />
        </div>
        <div>
          <label>Set B Radius:</label>
          <input 
            type="range" 
            min="50" 
            max="120" 
            value={circle2.radius} 
            onChange={(e) => setCircle2({...circle2, radius: Number(e.target.value)})}
          />
        </div>
        <div>
          <label>Set B Color:</label>
          <input 
            type="color" 
            value={circle2.color} 
            onChange={(e) => setCircle2({...circle2, color: e.target.value})}
          />
        </div>
        <div>
          <label>Set B Label:</label>
          <input 
            type="text" 
            value={circle2.label} 
            onChange={(e) => setCircle2({...circle2, label: e.target.value})}
          />
        </div>
      </div>
    </div>
  );
};

export default AnimatedVennDiagram;