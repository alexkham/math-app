

// // import React from 'react';
// // import { ChevronRight } from 'lucide-react';

// // const VerticalButtonGroup = ({
// //   items = [],
// //   width = '300px',
// //   backgroundColor = '#f3f4f6',
// //   color = '#448af4',
// //   isSticky = false,
// //   verticalOffset = '20px'
// // }) => {
// //   return (
// //     <div 
// //       id="buttonGroup"
// //       style={{
// //         width: width,
// //         display: 'flex',
// //         flexDirection: 'column',
// //         gap: '2px',
// //         position: isSticky ? 'sticky' : 'static',
// //         top: isSticky ? verticalOffset : 'auto',
// //         zIndex: isSticky ? 10 : 'auto'
// //       }}
// //     >
// //       <style>
// //         {`
// //           @media (max-width: 768px) {
// //             #buttonGroup {
// //               display: none !important;
// //             }
// //           }
// //         `}
// //       </style>
// //       {items.map((item, index) => (
// //         <a
// //           href={item.link}
// //           key={index}
// //           style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             justifyContent: 'space-between',
// //             padding: '12px 12px',
// //             border: `1px solid ${color}`,
// //             borderRadius: '8px',
// //             color: color,
// //             textDecoration: 'none',
// //             backgroundColor: backgroundColor,
// //             maxHeight: '40px',
// //             fontSize: '15px',
// //             width:'130px'
// //           }}
// //         >
// //           <div style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: '12px'
// //           }}>
// //             {item.icon && (
// //               <span style={{
// //                 display: 'flex',
// //                 width: '20px',
// //                 height: '20px'
// //               }}>
// //                 {item.icon}
// //               </span>
// //             )}
// //             <span>{item.title}</span>
// //           </div>
// //           <ChevronRight size={16} />
// //         </a>
// //       ))}
// //     </div>
// //   );
// // };

// // export default VerticalButtonGroup;



// import React from 'react';
// import { ChevronRight } from 'lucide-react';
// import { buttonThemes } from './buttonThemes';

// const VerticalButtonGroup = ({
//   items = [],
//   width = '300px',
//   theme = 'navy',
//   isSticky = false,
//   verticalOffset = '20px'
// }) => {
//   const currentTheme = buttonThemes[theme] || buttonThemes.navy;
  
//   const containerStyle = {
//     width: width,
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '2px',
//     position: isSticky ? 'sticky' : 'static',
//     top: isSticky ? verticalOffset : 'auto',
//     zIndex: isSticky ? 10 : 'auto'
//   };

//   const buttonStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '12px 12px',
//     border: `1px solid ${currentTheme.button.color}`,
//     borderRadius: '8px',
//     color: currentTheme.button.color,
//     textDecoration: 'none',
//     backgroundColor: currentTheme.container.background,
//     maxHeight: '40px',
//     fontSize: '15px',
//     width: '130px',
//     transition: 'all 0.2s ease'
//   };

//   const contentStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px'
//   };

//   const iconStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     width: '20px',
//     height: '20px',
//     color: currentTheme.icon.color
//   };

//   const chevronStyle = {
//     transition: 'color 0.2s ease',
//     color: currentTheme.chevron.color
//   };

//   return (
//     <>
//       <style>
//         {`
//           @media (max-width: 768px) {
//             .themed-vertical-button-group {
//               display: none !important;
//             }
//           }
//           .themed-button-item:hover {
//             background: ${currentTheme.buttonHover.background} !important;
//             border-color: ${currentTheme.buttonHover.borderColor || currentTheme.button.color} !important;
//             transform: translateY(-1px) !important;
//             ${currentTheme.buttonHover.boxShadow ? `box-shadow: ${currentTheme.buttonHover.boxShadow} !important;` : ''}
//           }
//           .themed-button-item:hover .themed-chevron {
//             color: ${currentTheme.chevron.hoverColor} !important;
//           }
//         `}
//       </style>
//       <div className="themed-vertical-button-group" style={containerStyle}>
//         {items.map((item, index) => (
//           <a
//             href={item.link}
//             key={index}
//             className="themed-button-item"
//             style={buttonStyle}
//           >
//             <div style={contentStyle}>
//               {item.icon && (
//                 <span style={iconStyle}>
//                   {item.icon}
//                 </span>
//               )}
//               <span>{item.title}</span>
//             </div>
//             <ChevronRight className="themed-chevron" size={16} style={chevronStyle} />
//           </a>
//         ))}
//       </div>
//     </>
//   );
// };

// export default VerticalButtonGroup;


import React from 'react';
import { ChevronRight } from 'lucide-react';
import { buttonThemes } from './buttonThemes';

const VerticalButtonGroup = ({
  items = [],
  width = '300px',
  theme = 'navy',
  isSticky = false,
  verticalOffset = '20px'
}) => {
  const currentTheme = buttonThemes[theme] || buttonThemes.navy;

  return (
    <div 
      id="buttonGroup"
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: isSticky ? 'sticky' : 'static',
        top: isSticky ? verticalOffset : 'auto',
        zIndex: isSticky ? 10 : 'auto',
        background: currentTheme.container.background,
        padding: '20px',
        borderRadius: currentTheme.container.borderRadius,
        boxShadow: currentTheme.container.boxShadow,
        boxSizing: 'border-box',
        width:width,
      }}
    >
      <style>
        {`
          @media (max-width: 768px) {
            #buttonGroup {
              display: none !important;
            }
          }
        `}
      </style>
      {items.map((item, index) => (
        <a
          href={item.link}
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 12px',
            border: `1px solid ${currentTheme.button.color}`,
            borderRadius: '8px',
            color: currentTheme.button.color,
            textDecoration: 'none',
            backgroundColor: currentTheme.container.background,
            maxHeight: '40px',
            fontSize: '15px'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            {item.icon && (
              <span style={{
                display: 'flex',
                width: '20px',
                height: '20px'
              }}>
                {item.icon}
              </span>
            )}
            <span>{item.title}</span>
          </div>
          <ChevronRight size={16} />
        </a>
      ))}
    </div>
  );
};

export default VerticalButtonGroup;