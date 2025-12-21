// // import React, { useState, useMemo } from 'react';
// // import { GenericDistributionVisualization } from './GenericDistributionVisualizer';

// // function DiscreteUniformDistribution({ 
// //   title,
// //   description,
// //   examples,
// //   initialMin,
// //   initialMax,
// //   minRange,
// //   maxRange
// // }) {
// //   const [uniformMin, setUniformMin] = useState(initialMin);
// //   const [uniformMax, setUniformMax] = useState(initialMax);

// //   const discreteUniformPMF = (k, a, b) => {
// //     if (k < a || k > b) return 0;
// //     return 1 / (b - a + 1);
// //   };

// //   const pmfData = useMemo(() => {
// //     const result = [];
// //     for (let k = uniformMin; k <= uniformMax; k++) {
// //       result.push({
// //         x: k,
// //         probability: discreteUniformPMF(k, uniformMin, uniformMax)
// //       });
// //     }
// //     return result;
// //   }, [uniformMin, uniformMax]);

// //   const cdfData = useMemo(() => {
// //     const result = [];
// //     let cumulative = 0;
// //     for (let k = uniformMin; k <= uniformMax; k++) {
// //       cumulative += discreteUniformPMF(k, uniformMin, uniformMax);
// //       result.push({
// //         x: k,
// //         cumulativeProbability: cumulative
// //       });
// //     }
// //     return result;
// //   }, [uniformMin, uniformMax]);

// //   const statistics = useMemo(() => {
// //     const n = uniformMax - uniformMin + 1;
// //     const mean = (uniformMin + uniformMax) / 2;
// //     const variance = (n * n - 1) / 12;
// //     const stdDev = Math.sqrt(variance);
    
// //     return {
// //       mean,
// //       meanFormula: 'E[X] = (a + b) / 2',
// //       variance,
// //       varianceFormula: 'Var(X) = (n² - 1) / 12',
// //       stdDev,
// //       stdDevFormula: 'σ = √Var(X)',
// //       mode: 'All values',
// //       modeFormula: 'Every value has equal probability'
// //     };
// //   }, [uniformMin, uniformMax]);

// //   const parameters = useMemo(() => [
// //     {
// //       name: 'Minimum Value',
// //       symbol: 'a',
// //       value: uniformMin,
// //       explanation: 'The smallest possible value in the distribution'
// //     },
// //     {
// //       name: 'Maximum Value',
// //       symbol: 'b',
// //       value: uniformMax,
// //       explanation: 'The largest possible value in the distribution'
// //     },
// //     {
// //       name: 'Number of Values',
// //       symbol: 'n',
// //       value: uniformMax - uniformMin + 1,
// //       explanation: 'Total count of distinct values (n = b - a + 1)'
// //     }
// //   ], [uniformMin, uniformMax]);

// //   const properties = useMemo(() => [
// //     {
// //       title: `Support: X ∈ {${uniformMin}, ${uniformMin + 1}, ..., ${uniformMax}}`,
// //       explanation: `The support of a distribution is the set of all possible values that the random variable can take. For the discrete uniform distribution, this includes all integers from the minimum value (${uniformMin}) to the maximum value (${uniformMax}), inclusive. This means there are exactly ${uniformMax - uniformMin + 1} possible outcomes.`
// //     },
// //     {
// //       title: 'Equal Probability (1/n)',
// //       explanation: `Every outcome in the discrete uniform distribution has the exact same probability of occurring. Since there are ${uniformMax - uniformMin + 1} possible values, each one has a probability of 1/${uniformMax - uniformMin + 1} ≈ ${(1/(uniformMax - uniformMin + 1)).toFixed(4)}. This is what makes it "uniform" - the probability is distributed equally across all values.`
// //     },
// //     {
// //       title: 'Maximum Entropy Distribution',
// //       explanation: `Among all discrete distributions with a finite support of n values, the uniform distribution has the highest entropy. This means it represents the state of maximum uncertainty - when you have no reason to prefer one outcome over another. It's the "fairest" or most unbiased distribution possible for a given set of outcomes.`
// //     },
// //     {
// //       title: 'Symmetric Around Mean',
// //       explanation: `The distribution is perfectly symmetric around its expected value (mean = ${((uniformMin + uniformMax) / 2).toFixed(2)}). This means the probability mass is balanced equally on both sides of the center. For every value below the mean, there's a corresponding value above the mean with equal probability.`
// //     },
// //     {
// //       title: 'Memoryless (Independence)',
// //       explanation: `Each draw from a discrete uniform distribution is independent of previous draws. Past outcomes do not affect future probabilities - the probability of getting any particular value remains 1/n regardless of what has happened before. This property is crucial for modeling random processes where each trial is truly independent.`
// //     }
// //   ], [uniformMin, uniformMax]);

// //   const controls = (
// //     <>
// //       <div style={{ marginBottom: '15px' }}>
// //         <label style={{
// //           display: 'block',
// //           fontWeight: '600',
// //           color: '#2c3e50',
// //           marginBottom: '6px',
// //           fontSize: '13px'
// //         }}>
// //           Minimum Value (a): {uniformMin}
// //           <input
// //             type="range"
// //             min={minRange}
// //             max={maxRange}
// //             step="1"
// //             value={uniformMin}
// //             onChange={(e) => setUniformMin(Math.min(parseInt(e.target.value), uniformMax - 1))}
// //             style={{
// //               width: '100%',
// //               height: '6px',
// //               borderRadius: '3px',
// //               background: '#ddd',
// //               outline: 'none',
// //               marginTop: '6px'
// //             }}
// //           />
// //         </label>
// //       </div>
// //       <div>
// //         <label style={{
// //           display: 'block',
// //           fontWeight: '600',
// //           color: '#2c3e50',
// //           marginBottom: '6px',
// //           fontSize: '13px'
// //         }}>
// //           Maximum Value (b): {uniformMax}
// //           <input
// //             type="range"
// //             min={minRange}
// //             max={maxRange}
// //             step="1"
// //             value={uniformMax}
// //             onChange={(e) => setUniformMax(Math.max(parseInt(e.target.value), uniformMin + 1))}
// //             style={{
// //               width: '100%',
// //               height: '6px',
// //               borderRadius: '3px',
// //               background: '#ddd',
// //               outline: 'none',
// //               marginTop: '6px'
// //             }}
// //           />
// //         </label>
// //       </div>
// //     </>
// //   );

// //   const onCalculatePointProbability = (k) => {
// //     return discreteUniformPMF(k, uniformMin, uniformMax);
// //   };

// //   const onCalculateCumulativeProbability = (k) => {
// //     if (k < uniformMin) return 0;
// //     if (k >= uniformMax) return 1;
// //     return (k - uniformMin + 1) / (uniformMax - uniformMin + 1);
// //   };

// //   const onCalculateStrictLessProbability = (k) => {
// //     if (k <= uniformMin) return 0;
// //     if (k > uniformMax) return 1;
// //     return (k - uniformMin) / (uniformMax - uniformMin + 1);
// //   };

// //   const onCalculateGreaterEqualProbability = (k) => {
// //     if (k <= uniformMin) return 1;
// //     if (k > uniformMax) return 0;
// //     return (uniformMax - k + 1) / (uniformMax - uniformMin + 1);
// //   };

// //   const onCalculateStrictGreaterProbability = (k) => {
// //     if (k < uniformMin) return 1;
// //     if (k >= uniformMax) return 0;
// //     return (uniformMax - k) / (uniformMax - uniformMin + 1);
// //   };

// //   const onCalculateRangeProbability = (a, b) => {
// //     if (b < uniformMin || a > uniformMax) return 0;
// //     const effectiveA = Math.max(a, uniformMin);
// //     const effectiveB = Math.min(b, uniformMax);
// //     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
// //   };

// //   const onCalculateStrictRangeProbability = (a, b) => {
// //     if (b <= uniformMin || a >= uniformMax) return 0;
// //     const effectiveA = Math.max(a + 1, uniformMin);
// //     const effectiveB = Math.min(b - 1, uniformMax);
// //     if (effectiveA > effectiveB) return 0;
// //     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
// //   };

// //   const onCalculateLeftIncRangeProbability = (a, b) => {
// //     if (b <= uniformMin || a > uniformMax) return 0;
// //     const effectiveA = Math.max(a, uniformMin);
// //     const effectiveB = Math.min(b - 1, uniformMax);
// //     if (effectiveA > effectiveB) return 0;
// //     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
// //   };

// //   const onCalculateRightIncRangeProbability = (a, b) => {
// //     if (b < uniformMin || a >= uniformMax) return 0;
// //     const effectiveA = Math.max(a + 1, uniformMin);
// //     const effectiveB = Math.min(b, uniformMax);
// //     if (effectiveA > effectiveB) return 0;
// //     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
// //   };

// //   const distributionData = {
// //     title,
// //     description,
// //     pmfData,
// //     cdfData,
// //     controls,
// //     parameters,
// //     statistics,
// //     properties,
// //     examples,
// //     onCalculatePointProbability,
// //     onCalculateCumulativeProbability,
// //     onCalculateStrictLessProbability,
// //     onCalculateGreaterEqualProbability,
// //     onCalculateStrictGreaterProbability,
// //     onCalculateRangeProbability,
// //     onCalculateStrictRangeProbability,
// //     onCalculateLeftIncRangeProbability,
// //     onCalculateRightIncRangeProbability
// //   };

// //   return <GenericDistributionVisualization distribution={distributionData} />;
// // }

// // export default DiscreteUniformDistribution;


// import React, { useState, useMemo } from 'react';
// import GenericDistributionVisualization from './GenericDistributionVisualizer';

// export default function DiscreteUniformDistribution({ 
//   title,
//   description,
//   examples,
//   initialMin,
//   initialMax,
//   minRange,
//   maxRange
// }) {
//   const [uniformMin, setUniformMin] = useState(initialMin);
//   const [uniformMax, setUniformMax] = useState(initialMax);

//   const discreteUniformPMF = (k, a, b) => {
//     if (k < a || k > b) return 0;
//     return 1 / (b - a + 1);
//   };

//   const pmfData = useMemo(() => {
//     const result = [];
//     for (let k = uniformMin; k <= uniformMax; k++) {
//       result.push({
//         x: k,
//         probability: discreteUniformPMF(k, uniformMin, uniformMax)
//       });
//     }
//     return result;
//   }, [uniformMin, uniformMax]);

//   const cdfData = useMemo(() => {
//     const result = [];
//     let cumulative = 0;
//     for (let k = uniformMin; k <= uniformMax; k++) {
//       cumulative += discreteUniformPMF(k, uniformMin, uniformMax);
//       result.push({
//         x: k,
//         cumulativeProbability: cumulative
//       });
//     }
//     return result;
//   }, [uniformMin, uniformMax]);

//   const statistics = useMemo(() => {
//     const n = uniformMax - uniformMin + 1;
//     const mean = (uniformMin + uniformMax) / 2;
//     const variance = (n * n - 1) / 12;
//     const stdDev = Math.sqrt(variance);
    
//     return {
//       mean,
//       meanFormula: 'E[X] = (a + b) / 2',
//       variance,
//       varianceFormula: 'Var(X) = (n² - 1) / 12',
//       stdDev,
//       stdDevFormula: 'σ = √Var(X)',
//       mode: 'All values',
//       modeFormula: 'Every value has equal probability'
//     };
//   }, [uniformMin, uniformMax]);

//   const parameters = useMemo(() => [
//     {
//       name: 'Minimum Value',
//       symbol: 'a',
//       value: uniformMin,
//       explanation: 'The smallest possible value in the distribution'
//     },
//     {
//       name: 'Maximum Value',
//       symbol: 'b',
//       value: uniformMax,
//       explanation: 'The largest possible value in the distribution'
//     },
//     {
//       name: 'Number of Values',
//       symbol: 'n',
//       value: uniformMax - uniformMin + 1,
//       explanation: 'Total count of distinct values (n = b - a + 1)'
//     }
//   ], [uniformMin, uniformMax]);

//   const properties = useMemo(() => [
//     {
//       title: `Support: X ∈ {${uniformMin}, ${uniformMin + 1}, ..., ${uniformMax}}`,
//       explanation: `The support of a distribution is the set of all possible values that the random variable can take. For the discrete uniform distribution, this includes all integers from the minimum value (${uniformMin}) to the maximum value (${uniformMax}), inclusive. This means there are exactly ${uniformMax - uniformMin + 1} possible outcomes.`
//     },
//     {
//       title: 'Equal Probability (1/n)',
//       explanation: `Every outcome in the discrete uniform distribution has the exact same probability of occurring. Since there are ${uniformMax - uniformMin + 1} possible values, each one has a probability of 1/${uniformMax - uniformMin + 1} ≈ ${(1/(uniformMax - uniformMin + 1)).toFixed(4)}. This is what makes it "uniform" - the probability is distributed equally across all values.`
//     },
//     {
//       title: 'Maximum Entropy Distribution',
//       explanation: `Among all discrete distributions with a finite support of n values, the uniform distribution has the highest entropy. This means it represents the state of maximum uncertainty - when you have no reason to prefer one outcome over another. It's the "fairest" or most unbiased distribution possible for a given set of outcomes.`
//     },
//     {
//       title: 'Symmetric Around Mean',
//       explanation: `The distribution is perfectly symmetric around its expected value (mean = ${((uniformMin + uniformMax) / 2).toFixed(2)}). This means the probability mass is balanced equally on both sides of the center. For every value below the mean, there's a corresponding value above the mean with equal probability.`
//     },
//     {
//       title: 'Memoryless (Independence)',
//       explanation: `Each draw from a discrete uniform distribution is independent of previous draws. Past outcomes do not affect future probabilities - the probability of getting any particular value remains 1/n regardless of what has happened before. This property is crucial for modeling random processes where each trial is truly independent.`
//     }
//   ], [uniformMin, uniformMax]);

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
//           Minimum Value (a): {uniformMin}
//           <input
//             type="range"
//             min={minRange}
//             max={maxRange}
//             step="1"
//             value={uniformMin}
//             onChange={(e) => setUniformMin(Math.min(parseInt(e.target.value), uniformMax - 1))}
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
//           Maximum Value (b): {uniformMax}
//           <input
//             type="range"
//             min={minRange}
//             max={maxRange}
//             step="1"
//             value={uniformMax}
//             onChange={(e) => setUniformMax(Math.max(parseInt(e.target.value), uniformMin + 1))}
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

//   const onCalculatePointProbability = (k) => {
//     return discreteUniformPMF(k, uniformMin, uniformMax);
//   };

//   const onCalculateCumulativeProbability = (k) => {
//     if (k < uniformMin) return 0;
//     if (k >= uniformMax) return 1;
//     return (k - uniformMin + 1) / (uniformMax - uniformMin + 1);
//   };

//   const onCalculateStrictLessProbability = (k) => {
//     if (k <= uniformMin) return 0;
//     if (k > uniformMax) return 1;
//     return (k - uniformMin) / (uniformMax - uniformMin + 1);
//   };

//   const onCalculateGreaterEqualProbability = (k) => {
//     if (k <= uniformMin) return 1;
//     if (k > uniformMax) return 0;
//     return (uniformMax - k + 1) / (uniformMax - uniformMin + 1);
//   };

//   const onCalculateStrictGreaterProbability = (k) => {
//     if (k < uniformMin) return 1;
//     if (k >= uniformMax) return 0;
//     return (uniformMax - k) / (uniformMax - uniformMin + 1);
//   };

//   const onCalculateRangeProbability = (a, b) => {
//     if (b < uniformMin || a > uniformMax) return 0;
//     const effectiveA = Math.max(a, uniformMin);
//     const effectiveB = Math.min(b, uniformMax);
//     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
//   };

//   const onCalculateStrictRangeProbability = (a, b) => {
//     if (b <= uniformMin || a >= uniformMax) return 0;
//     const effectiveA = Math.max(a + 1, uniformMin);
//     const effectiveB = Math.min(b - 1, uniformMax);
//     if (effectiveA > effectiveB) return 0;
//     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
//   };

//   const onCalculateLeftIncRangeProbability = (a, b) => {
//     if (b <= uniformMin || a > uniformMax) return 0;
//     const effectiveA = Math.max(a, uniformMin);
//     const effectiveB = Math.min(b - 1, uniformMax);
//     if (effectiveA > effectiveB) return 0;
//     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
//   };

//   const onCalculateRightIncRangeProbability = (a, b) => {
//     if (b < uniformMin || a >= uniformMax) return 0;
//     const effectiveA = Math.max(a + 1, uniformMin);
//     const effectiveB = Math.min(b, uniformMax);
//     if (effectiveA > effectiveB) return 0;
//     return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
//   };

//   const distributionData = {
//     title,
//     description,
//     pmfData,
//     cdfData,
//     controls,
//     parameters,
//     statistics,
//     properties,
//     examples,
//     onCalculatePointProbability,
//     onCalculateCumulativeProbability,
//     onCalculateStrictLessProbability,
//     onCalculateGreaterEqualProbability,
//     onCalculateStrictGreaterProbability,
//     onCalculateRangeProbability,
//     onCalculateStrictRangeProbability,
//     onCalculateLeftIncRangeProbability,
//     onCalculateRightIncRangeProbability
//   };

//   return <GenericDistributionVisualization distribution={distributionData} />;
// }


import React, { useState, useMemo } from 'react';
import GenericDistributionExplorer from './GenericDistributionExplorer';

export default function DiscreteUniformDistributionExplorer({ 
  title = "Discrete Uniform Distribution",
  description = "Equal probability for finite outcomes",
  examples = [
    'Rolling a fair die (outcomes 1-6 with equal probability)',
    'Drawing a random card from a deck (each card equally likely)',
    'Selecting a random number from a finite set',
    'Lottery number generation where each number is equally likely',
    'Random assignment of participants to groups in experiments'
  ],
  initialMin = 1,
  initialMax = 6,
  minRange = 0,
  maxRange = 30
}) {
  const [uniformMin, setUniformMin] = useState(initialMin);
  const [uniformMax, setUniformMax] = useState(initialMax);

  const discreteUniformPMF = (k, a, b) => {
    if (k < a || k > b) return 0;
    return 1 / (b - a + 1);
  };

  const pmfData = useMemo(() => {
    const result = [];
    for (let k = uniformMin; k <= uniformMax; k++) {
      result.push({
        x: k,
        probability: discreteUniformPMF(k, uniformMin, uniformMax)
      });
    }
    return result;
  }, [uniformMin, uniformMax]);

  const cdfData = useMemo(() => {
    const result = [];
    let cumulative = 0;
    for (let k = uniformMin; k <= uniformMax; k++) {
      cumulative += discreteUniformPMF(k, uniformMin, uniformMax);
      result.push({
        x: k,
        cumulativeProbability: cumulative
      });
    }
    return result;
  }, [uniformMin, uniformMax]);

  const statistics = useMemo(() => {
    const n = uniformMax - uniformMin + 1;
    const mean = (uniformMin + uniformMax) / 2;
    const variance = (n * n - 1) / 12;
    const stdDev = Math.sqrt(variance);
    
    return {
      mean,
      meanFormula: 'E[X] = (a + b) / 2',
      variance,
      varianceFormula: 'Var(X) = (n² - 1) / 12',
      stdDev,
      stdDevFormula: 'σ = √Var(X)',
      mode: 'All values',
      modeFormula: 'Every value has equal probability'
    };
  }, [uniformMin, uniformMax]);

  const parameters = useMemo(() => [
    {
      name: 'Minimum Value',
      symbol: 'a',
      value: uniformMin,
      explanation: 'The smallest possible value in the distribution'
    },
    {
      name: 'Maximum Value',
      symbol: 'b',
      value: uniformMax,
      explanation: 'The largest possible value in the distribution'
    },
    {
      name: 'Number of Values',
      symbol: 'n',
      value: uniformMax - uniformMin + 1,
      explanation: 'Total count of distinct values (n = b - a + 1)'
    }
  ], [uniformMin, uniformMax]);

  const properties = useMemo(() => [
    {
      title: `Support: X ∈ {${uniformMin}, ${uniformMin + 1}, ..., ${uniformMax}}`,
      explanation: `The support of a distribution is the set of all possible values that the random variable can take. For the discrete uniform distribution, this includes all integers from the minimum value (${uniformMin}) to the maximum value (${uniformMax}), inclusive. This means there are exactly ${uniformMax - uniformMin + 1} possible outcomes.`
    },
    {
      title: 'Equal Probability (1/n)',
      explanation: `Every outcome in the discrete uniform distribution has the exact same probability of occurring. Since there are ${uniformMax - uniformMin + 1} possible values, each one has a probability of 1/${uniformMax - uniformMin + 1} ≈ ${(1/(uniformMax - uniformMin + 1)).toFixed(4)}. This is what makes it "uniform" - the probability is distributed equally across all values.`
    },
    {
      title: 'Maximum Entropy Distribution',
      explanation: `Among all discrete distributions with a finite support of n values, the uniform distribution has the highest entropy. This means it represents the state of maximum uncertainty - when you have no reason to prefer one outcome over another. It's the "fairest" or most unbiased distribution possible for a given set of outcomes.`
    },
    {
      title: 'Symmetric Around Mean',
      explanation: `The distribution is perfectly symmetric around its expected value (mean = ${((uniformMin + uniformMax) / 2).toFixed(2)}). This means the probability mass is balanced equally on both sides of the center. For every value below the mean, there's a corresponding value above the mean with equal probability.`
    },
    {
      title: 'Memoryless (Independence)',
      explanation: `Each draw from a discrete uniform distribution is independent of previous draws. Past outcomes do not affect future probabilities - the probability of getting any particular value remains 1/n regardless of what has happened before. This property is crucial for modeling random processes where each trial is truly independent.`
    }
  ], [uniformMin, uniformMax]);

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
          Minimum Value (a): {uniformMin}
          <input
            type="range"
            min={minRange}
            max={maxRange}
            step="1"
            value={uniformMin}
            onChange={(e) => setUniformMin(Math.min(parseInt(e.target.value), uniformMax - 1))}
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
          Maximum Value (b): {uniformMax}
          <input
            type="range"
            min={minRange}
            max={maxRange}
            step="1"
            value={uniformMax}
            onChange={(e) => setUniformMax(Math.max(parseInt(e.target.value), uniformMin + 1))}
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

  const onCalculatePointProbability = (k) => {
    return discreteUniformPMF(k, uniformMin, uniformMax);
  };

  const onCalculateCumulativeProbability = (k) => {
    if (k < uniformMin) return 0;
    if (k >= uniformMax) return 1;
    return (k - uniformMin + 1) / (uniformMax - uniformMin + 1);
  };

  const onCalculateStrictLessProbability = (k) => {
    if (k <= uniformMin) return 0;
    if (k > uniformMax) return 1;
    return (k - uniformMin) / (uniformMax - uniformMin + 1);
  };

  const onCalculateGreaterEqualProbability = (k) => {
    if (k <= uniformMin) return 1;
    if (k > uniformMax) return 0;
    return (uniformMax - k + 1) / (uniformMax - uniformMin + 1);
  };

  const onCalculateStrictGreaterProbability = (k) => {
    if (k < uniformMin) return 1;
    if (k >= uniformMax) return 0;
    return (uniformMax - k) / (uniformMax - uniformMin + 1);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (b < uniformMin || a > uniformMax) return 0;
    const effectiveA = Math.max(a, uniformMin);
    const effectiveB = Math.min(b, uniformMax);
    return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (b <= uniformMin || a >= uniformMax) return 0;
    const effectiveA = Math.max(a + 1, uniformMin);
    const effectiveB = Math.min(b - 1, uniformMax);
    if (effectiveA > effectiveB) return 0;
    return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (b <= uniformMin || a > uniformMax) return 0;
    const effectiveA = Math.max(a, uniformMin);
    const effectiveB = Math.min(b - 1, uniformMax);
    if (effectiveA > effectiveB) return 0;
    return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (b < uniformMin || a >= uniformMax) return 0;
    const effectiveA = Math.max(a + 1, uniformMin);
    const effectiveB = Math.min(b, uniformMax);
    if (effectiveA > effectiveB) return 0;
    return (effectiveB - effectiveA + 1) / (uniformMax - uniformMin + 1);
  };

  const distributionData = {
    title,
    description,
    pmfData,
    cdfData,
    controls,
    parameters,
    statistics,
    properties,
    examples,
    onCalculatePointProbability,
    onCalculateCumulativeProbability,
    onCalculateStrictLessProbability,
    onCalculateGreaterEqualProbability,
    onCalculateStrictGreaterProbability,
    onCalculateRangeProbability,
    onCalculateStrictRangeProbability,
    onCalculateLeftIncRangeProbability,
    onCalculateRightIncRangeProbability
  };

  return <GenericDistributionExplorer distribution={distributionData} />;
}