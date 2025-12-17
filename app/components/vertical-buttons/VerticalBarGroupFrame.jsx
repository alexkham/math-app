{/* <ContentSidebarFrame
  sidebarPosition="left"  // or "right"
  sidebarWidth="250px"
  gap="20px"
  sidebar={<VerticalButtonGroup {...props} />}
  mainContent={<GenericMultiComponentFrame {...props} />}
/> */}



// import React from 'react';

// const VerticalSidebarFrame = ({ 
//   mainContent, 
//   sidebar, 
//   sidebarPosition = 'left',
//   gap = '20px',
//   sidebarWidth = '250px'
// }) => {
//   return (
//     <div style={{
//       display: 'flex',
//       gap: gap,
//       alignItems: 'flex-start',
//       flexDirection: sidebarPosition === 'right' ? 'row' : 'row'
//     }}>
//       {sidebarPosition === 'left' && (
//         <div style={{
//           width: sidebarWidth,
//           flexShrink: 0
//         }}>
//           {sidebar}
//         </div>
//       )}
      
//       <div style={{ flex: 1 }}>
//         {mainContent}
//       </div>
      
//       {sidebarPosition === 'right' && (
//         <div style={{
//           width: sidebarWidth,
//           flexShrink: 0
//         }}>
//           {sidebar}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VerticalSidebarFrame;


// import React from 'react';

// const VerticalSidebarFrame = ({ 
//   mainContent, 
//   sidebar, 
//   sidebarPosition = 'left',
//   gap = '20px',
//   sidebarWidth = '250px'
// }) => {
//   return (
//     <div style={{
//       display: 'flex',
//       gap: gap,
//       alignItems: 'flex-start',
//       flexDirection: sidebarPosition === 'right' ? 'row' : 'row'
//     }}>
//       {sidebarPosition === 'left' && (
//         <div style={{
//           width: sidebarWidth,
//           flexShrink: 0
//         }}>
//           {sidebar}
//         </div>
//       )}
      
//       <div style={{ flex: 1 }}>
//         {mainContent}
//       </div>
      
//       {sidebarPosition === 'right' && (
//         <div style={{
//           width: sidebarWidth,
//           flexShrink: 0
//         }}>
//           {sidebar}
//         </div>
//       )}
//     </div>
//   );
// };

// export default VerticalSidebarFrame;


import React from 'react';

const VerticalSidebarFrame = ({ 
  mainContent, 
  sidebar, 
  sidebarPosition = 'left',
  gap = '20px'
}) => {
  return (
    <div style={{
      display: 'flex',
      gap: gap,
      alignItems: 'flex-start'
    }}>
      {sidebarPosition === 'left' && sidebar}
      
      <div style={{ flex: 1 }}>
        {mainContent}
      </div>
      
      {sidebarPosition === 'right' && sidebar}
    </div>
  );
};

export default VerticalSidebarFrame;