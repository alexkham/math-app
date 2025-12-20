import React, { useState, useMemo } from 'react';
import GenericDistributionVisualization from './GenericDistributionVisualizer';

export default function PoissonDistributionVisualizer({ 
  title = "Poisson Distribution",
  description = "Number of events in a fixed interval",
  examples = [
    'Number of customer arrivals per hour at a store',
    'Number of phone calls received at a call center per minute',
    'Number of defects per manufactured item',
    'Number of emails received per day',
    'Number of radioactive decays per second',
    'Number of accidents at an intersection per month'
  ],
  initialLambda = 3,
  minLambda = 0.1,
  maxLambda = 20,
  stepLambda = 0.1,
  maxK = 30
}) {
  const [lambda, setLambda] = useState(initialLambda);

  const factorial = (n) => {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const poissonPMF = (k, lambda) => {
    if (k < 0) return 0;
    return (Math.pow(lambda, k) * Math.exp(-lambda)) / factorial(k);
  };

  const pmfData = useMemo(() => {
    const result = [];
    const effectiveMax = Math.max(maxK, Math.ceil(lambda + 4 * Math.sqrt(lambda)));
    
    for (let k = 0; k <= effectiveMax; k++) {
      const prob = poissonPMF(k, lambda);
      if (prob < 1e-10 && k > lambda + 10) break;
      result.push({
        x: k,
        probability: prob
      });
    }
    return result;
  }, [lambda, maxK]);

  const cdfData = useMemo(() => {
    const result = [];
    let cumulative = 0;
    
    for (let i = 0; i < pmfData.length; i++) {
      cumulative += pmfData[i].probability;
      result.push({
        x: pmfData[i].x,
        cumulativeProbability: cumulative
      });
    }
    return result;
  }, [pmfData]);

  const statistics = useMemo(() => {
    const mean = lambda;
    const variance = lambda;
    const stdDev = Math.sqrt(lambda);
    const mode = Math.floor(lambda);
    
    return {
      mean,
      meanFormula: 'E[X] = λ',
      variance,
      varianceFormula: 'Var(X) = λ',
      stdDev,
      stdDevFormula: 'σ = √λ',
      mode,
      modeFormula: 'Mode = ⌊λ⌋'
    };
  }, [lambda]);

  const parameters = useMemo(() => [
    {
      name: 'Rate Parameter',
      symbol: 'λ',
      value: lambda.toFixed(2),
      explanation: 'Average number of events occurring in the fixed interval'
    },
    {
      name: 'Mean = Variance',
      symbol: 'E[X] = Var(X)',
      value: lambda.toFixed(2),
      explanation: 'Unique property: mean equals variance'
    },
    {
      name: 'Standard Deviation',
      symbol: 'σ',
      value: Math.sqrt(lambda).toFixed(2),
      explanation: 'Measure of spread, equal to √λ'
    }
  ], [lambda]);

  const properties = useMemo(() => [
    {
      title: 'Support: X ∈ {0, 1, 2, 3, ...}',
      explanation: `The Poisson distribution counts the number of events, so it can take any non-negative integer value starting from 0. While theoretically infinite, probabilities become negligible for values much larger than λ = ${lambda.toFixed(1)}. Values beyond ${Math.ceil(lambda + 4 * Math.sqrt(lambda))} have probability < 0.0001.`
    },
    {
      title: 'Mean Equals Variance',
      explanation: `A defining property of the Poisson distribution is that E[X] = Var(X) = λ = ${lambda.toFixed(2)}. This means the average number of events equals the variance. Distributions with variance > mean show overdispersion; variance < mean shows underdispersion. Poisson has neither.`
    },
    {
      title: 'Rare Events Approximation',
      explanation: `The Poisson distribution approximates the binomial distribution when n is large and p is small (np ≈ λ). Rule of thumb: use Poisson when n ≥ 20 and p ≤ 0.05. This makes it ideal for modeling rare events in large populations.`
    },
    {
      title: 'Independent Events',
      explanation: `Events occur independently - one event doesn't affect the probability of another. Events also occur at a constant average rate (λ = ${lambda.toFixed(2)} per interval). The distribution models purely random occurrences over time or space.`
    },
    {
      title: 'Additive Property',
      explanation: `If X ~ Poisson(λ₁) and Y ~ Poisson(λ₂) are independent, then X + Y ~ Poisson(λ₁ + λ₂). This means if you combine two Poisson processes, the result is also Poisson with the sum of the rates. Useful for aggregating counts across multiple sources.`
    },
    {
      title: 'Approximates Normal Distribution',
      explanation: `When λ is large (typically λ ≥ 10), the Poisson distribution can be approximated by a normal distribution with mean = variance = ${lambda.toFixed(2)}. Currently with λ = ${lambda.toFixed(1)}, the ${lambda >= 10 ? 'normal approximation is reasonable' : 'distribution is still skewed'}.`
    }
  ], [lambda]);

  const controls = (
    <>
      <div>
        <label style={{
          display: 'block',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '6px',
          fontSize: '13px'
        }}>
          Rate Parameter (λ): {lambda.toFixed(1)}
          <input
            type="range"
            min={minLambda}
            max={maxLambda}
            step={stepLambda}
            value={lambda}
            onChange={(e) => setLambda(parseFloat(e.target.value))}
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
    return poissonPMF(k, lambda);
  };

  const onCalculateCumulativeProbability = (k) => {
    if (k < 0) return 0;
    let sum = 0;
    for (let i = 0; i <= k; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateStrictLessProbability = (k) => {
    if (k <= 0) return 0;
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateGreaterEqualProbability = (k) => {
    if (k <= 0) return 1;
    return 1 - onCalculateStrictLessProbability(k);
  };

  const onCalculateStrictGreaterProbability = (k) => {
    if (k < 0) return 1;
    return 1 - onCalculateCumulativeProbability(k);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (b < 0 || a < 0) return 0;
    const effectiveA = Math.max(a, 0);
    const effectiveB = Math.max(b, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (b <= 0 || a < 0) return 0;
    const effectiveA = Math.max(a + 1, 0);
    const effectiveB = Math.max(b - 1, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (b <= 0 || a < 0) return 0;
    const effectiveA = Math.max(a, 0);
    const effectiveB = Math.max(b - 1, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (b < 0 || a < 0) return 0;
    const effectiveA = Math.max(a + 1, 0);
    const effectiveB = Math.max(b, 0);
    if (effectiveA > effectiveB) return 0;
    
    let sum = 0;
    for (let i = effectiveA; i <= effectiveB; i++) {
      sum += poissonPMF(i, lambda);
    }
    return sum;
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

  return <GenericDistributionVisualization distribution={distributionData} />;
}