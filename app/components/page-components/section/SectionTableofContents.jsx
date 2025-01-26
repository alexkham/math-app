
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const SectionTableOfContents = ({ sections = [], title = '' }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const boxRef = useRef(null);
  const stickyThreshold = useRef(0);

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

  return (
    <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
      <h2 className="toc-title">{title}</h2>
      {sections.length > 0 && (
        <div className="toc-grid">
          {sections.map(renderSection)}
        </div>
      )}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

        .toc-container {
          width: 80%;
          max-width: 1200px;
          margin: 1px auto;
          /* padding: 10px; */
          padding-right:10px;
          padding-left:5px;
          padding-bottom:10px;
          background-color: #f8f9fa;
          border: 1px solid #efede9;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          font-family: 'Roboto', sans-serif;
          /* background-color:'red' */
        }

        .toc-title {
          text-align: center;
          margin-bottom: 20px;
          font-size: 28px;
          color: #343a40;
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
         
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
          font-size: 16px;
          line-height: 1.4;
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

        .sticky {
          position: fixed;
          top: 20px;
          left: 0;
          width: 170px;
          height: calc(100vh - 40px);
          overflow-y: auto;
          z-index: 1000;
          padding-top: 70px;
          scrollbar-width: none;
          -ms-overflow-style: none;
          
        }

        .sticky::-webkit-scrollbar {
          display: none;
        }

        .sticky .toc-grid {
          flex-direction: column;
        }

        .sticky .toc-item {
          width: calc(100% - 20px);
          margin-right: 20px;
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