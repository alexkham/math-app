// MathContainer.jsx
import React from 'react';
import { themes } from './themes';
import { processContent } from '@/app/utils/contentProcessor';


/**
 * MathContainer - A React component for rendering mathematical expressions
 * Supports LaTeX syntax and custom styling options
 * 
 * @module MathContainer
 * @component
 * 
 * @example
 * import MathContainer from './MathContainer';
 * 
 * // Basic usage
 * <MathContainer content="Here is inline math $x^2$ and block math $$\sum_{i=1}^n i$$" />
 * 
 * // Styled usage
 * <MathContainer 
 *   content="Centered equation $$E = mc^2$$"
 *   theme="dark"
 *   textAlign="center"
 *   width="500px"
 * />
 * 
 * @param {Object} props Component props
 * @param {string} props.content - Text with LaTeX math ($...$ for inline, $$...$$  for block)
 * @param {string} [props.theme='clean'] - Visual theme ('clean', 'dark', 'paper', etc)
 * @param {string} [props.width] - Container width (CSS value)
 * @param {string} [props.height] - Container height (CSS value)
 * @param {string} [props.maxHeight] - Maximum height before scrolling
 * @param {string} [props.backgroundColor] - Background color override
 * @param {string} [props.color] - Text color override
 * @param {string} [props.textAlign='left'] - Text alignment
 * @param {string} [props.overflowY='auto'] - Vertical overflow behavior
 * @param {string} [props.overflowX='auto'] - Horizontal overflow behavior
 * @param {string} [props.wordWrap='break-word'] - Word wrapping style
 * @param {string} [props.whiteSpace='pre-wrap'] - Whitespace handling
 * @param {Object} [props.additionalStyles={}] - Additional CSS styles object
 * 
 * @returns {JSX.Element} The rendered math container
 */

const MathContainer = ({ 
  content,
  theme = 'clean',
  width,
  height,
  maxHeight,
  backgroundColor,
  color,
  overflowY = 'auto',
  overflowX = 'auto',
  additionalStyles = {},
  wordWrap = 'break-word',
  whiteSpace = 'pre-wrap'
}) => {
  // Merge base theme with overrides and additional styles
  const baseTheme = themes[theme] || themes.clean;
  
  const containerStyle = {
    ...baseTheme,
    width: width || baseTheme.width || 'auto',
    height: height || baseTheme.height || 'auto',
    maxHeight: maxHeight || baseTheme.maxHeight,
    backgroundColor: backgroundColor || baseTheme.backgroundColor,
    color: color || baseTheme.color,
    overflowY,
    overflowX,
    wordWrap,
    whiteSpace,
    // Content positioning
    display: 'flex',
    flexDirection: 'column',
    // Ensure padding doesn't affect final dimensions
    boxSizing: 'border-box',
    ...additionalStyles
  };

  const contentStyle = {
    // Allow content to grow but contain it
    flex: '1 1 auto',
    minHeight: 0, // Important for Firefox
    // Ensure math elements don't overflow
    maxWidth: '100%'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        {processContent(content)}
      </div>
    </div>
  );
};

export default MathContainer;