

// 'use client';
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
//           {Content.map((item, index) => {
//             console.log(`Processing item ${index}:`, {
//               originalUrl: item.url,
//               isRelative: item.url.startsWith('/'),
//               normalizedUrl: normalizeUrl(item.url),
//               text: item.text
//             });
//             return (
//               <li key={index}>
//                 <a href={normalizeUrl(item.url)}>{item.text}</a>
//               </li>
//             );
//           })}
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

//   // Added debug log when item becomes active
//   const handleItemClick = (itemId) => {
   
//     setActiveItem(activeItem === itemId ? null : itemId);
//   };



//   return (
//     <div className={styles.container}>
//       <div className={styles.sidebar} style={sidebarStyle}>
//         {sidebarItems.map((item) => (
//           <div
//             key={item.id}
//             className={styles.sidebarItem}
//             onClick={() => handleItemClick(item.id)}
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




'use client';
import React, { useState } from 'react';
import { X, Menu } from 'lucide-react';
import styles from './OperaSidebar.module.css';
import { mainSidebarMenu } from './mainSidebarMenu';
import { normalizeUrl } from '@/app/utils/url-utils';
import { useMediaQuery } from '@/app/hooks/useMediaQuery';
import { mediaQuery } from '@/app/lib/breakpoints';

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
  const isMobile = useMediaQuery(mediaQuery.tabletDown);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sidebarVisible = !isMobile || mobileOpen;

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
    [side]: 0,
    transform: sidebarVisible ? 'translateX(0)' : `translateX(${side === 'left' ? '-100%' : '100%'})`,
    transition: 'transform 0.25s ease',
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
   
    setActiveItem(activeItem === itemId ? null : itemId);
  };



  return (
    <div className={styles.container}>
      {isMobile && (
        <button
          type="button"
          aria-label={mobileOpen ? 'Hide side menu' : 'Show side menu'}
          aria-expanded={mobileOpen}
          onClick={() => {
            if (mobileOpen && activeItem) setActiveItem(null);
            setMobileOpen(!mobileOpen);
          }}
          style={{
            position: 'fixed',
            top: topOffset,
            [side]: 0,
            width: '40px',
            height: '40px',
            background: backgroundColor,
            color: iconColor,
            border: 'none',
            borderRadius: side === 'left' ? '0 6px 6px 0' : '6px 0 0 6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 3100,
            boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      )}
      <div className={`${styles.sidebar} ${mobileOpen ? styles.sidebarMobileVisible : ''}`} style={sidebarStyle}>
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