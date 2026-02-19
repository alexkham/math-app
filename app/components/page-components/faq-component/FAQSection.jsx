// // import React from 'react'

// // const themes = {
// //   blueGradient: {
// //     container: {
// //       maxWidth: '780px',
// //       margin: '40px auto',
// //       background: 'white',
// //       borderRadius: '16px',
// //       overflow: 'hidden',
// //       boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
// //     },
// //     header: {
// //       background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
// //       padding: '28px 32px',
// //     },
// //     title: {
// //       color: 'white',
// //       fontSize: '22px',
// //       fontWeight: '600',
// //       margin: 0,
// //     },
// //     subtitle: {
// //       color: 'rgba(255,255,255,0.8)',
// //       fontSize: '14px',
// //       marginTop: '4px',
// //     },
// //     content: {
// //       padding: '8px 0',
// //     },
// //     details: {
// //       borderBottom: '1px solid #f1f5f9',
// //     },
// //     detailsLast: {
// //       borderBottom: 'none',
// //     },
// //     summary: {
// //       padding: '18px 32px',
// //       fontSize: '15px',
// //       fontWeight: '500',
// //       color: '#1e293b',
// //       cursor: 'pointer',
// //       listStyle: 'none',
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //     },
// //     summaryIcon: '›',
// //     summaryIconStyle: {
// //       fontSize: '20px',
// //       color: '#3b82f6',
// //       transition: 'transform 0.2s',
// //     },
// //     answer: {
// //       padding: '0 32px 20px',
// //       color: '#64748b',
// //       fontSize: '14px',
// //       lineHeight: '1.7',
// //     },
// //     link: {
// //       color: '#3b82f6',
// //       textDecoration: 'none',
// //       fontWeight: '500',
// //       marginLeft: '8px',
// //     },
// //     hasHeader: true,
// //   },

// //   leftBorder: {
// //     container: {
// //       maxWidth: '780px',
// //       margin: '40px auto',
// //     },
// //     header: null,
// //     title: {
// //       fontSize: '20px',
// //       color: '#0f172a',
// //       marginBottom: '24px',
// //       fontWeight: '600',
// //     },
// //     content: {},
// //     details: {
// //       background: 'white',
// //       marginBottom: '12px',
// //       borderRadius: '8px',
// //       borderLeft: '4px solid #e2e8f0',
// //       transition: 'border-color 0.2s',
// //     },
// //     detailsOpen: {
// //       borderLeftColor: '#3b82f6',
// //     },
// //     summary: {
// //       padding: '16px 50px 16px 20px',
// //       fontSize: '15px',
// //       fontWeight: '500',
// //       color: '#334155',
// //       cursor: 'pointer',
// //       listStyle: 'none',
// //       position: 'relative',
// //     },
// //     summaryIcon: '+',
// //     summaryIconOpen: '−',
// //     summaryIconStyle: {
// //       position: 'absolute',
// //       right: '20px',
// //       top: '50%',
// //       transform: 'translateY(-50%)',
// //       width: '24px',
// //       height: '24px',
// //       background: '#f1f5f9',
// //       borderRadius: '50%',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       fontSize: '16px',
// //       color: '#64748b',
// //     },
// //     summaryIconStyleOpen: {
// //       background: '#dbeafe',
// //       color: '#3b82f6',
// //     },
// //     answer: {
// //       padding: '16px 20px',
// //       color: '#64748b',
// //       fontSize: '14px',
// //       lineHeight: '1.7',
// //       borderTop: '1px solid #f1f5f9',
// //     },
// //     link: {
// //       color: '#3b82f6',
// //       textDecoration: 'none',
// //       marginLeft: '8px',
// //     },
// //     hasHeader: false,
// //   },

// //   softCards: {
// //     container: {
// //       maxWidth: '780px',
// //       margin: '40px auto',
// //       background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
// //       borderRadius: '20px',
// //       padding: '32px',
// //     },
// //     header: null,
// //     title: {
// //       fontSize: '18px',
// //       color: '#475569',
// //       textTransform: 'uppercase',
// //       letterSpacing: '1px',
// //       marginBottom: '20px',
// //       fontWeight: '600',
// //     },
// //     content: {},
// //     details: {
// //       background: 'white',
// //       borderRadius: '12px',
// //       marginBottom: '10px',
// //       boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
// //       overflow: 'hidden',
// //     },
// //     summary: {
// //       padding: '18px 24px',
// //       fontSize: '15px',
// //       fontWeight: '500',
// //       color: '#1e293b',
// //       cursor: 'pointer',
// //       listStyle: 'none',
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       alignItems: 'center',
// //       gap: '16px',
// //     },
// //     summaryIcon: '▼',
// //     summaryIconStyle: {
// //       fontSize: '10px',
// //       color: '#94a3b8',
// //       transition: 'transform 0.2s',
// //     },
// //     summaryOpen: {
// //       background: '#fafbfc',
// //     },
// //     answer: {
// //       padding: '0 24px 20px',
// //       color: '#64748b',
// //       fontSize: '14px',
// //       lineHeight: '1.75',
// //       background: '#fafbfc',
// //     },
// //     link: {
// //       display: 'inline-block',
// //       marginTop: '10px',
// //       color: '#3b82f6',
// //       textDecoration: 'none',
// //       fontSize: '13px',
// //       fontWeight: '500',
// //     },
// //     hasHeader: false,
// //   },

// //   simpleAccordion: {
// //     container: {
// //       maxWidth: '800px',
// //       margin: '40px auto',
// //       background: 'white',
// //       borderRadius: '12px',
// //       padding: '32px',
// //       boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
// //     },
// //     header: null,
// //     title: {
// //       fontSize: '28px',
// //       color: '#1e293b',
// //       marginBottom: '24px',
// //       paddingBottom: '16px',
// //       borderBottom: '2px solid #e2e8f0',
// //     },
// //     content: {},
// //     details: {
// //       borderBottom: '1px solid #e2e8f0',
// //     },
// //     detailsLast: {
// //       borderBottom: 'none',
// //     },
// //     summary: {
// //       padding: '20px 40px 20px 0',
// //       fontSize: '17px',
// //       fontWeight: '600',
// //       color: '#334155',
// //       cursor: 'pointer',
// //       listStyle: 'none',
// //       position: 'relative',
// //     },
// //     summaryIcon: '+',
// //     summaryIconOpen: '−',
// //     summaryIconStyle: {
// //       position: 'absolute',
// //       right: '0',
// //       top: '50%',
// //       transform: 'translateY(-50%)',
// //       fontSize: '24px',
// //       fontWeight: '300',
// //       color: '#94a3b8',
// //     },
// //     answer: {
// //       padding: '0 0 20px 0',
// //       color: '#64748b',
// //       fontSize: '15px',
// //       lineHeight: '1.7',
// //     },
// //     link: {
// //       color: '#3b82f6',
// //       textDecoration: 'none',
// //       fontWeight: '500',
// //       marginLeft: '8px',
// //     },
// //     hasHeader: false,
// //   },

// //   cardBased: {
// //     container: {
// //       maxWidth: '800px',
// //       margin: '40px auto',
// //     },
// //     header: null,
// //     title: {
// //       textAlign: 'center',
// //       fontSize: '24px',
// //       color: '#1e293b',
// //       marginBottom: '24px',
// //       fontWeight: '600',
// //     },
// //     content: {},
// //     details: {
// //       background: 'white',
// //       border: '1px solid #e2e8f0',
// //       borderRadius: '8px',
// //       marginBottom: '12px',
// //       overflow: 'hidden',
// //     },
// //     summary: {
// //       padding: '18px 50px 18px 20px',
// //       fontSize: '15px',
// //       fontWeight: '500',
// //       color: '#334155',
// //       cursor: 'pointer',
// //       listStyle: 'none',
// //       background: '#f8fafc',
// //       position: 'relative',
// //     },
// //     summaryOpen: {
// //       background: '#eff6ff',
// //       color: '#2563eb',
// //       borderBottom: '1px solid #e2e8f0',
// //     },
// //     summaryIcon: '+',
// //     summaryIconOpen: '−',
// //     summaryIconStyle: {
// //       position: 'absolute',
// //       right: '20px',
// //       top: '50%',
// //       transform: 'translateY(-50%)',
// //       fontSize: '18px',
// //       color: '#64748b',
// //     },
// //     answer: {
// //       padding: '16px 20px',
// //       color: '#64748b',
// //       fontSize: '14px',
// //       lineHeight: '1.7',
// //       background: 'white',
// //     },
// //     link: {
// //       color: '#3b82f6',
// //       textDecoration: 'none',
// //       marginLeft: '8px',
// //     },
// //     hasHeader: false,
// //   },
// // }

// // function FAQItem({ question, answer, sectionId, theme, isLast }) {
// //   const [isOpen, setIsOpen] = React.useState(false)
// //   const t = themes[theme] || themes.blueGradient

// //   const detailsStyle = {
// //     ...t.details,
// //     ...(isLast && t.detailsLast ? t.detailsLast : {}),
// //     ...(isOpen && t.detailsOpen ? t.detailsOpen : {}),
// //   }

// //   const summaryStyle = {
// //     ...t.summary,
// //     ...(isOpen && t.summaryOpen ? t.summaryOpen : {}),
// //   }

// //   const iconStyle = {
// //     ...t.summaryIconStyle,
// //     ...(isOpen && t.summaryIconStyleOpen ? t.summaryIconStyleOpen : {}),
// //   }

// //   const icon = isOpen && t.summaryIconOpen ? t.summaryIconOpen : t.summaryIcon

// //   return (
// //     <details
// //       style={detailsStyle}
// //       onToggle={(e) => setIsOpen(e.target.open)}
// //     >
// //       <summary style={summaryStyle}>
// //         <span>{question}</span>
// //         <span style={iconStyle}>{icon}</span>
// //       </summary>
// //       <p style={t.answer}>
// //         {answer}
// //         {sectionId && (
// //           <a href={`#${sectionId}`} style={t.link}>
// //             Read more →
// //           </a>
// //         )}
// //       </p>
// //     </details>
// //   )
// // }

// // export default function FAQSection({ 
// //   faqQuestions, 
// //   theme = 'blueGradient',
// //   title = 'Frequently Asked Questions',
// //   subtitle = null 
// // }) {
// //   const t = themes[theme] || themes.blueGradient
// //   const keys = Object.keys(faqQuestions)

// //   return (
// //     <section style={t.container}>
// //       {t.hasHeader && t.header ? (
// //         <div style={t.header}>
// //           <h2 style={t.title}>{title}</h2>
// //           {subtitle && <p style={t.subtitle}>{subtitle}</p>}
// //         </div>
// //       ) : (
// //         <h2 style={t.title}>{title}</h2>
// //       )}

// //       <div style={t.content}>
// //         {keys.map((key, index) => (
// //           <FAQItem
// //             key={key}
// //             question={faqQuestions[key].question}
// //             answer={faqQuestions[key].answer}
// //             sectionId={faqQuestions[key].sectionId}
// //             theme={theme}
// //             isLast={index === keys.length - 1}
// //           />
// //         ))}
// //       </div>
// //     </section>
// //   )
// // }


// import React from 'react'

// const themes = {
//   blueGradient: {
//     container: {
//       margin: '40px auto',
//       background: 'white',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
//     },
//     header: {
//       background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
//       padding: '28px 32px',
//     },
//     title: {
//       color: 'white',
//       fontSize: '29px',
//       fontWeight: '600',
//       margin: 0,
//     },
//     subtitle: {
//       color: 'rgba(255,255,255,0.8)',
//       fontSize: '18px',
//       marginTop: '4px',
//     },
//     content: {
//       padding: '8px 0',
//     },
//     details: {
//       borderBottom: '1px solid #f1f5f9',
//     },
//     detailsLast: {
//       borderBottom: 'none',
//     },
//     summary: {
//       padding: '18px 32px',
//       fontSize: '20px',
//       fontWeight: '500',
//       color: '#1e293b',
//       cursor: 'pointer',
//       listStyle: 'none',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//     summaryIcon: '›',
//     summaryIconStyle: {
//       fontSize: '26px',
//       color: '#3b82f6',
//       transition: 'transform 0.2s',
//     },
//     answer: {
//       padding: '0 32px 20px',
//       color: '#64748b',
//       fontSize: '18px',
//       lineHeight: '1.7',
//     },
//     link: {
//       color: '#3b82f6',
//       textDecoration: 'none',
//       fontWeight: '500',
//       marginLeft: '8px',
//     },
//     hasHeader: true,
//   },

//   leftBorder: {
//     container: {
//       margin: '40px auto',
//     },
//     header: null,
//     title: {
//       fontSize: '26px',
//       color: '#0f172a',
//       marginBottom: '24px',
//       fontWeight: '600',
//     },
//     content: {},
//     details: {
//       background: 'white',
//       marginBottom: '12px',
//       borderRadius: '8px',
//       borderLeft: '4px solid #e2e8f0',
//       transition: 'border-color 0.2s',
//     },
//     detailsOpen: {
//       borderLeftColor: '#3b82f6',
//     },
//     summary: {
//       padding: '16px 50px 16px 20px',
//       fontSize: '20px',
//       fontWeight: '500',
//       color: '#334155',
//       cursor: 'pointer',
//       listStyle: 'none',
//       position: 'relative',
//     },
//     summaryIcon: '+',
//     summaryIconOpen: '−',
//     summaryIconStyle: {
//       position: 'absolute',
//       right: '20px',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       width: '24px',
//       height: '24px',
//       background: '#f1f5f9',
//       borderRadius: '50%',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '21px',
//       color: '#64748b',
//     },
//     summaryIconStyleOpen: {
//       background: '#dbeafe',
//       color: '#3b82f6',
//     },
//     answer: {
//       padding: '16px 20px',
//       color: '#64748b',
//       fontSize: '18px',
//       lineHeight: '1.7',
//       borderTop: '1px solid #f1f5f9',
//     },
//     link: {
//       color: '#3b82f6',
//       textDecoration: 'none',
//       marginLeft: '8px',
//     },
//     hasHeader: false,
//   },

//   softCards: {
//     container: {
//       margin: '40px auto',
//       background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
//       borderRadius: '20px',
//       padding: '32px',
//     },
//     header: null,
//     title: {
//       fontSize: '23px',
//       color: '#475569',
//       textTransform: 'uppercase',
//       letterSpacing: '1px',
//       marginBottom: '20px',
//       fontWeight: '600',
//     },
//     content: {},
//     details: {
//       background: 'white',
//       borderRadius: '12px',
//       marginBottom: '10px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
//       overflow: 'hidden',
//     },
//     summary: {
//       padding: '18px 24px',
//       fontSize: '20px',
//       fontWeight: '500',
//       color: '#1e293b',
//       cursor: 'pointer',
//       listStyle: 'none',
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       gap: '16px',
//     },
//     summaryIcon: '▼',
//     summaryIconStyle: {
//       fontSize: '13px',
//       color: '#94a3b8',
//       transition: 'transform 0.2s',
//     },
//     summaryOpen: {
//       background: '#fafbfc',
//     },
//     answer: {
//       padding: '0 24px 20px',
//       color: '#64748b',
//       fontSize: '18px',
//       lineHeight: '1.75',
//       background: '#fafbfc',
//     },
//     link: {
//       display: 'inline-block',
//       marginTop: '10px',
//       color: '#3b82f6',
//       textDecoration: 'none',
//       fontSize: '17px',
//       fontWeight: '500',
//     },
//     hasHeader: false,
//   },

//   simpleAccordion: {
//     container: {
//       margin: '40px auto',
//       background: 'white',
//       borderRadius: '12px',
//       padding: '32px',
//       boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
//     },
//     header: null,
//     title: {
//       fontSize: '36px',
//       color: '#1e293b',
//       marginBottom: '24px',
//       paddingBottom: '16px',
//       borderBottom: '2px solid #e2e8f0',
//     },
//     content: {},
//     details: {
//       borderBottom: '1px solid #e2e8f0',
//     },
//     detailsLast: {
//       borderBottom: 'none',
//     },
//     summary: {
//       padding: '20px 40px 20px 0',
//       fontSize: '22px',
//       fontWeight: '600',
//       color: '#334155',
//       cursor: 'pointer',
//       listStyle: 'none',
//       position: 'relative',
//     },
//     summaryIcon: '+',
//     summaryIconOpen: '−',
//     summaryIconStyle: {
//       position: 'absolute',
//       right: '0',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       fontSize: '31px',
//       fontWeight: '300',
//       color: '#94a3b8',
//     },
//     answer: {
//       padding: '0 0 20px 0',
//       color: '#64748b',
//       fontSize: '20px',
//       lineHeight: '1.7',
//     },
//     link: {
//       color: '#3b82f6',
//       textDecoration: 'none',
//       fontWeight: '500',
//       marginLeft: '8px',
//     },
//     hasHeader: false,
//   },

//   cardBased: {
//     container: {
//       margin: '40px auto',
//     },
//     header: null,
//     title: {
//       textAlign: 'center',
//       fontSize: '31px',
//       color: '#1e293b',
//       marginBottom: '24px',
//       fontWeight: '600',
//     },
//     content: {},
//     details: {
//       background: 'white',
//       border: '1px solid #e2e8f0',
//       borderRadius: '8px',
//       marginBottom: '12px',
//       overflow: 'hidden',
//     },
//     summary: {
//       padding: '18px 50px 18px 20px',
//       fontSize: '20px',
//       fontWeight: '500',
//       color: '#334155',
//       cursor: 'pointer',
//       listStyle: 'none',
//       background: '#f8fafc',
//       position: 'relative',
//     },
//     summaryOpen: {
//       background: '#eff6ff',
//       color: '#2563eb',
//       borderBottom: '1px solid #e2e8f0',
//     },
//     summaryIcon: '+',
//     summaryIconOpen: '−',
//     summaryIconStyle: {
//       position: 'absolute',
//       right: '20px',
//       top: '50%',
//       transform: 'translateY(-50%)',
//       fontSize: '23px',
//       color: '#64748b',
//     },
//     answer: {
//       padding: '16px 20px',
//       color: '#64748b',
//       fontSize: '18px',
//       lineHeight: '1.7',
//       background: 'white',
//     },
//     link: {
//       color: '#3b82f6',
//       textDecoration: 'none',
//       marginLeft: '8px',
//     },
//     hasHeader: false,
//   },
// }

// function FAQItem({ question, answer, sectionId, theme, isLast }) {
//   const [isOpen, setIsOpen] = React.useState(false)
//   const t = themes[theme] || themes.blueGradient

//   const detailsStyle = {
//     ...t.details,
//     ...(isLast && t.detailsLast ? t.detailsLast : {}),
//     ...(isOpen && t.detailsOpen ? t.detailsOpen : {}),
//   }

//   const summaryStyle = {
//     ...t.summary,
//     ...(isOpen && t.summaryOpen ? t.summaryOpen : {}),
//   }

//   const iconStyle = {
//     ...t.summaryIconStyle,
//     ...(isOpen && t.summaryIconStyleOpen ? t.summaryIconStyleOpen : {}),
//   }

//   const icon = isOpen && t.summaryIconOpen ? t.summaryIconOpen : t.summaryIcon

//   return (
//     <details
//       style={detailsStyle}
//       onToggle={(e) => setIsOpen(e.target.open)}
//     >
//       <summary style={summaryStyle}>
//         <span>{question}</span>
//         <span style={iconStyle}>{icon}</span>
//       </summary>
//       <p style={t.answer}>
//         {answer}
//         {sectionId && (
//           <a href={`#${sectionId}`} style={t.link}>
//             Read more →
//           </a>
//         )}
//       </p>
//     </details>
//   )
// }

// export default function FAQSection({ 
//   faqQuestions, 
//   theme = 'blueGradient',
//   title = 'Frequently Asked Questions',
//   subtitle = null,
//   width = '780px'
// }) {
//   const t = themes[theme] || themes.blueGradient
//   const keys = Object.keys(faqQuestions)

//   const containerStyle = {
//     ...t.container,
//     maxWidth: width,
//   }

//   return (
//     <section style={containerStyle}>
//       {t.hasHeader && t.header ? (
//         <div style={t.header}>
//           <h2 style={t.title}>{title}</h2>
//           {subtitle && <p style={t.subtitle}>{subtitle}</p>}
//         </div>
//       ) : (
//         <h2 style={t.title}>{title}</h2>
//       )}

//       <div style={t.content}>
//         {keys.map((key, index) => (
//           <FAQItem
//             key={key}
//             question={faqQuestions[key].question}
//             answer={faqQuestions[key].answer}
//             sectionId={faqQuestions[key].sectionId}
//             theme={theme}
//             isLast={index === keys.length - 1}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }


import React from 'react'
import { processContent } from '@/app/utils/contentProcessor'

const themes = {
  blueGradient: {
    container: {
      margin: '40px auto',
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    },
    header: {
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
      padding: '28px 32px',
    },
    title: {
      color: 'white',
      fontSize: '29px',
      fontWeight: '600',
      margin: 0,
    },
    subtitle: {
      color: 'rgba(255,255,255,0.8)',
      fontSize: '18px',
      marginTop: '4px',
    },
    content: {
      padding: '8px 0',
    },
    details: {
      borderBottom: '1px solid #f1f5f9',
    },
    detailsLast: {
      borderBottom: 'none',
    },
    summary: {
      padding: '18px 32px',
      fontSize: '20px',
      fontWeight: '500',
      color: '#1e293b',
      cursor: 'pointer',
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    summaryIcon: '›',
    summaryIconStyle: {
      fontSize: '26px',
      color: '#3b82f6',
      transition: 'transform 0.2s',
    },
    answer: {
      padding: '0 32px 20px',
      color: '#64748b',
      fontSize: '18px',
      lineHeight: '1.7',
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontWeight: '500',
      marginLeft: '8px',
    },
    hasHeader: true,
  },

  leftBorder: {
    container: {
      margin: '40px auto',
    },
    header: null,
    title: {
      fontSize: '26px',
      color: '#0f172a',
      marginBottom: '24px',
      fontWeight: '600',
    },
    content: {},
    details: {
      background: 'white',
      marginBottom: '12px',
      borderRadius: '8px',
      borderLeft: '4px solid #e2e8f0',
      transition: 'border-color 0.2s',
    },
    detailsOpen: {
      borderLeftColor: '#3b82f6',
    },
    summary: {
      padding: '16px 50px 16px 20px',
      fontSize: '20px',
      fontWeight: '500',
      color: '#334155',
      cursor: 'pointer',
      listStyle: 'none',
      position: 'relative',
    },
    summaryIcon: '+',
    summaryIconOpen: '−',
    summaryIconStyle: {
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '24px',
      height: '24px',
      background: '#f1f5f9',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '21px',
      color: '#64748b',
    },
    summaryIconStyleOpen: {
      background: '#dbeafe',
      color: '#3b82f6',
    },
    answer: {
      padding: '16px 20px',
      color: '#64748b',
      fontSize: '18px',
      lineHeight: '1.7',
      borderTop: '1px solid #f1f5f9',
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
      marginLeft: '8px',
    },
    hasHeader: false,
  },

  softCards: {
    container: {
      margin: '40px auto',
      background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)',
      borderRadius: '20px',
      padding: '32px',
    },
    header: null,
    title: {
      fontSize: '23px',
      color: '#475569',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginBottom: '20px',
      fontWeight: '600',
    },
    content: {},
    details: {
      background: 'white',
      borderRadius: '12px',
      marginBottom: '10px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      overflow: 'hidden',
    },
    summary: {
      padding: '18px 24px',
      fontSize: '20px',
      fontWeight: '500',
      color: '#1e293b',
      cursor: 'pointer',
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '16px',
    },
    summaryIcon: '▼',
    summaryIconStyle: {
      fontSize: '13px',
      color: '#94a3b8',
      transition: 'transform 0.2s',
    },
    summaryOpen: {
      background: '#fafbfc',
    },
    answer: {
      padding: '0 24px 20px',
      color: '#64748b',
      fontSize: '18px',
      lineHeight: '1.75',
      background: '#fafbfc',
    },
    link: {
      display: 'inline-block',
      marginTop: '10px',
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '17px',
      fontWeight: '500',
    },
    hasHeader: false,
  },

  simpleAccordion: {
    container: {
      margin: '40px auto',
      background: 'white',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
    },
    header: null,
    title: {
      fontSize: '36px',
      color: '#1e293b',
      marginBottom: '24px',
      paddingBottom: '16px',
      borderBottom: '2px solid #e2e8f0',
    },
    content: {},
    details: {
      borderBottom: '1px solid #e2e8f0',
    },
    detailsLast: {
      borderBottom: 'none',
    },
    summary: {
      padding: '20px 40px 20px 0',
      fontSize: '22px',
      fontWeight: '600',
      color: '#334155',
      cursor: 'pointer',
      listStyle: 'none',
      position: 'relative',
    },
    summaryIcon: '+',
    summaryIconOpen: '−',
    summaryIconStyle: {
      position: 'absolute',
      right: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '31px',
      fontWeight: '300',
      color: '#94a3b8',
    },
    answer: {
      padding: '0 0 20px 0',
      color: '#64748b',
      fontSize: '20px',
      lineHeight: '1.7',
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
      fontWeight: '500',
      marginLeft: '8px',
    },
    hasHeader: false,
  },

  cardBased: {
    container: {
      margin: '40px auto',
    },
    header: null,
    title: {
      textAlign: 'center',
      fontSize: '31px',
      color: '#1e293b',
      marginBottom: '24px',
      fontWeight: '600',
    },
    content: {},
    details: {
      background: 'white',
      border: '1px solid #e2e8f0',
      borderRadius: '8px',
      marginBottom: '12px',
      overflow: 'hidden',
    },
    summary: {
      padding: '18px 50px 18px 20px',
      fontSize: '20px',
      fontWeight: '500',
      color: '#334155',
      cursor: 'pointer',
      listStyle: 'none',
      background: '#f8fafc',
      position: 'relative',
    },
    summaryOpen: {
      background: '#eff6ff',
      color: '#2563eb',
      borderBottom: '1px solid #e2e8f0',
    },
    summaryIcon: '+',
    summaryIconOpen: '−',
    summaryIconStyle: {
      position: 'absolute',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '23px',
      color: '#64748b',
    },
    answer: {
      padding: '16px 20px',
      color: '#64748b',
      fontSize: '18px',
      lineHeight: '1.7',
      background: 'white',
    },
    link: {
      color: '#3b82f6',
      textDecoration: 'none',
      marginLeft: '8px',
    },
    hasHeader: false,
  },
}

function FAQItem({ question, answer, sectionId, theme, isLast }) {
  const [isOpen, setIsOpen] = React.useState(false)
  const t = themes[theme] || themes.blueGradient

  const detailsStyle = {
    ...t.details,
    ...(isLast && t.detailsLast ? t.detailsLast : {}),
    ...(isOpen && t.detailsOpen ? t.detailsOpen : {}),
  }

  const summaryStyle = {
    ...t.summary,
    ...(isOpen && t.summaryOpen ? t.summaryOpen : {}),
  }

  const iconStyle = {
    ...t.summaryIconStyle,
    ...(isOpen && t.summaryIconStyleOpen ? t.summaryIconStyleOpen : {}),
  }

  const icon = isOpen && t.summaryIconOpen ? t.summaryIconOpen : t.summaryIcon

  return (
    <details
      style={detailsStyle}
      onToggle={(e) => setIsOpen(e.target.open)}
    >
      <summary style={summaryStyle}>
        <span>{processContent(question)}</span>
        <span style={iconStyle}>{icon}</span>
      </summary>
      <p style={t.answer}>
        {processContent(answer)}
        {sectionId && (
          <a href={`#${sectionId}`} style={t.link}>
            Read more →
          </a>
        )}
      </p>
    </details>
  )
}

export default function FAQSection({ 
  faqQuestions, 
  theme = 'blueGradient',
  title = null,
  subtitle = null,
  width = '780px'
}) {
  const t = themes[theme] || themes.blueGradient
  const keys = Object.keys(faqQuestions)

  const containerStyle = {
    ...t.container,
    maxWidth: width,
  }

  return (
    <section style={containerStyle}>
      {title && t.hasHeader && t.header ? (
        <div style={t.header}>
          <h2 style={t.title}>{title}</h2>
          {subtitle && <p style={t.subtitle}>{subtitle}</p>}
        </div>
      ) : title ? (
        <h2 style={t.title}>{title}</h2>
      ) : null}

      <div style={t.content}>
        {keys.map((key, index) => (
          <FAQItem
            key={key}
            question={faqQuestions[key].question}
            answer={faqQuestions[key].answer}
            sectionId={faqQuestions[key].sectionId}
            theme={theme}
            isLast={index === keys.length - 1}
          />
        ))}
      </div>
    </section>
  )
}