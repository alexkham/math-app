


import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import themes from './mathProofThemes';

const MathProofFlow = ({ 
  steps = [], 
  title = " ", 
  arrowSymbol = "↓", 
  showNumbers = true,
  theme = "default",
  arrow = true
}) => {
  // Get theme styles
  const styles = themes[theme] || themes.default;

  // Add explanation box styles
  const explanationStyles = {
    explanationBox: {
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '6px',
      padding: '8px 12px',
      fontSize: '13px',
      color: '#495057',
      fontStyle: 'italic',
      maxWidth: '200px',
      marginLeft: '20px',
      marginTop:'20px'
    },
    explanationLabel: {
      fontSize: '10px',
      fontWeight: 'bold',
      color: '#6c757d',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      marginBottom: '4px'
    },
    arrowWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60px',
      gap: '0'
    },
    arrowContainer: {
      display: 'flex',
      alignItems: 'center'
    }
  };

  // Handle empty state
  if (!steps || !Array.isArray(steps) || steps.length === 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>{title}</h2>
        <div style={styles.emptyState}>No proof steps provided</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepWrapper}>
            <div style={styles.stepCard}>
              {showNumbers && <div style={styles.stepNumber}>{index + 1}</div>}
              <div style={styles.stepContent}>
                {typeof step === 'string' ? 
                  processContent(step) : 
                  typeof step === 'object' && step.content ? 
                    processContent(step.content) : 
                    step
                }
              </div>
            </div>
            
            {/* Show arrow only if arrow prop is true and not the last step */}
            {arrow && index < steps.length - 1 && (
              <div style={explanationStyles.arrowWrapper}>
                <div style={explanationStyles.arrowContainer}>
                  <div style={styles.arrow}>{arrowSymbol}</div>
                  {/* Show explanation if it exists */}
                  {typeof step === 'object' && step.explanation && (
                    <div style={explanationStyles.explanationBox}>
                      {/* <div style={explanationStyles.explanationLabel}>Explanation</div> */}
                      {processContent(step.explanation)}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathProofFlow;