
// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import './MyNavbar2.css';
// import SearchBar2 from './SearchBar2';
// import { mainMenuStructure } from './mainMenu';

// function ChevronDown() {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="chevron-down"
//     >
//       <polyline points="6 9 12 15 18 9"></polyline>
//     </svg>
//   );
// }

// function GenericNavbar({ menuStructure = mainMenuStructure }) {
//   const [isNavActive, setIsNavActive] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeMegaMenu, setActiveMegaMenu] = useState(null);
//   const [activeAccordions, setActiveAccordions] = useState(new Set());
//   const timeoutRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsNavActive(window.scrollY > 150);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleMouseEnter = (menuName) => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setActiveMegaMenu(menuName);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setActiveMegaMenu(null);
//       setActiveAccordions(new Set()); // Close all accordions when menu closes
//     }, 300);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setActiveMegaMenu(null);
//     setActiveAccordions(new Set());
//   };

//   const handleGoBack = () => {
//     window.history.back();
//   };

//   const toggleAccordion = (sectionId) => {
//     setActiveAccordions(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(sectionId)) {
//         newSet.delete(sectionId);
//       } else {
//         newSet.add(sectionId);
//       }
//       return newSet;
//     });
//   };

//   const organizeMenuColumns = (columns) => {
//     const SECTIONS_PER_COLUMN = 3;
    
//     const allSections = [];
    
//     columns.forEach((column) => {
//       if (column.items && column.items.length > 0) {
//         if (column.title) {
//           // Has title - make it one accordion section (never split)
//           allSections.push({
//             id: column.title.toLowerCase().replace(/\s+/g, '-'),
//             title: column.title,
//             items: column.items
//           });
//         } else {
//           // No title - it's a flat list (like Featured Topics)
//           allSections.push({
//             id: `flat-section-${allSections.length}`,
//             title: null,
//             items: column.items,
//             isFlat: true
//           });
//         }
//       }
//     });
    
//     // Organize into columns
//     const accordionColumns = [];
//     for (let i = 0; i < allSections.length; i += SECTIONS_PER_COLUMN) {
//       accordionColumns.push({
//         sections: allSections.slice(i, i + SECTIONS_PER_COLUMN)
//       });
//     }
    
//     return accordionColumns;
//   };

//   const renderMenuItem = (item) => {
//     if (item.type === 'link') {
//       return (
//         <li className='navbar-item' key={item.id}>
//           <Link href={item.href} onClick={closeMobileMenu}>
//             {item.label}
//           </Link>
//         </li>
//       );
//     } else if (item.type === 'megamenu') {
//       const accordionColumns = organizeMenuColumns(item.columns);
      
//       return (
//         <li
//           className="megamenu-item"
//           key={item.id}
//           onMouseEnter={() => handleMouseEnter(item.id)}
//           onMouseLeave={handleMouseLeave}
//         >
//           <Link href={item.href}>
//             <span className='navbar-item'>
//               {item.label}
//               <ChevronDown />
//             </span>
//           </Link>
//           <div className={`megamenu-accordion ${activeMegaMenu === item.id ? 'active' : ''}`}>
//             <div className="accordion-columns">
//               {accordionColumns.map((column, columnIndex) => (
//                 <div className="accordion-column" key={columnIndex}>
//                   {column.sections.map((section) => (
//                     section.isFlat ? (
//                       // Flat list without accordion (like Featured Topics)
//                       <div className="flat-section" key={section.id}>
//                         <ul className="flat-items">
//                           {section.items.map((item, itemIndex) => (
//                             <li key={itemIndex}>
//                               <Link href={item.href} onClick={closeMobileMenu}>
//                                 {item.label}
//                               </Link>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ) : (
//                       // Accordion section with title
//                       <div className="accordion-section" key={section.id}>
//                         <button 
//                           className={`accordion-header ${activeAccordions.has(section.id) ? 'active' : ''}`}
//                           onClick={() => toggleAccordion(section.id)}
//                         >
//                           {section.title}
//                           <ChevronDown />
//                         </button>
//                         <div className={`accordion-content ${activeAccordions.has(section.id) ? 'active' : ''}`}>
//                           <ul className="accordion-items">
//                             {section.items.map((subItem, itemIndex) => (
//                               <li key={itemIndex}>
//                                 <Link href={subItem.href} onClick={closeMobileMenu}>
//                                   {subItem.label}
//                                 </Link>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     )
//                   ))}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </li>
//       );
//     }
//     return null;
//   };

//   return (
//     <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
//       <div className="navbar-container">
//         <button className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//           {isMobileMenuOpen ? '✕' : '☰'}
//         </button>
//         <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
//           {menuStructure.map(renderMenuItem)}
//           <li onClick={handleGoBack} style={{cursor:'pointer'}} className='navbar-item'><a>Go Back</a></li>
//           <li>
//             <div style={{ position: 'relative', marginLeft:'100px' }} className='search-block'>
//               <SearchBar2 width='200px' />
//             </div>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default GenericNavbar;


'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './MyNavbar2.css';
import SearchBar2 from './SearchBar2';
import { mainMenuStructure } from './mainMenu';

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chevron-down"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
}

function GenericNavbar({ menuStructure = mainMenuStructure }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeAccordions, setActiveAccordions] = useState(new Set());
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavActive(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setActiveAccordions(new Set()); // Close all accordions when menu closes
    }, 300);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
    setActiveAccordions(new Set());
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const toggleAccordion = (sectionId) => {
    setActiveAccordions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  const organizeMenuColumns = (columns) => {
    const SECTIONS_PER_COLUMN = 3;
    
    const allSections = [];
    
    columns.forEach((column) => {
      if (column.items && column.items.length > 0) {
        if (column.title) {
          // Has title - make it one accordion section (never split)
          allSections.push({
            id: column.title.toLowerCase().replace(/\s+/g, '-'),
            title: column.title,
            items: column.items
          });
        } else {
          // No title - it's a flat list (like Featured Topics)
          allSections.push({
            id: `flat-section-${allSections.length}`,
            title: null,
            items: column.items,
            isFlat: true
          });
        }
      }
    });
    
    // Organize into columns
    const accordionColumns = [];
    for (let i = 0; i < allSections.length; i += SECTIONS_PER_COLUMN) {
      accordionColumns.push({
        sections: allSections.slice(i, i + SECTIONS_PER_COLUMN)
      });
    }
    
    return accordionColumns;
  };

  const renderMenuItem = (item) => {
    if (item.type === 'link') {
      return (
        <li className='navbar-item' key={item.id}>
          <Link href={item.href} onClick={closeMobileMenu}>
            {item.label}
          </Link>
        </li>
      );
    } else if (item.type === 'megamenu') {
      const accordionColumns = organizeMenuColumns(item.columns);
      
      return (
        <li
          className="megamenu-item"
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={item.href} onClick={(e) => {
            e.stopPropagation();
            closeMobileMenu();
          }}>
            <span className='navbar-item'>
              {item.label}
              <ChevronDown />
            </span>
          </Link>
          <style jsx>{`
            .chevron-button {
              background: none;
              border: none;
              padding: 0;
              margin: 0;
              cursor: pointer;
              color: inherit;
              outline: none;
            }
            .chevron-button:focus {
              outline: none;
              box-shadow: none;
            }
          `}</style>
          <div className={`megamenu-accordion ${activeMegaMenu === item.id ? 'active' : ''}`}>
            <div className="accordion-columns">
              {accordionColumns.map((column, columnIndex) => (
                <div className="accordion-column" key={columnIndex}>
                  {column.sections.map((section) => (
                    section.isFlat ? (
                      // Flat list without accordion (like Featured Topics)
                      <div className="flat-section" key={section.id}>
                        <ul className="flat-items">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link href={item.href} onClick={closeMobileMenu}>
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      // Accordion section with title
                      <div className="accordion-section" key={section.id}>
                        <button 
                          className={`accordion-header ${activeAccordions.has(section.id) ? 'active' : ''}`}
                          onClick={() => toggleAccordion(section.id)}
                        >
                          {section.title}
                          <ChevronDown />
                        </button>
                        <div className={`accordion-content ${activeAccordions.has(section.id) ? 'active' : ''}`}>
                          <ul className="accordion-items">
                            {section.items.map((subItem, itemIndex) => (
                              <li key={itemIndex}>
                                <Link href={subItem.href} onClick={closeMobileMenu}>
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )
                  ))}
                </div>
              ))}
            </div>
          </div>
        </li>
      );
    }
    return null;
  };

  return (
    <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {menuStructure.map(renderMenuItem)}
          <li onClick={handleGoBack} style={{cursor:'pointer'}} className='navbar-item'><a>Go Back</a></li>
          <li>
            <div style={{ position: 'relative', marginLeft:'100px' }} className='search-block'>
              <SearchBar2 width='200px' />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default GenericNavbar;