
import { useState, useCallback } from 'react';
import styles from './ConditionalProbabilityTable.module.css';
import { scenarios } from './scenarios';

export default function ConditionalProbabilityTable() {
  const [currentScenario, setCurrentScenario] = useState('medical');
  const [conditionName, setConditionName] = useState('Disease');
  const [outcomeName, setOutcomeName] = useState('Test+');
  const [cell11, setCell11] = useState(95);
  const [cell10, setCell10] = useState(5);
  const [cell01, setCell01] = useState(495);
  const [cell00, setCell00] = useState(9405);

  const loadScenario = useCallback((scenarioName) => {
    setCurrentScenario(scenarioName);
    
    if (scenarioName === 'custom') return;
    
    const scenario = scenarios[scenarioName];
    setConditionName(scenario.conditionName);
    setOutcomeName(scenario.outcomeName);
    setCell11(scenario.cell11);
    setCell10(scenario.cell10);
    setCell01(scenario.cell01);
    setCell00(scenario.cell00);
  }, []);

  const calculations = useCallback(() => {
    const totalConditionYes = cell11 + cell10;
    const totalConditionNo = cell01 + cell00;
    const totalOutcomeYes = cell11 + cell01;
    const totalOutcomeNo = cell10 + cell00;
    const grandTotal = cell11 + cell10 + cell01 + cell00;
    
    const pOutcomeGivenConditionYes = totalConditionYes > 0 ? cell11 / totalConditionYes : 0;
    const pNoOutcomeGivenConditionYes = totalConditionYes > 0 ? cell10 / totalConditionYes : 0;
    const pOutcomeGivenConditionNo = totalConditionNo > 0 ? cell01 / totalConditionNo : 0;
    const pNoOutcomeGivenConditionNo = totalConditionNo > 0 ? cell00 / totalConditionNo : 0;
    const pConditionGivenOutcome = totalOutcomeYes > 0 ? cell11 / totalOutcomeYes : 0;
    const pNoConditionGivenOutcome = totalOutcomeYes > 0 ? cell01 / totalOutcomeYes : 0;

    return {
      totals: { totalConditionYes, totalConditionNo, totalOutcomeYes, totalOutcomeNo, grandTotal },
      conditionals: {
        pOutcomeGivenConditionYes,
        pNoOutcomeGivenConditionYes,
        pOutcomeGivenConditionNo,
        pNoOutcomeGivenConditionNo,
        pConditionGivenOutcome,
        pNoConditionGivenOutcome
      }
    };
  }, [cell11, cell10, cell01, cell00]);

  const { totals, conditionals } = calculations();

  return (
    <div className={styles.container}>
      {/* <div className={styles.header}>
        <h1>Conditional Probability with Contingency Tables</h1>
        <p>Understanding P(B|A) through cross-tabulation of frequencies</p>
      </div> */}
      
      <div className={styles.controls}>
        <div className={styles.scenarioButtons}>
          {Object.keys(scenarios).map(key => (
            <button
              key={key}
              className={`${styles.scenarioBtn} ${currentScenario === key ? styles.active : ''}`}
              onClick={() => loadScenario(key)}
            >
              {scenarios[key].label}
            </button>
          ))}
          <button
            className={`${styles.scenarioBtn} ${currentScenario === 'custom' ? styles.active : ''}`}
            onClick={() => loadScenario('custom')}
          >
            Custom
          </button>
        </div>
        
        <div className={styles.labelsSection}>
          <div className={styles.labelGroup}>
            <label>Condition Name:</label>
            <input
              type="text"
              value={conditionName}
              onChange={(e) => setConditionName(e.target.value)}
            />
          </div>
          <div className={styles.labelGroup}>
            <label>Outcome Name:</label>
            <input
              type="text"
              value={outcomeName}
              onChange={(e) => setOutcomeName(e.target.value)}
            />
          </div>
        </div>
      </div>
      
      <div className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <div className={styles.leftContent}>
            <div className={styles.tablesContainer}>
              <div className={styles.tablePanel}>
                <div className={styles.tableTitle}>Frequency Table (Counts)</div>
                <table className={styles.contingencyTable}>
                  <thead>
                    <tr>
                      <th></th>
                      <th>{outcomeName}</th>
                      <th>No {outcomeName}</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{conditionName}</th>
                      <td className={styles.highlightIntersection}>
                        <input
                          type="number"
                          className={styles.cellInput}
                          value={cell11}
                          onChange={(e) => setCell11(parseInt(e.target.value) || 0)}
                        />
                        <div className={styles.probabilityDisplay}>
                          {(cell11 / totals.grandTotal).toFixed(4)}
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.cellInput}
                          value={cell10}
                          onChange={(e) => setCell10(parseInt(e.target.value) || 0)}
                        />
                        <div className={styles.probabilityDisplay}>
                          {(cell10 / totals.grandTotal).toFixed(4)}
                        </div>
                      </td>
                      <td className={`${styles.totalCell} ${styles.highlightCondition}`}>
                        {totals.totalConditionYes}
                      </td>
                    </tr>
                    <tr>
                      <th>No {conditionName}</th>
                      <td>
                        <input
                          type="number"
                          className={styles.cellInput}
                          value={cell01}
                          onChange={(e) => setCell01(parseInt(e.target.value) || 0)}
                        />
                        <div className={styles.probabilityDisplay}>
                          {(cell01 / totals.grandTotal).toFixed(4)}
                        </div>
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.cellInput}
                          value={cell00}
                          onChange={(e) => setCell00(parseInt(e.target.value) || 0)}
                        />
                        <div className={styles.probabilityDisplay}>
                          {(cell00 / totals.grandTotal).toFixed(4)}
                        </div>
                      </td>
                      <td className={styles.totalCell}>{totals.totalConditionNo}</td>
                    </tr>
                    <tr>
                      <th>Total</th>
                      <td className={`${styles.totalCell} ${styles.highlightOutcome}`}>
                        {totals.totalOutcomeYes}
                      </td>
                      <td className={styles.totalCell}>{totals.totalOutcomeNo}</td>
                      <td className={styles.totalCell}>{totals.grandTotal}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className={styles.tablePanel}>
                <div className={styles.tableTitle}>Conditional Probabilities Given {conditionName}</div>
                <table className={`${styles.contingencyTable} ${styles.conditionalTable}`}>
                  <thead>
                    <tr>
                      <th>Given Condition</th>
                      <th>{outcomeName}</th>
                      <th>No {outcomeName}</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{conditionName}</th>
                      <td className={styles.highlightIntersection}>
                        <div>{(conditionals.pOutcomeGivenConditionYes * 100).toFixed(1)}%</div>
                        <div className={styles.probabilityDisplay}>P({outcomeName}|{conditionName})</div>
                      </td>
                      <td>
                        <div>{(conditionals.pNoOutcomeGivenConditionYes * 100).toFixed(1)}%</div>
                        <div className={styles.probabilityDisplay}>P(No {outcomeName}|{conditionName})</div>
                      </td>
                      <td className={styles.totalCell}>100%</td>
                    </tr>
                    <tr>
                      <th>No {conditionName}</th>
                      <td>
                        <div>{(conditionals.pOutcomeGivenConditionNo * 100).toFixed(1)}%</div>
                        <div className={styles.probabilityDisplay}>P({outcomeName}|No {conditionName})</div>
                      </td>
                      <td>
                        <div>{(conditionals.pNoOutcomeGivenConditionNo * 100).toFixed(1)}%</div>
                        <div className={styles.probabilityDisplay}>P(No {outcomeName}|No {conditionName})</div>
                      </td>
                      <td className={styles.totalCell}>100%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className={styles.calculationSection}>
              <div className={styles.calculationTitle}>Conditional Probability Calculations</div>
              <div className={styles.calculationGrid}>
                <div className={styles.calcBox}>
                  <div className={styles.calcFormula}>P({outcomeName} | {conditionName})</div>
                  <div className={styles.calcSubstitution}>= {cell11} / {totals.totalConditionYes}</div>
                  <div className={styles.calcResult}>{(conditionals.pOutcomeGivenConditionYes * 100).toFixed(1)}%</div>
                </div>
                
                <div className={styles.calcBox}>
                  <div className={styles.calcFormula}>P({outcomeName} | No {conditionName})</div>
                  <div className={styles.calcSubstitution}>= {cell01} / {totals.totalConditionNo}</div>
                  <div className={styles.calcResult}>{(conditionals.pOutcomeGivenConditionNo * 100).toFixed(1)}%</div>
                </div>
                
                <div className={styles.calcBox}>
                  <div className={styles.calcFormula}>P({conditionName} | {outcomeName})</div>
                  <div className={styles.calcSubstitution}>= {cell11} / {totals.totalOutcomeYes}</div>
                  <div className={styles.calcResult}>{(conditionals.pConditionGivenOutcome * 100).toFixed(1)}%</div>
                </div>
                
                <div className={styles.calcBox}>
                  <div className={styles.calcFormula}>P(No {conditionName} | {outcomeName})</div>
                  <div className={styles.calcSubstitution}>= {cell01} / {totals.totalOutcomeYes}</div>
                  <div className={styles.calcResult}>{(conditionals.pNoConditionGivenOutcome * 100).toFixed(1)}%</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.rightSidebar}>
            <div className={styles.interpretation}>
              <h3>Understanding the Results</h3>
              
              <div className={styles.keyInsight}>
                <strong>Key Insight:</strong> Conditional probability focuses on a subset of the data. When we calculate P(B|A), we only look at the rows/columns where A occurred.
              </div>
              
              <p><strong>How to read contingency tables for conditional probability:</strong></p>
              <ul>
                <li><strong>P(Outcome | Condition):</strong> Look at the condition row, divide the intersection by the row total</li>
                <li><strong>P(Condition | Outcome):</strong> Look at the outcome column, divide the intersection by the column total</li>
                <li><strong>The intersection cell</strong> represents both events happening together</li>
                <li><strong>Marginal totals</strong> show the unconditional probabilities</li>
              </ul>
              
              {currentScenario !== 'custom' && scenarios[currentScenario] && (
                <div className={styles.keyInsight}>
                  <strong>{scenarios[currentScenario].label} Interpretation:</strong> {scenarios[currentScenario].interpretation}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}