// // // import React, { useState, useEffect, useRef } from 'react';
// // // import Link from 'next/link';
// // // import './MyNavbar2.css';
// // // import SearchBar2 from './SearchBar2';


// // // function GenericNavbar({ menuStructure }) {
// // //   const [isNavActive, setIsNavActive] = useState(false);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [activeMegaMenu, setActiveMegaMenu] = useState(null);
// // //   const timeoutRef = useRef(null);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       setIsNavActive(window.scrollY > 150);
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const handleMouseEnter = (menuName) => {
// // //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// // //     setActiveMegaMenu(menuName);
// // //   };

// // //   const handleMouseLeave = () => {
// // //     timeoutRef.current = setTimeout(() => {
// // //       setActiveMegaMenu(null);
// // //     }, 300);
// // //   };

// // //   const closeMobileMenu = () => {
// // //     setIsMobileMenuOpen(false);
// // //     setActiveMegaMenu(null);
// // //   };

// // //   const handleGoBack = () => {
// // //     window.history.back();
// // //   };

// // //   const renderMenuItem = (item) => {
// // //     if (item.type === 'link') {
// // //       return (
// // //         <li className='navbar-item' key={item.id}>
// // //           <Link href={item.href} onClick={closeMobileMenu}>
// // //             {item.label}
// // //           </Link>
// // //         </li>
// // //       );
// // //     } else if (item.type === 'megamenu') {
// // //       return (
// // //         <li
// // //           className="megamenu-item"
// // //           key={item.id}
// // //           onMouseEnter={() => handleMouseEnter(item.id)}
// // //           onMouseLeave={handleMouseLeave}
// // //         >
// // //           <Link href={item.href}>
// // //             <span className='navbar-item'>{item.label}</span>
// // //           </Link>
// // //           <div className={`megamenu ${activeMegaMenu === item.id ? 'active' : ''}`}>
// // //             <div className="megamenu-content">
// // //               {item.columns.map((column, index) => (
// // //                 <div className="megamenu-column" key={index}>
// // //                   {column.title && (
// // //                     <Link href={column.href || '#'}>
// // //                       <h3>{column.title}</h3>
// // //                     </Link>
// // //                   )}
// // //                   <ul>
// // //                     {column.items.map((subItem, subIndex) => (
// // //                       <li key={subIndex}>
// // //                         <Link href={subItem.href} onClick={closeMobileMenu}>
// // //                           {subItem.label}
// // //                         </Link>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </li>
// // //       );
// // //     }
// // //     return null;
// // //   };

// // //   return (
// // //     <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
// // //       <div className="navbar-container">
// // //         <button className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
// // //           {isMobileMenuOpen ? '✕' : '☰'}
// // //         </button>
// // //         <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
// // //           {menuStructure.map(renderMenuItem)}
// // //           <li onClick={handleGoBack} style={{cursor:'pointer'}} className='navbar-item'><a>Go Back</a></li>
// // //           <li>
// // //             <div style={{ position: 'relative', marginLeft:'100px' }} className='search-block'>
// // //               <SearchBar2 width='200px' />
// // //             </div>
// // //           </li>
// // //         </ul>
// // //       </div>
// // //     </nav>
// // //   );
// // // }

// // // export default GenericNavbar;
// // import React, { useState, useEffect, useRef } from 'react';
// // import Link from 'next/link';
// // import './MyNavbar2.css';
// // import SearchBar2 from './SearchBar2';

// // function GenericNavbar({ menuStructure }) {
// //   const [isNavActive, setIsNavActive] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [activeMegaMenu, setActiveMegaMenu] = useState(null);
// //   const timeoutRef = useRef(null);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setIsNavActive(window.scrollY > 150);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const handleMouseEnter = (menuName) => {
// //     if (timeoutRef.current) clearTimeout(timeoutRef.current);
// //     setActiveMegaMenu(menuName);
// //   };

// //   const handleMouseLeave = () => {
// //     timeoutRef.current = setTimeout(() => {
// //       setActiveMegaMenu(null);
// //     }, 300);
// //   };

// //   const closeMobileMenu = () => {
// //     setIsMobileMenuOpen(false);
// //     setActiveMegaMenu(null);
// //   };

// //   const handleGoBack = () => {
// //     window.history.back();
// //   };

// //   const renderMenuItem = (item) => {
// //     if (item.type === 'link') {
// //       return (
// //         <li className='navbar-item' key={item.id}>
// //           <Link href={item.href} onClick={closeMobileMenu}>
// //             {item.label}
// //           </Link>
// //         </li>
// //       );
// //     } else if (item.type === 'megamenu') {
// //       return (
// //         <li
// //           className="megamenu-item"
// //           key={item.id}
// //           onMouseEnter={() => handleMouseEnter(item.id)}
// //           onMouseLeave={handleMouseLeave}
// //         >
// //           <Link href={item.href}>
// //             <span className='navbar-item'>
// //               {item.label}
// //               <span className="chevron-down">&#9660;</span>
// //             </span>
// //           </Link>
// //           <div className={`megamenu ${activeMegaMenu === item.id ? 'active' : ''}`}>
// //             <div className="megamenu-content">
// //               {item.columns.map((column, index) => (
// //                 <div className="megamenu-column" key={index}>
// //                   {column.title && (
// //                     <Link href={column.href || '#'}>
// //                       <h3>{column.title}</h3>
// //                     </Link>
// //                   )}
// //                   <ul>
// //                     {column.items.map((subItem, subIndex) => (
// //                       <li key={subIndex}>
// //                         <Link href={subItem.href} onClick={closeMobileMenu}>
// //                           {subItem.label}
// //                         </Link>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </li>
// //       );
// //     }
// //     return null;
// //   };

// //   return (
// //     <nav className={`navbar ${isNavActive ? 'active' : ''}`}>
// //       <div className="navbar-container">
// //         <button className="navbar-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
// //           {isMobileMenuOpen ? '✕' : '☰'}
// //         </button>
// //         <ul className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
// //           {menuStructure.map(renderMenuItem)}
// //           <li onClick={handleGoBack} style={{cursor:'pointer'}} className='navbar-item'><a>Go Back</a></li>
// //           <li>
// //             <div style={{ position: 'relative', marginLeft:'100px' }} className='search-block'>
// //               <SearchBar2 width='200px' />
// //             </div>
// //           </li>
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default GenericNavbar;
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

// function GenericNavbar({ menuStructure=mainMenuStructure }) {
//   const [isNavActive, setIsNavActive] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeMegaMenu, setActiveMegaMenu] = useState(null);
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
//     }, 300);
//   };

//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setActiveMegaMenu(null);
//   };

//   const handleGoBack = () => {
//     window.history.back();
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
//           <div className={`megamenu ${activeMegaMenu === item.id ? 'active' : ''}`}>
//             <div className="megamenu-content">
//               {item.columns.map((column, index) => (
//                 <div className="megamenu-column" key={index}>
//                   {column.title && (
//                     <Link href={column.href || '#'}>
//                       <h3>{column.title}</h3>
//                     </Link>
//                   )}
//                   <ul>
//                     {column.items.map((subItem, subIndex) => (
//                       <li key={subIndex}>
//                         <Link href={subItem.href} onClick={closeMobileMenu}>
//                           {subItem.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
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

function GenericNavbar({ menuStructure=mainMenuStructure }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
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
    }, 300);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  };

  const handleGoBack = () => {
    window.history.back();
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
      return (
        <li
          className="megamenu-item"
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
        >
          <Link href={item.href}>
            <span className='navbar-item'>
              {item.label}
              <ChevronDown />
            </span>
          </Link>
          <div className={`megamenu ${activeMegaMenu === item.id ? 'active' : ''}`}>
            <div className="megamenu-content">
              {item.columns.map((column, columnIndex) => {
                // Calculate how many sub-columns we need based on items count
                const ITEMS_PER_COLUMN = 10; // Adjust this number based on your needs
                const itemsCount = column.items.length;
                const subColumnsCount = Math.ceil(itemsCount / ITEMS_PER_COLUMN);
                
                return (
                  <div className="megamenu-category" key={columnIndex}>
                    {column.title && (
                      <Link href={column.href || '#'}>
                        <h3 className='category-title'>{column.title}</h3>
                      </Link>
                    )}
                    <div className="megamenu-subcategories">
                      {[...Array(subColumnsCount)].map((_, subColumnIndex) => {
                        const startIdx = subColumnIndex * ITEMS_PER_COLUMN;
                        const endIdx = startIdx + ITEMS_PER_COLUMN;
                        const columnItems = column.items.slice(startIdx, endIdx);
                        
                        return (
                          <div className="megamenu-column" key={subColumnIndex}>
                            <ul>
                              {columnItems.map((subItem, itemIndex) => (
                                <li key={itemIndex}>
                                  <Link href={subItem.href} onClick={closeMobileMenu}>
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
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