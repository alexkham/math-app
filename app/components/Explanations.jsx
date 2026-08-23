


import React from 'react';
import { processContent } from '../utils/contentProcessor';

const alertStyles = {
  base: {
    display: 'block',
    width: '100%',
    padding: '16px',
    marginBottom: '16px',
    fontSize: '14px',
    lineHeight: '20px',
    borderRadius: '8px',
  },
  info: {
    backgroundColor: 'rgb(239 246 255)',
    color: 'rgb(30 64 175)'
  },
  danger: {
    backgroundColor: 'rgb(254 242 242)',
    color: 'rgb(153 27 27)'
  },
  success: {
    backgroundColor: 'rgb(240 253 244)',
    color: 'rgb(22 101 52)'
  },
  warning: {
    backgroundColor: 'rgb(254 252 232)',
    color: 'rgb(133 77 14)'
  },
  dark: {
    backgroundColor: 'rgb(249 250 251)',
    color: 'rgb(31 41 55)'
  }
};

const darkModeStyles = {
  info: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(96 165 250)'
  },
  danger: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(248 113 113)'
  },
  success: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(74 222 128)'
  },
  warning: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(253 224 71)'
  },
  dark: {
    backgroundColor: 'rgb(31 41 55)',
    color: 'rgb(209 213 219)'
  }
};

const Explanations = ({ 
  content,
  theme = 'info',
  isDarkMode = false,
  style = {},
  className = ''
}) => {
  const getStyles = () => ({
    ...alertStyles.base,
    ...(isDarkMode ? darkModeStyles[theme] : alertStyles[theme]),
    ...style
  });

  return (
    <div 
      style={getStyles()} 
      role="alert"
      className={className}
    >
      {processContent(content)}
    </div>
  );
};

export default Explanations;