// import { useState, useMemo } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { processContent } from '@/app/utils/contentProcessor';

// export default function DiscreteProbabilityDistributions({ explanationsOverride = {} }) {
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

//   const discreteUniformData = useMemo(() => {
//     const data = [];
//     for (let k = uniformMin; k <= uniformMax; k++) {
//       data.push({
//         x: k,
//         probability: discreteUniformPMF(k, uniformMin, uniformMax)
//       });
//     }
//     return data;
//   }, [uniformMin, uniformMax]);

//   const binomialData = useMemo(() => {
//     const data = [];
//     for (let k = 0; k <= binomialN; k++) {
//       data.push({
//         x: k,
//         probability: binomialPMF(k, binomialN, binomialP)
//       });
//     }
//     return data;
//   }, [binomialN, binomialP]);

//   const geometricData = useMemo(() => {
//     const data = [];
//     const maxK = Math.min(50, Math.ceil(10 / geometricP));
//     for (let k = 1; k <= maxK; k++) {
//       const prob = geometricPMF(k, geometricP);
//       if (prob > 0.001) {
//         data.push({
//           x: k,
//           probability: prob
//         });
//       }
//     }
//     return data;
//   }, [geometricP]);

//   const negativeBinomialData = useMemo(() => {
//     const data = [];
//     const maxK = Math.min(100, Math.ceil(negBinomialR + 30 / negBinomialP));
//     for (let k = negBinomialR; k <= maxK; k++) {
//       const prob = negativeBinomialPMF(k, negBinomialR, negBinomialP);
//       if (prob > 0.001) {
//         data.push({
//           x: k,
//           probability: prob
//         });
//       }
//     }
//     return data;
//   }, [negBinomialR, negBinomialP]);

//   const hypergeometricData = useMemo(() => {
//     const data = [];
//     const minK = Math.max(0, hyperDraws - (hyperN - hyperK));
//     const maxK = Math.min(hyperDraws, hyperK);
    
//     for (let k = minK; k <= maxK; k++) {
//       data.push({
//         x: k,
//         probability: hypergeometricPMF(k, hyperN, hyperK, hyperDraws)
//       });
//     }
//     return data;
//   }, [hyperN, hyperK, hyperDraws]);

//   const poissonData = useMemo(() => {
//     const data = [];
//     const maxK = Math.min(30, poissonLambda + 15);
//     for (let k = 0; k <= maxK; k++) {
//       data.push({
//         x: k,
//         probability: poissonPMF(k, poissonLambda)
//       });
//     }
//     return data;
//   }, [poissonLambda]);

//   const distributions = {
//     discreteUniform: {
//       name: 'Discrete Uniform',
//       description: 'Equal probability for finite outcomes',
//       data: discreteUniformData,
//       explanation: 'A discrete uniform distribution assigns equal probability to each value in a finite range. The probability mass function is P(X = k) = 1/(b - a + 1) for a ≤ k ≤ b. The expected value is E[X] = (a + b) / 2, and the variance is Var(X) = (n² - 1) / 12, where n = b - a + 1. Common examples include rolling a fair die, selecting a random card from a deck, or generating a random number from a finite range.',
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
//       description: 'Successes in n trials with probability p each',
//       data: binomialData,
//       explanation: 'The binomial distribution models the number of successes in n independent trials, each with probability p of success. The probability mass function is P(X = k) = C(n,k) × p^k × (1-p)^(n-k), where C(n,k) is the binomial coefficient. The expected value is E[X] = np and the variance is Var(X) = np(1-p). This distribution is commonly used for modeling coin flips (number of heads in n tosses), quality control testing (defective items in a batch), and clinical trial success rates.',
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
//       description: 'Trials until first success (probability p)',
//       data: geometricData,
//       explanation: 'The geometric distribution models the number of trials needed to get the first success in repeated independent trials. The probability mass function is P(X = k) = (1-p)^(k-1) × p. The expected value is E[X] = 1/p and the variance is Var(X) = (1-p) / p². Common applications include counting coin flips until the first heads, attempts until the first sale is made, or trials until equipment failure occurs.',
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
//       description: 'Trials until r-th success (generalization of geometric)',
//       data: negativeBinomialData,
//       explanation: 'The negative binomial distribution models the number of trials needed to achieve r successes in repeated independent trials. The probability mass function is P(X = k) = C(k-1,r-1) × p^r × (1-p)^(k-r). The expected value is E[X] = r/p and the variance is Var(X) = r(1-p) / p². This distribution is used for modeling scenarios like the number of calls until r sales are made, games played until r wins are achieved, or attempts until r successes occur.',
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
//       description: 'Sampling without replacement from finite population',
//       data: hypergeometricData,
//       explanation: 'The hypergeometric distribution models the number of successes when sampling without replacement from a finite population. The probability mass function is P(X = k) = [C(K,k) × C(N-K,n-k)] / C(N,n), where N is the population size, K is the number of success states in the population, and n is the number of draws. The expected value is E[X] = n × K/N and the variance is Var(X) = n × (K/N) × (1-K/N) × (N-n)/(N-1). Applications include finding defective items in a sample, analyzing card hands dealt without replacement, and quality control sampling.',
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
//       description: 'Rare events over time interval (rate λ)',
//       data: poissonData,
//       explanation: 'The Poisson distribution models the number of events occurring in a fixed interval when events happen at a constant average rate. The probability mass function is P(X = k) = (λ^k × e^(-λ)) / k!, where λ is the average rate of events. Both the expected value and variance equal λ: E[X] = λ and Var(X) = λ. Common applications include customer arrivals per hour, website hits per minute, radioactive decay events, and other scenarios where rare events occur independently at a constant average rate.',
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
//         }

//         .tab:hover {
//           background: #f0f4f8;
//           transform: translateY(-2px);
//           border-color: #1e5a8e;
//         }

//         .tab.active {
//           background: #245de1;
//           color: white;
//           border-color: #1e5a8e;
//           box-shadow: 0 4px 15px rgba(30, 90, 142, 0.3);
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
//           box-shadow: 0 2px 6px rgba(30, 90, 142, 0.3);
//         }

//         input[type="range"]::-moz-range-thumb {
//           width: 20px;
//           height: 20px;
//           border-radius: 50%;
//           background: #245de1;
//           cursor: pointer;
//           box-shadow: 0 2px 6px rgba(30, 90, 142, 0.3);
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
//           border-bottom: 2px solid #1e5a8e;
//         }

//         .explanation-section {
//           margin-bottom: 20px;
//         }

//         .explanation-section:last-child {
//           margin-bottom: 0;
//         }

//         .explanation-label {
//           font-size: 13px;
//           font-weight: 700;
//           color: #1e5a8e;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           margin-bottom: 8px;
//         }

//         .explanation-text {
//           font-size: 14px;
//           color: #2c3e50;
//           line-height: 1.6;
//           margin-bottom: 12px;
//         }

//         .explanation-formula {
//           font-family: 'Courier New', monospace;
//           font-size: 13px;
//           background: #f0f4f8;
//           padding: 10px;
//           border-radius: 6px;
//           color: #1a3a52;
//           border-left: 3px solid #1e5a8e;
//         }

//         .examples-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .examples-list li {
//           font-size: 13px;
//           color: #2c3e50;
//           padding: 8px 0;
//           padding-left: 20px;
//           position: relative;
//         }

//         .examples-list li:before {
//           content: '→';
//           position: absolute;
//           left: 0;
//           color: #1e5a8e;
//           font-weight: 700;
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

//       <h1>Discrete Probability Distributions</h1>
//       <p className="subtitle">Interactive visualization of six fundamental discrete distributions</p>

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
//             <h2 className="distribution-title">{currentDist.name}</h2>
//             <p className="distribution-description">{currentDist.description}</p>
//           </div>
          
//           <div className="controls">
//             {currentDist.controls}
//           </div>

//           <div className="chart-container">
//             <ResponsiveContainer width="100%" height={450}>
//               <BarChart data={currentDist.data}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
//                 <XAxis 
//                   dataKey="x" 
//                   label={{ value: 'Value (k)', position: 'insideBottom', offset: -5, style: { fontWeight: 600 } }}
//                   stroke="#1a3a52"
//                 />
//                 <YAxis 
//                   label={{ value: 'Probability P(X = k)', angle: -90, position: 'insideLeft', style: { fontWeight: 600 } }}
//                   stroke="#1a3a52"
//                 />
//                 <Tooltip 
//                   formatter={(value) => value.toFixed(6)}
//                   labelFormatter={(label) => `k = ${label}`}
//                   contentStyle={{ 
//                     background: 'white', 
//                     border: '2px solid #1e5a8e',
//                     borderRadius: '8px',
//                     fontWeight: 600
//                   }}
//                 />
//                 <Bar 
//                   dataKey="probability" 
//                   fill="#1e5a8e"
//                   radius={[6, 6, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="explanation-panel">
//           <h3 className="explanation-title">Explanation</h3>
//           <p className="explanation-text">{processContent(finalExplanation)}</p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { processContent } from '@/app/utils/contentProcessor';

export default function DiscreteProbabilityDistributions({ explanationsOverride = {} }) {
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

  const discreteUniformData = useMemo(() => {
    const data = [];
    for (let k = uniformMin; k <= uniformMax; k++) {
      data.push({
        x: k,
        probability: discreteUniformPMF(k, uniformMin, uniformMax)
      });
    }
    return data;
  }, [uniformMin, uniformMax]);

  const binomialData = useMemo(() => {
    const data = [];
    for (let k = 0; k <= binomialN; k++) {
      data.push({
        x: k,
        probability: binomialPMF(k, binomialN, binomialP)
      });
    }
    return data;
  }, [binomialN, binomialP]);

  const geometricData = useMemo(() => {
    const data = [];
    const maxK = Math.min(50, Math.ceil(10 / geometricP));
    for (let k = 1; k <= maxK; k++) {
      const prob = geometricPMF(k, geometricP);
      if (prob > 0.001) {
        data.push({
          x: k,
          probability: prob
        });
      }
    }
    return data;
  }, [geometricP]);

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

  const poissonData = useMemo(() => {
    const data = [];
    const maxK = Math.min(30, poissonLambda + 15);
    for (let k = 0; k <= maxK; k++) {
      data.push({
        x: k,
        probability: poissonPMF(k, poissonLambda)
      });
    }
    return data;
  }, [poissonLambda]);

  const distributions = {
    discreteUniform: {
      name: 'Discrete Uniform',
      description: 'Equal probability for finite outcomes',
      data: discreteUniformData,
      explanation: 'A discrete uniform distribution assigns equal probability to each value in a finite range. The probability mass function is $P(X = k) = \\frac{1}{b - a + 1}$ for $a \\leq k \\leq b$. The expected value is $E[X] = \\frac{a + b}{2}$, and the variance is $\\text{Var}(X) = \\frac{n^2 - 1}{12}$, where $n = b - a + 1$. Common examples include rolling a fair die, selecting a random card from a deck, or generating a random number from a finite range.',
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
      description: 'Successes in n trials with probability p each',
      data: binomialData,
      explanation: 'The binomial distribution models the number of successes in $n$ independent trials, each with probability $p$ of success. The probability mass function is $P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}$, where $\\binom{n}{k}$ is the binomial coefficient. The expected value is $E[X] = np$ and the variance is $\\text{Var}(X) = np(1-p)$. This distribution is commonly used for modeling coin flips (number of heads in $n$ tosses), quality control testing (defective items in a batch), and clinical trial success rates.',
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
      description: 'Trials until first success (probability p)',
      data: geometricData,
      explanation: 'The geometric distribution models the number of trials needed to get the first success in repeated independent trials. The probability mass function is $P(X = k) = (1-p)^{k-1} p$. The expected value is $E[X] = \\frac{1}{p}$ and the variance is $\\text{Var}(X) = \\frac{1-p}{p^2}$. Common applications include counting coin flips until the first heads, attempts until the first sale is made, or trials until equipment failure occurs.',
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
      description: 'Trials until r-th success (generalization of geometric)',
      data: negativeBinomialData,
      explanation: 'The negative binomial distribution models the number of trials needed to achieve $r$ successes in repeated independent trials. The probability mass function is $P(X = k) = \\binom{k-1}{r-1} p^r (1-p)^{k-r}$. The expected value is $E[X] = \\frac{r}{p}$ and the variance is $\\text{Var}(X) = \\frac{r(1-p)}{p^2}$. This distribution is used for modeling scenarios like the number of calls until $r$ sales are made, games played until $r$ wins are achieved, or attempts until $r$ successes occur.',
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
      description: 'Sampling without replacement from finite population',
      data: hypergeometricData,
      explanation: 'The hypergeometric distribution models the number of successes when sampling without replacement from a finite population. The probability mass function is $P(X = k) = \\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}$, where $N$ is the population size, $K$ is the number of success states in the population, and $n$ is the number of draws. The expected value is $E[X] = n \\cdot \\frac{K}{N}$ and the variance is $\\text{Var}(X) = n \\cdot \\frac{K}{N} \\cdot \\left(1-\\frac{K}{N}\\right) \\cdot \\frac{N-n}{N-1}$. Applications include finding defective items in a sample, analyzing card hands dealt without replacement, and quality control sampling.',
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
      description: 'Rare events over time interval (rate λ)',
      data: poissonData,
      explanation: 'The Poisson distribution models the number of events occurring in a fixed interval when events happen at a constant average rate. The probability mass function is $P(X = k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$, where $\\lambda$ is the average rate of events. Both the expected value and variance equal $\\lambda$: $E[X] = \\lambda$ and $\\text{Var}(X) = \\lambda$. Common applications include customer arrivals per hour, website hits per minute, radioactive decay events, and other scenarios where rare events occur independently at a constant average rate.',
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
          font-size:18px;
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

        .explanation-section {
          margin-bottom: 20px;
        }

        .explanation-section:last-child {
          margin-bottom: 0;
        }

        .explanation-label {
          font-size: 13px;
          font-weight: 700;
          color: #1e5a8e;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .explanation-text {
          font-size: 18px;
          color: #2c3e50;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .explanation-formula {
          font-family: 'Courier New', monospace;
          font-size: 13px;
          background: #f0f4f8;
          padding: 10px;
          border-radius: 6px;
          color: #1a3a52;
          border-left: 3px solid #1e5a8e;
        }

        .examples-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .examples-list li {
          font-size: 13px;
          color: #2c3e50;
          padding: 8px 0;
          padding-left: 20px;
          position: relative;
        }

        .examples-list li:before {
          content: '→';
          position: absolute;
          left: 0;
          color: #1e5a8e;
          font-weight: 700;
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

      {/* <h1>Discrete Probability Distributions</h1> */}
      <p className="subtitle">Interactive visualization of six fundamental discrete distributions</p>

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
            <h2 className="distribution-title">{currentDist.name}</h2>
            <p className="distribution-description">{currentDist.description}</p>
          </div>
          
          <div className="controls">
            {currentDist.controls}
          </div>

          <div className="chart-container">
            <ResponsiveContainer width="100%" height={450}>
              <BarChart data={currentDist.data}>
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
          <p className="explanation-text">{processContent(finalExplanation)}</p>
        </div>
      </div>
    </div>
  );
}