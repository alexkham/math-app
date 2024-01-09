'use client'

import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {showTooltip && (
        <div style={{
          position: 'absolute',
          bottom: '-100%',
          left: '-100%',
          transform: 'translateX(200%)',
          transform: 'translateY(200%)',
          marginBottom: '10px',
          padding: '5px',
          backgroundColor: 'green',
          color: 'white',
          borderRadius: '4px',
          whiteSpace: 'nowrap',
          opacity:'0.8',
          fontSize:'200'
          
        }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
