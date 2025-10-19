// // import { useState } from 'react';
// // import { themes } from './themes';

// // export default function AcademicList({
// //   items = [],
// //   showNumbering = true,
// //   theme = 'modern',
// //   heading = 'Reading List',
// //   subheading = null,
// //   onItemClick = null,
// //   onItemHover = null,
// //   className = '',
// //   style = {},
// //   id = null
// // }) {
// //   const [hoveredId, setHoveredId] = useState(null);
  
// //   const currentTheme = themes[theme] || themes.modern;

// //   const handleItemClick = (item, index) => {
// //     if (onItemClick) {
// //       onItemClick(item, index);
// //     }
// //   };

// //   const handleItemHover = (item, index, isHovering) => {
// //     if (onItemHover) {
// //       onItemHover(item, index, isHovering);
// //     }
// //   };

// //   const renderBorderedTheme = () => (
// //     <div 
// //       style={{ ...currentTheme.container, ...style }} 
// //       className={className}
// //       id={id}
// //     >
// //       <h1 style={currentTheme.heading}>{heading}</h1>
// //       {subheading && <p style={currentTheme.subheading}>{subheading}</p>}
      
// //       <div style={currentTheme.listContainer}>
// //         {items.map((item, index) => (
// //           <div
// //             key={item.id || index}
// //             style={{
// //               ...currentTheme.listItem,
// //               ...(hoveredId === item.id ? currentTheme.listItemHover : {})
// //             }}
// //             onMouseEnter={() => {
// //               setHoveredId(item.id);
// //               handleItemHover(item, index, true);
// //             }}
// //             onMouseLeave={() => {
// //               setHoveredId(null);
// //               handleItemHover(item, index, false);
// //             }}
// //             onClick={() => handleItemClick(item, index)}
// //           >
// //             <div style={currentTheme.leftBorder}></div>
// //             {showNumbering && (
// //               <div style={currentTheme.numberBox}>
// //                 <span style={currentTheme.number}>
// //                   {String(index + 1).padStart(2, '0')}
// //                 </span>
// //               </div>
// //             )}
// //             <div style={currentTheme.content}>
// //               <div style={currentTheme.header}>
// //                 <h3 style={currentTheme.title}>{item.title}</h3>
// //                 <span style={currentTheme.year}>{item.year}</span>
// //               </div>
// //               <p style={currentTheme.author}>{item.author}</p>
// //               <p style={currentTheme.description}>{item.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   const renderSlateTheme = () => (
// //     <div 
// //       style={{ ...currentTheme.container, ...style }} 
// //       className={className}
// //       id={id}
// //     >
// //       <div>
// //         <h1 style={currentTheme.heading}>{heading}</h1>
// //         {subheading && <p style={currentTheme.subheading}>{subheading}</p>}
// //         <div style={currentTheme.headingUnderline}></div>
// //       </div>
      
// //       <div style={currentTheme.listContainer}>
// //         {items.map((item, index) => (
// //           <div
// //             key={item.id || index}
// //             style={{
// //               ...currentTheme.listItem,
// //               ...(hoveredId === item.id ? currentTheme.listItemHover : {})
// //             }}
// //             onMouseEnter={() => {
// //               setHoveredId(item.id);
// //               handleItemHover(item, index, true);
// //             }}
// //             onMouseLeave={() => {
// //               setHoveredId(null);
// //               handleItemHover(item, index, false);
// //             }}
// //             onClick={() => handleItemClick(item, index)}
// //           >
// //             <div style={currentTheme.cardTop}>
// //               {showNumbering && (
// //                 <div style={currentTheme.numberCircle}>
// //                   {index + 1}
// //                 </div>
// //               )}
// //               <span style={currentTheme.yearTag}>{item.year}</span>
// //             </div>
// //             <div style={currentTheme.cardContent}>
// //               <h3 style={currentTheme.title}>{item.title}</h3>
// //               <p style={currentTheme.author}>{item.author}</p>
// //               <p style={currentTheme.description}>{item.description}</p>
// //             </div>
// //             <div style={currentTheme.bottomAccent}></div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   const renderModernTheme = () => (
// //     <div 
// //       style={{ ...currentTheme.container, ...style }} 
// //       className={className}
// //       id={id}
// //     >
// //       <h1 style={currentTheme.heading}>{heading}</h1>
// //       {subheading && <p style={currentTheme.subheading}>{subheading}</p>}
// //       <div style={currentTheme.headingLine}></div>
      
// //       <div style={currentTheme.listContainer}>
// //         {items.map((item, index) => (
// //           <div
// //             key={item.id || index}
// //             style={{
// //               ...currentTheme.listItem,
// //               ...(hoveredId === item.id ? currentTheme.listItemHover : {})
// //             }}
// //             onMouseEnter={() => {
// //               setHoveredId(item.id);
// //               handleItemHover(item, index, true);
// //             }}
// //             onMouseLeave={() => {
// //               setHoveredId(null);
// //               handleItemHover(item, index, false);
// //             }}
// //             onClick={() => handleItemClick(item, index)}
// //           >
// //             {showNumbering && (
// //               <div style={currentTheme.numberCircle}>
// //                 <span style={currentTheme.number}>{index + 1}</span>
// //               </div>
// //             )}
// //             <div style={currentTheme.content}>
// //               <div style={currentTheme.topBar}></div>
// //               <div style={currentTheme.innerContent}>
// //                 <div style={currentTheme.titleRow}>
// //                   <h3 style={currentTheme.title}>{item.title}</h3>
// //                   <span style={currentTheme.yearBadge}>{item.year}</span>
// //                 </div>
// //                 <p style={currentTheme.author}>{item.author}</p>
// //                 <p style={currentTheme.description}>{item.description}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );

// //   if (theme === 'bordered') {
// //     return renderBorderedTheme();
// //   } else if (theme === 'slate') {
// //     return renderSlateTheme();
// //   } else {
// //     return renderModernTheme();
// //   }
// // }



// import { useState } from 'react';
// import { themes } from './themes';
// import { processContent } from '@/app/utils/contentProcessor';

// export default function AcademicList({
//   items = [],
//   showNumbering = true,
//   theme = 'modern',
//   heading = 'Reading List',
//   subheading = null,
//   onItemClick = null,
//   onItemHover = null,
//   className = '',
//   style = {},
//   id = null
// }) {
//   const [hoveredId, setHoveredId] = useState(null);
//   const [hoveredLinkId, setHoveredLinkId] = useState(null);
  
//   const currentTheme = themes[theme] || themes.modern;

//   const handleItemClick = (item, index) => {
//     if (onItemClick) {
//       onItemClick(item, index);
//     }
//   };

//   const handleItemHover = (item, index, isHovering) => {
//     if (onItemHover) {
//       onItemHover(item, index, isHovering);
//     }
//   };

//   const renderLink = (item) => {
//     if (!item.link) return null;
    
//     return (
//       <a
//         href={item.linkUrl || '#'}
//         style={{
//           ...currentTheme.link,
//           ...(hoveredLinkId === item.id ? currentTheme.linkHover : {})
//         }}
//         onMouseEnter={() => setHoveredLinkId(item.id)}
//         onMouseLeave={() => setHoveredLinkId(null)}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {item.link}
//       </a>
//     );
//   };

//   const renderBorderedTheme = () => (
//     <div 
//       style={{ ...currentTheme.container, ...style }} 
//       className={className}
//       id={id}
//     >
//       <h1 style={currentTheme.heading}>{heading}</h1>
//       {subheading && <p style={currentTheme.subheading}>{subheading}</p>}
      
//       <div style={currentTheme.listContainer}>
//         {items.map((item, index) => (
//           <div
//             key={item.id || index}
//             style={{
//               ...currentTheme.listItem,
//               ...(hoveredId === item.id ? currentTheme.listItemHover : {})
//             }}
//             onMouseEnter={() => {
//               setHoveredId(item.id);
//               handleItemHover(item, index, true);
//             }}
//             onMouseLeave={() => {
//               setHoveredId(null);
//               handleItemHover(item, index, false);
//             }}
//             onClick={() => handleItemClick(item, index)}
//           >
//             <div style={currentTheme.leftBorder}></div>
//             {showNumbering && (
//               <div style={currentTheme.numberBox}>
//                 <span style={currentTheme.number}>
//                   {String(index + 1).padStart(2, '0')}
//                 </span>
//               </div>
//             )}
//             <div style={currentTheme.content}>
//               <div style={currentTheme.header}>
//                 <h3 style={currentTheme.title}>{item.title}</h3>
//                 <span style={currentTheme.year}>{item.year}</span>
//               </div>
//               <p style={currentTheme.author}>{item.author}</p>
//               <p style={currentTheme.description}>{item.description}</p>
//               {renderLink(item)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderSlateTheme = () => (
//     <div 
//       style={{ ...currentTheme.container, ...style }} 
//       className={className}
//       id={id}
//     >
//       <div>
//         <h1 style={currentTheme.heading}>{heading}</h1>
//         {subheading && <p style={currentTheme.subheading}>{subheading}</p>}
//         <div style={currentTheme.headingUnderline}></div>
//       </div>
      
//       <div style={currentTheme.listContainer}>
//         {items.map((item, index) => (
//           <div
//             key={item.id || index}
//             style={{
//               ...currentTheme.listItem,
//               ...(hoveredId === item.id ? currentTheme.listItemHover : {})
//             }}
//             onMouseEnter={() => {
//               setHoveredId(item.id);
//               handleItemHover(item, index, true);
//             }}
//             onMouseLeave={() => {
//               setHoveredId(null);
//               handleItemHover(item, index, false);
//             }}
//             onClick={() => handleItemClick(item, index)}
//           >
//             <div style={currentTheme.cardTop}>
//               {showNumbering && (
//                 <div style={currentTheme.numberCircle}>
//                   {index + 1}
//                 </div>
//               )}
//               <span style={currentTheme.yearTag}>{item.year}</span>
//             </div>
//             <div style={currentTheme.cardContent}>
//               <h3 style={currentTheme.title}>{item.title}</h3>
//               <p style={currentTheme.author}>{item.author}</p>
//               <p style={currentTheme.description}>{item.description}</p>
//               {renderLink(item)}
//             </div>
//             <div style={currentTheme.bottomAccent}></div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   const renderModernTheme = () => (
//     <div 
//       style={{ ...currentTheme.container, ...style }} 
//       className={className}
//       id={id}
//     >
//       <h1 style={currentTheme.heading}>{heading}</h1>
//       {subheading && <p style={currentTheme.subheading}>{subheading}</p>}
//       <div style={currentTheme.headingLine}></div>
      
//       <div style={currentTheme.listContainer}>
//         {items.map((item, index) => (
//           <div
//             key={item.id || index}
//             style={{
//               ...currentTheme.listItem,
//               ...(hoveredId === item.id ? currentTheme.listItemHover : {})
//             }}
//             onMouseEnter={() => {
//               setHoveredId(item.id);
//               handleItemHover(item, index, true);
//             }}
//             onMouseLeave={() => {
//               setHoveredId(null);
//               handleItemHover(item, index, false);
//             }}
//             onClick={() => handleItemClick(item, index)}
//           >
//             {showNumbering && (
//               <div style={currentTheme.numberCircle}>
//                 <span style={currentTheme.number}>{index + 1}</span>
//               </div>
//             )}
//             <div style={currentTheme.content}>
//               <div style={currentTheme.topBar}></div>
//               <div style={currentTheme.innerContent}>
//                 <div style={currentTheme.titleRow}>
//                   <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
//                   <span style={currentTheme.yearBadge}>{processContent(item.year)}</span>
//                 </div>
//                 <p style={currentTheme.author}>{processContent(item.author)}</p>
//                 <p style={currentTheme.description}>{processContent(item.description)}</p>
//                 {renderLink(item)}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   if (theme === 'bordered') {
//     return renderBorderedTheme();
//   } else if (theme === 'slate') {
//     return renderSlateTheme();
//   } else {
//     return renderModernTheme();
//   }
// }



/**
 * AcademicList Component
 * 
 * A flexible, themeable list component for displaying academic content such as reading lists,
 * publications, or bibliographies with various visual styles.
 * 
 * @param {Array} items - Array of item objects to display. Each item should have:
 *   - {string} id - Unique identifier for the item (optional, falls back to index)
 *   - {string} title - The title of the item (required)
 *   - {string} author - The author(s) of the item (required)
 *   - {string} year - Publication year or date (required)
 *   - {string} description - Description or summary of the item (required)
 *   - {string} link - Link text to display (optional)
 *   - {string} linkUrl - URL for the link (optional, defaults to '#')
 * 
 * @param {boolean} showNumbering - Whether to display numbered items (default: true)
 * 
 * @param {string} theme - Theme name to apply. Available themes:
 *   - 'modern' (default) - Clean design with gradient accents and circular numbers
 *   - 'bordered' - Structured layout with left border and numbered boxes
 *   - 'slate' - Card-based design with bottom accent gradient
 *   - 'accent' - Minimalist with left border accent
 *   - 'card' - Elevated card design with shadows
 *   - 'classic' - Traditional serif typography with underline separators
 * 
 * @param {string} heading - Main heading text for the list (default: 'Reading List')
 * 
 * @param {string} subheading - Optional subheading text below the main heading (default: null)
 * 
 * @param {function} onItemClick - Callback function when an item is clicked
 *   Receives: (item, index) => void
 * 
 * @param {function} onItemHover - Callback function when an item is hovered
 *   Receives: (item, index, isHovering) => void
 * 
 * @param {string} className - Additional CSS class names to apply to the container (default: '')
 * 
 * @param {object} style - Additional inline styles to apply to the container (default: {})
 * 
 * @param {string} id - HTML id attribute for the container element (default: null)
 * 
 * @example
 * <AcademicList
 *   items={[
 *     {
 *       id: '1',
 *       title: 'The Structure of Scientific Revolutions',
 *       author: 'Thomas S. Kuhn',
 *       year: '1962',
 *       description: 'A landmark in intellectual history...',
 *       link: 'Read More',
 *       linkUrl: 'https://example.com'
 *     }
 *   ]}
 *   theme="modern"
 *   heading="Essential Reading"
 *   showNumbering={true}
 *   onItemClick={(item, index) => console.log('Clicked:', item)}
 * />
 */

// import { useState } from 'react';
// import { themes } from './themes';
// import { processContent } from '@/app/utils/contentProcessor';

// export default function AcademicList({
//   items = [],
//   showNumbering = true,
//   theme = 'modern',
//   heading = 'Reading List',
//   subheading = null,
//   onItemClick = null,
//   onItemHover = null,
//   className = '',
//   style = {},
//   id = null
// }) {
//   const [hoveredId, setHoveredId] = useState(null);
//   const [hoveredLinkId, setHoveredLinkId] = useState(null);
  
//   const currentTheme = themes[theme] || themes.modern;

//   const handleItemClick = (item, index) => {
//     if (onItemClick) {
//       onItemClick(item, index);
//     }
//   };

//   const handleItemHover = (item, index, isHovering) => {
//     if (onItemHover) {
//       onItemHover(item, index, isHovering);
//     }
//   };

//   const renderLink = (item) => {
//     if (!item.link) return null;
    
//     return (
//       <a
//         href={item.linkUrl || '#'}
//         style={{
//           ...currentTheme.link,
//           ...(hoveredLinkId === item.id ? currentTheme.linkHover : {})
//         }}
//         onMouseEnter={() => setHoveredLinkId(item.id)}
//         onMouseLeave={() => setHoveredLinkId(null)}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {processContent(item.link)}
//       </a>
//     );
//   };

//   return (
//     <div 
//       style={{ ...currentTheme.container, ...style }} 
//       className={className}
//       id={id}
//     >
//       {/* Heading Section */}
//       <div>
//         <h1 style={currentTheme.heading}>{processContent(heading)}</h1>
//         {subheading && <p style={currentTheme.subheading}>{processContent(subheading)}</p>}
//         {currentTheme.headingUnderline && <div style={currentTheme.headingUnderline}></div>}
//         {currentTheme.headingLine && <div style={currentTheme.headingLine}></div>}
//       </div>
      
//       {/* List Container */}
//       <div style={currentTheme.listContainer}>
//         {items.map((item, index) => (
//           <div
//             key={item.id || index}
//             style={{
//               ...currentTheme.listItem,
//               ...(hoveredId === item.id ? currentTheme.listItemHover : {})
//             }}
//             onMouseEnter={() => {
//               setHoveredId(item.id);
//               handleItemHover(item, index, true);
//             }}
//             onMouseLeave={() => {
//               setHoveredId(null);
//               handleItemHover(item, index, false);
//             }}
//             onClick={() => handleItemClick(item, index)}
//           >
//             {/* Left Border (bordered theme) */}
//             {currentTheme.leftBorder && <div style={currentTheme.leftBorder}></div>}
            
//             {/* Number Box (bordered theme) */}
//             {showNumbering && currentTheme.numberBox && (
//               <div style={currentTheme.numberBox}>
//                 <span style={currentTheme.number}>
//                   {String(index + 1).padStart(2, '0')}
//                 </span>
//               </div>
//             )}
            
//             {/* Card Top (slate theme) */}
//             {currentTheme.cardTop && (
//               <div style={currentTheme.cardTop}>
//                 {showNumbering && currentTheme.numberCircle && (
//                   <div style={currentTheme.numberCircle}>
//                     {index + 1}
//                   </div>
//                 )}
//                 {currentTheme.yearTag && <span style={currentTheme.yearTag}>{processContent(item.year)}</span>}
//               </div>
//             )}
            
//             {/* Number Circle (modern/slate themes - outside content) */}
//             {showNumbering && currentTheme.numberCircle && !currentTheme.cardTop && !currentTheme.numberBox && (
//               <div style={currentTheme.numberCircle}>
//                 <span style={currentTheme.number}>{index + 1}</span>
//               </div>
//             )}
            
//             {/* Meta Section (accent theme) */}
//             {currentTheme.meta && (
//               <div style={currentTheme.meta}>
//                 <div style={currentTheme.year}>{processContent(item.year)}</div>
//               </div>
//             )}
            
//             {/* Content Section */}
//             <div style={currentTheme.content}>
//               {/* Top Bar (modern theme) */}
//               {currentTheme.topBar && <div style={currentTheme.topBar}></div>}
              
//               {/* Inner Content Wrapper (modern theme) */}
//               <div style={currentTheme.innerContent || {}}>
//                 {/* Header with Title and Year (bordered/classic themes) */}
//                 {currentTheme.header && (
//                   <div style={currentTheme.header}>
//                     <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
//                     <span style={currentTheme.year}>{processContent(item.year)}</span>
//                   </div>
//                 )}
                
//                 {/* Title Row (modern theme) */}
//                 {currentTheme.titleRow && (
//                   <div style={currentTheme.titleRow}>
//                     <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
//                     {currentTheme.yearBadge && <span style={currentTheme.yearBadge}>{processContent(item.year)}</span>}
//                   </div>
//                 )}
                
//                 {/* Simple Title (slate/card/accent themes) */}
//                 {!currentTheme.header && !currentTheme.titleRow && (
//                   <>
//                     {currentTheme.cardHeader && <div style={currentTheme.cardHeader}>
//                       <div style={currentTheme.year}>{processContent(item.year)}</div>
//                     </div>}
//                     <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
//                   </>
//                 )}
                
//                 {/* Author and Description */}
//                 <p style={currentTheme.author}>{processContent(item.author)}</p>
//                 <p style={currentTheme.description}>{processContent(item.description)}</p>
                
//                 {/* Link */}
//                 {renderLink(item)}
//               </div>
//             </div>
            
//             {/* Card Content (slate theme) */}
//             {currentTheme.cardContent && (
//               <div style={currentTheme.cardContent}>
//                 <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
//                 <p style={currentTheme.author}>{processContent(item.author)}</p>
//                 <p style={currentTheme.description}>{processContent(item.description)}</p>
//                 {renderLink(item)}
//               </div>
//             )}
            
//             {/* Bottom Accent (slate theme) */}
//             {currentTheme.bottomAccent && <div style={currentTheme.bottomAccent}></div>}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





/**
 * AcademicList Component
 * 
 * A flexible, themeable list component for displaying academic content such as reading lists,
 * publications, or bibliographies with various visual styles.
 * 
 * @param {Array} items - Array of item objects to display. Each item should have:
 *   - {string} id - Unique identifier for the item (optional, falls back to index)
 *   - {string} title - The title of the item (required)
 *   - {string} author - The author(s) of the item (required)
 *   - {string} year - Publication year or date (required)
 *   - {string} description - Description or summary of the item (required)
 *   - {string} link - Link text to display (optional)
 *   - {string} linkUrl - URL for the link (optional, defaults to '#')
 * 
 * @param {boolean} showNumbering - Whether to display numbered items (default: true)
 * 
 * @param {string} theme - Theme name to apply. Available themes:
 *   - 'modern' (default) - Clean design with gradient accents and circular numbers
 *   - 'bordered' - Structured layout with left border and numbered boxes
 *   - 'slate' - Card-based design with bottom accent gradient
 *   - 'accent' - Minimalist with left border accent
 *   - 'card' - Elevated card design with shadows
 *   - 'classic' - Traditional serif typography with underline separators
 * 
 * @param {string} heading - Main heading text for the list (default: 'Reading List')
 * 
 * @param {string} subheading - Optional subheading text below the main heading (default: null)
 * 
 * @param {function} onItemClick - Callback function when an item is clicked
 *   Receives: (item, index) => void
 * 
 * @param {function} onItemHover - Callback function when an item is hovered
 *   Receives: (item, index, isHovering) => void
 * 
 * @param {string} className - Additional CSS class names to apply to the container (default: '')
 * 
 * @param {object} style - Additional inline styles to apply to the container (default: {})
 * 
 * @param {string} id - HTML id attribute for the container element (default: null)
 * 
 * @example
 * <AcademicList
 *   items={[
 *     {
 *       id: '1',
 *       title: 'The Structure of Scientific Revolutions',
 *       author: 'Thomas S. Kuhn',
 *       year: '1962',
 *       description: 'A landmark in intellectual history...',
 *       link: 'Read More',
 *       linkUrl: 'https://example.com'
 *     }
 *   ]}
 *   theme="modern"
 *   heading="Essential Reading"
 *   showNumbering={true}
 *   onItemClick={(item, index) => console.log('Clicked:', item)}
 * />
 */

import { useState } from 'react';
import { themes } from './themes';
import { processContent } from '@/app/utils/contentProcessor';

export default function AcademicList({
  items = [],
  showNumbering = true,
  theme = 'modern',
  heading = 'Reading List',
  subheading = null,
  onItemClick = null,
  onItemHover = null,
  className = '',
  style = {},
  id = null
}) {
  const [hoveredId, setHoveredId] = useState(null);
  const [hoveredLinkId, setHoveredLinkId] = useState(null);
  
  const currentTheme = themes[theme] || themes.modern;

  const handleItemClick = (item, index) => {
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  const handleItemHover = (item, index, isHovering) => {
    if (onItemHover) {
      onItemHover(item, index, isHovering);
    }
  };

  const renderLink = (item) => {
    if (!item.link) return null;
    
    return (
      <a
        href={item.linkUrl || '#'}
        style={{
          ...currentTheme.link,
          ...(hoveredLinkId === item.id ? currentTheme.linkHover : {})
        }}
        onMouseEnter={() => setHoveredLinkId(item.id)}
        onMouseLeave={() => setHoveredLinkId(null)}
        onClick={(e) => e.stopPropagation()}
      >
        {processContent(item.link)}
      </a>
    );
  };

  const renderItemContent = (item, index) => {
    if (currentTheme.cardTop && currentTheme.cardContent) {
      return (
        <>
          <div style={currentTheme.cardTop}>
            {showNumbering && currentTheme.numberCircle && (
              <div style={currentTheme.numberCircle}>
                {index + 1}
              </div>
            )}
            {currentTheme.yearTag && <span style={currentTheme.yearTag}>{processContent(item.year)}</span>}
          </div>
          <div style={currentTheme.cardContent}>
            <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
            <p style={currentTheme.author}>{processContent(item.author)}</p>
            <p style={currentTheme.description}>{processContent(item.description)}</p>
            {renderLink(item)}
          </div>
          {currentTheme.bottomAccent && <div style={currentTheme.bottomAccent}></div>}
        </>
      );
    }

    return (
      <>
        {showNumbering && currentTheme.numberCircle && !currentTheme.numberBox && (
          <div style={currentTheme.numberCircle}>
            <span style={currentTheme.number}>{index + 1}</span>
          </div>
        )}
        
        {showNumbering && currentTheme.numberBox && (
          <div style={currentTheme.numberBox}>
            <span style={currentTheme.number}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        )}
        
        {currentTheme.meta && (
          <div style={currentTheme.meta}>
            <div style={currentTheme.year}>{processContent(item.year)}</div>
          </div>
        )}
        
        <div style={currentTheme.content}>
          {currentTheme.topBar && <div style={currentTheme.topBar}></div>}
          
          <div style={currentTheme.innerContent || {}}>
            {currentTheme.header && (
              <div style={currentTheme.header}>
                <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
                <span style={currentTheme.year}>{processContent(item.year)}</span>
              </div>
            )}
            
            {currentTheme.titleRow && (
              <div style={currentTheme.titleRow}>
                <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
                {currentTheme.yearBadge && <span style={currentTheme.yearBadge}>{processContent(item.year)}</span>}
              </div>
            )}
            
            {!currentTheme.header && !currentTheme.titleRow && (
              <>
                {currentTheme.cardHeader && <div style={currentTheme.cardHeader}>
                  <div style={currentTheme.year}>{processContent(item.year)}</div>
                </div>}
                <h3 style={currentTheme.title}>{processContent(item.title)}</h3>
              </>
            )}
            
            <p style={currentTheme.author}>{processContent(item.author)}</p>
            <p style={currentTheme.description}>{processContent(item.description)}</p>
            
            {renderLink(item)}
          </div>
        </div>
      </>
    );
  };

  const linkStyles = currentTheme.link || {};
  const linkHoverStyles = currentTheme.linkHover || {};
  
  const linkCss = Object.entries(linkStyles)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n    ');
    
  const linkHoverCss = Object.entries(linkHoverStyles)
    .map(([key, value]) => `${key}: ${value};`)
    .join('\n    ');

  return (
    <div 
      style={{ ...currentTheme.container, ...style }} 
      className={className}
      id={id}
    >
      <style>
        {`
          .markdown-link {
            text-decoration: none;
            ${linkCss}
          }
          
          .markdown-link:hover {
            ${linkHoverCss}
          }
        `}
      </style>
      
      <div>
        <h1 style={currentTheme.heading}>{processContent(heading)}</h1>
        {subheading && <p style={currentTheme.subheading}>{processContent(subheading)}</p>}
        {currentTheme.headingUnderline && <div style={currentTheme.headingUnderline}></div>}
        {currentTheme.headingLine && <div style={currentTheme.headingLine}></div>}
      </div>
      
      <div style={currentTheme.listContainer}>
        {items.map((item, index) => (
          <div
            key={item.id || index}
            style={{
              ...currentTheme.listItem,
              ...(hoveredId === item.id ? currentTheme.listItemHover : {})
            }}
            onMouseEnter={() => {
              setHoveredId(item.id);
              handleItemHover(item, index, true);
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              handleItemHover(item, index, false);
            }}
            onClick={() => handleItemClick(item, index)}
          >
            {currentTheme.leftBorder && <div style={currentTheme.leftBorder}></div>}
            {renderItemContent(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}