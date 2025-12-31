
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { ChevronDown, ChevronRight } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import tocThemes from './tocThemes';
// import { processContent } from '@/app/utils/contentProcessor';

// const SectionTableOfContents = ({ 
//   sections = [], 
//   title = '',
//   showSecondaryNav = false,
//   secondaryNavMode = 'children', 
//   secondaryNavTitle = 'More in this Section',
//   navLinks = null,
//   additionalNavGroup = null,
//   theme = 'classicAcademic',
//   numbered = false,
//   maxWidth = null,
//   stickyWidth = null,
//   stickyOffset = 600
// }) => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [urlStructure, setUrlStructure] = useState({});
//   const [secondaryNavLinks, setSecondaryNavLinks] = useState(
//     navLinks && navLinks.links ? navLinks.links : []
//   );
//   const [useProvidedLinks, setUseProvidedLinks] = useState(
//     !!(navLinks && navLinks.links && Array.isArray(navLinks.links) && navLinks.links.length > 0)
//   );
//   const [currentPath, setCurrentPath] = useState('');
//   const [secondaryNavOpen, setSecondaryNavOpen] = useState(false);
//   const [expandedSecondaryItems, setExpandedSecondaryItems] = useState({});
//   const [itemNumbers, setItemNumbers] = useState({});
//   const [tocHeight, setTocHeight] = useState(0);
//   const [prevHeight, setPrevHeight] = useState(0);
//   const boxRef = useRef(null);
//   const stickyThreshold = useRef(0);
//   const pathname = usePathname();

//   const activeTheme = typeof theme === 'object' ? theme : (tocThemes[theme] || tocThemes.classicAcademic);

//   const finalTheme = {
//     ...activeTheme,
//     styles: {
//       ...activeTheme.styles,
//       showNumbers: numbered !== false ? numbered : activeTheme.styles.showNumbers
//     },
//     sizes: {
//       ...activeTheme.sizes,
//       maxWidth: maxWidth || activeTheme.sizes.maxWidth,
//       stickyWidth: stickyWidth || activeTheme.sizes.stickyWidth
//     }
//   };

//   useEffect(() => {
//     if (finalTheme.styles.showNumbers) {
//       const numbers = {};
//       sections.forEach((section, index) => {
//         numbers[section.id] = `${index + 1}.`;
//       });
//       setItemNumbers(numbers);
//     }
//   }, [sections, finalTheme.styles.showNumbers]);

//   useEffect(() => {
//     if (navLinks && navLinks.links && Array.isArray(navLinks.links) && navLinks.links.length > 0) {
//       setUseProvidedLinks(true);
      
//       const filteredLinks = navLinks.links.filter(link => !link.includes('[') && !link.includes(']'));
//       setSecondaryNavLinks(filteredLinks);
      
//       setCurrentPath(navLinks.currentPath || pathname);
      
//       const basicStructure = {};
//       if (navLinks.currentPath) {
//         basicStructure[navLinks.currentPath] = filteredLinks;
//         setUrlStructure(basicStructure);
//       }
//     } else {
//       setUseProvidedLinks(false);
//     }
//   }, [navLinks, pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (boxRef.current) {
//         const currentScrollPos = window.pageYOffset;
//         const shouldBeSticky = currentScrollPos > stickyThreshold.current;
        
//         if (shouldBeSticky !== isSticky) {
//           setIsSticky(shouldBeSticky);
//         }
//       }
//     };

//     const setInitialThreshold = () => {
//       if (boxRef.current) {
//         const height = boxRef.current.offsetHeight;
//         setTocHeight(height);
//         setPrevHeight(height);
//         stickyThreshold.current = boxRef.current.offsetTop + stickyOffset;
//       }
//     };

//     setInitialThreshold();
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', setInitialThreshold);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', setInitialThreshold);
//     };
//   }, [isSticky, stickyOffset]);

//   useEffect(() => {
//     if (!isSticky && boxRef.current) {
//       setTimeout(() => {
//         const newHeight = boxRef.current.offsetHeight;
//         const heightDiff = newHeight - prevHeight;
        
//         if (heightDiff > 0) {
//           stickyThreshold.current = stickyThreshold.current + heightDiff;
//         }
        
//         setTocHeight(newHeight);
//         setPrevHeight(newHeight);
//       }, 100);
//     }
//   }, [secondaryNavOpen, expandedSecondaryItems, isSticky]);

//   useEffect(() => {
//     if (!showSecondaryNav || useProvidedLinks) return;
    
//     async function fetchSitemap() {
//       try {
//         const response = await fetch('/api/sitemap');
//         const data = await response.json();
//         setUrlStructure(data);
//       } catch (error) {
//         console.error('Error fetching sitemap:', error);
//       }
//     }
    
//     fetchSitemap();
//   }, [showSecondaryNav, useProvidedLinks]);

//   useEffect(() => {
//     if (useProvidedLinks || !showSecondaryNav || !pathname || Object.keys(urlStructure).length === 0) return;
    
//     let path = pathname;
//     let newLinks = [];

//     if (secondaryNavMode === 'children') {
//       newLinks = urlStructure[path] || [];
//     } else if (secondaryNavMode === 'siblings') {
//       const pathParts = pathname.split('/').filter(Boolean);
//       pathParts.pop();
//       const parentPath = pathParts.length === 0 ? '/' : '/' + pathParts.join('/');
      
//       newLinks = urlStructure[parentPath] || [];
      
//       path = parentPath;
//     }

//     newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
//     setSecondaryNavLinks(newLinks);
//     setCurrentPath(path);
//   }, [urlStructure, pathname, secondaryNavMode, showSecondaryNav, useProvidedLinks]);

//   const handleLinkClick = (e, id, parentId = null) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = isSticky ? 100 : 320;
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({
//         top: elementPosition - offset,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const toggleSection = (sectionId) => {
//     setExpandedSection(expandedSection === sectionId ? null : sectionId);
//   };

//   const toggleSecondaryNav = () => {
//     setSecondaryNavOpen(!secondaryNavOpen);
//   };

//   const toggleSecondaryItem = (itemPath) => {
//     setExpandedSecondaryItems(prev => ({
//       ...prev,
//       [itemPath]: !prev[itemPath]
//     }));
//   };

//   const renderIcon = (icon) => {
//     if (!finalTheme.styles.showIcons) return null;
    
//     const size = isSticky ? parseInt(finalTheme.sizes.iconSizeSticky) : parseInt(finalTheme.sizes.iconSize);
    
//     if (typeof icon === 'string') {
//       return <Image src={icon} alt="" width={size} height={size} />;
//     } else if (React.isValidElement(icon)) {
//       return React.cloneElement(icon, { width: size, height: size });
//     } else if (icon && typeof icon === 'object' && icon.src) {
//       return <Image src={icon} alt="" width={size} height={size} />;
//     }
//     return null;
//   };

//   const renderSection = (section) => {
//     const arrowSize = isSticky ? parseInt(finalTheme.sizes.arrowSizeSticky) : parseInt(finalTheme.sizes.arrowSize);
    
//     if (section.subsections) {
//       return (
//         <div 
//           key={section.id} 
//           className={`toc-item accordion ${isSticky ? 'sticky-mode' : ''}`}
//           data-number={finalTheme.styles.showNumbers ? itemNumbers[section.id] : ''}
//         >
//           <button 
//             className="toc-link accordion-header" 
//             onClick={() => toggleSection(section.id)}
//           >
//             <div className="toc-link-content">
//               {section.icon && renderIcon(section.icon)}
//               <span className="section-title">{processContent(section.title)}</span>
//             </div>
//             {finalTheme.styles.showArrows && (
//               <ChevronRight 
//                 className={`accordion-arrow ${expandedSection === section.id ? 'expanded' : ''}`}
//                 size={arrowSize}
//                 strokeWidth={2}
//               />
//             )}
//           </button>
//           {expandedSection === section.id && (
//             <div className="subsections-list">
//               {section.subsections.map((subsection) => (
//                 <a
//                   key={subsection.id}
//                   href={`#${subsection.id}`}
//                   onClick={(e) => handleLinkClick(e, subsection.id, section.id)}
//                   className="subsection-link"
//                 >
//                   {processContent(subsection.title)}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     }

//     return (
//       <div 
//         key={section.id} 
//         className={`toc-item ${isSticky ? 'sticky-mode' : ''}`}
//         data-number={finalTheme.styles.showNumbers ? itemNumbers[section.id] : ''}
//       >
//         <a
//           href={`#${section.id}`}
//           onClick={(e) => handleLinkClick(e, section.id)}
//           className="toc-link"
//         >
//           <div className="toc-link-content">
//             {section.icon && renderIcon(section.icon)}
//             <span className="section-title">{processContent(section.title)}</span>
//           </div>
//         </a>
//       </div>
//     );
//   };

//   const renderSecondaryNav = () => {
//     if (secondaryNavLinks.length === 0 && (!additionalNavGroup || !additionalNavGroup.links || additionalNavGroup.links.length === 0)) return null;

//     if (isSticky) {
//       return (
//         <div className="secondary-nav sticky-secondary-nav">
//           <div className="secondary-nav-content">
//             {secondaryNavLinks.length > 0 && (
//               <>
//                 <h3 className="secondary-nav-title">
//                   {processContent(secondaryNavTitle)}
//                 </h3>
//                 <ul className="secondary-nav-list">
//                   {secondaryNavLinks.map((link) => {
//                     const hasChildren = !useProvidedLinks && urlStructure[`${currentPath}${currentPath === '/' ? '' : '/'}${link}`] && 
//                                        urlStructure[`${currentPath}${currentPath === '/' ? '' : '/'}${link}`].length > 0;
//                     const itemPath = `${currentPath}${currentPath === '/' ? '' : '/'}${link}`;
                    
//                     return (
//                       <li key={link} className="secondary-nav-item">
//                         <div className="secondary-nav-item-wrapper">
//                           <Link 
//                             href={itemPath}
//                             className="secondary-nav-link"
//                           >
//                             {link.replace(/-/g, ' ')}
//                           </Link>
//                           {hasChildren && (
//                             <button 
//                               className="expand-toggle"
//                               onClick={() => toggleSecondaryItem(itemPath)}
//                             >
//                               <ChevronRight 
//                                 className={`secondary-arrow ${expandedSecondaryItems[itemPath] ? 'expanded' : ''}`}
//                                 size={14}
//                                 strokeWidth={2}
//                               />
//                             </button>
//                           )}
//                         </div>
                        
//                         {hasChildren && expandedSecondaryItems[itemPath] && (
//                           <ul className="secondary-nav-sublist">
//                             {urlStructure[itemPath].map(childLink => (
//                               <li key={childLink} className="secondary-nav-subitem">
//                                 <Link 
//                                   href={`${itemPath}/${childLink}`}
//                                   className="secondary-nav-sublink"
//                                 >
//                                   {childLink.replace(/-/g, ' ')}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     );
//                   })}
//                 </ul>
//               </>
//             )}
            
//             {additionalNavGroup && additionalNavGroup.links && additionalNavGroup.links.length > 0 && (
//               <>
//                 <h3 className="secondary-nav-group-title">
//                   {processContent(additionalNavGroup.groupTitle)}
//                 </h3>
//                 <ul className="secondary-nav-list">
//                   {additionalNavGroup.links.map((link, index) => (
//                     <li key={index} className="secondary-nav-item">
//                       <Link 
//                         href={link.href}
//                         className="secondary-nav-link"
//                       >
//                         {processContent(link.title)}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             )}
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div className="secondary-nav">
//         <button 
//           className="secondary-nav-toggle"
//           onClick={toggleSecondaryNav}
//         >
//           <span>{processContent(secondaryNavTitle)}</span>
//           <ChevronDown 
//             className={`accordion-arrow ${secondaryNavOpen ? 'expanded' : ''}`}
//             size={20}
//             strokeWidth={2}
//           />
//         </button>
        
//         {secondaryNavOpen && (
//           <div className="secondary-nav-content">
//             {secondaryNavLinks.length > 0 && (
//               <ul className="secondary-nav-list">
//                 {secondaryNavLinks.map((link) => (
//                   <li key={link} className="secondary-nav-item">
//                     <Link 
//                       href={`${currentPath}${currentPath === '/' ? '' : '/'}${link}`} 
//                       className="secondary-nav-link"
//                     >
//                       {link.replace(/-/g, ' ')}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
            
//             {additionalNavGroup && additionalNavGroup.links && additionalNavGroup.links.length > 0 && (
//               <>
//                 <h3 className="secondary-nav-group-title">
//                   {processContent(additionalNavGroup.groupTitle)}
//                 </h3>
//                 <ul className="secondary-nav-list">
//                   {additionalNavGroup.links.map((link, index) => (
//                     <li key={index} className="secondary-nav-item">
//                       <Link 
//                         href={link.href}
//                         className="secondary-nav-link"
//                       >
//                         {processContent(link.title)}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </>
//             )}
//           </div>
//         )}
//       </div>
//     );
//   };

//   const spacerStyle = {
//     height: tocHeight + 'px',
//     width: '100%'
//   };

//   return (
//     <div>
//       {isSticky && <div className="toc-spacer" style={spacerStyle} />}
      
//       <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
//         {finalTheme.styles.showHeader && !isSticky && (
//           <div className="toc-header">{finalTheme.styles.headerText}</div>
//         )}
//         {sections.length > 0 && (
//           <div className="toc-list">
//             {sections.map(renderSection)}
//           </div>
//         )}
//         {showSecondaryNav && renderSecondaryNav()}
//         <style jsx global>{`
//           .toc-spacer {
//             display: block;
//           }

//           .toc-container {
//             width: 85%;
//             max-width: ${finalTheme.sizes.maxWidth};
//             margin: 30px auto;
//             padding: ${finalTheme.spacing.containerPadding};
//             background: ${finalTheme.colors.background};
//             border: ${finalTheme.sizes.borderWidth} solid ${finalTheme.colors.border};
//             ${finalTheme.styles.showTopBorder ? `border-top: ${finalTheme.sizes.topBorderWidth} solid ${finalTheme.colors.topBorder};` : ''}
//             ${finalTheme.styles.showLeftBorder ? `border-left: ${finalTheme.sizes.leftBorderWidth} solid ${finalTheme.colors.leftBorder};` : ''}
//             border-radius: ${finalTheme.effects.borderRadius};
//             box-shadow: ${finalTheme.effects.boxShadow};
//             font-family: ${finalTheme.fonts.primary};
//           }

//           .toc-header {
//             background: ${finalTheme.colors.headerBg};
//             color: ${finalTheme.colors.headerText};
//             padding: ${finalTheme.spacing.headerPadding || '16px 24px'};
//             font-size: ${finalTheme.sizes.headerFontSize || '18px'};
//             font-weight: 700;
//             text-align: center;
//           }

//           .toc-list {
//             display: flex;
//             flex-direction: column;
//             gap: ${finalTheme.spacing.gap};
//           }

//           .toc-item {
//             width: 100%;
//             background-color: ${finalTheme.colors.background};
//             border-bottom: 1px solid ${finalTheme.colors.borderLight};
//             padding: 0;
//             transition: all ${finalTheme.effects.transition};
//             position: relative;
//           }

//           ${finalTheme.styles.showNumbers ? `
//           .toc-item::before {
//             content: attr(data-number);
//             position: absolute;
//             left: 24px;
//             top: 50%;
//             transform: translateY(-50%);
//             font-weight: 700;
//             color: ${finalTheme.colors.numberColor};
//             font-size: ${finalTheme.sizes.fontSize};
//           }

//           .toc-item .toc-link {
//             padding-left: 60px;
//           }

//           .sticky .toc-item::before {
//             left: 16px;
//             font-size: ${finalTheme.sizes.fontSizeSticky};
//           }

//           .sticky .toc-item .toc-link {
//             padding-left: 48px;
//           }
//           ` : ''}

//           ${finalTheme.effects.showLeftIndicator ? `
//           .toc-item::after {
//             content: '';
//             position: absolute;
//             left: 0;
//             top: 50%;
//             transform: translateY(-50%);
//             width: ${finalTheme.sizes.leftBorderWidth};
//             height: 0;
//             background: ${finalTheme.colors.leftBorder};
//             transition: height ${finalTheme.effects.transition};
//           }

//           .toc-item:hover::after {
//             height: ${finalTheme.effects.leftIndicatorHeight};
//           }
//           ` : ''}

//           .toc-item:last-child {
//             border-bottom: none;
//           }

//           .toc-item:hover {
//             background-color: ${finalTheme.colors.backgroundHover};
//             ${finalTheme.effects.hoverTransform !== 'none' ? `transform: ${finalTheme.effects.hoverTransform};` : ''}
//           }

//           .toc-link {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             text-align: left;
//             text-decoration: none;
//             color: ${finalTheme.colors.text};
//             font-weight: 600;
//             font-size: ${finalTheme.sizes.fontSize};
//             line-height: 1.5;
//             width: 100%;
//             padding: ${finalTheme.spacing.itemPadding};
//             transition: all ${finalTheme.effects.transition};
//           }

//           ${finalTheme.styles.itemHoverIndent ? `
//           .toc-item:hover .toc-link {
//             padding-left: calc(${finalTheme.spacing.itemPadding.split(' ')[1]} + ${finalTheme.effects.hoverIndent});
//           }
//           ` : ''}

//           .toc-link-content {
//             display: flex;
//             align-items: center;
//             gap: 12px;
//             flex: 1;
//           }

//           .section-title {
//             flex: 1;
//           }

//           .toc-icon {
//             display: flex;
//             align-items: center;
//             flex-shrink: 0;
//             opacity: 0.9;
//             transition: opacity ${finalTheme.effects.transition};
//             ${finalTheme.colors.icon !== 'transparent' ? `
//             width: ${finalTheme.sizes.iconSize};
//             height: ${finalTheme.sizes.iconSize};
//             background: ${finalTheme.colors.icon};
//             border-radius: 3px;
//             ` : ''}
//           }

//           .toc-item:hover .toc-icon {
//             opacity: 1;
//           }

//           .accordion-header {
//             width: 100%;
//             border: none;
//             background: none;
//             cursor: pointer;
//             padding: 0;
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//           }

//           .accordion-arrow {
//             transition: all ${finalTheme.effects.transition};
//             flex-shrink: 0;
//             color:white;
//           }

//           .accordion-arrow.expanded {
//             transform: rotate(90deg);
//             color:white;
//           }

//           .subsections-list {
//             margin: 0;
//             padding: 8px 0 12px 0;
//             background-color: ${finalTheme.colors.subsectionBg};
//             border-top: 1px solid ${finalTheme.colors.borderLight};
//             display: flex;
//             flex-direction: column;
//             gap: 0;
//           }

//           .subsection-link {
//             color: ${finalTheme.colors.subsectionText};
//             text-decoration: none;
//             font-size: ${finalTheme.sizes.subsectionFontSize};
//             font-weight: 400;
//             padding: ${finalTheme.spacing.subsectionPadding};
//             transition: all ${finalTheme.effects.transition};
//             position: relative;
//             display: block;
//           }

//           ${finalTheme.styles.subsectionIndicator ? `
//           .subsection-link::before {
//             content: '${finalTheme.styles.subsectionIndicator}';
//             position: absolute;
//             left: ${finalTheme.spacing.subsectionPadding.split(' ')[3] ? `calc(${finalTheme.spacing.subsectionPadding.split(' ')[3]} - 16px)` : '36px'};
//             color: #9ca3af;
//             transition: all ${finalTheme.effects.transition};
//           }
//           ` : ''}

//           .subsection-link:hover {
//             background-color: ${finalTheme.colors.subsectionBgHover};
//             color: ${finalTheme.colors.subsectionHover};
//           }

//           ${finalTheme.styles.subsectionIndicator ? `
//           .subsection-link:hover::before {
//             color: ${finalTheme.colors.subsectionHover};
//             left: ${finalTheme.spacing.subsectionPadding.split(' ')[3] ? `calc(${finalTheme.spacing.subsectionPadding.split(' ')[3]} - 12px)` : '40px'};
//           }
//           ` : ''}

//           .toc-link:hover {
//             color: ${finalTheme.colors.primaryHover};
//           }

//           .secondary-nav {
//             width: 100%;
//             margin-top: 24px;
//             border-radius: 10px;
//             overflow: hidden;
//             border: 1.5px solid #1565c0;
//             background-color: #0d47a1;
//             box-shadow: 0 4px 12px rgba(13, 71, 161, 0.2);
//           }

//           .secondary-nav-toggle {
//             width: 100%;
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 18px 24px;
//             background: linear-gradient(135deg, #1565c0 0%, #1976d2 100%);
//             border: none;
//             cursor: pointer;
//             font-size: 16px;
//             font-weight: 600;
//             color: white;
//             text-align: left;
//             text-transform: capitalize;
//             transition: background 0.3s ease;
//           }

//           .secondary-nav-toggle:hover {
//             background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
//           }

//           .secondary-nav-content {
//             padding: 20px 24px;
//             background-color: #1565c0;
//             border-top: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .secondary-nav-title {
//             font-size: 16px;
//             color: white;
//             margin-bottom: 16px;
//             font-weight: 600;
//             text-transform: capitalize;
//             letter-spacing: 0.3px;
//           }

//           .secondary-nav-group-title {
//             font-size: 14px;
//             color: rgba(255, 255, 255, 0.85);
//             margin-top: 24px;
//             margin-bottom: 12px;
//             font-weight: 600;
//             text-transform: capitalize;
//             letter-spacing: 0.3px;
//             padding-top: 16px;
//             border-top: 1px solid rgba(255, 255, 255, 0.15);
//           }

//           .secondary-nav-list {
//             list-style: none;
//             padding: 0;
//             margin: 0;
//           }

//           .secondary-nav-item {
//             margin-bottom: 8px;
//           }

//           .secondary-nav-link {
//             display: block;
//             padding: 4px 6px;
//             color: white;
//             text-decoration: none;
//             font-size: 14px;
//             font-weight: 500;
//             border-radius: 6px;
//             transition: all 0.2s ease;
//             text-transform: capitalize;
//             position: relative;
//             overflow: hidden;
//           }

//           .secondary-nav-link::before {
//             content: '';
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 3px;
//             height: 100%;
//             background-color: #64b5f6;
//             transform: scaleY(0);
//             transition: transform 0.2s ease;
//           }

//           .secondary-nav-link:hover::before {
//             transform: scaleY(1);
//           }

//           .secondary-nav-link:hover {
//             background-color: rgba(255, 255, 255, 0.15);
//             padding-left: 20px;
//           }

//           .secondary-nav-item-wrapper {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//           }

//           .expand-toggle {
//             background: none;
//             border: none;
//             cursor: pointer;
//             padding: 8px 12px;
//             border-radius: 4px;
//             transition: background-color 0.2s ease;
//           }

//           .expand-toggle:hover {
//             background-color: rgba(255, 255, 255, 0.1);
//           }

//           .secondary-arrow {
//             color: rgba(255, 255, 255, 0.7);
//             transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           }

//           .secondary-arrow.expanded {
//             transform: rotate(90deg);
//             color: white;
//           }

//           .secondary-nav-sublist {
//             list-style: none;
//             padding-left: 24px;
//             margin-top: 8px;
//           }

//           .secondary-nav-subitem {
//             margin-bottom: 6px;
//           }

//           .secondary-nav-sublink {
//             display: block;
//             padding: 8px 12px;
//             color: #bbdefb;
//             text-decoration: none;
//             font-size: 13px;
//             font-weight: 500;
//             text-transform: capitalize;
//             border-radius: 4px;
//             transition: all 0.2s ease;
//           }

//           .secondary-nav-sublink:hover {
//             color: white;
//             background-color: rgba(255, 255, 255, 0.1);
//             padding-left: 16px;
//           }

//           .sticky {
//             position: fixed;
//             top: 100px;
//             height: 100%;
//             left: 0;
//             width: ${finalTheme.sizes.stickyWidth};
//             max-height: calc(100vh - 60px);
//             overflow-y: auto;
//             z-index: 1000;
//             padding: 0;
//             background: ${finalTheme.colors.background};
//             box-shadow: ${finalTheme.effects.boxShadowSticky};
//             border: ${finalTheme.sizes.borderWidth} solid ${finalTheme.colors.border};
//             ${finalTheme.styles.showLeftBorder ? `border-left: ${finalTheme.sizes.leftBorderWidth} solid ${finalTheme.colors.leftBorder};` : ''}
//             border-radius: ${finalTheme.effects.borderRadius};
//             scrollbar-width: thin;
//             scrollbar-color: ${finalTheme.colors.border} ${finalTheme.colors.background};
//           }

//           .sticky::-webkit-scrollbar {
//             width: 5px;
//           }

//           .sticky::-webkit-scrollbar-track {
//             background: ${finalTheme.colors.background};
//           }

//           .sticky::-webkit-scrollbar-thumb {
//             background: ${finalTheme.colors.border};
//             border-radius: 3px;
//           }

//           .sticky::-webkit-scrollbar-thumb:hover {
//             background: ${finalTheme.colors.arrow};
//           }

//           .sticky .toc-item.sticky-mode {
//             border-bottom: 1px solid ${finalTheme.colors.borderLight};
//           }

//           .sticky .toc-link {
//             padding: ${finalTheme.spacing.itemPaddingSticky};
//             font-size: ${finalTheme.sizes.fontSizeSticky};
//           }

//           .sticky .subsections-list {
//             padding: 6px 0 8px 0;
//           }

//           .sticky .subsection-link {
//             padding: ${finalTheme.spacing.subsectionPaddingSticky};
//             font-size: ${finalTheme.sizes.subsectionFontSizeSticky};
//           }

//           .sticky .secondary-nav {
//             width: 100%;
//             margin-right: 0;
//             border: none;
//             border-radius: 8px;
//             background-color: #0d47a1;
//             margin-top: 50px;
//           }
          
//           .sticky-secondary-nav {
//             padding: 12px;
//           }

//           .sticky .secondary-nav-content {
//             background-color: #0d47a1;
//             width: 100%;
//             padding: 12px 16px;
//           }

//           .sticky .secondary-nav-title {
//             color: white;
//             font-size: 12px;
//             margin-bottom: 8px;
//           }

//           .sticky .secondary-nav-group-title {
//             font-size: 11px;
//             color: rgba(255, 255, 255, 0.85);
//             margin-top: 16px;
//             margin-bottom: 8px;
//             padding-top: 12px;
//           }

//           .sticky .secondary-nav-link {
//             color: white;
//             padding: 6px 10px;
//             font-size: 13px;
//           }

//           .sticky .secondary-nav-sublink {
//             color: #bbdefb;
//             padding: 5px 10px;
//             font-size: 12px;
//           }

//           @media (max-width: 1024px) {
//             .toc-container {
//               width: 90%;
//             }
//           }

//           @media (max-width: 768px) {
//             .toc-container {
//               width: 95%;
//               padding: 0;
//             }

//             .sticky {
//               display: none;
//             }

//             .toc-spacer {
//               display: none;
//             }

//             .toc-container:not(.sticky) {
//               position: relative;
//               width: 95%;
//               margin: 16px auto;
//             }
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// };

// export default SectionTableOfContents;


import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import tocThemes from './tocThemes';
import { processContent } from '@/app/utils/contentProcessor';

const SectionTableOfContents = ({ 
  sections = [], 
  title = '',
  showSecondaryNav = false,
  secondaryNavMode = 'children', 
  secondaryNavTitle = 'More in this Section',
  navLinks = null,
  additionalNavGroup = null,
  theme = 'classicAcademic',
  numbered = false,
  maxWidth = null,
  stickyWidth = null,
  stickyOffset = 600
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [urlStructure, setUrlStructure] = useState({});
  const [secondaryNavLinks, setSecondaryNavLinks] = useState(
    navLinks && navLinks.links ? navLinks.links : []
  );
  const [useProvidedLinks, setUseProvidedLinks] = useState(
    !!(navLinks && navLinks.links && Array.isArray(navLinks.links) && navLinks.links.length > 0)
  );
  const [currentPath, setCurrentPath] = useState('');
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false);
  const [expandedSecondaryItems, setExpandedSecondaryItems] = useState({});
  const [itemNumbers, setItemNumbers] = useState({});
  const [tocHeight, setTocHeight] = useState(0);
  const [prevHeight, setPrevHeight] = useState(0);
  const boxRef = useRef(null);
  const stickyThreshold = useRef(0);
  const pathname = usePathname();

  const activeTheme = typeof theme === 'object' ? theme : (tocThemes[theme] || tocThemes.classicAcademic);

  const finalTheme = {
    ...activeTheme,
    styles: {
      ...activeTheme.styles,
      showNumbers: numbered !== false ? numbered : activeTheme.styles.showNumbers
    },
    sizes: {
      ...activeTheme.sizes,
      maxWidth: maxWidth || activeTheme.sizes.maxWidth,
      stickyWidth: stickyWidth || activeTheme.sizes.stickyWidth
    }
  };

  useEffect(() => {
    if (finalTheme.styles.showNumbers) {
      const numbers = {};
      sections.forEach((section, index) => {
        numbers[section.id] = `${index + 1}.`;
      });
      setItemNumbers(numbers);
    }
  }, [sections, finalTheme.styles.showNumbers]);

  useEffect(() => {
    if (navLinks && navLinks.links && Array.isArray(navLinks.links) && navLinks.links.length > 0) {
      setUseProvidedLinks(true);
      
      const filteredLinks = navLinks.links.filter(link => !link.includes('[') && !link.includes(']'));
      setSecondaryNavLinks(filteredLinks);
      
      setCurrentPath(navLinks.currentPath || pathname);
      
      const basicStructure = {};
      if (navLinks.currentPath) {
        basicStructure[navLinks.currentPath] = filteredLinks;
        setUrlStructure(basicStructure);
      }
    } else {
      setUseProvidedLinks(false);
    }
  }, [navLinks, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const currentScrollPos = window.pageYOffset;
        const shouldBeSticky = currentScrollPos > stickyThreshold.current;
        
        if (shouldBeSticky !== isSticky) {
          setIsSticky(shouldBeSticky);
        }
      }
    };

    const setInitialThreshold = () => {
      if (boxRef.current) {
        const height = boxRef.current.offsetHeight;
        setTocHeight(height);
        setPrevHeight(height);
        stickyThreshold.current = boxRef.current.offsetTop + stickyOffset;
      }
    };

    setInitialThreshold();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setInitialThreshold);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setInitialThreshold);
    };
  }, [isSticky, stickyOffset]);

  useEffect(() => {
    if (!isSticky && boxRef.current) {
      setTimeout(() => {
        if (boxRef.current) {
          const newHeight = boxRef.current.offsetHeight;
          const heightDiff = newHeight - prevHeight;
          
          if (heightDiff > 0) {
            stickyThreshold.current = stickyThreshold.current + heightDiff;
          }
          
          setTocHeight(newHeight);
          setPrevHeight(newHeight);
        }
      }, 100);
    }
  }, [secondaryNavOpen, expandedSecondaryItems, isSticky, prevHeight]);

  useEffect(() => {
    if (!showSecondaryNav || useProvidedLinks) return;
    
    async function fetchSitemap() {
      try {
        const response = await fetch('/api/sitemap');
        const data = await response.json();
        setUrlStructure(data);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    }
    
    fetchSitemap();
  }, [showSecondaryNav, useProvidedLinks]);

  useEffect(() => {
    if (useProvidedLinks || !showSecondaryNav || !pathname || Object.keys(urlStructure).length === 0) return;
    
    let path = pathname;
    let newLinks = [];

    if (secondaryNavMode === 'children') {
      newLinks = urlStructure[path] || [];
    } else if (secondaryNavMode === 'siblings') {
      const pathParts = pathname.split('/').filter(Boolean);
      pathParts.pop();
      const parentPath = pathParts.length === 0 ? '/' : '/' + pathParts.join('/');
      
      newLinks = urlStructure[parentPath] || [];
      
      path = parentPath;
    }

    newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
    setSecondaryNavLinks(newLinks);
    setCurrentPath(path);
  }, [urlStructure, pathname, secondaryNavMode, showSecondaryNav, useProvidedLinks]);

  const handleLinkClick = (e, id, parentId = null) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = isSticky ? 100 : 320;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const toggleSecondaryNav = () => {
    setSecondaryNavOpen(!secondaryNavOpen);
  };

  const toggleSecondaryItem = (itemPath) => {
    setExpandedSecondaryItems(prev => ({
      ...prev,
      [itemPath]: !prev[itemPath]
    }));
  };

  const renderIcon = (icon) => {
    if (!finalTheme.styles.showIcons) return null;
    
    const size = isSticky ? parseInt(finalTheme.sizes.iconSizeSticky) : parseInt(finalTheme.sizes.iconSize);
    
    if (typeof icon === 'string') {
      return <Image src={icon} alt="" width={size} height={size} />;
    } else if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { width: size, height: size });
    } else if (icon && typeof icon === 'object' && icon.src) {
      return <Image src={icon} alt="" width={size} height={size} />;
    }
    return null;
  };

  const renderSection = (section) => {
    const arrowSize = isSticky ? parseInt(finalTheme.sizes.arrowSizeSticky) : parseInt(finalTheme.sizes.arrowSize);
    
    if (section.subsections) {
      return (
        <div 
          key={section.id} 
          className={`toc-item accordion ${isSticky ? 'sticky-mode' : ''}`}
          data-number={finalTheme.styles.showNumbers ? itemNumbers[section.id] : ''}
        >
          <button 
            className="toc-link accordion-header" 
            onClick={() => toggleSection(section.id)}
          >
            <div className="toc-link-content">
              {section.icon && renderIcon(section.icon)}
              <span className="section-title">{processContent(section.title)}</span>
            </div>
            {finalTheme.styles.showArrows && (
              <ChevronRight 
                className={`accordion-arrow ${expandedSection === section.id ? 'expanded' : ''}`}
                size={arrowSize}
                strokeWidth={2}
              />
            )}
          </button>
          {expandedSection === section.id && (
            <div className="subsections-list">
              {section.subsections.map((subsection) => (
                <a
                  key={subsection.id}
                  href={`#${subsection.id}`}
                  onClick={(e) => handleLinkClick(e, subsection.id, section.id)}
                  className="subsection-link"
                >
                  {processContent(subsection.title)}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div 
        key={section.id} 
        className={`toc-item ${isSticky ? 'sticky-mode' : ''}`}
        data-number={finalTheme.styles.showNumbers ? itemNumbers[section.id] : ''}
      >
        <a
          href={`#${section.id}`}
          onClick={(e) => handleLinkClick(e, section.id)}
          className="toc-link"
        >
          <div className="toc-link-content">
            {section.icon && renderIcon(section.icon)}
            <span className="section-title">{processContent(section.title)}</span>
          </div>
        </a>
      </div>
    );
  };

  const renderSecondaryNav = () => {
    if (secondaryNavLinks.length === 0 && (!additionalNavGroup || !additionalNavGroup.links || additionalNavGroup.links.length === 0)) return null;

    if (isSticky) {
      return (
        <div className="secondary-nav sticky-secondary-nav">
          <div className="secondary-nav-content">
            {secondaryNavLinks.length > 0 && (
              <>
                <h3 className="secondary-nav-title">
                  {processContent(secondaryNavTitle)}
                </h3>
                <ul className="secondary-nav-list">
                  {secondaryNavLinks.map((link) => {
                    const hasChildren = !useProvidedLinks && urlStructure[`${currentPath}${currentPath === '/' ? '' : '/'}${link}`] && 
                                       urlStructure[`${currentPath}${currentPath === '/' ? '' : '/'}${link}`].length > 0;
                    const itemPath = `${currentPath}${currentPath === '/' ? '' : '/'}${link}`;
                    
                    return (
                      <li key={link} className="secondary-nav-item">
                        <div className="secondary-nav-item-wrapper">
                          <Link 
                            href={itemPath}
                            className="secondary-nav-link"
                          >
                            {link.replace(/-/g, ' ')}
                          </Link>
                          {hasChildren && (
                            <button 
                              className="expand-toggle"
                              onClick={() => toggleSecondaryItem(itemPath)}
                            >
                              <ChevronRight 
                                className={`secondary-arrow ${expandedSecondaryItems[itemPath] ? 'expanded' : ''}`}
                                size={14}
                                strokeWidth={2}
                              />
                            </button>
                          )}
                        </div>
                        
                        {hasChildren && expandedSecondaryItems[itemPath] && (
                          <ul className="secondary-nav-sublist">
                            {urlStructure[itemPath].map(childLink => (
                              <li key={childLink} className="secondary-nav-subitem">
                                <Link 
                                  href={`${itemPath}/${childLink}`}
                                  className="secondary-nav-sublink"
                                >
                                  {childLink.replace(/-/g, ' ')}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
            
            {additionalNavGroup && additionalNavGroup.links && additionalNavGroup.links.length > 0 && (
              <>
                <h3 className="secondary-nav-group-title">
                  {processContent(additionalNavGroup.groupTitle)}
                </h3>
                <ul className="secondary-nav-list">
                  {additionalNavGroup.links.map((link, index) => (
                    <li key={index} className="secondary-nav-item">
                      <Link 
                        href={link.href}
                        className="secondary-nav-link"
                      >
                        {processContent(link.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      );
    }

    return (
      <div className="secondary-nav">
        <button 
          className="secondary-nav-toggle"
          onClick={toggleSecondaryNav}
        >
          <span>{processContent(secondaryNavTitle)}</span>
          <ChevronDown 
            className={`accordion-arrow ${secondaryNavOpen ? 'expanded' : ''}`}
            size={20}
            strokeWidth={2}
          />
        </button>
        
        {secondaryNavOpen && (
          <div className="secondary-nav-content">
            {secondaryNavLinks.length > 0 && (
              <ul className="secondary-nav-list">
                {secondaryNavLinks.map((link) => (
                  <li key={link} className="secondary-nav-item">
                    <Link 
                      href={`${currentPath}${currentPath === '/' ? '' : '/'}${link}`} 
                      className="secondary-nav-link"
                    >
                      {link.replace(/-/g, ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            
            {additionalNavGroup && additionalNavGroup.links && additionalNavGroup.links.length > 0 && (
              <>
                <h3 className="secondary-nav-group-title">
                  {processContent(additionalNavGroup.groupTitle)}
                </h3>
                <ul className="secondary-nav-list">
                  {additionalNavGroup.links.map((link, index) => (
                    <li key={index} className="secondary-nav-item">
                      <Link 
                        href={link.href}
                        className="secondary-nav-link"
                      >
                        {processContent(link.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>
    );
  };

  const spacerStyle = {
    height: tocHeight + 'px',
    width: '100%'
  };

  return (
    <div>
      {isSticky && <div className="toc-spacer" style={spacerStyle} />}
      
      <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
        {finalTheme.styles.showHeader && !isSticky && (
          <div className="toc-header">{finalTheme.styles.headerText}</div>
        )}
        {sections.length > 0 && (
          <div className="toc-list">
            {sections.map(renderSection)}
          </div>
        )}
        {showSecondaryNav && renderSecondaryNav()}
        <style jsx global>{`
          .toc-spacer {
            display: block;
          }

          .toc-container {
            width: 85%;
            max-width: ${finalTheme.sizes.maxWidth};
            margin: 30px auto;
            padding: ${finalTheme.spacing.containerPadding};
            background: ${finalTheme.colors.background};
            border: ${finalTheme.sizes.borderWidth} solid ${finalTheme.colors.border};
            ${finalTheme.styles.showTopBorder ? `border-top: ${finalTheme.sizes.topBorderWidth} solid ${finalTheme.colors.topBorder};` : ''}
            ${finalTheme.styles.showLeftBorder ? `border-left: ${finalTheme.sizes.leftBorderWidth} solid ${finalTheme.colors.leftBorder};` : ''}
            border-radius: ${finalTheme.effects.borderRadius};
            box-shadow: ${finalTheme.effects.boxShadow};
            font-family: ${finalTheme.fonts.primary};
          }

          .toc-header {
            background: ${finalTheme.colors.headerBg};
            color: ${finalTheme.colors.headerText};
            padding: ${finalTheme.spacing.headerPadding || '16px 24px'};
            font-size: ${finalTheme.sizes.headerFontSize || '18px'};
            font-weight: 700;
            text-align: center;
          }

          .toc-list {
            display: flex;
            flex-direction: column;
            gap: ${finalTheme.spacing.gap};
          }

          .toc-item {
            width: 100%;
            background-color: ${finalTheme.colors.background};
            border-bottom: 1px solid ${finalTheme.colors.borderLight};
            padding: 0;
            transition: all ${finalTheme.effects.transition};
            position: relative;
          }

          ${finalTheme.styles.showNumbers ? `
          .toc-item::before {
            content: attr(data-number);
            position: absolute;
            left: 24px;
            top: 50%;
            transform: translateY(-50%);
            font-weight: 700;
            color: ${finalTheme.colors.numberColor};
            font-size: ${finalTheme.sizes.fontSize};
          }

          .toc-item .toc-link {
            padding-left: 60px;
          }

          .sticky .toc-item::before {
            left: 16px;
            font-size: ${finalTheme.sizes.fontSizeSticky};
          }

          .sticky .toc-item .toc-link {
            padding-left: 48px;
          }
          ` : ''}

          ${finalTheme.effects.showLeftIndicator ? `
          .toc-item::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: ${finalTheme.sizes.leftBorderWidth};
            height: 0;
            background: ${finalTheme.colors.leftBorder};
            transition: height ${finalTheme.effects.transition};
          }

          .toc-item:hover::after {
            height: ${finalTheme.effects.leftIndicatorHeight};
          }
          ` : ''}

          .toc-item:last-child {
            border-bottom: none;
          }

          .toc-item:hover {
            background-color: ${finalTheme.colors.backgroundHover};
            ${finalTheme.effects.hoverTransform !== 'none' ? `transform: ${finalTheme.effects.hoverTransform};` : ''}
          }

          .toc-link {
            display: flex;
            align-items: center;
            justify-content: space-between;
            text-align: left;
            text-decoration: none;
            color: ${finalTheme.colors.text};
            font-weight: 600;
            font-size: ${finalTheme.sizes.fontSize};
            line-height: 1.5;
            width: 100%;
            padding: ${finalTheme.spacing.itemPadding};
            transition: all ${finalTheme.effects.transition};
          }

          ${finalTheme.styles.itemHoverIndent ? `
          .toc-item:hover .toc-link {
            padding-left: calc(${finalTheme.spacing.itemPadding.split(' ')[1]} + ${finalTheme.effects.hoverIndent});
          }
          ` : ''}

          .toc-link-content {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
          }

          .section-title {
            flex: 1;
          }

          .toc-icon {
            display: flex;
            align-items: center;
            flex-shrink: 0;
            opacity: 0.9;
            transition: opacity ${finalTheme.effects.transition};
            ${finalTheme.colors.icon !== 'transparent' ? `
            width: ${finalTheme.sizes.iconSize};
            height: ${finalTheme.sizes.iconSize};
            background: ${finalTheme.colors.icon};
            border-radius: 3px;
            ` : ''}
          }

          .toc-item:hover .toc-icon {
            opacity: 1;
          }

          .accordion-header {
            width: 100%;
            border: none;
            background: none;
            cursor: pointer;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .accordion-arrow {
            transition: all ${finalTheme.effects.transition};
            flex-shrink: 0;
            color:white;
          }

          .accordion-arrow.expanded {
            transform: rotate(90deg);
            color:white;
          }

          .subsections-list {
            margin: 0;
            padding: 8px 0 12px 0;
            background-color: ${finalTheme.colors.subsectionBg};
            border-top: 1px solid ${finalTheme.colors.borderLight};
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          .subsection-link {
            color: ${finalTheme.colors.subsectionText};
            text-decoration: none;
            font-size: ${finalTheme.sizes.subsectionFontSize};
            font-weight: 400;
            padding: ${finalTheme.spacing.subsectionPadding};
            transition: all ${finalTheme.effects.transition};
            position: relative;
            display: block;
          }

          ${finalTheme.styles.subsectionIndicator ? `
          .subsection-link::before {
            content: '${finalTheme.styles.subsectionIndicator}';
            position: absolute;
            left: ${finalTheme.spacing.subsectionPadding.split(' ')[3] ? `calc(${finalTheme.spacing.subsectionPadding.split(' ')[3]} - 16px)` : '36px'};
            color: #9ca3af;
            transition: all ${finalTheme.effects.transition};
          }
          ` : ''}

          .subsection-link:hover {
            background-color: ${finalTheme.colors.subsectionBgHover};
            color: ${finalTheme.colors.subsectionHover};
          }

          ${finalTheme.styles.subsectionIndicator ? `
          .subsection-link:hover::before {
            color: ${finalTheme.colors.subsectionHover};
            left: ${finalTheme.spacing.subsectionPadding.split(' ')[3] ? `calc(${finalTheme.spacing.subsectionPadding.split(' ')[3]} - 12px)` : '40px'};
          }
          ` : ''}

          .toc-link:hover {
            color: ${finalTheme.colors.primaryHover};
          }

          .secondary-nav {
            width: 100%;
            margin-top: 24px;
            border-radius: 10px;
            overflow: hidden;
            border: 1.5px solid #1565c0;
            background-color: #0d47a1;
            box-shadow: 0 4px 12px rgba(13, 71, 161, 0.2);
          }

          .secondary-nav-toggle {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 18px 24px;
            background: linear-gradient(135deg, #1565c0 0%, #1976d2 100%);
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            color: white;
            text-align: left;
            text-transform: capitalize;
            transition: background 0.3s ease;
          }

          .secondary-nav-toggle:hover {
            background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
          }

          .secondary-nav-content {
            padding: 20px 24px;
            background-color: #1565c0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .secondary-nav-title {
            font-size: 16px;
            color: white;
            margin-bottom: 16px;
            font-weight: 600;
            text-transform: capitalize;
            letter-spacing: 0.3px;
          }

          .secondary-nav-group-title {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.85);
            margin-top: 24px;
            margin-bottom: 12px;
            font-weight: 600;
            text-transform: capitalize;
            letter-spacing: 0.3px;
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.15);
          }

          .secondary-nav-list {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .secondary-nav-item {
            margin-bottom: 8px;
          }

          .secondary-nav-link {
            display: block;
            padding: 4px 6px;
            color: white;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            border-radius: 6px;
            transition: all 0.2s ease;
            text-transform: capitalize;
            position: relative;
            overflow: hidden;
          }

          .secondary-nav-link::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            background-color: #64b5f6;
            transform: scaleY(0);
            transition: transform 0.2s ease;
          }

          .secondary-nav-link:hover::before {
            transform: scaleY(1);
          }

          .secondary-nav-link:hover {
            background-color: rgba(255, 255, 255, 0.15);
            padding-left: 20px;
          }

          .secondary-nav-item-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .expand-toggle {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px 12px;
            border-radius: 4px;
            transition: background-color 0.2s ease;
          }

          .expand-toggle:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .secondary-arrow {
            color: rgba(255, 255, 255, 0.7);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .secondary-arrow.expanded {
            transform: rotate(90deg);
            color: white;
          }

          .secondary-nav-sublist {
            list-style: none;
            padding-left: 24px;
            margin-top: 8px;
          }

          .secondary-nav-subitem {
            margin-bottom: 6px;
          }

          .secondary-nav-sublink {
            display: block;
            padding: 8px 12px;
            color: #bbdefb;
            text-decoration: none;
            font-size: 13px;
            font-weight: 500;
            text-transform: capitalize;
            border-radius: 4px;
            transition: all 0.2s ease;
          }

          .secondary-nav-sublink:hover {
            color: white;
            background-color: rgba(255, 255, 255, 0.1);
            padding-left: 16px;
          }

          .sticky {
            position: fixed;
            top: 100px;
            height: 100%;
            left: 0;
            width: ${finalTheme.sizes.stickyWidth};
            max-height: calc(100vh - 60px);
            overflow-y: auto;
            z-index: 1000;
            padding: 0;
            background: ${finalTheme.colors.background};
            box-shadow: ${finalTheme.effects.boxShadowSticky};
            border: ${finalTheme.sizes.borderWidth} solid ${finalTheme.colors.border};
            ${finalTheme.styles.showLeftBorder ? `border-left: ${finalTheme.sizes.leftBorderWidth} solid ${finalTheme.colors.leftBorder};` : ''}
            border-radius: ${finalTheme.effects.borderRadius};
            scrollbar-width: thin;
            scrollbar-color: ${finalTheme.colors.border} ${finalTheme.colors.background};
          }

          .sticky::-webkit-scrollbar {
            width: 5px;
          }

          .sticky::-webkit-scrollbar-track {
            background: ${finalTheme.colors.background};
          }

          .sticky::-webkit-scrollbar-thumb {
            background: ${finalTheme.colors.border};
            border-radius: 3px;
          }

          .sticky::-webkit-scrollbar-thumb:hover {
            background: ${finalTheme.colors.arrow};
          }

          .sticky .toc-item.sticky-mode {
            border-bottom: 1px solid ${finalTheme.colors.borderLight};
          }

          .sticky .toc-link {
            padding: ${finalTheme.spacing.itemPaddingSticky};
            font-size: ${finalTheme.sizes.fontSizeSticky};
          }

          .sticky .subsections-list {
            padding: 6px 0 8px 0;
          }

          .sticky .subsection-link {
            padding: ${finalTheme.spacing.subsectionPaddingSticky};
            font-size: ${finalTheme.sizes.subsectionFontSizeSticky};
          }

          .sticky .secondary-nav {
            width: 100%;
            margin-right: 0;
            border: none;
            border-radius: 8px;
            background-color: #0d47a1;
            margin-top: 50px;
          }
          
          .sticky-secondary-nav {
            padding: 12px;
          }

          .sticky .secondary-nav-content {
            background-color: #0d47a1;
            width: 100%;
            padding: 12px 16px;
          }

          .sticky .secondary-nav-title {
            color: white;
            font-size: 12px;
            margin-bottom: 8px;
          }

          .sticky .secondary-nav-group-title {
            font-size: 11px;
            color: rgba(255, 255, 255, 0.85);
            margin-top: 16px;
            margin-bottom: 8px;
            padding-top: 12px;
          }

          .sticky .secondary-nav-link {
            color: white;
            padding: 6px 10px;
            font-size: 13px;
          }

          .sticky .secondary-nav-sublink {
            color: #bbdefb;
            padding: 5px 10px;
            font-size: 12px;
          }

          @media (max-width: 1024px) {
            .toc-container {
              width: 90%;
            }
          }

          @media (max-width: 768px) {
            .toc-container {
              width: 95%;
              padding: 0;
            }

            .sticky {
              display: none;
            }

            .toc-spacer {
              display: none;
            }

            .toc-container:not(.sticky) {
              position: relative;
              width: 95%;
              margin: 16px auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default SectionTableOfContents;