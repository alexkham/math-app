import React, { useState } from 'react';
import styles from './VennExplorer.module.css';

const VennExplorer2 = ({ problemsData = [] }) => {
  const defaultProblems = [
    {
      name: "Student Survey",
      events: ["Student", "Employed"],
      marginals: [0.6, 0.4],
      constraints: [
        { display: "P(A ∩ B) = 0.15" }
      ],
      solution: [0.15, 0.45, 0.25, 0.15],
      explanations: [
        "Student AND Employed",
        "Student AND NOT Employed",
        "NOT Student AND Employed", 
        "NOT Student AND NOT Employed"
      ],
      calculations: {
        0: { step: "Given P(A∩B)", formula: "P(A∩B) = 0.15" },
        1: { step: "P(A∩Bᶜ) = P(A) - P(A∩B)", formula: "= 0.6 - 0.15 = 0.45" },
        2: { step: "P(Aᶜ∩B) = P(B) - P(A∩B)", formula: "= 0.4 - 0.15 = 0.25" },
        3: { step: "P(Aᶜ∩Bᶜ) = 1 - P(A) - P(Aᶜ∩B)", formula: "= 1 - 0.6 - 0.25 = 0.15" }
      }
    },
    {
      name: "Health Screening",
      events: ["Has Condition", "Test Positive"],
      marginals: [0.2, 0.3],
      constraints: [
        { display: "P(A ∩ Bᶜ) = 0.05" }
      ],
      solution: [0.15, 0.05, 0.15, 0.65],
      explanations: [
        "Has Condition AND Test Positive",
        "Has Condition AND Test Negative",
        "No Condition AND Test Positive",
        "No Condition AND Test Negative"
      ],
      calculations: {
        0: { step: "P(A∩B) = P(A) - P(A∩Bᶜ)", formula: "= 0.2 - 0.05 = 0.15" },
        1: { step: "Given P(A∩Bᶜ)", formula: "P(A∩Bᶜ) = 0.05" },
        2: { step: "P(Aᶜ∩B) = P(B) - P(A∩B)", formula: "= 0.3 - 0.15 = 0.15" },
        3: { step: "P(Aᶜ∩Bᶜ) = 1 - sum of others", formula: "= 1 - 0.15 - 0.05 - 0.15 = 0.65" }
      }
    }
  ];

  const problems = problemsData.length > 0 ? problemsData : defaultProblems;
  const [currentProblem, setCurrentProblem] = useState(0);
  const [selectedOutcome, setSelectedOutcome] = useState(null);
  const [hoveredOutcome, setHoveredOutcome] = useState(null);
  const [showCalculations, setShowCalculations] = useState(false);

  const problem = problems[currentProblem];
  const outcomes = ['A∩B', 'A∩Bᶜ', 'Aᶜ∩B', 'Aᶜ∩Bᶜ'];

  const MathText = ({ children }) => (
    <span className={styles.mathText}>{children}</span>
  );

  const VennSVG2 = ({ solution }) => {
    const segments = [
      { x: 250, y: 175 }, // 1: A∩B - intersection
      { x: 180, y: 175 }, // 2: A∩Bᶜ - A only  
      { x: 320, y: 175 }, // 3: Aᶜ∩B - B only
      { x: 400, y: 80 }   // 4: Aᶜ∩Bᶜ - outside both
    ];

    return (
      <div style={{ position: 'relative' }}>
        <svg width="500" height="300" style={{ border: '1px solid #ccc', borderRadius: '4px', backgroundColor: 'white' }}>
          <rect width="500" height="300" fill="#fafafa"/>
          
          {/* Omega symbol */}
          <text x="20" y="30" style={{ fontSize: '18px', fontWeight: 'bold', fill: '#374151' }}>Ω</text>
          
          {/* Two circles */}
          <circle cx="200" cy="175" r="80" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="2"/>
          <circle cx="300" cy="175" r="80" fill="rgba(34,197,94,0.15)" stroke="#22c55e" strokeWidth="2"/>

          {/* Clickable segments */}
          {segments.map((seg, i) => (
            <g key={i}>
              <rect 
                x={seg.x - 15} y={seg.y - 10} width="30" height="20" 
                fill={selectedOutcome === i ? "rgba(255,215,0,0.9)" : hoveredOutcome === i ? "rgba(255,255,0,0.6)" : "rgba(255,255,255,0.9)"}
                stroke={selectedOutcome === i ? "#f59e0b" : "#333"} 
                strokeWidth={selectedOutcome === i ? "2" : "1"} 
                rx="3"
                onMouseEnter={() => setHoveredOutcome(i)}
                onMouseLeave={() => setHoveredOutcome(null)}
                onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
                style={{ cursor: 'pointer' }}
              />
              <text 
                x={seg.x} y={seg.y + 3} 
                textAnchor="middle" 
                style={{ fontSize: '12px', fontWeight: 'bold', pointerEvents: 'none' }}
              >
                {i + 1}
              </text>
            </g>
          ))}

          {/* Event Labels */}
          <text x="150" y="140" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#dc2626' }}>A</text>
          <text x="330" y="140" style={{ fontSize: '20px', fontWeight: 'bold', fill: '#16a34a' }}>B</text>
        </svg>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>2-Set Probability Problems</h1>
          {problems.length > 1 && (
            <div className={styles.buttonContainer}>
              {problems.map((p, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentProblem(i)}
                  className={`${styles.button} ${currentProblem === i ? styles.buttonActive : styles.buttonInactive}`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <h3 className={styles.diagramTitle}>Venn Diagram</h3>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.leftColumn}>
          <h2 className={styles.problemTitle}>{problem.name}</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Events:</h3>
              {problem.events.map((event, i) => (
                <div key={i} className={styles.eventItem}>
                  <MathText>{String.fromCharCode(65 + i)}</MathText>: {event} (<MathText>P = {problem.marginals[i]}</MathText>)
                </div>
              ))}
            </div>

            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Given Constraints:</h3>
              {problem.constraints.map((constraint, i) => (
                <div key={i} className={styles.constraint}>
                  <MathText>{constraint.display}</MathText>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.middleColumn}>
          <div className={styles.section}>
            <div className={styles.outcomeHeader}>
              <h3 className={styles.sectionTitle}>4 Possible Outcomes:</h3>
              <button 
                onClick={() => setShowCalculations(!showCalculations)}
                className={styles.calcButton}
              >
                {showCalculations ? 'Hide' : 'Show'} Calculations
              </button>
            </div>
            <div className={styles.outcomeList}>
              {outcomes.map((outcome, i) => (
                <div 
                  key={i}
                  className={`${styles.outcomeItem} ${selectedOutcome === i ? styles.outcomeActive : ''}`}
                  onMouseEnter={() => setHoveredOutcome(i)}
                  onMouseLeave={() => setHoveredOutcome(null)}
                  onClick={() => setSelectedOutcome(selectedOutcome === i ? null : i)}
                >
                  <div className={styles.outcomeContent}>
                    <div className={styles.outcomeLeft}>
                      <span className={styles.outcomeNumber}>#{i + 1}: </span>
                      <MathText>{outcome}</MathText>
                      <span className={styles.outcomeExplanation}>= {problem.explanations[i]}</span>
                    </div>
                    <div className={styles.probability}>
                      {problem.solution[i]?.toFixed(3)}
                    </div>
                  </div>
                  {showCalculations && (
                    <div className={styles.calculation}>
                      <div className={styles.calcTitle}>Calculation for #{i + 1}:</div>
                      <div className={styles.calcStep}>{problem.calculations[i].step}</div>
                      <div className={styles.calcFormula}>{problem.calculations[i].formula}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <VennSVG2 solution={problem.solution} />
          <div className={styles.diagramNotes}>
            <p>• Click segments to select/deselect</p>
            <p>• Hover to preview outcomes</p>
            <p>• All 4 segments sum to 1.0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VennExplorer2;