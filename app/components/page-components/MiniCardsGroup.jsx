
// import { useState } from 'react';

// function darkenColor(hex, percent = 15) {
//   hex = hex.replace('#', '');
//   let r = parseInt(hex.substring(0, 2), 16);
//   let g = parseInt(hex.substring(2, 4), 16);
//   let b = parseInt(hex.substring(4, 6), 16);
  
//   r = Math.floor(r * (1 - percent / 100));
//   g = Math.floor(g * (1 - percent / 100));
//   b = Math.floor(b * (1 - percent / 100));
  
//   const toHex = (n) => {
//     const hex = n.toString(16);
//     return hex.length === 1 ? '0' + hex : hex;
//   };
  
//   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
// }

// function isColorDark(hex) {
//   hex = hex.replace('#', '');
//   const r = parseInt(hex.substring(0, 2), 16);
//   const g = parseInt(hex.substring(2, 4), 16);
//   const b = parseInt(hex.substring(4, 6), 16);
//   const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
//   return luminance < 0.5;
// }

// function MiniCard({ card }) {
//   const [isHovered, setIsHovered] = useState(false);
  
//   const sizeStyles = {
//     small: {
//       padding: '20px',
//       minWidth: '140px',
//       iconSize: '32px',
//       fontSize: '14px',
//       gridColumn: 'span 1'
//     },
//     medium: {
//       padding: '24px 28px',
//       minWidth: '160px',
//       iconSize: '40px',
//       fontSize: '15px',
//       gridColumn: 'span 1'
//     },
//     large: {
//       padding: '32px 36px',
//       minWidth: '180px',
//       iconSize: '48px',
//       fontSize: '16px',
//       gridColumn: 'span 2'
//     }
//   };
  
//   const size = card.size || 'medium';
  
//   // Check if size is a predefined size or custom width
//   const isPredefinedSize = sizeStyles[size];
  
//   let styles;
//   let widthStyle;
  
//   if (isPredefinedSize) {
//     // Use predefined size styles
//     styles = sizeStyles[size];
//     widthStyle = { gridColumn: styles.gridColumn };
//   } else {
//     // Custom size - use medium defaults with custom width
//     styles = {
//       padding: '24px 28px',
//       minWidth: 'auto',
//       iconSize: '40px',
//       fontSize: '15px'
//     };
    
//     // If it's a percentage, adjust for gaps
//     if (size.includes('%')) {
//       const percent = parseFloat(size);
//       // Approximate gap adjustment - for 33%, use calc(33.333% - 11px)
//       widthStyle = { 
//         flex: `0 0 calc(${percent}% - 11px)`,
//         gridColumn: 'auto' 
//       };
//     } else {
//       // For px or other units, use as-is
//       widthStyle = { width: size, gridColumn: 'auto' };
//     }
//   }
  
//   const bgColor = card.bgColor || '#93c5fd';
//   const hoverBg = card.bgColor ? darkenColor(bgColor, 15) : '#3b82f6';
  
//   const currentBg = isHovered ? hoverBg : bgColor;
//   const isDark = isColorDark(currentBg);
//   const textColor = isDark ? '#ffffff' : '#1e3a8a';
//   const descColor = isDark ? '#e0e7ff' : '#64748b';

//   return (
//     <a 
//       href={card.href}
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: '14px',
//         padding: styles.padding,
//         minWidth: styles.minWidth,
//         backgroundColor: isHovered ? hoverBg : bgColor,
//         border: `1px solid ${darkenColor(bgColor, 20)}`,
//         borderRadius: '12px',
//         textDecoration: 'none',
//         color: textColor,
//         transition: 'all 0.2s ease',
//         cursor: 'pointer',
//         boxShadow: isHovered ? `0 4px 12px ${bgColor}4d` : `0 2px 6px ${bgColor}26`,
//         transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
//         ...widthStyle
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {card.icon && (
//         <span style={{ 
//           fontSize: styles.iconSize,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center'
//         }}>
//           {card.icon}
//         </span>
//       )}
//       <span style={{
//         fontSize: styles.fontSize,
//         fontWeight: '600',
//         textAlign: 'center'
//       }}>
//         {card.label}
//       </span>
//       {card.description && (
//         <span style={{
//           fontSize: '12px',
//           color: descColor,
//           textAlign: 'center',
//           marginTop: '-4px'
//         }}>
//           {card.description}
//         </span>
//       )}
//     </a>
//   );
// }

// function CardGroup({ group }) {
//   const [isExpanded, setIsExpanded] = useState(false);
  
//   const bgColor = group.bgColor || '#93c5fd';
//   const headerBg = group.bgColor ? darkenColor(bgColor, 10) : '#93c5fd';
//   const headerHoverBg = group.bgColor ? darkenColor(bgColor, 15) : '#60a5fa';
  
//   // If size is specified, use it; otherwise span full width
//   const widthStyle = group.size 
//     ? { width: group.size, gridColumn: 'auto' }
//     : { gridColumn: 'span 4' };

//   return (
//     <div style={{
//       ...widthStyle,
//       border: `1px solid ${darkenColor(bgColor, 20)}`,
//       borderRadius: '12px',
//       overflow: 'hidden',
//       backgroundColor: isExpanded ? '#ffffff' : bgColor
//     }}>
//       <button
//         onClick={() => setIsExpanded(!isExpanded)}
//         style={{
//           width: '100%',
//           padding: '20px 24px',
//           backgroundColor: headerBg,
//           border: 'none',
//           cursor: 'pointer',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           gap: '12px',
//           transition: 'background-color 0.2s ease',
//           color: '#1e3a8a'
//         }}
//         onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerHoverBg}
//         onMouseLeave={(e) => e.currentTarget.style.backgroundColor = headerBg}
//       >
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '12px'
//         }}>
//           {group.icon && (
//             <span style={{ fontSize: '28px' }}>
//               {group.icon}
//             </span>
//           )}
//           <span style={{
//             fontSize: '18px',
//             fontWeight: '700'
//           }}>
//             {group.title}
//           </span>
//         </div>
//         <span style={{
//           fontSize: '24px',
//           transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
//           transition: 'transform 0.2s ease'
//         }}>
//           ▼
//         </span>
//       </button>
      
//       {isExpanded && (
//         <div style={{
//           padding: '16px',
//           display: 'flex',
//           flexWrap: 'wrap',
//           gap: '12px',
//           backgroundColor: '#f9fafb'
//         }}>
//           {group.cards.map((card, index) => (
//             <a 
//               href={card.href}
//               key={index}
//               style={{
//                 flex: '1 1 calc(33.333% - 8px)',
//                 minWidth: '180px',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 gap: '12px',
//                 padding: '32px 24px',
//                 backgroundColor: '#93c5fd',
//                 border: '1px solid #60a5fa',
//                 borderRadius: '12px',
//                 textDecoration: 'none',
//                 color: '#1e3a8a',
//                 transition: 'all 0.2s ease',
//                 cursor: 'pointer',
//                 boxShadow: '0 2px 6px rgba(59, 130, 246, 0.15)',
//                 fontSize: '15px',
//                 fontWeight: '600',
//                 textAlign: 'center'
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = '#3b82f6';
//                 e.currentTarget.style.color = '#ffffff';
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//                 e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = '#93c5fd';
//                 e.currentTarget.style.color = '#1e3a8a';
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 2px 6px rgba(59, 130, 246, 0.15)';
//               }}
//             >
//               {card.icon && (
//                 <span style={{ fontSize: '36px' }}>
//                   {card.icon}
//                 </span>
//               )}
//               <span>{card.label}</span>
//             </a>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default function MiniCardGroup({ cards }) {
//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: 'repeat(4, 1fr)',
//       gap: '16px',
//       gridAutoRows: 'minmax(120px, auto)',
//       gridAutoFlow: 'dense'
//     }}>
//       {cards.map((item, index) => {
//         if (item.type === 'group') {
//           return <CardGroup key={index} group={item} />;
//         } else {
//           return <MiniCard key={index} card={item} />;
//         }
//       })}
//     </div>
//   );
// }


import { useState } from 'react';

function darkenColor(hex, percent = 15) {
  hex = hex.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  r = Math.floor(r * (1 - percent / 100));
  g = Math.floor(g * (1 - percent / 100));
  b = Math.floor(b * (1 - percent / 100));
  
  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function isColorDark(hex) {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance < 0.5;
}

function MiniCard({ card, iconMap }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeStyles = {
    small: {
      padding: '20px',
      minWidth: '140px',
      iconSize: '32px',
      fontSize: '14px',
      gridColumn: 'span 1'
    },
    medium: {
      padding: '24px 28px',
      minWidth: '160px',
      iconSize: '40px',
      fontSize: '15px',
      gridColumn: 'span 1'
    },
    large: {
      padding: '32px 36px',
      minWidth: '180px',
      iconSize: '48px',
      fontSize: '16px',
      gridColumn: 'span 2'
    }
  };
  
  const size = card.size || 'medium';
  
  // Check if size is a predefined size or custom width
  const isPredefinedSize = sizeStyles[size];
  
  let styles;
  let widthStyle;
  
  if (isPredefinedSize) {
    // Use predefined size styles
    styles = sizeStyles[size];
    widthStyle = { gridColumn: styles.gridColumn };
  } else {
    // Custom size - use medium defaults with custom width
    styles = {
      padding: '24px 28px',
      minWidth: 'auto',
      iconSize: '40px',
      fontSize: '15px'
    };
    
    // If it's a percentage, adjust for gaps
    if (size.includes('%')) {
      const percent = parseFloat(size);
      // Approximate gap adjustment - for 33%, use calc(33.333% - 11px)
      widthStyle = { 
        flex: `0 0 calc(${percent}% - 11px)`,
        gridColumn: 'auto' 
      };
    } else {
      // For px or other units, use as-is
      widthStyle = { width: size, gridColumn: 'auto' };
    }
  }
  
  const bgColor = card.bgColor || '#93c5fd';
  const hoverBg = card.bgColor ? darkenColor(bgColor, 15) : '#3b82f6';
  
  const currentBg = isHovered ? hoverBg : bgColor;
  const isDark = isColorDark(currentBg);
  const textColor = isDark ? '#ffffff' : '#1e3a8a';
  const descColor = isDark ? '#e0e7ff' : '#64748b';

  // Determine how to render the icon
  const renderIcon = () => {
    if (!card.icon) return null;
    
    // Check if iconMap exists and has this icon key
    if (iconMap && iconMap[card.icon]) {
      const IconComponent = iconMap[card.icon];
      return <IconComponent size={parseInt(styles.iconSize)} color={textColor} />;
    }
    
    // Otherwise render as emoji/text (current behavior)
    return card.icon;
  };

  return (
    <a 
      href={card.href}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        padding: styles.padding,
        minWidth: styles.minWidth,
        backgroundColor: isHovered ? hoverBg : bgColor,
        border: `1px solid ${darkenColor(bgColor, 20)}`,
        borderRadius: '12px',
        textDecoration: 'none',
        color: textColor,
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        boxShadow: isHovered ? `0 4px 12px ${bgColor}4d` : `0 2px 6px ${bgColor}26`,
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        ...widthStyle
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {card.icon && (
        <span style={{ 
          fontSize: styles.iconSize,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {renderIcon()}
        </span>
      )}
      <span style={{
        fontSize: styles.fontSize,
        fontWeight: '600',
        textAlign: 'center'
      }}>
        {card.label}
      </span>
      {card.description && (
        <span style={{
          fontSize: '12px',
          color: descColor,
          textAlign: 'center',
          marginTop: '-4px'
        }}>
          {card.description}
        </span>
      )}
    </a>
  );
}

function CardGroup({ group, iconMap }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const bgColor = group.bgColor || '#93c5fd';
  const headerBg = group.bgColor ? darkenColor(bgColor, 10) : '#93c5fd';
  const headerHoverBg = group.bgColor ? darkenColor(bgColor, 15) : '#60a5fa';
  
  // If size is specified, use it; otherwise span full width
  const widthStyle = group.size 
    ? { width: group.size, gridColumn: 'auto' }
    : { gridColumn: 'span 4' };

  // Determine how to render the group icon
  const renderGroupIcon = () => {
    if (!group.icon) return null;
    
    // Check if iconMap exists and has this icon key
    if (iconMap && iconMap[group.icon]) {
      const IconComponent = iconMap[group.icon];
      return <IconComponent size={28} color="#1e3a8a" />;
    }
    
    // Otherwise render as emoji/text (current behavior)
    return group.icon;
  };

  return (
    <div style={{
      ...widthStyle,
      border: `1px solid ${darkenColor(bgColor, 20)}`,
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: isExpanded ? '#ffffff' : bgColor
    }}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          width: '100%',
          padding: '20px 24px',
          backgroundColor: headerBg,
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '12px',
          transition: 'background-color 0.2s ease',
          color: '#1e3a8a'
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = headerHoverBg}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = headerBg}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {group.icon && (
            <span style={{ 
              fontSize: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {renderGroupIcon()}
            </span>
          )}
          <span style={{
            fontSize: '18px',
            fontWeight: '700'
          }}>
            {group.title}
          </span>
        </div>
        <span style={{
          fontSize: '24px',
          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.2s ease'
        }}>
          ▼
        </span>
      </button>
      
      {isExpanded && (
        <div style={{
          padding: '16px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          backgroundColor: '#f9fafb'
        }}>
          {group.cards.map((card, index) => {
            // Determine how to render nested card icons
            const renderNestedIcon = () => {
              if (!card.icon) return null;
              
              if (iconMap && iconMap[card.icon]) {
                const IconComponent = iconMap[card.icon];
                return <IconComponent size={36} color="#1e3a8a" />;
              }
              
              return card.icon;
            };

            return (
              <a 
                href={card.href}
                key={index}
                style={{
                  flex: '1 1 calc(33.333% - 8px)',
                  minWidth: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '32px 24px',
                  backgroundColor: '#93c5fd',
                  border: '1px solid #60a5fa',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#1e3a8a',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 6px rgba(59, 130, 246, 0.15)',
                  fontSize: '15px',
                  fontWeight: '600',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#93c5fd';
                  e.currentTarget.style.color = '#1e3a8a';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(59, 130, 246, 0.15)';
                }}
              >
                {card.icon && (
                  <span style={{ 
                    fontSize: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {renderNestedIcon()}
                  </span>
                )}
                <span>{card.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function MiniCardGroup({ cards, iconMap }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '16px',
      gridAutoRows: 'minmax(120px, auto)',
      gridAutoFlow: 'dense'
    }}>
      {cards.map((item, index) => {
        if (item.type === 'group') {
          return <CardGroup key={index} group={item} iconMap={iconMap} />;
        } else {
          return <MiniCard key={index} card={item} iconMap={iconMap} />;
        }
      })}
    </div>
  );
}