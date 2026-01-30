'use client';

import React, { useState, useEffect, useRef } from 'react';

export default function CentralLimitTheoremDemo() {
  const [distribution, setDistribution] = useState('uniform');
  const [sampleSize, setSampleSize] = useState(30);
  const [numSamples, setNumSamples] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  const [sampleMeans, setSampleMeans] = useState([]);
  const [currentIteration, setCurrentIteration] = useState(0);
  const [speed, setSpeed] = useState(50);
  const [showNormalCurve, setShowNormalCurve] = useState(true);
  
  const populationCanvasRef = useRef(null);
  const samplingCanvasRef = useRef(null);

  const distributions = {
    uniform: {
      name: 'Uniform (0-10)',
      generate: () => Math.random() * 10,
      mean: 5,
      variance: 100/12,
      color: '#3b82f6'
    },
    exponential: {
      name: 'Exponential (λ=1)',
      generate: () => -Math.log(Math.random()),
      mean: 1,
      variance: 1,
      color: '#10b981'
    },
    bimodal: {
      name: 'Bimodal',
      generate: () => Math.random() < 0.5 ? Math.random() * 3 : 7 + Math.random() * 3,
      mean: 5,
      variance: 8.75,
      color: '#f59e0b'
    },
    skewed: {
      name: 'Right Skewed',
      generate: () => Math.pow(Math.random(), 2) * 10,
      mean: 3.33,
      variance: 5.56,
      color: '#8b5cf6'
    },
    dice: {
      name: 'Die Roll (1-6)',
      generate: () => Math.floor(Math.random() * 6) + 1,
      mean: 3.5,
      variance: 2.917,
      color: '#ef4444'
    }
  };

  const drawPopulationDistribution = () => {
    const canvas = populationCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // Generate sample from population to show its shape
    const popSample = Array(5000).fill(0).map(() => distributions[distribution].generate());
    const bins = 50;
    const minVal = Math.min(...popSample);
    const maxVal = Math.max(...popSample);
    const binWidth = (maxVal - minVal) / bins;
    
    const histogram = new Array(bins).fill(0);
    popSample.forEach(val => {
      const binIndex = Math.min(Math.floor((val - minVal) / binWidth), bins - 1);
      histogram[binIndex]++;
    });

    const maxCount = Math.max(...histogram);

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw histogram
    ctx.fillStyle = distributions[distribution].color + '80';
    ctx.strokeStyle = distributions[distribution].color;
    ctx.lineWidth = 1;

    histogram.forEach((count, i) => {
      const x = padding + (chartWidth * i) / bins;
      const barWidth = chartWidth / bins;
      const barHeight = (chartHeight * count) / maxCount;
      const y = height - padding - barHeight;
      
      ctx.fillRect(x, y, barWidth, barHeight);
      ctx.strokeRect(x, y, barWidth, barHeight);
    });

    // Labels
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Population Distribution', width / 2, 20);

    ctx.font = '12px Arial';
    ctx.fillText(`μ = ${distributions[distribution].mean.toFixed(2)}`, width / 2, height - 10);
  };

  const drawSamplingDistribution = () => {
    const canvas = samplingCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    if (sampleMeans.length === 0) {
      ctx.fillStyle = '#666';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Click Start to begin sampling...', width / 2, height / 2);
      return;
    }

    // Create histogram of sample means
    const bins = 40;
    const minVal = Math.min(...sampleMeans);
    const maxVal = Math.max(...sampleMeans);
    const binWidth = (maxVal - minVal) / bins;
    
    const histogram = new Array(bins).fill(0);
    sampleMeans.forEach(mean => {
      const binIndex = Math.min(Math.floor((mean - minVal) / binWidth), bins - 1);
      histogram[binIndex]++;
    });

    const maxCount = Math.max(...histogram);

    // Draw axes
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw histogram
    ctx.fillStyle = '#3b82f6' + '80';
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;

    histogram.forEach((count, i) => {
      const x = padding + (chartWidth * i) / bins;
      const barWidth = chartWidth / bins;
      const barHeight = (chartHeight * count) / maxCount;
      const y = height - padding - barHeight;
      
      ctx.fillRect(x, y, barWidth, barHeight);
      ctx.strokeRect(x, y, barWidth, barHeight);
    });

    // Draw normal curve overlay if enabled
    if (showNormalCurve && sampleMeans.length > 30) {
      const theoreticalMean = distributions[distribution].mean;
      const theoreticalSD = Math.sqrt(distributions[distribution].variance / sampleSize);
      
      ctx.strokeStyle = '#ef4444';
      ctx.lineWidth = 3;
      ctx.beginPath();

      for (let i = 0; i <= 100; i++) {
        const x = minVal + (maxVal - minVal) * (i / 100);
        const z = (x - theoreticalMean) / theoreticalSD;
        const normalValue = (1 / (theoreticalSD * Math.sqrt(2 * Math.PI))) * 
                           Math.exp(-0.5 * z * z);
        
        // Scale to match histogram
        const scaledValue = normalValue * sampleMeans.length * binWidth;
        const normalHeight = (chartHeight * scaledValue) / maxCount;
        
        const canvasX = padding + (chartWidth * i) / 100;
        const canvasY = height - padding - normalHeight;
        
        if (i === 0) {
          ctx.moveTo(canvasX, canvasY);
        } else {
          ctx.lineTo(canvasX, canvasY);
        }
      }
      ctx.stroke();
    }

    // Draw mean line
    const sampleMean = sampleMeans.reduce((a, b) => a + b, 0) / sampleMeans.length;
    const meanX = padding + chartWidth * (sampleMean - minVal) / (maxVal - minVal);
    
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(meanX, padding);
    ctx.lineTo(meanX, height - padding);
    ctx.stroke();
    ctx.setLineDash([]);

    // Labels
    ctx.fillStyle = '#333';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Sampling Distribution of Sample Means', width / 2, 20);

    ctx.font = '11px Arial';
    const observedMean = sampleMeans.reduce((a, b) => a + b, 0) / sampleMeans.length;
    const observedVar = sampleMeans.reduce((sum, x) => sum + Math.pow(x - observedMean, 2), 0) / sampleMeans.length;
    ctx.fillText(
      `Observed: Mean = ${observedMean.toFixed(3)}, SD = ${Math.sqrt(observedVar).toFixed(3)}`,
      width / 2,
      height - 25
    );
    ctx.fillText(
      `Expected: Mean = ${distributions[distribution].mean.toFixed(3)}, SD = ${Math.sqrt(distributions[distribution].variance / sampleSize).toFixed(3)}`,
      width / 2,
      height - 10
    );
  };

  useEffect(() => {
    drawPopulationDistribution();
  }, [distribution]);

  useEffect(() => {
    drawSamplingDistribution();
  }, [sampleMeans, showNormalCurve]);

  useEffect(() => {
    if (isRunning && currentIteration < numSamples) {
      const timeout = setTimeout(() => {
        // Generate one sample of size n and calculate its mean
        const sample = Array(sampleSize).fill(0).map(() => distributions[distribution].generate());
        const mean = sample.reduce((a, b) => a + b, 0) / sample.length;
        
        setSampleMeans(prev => [...prev, mean]);
        setCurrentIteration(prev => prev + 1);
      }, 101 - speed);

      return () => clearTimeout(timeout);
    } else if (currentIteration >= numSamples) {
      setIsRunning(false);
    }
  }, [isRunning, currentIteration, sampleSize, numSamples, distribution, speed]);

  const handleStart = () => {
    if (currentIteration === 0) {
      setSampleMeans([]);
    }
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSampleMeans([]);
    setCurrentIteration(0);
  };

  const handleDistributionChange = (newDist) => {
    setDistribution(newDist);
    handleReset();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ marginBottom: '20px', padding: '15px', background: '#eff6ff', borderRadius: '8px', border: '2px solid #3b82f6' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#1e40af', fontSize: '16px', fontWeight: 'bold' }}>Central Limit Theorem</h3>
        <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: '1.5' }}>
          The sampling distribution of sample means approaches a normal distribution as sample size increases, regardless of the population distribution&apos;s shape. Take many samples, calculate each mean, and watch the histogram of means form a bell curve.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px', marginBottom: '20px' }}>
        {/* Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Population Distribution</h4>
            <select 
              value={distribution}
              onChange={(e) => handleDistributionChange(e.target.value)}
              disabled={isRunning}
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '13px' }}
            >
              {Object.keys(distributions).map(key => (
                <option key={key} value={key}>{distributions[key].name}</option>
              ))}
            </select>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Sample Size (n)</h4>
            <input
              type="number"
              value={sampleSize}
              onChange={(e) => setSampleSize(Math.max(1, parseInt(e.target.value) || 30))}
              disabled={isRunning}
              min="1"
              max="200"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '13px' }}
            />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#64748b' }}>
              Items per sample
            </div>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Number of Samples</h4>
            <input
              type="number"
              value={numSamples}
              onChange={(e) => setNumSamples(Math.max(10, parseInt(e.target.value) || 1000))}
              disabled={isRunning}
              min="10"
              max="5000"
              style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '13px' }}
            />
            <div style={{ marginTop: '8px', fontSize: '11px', color: '#64748b' }}>
              How many means to collect
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
            <div style={{ marginTop: '5px', fontSize: '11px', color: '#64748b', textAlign: 'center' }}>
              {speed < 30 ? 'Slow' : speed < 70 ? 'Medium' : 'Fast'}
            </div>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={showNormalCurve}
                onChange={(e) => setShowNormalCurve(e.target.checked)}
              />
              Show Normal Curve Overlay
            </label>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Controls</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={isRunning ? handlePause : handleStart}
                disabled={currentIteration >= numSamples && !isRunning}
                style={{
                  padding: '10px',
                  background: isRunning ? '#f59e0b' : '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: currentIteration >= numSamples && !isRunning ? 'not-allowed' : 'pointer',
                  opacity: currentIteration >= numSamples && !isRunning ? 0.5 : 1
                }}
              >
                {isRunning ? 'Pause' : currentIteration === 0 ? 'Start' : 'Resume'}
              </button>
              <button
                onClick={handleReset}
                style={{
                  padding: '10px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Reset
              </button>
            </div>
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold' }}>Progress</h4>
            <div style={{ fontSize: '12px', lineHeight: '1.8' }}>
              <div><strong>Samples Collected:</strong> {currentIteration} / {numSamples}</div>
              <div><strong>Progress:</strong> {((currentIteration / numSamples) * 100).toFixed(1)}%</div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <canvas
              ref={populationCanvasRef}
              width={800}
              height={300}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          <div style={{ background: 'white', border: '2px solid #e2e8f0', borderRadius: '8px', padding: '15px' }}>
            <canvas
              ref={samplingCanvasRef}
              width={800}
              height={400}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {showNormalCurve && sampleMeans.length > 30 && (
              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '20px', height: '12px', background: '#3b82f680', border: '1px solid #3b82f6' }}></div>
                  <span>Sample Means</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '20px', height: '3px', background: '#ef4444' }}></div>
                  <span>Normal Curve</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '20px', height: '3px', background: '#10b981', borderTop: '2px dashed #10b981' }}></div>
                  <span>Observed Mean</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ padding: '15px', background: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
        <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', fontWeight: 'bold', color: '#1e293b' }}>Key Observations</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: '#475569', lineHeight: '1.8' }}>
          <li><strong>Shape:</strong> No matter how skewed or unusual the population (top chart), the sample means (bottom chart) form a bell curve.</li>
          <li><strong>Center:</strong> The mean of sample means equals the population mean (μ).</li>
          <li><strong>Spread:</strong> Standard deviation of sample means = σ/√n (decreases as sample size increases).</li>
          <li><strong>Sample Size Effect:</strong> Larger n → tighter, more normal distribution. Try n=5 vs n=50 to see the difference.</li>
        </ul>
      </div>
    </div>
  );
}