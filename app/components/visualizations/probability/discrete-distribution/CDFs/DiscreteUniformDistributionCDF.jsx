import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processContent } from '@/app/utils/contentProcessor';

export default function DiscreteUniformDistributionCDF({ explanation }) {
  const [uniformMin, setUniformMin] = useState(1);
  const [uniformMax, setUniformMax] = useState(6);

  const defaultExplanation = 'The cumulative distribution function (CDF) for the discrete uniform distribution is $F(k) = \\frac{\\lfloor k \\rfloor - a + 1}{b - a + 1}$ for $a \\leq k \\leq b$. The CDF increases in equal steps of $\\frac{1}{n}$ where $n = b - a + 1$ is the number of possible values. Each step represents one additional outcome being included in the cumulative probability. The CDF reaches 1.0 at the maximum value $b$ and remains at 1.0 for all larger values.';

  const discreteUniformCDF = (k, a, b) => {
    if (k < a) return 0;
    if (k >= b) return 1;
    return (Math.floor(k) - a + 1) / (b - a + 1);
  };

  const discreteUniformData = useMemo(() => {
    const data = [];
    for (let k = uniformMin; k <= uniformMax; k++) {
      data.push({
        x: k,
        cdf: discreteUniformCDF(k, uniformMin, uniformMax)
      });
    }
    return data;
  }, [uniformMin, uniformMax]);

  const finalExplanation = explanation || defaultExplanation;

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
          line-height: 1.6;
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

          .content {
            padding: 20px;
          }

          .distribution-title {
            font-size: 22px;
          }
        }
      `}</style>

      {/* <h1>Discrete Uniform Distribution CDF</h1>
      <p className="subtitle">Interactive visualization of the cumulative distribution function</p> */}

      <div className="main-layout">
        <div className="content">
          <div className="distribution-header">
            <h2 className="distribution-title">Discrete Uniform Distribution CDF</h2>
            <p className="distribution-description">CDF rises uniformly in equal steps</p>
          </div>
          
          <div className="controls">
            <div className="control-group">
              <label>
                Minimum Value (a): {uniformMin}
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={uniformMin}
                  onChange={(e) => setUniformMin(Math.min(parseInt(e.target.value), uniformMax - 1))}
                />
              </label>
            </div>
            <div className="control-group">
              <label>
                Maximum Value (b): {uniformMax}
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={uniformMax}
                  onChange={(e) => setUniformMax(Math.max(parseInt(e.target.value), uniformMin + 1))}
                />
              </label>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={discreteUniformData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="x" 
                  label={{ value: 'Value (k)', position: 'insideBottom', offset: -5, style: { fontWeight: 600 } }}
                  stroke="#1a3a52"
                />
                <YAxis 
                  domain={[0, 1]}
                  label={{ value: 'Cumulative Probability F(k)', angle: -90, position: 'insideLeft', style: { fontWeight: 600 } }}
                  stroke="#1a3a52"
                />
                <Tooltip 
                  formatter={(value) => value.toFixed(6)}
                  labelFormatter={(label) => `k = ${label}`}
                  contentStyle={{ 
                    background: 'white', 
                    border: '2px solid #1e5a8e',
                    borderRadius: '8px',
                    fontWeight: 600
                  }}
                />
                <Line 
                  type="stepAfter"
                  dataKey="cdf" 
                  stroke="#245de1"
                  strokeWidth={3}
                  dot={{ fill: '#245de1', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="explanation-panel">
          <h3 className="explanation-title">CDF Explanation</h3>
          <div className="explanation-text">{processContent(finalExplanation)}</div>
        </div>
      </div>
    </div>
  );
}