// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const SectionTableOfContents = ({ 
//   sections = [], 
//   title = '',
//   showSecondaryNav = false,
//   secondaryNavMode = 'children', 
//   secondaryNavTitle = 'More in this Section',
//   navLinks = null
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
//   const boxRef = useRef(null);
//   const stickyThreshold = useRef(0);
//   const pathname = usePathname();

//   // Check if we have proper navLinks
//   useEffect(() => {
//     if (navLinks && navLinks.links && Array.isArray(navLinks.links) && navLinks.links.length > 0) {
//       console.log('USING PROVIDED LINKS FROM PROPS');
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
//         setIsSticky(currentScrollPos > stickyThreshold.current);
//       }
//     };

//     const setInitialThreshold = () => {
//       if (boxRef.current) {
//         stickyThreshold.current = boxRef.current.offsetTop + 100;
//       }
//     };

//     setInitialThreshold();
//     window.addEventListener('scroll', handleScroll);
//     window.addEventListener('resize', setInitialThreshold);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//       window.removeEventListener('resize', setInitialThreshold);
//     };
//   }, []);

//   // Fetch sitemap data for secondary navigation - ONLY if no links provided
//   useEffect(() => {
//     if (!showSecondaryNav || useProvidedLinks) return;
    
//     async function fetchSitemap() {
//       try {
//         const response = await fetch('/api/sitemap');
//         const data = await response.json();
//         console.log('Links generated internally');
//         setUrlStructure(data);
//       } catch (error) {
//         console.error('Error fetching sitemap:', error);
//       }
//     }
    
//     fetchSitemap();
//   }, [showSecondaryNav, useProvidedLinks]);

//   // Process links for secondary navigation - only for API-based mode
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
//     if (typeof icon === 'string') {
//       return <Image src={icon} alt="" width={34} height={34} />;
//     } else if (React.isValidElement(icon)) {
//       return React.cloneElement(icon, { width: 24, height: 24 });
//     } else if (icon && typeof icon === 'object' && icon.src) {
//       return <Image src={icon} alt="" width={24} height={24} />;
//     }
//     return null;
//   };

//   const renderSection = (section) => {
//     if (section.subsections) {
//       return (
//         <div key={section.id} className="toc-item accordion" style={{backgroundColor: `${section.background}`}}>
//           <button 
//             className="toc-link accordion-header" 
//             onClick={() => toggleSection(section.id)}
//           >
//             {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
//             <span className="section-title">{section.title}</span>
//             <ChevronDown 
//               className={`accordion-arrow ${expandedSection === section.id ? 'expanded' : ''}`}
//               size={28}
//               strokeWidth={3}
//             />
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
//                   {subsection.title}
//                 </a>
//               ))}
//             </div>
//           )}
//         </div>
//       );
//     }

//     return (
//       <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
//         <a
//           href={`#${section.id}`}
//           onClick={(e) => handleLinkClick(e, section.id)}
//           className="toc-link"
//         >
//           {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
//           {section.title}
//         </a>
//       </div>
//     );
//   };

//   const renderSecondaryNav = () => {
//     if (secondaryNavLinks.length === 0) return null;

//     // In sticky mode, show direct menu without accordion
//     if (isSticky) {
//       return (
//         <div className="secondary-nav sticky-secondary-nav" style={{ width: '100%' }}>
//           <div className="secondary-nav-content" style={{ backgroundColor: '#0d47a1', width: '100%' }}>
//             <h3 className="secondary-nav-title" style={{ color: 'white' }}>
//               More in this Section
//             </h3>
//             <ul className="secondary-nav-list">
//               {secondaryNavLinks.map((link) => {
//                 const hasChildren = !useProvidedLinks && urlStructure[`${currentPath}${currentPath === '/' ? '' : '/'}${link}`] && 
//                                    urlStructure[`${currentPath}${currentPath === '/' ? '' : '/'}${link}`].length > 0;
//                 const itemPath = `${currentPath}${currentPath === '/' ? '' : '/'}${link}`;
                
//                 return (
//                   <li key={link} className="secondary-nav-item">
//                     <div className="secondary-nav-item-wrapper">
//                       <Link 
//                         href={itemPath}
//                         className="secondary-nav-link"
//                         style={{ color: 'white', textTransform: 'capitalize' }}
//                       >
//                         {link.replace(/-/g, ' ')}
//                       </Link>
//                       {hasChildren && (
//                         <button 
//                           className="expand-toggle"
//                           onClick={() => toggleSecondaryItem(itemPath)}
//                         >
//                           <ChevronDown 
//                             className={`secondary-arrow ${expandedSecondaryItems[itemPath] ? 'expanded' : ''}`}
//                             size={16}
//                             strokeWidth={2}
//                             color="white"
//                           />
//                         </button>
//                       )}
//                     </div>
                    
//                     {hasChildren && expandedSecondaryItems[itemPath] && (
//                       <ul className="secondary-nav-sublist">
//                         {urlStructure[itemPath].map(childLink => (
//                           <li key={childLink} className="secondary-nav-subitem">
//                             <Link 
//                               href={`${itemPath}/${childLink}`}
//                               className="secondary-nav-sublink"
//                               style={{ color: '#bbdefb', textTransform: 'capitalize' }}
//                             >
//                               {childLink.replace(/-/g, ' ')}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//       );
//     }

//     // For non-sticky mode - keep original accordion behavior
//     return (
//       <div className="secondary-nav">
//         <button 
//           className="secondary-nav-toggle"
//           onClick={toggleSecondaryNav}
//         >
//           <span>{secondaryNavTitle}</span>
//           <ChevronDown 
//             className={`accordion-arrow ${secondaryNavOpen ? 'expanded' : ''}`}
//             size={28}
//             strokeWidth={3}
//           />
//         </button>
        
//         {secondaryNavOpen && (
//           <div className="secondary-nav-content">
//             <ul className="secondary-nav-list">
//               {secondaryNavLinks.map((link) => (
//                 <li key={link} className="secondary-nav-item">
//                   <Link 
//                     href={`${currentPath}${currentPath === '/' ? '' : '/'}${link}`} 
//                     className="secondary-nav-link"
//                   >
//                     {link.replace(/-/g, ' ')}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
//       {sections.length > 0 && (
//         <div className="toc-grid">
//           {sections.map(renderSection)}
//         </div>
//       )}
//       {showSecondaryNav && renderSecondaryNav()}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

//         .toc-container {
//           width: 85%;
//           max-width: 1200px;
//           margin: 20px auto;
//           padding: 20px;
//           background: linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%);
//           border: 1px solid #e1e4e8;
//           border-radius: 12px;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
//           font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
//         }

//         .toc-grid {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 16px;
//         }

//         .toc-item {
//           flex: 0 0 calc(33.333% - 16px);
//           min-width: 180px;
//           background-color: #ffffff;
//           border: 1.5px solid #e8eaed;
//           border-radius: 10px;
//           padding: 16px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
//           transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//           min-height: 60px;
//           height: fit-content;
//           position: relative;
//           overflow: hidden;
//         }

//         .toc-item::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 3px;
//           background: linear-gradient(90deg, #1976d2 0%, #42a5f5 100%);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.3s ease;
//         }

//         .toc-item:hover::before {
//           transform: scaleX(1);
//         }

//         .toc-link {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           text-align: left;
//           text-decoration: none;
//           color: #1565c0;
//           font-weight: 600;
//           font-size: 15px;
//           line-height: 1.4;
//           width: 100%;
//           transition: color 0.2s ease;
//         }

//         .section-title {
//           flex: 1;
//           margin: 0 10px;
//         }

//         .toc-icon {
//           margin-right: 10px;
//           display: flex;
//           align-items: center;
//           flex-shrink: 0;
//           opacity: 0.9;
//           transition: opacity 0.2s ease;
//         }

//         .toc-item:hover .toc-icon {
//           opacity: 1;
//         }

//         .accordion-header {
//           width: 100%;
//           border: none;
//           background: none;
//           cursor: pointer;
//           padding: 0;
//           display: flex;
//           align-items: center;
//         }

//         .accordion-arrow {
//           color: #90a4ae;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           margin-right: 20px;
//           margin-top: 5px;
//         }

//         .accordion-arrow.expanded {
//           transform: rotate(180deg);
//           color: #1976d2;
//         }

//         .subsections-list {
//           margin-top: 16px;
//           padding-top: 16px;
//           border-top: 1.5px solid #e8eaed;
//           display: flex;
//           flex-direction: column;
//           gap: 10px;
//         }

//         .subsection-link {
//           color: #546e7a;
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 500;
//           padding: 8px 12px;
//           border-radius: 6px;
//           transition: all 0.2s ease;
//           margin-left: 28px;
//           position: relative;
//         }

//         .subsection-link::before {
//           content: '';
//           position: absolute;
//           left: -8px;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 4px;
//           height: 4px;
//           background-color: #1976d2;
//           border-radius: 50%;
//           opacity: 0;
//           transition: opacity 0.2s ease;
//         }

//         .subsection-link:hover::before {
//           opacity: 1;
//         }

//         .subsection-link:hover {
//           background-color: #e3f2fd;
//           color: #1565c0;
//           padding-left: 20px;
//         }

//         .toc-link:hover {
//           color: #0d47a1;
//         }

//         .toc-item:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
//           border-color: #1976d2;
//         }

//         /* Secondary Navigation Styles */
//         .secondary-nav {
//           width: 100%;
//           margin-top: 24px;
//           border-radius: 10px;
//           overflow: hidden;
//           border: 1.5px solid #1565c0;
//           background-color: #0d47a1;
//           box-shadow: 0 4px 12px rgba(13, 71, 161, 0.2);
//         }

//         .secondary-nav-toggle {
//           width: 100%;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 18px 24px;
//           background: linear-gradient(135deg, #1565c0 0%, #1976d2 100%);
//           border: none;
//           cursor: pointer;
//           font-size: 16px;
//           font-weight: 600;
//           color: white;
//           text-align: left;
//           text-transform: capitalize;
//           transition: background 0.3s ease;
//         }

//         .secondary-nav-toggle:hover {
//           background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
//         }

//         .secondary-nav-content {
//           padding: 20px 24px;
//           background-color: #1565c0;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//         }

//         .secondary-nav-title {
//           font-size: 16px;
//           color: white;
//           margin-bottom: 16px;
//           font-weight: 600;
//           text-transform: capitalize;
//           letter-spacing: 0.3px;
//         }

//         .secondary-nav-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }

//         .secondary-nav-item {
//           margin-bottom: 8px;
//         }

//         .secondary-nav-link {
//           display: block;
//           padding: 4px 6px;
//           color: white;
//           text-decoration: none;
//           font-size: 14px;
//           font-weight: 500;
//           border-radius: 6px;
//           transition: all 0.2s ease;
//           text-transform: capitalize;
//           position: relative;
//           overflow: hidden;
//         }

//         .secondary-nav-link::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 3px;
//           height: 100%;
//           background-color: #64b5f6;
//           transform: scaleY(0);
//           transition: transform 0.2s ease;
//         }

//         .secondary-nav-link:hover::before {
//           transform: scaleY(1);
//         }

//         .secondary-nav-link:hover {
//           background-color: rgba(255, 255, 255, 0.15);
//           padding-left: 20px;
//         }

//         /* Expandable items in sticky mode */
//         .secondary-nav-item-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .expand-toggle {
//           background: none;
//           border: none;
//           cursor: pointer;
//           padding: 8px 12px;
//           border-radius: 4px;
//           transition: background-color 0.2s ease;
//         }

//         .expand-toggle:hover {
//           background-color: rgba(255, 255, 255, 0.1);
//         }

//         .secondary-arrow {
//           color: rgba(255, 255, 255, 0.7);
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .secondary-arrow.expanded {
//           transform: rotate(180deg);
//           color: white;
//         }

//         .secondary-nav-sublist {
//           list-style: none;
//           padding-left: 24px;
//           margin-top: 8px;
//         }

//         .secondary-nav-subitem {
//           margin-bottom: 6px;
//         }

//         .secondary-nav-sublink {
//           display: block;
//           padding: 8px 12px;
//           color: #bbdefb;
//           text-decoration: none;
//           font-size: 13px;
//           font-weight: 500;
//           text-transform: capitalize;
//           border-radius: 4px;
//           transition: all 0.2s ease;
//         }

//         .secondary-nav-sublink:hover {
//           color: white;
//           background-color: rgba(255, 255, 255, 0.1);
//           padding-left: 16px;
//         }

//         /* Sticky Styling */
//         .sticky {
//           position: fixed;
//           top: 20px;
//           left: 0;
//           width: 270px;
//           height: calc(100vh - 40px);
//           overflow-y: auto;
//           z-index: 1000;
//           padding-top: 50px;
//           background: #ffffff;
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
//           border: 1px solid #e1e4e8;
//           border-radius: 12px;
//           scrollbar-width: thin;
//           scrollbar-color: #cbd5e0 #f7fafc;
//         }

//         .sticky::-webkit-scrollbar {
//           width: 6px;
//         }

//         .sticky::-webkit-scrollbar-track {
//           background: #f7fafc;
//           border-radius: 10px;
//         }

//         .sticky::-webkit-scrollbar-thumb {
//           background: #cbd5e0;
//           border-radius: 10px;
//         }

//         .sticky::-webkit-scrollbar-thumb:hover {
//           background: #a0aec0;
//         }

//         .sticky .toc-grid {
//           flex-direction: column;
//           gap: 12px;
//         }

//         .sticky .toc-item {
//           width: 100%;
//           margin-right: 0;
//         }

//         .sticky .secondary-nav {
//           width: 100%;
//           margin-right: 0;
//           border: none;
//           border-radius: 8px;
//           background-color: #0d47a1;
//           margin-top: 16px;
//         }
        
//         .sticky-secondary-nav {
//           padding: 12px;
//         }

//         @media (max-width: 1024px) {
//           .toc-container {
//             width: 90%;
//           }

//           .toc-item {
//             flex: 0 0 calc(50% - 16px);
//           }
//         }

//         @media (max-width: 768px) {
//           .toc-container {
//             width: 95%;
//             padding: 16px;
//             transition: opacity 0.3s ease;
//           }

//           .toc-item {
//             flex: 0 0 calc(50% - 16px);
//             min-width: 140px;
//           }

//           .sticky {
//             display: none;
//           }

//           .toc-container:not(.sticky) {
//             position: relative;
//             width: 95%;
//             margin: 16px auto;
//             opacity: 1;
//           }
//         }

//         @media (max-width: 480px) {
//           .toc-item {
//             flex: 0 0 100%;
//           }

//           .toc-grid {
//             gap: 12px;
//           }
//         }
//       `}</style>
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
  theme = 'classicAcademic', // default theme
  numbered = false, // show numbers on items
  maxWidth = null // custom max width, overrides theme default
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
  const boxRef = useRef(null);
  const stickyThreshold = useRef(0);
  const pathname = usePathname();

  // Get active theme - use prop if it's an object, otherwise look up in tocThemes
  const activeTheme = typeof theme === 'object' ? theme : (tocThemes[theme] || tocThemes.classicAcademic);

  // Override theme settings with props if provided
  const finalTheme = {
    ...activeTheme,
    styles: {
      ...activeTheme.styles,
      showNumbers: numbered !== false ? numbered : activeTheme.styles.showNumbers
    },
    sizes: {
      ...activeTheme.sizes,
      maxWidth: maxWidth || activeTheme.sizes.maxWidth
    }
  };

  // Generate item numbers for numbered theme
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
        setIsSticky(currentScrollPos > stickyThreshold.current);
      }
    };

    const setInitialThreshold = () => {
      if (boxRef.current) {
        stickyThreshold.current = boxRef.current.offsetTop + 1000;
      }
    };

    setInitialThreshold();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', setInitialThreshold);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', setInitialThreshold);
    };
  }, []);

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
    if (secondaryNavLinks.length === 0) return null;

    if (isSticky) {
      return (
        <div className="secondary-nav sticky-secondary-nav">
          <div className="secondary-nav-content">
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
          </div>
        )}
      </div>
    );
  };

  return (
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
          color: ${finalTheme.colors.arrow};
          transition: all ${finalTheme.effects.transition};
          flex-shrink: 0;
        }

        .accordion-arrow.expanded {
          transform: rotate(90deg);
          color: ${finalTheme.colors.arrowExpanded};
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

        /* Secondary Navigation Styles */
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

        /* Sticky Styling */
        .sticky {
         
          position: fixed;
          top: 100px;
          height:100%;
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

          .toc-container:not(.sticky) {
            position: relative;
            width: 95%;
            margin: 16px auto;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionTableOfContents;