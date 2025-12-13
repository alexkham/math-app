// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import navThemes from './navThemes';
// import { mainMenuStructure } from './mainMenu';
// import SearchBar2 from '../nav-bar2/SearchBar2';

// function ChevronDown({ style = {} }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       style={{
//         transition: 'transform 0.3s ease',
//         ...style
//       }}
//     >
//       <polyline points="6 9 12 15 18 9"></polyline>
//     </svg>
//   );
// }

// function MyNavbar3({ 
//   menuStructure = mainMenuStructure, 
//   themeName = 'white',
//   searchComponent = <SearchBar2 width="200px" />
// }) {
//   // Get the actual theme object from the theme name
//   const theme = navThemes[themeName] || navThemes.white;
  
//   const [isNavActive, setIsNavActive] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeMegaMenu, setActiveMegaMenu] = useState(null);
//   const [expandedNested, setExpandedNested] = useState(new Set());
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsNavActive(window.scrollY > 150);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMouseEnter = (menuName) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveMegaMenu(menuName);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveMegaMenu(null);
//       setExpandedNested(new Set());
//     }, 200);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setActiveMegaMenu(null);
//     setExpandedNested(new Set());
//   };

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const toggleNested = (itemId) => {
//     setExpandedNested(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(itemId)) {
//         newSet.delete(itemId);
//       } else {
//         newSet.add(itemId);
//       }
//       return newSet;
//     });
//   };

//   const renderNestedItems = (nestedItems, parentId) => {
//     if (!nestedItems || nestedItems.length === 0) return null;

//     return (
//       <ul style={{
//         listStyle: 'none',
//         marginTop: '8px',
//         paddingLeft: '16px',
//         borderLeft: `2px solid ${theme.sectionBorder}`,
//       }}>
//         {nestedItems.map((nestedItem, idx) => (
//           <li key={idx}>
//             <Link 
//               href={nestedItem.href}
//               onClick={closeMobileMenu}
//               style={{
//                 color: theme.itemText,
//                 textDecoration: 'none',
//                 padding: '8px 12px',
//                 fontSize: '13px',
//                 fontWeight: '500',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 borderRadius: '4px',
//                 transition: 'all 0.2s ease',
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
//                 e.currentTarget.style.color = theme.itemHoverText;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = 'transparent';
//                 e.currentTarget.style.color = theme.itemText;
//               }}
//             >
//               {nestedItem.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{nestedItem.icon}</span>}
//               {nestedItem.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   const renderFeaturedTopics = (columns) => {
//     const allItems = columns.flatMap(col => col.items || []);

//     return (
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: 'repeat(2, 1fr)',
//         gap: '12px 40px',
//         maxWidth: '600px',
//       }}>
//         {allItems.map((item, index) => {
//           const itemId = `featured-${index}`;
//           const hasNested = item.nested && item.nested.length > 0;
//           const isExpanded = expandedNested.has(itemId);

//           return (
//             <div key={index}>
//               <div style={{ position: 'relative' }}>
//                 {hasNested ? (
//                   <button
//                     onClick={() => toggleNested(itemId)}
//                     style={{
//                       color: theme.itemText,
//                       textDecoration: 'none',
//                       padding: '14px 20px',
//                       fontSize: '15px',
//                       fontWeight: '600',
//                       borderRadius: '4px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'space-between',
//                       gap: '8px',
//                       borderLeft: `3px solid transparent`,
//                       backgroundColor: theme.itemBackground,
//                       width: '100%',
//                       border: 'none',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s ease',
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
//                       e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
//                       e.currentTarget.style.color = theme.itemHoverText;
//                       e.currentTarget.style.transform = 'translateX(4px)';
//                     }}
//                     onMouseLeave={(e) => {
//                       if (!isExpanded) {
//                         e.currentTarget.style.backgroundColor = theme.itemBackground;
//                         e.currentTarget.style.borderLeftColor = 'transparent';
//                         e.currentTarget.style.color = theme.itemText;
//                       }
//                       e.currentTarget.style.transform = 'translateX(0)';
//                     }}
//                   >
//                     <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                       {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
//                       {item.label}
//                     </span>
//                     <ChevronDown style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
//                   </button>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     onClick={closeMobileMenu}
//                     style={{
//                       color: theme.itemText,
//                       textDecoration: 'none',
//                       padding: '14px 20px',
//                       fontSize: '15px',
//                       fontWeight: '600',
//                       borderRadius: '4px',
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: '8px',
//                       borderLeft: `3px solid transparent`,
//                       backgroundColor: theme.itemBackground,
//                       transition: 'all 0.2s ease',
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
//                       e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
//                       e.currentTarget.style.color = theme.itemHoverText;
//                       e.currentTarget.style.transform = 'translateX(4px)';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = theme.itemBackground;
//                       e.currentTarget.style.borderLeftColor = 'transparent';
//                       e.currentTarget.style.color = theme.itemText;
//                       e.currentTarget.style.transform = 'translateX(0)';
//                     }}
//                   >
//                     {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
//                     {item.label}
//                   </Link>
//                 )}
//               </div>
//               {hasNested && isExpanded && renderNestedItems(item.nested, itemId)}
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   const renderResourcesMenu = (columns) => {
//     return (
//     //   <div style={{
//     //     display: 'grid',
//     //     gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
//     //     gap: '40px',
//     //     maxWidth: '100%',
//     //   }}>

// //     <div style={{
// //   display: 'grid',
// //   gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',  // Smaller min-width
// //   gap: '30px 40px',  // row-gap column-gap
// //   maxWidth: '100%',
// //   alignItems: 'start',  // Align columns to top
// // }}>
// //         {columns.map((column, columnIndex) => (
// //           <div key={columnIndex} style={{
// //             display: 'flex',
// //             flexDirection: 'column',
// //             gap: '16px',
// //           }}>

// // <div style={{
// //   columnCount: 'auto',
// //   columnWidth: '200px',
// //   columnGap: '40px',
// //   maxWidth: '100%',
// // }}>

// <div style={{
//   columnCount: 2,
//   columnGap: '40px',
//   maxWidth: '100%',
// }}>
    
//   {columns.map((column, columnIndex) => (
//     <div key={columnIndex} style={{
//       breakInside: 'avoid',
//       marginBottom: '30px',
//       display: 'inline-block',
//       width: '100%',
//     }}>
//             {column.title && (
//               <div style={{
//                 borderBottom: `2px solid ${theme.sectionBorder}`,
//                 paddingBottom: '12px',
//                 marginBottom: '4px',
//               }}>
//                 <Link
//                   href={column.href || '#'}
//                   onClick={closeMobileMenu}
//                   style={{
//                     color: theme.sectionTitleText,
//                     fontSize: '16px',
//                     fontWeight: '700',
//                     textDecoration: 'none',
//                     textTransform: 'uppercase',
//                     letterSpacing: '0.5px',
//                     transition: 'color 0.2s ease',
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '8px',
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.color = theme.sectionTitleHoverText;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.color = theme.sectionTitleText;
//                   }}
//                 >
//                   {column.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{column.icon}</span>}
//                   {column.title}
//                 </Link>
//               </div>
//             )}
//             <ul style={{
//               listStyle: 'none',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '2px',
//             }}>
//               {column.items && column.items.map((item, itemIndex) => {
//                 const itemId = `resource-${columnIndex}-${itemIndex}`;
//                 const hasNested = item.nested && item.nested.length > 0;
//                 const isExpanded = expandedNested.has(itemId);

//                 return (
//                   <li key={itemIndex}>
//                     <div>
//                       {hasNested ? (
//                         <button
//                           onClick={() => toggleNested(itemId)}
//                           style={{
//                             color: theme.itemText,
//                             textDecoration: 'none',
//                             padding: '10px 16px',
//                             fontSize: '14px',
//                             fontWeight: '500',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'space-between',
//                             borderRadius: '4px',
//                             borderLeft: `2px solid transparent`,
//                             lineHeight: '1.4',
//                             backgroundColor: theme.itemBackground,
//                             width: '100%',
//                             border: 'none',
//                             cursor: 'pointer',
//                             transition: 'all 0.2s ease',
//                           }}
//                           onMouseEnter={(e) => {
//                             e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
//                             e.currentTarget.style.color = theme.itemHoverText;
//                             e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
//                             e.currentTarget.style.transform = 'translateX(4px)';
//                           }}
//                           onMouseLeave={(e) => {
//                             if (!isExpanded) {
//                               e.currentTarget.style.backgroundColor = theme.itemBackground;
//                               e.currentTarget.style.color = theme.itemText;
//                               e.currentTarget.style.borderLeftColor = 'transparent';
//                             }
//                             e.currentTarget.style.transform = 'translateX(0)';
//                           }}
//                         >
//                           <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//                             {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
//                             {item.label}
//                           </span>
//                           <ChevronDown style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
//                         </button>
//                       ) : (
//                         <Link
//                           href={item.href}
//                           onClick={closeMobileMenu}
//                           style={{
//                             color: theme.itemText,
//                             textDecoration: 'none',
//                             padding: '10px 16px',
//                             fontSize: '14px',
//                             fontWeight: '500',
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '8px',
//                             borderRadius: '4px',
//                             borderLeft: `2px solid transparent`,
//                             lineHeight: '1.4',
//                             backgroundColor: theme.itemBackground,
//                             transition: 'all 0.2s ease',
//                           }}
//                           onMouseEnter={(e) => {
//                             e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
//                             e.currentTarget.style.color = theme.itemHoverText;
//                             e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
//                             e.currentTarget.style.transform = 'translateX(4px)';
//                           }}
//                           onMouseLeave={(e) => {
//                             e.currentTarget.style.backgroundColor = theme.itemBackground;
//                             e.currentTarget.style.color = theme.itemText;
//                             e.currentTarget.style.borderLeftColor = 'transparent';
//                             e.currentTarget.style.transform = 'translateX(0)';
//                           }}
//                         >
//                           {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
//                           {item.label}
//                         </Link>
//                       )}
//                     </div>
//                     {hasNested && isExpanded && renderNestedItems(item.nested, itemId)}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderMenuItem = (item) => {
//     if (item.type === 'link') {
//       return (
//         <li key={item.id} style={{
//           position: 'relative',
//           height: '60px',
//           display: 'flex',
//           alignItems: 'center',
//         }}>
//           <Link 
//             href={item.href} 
//             onClick={closeMobileMenu}
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//               padding: '0 20px',
//               fontSize: '16px',
//               fontWeight: '500',
//               whiteSpace: 'nowrap',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '6px',
//               height: '60px',
//               borderBottom: '3px solid transparent',
//               transition: 'all 0.2s ease',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//               e.currentTarget.style.borderBottomColor = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.borderBottomColor = 'transparent';
//             }}
//           >
//             {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
//             {item.label}
//           </Link>
//         </li>
//       );
//     } else if (item.type === 'megamenu') {
//       const isFeaturedTopics = item.id === 'sections';
//       const isActive = activeMegaMenu === item.id;

//       return (
//         <li
//           key={item.id}
//           onMouseEnter={() => handleMouseEnter(item.id)}
//           onMouseLeave={handleMouseLeave}
//           style={{
//             position: 'relative',
//             height: '60px',
//             display: 'flex',
//             alignItems: 'center',
//           }}
//         >
//           <a
//             style={{
//               color: 'white',
//               textDecoration: 'none',
//               padding: '0 20px',
//               fontSize: '16px',
//               fontWeight: '500',
//               whiteSpace: 'nowrap',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '6px',
//               height: '60px',
//               cursor: 'pointer',
//               borderBottom: '3px solid transparent',
//               transition: 'all 0.2s ease',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//               e.currentTarget.style.borderBottomColor = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.borderBottomColor = 'transparent';
//             }}
//           >
//             {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
//             {item.label}
//             <ChevronDown style={{
//               transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
//               opacity: isActive ? 1 : 0.8,
//             }} />
//           </a>

//           <div style={{
//             position: 'fixed',
//             left: 0,
//             right: 0,
//             top: '60px',
//             backgroundColor: theme.panelBackground,
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
//             borderTop: `1px solid ${theme.panelBorder}`,
//             opacity: isActive ? 1 : 0,
//             visibility: isActive ? 'visible' : 'hidden',
//             transform: isActive ? 'translateY(0)' : 'translateY(-10px)',
//             transition: 'all 0.3s ease',
//             pointerEvents: isActive ? 'auto' : 'none',
//             zIndex: 9999,
//             maxHeight: 'calc(100vh - 90px)',
//             overflowY: 'auto',
//             scrollbarWidth: 'none',
//             msOverflowStyle: 'none',
//           }}>
//             <style jsx>{`
//               div::-webkit-scrollbar {
//                 display: none;
//               }
//             `}</style>
//             <div style={{
//               maxWidth: '1400px',
//               margin: '0 auto',
//               padding: '40px 40px 50px',
//             }}>
//               {isFeaturedTopics ? (
//                 renderFeaturedTopics(item.columns)
//               ) : (
//                 renderResourcesMenu(item.columns)
//               )}
//             </div>
//           </div>
//         </li>
//       );
//     }
//     return null;
//   };

//   return (
//     <nav style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       right: 0,
//       width: '100%',
//       height: '60px',
//       backgroundColor: '#4d4dff',
//       backdropFilter: 'blur(10px)',
//       borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//       zIndex: 10000,
//       transition: 'all 0.3s ease',
//       boxShadow: isNavActive ? '0 2px 10px rgba(0, 0, 0, 0.15)' : 'none',
//     }}>
//       <div style={{
//         maxWidth: '1400px',
//         height: '60px',
//         margin: '0 auto',
//         padding: '0 40px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         position: 'relative',
//       }}>
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           style={{
//             display: 'none',
//             background: 'none',
//             border: 'none',
//             fontSize: '24px',
//             padding: '8px',
//             cursor: 'pointer',
//             color: 'white',
//             position: 'absolute',
//             left: '20px',
//           }}
//         >
//           {isMobileMenuOpen ? '✕' : '☰'}
//         </button>

//         <ul style={{
//           display: 'flex',
//           alignItems: 'center',
//           listStyle: 'none',
//           gap: '4px',
//           height: '60px',
//         }}>
//           {menuStructure.map(renderMenuItem)}
//           <li 
//             onClick={handleGoBack} 
//             style={{
//               cursor: 'pointer',
//               position: 'relative',
//               height: '60px',
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <a style={{
//               color: 'white',
//               textDecoration: 'none',
//               padding: '0 20px',
//               fontSize: '16px',
//               fontWeight: '500',
//               whiteSpace: 'nowrap',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '6px',
//               height: '60px',
//               borderBottom: '3px solid transparent',
//               transition: 'all 0.2s ease',
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
//               e.currentTarget.style.borderBottomColor = 'white';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.backgroundColor = 'transparent';
//               e.currentTarget.style.borderBottomColor = 'transparent';
//             }}>
//               Go Back
//             </a>
//           </li>
//           {searchComponent && (
//             <li style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
//               {searchComponent}
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default MyNavbar3;


'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import navThemes from './navThemes';
import { mainMenuStructure } from './mainMenu';
import SearchBar2 from '../nav-bar2/SearchBar2';

function ChevronDown({ style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        transition: 'transform 0.3s ease',
        ...style
      }}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
}

function MyNavbar3({ 
  menuStructure = mainMenuStructure, 
  themeName = 'white',
  searchComponent = <SearchBar2 width="200px" />
}) {
  const theme = navThemes[themeName] || navThemes.white;
  
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [expandedNested, setExpandedNested] = useState(new Set());
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const timeoutRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavActive(window.scrollY > 150);
    };

    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        closeMegaMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menuName);
    setHoveredCategory(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setExpandedNested(new Set());
      setHoveredCategory(null);
    }, 200);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
    setExpandedNested(new Set());
    setHoveredCategory(null);
    setIsMobileMenuOpen(false);
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const toggleNested = (itemId) => {
    setExpandedNested(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const renderNestedItems = (nestedItems) => {
    if (!nestedItems || nestedItems.length === 0) return null;

    return (
      <ul style={{
        listStyle: 'none',
        marginTop: '8px',
        paddingLeft: '16px',
        borderLeft: `2px solid ${theme.sectionBorder}`,
      }}>
        {nestedItems.map((nestedItem, idx) => (
          <li key={idx}>
            <Link 
              href={nestedItem.href}
              onClick={closeMegaMenu}
              style={{
                color: theme.itemText,
                textDecoration: 'none',
                padding: '8px 12px',
                fontSize: '13px',
                fontWeight: '500',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '4px',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
                e.currentTarget.style.color = theme.itemHoverText;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = theme.itemText;
              }}
            >
              {nestedItem.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{nestedItem.icon}</span>}
              {nestedItem.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const renderFeaturedTopics = (columns) => {
    const allItems = columns.flatMap(col => col.items || []);

    return (
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px 40px',
        maxWidth: '600px',
      }}>
        {allItems.map((item, index) => {
          const itemId = `featured-${index}`;
          const hasNested = item.nested && item.nested.length > 0;
          const isExpanded = expandedNested.has(itemId);

          return (
            <div key={index}>
              <div style={{ position: 'relative' }}>
                {hasNested ? (
                  <button
                    onClick={() => toggleNested(itemId)}
                    style={{
                      color: theme.itemText,
                      textDecoration: 'none',
                      padding: '14px 20px',
                      fontSize: '15px',
                      fontWeight: '600',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      borderLeft: `3px solid transparent`,
                      backgroundColor: theme.itemBackground,
                      width: '100%',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
                      e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
                      e.currentTarget.style.color = theme.itemHoverText;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.backgroundColor = theme.itemBackground;
                        e.currentTarget.style.borderLeftColor = 'transparent';
                        e.currentTarget.style.color = theme.itemText;
                      }
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
                      {item.label}
                    </span>
                    <ChevronDown style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMegaMenu}
                    style={{
                      color: theme.itemText,
                      textDecoration: 'none',
                      padding: '14px 20px',
                      fontSize: '15px',
                      fontWeight: '600',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderLeft: `3px solid transparent`,
                      backgroundColor: theme.itemBackground,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
                      e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
                      e.currentTarget.style.color = theme.itemHoverText;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = theme.itemBackground;
                      e.currentTarget.style.borderLeftColor = 'transparent';
                      e.currentTarget.style.color = theme.itemText;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
                    {item.label}
                  </Link>
                )}
              </div>
              {hasNested && isExpanded && renderNestedItems(item.nested)}
            </div>
          );
        })}
      </div>
    );
  };

  const renderResourcesMenu = (columns) => {
    const firstCategory = columns.length > 0 ? columns[0] : null;
    const activeCategory = hoveredCategory !== null ? columns[hoveredCategory] : firstCategory;

    return (
      <div style={{
        display: 'flex',
        gap: '40px',
        minHeight: '400px',
      }}>
        <div style={{
          flex: '0 0 250px',
          borderRight: `1px solid ${theme.panelBorder}`,
          paddingRight: '30px',
        }}>
          {columns.map((column, columnIndex) => {
            const isActive = hoveredCategory === columnIndex || (hoveredCategory === null && columnIndex === 0);
            return (
              <div
                key={columnIndex}
                onMouseEnter={() => setHoveredCategory(columnIndex)}
                style={{
                  padding: '16px 20px',
                  marginBottom: '8px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backgroundColor: isActive ? theme.itemHoverBackground : 'transparent',
                  borderLeft: `3px solid ${isActive ? theme.itemHoverBorderColor : 'transparent'}`,
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{
                  color: isActive ? theme.itemHoverText : theme.sectionTitleText,
                  fontSize: '16px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.2s ease',
                }}>
                  {column.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{column.icon}</span>}
                  {column.title}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{
          flex: '1',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '20px',
        }}>
          {activeCategory && activeCategory.items && activeCategory.items.map((item, itemIndex) => {
            const itemId = `resource-item-${itemIndex}`;
            const hasNested = item.nested && item.nested.length > 0;
            const isExpanded = expandedNested.has(itemId);

            return (
              <div key={itemIndex}>
                {hasNested ? (
                  <button
                    onClick={() => toggleNested(itemId)}
                    style={{
                      color: theme.itemText,
                      textDecoration: 'none',
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderRadius: '4px',
                      borderLeft: `2px solid transparent`,
                      backgroundColor: theme.itemBackground,
                      width: '100%',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
                      e.currentTarget.style.color = theme.itemHoverText;
                      e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.backgroundColor = theme.itemBackground;
                        e.currentTarget.style.color = theme.itemText;
                        e.currentTarget.style.borderLeftColor = 'transparent';
                      }
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
                      {item.label}
                    </span>
                    <ChevronDown style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMegaMenu}
                    style={{
                      color: theme.itemText,
                      textDecoration: 'none',
                      padding: '12px 16px',
                      fontSize: '14px',
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      borderRadius: '4px',
                      borderLeft: `2px solid transparent`,
                      backgroundColor: theme.itemBackground,
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
                      e.currentTarget.style.color = theme.itemHoverText;
                      e.currentTarget.style.borderLeftColor = theme.itemHoverBorderColor;
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = theme.itemBackground;
                      e.currentTarget.style.color = theme.itemText;
                      e.currentTarget.style.borderLeftColor = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
                    {item.label}
                  </Link>
                )}
                {hasNested && isExpanded && renderNestedItems(item.nested)}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderMenuItem = (item) => {
    if (item.type === 'link') {
      return (
        <li key={item.id} style={{
          position: 'relative',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
        }}>
          <Link 
            href={item.href} 
            onClick={closeMegaMenu}
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0 20px',
              fontSize: '16px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '60px',
              borderBottom: '3px solid transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderBottomColor = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
            {item.label}
          </Link>
        </li>
      );
    } else if (item.type === 'megamenu') {
      const isFeaturedTopics = item.id === 'sections';
      const isActive = activeMegaMenu === item.id;

      return (
        <li
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a
            style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0 20px',
              fontSize: '16px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '60px',
              cursor: 'pointer',
              borderBottom: '3px solid transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderBottomColor = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}
          >
            {item.icon && <span style={{ display: 'flex', alignItems: 'center' }}>{item.icon}</span>}
            {item.label}
            <ChevronDown style={{
              transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              opacity: isActive ? 1 : 0.8,
            }} />
          </a>

          <div 
            ref={panelRef}
            style={{
              position: 'fixed',
              left: 0,
              right: 0,
              top: '60px',
              backgroundColor: theme.panelBackground,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              borderTop: `1px solid ${theme.panelBorder}`,
              opacity: isActive ? 1 : 0,
              visibility: isActive ? 'visible' : 'hidden',
              transform: isActive ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'all 0.3s ease',
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: 9999,
              maxHeight: 'calc(100vh - 90px)',
              overflowY: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            <button
              onClick={closeMegaMenu}
              style={{
                position: 'absolute',
                top: '20px',
                right: '40px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: theme.itemText,
                padding: '8px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.itemHoverBackground;
                e.currentTarget.style.color = theme.itemHoverText;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = theme.itemText;
              }}
            >
              <CloseIcon />
            </button>

            <div style={{
              maxWidth: '1400px',
              margin: '0 auto',
              padding: '40px 40px 50px',
            }}>
              {isFeaturedTopics ? (
                renderFeaturedTopics(item.columns)
              ) : (
                renderResourcesMenu(item.columns)
              )}
            </div>
          </div>
        </li>
      );
    }
    return null;
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '60px',
      backgroundColor: '#4d4dff',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      zIndex: 10000,
      transition: 'all 0.3s ease',
      boxShadow: isNavActive ? '0 2px 10px rgba(0, 0, 0, 0.15)' : 'none',
    }}>
      <div style={{
        maxWidth: '1400px',
        height: '60px',
        margin: '0 auto',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            padding: '8px',
            cursor: 'pointer',
            color: 'white',
            position: 'absolute',
            left: '20px',
          }}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <ul style={{
          display: 'flex',
          alignItems: 'center',
          listStyle: 'none',
          gap: '4px',
          height: '60px',
        }}>
          {menuStructure.map(renderMenuItem)}
          <li 
            onClick={handleGoBack} 
            style={{
              cursor: 'pointer',
              position: 'relative',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <a style={{
              color: 'white',
              textDecoration: 'none',
              padding: '0 20px',
              fontSize: '16px',
              fontWeight: '500',
              whiteSpace: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              height: '60px',
              borderBottom: '3px solid transparent',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderBottomColor = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderBottomColor = 'transparent';
            }}>
              Go Back
            </a>
          </li>
          {searchComponent && (
            <li style={{ marginLeft: '20px', display: 'flex', alignItems: 'center' }}>
              {searchComponent}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default MyNavbar3;