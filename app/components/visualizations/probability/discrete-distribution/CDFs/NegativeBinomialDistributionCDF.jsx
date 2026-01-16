import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processContent } from '@/app/utils/contentProcessor';

export default function NegativeBinomialDistributionCDF({ explanation }) {
  const [negBinomialR, setNegBinomialR] = useState(3);
  const [negBinomialP, setNegBinomialP] = useState(0.4);

  const defaultExplanation = 'The negative binomial CDF is $F(k) = P(X \\leq k) = \\sum_{i=r}^{k} \\binom{i-1}{r-1} p^r (1-p)^{i-r}$ for $k \\geq r$. This gives the probability that the $r$-th success occurs on or before trial $k$. The CDF begins at $k = r$ (minimum trials needed for $r$ successes) with value $F(r) = p^r$. As $k$ increases, the CDF approaches 1.0. The distribution generalizes the geometric distribution (which is the special case $r = 1$), and its shape depends on both the number of required successes $r$ and the success probability $p$.';

  const binomialCoeff = (n, k) => {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return result;
  };

  const negativeBinomialPMF = (k, r, p) => {
    return binomialCoeff(k - 1, r - 1) * Math.pow(p, r) * Math.pow(1 - p, k - r);
  };

  const negativeBinomialData = useMemo(() => {
    const data = [];
    const maxK = Math.min(100, Math.ceil(negBinomialR + 30 / negBinomialP));
    let cumulative = 0;
    for (let k = negBinomialR; k <= maxK; k++) {
      cumulative += negativeBinomialPMF(k, negBinomialR, negBinomialP);
      data.push({
        x: k,
        cdf: cumulative
      });
    }
    return data;
  }, [negBinomialR, negBinomialP]);

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
{/* 
      <h1>Negative Binomial Distribution CDF</h1>
      <p className="subtitle">Interactive visualization of the cumulative distribution function</p> */}

      <div className="main-layout">
        <div className="content">
          <div className="distribution-header">
            <h2 className="distribution-title">Negative Binomial Distribution CDF</h2>
            <p className="distribution-description">CDF for waiting time until r-th success</p>
          </div>
          
          <div className="controls">
            <div className="control-group">
              <label>
                Number of Successes (r): {negBinomialR}
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={negBinomialR}
                  onChange={(e) => setNegBinomialR(parseInt(e.target.value))}
                />
              </label>
            </div>
            <div className="control-group">
              <label>
                Success Probability (p): {negBinomialP.toFixed(2)}
                <input
                  type="range"
                  min="0.05"
                  max="0.95"
                  step="0.05"
                  value={negBinomialP}
                  onChange={(e) => setNegBinomialP(parseFloat(e.target.value))}
                />
              </label>
            </div>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={negativeBinomialData}>
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