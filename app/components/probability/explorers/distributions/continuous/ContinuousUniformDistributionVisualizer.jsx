import React, { useState, useMemo } from 'react';
import GenericContinuousDistributionExplorer from './GenericContinuousDistributionExplorer';


export default function ContinuousUniformDistributionExplorer({ 
  title = "Continuous Uniform Distribution",
  description = "Equal probability density over an interval",
  examples = [
    'Random number generation between two values',
    'Arrival time within a time window when all times are equally likely',
    'Random point selection along a line segment',
    'Quantization error in analog-to-digital conversion',
    'Round-off errors in numerical computations'
  ],
  initialMin = 0,
  initialMax = 10,
  minRange = -20,
  maxRange = 20,
  numPoints = 200
}) {
  const [uniformMin, setUniformMin] = useState(initialMin);
  const [uniformMax, setUniformMax] = useState(initialMax);

  const continuousUniformPDF = (x, a, b) => {
    if (x < a || x > b) return 0;
    return 1 / (b - a);
  };

  const continuousUniformCDF = (x, a, b) => {
    if (x < a) return 0;
    if (x > b) return 1;
    return (x - a) / (b - a);
  };

  const pdfData = useMemo(() => {
    const result = [];
    const step = (uniformMax - uniformMin) / numPoints;
    const rangeExtension = (uniformMax - uniformMin) * 0.2;
    
    // Add points before the distribution starts
    for (let i = 0; i < 20; i++) {
      const x = uniformMin - rangeExtension + (i * rangeExtension / 20);
      result.push({
        x: x,
        density: 0
      });
    }
    
    // Add the uniform distribution
    for (let i = 0; i <= numPoints; i++) {
      const x = uniformMin + i * step;
      result.push({
        x: x,
        density: continuousUniformPDF(x, uniformMin, uniformMax)
      });
    }
    
    // Add points after the distribution ends
    for (let i = 1; i <= 20; i++) {
      const x = uniformMax + (i * rangeExtension / 20);
      result.push({
        x: x,
        density: 0
      });
    }
    
    return result;
  }, [uniformMin, uniformMax, numPoints]);

  const cdfData = useMemo(() => {
    const result = [];
    const step = (uniformMax - uniformMin) / numPoints;
    const rangeExtension = (uniformMax - uniformMin) * 0.2;
    
    // Add points before the distribution starts
    for (let i = 0; i < 20; i++) {
      const x = uniformMin - rangeExtension + (i * rangeExtension / 20);
      result.push({
        x: x,
        cumulativeProbability: 0
      });
    }
    
    // Add the CDF
    for (let i = 0; i <= numPoints; i++) {
      const x = uniformMin + i * step;
      result.push({
        x: x,
        cumulativeProbability: continuousUniformCDF(x, uniformMin, uniformMax)
      });
    }
    
    // Add points after the distribution ends
    for (let i = 1; i <= 20; i++) {
      const x = uniformMax + (i * rangeExtension / 20);
      result.push({
        x: x,
        cumulativeProbability: 1
      });
    }
    
    return result;
  }, [uniformMin, uniformMax, numPoints]);

  const statistics = useMemo(() => {
    const mean = (uniformMin + uniformMax) / 2;
    const variance = Math.pow(uniformMax - uniformMin, 2) / 12;
    const stdDev = Math.sqrt(variance);
    
    return {
      mean,
      meanFormula: 'E[X] = (a + b) / 2',
      variance,
      varianceFormula: 'Var(X) = (b - a)² / 12',
      stdDev,
      stdDevFormula: 'σ = (b - a) / √12',
      mode: `All values in [${uniformMin}, ${uniformMax}]`,
      modeFormula: 'Mode = any x ∈ [a, b]'
    };
  }, [uniformMin, uniformMax]);

  const parameters = useMemo(() => [
    {
      name: 'Lower Bound',
      symbol: 'a',
      value: uniformMin.toFixed(2),
      explanation: 'The minimum value of the distribution'
    },
    {
      name: 'Upper Bound',
      symbol: 'b',
      value: uniformMax.toFixed(2),
      explanation: 'The maximum value of the distribution'
    },
    {
      name: 'Range',
      symbol: 'b - a',
      value: (uniformMax - uniformMin).toFixed(2),
      explanation: 'The width of the interval'
    },
    {
      name: 'Density',
      symbol: '1/(b-a)',
      value: (1 / (uniformMax - uniformMin)).toFixed(4),
      explanation: 'Constant probability density over the interval'
    }
  ], [uniformMin, uniformMax]);

  const properties = useMemo(() => [
    {
      title: `Support: X ∈ [${uniformMin}, ${uniformMax}]`,
      explanation: `The continuous uniform distribution is defined on the closed interval from ${uniformMin} to ${uniformMax}. The random variable can take any real value within this range, with all values being equally likely. Outside this interval, the probability density is zero.`
    },
    {
      title: 'Constant Probability Density',
      explanation: `The probability density function is constant at f(x) = 1/(b-a) = ${(1/(uniformMax - uniformMin)).toFixed(4)} throughout the entire interval [${uniformMin}, ${uniformMax}]. This means every subinterval of equal length has the same probability, making it the "most random" distribution over a bounded interval.`
    },
    {
      title: 'Maximum Entropy',
      explanation: `Among all continuous distributions with bounded support [a, b], the uniform distribution has the highest entropy. This represents maximum uncertainty - when you know a value falls in an interval but have no reason to prefer any particular value over another. It's the continuous analog of the discrete uniform distribution.`
    },
    {
      title: 'Linear CDF',
      explanation: `The cumulative distribution function F(x) = (x-a)/(b-a) is a straight line from 0 to 1 over the interval [${uniformMin}, ${uniformMax}]. This linearity means probabilities are directly proportional to interval lengths: P(c ≤ X ≤ d) = (d-c)/(b-a).`
    },
    {
      title: 'Memoryless-like Property',
      explanation: `While not truly memoryless like the exponential distribution, the uniform distribution has a similar "lack of information" property. Given that X is in some subinterval, it's uniformly distributed within that subinterval. This reflects the complete absence of bias toward any particular value.`
    },
    {
      title: 'Transformation to Standard Uniform',
      explanation: `Any uniform distribution on [a, b] can be transformed to the standard uniform on [0, 1] using Y = (X-a)/(b-a). Conversely, if U ~ Uniform(0,1), then X = a + (b-a)U ~ Uniform(a,b). This is the basis for generating random numbers from other distributions.`
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
          Lower Bound (a): {uniformMin.toFixed(1)}
          <input
            type="range"
            min={minRange}
            max={maxRange}
            step="0.1"
            value={uniformMin}
            onChange={(e) => setUniformMin(Math.min(parseFloat(e.target.value), uniformMax - 0.1))}
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
          Upper Bound (b): {uniformMax.toFixed(1)}
          <input
            type="range"
            min={minRange}
            max={maxRange}
            step="0.1"
            value={uniformMax}
            onChange={(e) => setUniformMax(Math.max(parseFloat(e.target.value), uniformMin + 0.1))}
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
    return continuousUniformCDF(x, uniformMin, uniformMax);
  };

  const onCalculateStrictLessProbability = (x) => {
    // For continuous distributions, P(X < x) = P(X ≤ x) = F(x)
    return continuousUniformCDF(x, uniformMin, uniformMax);
  };

  const onCalculateGreaterEqualProbability = (x) => {
    return 1 - continuousUniformCDF(x, uniformMin, uniformMax);
  };

  const onCalculateStrictGreaterProbability = (x) => {
    // For continuous distributions, P(X > x) = P(X ≥ x) = 1 - F(x)
    return 1 - continuousUniformCDF(x, uniformMin, uniformMax);
  };

  const onCalculateRangeProbability = (a, b) => {
    if (a > b) return 0;
    return continuousUniformCDF(b, uniformMin, uniformMax) - continuousUniformCDF(a, uniformMin, uniformMax);
  };

  const onCalculateStrictRangeProbability = (a, b) => {
    // For continuous distributions, P(a < X < b) = P(a ≤ X ≤ b)
    if (a >= b) return 0;
    return continuousUniformCDF(b, uniformMin, uniformMax) - continuousUniformCDF(a, uniformMin, uniformMax);
  };

  const onCalculateLeftIncRangeProbability = (a, b) => {
    // For continuous distributions, P(a ≤ X < b) = P(a ≤ X ≤ b)
    if (a >= b) return 0;
    return continuousUniformCDF(b, uniformMin, uniformMax) - continuousUniformCDF(a, uniformMin, uniformMax);
  };

  const onCalculateRightIncRangeProbability = (a, b) => {
    // For continuous distributions, P(a < X ≤ b) = P(a ≤ X ≤ b)
    if (a >= b) return 0;
    return continuousUniformCDF(b, uniformMin, uniformMax) - continuousUniformCDF(a, uniformMin, uniformMax);
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