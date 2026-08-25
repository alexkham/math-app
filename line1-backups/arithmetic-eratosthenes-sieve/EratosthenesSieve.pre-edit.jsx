import React, { useState, useEffect, useCallback } from 'react';

const EratosthenesSieve = () => {
  const MAX = 100;
  
  const primeColors = {
    2: '#3b82f6',
    3: '#22c55e',
    5: '#a855f7',
    7: '#f97316',
  };

  const [sieveState, setSieveState] = useState(() => {
    const arr = new Array(MAX + 1).fill(0);
    arr[1] = -1;
    return arr;
  });
  const [currentPrime, setCurrentPrime] = useState(2);
  const [currentMultiple, setCurrentMultiple] = useState(0);
  const [phase, setPhase] = useState('idle');
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(5);
  const [statusText, setStatusText] = useState('Press Start to begin the sieve');
  
  // Track crossed numbers per divisor for explanations
  const [crossedByDivisor, setCrossedByDivisor] = useState({});
  const [activeDivisors, setActiveDivisors] = useState([]);

  const primesCount = sieveState.filter(s => s === 'prime').length;
  const compositesCount = sieveState.filter(s => Array.isArray(s)).length;

  const reset = () => {
    setIsRunning(false);
    const arr = new Array(MAX + 1).fill(0);
    arr[1] = -1;
    setSieveState(arr);
    setCurrentPrime(2);
    setCurrentMultiple(0);
    setPhase('idle');
    setStatusText('Press Start to begin the sieve');
    setCrossedByDivisor({});
    setActiveDivisors([]);
  };

  const findNextUnmarked = useCallback((state, start) => {
    for (let i = start; i <= MAX; i++) {
      if (state[i] === 0) return i;
    }
    return null;
  }, []);

  const step = useCallback(() => {
    if (phase === 'done') return false;

    setSieveState(prevState => {
      const newState = [...prevState];
      
      if (phase === 'idle' || phase === 'marking-prime') {
        const nextPrime = findNextUnmarked(newState, currentPrime);
        
        if (nextPrime === null || nextPrime * nextPrime > MAX) {
          for (let i = 2; i <= MAX; i++) {
            if (newState[i] === 0) {
              newState[i] = 'prime';
            }
          }
          setPhase('done');
          setStatusText('Complete! Found all primes up to ' + MAX);
          setCurrentPrime(0);
          return newState;
        }

        newState[nextPrime] = 'prime';
        setCurrentPrime(nextPrime);
        setCurrentMultiple(nextPrime * nextPrime);
        setPhase('crossing-multiples');
        setStatusText(`Found prime ${nextPrime} — crossing out multiples`);
        
        // Add this divisor to active list and init its crossed array
        setActiveDivisors(prev => [...prev, nextPrime]);
        setCrossedByDivisor(prev => ({ ...prev, [nextPrime]: [] }));
        
        return newState;
      }

      if (phase === 'crossing-multiples') {
        if (currentMultiple <= MAX) {
          const current = newState[currentMultiple];
          let wasNewlyCrossed = false;
          
          if (current === 0) {
            newState[currentMultiple] = [currentPrime];
            wasNewlyCrossed = true;
          } else if (Array.isArray(current) && !current.includes(currentPrime)) {
            newState[currentMultiple] = [...current, currentPrime];
            wasNewlyCrossed = true;
          }
          
          // Add to crossed list for this divisor
          if (wasNewlyCrossed || current === 0 || (Array.isArray(current) && !current.includes(currentPrime))) {
            setCrossedByDivisor(prev => ({
              ...prev,
              [currentPrime]: [...(prev[currentPrime] || []), currentMultiple]
            }));
          }
          
          setStatusText(`Crossing out ${currentMultiple} (${currentPrime} × ${currentMultiple / currentPrime})`);
          setCurrentMultiple(prev => prev + currentPrime);
          return newState;
        } else {
          setCurrentPrime(prev => prev + 1);
          setPhase('marking-prime');
          return newState;
        }
      }

      return newState;
    });

    return phase !== 'done';
  }, [phase, currentPrime, currentMultiple, findNextUnmarked]);

  useEffect(() => {
    if (!isRunning || phase === 'done') return;

    const delay = 600 - (speed * 50);
    const timer = setTimeout(() => {
      step();
    }, delay);

    return () => clearTimeout(timer);
  }, [isRunning, phase, step, speed, sieveState]);

  const getCompositeBackground = (crossedBy) => {
    if (!Array.isArray(crossedBy) || crossedBy.length === 0) return '#f8fafc';
    
    const relevantPrimes = crossedBy.filter(p => primeColors[p]);
    
    if (relevantPrimes.length === 0) {
      return '#e2e8f0';
    }
    
    if (relevantPrimes.length === 1) {
      const color = primeColors[relevantPrimes[0]];
      return `${color}30`;
    }
    
    const stripeWidth = 100 / relevantPrimes.length;
    const stops = relevantPrimes.map((p, i) => {
      const color = primeColors[p] + '40';
      const start = i * stripeWidth;
      const end = (i + 1) * stripeWidth;
      return `${color} ${start}%, ${color} ${end}%`;
    }).join(', ');
    
    return `repeating-linear-gradient(135deg, ${stops})`;
  };

  const getCompositeBorder = (crossedBy) => {
    if (!Array.isArray(crossedBy) || crossedBy.length === 0) return '1px solid transparent';
    
    const relevantPrimes = crossedBy.filter(p => primeColors[p]);
    
    if (relevantPrimes.length === 0) {
      return '1px solid #cbd5e1';
    }
    
    if (relevantPrimes.length === 1) {
      return `1px solid ${primeColors[relevantPrimes[0]]}60`;
    }
    
    return `1px solid ${primeColors[relevantPrimes[0]]}60`;
  };

  const getCompositeColor = (crossedBy) => {
    if (!Array.isArray(crossedBy) || crossedBy.length === 0) return '#64748b';
    
    const relevantPrimes = crossedBy.filter(p => primeColors[p]);
    
    if (relevantPrimes.length === 0) {
      return '#64748b';
    }
    
    return primeColors[relevantPrimes[0]];
  };

  const getCellStyle = (num) => {
    const state = sieveState[num];
    const isCurrent = num === currentPrime && phase !== 'done' && state === 'prime';

    const base = {
      aspectRatio: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.85rem',
      fontWeight: '600',
      borderRadius: '6px',
      cursor: 'default',
      transition: 'all 0.2s ease',
      outline: 'none',
    };

    if (num === 1) {
      return {
        ...base,
        background: '#e2e8f0',
        color: '#94a3b8',
        border: '1px solid #cbd5e1',
      };
    }

    if (isCurrent) {
      const color = primeColors[num] || '#f59e0b';
      return {
        ...base,
        background: color,
        color: '#fff',
        border: `1px solid ${color}`,
        boxShadow: `0 0 12px ${color}60`,
      };
    }

    if (state === 'prime') {
      const color = primeColors[num] || '#3b82f6';
      return {
        ...base,
        background: color,
        color: '#fff',
        border: `1px solid ${color}`,
        boxShadow: `0 2px 8px ${color}40`,
      };
    }

    if (Array.isArray(state)) {
      return {
        ...base,
        background: getCompositeBackground(state),
        color: getCompositeColor(state),
        border: getCompositeBorder(state),
      };
    }

    return {
      ...base,
      background: '#f8fafc',
      color: '#64748b',
      border: '1px solid transparent',
    };
  };

  const numbers = Array.from({ length: MAX }, (_, i) => i + 1);

  return (
    <div style={styles.container}>
      <div style={styles.mainLayout}>
        {/* Left side - Grid and controls */}
        <div style={styles.leftPanel}>
          {/* Header */}
          <header style={styles.header}>
            {/* <h1 style={styles.title}>Sieve of Eratosthenes</h1>
            <p style={styles.subtitle}>Watch primes emerge as composites get crossed out</p> */}
          </header>

          {/* Controls */}
          <div style={styles.controlsCard}>
            <div style={styles.controls}>
              <button
                onClick={() => setIsRunning(!isRunning)}
                disabled={phase === 'done'}
                style={{
                  ...styles.btn,
                  ...(isRunning ? {} : styles.btnPrimary),
                }}
              >
                {isRunning ? '⏸ Pause' : '▶ Start'}
              </button>
              <button
                onClick={() => { setIsRunning(false); step(); }}
                disabled={phase === 'done'}
                style={styles.btn}
              >
                Step
              </button>
              <button onClick={reset} style={styles.btn}>
                Reset
              </button>
              <div style={styles.speedControl}>
                <label style={styles.speedLabel}>Speed:</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  style={styles.speedSlider}
                />
              </div>
            </div>
          </div>

          {/* Status */}
          <div style={styles.statusBar}>
            <div style={styles.statusText}>{statusText}</div>
            <div style={styles.legend}>
              <div style={styles.legendItem}>
                <div style={{ ...styles.legendDot, background: primeColors[2] + '40' }} />
                <span>÷2</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{ ...styles.legendDot, background: primeColors[3] }} />
                <span>÷3</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{ ...styles.legendDot, background: primeColors[5] }} />
                <span>÷5</span>
              </div>
              <div style={styles.legendItem}>
                <div style={{ ...styles.legendDot, background: primeColors[7] }} />
                <span>÷7</span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div style={styles.gridCard}>
            <div style={styles.grid}>
              {numbers.map(num => (
                <div key={num} style={getCellStyle(num)}>
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Explanation panel */}
        <div style={styles.rightPanel}>
          {/* Stats at top */}
          <div style={styles.statsSection}>
            <div style={styles.statRow}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{primesCount}</div>
                <div style={styles.statLabel}>Primes</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{compositesCount}</div>
                <div style={styles.statLabel}>Composites</div>
              </div>
              <div style={styles.statCard}>
                <div style={{ ...styles.statValue, color: primeColors[currentPrime] || '#64748b' }}>
                  {phase !== 'done' && currentPrime > 1 ? currentPrime : '—'}
                </div>
                <div style={styles.statLabel}>Current</div>
              </div>
            </div>
          </div>

          {/* Explanations */}
          <div style={styles.explanationsSection}>
            <div style={styles.explanationsTitle}>Step-by-Step</div>
            
            {activeDivisors.length === 0 && phase === 'idle' && (
              <div style={styles.explanationEmpty}>
                Press Start to begin. Each prime divisor will appear here with its crossed-out multiples.
              </div>
            )}

            {activeDivisors.map(divisor => {
              const crossed = crossedByDivisor[divisor] || [];
              const color = primeColors[divisor] || '#64748b';
              const isActive = currentPrime === divisor && phase === 'crossing-multiples';
              
              return (
                <div 
                  key={divisor} 
                  style={{
                    ...styles.explanationCard,
                    borderLeft: `4px solid ${color}`,
                    background: isActive ? `${color}10` : '#fff',
                  }}
                >
                  <div style={styles.explanationHeader}>
                    <div style={{
                      ...styles.explanationDivisor,
                      background: color,
                    }}>
                      ÷{divisor}
                    </div>
                    <div style={styles.explanationDesc}>
                      Cross out multiples of {divisor} starting from {divisor}² = {divisor * divisor}
                    </div>
                  </div>
                  
                  {crossed.length > 0 && (
                    <div style={styles.crossedList}>
                      <span style={styles.crossedLabel}>Crossed:</span>
                      <div style={styles.crossedNumbers}>
                        {crossed.map((num, idx) => (
                          <span 
                            key={num} 
                            style={{
                              ...styles.crossedNumber,
                              background: `${color}20`,
                              color: color,
                              animation: idx === crossed.length - 1 && isActive ? 'fadeIn 0.2s ease' : 'none',
                            }}
                          >
                            {num}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div style={styles.explanationCount}>
                    {crossed.length} number{crossed.length !== 1 ? 's' : ''} crossed
                  </div>
                </div>
              );
            })}

            {phase === 'done' && (
              <div style={styles.explanationComplete}>
                <div style={styles.completeIcon}>✓</div>
                <div style={styles.completeText}>
                  Complete! All primes up to {MAX} have been found.
                  <br />
                  <strong>{primesCount}</strong> primes, <strong>{compositesCount}</strong> composites.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(180deg, #f0f7ff 0%, #e8f4fc 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    color: '#1e3a5f',
    padding: '20px',
    minHeight: '100vh',
  },
  mainLayout: {
    display: 'flex',
    gap: '20px',
    maxWidth: '1100px',
    margin: '0 auto',
    alignItems: 'flex-start',
  },
  leftPanel: {
    flex: '2',
    minWidth: 0,
  },
  rightPanel: {
    flex: '1',
    minWidth: '280px',
    maxWidth: '340px',
    position: 'sticky',
    top: '20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '16px',
  },
  title: {
    fontSize: '1.6rem',
    fontWeight: '700',
    color: '#1e3a5f',
    margin: '0 0 4px 0',
  },
  subtitle: {
    fontSize: '0.9rem',
    color: '#64748b',
    margin: 0,
  },
  controlsCard: {
    background: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
    marginBottom: '16px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  btn: {
    padding: '8px 16px',
    fontSize: '0.85rem',
    fontWeight: '600',
    background: '#f8fafc',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    color: '#64748b',
    cursor: 'pointer',
    fontFamily: 'inherit',
    outline: 'none',
  },
  btnPrimary: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    borderColor: '#3b82f6',
    color: '#fff',
    boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)',
  },
  speedControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  speedLabel: {
    fontSize: '0.8rem',
    color: '#64748b',
  },
  speedSlider: {
    width: '80px',
    accentColor: '#3b82f6',
  },
  statusBar: {
    background: '#fff',
    borderRadius: '12px',
    padding: '12px 16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px',
  },
  statusText: {
    fontSize: '0.85rem',
    color: '#1e3a5f',
    fontWeight: '500',
  },
  legend: {
    display: 'flex',
    gap: '16px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '0.75rem',
    color: '#64748b',
  },
  legendDot: {
    width: '12px',
    height: '12px',
    borderRadius: '3px',
  },
  gridCard: {
    background: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '6px',
  },
  statsSection: {
    background: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
    marginBottom: '16px',
  },
  statRow: {
    display: 'flex',
    gap: '8px',
  },
  statCard: {
    flex: 1,
    textAlign: 'center',
    padding: '8px',
    background: '#f8fafc',
    borderRadius: '8px',
  },
  statValue: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#3b82f6',
  },
  statLabel: {
    fontSize: '0.65rem',
    color: '#64748b',
    marginTop: '2px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  explanationsSection: {
    background: '#fff',
    borderRadius: '12px',
    padding: '16px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
    maxHeight: 'calc(100vh - 180px)',
    overflowY: 'auto',
  },
  explanationsTitle: {
    fontSize: '0.9rem',
    fontWeight: '700',
    color: '#1e3a5f',
    marginBottom: '12px',
    paddingBottom: '8px',
    borderBottom: '1px solid #e2e8f0',
  },
  explanationEmpty: {
    fontSize: '0.8rem',
    color: '#94a3b8',
    lineHeight: '1.5',
    padding: '12px',
    background: '#f8fafc',
    borderRadius: '8px',
  },
  explanationCard: {
    padding: '12px',
    borderRadius: '8px',
    marginBottom: '12px',
    boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
  },
  explanationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
  },
  explanationDivisor: {
    padding: '4px 10px',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '0.85rem',
    fontWeight: '700',
  },
  explanationDesc: {
    fontSize: '0.75rem',
    color: '#64748b',
    lineHeight: '1.3',
  },
  crossedList: {
    marginTop: '8px',
  },
  crossedLabel: {
    fontSize: '0.7rem',
    color: '#94a3b8',
    display: 'block',
    marginBottom: '6px',
  },
  crossedNumbers: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '4px',
  },
  crossedNumber: {
    padding: '2px 8px',
    borderRadius: '4px',
    fontSize: '0.75rem',
    fontWeight: '600',
  },
  explanationCount: {
    fontSize: '0.7rem',
    color: '#94a3b8',
    marginTop: '8px',
    textAlign: 'right',
  },
  explanationComplete: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    padding: '16px',
    background: '#f0fdf4',
    borderRadius: '8px',
    border: '1px solid #bbf7d0',
  },
  completeIcon: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    background: '#22c55e',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    fontWeight: '700',
    flexShrink: 0,
  },
  completeText: {
    fontSize: '0.8rem',
    color: '#166534',
    lineHeight: '1.5',
  },
};

export default EratosthenesSieve;