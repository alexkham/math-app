
import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import themes from './mathProofThemes';

const MathProofFlow = ({ 
  steps = [], 
  title = " ", 
  arrowSymbol = "↓", 
  showNumbers = true,
  theme = "default"
}) => {
  // Get theme styles
  const styles = themes[theme] || themes.default;

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
                {typeof step === 'string' ? processContent(step) : step}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div style={styles.arrow}>{arrowSymbol}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathProofFlow;