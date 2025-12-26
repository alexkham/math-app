// // export const cardThemes = {
// //   gradient: {
// //     container: {
// //       width: '100%',
// //       maxWidth: '1200px',
// //       margin: '0 auto',
// //       padding: '40px 20px'
// //     },
// //     grid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(2, 1fr)',
// //       gap: '28px'
// //     },
// //     card: {
// //       background: '#ffffff',
// //       border: '2px solid #e2e8f0',
// //       borderRadius: '16px',
// //       overflow: 'hidden',
// //       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       position: 'relative'
// //     },
// //     cardHover: {
// //       borderColor: '#93c5fd',
// //       boxShadow: '0 12px 32px rgba(59, 130, 246, 0.15)',
// //       transform: 'translateY(-6px)'
// //     },
// //     topAccent: {
// //       content: '""',
// //       position: 'absolute',
// //       top: 0,
// //       left: 0,
// //       right: 0,
// //       height: '4px',
// //       background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
// //       transform: 'scaleX(0)',
// //       transformOrigin: 'left',
// //       transition: 'transform 0.3s ease'
// //     },
// //     topAccentHover: {
// //       transform: 'scaleX(1)'
// //     },
// //     header: {
// //       padding: '32px',
// //       background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
// //     },
// //     iconWrapper: {
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       width: '72px',
// //       height: '72px',
// //       background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
// //       borderRadius: '16px',
// //       marginBottom: '20px',
// //       border: '2px solid #93c5fd',
// //       boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
// //     },
// //     icon: {
// //       fontSize: '40px',
// //       lineHeight: 1
// //     },
// //     title: {
// //       margin: '0 0 12px 0',
// //       fontSize: '1.5rem',
// //       fontWeight: 700,
// //       color: '#0f172a',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       letterSpacing: '-0.02em'
// //     },
// //     summary: {
// //       margin: 0,
// //       fontSize: '1rem',
// //       color: '#64748b',
// //       lineHeight: 1.6,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
// //     },
// //     body: {
// //       padding: '32px',
// //       flex: 1,
// //       display: 'flex',
// //       flexDirection: 'column'
// //     },
// //     content: {
// //       fontSize: '1rem',
// //       lineHeight: 1.75,
// //       color: '#475569',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       flex: 1,
// //       marginBottom: '24px'
// //     },
// //     link: {
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '10px',
// //       padding: '14px 28px',
// //       background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //       color: '#ffffff',
// //       textDecoration: 'none',
// //       borderRadius: '10px',
// //       fontSize: '0.95rem',
// //       fontWeight: 600,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       transition: 'all 0.3s ease',
// //       alignSelf: 'flex-start',
// //       boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
// //     },
// //     linkHover: {
// //       transform: 'translateY(-2px)',
// //       boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)'
// //     },
// //     linkArrow: {
// //       fontSize: '16px',
// //       transition: 'transform 0.3s ease'
// //     }
// //   },

// //   minimal: {
// //     container: {
// //       width: '100%',
// //       maxWidth: '1200px',
// //       margin: '0 auto',
// //       padding: '40px 20px'
// //     },
// //     grid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(2, 1fr)',
// //       gap: '24px'
// //     },
// //     card: {
// //       background: '#ffffff',
// //       border: '1px solid #e2e8f0',
// //       borderRadius: '12px',
// //       overflow: 'hidden',
// //       transition: 'all 0.3s ease',
// //       display: 'flex',
// //       flexDirection: 'column'
// //     },
// //     cardHover: {
// //       borderColor: '#3b82f6',
// //       boxShadow: '0 8px 24px rgba(59, 130, 246, 0.12)'
// //     },
// //     header: {
// //       padding: '28px 28px 20px 28px',
// //       borderBottom: '1px solid #f1f5f9'
// //     },
// //     headerTop: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '16px',
// //       marginBottom: '16px'
// //     },
// //     icon: {
// //       fontSize: '32px',
// //       lineHeight: 1,
// //       width: '48px',
// //       height: '48px',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       background: '#eff6ff',
// //       borderRadius: '10px'
// //     },
// //     title: {
// //       margin: 0,
// //       fontSize: '1.4rem',
// //       fontWeight: 600,
// //       color: '#0f172a',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       flex: 1
// //     },
// //     summary: {
// //       margin: 0,
// //       fontSize: '0.95rem',
// //       color: '#64748b',
// //       lineHeight: 1.6,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
// //     },
// //     body: {
// //       padding: '28px',
// //       flex: 1,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '20px'
// //     },
// //     content: {
// //       fontSize: '0.95rem',
// //       lineHeight: 1.7,
// //       color: '#475569',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       flex: 1
// //     },
// //     link: {
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '8px',
// //       padding: '12px 24px',
// //       background: '#3b82f6',
// //       color: '#ffffff',
// //       textDecoration: 'none',
// //       borderRadius: '8px',
// //       fontSize: '0.9rem',
// //       fontWeight: 500,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       transition: 'all 0.2s ease',
// //       alignSelf: 'flex-start'
// //     },
// //     linkHover: {
// //       background: '#2563eb'
// //     },
// //     linkArrow: {
// //       fontSize: '14px'
// //     }
// //   },

// //   bold: {
// //     container: {
// //       width: '100%',
// //       maxWidth: '1200px',
// //       margin: '0 auto',
// //       padding: '40px 20px'
// //     },
// //     grid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(2, 1fr)',
// //       gap: '26px'
// //     },
// //     card: {
// //       background: '#ffffff',
// //       border: '3px solid #cbd5e1',
// //       borderRadius: '14px',
// //       overflow: 'hidden',
// //       transition: 'all 0.3s ease',
// //       display: 'flex',
// //       flexDirection: 'column'
// //     },
// //     cardHover: {
// //       borderColor: '#3b82f6',
// //       boxShadow: '0 10px 30px rgba(59, 130, 246, 0.25)',
// //       transform: 'translateY(-4px)'
// //     },
// //     header: {
// //       padding: '30px',
// //       background: '#f8fafc',
// //       position: 'relative'
// //     },
// //     headerAccent: {
// //       content: '""',
// //       position: 'absolute',
// //       bottom: 0,
// //       left: '30px',
// //       right: '30px',
// //       height: '3px',
// //       background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
// //     },
// //     iconTitle: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       gap: '18px',
// //       marginBottom: '14px'
// //     },
// //     icon: {
// //       fontSize: '42px',
// //       lineHeight: 1,
// //       width: '64px',
// //       height: '64px',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
// //       borderRadius: '12px',
// //       border: '3px solid #93c5fd'
// //     },
// //     title: {
// //       margin: 0,
// //       fontSize: '1.45rem',
// //       fontWeight: 700,
// //       color: '#0f172a',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       flex: 1
// //     },
// //     summary: {
// //       margin: 0,
// //       fontSize: '1rem',
// //       color: '#64748b',
// //       lineHeight: 1.6,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       fontWeight: 500
// //     },
// //     body: {
// //       padding: '30px',
// //       flex: 1,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '22px'
// //     },
// //     content: {
// //       fontSize: '0.98rem',
// //       lineHeight: 1.75,
// //       color: '#475569',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       flex: 1
// //     },
// //     link: {
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '10px',
// //       padding: '14px 30px',
// //       background: '#3b82f6',
// //       color: '#ffffff',
// //       textDecoration: 'none',
// //       borderRadius: '10px',
// //       fontSize: '0.95rem',
// //       fontWeight: 600,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       transition: 'all 0.25s ease',
// //       alignSelf: 'flex-start',
// //       border: '3px solid #3b82f6'
// //     },
// //     linkHover: {
// //       background: '#2563eb',
// //       borderColor: '#2563eb',
// //       transform: 'scale(1.05)'
// //     },
// //     linkArrow: {
// //       fontSize: '16px',
// //       fontWeight: 700
// //     }
// //   },

// //   elegant: {
// //     container: {
// //       width: '100%',
// //       maxWidth: '1200px',
// //       margin: '0 auto',
// //       padding: '40px 20px'
// //     },
// //     grid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(2, 1fr)',
// //       gap: '24px'
// //     },
// //     card: {
// //       background: '#ffffff',
// //       borderRadius: '16px',
// //       overflow: 'hidden',
// //       transition: 'all 0.3s ease',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)'
// //     },
// //     cardHover: {
// //       boxShadow: '0 10px 30px rgba(59, 130, 246, 0.18)',
// //       transform: 'translateY(-5px)'
// //     },
// //     accent: {
// //       height: '5px',
// //       background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
// //     },
// //     header: {
// //       padding: '32px 32px 24px 32px'
// //     },
// //     icon: {
// //       fontSize: '52px',
// //       lineHeight: 1,
// //       marginBottom: '20px',
// //       display: 'block'
// //     },
// //     title: {
// //       margin: '0 0 12px 0',
// //       fontSize: '1.5rem',
// //       fontWeight: 600,
// //       color: '#0f172a',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       letterSpacing: '-0.01em'
// //     },
// //     summary: {
// //       margin: 0,
// //       fontSize: '1rem',
// //       color: '#64748b',
// //       lineHeight: 1.6,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
// //     },
// //     divider: {
// //       height: '1px',
// //       background: 'linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)',
// //       margin: '0 32px'
// //     },
// //     body: {
// //       padding: '24px 32px 32px 32px',
// //       flex: 1,
// //       display: 'flex',
// //       flexDirection: 'column',
// //       gap: '24px'
// //     },
// //     content: {
// //       fontSize: '0.95rem',
// //       lineHeight: 1.75,
// //       color: '#475569',
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       flex: 1
// //     },
// //     link: {
// //       display: 'inline-flex',
// //       alignItems: 'center',
// //       gap: '8px',
// //       padding: 0,
// //       background: 'transparent',
// //       color: '#3b82f6',
// //       textDecoration: 'none',
// //       fontSize: '0.95rem',
// //       fontWeight: 600,
// //       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
// //       transition: 'all 0.2s ease',
// //       alignSelf: 'flex-start'
// //     },
// //     linkHover: {
// //       color: '#2563eb',
// //       gap: '12px'
// //     },
// //     linkArrow: {
// //       fontSize: '16px',
// //       transition: 'transform 0.2s ease'
// //     }
// //   }
// // };



// export const cardThemes = {
//   gradient: {
//     container: {
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '40px 20px'
//     },
//     gridLayout: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '28px'
//     },
//     listLayout: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '24px'
//     },
//     card: {
//       background: '#ffffff',
//       border: '2px solid #e2e8f0',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//       display: 'flex',
//       flexDirection: 'column',
//       position: 'relative'
//     },
//     cardHover: {
//       borderColor: '#93c5fd',
//       boxShadow: '0 12px 32px rgba(59, 130, 246, 0.15)',
//       transform: 'translateY(-6px)'
//     },
//     topAccent: {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       height: '4px',
//       background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
//       transform: 'scaleX(0)',
//       transformOrigin: 'left',
//       transition: 'transform 0.3s ease'
//     },
//     topAccentHover: {
//       transform: 'scaleX(1)'
//     },
//     header: {
//       padding: '32px',
//       background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
//     },
//     iconWrapper: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       width: '72px',
//       height: '72px',
//       background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
//       borderRadius: '16px',
//       marginBottom: '20px',
//       border: '2px solid #93c5fd',
//       boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
//     },
//     icon: {
//       fontSize: '40px',
//       lineHeight: 1
//     },
//     title: {
//       margin: '0 0 12px 0',
//       fontSize: '1.5rem',
//       fontWeight: 700,
//       color: '#0f172a',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       letterSpacing: '-0.02em'
//     },
//     summary: {
//       margin: 0,
//       fontSize: '1rem',
//       color: '#64748b',
//       lineHeight: 1.6,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
//     },
//     body: {
//       padding: '32px',
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column'
//     },
//     content: {
//       fontSize: '1rem',
//       lineHeight: 1.75,
//       color: '#475569',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       flex: 1,
//       marginBottom: '24px'
//     },
//     link: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '10px',
//       padding: '14px 28px',
//       background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//       color: '#ffffff',
//       textDecoration: 'none',
//       borderRadius: '10px',
//       fontSize: '0.95rem',
//       fontWeight: 600,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       transition: 'all 0.3s ease',
//       alignSelf: 'flex-start',
//       boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
//     },
//     linkHover: {
//       transform: 'translateY(-2px)',
//       boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)'
//     },
//     linkArrow: {
//       fontSize: '16px',
//       transition: 'transform 0.3s ease'
//     }
//   },

//   minimal: {
//     container: {
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '40px 20px'
//     },
//     gridLayout: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '24px'
//     },
//     listLayout: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '20px'
//     },
//     card: {
//       background: '#ffffff',
//       border: '1px solid #e2e8f0',
//       borderRadius: '12px',
//       overflow: 'hidden',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       flexDirection: 'column'
//     },
//     cardHover: {
//       borderColor: '#3b82f6',
//       boxShadow: '0 8px 24px rgba(59, 130, 246, 0.12)'
//     },
//     header: {
//       padding: '28px 28px 20px 28px',
//       borderBottom: '1px solid #f1f5f9'
//     },
//     headerTop: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '16px',
//       marginBottom: '16px'
//     },
//     icon: {
//       fontSize: '32px',
//       lineHeight: 1,
//       width: '48px',
//       height: '48px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: '#eff6ff',
//       borderRadius: '10px'
//     },
//     title: {
//       margin: 0,
//       fontSize: '1.4rem',
//       fontWeight: 600,
//       color: '#0f172a',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       flex: 1
//     },
//     summary: {
//       margin: 0,
//       fontSize: '0.95rem',
//       color: '#64748b',
//       lineHeight: 1.6,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
//     },
//     body: {
//       padding: '28px',
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '20px'
//     },
//     content: {
//       fontSize: '0.95rem',
//       lineHeight: 1.7,
//       color: '#475569',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       flex: 1
//     },
//     link: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '8px',
//       padding: '12px 24px',
//       background: '#3b82f6',
//       color: '#ffffff',
//       textDecoration: 'none',
//       borderRadius: '8px',
//       fontSize: '0.9rem',
//       fontWeight: 500,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       transition: 'all 0.2s ease',
//       alignSelf: 'flex-start'
//     },
//     linkHover: {
//       background: '#2563eb'
//     },
//     linkArrow: {
//       fontSize: '14px'
//     }
//   },

//   bold: {
//     container: {
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '40px 20px'
//     },
//     gridLayout: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '26px'
//     },
//     listLayout: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '22px'
//     },
//     card: {
//       background: '#ffffff',
//       border: '3px solid #cbd5e1',
//       borderRadius: '14px',
//       overflow: 'hidden',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       flexDirection: 'column'
//     },
//     cardHover: {
//       borderColor: '#3b82f6',
//       boxShadow: '0 10px 30px rgba(59, 130, 246, 0.25)',
//       transform: 'translateY(-4px)'
//     },
//     header: {
//       padding: '30px',
//       background: '#f8fafc',
//       position: 'relative'
//     },
//     headerAccent: {
//       content: '""',
//       position: 'absolute',
//       bottom: 0,
//       left: '30px',
//       right: '30px',
//       height: '3px',
//       background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
//     },
//     iconTitle: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '18px',
//       marginBottom: '14px'
//     },
//     icon: {
//       fontSize: '42px',
//       lineHeight: 1,
//       width: '64px',
//       height: '64px',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
//       borderRadius: '12px',
//       border: '3px solid #93c5fd'
//     },
//     title: {
//       margin: 0,
//       fontSize: '1.45rem',
//       fontWeight: 700,
//       color: '#0f172a',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       flex: 1
//     },
//     summary: {
//       margin: 0,
//       fontSize: '1rem',
//       color: '#64748b',
//       lineHeight: 1.6,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       fontWeight: 500
//     },
//     body: {
//       padding: '30px',
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '22px'
//     },
//     content: {
//       fontSize: '0.98rem',
//       lineHeight: 1.75,
//       color: '#475569',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       flex: 1
//     },
//     link: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '10px',
//       padding: '14px 30px',
//       background: '#3b82f6',
//       color: '#ffffff',
//       textDecoration: 'none',
//       borderRadius: '10px',
//       fontSize: '0.95rem',
//       fontWeight: 600,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       transition: 'all 0.25s ease',
//       alignSelf: 'flex-start',
//       border: '3px solid #3b82f6'
//     },
//     linkHover: {
//       background: '#2563eb',
//       borderColor: '#2563eb',
//       transform: 'scale(1.05)'
//     },
//     linkArrow: {
//       fontSize: '16px',
//       fontWeight: 700
//     }
//   },

//   elegant: {
//     container: {
//       width: '100%',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '40px 20px'
//     },
//     gridLayout: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '24px'
//     },
//     listLayout: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '20px'
//     },
//     card: {
//       background: '#ffffff',
//       borderRadius: '16px',
//       overflow: 'hidden',
//       transition: 'all 0.3s ease',
//       display: 'flex',
//       flexDirection: 'column',
//       boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)'
//     },
//     cardHover: {
//       boxShadow: '0 10px 30px rgba(59, 130, 246, 0.18)',
//       transform: 'translateY(-5px)'
//     },
//     accent: {
//       height: '5px',
//       background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
//     },
//     header: {
//       padding: '32px 32px 24px 32px'
//     },
//     icon: {
//       fontSize: '52px',
//       lineHeight: 1,
//       marginBottom: '20px',
//       display: 'block'
//     },
//     title: {
//       margin: '0 0 12px 0',
//       fontSize: '1.5rem',
//       fontWeight: 600,
//       color: '#0f172a',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       letterSpacing: '-0.01em'
//     },
//     summary: {
//       margin: 0,
//       fontSize: '1rem',
//       color: '#64748b',
//       lineHeight: 1.6,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
//     },
//     divider: {
//       height: '1px',
//       background: 'linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)',
//       margin: '0 32px'
//     },
//     body: {
//       padding: '24px 32px 32px 32px',
//       flex: 1,
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '24px'
//     },
//     content: {
//       fontSize: '0.95rem',
//       lineHeight: 1.75,
//       color: '#475569',
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       flex: 1
//     },
//     link: {
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '8px',
//       padding: 0,
//       background: 'transparent',
//       color: '#3b82f6',
//       textDecoration: 'none',
//       fontSize: '0.95rem',
//       fontWeight: 600,
//       fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
//       transition: 'all 0.2s ease',
//       alignSelf: 'flex-start'
//     },
//     linkHover: {
//       color: '#2563eb',
//       gap: '12px'
//     },
//     linkArrow: {
//       fontSize: '16px',
//       transition: 'transform 0.2s ease'
//     }
//   }
// };


export const cardThemes = {
  gradient: {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '28px'
    },
    listLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    card: {
      background: '#ffffff',
      border: '2px solid #e2e8f0',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    },
    cardHover: {
      borderColor: '#93c5fd',
      boxShadow: '0 12px 32px rgba(59, 130, 246, 0.15)',
      transform: 'translateY(-6px)'
    },
    topAccent: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.3s ease'
    },
    topAccentHover: {
      transform: 'scaleX(1)'
    },
    header: {
      padding: '32px',
      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)'
    },
    iconWrapper: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '72px',
      height: '72px',
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      borderRadius: '16px',
      marginBottom: '20px',
      border: '2px solid #93c5fd',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
    },
    icon: {
      fontSize: '40px',
      lineHeight: 1
    },
    title: {
      margin: '0 0 12px 0',
      fontSize: '1.5rem',
      fontWeight: 700,
      color: '#0f172a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      letterSpacing: '-0.02em'
    },
    summary: {
      margin: 0,
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: 1.6,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
    },
    body: {
      padding: '32px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    content: {
      fontSize: '1rem',
      lineHeight: 1.75,
      color: '#475569',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      flex: 1,
      marginBottom: '24px'
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '14px 28px',
      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '10px',
      fontSize: '0.95rem',
      fontWeight: 600,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      transition: 'all 0.3s ease',
      alignSelf: 'flex-start',
      boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
    },
    linkHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)'
    },
    linkArrow: {
      fontSize: '16px',
      transition: 'transform 0.3s ease'
    }
  },

  minimal: {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px'
    },
    listLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    card: {
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHover: {
      borderColor: '#3b82f6',
      boxShadow: '0 8px 24px rgba(59, 130, 246, 0.12)'
    },
    header: {
      padding: '28px 28px 20px 28px',
      borderBottom: '1px solid #f1f5f9'
    },
    headerTop: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    icon: {
      fontSize: '32px',
      lineHeight: 1,
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#eff6ff',
      borderRadius: '10px'
    },
    title: {
      margin: 0,
      fontSize: '1.4rem',
      fontWeight: 600,
      color: '#0f172a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      flex: 1
    },
    summary: {
      margin: 0,
      fontSize: '0.95rem',
      color: '#64748b',
      lineHeight: 1.6,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
    },
    body: {
      padding: '28px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    content: {
      fontSize: '0.95rem',
      lineHeight: 1.7,
      color: '#475569',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      flex: 1
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '12px 24px',
      background: '#3b82f6',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '8px',
      fontSize: '0.9rem',
      fontWeight: 500,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      transition: 'all 0.2s ease',
      alignSelf: 'flex-start'
    },
    linkHover: {
      background: '#2563eb'
    },
    linkArrow: {
      fontSize: '14px'
    }
  },

  bold: {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '26px'
    },
    listLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    },
    card: {
      background: '#ffffff',
      border: '3px solid #cbd5e1',
      borderRadius: '14px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column'
    },
    cardHover: {
      borderColor: '#3b82f6',
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.25)',
      transform: 'translateY(-4px)'
    },
    header: {
      padding: '30px',
      background: '#f8fafc',
      position: 'relative'
    },
    headerAccent: {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '30px',
      right: '30px',
      height: '3px',
      background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
    },
    iconTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '18px',
      marginBottom: '14px'
    },
    icon: {
      fontSize: '42px',
      lineHeight: 1,
      width: '64px',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      borderRadius: '12px',
      border: '3px solid #93c5fd'
    },
    title: {
      margin: 0,
      fontSize: '1.45rem',
      fontWeight: 700,
      color: '#0f172a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      flex: 1
    },
    summary: {
      margin: 0,
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: 1.6,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      fontWeight: 500
    },
    body: {
      padding: '30px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '22px'
    },
    content: {
      fontSize: '0.98rem',
      lineHeight: 1.75,
      color: '#475569',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      flex: 1
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      padding: '14px 30px',
      background: '#3b82f6',
      color: '#ffffff',
      textDecoration: 'none',
      borderRadius: '10px',
      fontSize: '0.95rem',
      fontWeight: 600,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      transition: 'all 0.25s ease',
      alignSelf: 'flex-start',
      border: '3px solid #3b82f6'
    },
    linkHover: {
      background: '#2563eb',
      borderColor: '#2563eb',
      transform: 'scale(1.05)'
    },
    linkArrow: {
      fontSize: '16px',
      fontWeight: 700
    }
  },

  elegant: {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    gridLayout: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '24px'
    },
    listLayout: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    card: {
      background: '#ffffff',
      borderRadius: '16px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)'
    },
    cardHover: {
      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.18)',
      transform: 'translateY(-5px)'
    },
    accent: {
      height: '5px',
      background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)'
    },
    header: {
      padding: '32px 32px 24px 32px'
    },
    icon: {
      fontSize: '52px',
      lineHeight: 1,
      marginBottom: '20px',
      display: 'block'
    },
    title: {
      margin: '0 0 12px 0',
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#0f172a',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      letterSpacing: '-0.01em'
    },
    summary: {
      margin: 0,
      fontSize: '1rem',
      color: '#64748b',
      lineHeight: 1.6,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif'
    },
    divider: {
      height: '1px',
      background: 'linear-gradient(90deg, transparent 0%, #e2e8f0 50%, transparent 100%)',
      margin: '0 32px'
    },
    body: {
      padding: '24px 32px 32px 32px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    },
    content: {
      fontSize: '0.95rem',
      lineHeight: 1.75,
      color: '#475569',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      flex: 1
    },
    link: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: 0,
      background: 'transparent',
      color: '#3b82f6',
      textDecoration: 'none',
      fontSize: '0.95rem',
      fontWeight: 600,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", sans-serif',
      transition: 'all 0.2s ease',
      alignSelf: 'flex-start'
    },
    linkHover: {
      color: '#2563eb',
      gap: '12px'
    },
    linkArrow: {
      fontSize: '16px',
      transition: 'transform 0.2s ease'
    }
  }
};