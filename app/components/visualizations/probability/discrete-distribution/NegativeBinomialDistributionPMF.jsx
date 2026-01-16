import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processContent } from '@/app/utils/contentProcessor';

export default function NegativeBinomialDistribution() {
  const [negBinomialR, setNegBinomialR] = useState(3);
  const [negBinomialP, setNegBinomialP] = useState(0.4);

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
    for (let k = negBinomialR; k <= maxK; k++) {
      const prob = negativeBinomialPMF(k, negBinomialR, negBinomialP);
      if (prob > 0.001) {
        data.push({
          x: k,
          probability: prob
        });
      }
    }
    return data;
  }, [negBinomialR, negBinomialP]);

  const explanation = 'The negative binomial distribution models the number of trials needed to achieve $r$ successes in repeated independent trials. The probability mass function is $P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$. The expected value is $E[X] = \\frac{r}{p}$ and the variance is $\\text{Var}(X) = \\frac{r(1-p)}{p^2}$. This distribution is used for modeling scenarios like the number of calls until $r$ sales are made, games played until $r$ wins are achieved, or attempts until $r$ successes occur.';

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

      {/* <h1>Negative Binomial Distribution</h1>
      <p className="subtitle">Trials until r-th success (generalization of geometric)</p> */}

      <div className="main-layout">
        <div className="content">
          <div className="distribution-header">
            <h2 className="distribution-title">Negative Binomial Distribution</h2>
            <p className="distribution-description">Trials until r-th success (generalization of geometric)</p>
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
              <BarChart data={negativeBinomialData}>
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