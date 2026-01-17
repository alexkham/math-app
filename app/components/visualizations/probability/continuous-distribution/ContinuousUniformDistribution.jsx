// import { useState, useMemo } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { processContent } from '@/app/utils/contentProcessor';

// export default function ContinuousUniformDistribution() {
//   const [uniformA, setUniformA] = useState(0);
//   const [uniformB, setUniformB] = useState(10);
//   const [viewType, setViewType] = useState('pdf');

//   const uniformPDF = (x, a, b) => {
//     if (x < a || x > b) return 0;
//     return 1 / (b - a);
//   };

//   const uniformCDF = (x, a, b) => {
//     if (x < a) return 0;
//     if (x > b) return 1;
//     return (x - a) / (b - a);
//   };

//   const uniformData = useMemo(() => {
//     const data = [];
//     const padding = (uniformB - uniformA) * 0.2;
//     const start = uniformA - padding;
//     const end = uniformB + padding;
//     const step = (end - start) / 200;
    
//     for (let x = start; x <= end; x += step) {
//       data.push({
//         x: parseFloat(x.toFixed(3)),
//         pdf: uniformPDF(x, uniformA, uniformB),
//         cdf: uniformCDF(x, uniformA, uniformB)
//       });
//     }
//     return data;
//   }, [uniformA, uniformB]);

//   const explanation = 'The continuous uniform distribution has constant probability density over the interval $[a, b]$. The probability density function is $f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$, and $0$ otherwise. The expected value is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b-a)^2}{12}$. This distribution models situations where all values in an interval are equally likely, such as the position of a randomly thrown dart on a board, random arrival times within a time window, or measurement errors uniformly distributed within tolerances.';

//   return (
//     <div className="container">
//       <style jsx>{`
//         .container {
//           padding: 20px;
//           max-width: 1600px;
//           margin: 0 auto;
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           background: #f5f7fa;
//           min-height: 100vh;
//         }

//         h1 {
//           text-align: center;
//           color: #1a3a52;
//           margin-bottom: 10px;
//           font-size: 32px;
//         }

//         .subtitle {
//           text-align: center;
//           color: #5a6c7d;
//           margin-bottom: 30px;
//           font-size: 16px;
//         }

//         .main-layout {
//           display: grid;
//           grid-template-columns: 2fr 1fr;
//           gap: 20px;
//         }

//         .content {
//           background: white;
//           border-radius: 12px;
//           padding: 30px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
//         }

//         .distribution-header {
//           text-align: center;
//           margin-bottom: 25px;
//           padding-bottom: 20px;
//           border-bottom: 2px solid #f0f0f0;
//         }

//         .distribution-title {
//           font-size: 28px;
//           font-weight: 700;
//           color: #1a3a52;
//           margin-bottom: 8px;
//         }

//         .distribution-description {
//           font-size: 16px;
//           color: #5a6c7d;
//           font-style: italic;
//         }

//         .controls {
//           background: #f8f9fb;
//           padding: 25px;
//           border-radius: 8px;
//           margin-bottom: 30px;
//           border: 1px solid #e1e8ed;
//         }

//         .control-group {
//           margin-bottom: 25px;
//         }

//         .control-group:last-child {
//           margin-bottom: 0;
//         }

//         label {
//           display: block;
//           font-weight: 600;
//           color: #1a3a52;
//           margin-bottom: 10px;
//           font-size: 15px;
//         }

//         input[type="range"] {
//           width: 100%;
//           height: 6px;
//           border-radius: 3px;
//           background: #d0dbe4;
//           outline: none;
//           margin-top: 10px;
//           cursor: pointer;
//         }

//         input[type="range"]::-webkit-slider-thumb {
//           appearance: none;
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           background: #245de1;
//           cursor: pointer;
//           box-shadow: 0 2px 6px rgba(36, 93, 225, 0.3);
//         }

//         input[type="range"]::-moz-range-thumb {
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           background: #245de1;
//           cursor: pointer;
//           box-shadow: 0 2px 6px rgba(36, 93, 225, 0.3);
//           border: none;
//         }

//         .view-toggle {
//           display: flex;
//           gap: 10px;
//           margin-bottom: 20px;
//           justify-content: center;
//         }

//         .view-btn {
//           padding: 10px 20px;
//           background: white;
//           border: 2px solid #e1e8ed;
//           border-radius: 6px;
//           cursor: pointer;
//           font-weight: 600;
//           color: #1a3a52;
//           transition: all 0.3s;
//         }

//         .view-btn:hover {
//           background: #f0f4f8;
//           border-color: #245de1;
//         }

//         .view-btn.active {
//           background: #245de1;
//           color: white;
//           border-color: #245de1;
//         }

//         .chart-container {
//           margin-top: 20px;
//           background: #fafbfc;
//           padding: 20px;
//           border-radius: 8px;
//           border: 1px solid #e1e8ed;
//         }

//         .explanation-panel {
//           background: white;
//           border-radius: 12px;
//           padding: 25px;
//           box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
//           height: fit-content;
//           position: sticky;
//           top: 20px;
//         }

//         .explanation-title {
//           font-size: 20px;
//           font-weight: 700;
//           color: #1a3a52;
//           margin-bottom: 20px;
//           padding-bottom: 12px;
//           border-border: 2px solid #1e5a8e;
//         }

//         .explanation-text {
//           font-size: 18px;
//           color: #2c3e50;
//           line-height: 1.8;
//         }

//         @media (max-width: 1024px) {
//           .main-layout {
//             grid-template-columns: 1fr;
//           }

//           .explanation-panel {
//             position: static;
//           }
//         }

//         @media (max-width: 768px) {
//           .container {
//             padding: 15px;
//           }

//           h1 {
//             font-size: 24px;
//           }

//           .content {
//             padding: 20px;
//           }

//           .distribution-title {
//             font-size: 22px;
//           }
//         }
//       `}</style>

//       {/* <h1>Continuous Uniform Distribution</h1>
//       <p className="subtitle">Constant probability over an interval</p> */}

//       <div className="main-layout">
//         <div className="content">
//           <div className="distribution-header">
//             <h2 className="distribution-title">Continuous Uniform Distribution</h2>
//             <p className="distribution-description">Constant probability over an interval</p>
//           </div>
          
//           <div className="controls">
//             <div className="control-group">
//               <label>
//                 Lower Bound (a): {uniformA}
//                 <input
//                   type="range"
//                   min="-10"
//                   max="10"
//                   step="0.5"
//                   value={uniformA}
//                   onChange={(e) => setUniformA(Math.min(parseFloat(e.target.value), uniformB - 0.5))}
//                 />
//               </label>
//             </div>
//             <div className="control-group">
//               <label>
//                 Upper Bound (b): {uniformB}
//                 <input
//                   type="range"
//                   min="-10"
//                   max="20"
//                   step="0.5"
//                   value={uniformB}
//                   onChange={(e) => setUniformB(Math.max(parseFloat(e.target.value), uniformA + 0.5))}
//                 />
//               </label>
//             </div>
//           </div>

//           <div className="view-toggle">
//             <button
//               className={`view-btn ${viewType === 'pdf' ? 'active' : ''}`}
//               onClick={() => setViewType('pdf')}
//             >
//               PDF (Probability Density)
//             </button>
//             <button
//               className={`view-btn ${viewType === 'cdf' ? 'active' : ''}`}
//               onClick={() => setViewType('cdf')}
//             >
//               CDF (Cumulative)
//             </button>
//           </div>

//           <div className="chart-container">
//             <ResponsiveContainer width="100%" height={450}>
//               <LineChart data={uniformData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
//                 <XAxis 
//                   dataKey="x" 
//                   label={{ value: 'x', position: 'insideBottom', offset: -5, style: { fontWeight: 600 } }}
//                   stroke="#1a3a52"
//                 />
//                 <YAxis 
//                   label={{ 
//                     value: viewType === 'pdf' ? 'f(x)' : 'F(x)', 
//                     angle: -90, 
//                     position: 'insideLeft', 
//                     style: { fontWeight: 600 } 
//                   }}
//                   stroke="#1a3a52"
//                   domain={viewType === 'cdf' ? [0, 1] : ['auto', 'auto']}
//                 />
//                 <Tooltip 
//                   formatter={(value) => value.toFixed(4)}
//                   labelFormatter={(label) => `x = ${label}`}
//                   contentStyle={{ 
//                     background: 'white', 
//                     border: '2px solid #245de1',
//                     borderRadius: '8px',
//                     fontWeight: 600
//                   }}
//                 />
//                 <Line 
//                   type="monotone"
//                   dataKey={viewType}
//                   stroke="#245de1"
//                   strokeWidth={2}
//                   dot={false}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="explanation-panel">
//           <h3 className="explanation-title">Explanation</h3>
//           <p className="explanation-text">{processContent(explanation)}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processContent } from '@/app/utils/contentProcessor';

export default function ContinuousUniformDistribution({ explanation }) {
  const [uniformA, setUniformA] = useState(0);
  const [uniformB, setUniformB] = useState(10);
  const [viewType, setViewType] = useState('pdf');

  const uniformPDF = (x, a, b) => {
    if (x < a || x > b) return 0;
    return 1 / (b - a);
  };

  const uniformCDF = (x, a, b) => {
    if (x < a) return 0;
    if (x > b) return 1;
    return (x - a) / (b - a);
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
        pdf: uniformPDF(x, uniformA, uniformB),
        cdf: uniformCDF(x, uniformA, uniformB)
      });
    }
    return data;
  }, [uniformA, uniformB]);

  const defaultExplanation = 'The continuous uniform distribution has constant probability density over the interval $[a, b]$. The probability density function is $f(x) = \\frac{1}{b-a}$ for $a \\leq x \\leq b$, and $0$ otherwise. The expected value is $E[X] = \\frac{a+b}{2}$ and the variance is $\\text{Var}(X) = \\frac{(b-a)^2}{12}$. This distribution models situations where all values in an interval are equally likely, such as the position of a randomly thrown dart on a board, random arrival times within a time window, or measurement errors uniformly distributed within tolerances.';

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

        .view-toggle {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          justify-content: center;
        }

        .view-btn {
          padding: 10px 20px;
          background: white;
          border: 2px solid #e1e8ed;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          color: #1a3a52;
          transition: all 0.3s;
        }

        .view-btn:hover {
          background: #f0f4f8;
          border-color: #245de1;
        }

        .view-btn.active {
          background: #245de1;
          color: white;
          border-color: #245de1;
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
          border-border: 2px solid #1e5a8e;
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

          .content {
            padding: 20px;
          }

          .distribution-title {
            font-size: 22px;
          }
        }
      `}</style>

      {/* <h1>Continuous Uniform Distribution</h1>
      <p className="subtitle">Constant probability over an interval</p> */}

      <div className="main-layout">
        <div className="content">
          <div className="distribution-header">
            <h2 className="distribution-title">Continuous Uniform Distribution</h2>
            <p className="distribution-description">Constant probability over an interval</p>
          </div>
          
          <div className="controls">
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
          </div>

          <div className="view-toggle">
            <button
              className={`view-btn ${viewType === 'pdf' ? 'active' : ''}`}
              onClick={() => setViewType('pdf')}
            >
              PDF (Probability Density)
            </button>
            <button
              className={`view-btn ${viewType === 'cdf' ? 'active' : ''}`}
              onClick={() => setViewType('cdf')}
            >
              CDF (Cumulative)
            </button>
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={450}>
              <LineChart data={uniformData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="x" 
                  label={{ value: 'x', position: 'insideBottom', offset: -5, style: { fontWeight: 600 } }}
                  stroke="#1a3a52"
                />
                <YAxis 
                  label={{ 
                    value: viewType === 'pdf' ? 'f(x)' : 'F(x)', 
                    angle: -90, 
                    position: 'insideLeft', 
                    style: { fontWeight: 600 } 
                  }}
                  stroke="#1a3a52"
                  domain={viewType === 'cdf' ? [0, 1] : ['auto', 'auto']}
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
                  dataKey={viewType}
                  stroke="#245de1"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="explanation-panel">
          <h3 className="explanation-title">Explanation</h3>
          <p className="explanation-text">{processContent(finalExplanation)}</p>
        </div>
      </div>
    </div>
  );
}