

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SectionTableOfContents = ({ 
  sections = [], 
  title = '',
  showSecondaryNav = false,
  secondaryNavMode = 'children', 
  secondaryNavTitle = 'More in this Section',
  navLinks = null
}) => {
  const [isSticky, setIsSticky] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [urlStructure, setUrlStructure] = useState({});
  // const [secondaryNavLinks, setSecondaryNavLinks] = useState([]);
  const [secondaryNavLinks, setSecondaryNavLinks] = useState(
    navLinks && navLinks.links ? navLinks.links : []
  );
  const [useProvidedLinks, setUseProvidedLinks] = useState(
    !!(navLinks && navLinks.links && Array.isArray(navLinks.links) && navLinks.links.length > 0)
  );
  const [currentPath, setCurrentPath] = useState('');
  const [secondaryNavOpen, setSecondaryNavOpen] = useState(false);
  const [expandedSecondaryItems, setExpandedSecondaryItems] = useState({});
  // const [useProvidedLinks, setUseProvidedLinks] = useState(false);
  const boxRef = useRef(null);
  const stickyThreshold = useRef(0);
  const pathname = usePathname();

  // Check if we have proper navLinks
  useEffect(() => {
    // Check for proper navLinks object structure
    if (navLinks && navLinks.links && Array.isArray(navLinks.links) && navLinks.links.length > 0) {
      console.log('USING PROVIDED LINKS FROM PROPS');
      setUseProvidedLinks(true);
      
      // Filter and set the links
      const filteredLinks = navLinks.links.filter(link => !link.includes('[') && !link.includes(']'));
      setSecondaryNavLinks(filteredLinks);
      
      // Set the current path from navLinks or use pathname
      setCurrentPath(navLinks.currentPath || pathname);
      
      // Create a simple structure for the existing links to prevent API calls
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
        stickyThreshold.current = boxRef.current.offsetTop + 100;
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

  // Fetch sitemap data for secondary navigation - ONLY if no links provided
  useEffect(() => {
    if (!showSecondaryNav || useProvidedLinks) return;
    
    async function fetchSitemap() {
      try {
        const response = await fetch('/api/sitemap');
        const data = await response.json();
        console.log('Links generated internally');
        setUrlStructure(data);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    }
    
    fetchSitemap();
  }, [showSecondaryNav, useProvidedLinks]);

  // Process links for secondary navigation - only for API-based mode
  // useEffect(() => {
  //   if (useProvidedLinks || !showSecondaryNav || !pathname || Object.keys(urlStructure).length === 0) return;
    
  //   let path = pathname;
  //   let newLinks = [];

  //   if (secondaryNavMode === 'children') {
  //     newLinks = urlStructure[path] || [];
  //   } else if (secondaryNavMode === 'siblings') {
  //     newLinks = (urlStructure['/'] || []).filter(link => '/' + link !== pathname);
  //     path = '/';
  //   }

  //   newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
  //   setSecondaryNavLinks(newLinks);
  //   setCurrentPath(path);
  // }, [urlStructure, pathname, secondaryNavMode, showSecondaryNav, useProvidedLinks]);

 // Process links for secondary navigation - only for API-based mode
useEffect(() => {
  if (useProvidedLinks || !showSecondaryNav || !pathname || Object.keys(urlStructure).length === 0) return;
  
  let path = pathname;
  let newLinks = [];

  if (secondaryNavMode === 'children') {
    newLinks = urlStructure[path] || [];
  } else if (secondaryNavMode === 'siblings') {
    // Get the parent path by removing the last segment
    const pathParts = pathname.split('/').filter(Boolean);
    pathParts.pop(); // Remove the last segment (current page)
    const parentPath = pathParts.length === 0 ? '/' : '/' + pathParts.join('/');
    
    // Get all children of the parent path (siblings of current page)
    newLinks = urlStructure[parentPath] || [];
    
    // Set the path to the parent path for proper URL construction
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
      const offset = isSticky ? 30 : 200;
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
    if (typeof icon === 'string') {
      return <Image src={icon} alt="" width={34} height={34} />;
    } else if (React.isValidElement(icon)) {
      return React.cloneElement(icon, { width: 24, height: 24 });
    } else if (icon && typeof icon === 'object' && icon.src) {
      return <Image src={icon} alt="" width={24} height={24} />;
    }
    return null;
  };

  const renderSection = (section) => {
    if (section.subsections) {
      return (
        <div key={section.id} className="toc-item accordion" style={{backgroundColor: `${section.background}`}}>
          <button 
            className="toc-link accordion-header" 
            onClick={() => toggleSection(section.id)}
          >
            {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
            <span className="section-title">{section.title}</span>
            <ChevronDown 
              className={`accordion-arrow ${expandedSection === section.id ? 'expanded' : ''}`}
              size={28}
              strokeWidth={3}
            />
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
                  {subsection.title}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
        <a
          href={`#${section.id}`}
          onClick={(e) => handleLinkClick(e, section.id)}
          className="toc-link"
        >
          {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
          {section.title}
        </a>
      </div>
    );
  };

  const renderSecondaryNav = () => {
    if (secondaryNavLinks.length === 0) return null;

    // In sticky mode, show direct menu without accordion
    if (isSticky) {
      return (
        <div className="secondary-nav sticky-secondary-nav" style={{ width: '100%' }}>
          <div className="secondary-nav-content" style={{ backgroundColor: '#0d47a1', width: '100%' }}>
            <h3 className="secondary-nav-title" style={{ color: 'white' }}>
              More in this Section
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
                        style={{ color: 'white', textTransform: 'capitalize' }}
                      >
                        {link.replace(/-/g, ' ')}
                      </Link>
                      {hasChildren && (
                        <button 
                          className="expand-toggle"
                          onClick={() => toggleSecondaryItem(itemPath)}
                        >
                          <ChevronDown 
                            className={`secondary-arrow ${expandedSecondaryItems[itemPath] ? 'expanded' : ''}`}
                            size={16}
                            strokeWidth={2}
                            color="white"
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
                              style={{ color: '#bbdefb', textTransform: 'capitalize' }}
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

    // For non-sticky mode - keep original accordion behavior
    return (
      <div className="secondary-nav">
        <button 
          className="secondary-nav-toggle"
          onClick={toggleSecondaryNav}
        >
          <span>{secondaryNavTitle}</span>
          <ChevronDown 
            className={`accordion-arrow ${secondaryNavOpen ? 'expanded' : ''}`}
            size={28}
            strokeWidth={3}
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
      {/* Title removed as requested */}
      {sections.length > 0 && (
        <div className="toc-grid">
          {sections.map(renderSection)}
        </div>
      )}
      {showSecondaryNav && renderSecondaryNav()}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

        .toc-container {
          width: 80%;
          max-width: 1200px;
          margin: 1px auto;
          padding-right:10px;
          padding-left:5px;
          padding-bottom:10px;
          background-color: #f8f9fa;
          border: 1px solid #efede9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          font-family: 'Roboto', sans-serif;
          
          
          
        }

        .toc-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .toc-item {
          flex: 0 0 calc(30% - 12px);
          min-width: 160px;
          background-color: #ffffff;
          border: 1px solid #dee2e6;
          border-radius: 6px;
          padding: 10px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          transition: all 0.2s ease;
          min-height: 45px;
          height: fit-content;
        }

        .toc-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          text-decoration: none;
          color: #007bff;
          font-weight: 500;
          font-size: 15px;
          line-height: 1.2;
          width: 100%;
          justify-content: center; 
        }

        .section-title {
          flex: 1;
          margin: 0 10px;
        }

        .toc-icon {
          margin-right: 8px;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .accordion-header {
          width: 100%;
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .accordion-arrow {
          color: #999999;
          transition: transform 0.2s ease;
          margin-right:20px;
          margin-top:5px;
        }

        .accordion-arrow.expanded {
          transform: rotate(180deg);
        }

        .subsections-list {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid #dee2e6;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .subsection-link {
          color: #6c757d;
          text-decoration: none;
          font-size: 14px;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s;
          margin-left: 24px;
        }

        .subsection-link:hover {
          background-color: #f8f9fa;
          color: #007bff;
        }

        .toc-link:hover {
          color: #0056b3;
        }

        .toc-item:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        /* Secondary Navigation Styles */
        .secondary-nav {
          width: 100%;
          margin-top: 20px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #0d47a1;
          background-color: #0d47a1;
        }

        .secondary-nav-toggle {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background-color: #1565c0;
          border: none;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          color: white;
          text-align: left;
          text-transform: capitalize;
        }

        .secondary-nav-content {
          padding: 15px 20px;
          background-color: #1565c0;
          border-top: 1px solid #0d47a1;
        }

        .secondary-nav-title {
          font-size: 16px;
          color: white;
          margin-bottom: 15px;
          font-weight: 500;
          text-transform: capitalize;
        }

        .secondary-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .secondary-nav-item {
          margin-bottom: 10px;
        }

        .secondary-nav-link {
          display: block;
          padding: 8px 12px;
          color: white;
          text-decoration: none;
          font-size: 14px;
          border-radius: 4px;
          transition: background-color 0.2s;
          text-transform: capitalize;
        }

        .secondary-nav-link:hover {
          background-color: #0d47a1;
        }

        /* Expandable items in sticky mode */
        .secondary-nav-item-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .expand-toggle {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
        }

        .secondary-arrow {
          color: #999999;
          transition: transform 0.2s ease;
        }

        .secondary-arrow.expanded {
          transform: rotate(180deg);
        }

        .secondary-nav-sublist {
          list-style: none;
          padding-left: 20px;
          margin-top: 5px;
        }

        .secondary-nav-subitem {
          margin-bottom: 5px;
        }

        .secondary-nav-sublink {
          display: block;
          padding: 5px 10px;
          color: #c5cae9;
          text-decoration: none;
          font-size: 13px;
          text-transform: capitalize;
        }

        .secondary-nav-sublink:hover {
          color: white;
        }

        /* Sticky Styling */
        .sticky {
          position: fixed;
          top: 20px;
          left: 0;
          width: 220px;
          height: calc(100vh - 40px);
          overflow-y: auto;
          z-index: 1000;
          padding-top: 50px;
          /* scrollbar-width: none;
          -ms-overflow-style: none; */
          
         
          
        }

        /* .sticky::-webkit-scrollbar {
          display: none;
        } */

        .sticky .toc-grid {
          flex-direction: column;
          
          
        }

        .sticky .toc-item {
          width: calc(100% - 20px);
          margin-right: 20px;
        }

        .sticky .secondary-nav {
          width: 100%;
          margin-right: 0;
          border: none;
          border-radius: 0;
          background-color: #0d47a1;
          margin-top: 15px;
        }
        
        .sticky-secondary-nav {
          padding: 10px;
        }

        @media (max-width: 768px) {
          .toc-container {
            width: 95%;
          }

          .toc-item {
            flex: 0 0 calc(45% - 12px);
          }

          .sticky {
            width: 170px;
          }
        }

        @media (max-width: 768px) {
          .toc-container {
            width: 95%;
            transition: opacity 0.3s ease;
          }

          .toc-item {
            flex: 0 0 calc(45% - 12px);
          }

          .sticky {
            display: none;
          }

          .toc-container:not(.sticky) {
            position: relative;
            width: 95%;
            margin: 20px auto;
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default SectionTableOfContents;