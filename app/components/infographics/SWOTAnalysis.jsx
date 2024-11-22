// // // import React from 'react';
// // // import './SWOTAnalysis.css'

// // // const SWOTAnalysis = ({ sections }) => {
// // //   return (
// // //     <div className="swot-card">
// // //       <div className="swot-header">
// // //         <h2 className="swot-title">SWOT Analysis</h2>
// // //       </div>
// // //       <div className="swot-content">
// // //         <div className="swot-grid">
// // //           {sections.map((section, index) => (
// // //             <div key={section.title} className={`swot-section ${section.bgColor}`}>
// // //               <h3 className="section-title">{section.title}</h3>
// // //               <ul className="section-list">
// // //                 {section.items.map((item, itemIndex) => (
// // //                   <li key={itemIndex} className="section-item">• {item}</li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           ))}
          
// // //           <div className="swot-circle">
// // //             <div className="circle-content">
// // //               <span>SWOT</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SWOTAnalysis;
// // import React from 'react';
// // import './SWOTAnalysis.css';

// // const SWOTAnalysis = ({ sections }) => {
// //   return (
// //     <div className="swot-card">
// //       <div className="swot-header">
// //         <h2 className="swot-title">SWOT Analysis</h2>
// //       </div>
// //       <div className="swot-content">
// //         <div className="swot-grid">
// //           {sections.map((section, index) => (
// //             <div 
// //               key={section.title} 
// //               className="swot-section"
// //               style={{ 
// //                 backgroundColor: section.bgColor,
// //                 color: section.color 
// //               }}
// //             >
// //               <h3 className="section-title">{section.title}</h3>
// //               <ul className="section-list">
// //                 {section.items.map((item, itemIndex) => (
// //                   <li key={itemIndex} className="section-item">• {item}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
          
// //           <div className="swot-circle">
// //             <div className="circle-content">
// //               <span>SWOT</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SWOTAnalysis;

// import React from 'react';
// import './SWOTAnalysis.css';

// const SWOTAnalysis = ({ sections }) => {
//   // Map default colors based on index
//   const getDefaultStyles = (index) => {
//     const defaultClasses = ['yellow', 'pink', 'blue', 'orange'];
//     return {
//       className: `swot-section ${defaultClasses[index]}`,
//       style: {}
//     };
//   };

//   const getSectionStyles = (section, index) => {
//     // If custom colors are provided, use them instead of default classes
//     if (section.bgColor || section.color) {
//       return {
//         className: 'swot-section',
//         style: {
//           backgroundColor: section.bgColor,
//           color: section.color
//         }
//       };
//     }
//     // Otherwise use default styles
//     return getDefaultStyles(index);
//   };

//   return (
//     <div className="swot-card">
//       <div className="swot-header">
//         <h2 className="swot-title">SWOT Analysis</h2>
//       </div>
//       <div className="swot-content">
//         <div className="swot-grid">
//           {sections.map((section, index) => {
//             const { className, style } = getSectionStyles(section, index);
//             return (
//               <div 
//                 key={section.title} 
//                 className={className}
//                 style={style}
//               >
//                 <h3 className="section-title">{section.title}</h3>
//                 <ul className="section-list">
//                   {section.items.map((item, itemIndex) => (
//                     <li key={itemIndex} className="section-item">• {item}</li>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
          
//           <div className="swot-circle">
//             <div className="circle-content">
//               <span>SWOT</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SWOTAnalysis;

import React ,{useEffect} from 'react';
import './SWOTAnalysis.css';

const SWOTAnalysis = ({ sections,title="SWOT Analysis" ,center="SWOT"}) => {
  const getDefaultStyles = (index) => {
    const defaultClasses = ['yellow', 'pink', 'blue', 'orange'];
    return {
      className: `swot-section ${defaultClasses[index]}`,
      style: {}
    };
  };

  const getSectionStyles = (section, index) => {
    if (section.bgColor || section.color) {
      return {
        className: 'swot-section',
        style: {
          backgroundColor: section.bgColor,
        },
        titleStyle: {
          color: section.color
        },
        itemStyle: {
          color: section.color
        }
      };
    }
    return getDefaultStyles(index);
  };


  useEffect(() => {
    const circle = document.querySelector('.circle-content');
    const grid = document.querySelector('.swot-grid');
    
    if (circle && grid) {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                const width = entry.contentRect.width;
                grid.style.setProperty('--circle-size', `${width}px`);
            }
        });
        
        observer.observe(circle);
        return () => observer.disconnect();
    }
}, []);

//   useEffect(() => {
//     const circle = document.querySelector('.circle-content');
//     const grid = document.querySelector('.swot-grid');
    
//     if (circle && grid) {
//         const observer = new ResizeObserver(entries => {
//             for (let entry of entries) {
//                 const width = entry.contentRect.width;
//                 grid.style.setProperty('--circle-size', `${width}px`);
//             }
//         });
        
//         observer.observe(circle);
//         return () => observer.disconnect();
//     }
// }, []);

  return (
    <div className="swot-card">
      <div className="swot-header">
        <h2 className="swot-title">{title}</h2>
      </div>
      <div className="swot-content">
        <div className="swot-grid">
          {sections.map((section, index) => {
            const { className, style, titleStyle, itemStyle } = getSectionStyles(section, index);
            return (
              <div 
                key={section.title} 
                className={className}
                style={style}
              >
                <h3 className="section-title" style={titleStyle}>{section.title}</h3>
                <ul className="section-list">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="section-item" style={itemStyle}>• {item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
          
          <div className="swot-circle">
            <div className="circle-content">
              <span>{center}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SWOTAnalysis;