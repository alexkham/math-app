'use client';

import React, { useState, useMemo } from 'react';

export default function BayesTheoremCalculator() {
  const instanceId = useMemo(() => Math.random().toString(36).substr(2, 9), []);
  
  const [mode, setMode] = useState('general');
  
  // General Bayes mode - empty defaults
  const [pA, setPA] = useState('');
  const [pBgivenA, setPBgivenA] = useState('');
  const [pBgivenNotA, setPBgivenNotA] = useState('');
  
  // Medical test mode - empty defaults
  const [prevalence, setPrevalence] = useState('');
  const [sensitivity, setSensitivity] = useState('');
  const [specificity, setSpecificity] = useState('');
  
  // Multiple hypotheses mode
  const [numHypotheses, setNumHypotheses] = useState(3);
  const [hypotheses, setHypotheses] = useState([
    { name: 'H₁', prior: '', conditionalProb: '' },
    { name: 'H₂', prior: '', conditionalProb: '' },
    { name: 'H₃', prior: '', conditionalProb: '' }
  ]);
  
  const [results, setResults] = useState(null);
  const [calculations, setCalculations] = useState([]);
  const [errors, setErrors] = useState([]);
  const [hasCalculated, setHasCalculated] = useState(false);

  const validateProbability = (value) => {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || num > 1) {
      return null;
    }
    return num;
  };

  const handleReset = () => {
    // Reset mode first
    setMode('general');
    
    // Reset general mode inputs to empty
    setPA('');
    setPBgivenA('');
    setPBgivenNotA('');
    
    // Reset medical mode inputs to empty
    setPrevalence('');
    setSensitivity('');
    setSpecificity('');
    
    // Reset multiple hypotheses mode to empty
    setNumHypotheses(3);
    setHypotheses([
      { name: 'H₁', prior: '', conditionalProb: '' },
      { name: 'H₂', prior: '', conditionalProb: '' },
      { name: 'H₃', prior: '', conditionalProb: '' }
    ]);
    
    // Clear all results and errors
    setResults(null);
    setCalculations([]);
    setErrors([]);
    setHasCalculated(false);
  };

  const handleCalculate = () => {
    setHasCalculated(true);
    
    if (mode === 'multiple') {
      calculateMultipleHypotheses();
    } else {
      calculateBayes();
    }
  };

  const calculateBayes = () => {
    const newErrors = [];
    const steps = [];
    
    let priorA, condProbB_A, condProbB_notA;
    
    if (mode === 'medical') {
      priorA = validateProbability(prevalence);
      condProbB_A = validateProbability(sensitivity);
      const spec = validateProbability(specificity);
      
      if (priorA === null) newErrors.push('Prevalence must be between 0 and 1');
      if (condProbB_A === null) newErrors.push('Sensitivity must be between 0 and 1');
      if (spec === null) newErrors.push('Specificity must be between 0 and 1');
      
      if (newErrors.length > 0) {
        setErrors(newErrors);
        setResults(null);
        setCalculations([]);
        return;
      }
      
      condProbB_notA = 1 - spec;
      
      steps.push({
        title: 'Given Information (Medical Test)',
        items: [
          `Prevalence (prior): P(Disease) = ${priorA}`,
          `Sensitivity: P(Positive|Disease) = ${condProbB_A}`,
          `Specificity: P(Negative|No Disease) = ${spec}`,
          `False Positive Rate: P(Positive|No Disease) = 1 - ${spec} = ${condProbB_notA.toFixed(4)}`
        ]
      });
      
    } else {
      priorA = validateProbability(pA);
      condProbB_A = validateProbability(pBgivenA);
      condProbB_notA = validateProbability(pBgivenNotA);
      
      if (priorA === null) newErrors.push('P(A) must be between 0 and 1');
      if (condProbB_A === null) newErrors.push('P(B|A) must be between 0 and 1');
      if (condProbB_notA === null) newErrors.push('P(B|A\') must be between 0 and 1');
      
      if (newErrors.length > 0) {
        setErrors(newErrors);
        setResults(null);
        setCalculations([]);
        return;
      }
      
      steps.push({
        title: 'Given Information',
        items: [
          `Prior: P(A) = ${priorA}`,
          `Conditional Probability: P(B|A) = ${condProbB_A}`,
          `Conditional Probability: P(B|A') = ${condProbB_notA}`
        ]
      });
    }
    
    const priorNotA = 1 - priorA;
    steps.push({
      title: 'Step 1: Calculate P(A\')',
      items: [
        `P(A') = 1 - P(A)`,
        `P(A') = 1 - ${priorA}`,
        `P(A') = ${priorNotA.toFixed(4)}`
      ]
    });
    
    const pB = (condProbB_A * priorA) + (condProbB_notA * priorNotA);
    steps.push({
      title: 'Step 2: Calculate P(B) using Law of Total Probability',
      items: [
        `P(B) = P(B|A) × P(A) + P(B|A') × P(A')`,
        `P(B) = ${condProbB_A} × ${priorA} + ${condProbB_notA} × ${priorNotA.toFixed(4)}`,
        `P(B) = ${(condProbB_A * priorA).toFixed(4)} + ${(condProbB_notA * priorNotA).toFixed(4)}`,
        `P(B) = ${pB.toFixed(4)}`
      ]
    });
    
    const posteriorA_B = (condProbB_A * priorA) / pB;
    steps.push({
      title: 'Step 3: Apply Bayes\' Theorem to find P(A|B)',
      items: [
        `P(A|B) = [P(B|A) × P(A)] / P(B)`,
        `P(A|B) = [${condProbB_A} × ${priorA}] / ${pB.toFixed(4)}`,
        `P(A|B) = ${(condProbB_A * priorA).toFixed(4)} / ${pB.toFixed(4)}`,
        `P(A|B) = ${posteriorA_B.toFixed(4)}`
      ]
    });
    
    const posteriorNotA_B = 1 - posteriorA_B;
    steps.push({
      title: 'Step 4: Calculate P(A\'|B)',
      items: [
        `P(A'|B) = 1 - P(A|B)`,
        `P(A'|B) = 1 - ${posteriorA_B.toFixed(4)}`,
        `P(A'|B) = ${posteriorNotA_B.toFixed(4)}`
      ]
    });
    
    const priorOdds = priorA / priorNotA;
    const likelihoodRatio = condProbB_A / condProbB_notA;
    const posteriorOdds = priorOdds * likelihoodRatio;
    
    steps.push({
      title: 'Additional Insights: Odds Form',
      items: [
        `Prior Odds = P(A) / P(A') = ${priorA} / ${priorNotA.toFixed(4)} = ${priorOdds.toFixed(4)}`,
        `Likelihood Ratio = P(B|A) / P(B|A') = ${condProbB_A} / ${condProbB_notA} = ${likelihoodRatio.toFixed(4)}`,
        `Posterior Odds = Prior Odds × Likelihood Ratio = ${posteriorOdds.toFixed(4)}`,
        `Posterior Probability = Posterior Odds / (1 + Posterior Odds) = ${posteriorA_B.toFixed(4)} ✓`
      ]
    });
    
    setResults({
      priorA,
      priorNotA,
      condProbB_A,
      condProbB_notA,
      pB,
      posteriorA_B,
      posteriorNotA_B,
      priorOdds,
      likelihoodRatio,
      posteriorOdds
    });
    
    setCalculations(steps);
    setErrors([]);
  };

  const calculateMultipleHypotheses = () => {
    const newErrors = [];
    const steps = [];
    
    const validatedHypotheses = hypotheses.map((h, idx) => {
      const prior = validateProbability(h.prior);
      const conditionalProb = validateProbability(h.conditionalProb);
      
      if (prior === null) newErrors.push(`${h.name}: Prior must be between 0 and 1`);
      if (conditionalProb === null) newErrors.push(`${h.name}: Conditional probability must be between 0 and 1`);
      
      return { ...h, prior, conditionalProb };
    });
    
    if (newErrors.length > 0) {
      setErrors(newErrors);
      setResults(null);
      setCalculations([]);
      return;
    }
    
    const priorSum = validatedHypotheses.reduce((sum, h) => sum + h.prior, 0);
    if (Math.abs(priorSum - 1) > 0.0001) {
      newErrors.push(`Prior probabilities must sum to 1 (currently sum to ${priorSum.toFixed(4)})`);
      setErrors(newErrors);
      setResults(null);
      setCalculations([]);
      return;
    }
    
    steps.push({
      title: 'Given Information',
      items: validatedHypotheses.map(h => 
        `${h.name}: P(${h.name}) = ${h.prior}, P(E|${h.name}) = ${h.conditionalProb}`
      )
    });
    
    const pE = validatedHypotheses.reduce((sum, h) => sum + (h.prior * h.conditionalProb), 0);
    
    steps.push({
      title: 'Step 1: Calculate P(E) using Law of Total Probability',
      items: [
        `P(E) = Σ P(E|Hᵢ) × P(Hᵢ)`,
        ...validatedHypotheses.map(h => 
          `P(E|${h.name}) × P(${h.name}) = ${h.conditionalProb} × ${h.prior} = ${(h.conditionalProb * h.prior).toFixed(4)}`
        ),
        `P(E) = ${pE.toFixed(4)}`
      ]
    });
    
    const posteriorsData = validatedHypotheses.map(h => {
      const posterior = (h.conditionalProb * h.prior) / pE;
      return { ...h, posterior };
    });
    
    steps.push({
      title: 'Step 2: Apply Bayes\' Theorem for each hypothesis',
      items: posteriorsData.map(h => 
        `P(${h.name}|E) = [P(E|${h.name}) × P(${h.name})] / P(E) = [${h.conditionalProb} × ${h.prior}] / ${pE.toFixed(4)} = ${h.posterior.toFixed(4)}`
      )
    });
    
    const posteriorSum = posteriorsData.reduce((sum, h) => sum + h.posterior, 0);
    steps.push({
      title: 'Step 3: Verification',
      items: [
        `Sum of posteriors = ${posteriorSum.toFixed(4)} ✓`,
        `(Should equal 1.0000)`
      ]
    });
    
    setResults({
      pE,
      hypotheses: posteriorsData,
      posteriorSum
    });
    
    setCalculations(steps);
    setErrors([]);
  };

  const handleHypothesisChange = (index, field, value) => {
    const newHypotheses = [...hypotheses];
    newHypotheses[index][field] = value;
    setHypotheses(newHypotheses);
  };

  const handleNumHypothesesChange = (num) => {
    const n = Math.max(2, Math.min(6, parseInt(num) || 3));
    setNumHypotheses(n);
    
    const newHypotheses = [];
    for (let i = 0; i < n; i++) {
      if (i < hypotheses.length) {
        newHypotheses.push(hypotheses[i]);
      } else {
        newHypotheses.push({
          name: `H${i + 1}`,
          prior: '',
          conditionalProb: ''
        });
      }
    }
    setHypotheses(newHypotheses);
  };

  return (
    <div style={{ maxWidth: '1800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      
      <div style={{ 
        background: 'linear-gradient(to right, #f1f5f9, #e2e8f0)', 
        padding: '8px 16px', 
        borderRadius: '6px',
        marginBottom: '20px',
        border: '1px solid #cbd5e1'
      }}>
        <p style={{ 
          margin: 0, 
          color: '#475569', 
          fontSize: '13px', 
          fontWeight: '500',
          lineHeight: '1.4'
        }}>
          Calculate posterior probabilities using Bayes&apos; Theorem with visual tree diagrams and step-by-step solutions.
        </p>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', color: '#333', fontSize: '15px' }}>
          Calculation Mode
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {[
            { value: 'general', label: 'General Bayes\' Theorem', desc: 'P(A|B) from P(A) and P(B|A)' },
            { value: 'medical', label: 'Medical Test', desc: 'Disease probability from test result' },
            { value: 'multiple', label: 'Multiple Hypotheses', desc: 'Compare several hypotheses' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setMode(option.value)}
              style={{
                padding: '12px 14px',
                border: mode === option.value ? '2px solid #007bff' : '2px solid #e5e7eb',
                borderRadius: '8px',
                background: mode === option.value ? '#e6f2ff' : 'white',
                color: mode === option.value ? '#007bff' : '#4b5563',
                fontWeight: mode === option.value ? '600' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontSize: '13px',
                textAlign: 'left'
              }}
            >
              <div style={{ fontWeight: '600', marginBottom: '4px' }}>{option.label}</div>
              <div style={{ fontSize: '11px', color: mode === option.value ? '#0056b3' : '#6b7280' }}>
                {option.desc}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr 440px', gap: '20px', alignItems: 'start' }}>
        
        {/* LEFT COLUMN - Inputs */}
        <div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #e5e7eb', 
            borderRadius: '12px', 
            padding: '20px',
            marginBottom: '16px'
          }}>
            <h2 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '16px', color: '#1a1a1a' }}>
              {mode === 'medical' ? 'Test Parameters' : mode === 'multiple' ? 'Hypotheses' : 'Input Probabilities'}
            </h2>
            
            {mode === 'general' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    P(A) - Prior Probability
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={pA}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (e.target.value === '' || (val >= 0 && val <= 1)) {
                        setPA(e.target.value);
                      }
                    }}
                    placeholder="0.00 - 1.00"
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                    Base probability that event A occurs
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    P(B|A) - Conditional Probability
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={pBgivenA}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (e.target.value === '' || (val >= 0 && val <= 1)) {
                        setPBgivenA(e.target.value);
                      }
                    }}
                    placeholder="0.00 - 1.00"
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                    Probability of B given A is true
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    P(B|A&apos;) - Conditional Probability if A is false
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={pBgivenNotA}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (e.target.value === '' || (val >= 0 && val <= 1)) {
                        setPBgivenNotA(e.target.value);
                      }
                    }}
                    placeholder="0.00 - 1.00"
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                    Probability of B given A is false
                  </div>
                </div>
              </div>
            )}

            {mode === 'medical' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    Disease Prevalence - P(Disease)
                  </label>
                  <input
                    type="number"
                    step="0.001"
                    min="0"
                    max="1"
                    value={prevalence}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (e.target.value === '' || (val >= 0 && val <= 1)) {
                        setPrevalence(e.target.value);
                      }
                    }}
                    placeholder="0.000 - 1.000"
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                    Probability a random person has the disease
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    Sensitivity - P(Positive|Disease)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={sensitivity}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (e.target.value === '' || (val >= 0 && val <= 1)) {
                        setSensitivity(e.target.value);
                      }
                    }}
                    placeholder="0.00 - 1.00"
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                    True positive rate (test correctly identifies disease)
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    Specificity - P(Negative|No Disease)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="1"
                    value={specificity}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (e.target.value === '' || (val >= 0 && val <= 1)) {
                        setSpecificity(e.target.value);
                      }
                    }}
                    placeholder="0.00 - 1.00"
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                  <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                    True negative rate (test correctly identifies no disease)
                  </div>
                </div>
              </div>
            )}

            {mode === 'multiple' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: '500', marginBottom: '6px', color: '#374151', fontSize: '13px' }}>
                    Number of Hypotheses (2-6)
                  </label>
                  <input
                    type="number"
                    min="2"
                    max="6"
                    value={numHypotheses}
                    onChange={(e) => handleNumHypothesesChange(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '9px 11px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '15px'
                    }}
                  />
                </div>

                <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>
                  Prior probabilities must sum to 1.0
                </div>

                {hypotheses.map((h, idx) => (
                  <div key={idx} style={{ 
                    background: '#f9fafb', 
                    padding: '12px', 
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{ fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      {h.name}
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', marginBottom: '4px', color: '#6b7280' }}>
                          Prior P({h.name})
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          max="1"
                          value={h.prior}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (e.target.value === '' || (val >= 0 && val <= 1)) {
                              handleHypothesisChange(idx, 'prior', e.target.value);
                            }
                          }}
                          placeholder="0.00"
                          style={{
                            width: '100%',
                            padding: '6px 8px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            fontSize: '13px'
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', marginBottom: '4px', color: '#6b7280' }}>
                          P(E|{h.name})
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          max="1"
                          value={h.conditionalProb}
                          onChange={(e) => {
                            const val = parseFloat(e.target.value);
                            if (e.target.value === '' || (val >= 0 && val <= 1)) {
                              handleHypothesisChange(idx, 'conditionalProb', e.target.value);
                            }
                          }}
                          placeholder="0.00"
                          style={{
                            width: '100%',
                            padding: '6px 8px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            fontSize: '13px'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '18px' }}>
              <button
                onClick={handleCalculate}
                style={{
                  padding: '11px',
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '7px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#0056b3'}
                onMouseOut={(e) => e.currentTarget.style.background = '#007bff'}
              >
                Calculate
              </button>
              
              <button
                onClick={handleReset}
                style={{
                  padding: '11px',
                  background: 'white',
                  color: '#6b7280',
                  border: '1px solid #d1d5db',
                  borderRadius: '7px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = '#f9fafb';
                  e.currentTarget.style.borderColor = '#9ca3af';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }}
              >
                Reset
              </button>
            </div>
          </div>

          {mode === 'general' && (
            <div style={{ 
              background: '#f0f9ff', 
              border: '1px solid #bae6fd', 
              borderRadius: '8px', 
              padding: '12px',
              fontSize: '12px',
              color: '#0c4a6e'
            }}>
              <div style={{ fontWeight: '600', marginBottom: '6px' }}>💡 Example: Rare Disease Test</div>
              <div style={{ marginBottom: '4px' }}>• P(A) = 0.01 (disease affects 1% of population)</div>
              <div style={{ marginBottom: '4px' }}>• P(B|A) = 0.95 (test is 95% accurate if you have disease)</div>
              <div>• P(B|A&apos;) = 0.05 (5% false positive rate)</div>
            </div>
          )}

          {mode === 'medical' && (
            <div style={{ 
              background: '#f0f9ff', 
              border: '1px solid #bae6fd', 
              borderRadius: '8px', 
              padding: '12px',
              fontSize: '12px',
              color: '#0c4a6e'
            }}>
              <div style={{ fontWeight: '600', marginBottom: '6px' }}>💡 Example: Cancer Screening</div>
              <div style={{ marginBottom: '4px' }}>• Prevalence = 0.01 (1% have cancer)</div>
              <div style={{ marginBottom: '4px' }}>• Sensitivity = 0.90 (90% true positive)</div>
              <div style={{ marginBottom: '4px' }}>• Specificity = 0.95 (95% true negative)</div>
              <div style={{ marginTop: '8px', fontStyle: 'italic', fontSize: '11px' }}>
                Even with high accuracy, positive test ≠ high disease probability when prevalence is low!
              </div>
            </div>
          )}

          {mode === 'multiple' && (
            <div style={{ 
              background: '#f0f9ff', 
              border: '1px solid #bae6fd', 
              borderRadius: '8px', 
              padding: '12px',
              fontSize: '12px',
              color: '#0c4a6e'
            }}>
              <div style={{ fontWeight: '600', marginBottom: '6px' }}>💡 Example: 3 Competing Theories</div>
              <div style={{ marginBottom: '4px' }}>H₁: P(H₁)=0.5, P(E|H₁)=0.8</div>
              <div style={{ marginBottom: '4px' }}>H₂: P(H₂)=0.3, P(E|H₂)=0.6</div>
              <div style={{ marginBottom: '4px' }}>H₃: P(H₃)=0.2, P(E|H₃)=0.4</div>
              <div style={{ marginTop: '8px', fontStyle: 'italic', fontSize: '11px' }}>
                Priors must sum to 1.0. Evidence E updates each hypothesis probability.
              </div>
            </div>
          )}
        </div>

        {/* MIDDLE COLUMN - Results & Step-by-step */}
        <div>
          {hasCalculated && errors.length > 0 && (
            <div style={{ 
              background: '#fef2f2', 
              border: '1px solid #fecaca', 
              borderRadius: '8px', 
              padding: '14px',
              marginBottom: '16px'
            }}>
              {errors.map((error, idx) => (
                <div key={idx} style={{ color: '#991b1b', fontSize: '13px', marginBottom: idx < errors.length - 1 ? '6px' : '0' }}>
                  ⚠ {error}
                </div>
              ))}
            </div>
          )}

          {hasCalculated && errors.length === 0 && results && mode !== 'multiple' && (
            <>
              <div style={{ 
                background: 'white', 
                border: '1px solid #e5e7eb', 
                borderRadius: '12px', 
                padding: '20px',
                marginBottom: '16px'
              }}>
                <h2 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '14px', color: '#1a1a1a' }}>
                  {mode === 'medical' ? 'Test Result' : 'Posterior Probability'}
                </h2>
                
                <div style={{ 
                  background: 'linear-gradient(135deg, #007bff 0%, #0056b3 100%)',
                  borderRadius: '12px',
                  padding: '20px',
                  color: 'white',
                  marginBottom: '14px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '13px', marginBottom: '6px', opacity: 0.9 }}>
                    {mode === 'medical' ? 'P(Disease|Positive Test)' : 'P(A|B)'}
                  </div>
                  <div style={{ fontSize: '42px', fontWeight: '700', fontFamily: 'monospace' }}>
                    {(results.posteriorA_B * 100).toFixed(2)}%
                  </div>
                  <div style={{ fontSize: '12px', marginTop: '6px', opacity: 0.85 }}>
                    {results.posteriorA_B < 0.1 ? '(Low probability)' : 
                     results.posteriorA_B < 0.5 ? '(Less than 50%)' :
                     results.posteriorA_B < 0.9 ? '(Likely)' : '(Very high)'}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <ResultCard 
                    label={mode === 'medical' ? 'P(No Disease|+)' : 'P(A\'|B)'}
                    value={results.posteriorNotA_B}
                    description="False positive prob."
                  />
                  <ResultCard 
                    label="P(B)"
                    value={results.pB}
                    description={mode === 'medical' ? 'Positive rate' : 'Total prob. of B'}
                  />
                  <ResultCard 
                    label="Prior Odds"
                    value={results.priorOdds}
                    description="Before evidence"
                    isOdds={true}
                  />
                  <ResultCard 
                    label="Likelihood Ratio"
                    value={results.likelihoodRatio}
                    description="Evidence strength"
                    isOdds={true}
                  />
                </div>
              </div>

              <StepByStepSolution calculations={calculations} />
            </>
          )}

          {hasCalculated && errors.length === 0 && results && mode === 'multiple' && (
            <>
              <div style={{ 
                background: 'white', 
                border: '1px solid #e5e7eb', 
                borderRadius: '12px', 
                padding: '20px',
                marginBottom: '16px'
              }}>
                <h2 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '14px', color: '#1a1a1a' }}>
                  Posterior Probabilities
                </h2>
                
                <div style={{ marginBottom: '14px' }}>
                  {results.hypotheses.map((h, idx) => (
                    <div key={idx} style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <span style={{ fontWeight: '600', color: '#374151', fontSize: '13px' }}>{h.name}</span>
                        <span style={{ fontWeight: '600', color: '#007bff', fontFamily: 'monospace', fontSize: '13px' }}>
                          {(h.posterior * 100).toFixed(2)}%
                        </span>
                      </div>
                      <div style={{ background: '#e5e7eb', borderRadius: '4px', height: '8px', overflow: 'hidden' }}>
                        <div style={{
                          background: 'linear-gradient(90deg, #007bff, #0056b3)',
                          height: '100%',
                          width: `${h.posterior * 100}%`,
                          transition: 'width 0.5s ease'
                        }} />
                      </div>
                      <div style={{ fontSize: '10px', color: '#6b7280', marginTop: '3px' }}>
                        Prior: {(h.prior * 100).toFixed(1)}% → Posterior: {(h.posterior * 100).toFixed(2)}%
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ 
                  background: '#f9fafb',
                  padding: '10px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  color: '#374151'
                }}>
                  <div style={{ marginBottom: '3px' }}>
                    <strong>Most Likely:</strong> {results.hypotheses.reduce((max, h) => h.posterior > max.posterior ? h : max).name} at {(results.hypotheses.reduce((max, h) => h.posterior > max.posterior ? h : max).posterior * 100).toFixed(2)}%
                  </div>
                  <div>
                    <strong>P(E):</strong> {(results.pE * 100).toFixed(2)}%
                  </div>
                </div>
              </div>

              <StepByStepSolution calculations={calculations} />
            </>
          )}

          {!hasCalculated && (
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '40px',
              textAlign: 'center',
              color: '#6b7280'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎯</div>
              <div style={{ fontSize: '16px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Ready to Calculate
              </div>
              <div style={{ fontSize: '14px' }}>
                Enter your probabilities and click Calculate to see Bayes&apos; Theorem in action
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN - Tree Diagram */}
        <div>
          {hasCalculated && errors.length === 0 && results && mode !== 'multiple' && (
            <BayesTreeDiagram results={results} mode={mode} instanceId={instanceId} />
          )}

          {hasCalculated && errors.length === 0 && results && mode === 'multiple' && (
            <MultipleHypothesesDiagram results={results} instanceId={instanceId} />
          )}

          {!hasCalculated && (
            <div style={{
              background: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '12px',
              padding: '40px',
              textAlign: 'center',
              color: '#6b7280',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: '400px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
              <div style={{ fontSize: '16px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                Visualization Ready
              </div>
              <div style={{ fontSize: '14px' }}>
                Tree diagram will appear here after calculation
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ResultCard({ label, value, description, isOdds = false }) {
  return (
    <div style={{
      background: '#f9fafb',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      padding: '12px'
    }}>
      <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '3px' }}>
        {label}
      </div>
      <div style={{ fontSize: '22px', fontWeight: '700', color: '#1f2937', fontFamily: 'monospace', marginBottom: '3px' }}>
        {isOdds ? value.toFixed(2) : (value * 100).toFixed(2) + '%'}
      </div>
      <div style={{ fontSize: '10px', color: '#9ca3af' }}>
        {description}
      </div>
    </div>
  );
}

function StepByStepSolution({ calculations }) {
  const [expandedSteps, setExpandedSteps] = useState([]);

  const toggleStep = (index) => {
    if (expandedSteps.includes(index)) {
      setExpandedSteps(expandedSteps.filter(i => i !== index));
    } else {
      setExpandedSteps([...expandedSteps, index]);
    }
  };

  return (
    <div style={{ 
      background: 'white', 
      border: '1px solid #e5e7eb', 
      borderRadius: '12px', 
      padding: '16px'
    }}>
      <h2 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>
        Step-by-Step Solution
      </h2>
      
      {calculations.map((step, idx) => (
        <div key={idx} style={{
          marginBottom: '10px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div
            onClick={() => toggleStep(idx)}
            style={{
              padding: '10px 12px',
              background: expandedSteps.includes(idx) ? '#f9fafb' : 'white',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span style={{ fontWeight: '600', color: '#374151', fontSize: '13px' }}>
              {step.title}
            </span>
            <span style={{ color: '#9ca3af', fontSize: '11px' }}>
              {expandedSteps.includes(idx) ? '▼' : '▶'}
            </span>
          </div>
          
          {expandedSteps.includes(idx) && (
            <div style={{
              padding: '12px',
              background: '#fafafa',
              borderTop: '1px solid #e5e7eb'
            }}>
              {step.items.map((item, itemIdx) => (
                <div 
                  key={itemIdx}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    color: '#4b5563',
                    marginBottom: itemIdx < step.items.length - 1 ? '5px' : '0',
                    paddingLeft: itemIdx > 0 && !item.includes('=') ? '0' : '0'
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function BayesTreeDiagram({ results, mode, instanceId }) {
  return (
    <div style={{ 
      background: 'white', 
      border: '1px solid #e5e7eb', 
      borderRadius: '12px', 
      padding: '16px'
    }}>
      <h2 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>
        Probability Tree Diagram
      </h2>
      
      <svg width="100%" height="500" viewBox="0 0 420 500" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fafafa' }}>
        {/* Root */}
        <circle cx="50" cy="250" r="8" fill="#007bff" />
        <text x="20" y="245" fontSize="13" fill="#374151" fontWeight="600">Start</text>
        
        {/* Branch to A */}
        <line x1="58" y1="235" x2="120" y2="120" stroke="#007bff" strokeWidth="2.5" />
        <text x="65" y="165" fontSize="12" fill="#007bff" fontWeight="600">
          P(A)
        </text>
        <text x="65" y="180" fontSize="11" fill="#007bff" fontWeight="600">
          {results.priorA.toFixed(3)}
        </text>
        <circle cx="130" cy="110" r="8" fill="#007bff" />
        <text x="142" y="115" fontSize="13" fill="#374151" fontWeight="600">A</text>
        
        {/* Branch to not A */}
        <line x1="58" y1="265" x2="120" y2="380" stroke="#6b7280" strokeWidth="2.5" />
        <text x="65" y="330" fontSize="12" fill="#6b7280" fontWeight="600">
          P(A&apos;)
        </text>
        <text x="65" y="345" fontSize="11" fill="#6b7280" fontWeight="600">
          {results.priorNotA.toFixed(3)}
        </text>
        <circle cx="130" cy="390" r="8" fill="#6b7280" />
        <text x="142" y="395" fontSize="13" fill="#374151" fontWeight="600">A&apos;</text>
        
        {/* From A to B */}
        <line x1="138" y1="110" x2="220" y2="50" stroke="#10b981" strokeWidth="2.5" />
        <text x="160" y="70" fontSize="11" fill="#10b981" fontWeight="600">
          P(B|A)
        </text>
        <text x="160" y="83" fontSize="10" fill="#10b981" fontWeight="600">
          {results.condProbB_A.toFixed(3)}
        </text>
        <circle cx="230" cy="45" r="8" fill="#10b981" />
        <text x="242" y="50" fontSize="13" fill="#374151" fontWeight="600">B</text>
        
        {/* From A to not B */}
        <line x1="138" y1="115" x2="220" y2="170" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5,5" />
        <text x="155" y="145" fontSize="11" fill="#9ca3af">
          P(B&apos;|A)
        </text>
        <text x="155" y="158" fontSize="10" fill="#9ca3af">
          {(1 - results.condProbB_A).toFixed(3)}
        </text>
        <circle cx="230" cy="175" r="8" fill="#9ca3af" />
        <text x="242" y="180" fontSize="13" fill="#374151">B&apos;</text>
        
        {/* From not A to B */}
        <line x1="138" y1="385" x2="220" y2="330" stroke="#f59e0b" strokeWidth="2.5" />
        <text x="155" y="355" fontSize="11" fill="#f59e0b" fontWeight="600">
          P(B|A&apos;)
        </text>
        <text x="155" y="368" fontSize="10" fill="#f59e0b" fontWeight="600">
          {results.condProbB_notA.toFixed(3)}
        </text>
        <circle cx="230" cy="325" r="8" fill="#f59e0b" />
        <text x="242" y="330" fontSize="13" fill="#374151" fontWeight="600">B</text>
        
        {/* From not A to not B */}
        <line x1="138" y1="395" x2="220" y2="450" stroke="#9ca3af" strokeWidth="2" strokeDasharray="5,5" />
        <text x="155" y="425" fontSize="11" fill="#9ca3af">
          P(B&apos;|A&apos;)
        </text>
        <text x="155" y="438" fontSize="10" fill="#9ca3af">
          {(1 - results.condProbB_notA).toFixed(3)}
        </text>
        <circle cx="230" cy="455" r="8" fill="#9ca3af" />
        <text x="242" y="460" fontSize="13" fill="#374151">B&apos;</text>
        
        {/* Joint probabilities */}
        <text x="250" y="50" fontSize="11" fill="#374151" fontFamily="monospace">
          P(A∩B)
        </text>
        <text x="250" y="65" fontSize="12" fill="#10b981" fontFamily="monospace" fontWeight="600">
          {(results.priorA * results.condProbB_A).toFixed(4)}
        </text>
        
        <text x="250" y="180" fontSize="11" fill="#9ca3af" fontFamily="monospace">
          P(A∩B&apos;)
        </text>
        <text x="250" y="195" fontSize="11" fill="#9ca3af" fontFamily="monospace">
          {(results.priorA * (1 - results.condProbB_A)).toFixed(4)}
        </text>
        
        <text x="250" y="330" fontSize="11" fill="#374151" fontFamily="monospace">
          P(A&apos;∩B)
        </text>
        <text x="250" y="345" fontSize="12" fill="#f59e0b" fontFamily="monospace" fontWeight="600">
          {(results.priorNotA * results.condProbB_notA).toFixed(4)}
        </text>
        
        <text x="250" y="460" fontSize="11" fill="#9ca3af" fontFamily="monospace">
          P(A&apos;∩B&apos;)
        </text>
        <text x="250" y="475" fontSize="11" fill="#9ca3af" fontFamily="monospace">
          {(results.priorNotA * (1 - results.condProbB_notA)).toFixed(4)}
        </text>
        
        {/* Highlight the paths we care about */}
        <rect x="245" y="35" width="130" height="35" fill="#dcfce7" fillOpacity="0.3" rx="4" />
        <rect x="245" y="315" width="130" height="35" fill="#fef3c7" fillOpacity="0.3" rx="4" />
        
        {/* P(B) annotation */}
        <rect x="60" y="460" width="300" height="28" fill="#e0f2fe" rx="6" />
        <text x="210" y="479" fontSize="13" fill="#0c4a6e" fontWeight="600" textAnchor="middle">
          P(B) = {results.pB.toFixed(4)}
        </text>
      </svg>
      
      <div style={{ 
        marginTop: '12px',
        padding: '10px',
        background: '#f0f9ff',
        borderRadius: '6px',
        fontSize: '11px',
        color: '#0c4a6e',
        lineHeight: '1.5'
      }}>
        <strong>Reading the diagram:</strong> Follow the highlighted green and orange paths to B. The posterior probability P(A|B) = {results.posteriorA_B.toFixed(4)} compares these paths using Bayes&apos; Theorem.
      </div>
    </div>
  );
}

function MultipleHypothesesDiagram({ results, instanceId }) {
  const colors = ['#007bff', '#f59e0b', '#10b981', '#ef4444', '#8b5cf6', '#ec4899'];
  
  return (
    <div style={{ 
      background: 'white', 
      border: '1px solid #e5e7eb', 
      borderRadius: '12px', 
      padding: '16px'
    }}>
      <h2 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '12px', color: '#1a1a1a' }}>
        Hypothesis Comparison
      </h2>
      
      <svg width="100%" height="500" viewBox="0 0 420 500" style={{ border: '1px solid #e5e7eb', borderRadius: '8px', background: '#fafafa' }}>
        {/* Root */}
        <circle cx="50" cy="250" r="8" fill="#007bff" />
        <text x="15" y="245" fontSize="13" fill="#374151" fontWeight="600">Start</text>
        
        {results.hypotheses.map((h, idx) => {
          const totalHyp = results.hypotheses.length;
          const yPos = 50 + (idx * 400 / (totalHyp - 1));
          const color = colors[idx % colors.length];
          
          return (
            <g key={idx}>
              {/* Branch to hypothesis */}
              <line x1="58" y1="250" x2="140" y2={yPos} stroke={color} strokeWidth="2.5" />
              <text x="80" y={yPos < 250 ? yPos + 25 : yPos - 15} fontSize="11" fill={color} fontWeight="600">
                P({h.name})
              </text>
              <text x="80" y={yPos < 250 ? yPos + 38 : yPos - 2} fontSize="10" fill={color} fontWeight="600">
                {h.prior.toFixed(3)}
              </text>
              <circle cx="150" cy={yPos} r="8" fill={color} />
              <text x="162" y={yPos + 5} fontSize="13" fill="#374151" fontWeight="600">{h.name}</text>
              
              {/* Branch to Evidence */}
              <line x1="158" y1={yPos} x2="260" y2={yPos} stroke={color} strokeWidth="2.5" />
              <text x="195" y={yPos - 8} fontSize="11" fill={color} fontWeight="600">
                P(E|{h.name})
              </text>
              <text x="195" y={yPos + 5} fontSize="10" fill={color} fontWeight="600">
                {h.conditionalProb.toFixed(3)}
              </text>
              <circle cx="270" cy={yPos} r="8" fill={color} />
              <text x="282" y={yPos + 5} fontSize="13" fill="#374151" fontWeight="600">E</text>
              
              {/* Posterior */}
              <text x="295" y={yPos - 2} fontSize="11" fill="#374151" fontFamily="monospace">
                P({h.name}|E)
              </text>
              <text x="295" y={yPos + 13} fontSize="13" fill={color} fontFamily="monospace" fontWeight="700">
                {h.posterior.toFixed(4)}
              </text>
              
              {/* Highlight most likely */}
              {h.posterior === Math.max(...results.hypotheses.map(hyp => hyp.posterior)) && (
                <rect x="290" y={yPos - 10} width="105" height="28" fill={color} fillOpacity="0.15" rx="4" />
              )}
            </g>
          );
        })}
        
        {/* P(E) annotation */}
        <rect x="60" y="465" width="300" height="28" fill="#e0f2fe" rx="6" />
        <text x="210" y="484" fontSize="13" fill="#0c4a6e" fontWeight="600" textAnchor="middle">
          P(E) = {results.pE.toFixed(4)}
        </text>
      </svg>
      
      <div style={{ 
        marginTop: '12px',
        padding: '10px',
        background: '#f0f9ff',
        borderRadius: '6px',
        fontSize: '11px',
        color: '#0c4a6e',
        lineHeight: '1.5'
      }}>
        <strong>Most likely hypothesis:</strong> {results.hypotheses.reduce((max, h) => h.posterior > max.posterior ? h : max).name} with posterior probability of {(results.hypotheses.reduce((max, h) => h.posterior > max.posterior ? h : max).posterior * 100).toFixed(2)}%
      </div>
    </div>
  );
}