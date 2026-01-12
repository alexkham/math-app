// // 'use client';

// // import { useState } from 'react';
// // import { sidebarThemes } from './sidebarThemes';
// // import { sidebarMockData } from './sidebarMockData';

// // export default function Sidebar({ data, theme = 'portfolio' }) {
// //   const [email, setEmail] = useState('');
  
// //   const sidebarData = data || sidebarMockData;
// //   const currentTheme = sidebarThemes[theme] || sidebarThemes.flash;

// //   const handleNewsletterSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Newsletter signup:', email);
// //     setEmail('');
// //   };

// //   const styles = {
// //     sidebar: {
// //       width: '235px',
// //       height: '100vh',
// //       background: currentTheme.background,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       position: 'sticky',
// //       top: 0,
// //       overflow: 'hidden',
// //     },
// //     sidebarInner: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       height: '100%',
// //       padding: '30px 20px 20px 20px',
// //     },
// //     brandSection: {
// //       marginBottom: '40px',
// //     },
// //     brandName: {
// //       fontSize: '1.8rem',
// //       fontWeight: '700',
// //       color: currentTheme.brandColor,
// //       margin: 0,
// //       letterSpacing: '-0.5px',
// //     },
// //     brandSubtitle: {
// //       fontSize: '0.85rem',
// //       color: currentTheme.brandSubColor,
// //       margin: '4px 0 0 0',
// //     },
// //     menuToggle: {
// //       width: '32px',
// //       height: '32px',
// //       background: 'rgba(255, 255, 255, 0.15)',
// //       border: 'none',
// //       borderRadius: '50%',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       cursor: 'pointer',
// //       position: 'absolute',
// //       top: '30px',
// //       right: '-16px',
// //       color: currentTheme.textColor,
// //       fontSize: '1.2rem',
// //     },
// //     nav: {
// //       flex: 1,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '4px',
// //     },
// //     menuItem: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '12px',
// //       padding: '12px 16px',
// //       textDecoration: 'none',
// //       color: currentTheme.textColor,
// //       fontSize: '0.95rem',
// //       borderRadius: '8px',
// //       transition: 'all 0.2s ease',
// //       cursor: 'pointer',
// //     },
// //     menuItemHover: {
// //       background: currentTheme.hoverBackground,
// //       color: currentTheme.textColorHover,
// //     },
// //     icon: {
// //       fontSize: '1.1rem',
// //       color: currentTheme.iconColor,
// //       width: '20px',
// //       textAlign: 'center',
// //     },
// //     newsletterSection: {
// //       marginTop: 'auto',
// //       paddingTop: '20px',
// //     },
// //     newsletterTitle: {
// //       fontSize: '0.9rem',
// //       fontWeight: '600',
// //       color: currentTheme.textColor,
// //       marginBottom: '12px',
// //     },
// //     newsletterForm: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //     },
// //     input: {
// //       padding: '10px 14px',
// //       background: currentTheme.inputBackground,
// //       border: `1px solid ${currentTheme.inputBorder}`,
// //       borderRadius: '6px',
// //       color: currentTheme.inputText,
// //       fontSize: '0.85rem',
// //       outline: 'none',
// //     },
// //     footer: {
// //       marginTop: '20px',
// //       fontSize: '0.7rem',
// //       color: currentTheme.footerText,
// //       lineHeight: '1.4',
// //     },
// //   };

// //   return (
// //     <aside style={styles.sidebar}>
// //       <div style={styles.sidebarInner}>
// //         <div style={styles.brandSection}>
// //           <h1 style={styles.brandName}>{sidebarData.brandName}</h1>
// //           {sidebarData.brandSubtitle && (
// //             <p style={styles.brandSubtitle}>{sidebarData.brandSubtitle}</p>
// //           )}
// //         </div>

// //         <nav style={styles.nav}>
// //           {sidebarData.menuItems.map((item, index) => (
// //             <a
// //               key={index}
// //               href={item.href}
// //               style={styles.menuItem}
// //               onMouseEnter={(e) => {
// //                 e.currentTarget.style.background = currentTheme.hoverBackground;
// //                 e.currentTarget.style.color = currentTheme.textColorHover;
// //               }}
// //               onMouseLeave={(e) => {
// //                 e.currentTarget.style.background = 'transparent';
// //                 e.currentTarget.style.color = currentTheme.textColor;
// //               }}
// //             >
// //               {item.icon && <span style={styles.icon}>{item.icon}</span>}
// //               <span>{item.name}</span>
// //             </a>
// //           ))}
// //         </nav>

// //         {sidebarData.showNewsletter && (
// //           <div style={styles.newsletterSection}>
// //             <div style={styles.newsletterTitle}>{sidebarData.newsletterTitle}</div>
// //             <form style={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
// //               <input
// //                 type="email"
// //                 placeholder="Enter Email Address"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 style={styles.input}
// //               />
// //             </form>
// //           </div>
// //         )}

// //         {sidebarData.showFooter && (
// //           <div style={styles.footer}>{sidebarData.footerText}</div>
// //         )}
// //       </div>
// //     </aside>
// //   );
// // }


// 'use client';

// import { useState } from 'react';
// import { sidebarThemes } from './sidebarThemes';
// import { sidebarMockData } from './sidebarMockData';

// export default function Sidebar({ data, theme = 'azure' }) {
//   const [email, setEmail] = useState('');
  
//   const sidebarData = data || sidebarMockData;
//   const currentTheme = sidebarThemes[theme] || sidebarThemes.flash;

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault();
//     console.log('Newsletter signup:', email);
//     setEmail('');
//   };

//   const styles = {
//     sidebar: {
//       width: '235px',
//       height: '100vh',
//       background: currentTheme.background,
//       display: 'flex',
//       flexDirection: 'column',
//       position: 'sticky',
//       top: 0,
//       overflow: 'hidden',
//     },
//     sidebarInner: {
//       display: 'flex',
//       flexDirection: 'column',
//       height: '100%',
//       padding: '30px 20px 20px 20px',
//     },
//     brandSection: {
//       marginBottom: '40px',
//     },
//     brandName: {
//       fontSize: currentTheme.brandSize || '1.8rem',
//       fontWeight: '700',
//       color: currentTheme.brandColor,
//       margin: 0,
//       letterSpacing: '-0.5px',
//     },
//     brandSubtitle: {
//       fontSize: '0.85rem',
//       color: currentTheme.brandSubColor,
//       margin: '4px 0 0 0',
//     },
//     menuToggle: {
//       width: '32px',
//       height: '32px',
//       background: 'rgba(255, 255, 255, 0.15)',
//       border: 'none',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       cursor: 'pointer',
//       position: 'absolute',
//       top: '30px',
//       right: '-16px',
//       color: currentTheme.textColor,
//       fontSize: '1.2rem',
//     },
//     nav: {
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '4px',
//     },
//     menuItem: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px',
//       padding: '12px 16px',
//       textDecoration: 'none',
//       color: currentTheme.textColor,
//       fontSize: currentTheme.menuSize || '0.95rem',
//       borderRadius: '8px',
//       transition: 'all 0.2s ease',
//       cursor: 'pointer',
//     },
//     menuItemHover: {
//       background: currentTheme.hoverBackground,
//       color: currentTheme.textColorHover,
//     },
//     icon: {
//       fontSize: '1.1rem',
//       color: currentTheme.iconColor,
//       width: '20px',
//       textAlign: 'center',
//     },
//     newsletterSection: {
//       marginTop: 'auto',
//       paddingTop: '20px',
//     },
//     newsletterTitle: {
//       fontSize: currentTheme.newsletterSize || '0.9rem',
//       fontWeight: '600',
//       color: currentTheme.textColor,
//       marginBottom: '12px',
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
//     },
//   };

//   return (
//     <aside style={styles.sidebar}>
//       <div style={styles.sidebarInner}>
//         <div style={styles.brandSection}>
//           <h1 style={styles.brandName}>{sidebarData.brandName}</h1>
//           {sidebarData.brandSubtitle && (
//             <p style={styles.brandSubtitle}>{sidebarData.brandSubtitle}</p>
//           )}
//         </div>

//         <nav style={styles.nav}>
//           {sidebarData.menuItems.map((item, index) => (
//             <a
//               key={index}
//               href={item.href}
//               style={styles.menuItem}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.background = currentTheme.hoverBackground;
//                 e.currentTarget.style.color = currentTheme.textColorHover;
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.background = 'transparent';
//                 e.currentTarget.style.color = currentTheme.textColor;
//               }}
//             >
//               {item.icon && <span style={styles.icon}>{item.icon}</span>}
//               <span>{item.name}</span>
//             </a>
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

export default function Sidebar({ data, theme = 'azure' }) {
  const [email, setEmail] = useState('');
  const [expandedItems, setExpandedItems] = useState({});
  
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
    const key = `${categoryIndex}-${itemIndex}`;
    setExpandedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const styles = {
    sidebar: {
      width: '235px',
      height: '100vh',
      background: currentTheme.background,
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      overflow: 'hidden',
    },
    sidebarInner: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '30px 20px 20px 20px',
    },
    brandSection: {
      marginBottom: '40px',
    },
    brandName: {
      fontSize: currentTheme.brandSize || '1.8rem',
      fontWeight: '700',
      color: currentTheme.brandColor,
      margin: 0,
      letterSpacing: '-0.5px',
    },
    brandSubtitle: {
      fontSize: '0.85rem',
      color: currentTheme.brandSubColor,
      margin: '4px 0 0 0',
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
    },
    categoryItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 16px',
      textDecoration: 'none',
      color: currentTheme.textColor,
      fontSize: currentTheme.menuSize || '0.95rem',
      borderRadius: '8px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      position: 'relative',
    },
    icon: {
      fontSize: '1.1rem',
      color: currentTheme.iconColor,
      width: '20px',
      textAlign: 'center',
      flexShrink: 0,
    },
    menuText: {
      flex: 1,
    },
    chevron: {
      fontSize: '0.7rem',
      color: currentTheme.iconColor,
      transition: 'transform 0.2s ease',
      marginLeft: 'auto',
    },
    chevronExpanded: {
      transform: 'rotate(90deg)',
    },
    nestedItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
      paddingLeft: '32px',
      marginTop: '2px',
      overflow: 'hidden',
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
    },
    newsletterSection: {
      marginTop: 'auto',
      paddingTop: '20px',
    },
    newsletterTitle: {
      fontSize: currentTheme.newsletterSize || '0.9rem',
      fontWeight: '600',
      color: currentTheme.textColor,
      marginBottom: '12px',
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
    },
  };

  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarInner}>
        <div style={styles.brandSection}>
          <h1 style={styles.brandName}>{sidebarData.brandName}</h1>
          {sidebarData.brandSubtitle && (
            <p style={styles.brandSubtitle}>{sidebarData.brandSubtitle}</p>
          )}
        </div>

        <nav style={styles.nav} className="sidebar-nav">
          {sidebarData.categories && sidebarData.categories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={styles.category}>
              {category.title && (
                <div style={styles.categoryTitle}>{category.title}</div>
              )}
              <div style={styles.categoryItems}>
                {category.items.map((item, itemIndex) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExpanded = expandedItems[`${categoryIndex}-${itemIndex}`];
                  
                  return (
                    <div key={itemIndex}>
                      {hasChildren ? (
                        <div
                          style={styles.menuItem}
                          onClick={() => toggleExpanded(categoryIndex, itemIndex)}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = currentTheme.hoverBackground;
                            e.currentTarget.style.color = currentTheme.textColorHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = currentTheme.textColor;
                          }}
                        >
                          {item.icon && <span style={styles.icon}>{item.icon}</span>}
                          <span style={styles.menuText}>{item.name}</span>
                          <span style={{
                            ...styles.chevron,
                            ...(isExpanded ? styles.chevronExpanded : {})
                          }}>▶</span>
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          style={styles.menuItem}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = currentTheme.hoverBackground;
                            e.currentTarget.style.color = currentTheme.textColorHover;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = currentTheme.textColor;
                          }}
                        >
                          {item.icon && <span style={styles.icon}>{item.icon}</span>}
                          <span style={styles.menuText}>{item.name}</span>
                        </a>
                      )}
                      
                      {hasChildren && isExpanded && (
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
                })}
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

        {sidebarData.showFooter && (
          <div style={styles.footer}>{sidebarData.footerText}</div>
        )}
      </div>
    </aside>
  );
}