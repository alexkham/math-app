import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processContent } from '@/app/utils/contentProcessor';

export default function HypergeometricDistribution() {
  const [hyperN, setHyperN] = useState(50);
  const [hyperK, setHyperK] = useState(20);
  const [hyperDraws, setHyperDraws] = useState(10);

  const binomialCoeff = (n, k) => {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return result;
  };

  const hypergeometricPMF = (k, N, K, n) => {
    const numerator = binomialCoeff(K, k) * binomialCoeff(N - K, n - k);
    const denominator = binomialCoeff(N, n);
    return numerator / denominator;
  };

  const hypergeometricData = useMemo(() => {
    const data = [];
    const minK = Math.max(0, hyperDraws - (hyperN - hyperK));
    const maxK = Math.min(hyperDraws, hyperK);
    
    for (let k = minK; k <= maxK; k++) {
      data.push({
        x: k,
        probability: hypergeometricPMF(k, hyperN, hyperK, hyperDraws)
      });
    }
    return data;
  }, [hyperN, hyperK, hyperDraws]);

  const explanation = 'The hypergeometric distribution models the number of successes when sampling without replacement from a finite population. The probability mass function is $P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$, where $N$ is the population size, $K$ is the number of success states in the population, and $n$ is the number of draws. The expected value is $E[X] = n \\cdot \\frac{K}{N}$ and the variance is $\\text{Var}(X) = n \\cdot \\frac{K}{N} \\cdot \\left(1-\\frac{K}{N}\\right) \\cdot \\frac{N-n}{N-1}$. Applications include finding defective items in a sample, analyzing card hands dealt without replacement, and quality control sampling.';

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
          margin-bottom: 12px;
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
{/* 
      <h1>Hypergeometric Distribution</h1>
      <p className="subtitle">Sampling without replacement from finite population</p> */}

      <div className="main-layout">
        <div className="content">
          <div className="distribution-header">
            <h2 className="distribution-title">Hypergeometric Distribution</h2>
            <p className="distribution-description">Sampling without replacement from finite population</p>
          </div>
          
          <div className="controls">
            <div className="control-group">
              <label>
                Population Size (N): {hyperN}
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={hyperN}
                  onChange={(e) => {
                    const newN = parseInt(e.target.value);
                    setHyperN(newN);
                    setHyperK(Math.min(hyperK, newN));
                    setHyperDraws(Math.min(hyperDraws, newN));
                  }}
                />
              </label>
            </div>
            <div className="control-group">
              <label>
                Success States (K): {hyperK}
                <input
                  type="range"
                  min="1"
                  max={hyperN}
                  step="1"
                  value={hyperK}
                  onChange={(e) => setHyperK(parseInt(e.target.value))}
                />
              </label>
            </div>
            <div className="control-group">
              <label>
                Number of Draws (n): {hyperDraws}
                <input
                  type="range"
                  min="1"
                  max={hyperN}
                  step="1"
                  value={hyperDraws}
                  onChange={(e) => setHyperDraws(parseInt(e.target.value))}
                />
              </label>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={hypergeometricData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="x" 
                  label={{ value: 'Value (k)', position: 'insideBottom', offset: -5, style: { fontWeight: 600 } }}
                  stroke="#1a3a52"
                />
                <YAxis 
                  label={{ value: 'Probability P(X = k)', angle: -90, position: 'insideLeft', style: { fontWeight: 600 } }}
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
                <Bar 
                  dataKey="probability" 
                  fill="#245de1"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="explanation-panel">
          <h3 className="explanation-title">Explanation</h3>
          <p className="explanation-text">{processContent(explanation)}</p>
        </div>
      </div>
    </div>
  );
}