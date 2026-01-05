
import React, { useState, useEffect } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const styles = {
  calculator: {
    maxWidth: '700px',
    margin: '-15px auto',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '6px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px'
  },
  title: {
    fontSize: '20px',
    color: '#333'
  },
  buttons: {
    display: 'flex',
    gap: '8px'
  },
  button: {
    padding: '6px 12px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '12px',
    color: '#fff'
  },
  randomBtn: {
    backgroundColor: '#4CAF50'
  },
  resetBtn: {
    backgroundColor: '#2196F3'
  },
  messageContainer: {
    height: '37px',
    marginBottom: '10px',
    padding: '8px',
    borderRadius: '3px',
  },
  hint: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2'
  },
  error: {
    backgroundColor: '#ffebee',
    color: '#c62828'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '8px'
  },
  th: {
    padding: '8px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ddd',
    fontWeight: 'bold',
    minWidth: '45px'
  },
  firstColumn: {
    width: '45px',
    minWidth: '45px'
  },
  td: {
    padding: '8px',
    border: '1px solid #ddd',
    textAlign: 'center',
    
   
  },
  cell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    position: 'relative'
  },
  input: {
    width: '75px',
    padding: '6px',
    border: '1px solid #ddd',
    borderRadius: '3px',
    textAlign: 'center',
    fontSize: '12px'
  },
  marginalCell: {
    backgroundColor: '#ffffcc',
    fontWeight: 'bolder',
  },
  marginalInput: {
    backgroundColor: '#f8f9fa',
    border: '2px solid #90caf9'
  },
  marginalHeader: {
    fontSize: '12px',
    lineHeight: '1.2',
    wordWrap: 'break-word'
  },
  bottomRow: {
    padding: '6px'
  },
  tooltipContainer: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: '4px',
    textAlign:'center',
    marginLeft:'10px'
  },
  questionMark: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#e0e0e0',
    color: '#666',
    fontSize: '11px',
    cursor: 'help',
    marginLeft: '4px',
    border:'blue solid 0.2px'
  },
  tooltip: {
    visibility: 'hidden',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    whiteSpace: 'nowrap',
    zIndex: 1000,
    marginBottom: '5px',
    width: 'max-content'
  }
};

const MathWithTooltip = ({ math, tooltip }) => (
  <div style={styles.tooltipContainer}>
    <InlineMath math={math} />
    <div style={styles.questionMark}
         onMouseEnter={e => e.currentTarget.querySelector('.tooltip').style.visibility = 'visible'}
         onMouseLeave={e => e.currentTarget.querySelector('.tooltip').style.visibility = 'hidden'}>
      ?
      <div className="tooltip" style={styles.tooltip}>{tooltip}</div>
    </div>
  </div>
);

const INITIAL_STATE = {
  aAndB: 0.25,
  aAndNotB: 0.25,
  notAAndB: 0.15,
  notAAndNotB: 0.35
};

const JointProbabilityTable = () => {
  const [probabilities, setProbabilities] = useState(INITIAL_STATE);
  const [isValid, setIsValid] = useState(true);

  const calculateMarginals = () => {
    const pA = Number(probabilities.aAndB) + Number(probabilities.aAndNotB);
    const pNotA = Number(probabilities.notAAndB) + Number(probabilities.notAAndNotB);
    const pB = Number(probabilities.aAndB) + Number(probabilities.notAAndB);
    const pNotB = Number(probabilities.aAndNotB) + Number(probabilities.notAAndNotB);
    const total = pA + pNotA;
    return { pA, pNotA, pB, pNotB, total };
  };

  const generateRandomProbabilities = () => {
    let vals = Array(4).fill().map(() => Math.random());
    const sum = vals.reduce((a, b) => a + b, 0);
    vals = vals.map(v => Number((v / sum).toFixed(3)));
    const currentSum = vals.slice(0, 3).reduce((a, b) => a + b, 0);
    vals[3] = Number((1 - currentSum).toFixed(3));
    
    setProbabilities({
      aAndB: vals[0],
      aAndNotB: vals[1],
      notAAndB: vals[2],
      notAAndNotB: vals[3]
    });
  };

  const resetTable = () => setProbabilities(INITIAL_STATE);

  useEffect(() => {
    const sum = Object.values(probabilities).reduce((acc, val) => acc + Number(val), 0);
    setIsValid(Math.abs(sum - 1) < 0.0001);
  }, [probabilities]);

  const handleChange = (key, value) => {
    const numValue = Math.max(0, Math.min(1, Number(value) || 0));
    setProbabilities(prev => ({
      ...prev,
      [key]: numValue
    }));
  };

  const marginals = calculateMarginals();

  return (
    <div style={styles.calculator}>
      <div style={styles.header}>
        <h2 style={styles.title}>Joint Probability Table Calculator</h2>
        <div style={styles.buttons}>
          <button 
            onClick={generateRandomProbabilities} 
            style={{...styles.button, ...styles.randomBtn}}
          >
            Random
          </button>
          <button 
            onClick={resetTable} 
            style={{...styles.button, ...styles.resetBtn}}
          >
            Reset
          </button>
        </div>
      </div>

      <div style={styles.messageContainer}>
        {isValid ? (
          <div style={{...styles.messageContainer, ...styles.hint}}>
            Tip: All probabilities in a joint distribution must sum to 1
          </div>
        ) : (
          <div style={{...styles.messageContainer, ...styles.error}}>
            All probabilities must sum to 1
          </div>
        )}
      </div>
      
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{...styles.th, ...styles.firstColumn}}></th>
            <th style={styles.th}>
              <MathWithTooltip math="A" tooltip="Event A" />
            </th>
            <th style={styles.th}>
              <MathWithTooltip math="\overline{A}" tooltip="Complement of event A (not A)" />
            </th>
            <th style={{...styles.th, ...styles.marginalCell, ...styles.marginalHeader}}>
              <MathWithTooltip math="\textbf{Marginal }B" tooltip="Total probability for event B (sum of row)" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{...styles.th, ...styles.firstColumn}}>
              <MathWithTooltip math="B" tooltip="Event B" />
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(A \cap B)" tooltip="Probability of both A and B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.aAndB}
                  onChange={(e) => handleChange('aAndB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{A} \cap B)" tooltip="Probability of not A and B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.notAAndB}
                  onChange={(e) => handleChange('notAAndB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(B)" tooltip="Marginal probability of event B" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pB.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{...styles.th, ...styles.firstColumn}}>
              <MathWithTooltip math="\overline{B}" tooltip="Complement of event B (not B)" />
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(A \cap \overline{B})" tooltip="Probability of A and not B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.aAndNotB}
                  onChange={(e) => handleChange('aAndNotB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={styles.td}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{A} \cap \overline{B})" tooltip="Probability of neither A nor B occurring" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={probabilities.notAAndNotB}
                  onChange={(e) => handleChange('notAAndNotB', e.target.value)}
                  style={styles.input}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{B})" tooltip="Marginal probability of not B" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pNotB.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{...styles.th, ...styles.firstColumn, ...styles.marginalCell, ...styles.marginalHeader, ...styles.bottomRow}}>
              <MathWithTooltip math="\textbf{Marginal }A" tooltip="Total probability for event A (sum of column)" />
            </td>
            <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(A)" tooltip="Marginal probability of event A" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pA.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
              <div style={styles.cell}>
                <MathWithTooltip math="P(\overline{A})" tooltip="Marginal probability of not A" />
                <input 
                  type="number"
                  min="0"
                  max="1"
                  step="0.001"
                  value={marginals.pNotA.toFixed(3)}
                  readOnly
                  style={{...styles.input, ...styles.marginalInput}}
                />
              </div>
            </td>
            <td style={{...styles.td, ...styles.marginalCell, ...styles.bottomRow}}>
              <MathWithTooltip math="\sum = 1" tooltip="Total sum of all probabilities" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default JointProbabilityTable;