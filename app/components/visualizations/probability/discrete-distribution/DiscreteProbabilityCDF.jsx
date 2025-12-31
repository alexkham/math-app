// import { useState, useMemo } from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { processContent } from '@/app/utils/contentProcessor';

// export default function DiscreteProbabilityDistributionsCDF({ explanationsOverride = {} }) {
//   const [activeDistribution, setActiveDistribution] = useState('discreteUniform');
  
//   const [uniformMin, setUniformMin] = useState(1);
//   const [uniformMax, setUniformMax] = useState(6);
  
//   const [binomialN, setBinomialN] = useState(10);
//   const [binomialP, setBinomialP] = useState(0.5);
  
//   const [geometricP, setGeometricP] = useState(0.3);
  
//   const [negBinomialR, setNegBinomialR] = useState(3);
//   const [negBinomialP, setNegBinomialP] = useState(0.4);
  
//   const [hyperN, setHyperN] = useState(50);
//   const [hyperK, setHyperK] = useState(20);
//   const [hyperDraws, setHyperDraws] = useState(10);
  
//   const [poissonLambda, setPoissonLambda] = useState(3);

//   const factorial = (n) => {
//     if (n <= 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   };

//   const binomialCoeff = (n, k) => {
//     if (k > n) return 0;
//     if (k === 0 || k === n) return 1;
    
//     let result = 1;
//     for (let i = 1; i <= k; i++) {
//       result *= (n - i + 1) / i;
//     }
//     return result;
//   };

//   // PMF functions
//   const discreteUniformPMF = (k, a, b) => {
//     if (k < a || k > b) return 0;
//     return 1 / (b - a + 1);
//   };

//   const binomialPMF = (k, n, p) => {
//     return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
//   };

//   const geometricPMF = (k, p) => {
//     return Math.pow(1 - p, k - 1) * p;
//   };

//   const negativeBinomialPMF = (k, r, p) => {
//     return binomialCoeff(k - 1, r - 1) * Math.pow(p, r) * Math.pow(1 - p, k - r);
//   };

//   const hypergeometricPMF = (k, N, K, n) => {
//     const numerator = binomialCoeff(K, k) * binomialCoeff(N - K, n - k);
//     const denominator = binomialCoeff(N, n);
//     return numerator / denominator;
//   };

//   const poissonPMF = (k, lambda) => {
//     return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
//   };

//   // CDF functions
//   const discreteUniformCDF = (k, a, b) => {
//     if (k < a) return 0;
//     if (k >= b) return 1;
//     return (Math.floor(k) - a + 1) / (b - a + 1);
//   };

//   const geometricCDF = (k, p) => {
//     if (k < 1) return 0;
//     return 1 - Math.pow(1 - p, Math.floor(k));
//   };

//   const discreteUniformData = useMemo(() => {
//     const data = [];
//     for (let k = uniformMin; k <= uniformMax; k++) {
//       data.push({
//         x: k,
//         cdf: discreteUniformCDF(k, uniformMin, uniformMax)
//       });
//     }
//     return data;
//   }, [uniformMin, uniformMax]);

//   const binomialData = useMemo(() => {
//     const data = [];
//     let cumulative = 0;
//     for (let k = 0; k <= binomialN; k++) {
//       cumulative += binomialPMF(k, binomialN, binomialP);
//       data.push({
//         x: k,
//         cdf: cumulative
//       });
//     }
//     return data;
//   }, [binomialN, binomialP]);

//   const geometricData = useMemo(() => {
//     const data = [];
//     const maxK = Math.min(50, Math.ceil(10 / geometricP));
//     for (let k = 1; k <= maxK; k++) {
//       data.push({
//         x: k,
//         cdf: geometricCDF(k, geometricP)
//       });
//     }
//     return data;
//   }, [geometricP]);

//   const negativeBinomialData = useMemo(() => {
//     const data = [];
//     const maxK = Math.min(100, Math.ceil(negBinomialR + 30 / negBinomialP));
//     let cumulative = 0;
//     for (let k = negBinomialR; k <= maxK; k++) {
//       cumulative += negativeBinomialPMF(k, negBinomialR, negBinomialP);
//       data.push({
//         x: k,
//         cdf: cumulative
//       });
//     }
//     return data;
//   }, [negBinomialR, negBinomialP]);

//   const hypergeometricData = useMemo(() => {
//     const data = [];
//     const minK = Math.max(0, hyperDraws - (hyperN - hyperK));
//     const maxK = Math.min(hyperDraws, hyperK);
//     let cumulative = 0;
    
//     for (let k = minK; k <= maxK; k++) {
//       cumulative += hypergeometricPMF(k, hyperN, hyperK, hyperDraws);
//       data.push({
//         x: k,
//         cdf: cumulative
//       });
//     }
//     return data;
//   }, [hyperN, hyperK, hyperDraws]);

//   const poissonData = useMemo(() => {
//     const data = [];
//     const maxK = Math.min(30, poissonLambda + 15);
//     let cumulative = 0;
//     for (let k = 0; k <= maxK; k++) {
//       cumulative += poissonPMF(k, poissonLambda);
//       data.push({
//         x: k,
//         cdf: cumulative
//       });
//     }
//     return data;
//   }, [poissonLambda]);

//   const distributions = {
//     discreteUniform: {
//       name: 'Discrete Uniform',
//       description: 'CDF rises uniformly in equal steps',
//       data: discreteUniformData,
//       explanation: 'The cumulative distribution function (CDF) for the discrete uniform distribution is $F(k) = \\frac{\\lfloor k \\rfloor - a + 1}{b - a + 1}$ for $a \\leq k \\leq b$. The CDF increases in equal steps of $\\frac{1}{n}$ where $n = b - a + 1$ is the number of possible values. Each step represents one additional outcome being included in the cumulative probability. The CDF reaches 1.0 at the maximum value $b$ and remains at 1.0 for all larger values.',
//       controls: (
//         <>
//           <div className="control-group">
//             <label>
//               Minimum Value (a): {uniformMin}
//               <input
//                 type="range"
//                 min="0"
//                 max="20"
//                 step="1"
//                 value={uniformMin}
//                 onChange={(e) => setUniformMin(Math.min(parseInt(e.target.value), uniformMax - 1))}
//               />
//             </label>
//           </div>
//           <div className="control-group">
//             <label>
//               Maximum Value (b): {uniformMax}
//               <input
//                 type="range"
//                 min="1"
//                 max="30"
//                 step="1"
//                 value={uniformMax}
//                 onChange={(e) => setUniformMax(Math.max(parseInt(e.target.value), uniformMin + 1))}
//               />
//             </label>
//           </div>
//         </>
//       )
//     },
//     binomial: {
//       name: 'Binomial',
//       description: 'CDF for successes in n independent trials',
//       data: binomialData,
//       explanation: 'The binomial CDF is $F(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\binom{n}{i} p^i (1-p)^{n-i}$. This represents the probability of getting $k$ or fewer successes in $n$ trials. The CDF starts at $F(0) = (1-p)^n$ (the probability of zero successes) and increases with each additional possible outcome, reaching 1.0 at $k = n$. The shape of the CDF reflects the underlying binomial distribution: symmetric when $p = 0.5$, right-skewed when $p < 0.5$, and left-skewed when $p > 0.5$.',
//       controls: (
//         <>
//           <div className="control-group">
//             <label>
//               Number of Trials (n): {binomialN}
//               <input
//                 type="range"
//                 min="1"
//                 max="50"
//                 step="1"
//                 value={binomialN}
//                 onChange={(e) => setBinomialN(parseInt(e.target.value))}
//               />
//             </label>
//           </div>
//           <div className="control-group">
//             <label>
//               Success Probability (p): {binomialP.toFixed(2)}
//               <input
//                 type="range"
//                 min="0.01"
//                 max="0.99"
//                 step="0.01"
//                 value={binomialP}
//                 onChange={(e) => setBinomialP(parseFloat(e.target.value))}
//               />
//             </label>
//           </div>
//         </>
//       )
//     },
//     geometric: {
//       name: 'Geometric',
//       description: 'CDF for waiting time until first success',
//       data: geometricData,
//       explanation: 'The geometric CDF has a closed form: $F(k) = P(X \\leq k) = 1 - (1-p)^k$ for $k \\geq 1$. This represents the probability that the first success occurs on or before trial $k$. The CDF starts at $F(1) = p$ (success on the first trial) and asymptotically approaches 1.0 as $k$ increases. The rate of increase depends on $p$: larger values of $p$ lead to faster convergence to 1.0, while smaller values result in a more gradual increase, reflecting the longer expected waiting time.',
//       controls: (
//         <div className="control-group">
//           <label>
//             Success Probability (p): {geometricP.toFixed(2)}
//             <input
//               type="range"
//               min="0.05"
//               max="0.95"
//               step="0.05"
//               value={geometricP}
//               onChange={(e) => setGeometricP(parseFloat(e.target.value))}
//             />
//           </label>
//         </div>
//       )
//     },
//     negativeBinomial: {
//       name: 'Negative Binomial',
//       description: 'CDF for waiting time until r-th success',
//       data: negativeBinomialData,
//       explanation: 'The negative binomial CDF is $F(k) = P(X \\leq k) = \\sum_{i=r}^{k} \\binom{i-1}{r-1} p^r (1-p)^{i-r}$ for $k \\geq r$. This gives the probability that the $r$-th success occurs on or before trial $k$. The CDF begins at $k = r$ (minimum trials needed for $r$ successes) with value $F(r) = p^r$. As $k$ increases, the CDF approaches 1.0. The distribution generalizes the geometric distribution (which is the special case $r = 1$), and its shape depends on both the number of required successes $r$ and the success probability $p$.',
//       controls: (
//         <>
//           <div className="control-group">
//             <label>
//               Number of Successes (r): {negBinomialR}
//               <input
//                 type="range"
//                 min="1"
//                 max="20"
//                 step="1"
//                 value={negBinomialR}
//                 onChange={(e) => setNegBinomialR(parseInt(e.target.value))}
//               />
//             </label>
//           </div>
//           <div className="control-group">
//             <label>
//               Success Probability (p): {negBinomialP.toFixed(2)}
//               <input
//                 type="range"
//                 min="0.05"
//                 max="0.95"
//                 step="0.05"
//                 value={negBinomialP}
//                 onChange={(e) => setNegBinomialP(parseFloat(e.target.value))}
//               />
//             </label>
//           </div>
//         </>
//       )
//     },
//     hypergeometric: {
//       name: 'Hypergeometric',
//       description: 'CDF for sampling without replacement',
//       data: hypergeometricData,
//       explanation: 'The hypergeometric CDF is $F(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\frac{\\binom{K}{i} \\binom{N-K}{n-i}}{\\binom{N}{n}}$ for $\\max(0, n-(N-K)) \\leq k \\leq \\min(n, K)$. This represents the probability of drawing $k$ or fewer success items when sampling $n$ items without replacement from a population of size $N$ containing $K$ success items. The CDF is bounded by the minimum and maximum possible number of successes in the sample. Unlike the binomial CDF, the hypergeometric CDF accounts for the changing probability as items are drawn without replacement.',
//       controls: (
//         <>
//           <div className="control-group">
//             <label>
//               Population Size (N): {hyperN}
//               <input
//                 type="range"
//                 min="10"
//                 max="100"
//                 step="5"
//                 value={hyperN}
//                 onChange={(e) => {
//                   const newN = parseInt(e.target.value);
//                   setHyperN(newN);
//                   setHyperK(Math.min(hyperK, newN));
//                   setHyperDraws(Math.min(hyperDraws, newN));
//                 }}
//               />
//             </label>
//           </div>
//           <div className="control-group">
//             <label>
//               Success States (K): {hyperK}
//               <input
//                 type="range"
//                 min="1"
//                 max={hyperN}
//                 step="1"
//                 value={hyperK}
//                 onChange={(e) => setHyperK(parseInt(e.target.value))}
//               />
//             </label>
//           </div>
//           <div className="control-group">
//             <label>
//               Number of Draws (n): {hyperDraws}
//               <input
//                 type="range"
//                 min="1"
//                 max={hyperN}
//                 step="1"
//                 value={hyperDraws}
//                 onChange={(e) => setHyperDraws(parseInt(e.target.value))}
//               />
//             </label>
//           </div>
//         </>
//       )
//     },
//     poisson: {
//       name: 'Poisson',
//       description: 'CDF for rare events over time',
//       data: poissonData,
//       explanation: 'The Poisson CDF is $F(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\frac{\\lambda^i e^{-\\lambda}}{i!}$ for $k \\geq 0$. This gives the probability of observing $k$ or fewer events in the fixed interval. The CDF starts at $F(0) = e^{-\\lambda}$, which is the probability of observing zero events. As $k$ increases, the CDF approaches 1.0, with the rate of convergence depending on $\\lambda$. For larger values of $\\lambda$, the CDF increases more gradually across a wider range of $k$ values, while smaller $\\lambda$ values lead to faster convergence near $k = 0$.',
//       controls: (
//         <div className="control-group">
//           <label>
//             Rate Lambda (λ): {poissonLambda.toFixed(1)}
//             <input
//               type="range"
//               min="0.5"
//               max="15"
//               step="0.5"
//               value={poissonLambda}
//               onChange={(e) => setPoissonLambda(parseFloat(e.target.value))}
//             />
//           </label>
//         </div>
//       )
//     }
//   };

//   const currentDist = distributions[activeDistribution];
  
//   const finalExplanation = explanationsOverride[activeDistribution] || currentDist.explanation;

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

//         .tabs {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 12px;
//           margin-bottom: 30px;
//         }

//         .tab {
//           padding: 16px;
//           background: white;
//           border: 2px solid #e1e8ed;
//           border-radius: 8px;
//           cursor: pointer;
//           font-weight: 600;
//           transition: all 0.3s ease;
//           color: #1a3a52;
//           text-align: center;
//           font-size: 18px;
//         }

//         .tab:hover {
//           background: #f0f4f8;
//           transform: translateY(-2px);
//           border-color: #27ae60;
//         }

//         .tab.active {
//           background: #27ae60;
//           color: white;
//           border-color: #27ae60;
//           box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
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
//           background: #27ae60;
//           cursor: pointer;
//           box-shadow: 0 2px 6px rgba(39, 174, 96, 0.3);
//         }

//         input[type="range"]::-moz-range-thumb {
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           background: #27ae60;
//           cursor: pointer;
//           box-shadow: 0 2px 6px rgba(39, 174, 96, 0.3);
//           border: none;
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
//           border-bottom: 2px solid #27ae60;
//         }

//         .explanation-text {
//           font-size: 18px;
//           color: #2c3e50;
//           line-height: 1.6;
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

//           .tabs {
//             grid-template-columns: 1fr;
//             gap: 8px;
//           }

//           .tab {
//             padding: 12px;
//             font-size: 14px;
//           }

//           .content {
//             padding: 20px;
//           }

//           .distribution-title {
//             font-size: 22px;
//           }
//         }
//       `}</style>

//       <p className="subtitle">Interactive visualization of cumulative distribution functions (CDF)</p>

//       <div className="tabs">
//         {Object.keys(distributions).map((key) => (
//           <button
//             key={key}
//             className={`tab ${activeDistribution === key ? 'active' : ''}`}
//             onClick={() => setActiveDistribution(key)}
//           >
//             {distributions[key].name}
//           </button>
//         ))}
//       </div>

//       <div className="main-layout">
//         <div className="content">
//           <div className="distribution-header">
//             <h2 className="distribution-title">{currentDist.name} CDF</h2>
//             <p className="distribution-description">{currentDist.description}</p>
//           </div>
          
//           <div className="controls">
//             {currentDist.controls}
//           </div>

//           <div className="chart-container">
//             <ResponsiveContainer width="100%" height={450}>
//               <LineChart data={currentDist.data}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
//                 <XAxis 
//                   dataKey="x" 
//                   label={{ value: 'Value (k)', position: 'insideBottom', offset: -5, style: { fontWeight: 600 } }}
//                   stroke="#1a3a52"
//                 />
//                 <YAxis 
//                   domain={[0, 1]}
//                   label={{ value: 'Cumulative Probability F(k)', angle: -90, position: 'insideLeft', style: { fontWeight: 600 } }}
//                   stroke="#1a3a52"
//                 />
//                 <Tooltip 
//                   formatter={(value) => value.toFixed(6)}
//                   labelFormatter={(label) => `k = ${label}`}
//                   contentStyle={{ 
//                     background: 'white', 
//                     border: '2px solid #27ae60',
//                     borderRadius: '8px',
//                     fontWeight: 600
//                   }}
//                 />
//                 <Line 
//                   type="stepAfter"
//                   dataKey="cdf" 
//                   stroke="#27ae60"
//                   strokeWidth={3}
//                   dot={{ fill: '#27ae60', r: 4 }}
//                   activeDot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="explanation-panel">
//           <h3 className="explanation-title">CDF Explanation</h3>
//           <p className="explanation-text">{processContent(finalExplanation)}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processContent } from '@/app/utils/contentProcessor';

export default function DiscreteProbabilityDistributionsCDF({ explanationsOverride = {} }) {
  const [activeDistribution, setActiveDistribution] = useState('discreteUniform');
  
  const [uniformMin, setUniformMin] = useState(1);
  const [uniformMax, setUniformMax] = useState(6);
  
  const [binomialN, setBinomialN] = useState(10);
  const [binomialP, setBinomialP] = useState(0.5);
  
  const [geometricP, setGeometricP] = useState(0.3);
  
  const [negBinomialR, setNegBinomialR] = useState(3);
  const [negBinomialP, setNegBinomialP] = useState(0.4);
  
  const [hyperN, setHyperN] = useState(50);
  const [hyperK, setHyperK] = useState(20);
  const [hyperDraws, setHyperDraws] = useState(10);
  
  const [poissonLambda, setPoissonLambda] = useState(3);

  const factorial = (n) => {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const binomialCoeff = (n, k) => {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    
    let result = 1;
    for (let i = 1; i <= k; i++) {
      result *= (n - i + 1) / i;
    }
    return result;
  };

  // PMF functions
  const discreteUniformPMF = (k, a, b) => {
    if (k < a || k > b) return 0;
    return 1 / (b - a + 1);
  };

  const binomialPMF = (k, n, p) => {
    return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  };

  const geometricPMF = (k, p) => {
    return Math.pow(1 - p, k - 1) * p;
  };

  const negativeBinomialPMF = (k, r, p) => {
    return binomialCoeff(k - 1, r - 1) * Math.pow(p, r) * Math.pow(1 - p, k - r);
  };

  const hypergeometricPMF = (k, N, K, n) => {
    const numerator = binomialCoeff(K, k) * binomialCoeff(N - K, n - k);
    const denominator = binomialCoeff(N, n);
    return numerator / denominator;
  };

  const poissonPMF = (k, lambda) => {
    return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
  };

  // CDF functions
  const discreteUniformCDF = (k, a, b) => {
    if (k < a) return 0;
    if (k >= b) return 1;
    return (Math.floor(k) - a + 1) / (b - a + 1);
  };

  const geometricCDF = (k, p) => {
    if (k < 1) return 0;
    return 1 - Math.pow(1 - p, Math.floor(k));
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

  const binomialData = useMemo(() => {
    const data = [];
    let cumulative = 0;
    for (let k = 0; k <= binomialN; k++) {
      cumulative += binomialPMF(k, binomialN, binomialP);
      data.push({
        x: k,
        cdf: cumulative
      });
    }
    return data;
  }, [binomialN, binomialP]);

  const geometricData = useMemo(() => {
    const data = [];
    const maxK = Math.min(50, Math.ceil(10 / geometricP));
    for (let k = 1; k <= maxK; k++) {
      data.push({
        x: k,
        cdf: geometricCDF(k, geometricP)
      });
    }
    return data;
  }, [geometricP]);

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

  const hypergeometricData = useMemo(() => {
    const data = [];
    const minK = Math.max(0, hyperDraws - (hyperN - hyperK));
    const maxK = Math.min(hyperDraws, hyperK);
    let cumulative = 0;
    
    for (let k = minK; k <= maxK; k++) {
      cumulative += hypergeometricPMF(k, hyperN, hyperK, hyperDraws);
      data.push({
        x: k,
        cdf: cumulative
      });
    }
    return data;
  }, [hyperN, hyperK, hyperDraws]);

  const poissonData = useMemo(() => {
    const data = [];
    const maxK = Math.min(30, poissonLambda + 15);
    let cumulative = 0;
    for (let k = 0; k <= maxK; k++) {
      cumulative += poissonPMF(k, poissonLambda);
      data.push({
        x: k,
        cdf: cumulative
      });
    }
    return data;
  }, [poissonLambda]);

  const distributions = {
    discreteUniform: {
      name: 'Discrete Uniform',
      description: 'CDF rises uniformly in equal steps',
      data: discreteUniformData,
      explanation: 'The cumulative distribution function (CDF) for the discrete uniform distribution is $F(k) = \\frac{\\lfloor k \\rfloor - a + 1}{b - a + 1}$ for $a \\leq k \\leq b$. The CDF increases in equal steps of $\\frac{1}{n}$ where $n = b - a + 1$ is the number of possible values. Each step represents one additional outcome being included in the cumulative probability. The CDF reaches 1.0 at the maximum value $b$ and remains at 1.0 for all larger values.',
      controls: (
        <>
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
        </>
      )
    },
    binomial: {
      name: 'Binomial',
      description: 'CDF for successes in n independent trials',
      data: binomialData,
      explanation: 'The binomial CDF is $F(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\binom{n}{i} p^i (1-p)^{n-i}$. This represents the probability of getting $k$ or fewer successes in $n$ trials. The CDF starts at $F(0) = (1-p)^n$ (the probability of zero successes) and increases with each additional possible outcome, reaching 1.0 at $k = n$. The shape of the CDF reflects the underlying binomial distribution: symmetric when $p = 0.5$, right-skewed when $p < 0.5$, and left-skewed when $p > 0.5$.',
      controls: (
        <>
          <div className="control-group">
            <label>
              Number of Trials (n): {binomialN}
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={binomialN}
                onChange={(e) => setBinomialN(parseInt(e.target.value))}
              />
            </label>
          </div>
          <div className="control-group">
            <label>
              Success Probability (p): {binomialP.toFixed(2)}
              <input
                type="range"
                min="0.01"
                max="0.99"
                step="0.01"
                value={binomialP}
                onChange={(e) => setBinomialP(parseFloat(e.target.value))}
              />
            </label>
          </div>
        </>
      )
    },
    geometric: {
      name: 'Geometric',
      description: 'CDF for waiting time until first success',
      data: geometricData,
      explanation: 'The geometric CDF has a closed form: $F(k) = P(X \\leq k) = 1 - (1-p)^k$ for $k \\geq 1$. This represents the probability that the first success occurs on or before trial $k$. The CDF starts at $F(1) = p$ (success on the first trial) and asymptotically approaches 1.0 as $k$ increases. The rate of increase depends on $p$: larger values of $p$ lead to faster convergence to 1.0, while smaller values result in a more gradual increase, reflecting the longer expected waiting time.',
      controls: (
        <div className="control-group">
          <label>
            Success Probability (p): {geometricP.toFixed(2)}
            <input
              type="range"
              min="0.05"
              max="0.95"
              step="0.05"
              value={geometricP}
              onChange={(e) => setGeometricP(parseFloat(e.target.value))}
            />
          </label>
        </div>
      )
    },
    negativeBinomial: {
      name: 'Negative Binomial',
      description: 'CDF for waiting time until r-th success',
      data: negativeBinomialData,
      explanation: 'The negative binomial CDF is $F(k) = P(X \\leq k) = \\sum_{i=r}^{k} \\binom{i-1}{r-1} p^r (1-p)^{i-r}$ for $k \\geq r$. This gives the probability that the $r$-th success occurs on or before trial $k$. The CDF begins at $k = r$ (minimum trials needed for $r$ successes) with value $F(r) = p^r$. As $k$ increases, the CDF approaches 1.0. The distribution generalizes the geometric distribution (which is the special case $r = 1$), and its shape depends on both the number of required successes $r$ and the success probability $p$.',
      controls: (
        <>
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
        </>
      )
    },
    hypergeometric: {
      name: 'Hypergeometric',
      description: 'CDF for sampling without replacement',
      data: hypergeometricData,
      explanation: 'The hypergeometric CDF is $F(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\frac{\\binom{K}{i} \\binom{N-K}{n-i}}{\\binom{N}{n}}$ for $\\max(0, n-(N-K)) \\leq k \\leq \\min(n, K)$. This represents the probability of drawing $k$ or fewer success items when sampling $n$ items without replacement from a population of size $N$ containing $K$ success items. The CDF is bounded by the minimum and maximum possible number of successes in the sample. Unlike the binomial CDF, the hypergeometric CDF accounts for the changing probability as items are drawn without replacement.',
      controls: (
        <>
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
        </>
      )
    },
    poisson: {
      name: 'Poisson',
      description: 'CDF for rare events over time',
      data: poissonData,
      explanation: 'The Poisson CDF is $F(k) = P(X \\leq k) = \\sum_{i=0}^{k} \\frac{\\lambda^i e^{-\\lambda}}{i!}$ for $k \\geq 0$. This gives the probability of observing $k$ or fewer events in the fixed interval. The CDF starts at $F(0) = e^{-\\lambda}$, which is the probability of observing zero events. As $k$ increases, the CDF approaches 1.0, with the rate of convergence depending on $\\lambda$. For larger values of $\\lambda$, the CDF increases more gradually across a wider range of $k$ values, while smaller $\\lambda$ values lead to faster convergence near $k = 0$.',
      controls: (
        <div className="control-group">
          <label>
            Rate Lambda (λ): {poissonLambda.toFixed(1)}
            <input
              type="range"
              min="0.5"
              max="15"
              step="0.5"
              value={poissonLambda}
              onChange={(e) => setPoissonLambda(parseFloat(e.target.value))}
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
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

      <p className="subtitle">Interactive visualization of cumulative distribution functions (CDF)</p>

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
            <h2 className="distribution-title">{currentDist.name} CDF</h2>
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
          <p className="explanation-text">{processContent(finalExplanation)}</p>
        </div>
      </div>
    </div>
  );
}