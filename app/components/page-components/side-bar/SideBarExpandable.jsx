// 'use client';

// import { useState, useEffect } from 'react';
// import { sidebarThemes } from './sidebarThemes';
// import { sidebarMockData } from './sidebarMockData';

// export default function SidebarToggle({ data, theme = 'flash' }) {
//   const [email, setEmail] = useState('');
//   const [expandedItems, setExpandedItems] = useState({});
//   const [isCollapsed, setIsCollapsed] = useState(false);
  
//   const sidebarData = data || sidebarMockData;
//   const currentTheme = sidebarThemes[theme] || sidebarThemes.flash;

//   useEffect(() => {
//     const style = document.createElement('style');
//     style.textContent = `
//       .sidebar-nav::-webkit-scrollbar {
//         display: none;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => document.head.removeChild(style);
//   }, []);

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     console.log('Newsletter signup:', email);
//     setEmail('');
//   };

//   const toggleExpanded = (categoryIndex, itemIndex) => {
//     if (!isCollapsed) {
//       const key = `${categoryIndex}-${itemIndex}`;
//       setExpandedItems(prev => ({
//         ...prev,
//         [key]: !prev[key]
//       }));
//     }
//   };

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const handleSidebarClick = () => {
//     if (isCollapsed) {
//       setIsCollapsed(false);
//     }
//   };

//   const styles = {
//     sidebar: {
//       width: isCollapsed ? '70px' : '235px',
//       height: '100vh',
//       background: currentTheme.background,
//       display: 'flex',
//       flexDirection: 'column',
//       position: 'sticky',
//       top: 0,
//       overflow: 'hidden',
//       transition: 'width 0.3s ease',
//       cursor: isCollapsed ? 'pointer' : 'default',
//     },
//     sidebarInner: {
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100%',
//       padding: '30px 20px 20px 20px',
//       position: 'relative',
//     },
//     toggleButton: {
//       position: 'absolute',
//       top: '30px',
//       right: '12px',
//       width: '28px',
//       height: '28px',
//       borderRadius: '50%',
//       background: 'rgba(255, 255, 255, 0.15)',
//       border: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       cursor: 'pointer',
//       zIndex: 100,
//       transition: 'all 0.3s ease',
//     },
//     chevron: {
//       fontSize: '0.7rem',
//       color: currentTheme.textColor,
//       transition: 'transform 0.3s ease',
//       transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
//     },
//     brandSection: {
//       marginBottom: '40px',
//       overflow: 'hidden',
//     },
//     brandName: {
//       fontSize: currentTheme.brandSize || '1.8rem',
//       fontWeight: '700',
//       color: currentTheme.brandColor,
//       margin: 0,
//       letterSpacing: '-0.5px',
//       whiteSpace: 'nowrap',
//       opacity: isCollapsed ? 0 : 1,
//       transition: 'opacity 0.3s ease',
//     },
//     brandSubtitle: {
//       fontSize: '0.85rem',
//       color: currentTheme.brandSubColor,
//       margin: '4px 0 0 0',
//       whiteSpace: 'nowrap',
//       opacity: isCollapsed ? 0 : 1,
//       transition: 'opacity 0.3s ease',
//     },
//     nav: {
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '20px',
//       overflowY: 'auto',
//       overflowX: 'hidden',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none',
//     },
//     category: {
//       marginBottom: '4px',
//     },
//     categoryTitle: {
//       fontSize: '0.7rem',
//       textTransform: 'uppercase',
//       color: currentTheme.categoryColor || 'rgba(255, 255, 255, 0.5)',
//       marginBottom: '8px',
//       fontWeight: '600',
//       letterSpacing: '0.8px',
//       whiteSpace: 'nowrap',
//       opacity: isCollapsed ? 0 : 1,
//       transition: 'opacity 0.3s ease',
//     },
//     categoryItems: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '2px',
//     },
//     menuItemWrapper: {
//       position: 'relative',
//     },
//     menuItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: isCollapsed ? '12px' : '12px 16px',
//       color: currentTheme.textColor,
//       fontSize: currentTheme.menuSize || '0.95rem',
//       borderRadius: '8px',
//       transition: 'all 0.2s ease',
//       cursor: 'pointer',
//       justifyContent: isCollapsed ? 'center' : 'flex-start',
//     },
//     iconWrapper: {
//       fontSize: '1.1rem',
//       color: currentTheme.iconColor,
//       width: '20px',
//       textAlign: 'center',
//       flexShrink: 0,
//       cursor: isCollapsed ? 'pointer' : 'default',
//     },
//     menuTextLink: {
//       flex: 1,
//       whiteSpace: 'nowrap',
//       overflow: 'hidden',
//       textDecoration: 'none',
//       color: 'inherit',
//       opacity: isCollapsed ? 0 : 1,
//       transition: 'opacity 0.3s ease',
//       cursor: 'pointer',
//     },
//     chevronIcon: {
//       fontSize: '0.7rem',
//       color: currentTheme.iconColor,
//       transition: 'transform 0.2s ease',
//       marginLeft: 'auto',
//       opacity: isCollapsed ? 0 : 1,
//       cursor: 'pointer',
//     },
//     chevronExpanded: {
//       transform: 'rotate(90deg)',
//     },
//     tooltip: {
//       position: 'absolute',
//       left: '75px',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       background: '#1a1a1a',
//       color: 'white',
//       padding: '6px 12px',
//       borderRadius: '6px',
//       fontSize: '0.85rem',
//       whiteSpace: 'nowrap',
//       zIndex: 1000,
//       pointerEvents: 'none',
//       opacity: 0,
//       transition: 'opacity 0.2s ease',
//     },
//     tooltipVisible: {
//       opacity: 1,
//     },
//     nestedItems: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '2px',
//       paddingLeft: isCollapsed ? '0' : '32px',
//       marginTop: '2px',
//       overflow: 'hidden',
//       opacity: isCollapsed ? 0 : 1,
//       maxHeight: isCollapsed ? '0' : '500px',
//       transition: 'all 0.3s ease',
//     },
//     nestedItem: {
//       display: 'block',
//       padding: '8px 12px',
//       textDecoration: 'none',
//       color: 'rgba(255, 255, 255, 0.7)',
//       fontSize: '0.85rem',
//       borderRadius: '6px',
//       transition: 'all 0.2s ease',
//       cursor: 'pointer',
//       whiteSpace: 'nowrap',
//     },
//     newsletterSection: {
//       marginTop: 'auto',
//       paddingTop: '20px',
//       opacity: isCollapsed ? 0 : 1,
//       maxHeight: isCollapsed ? '0' : '200px',
//       overflow: 'hidden',
//       transition: 'all 0.3s ease',
//     },
//     newsletterTitle: {
//       fontSize: currentTheme.newsletterSize || '0.9rem',
//       fontWeight: '600',
//       color: currentTheme.textColor,
//       marginBottom: '12px',
//       whiteSpace: 'nowrap',
//     },
//     newsletterForm: {
//       display: 'flex',
//       flexDirection: 'column',
//     },
//     input: {
//       padding: '10px 14px',
//       background: currentTheme.inputBackground,
//       border: `1px solid ${currentTheme.inputBorder}`,
//       borderRadius: '6px',
//       color: currentTheme.inputText,
//       fontSize: '0.85rem',
//       outline: 'none',
//     },
//     footer: {
//       marginTop: '20px',
//       fontSize: '0.7rem',
//       color: currentTheme.footerText,
//       lineHeight: '1.4',
//       opacity: isCollapsed ? 0 : 1,
//       maxHeight: isCollapsed ? '0' : '100px',
//       overflow: 'hidden',
//       transition: 'all 0.3s ease',
//     },
//   };

//   const MenuItem = ({ item, categoryIndex, itemIndex }) => {
//     const [showTooltip, setShowTooltip] = useState(false);
//     const hasChildren = item.children && item.children.length > 0;
//     const isExpanded = expandedItems[`${categoryIndex}-${itemIndex}`];

//     const handleIconClick = (e) => {
//       e.stopPropagation();
//       if (isCollapsed) {
//         setIsCollapsed(false);
//       }
//     };

//     const handleChevronClick = (e) => {
//       e.stopPropagation();
//       if (!isCollapsed) {
//         toggleExpanded(categoryIndex, itemIndex);
//       }
//     };

//     return (
//       <div style={styles.menuItemWrapper}>
//         <div
//           style={styles.menuItem}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = currentTheme.hoverBackground;
//             e.currentTarget.style.color = currentTheme.textColorHover;
//             if (isCollapsed) setShowTooltip(true);
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = 'transparent';
//             e.currentTarget.style.color = currentTheme.textColor;
//             setShowTooltip(false);
//           }}
//         >
//           <span 
//             style={styles.iconWrapper}
//             onClick={handleIconClick}
//           >
//             {item.icon}
//           </span>
          
//           {!isCollapsed && (
//             <>
//               <a
//                 href={item.href}
//                 style={styles.menuTextLink}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {item.name}
//               </a>
              
//               {hasChildren && (
//                 <span
//                   style={{
//                     ...styles.chevronIcon,
//                     ...(isExpanded ? styles.chevronExpanded : {})
//                   }}
//                   onClick={handleChevronClick}
//                 >
//                   ▶
//                 </span>
//               )}
//             </>
//           )}
//         </div>

//         {isCollapsed && showTooltip && (
//           <span style={{ ...styles.tooltip, ...styles.tooltipVisible }}>
//             {item.name}
//           </span>
//         )}
        
//         {hasChildren && isExpanded && !isCollapsed && (
//           <div style={styles.nestedItems}>
//             {item.children.map((child, childIndex) => (
//               <a
//                 key={childIndex}
//                 href={child.href}
//                 style={styles.nestedItem}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
//                   e.currentTarget.style.color = '#ffffff';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.background = 'transparent';
//                   e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
//                 }}
//               >
//                 {child.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <aside style={styles.sidebar} onClick={handleSidebarClick}>
//       <div style={styles.sidebarInner}>
//         <button
//           style={styles.toggleButton}
//           onClick={(e) => {
//             e.stopPropagation();
//             toggleSidebar();
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
//           }}
//         >
//           <span style={styles.chevron}>▶</span>
//         </button>

//         <div style={styles.brandSection}>
//           <h1 style={styles.brandName}>{sidebarData.brandName}</h1>
//           {sidebarData.brandSubtitle && (
//             <p style={styles.brandSubtitle}>{sidebarData.brandSubtitle}</p>
//           )}
//         </div>

//         <nav style={styles.nav} className="sidebar-nav">
//           {sidebarData.categories && sidebarData.categories.map((category, categoryIndex) => (
//             <div key={categoryIndex} style={styles.category}>
//               {category.title && (
//                 <div style={styles.categoryTitle}>{category.title}</div>
//               )}
//               <div style={styles.categoryItems}>
//                 {category.items.map((item, itemIndex) => (
//                   <MenuItem
//                     key={itemIndex}
//                     item={item}
//                     categoryIndex={categoryIndex}
//                     itemIndex={itemIndex}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </nav>

//         {sidebarData.showNewsletter && (
//           <div style={styles.newsletterSection}>
//             <div style={styles.newsletterTitle}>{sidebarData.newsletterTitle}</div>
//             <form style={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
//               <input
//                 type="email"
//                 placeholder="Enter Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 style={styles.input}
//               />
//             </form>
//           </div>
//         )}

//         {sidebarData.showFooter && (
//           <div style={styles.footer}>{sidebarData.footerText}</div>
//         )}
//       </div>
//     </aside>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import { sidebarThemes } from './sidebarThemes';
import { sidebarMockData } from './sidebarMockData';

export default function SidebarToggle({ data, theme = 'azure' }) {
  const [email, setEmail] = useState('');
  const [expandedItems, setExpandedItems] = useState({});
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  
  const sidebarData = data || sidebarMockData;
  const currentTheme = sidebarThemes[theme] || sidebarThemes.flash;

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sidebar-nav::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const toggleExpanded = (categoryIndex, itemIndex) => {
    if (!isCollapsed) {
      const key = `${categoryIndex}-${itemIndex}`;
      setExpandedItems(prev => ({
        ...prev,
        [key]: !prev[key]
      }));
    }
  };

  const styles = {
    sidebar: {
      width: isCollapsed ? '70px' : '235px',
      height: '100vh',
      background: currentTheme.background,
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      left: 0,
      overflow: 'hidden',
      transition: 'width 0.3s ease',
      cursor: isCollapsed ? 'pointer' : 'default',
    },
    sidebarInner: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '30px 20px 20px 20px',
      position: 'relative',
    },
    toggleButton: {
      position: 'absolute',
      top: '70px',
      right: '12px',
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.15)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      zIndex: 100,
      transition: 'all 0.2s ease',
    },
    chevron: {
      fontSize: '0.7rem',
      color: currentTheme.textColor,
      transition: 'transform 0.3s ease',
      transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)',
    },
    brandSection: {
      marginBottom: '40px',
      overflow: 'hidden',
    },
    brandName: {
      fontSize: currentTheme.brandSize || '1.8rem',
      fontWeight: '700',
      color: currentTheme.brandColor,
      margin: 0,
      letterSpacing: '-0.5px',
      whiteSpace: 'nowrap',
      opacity: isCollapsed ? 0 : 1,
      transition: 'opacity 0.3s ease',
      pointerEvents: isCollapsed ? 'none' : 'auto',
    },
    brandSubtitle: {
      fontSize: '0.85rem',
      color: currentTheme.brandSubColor,
      margin: '4px 0 0 0',
      whiteSpace: 'nowrap',
      opacity: isCollapsed ? 0 : 1,
      transition: 'opacity 0.3s ease',
      pointerEvents: isCollapsed ? 'none' : 'auto',
    },
    nav: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      overflowY: 'auto',
      overflowX: 'hidden',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
    category: {
      marginBottom: '4px',
    },
    categoryTitle: {
      fontSize: '0.7rem',
      textTransform: 'uppercase',
      color: currentTheme.categoryColor || 'rgba(255, 255, 255, 0.5)',
      marginBottom: '8px',
      fontWeight: '600',
      letterSpacing: '0.8px',
      whiteSpace: 'nowrap',
      opacity: isCollapsed ? 0 : 1,
      transition: 'opacity 0.3s ease',
      pointerEvents: isCollapsed ? 'none' : 'auto',
    },
    categoryItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    },
    menuItemWrapper: {
      position: 'relative',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: isCollapsed ? '12px' : '12px 16px',
      color: currentTheme.textColor,
      fontSize: currentTheme.menuSize || '0.95rem',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      justifyContent: isCollapsed ? 'center' : 'flex-start',
    },
    iconWrapper: {
      fontSize: '1.1rem',
      color: currentTheme.iconColor,
      width: '20px',
      textAlign: 'center',
      flexShrink: 0,
      cursor: isCollapsed ? 'pointer' : 'default',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    menuTextLink: {
      flex: 1,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      display: isCollapsed ? 'none' : 'block',
    },
    chevronIcon: {
      fontSize: '0.7rem',
      color: currentTheme.iconColor,
      transition: 'transform 0.2s ease',
      marginLeft: 'auto',
      display: isCollapsed ? 'none' : 'block',
      cursor: 'pointer',
    },
    chevronExpanded: {
      transform: 'rotate(90deg)',
    },
    tooltip: {
      position: 'sticky',
      left: '85px',
      background: '#1a1a1a',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '6px',
      fontSize: '0.85rem',
      whiteSpace: 'nowrap',
      zIndex: 10000,
      pointerEvents: 'none',
      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    },
    nestedItems: {
      display: isCollapsed ? 'none' : 'flex',
      flexDirection: 'column',
      gap: '2px',
      paddingLeft: '32px',
      marginTop: '2px',
      overflow: 'hidden',
      maxHeight: isCollapsed ? '0' : '500px',
      transition: 'all 0.3s ease',
    },
    nestedItem: {
      display: 'block',
      padding: '8px 12px',
      textDecoration: 'none',
      color: 'rgba(255, 255, 255, 0.7)',
      fontSize: '0.85rem',
      borderRadius: '6px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
    },
    newsletterSection: {
      marginTop: 'auto',
      paddingTop: '20px',
      opacity: isCollapsed ? 0 : 1,
      maxHeight: isCollapsed ? '0' : '200px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      pointerEvents: isCollapsed ? 'none' : 'auto',
    },
    newsletterTitle: {
      fontSize: currentTheme.newsletterSize || '0.9rem',
      fontWeight: '600',
      color: currentTheme.textColor,
      marginBottom: '12px',
      whiteSpace: 'nowrap',
    },
    newsletterForm: {
      display: 'flex',
      flexDirection: 'column',
    },
    input: {
      padding: '10px 14px',
      background: currentTheme.inputBackground,
      border: `1px solid ${currentTheme.inputBorder}`,
      borderRadius: '6px',
      color: currentTheme.inputText,
      fontSize: '0.85rem',
      outline: 'none',
    },
    footer: {
      marginTop: '20px',
      fontSize: '0.7rem',
      color: currentTheme.footerText,
      lineHeight: '1.4',
      opacity: isCollapsed ? 0 : 1,
      maxHeight: isCollapsed ? '0' : '100px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      pointerEvents: isCollapsed ? 'none' : 'auto',
    },
  };

  const MenuItem = ({ item, categoryIndex, itemIndex }) => {
    const [iconRect, setIconRect] = useState(null);
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems[`${categoryIndex}-${itemIndex}`];
    const tooltipKey = `${categoryIndex}-${itemIndex}`;

    return (
      <div style={styles.menuItemWrapper}>
        <div
          style={styles.menuItem}
          onMouseEnter={(e) => {
            if (!isCollapsed) {
              e.currentTarget.style.background = currentTheme.hoverBackground;
              e.currentTarget.style.color = currentTheme.textColorHover;
            }
          }}
          onMouseLeave={(e) => {
            if (!isCollapsed) {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = currentTheme.textColor;
            }
          }}
        >
          <span
            style={styles.iconWrapper}
            onClick={() => {
              if (isCollapsed) {
                setIsCollapsed(false);
              }
            }}
            onMouseEnter={(e) => {
              if (isCollapsed) {
                const rect = e.currentTarget.getBoundingClientRect();
                setIconRect(rect);
                setHoveredIcon(tooltipKey);
              }
            }}
            onMouseLeave={() => {
              if (isCollapsed) {
                setHoveredIcon(null);
                setIconRect(null);
              }
            }}
          >
            {item.icon}
          </span>

          {!isCollapsed && (
            <>
              <a
                href={item.href}
                style={styles.menuTextLink}
                onMouseEnter={(e) => {
                  e.currentTarget.parentElement.style.background = currentTheme.hoverBackground;
                  e.currentTarget.parentElement.style.color = currentTheme.textColorHover;
                }}
              >
                {item.name}
              </a>

              {hasChildren && (
                <span
                  style={{
                    ...styles.chevronIcon,
                    ...(isExpanded ? styles.chevronExpanded : {})
                  }}
                  onClick={() => toggleExpanded(categoryIndex, itemIndex)}
                >
                  ▶
                </span>
              )}
            </>
          )}
        </div>

        {isCollapsed && hoveredIcon === tooltipKey && iconRect && (
          <div
            style={{
              ...styles.tooltip,
              top: `${iconRect.top + iconRect.height / 2}px`,
              transform: 'translateY(-50%)',
            }}
          >
            {item.name}
          </div>
        )}

        {hasChildren && isExpanded && !isCollapsed && (
          <div style={styles.nestedItems}>
            {item.children.map((child, childIndex) => (
              <a
                key={childIndex}
                href={child.href}
                style={styles.nestedItem}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)';
                }}
              >
                {child.name}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside
      style={styles.sidebar}
      onClick={() => {
        if (isCollapsed) {
          setIsCollapsed(false);
        }
      }}
    >
      <div style={styles.sidebarInner}>
        <button
          style={styles.toggleButton}
          onClick={(e) => {
            e.stopPropagation();
            setIsCollapsed(!isCollapsed);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
          }}
        >
          <span style={styles.chevron}>▶</span>
        </button>

        <div style={styles.brandSection}>
          <h1 style={styles.brandName}>{sidebarData.brandName}</h1>
          {sidebarData.brandSubtitle && (
            <p style={styles.brandSubtitle}>{sidebarData.brandSubtitle}</p>
          )}
        </div>

        <nav style={styles.nav} className="sidebar-nav">
          {sidebarData.categories &&
            sidebarData.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} style={styles.category}>
                {category.title && <div style={styles.categoryTitle}>{category.title}</div>}
                <div style={styles.categoryItems}>
                  {category.items.map((item, itemIndex) => (
                    <MenuItem key={itemIndex} item={item} categoryIndex={categoryIndex} itemIndex={itemIndex} />
                  ))}
                </div>
              </div>
            ))}
        </nav>

        {sidebarData.showNewsletter && (
          <div style={styles.newsletterSection}>
            <div style={styles.newsletterTitle}>{sidebarData.newsletterTitle}</div>
            <form style={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
              />
            </form>
          </div>
        )}

        {sidebarData.showFooter && <div style={styles.footer}>{sidebarData.footerText}</div>}
      </div>
    </aside>
  );
}