import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ContinuousCDFVisualizer({ explanationsOverride = {} }) {
  const [activeDistribution, setActiveDistribution] = useState('uniform');
  
  const [uniformA, setUniformA] = useState(0);
  const [uniformB, setUniformB] = useState(10);
  
  const [normalMean, setNormalMean] = useState(0);
  const [normalStdDev, setNormalStdDev] = useState(1);
  
  const [exponentialLambda, setExponentialLambda] = useState(1);

  const uniformCDF = (x, a, b) => {
    if (x < a) return 0;
    if (x > b) return 1;
    return (x - a) / (b - a);
  };

  const erf = (x) => {
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
  };

  const normalCDF = (x, mean, stdDev) => {
    return 0.5 * (1 + erf((x - mean) / (stdDev * Math.sqrt(2))));
  };

  const exponentialCDF = (x, lambda) => {
    if (x < 0) return 0;
    return 1 - Math.exp(-lambda * x);
  };

  const uniformData = useMemo(() => {
    const data = [];
    const padding = (uniformB - uniformA) * 0.2;
    const start = uniformA - padding;
    const end = uniformB + padding;
    const step = (end - start) / 200;
    
    for (let x = start; x <= end; x += step) {
      data.push({
        x: parseFloat(x.toFixed(3)),
        cdf: uniformCDF(x, uniformA, uniformB)
      });
    }
    return data;
  }, [uniformA, uniformB]);

  const normalData = useMemo(() => {
    const data = [];
    const start = normalMean - 4 * normalStdDev;
    const end = normalMean + 4 * normalStdDev;
    const step = (end - start) / 200;
    
    for (let x = start; x <= end; x += step) {
      data.push({
        x: parseFloat(x.toFixed(3)),
        cdf: normalCDF(x, normalMean, normalStdDev)
      });
    }
    return data;
  }, [normalMean, normalStdDev]);

  const exponentialData = useMemo(() => {
    const data = [];
    const end = 5 / exponentialLambda;
    const step = end / 200;
    
    for (let x = 0; x <= end; x += step) {
      data.push({
        x: parseFloat(x.toFixed(3)),
        cdf: exponentialCDF(x, exponentialLambda)
      });
    }
    return data;
  }, [exponentialLambda]);

  const distributions = {
    uniform: {
      name: 'Continuous Uniform',
      description: 'Linear increase from 0 to 1 over [a, b]',
      data: uniformData,
      explanation: 'The cumulative distribution function (CDF) of the continuous uniform distribution is $F(x) = \\frac{x-a}{b-a}$ for $a \\leq x \\leq b$, $F(x) = 0$ for $x < a$, and $F(x) = 1$ for $x > b$. The CDF shows the probability that the random variable $X$ is less than or equal to $x$, i.e., $P(X \\leq x)$. For the uniform distribution, this probability increases linearly from 0 to 1 across the interval. This means that the probability of landing in the first half of the interval is exactly 0.5, and the probability increases uniformly as we move through the interval.',
      controls: (
        <>
          <div className="control-group">
            <label>
              Lower Bound (a): {uniformA}
              <input
                type="range"
                min="-10"
                max="10"
                step="0.5"
                value={uniformA}
                onChange={(e) => setUniformA(Math.min(parseFloat(e.target.value), uniformB - 0.5))}
              />
            </label>
          </div>
          <div className="control-group">
            <label>
              Upper Bound (b): {uniformB}
              <input
                type="range"
                min="-10"
                max="20"
                step="0.5"
                value={uniformB}
                onChange={(e) => setUniformB(Math.max(parseFloat(e.target.value), uniformA + 0.5))}
              />
            </label>
          </div>
        </>
      )
    },
    normal: {
      name: 'Normal (Gaussian)',
      description: 'S-shaped curve, steepest at mean',
      data: normalData,
      explanation: 'The cumulative distribution function (CDF) of the normal distribution is $F(x) = \\frac{1}{2}\\left[1 + \\text{erf}\\left(\\frac{x-\\mu}{\\sigma\\sqrt{2}}\\right)\\right]$, where erf is the error function. The CDF gives the probability $P(X \\leq x)$ that a normally distributed random variable is less than or equal to $x$. The S-shaped curve is symmetric around the mean $\\mu$, where $F(\\mu) = 0.5$. The curve is steepest at the mean and flattens out in the tails. About 68% of values fall within one standard deviation of the mean ($F(\\mu + \\sigma) - F(\\mu - \\sigma) \\approx 0.68$), 95% within two standard deviations, and 99.7% within three standard deviations.',
      controls: (
        <>
          <div className="control-group">
            <label>
              Mean (μ): {normalMean}
              <input
                type="range"
                min="-5"
                max="5"
                step="0.5"
                value={normalMean}
                onChange={(e) => setNormalMean(parseFloat(e.target.value))}
              />
            </label>
          </div>
          <div className="control-group">
            <label>
              Standard Deviation (σ): {normalStdDev.toFixed(1)}
              <input
                type="range"
                min="0.1"
                max="3"
                step="0.1"
                value={normalStdDev}
                onChange={(e) => setNormalStdDev(parseFloat(e.target.value))}
              />
            </label>
          </div>
        </>
      )
    },
    exponential: {
      name: 'Exponential',
      description: 'Rapid initial rise, asymptotic approach to 1',
      data: exponentialData,
      explanation: 'The cumulative distribution function (CDF) of the exponential distribution is $F(x) = 1 - e^{-\\lambda x}$ for $x \\geq 0$, and $F(x) = 0$ for $x < 0$. The CDF shows the probability that the waiting time is less than or equal to $x$. The curve rises quickly at first and then asymptotically approaches 1. The memoryless property of the exponential distribution means that $P(X > s + t | X > s) = P(X > t)$ for all $s, t \\geq 0$. The median waiting time (where $F(x) = 0.5$) is $\\frac{\\ln(2)}{\\lambda}$, and about 63.2% of events occur within the first $\\frac{1}{\\lambda}$ time units.',
      controls: (
        <div className="control-group">
          <label>
            Rate Parameter (λ): {exponentialLambda.toFixed(2)}
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={exponentialLambda}
              onChange={(e) => setExponentialLambda(parseFloat(e.target.value))}
            />
          </label>
        </div>
      )
    }
  };

  const currentDist = distributions[activeDistribution];
  const finalExplanation = explanationsOverride[activeDistribution] || currentDist.explanation;

  return (
    <div className="container">
      <style jsx>{`
        .container {
          padding: 20px;
          max-width: 1600px;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #f5f7fa;
          min-height: 100vh;
        }

        h1 {
          text-align: center;
          color: #1a3a52;
          margin-bottom: 10px;
          font-size: 32px;
        }

        .subtitle {
          text-align: center;
          color: #5a6c7d;
          margin-bottom: 30px;
          font-size: 16px;
        }

        .tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 30px;
        }

        .tab {
          padding: 16px;
          background: white;
          border: 2px solid #e1e8ed;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          color: #1a3a52;
          text-align: center;
          font-size: 18px;
        }

        .tab:hover {
          background: #f0f4f8;
          transform: translateY(-2px);
          border-color: #245de1;
        }

        .tab.active {
          background: #245de1;
          color: white;
          border-color: #245de1;
          box-shadow: 0 4px 15px rgba(36, 93, 225, 0.3);
        }

        .main-layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .content {
          background: white;
          border-radius: 12px;
          padding: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .distribution-header {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
        }

        .distribution-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a3a52;
          margin-bottom: 8px;
        }

        .distribution-description {
          font-size: 16px;
          color: #5a6c7d;
          font-style: italic;
        }

        .controls {
          background: #f8f9fb;
          padding: 25px;
          border-radius: 8px;
          margin-bottom: 30px;
          border: 1px solid #e1e8ed;
        }

        .control-group {
          margin-bottom: 25px;
        }

        .control-group:last-child {
          margin-bottom: 0;
        }

        label {
          display: block;
          font-weight: 600;
          color: #1a3a52;
          margin-bottom: 10px;
          font-size: 15px;
        }

        input[type="range"] {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: #d0dbe4;
          outline: none;
          margin-top: 10px;
          cursor: pointer;
        }

        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #245de1;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(36, 93, 225, 0.3);
        }

        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #245de1;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(36, 93, 225, 0.3);
          border: none;
        }

        .chart-container {
          margin-top: 20px;
          background: #fafbfc;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #e1e8ed;
        }

        .explanation-panel {
          background: white;
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
          height: fit-content;
          position: sticky;
          top: 20px;
        }

        .explanation-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a3a52;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 2px solid #1e5a8e;
        }

        .explanation-text {
          font-size: 18px;
          color: #2c3e50;
          line-height: 1.8;
        }

        @media (max-width: 1024px) {
          .main-layout {
            grid-template-columns: 1fr;
          }

          .explanation-panel {
            position: static;
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          h1 {
            font-size: 24px;
          }

          .tabs {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .tab {
            padding: 12px;
            font-size: 14px;
          }

          .content {
            padding: 20px;
          }

          .distribution-title {
            font-size: 22px;
          }
        }
      `}</style>

      <h1>Cumulative Distribution Functions (CDF)</h1>
      <p className="subtitle">Visualizing probability accumulation for continuous distributions</p>

      <div className="tabs">
        {Object.keys(distributions).map((key) => (
          <button
            key={key}
            className={`tab ${activeDistribution === key ? 'active' : ''}`}
            onClick={() => setActiveDistribution(key)}
          >
            {distributions[key].name}
          </button>
        ))}
      </div>

      <div className="main-layout">
        <div className="content">
          <div className="distribution-header">
            <h2 className="distribution-title">{currentDist.name} - CDF</h2>
            <p className="distribution-description">{currentDist.description}</p>
          </div>
          
          <div className="controls">
            {currentDist.controls}
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={currentDist.data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="x" 
                  label={{ value: 'x', position: 'insideBottom', offset: -5, style: { fontWeight: 600 } }}
                  stroke="#1a3a52"
                />
                <YAxis 
                  label={{ 
                    value: 'F(x) = P(X ≤ x)', 
                    angle: -90, 
                    position: 'insideLeft', 
                    style: { fontWeight: 600 } 
                  }}
                  stroke="#1a3a52"
                  domain={[0, 1]}
                />
                <Tooltip 
                  formatter={(value) => value.toFixed(4)}
                  labelFormatter={(label) => `x = ${label}`}
                  contentStyle={{ 
                    background: 'white', 
                    border: '2px solid #245de1',
                    borderRadius: '8px',
                    fontWeight: 600
                  }}
                />
                <Line 
                  type="monotone"
                  dataKey="cdf"
                  stroke="#245de1"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="explanation-panel">
          <h3 className="explanation-title">CDF Explanation</h3>
          <p className="explanation-text">{finalExplanation}</p>
        </div>
      </div>
    </div>
  );
}