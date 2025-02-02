

// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import styles from './OperaSidebar.module.css';
// import { mainSidebarMenu } from './mainSidebarMenu';

// export default function OperaSidebar({
//   topOffset = '55px',
//   sidebarWidth = '64px',
//   panelWidth = '300px',
//   backgroundColor = '#1f2937',
//   panelBackgroundColor = '#ffffff',
//   iconColor = 'white',
//   sidebarItems = mainSidebarMenu,
//   side = 'left'
// }) {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleClose = () => {
//     setActiveItem(null);
//   };

//   const renderIcon = (Icon) => {
//     if (React.isValidElement(Icon)) {
//       return React.cloneElement(Icon, { className: styles.icon, color: iconColor, size: 24 });
//     }
//     if (typeof Icon === 'function') {
//       return <Icon className={styles.icon} color={iconColor} size={24} />;
//     }
//     return null;
//   };

//   const renderContent = (Content) => {
//     if (Array.isArray(Content)) {
//       return (
//         <ul className={styles.linkList}>
//           {Content.map((item, index) => (
//             <li key={index}>
//               <a href={item.url}>{item.text}</a>
//             </li>
//           ))}
//         </ul>
//       );
//     }
//     if (React.isValidElement(Content)) {
//       return Content;
//     }
//     if (typeof Content === 'function') {
//       return <Content />;
//     }
//     if (typeof Content === 'string') {
//       return <p>{Content}</p>;
//     }
//     return null;
//   };

//   const sidebarStyle = {
//     top: topOffset,
//     width: sidebarWidth,
//     backgroundColor,
//     [side]: 0
//   };

//   const panelStyle = {
//     top: topOffset,
//     width: panelWidth,
//     backgroundColor: panelBackgroundColor,
//     [side]: sidebarWidth
//   };

//   const tooltipStyle = {
//     [side === 'left' ? 'left' : 'right']: '100%',
//     [side === 'left' ? 'marginLeft' : 'marginRight']: '0.5rem'
//   };

//   const closeButtonStyle = {
//     position: 'absolute',
//     top: '0.1rem',
//     [side === 'left' ? 'right' : 'left']: side === 'left' ? '0.5rem' : '-10rem',
    
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.sidebar} style={sidebarStyle}>
//         {sidebarItems.map((item) => (
//           <div
//             key={item.id}
//             className={styles.sidebarItem}
//             onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
//           >
//             <div className={`${styles.iconWrapper} ${activeItem === item.id ? styles.active : ''}`}>
//               {renderIcon(item.icon)}
//             </div>
//             <span className={styles.tooltip} style={tooltipStyle}>{item.tooltip}</span>
//           </div>
//         ))}
//       </div>
//       {activeItem && (
//         <div className={styles.panel} style={panelStyle}>
//           <button className={styles.closeButton} style={closeButtonStyle} onClick={handleClose}>
//             <X size={16} />
//           </button>
//           <h2 className={styles.panelTitle}>
//             {sidebarItems.find(item => item.id === activeItem)?.tooltip}
//           </h2>
//           <div className={styles.panelContent}>
//             {renderContent(sidebarItems.find(item => item.id === activeItem)?.content)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState } from 'react';
// import { X } from 'lucide-react';
// import styles from './OperaSidebar.module.css';
// import { mainSidebarMenu } from './mainSidebarMenu';
// import { normalizeUrl } from '@/app/utils/url-utils';

// export default function OperaSidebar({
//   topOffset = '55px',
//   sidebarWidth = '64px',
//   panelWidth = '300px',
//   backgroundColor = '#1f2937',
//   panelBackgroundColor = '#ffffff',
//   iconColor = 'white',
//   sidebarItems = mainSidebarMenu,
//   side = 'left'
// }) {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleClose = () => {
//     setActiveItem(null);
//   };

//   const renderIcon = (Icon) => {
//     if (React.isValidElement(Icon)) {
//       return React.cloneElement(Icon, { className: styles.icon, color: iconColor, size: 24 });
//     }
//     if (typeof Icon === 'function') {
//       return <Icon className={styles.icon} color={iconColor} size={24} />;
//     }
//     return null;
//   };

//   const renderContent = (Content) => {
//     if (Array.isArray(Content)) {
//       return (
//         <ul className={styles.linkList}>
//           {Content.map((item, index) => (
//             <li key={index}>
//               <a href={normalizeUrl(item.url)}>{item.text}</a>
//             </li>
//           ))}
//         </ul>
//       );
//     }
//     if (React.isValidElement(Content)) {
//       return Content;
//     }
//     if (typeof Content === 'function') {
//       return <Content />;
//     }
//     if (typeof Content === 'string') {
//       return <p>{Content}</p>;
//     }
//     return null;
//   };

//   const sidebarStyle = {
//     top: topOffset,
//     width: sidebarWidth,
//     backgroundColor,
//     [side]: 0
//   };

//   const panelStyle = {
//     top: topOffset,
//     width: panelWidth,
//     backgroundColor: panelBackgroundColor,
//     [side]: sidebarWidth
//   };

//   const tooltipStyle = {
//     [side === 'left' ? 'left' : 'right']: '100%',
//     [side === 'left' ? 'marginLeft' : 'marginRight']: '0.5rem'
//   };

//   const closeButtonStyle = {
//     position: 'absolute',
//     top: '0.1rem',
//     [side === 'left' ? 'right' : 'left']: side === 'left' ? '0.5rem' : '-10rem',
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.sidebar} style={sidebarStyle}>
//         {sidebarItems.map((item) => (
//           <div
//             key={item.id}
//             className={styles.sidebarItem}
//             onClick={() => setActiveItem(activeItem === item.id ? null : item.id)}
//           >
//             <div className={`${styles.iconWrapper} ${activeItem === item.id ? styles.active : ''}`}>
//               {renderIcon(item.icon)}
//             </div>
//             <span className={styles.tooltip} style={tooltipStyle}>{item.tooltip}</span>
//           </div>
//         ))}
//       </div>
//       {activeItem && (
//         <div className={styles.panel} style={panelStyle}>
//           <button className={styles.closeButton} style={closeButtonStyle} onClick={handleClose}>
//             <X size={16} />
//           </button>
//           <h2 className={styles.panelTitle}>
//             {sidebarItems.find(item => item.id === activeItem)?.tooltip}
//           </h2>
//           <div className={styles.panelContent}>
//             {renderContent(sidebarItems.find(item => item.id === activeItem)?.content)}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from './OperaSidebar.module.css';
import { mainSidebarMenu } from './mainSidebarMenu';
import { normalizeUrl } from '@/app/utils/url-utils';

export default function OperaSidebar({
  topOffset = '55px',
  sidebarWidth = '64px',
  panelWidth = '300px',
  backgroundColor = '#1f2937',
  panelBackgroundColor = '#ffffff',
  iconColor = 'white',
  sidebarItems = mainSidebarMenu,
  side = 'left'
}) {
  const [activeItem, setActiveItem] = useState(null);

  const handleClose = () => {
    setActiveItem(null);
  };

  const renderIcon = (Icon) => {
    if (React.isValidElement(Icon)) {
      return React.cloneElement(Icon, { className: styles.icon, color: iconColor, size: 24 });
    }
    if (typeof Icon === 'function') {
      return <Icon className={styles.icon} color={iconColor} size={24} />;
    }
    return null;
  };

  const renderContent = (Content) => {
    if (Array.isArray(Content)) {
      console.log('🚨 SIDEBAR DEBUG 🚨');
      console.log('Processing menu content:', Content);
      return (
        <ul className={styles.linkList}>
          {Content.map((item, index) => {
            console.log(`Processing item ${index}:`, {
              originalUrl: item.url,
              isRelative: item.url.startsWith('/'),
              normalizedUrl: normalizeUrl(item.url),
              text: item.text
            });
            return (
              <li key={index}>
                <a href={normalizeUrl(item.url)}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      );
    }
    if (React.isValidElement(Content)) {
      return Content;
    }
    if (typeof Content === 'function') {
      return <Content />;
    }
    if (typeof Content === 'string') {
      return <p>{Content}</p>;
    }
    return null;
  };

  const sidebarStyle = {
    top: topOffset,
    width: sidebarWidth,
    backgroundColor,
    [side]: 0
  };

  const panelStyle = {
    top: topOffset,
    width: panelWidth,
    backgroundColor: panelBackgroundColor,
    [side]: sidebarWidth
  };

  const tooltipStyle = {
    [side === 'left' ? 'left' : 'right']: '100%',
    [side === 'left' ? 'marginLeft' : 'marginRight']: '0.5rem'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '0.1rem',
    [side === 'left' ? 'right' : 'left']: side === 'left' ? '0.5rem' : '-10rem',
  };

  // Added debug log when item becomes active
  const handleItemClick = (itemId) => {
    console.log('Item clicked:', {
      itemId,
      content: sidebarItems.find(item => item.id === itemId)?.content
    });
    setActiveItem(activeItem === itemId ? null : itemId);
  };


  // const handleItemClick = (itemId) => {
  //   console.log('Any click works');  // Add this
  //   console.log('Item clicked:', {
  //     itemId,
  //     content: sidebarItems.find(item => item.id === itemId)?.content
  //   });}

  return (
    <div className={styles.container}>
      <div className={styles.sidebar} style={sidebarStyle}>
        {sidebarItems.map((item) => (
          <div
            key={item.id}
            className={styles.sidebarItem}
            onClick={() => handleItemClick(item.id)}
          >
            <div className={`${styles.iconWrapper} ${activeItem === item.id ? styles.active : ''}`}>
              {renderIcon(item.icon)}
            </div>
            <span className={styles.tooltip} style={tooltipStyle}>{item.tooltip}</span>
          </div>
        ))}
      </div>
      {activeItem && (
        <div className={styles.panel} style={panelStyle}>
          <button className={styles.closeButton} style={closeButtonStyle} onClick={handleClose}>
            <X size={16} />
          </button>
          <h2 className={styles.panelTitle}>
            {sidebarItems.find(item => item.id === activeItem)?.tooltip}
          </h2>
          <div className={styles.panelContent}>
            {renderContent(sidebarItems.find(item => item.id === activeItem)?.content)}
          </div>
        </div>
      )}
    </div>
  );
}