

// import React from 'react';
// import { ChevronRight } from 'lucide-react';

// const VerticalButtonGroup = ({ 
//   items = [], 
//   width = '250px',
//   backgroundColor = '#f3f4f6',
//   color = '#448af4',
//   isSticky = false,
//   verticalOffset = '20px'
// }) => {
//   const styles = {
//     buttonGroup: {
//       width: width,
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '2px',
//       position: isSticky ? 'sticky' : 'static',
//       top: isSticky ? verticalOffset : 'auto',
//       zIndex: isSticky ? 10 : 'auto'
//     },
//     buttonItem: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: '12px 16px',
//       border: `1px solid ${color}`,
//       borderRadius: '8px',
//       color: color,
//       textDecoration: 'none',
//       backgroundColor: backgroundColor,
//       maxHeight:'40px',
//       fontSize:'14px'
      
//     },
//     buttonContent: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '12px'
//     },
//     icon: {
//       display: 'flex',
//       width: '20px',
//       height: '20px'
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
         
          
//           @media screen and (max-width: 768px) {
//             .buttonContent{
//               display: none;
//             }
//           }
//         `}
//       </style>
//     <div id='main-div' style={styles.buttonGroup}>
//       {items.map((item, index) => (
//         <a 
//           href={item.link} 
//           key={index}
//           style={{
//             ...styles.buttonItem,
//             ':hover': {
//               backgroundColor: backgroundColor,
//               boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//             }
//           }}
//         >
//           <div style={styles.buttonContent}>
//             {item.icon && <span style={styles.icon}>{item.icon}</span>}
//             <span>{item.title}</span>
//           </div>
//           <ChevronRight size={16} />
//         </a>
//       ))}
//     </div>
//     </>
//   );
// };

// export default VerticalButtonGroup;

import React from 'react';
import { ChevronRight } from 'lucide-react';

const VerticalButtonGroup = ({
  items = [],
  width = '250px',
  backgroundColor = '#f3f4f6',
  color = '#448af4',
  isSticky = false,
  verticalOffset = '20px'
}) => {
  return (
    <div 
      id="buttonGroup"
      style={{
        width: width,
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        position: isSticky ? 'sticky' : 'static',
        top: isSticky ? verticalOffset : 'auto',
        zIndex: isSticky ? 10 : 'auto'
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
            padding: '12px 16px',
            border: `1px solid ${color}`,
            borderRadius: '8px',
            color: color,
            textDecoration: 'none',
            backgroundColor: backgroundColor,
            maxHeight: '40px',
            fontSize: '14px'
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