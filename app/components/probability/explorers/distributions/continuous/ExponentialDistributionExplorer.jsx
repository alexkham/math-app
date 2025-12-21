import React, { useState, useMemo } from 'react';
import GenericContinuousDistributionExplorer from './GenericContinuousDistributionExplorer';

export default function ExponentialDistributionExplorer({ 
  title = "Exponential Distribution",
  description = "Time between events in a Poisson process",
  examples = [
    'Time until the next customer arrives at a store',
    'Lifetime of electronic components (time until failure)',
    'Time between successive radioactive decays',
    'Duration of phone calls in a call center',
    'Time until the next earthquake in a region',
    'Waiting time for the next bus arrival'
  ],
  initialLambda = 1,
  minLambda = 0.1,
  maxLambda = 5,
  stepLambda = 0.1,
  numPoints = 300
}) {
  const [lambda, setLambda] = useState(initialLambda);

  const exponentialPDF = (x, lambda) => {
    if (x < 0) return 0;
    return lambda * Math.exp(-lambda * x);
  };

  const exponentialCDF = (x, lambda) => {
    if (x < 0) return 0;
    return 1 - Math.exp(-lambda * x);
  };

  const pdfData = useMemo(() => {
    const result = [];
    // Show up to where CDF is ~0.999
    const maxX = -Math.log(0.001) / lambda;
    const step = maxX / numPoints;
    
    for (let i = 0; i <= numPoints; i++) {
      const x = i * step;
      result.push({
        x: x,
        density: exponentialPDF(x, lambda)
      });
    }
    
    return result;
  }, [lambda, numPoints]);

  const cdfData = useMemo(() => {
    const result = [];
    const maxX = -Math.log(0.001) / lambda;
    const step = maxX / numPoints;
    
    for (let i = 0; i <= numPoints; i++) {
      const x = i * step;
      result.push({
        x: x,
        cumulativeProbability: exponentialCDF(x, lambda)
      });
    }
    
    return result;
  }, [lambda, numPoints]);

  const statistics = useMemo(() => {
    const mean = 1 / lambda;
    const variance = 1 / (lambda * lambda);
    const stdDev = 1 / lambda;
    
    return {
      mean,
      meanFormula: 'E[X] = 1/λ',
      variance,
      varianceFormula: 'Var(X) = 1/λ²',
      stdDev,
      stdDevFormula: 'σ = 1/λ',
      mode: 0,
      modeFormula: 'Mode = 0'
    };
  }, [lambda]);

  const parameters = useMemo(() => [
    {
      name: 'Rate Parameter',
      symbol: 'λ',
      value: lambda.toFixed(2),
      explanation: 'Average number of events per unit time'
    },
    {
      name: 'Scale Parameter',
      symbol: '1/λ',
      value: (1/lambda).toFixed(2),
      explanation: 'Average time between events (mean)'
    },
    {
      name: 'Expected Value',
      symbol: 'E[X]',
      value: (1/lambda).toFixed(2),
      explanation: 'Mean waiting time until the next event'
    }
  ], [lambda]);

  const properties = useMemo(() => [
    {
      title: 'Support: X ∈ [0, ∞)',
      explanation: `The exponential distribution is defined for all non-negative real numbers. It models waiting times, which start at 0 and can theoretically be any positive value. However, very large values become exponentially unlikely with λ = ${lambda.toFixed(2)}.`
    },
    {
      title: 'Memoryless Property',
      explanation: `The exponential distribution is the ONLY continuous distribution with the memoryless property: P(X > s+t | X > s) = P(X > t). In other words, if you've already waited time s without an event, the probability of waiting an additional time t is the same as if you were starting fresh. Past waiting time provides no information about future waiting time.`
    },
    {
      title: 'Constant Hazard Rate',
      explanation: `The hazard rate (instantaneous failure rate) is constant and equals λ = ${lambda.toFixed(2)}. This means the probability of an event occurring in the next instant is always the same, regardless of how much time has already elapsed. This is why it models "random" failures with no aging effects.`
    },
    {
      title: 'Connection to Poisson Process',
      explanation: `If events occur according to a Poisson process with rate λ = ${lambda.toFixed(2)} events per unit time, then the time between successive events follows an exponential distribution with the same rate λ. The exponential is the continuous-time analog of the geometric distribution.`
    },
    {
      title: 'Decreasing Probability Density',
      explanation: `The PDF f(x) = λe^(-λx) is highest at x = 0 and decreases exponentially. This means shorter waiting times are more likely than longer ones. The mode is always 0, but the mean is 1/λ = ${(1/lambda).toFixed(2)}, reflecting the right-skewed nature of the distribution.`
    },
    {
      title: 'Simple CDF and Quantiles',
      explanation: `The CDF has the simple form F(x) = 1 - e^(-λx), making it easy to compute probabilities and quantiles. The median waiting time is ln(2)/λ ≈ ${(Math.log(2)/lambda).toFixed(2)}, which is less than the mean ${(1/lambda).toFixed(2)} due to the right skew.`
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

  const onCalculateCumulativeProbability = (x) => {
    return exponentialCDF(x, lambda);
  };

  const onCalculateStrictLessProbability = (x) => {
    return exponentialCDF(x, lambda);
  };

  const onCalculateGreaterEqualProbability = (x) => {
    if (x < 0) return 1;
    return Math.exp(-lambda * x);
  };

  const onCalculateStrictGreaterProbability = (x) => {
    if (x < 0) return 1;
    return Math.exp(-lambda * x);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (a > b) return 0;
    if (b < 0) return 0;
    const effectiveA = Math.max(0, a);
    return exponentialCDF(b, lambda) - exponentialCDF(effectiveA, lambda);
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    if (a >= b) return 0;
    if (b < 0) return 0;
    const effectiveA = Math.max(0, a);
    return exponentialCDF(b, lambda) - exponentialCDF(effectiveA, lambda);
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    if (a >= b) return 0;
    if (b < 0) return 0;
    const effectiveA = Math.max(0, a);
    return exponentialCDF(b, lambda) - exponentialCDF(effectiveA, lambda);
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    if (a >= b) return 0;
    if (b < 0) return 0;
    const effectiveA = Math.max(0, a);
    return exponentialCDF(b, lambda) - exponentialCDF(effectiveA, lambda);
  };

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
    onCalculateRightIncRangeProbability
  };

  return <GenericContinuousDistributionExplorer distribution={distributionData} />;
}