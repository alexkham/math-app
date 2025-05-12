import { useState } from 'react';

function CNFConverter({ explanations = {
  title: "How CNF Conversion Works:",
  steps: [
    "1. Create a truth table for the expression",
    "2. Find all rows where the expression evaluates to false",
    "3. For each 'false' row, create a disjunction (OR) of literals that makes that row false:",
    "   • If a variable is true in the row, use the negation of the variable",
    "   • If a variable is false in the row, use the variable itself",
    "4. Join all these disjunctions with AND operations",
    "5. The resulting expression is in CNF"
  ]
} }) {
  const [input, setInput] = useState('p → q');
  const [truthTable, setTruthTable] = useState([]);
  const [cnfResult, setCnfResult] = useState('');
  const [error, setError] = useState('');

  // Handle input changes with auto-clear
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === '') {
      setTruthTable([]);
      setCnfResult('');
      setError('');
    }
  };

  // Reset field function
  const resetField = () => {
    setInput('');
    setTruthTable([]);
    setCnfResult('');
    setError('');
  };

  // Copy to clipboard function
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(input);
      // Show success indication
      const button = document.querySelector('.copy-button');
      if (button) {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = originalText;
        }, 1500);
      }
    } catch (err) {
      // Fallback method
      const textArea = document.createElement('textarea');
      textArea.value = input;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        const button = document.querySelector('.copy-button');
        if (button) {
          const originalText = button.textContent;
          button.textContent = 'Copied!';
          setTimeout(() => {
            button.textContent = originalText;
          }, 1500);
        }
      } catch (err) {
        console.error('Failed to copy text');
      }
      document.body.removeChild(textArea);
    }
  };

  const convertToCNF = () => {
    try {
      setError('');
      
      // Normalize input - only accept standard logical symbols
      const normalized = input
        .replace(/->/g, '→')
        .replace(/<->/g, '↔')
        .replace(/!/g, '¬');
      
      // Extract variables
      const variables = [...new Set(
        normalized.match(/[a-zA-Z]/g) || []
      )].sort();
      
      if (variables.length === 0) {
        throw new Error('No variables found in expression');
      }
      
      // Generate all possible combinations of variable values
      const rows = generateTruthTableRows(variables);
      
      // Evaluate the expression for each row
      const truthTableData = rows.map(row => {
        const result = evaluateExpression(normalized, variables, row);
        return { assignments: row, result };
      });
      
      // Find rows where result is false
      const falseRows = truthTableData.filter(row => !row.result);
      
      // For each false row, create a disjunction of literals with parentheses
      const terms = falseRows.map(row => {
        const literals = variables.map((variable, index) => {
          // For CNF, we negate literals for the false rows
          return row.assignments[index] ? `¬${variable}` : variable;
        });
        const disjunction = literals.join(' ∨ ');
        // Always wrap disjunctions in parentheses
        return literals.length > 1 ? `(${disjunction})` : disjunction;
      });
      
      // Join all disjunctions with conjunction
      let cnf = terms.join(' ∧ ');
      
      // Handle special cases
      if (terms.length === 0) {
        cnf = 'true';   // Tautology - no rows are false
      } else if (terms.length === rows.length) {
        cnf = 'false';  // Contradiction - all rows are false
      }
      
      // Format the table for display
      const formattedTable = truthTableData.map(row => {
        const variableValues = {};
        variables.forEach((variable, index) => {
          variableValues[variable] = row.assignments[index];
        });
        return {
          variables: variableValues,
          result: row.result,
          expression: normalized
        };
      });
      
      setTruthTable(formattedTable);
      setCnfResult(cnf);
      
    } catch (err) {
      setError(err.message);
      setTruthTable([]);
      setCnfResult('');
    }
  };

  // Generate all possible combinations of true/false for variables
  const generateTruthTableRows = (variables) => {
    const rowCount = Math.pow(2, variables.length);
    const rows = [];
    
    for (let i = 0; i < rowCount; i++) {
      const row = [];
      for (let j = 0; j < variables.length; j++) {
        // Check if the jth bit of i is set
        row.push((i & (1 << (variables.length - j - 1))) !== 0);
      }
      rows.push(row);
    }
    
    return rows;
  };

  // Evaluate the expression for a given assignment of variables
  const evaluateExpression = (expr, variables, assignments) => {
    // Create a local scope with variable assignments
    const scope = {};
    variables.forEach((variable, index) => {
      scope[variable] = assignments[index];
    });
    
    // Helper function to evaluate sub-expressions
    const evaluate = (subExpr) => {
      // Simple variable
      if (/^[a-zA-Z]$/.test(subExpr)) {
        return scope[subExpr];
      }
      
      // Negation
      if (subExpr.startsWith('¬')) {
        return !evaluate(subExpr.slice(1));
      }
      
      // Parenthesized expression
      if (subExpr.startsWith('(') && subExpr.endsWith(')')) {
        return evaluate(subExpr.slice(1, -1));
      }
      
      // Binary operations
      if (subExpr.includes('∧')) {
        const [left, right] = subExpr.split('∧').map(s => s.trim());
        return evaluate(left) && evaluate(right);
      }
      
      if (subExpr.includes('∨')) {
        const [left, right] = subExpr.split('∨').map(s => s.trim());
        return evaluate(left) || evaluate(right);
      }
      
      if (subExpr.includes('→')) {
        const [left, right] = subExpr.split('→').map(s => s.trim());
        return !evaluate(left) || evaluate(right);
      }
      
      if (subExpr.includes('↔')) {
        const [left, right] = subExpr.split('↔').map(s => s.trim());
        return evaluate(left) === evaluate(right);
      }
      
      return Boolean(subExpr);
    };
    
    try {
      return evaluate(expr);
    } catch (e) {
      throw new Error(`Failed to evaluate expression: ${e.message}`);
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
      {/* <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>CNF Converter using Truth Tables</h1> */}
      <h2 style={{ textAlign: 'center', marginBottom: '10px' ,marginTop:'-30px' }}>CNF Converter using Truth Tables</h2>
      
      <div style={{ display: 'flex', gap: '30px' }}>
        {/* Left Section - 2/3 width */}
        <div style={{ flex: '2', minWidth: 0 }}>
          <div style={{ marginBottom: '8px' }}>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              Use standard logical symbols: ∧ (AND), ∨ (OR), ¬ (NOT), → (IMPLIES), ↔ (IFF)
              <br/>
              Type your expression or use examples instead.
            </p>
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Enter Logical Expression:
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div style={{ position: 'relative', flex: '1' }}>
                <input
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  style={{ 
                    width: '100%',
                    padding: '8px',
                    paddingRight: '80px',
                    fontSize: '16px', 
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxSizing: 'border-box'
                  }}
                />
                
                {/* Copy button */}
                <button 
                  onClick={copyToClipboard}
                  className="copy-button"
                  style={{ 
                    position: 'absolute',
                    right: '35px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    color: '#666',
                    padding: '4px 8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Copy
                </button>
                
                {/* Reset button (X) */}
                {input && (
                  <button 
                    onClick={resetField}
                    style={{ 
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: 'none',
                      fontSize: '18px',
                      cursor: 'pointer',
                      color: '#666',
                      padding: '0',
                      width: '20px',
                      height: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    ×
                  </button>
                )}
              </div>
              
              <button 
                onClick={convertToCNF}
                style={{ 
                  padding: '8px 16px', 
                  backgroundColor: '#4a90e2', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}
              >
                Convert to CNF
              </button>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 'bold', marginRight: '8px' }}>Examples:</span>
            <button 
              onClick={() => setInput('p → q')}
              style={{ 
                padding: '4px 8px', 
                backgroundColor: '#f1f1f1', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                cursor: 'pointer' 
              }}
            >
              p → q
            </button>
            <button 
              onClick={() => setInput('¬(p ∧ q)')}
              style={{ 
                padding: '4px 8px', 
                backgroundColor: '#f1f1f1', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                cursor: 'pointer' 
              }}
            >
              ¬(p ∧ q)
            </button>
            <button 
              onClick={() => setInput('p ∧ (q ∨ r)')}
              style={{ 
                padding: '4px 8px', 
                backgroundColor: '#f1f1f1', 
                border: '1px solid #ddd', 
                borderRadius: '4px',
                cursor: 'pointer' 
              }}
            >
              p ∧ (q ∨ r)
            </button>
          </div>
          
          {error && (
            <div style={{ 
              color: '#d32f2f', 
              backgroundColor: '#ffebee', 
              padding: '10px', 
              borderRadius: '4px',
              marginBottom: '20px' 
            }}>
              {error}
            </div>
          )}
          
          {truthTable.length > 0 && (
            <div>
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>Truth Table:</h2>
              <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
                <table style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse', 
                  border: '1px solid #ddd',
                  textAlign: 'center'
                }}>
                  <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                      {Object.keys(truthTable[0].variables).map((variable, index) => (
                        <th key={index} style={{ border: '1px solid #ddd', padding: '8px' }}>
                          {variable}
                        </th>
                      ))}
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>
                        {truthTable[0].expression}
                      </th>
                      <th style={{ border: '1px solid #ddd', padding: '8px' }}>
                        Include in CNF
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {truthTable.map((row, rowIndex) => (
                      <tr key={rowIndex} style={{ 
                        backgroundColor: !row.result ? '#ffebee' : '#fff',
                        fontWeight: !row.result ? 'bold' : 'normal'
                      }}>
                        {Object.values(row.variables).map((value, colIndex) => (
                          <td key={colIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>
                            {value ? 'T' : 'F'}
                          </td>
                        ))}
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                          {row.result ? 'T' : 'F'}
                        </td>
                        <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                          {!row.result ? 'Yes' : 'No'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>CNF Result:</h2>
              <div style={{ 
                padding: '12px', 
                backgroundColor: '#f8f9fa', 
                border: '1px solid #ddd',
                borderRadius: '4px', 
                fontFamily: 'monospace', 
                fontSize: '16px',
                marginBottom: '20px'
              }}>
                {cnfResult}
              </div>
            </div>
          )}
        </div>
        
        {/* Right Section - 1/3 width */}
        <div style={{ flex: '1', minWidth: '250px', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '4px' }}>
          <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>
            {explanations.title}
          </h3>
          <div style={{ lineHeight: '1.6', fontSize: '14px' }}>
            {explanations.steps.map((step, index) => (
              <div key={index} style={{ marginBottom: '8px' }}>
                {step}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CNFConverter;