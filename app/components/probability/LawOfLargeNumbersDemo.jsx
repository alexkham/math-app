'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function LawOfLargeNumbersDemo() {
  const [distribution, setDistribution] = useState('coin');
  const [sampleSize, setSampleSize] = useState(100);
  const [isRunning, setIsRunning] = useState(false);
  const [samples, setSamples] = useState([]);
  const [runningMean, setRunningMean] = useState([]);
  const [currentSample, setCurrentSample] = useState(0);
  const [speed, setSpeed] = useState(50);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const distributions = {
    coin: { name: 'Fair Coin (Heads)', expected: 0.5, min: 0, max: 1 },
    die: { name: 'Fair Die', expected: 3.5, min: 1, max: 6 },
    biased_coin: { name: 'Biased Coin (70% Heads)', expected: 0.7, min: 0, max: 1 },
    uniform: { name: 'Uniform(1,10)', expected: 5.5, min: 1, max: 10 }
  };

  const generateSample = (dist) => {
    switch(dist) {
      case 'coin':
        return Math.random() < 0.5 ? 1 : 0;
      case 'biased_coin':
        return Math.random() < 0.7 ? 1 : 0;
      case 'die':
        return Math.floor(Math.random() * 6) + 1;
      case 'uniform':
        return Math.floor(Math.random() * 10) + 1;
      default:
        return 0;
    }
  };

  const drawChart = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 60;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    if (runningMean.length === 0) return;

    // Calculate range for y-axis
    const expectedValue = distributions[distribution].expected;
    const allValues = [...runningMean, expectedValue];
    const minY = Math.min(...allValues) - 0.5;
    const maxY = Math.max(...allValues) + 0.5;
    const rangeY = maxY - minY;

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw y-axis labels
    ctx.fillStyle = '#333';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight * i) / 5;
      const value = maxY - (rangeY * i) / 5;
      ctx.fillText(value.toFixed(2), padding - 10, y + 4);
      
      // Grid lines
      ctx.strokeStyle = '#e0e0e0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw x-axis labels
    ctx.textAlign = 'center';
    const xSteps = 5;
    for (let i = 0; i <= xSteps; i++) {
      const x = padding + (chartWidth * i) / xSteps;
      const sampleNum = Math.floor((currentSample * i) / xSteps);
      ctx.fillText(sampleNum.toString(), x, height - padding + 20);
    }

    // Axis labels
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Sample Number', width / 2, height - 10);
    
    ctx.save();
    ctx.translate(15, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Running Mean', 0, 0);
    ctx.restore();

    // Draw expected value line
    const expectedY = padding + chartHeight * (1 - (expectedValue - minY) / rangeY);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(padding, expectedY);
    ctx.lineTo(width - padding, expectedY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw expected value label
    ctx.fillStyle = '#ef4444';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Expected: ${expectedValue.toFixed(2)}`, width - padding + 10, expectedY + 4);

    // Draw running mean line
    if (runningMean.length > 1) {
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      runningMean.forEach((mean, index) => {
        const x = padding + (chartWidth * index) / (runningMean.length - 1);
        const y = padding + chartHeight * (1 - (mean - minY) / rangeY);
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();

      // Draw current value indicator
      const lastX = padding + chartWidth;
      const lastY = padding + chartHeight * (1 - (runningMean[runningMean.length - 1] - minY) / rangeY);
      
      ctx.fillStyle = '#3b82f6';
      ctx.beginPath();
      ctx.arc(lastX, lastY, 5, 0, Math.PI * 2);
      ctx.fill();

      // Draw current mean label
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(`Current: ${runningMean[runningMean.length - 1].toFixed(4)}`, width - padding + 10, lastY + 20);
    }
  };

  useEffect(() => {
    drawChart();
  }, [runningMean, distribution]);

  useEffect(() => {
    if (isRunning && currentSample < sampleSize) {
      const timeout = setTimeout(() => {
        const newSample = generateSample(distribution);
        const newSamples = [...samples, newSample];
        const sum = newSamples.reduce((a, b) => a + b, 0);
        const mean = sum / newSamples.length;
        
        setSamples(newSamples);
        setRunningMean([...runningMean, mean]);
        setCurrentSample(currentSample + 1);
      }, 101 - speed);

      return () => clearTimeout(timeout);
    } else if (currentSample >= sampleSize) {
      setIsRunning(false);
    }
  }, [isRunning, currentSample, samples, runningMean, distribution, sampleSize, speed]);

  const handleStart = () => {
    if (currentSample === 0) {
      setSamples([]);
      setRunningMean([]);
    }
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSamples([]);
    setRunningMean([]);
    setCurrentSample(0);
  };

  const handleDistributionChange = (newDist) => {
    setDistribution(newDist);
    handleReset();
  };

  const convergenceMetric = runningMean.length > 0 
    ? Math.abs(runningMean[runningMean.length - 1] - distributions[distribution].expected)
    : null;

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ marginBottom: '20px', padding: '15px', background: '#eff6ff', borderRadius: '8px', border: '2px solid #3b82f6' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#1e40af', fontSize: '16px', fontWeight: 'bold' }}>Law of Large Numbers</h3>
        <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.5' }}>
          As sample size increases, the sample mean converges to the expected value. Watch the running mean (blue line) approach the theoretical expected value (red dashed line).
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '20px' }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Distribution</h4>
            <select 
              value={distribution}
              onChange={(e) => handleDistributionChange(e.target.value)}
              disabled={isRunning}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
            >
              {Object.keys(distributions).map(key => (
                <option key={key} value={key}>{distributions[key].name}</option>
              ))}
            </select>
            <div style={{ marginTop: '10px', padding: '8px', background: '#f8fafc', borderRadius: '4px', fontSize: '13px' }}>
              <strong>Expected Value:</strong> {distributions[distribution].expected.toFixed(2)}
            </div>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Sample Size</h4>
            <input
              type="number"
              value={sampleSize}
              onChange={(e) => setSampleSize(Math.max(10, parseInt(e.target.value) || 100))}
              disabled={isRunning}
              min="10"
              max="10000"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '14px' }}
            />
            <div style={{ marginTop: '10px', fontSize: '12px', color: '#64748b' }}>
              Range: 10 - 10,000
            </div>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Animation Speed</h4>
            <input
              type="range"
              value={speed}
              onChange={(e) => setSpeed(parseInt(e.target.value))}
              min="1"
              max="100"
              style={{ width: '100%' }}
            />
            <div style={{ marginTop: '5px', fontSize: '12px', color: '#64748b', textAlign: 'center' }}>
              {speed < 30 ? 'Slow' : speed < 70 ? 'Medium' : 'Fast'}
            </div>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Controls</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={isRunning ? handlePause : handleStart}
                disabled={currentSample >= sampleSize && !isRunning}
                style={{
                  padding: '10px',
                  background: isRunning ? '#f59e0b' : '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: currentSample >= sampleSize && !isRunning ? 'not-allowed' : 'pointer',
                  opacity: currentSample >= sampleSize && !isRunning ? 0.5 : 1
                }}
              >
                {isRunning ? 'Pause' : currentSample === 0 ? 'Start' : 'Resume'}
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: '10px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Statistics</h4>
            <div style={{ fontSize: '13px', lineHeight: '1.8' }}>
              <div><strong>Samples:</strong> {currentSample} / {sampleSize}</div>
              <div><strong>Progress:</strong> {((currentSample / sampleSize) * 100).toFixed(1)}%</div>
              {runningMean.length > 0 && (
                <>
                  <div><strong>Current Mean:</strong> {runningMean[runningMean.length - 1].toFixed(4)}</div>
                  <div><strong>Distance from Expected:</strong> {convergenceMetric.toFixed(4)}</div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Chart */}
        <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '20px' }}>
          <h3 style={{ margin: '0 0 15px 0', fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
            Running Mean Convergence
          </h3>
          <canvas
            ref={canvasRef}
            width={800}
            height={500}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '20px', height: '3px', background: '#3b82f6' }}></div>
              <span>Running Mean</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '20px', height: '3px', background: '#ef4444', borderTop: '2px dashed #ef4444' }}></div>
              <span>Expected Value</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '20px', padding: '15px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>Understanding the Demonstration</h4>
        <p style={{ margin: '0 0 8px 0', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
          <strong>Initial Volatility:</strong> With few samples, the running mean fluctuates significantly and may be far from the expected value.
        </p>
        <p style={{ margin: '0', fontSize: '13px', color: '#475569', lineHeight: '1.6' }}>
          <strong>Convergence:</strong> As more samples are collected, the running mean stabilizes and approaches the theoretical expected value, demonstrating the Law of Large Numbers.
        </p>
      </div>
    </div>
  );
}