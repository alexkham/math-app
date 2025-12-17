

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

//   // Check if items are grouped (has title and items properties)
//   const isGrouped = items.length > 0 && items[0].hasOwnProperty('title') && items[0].hasOwnProperty('items');

//   const renderButton = (item, index) => (
//     <a
//       href={item.link}
//       key={index}
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '12px 12px',
//         border: `1px solid ${currentTheme.button.color}`,
//         borderRadius: '8px',
//         color: currentTheme.button.color,
//         textDecoration: 'none',
//         backgroundColor: currentTheme.container.background,
//         maxHeight: '40px',
//         fontSize: '15px'
//       }}
//     >
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '12px'
//       }}>
//         {item.icon && (
//           <span style={{
//             display: 'flex',
//             width: '20px',
//             height: '20px'
//           }}>
//             {item.icon}
//           </span>
//         )}
//         <span>{item.title}</span>
//       </div>
//       <ChevronRight size={16} />
//     </a>
//   );

//   const renderGroupTitle = (title) => (
//     <h3 style={{
//       margin: '0 0 8px 0',
//       fontSize: '14px',
//       fontWeight: '600',
//       color: currentTheme.button.color,
//       textTransform: 'uppercase',
//       letterSpacing: '0.5px',
//       paddingLeft: '4px'
//     }}>
//       {title}
//     </h3>
//   );

//   return (
//     <div 
//       id="buttonGroup"
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '8px',
//         position: isSticky ? 'sticky' : 'static',
//         top: isSticky ? verticalOffset : 'auto',
//         zIndex: isSticky ? 10 : 'auto',
//         background: currentTheme.container.background,
//         padding: '20px',
//         borderRadius: currentTheme.container.borderRadius,
//         boxShadow: currentTheme.container.boxShadow,
//         boxSizing: 'border-box',
//         width: width,
//       }}
//     >
//       <style>
//         {`
//           @media (max-width: 768px) {
//             #buttonGroup {
//               display: none !important;
//             }
//           }
//         `}
//       </style>
      
//       {isGrouped ? (
//         // Render grouped items
//         items.map((group, groupIndex) => (
//           <div key={groupIndex} style={{ marginBottom: '16px' }}>
//             {renderGroupTitle(group.title)}
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//               {group.items.map((item, itemIndex) => renderButton(item, `${groupIndex}-${itemIndex}`))}
//             </div>
//           </div>
//         ))
//       ) : (
//         // Render simple flat items
//         items.map((item, index) => renderButton(item, index))
//       )}
//     </div>
//   );
// };

// export default VerticalButtonGroup;





//docs

// With both primary items and sitemap
{/* <VerticalButtonGroup
  items={primaryItems}
  sitemapPath="/probability"
  sitemapGroupTitle="All Probability Tools"
/>

// Only sitemap links
<VerticalButtonGroup
  sitemapPath="/probability"
  sitemapGroupTitle="Probability Tools"
/> */}




import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { buttonThemes } from './buttonThemes';

const VerticalButtonGroup = ({
  items = [],
  width = '300px',
  theme = 'navy',
  isSticky = false,
  verticalOffset = '20px',
  sitemapPath = null,
  sitemapGroupTitle = 'Related Pages'
}) => {
  const [sitemapLinks, setSitemapLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const currentTheme = buttonThemes[theme] || buttonThemes.navy;

  useEffect(() => {
    if (!sitemapPath) return;

    const fetchSitemapLinks = async () => {
      setLoading(true);
      try {
        const response = await fetch('/sitemap.xml');
        const xmlText = await response.text();
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const urlElements = xmlDoc.getElementsByTagName('url');
        const links = [];
        
        for (let i = 0; i < urlElements.length; i++) {
          const locElement = urlElements[i].getElementsByTagName('loc')[0];
          if (locElement) {
            const url = locElement.textContent;
            
            const urlObj = new URL(url);
            const path = urlObj.pathname;
            
            if (path.startsWith(sitemapPath)) {
              const segments = path.split('/').filter(Boolean);
              const lastSegment = segments[segments.length - 1];
              const title = lastSegment
                .split('-')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              
              links.push({
                title: title,
                link: path
              });
            }
          }
        }
        
        setSitemapLinks(links);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
        setSitemapLinks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSitemapLinks();
  }, [sitemapPath]);

  const isGrouped = items.length > 0 && items[0].hasOwnProperty('title') && items[0].hasOwnProperty('items');

  const renderButton = (item, index) => (
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
  );

  const renderGroupTitle = (title) => (
    <h3 style={{
      margin: '0 0 8px 0',
      fontSize: '14px',
      fontWeight: '600',
      color: currentTheme.button.color,
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      paddingLeft: '4px'
    }}>
      {title}
    </h3>
  );

  const renderSitemapGroup = () => {
    if (!sitemapPath || sitemapLinks.length === 0) return null;
    
    return (
      <div style={{ marginBottom: '16px' }}>
        {renderGroupTitle(sitemapGroupTitle)}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {sitemapLinks.map((item, index) => renderButton(item, `sitemap-${index}`))}
        </div>
      </div>
    );
  };

  const hasPrimaryItems = items.length > 0;

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
        width: width,
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
      
      {loading && (
        <div style={{ 
          fontSize: '14px', 
          color: currentTheme.button.color,
          padding: '12px',
          textAlign: 'center'
        }}>
          Loading...
        </div>
      )}

      {hasPrimaryItems && isGrouped ? (
        <>
          {items.map((group, groupIndex) => (
            <div key={groupIndex} style={{ marginBottom: '16px' }}>
              {renderGroupTitle(group.title)}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {group.items.map((item, itemIndex) => renderButton(item, `${groupIndex}-${itemIndex}`))}
              </div>
            </div>
          ))}
          {renderSitemapGroup()}
        </>
      ) : hasPrimaryItems ? (
        <>
          {items.map((item, index) => renderButton(item, index))}
          {renderSitemapGroup()}
        </>
      ) : (
        renderSitemapGroup()
      )}
    </div>
  );
};

export default VerticalButtonGroup;