
// // import React, { useMemo } from 'react';
// // import { processContent } from '@/app/utils/contentProcessor';

// // const ToolsPageHeader = ({ 
// //   items = [],
// //   intro = null,
// //   icon = '🔍',
// //   article = null,
// // }) => {
// //   const stats = useMemo(() => {
// //     const toolsCount = items.length;
// //     const categories = new Set(items.map(item => item.category).filter(Boolean));
// //     const categoriesCount = categories.size;
    
// //     return { toolsCount, categoriesCount };
// //   }, [items]);

// //   if (!items.length) return null;

// //   const introWrapperStyle = {
// //     ...styles.introWrapper,
// //     borderRadius: article ? '16px 16px 0 0' : '16px',
// //     borderBottom: article ? 'none' : '2px solid #cbd5e1',
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {/* Intro Section */}
// //       <div style={introWrapperStyle}>
// //         {intro && (
// //           <div style={styles.header}>
// //             <div style={styles.iconBox}>{icon}</div>
// //             <div style={styles.textContent}>
// //               {intro.title && <h2 style={styles.title}>{intro.title}</h2>}
// //               {intro.description && <p style={styles.description}>{intro.description}</p>}
// //             </div>
// //           </div>
// //         )}

// //         {intro?.tip && (
// //           <div style={styles.tipBox}>
// //             <span style={styles.tipIcon}>💡</span>
// //             <span style={styles.tipText}>
// //               <strong>Tip:</strong> {intro.tip}
// //             </span>
// //           </div>
// //         )}

// //         <div style={styles.bottom}>
// //           <div style={styles.stats}>
// //             <div style={styles.statItem}>
// //               <span style={styles.statValue}>{stats.toolsCount}</span>
// //               <span style={styles.statLabel}>Tools</span>
// //             </div>
// //             {stats.categoriesCount > 0 && (
// //               <div style={styles.statItem}>
// //                 <span style={styles.statValue}>{stats.categoriesCount}</span>
// //                 <span style={styles.statLabel}>Categories</span>
// //               </div>
// //             )}
// //             <div style={styles.statItem}>
// //               <span style={styles.statValue}>100%</span>
// //               <span style={styles.statLabel}>Free</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Article Section */}
// //       {article && (
// //         <div style={styles.articleWrapper}>
// //           <div style={styles.articleInner}>
// //             <div style={styles.articleContent}>
// //               {processContent(article)}
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //   },
// //   introWrapper: {
// //     background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
// //     border: '2px solid #cbd5e1',
// //     padding: '28px 32px',
// //   },
// //   header: {
// //     display: 'flex',
// //     alignItems: 'flex-start',
// //     gap: '20px',
// //     marginBottom: '20px',
// //   },
// //   iconBox: {
// //     width: '56px',
// //     height: '56px',
// //     background: 'linear-gradient(135deg, #4F46E5 0%, #6366f1 100%)',
// //     borderRadius: '12px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     fontSize: '1.5rem',
// //     flexShrink: 0,
// //   },
// //   textContent: {
// //     flex: 1,
// //   },
// //   title: {
// //     fontSize: '1.25rem',
// //     fontWeight: '600',
// //     color: '#1e293b',
// //     margin: '0 0 8px 0',
// //   },
// //   description: {
// //     fontSize: '0.95rem',
// //     color: '#64748b',
// //     lineHeight: '1.6',
// //     margin: 0,
// //   },
// //   tipBox: {
// //     background: 'white',
// //     border: '1px solid #e2e8f0',
// //     borderLeft: '4px solid #4F46E5',
// //     borderRadius: '8px',
// //     padding: '14px 18px',
// //     marginBottom: '20px',
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //     fontSize: '0.875rem',
// //     color: '#475569',
// //   },
// //   tipIcon: {
// //     fontSize: '1.25rem',
// //     flexShrink: 0,
// //   },
// //   tipText: {
// //     lineHeight: '1.5',
// //   },
// //   bottom: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     flexWrap: 'wrap',
// //     gap: '16px',
// //   },
// //   stats: {
// //     display: 'flex',
// //     gap: '24px',
// //   },
// //   statItem: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     fontSize: '0.85rem',
// //     color: '#64748b',
// //   },
// //   statValue: {
// //     fontWeight: '700',
// //     color: '#4F46E5',
// //     fontSize: '1.1rem',
// //   },
// //   statLabel: {
// //     color: '#64748b',
// //   },
// //   articleWrapper: {
// //     background: '#e2e8f0',
// //     borderLeft: '2px solid #cbd5e1',
// //     borderRight: '2px solid #cbd5e1',
// //     borderBottom: '2px solid #cbd5e1',
// //     borderRadius: '0 0 16px 16px',
// //     padding: '24px',
// //   },
// //   articleInner: {
// //     background: '#f8fafc',
// //     border: '2px solid #94a3b8',
// //     borderRadius: '12px',
// //     padding: '28px 32px',
// //   },
// //   articleContent: {
// //     fontSize: '1.08rem',
// //     fontFamily: 'Georgia, "Times New Roman", serif',
// //     fontWeight: '500',
// //     color: '#1e293b',
// //     lineHeight: '1.85',
// //     letterSpacing: '0.01em',
// //   },
// // };

// // export default ToolsPageHeader;



// import React, { useMemo } from 'react';
// import { processContent } from '@/app/utils/contentProcessor';

// const ToolsPageHeader = ({ 
//   items = [],
//   intro = null,
//   icon = '🔍',
//   article = null,
//   accentColor = '#4F46E5',
//   accentColorSecondary = '#6366f1',
// }) => {
//   const stats = useMemo(() => {
//     const toolsCount = items.length;
//     const categories = new Set(items.map(item => item.category).filter(Boolean));
//     const categoriesCount = categories.size;
    
//     return { toolsCount, categoriesCount };
//   }, [items]);

//   if (!items.length) return null;

//   const introWrapperStyle = {
//     ...styles.introWrapper,
//     borderRadius: article ? '16px 16px 0 0' : '16px',
//     borderBottom: article ? 'none' : '2px solid #cbd5e1',
//   };

//   const iconBoxStyle = {
//     ...styles.iconBox,
//     background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColorSecondary} 100%)`,
//   };

//   const tipBoxStyle = {
//     ...styles.tipBox,
//     borderLeft: `4px solid ${accentColor}`,
//   };

//   const statValueStyle = {
//     ...styles.statValue,
//     color: accentColor,
//   };

//   return (
//     <div style={styles.container}>
//       {/* Intro Section */}
//       <div style={introWrapperStyle}>
//         {intro && (
//           <div style={styles.header}>
//             <div style={iconBoxStyle}>{icon}</div>
//             <div style={styles.textContent}>
//               {intro.title && <h2 style={styles.title}>{intro.title}</h2>}
//               {intro.description && <p style={styles.description}>{intro.description}</p>}
//             </div>
//           </div>
//         )}

//         {intro?.tip && (
//           <div style={tipBoxStyle}>
//             <span style={styles.tipIcon}>💡</span>
//             <span style={styles.tipText}>
//               <strong>Tip:</strong> {intro.tip}
//             </span>
//           </div>
//         )}

//         <div style={styles.bottom}>
//           <div style={styles.stats}>
//             <div style={styles.statItem}>
//               <span style={statValueStyle}>{stats.toolsCount}</span>
//               <span style={styles.statLabel}>Tools</span>
//             </div>
//             {stats.categoriesCount > 0 && (
//               <div style={styles.statItem}>
//                 <span style={statValueStyle}>{stats.categoriesCount}</span>
//                 <span style={styles.statLabel}>Categories</span>
//               </div>
//             )}
//             <div style={styles.statItem}>
//               <span style={statValueStyle}>100%</span>
//               <span style={styles.statLabel}>Free</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Article Section */}
//       {article && (
//         <div style={styles.articleWrapper}>
//           <div style={styles.articleInner}>
//             <div style={styles.articleContent}>
//               {processContent(article)}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//   },
//   introWrapper: {
//     background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
//     border: '2px solid #cbd5e1',
//     padding: '28px 32px',
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     gap: '20px',
//     marginBottom: '20px',
//   },
//   iconBox: {
//     width: '56px',
//     height: '56px',
//     borderRadius: '12px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '1.5rem',
//     flexShrink: 0,
//   },
//   textContent: {
//     flex: 1,
//   },
//   title: {
//     fontSize: '1.25rem',
//     fontWeight: '600',
//     color: '#1e293b',
//     margin: '0 0 8px 0',
//   },
//   description: {
//     fontSize: '0.95rem',
//     color: '#64748b',
//     lineHeight: '1.6',
//     margin: 0,
//   },
//   tipBox: {
//     background: 'white',
//     border: '1px solid #e2e8f0',
//     borderRadius: '8px',
//     padding: '14px 18px',
//     marginBottom: '20px',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     fontSize: '0.875rem',
//     color: '#475569',
//   },
//   tipIcon: {
//     fontSize: '1.25rem',
//     flexShrink: 0,
//   },
//   tipText: {
//     lineHeight: '1.5',
//   },
//   bottom: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap',
//     gap: '16px',
//   },
//   stats: {
//     display: 'flex',
//     gap: '24px',
//   },
//   statItem: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     fontSize: '0.85rem',
//     color: '#64748b',
//   },
//   statValue: {
//     fontWeight: '700',
//     fontSize: '1.1rem',
//   },
//   statLabel: {
//     color: '#64748b',
//   },
//   articleWrapper: {
//     background: '#e2e8f0',
//     borderLeft: '2px solid #cbd5e1',
//     borderRight: '2px solid #cbd5e1',
//     borderBottom: '2px solid #cbd5e1',
//     borderRadius: '0 0 16px 16px',
//     padding: '24px',
//   },
//   articleInner: {
//     background: '#f8fafc',
//     border: '2px solid #94a3b8',
//     borderRadius: '12px',
//     padding: '28px 32px',
//   },
//   articleContent: {
//     fontSize: '1.08rem',
//     fontFamily: 'Georgia, "Times New Roman", serif',
//     fontWeight: '500',
//     color: '#1e293b',
//     lineHeight: '1.85',
//     letterSpacing: '0.01em',
//   },
// };

// export default ToolsPageHeader;


import React, { useMemo } from 'react';
import { processContent } from '@/app/utils/contentProcessor';

const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';

const ToolsPageHeader = ({ 
  items = [],
  intro = null,
  icon = '🔍',
  article = null,
  accentColor = '#4F46E5',
  accentColorSecondary = '#6366f1',
}) => {
  const stats = useMemo(() => {
    const toolsCount = items.length;
    const categories = new Set(items.map(item => item.category).filter(Boolean));
    const categoriesCount = categories.size;
    
    return { toolsCount, categoriesCount };
  }, [items]);

  if (!items.length) return null;

  const introWrapperStyle = {
    ...styles.introWrapper,
    borderRadius: article ? '16px 16px 0 0' : '16px',
    borderBottom: article ? 'none' : '2px solid #cbd5e1',
  };

  const iconBoxStyle = {
    ...styles.iconBox,
    background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColorSecondary} 100%)`,
  };

  const tipBoxStyle = {
    ...styles.tipBox,
    borderLeft: `4px solid ${accentColor}`,
  };

  const statValueStyle = {
    ...styles.statValue,
    color: accentColor,
  };

  return (
    <div style={styles.container}>
      {/* Intro Section */}
      <div style={introWrapperStyle}>
        {intro && (
          <div style={styles.header}>
            <div style={iconBoxStyle}>{icon}</div>
            <div style={styles.textContent}>
              {intro.title && <h2 style={styles.title}>{intro.title}</h2>}
              {intro.description && <p style={styles.description}>{intro.description}</p>}
            </div>
          </div>
        )}

        {intro?.tip && (
          <div style={tipBoxStyle}>
            <span style={styles.tipIcon}>💡</span>
            <span style={styles.tipText}>
              <strong>Tip:</strong> {intro.tip}
            </span>
          </div>
        )}

        <div style={styles.bottom}>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={statValueStyle}>{stats.toolsCount}</span>
              <span style={styles.statLabel}>Tools</span>
            </div>
            {stats.categoriesCount > 0 && (
              <div style={styles.statItem}>
                <span style={statValueStyle}>{stats.categoriesCount}</span>
                <span style={styles.statLabel}>Categories</span>
              </div>
            )}
            <div style={styles.statItem}>
              <span style={statValueStyle}>100%</span>
              <span style={styles.statLabel}>Free</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Section */}
      {article && (
        <div style={styles.articleWrapper}>
          <div style={styles.articleInner}>
            <div style={styles.articleContent}>
              {processContent(article)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: FONT_FAMILY,
  },
  introWrapper: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '2px solid #cbd5e1',
    padding: '34px 38px',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '24px',
    marginBottom: '24px',
  },
  iconBox: {
    width: '64px',
    height: '64px',
    borderRadius: '14px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.85rem',
    flexShrink: 0,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: '1.65rem',
    fontWeight: '600',
    color: '#1e293b',
    fontFamily: FONT_FAMILY,
    letterSpacing: '-0.015em',
    margin: '0 0 10px 0',
    lineHeight: '1.3',
  },
  description: {
    fontSize: '1.2rem',
    color: '#64748b',
    fontFamily: FONT_FAMILY,
    fontWeight: '400',
    letterSpacing: '0.005em',
    lineHeight: '1.55',
    margin: 0,
  },
  tipBox: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '17px 22px',
    marginBottom: '24px',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    fontSize: '1.15rem',
    fontFamily: FONT_FAMILY,
    fontWeight: '400',
    letterSpacing: '0.005em',
    color: '#475569',
  },
  tipIcon: {
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  tipText: {
    lineHeight: '1.5',
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '18px',
  },
  stats: {
    display: 'flex',
    gap: '28px',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '1.1rem',
    fontFamily: FONT_FAMILY,
    fontWeight: '400',
    letterSpacing: '0.005em',
    color: '#64748b',
  },
  statValue: {
    fontWeight: '700',
    fontSize: '1.45rem',
    fontFamily: FONT_FAMILY,
    letterSpacing: '-0.01em',
  },
  statLabel: {
    color: '#64748b',
  },
  articleWrapper: {
    background: '#e2e8f0',
    borderLeft: '2px solid #cbd5e1',
    borderRight: '2px solid #cbd5e1',
    borderBottom: '2px solid #cbd5e1',
    borderRadius: '0 0 16px 16px',
    padding: '24px',
  },
  articleInner: {
    background: '#f8fafc',
    border: '2px solid #94a3b8',
    borderRadius: '12px',
    padding: '28px 32px',
  },
  articleContent: {
    fontSize: '1.08rem',
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontWeight: '500',
    color: '#1e293b',
    lineHeight: '1.85',
    letterSpacing: '0.01em',
  },
};

export default ToolsPageHeader;