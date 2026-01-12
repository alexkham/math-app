// /**
//  * TopNavigation Component
//  * 
//  * Top-of-page navigation with four display methods and manual/auto empty card filling
//  * 
//  * @component
//  * 
//  * @example
//  * // Method 1: miniCards (default) - 8 columns, small cards
//  * <TopNavigation cards={cardData} />
//  * 
//  * @example
//  * // Method 2: bar - 4 columns, wider cards
//  * <TopNavigation cards={cardData} method="bar" />
//  * 
//  * @example
//  * // Method 3: customSize - specify exact dimensions
//  * <TopNavigation 
//  *   cards={cardData} 
//  *   method="customSize"
//  *   cardWidth="250px"
//  *   cardHeight="100px"
//  * />
//  * 
//  * @example
//  * // Method 4: equalSplit - divide space equally
//  * <TopNavigation 
//  *   cards={cardData} 
//  *   method="equalSplit"
//  *   columns={6}
//  * />
//  * 
//  * @example
//  * // Manual empty card placement (works with all methods)
//  * const cardsWithEmpties = [
//  *   { id: 1, htmlId: 'formulas', title: 'Formulas', icon: '∑' },
//  *   { id: 2, title: null },  // Empty card
//  *   { id: 3, htmlId: 'axioms', title: 'Axioms', icon: '⊢' }
//  * ];
//  * <TopNavigation cards={cardsWithEmpties} />
//  * 
//  * ============================================================================
//  * PROPS
//  * ============================================================================
//  * 
//  * @prop {Array} cards - Array of card objects (REQUIRED)
//  *   Regular card:
//  *   - id {number} - Unique identifier (REQUIRED)
//  *   - title {string} - Card title (REQUIRED for regular cards)
//  *   - htmlId {string} - Section ID to scroll to
//  *   - icon {string} - Emoji or symbol
//  *   - badge {string} - Small badge text
//  *   - backgroundColor {string} - Individual card background
//  *   
//  *   Empty card:
//  *   - id {number} - Unique identifier (REQUIRED)
//  *   - title {null} - Null indicates empty card (REQUIRED for empty)
//  * 
//  * @prop {string} method - Display method (default: 'miniCards')
//  *   Options: 'miniCards', 'bar', 'customSize', 'equalSplit'
//  * 
//  * METHOD-SPECIFIC PROPS:
//  * 
//  * For customSize:
//  * @prop {string} cardWidth - Card width ('200px', '25%', '10vw', etc.)
//  * @prop {string} cardHeight - Card height ('100px', '20%', '10vh', etc.)
//  * 
//  * For equalSplit:
//  * @prop {number} columns - Number of equal columns
//  * 
//  * GENERAL PROPS:
//  * @prop {string} containerBackground - Container background color
//  * @prop {boolean} sticky - Make navigation sticky (default: false)
//  */

// 'use client';

// import { useState, useEffect } from 'react';

// const defaultCards = [
//   { id: 1, htmlId: 'formulas', title: 'Formulas', icon: '∑', badge: '12' },
//   { id: 2, htmlId: 'definitions', title: 'Definitions', icon: '≡', badge: '20' },
//   { id: 3, htmlId: 'axioms', title: 'Axioms', icon: '⊢', badge: '3' }
// ];

// export default function TopNavigation({
//   cards = defaultCards,
//   method = 'miniCards',
//   cardWidth,
//   cardHeight,
//   columns,
//   containerBackground = 'white',
//   sticky = false
// }) {
//   const [processedCards, setProcessedCards] = useState([]);

//   useEffect(() => {
//     processCards();
//     window.addEventListener('resize', processCards);
//     return () => window.removeEventListener('resize', processCards);
//   }, [cards, method, columns]);

//   const processCards = () => {
//     // Check if data contains manual empties
//     const hasManualEmpties = cards.some(card => card.title === null);

//     if (hasManualEmpties) {
//       // Use cards as-is, no auto-fill
//       setProcessedCards(cards);
//     } else {
//       // Auto-fill remaining spaces
//       const gridColumns = getColumns();
//       const remainder = cards.length % gridColumns;
//       const emptiesNeeded = remainder === 0 ? 0 : gridColumns - remainder;

//       const empties = Array.from({ length: emptiesNeeded }, (_, i) => ({
//         id: `auto-empty-${i}`,
//         title: null
//       }));

//       setProcessedCards([...cards, ...empties]);
//     }
//   };

//   const getColumns = () => {
//     if (method === 'equalSplit') return columns || 6;
//     if (method === 'customSize') {
//       return 6;
//     }
    
//     const width = typeof window !== 'undefined' ? window.innerWidth : 1400;
    
//     if (method === 'miniCards') {
//       if (width > 1200) return 8;
//       if (width > 768) return 6;
//       return 4;
//     }
    
//     if (method === 'bar') {
//       if (width > 1200) return 4;
//       if (width > 768) return 3;
//       return 2;
//     }
    
//     return 6;
//   };

//   const getGridStyle = () => {
//     const baseStyle = {
//       display: 'grid',
//       gap: '8px'
//     };

//     if (method === 'customSize') {
//       return {
//         ...baseStyle,
//         gridTemplateColumns: `repeat(auto-fit, minmax(${cardWidth || '200px'}, 1fr))`
//       };
//     }

//     if (method === 'equalSplit') {
//       return {
//         ...baseStyle,
//         gridTemplateColumns: `repeat(${columns || 6}, 1fr)`
//       };
//     }

//     return baseStyle;
//   };

//   const getCardStyle = (card) => {
//     const baseStyle = {
//       background: card.backgroundColor || '#fafafa',
//       border: '1px solid #e0e0e0',
//       padding: '12px 8px',
//       textAlign: 'center',
//       cursor: card.title ? 'pointer' : 'default',
//       transition: 'all 0.15s',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative',
//       borderRadius: '4px'
//     };

//     if (method === 'customSize') {
//       return {
//         ...baseStyle,
//         width: cardWidth || 'auto',
//         height: cardHeight || '75px'
//       };
//     }

//     if (method === 'equalSplit') {
//       return {
//         ...baseStyle,
//         minHeight: '75px'
//       };
//     }

//     return {
//       ...baseStyle,
//       minHeight: '75px'
//     };
//   };

//   const handleNavigate = (htmlId) => {
//     if (!htmlId) return;
//     const element = document.getElementById(htmlId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     //   setMobileMenuOpen(false);
//     }
//   };

//   const containerStyle = {
//     background: containerBackground,
//     borderBottom: '1px solid #e0e0e0',
//     ...(sticky && {
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000
//     })
//   };

//   const responsiveClass = method === 'miniCards' ? 'nav-grid-minicards' : 
//                           method === 'bar' ? 'nav-grid-bar' : 
//                           'nav-grid-custom';

//   return (
//     <>
//       <style>
//         {`
//           .nav-grid-minicards {
//             grid-template-columns: repeat(8, 1fr);
//           }
//           @media (max-width: 1200px) {
//             .nav-grid-minicards {
//               grid-template-columns: repeat(6, 1fr);
//             }
//           }
//           @media (max-width: 768px) {
//             .nav-grid-minicards {
//               grid-template-columns: repeat(4, 1fr);
//             }
//           }

//           .nav-grid-bar {
//             grid-template-columns: repeat(4, 1fr);
//           }
//           @media (max-width: 1200px) {
//             .nav-grid-bar {
//               grid-template-columns: repeat(3, 1fr);
//             }
//           }
//           @media (max-width: 768px) {
//             .nav-grid-bar {
//               grid-template-columns: repeat(2, 1fr);
//             }
//           }
//         `}
//       </style>

//       <nav style={containerStyle}>
//         <div style={{ 
//           maxWidth: '1600px', 
//           margin: '0 auto',
//           padding: '20px 32px'
//         }}>
//           <div 
//             className={responsiveClass}
//             style={getGridStyle()}
//           >
//             {processedCards.map((card) => (
//               <NavCard 
//                 key={card.id} 
//                 card={card} 
//                 onClick={card.title ? () => handleNavigate(card.htmlId) : null}
//                 cardStyle={getCardStyle(card)}
//               />
//             ))}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// function NavCard({ card, onClick, cardStyle }) {
//   const [isHovered, setIsHovered] = useState(false);

//   const hoverStyle = isHovered ? {
//     background: 'white',
//     borderColor: '#000',
//     transform: 'scale(1.05)',
//     zIndex: 10,
//     boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
//   } : {};

//   return (
//     <div
//       style={{ ...cardStyle, ...hoverStyle }}
//       onClick={onClick}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {card.title && (
//         <>
//           {card.icon && (
//             <div style={{ fontSize: '1.3rem', marginBottom: '4px' }}>
//               {card.icon}
//             </div>
//           )}
//           <div style={{ 
//             fontSize: '0.7rem', 
//             fontWeight: '600', 
//             lineHeight: '1.1',
//             color: '#1a1a1a'
//           }}>
//             {card.title}
//           </div>
//           {card.badge && (
//             <div style={{ 
//               fontSize: '0.6rem', 
//               color: '#999', 
//               marginTop: '2px' 
//             }}>
//               {card.badge}
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

/**
 * TopNavigation Component
 * 
 * Top-of-page navigation with four display methods and manual/auto empty card filling
 * 
 * @component
 * 
 * @example
 * // Method 1: miniCards (default) - 8 columns, small cards
 * <TopNavigation cards={cardData} />
 * 
 * @example
 * // Method 2: bar - 4 columns, wider cards
 * <TopNavigation cards={cardData} method="bar" />
 * 
 * @example
 * // Method 3: customSize - specify exact dimensions
 * <TopNavigation 
 *   cards={cardData} 
 *   method="customSize"
 *   cardWidth="250px"
 *   cardHeight="100px"
 * />
 * 
 * @example
 * // Method 4: equalSplit - divide space equally
 * <TopNavigation 
 *   cards={cardData} 
 *   method="equalSplit"
 *   columns={6}
 * />
 * 
 * @example
 * // Manual empty card placement (works with all methods)
 * const cardsWithEmpties = [
 *   { id: 1, htmlId: 'formulas', title: 'Formulas', icon: '∑' },
 *   { id: 2, title: null },  // Empty card
 *   { id: 3, htmlId: 'axioms', title: 'Axioms', icon: '⊢' }
 * ];
 * <TopNavigation cards={cardsWithEmpties} />
 * 
 * ============================================================================
 * PROPS
 * ============================================================================
 * 
 * @prop {Array} cards - Array of card objects (REQUIRED)
 *   Regular card:
 *   - id {number} - Unique identifier (REQUIRED)
 *   - title {string} - Card title (REQUIRED for regular cards)
 *   - htmlId {string} - Section ID to scroll to
 *   - icon {string} - Emoji or symbol
 *   - badge {string} - Small badge text
 *   - backgroundColor {string} - Individual card background
 *   
 *   Empty card:
 *   - id {number} - Unique identifier (REQUIRED)
 *   - title {null} - Null indicates empty card (REQUIRED for empty)
 * 
 * @prop {string} method - Display method (default: 'miniCards')
 *   Options: 'miniCards', 'bar', 'customSize', 'equalSplit'
 * 
 * METHOD-SPECIFIC PROPS:
 * 
 * For customSize:
 * @prop {string} cardWidth - Card width ('200px', '25%', '10vw', etc.)
 * @prop {string} cardHeight - Card height ('100px', '20%', '10vh', etc.)
 * 
 * For equalSplit:
 * @prop {number} columns - Number of equal columns
 * 
 * GENERAL PROPS:
 * @prop {string} containerBackground - Container background color
 * @prop {boolean} sticky - Make navigation sticky (default: false)
 */

'use client';

import { useState, useEffect } from 'react';

const defaultCards = [
  { id: 1, htmlId: 'formulas', title: 'Formulas', icon: '∑', badge: '12' },
  { id: 2, htmlId: 'definitions', title: 'Definitions', icon: '≡', badge: '20' },
  { id: 3, htmlId: 'axioms', title: 'Axioms', icon: '⊢', badge: '3' }
];

export default function TopNavigation({
  cards = defaultCards,
  method = 'miniCards',
  cardWidth,
  cardHeight,
  columns,
  containerBackground = 'white',
  sticky = false
}) {
  const [processedCards, setProcessedCards] = useState([]);

  useEffect(() => {
    processCards();
    window.addEventListener('resize', processCards);
    return () => window.removeEventListener('resize', processCards);
  }, [cards, method, columns]);

  const processCards = () => {
    // Check if data contains manual empties
    const hasManualEmpties = cards.some(card => card.title === null);

    if (hasManualEmpties) {
      // Use cards as-is, no auto-fill
      setProcessedCards(cards);
    } else {
      // Auto-fill remaining spaces
      const gridColumns = getColumns();
      const remainder = cards.length % gridColumns;
      const emptiesNeeded = remainder === 0 ? 0 : gridColumns - remainder;

      const empties = Array.from({ length: emptiesNeeded }, (_, i) => ({
        id: `auto-empty-${i}`,
        title: null
      }));

      setProcessedCards([...cards, ...empties]);
    }
  };

  const getColumns = () => {
    if (method === 'equalSplit') return columns || 6;
    if (method === 'customSize') {
      return 6;
    }
    
    const width = typeof window !== 'undefined' ? window.innerWidth : 1400;
    
    if (method === 'miniCards') {
      if (width > 1200) return 8;
      if (width > 768) return 6;
      return 4;
    }
    
    if (method === 'bar') {
      if (width > 1200) return 4;
      if (width > 768) return 3;
      return 2;
    }
    
    return 6;
  };

  const getGridStyle = () => {
    const baseStyle = {
      display: 'grid',
      gap: '8px'
    };

    if (method === 'customSize') {
      return {
        ...baseStyle,
        gridTemplateColumns: `repeat(auto-fit, minmax(${cardWidth || '200px'}, 1fr))`
      };
    }

    if (method === 'equalSplit') {
      return {
        ...baseStyle,
        gridTemplateColumns: `repeat(${columns || 6}, 1fr)`
      };
    }

    return baseStyle;
  };

//   const getCardStyle = (card) => {
//     const baseStyle = {
//       background: card.backgroundColor || '#f2f2f2',
//       border: '1px solid #4d4dff',
//       padding: '12px 8px',
//       textAlign: 'center',
//       cursor: card.title ? 'pointer' : 'default',
//       transition: 'all 0.15s',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       position: 'relative',
//       borderRadius: '1px'
//     };

//     if (method === 'customSize') {
//       return {
//         ...baseStyle,
//         width: cardWidth || 'auto',
//         height: cardHeight || '75px'
//       };
//     }

//     if (method === 'equalSplit') {
//       return {
//         ...baseStyle,
//         minHeight: '75px'
//       };
//     }

//     return {
//       ...baseStyle,
//       minHeight: '75px'
//     };
//   };

 
// const getCardStyle = (card) => {
//   const baseStyle = {
//     background: '#e0f2fe',  // bg-brand-softer (light blue)
//     border: '1px solid #0284c7',  // border color
//     padding: '16px',  // p-4
//     marginBottom: '16px',  // mb-4
//     textAlign: 'center',
//     cursor: card.title ? 'pointer' : 'default',
//     transition: 'all 0.15s',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//     borderRadius: '8px'  // rounded-base
//   };
//       if (method === 'customSize') {
//       return {
//         ...baseStyle,
//         width: cardWidth || 'auto',
//         height: cardHeight || '75px'
//       };
//     }

//     if (method === 'equalSplit') {
//       return {
//         ...baseStyle,
//         minHeight: '75px'
//       };
//     }

//     return {
//       ...baseStyle,
//       minHeight: '75px'
//     };
//   };


const getCardStyle = (card) => {
  const baseStyle = {
    background: '#cfe2ff',  // Bootstrap primary alert bg
    border: '1px solid #b6d4fe',  // Bootstrap primary alert border
    padding: '12px 8px',
    textAlign: 'center',
    cursor: card.title ? 'pointer' : 'default',
    transition: 'all 0.15s',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderRadius: '4px'
  };

  if (method === 'customSize') {
    return {
      ...baseStyle,
      width: cardWidth || 'auto',
      height: cardHeight || '75px'
    };
  }

  if (method === 'equalSplit') {
    return {
      ...baseStyle,
      minHeight: '75px'
    };
  }

  return {
    ...baseStyle,
    minHeight: '75px'
  };
};

const handleNavigate = (htmlId) => {
    if (!htmlId) return;
    const element = document.getElementById(htmlId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerStyle = {
    background: containerBackground,
    borderBottom: '1px solid #e0e0e0',
    ...(sticky && {
      position: 'sticky',
      top: 0,
      zIndex: 1000
    })
  };

  const responsiveClass = method === 'miniCards' ? 'nav-grid-minicards' : 
                          method === 'bar' ? 'nav-grid-bar' : 
                          'nav-grid-custom';

  return (
    <>
      <style>
        {`
          .nav-grid-minicards {
            grid-template-columns: repeat(8, 1fr);
          }
          @media (max-width: 1200px) {
            .nav-grid-minicards {
              grid-template-columns: repeat(6, 1fr);
            }
          }
          @media (max-width: 768px) {
            .nav-grid-minicards {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          .nav-grid-bar {
            grid-template-columns: repeat(4, 1fr);
          }
          @media (max-width: 1200px) {
            .nav-grid-bar {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 768px) {
            .nav-grid-bar {
              grid-template-columns: repeat(2, 1fr);
            }
          }
        `}
      </style>

      <nav style={containerStyle}>
        <div style={{ 
          maxWidth: '1300px', 
          margin: '0 auto',
          padding: '20px 32px'
        }}>
          <div 
            className={responsiveClass}
            style={getGridStyle()}
          >
            {processedCards.map((card) => (
              <NavCard 
                key={card.id} 
                card={card} 
                onClick={card.title ? () => handleNavigate(card.htmlId) : null}
                cardStyle={getCardStyle(card)}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

function NavCard({ card, onClick, cardStyle }) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyle = isHovered ? {
    background: 'white',
    borderColor: '#4d4dff',
    transform: 'scale(1.05)',
    zIndex: 10,
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
  } : {};

  return (
    <div
      style={{ ...cardStyle, ...hoverStyle }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {card.title && (
        <>
          {card.icon && (
            <div style={{ fontSize: '1.3rem', marginBottom: '4px',color:'#084298' }}>
              {card.icon}
            </div>
          )}
          <div style={{ 
            fontSize: '0.7rem', 
            fontWeight: '600', 
            lineHeight: '1.1',
            color: '#084298'
          }}>
            {card.title}
          </div>
          {card.badge && (
            <div style={{ 
              fontSize: '0.6rem', 
              color: '#084298', 
              marginTop: '2px' 
            }}>
              {card.badge}
            </div>
          )}
        </>
      )}
    </div>
  );
}