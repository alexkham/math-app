

import React from 'react';
import { themes } from './themes';
import { processContent } from '@/app/utils/contentProcessor';

const defaultData = [
  {
    type: 'start',
    title: 'START',
    description: 'Input two positive integers',
    formula: 'a = 48, b = 18'
  },
  {
    type: 'process',
    title: 'Initialize',
    description: 'Ensure a ≥ b, swap if necessary',
    formula: 'if a < b then swap(a, b)'
  },
  {
    type: 'decision',
    title: 'Check if b = 0',
    description: 'Is the second number zero?',
    formula: 'b == 0 ?'
  },
  {
    type: 'process',
    title: 'Calculate Remainder',
    description: 'Find remainder when a is divided by b',
    formula: 'remainder = a mod b'
  },
  {
    type: 'end',
    title: 'RESULT',
    description: 'GCD found when b becomes 0',
    formula: 'GCD = a'
  }
];

const FlowchartComponent = ({ 
  theme = 'light',
  data = defaultData,
  title = "Euclidean Algorithm",
  description = "Find the Greatest Common Divisor"
}) => {
  const currentTheme = themes[theme] || themes.light;

  const getNodeStyle = (step, index) => {
    const baseStyle = {
      background: currentTheme.containerBg,
      border: `1px solid ${currentTheme.containerBorder}`,
      borderRadius: '12px',
      padding: '24px',
      minWidth: '280px',
      textAlign: 'center',
      position: 'relative',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      transition: 'all 0.2s ease'
    };

    return step.style ? { ...baseStyle, ...step.style } : baseStyle;
  };

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: currentTheme.background,
      minHeight: '100vh',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: currentTheme.containerBg,
        borderRadius: '16px',
        padding: '40px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        border: `1px solid ${currentTheme.containerBorder}`
      }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{
            color: currentTheme.titleColor,
            fontSize: '1.5rem',
            fontWeight: '300',
            marginBottom: '8px',
            letterSpacing: '-0.025em'
          }}>
            {title}
          </h1>
          <p style={{ color: currentTheme.descColor, fontSize: '14px' }}>
            {description}
          </p>
        </header>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          {data.map((step, index) => (
            <React.Fragment key={index}>
              <div style={getNodeStyle(step, index)}>
                <div style={{
                  background: currentTheme.numberBg,
                  color: 'white',
                  borderRadius: '50%',
                  width: '26px',
                  height: '26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '500',
                  position: 'absolute',
                  top: '-13px',
                  left: '-13px',
                  fontSize: '12px'
                }}>
                  {index + 1}
                </div>
                <div style={{
                  fontWeight: '500',
                  color: step.style?.color || currentTheme.textColor,
                  fontSize: '16px',
                  marginBottom: '8px',
                  letterSpacing: '-0.01em'
                }}>
                  {processContent(step.title)}
                </div>
                {step.description && (
                  <div style={{
                    color: step.style?.color || currentTheme.descColor,
                    fontSize: '14px',
                    marginBottom: '12px',
                    lineHeight: '1.4'
                  }}>
                    {processContent(step.description)}
                  </div>
                )}
                {step.formula && (
                  <div style={{
                    fontFamily: '"SF Mono", Monaco, "Cascadia Code", "Roboto Mono", Consolas, monospace',
                    background: currentTheme.formulaBg,
                    padding: '8px 12px',
                    borderRadius: '6px',
                    color: step.style?.color || currentTheme.formulaColor,
                    fontWeight: '400',
                    fontSize: '13px',
                    border: `1px solid ${currentTheme.formulaBorder}`
                  }}>
                    {processContent(step.formula)}
                  </div>
                )}
              </div>
              {index < data.length - 1 && (
                <div style={{
                  width: '0',
                  height: '0',
                  borderLeft: '8px solid transparent',
                  borderRight: '8px solid transparent',
                  borderTop: `12px solid ${currentTheme.arrowColor}`,
                  margin: '-5px 0'
                }}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowchartComponent;