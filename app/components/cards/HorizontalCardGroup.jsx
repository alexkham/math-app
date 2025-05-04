// // // components/HorizontalCardGroup.jsx
// // import React from 'react';

// // const HorizontalCardGroup = ({ data }) => {
// //   // Internal styles
// //   const styles = {
// //     container: {
// //       padding: '20px',
// //       maxWidth: '100%',
// //       margin: '0 auto',
// //       overflow: 'hidden'
// //     },
// //     title: {
// //       textAlign: 'center',
// //       marginBottom: '30px',
// //       color: '#333'
// //     },
// //     scrollContainer: {
// //       width: '100%',
// //       overflowX: 'auto',
// //       paddingBottom: '20px'
// //     },
// //     cardRow: {
// //       display: 'flex',
// //       flexDirection: 'row',
// //       flexWrap: 'nowrap',
// //       gap: '20px',
// //       padding: '10px 5px',
// //       minWidth: 'min-content'
// //     },
// //     card: {
// //       width: '220px',
// //       minWidth: '220px',
// //       borderRadius: '12px',
// //       overflow: 'hidden',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// //       backgroundColor: 'white',
// //       position: 'relative'
// //     },
// //     cardHeader: {
// //       padding: '20px',
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       minHeight: '140px',
// //       position: 'relative'
// //     },
// //     iconContainer: {
// //       width: '60px',
// //       height: '60px',
// //       borderRadius: '50%',
// //       backgroundColor: 'white',
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       marginBottom: '15px'
// //     },
// //     cardTitle: {
// //       textAlign: 'center',
// //       margin: '0',
// //       fontWeight: 'bold'
// //     },
// //     pointer: {
// //       position: 'absolute',
// //       bottom: '-10px',
// //       left: '50%',
// //       transform: 'translateX(-50%) rotate(45deg)',
// //       width: '20px',
// //       height: '20px',
// //       zIndex: 1
// //     },
// //     cardBody: {
// //       padding: '20px',
// //       textAlign: 'center',
// //       flex: 1,
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       backgroundColor: 'white'
// //     },
// //     description: {
// //       margin: '0',
// //       fontSize: '14px'
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <h1 style={styles.title}>{data.title || 'Propositional Logic Elements'}</h1>
      
// //       <div style={styles.scrollContainer}>
// //         <div style={styles.cardRow}>
// //           {data.items.map((card, index) => (
// //             <div key={index} style={styles.card}>
// //               <div 
// //                 style={{
// //                   ...styles.cardHeader,
// //                   backgroundColor: card.color || '#f0f0f0'
// //                 }}
// //               >
// //                 <div style={styles.iconContainer}>
// //                   {card.icon}
// //                 </div>
                
// //                 <h3 
// //                   style={{
// //                     ...styles.cardTitle,
// //                     color: card.titleColor || 'black'
// //                   }}
// //                 >
// //                   {card.title}
// //                 </h3>
                
// //                 <div 
// //                   style={{
// //                     ...styles.pointer,
// //                     backgroundColor: card.color || '#f0f0f0'
// //                   }}
// //                 />
// //               </div>
              
// //               <div style={styles.cardBody}>
// //                 <p style={styles.description}>{card.description}</p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HorizontalCardGroup;


// // components/HorizontalCardGroup.jsx
// import React from 'react';

// const HorizontalCardGroup = ({ data }) => {
//   // Internal styles
//   const styles = {
//     container: {
//       width: '100%',
//       margin: '0 auto',
//       padding: '20px 0',
//       boxSizing: 'border-box'
//     },
//     title: {
//       textAlign: 'center',
//       marginBottom: '30px',
//       color: '#333',
//       width: '100%'
//     },
//     cardContainer: {
//       display: 'flex',
//       flexDirection: 'row',
//       alignItems: 'stretch',
//       justifyContent: 'space-around',
//       flexWrap: 'wrap',
//       gap: '20px',
//       width: '100%'
//     },
//     card: {
//       flex: '1 1 200px',
//       minWidth: '180px',
//       maxWidth: '300px',
//       borderRadius: '12px',
//       overflow: 'hidden',
//       display: 'flex',
//       flexDirection: 'column',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       backgroundColor: 'white',
//       position: 'relative',
//       margin: '0 5px 20px'
//     },
//     cardHeader: {
//       padding: '20px',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       minHeight: '140px',
//       position: 'relative'
//     },
//     iconContainer: {
//       width: '60px',
//       height: '60px',
//       borderRadius: '50%',
//       backgroundColor: 'white',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: '15px'
//     },
//     cardTitle: {
//       textAlign: 'center',
//       margin: '0',
//       fontWeight: 'bold'
//     },
//     pointer: {
//       position: 'absolute',
//       bottom: '-10px',
//       left: '50%',
//       transform: 'translateX(-50%) rotate(45deg)',
//       width: '20px',
//       height: '20px',
//       zIndex: 1
//     },
//     cardBody: {
//       padding: '20px',
//       textAlign: 'center',
//       flex: '1',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: 'white'
//     },
//     description: {
//       margin: '0',
//       fontSize: '14px'
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>{data.title || 'Propositional Logic Elements'}</h1>
      
//       <div style={styles.cardContainer}>
//         {data.items.map((card, index) => (
//           <div key={index} style={styles.card}>
//             <div 
//               style={{
//                 ...styles.cardHeader,
//                 backgroundColor: card.color || '#f0f0f0'
//               }}
//             >
//               <div style={styles.iconContainer}>
//                 {card.icon}
//               </div>
              
//               <h3 
//                 style={{
//                   ...styles.cardTitle,
//                   color: card.titleColor || 'black'
//                 }}
//               >
//                 {card.title}
//               </h3>
              
//               <div 
//                 style={{
//                   ...styles.pointer,
//                   backgroundColor: card.color || '#f0f0f0'
//                 }}
//               />
//             </div>
            
//             <div style={styles.cardBody}>
//               <p style={styles.description}>{card.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HorizontalCardGroup;

// components/HorizontalCardGroup.jsx
import React from 'react';

const HorizontalCardGroup = ({ data }) => {
  // Internal styles
  const styles = {
    container: {
      width: '100%',
      margin: '0 auto',
      padding: '20px 0',
      boxSizing: 'border-box'
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      color: '#333',
      width: '100%'
    },
    cardContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      flexWrap: 'nowrap', // Prevent wrapping
      gap: '10px',
      width: '100%'
    },
    card: {
      flex: '1 1 0', // Equal growth and shrink, starting from 0 width
      minWidth: '0', // Allow card to shrink below content size
      borderRadius: '12px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white',
      position: 'relative'
    },
    cardHeader: {
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '140px',
      position: 'relative'
    },
    iconContainer: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '15px'
    },
    cardTitle: {
      textAlign: 'center',
      margin: '0',
      fontWeight: 'bold',
      fontSize: '16px',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    pointer: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)',
      width: '20px',
      height: '20px',
      zIndex: 1
    },
    cardBody: {
      padding: '20px',
      textAlign: 'center',
      flex: '1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    description: {
      margin: '0',
      fontSize: '16px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{data.title || 'Propositional Logic Elements'}</h1>
      
      <div style={styles.cardContainer}>
        {data.items.map((card, index) => (
          <div key={index} style={styles.card}>
            <div 
              style={{
                ...styles.cardHeader,
                backgroundColor: card.color || '#f0f0f0'
              }}
            >
              <div style={styles.iconContainer}>
                {card.icon}
              </div>
              
              <h3 
                style={{
                  ...styles.cardTitle,
                  color: card.titleColor || 'black'
                }}
              >
                {card.title}
              </h3>
              
              <div 
                style={{
                  ...styles.pointer,
                  backgroundColor: card.color || '#f0f0f0'
                }}
              />
            </div>
            
            <div style={styles.cardBody}>
              <p style={styles.description}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalCardGroup;