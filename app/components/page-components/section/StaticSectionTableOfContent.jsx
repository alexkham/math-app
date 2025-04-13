import React from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const StaticSectionTableOfContents = ({ 
  sections = [], 
  title = '',
  showSecondaryNav = false,
  secondaryNavMode = 'children', 
  secondaryNavTitle = 'More in this Section',
  navLinks = null
}) => {
  // Render section - handle if it has subsections
  const renderSection = (section) => {
    if (section.subsections) {
      return (
        <div key={section.id} className="toc-item accordion" style={{backgroundColor: `${section.background}`}}>
          <a 
            className="toc-link accordion-header" 
            href={section.link ? section.link : `#${section.id}`}
          >
            {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
            <span className="section-title">{section.title}</span>
            {section.subsections && (
              <ChevronDown 
                className="accordion-arrow"
                size={28}
                strokeWidth={3}
              />
            )}
          </a>
        </div>
      );
    }

    // Regular section without subsections
    return (
      <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
        
        <a  href={section.link ? section.link : `#${section.id}`}
          className="toc-link"
        >
          {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
          {section.title}
        </a>
      </div>
    );
  };

  // Render icon helper function
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

  // Direct render of secondary navigation
  const renderSecondaryNav = () => {
    // Check if we have valid links
    const links = navLinks && navLinks.links ? navLinks.links : [];
    if (links.length === 0) return null;

    const path = navLinks && navLinks.currentPath ? navLinks.currentPath : '';

    return (
      <div className="secondary-nav">
        <button className="secondary-nav-toggle">
          <span>{secondaryNavTitle}</span>
          <ChevronDown 
            className="accordion-arrow"
            size={28}
            strokeWidth={3}
          />
        </button>
        
        <div className="secondary-nav-content">
          <ul className="secondary-nav-list">
            {links.map((link) => (
              <li key={link} className="secondary-nav-item">
                <Link 
                  href={`${path}${path === '/' ? '' : '/'}${link}`} 
                  className="secondary-nav-link"
                >
                  {link.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="toc-container">
      {title && <h2 className="toc-title">{title}</h2>}
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

        .toc-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #333;
          text-align: center;
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

        @media (max-width: 768px) {
          .toc-container {
            width: 95%;
          }

          .toc-item {
            flex: 0 0 calc(45% - 12px);
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

export default StaticSectionTableOfContents;