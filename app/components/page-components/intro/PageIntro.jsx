// // const themes = {
// //   blue: {
// //     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
// //     boxShadow: '0 6px 16px rgba(37, 99, 235, 0.3)',
// //     borderLeft: '4px solid #60a5fa'
// //   },
// //   purple: {
// //     background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
// //     boxShadow: '0 6px 16px rgba(139, 92, 246, 0.3)',
// //     borderLeft: '4px solid #a78bfa'
// //   },
// //   teal: {
// //     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
// //     boxShadow: '0 6px 16px rgba(20, 184, 166, 0.3)',
// //     borderLeft: '4px solid #2dd4bf'
// //   },
// //   indigo: {
// //     background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
// //     boxShadow: '0 6px 16px rgba(99, 102, 241, 0.3)',
// //     borderLeft: '4px solid #818cf8'
// //   },
// //   emerald: {
// //     background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
// //     boxShadow: '0 6px 16px rgba(16, 185, 129, 0.3)',
// //     borderLeft: '4px solid #34d399'
// //   },
// //   slate: {
// //     background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
// //     boxShadow: '0 6px 16px rgba(71, 85, 105, 0.3)',
// //     borderLeft: '4px solid #64748b'
// //   }
// // };

// // export default function PageIntro({ title, description, icon, theme = 'blue' }) {
// //   const currentTheme = themes[theme] || themes.blue;

// //   return (
// //     <div style={{
// //       maxWidth: '1200px',
// //       margin: '0 auto 0 auto',
// //       display: 'flex',
// //       gap: '1rem',
// //       padding: '1rem 1.5rem',
// //       background: currentTheme.background,
// //       borderRadius: '10px',
// //       boxShadow: currentTheme.boxShadow,
// //       borderLeft: currentTheme.borderLeft,
// //       position: 'relative',
// //       overflow: 'hidden'
// //     }}>
// //       {/* Decorative circles */}
// //       <div style={{
// //         position: 'absolute',
// //         top: '-20px',
// //         right: '-20px',
// //         width: '100px',
// //         height: '100px',
// //         borderRadius: '50%',
// //         background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
// //         pointerEvents: 'none'
// //       }}></div>
      
// //       {/* Icon */}
// //       {icon && (
// //         <div style={{
// //           width: '48px',
// //           height: '48px',
// //           flexShrink: 0,
// //           borderRadius: '10px',
// //           background: 'rgba(255, 255, 255, 0.2)',
// //           backdropFilter: 'blur(10px)',
// //           display: 'flex',
// //           alignItems: 'center',
// //           justifyContent: 'center',
// //           border: '1px solid rgba(255, 255, 255, 0.3)',
// //           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
// //         }}>
// //           {icon}
// //         </div>
// //       )}

// //       {/* Content */}
// //       <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
// //         <h2 style={{
// //           fontSize: '1.125rem',
// //           fontWeight: '700',
// //           color: '#ffffff',
// //           margin: '0 0 0.375rem 0',
// //           letterSpacing: '-0.01em'
// //         }}>
// //           {title}
// //         </h2>
// //         <p style={{
// //           fontSize: '0.9375rem',
// //           lineHeight: '1.5',
// //           color: 'rgba(255, 255, 255, 0.95)',
// //           margin: 0
// //         }}>
// //           {description}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }


// const themes = {
//   blue: {
//     background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
//     boxShadow: '0 6px 16px rgba(37, 99, 235, 0.3)',
//     borderLeft: '4px solid #60a5fa'
//   },
//   purple: {
//     background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
//     boxShadow: '0 6px 16px rgba(139, 92, 246, 0.3)',
//     borderLeft: '4px solid #a78bfa'
//   },
//   teal: {
//     background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
//     boxShadow: '0 6px 16px rgba(20, 184, 166, 0.3)',
//     borderLeft: '4px solid #2dd4bf'
//   },
//   indigo: {
//     background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
//     boxShadow: '0 6px 16px rgba(99, 102, 241, 0.3)',
//     borderLeft: '4px solid #818cf8'
//   },
//   emerald: {
//     background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//     boxShadow: '0 6px 16px rgba(16, 185, 129, 0.3)',
//     borderLeft: '4px solid #34d399'
//   },
//   slate: {
//     background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
//     boxShadow: '0 6px 16px rgba(71, 85, 105, 0.3)',
//     borderLeft: '4px solid #64748b'
//   }
// };

// export default function PageIntro({ data, theme = 'blue' }) {
//   const { title, description, icon } = data;
//   const currentTheme = themes[theme] || themes.blue;

//   return (
//     <div style={{
//       maxWidth: '1200px',
//       margin: '0 auto 0 auto',
//       display: 'flex',
//       gap: '1rem',
//       padding: '1rem 1.5rem',
//       background: currentTheme.background,
//       borderRadius: '10px',
//       boxShadow: currentTheme.boxShadow,
//       borderLeft: currentTheme.borderLeft,
//       position: 'relative',
//       overflow: 'hidden'
//     }}>
//       {/* Decorative circles */}
//       <div style={{
//         position: 'absolute',
//         top: '-20px',
//         right: '-20px',
//         width: '100px',
//         height: '100px',
//         borderRadius: '50%',
//         background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
//         pointerEvents: 'none'
//       }}></div>
      
//       {/* Icon */}
//       {icon && (
//         <div style={{
//           width: '48px',
//           height: '48px',
//           flexShrink: 0,
//           borderRadius: '10px',
//           background: 'rgba(255, 255, 255, 0.2)',
//           backdropFilter: 'blur(10px)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           border: '1px solid rgba(255, 255, 255, 0.3)',
//           boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
//         }}>
//           {icon}
//         </div>
//       )}

//       {/* Content */}
//       <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
//         <h2 style={{
//           fontSize: '1.125rem',
//           fontWeight: '700',
//           color: '#ffffff',
//           margin: '0 0 0.375rem 0',
//           letterSpacing: '-0.01em'
//         }}>
//           {title}
//         </h2>
//         <p style={{
//           fontSize: '0.9375rem',
//           lineHeight: '1.5',
//           color: 'rgba(255, 255, 255, 0.95)',
//           margin: 0
//         }}>
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }



const themes = {
  blue: {
    background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    boxShadow: '0 6px 16px rgba(37, 99, 235, 0.3)',
    borderLeft: '4px solid #60a5fa'
  },
  purple: {
    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
    boxShadow: '0 6px 16px rgba(139, 92, 246, 0.3)',
    borderLeft: '4px solid #a78bfa'
  },
  teal: {
    background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)',
    boxShadow: '0 6px 16px rgba(20, 184, 166, 0.3)',
    borderLeft: '4px solid #2dd4bf'
  },
  indigo: {
    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
    boxShadow: '0 6px 16px rgba(99, 102, 241, 0.3)',
    borderLeft: '4px solid #818cf8'
  },
  emerald: {
    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    boxShadow: '0 6px 16px rgba(16, 185, 129, 0.3)',
    borderLeft: '4px solid #34d399'
  },
  slate: {
    background: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
    boxShadow: '0 6px 16px rgba(71, 85, 105, 0.3)',
    borderLeft: '4px solid #64748b'
  },
 info: {
  background:'#eff6ff',
  boxShadow: '0 6px 16px rgba(59, 130, 246, 0.15)',
  borderLeft: '4px solid #3b82f6',
  textColor: '#1f3a8e',
  descColor: '#1e3a8a'
},
light: {
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
  borderLeft: '4px solid #adb5bd',
  textColor: '#212529',
  descColor: '#495057'
}
};

export default function PageIntro({ data, icon, theme = 'blue' }) {
  const { title, description } = data;
  const currentTheme = themes[theme] || themes.blue;

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      gap: '1rem',
      padding: '1rem 1.5rem',
      background: currentTheme.background,
      borderRadius: '10px',
      boxShadow: currentTheme.boxShadow,
      borderLeft: currentTheme.borderLeft,
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>
      
      {/* Icon */}
      {icon && (
        <div style={{
          width: '48px',
          height: '48px',
          flexShrink: 0,
          borderRadius: '10px',
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          {icon}
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: '1.125rem',
          fontWeight: '700',
          color: '#ffffff',
          margin: '0 0 0.375rem 0',
          letterSpacing: '-0.01em'
        }}>
          {title}
        </h2>
        <p style={{
          fontSize: '0.9375rem',
          lineHeight: '1.5',
          color: 'rgba(255, 255, 255, 0.95)',
          margin: 0
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}