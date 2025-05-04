// FourPanel.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { themes } from './themes';
import { processContent } from '@/app/utils/contentProcessor';

const FourPanel = ({ data, theme = 'ocean', onThemeChange }) => {
  const selectedTheme = themes[theme].colors;

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center'
  };

  const themeSwitcherStyle = {
    display: 'flex',
    gap: '10px'
  };

  const buttonStyle = (isActive) => ({
    padding: '8px 16px',
    backgroundColor: isActive ? '#0284c7' : '#e2e8f0',
    color: isActive ? 'white' : 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    width: '600px',
    height: '400px'
  };

  const panelStyle = (index) => {
    const col = index % 2;
    const row = Math.floor(index / 2);
    
    return {
      padding: '20px',
      backgroundColor: selectedTheme[index].bg,
      color: selectedTheme[index].text,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      borderRight: col === 0 ? '1px solid #cbd5e1' : 'none',
      borderBottom: row === 0 ? '1px solid #cbd5e1' : 'none'
    };
  };

  const titleStyle = (index) => ({
    margin: '0 0 15px 0',
    fontSize: '18px',
    fontWeight: '600',
    color: selectedTheme[index].title
  });

  return (
    <div style={containerStyle}>
      {onThemeChange && (
        <div style={themeSwitcherStyle}>
          {Object.keys(themes).map(themeName => (
            <button 
              key={themeName}
              onClick={() => onThemeChange(themeName)}
              style={buttonStyle(theme === themeName)}
            >
              {themeName}
            </button>
          ))}
        </div>
      )}

      <div style={gridStyle}>
        {data.map((panel, index) => (
          <div key={index} style={panelStyle(index)}>
            <h3 style={titleStyle(index)}>
              {panel.title}
            </h3>
            <div>
              {processContent(panel.content)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

FourPanel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired
    })
  ).isRequired,
  theme: PropTypes.oneOf(['ocean', 'sunset', 'nightsky']),
  onThemeChange: PropTypes.func
};

export default FourPanel;