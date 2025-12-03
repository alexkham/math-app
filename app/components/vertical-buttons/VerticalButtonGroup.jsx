

import React from 'react';
import { ChevronRight } from 'lucide-react';
import { buttonThemes } from './buttonThemes';

const VerticalButtonGroup = ({
  items = [],
  width = '300px',
  theme = 'navy',
  isSticky = false,
  verticalOffset = '20px'
}) => {
  const currentTheme = buttonThemes[theme] || buttonThemes.navy;

  // Check if items are grouped (has title and items properties)
  const isGrouped = items.length > 0 && items[0].hasOwnProperty('title') && items[0].hasOwnProperty('items');

  const renderButton = (item, index) => (
    <a
      href={item.link}
      key={index}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 12px',
        border: `1px solid ${currentTheme.button.color}`,
        borderRadius: '8px',
        color: currentTheme.button.color,
        textDecoration: 'none',
        backgroundColor: currentTheme.container.background,
        maxHeight: '40px',
        fontSize: '15px'
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        {item.icon && (
          <span style={{
            display: 'flex',
            width: '20px',
            height: '20px'
          }}>
            {item.icon}
          </span>
        )}
        <span>{item.title}</span>
      </div>
      <ChevronRight size={16} />
    </a>
  );

  const renderGroupTitle = (title) => (
    <h3 style={{
      margin: '0 0 8px 0',
      fontSize: '14px',
      fontWeight: '600',
      color: currentTheme.button.color,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      paddingLeft: '4px'
    }}>
      {title}
    </h3>
  );

  return (
    <div 
      id="buttonGroup"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: isSticky ? 'sticky' : 'static',
        top: isSticky ? verticalOffset : 'auto',
        zIndex: isSticky ? 10 : 'auto',
        background: currentTheme.container.background,
        padding: '20px',
        borderRadius: currentTheme.container.borderRadius,
        boxShadow: currentTheme.container.boxShadow,
        boxSizing: 'border-box',
        width: width,
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            #buttonGroup {
              display: none !important;
            }
          }
        `}
      </style>
      
      {isGrouped ? (
        // Render grouped items
        items.map((group, groupIndex) => (
          <div key={groupIndex} style={{ marginBottom: '16px' }}>
            {renderGroupTitle(group.title)}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {group.items.map((item, itemIndex) => renderButton(item, `${groupIndex}-${itemIndex}`))}
            </div>
          </div>
        ))
      ) : (
        // Render simple flat items
        items.map((item, index) => renderButton(item, index))
      )}
    </div>
  );
};

export default VerticalButtonGroup;