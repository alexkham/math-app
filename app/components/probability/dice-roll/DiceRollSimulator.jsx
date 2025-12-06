import React, { useState, useRef } from 'react';

function DiceRollSimulator() {
  const [state, setState] = useState({
    totalRolls: 0,
    sumCounts: {},
    rollHistory: [],
    currentRoll: null,
    convergenceData: []
  });
  
  const [isRolling, setIsRolling] = useState(false);
  const [numDice, setNumDice] = useState(2);
  const [isContinuous, setIsContinuous] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [activeTab, setActiveTab] = useState('distribution');
  
  const continuousInterval = useRef(null);
  const animationTimeout = useRef(null);

  const { totalRolls, sumCounts, rollHistory, currentRoll, convergenceData } = state;
  
  const minSum = numDice;
  const maxSum = numDice * 6;
  const expectedValue = numDice * 3.5;
  const variance = numDice * (35/12);
  const standardDeviation = Math.sqrt(variance);
  
  const actualSum = Object.entries(sumCounts).reduce((acc, [sum, count]) => acc + (parseInt(sum) * count), 0);
  const actualAverage = totalRolls > 0 ? actualSum / totalRolls : 0;
  const zScore = totalRolls > 0 && standardDeviation > 0 ? (actualAverage - expectedValue) / (standardDeviation / Math.sqrt(totalRolls)) : 0;

  const getTheoreticalProbability = (sum) => {
    const ways = countWays(sum, numDice, 6);
    const totalWays = Math.pow(6, numDice);
    return ways / totalWays;
  };

  const countWays = (sum, n, d) => {
    if (n === 0) return sum === 0 ? 1 : 0;
    if (sum < n || sum > n * d) return 0;
    
    let count = 0;
    for (let i = 1; i <= d; i++) {
      count += countWays(sum - i, n - 1, d);
    }
    return count;
  };

  const doRolls = (count) => {
    const newRolls = [];
    const newSumCounts = { ...sumCounts };
    
    for (let i = 0; i < count; i++) {
      const roll = [];
      let sum = 0;
      for (let j = 0; j < numDice; j++) {
        const die = Math.floor(Math.random() * 6) + 1;
        roll.push(die);
        sum += die;
      }
      newRolls.push({ dice: roll, sum });
      newSumCounts[sum] = (newSumCounts[sum] || 0) + 1;
    }
    
    const newTotal = totalRolls + count;
    const newHistory = [...newRolls.reverse(), ...rollHistory].slice(0, 50);
    
    const newActualSum = Object.entries(newSumCounts).reduce((acc, [sum, count]) => acc + (parseInt(sum) * count), 0);
    const newActualAverage = newActualSum / newTotal;
    const newConvergenceData = [...convergenceData, { roll: newTotal, average: newActualAverage }];
    
    setState({
      totalRolls: newTotal,
      sumCounts: newSumCounts,
      rollHistory: newHistory,
      currentRoll: newRolls[newRolls.length - 1],
      convergenceData: newConvergenceData
    });
  };

  const rollOnce = () => {
    if (isRolling) return;
    setIsRolling(true);
    doRolls(1);
    animationTimeout.current = setTimeout(() => setIsRolling(false), 600);
  };

  const rollBatch = (count) => {
    if (isRolling) return;
    setIsRolling(true);
    doRolls(count);
    animationTimeout.current = setTimeout(() => setIsRolling(false), 400);
  };

  const toggleContinuous = () => {
    if (isContinuous) {
      setIsContinuous(false);
      if (continuousInterval.current) {
        clearInterval(continuousInterval.current);
        continuousInterval.current = null;
      }
    } else {
      setIsContinuous(true);
      continuousInterval.current = setInterval(() => doRolls(1), speed);
    }
  };

  const reset = () => {
    if (continuousInterval.current) clearInterval(continuousInterval.current);
    if (animationTimeout.current) clearTimeout(animationTimeout.current);
    setState({
      totalRolls: 0,
      sumCounts: {},
      rollHistory: [],
      currentRoll: null,
      convergenceData: []
    });
    setIsContinuous(false);
    setIsRolling(false);
  };

  const DiceVisual = ({ value, size = 40 }) => {
    const dotPositions = {
      1: [[50, 50]],
      2: [[25, 25], [75, 75]],
      3: [[25, 25], [50, 50], [75, 75]],
      4: [[25, 25], [75, 25], [25, 75], [75, 75]],
      5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
      6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]]
    };

    const positions = dotPositions[value] || [];
    const dotSize = size >= 45 ? 5 : 4;
    
    return (
      <div style={{
        width: size,
        height: size,
        border: '3px solid #333',
        borderRadius: '6px',
        backgroundColor: '#fff',
        position: 'relative',
        display: 'inline-block',
        margin: '2px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}>
        {positions.map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${pos[0]}%`,
            top: `${pos[1]}%`,
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            backgroundColor: '#333',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)'
          }} />
        ))}
      </div>
    );
  };

  const Histogram = () => {
    const width = 550;
    const height = 320;
    const padding = 50;
    
    if (totalRolls === 0) {
      return (
        <div style={{ width: '100%', height, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', color: '#999' }}>
          Start rolling to see distribution
        </div>
      );
    }
    
    const sums = [];
    for (let i = minSum; i <= maxSum; i++) {
      sums.push(i);
    }
    
    const maxCount = Math.max(...sums.map(s => sumCounts[s] || 0));
    const barWidth = (width - 2 * padding) / sums.length;
    
    return (
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
        {[0, 0.25, 0.5, 0.75, 1].map(frac => {
          const count = Math.round(maxCount * frac);
          const y = height - padding - (frac * (height - 2 * padding));
          return (
            <g key={frac}>
              <line x1={padding} y1={y} x2={width - padding} y2={y} stroke="#e0e0e0" strokeWidth="1" />
              <text x={padding - 10} y={y + 5} textAnchor="end" fontSize="11" fill="#666">{count}</text>
            </g>
          );
        })}
        
        {sums.map((sum, idx) => {
          const count = sumCounts[sum] || 0;
          const barHeight = maxCount > 0 ? (count / maxCount) * (height - 2 * padding) : 0;
          const x = padding + idx * barWidth;
          const y = height - padding - barHeight;
          const theoretical = getTheoreticalProbability(sum);
          const theoreticalHeight = (theoretical * totalRolls / maxCount) * (height - 2 * padding);
          const theoreticalY = height - padding - theoreticalHeight;
          
          return (
            <g key={sum}>
              <rect x={x + 2} y={theoreticalY} width={barWidth - 4} height={theoreticalHeight} fill="#ff6b6b" opacity="0.3" />
              <rect x={x + 2} y={y} width={barWidth - 4} height={barHeight} fill="#4A90E2" />
              <text x={x + barWidth / 2} y={height - padding + 20} textAnchor="middle" fontSize="10" fill="#333">{sum}</text>
            </g>
          );
        })}
        
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#333" strokeWidth="2" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#333" strokeWidth="2" />
        
        <text x={width / 2} y={height - 5} textAnchor="middle" fontSize="12" fill="#333">Sum</text>
        <text x={15} y={height / 2} textAnchor="middle" fontSize="12" fill="#333" transform={`rotate(-90, 15, ${height / 2})`}>Frequency</text>
        
        <g transform={`translate(${width - padding - 130}, ${padding + 5})`}>
          <rect x="0" y="0" width="20" height="12" fill="#4A90E2" />
          <text x="25" y="10" fontSize="11" fill="#333">Actual</text>
          <rect x="0" y="18" width="20" height="12" fill="#ff6b6b" opacity="0.3" />
          <text x="25" y="28" fontSize="11" fill="#333">Expected</text>
        </g>
      </svg>
    );
  };

  const ConvergenceGraph = () => {
    const width = 550;
    const height = 320;
    const padding = 40;
    
    if (convergenceData.length === 0) {
      return (
        <div style={{ width: '100%', height, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', color: '#999' }}>
          Start rolling to see convergence
        </div>
      );
    }
    
    const maxRoll = Math.max(...convergenceData.map(d => d.roll));
    const minAvg = Math.min(...convergenceData.map(d => d.average), expectedValue - 1);
    const maxAvg = Math.max(...convergenceData.map(d => d.average), expectedValue + 1);
    const avgRange = maxAvg - minAvg;
    
    const scaleX = (roll) => padding + ((roll / maxRoll) * (width - 2 * padding));
    const scaleY = (avg) => height - padding - (((avg - minAvg) / avgRange) * (height - 2 * padding));
    
    const pathData = convergenceData.map((d, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(d.roll)} ${scaleY(d.average)}`).join(' ');
    
    return (
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`} style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' }}>
        {[minAvg, (minAvg + maxAvg) / 2, maxAvg].map(val => (
          <g key={val}>
            <line x1={padding} y1={scaleY(val)} x2={width - padding} y2={scaleY(val)} stroke="#e0e0e0" strokeWidth="1" />
            <text x={padding - 10} y={scaleY(val) + 5} textAnchor="end" fontSize="11" fill="#666">{val.toFixed(2)}</text>
          </g>
        ))}
        
        <line x1={padding} y1={scaleY(expectedValue)} x2={width - padding} y2={scaleY(expectedValue)} stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
        <path d={pathData} fill="none" stroke="#4A90E2" strokeWidth="2.5" />
        
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#333" strokeWidth="2" />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#333" strokeWidth="2" />
        
        <text x={width / 2} y={height - 5} textAnchor="middle" fontSize="12" fill="#333">Number of Rolls</text>
        <text x={12} y={height / 2} textAnchor="middle" fontSize="12" fill="#333" transform={`rotate(-90, 12, ${height / 2})`}>Average Sum</text>
        
        <g transform={`translate(${width - padding - 130}, ${padding + 5})`}>
          <line x1="0" y1="0" x2="25" y2="0" stroke="#4A90E2" strokeWidth="2.5" />
          <text x="30" y="4" fontSize="11" fill="#333">Actual</text>
          <line x1="0" y1="15" x2="25" y2="15" stroke="#ff6b6b" strokeWidth="2" strokeDasharray="5,5" />
          <text x="30" y="19" fontSize="11" fill="#333">Expected</text>
        </g>
      </svg>
    );
  };

  return (
    <div style={{ padding: '15px', fontFamily: 'Arial, sans-serif', maxWidth: '1400px', margin: '0 auto', height: '100vh', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '600px 1fr', gap: '15px', height: 'calc(100vh - 100px)' }}>
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          {/* Dice & Controls */}
          <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px' }}>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ flex: '0 0 120px', textAlign: 'center' }}>
                <div style={{ minHeight: '100px', display: 'flex', flexDirection: 'column', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
                  {currentRoll ? (
                    <>
                      <div>
                        {currentRoll.dice.map((die, i) => (
                          <DiceVisual key={i} value={die} size={45} />
                        ))}
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginTop: '5px' }}>Sum: {currentRoll.sum}</div>
                    </>
                  ) : (
                    <div style={{ fontSize: '14px', color: '#999' }}>?</div>
                  )}
                </div>
              </div>
              
              <div style={{ flex: '1' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px' }}>
                  {[
                    { label: 'Roll 1', count: 1 },
                    { label: 'Roll 10', count: 10 },
                    { label: 'Roll 100', count: 100 },
                    { label: 'Roll 1K', count: 1000 },
                    { label: 'Roll 10K', count: 10000, span: true }
                  ].map(btn => (
                    <button key={btn.count} onClick={() => btn.count === 1 ? rollOnce() : rollBatch(btn.count)} disabled={isRolling || isContinuous}
                      style={{ padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#4A90E2', color: 'white', border: 'none', borderRadius: '4px',
                        cursor: isRolling || isContinuous ? 'not-allowed' : 'pointer', opacity: isRolling || isContinuous ? 0.5 : 1, gridColumn: btn.span ? 'span 2' : 'auto' }}>
                      {btn.label}
                    </button>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
                  <button onClick={toggleContinuous} style={{ flex: '1', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: isContinuous ? '#d9534f' : '#f0ad4e',
                    color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>{isContinuous ? 'Stop' : 'Auto'}</button>
                  <div style={{ flex: '1' }}>
                    <input type="range" min="10" max="500" step="10" value={speed} onChange={(e) => setSpeed(parseInt(e.target.value))} disabled={isContinuous} style={{ width: '100%' }} />
                    <div style={{ fontSize: '10px', color: '#666', textAlign: 'center' }}>{speed}ms</div>
                  </div>
                </div>
                
                <button onClick={reset} style={{ width: '100%', padding: '8px', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#d9534f',
                  color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Reset</button>
              </div>
            </div>
            
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #ddd' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontSize: '12px', fontWeight: 'bold', color: '#555' }}>Number of Dice: {numDice}</label>
              <input type="range" min="1" max="6" step="1" value={numDice} onChange={(e) => setNumDice(parseInt(e.target.value))} disabled={totalRolls > 0} style={{ width: '100%' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#666' }}>
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>
              </div>
              {totalRolls > 0 && <p style={{ fontSize: '10px', color: '#d9534f', margin: '3px 0 0 0' }}>Reset to change</p>}
            </div>
          </div>

          {/* Recent Rolls */}
          <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '12px' }}>
            <h3 style={{ margin: '0 0 10px 0', color: '#333', fontSize: '15px' }}>Recent Rolls (Last {Math.min(rollHistory.length, 20)})</h3>
            {rollHistory.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#999', padding: '15px', fontSize: '12px' }}>No rolls yet</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', maxHeight: '400px', overflowY: 'auto' }}>
                {rollHistory.slice(0, 20).map((roll, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px', backgroundColor: '#f9f9f9', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {roll.dice.map((die, j) => (
                        <DiceVisual key={j} value={die} size={32} />
                      ))}
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#333' }}>= {roll.sum}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', overflowY: 'auto' }}>
          {/* Tabbed Graphs Section */}
          <div style={{ backgroundColor: '#fff', border: '2px solid #ddd', borderRadius: '8px', padding: '15px' }}>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '5px', marginBottom: '10px', borderBottom: '2px solid #ddd' }}>
              <button
                onClick={() => setActiveTab('distribution')}
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backgroundColor: activeTab === 'distribution' ? '#4A90E2' : 'transparent',
                  color: activeTab === 'distribution' ? 'white' : '#666',
                  border: 'none',
                  borderBottom: activeTab === 'distribution' ? '3px solid #4A90E2' : '3px solid transparent',
                  cursor: 'pointer',
                  borderRadius: '4px 4px 0 0',
                  marginBottom: '-2px'
                }}
              >
                Sum Distribution
              </button>
              <button
                onClick={() => setActiveTab('convergence')}
                style={{
                  padding: '10px 20px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  backgroundColor: activeTab === 'convergence' ? '#4A90E2' : 'transparent',
                  color: activeTab === 'convergence' ? 'white' : '#666',
                  border: 'none',
                  borderBottom: activeTab === 'convergence' ? '3px solid #4A90E2' : '3px solid transparent',
                  cursor: 'pointer',
                  borderRadius: '4px 4px 0 0',
                  marginBottom: '-2px'
                }}
              >
                Convergence
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'distribution' && (
              <div>
                <p style={{ fontSize: '12px', color: '#666', margin: '0 0 10px 0' }}>
                  Blue bars show actual frequency. Red bars show expected theoretical distribution.
                </p>
                <Histogram />
              </div>
            )}

            {activeTab === 'convergence' && (
              <div>
                <p style={{ fontSize: '12px', color: '#666', margin: '0 0 10px 0' }}>
                  Watch the average sum converge to {expectedValue.toFixed(2)} as rolls increase.
                </p>
                <ConvergenceGraph />
              </div>
            )}
          </div>

          {/* Statistics - Now visible */}
          <div style={{ backgroundColor: '#e3f2fd', border: '2px solid #90caf9', borderRadius: '8px', padding: '15px' }}>
            <h3 style={{ margin: '0 0 15px 0', color: '#1976d2', fontSize: '18px' }}>Statistics</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '15px' }}>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>{totalRolls.toLocaleString()}</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Total Rolls</div>
              </div>
              <div style={{ textAlign: 'center', padding: '12px', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1976d2' }}>{actualAverage.toFixed(2)}</div>
                <div style={{ fontSize: '13px', color: '#666', marginTop: '4px' }}>Actual Average</div>
              </div>
            </div>
            
            <div style={{ fontSize: '14px', color: '#1565c0', backgroundColor: '#bbdefb', padding: '12px', borderRadius: '8px' }}>
              <div style={{ marginBottom: '6px' }}><strong>Expected Average:</strong> {expectedValue.toFixed(2)}</div>
              <div style={{ marginBottom: '6px' }}><strong>Variance:</strong> {variance.toFixed(2)} | <strong>SD:</strong> {standardDeviation.toFixed(2)}</div>
              {totalRolls > 0 && (
                <div><strong>Z-Score:</strong> {zScore.toFixed(3)} {Math.abs(zScore) > 2 ? '(Unusual!)' : '(Normal)'}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiceRollSimulator;