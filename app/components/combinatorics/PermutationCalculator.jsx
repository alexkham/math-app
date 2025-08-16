
import React, { useState } from 'react';

const PermutationCombinationCalculator = () => {
  const [step, setStep] = useState(0);
  const [selection, setSelection] = useState({});
  const [result, setResult] = useState(null);
  const [groups, setGroups] = useState([]);
  const [groupCount, setGroupCount] = useState(0);

  const steps = [
    {
      question: "What do you want to calculate?",
      options: [
        { value: "selecting", label: "Ways to choose items" },
        { value: "arranging", label: "Ways to order items" },
        { value: "distributing", label: "Ways to distribute items" }
      ]
    },
    {
      question: "Can items be repeated?",
      options: [
        { value: "unique", label: "No, each item is used once" },
        { value: "repeated", label: "Yes, items can be repeated" }
      ]
    },
    {
      question: "How many items are there in total (n)?",
      input: "n"
    },
    {
      question: "How many groups of repeated items?",
      input: "groupCount",
      conditional: "repeated"
    },
    {
      question: "Enter the number of items for each group",
      dynamicInput: true,
      conditional: "repeated"
    },
    {
      question: "How many items are being chosen/arranged/distributed (r)?",
      input: "r"
    }
  ];

  const handleOptionSelection = (value) => {
    setSelection({ ...selection, [steps[step].question]: value });
    advanceStep();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelection({ ...selection, [name]: parseInt(value) });

    if (name === "groupCount") {
      setGroupCount(parseInt(value));
      setGroups(new Array(parseInt(value)).fill(0));
    } else if (name.startsWith("groupSize")) {
      const index = parseInt(name.split("-")[1]);
      const newGroups = [...groups];
      newGroups[index] = parseInt(value);
      setGroups(newGroups);
    }
  };

  const advanceStep = () => {
    if (step === 3 && selection["Can items be repeated?"] === "repeated") {
      setStep(4); // Ensure moving to group sizes
    } else if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const calculateResult = () => {
    // Placeholder for calculation logic
    setResult({ value: "Calculated Result", formula: "Used Formula" });
  };

  const resetCalculator = () => {
    setStep(0);
    setSelection({});
    setResult(null);
    setGroups([]);
    setGroupCount(0);
  };

  return (
    <div style={{ width: '400px', border: '1px solid #ccc', padding: '20px' }}>
      <h2>Combination/Permutation Calculator</h2>
      <p>Answer the questions to calculate</p>

      <div style={{ marginBottom: '20px' }}>
        <h4>Your selections so far:</h4>
        <ul>
          {Object.entries(selection).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      </div>

      {step < steps.length && (
        <div>
          <h3>{steps[step].question}</h3>
          {steps[step].options ? (
            steps[step].options.map((option) => (
              <div key={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  name={steps[step].question}
                  value={option.value}
                  onChange={() => handleOptionSelection(option.value)}
                />
                <label htmlFor={option.value}>{option.label}</label>
              </div>
            ))
          ) : steps[step].dynamicInput ? (
            groups.map((_, index) => (
              <div key={index}>
                <label>Group {index + 1} size:</label>
                <input
                  type="number"
                  id={`groupSize-${index}`}
                  name={`groupSize-${index}`}
                  placeholder="Enter group size"
                  value={groups[index] || ''}
                  onChange={handleInputChange}
                />
              </div>
            ))
          ) : (
            <div>
              <label htmlFor={steps[step].input}>{steps[step].question}</label>
              <input
                type="number"
                id={steps[step].input}
                name={steps[step].input}
                placeholder="Enter a number"
                value={selection[steps[step].input] || ''}
                onChange={handleInputChange}
              />
            </div>
          )}
          {step < steps.length - 1 && <button onClick={advanceStep}>Next</button>}
        </div>
      )}

      {step === steps.length - 1 && (
        <button onClick={calculateResult}>Calculate</button>
      )}

      {result && (
        <div>
          <p><strong>Result:</strong> {result.value}</p>
          <p><strong>Formula used:</strong> {result.formula}</p>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <button onClick={resetCalculator}>Reset</button>
        {step > 0 && <button onClick={() => setStep(step - 1)}>Go Back</button>}
      </div>
    </div>
  );
};

export default PermutationCombinationCalculator;
