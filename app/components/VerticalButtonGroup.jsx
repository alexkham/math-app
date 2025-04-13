

import React from 'react';
import { ChevronRight } from 'lucide-react';

const VerticalButtonGroup = ({
  items = [],
  width = '250px',
  backgroundColor = '#f3f4f6',
  color = '#448af4',
  isSticky = false,
  verticalOffset = '20px'
}) => {
  return (
    <div 
      id="buttonGroup"
      style={{
        width: width,
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        position: isSticky ? 'sticky' : 'static',
        top: isSticky ? verticalOffset : 'auto',
        zIndex: isSticky ? 10 : 'auto'
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
      {items.map((item, index) => (
        <a
          href={item.link}
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 12px',
            border: `1px solid ${color}`,
            borderRadius: '8px',
            color: color,
            textDecoration: 'none',
            backgroundColor: backgroundColor,
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
      ))}
    </div>
  );
};

export default VerticalButtonGroup;