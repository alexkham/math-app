// /**
//  * CompactStaticCards Component
//  * 
//  * A flexible card grid/list component with compact styling, customizable dimensions,
//  * overflow handling, and comprehensive image support.
//  * 
//  * @component
//  * 
//  * @example
//  * // Basic usage with per-card sizing
//  * <CompactStaticCards 
//  *   cards={[
//  *     {
//  *       id: 1,
//  *       title: 'Small Card',
//  *       summary: 'This is a small card',
//  *       content: '...',
//  *       cardWidth: 'small',     // Per-card width
//  *       cardHeight: 'small',    // Per-card height
//  *       overflowBehavior: 5
//  *     },
//  *     {
//  *       id: 2,
//  *       title: 'Large Card',
//  *       summary: 'This is a large card',
//  *       content: '...',
//  *       cardWidth: 'large',     // Different width
//  *       cardHeight: 'medium',   // Different height
//  *       overflowBehavior: 2
//  *     }
//  *   ]}
//  *   theme="gradient"
//  * />
//  * 
//  * ============================================================================
//  * COMPONENT PROPS
//  * ============================================================================
//  * 
//  * @prop {Array} cards - Array of card objects (default: defaultCards)
//  *   Each card object can have:
//  *   
//  *   REQUIRED:
//  *   - id {number} - Unique identifier
//  *   - title {string} - Card title
//  *   - summary {string} - Card summary/subtitle
//  *   - content {string} OR htmlContent {string} - Card content
//  *   
//  *   DIMENSIONS (per card):
//  *   - cardWidth {string|number} - Card width (default: 'medium')
//  *     • 'small': 33.33% (1/3 screen width)
//  *     • 'medium': 66.66% (2/3 screen width)
//  *     • 'large': 100% (full screen width)
//  *     • Custom: '500px', '80%', '50vw', etc.
//  *   
//  *   - cardHeight {string|number} - Card base height (default: 'small')
//  *     • 'small': 300px
//  *     • 'medium': 600px
//  *     • 'large': 900px
//  *     • Custom: '400px', '50vh', etc.
//  *     Note: Card expands from minHeight to maxHeight (150% of cardHeight)
//  *   
//  *   OVERFLOW (per card):
//  *   - overflowBehavior {number|string} - Overflow handling (default: 5)
//  *     • 1 or 'scroll': Visible scrollbar
//  *     • 2 or 'readmore': Read More button
//  *     • 3 or 'ellipsis': Text ellipsis
//  *     • 4 or 'scroll-hidden': Hidden scrollbar
//  *     • 5 or 'fade': Hidden scrollbar + fade (DEFAULT)
//  *   
//  *   OPTIONAL:
//  *   - htmlId {string} - HTML id for anchor links
//  *   - icon {string} - Emoji or image URL
//  *   - link {string} - Action link URL
//  *   - linkTitle {string} - Action link text
//  *   
//  *   IMAGES:
//  *   - bannerImage {string} - Full-width top image URL
//  *   - bannerHeight {string} - Banner height (default: '150px')
//  *   - bannerFit {string} - CSS object-fit (default: 'cover')
//  *   - bannerAlt {string} - Banner alt text
//  *   - contentImage {string} - Content area image URL
//  *   - contentImageHeight {string} - Content image height
//  *   - contentImageFit {string} - Content image object-fit
//  *   - contentImageAlt {string} - Content image alt text
//  *   - images {Array} - Array of image URLs or objects for gallery
//  *   - imagesColumns {string} - Grid columns for gallery
//  * 
//  * @prop {string} theme - Visual theme (default: 'gradient')
//  *   Options: 'gradient', 'minimal', 'bold', 'elegant'
//  * 
//  * @prop {string} layout - Card layout (default: 'grid')
//  *   Options: 'grid', 'list'
//  * 
//  * @prop {string} sectionTitle - Optional section heading
//  * 
//  * @prop {string} backgroundColor - Container background color
//  * 
//  * ============================================================================
//  * USAGE EXAMPLES
//  * ============================================================================
//  * 
//  * Example 1: Different card sizes
//  * const cards = [
//  *   {
//  *     id: 1,
//  *     title: 'Small Card',
//  *     summary: '1/3 width, small height',
//  *     content: 'Content here...',
//  *     cardWidth: 'small',
//  *     cardHeight: 'small',
//  *     icon: '📦'
//  *   },
//  *   {
//  *     id: 2,
//  *     title: 'Wide Card',
//  *     summary: '2/3 width, medium height',
//  *     content: 'More content...',
//  *     cardWidth: 'medium',
//  *     cardHeight: 'medium',
//  *     icon: '📊'
//  *   },
//  *   {
//  *     id: 3,
//  *     title: 'Full Width Card',
//  *     summary: '100% width, small height',
//  *     content: 'Content spans full width...',
//  *     cardWidth: 'large',
//  *     cardHeight: 'small',
//  *     icon: '📐'
//  *   }
//  * ];
//  * 
//  * Example 2: Custom sizes and overflow
//  * {
//  *   id: 4,
//  *   title: 'Custom Sized Card',
//  *   summary: 'Custom pixel dimensions',
//  *   content: 'Long content that will overflow...',
//  *   cardWidth: '450px',
//  *   cardHeight: '350px',
//  *   overflowBehavior: 2,  // Read More button
//  *   icon: '⚙️'
//  * }
//  * 
//  * Example 3: Card with all image features
//  * {
//  *   id: 5,
//  *   title: 'Featured Article',
//  *   summary: 'With banner and gallery',
//  *   htmlContent: '<p>Rich <strong>HTML</strong> content</p>',
//  *   cardWidth: 'large',
//  *   cardHeight: 'medium',
//  *   overflowBehavior: 5,
//  *   icon: '🎨',
//  *   bannerImage: 'https://example.com/banner.jpg',
//  *   bannerHeight: '200px',
//  *   images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
//  *   imagesColumns: 'repeat(3, 1fr)',
//  *   link: '/article',
//  *   linkTitle: 'Read Article'
//  * }
//  * 
//  * ============================================================================
//  */

// 'use client';

// import { useState } from 'react';
// import { cardThemes } from './cardThemes';
// import { processContent } from '@/app/utils/contentProcessor';

// // Overflow behavior mapping
// const OVERFLOW_BEHAVIORS = {
//   1: 'scroll',
//   2: 'readmore',
//   3: 'ellipsis',
//   4: 'scroll-hidden',
//   5: 'fade'
// };

// const defaultCards = [
//   {
//     id: 1,
//     htmlId: 'advanced-analytics',
//     title: 'Advanced Analytics',
//     summary: 'Comprehensive data analysis and visualization tools',
//     content: 'Our advanced analytics platform $x^2$ provides real-time insights into your data with powerful visualization capabilities.',
//     icon: '📊',
//     cardWidth: 'medium',
//     cardHeight: 'small',
//     overflowBehavior: 5,
//     link: '/analytics',
//     linkTitle: 'View Dashboard'
//   }
// ];

// export default function CompactStaticCards({ 
//   cards = defaultCards, 
//   theme = 'gradient', 
//   layout = 'grid',
//   sectionTitle,
//   backgroundColor
// }) {
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [hoveredLink, setHoveredLink] = useState(null);
//   const [hoveredTopLink, setHoveredTopLink] = useState(null);
//   const [expandedCards, setExpandedCards] = useState({});

//   const currentTheme = cardThemes[theme] || cardThemes.gradient;

//   // Parse width from card data
//   const getCardWidth = (width) => {
//     if (!width || width === 'medium') return '66.66%';
//     if (width === 'small') return '33.33%';
//     if (width === 'large') return '100%';
//     return width;
//   };

//   // Parse height from card data
//   const getCardHeight = (height) => {
//     if (!height || height === 'small') return 300;
//     if (height === 'medium') return 600;
//     if (height === 'large') return 900;
//     return parseInt(height);
//   };

//   const compactLayout = layout === 'list' ? {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '32px',
//     maxWidth: '900px',
//     margin: '0 auto'
//   } : {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '32px',
//     width: '100%'
//   };

//   const containerStyle = {
//     maxWidth: '1400px',
//     margin: '0 auto',
//     padding: '60px 32px',
//     ...(backgroundColor && { backgroundColor })
//   };

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const toggleExpand = (cardId) => {
//     setExpandedCards(prev => ({
//       ...prev,
//       [cardId]: !prev[cardId]
//     }));
//   };

//   const topLinkStyle = {
//     display: 'inline-flex',
//     alignItems: 'center',
//     gap: '5px',
//     fontSize: '0.8rem',
//     fontWeight: '500',
//     color: '#64748b',
//     textDecoration: 'none',
//     padding: '6px 12px',
//     borderRadius: '6px',
//     border: '1px solid #e2e8f0',
//     backgroundColor: '#f8fafc',
//     transition: 'all 0.2s ease',
//     cursor: 'pointer',
//     position: 'absolute',
//     bottom: '0',
//     right: '0'
//   };

//   const topLinkHoverStyle = {
//     color: '#3b82f6',
//     backgroundColor: '#eff6ff',
//     borderColor: '#bfdbfe',
//     transform: 'translateY(-2px)'
//   };

//   const getCompactIconStyle = () => ({
//     ...currentTheme.icon,
//     fontSize: '2rem'
//   });

//   const getCompactIconWrapperStyle = () => ({
//     ...currentTheme.iconWrapper,
//     width: '48px',
//     height: '48px',
//     fontSize: '2rem'
//   });

//   const getCompactTitleStyle = () => ({
//     ...currentTheme.title,
//     fontSize: '1.25rem',
//     marginBottom: '8px'
//   });

//   const getCompactSummaryStyle = () => ({
//     ...currentTheme.summary,
//     fontSize: '0.875rem',
//     marginBottom: '12px'
//   });

//   const getCompactContentStyle = () => ({
//     ...currentTheme.content,
//     fontSize: '0.875rem',
//     lineHeight: '1.5'
//   });

//   const getCompactLinkStyle = () => ({
//     ...currentTheme.link,
//     fontSize: '0.875rem',
//     padding: '8px 14px'
//   });

//   const renderCard = (card) => {
//     const isExpanded = expandedCards[card.id];
//     const overflow = OVERFLOW_BEHAVIORS[card.overflowBehavior] || 'fade';
    
//     // Get dimensions from CARD data
//     const baseHeight = getCardHeight(card.cardHeight);
//     const maxHeight = baseHeight * 1.5;
    
//     let cardStyle = { 
//       ...currentTheme.card,
//       padding: card.bannerImage ? '0' : '20px',
//       width: getCardWidth(card.cardWidth),
//       minHeight: `${baseHeight}px`,
//       maxHeight: `${maxHeight}px`,
//       display: 'flex',
//       flexDirection: 'column',
//       ...(isExpanded && overflow === 'readmore' ? { maxHeight: 'none' } : {})
//     };
    
//     let contentWrapperStyle = { 
//       position: 'relative', 
//       flex: 1, 
//       display: 'flex', 
//       flexDirection: 'column',
//       minHeight: 0
//     };
    
//     let contentInnerStyle = { 
//       flex: 1,
//       overflow: 'visible'
//     };
    
//     let contentTextStyle = { ...getCompactContentStyle() };

//     // Apply overflow behavior
//     if (overflow === 'scroll') {
//       contentInnerStyle.overflow = 'auto';
//     } else if (overflow === 'scroll-hidden' || overflow === 'fade') {
//       contentInnerStyle.overflow = 'auto';
//       contentInnerStyle.scrollbarWidth = 'none';
//       contentInnerStyle.msOverflowStyle = 'none';
//     } else if (overflow === 'readmore') {
//       if (!isExpanded) {
//         contentInnerStyle.overflow = 'hidden';
//       }
//     } else if (overflow === 'ellipsis') {
//       contentTextStyle.display = '-webkit-box';
//       contentTextStyle.WebkitLineClamp = '8';
//       contentTextStyle.WebkitBoxOrient = 'vertical';
//       contentTextStyle.overflow = 'hidden';
//       contentTextStyle.textOverflow = 'ellipsis';
//     }

//     return (
//       <div 
//         key={card.id}
//         id={card.htmlId}
//         style={{
//           ...cardStyle,
//           ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
//           scrollMarginTop: '100px'
//         }}
//         onMouseEnter={() => setHoveredCard(card.id)}
//         onMouseLeave={() => setHoveredCard(null)}
//       >
//         <style>
//           {(overflow === 'scroll-hidden' || overflow === 'fade') && `
//             #content-${card.id}::-webkit-scrollbar {
//               display: none;
//             }
//           `}
//         </style>

//         <div style={{
//           ...currentTheme.topAccent,
//           ...(hoveredCard === card.id ? currentTheme.topAccentHover : {})
//         }}></div>

//         {/* Banner Image */}
//         {card.bannerImage && (
//           <div style={{ 
//             width: '100%', 
//             height: card.bannerHeight || '150px',
//             overflow: 'hidden',
//             borderRadius: '16px 16px 0 0',
//             flexShrink: 0
//           }}>
//             <img 
//               src={card.bannerImage} 
//               alt={card.bannerAlt || ''} 
//               style={{ 
//                 width: '100%', 
//                 height: '100%', 
//                 objectFit: card.bannerFit || 'cover'
//               }} 
//             />
//           </div>
//         )}

//         <div style={{ 
//           ...currentTheme.header, 
//           padding: card.bannerImage ? '20px 20px 16px 20px' : '0 0 16px 0' 
//         }}>
//           {/* Icon */}
//           {card.icon && (
//             <div style={getCompactIconWrapperStyle()}>
//               {card.icon.startsWith('http') || card.icon.startsWith('/') ? (
//                 <img src={card.icon} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}} />
//               ) : (
//                 <span style={getCompactIconStyle()}>{card.icon}</span>
//               )}
//             </div>
//           )}
//           <h3 style={getCompactTitleStyle()}>{card.title}</h3>
//           <p style={getCompactSummaryStyle()}>{card.summary}</p>
//         </div>

//         <div style={contentWrapperStyle}>
//           <div id={`content-${card.id}`} style={contentInnerStyle}>
//             {/* Content Image */}
//             {card.contentImage && (
//               <div style={{ 
//                 marginBottom: '16px', 
//                 borderRadius: '8px', 
//                 overflow: 'hidden'
//               }}>
//                 <img 
//                   src={card.contentImage} 
//                   alt={card.contentImageAlt || ''} 
//                   style={{ 
//                     width: '100%', 
//                     height: card.contentImageHeight || 'auto',
//                     objectFit: card.contentImageFit || 'cover',
//                     display: 'block'
//                   }} 
//                 />
//               </div>
//             )}

//             {/* Multiple Images Gallery */}
//             {card.images && card.images.length > 0 && (
//               <div style={{ 
//                 display: 'grid',
//                 gridTemplateColumns: card.imagesColumns || 'repeat(auto-fit, minmax(100px, 1fr))',
//                 gap: '8px',
//                 marginBottom: '16px'
//               }}>
//                 {card.images.map((img, idx) => (
//                   <div key={idx} style={{ borderRadius: '6px', overflow: 'hidden' }}>
//                     <img 
//                       src={img.src || img} 
//                       alt={img.alt || ''} 
//                       style={{ 
//                         width: '100%', 
//                         height: img.height || '100px',
//                         objectFit: img.fit || 'cover',
//                         display: 'block'
//                       }} 
//                     />
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Content - HTML or plain text */}
//             {card.htmlContent ? (
//               <div 
//                 style={contentTextStyle}
//                 // dangerouslySetInnerHTML={{ __html: card.htmlContent }}
                
//               >{processContent(card.htmlContent)}</div>
//             ) : (
//               <p style={contentTextStyle}>{card.content}</p>
//             )}
//           </div>

//           {overflow === 'fade' && (
//             <div style={{
//               position: 'absolute',
//               bottom: 0,
//               left: 0,
//               right: 0,
//               height: '60px',
//               background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.95))',
//               pointerEvents: 'none',
//               display: 'flex',
//               alignItems: 'flex-end',
//               justifyContent: 'center',
//               paddingBottom: '4px'
//             }}>
//               <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>⌄</span>
//             </div>
//           )}

//           {overflow === 'readmore' && (
//             <button
//               onClick={() => toggleExpand(card.id)}
//               style={{
//                 marginTop: '12px',
//                 padding: '8px 16px',
//                 backgroundColor: '#3b82f6',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 cursor: 'pointer',
//                 fontSize: '0.875rem',
//                 fontWeight: '600',
//                 alignSelf: 'flex-start',
//                 flexShrink: 0
//               }}
//             >
//               {isExpanded ? 'Show Less' : 'Read More'}
//             </button>
//           )}
//         </div>

//         <div style={{ 
//           position: 'relative', 
//           minHeight: '45px', 
//           marginTop: '16px',
//           padding: card.bannerImage ? '0 20px 20px 20px' : '0'
//         }}>
//           {card.link && card.linkTitle && (
//             <a 
//               href={card.link} 
//               style={{
//                 ...getCompactLinkStyle(),
//                 ...(hoveredLink === card.id ? currentTheme.linkHover : {})
//               }}
//               onMouseEnter={() => setHoveredLink(card.id)}
//               onMouseLeave={() => setHoveredLink(null)}
//             >
//               {card.linkTitle}
//               <span style={{ ...currentTheme.linkArrow, fontSize: '0.875rem' }}>→</span>
//             </a>
//           )}
//           <a 
//             onClick={handleScrollToTop}
//             style={{
//               ...topLinkStyle,
//               ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
//             }}
//             onMouseEnter={() => setHoveredTopLink(card.id)}
//             onMouseLeave={() => setHoveredTopLink(null)}
//           >
//             <span style={{ fontSize: '0.9rem' }}>↑</span>
//             Back to Top
//           </a>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div style={containerStyle}>
//       {sectionTitle && (
//         <div style={{ marginBottom: '48px' }}>
//           <h1 style={{ 
//             fontSize: '2.25rem', 
//             fontWeight: 'bold', 
//             marginBottom: '12px',
//             color: '#1a202c'
//           }}>
//             {sectionTitle}
//           </h1>
//           <hr style={{ borderColor: '#3498db', borderWidth: '1px' }} />
//         </div>
//       )}
//       <div style={compactLayout}>
//         {cards.map(renderCard)}
//       </div>
//     </div>
//   );
// }























/**
 * CompactStaticCards Component
 * 
 * A flexible card grid/list component with compact styling, customizable dimensions,
 * overflow handling, and comprehensive image support.
 * 
 * @component
 * 
 * @example
 * // Basic usage with per-card sizing
 * <CompactStaticCards 
 *   cards={[
 *     {
 *       id: 1,
 *       title: 'Small Card',
 *       summary: 'This is a small card',
 *       content: '...',
 *       cardWidth: 'small',     // Per-card width
 *       cardHeight: 'small',    // Per-card height
 *       overflowBehavior: 5
 *     },
 *     {
 *       id: 2,
 *       title: 'Large Card',
 *       summary: 'This is a large card',
 *       content: '...',
 *       cardWidth: 'large',     // Different width
 *       cardHeight: 'medium',   // Different height
 *       overflowBehavior: 2
 *     }
 *   ]}
 *   theme="gradient"
 * />
 * 
 * ============================================================================
 * COMPONENT PROPS
 * ============================================================================
 * 
 * @prop {Array} cards - Array of card objects (default: defaultCards)
 *   Each card object can have:
 *   
 *   REQUIRED:
 *   - id {number} - Unique identifier
 *   - title {string} - Card title
 *   - summary {string} - Card summary/subtitle
 *   - content {string} OR htmlContent {string} - Card content
 *   
 *   DIMENSIONS (per card):
 *   - cardWidth {string|number} - Card width (default: 'medium')
 *     • 'small': 33.33% (1/3 screen width)
 *     • 'medium': 66.66% (2/3 screen width)
 *     • 'large': 100% (full screen width)
 *     • Custom: '500px', '80%', '50vw', etc.
 *   
 *   - cardHeight {string|number} - Card base height (default: 'small')
 *     • 'small': 300px
 *     • 'medium': 600px
 *     • 'large': 900px
 *     • Custom: '400px', '50vh', etc.
 *     Note: Card expands from minHeight to maxHeight (150% of cardHeight)
 *   
 *   OVERFLOW (per card):
 *   - overflowBehavior {number|string} - Overflow handling (default: 5)
 *     • 1 or 'scroll': Visible scrollbar
 *     • 2 or 'readmore': Read More button
 *     • 3 or 'ellipsis': Text ellipsis
 *     • 4 or 'scroll-hidden': Hidden scrollbar
 *     • 5 or 'fade': Hidden scrollbar + fade (DEFAULT)
 *   
 *   OPTIONAL:
 *   - htmlId {string} - HTML id for anchor links
 *   - icon {string} - Emoji or image URL
 *   - link {string} - Action link URL
 *   - linkTitle {string} - Action link text
 *   
 *   IMAGES:
 *   - bannerImage {string} - Full-width top image URL
 *   - bannerHeight {string} - Banner height (default: '150px')
 *   - bannerFit {string} - CSS object-fit (default: 'cover')
 *   - bannerAlt {string} - Banner alt text
 *   - contentImage {string} - Content area image URL
 *   - contentImageHeight {string} - Content image height
 *   - contentImageFit {string} - Content image object-fit
 *   - contentImageAlt {string} - Content image alt text
 *   - images {Array} - Array of image URLs or objects for gallery
 *   - imagesColumns {string} - Grid columns for gallery
 * 
 * @prop {string} theme - Visual theme (default: 'gradient')
 *   Options: 'gradient', 'minimal', 'bold', 'elegant'
 * 
 * @prop {string} layout - Card layout (default: 'grid')
 *   Options: 'grid', 'list'
 * 
 * @prop {string} sectionTitle - Optional section heading
 * 
 * @prop {string} backgroundColor - Container background color
 * 
 * ============================================================================
 * USAGE EXAMPLES
 * ============================================================================
 * 
 * Example 1: Different card sizes
 * const cards = [
 *   {
 *     id: 1,
 *     title: 'Small Card',
 *     summary: '1/3 width, small height',
 *     content: 'Content here...',
 *     cardWidth: 'small',
 *     cardHeight: 'small',
 *     icon: '📦'
 *   },
 *   {
 *     id: 2,
 *     title: 'Wide Card',
 *     summary: '2/3 width, medium height',
 *     content: 'More content...',
 *     cardWidth: 'medium',
 *     cardHeight: 'medium',
 *     icon: '📊'
 *   },
 *   {
 *     id: 3,
 *     title: 'Full Width Card',
 *     summary: '100% width, small height',
 *     content: 'Content spans full width...',
 *     cardWidth: 'large',
 *     cardHeight: 'small',
 *     icon: '📐'
 *   }
 * ];
 * 
 * Example 2: Custom sizes and overflow
 * {
 *   id: 4,
 *   title: 'Custom Sized Card',
 *   summary: 'Custom pixel dimensions',
 *   content: 'Long content that will overflow...',
 *   cardWidth: '450px',
 *   cardHeight: '350px',
 *   overflowBehavior: 2,  // Read More button
 *   icon: '⚙️'
 * }
 * 
 * Example 3: Card with all image features
 * {
 *   id: 5,
 *   title: 'Featured Article',
 *   summary: 'With banner and gallery',
 *   htmlContent: '<p>Rich <strong>HTML</strong> content</p>',
 *   cardWidth: 'large',
 *   cardHeight: 'medium',
 *   overflowBehavior: 5,
 *   icon: '🎨',
 *   bannerImage: 'https://example.com/banner.jpg',
 *   bannerHeight: '200px',
 *   images: ['img1.jpg', 'img2.jpg', 'img3.jpg'],
 *   imagesColumns: 'repeat(3, 1fr)',
 *   link: '/article',
 *   linkTitle: 'Read Article'
 * }
 * 
 * ============================================================================
 */

'use client';

import { useState } from 'react';
import { cardThemes } from './cardThemes';
import { processContent } from '@/app/utils/contentProcessor';

// Overflow behavior mapping
const OVERFLOW_BEHAVIORS = {
  1: 'scroll',
  2: 'readmore',
  3: 'ellipsis',
  4: 'scroll-hidden',
  5: 'fade'
};

const defaultCards = [
  {
    id: 1,
    htmlId: 'advanced-analytics',
    title: 'Advanced Analytics $x^3$',
    summary: 'Comprehensive data analysis  $x^3$ and visualization tools',
    content: 'Our advanced analytics $x^3$ platform provides real-time insights into your data with powerful visualization capabilities.',
    icon: '📊',
    cardWidth: 'medium',
    cardHeight: 'small',
    overflowBehavior: 5,
    link: '/analytics',
    linkTitle: 'View Dashboard'
  }
];

export default function CompactStaticCards({ 
  cards = defaultCards, 
  theme = 'gradient', 
  layout = 'grid',
  sectionTitle,
  backgroundColor
}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredTopLink, setHoveredTopLink] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const currentTheme = cardThemes[theme] || cardThemes.gradient;

  // Parse width from card data
  const getCardWidth = (width) => {
    if (!width || width === 'medium') return '66.66%';
    if (width === 'small') return '33.33%';
    if (width === 'large') return '100%';
    return width;
  };

  // Parse height from card data
  const getCardHeight = (height) => {
    if (!height || height === 'small') return 300;
    if (height === 'medium') return 600;
    if (height === 'large') return 900;
    return parseInt(height);
  };

  const compactLayout = layout === 'list' ? {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    maxWidth: '900px',
    margin: '0 auto'
  } : {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '32px',
    width: '100%'
  };

  const containerStyle = {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '60px 32px',
    ...(backgroundColor && { backgroundColor })
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleExpand = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const topLinkStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontSize: '0.8rem',
    fontWeight: '500',
    color: '#64748b',
    textDecoration: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    backgroundColor: '#f8fafc',
    transition: 'all 0.2s ease',
    cursor: 'pointer',
    position: 'absolute',
    bottom: '0',
    right: '0'
  };

  const topLinkHoverStyle = {
    color: '#3b82f6',
    backgroundColor: '#eff6ff',
    borderColor: '#bfdbfe',
    transform: 'translateY(-2px)'
  };

  const getCompactIconStyle = () => ({
    ...currentTheme.icon,
    fontSize: '2rem'
  });

  const getCompactIconWrapperStyle = () => ({
    ...currentTheme.iconWrapper,
    width: '48px',
    height: '48px',
    fontSize: '2rem'
  });

  const getCompactTitleStyle = () => ({
    ...currentTheme.title,
    fontSize: '1.25rem',
    marginBottom: '8px'
  });

  const getCompactSummaryStyle = () => ({
    ...currentTheme.summary,
    fontSize: '0.875rem',
    marginBottom: '12px'
  });

  const getCompactContentStyle = () => ({
    ...currentTheme.content,
    fontSize: '0.875rem',
    lineHeight: '1.5'
  });

  const getCompactLinkStyle = () => ({
    ...currentTheme.link,
    fontSize: '0.875rem',
    padding: '8px 14px'
  });

  const renderCard = (card) => {
    const isExpanded = expandedCards[card.id];
    const overflow = OVERFLOW_BEHAVIORS[card.overflowBehavior] || 'fade';
    
    // Get dimensions from CARD data
    const baseHeight = getCardHeight(card.cardHeight);
    const maxHeight = baseHeight * 1.5;
    
    let cardStyle = { 
      ...currentTheme.card,
      padding: card.bannerImage ? '0' : '20px',
      width: getCardWidth(card.cardWidth),
      minHeight: `${baseHeight}px`,
      maxHeight: `${maxHeight}px`,
      display: 'flex',
      flexDirection: 'column',
      ...(isExpanded && overflow === 'readmore' ? { maxHeight: 'none' } : {})
    };
    
    let contentWrapperStyle = { 
      position: 'relative', 
      flex: 1, 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: 0
    };
    
    let contentInnerStyle = { 
      flex: 1,
      overflow: 'visible'
    };
    
    let contentTextStyle = { ...getCompactContentStyle() };

    // Apply overflow behavior
    if (overflow === 'scroll') {
      contentInnerStyle.overflow = 'auto';
    } else if (overflow === 'scroll-hidden' || overflow === 'fade') {
      contentInnerStyle.overflow = 'auto';
      contentInnerStyle.scrollbarWidth = 'none';
      contentInnerStyle.msOverflowStyle = 'none';
    } else if (overflow === 'readmore') {
      if (!isExpanded) {
        contentInnerStyle.overflow = 'hidden';
      }
    } else if (overflow === 'ellipsis') {
      contentTextStyle.display = '-webkit-box';
      contentTextStyle.WebkitLineClamp = '8';
      contentTextStyle.WebkitBoxOrient = 'vertical';
      contentTextStyle.overflow = 'hidden';
      contentTextStyle.textOverflow = 'ellipsis';
    }

    return (
      <div 
        key={card.id}
        id={card.htmlId}
        style={{
          ...cardStyle,
          ...(hoveredCard === card.id ? currentTheme.cardHover : {}),
          scrollMarginTop: '100px'
        }}
        onMouseEnter={() => setHoveredCard(card.id)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        <style>
          {(overflow === 'scroll-hidden' || overflow === 'fade') && `
            #content-${card.id}::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        <div style={{
          ...currentTheme.topAccent,
          ...(hoveredCard === card.id ? currentTheme.topAccentHover : {})
        }}></div>

        {/* Banner Image */}
        {card.bannerImage && (
          <div style={{ 
            width: '100%', 
            height: card.bannerHeight || '150px',
            overflow: 'hidden',
            borderRadius: '16px 16px 0 0',
            flexShrink: 0
          }}>
            <img 
              src={card.bannerImage} 
              alt={card.bannerAlt || ''} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: card.bannerFit || 'cover'
              }} 
            />
          </div>
        )}

        <div style={{ 
          ...currentTheme.header, 
          padding: card.bannerImage ? '20px 20px 16px 20px' : '0 0 16px 0' 
        }}>
          {/* Icon */}
          {card.icon && (
            <div style={getCompactIconWrapperStyle()}>
              {card.icon.startsWith('http') || card.icon.startsWith('/') ? (
                <img src={card.icon} alt="" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px'}} />
              ) : (
                <span style={getCompactIconStyle()}>{card.icon}</span>
              )}
            </div>
          )}
          <h3 style={getCompactTitleStyle()}>{processContent(card.title)}</h3>
          <p style={getCompactSummaryStyle()}>{processContent(card.summary)}</p>
        </div>

        <div style={contentWrapperStyle}>
          <div id={`content-${card.id}`} style={contentInnerStyle}>
            {/* Content Image */}
            {card.contentImage && (
              <div style={{ 
                marginBottom: '16px', 
                borderRadius: '8px', 
                overflow: 'hidden'
              }}>
                <img 
                  src={card.contentImage} 
                  alt={card.contentImageAlt || ''} 
                  style={{ 
                    width: '100%', 
                    height: card.contentImageHeight || 'auto',
                    objectFit: card.contentImageFit || 'cover',
                    display: 'block'
                  }} 
                />
              </div>
            )}

            {/* Multiple Images Gallery */}
            {card.images && card.images.length > 0 && (
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: card.imagesColumns || 'repeat(auto-fit, minmax(100px, 1fr))',
                gap: '8px',
                marginBottom: '16px'
              }}>
                {card.images.map((img, idx) => (
                  <div key={idx} style={{ borderRadius: '6px', overflow: 'hidden' }}>
                    <img 
                      src={img.src || img} 
                      alt={img.alt || ''} 
                      style={{ 
                        width: '100%', 
                        height: img.height || '100px',
                        objectFit: img.fit || 'cover',
                        display: 'block'
                      }} 
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Content */}
            <div style={contentTextStyle}>
              {processContent(card.content)}
            </div>
          </div>

          {overflow === 'fade' && (
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '60px',
              background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.95))',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              paddingBottom: '4px'
            }}>
              <span style={{ fontSize: '1.2rem', color: '#94a3b8' }}>⌄</span>
            </div>
          )}

          {overflow === 'readmore' && (
            <button
              onClick={() => toggleExpand(card.id)}
              style={{
                marginTop: '12px',
                padding: '8px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '600',
                alignSelf: 'flex-start',
                flexShrink: 0
              }}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>

        <div style={{ 
          position: 'relative', 
          minHeight: '45px', 
          marginTop: '16px',
          padding: card.bannerImage ? '0 20px 20px 20px' : '0'
        }}>
          {card.link && card.linkTitle && (
            <a 
              href={card.link} 
              style={{
                ...getCompactLinkStyle(),
                ...(hoveredLink === card.id ? currentTheme.linkHover : {})
              }}
              onMouseEnter={() => setHoveredLink(card.id)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {card.linkTitle}
              <span style={{ ...currentTheme.linkArrow, fontSize: '0.875rem' }}>→</span>
            </a>
          )}
          <a 
            onClick={handleScrollToTop}
            style={{
              ...topLinkStyle,
              ...(hoveredTopLink === card.id ? topLinkHoverStyle : {})
            }}
            onMouseEnter={() => setHoveredTopLink(card.id)}
            onMouseLeave={() => setHoveredTopLink(null)}
          >
            <span style={{ fontSize: '0.9rem' }}>↑</span>
            Back to Top
          </a>
        </div>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      {sectionTitle && (
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 'bold', 
            marginBottom: '12px',
            color: '#1a202c'
          }}>
            {sectionTitle}
          </h1>
          <hr style={{ borderColor: '#3498db', borderWidth: '1px' }} />
        </div>
      )}
      <div style={compactLayout}>
        {cards.map(renderCard)}
      </div>
    </div>
  );
}