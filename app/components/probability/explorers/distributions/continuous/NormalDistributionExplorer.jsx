// import React, { useState, useMemo } from 'react';
// import GenericContinuousDistributionExplorer from './GenericContinuousDistributionExplorer';

// export default function NormalDistributionExplorer({ 
//   title = "Normal Distribution",
//   description = "Bell curve - the most important continuous distribution",
//   examples = [
//     'Heights and weights of populations',
//     'Measurement errors in scientific experiments',
//     'Test scores and IQ measurements',
//     'Blood pressure in healthy adults',
//     'Manufacturing tolerances and product dimensions',
//     'Returns on financial investments (short-term)'
//   ],
//   initialMu = 0,
//   initialSigma = 1,
//   minMu = -10,
//   maxMu = 10,
//   minSigma = 0.1,
//   maxSigma = 5,
//   stepMu = 0.1,
//   stepSigma = 0.1,
//   numPoints = 300
// }) {
//   const [mu, setMu] = useState(initialMu);
//   const [sigma, setSigma] = useState(initialSigma);

//   // Error function approximation for CDF calculation
//   const erf = (x) => {
//     // Abramowitz and Stegun approximation
//     const sign = x >= 0 ? 1 : -1;
//     x = Math.abs(x);
    
//     const a1 = 0.254829592;
//     const a2 = -0.284496736;
//     const a3 = 1.421413741;
//     const a4 = -1.453152027;
//     const a5 = 1.061405429;
//     const p = 0.3275911;
    
//     const t = 1.0 / (1.0 + p * x);
//     const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
//     return sign * y;
//   };

//   const normalPDF = (x, mu, sigma) => {
//     const z = (x - mu) / sigma;
//     return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
//   };

//   const normalCDF = (x, mu, sigma) => {
//     const z = (x - mu) / sigma;
//     return 0.5 * (1 + erf(z / Math.sqrt(2)));
//   };

//   const pdfData = useMemo(() => {
//     const result = [];
//     const range = 4 * sigma; // Show ±4 standard deviations
//     const minX = mu - range;
//     const maxX = mu + range;
//     const step = (maxX - minX) / numPoints;
    
//     for (let i = 0; i <= numPoints; i++) {
//       const x = minX + i * step;
//       result.push({
//         x: x,
//         density: normalPDF(x, mu, sigma)
//       });
//     }
    
//     return result;
//   }, [mu, sigma, numPoints]);

//   const cdfData = useMemo(() => {
//     const result = [];
//     const range = 4 * sigma;
//     const minX = mu - range;
//     const maxX = mu + range;
//     const step = (maxX - minX) / numPoints;
    
//     for (let i = 0; i <= numPoints; i++) {
//       const x = minX + i * step;
//       result.push({
//         x: x,
//         cumulativeProbability: normalCDF(x, mu, sigma)
//       });
//     }
    
//     return result;
//   }, [mu, sigma, numPoints]);

//   const statistics = useMemo(() => {
//     return {
//       mean: mu,
//       meanFormula: 'E[X] = μ',
//       variance: sigma * sigma,
//       varianceFormula: 'Var(X) = σ²',
//       stdDev: sigma,
//       stdDevFormula: 'σ',
//       mode: mu,
//       modeFormula: 'Mode = μ'
//     };
//   }, [mu, sigma]);

//   const parameters = useMemo(() => [
//     {
//       name: 'Mean',
//       symbol: 'μ',
//       value: mu.toFixed(2),
//       explanation: 'Center of the distribution (also median and mode)'
//     },
//     {
//       name: 'Standard Deviation',
//       symbol: 'σ',
//       value: sigma.toFixed(2),
//       explanation: 'Measure of spread around the mean'
//     },
//     {
//       name: 'Variance',
//       symbol: 'σ²',
//       value: (sigma * sigma).toFixed(2),
//       explanation: 'Square of the standard deviation'
//     }
//   ], [mu, sigma]);

//   const properties = useMemo(() => [
//     {
//       title: 'Support: X ∈ (-∞, ∞)',
//       explanation: `The normal distribution is defined for all real numbers from negative infinity to positive infinity. However, approximately 99.7% of the probability mass lies within μ ± 3σ, or [${(mu - 3*sigma).toFixed(2)}, ${(mu + 3*sigma).toFixed(2)}] for the current parameters.`
//     },
//     {
//       title: 'Symmetric Bell Curve',
//       explanation: `The distribution is perfectly symmetric around the mean μ = ${mu.toFixed(2)}. The probability density decreases smoothly on both sides following the characteristic bell shape. The mean, median, and mode are all equal, which is a unique property among continuous distributions.`
//     },
//     {
//       title: '68-95-99.7 Rule (Empirical Rule)',
//       explanation: `Approximately 68% of values fall within μ ± σ = [${(mu-sigma).toFixed(2)}, ${(mu+sigma).toFixed(2)}], 95% within μ ± 2σ = [${(mu-2*sigma).toFixed(2)}, ${(mu+2*sigma).toFixed(2)}], and 99.7% within μ ± 3σ = [${(mu-3*sigma).toFixed(2)}, ${(mu+3*sigma).toFixed(2)}]. This rule is fundamental for understanding spread in normally distributed data.`
//     },
//     {
//       title: 'Central Limit Theorem',
//       explanation: `The normal distribution appears naturally in many contexts due to the Central Limit Theorem: the sum (or average) of many independent random variables tends toward a normal distribution, regardless of the original distributions. This explains why many real-world phenomena follow a normal distribution.`
//     },
//     {
//       title: 'Standardization to Z-Score',
//       explanation: `Any normal distribution can be standardized using Z = (X - μ)/σ, transforming it to the standard normal distribution with mean 0 and standard deviation 1. This allows probabilities to be looked up in standard normal (Z) tables, which is how normal probabilities were historically calculated before computers.`
//     },
//     {
//       title: 'Maximum Entropy Distribution',
//       explanation: `Among all continuous distributions with a specified mean and variance, the normal distribution has the maximum entropy. This means it's the "most random" or "least informative" distribution given only knowledge of the mean and variance, making it a natural choice when these are the only constraints.`
//     }
//   ], [mu, sigma]);

//   const controls = (
//     <>
//       <div style={{ marginBottom: '15px' }}>
//         <label style={{
//           display: 'block',
//           fontWeight: '600',
//           color: '#2c3e50',
//           marginBottom: '6px',
//           fontSize: '13px'
//         }}>
//           Mean (μ): {mu.toFixed(1)}
//           <input
//             type="range"
//             min={minMu}
//             max={maxMu}
//             step={stepMu}
//             value={mu}
//             onChange={(e) => setMu(parseFloat(e.target.value))}
//             style={{
//               width: '100%',
//               height: '6px',
//               borderRadius: '3px',
//               background: '#ddd',
//               outline: 'none',
//               marginTop: '6px'
//             }}
//           />
//         </label>
//       </div>
//       <div>
//         <label style={{
//           display: 'block',
//           fontWeight: '600',
//           color: '#2c3e50',
//           marginBottom: '6px',
//           fontSize: '13px'
//         }}>
//           Standard Deviation (σ): {sigma.toFixed(1)}
//           <input
//             type="range"
//             min={minSigma}
//             max={maxSigma}
//             step={stepSigma}
//             value={sigma}
//             onChange={(e) => setSigma(parseFloat(e.target.value))}
//             style={{
//               width: '100%',
//               height: '6px',
//               borderRadius: '3px',
//               background: '#ddd',
//               outline: 'none',
//               marginTop: '6px'
//             }}
//           />
//         </label>
//       </div>
//     </>
//   );

//   const onCalculateCumulativeProbability = (x) => {
//     return normalCDF(x, mu, sigma);
//   };

//   const onCalculateStrictLessProbability = (x) => {
//     return normalCDF(x, mu, sigma);
//   };

//   const onCalculateGreaterEqualProbability = (x) => {
//     return 1 - normalCDF(x, mu, sigma);
//   };

//   const onCalculateStrictGreaterProbability = (x) => {
//     return 1 - normalCDF(x, mu, sigma);
//   };

//   const onCalculateRangeProbability = (a, b) => {
//     if (a > b) return 0;
//     return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
//   };

//   const onCalculateStrictRangeProbability = (a, b) => {
//     if (a >= b) return 0;
//     return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
//   };

//   const onCalculateLeftIncRangeProbability = (a, b) => {
//     if (a >= b) return 0;
//     return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
//   };

//   const onCalculateRightIncRangeProbability = (a, b) => {
//     if (a >= b) return 0;
//     return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
//   };

//   // Override the generic table display with Z-table
//   const customTableContent = (
//     <div style={{ padding: '15px' }}>
//       <div style={{ 
//         marginBottom: '15px', 
//         padding: '12px', 
//         background: '#fff3cd', 
//         borderLeft: '4px solid #ffc107',
//         borderRadius: '4px'
//       }}>
//         <p style={{ margin: 0, fontSize: '12px', color: '#856404', lineHeight: '1.5' }}>
//           <strong>Note:</strong> Unlike other distributions, normal distribution probabilities are obtained from standardized Z-tables rather than direct formulas. First convert X to Z-score: Z = (X - μ) / σ, then look up the probability in the standard normal table.
//         </p>
//       </div>

//       <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#2c3e50' }}>
//         Standard Normal (Z) Table - Reduced
//       </h4>
//       <p style={{ fontSize: '11px', color: '#7f8c8d', marginBottom: '10px' }}>
//         Showing Φ(z) = P(Z ≤ z) for selected z-values
//       </p>

//       <div style={{ overflowX: 'auto', maxHeight: '300px', overflowY: 'auto' }}>
//         <table style={{
//           width: '100%',
//           borderCollapse: 'collapse',
//           fontSize: '11px'
//         }}>
//           <thead>
//             <tr>
//               <th style={{
//                 background: '#f8f9fa',
//                 padding: '6px',
//                 textAlign: 'center',
//                 fontWeight: '600',
//                 color: '#2c3e50',
//                 border: '1px solid #e0e0e0',
//                 position: 'sticky',
//                 top: 0
//               }}>z</th>
//               <th style={{
//                 background: '#f8f9fa',
//                 padding: '6px',
//                 textAlign: 'center',
//                 fontWeight: '600',
//                 color: '#2c3e50',
//                 border: '1px solid #e0e0e0',
//                 position: 'sticky',
//                 top: 0
//               }}>Φ(z)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {[-3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0].map(z => {
//               const prob = normalCDF(z, 0, 1);
//               return (
//                 <tr key={z}>
//                   <td style={{
//                     padding: '6px',
//                     textAlign: 'center',
//                     border: '1px solid #e0e0e0',
//                     fontWeight: '500'
//                   }}>{z.toFixed(1)}</td>
//                   <td style={{
//                     padding: '6px',
//                     textAlign: 'center',
//                     border: '1px solid #e0e0e0'
//                   }}>{prob.toFixed(4)}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div style={{ marginTop: '15px', textAlign: 'center' }}>
//         <a 
//           href="/tables/probability/normal-distribution" 
//           style={{
//             display: 'inline-block',
//             padding: '8px 16px',
//             background: '#677ae4',
//             color: 'white',
//             textDecoration: 'none',
//             borderRadius: '4px',
//             fontSize: '12px',
//             fontWeight: '600'
//           }}
//         >
//           View Full Z-Table →
//         </a>
//       </div>
//     </div>
//   );

//   const distributionData = {
//     title,
//     description,
//     pdfData,
//     cdfData,
//     controls,
//     parameters,
//     statistics,
//     properties,
//     examples,
//     onCalculateCumulativeProbability,
//     onCalculateStrictLessProbability,
//     onCalculateGreaterEqualProbability,
//     onCalculateStrictGreaterProbability,
//     onCalculateRangeProbability,
//     onCalculateStrictRangeProbability,
//     onCalculateLeftIncRangeProbability,
//     onCalculateRightIncRangeProbability,
//     customTableContent, // Pass custom table
//     showZScoreInCalculator: true, // Flag to show Z-score in results
//     mu, // Pass mu for Z-score calculation display
//     sigma // Pass sigma for Z-score calculation display
//   };

//   return <GenericContinuousDistributionExplorer distribution={distributionData} />;
// }


import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import GenericContinuousDistributionExplorer from './GenericContinuousDistributionExplorer';

export default function NormalDistributionExplorer({ 
  title = "Normal Distribution",
  description = "Bell curve - the most important continuous distribution",
  examples = [
    'Heights and weights of populations',
    'Measurement errors in scientific experiments',
    'Test scores and IQ measurements',
    'Blood pressure in healthy adults',
    'Manufacturing tolerances and product dimensions',
    'Returns on financial investments (short-term)'
  ],
  initialMu = 0,
  initialSigma = 1,
  minMu = -10,
  maxMu = 10,
  minSigma = 0.1,
  maxSigma = 5,
  stepMu = 0.1,
  stepSigma = 0.1,
  numPoints = 300
}) {
  const [mu, setMu] = useState(initialMu);
  const [sigma, setSigma] = useState(initialSigma);

  // Error function approximation for CDF calculation
  const erf = (x) => {
    // Abramowitz and Stegun approximation
    const sign = x >= 0 ? 1 : -1;
    x = Math.abs(x);
    
    const a1 = 0.254829592;
    const a2 = -0.284496736;
    const a3 = 1.421413741;
    const a4 = -1.453152027;
    const a5 = 1.061405429;
    const p = 0.3275911;
    
    const t = 1.0 / (1.0 + p * x);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    
    return sign * y;
  };

  const normalPDF = (x, mu, sigma) => {
    const z = (x - mu) / sigma;
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
  };

  const normalCDF = (x, mu, sigma) => {
    const z = (x - mu) / sigma;
    return 0.5 * (1 + erf(z / Math.sqrt(2)));
  };

  const pdfData = useMemo(() => {
    const result = [];
    const range = 4 * sigma; // Show ±4 standard deviations
    const minX = mu - range;
    const maxX = mu + range;
    const step = (maxX - minX) / numPoints;
    
    for (let i = 0; i <= numPoints; i++) {
      const x = minX + i * step;
      result.push({
        x: x,
        density: normalPDF(x, mu, sigma)
      });
    }
    
    return result;
  }, [mu, sigma, numPoints]);

  const cdfData = useMemo(() => {
    const result = [];
    const range = 4 * sigma;
    const minX = mu - range;
    const maxX = mu + range;
    const step = (maxX - minX) / numPoints;
    
    for (let i = 0; i <= numPoints; i++) {
      const x = minX + i * step;
      result.push({
        x: x,
        cumulativeProbability: normalCDF(x, mu, sigma)
      });
    }
    
    return result;
  }, [mu, sigma, numPoints, normalCDF]);

  const statistics = useMemo(() => {
    return {
      mean: mu,
      meanFormula: 'E[X] = μ',
      variance: sigma * sigma,
      varianceFormula: 'Var(X) = σ²',
      stdDev: sigma,
      stdDevFormula: 'σ',
      mode: mu,
      modeFormula: 'Mode = μ'
    };
  }, [mu, sigma]);

  const parameters = useMemo(() => [
    {
      name: 'Mean',
      symbol: 'μ',
      value: mu.toFixed(2),
      explanation: 'Center of the distribution (also median and mode)'
    },
    {
      name: 'Standard Deviation',
      symbol: 'σ',
      value: sigma.toFixed(2),
      explanation: 'Measure of spread around the mean'
    },
    {
      name: 'Variance',
      symbol: 'σ²',
      value: (sigma * sigma).toFixed(2),
      explanation: 'Square of the standard deviation'
    }
  ], [mu, sigma]);

  const properties = useMemo(() => [
    {
      title: 'Support: X ∈ (-∞, ∞)',
      explanation: `The normal distribution is defined for all real numbers from negative infinity to positive infinity. However, approximately 99.7% of the probability mass lies within μ ± 3σ, or [${(mu - 3*sigma).toFixed(2)}, ${(mu + 3*sigma).toFixed(2)}] for the current parameters.`
    },
    {
      title: 'Symmetric Bell Curve',
      explanation: `The distribution is perfectly symmetric around the mean μ = ${mu.toFixed(2)}. The probability density decreases smoothly on both sides following the characteristic bell shape. The mean, median, and mode are all equal, which is a unique property among continuous distributions.`
    },
    {
      title: '68-95-99.7 Rule (Empirical Rule)',
      explanation: `Approximately 68% of values fall within μ ± σ = [${(mu-sigma).toFixed(2)}, ${(mu+sigma).toFixed(2)}], 95% within μ ± 2σ = [${(mu-2*sigma).toFixed(2)}, ${(mu+2*sigma).toFixed(2)}], and 99.7% within μ ± 3σ = [${(mu-3*sigma).toFixed(2)}, ${(mu+3*sigma).toFixed(2)}]. This rule is fundamental for understanding spread in normally distributed data.`
    },
    {
      title: 'Central Limit Theorem',
      explanation: `The normal distribution appears naturally in many contexts due to the Central Limit Theorem: the sum (or average) of many independent random variables tends toward a normal distribution, regardless of the original distributions. This explains why many real-world phenomena follow a normal distribution.`
    },
    {
      title: 'Standardization to Z-Score',
      explanation: `Any normal distribution can be standardized using Z = (X - μ)/σ, transforming it to the standard normal distribution with mean 0 and standard deviation 1. This allows probabilities to be looked up in standard normal (Z) tables, which is how normal probabilities were historically calculated before computers.`
    },
    {
      title: 'Maximum Entropy Distribution',
      explanation: `Among all continuous distributions with a specified mean and variance, the normal distribution has the maximum entropy. This means it's the "most random" or "least informative" distribution given only knowledge of the mean and variance, making it a natural choice when these are the only constraints.`
    }
  ], [mu, sigma]);

  const controls = (
    <>
      <div style={{ marginBottom: '15px' }}>
        <label style={{
          display: 'block',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '6px',
          fontSize: '13px'
        }}>
          Mean (μ): {mu.toFixed(1)}
          <input
            type="range"
            min={minMu}
            max={maxMu}
            step={stepMu}
            value={mu}
            onChange={(e) => setMu(parseFloat(e.target.value))}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: '#ddd',
              outline: 'none',
              marginTop: '6px'
            }}
          />
        </label>
      </div>
      <div>
        <label style={{
          display: 'block',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '6px',
          fontSize: '13px'
        }}>
          Standard Deviation (σ): {sigma.toFixed(1)}
          <input
            type="range"
            min={minSigma}
            max={maxSigma}
            step={stepSigma}
            value={sigma}
            onChange={(e) => setSigma(parseFloat(e.target.value))}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: '#ddd',
              outline: 'none',
              marginTop: '6px'
            }}
          />
        </label>
      </div>
    </>
  );

  const onCalculateCumulativeProbability = (x) => {
    return normalCDF(x, mu, sigma);
  };

  const onCalculateStrictLessProbability = (x) => {
    return normalCDF(x, mu, sigma);
  };

  const onCalculateGreaterEqualProbability = (x) => {
    return 1 - normalCDF(x, mu, sigma);
  };

  const onCalculateStrictGreaterProbability = (x) => {
    return 1 - normalCDF(x, mu, sigma);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (a > b) return 0;
    return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (a >= b) return 0;
    return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (a >= b) return 0;
    return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (a >= b) return 0;
    return normalCDF(b, mu, sigma) - normalCDF(a, mu, sigma);
  };

  // Override the generic table display with Z-table
  const customTableContent = (
    <div style={{ padding: '15px' }}>
      <div style={{ 
        marginBottom: '15px', 
        padding: '12px', 
        background: '#fff3cd', 
        borderLeft: '4px solid #ffc107',
        borderRadius: '4px'
      }}>
        <p style={{ margin: 0, fontSize: '12px', color: '#856404', lineHeight: '1.5' }}>
          <strong>Note:</strong> Unlike other distributions, normal distribution probabilities are obtained from standardized Z-tables rather than direct formulas. First convert X to Z-score: Z = (X - μ) / σ, then look up the probability in the standard normal table.
        </p>
      </div>

      <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '10px', color: '#2c3e50' }}>
        Standard Normal (Z) Table - Reduced
      </h4>
      <p style={{ fontSize: '11px', color: '#7f8c8d', marginBottom: '10px' }}>
        Showing Φ(z) = P(Z ≤ z) for selected z-values
      </p>

      <div style={{ overflowX: 'auto', maxHeight: '300px', overflowY: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '11px'
        }}>
          <thead>
            <tr>
              <th style={{
                background: '#f8f9fa',
                padding: '6px',
                textAlign: 'center',
                fontWeight: '600',
                color: '#2c3e50',
                border: '1px solid #e0e0e0',
                position: 'sticky',
                top: 0
              }}>z</th>
              <th style={{
                background: '#f8f9fa',
                padding: '6px',
                textAlign: 'center',
                fontWeight: '600',
                color: '#2c3e50',
                border: '1px solid #e0e0e0',
                position: 'sticky',
                top: 0
              }}>Φ(z)</th>
            </tr>
          </thead>
          <tbody>
            {[-3.0, -2.5, -2.0, -1.5, -1.0, -0.5, 0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0].map(z => {
              const prob = normalCDF(z, 0, 1);
              return (
                <tr key={z}>
                  <td style={{
                    padding: '6px',
                    textAlign: 'center',
                    border: '1px solid #e0e0e0',
                    fontWeight: '500'
                  }}>{z.toFixed(1)}</td>
                  <td style={{
                    padding: '6px',
                    textAlign: 'center',
                    border: '1px solid #e0e0e0'
                  }}>{prob.toFixed(4)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <Link 
          href="/tables/probability/normal-distribution"
          style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: '#677ae4',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '600'
          }}
        >
          View Full Z-Table →
        </Link>
      </div>
    </div>
  );

  const distributionData = {
    title,
    description,
    pdfData,
    cdfData,
    controls,
    parameters,
    statistics,
    properties,
    examples,
    onCalculateCumulativeProbability,
    onCalculateStrictLessProbability,
    onCalculateGreaterEqualProbability,
    onCalculateStrictGreaterProbability,
    onCalculateRangeProbability,
    onCalculateStrictRangeProbability,
    onCalculateLeftIncRangeProbability,
    onCalculateRightIncRangeProbability,
    customTableContent, // Pass custom table
    showZScoreInCalculator: true, // Flag to show Z-score in results
    mu, // Pass mu for Z-score calculation display
    sigma // Pass sigma for Z-score calculation display
  };

  return <GenericContinuousDistributionExplorer distribution={distributionData} />;
}