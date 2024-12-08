// // // // // import React from 'react';

// // // // // const ExplanationDetails = ({ title, instructions }) => {
// // // // //   return (
// // // // //     <div style={{ 
// // // // //       display: 'flex',
// // // // //       flexDirection: 'column',
// // // // //       alignItems: 'center',
// // // // //       justifyContent: 'center',
// // // // //       alignSelf: 'center',
// // // // //       marginTop: '15px',
// // // // //       marginBottom: '-20px'
// // // // //     }}>
// // // // //       <details style={{
// // // // //         backgroundColor: '#fff',
// // // // //         padding: '10px 25px',
// // // // //         borderRadius: '12px',
// // // // //         width: '400px',
// // // // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // // //         fontSize: '0.9rem',
// // // // //         color: '#333',
// // // // //         border: '1px solid #eaeaea',
// // // // //         marginTop: '5px',
// // // // //         transition: 'all 0.3s ease',
// // // // //         marginBottom: '-20px'
// // // // //       }}>
// // // // //         <summary style={{
// // // // //           cursor: 'pointer',
// // // // //           fontWeight: '600',
// // // // //           color: '#2563eb',
// // // // //           outline: 'none',
// // // // //           listStyle: 'none',
// // // // //           display: 'flex',
// // // // //           alignItems: 'center',
// // // // //           gap: '8px',
// // // // //           height: '30px'
// // // // //         }}>
// // // // //           <span style={{
// // // // //             backgroundColor: '#2563eb',
// // // // //             color: 'white',
// // // // //             width: '22px',
// // // // //             height: '22px',
// // // // //             borderRadius: '50%',
// // // // //             display: 'inline-flex',
// // // // //             alignItems: 'center',
// // // // //             justifyContent: 'center',
// // // // //             fontSize: '14px'
// // // // //           }}>?</span>
// // // // //           {title}
// // // // //           <span style={{
// // // // //             marginLeft: 'auto',
// // // // //             fontSize: '18px',
// // // // //             fontWeight: 'bold'
// // // // //           }}>+</span>
// // // // //         </summary>
// // // // //         <ul style={{
// // // // //           listStyle: 'none',
// // // // //           margin: '15px 0 0 0',
// // // // //           padding: '0 0 0 30px'
// // // // //         }}>
// // // // //           {instructions.map((instruction, index) => (
// // // // //             <li 
// // // // //               key={index}
// // // // //               style={{
// // // // //                 marginBottom: index !== instructions.length - 1 ? '8px' : 0,
// // // // //                 color: '#4b5563'
// // // // //               }}
// // // // //             >
// // // // //               • {instruction}
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </details>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ExplanationDetails;


// // // // import React from 'react';

// // // // const ExplanationDetails = ({ title = "How to use", instructions }) => {
// // // //  if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
// // // //    console.warn('ExplanationDetails: Missing or invalid instructions prop');
// // // //    return null;
// // // //  }

// // // //  return (
// // // //    <div style={{ 
// // // //      display: 'flex',
// // // //      flexDirection: 'column',
// // // //      alignItems: 'center',
// // // //      justifyContent: 'center',
// // // //      alignSelf: 'center',
// // // //      marginTop: '-10px',
// // // //      marginBottom: '0px',
// // // //      maxHeight:'20px'
// // // //    }}>
// // // //      <details style={{
// // // //        backgroundColor: '#fff',
// // // //        padding: '10px 25px',
// // // //        borderRadius: '12px',
// // // //        width: '400px',
// // // //        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // //        fontSize: '0.9rem',
// // // //        color: '#333',
// // // //        border: '1px solid #eaeaea',
// // // //        marginTop: '-5px',
// // // //        transition: 'all 0.3s ease',
// // // //        marginBottom: '-20px',
// // // //        zIndex:'100000'
// // // //      }}>
// // // //        <summary style={{
// // // //          cursor: 'pointer',
// // // //          fontWeight: '600',
// // // //          color: '#2563eb',
// // // //          outline: 'none',
// // // //          listStyle: 'none',
// // // //          display: 'flex',
// // // //          alignItems: 'center',
// // // //          gap: '8px',
// // // //          height: '10px'
// // // //        }}>
// // // //          <span style={{
// // // //            backgroundColor: '#2563eb',
// // // //            color: 'white',
// // // //            width: '22px',
// // // //            height: '22px',
// // // //            borderRadius: '50%',
// // // //            display: 'inline-flex',
// // // //            alignItems: 'center',
// // // //            justifyContent: 'center',
// // // //            fontSize: '14px'
// // // //          }}>?</span>
// // // //          {title}
// // // //          <span style={{
// // // //            marginLeft: 'auto',
// // // //            fontSize: '18px',
// // // //            fontWeight: 'bold'
// // // //          }}>+</span>
// // // //        </summary>
// // // //        <ul style={{
// // // //          listStyle: 'none',
// // // //          margin: '15px 0 0 0',
// // // //          padding: '0 0 0 30px'
// // // //        }}>
// // // //          {instructions.map((instruction, index) => (
// // // //            <li 
// // // //              key={index}
// // // //              style={{
// // // //                marginBottom: index !== instructions.length - 1 ? '8px' : 0,
// // // //                color: '#4b5563'
// // // //              }}
// // // //            >
// // // //              • {instruction}
// // // //            </li>
// // // //          ))}
// // // //        </ul>
// // // //      </details>
// // // //    </div>
// // // //  );
// // // // };

// // // // ExplanationDetails.defaultProps = {
// // // //  title: "How to use",
// // // //  instructions: []
// // // // };

// // // // export default ExplanationDetails;


// // // // import React from 'react';

// // // // const ExplanationDetails = ({ title = "How to use", instructions }) => {
// // // //  if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
// // // //    console.warn('ExplanationDetails: Missing or invalid instructions prop');
// // // //    return null;
// // // //  }

// // // //  return (
// // // //    <div style={{
// // // //      display: 'flex',
// // // //      flexDirection: 'column',
// // // //      alignItems: 'center',
// // // //      justifyContent: 'center',
// // // //      alignSelf: 'center',
// // // //      marginTop: '-10px',
// // // //      marginBottom: '0px',
// // // //      maxHeight: '20px'
// // // //    }}>
// // // //      <details style={{
// // // //        backgroundColor: '#fff',
// // // //        padding: '10px 25px',
// // // //        borderRadius: '12px',
// // // //        width: '400px',
// // // //        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // // //        fontSize: '0.9rem',
// // // //        color: '#333',
// // // //        border: '1px solid #eaeaea',
// // // //        marginTop: '-5px',
// // // //        transition: 'all 0.3s ease',
// // // //        marginBottom: '-20px',
// // // //        zIndex: '100000'
// // // //      }}>
// // // //        <summary style={{
// // // //          cursor: 'pointer',
// // // //          fontWeight: '600',
// // // //          color: '#2563eb',
// // // //          outline: 'none',
// // // //          listStyle: 'none',
// // // //          display: 'flex',
// // // //          alignItems: 'center',
// // // //          gap: '8px',
// // // //          height: '10px'
// // // //        }}>
// // // //          <span style={{
// // // //            backgroundColor: '#2563eb',
// // // //            color: 'white',
// // // //            width: '22px',
// // // //            height: '22px',
// // // //            borderRadius: '50%',
// // // //            display: 'inline-flex',
// // // //            alignItems: 'center',
// // // //            justifyContent: 'center',
// // // //            fontSize: '16px'
// // // //          }}>?</span>
// // // //          {title}
// // // //          <span className="toggle-icon" style={{
// // // //            marginLeft: 'auto',
// // // //            fontSize: '18px',
// // // //            fontWeight: 'bold'
// // // //          }}></span>
// // // //        </summary>
// // // //        <ul style={{
// // // //          listStyle: 'none',
// // // //          margin: '15px 0 0 0',
// // // //          padding: '0 0 0 30px'
// // // //        }}>
// // // //          {instructions.map((instruction, index) => (
// // // //            <li 
// // // //              key={index}
// // // //              style={{
// // // //                marginBottom: index !== instructions.length - 1 ? '8px' : 0,
// // // //                color: '#4b5563',
// // // //                fontWeight:'600',
// // // //                fontSize:'14px'
// // // //              }}
// // // //            >
// // // //              • {instruction}
// // // //            </li>
// // // //          ))}
// // // //        </ul>
// // // //      </details>
// // // //      <style>{`
// // // //        .toggle-icon::before {
// // // //          content: '+';
// // // //        }
// // // //        details[open] .toggle-icon::before {
// // // //          content: '-';
// // // //        }
// // // //      `}</style>
// // // //    </div>
// // // //  );
// // // // };

// // // // ExplanationDetails.defaultProps = {
// // // //  title: "How to use",
// // // //  instructions: []
// // // // };

// // // // export default ExplanationDetails;

// // // import React from 'react';

// // // const ExplanationDetails = ({ title = "How to use", instructions }) => {
// // //   if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
// // //     console.warn('ExplanationDetails: Missing or invalid instructions prop');
// // //     return null;
// // //   }

// // //   return (
// // //     <div style={{
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       alignItems: 'center',
// // //       justifyContent: 'center',
// // //       alignSelf: 'center',
// // //       marginTop: '-10px',
// // //       marginBottom: '0px',
// // //       maxHeight: '20px'
// // //     }}>
// // //       <details style={{
// // //         backgroundColor: '#fff',
// // //         padding: '10px 25px',
// // //         borderRadius: '12px',
// // //         width: '400px',
// // //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// // //         fontSize: '0.9rem',
// // //         color: '#333',
// // //         border: '1px solid #eaeaea',
// // //         marginTop: '-5px',
// // //         transition: 'all 0.3s ease',
// // //         marginBottom: '-20px',
// // //         zIndex: '100000'
// // //       }}>
// // //         <summary style={{
// // //           cursor: 'pointer',
// // //           fontWeight: '600',
// // //           color: '#2563eb',
// // //           outline: 'none',
// // //           listStyle: 'none',
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           gap: '8px',
// // //           height: '10px'
// // //         }}>
// // //           <span style={{
// // //             backgroundColor: '#2563eb',
// // //             color: 'white',
// // //             width: '22px',
// // //             height: '22px',
// // //             borderRadius: '50%',
// // //             display: 'inline-flex',
// // //             alignItems: 'center',
// // //             justifyContent: 'center',
// // //             fontSize: '16px'
// // //           }}>?</span>
// // //           {title}
// // //           <span className="toggle-icon" style={{
// // //             marginLeft: 'auto',
// // //             fontSize: '24px',
// // //             fontWeight: 'bold',
// // //             backgroundColor: '#4A5568',
// // //             color: 'white',
// // //             width: '28px',
// // //             height: '28px',
// // //             borderRadius: '50%',
// // //             display: 'inline-flex',
// // //             alignItems: 'center',
// // //             justifyContent: 'center',
// // //             transition: 'all 0.2s ease'
// // //           }}></span>
// // //         </summary>
// // //         <ul style={{
// // //           listStyle: 'none',
// // //           margin: '15px 0 0 0',
// // //           padding: '0 0 0 30px'
// // //         }}>
// // //           {instructions.map((instruction, index) => (
// // //             <li 
// // //               key={index}
// // //               style={{
// // //                 marginBottom: index !== instructions.length - 1 ? '8px' : 0,
// // //                 color: '#4b5563',
// // //                 fontWeight: '600',
// // //                 fontSize: '14px'
// // //               }}
// // //             >
// // //               • {instruction}
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       </details>
// // //       <style>{`
// // //         .toggle-icon::before {
// // //           content: '+';
// // //           line-height: 1;
// // //         }
// // //         details[open] .toggle-icon::before {
// // //           content: '-';
// // //           line-height: 0.9;
// // //         }
// // //         details[open] .toggle-icon {
// // //           background-color: #2D3748;
// // //         }
// // //         .toggle-icon:hover {
// // //           background-color: #2D3748;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // ExplanationDetails.defaultProps = {
// // //   title: "How to use",
// // //   instructions: []
// // // };

// // // export default ExplanationDetails;

// // import React from 'react';

// // const ExplanationDetails = ({ title = "How to use", instructions }) => {
// //   if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
// //     console.warn('ExplanationDetails: Missing or invalid instructions prop');
// //     return null;
// //   }

// //   return (
// //     <div style={{
// //       display: 'flex',
// //       flexDirection: 'column',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       alignSelf: 'center',
// //       marginTop: '-10px',
// //       marginBottom: '0px',
// //       maxHeight: '20px'
// //     }}>
// //       <details style={{
// //         backgroundColor: '#fff',
// //         padding: '10px 25px',
// //         borderRadius: '12px',
// //         width: '400px',
// //         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
// //         fontSize: '0.9rem',
// //         color: '#333',
// //         border: '1px solid #eaeaea',
// //         marginTop: '-5px',
// //         transition: 'all 0.3s ease',
// //         marginBottom: '-20px',
// //         zIndex: '100000'
// //       }}>
// //         <summary style={{
// //           cursor: 'pointer',
// //           fontWeight: '600',
// //           color: '#2563eb',
// //           outline: 'none',
// //           listStyle: 'none',
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '8px',
// //           height: '10px'
// //         }}>
// //           <span style={{
// //             backgroundColor: '#2563eb',
// //             color: 'white',
// //             width: '22px',
// //             height: '22px',
// //             borderRadius: '50%',
// //             display: 'inline-flex',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             fontSize: '16px'
// //           }}>?</span>
// //           {title}
// //           <span className="toggle-icon" style={{
// //             marginLeft: 'auto',
// //             fontSize: '20px',
// //             fontWeight: 'bold',
// //             width: '24px',
// //             height: '24px',
// //             borderRadius: '50%',
// //             display: 'inline-flex',
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //             color: '#2563eb',
// //             paddingBottom: '2px' // Helps center the minus sign
// //           }}></span>
// //         </summary>
// //         <ul style={{
// //           listStyle: 'none',
// //           margin: '15px 0 0 0',
// //           padding: '15px 0 5px 30px',
// //           backgroundColor: '#f8f9fa',
// //           borderRadius: '8px',
// //           boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)'
// //         }}>
// //           {instructions.map((instruction, index) => (
// //             <li 
// //               key={index}
// //               style={{
// //                 marginBottom: index !== instructions.length - 1 ? '8px' : 0,
// //                 color: '#4b5563',
// //                 fontWeight: '600',
// //                 fontSize: '14px'
// //               }}
// //             >
// //               • {instruction}
// //             </li>
// //           ))}
// //         </ul>
// //       </details>
// //       <style>{`
// //         .toggle-icon::before {
// //           content: '+';
// //         }
// //         details[open] .toggle-icon::before {
// //           content: '-';
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // ExplanationDetails.defaultProps = {
// //   title: "How to use",
// //   instructions: []
// // };

// // export default ExplanationDetails;

// import React from 'react';

// const ExplanationDetails = ({ title = "How to use", instructions }) => {
//  if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
//    console.warn('ExplanationDetails: Missing or invalid instructions prop');
//    return null;
//  }

//  return (
//    <div style={{
//      display: 'flex',
//      flexDirection: 'column',
//      alignItems: 'center',
//      justifyContent: 'center',
//      alignSelf: 'center',
//      marginTop: '-10px',
//      marginBottom: '0px',
//      maxHeight: '20px'
//    }}>
//      <details style={{
//        backgroundColor: '#fff',
//        padding: '10px 25px',
//        borderRadius: '12px',
//        width: '400px',
//        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//        fontSize: '0.9rem',
//        color: '#333',
//        border: '1px solid #eaeaea',
//        marginTop: '-5px',
//        transition: 'all 0.3s ease',
//        marginBottom: '-20px',
//        zIndex: '100000'
//      }}>
//        <summary style={{
//          cursor: 'pointer',
//          fontWeight: '600',
//          color: '#2563eb',
//          outline: 'none',
//          listStyle: 'none',
//          display: 'flex',
//          alignItems: 'center',
//          gap: '8px',
//          height: '10px'
//        }}>
//          <span style={{
//            backgroundColor: '#2563eb',
//            color: 'white',
//            width: '22px',
//            height: '22px',
//            borderRadius: '50%',
//            display: 'inline-flex',
//            alignItems: 'center',
//            justifyContent: 'center',
//            fontSize: '16px'
//          }}>?</span>
//          {title}
//          <span className="toggle-icon" style={{
//            marginLeft: 'auto',
//            fontSize: '18px',
//            fontWeight: 'bold',
//            backgroundColor: '#2563eb',
//            color: 'white',
//            width: '22px',
//            height: '22px',
//            borderRadius: '50%',
//            display: 'inline-flex',
//            alignItems: 'center',
//            justifyContent: 'center',
//            paddingBottom: '0.5px'
//          }}></span>
//        </summary>
//        <ul style={{
//          listStyle: 'none',
//          margin: '15px 0 0 0',
//          padding: '0 0 0 30px'
//        }}>
//          {instructions.map((instruction, index) => (
//            <li 
//              key={index}
//              style={{
//                marginBottom: index !== instructions.length - 1 ? '8px' : 0,
//                color: '#4b5563',
//                fontWeight: '600',
//                fontSize: '14px'
//              }}
//            >
//              • {instruction}
//            </li>
//          ))}
//        </ul>
//      </details>
//      <style>{`
//        .toggle-icon::before {
//          content: '+';
//        }
//        details[open] .toggle-icon::before {
//          content: '-';
//        }
//      `}</style>
//    </div>
//  );
// };

// ExplanationDetails.defaultProps = {
//  title: "How to use",
//  instructions: []
// };

// export default ExplanationDetails;

// import React, { useState } from 'react';

// const ExplanationDetails = ({ title = "How to use", instructions }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
//     console.warn('ExplanationDetails: Missing or invalid instructions prop');
//     return null;
//   }

//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       alignSelf: 'center',
//       marginTop: '-10px',
//       marginBottom: '0px',
//       maxHeight: '20px'
//     }}>
//       <details 
//         open={isOpen}
//         onToggle={(e) => setIsOpen(e.target.open)}
//         style={{
//           backgroundColor: '#fff',
//           padding: '10px 25px',
//           borderRadius: '12px',
//           width: '400px',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//           fontSize: '0.9rem',
//           color: '#333',
//           border: '1px solid #eaeaea',
//           marginTop: '-5px',
//           transition: 'all 0.3s ease',
//           marginBottom: '-20px',
//           zIndex: '100000'
//         }}>
//         <summary style={{
//           cursor: 'pointer',
//           fontWeight: '600',
//           color: '#2563eb',
//           outline: 'none',
//           listStyle: 'none',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           height: '10px'
//         }}>
//           <span style={{
//             backgroundColor: '#2563eb',
//             color: 'white',
//             width: '22px',
//             height: '22px',
//             borderRadius: '50%',
//             display: 'inline-flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '16px'
//           }}>?</span>
//           {title}
//           <span style={{
//             marginLeft: 'auto',
//             fontSize: '18px',
//             fontWeight: 'bold',
//             backgroundColor: '#2563eb',
//             color: 'white',
//             width: '22px',
//             height: '22px',
//             borderRadius: '50%',
//             display: 'inline-flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             lineHeight: '22px',
//             paddingTop: '1px'
//           }}>
//             {isOpen ? '-' : '+'}
//           </span>
//         </summary>
//         <ul style={{
//           listStyle: 'none',
//           margin: '15px 0 0 0',
//           padding: '0 0 0 30px'
//         }}>
//           {instructions.map((instruction, index) => (
//             <li 
//               key={index}
//               style={{
//                 marginBottom: index !== instructions.length - 1 ? '8px' : 0,
//                 color: '#4b5563',
//                 fontWeight: '600',
//                 fontSize: '14px'
//               }}
//             >
//               • {instruction}
//             </li>
//           ))}
//         </ul>
//       </details>
//     </div>
//   );
// };

// ExplanationDetails.defaultProps = {
//   title: "How to use",
//   instructions: []
// };

// export default ExplanationDetails;


import React, { useState } from 'react';

const ExplanationDetails = ({ title = "How to use", instructions }) => {
 const [isOpen, setIsOpen] = useState(false);

 if (!instructions || !Array.isArray(instructions) || instructions.length === 0) {
   console.warn('ExplanationDetails: Missing or invalid instructions prop');
   return null;
 }

 return (
   <div style={{
     display: 'flex',
     flexDirection: 'column',
     alignItems: 'center',
     justifyContent: 'flex-start',
     alignSelf: 'center',
     position: 'relative',
     marginTop: '-10px'
   }}>
     <details 
       open={isOpen}
       onToggle={(e) => setIsOpen(e.target.open)}
       style={{
         backgroundColor: '#fff',
         padding: '10px 25px',
         borderRadius: '12px',
         width: '400px',
         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
         fontSize: '0.9rem',
         color: '#333',
         border: '1px solid #eaeaea',
         marginTop: '-5px',
         transition: 'all 0.3s ease',
         position: 'absolute',
         top: 0,
         left: '50%',
         transform: 'translateX(-50%)',
         zIndex: '100000'
       }}>
       <summary style={{
         cursor: 'pointer',
         fontWeight: '600',
         color: '#2563eb',
         outline: 'none',
         listStyle: 'none',
         display: 'flex',
         alignItems: 'center',
         gap: '8px',
         height: '10px'
       }}>
         <span style={{
           backgroundColor: '#2563eb',
           color: 'white',
           width: '22px',
           height: '22px',
           borderRadius: '50%',
           display: 'inline-flex',
           alignItems: 'center',
           justifyContent: 'center',
           fontSize: '16px'
         }}>?</span>
         {title}
         <span style={{
           marginLeft: 'auto',
           fontSize: '18px',
           fontWeight: 'bold',
           backgroundColor: '#2563eb',
           color: 'white',
           width: '22px',
           height: '22px',
           borderRadius: '50%',
           display: 'inline-flex',
           alignItems: 'center',
           justifyContent: 'center',
           lineHeight: '22px',
           paddingTop: '1px'
         }}>
           {isOpen ? '-' : '+'}
         </span>
       </summary>
       <ul style={{
         listStyle: 'none',
         margin: '15px 0 0 0',
         padding: '0 0 0 30px'
       }}>
         {instructions.map((instruction, index) => (
           <li 
             key={index}
             style={{
               marginBottom: index !== instructions.length - 1 ? '8px' : 0,
               color: '#4b5563',
               fontWeight: '600',
               fontSize: '14px'
             }}
           >
             • {instruction}
           </li>
         ))}
       </ul>
     </details>
   </div>
 );
};

ExplanationDetails.defaultProps = {
 title: "How to use",
 instructions: []
};

export default ExplanationDetails;