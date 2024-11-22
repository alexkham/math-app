
// // // // // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // // // // import PropTypes from 'prop-types';
// // // // // // // // // // // // // // import styles from './SectionTableOfContents.module.css';

// // // // // // // // // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // // // // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // // // // // // // // //   const boxRef = useRef(null);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // // // //       if (boxRef.current) {
// // // // // // // // // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // // // // // // // // //         setIsSticky(boxRect.top + boxRect.height <= 0);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };

// // // // // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   const handleLinkClick = (e, id) => {
// // // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // // // // // // //     if (element) {
// // // // // // // // // // // // // //       const offset = 100; // Adjust this value based on your navbar height and desired extra space
// // // // // // // // // // // // // //       const elementPosition = element.getBoundingClientRect().top;
// // // // // // // // // // // // // //       const offsetPosition = elementPosition + window.pageYOffset - offset;

// // // // // // // // // // // // // //       window.scrollTo({
// // // // // // // // // // // // // //         top: offsetPosition,
// // // // // // // // // // // // // //         behavior: "smooth"
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     // This effect runs after the component mounts
// // // // // // // // // // // // // //     // It adds the scroll behavior to the anchor links that might be in the URL
// // // // // // // // // // // // // //     const hash = window.location.hash;
// // // // // // // // // // // // // //     if (hash) {
// // // // // // // // // // // // // //       setTimeout(() => {
// // // // // // // // // // // // // //         const id = hash.replace('#', '');
// // // // // // // // // // // // // //         handleLinkClick({ preventDefault: () => {} }, id);
// // // // // // // // // // // // // //       }, 0);
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div ref={boxRef} className={`${styles.box} ${isSticky ? styles.sticky : ''}`}>
// // // // // // // // // // // // // //       <h2 className={styles.title}>Table of Contents</h2>
// // // // // // // // // // // // // //       {sections.length > 0 && (
// // // // // // // // // // // // // //         <ul className={`${styles.list} ${isSticky ? styles.stickyList : styles.initialList}`}>
// // // // // // // // // // // // // //           {sections.map((section) => (
// // // // // // // // // // // // // //             <li key={section.id} className={styles.item}>
// // // // // // // // // // // // // //               <a 
// // // // // // // // // // // // // //                 href={`#${section.id}`} 
// // // // // // // // // // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // // // // // // // // // //               >
// // // // // // // // // // // // // //                 {section.title}
// // // // // // // // // // // // // //               </a>
// // // // // // // // // // // // // //             </li>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // // //       )}
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // SectionTableOfContents.propTypes = {
// // // // // // // // // // // // // //   sections: PropTypes.arrayOf(
// // // // // // // // // // // // // //     PropTypes.shape({
// // // // // // // // // // // // // //       id: PropTypes.string.isRequired,
// // // // // // // // // // // // // //       title: PropTypes.string.isRequired,
// // // // // // // // // // // // // //     })
// // // // // // // // // // // // // //   ),
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default SectionTableOfContents;
// // // // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // // // import PropTypes from 'prop-types';
// // // // // // // // // // // // // import styles from './SectionTableOfContents.module.css';

// // // // // // // // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // // // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // // // // // // // //   const boxRef = useRef(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // // //       if (boxRef.current) {
// // // // // // // // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // // // // // // // //         setIsSticky(boxRect.top + boxRect.height <= 0);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };

// // // // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   const handleLinkClick = (e, id) => {
// // // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // // // // // //     if (element) {
// // // // // // // // // // // // //       const offset = 250; // Adjust this value based on your navbar height and desired extra space
// // // // // // // // // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // // // // // // // // //       const offsetPosition = elementPosition - offset;

// // // // // // // // // // // // //       window.scrollTo({
// // // // // // // // // // // // //         top: offsetPosition,
// // // // // // // // // // // // //         behavior: "smooth"
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //     }
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div ref={boxRef} className={`${styles.box} ${isSticky ? styles.sticky : ''}`}>
// // // // // // // // // // // // //       <h2 className={styles.title}>Table of Contents</h2>
// // // // // // // // // // // // //       {sections.length > 0 && (
// // // // // // // // // // // // //         <ul className={`${styles.list} ${isSticky ? styles.stickyList : styles.initialList}`}>
// // // // // // // // // // // // //           {sections.map((section) => (
// // // // // // // // // // // // //             <li key={section.id} className={styles.item}>
// // // // // // // // // // // // //               <a 
// // // // // // // // // // // // //                 href={`#${section.id}`} 
// // // // // // // // // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // // // // // // // // //               >
// // // // // // // // // // // // //                 {section.title}
// // // // // // // // // // // // //               </a>
// // // // // // // // // // // // //             </li>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </ul>
// // // // // // // // // // // // //       )}
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // SectionTableOfContents.propTypes = {
// // // // // // // // // // // // //   sections: PropTypes.arrayOf(
// // // // // // // // // // // // //     PropTypes.shape({
// // // // // // // // // // // // //       id: PropTypes.string.isRequired,
// // // // // // // // // // // // //       title: PropTypes.string.isRequired,
// // // // // // // // // // // // //     })
// // // // // // // // // // // // //   ),
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default SectionTableOfContents;
// // // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';
// // // // // // // // // // // // import PropTypes from 'prop-types';
// // // // // // // // // // // // import styles from './SectionTableOfContents.module.css';

// // // // // // // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // // // // // // //   const boxRef = useRef(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // // //       if (boxRef.current) {
// // // // // // // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // // // // // // //         setIsSticky(boxRect.top + boxRect.height <= 0);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   const handleTopLinkClick = (e, id) => {
// // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // // // // //     if (element) {
// // // // // // // // // // // //       const offset = 250; // Adjust based on your navbar height
// // // // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // // // // // // // // // // //       window.scrollBy(0, -offset);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const handleSideLinkClick = (e, id) => {
// // // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // // // // //     if (element) {
// // // // // // // // // // // //       const offset = 20; // Adjust as needed
// // // // // // // // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // // // // // // // //       window.scrollTo({
// // // // // // // // // // // //         top: elementPosition - offset,
// // // // // // // // // // // //         behavior: 'smooth'
// // // // // // // // // // // //       });
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div ref={boxRef} className={`${styles.box} ${isSticky ? styles.sticky : ''}`}>
// // // // // // // // // // // //       <h2 className={styles.title}>Table of Contents</h2>
// // // // // // // // // // // //       {sections.length > 0 && (
// // // // // // // // // // // //         <ul className={`${styles.list} ${isSticky ? styles.stickyList : styles.initialList}`}>
// // // // // // // // // // // //           {sections.map((section) => (
// // // // // // // // // // // //             <li key={section.id} className={styles.item}>
// // // // // // // // // // // //               <a 
// // // // // // // // // // // //                 href={`#${section.id}`} 
// // // // // // // // // // // //                 onClick={(e) => isSticky ? handleSideLinkClick(e, section.id) : handleTopLinkClick(e, section.id)}
// // // // // // // // // // // //               >
// // // // // // // // // // // //                 {section.title}
// // // // // // // // // // // //               </a>
// // // // // // // // // // // //             </li>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </ul>
// // // // // // // // // // // //       )}
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // SectionTableOfContents.propTypes = {
// // // // // // // // // // // //   sections: PropTypes.arrayOf(
// // // // // // // // // // // //     PropTypes.shape({
// // // // // // // // // // // //       id: PropTypes.string.isRequired,
// // // // // // // // // // // //       title: PropTypes.string.isRequired,
// // // // // // // // // // // //     })
// // // // // // // // // // // //   ),
// // // // // // // // // // // // };

// // // // // // // // // // // // export default SectionTableOfContents;
// // // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // // // // // //   const boxRef = useRef(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // // //       if (boxRef.current) {
// // // // // // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // // // // // //         setIsSticky(boxRect.top + boxRect.height <= 0);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   const handleTopLinkClick = (e, id) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // // // //     if (element) {
// // // // // // // // // // //       const offset = 250; // Adjust based on your navbar height
// // // // // // // // // // //       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // // // // // // // // // //       window.scrollBy(0, -offset);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleSideLinkClick = (e, id) => {
// // // // // // // // // // //     e.preventDefault();
// // // // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // // // //     if (element) {
// // // // // // // // // // //       const offset = 20; // Adjust as needed
// // // // // // // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // // // // // // //       window.scrollTo({
// // // // // // // // // // //         top: elementPosition - offset,
// // // // // // // // // // //         behavior: 'smooth'
// // // // // // // // // // //       });
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div ref={boxRef} className={`toc-box ${isSticky ? 'sticky' : ''}`}>
// // // // // // // // // // //       <h2 className="toc-title">Table of Contents</h2>
// // // // // // // // // // //       {sections.length > 0 && (
// // // // // // // // // // //         <ul className={`toc-list ${isSticky ? 'sticky-list' : 'initial-list'}`}>
// // // // // // // // // // //           {sections.map((section) => (
// // // // // // // // // // //             <li key={section.id} className="toc-item">
// // // // // // // // // // //               <a
// // // // // // // // // // //                 href={`#${section.id}`}
// // // // // // // // // // //                 onClick={(e) => isSticky ? handleSideLinkClick(e, section.id) : handleTopLinkClick(e, section.id)}
// // // // // // // // // // //               >
// // // // // // // // // // //                 {section.title}
// // // // // // // // // // //               </a>
// // // // // // // // // // //             </li>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </ul>
// // // // // // // // // // //       )}
// // // // // // // // // // //       <style jsx>{`
// // // // // // // // // // //         .toc-box {
// // // // // // // // // // //           width: 80%;
// // // // // // // // // // //           max-width: 100%;
// // // // // // // // // // //           background-color: #f8f9fa;
// // // // // // // // // // //           border: 1px solid #e9ecef;
// // // // // // // // // // //           border-radius: 8px;
// // // // // // // // // // //           padding: 20px;
// // // // // // // // // // //           margin: 20px auto;
// // // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // // // // // // // //         }

// // // // // // // // // // //         .toc-title {
// // // // // // // // // // //           text-align: center;
// // // // // // // // // // //           margin-bottom: 20px;
// // // // // // // // // // //           font-size: 24px;
// // // // // // // // // // //           color: #343a40;
// // // // // // // // // // //         }

// // // // // // // // // // //         .toc-list {
// // // // // // // // // // //           list-style-type: none;
// // // // // // // // // // //           padding: 0;
// // // // // // // // // // //           margin: 0;
// // // // // // // // // // //         }

// // // // // // // // // // //         .initial-list {
// // // // // // // // // // //           display: grid;
// // // // // // // // // // //           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// // // // // // // // // // //           gap: 10px;
// // // // // // // // // // //         }

// // // // // // // // // // //         .sticky-list {
// // // // // // // // // // //           display: block;
// // // // // // // // // // //         }

// // // // // // // // // // //         .toc-item {
// // // // // // // // // // //           padding: 5px 0;
// // // // // // // // // // //         }

// // // // // // // // // // //         .toc-item a {
// // // // // // // // // // //           text-decoration: none;
// // // // // // // // // // //           color: #007bff;
// // // // // // // // // // //           transition: color 0.2s ease;
// // // // // // // // // // //         }

// // // // // // // // // // //         .toc-item a:hover {
// // // // // // // // // // //           color: #0056b3;
// // // // // // // // // // //           text-decoration: underline;
// // // // // // // // // // //         }

// // // // // // // // // // //         .sticky {
// // // // // // // // // // //           position: fixed;
// // // // // // // // // // //           top: 20px;
// // // // // // // // // // //           left: 0px;
// // // // // // // // // // //           width: 230px;
// // // // // // // // // // //           height: calc(100vh - 40px);
// // // // // // // // // // //           margin: 0;
// // // // // // // // // // //           overflow-y: auto;
// // // // // // // // // // //           background-color: #ffffff;
// // // // // // // // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // // // // // // // //           padding-top:70px;
// // // // // // // // // // //         }

// // // // // // // // // // //         @media (max-width: 768px) {
// // // // // // // // // // //           .toc-box {
// // // // // // // // // // //             width: 95%;
// // // // // // // // // // //           }

// // // // // // // // // // //           .sticky {
// // // // // // // // // // //             width: 200px;
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //       `}</style>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default SectionTableOfContents;
// // // // // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // // // // //   const boxRef = useRef(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const handleScroll = () => {
// // // // // // // // // //       if (boxRef.current) {
// // // // // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // // // // //         setIsSticky(boxRect.top + boxRect.height <= 0);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // // //   }, []);

// // // // // // // // // //   const handleLinkClick = (e, id) => {
// // // // // // // // // //     e.preventDefault();
// // // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // // //     if (element) {
// // // // // // // // // //       const offset = 20;
// // // // // // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // // // // // //       window.scrollTo({
// // // // // // // // // //         top: elementPosition - offset,
// // // // // // // // // //         behavior: 'smooth'
// // // // // // // // // //       });
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div ref={boxRef} className={`toc-box ${isSticky ? 'sticky' : ''}`}>
// // // // // // // // // //       <h2 className="toc-title">Table of Contents</h2>
// // // // // // // // // //       {sections.length > 0 && (
// // // // // // // // // //         <div className="toc-grid">
// // // // // // // // // //           {sections.map((section) => (
// // // // // // // // // //             <div key={section.id} className="toc-card">
// // // // // // // // // //               <a
// // // // // // // // // //                 href={`#${section.id}`}
// // // // // // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // // // // // //                 className="toc-link"
// // // // // // // // // //               >
// // // // // // // // // //                 {section.title}
// // // // // // // // // //               </a>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       )}
// // // // // // // // // //       <style jsx>{`
// // // // // // // // // //         .toc-box {
// // // // // // // // // //           width: 90%;
// // // // // // // // // //           max-width: 1200px;
// // // // // // // // // //           background-color: #f8f9fa;
// // // // // // // // // //           border: 1px solid #e9ecef;
// // // // // // // // // //           border-radius: 8px;
// // // // // // // // // //           padding: 20px;
// // // // // // // // // //           margin: 20px auto;
// // // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // // // // // // //         }

// // // // // // // // // //         .toc-title {
// // // // // // // // // //           text-align: center;
// // // // // // // // // //           margin-bottom: 20px;
// // // // // // // // // //           font-size: 24px;
// // // // // // // // // //           color: #343a40;
// // // // // // // // // //         }

// // // // // // // // // //         .toc-grid {
// // // // // // // // // //           display: grid;
// // // // // // // // // //           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// // // // // // // // // //           gap: 15px;
// // // // // // // // // //         }

// // // // // // // // // //         .toc-card {
// // // // // // // // // //           background-color: #ffffff;
// // // // // // // // // //           border: 1px solid #dee2e6;
// // // // // // // // // //           border-radius: 6px;
// // // // // // // // // //           padding: 15px;
// // // // // // // // // //           transition: all 0.2s ease;
// // // // // // // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // // // // // // // //         }

// // // // // // // // // //         .toc-card:hover {
// // // // // // // // // //           transform: translateY(-3px);
// // // // // // // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // // // // // // //         }

// // // // // // // // // //         .toc-link {
// // // // // // // // // //           text-decoration: none;
// // // // // // // // // //           color: #007bff;
// // // // // // // // // //           font-weight: 500;
// // // // // // // // // //           display: block;
// // // // // // // // // //           text-align: center;
// // // // // // // // // //         }

// // // // // // // // // //         .toc-link:hover {
// // // // // // // // // //           color: #0056b3;
// // // // // // // // // //         }

// // // // // // // // // //         .sticky {
// // // // // // // // // //           position: fixed;
// // // // // // // // // //           top: 20px;
// // // // // // // // // //           left: 0px;
// // // // // // // // // //           width: 220px;
// // // // // // // // // //           height: calc(100vh - 40px);
// // // // // // // // // //           margin: 0;
// // // // // // // // // //           overflow-y: auto;
// // // // // // // // // //           z-index: 1000;
// // // // // // // // // //           padding-top:70px
          
// // // // // // // // // //         }

// // // // // // // // // //         .sticky .toc-grid {
// // // // // // // // // //           grid-template-columns: 1fr;
// // // // // // // // // //         }

// // // // // // // // // //         @media (max-width: 768px) {
// // // // // // // // // //           .toc-box {
// // // // // // // // // //             width: 95%;
// // // // // // // // // //           }

// // // // // // // // // //           .sticky {
// // // // // // // // // //             width: 250px;
// // // // // // // // // //           }
// // // // // // // // // //         }
// // // // // // // // // //       `}</style>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default SectionTableOfContents;
// // // // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // // // //   const boxRef = useRef(null);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const handleScroll = () => {
// // // // // // // // //       if (boxRef.current) {
// // // // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // // // //         setIsSticky(boxRect.top + boxRect.height <= 0);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // // //   }, []);

// // // // // // // // //   const handleLinkClick = (e, id) => {
// // // // // // // // //     e.preventDefault();
// // // // // // // // //     const element = document.getElementById(id);
// // // // // // // // //     if (element) {
// // // // // // // // //       const offset = 20;
// // // // // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // // // // //       window.scrollTo({
// // // // // // // // //         top: elementPosition - offset,
// // // // // // // // //         behavior: 'smooth'
// // // // // // // // //       });
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div ref={boxRef} className={`toc-box ${isSticky ? 'sticky' : ''}`}>
// // // // // // // // //       {/* <h2 className="toc-title">Table of Contents</h2> */}
// // // // // // // // //       {sections.length > 0 && (
// // // // // // // // //         <div className="toc-grid">
// // // // // // // // //           {sections.map((section) => (
// // // // // // // // //             <div key={section.id} className="toc-card">
// // // // // // // // //               <a
// // // // // // // // //                 href={`#${section.id}`}
// // // // // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // // // // //                 className="toc-link"
// // // // // // // // //               >
// // // // // // // // //                 {section.title}
// // // // // // // // //               </a>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       )}
// // // // // // // // //       <style jsx>{`
// // // // // // // // //         .toc-box {
// // // // // // // // //           width: 90%;
// // // // // // // // //           max-width: 1200px;
// // // // // // // // //           background-color: #f8f9fa;
// // // // // // // // //           border: 1px solid #e9ecef;
// // // // // // // // //           border-radius: 8px;
// // // // // // // // //           padding: 20px;
// // // // // // // // //           margin: 20px auto;
// // // // // // // // //           transition: all 0.3s ease;
// // // // // // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // // // // // //         }

// // // // // // // // //         .toc-title {
// // // // // // // // //           text-align: center;
// // // // // // // // //           margin-bottom: 20px;
// // // // // // // // //           font-size: 24px;
// // // // // // // // //           color: #343a40;
// // // // // // // // //         }

// // // // // // // // //         .toc-grid {
// // // // // // // // //           display: grid;
// // // // // // // // //           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
// // // // // // // // //           gap: 15px;
// // // // // // // // //         }

// // // // // // // // //         .toc-card {
// // // // // // // // //           background-color: #ffffff;
// // // // // // // // //           border: 1px solid #dee2e6;
// // // // // // // // //           border-radius: 6px;
// // // // // // // // //           padding: 15px;
// // // // // // // // //           transition: all 0.2s ease;
// // // // // // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // // // // // // //         }

// // // // // // // // //         .toc-card:hover {
// // // // // // // // //           transform: translateY(-3px);
// // // // // // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // // // // // //         }

// // // // // // // // //         .toc-link {
// // // // // // // // //           text-decoration: none;
// // // // // // // // //           color: #007bff;
// // // // // // // // //           font-weight: 500;
// // // // // // // // //           display: block;
// // // // // // // // //           text-align: center;
// // // // // // // // //         }

// // // // // // // // //         .toc-link:hover {
// // // // // // // // //           color: #0056b3;
// // // // // // // // //         }

// // // // // // // // //         .sticky {
// // // // // // // // //           position: fixed;
// // // // // // // // //           top: 20px;
// // // // // // // // //           left: 0px;
// // // // // // // // //           width: 220px;
// // // // // // // // //           height: calc(100vh - 40px);
// // // // // // // // //           margin: 0;
// // // // // // // // //           overflow-y: auto;
// // // // // // // // //           z-index: 1000;
// // // // // // // // //           padding-top: 70px;
// // // // // // // // //           scrollbar-width: none;  /* Firefox */
// // // // // // // // //           -ms-overflow-style: none;  /* Internet Explorer 10+ */
// // // // // // // // //         }

// // // // // // // // //         .sticky::-webkit-scrollbar {
// // // // // // // // //           width: 0;
// // // // // // // // //           height: 0;
// // // // // // // // //           background: transparent;  /* Chrome/Safari/Webkit */
// // // // // // // // //         }

// // // // // // // // //         .sticky .toc-grid {
// // // // // // // // //           grid-template-columns: 1fr;
// // // // // // // // //         }

// // // // // // // // //         @media (max-width: 768px) {
// // // // // // // // //           .toc-box {
// // // // // // // // //             width: 95%;
// // // // // // // // //           }

// // // // // // // // //           .sticky {
// // // // // // // // //             width: 200px;
// // // // // // // // //           }
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default SectionTableOfContents;
// // // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // // //   const boxRef = useRef(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const handleScroll = () => {
// // // // // // // //       if (boxRef.current) {
// // // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // // //         setIsSticky(boxRect.top + boxRect.height <= 0);
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // // //   }, []);

// // // // // // // //   const handleLinkClick = (e, id) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     const element = document.getElementById(id);
// // // // // // // //     if (element) {
// // // // // // // //       const offset = 20;
// // // // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // // // //       window.scrollTo({
// // // // // // // //         top: elementPosition - offset,
// // // // // // // //         behavior: 'smooth'
// // // // // // // //       });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div ref={boxRef} className={`toc-box ${isSticky ? 'sticky' : ''}`}>
// // // // // // // //       <h2 className="toc-title">Table of Contents</h2>
// // // // // // // //       {sections.length > 0 && (
// // // // // // // //         <div className="toc-grid">
// // // // // // // //           {sections.map((section) => (
// // // // // // // //             <div key={section.id} className="toc-card">
// // // // // // // //               <a
// // // // // // // //                 href={`#${section.id}`}
// // // // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // // // //                 className="toc-link"
// // // // // // // //               >
// // // // // // // //                 {section.title}
// // // // // // // //               </a>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       <style jsx>{`
// // // // // // // //         .toc-box {
// // // // // // // //           width: 90%;
// // // // // // // //           max-width: 1200px;
// // // // // // // //           background-color: #f8f9fa;
// // // // // // // //           border: 1px solid #e9ecef;
// // // // // // // //           border-radius: 8px;
// // // // // // // //           padding: 20px;
// // // // // // // //           margin: 20px auto;
// // // // // // // //           transition: all 0.3s ease;
// // // // // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // // // // //         }

// // // // // // // //         .toc-title {
// // // // // // // //           text-align: center;
// // // // // // // //           margin-bottom: 20px;
// // // // // // // //           font-size: 24px;
// // // // // // // //           color: #343a40;
// // // // // // // //         }

// // // // // // // //         .toc-grid {
// // // // // // // //           display: grid;
// // // // // // // //           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
// // // // // // // //           gap: 15px;
// // // // // // // //           justify-content: center;
          
// // // // // // // //         }

                
// // // // // // // //         .toc-grid::after {
// // // // // // // //         content: '';
// // // // // // // //         flex: auto;
// // // // // // // //         }

// // // // // // // //         .toc-card {
// // // // // // // //           background-color: #ffffff;
// // // // // // // //           border: 1px solid #dee2e6;
// // // // // // // //           border-radius: 6px;
// // // // // // // //           padding: 15px;
// // // // // // // //           transition: all 0.2s ease;
// // // // // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // // // // // //           display: flex;
// // // // // // // //           align-items: center;
// // // // // // // //           justify-content: center;
// // // // // // // //           min-height: 80px;
// // // // // // // //         }

// // // // // // // //         .toc-card:hover {
// // // // // // // //           transform: translateY(-3px);
// // // // // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // // // // //         }

// // // // // // // //         .toc-link {
// // // // // // // //           text-decoration: none;
// // // // // // // //           color: #007bff;
// // // // // // // //           font-weight: 500;
// // // // // // // //           display: block;
// // // // // // // //           text-align: center;
// // // // // // // //         }

// // // // // // // //         .toc-link:hover {
// // // // // // // //           color: #0056b3;
// // // // // // // //         }

// // // // // // // //         .sticky {
// // // // // // // //           position: fixed;
// // // // // // // //           top: 20px;
// // // // // // // //           left: 0px;
// // // // // // // //           width: 220px;
// // // // // // // //           height: calc(100vh - 40px);
// // // // // // // //           margin: 0;
// // // // // // // //           overflow-y: auto;
// // // // // // // //           z-index: 1000;
// // // // // // // //           padding-top: 70px;
// // // // // // // //           scrollbar-width: none;
// // // // // // // //           -ms-overflow-style: none;
// // // // // // // //         }

// // // // // // // //         .sticky::-webkit-scrollbar {
// // // // // // // //           width: 0;
// // // // // // // //           height: 0;
// // // // // // // //           background: transparent;
// // // // // // // //         }

// // // // // // // //         .sticky .toc-grid {
// // // // // // // //           grid-template-columns: 1fr;
// // // // // // // //         }

// // // // // // // //         @media (max-width: 768px) {
// // // // // // // //           .toc-box {
// // // // // // // //             width: 95%;
// // // // // // // //           }

// // // // // // // //           .sticky {
// // // // // // // //             width: 200px;
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default SectionTableOfContents;
// // // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // // //   const boxRef = useRef(null);

// // // // // // //   useEffect(() => {
// // // // // // //     const handleScroll = () => {
// // // // // // //       if (boxRef.current) {
// // // // // // //         const boxRect = boxRef.current.getBoundingClientRect();
// // // // // // //         setIsSticky(boxRect.top <= 0);
// // // // // // //       }
// // // // // // //     };

// // // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // // //     return () => window.removeEventListener('scroll', handleScroll);
// // // // // // //   }, []);

// // // // // // //   const handleLinkClick = (e, id) => {
// // // // // // //     e.preventDefault();
// // // // // // //     const element = document.getElementById(id);
// // // // // // //     if (element) {
// // // // // // //       const offset = 20;
// // // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // // //       window.scrollTo({
// // // // // // //         top: elementPosition - offset,
// // // // // // //         behavior: 'smooth'
// // // // // // //       });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// // // // // // //       <h2 className="toc-title">Table of Contents</h2>
// // // // // // //       {sections.length > 0 && (
// // // // // // //         <div className="toc-grid">
// // // // // // //           {sections.map((section) => (
// // // // // // //             <div key={section.id} className="toc-item">
// // // // // // //               <a
// // // // // // //                 href={`#${section.id}`}
// // // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // // //                 className="toc-link"
// // // // // // //               >
// // // // // // //                 {section.title}
// // // // // // //               </a>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //       <style jsx>{`
// // // // // // //         .toc-container {
// // // // // // //           width: 90%;
// // // // // // //           max-width: 1200px;
// // // // // // //           margin: 20px auto;
// // // // // // //           padding: 20px;
// // // // // // //           background-color: #f8f9fa;
// // // // // // //           border: 1px solid #e9ecef;
// // // // // // //           border-radius: 8px;
// // // // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // // // //         }

// // // // // // //         .toc-title {
// // // // // // //           text-align: center;
// // // // // // //           margin-bottom: 20px;
// // // // // // //           font-size: 24px;
// // // // // // //           color: #343a40;
// // // // // // //         }

// // // // // // //         .toc-grid {
// // // // // // //           display: flex;
// // // // // // //           flex-wrap: wrap;
// // // // // // //           justify-content: center;
// // // // // // //           gap: 15px;
// // // // // // //         }

// // // // // // //         .toc-item {
// // // // // // //           flex: 0 0 calc(33.333% - 15px);
// // // // // // //           min-width: 180px;
// // // // // // //           background-color: #ffffff;
// // // // // // //           border: 1px solid #dee2e6;
// // // // // // //           border-radius: 6px;
// // // // // // //           padding: 15px;
// // // // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // // // // //           transition: all 0.2s ease;
// // // // // // //           /* margin-right:20px; */
// // // // // // //         }

// // // // // // //         .toc-link {
// // // // // // //           display: block;
// // // // // // //           text-align: center;
// // // // // // //           text-decoration: none;
// // // // // // //           color: #007bff;
// // // // // // //           font-weight: 500;
// // // // // // //         }

// // // // // // //         .toc-link:hover {
// // // // // // //           color: #0056b3;
// // // // // // //         }

// // // // // // //         .toc-item:hover {
// // // // // // //           transform: translateY(-3px);
// // // // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // // // //         }

// // // // // // //         .sticky {
// // // // // // //           position: fixed;
// // // // // // //           top: 20px;
// // // // // // //           left: 0;
// // // // // // //           width: 220px;
// // // // // // //           height: calc(100vh - 40px);
// // // // // // //           overflow-y: auto;
// // // // // // //           z-index: 1000;
// // // // // // //           padding-top: 70px;
// // // // // // //           scrollbar-width: none;
// // // // // // //           -ms-overflow-style: none;
// // // // // // //           padding-right:10px;
// // // // // // //         }

// // // // // // //         .sticky::-webkit-scrollbar {
// // // // // // //           display: none;
// // // // // // //         }

// // // // // // //         .sticky .toc-grid {
// // // // // // //           flex-direction: column;
// // // // // // //         }

// // // // // // //         .sticky .toc-item {
// // // // // // //           width: 100%;
// // // // // // //         }

// // // // // // //         @media (max-width: 768px) {
// // // // // // //           .toc-container {
// // // // // // //             width: 95%;
// // // // // // //           }

// // // // // // //           .toc-item {
// // // // // // //             flex: 0 0 calc(50% - 15px);
// // // // // // //           }

// // // // // // //           .sticky {
// // // // // // //             width: 200px;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SectionTableOfContents;
// // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // const SectionTableOfContents = ({ sections = [] }) => {
// // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // //   const boxRef = useRef(null);
// // // // // //   const stickyThreshold = useRef(0);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       if (boxRef.current) {
// // // // // //         const currentScrollPos = window.pageYOffset;
// // // // // //         setIsSticky(currentScrollPos > stickyThreshold.current);
// // // // // //       }
// // // // // //     };

// // // // // //     const setInitialThreshold = () => {
// // // // // //       if (boxRef.current) {
// // // // // //         stickyThreshold.current = boxRef.current.offsetTop;
// // // // // //       }
// // // // // //     };

// // // // // //     setInitialThreshold();
// // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // //     window.addEventListener('resize', setInitialThreshold);

// // // // // //     return () => {
// // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // //       window.removeEventListener('resize', setInitialThreshold);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   const handleLinkClick = (e, id) => {
// // // // // //     e.preventDefault();
// // // // // //     const element = document.getElementById(id);
// // // // // //     if (element) {
// // // // // //       const offset = 20;
// // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // //       window.scrollTo({
// // // // // //         top: elementPosition - offset,
// // // // // //         behavior: 'smooth'
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
      
// // // // // //       <h2 className="toc-title">Table of Contents</h2>
// // // // // //       {sections.length > 0 && (
// // // // // //         <div className="toc-grid">
// // // // // //           {sections.map((section) => (
// // // // // //             <div key={section.id} className="toc-item">
// // // // // //               <a
// // // // // //                 href={`#${section.id}`}
// // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // //                 className="toc-link"
// // // // // //               > 
// // // // // //                 {section.title}
// // // // // //               </a>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <style jsx>{`
// // // // // //         .toc-container {
// // // // // //           width: 90%;
// // // // // //           max-width: 1200px;
// // // // // //           margin: 20px auto;
// // // // // //           padding: 20px;
// // // // // //           background-color: #f8f9fa;
// // // // // //           border: 1px solid #e9ecef;
// // // // // //           border-radius: 8px;
// // // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // // //         }

// // // // // //         .toc-title {
// // // // // //           text-align: center;
// // // // // //           margin-bottom: 20px;
// // // // // //           font-size: 24px;
// // // // // //           color: #343a40;
// // // // // //         }

// // // // // //         .toc-grid {
// // // // // //           display: flex;
// // // // // //           flex-wrap: wrap;
// // // // // //           justify-content: center;
// // // // // //           gap: 15px;
// // // // // //         }

// // // // // //         .toc-item {
// // // // // //           flex: 0 0 calc(33.333% - 15px);
// // // // // //           min-width: 200px;
// // // // // //           background-color: #ffffff;
// // // // // //           border: 1px solid #dee2e6;
// // // // // //           border-radius: 6px;
// // // // // //           padding: 15px;
// // // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // // // //           transition: all 0.2s ease;
// // // // // //         }

// // // // // //         .toc-link {
// // // // // //           display: block;
// // // // // //           text-align: center;
// // // // // //           text-decoration: none;
// // // // // //           color: #007bff;
// // // // // //           font-weight: 500;
// // // // // //         }

// // // // // //         .toc-link:hover {
// // // // // //           color: #0056b3;
// // // // // //         }

// // // // // //         .toc-item:hover {
// // // // // //           transform: translateY(-3px);
// // // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // // //         }

// // // // // //         .sticky {
// // // // // //           position: fixed;
// // // // // //           top: 20px;
// // // // // //           left: 0;
// // // // // //           width: 220px;
// // // // // //           height: calc(100vh - 40px);
// // // // // //           overflow-y: auto;
// // // // // //           z-index: 1000;
// // // // // //           padding-top: 70px;
// // // // // //           scrollbar-width: none;
// // // // // //           -ms-overflow-style: none;
// // // // // //         }

// // // // // //         .sticky::-webkit-scrollbar {
// // // // // //           display: none;
// // // // // //         }

// // // // // //         .sticky .toc-grid {
// // // // // //           flex-direction: column;
// // // // // //         }

// // // // // //         .sticky .toc-item {
// // // // // //           width: 100%;
// // // // // //         }

// // // // // //         @media (max-width: 768px) {
// // // // // //           .toc-container {
// // // // // //             width: 95%;
// // // // // //           }

// // // // // //           .toc-item {
// // // // // //             flex: 0 0 calc(50% - 15px);
// // // // // //           }

// // // // // //           .sticky {
// // // // // //             width: 200px;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SectionTableOfContents;
// // // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // // const SectionTableOfContents = ({ sections = [],title='' }) => {
// // // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // // //   const boxRef = useRef(null);
// // // // // //   const stickyThreshold = useRef(0);

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       if (boxRef.current) {
// // // // // //         const currentScrollPos = window.pageYOffset;
// // // // // //         setIsSticky(currentScrollPos > stickyThreshold.current);
// // // // // //       }
// // // // // //     };

// // // // // //     const setInitialThreshold = () => {
// // // // // //       if (boxRef.current) {
// // // // // //         stickyThreshold.current = boxRef.current.offsetTop;
// // // // // //       }
// // // // // //     };

// // // // // //     setInitialThreshold();
// // // // // //     window.addEventListener('scroll', handleScroll);
// // // // // //     window.addEventListener('resize', setInitialThreshold);

// // // // // //     return () => {
// // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // //       window.removeEventListener('resize', setInitialThreshold);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   const handleLinkClick = (e, id) => {
// // // // // //     e.preventDefault();
// // // // // //     const element = document.getElementById(id);
// // // // // //     if (element) {
// // // // // //       const offset = isSticky ? 20 : 300; // Larger offset when not sticky
// // // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // // //       window.scrollTo({
// // // // // //         top: elementPosition - offset,
// // // // // //         behavior: 'smooth'
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// // // // // //       <h2 className="toc-title">{title}</h2>
// // // // // //       {sections.length > 0 && (
// // // // // //         <div className="toc-grid">
// // // // // //           {sections.map((section) => (
// // // // // //             <div key={section.id} className="toc-item" style={{backgroundColor:`${section.background}`}}>
// // // // // //               <a
// // // // // //                 href={`#${section.id}`}
// // // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // // //                 className="toc-link"
// // // // // //               >
// // // // // //                 {section.title}
// // // // // //               </a>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}
// // // // // //       <style jsx>{`
// // // // // //         .toc-container {
// // // // // //           width: 90%;
// // // // // //           max-width: 1200px;
// // // // // //           margin: 1px auto;
// // // // // //           padding: 20px;
// // // // // //           background-color: #f8f9fa;
// // // // // //           border: 1px solid #e9ecef;
// // // // // //           border-radius: 8px;
// // // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // // //         }

// // // // // //         .toc-title {
// // // // // //           text-align: center;
// // // // // //           margin-bottom: 20px;
// // // // // //           font-size: 24px;
// // // // // //           color: #343a40;
// // // // // //         }

// // // // // //         .toc-grid {
// // // // // //           display: flex;
// // // // // //           flex-wrap: wrap;
// // // // // //           justify-content: center;
// // // // // //           gap: 5px;
// // // // // //         }

// // // // // //         .toc-item {
// // // // // //           flex: 0 0 calc(33.333% - 15px);
// // // // // //           min-width: 180px;
// // // // // //           background-color: #ffffff;
// // // // // //           border: 1px solid #dee2e6;
// // // // // //           border-radius: 6px;
// // // // // //           padding: 15px;
// // // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // // // //           transition: all 0.2s ease;
// // // // // //           min-height:60px;
// // // // // //           height:fit-content;
// // // // // //         }

// // // // // //         .toc-link {
// // // // // //           display: block;
// // // // // //           text-align: center;
// // // // // //           text-decoration: none;
// // // // // //           color: #007bff;
// // // // // //           font-weight: 500;
// // // // // //         }

// // // // // //         .toc-link:hover {
// // // // // //           color: #0056b3;
// // // // // //         }

// // // // // //         .toc-item:hover {
// // // // // //           transform: translateY(-3px);
// // // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // // //         }

// // // // // //         .sticky {
// // // // // //           position: fixed;
// // // // // //           top: 20px;
// // // // // //           left: 0;
// // // // // //           width: 220px;
// // // // // //           height: calc(100vh - 40px);
// // // // // //           overflow-y: auto;
// // // // // //           z-index: 1000;
// // // // // //           padding-top: 70px;
// // // // // //           scrollbar-width: none;
// // // // // //           -ms-overflow-style: none;
// // // // // //         }

// // // // // //         .sticky::-webkit-scrollbar {
// // // // // //           display: none;
// // // // // //         }

// // // // // //         .sticky .toc-grid {
// // // // // //           flex-direction: column;
// // // // // //         }

// // // // // //         .sticky .toc-item {
// // // // // //           width: 100%;
// // // // // //         }

// // // // // //         @media (max-width: 768px) {
// // // // // //           .toc-container {
// // // // // //             width: 95%;
// // // // // //           }

// // // // // //           .toc-item {
// // // // // //             flex: 0 0 calc(50% - 15px);
// // // // // //           }

// // // // // //           .sticky {
// // // // // //             width: 200px;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SectionTableOfContents;
// // // // // import React, { useState, useEffect, useRef } from 'react';

// // // // // const SectionTableOfContents = ({ sections = [], title = '' }) => {
// // // // //   const [isSticky, setIsSticky] = useState(false);
// // // // //   const boxRef = useRef(null);
// // // // //   const stickyThreshold = useRef(0);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       if (boxRef.current) {
// // // // //         const currentScrollPos = window.pageYOffset;
// // // // //         setIsSticky(currentScrollPos > stickyThreshold.current);
// // // // //       }
// // // // //     };

// // // // //     const setInitialThreshold = () => {
// // // // //       if (boxRef.current) {
// // // // //         stickyThreshold.current = boxRef.current.offsetTop;
// // // // //       }
// // // // //     };

// // // // //     setInitialThreshold();
// // // // //     window.addEventListener('scroll', handleScroll);
// // // // //     window.addEventListener('resize', setInitialThreshold);

// // // // //     return () => {
// // // // //       window.removeEventListener('scroll', handleScroll);
// // // // //       window.removeEventListener('resize', setInitialThreshold);
// // // // //     };
// // // // //   }, []);

// // // // //   const handleLinkClick = (e, id) => {
// // // // //     e.preventDefault();
// // // // //     const element = document.getElementById(id);
// // // // //     if (element) {
// // // // //       const offset = isSticky ? 20 : 300;
// // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // //       window.scrollTo({
// // // // //         top: elementPosition - offset,
// // // // //         behavior: 'smooth'
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// // // // //       <h2 className="toc-title">{title}</h2>
// // // // //       {sections.length > 0 && (
// // // // //         <div className="toc-grid">
// // // // //           {sections.map((section) => (
// // // // //             <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
// // // // //               <a
// // // // //                 href={`#${section.id}`}
// // // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // // //                 className="toc-link"
// // // // //               >
// // // // //                 {section.icon && <span className="toc-icon">{section.icon}</span>}
// // // // //                 {section.title}
// // // // //               </a>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>
// // // // //       )}
// // // // //       <style jsx global>{`
// // // // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

// // // // //         .toc-container {
// // // // //           width: 90%;
// // // // //           max-width: 1200px;
// // // // //           margin: 1px auto;
// // // // //           padding: 20px;
// // // // //           background-color: #f8f9fa;
// // // // //           border: 1px solid #e9ecef;
// // // // //           border-radius: 8px;
// // // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // // //           font-family: 'Roboto', sans-serif;
// // // // //         }

// // // // //         .toc-title {
// // // // //           text-align: center;
// // // // //           margin-bottom: 20px;
// // // // //           font-size: 28px;
// // // // //           color: #343a40;
// // // // //           font-family: 'Poppins', sans-serif;
// // // // //           font-weight: 600;
// // // // //         }

// // // // //         .toc-grid {
// // // // //           display: flex;
// // // // //           flex-wrap: wrap;
// // // // //           justify-content: center;
// // // // //           gap: 10px;
// // // // //         }

// // // // //         .toc-item {
// // // // //           flex: 0 0 calc(33.333% - 15px);
// // // // //           min-width: 180px;
// // // // //           background-color: #ffffff;
// // // // //           border: 1px solid #dee2e6;
// // // // //           border-radius: 6px;
// // // // //           padding: 15px;
// // // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // // //           transition: all 0.2s ease;
// // // // //           min-height: 60px;
// // // // //           height: fit-content;
// // // // //         }

// // // // //         .toc-link {
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //           justify-content: center;
// // // // //           text-align: center;
// // // // //           text-decoration: none;
// // // // //           color: #007bff;
// // // // //           font-weight: 500;
// // // // //           font-size: 16px;
// // // // //           line-height: 1.4;
// // // // //         }

// // // // //         .toc-icon {
// // // // //           margin-right: 8px;
// // // // //           display: flex;
// // // // //           align-items: center;
// // // // //         }

// // // // //         .toc-link:hover {
// // // // //           color: #0056b3;
// // // // //         }

// // // // //         .toc-item:hover {
// // // // //           transform: translateY(-3px);
// // // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // // //         }

// // // // //         .sticky {
// // // // //           position: fixed;
// // // // //           top: 20px;
// // // // //           left: 0;
// // // // //           width: 220px;
// // // // //           height: calc(100vh - 40px);
// // // // //           overflow-y: auto;
// // // // //           z-index: 1000;
// // // // //           padding-top: 70px;
// // // // //           scrollbar-width: none;
// // // // //           -ms-overflow-style: none;
// // // // //         }

// // // // //         .sticky::-webkit-scrollbar {
// // // // //           display: none;
// // // // //         }

// // // // //         .sticky .toc-grid {
// // // // //           flex-direction: column;
// // // // //         }

// // // // //         .sticky .toc-item {
// // // // //           width: 100%;
// // // // //         }

// // // // //         @media (max-width: 768px) {
// // // // //           .toc-container {
// // // // //             width: 95%;
// // // // //           }

// // // // //           .toc-item {
// // // // //             flex: 0 0 calc(50% - 15px);
// // // // //           }

// // // // //           .sticky {
// // // // //             width: 200px;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SectionTableOfContents;
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import Image from 'next/image';

// // // // const SectionTableOfContents = ({ sections = [], title = '' }) => {
// // // //   const [isSticky, setIsSticky] = useState(false);
// // // //   const boxRef = useRef(null);
// // // //   const stickyThreshold = useRef(0);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       if (boxRef.current) {
// // // //         const currentScrollPos = window.pageYOffset;
// // // //         setIsSticky(currentScrollPos > stickyThreshold.current);
// // // //       }
// // // //     };

// // // //     const setInitialThreshold = () => {
// // // //       if (boxRef.current) {
// // // //         stickyThreshold.current = boxRef.current.offsetTop;
// // // //       }
// // // //     };

// // // //     setInitialThreshold();
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     window.addEventListener('resize', setInitialThreshold);

// // // //     return () => {
// // // //       window.removeEventListener('scroll', handleScroll);
// // // //       window.removeEventListener('resize', setInitialThreshold);
// // // //     };
// // // //   }, []);

// // // //   const handleLinkClick = (e, id) => {
// // // //     e.preventDefault();
// // // //     const element = document.getElementById(id);
// // // //     if (element) {
// // // //       const offset = isSticky ? 20 : 300;
// // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // //       window.scrollTo({
// // // //         top: elementPosition - offset,
// // // //         behavior: 'smooth'
// // // //       });
// // // //     }
// // // //   };

// // // //   const renderIcon = (icon) => {
// // // //     if (typeof icon === 'string') {
// // // //       // Assume it's an image URL
// // // //       return <Image src={icon} alt="" width={24} height={24} />;
// // // //     } else if (React.isValidElement(icon)) {
// // // //       // It's a React element (e.g., an imported SVG component)
// // // //       return React.cloneElement(icon, { width: 24, height: 24 });
// // // //     } else if (icon && typeof icon === 'object' && icon.src) {
// // // //       // It's an imported image object
// // // //       return <Image src={icon} alt="" width={24} height={24} />;
// // // //     }
// // // //     return null;
// // // //   };

// // // //   return (
// // // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// // // //       <h2 className="toc-title">{title}</h2>
// // // //       {sections.length > 0 && (
// // // //         <div className="toc-grid">
// // // //           {sections.map((section) => (
// // // //             <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
// // // //               <a
// // // //                 href={`#${section.id}`}
// // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // //                 className="toc-link"
// // // //               >
// // // //                 {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
// // // //                 {section.title}
// // // //               </a>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //       <style jsx global>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

// // // //         .toc-container {
// // // //           width: 90%;
// // // //           max-width: 1200px;
// // // //           margin: 1px auto;
// // // //           padding: 20px;
// // // //           background-color: #f8f9fa;
// // // //           border: 1px solid #e9ecef;
// // // //           border-radius: 8px;
// // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // //           font-family: 'Roboto', sans-serif;
// // // //         }

// // // //         .toc-title {
// // // //           text-align: center;
// // // //           margin-bottom: 20px;
// // // //           font-size: 28px;
// // // //           color: #343a40;
// // // //           font-family: 'Poppins', sans-serif;
// // // //           font-weight: 600;
// // // //         }

// // // //         .toc-grid {
// // // //           display: flex;
// // // //           flex-wrap: wrap;
// // // //           justify-content: center;
// // // //           gap: 10px;
// // // //         }

// // // //         .toc-item {
// // // //           flex: 0 0 calc(33.333% - 15px);
// // // //           min-width: 180px;
// // // //           background-color: #ffffff;
// // // //           border: 1px solid #dee2e6;
// // // //           border-radius: 6px;
// // // //           padding: 15px;
// // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // //           transition: all 0.2s ease;
// // // //           min-height: 60px;
// // // //           height: fit-content;
// // // //         }

// // // //         .toc-link {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           text-align: center;
// // // //           text-decoration: none;
// // // //           color: #007bff;
// // // //           font-weight: 500;
// // // //           font-size: 16px;
// // // //           line-height: 1.4;
// // // //         }

// // // //         .toc-icon {
// // // //           margin-right: 8px;
// // // //           display: flex;
// // // //           align-items: center;
// // // //         }

// // // //         .toc-link:hover {
// // // //           color: #0056b3;
// // // //         }

// // // //         .toc-item:hover {
// // // //           transform: translateY(-3px);
// // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // //         }

// // // //         .sticky {
// // // //           position: fixed;
// // // //           top: 20px;
// // // //           left: 0;
// // // //           width: 220px;
// // // //           height: calc(100vh - 40px);
// // // //           overflow-y: auto;
// // // //           z-index: 1000;
// // // //           padding-top: 70px;
// // // //           scrollbar-width: none;
// // // //           -ms-overflow-style: none;
// // // //         }

// // // //         .sticky::-webkit-scrollbar {
// // // //           display: none;
// // // //         }

// // // //         .sticky .toc-grid {
// // // //           flex-direction: column;
// // // //         }

// // // //         .sticky .toc-item {
// // // //           width: 100%;
// // // //         }

// // // //         @media (max-width: 768px) {
// // // //           .toc-container {
// // // //             width: 95%;
// // // //           }

// // // //           .toc-item {
// // // //             flex: 0 0 calc(50% - 15px);
// // // //           }

// // // //           .sticky {
// // // //             width: 200px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SectionTableOfContents;
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import Image from 'next/image';

// // // // const SectionTableOfContents = ({ sections = [], title = '' }) => {
// // // //   const [isSticky, setIsSticky] = useState(false);
// // // //   const boxRef = useRef(null);
// // // //   const stickyThreshold = useRef(0);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       if (boxRef.current) {
// // // //         const currentScrollPos = window.pageYOffset;
// // // //         setIsSticky(currentScrollPos > stickyThreshold.current);
// // // //       }
// // // //     };

// // // //     const setInitialThreshold = () => {
// // // //       if (boxRef.current) {
// // // //         stickyThreshold.current = boxRef.current.offsetTop;
// // // //       }
// // // //     };

// // // //     setInitialThreshold();
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     window.addEventListener('resize', setInitialThreshold);

// // // //     return () => {
// // // //       window.removeEventListener('scroll', handleScroll);
// // // //       window.removeEventListener('resize', setInitialThreshold);
// // // //     };
// // // //   }, []);

// // // //   const handleLinkClick = (e, id) => {
// // // //     e.preventDefault();
// // // //     const element = document.getElementById(id);
// // // //     if (element) {
// // // //       const offset = isSticky ? 20 : 300;
// // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // //       window.scrollTo({
// // // //         top: elementPosition - offset,
// // // //         behavior: 'smooth'
// // // //       });
// // // //     }
// // // //   };

// // // //   const renderIcon = (icon) => {
// // // //     if (typeof icon === 'string') {
// // // //       // Assume it's an image URL (png, jpg, jpeg, gif, webp, etc.)
// // // //       return <Image src={icon} alt="" width={34} height={34} />;
// // // //     } else if (React.isValidElement(icon)) {
// // // //       // It's a React element (e.g., an imported SVG component)
// // // //       return React.cloneElement(icon, { width: 24, height: 24 });
// // // //     } else if (icon && typeof icon === 'object' && icon.src) {
// // // //       // It's an imported image object
// // // //       return <Image src={icon} alt="" width={24} height={24} />;
// // // //     }
// // // //     return null;
// // // //   };

// // // //   return (
// // // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// // // //       <h2 className="toc-title">{title}</h2>
// // // //       {sections.length > 0 && (
// // // //         <div className="toc-grid">
// // // //           {sections.map((section) => (
// // // //             <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
// // // //               <a
// // // //                 href={`#${section.id}`}
// // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // //                 className="toc-link"
// // // //               >
// // // //                 {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
// // // //                 {section.title}
// // // //               </a>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //       <style jsx global>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

// // // //         .toc-container {
// // // //           width: 90%;
// // // //           max-width: 1200px;
// // // //           margin: 1px auto;
// // // //           padding: 20px;
// // // //           background-color: #f8f9fa;
// // // //           border: 1px solid #e9ecef;
// // // //           border-radius: 8px;
// // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // //           font-family: 'Roboto', sans-serif;
// // // //         }

// // // //         .toc-title {
// // // //           text-align: center;
// // // //           margin-bottom: 20px;
// // // //           font-size: 28px;
// // // //           color: #343a40;
// // // //           font-family: 'Poppins', sans-serif;
// // // //           font-weight: 600;
// // // //         }

// // // //         .toc-grid {
// // // //           display: flex;
// // // //           flex-wrap: wrap;
// // // //           justify-content: center;
// // // //           gap: 10px;
// // // //         }

// // // //         .toc-item {
// // // //           flex: 0 0 calc(33.333% - 15px);
// // // //           min-width: 180px;
// // // //           background-color: #ffffff;
// // // //           border: 1px solid #dee2e6;
// // // //           border-radius: 6px;
// // // //           padding: 15px;
// // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // //           transition: all 0.2s ease;
// // // //           min-height: 60px;
// // // //           height: fit-content;
// // // //         }

// // // //         .toc-link {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           text-align: center;
// // // //           text-decoration: none;
// // // //           color: #007bff;
// // // //           font-weight: 500;
// // // //           font-size: 16px;
// // // //           line-height: 1.4;
// // // //         }

// // // //         .toc-icon {
// // // //           margin-right: 8px;
// // // //           display: flex;
// // // //           align-items: center;
// // // //         }

// // // //         .toc-link:hover {
// // // //           color: #0056b3;
// // // //         }

// // // //         .toc-item:hover {
// // // //           transform: translateY(-3px);
// // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // //         }

// // // //         .sticky {
// // // //           position: fixed;
// // // //           top: 20px;
// // // //           left: 0;
// // // //           width: 220px;
// // // //           height: calc(100vh - 40px);
// // // //           overflow-y: auto;
// // // //           z-index: 1000;
// // // //           padding-top: 70px;
// // // //           scrollbar-width: none;
// // // //           -ms-overflow-style: none;
// // // //         }

// // // //         .sticky::-webkit-scrollbar {
// // // //           display: none;
// // // //         }

// // // //         .sticky .toc-grid {
// // // //           flex-direction: column;
// // // //         }

// // // //         .sticky .toc-item {
// // // //           width: 100%;
// // // //         }

// // // //         @media (max-width: 768px) {
// // // //           .toc-container {
// // // //             width: 95%;
// // // //           }

// // // //           .toc-item {
// // // //             flex: 0 0 calc(50% - 15px);
// // // //           }

// // // //           .sticky {
// // // //             width: 200px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SectionTableOfContents;
// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import Image from 'next/image';

// // // // const SectionTableOfContents = ({ sections = [], title = '' }) => {
// // // //   const [isSticky, setIsSticky] = useState(false);
// // // //   const boxRef = useRef(null);
// // // //   const stickyThreshold = useRef(0);

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       if (boxRef.current) {
// // // //         const currentScrollPos = window.pageYOffset;
// // // //         setIsSticky(currentScrollPos > stickyThreshold.current);
// // // //       }
// // // //     };

// // // //     const setInitialThreshold = () => {
// // // //       if (boxRef.current) {
// // // //         // Add 500px to the initial threshold
// // // //         stickyThreshold.current = boxRef.current.offsetTop + 100;
// // // //       }
// // // //     };

// // // //     setInitialThreshold();
// // // //     window.addEventListener('scroll', handleScroll);
// // // //     window.addEventListener('resize', setInitialThreshold);

// // // //     return () => {
// // // //       window.removeEventListener('scroll', handleScroll);
// // // //       window.removeEventListener('resize', setInitialThreshold);
// // // //     };
// // // //   }, []);

 

  
// // // //   const handleLinkClick = (e, id) => {
// // // //     e.preventDefault();
// // // //     const element = document.getElementById(id);
// // // //     if (element) {
// // // //       const offset = isSticky ? 30 : 600;  // Larger offset when TOC is at top
// // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // //       window.scrollTo({
// // // //         top: elementPosition - offset,
// // // //         behavior: 'smooth'
// // // //       });
// // // //     }
// // // //   };
  
// // // //   const renderIcon = (icon) => {
// // // //     if (typeof icon === 'string') {
// // // //       return <Image src={icon} alt="" width={34} height={34} />;
// // // //     } else if (React.isValidElement(icon)) {
// // // //       return React.cloneElement(icon, { width: 24, height: 24 });
// // // //     } else if (icon && typeof icon === 'object' && icon.src) {
// // // //       return <Image src={icon} alt="" width={24} height={24} />;
// // // //     }
// // // //     return null;
// // // //   };

// // // //   return (
// // // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// // // //       <h2 className="toc-title">{title}</h2>
// // // //       {sections.length > 0 && (
// // // //         <div className="toc-grid">
// // // //           {sections.map((section) => (
// // // //             <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
// // // //               <a
// // // //                 href={`#${section.id}`}
// // // //                 onClick={(e) => handleLinkClick(e, section.id)}
// // // //                 className="toc-link"
// // // //               >
// // // //                 {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
// // // //                 {section.title}
// // // //               </a>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //       <style jsx global>{`
// // // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

// // // //         .toc-container {
// // // //           width: 90%;
// // // //           max-width: 1200px;
// // // //           margin: 1px auto;
// // // //           padding: 20px;
// // // //           background-color: #f8f9fa;
// // // //           border: 1px solid #e9ecef;
// // // //           border-radius: 8px;
// // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // //           font-family: 'Roboto', sans-serif;
// // // //         }

// // // //         .toc-title {
// // // //           text-align: center;
// // // //           margin-bottom: 20px;
// // // //           font-size: 28px;
// // // //           color: #343a40;
// // // //           font-family: 'Poppins', sans-serif;
// // // //           font-weight: 600;
// // // //         }

// // // //         .toc-grid {
// // // //           display: flex;
// // // //           flex-wrap: wrap;
// // // //           justify-content: center;
// // // //           gap: 10px;
// // // //         }

// // // //         .toc-item {
// // // //           flex: 0 0 calc(33.333% - 15px);
// // // //           min-width: 180px;
// // // //           background-color: #ffffff;
// // // //           border: 1px solid #dee2e6;
// // // //           border-radius: 6px;
// // // //           padding: 15px;
// // // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // // //           transition: all 0.2s ease;
// // // //           min-height: 60px;
// // // //           height: fit-content;
// // // //         }

// // // //         .toc-link {
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           text-align: center;
// // // //           text-decoration: none;
// // // //           color: #007bff;
// // // //           font-weight: 500;
// // // //           font-size: 16px;
// // // //           line-height: 1.4;
// // // //         }

// // // //         .toc-icon {
// // // //           margin-right: 8px;
// // // //           display: flex;
// // // //           align-items: center;
// // // //         }

// // // //         .toc-link:hover {
// // // //           color: #0056b3;
// // // //         }

// // // //         .toc-item:hover {
// // // //           transform: translateY(-3px);
// // // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // // //         }

// // // //         .sticky {
// // // //           position: fixed;
// // // //           top: 20px;
// // // //           left: 0;
// // // //           width: 220px;
// // // //           height: calc(100vh - 40px);
// // // //           overflow-y: auto;
// // // //           z-index: 1000;
// // // //           padding-top: 70px;
// // // //           scrollbar-width: none;
// // // //           -ms-overflow-style: none;
// // // //         }

// // // //         .sticky::-webkit-scrollbar {
// // // //           display: none;
// // // //         }

// // // //         .sticky .toc-grid {
// // // //           flex-direction: column;
// // // //         }

// // // //         .sticky .toc-item {
// // // //           width: 100%;
// // // //         }

// // // //         @media (max-width: 768px) {
// // // //           .toc-container {
// // // //             width: 95%;
// // // //           }

// // // //           .toc-item {
// // // //             flex: 0 0 calc(50% - 15px);
// // // //           }

// // // //           .sticky {
// // // //             width: 200px;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SectionTableOfContents;
// // // import React, { useState, useEffect, useRef } from 'react';
// // // import Image from 'next/image';

// // // const SectionTableOfContents = ({ sections = [], title = '' }) => {
// // //   const [isSticky, setIsSticky] = useState(false);
// // //   const [expandedSection, setExpandedSection] = useState(null);
// // //   const boxRef = useRef(null);
// // //   const stickyThreshold = useRef(0);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (boxRef.current) {
// // //         const currentScrollPos = window.pageYOffset;
// // //         setIsSticky(currentScrollPos > stickyThreshold.current);
// // //       }
// // //     };

// // //     const setInitialThreshold = () => {
// // //       if (boxRef.current) {
// // //         stickyThreshold.current = boxRef.current.offsetTop + 100;
// // //       }
// // //     };

// // //     setInitialThreshold();
// // //     window.addEventListener('scroll', handleScroll);
// // //     window.addEventListener('resize', setInitialThreshold);

// // //     return () => {
// // //       window.removeEventListener('scroll', handleScroll);
// // //       window.removeEventListener('resize', setInitialThreshold);
// // //     };
// // //   }, []);

// // //   const handleLinkClick = (e, id) => {
// // //     e.preventDefault();
// // //     const element = document.getElementById(id);
// // //     if (element) {
// // //       const offset = isSticky ? 30 : 600;
// // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // //       window.scrollTo({
// // //         top: elementPosition - offset,
// // //         behavior: 'smooth'
// // //       });
// // //     }
// // //   };

// // //   const toggleSection = (sectionId) => {
// // //     setExpandedSection(expandedSection === sectionId ? null : sectionId);
// // //   };

// // //   const renderIcon = (icon) => {
// // //     if (typeof icon === 'string') {
// // //       return <Image src={icon} alt="" width={34} height={34} />;
// // //     } else if (React.isValidElement(icon)) {
// // //       return React.cloneElement(icon, { width: 24, height: 24 });
// // //     } else if (icon && typeof icon === 'object' && icon.src) {
// // //       return <Image src={icon} alt="" width={24} height={24} />;
// // //     }
// // //     return null;
// // //   };

// // //   const renderSection = (section) => {
// // //     if (section.subsections) {
// // //       // Render accordion section if it has subsections
// // //       return (
// // //         <div key={section.id} className="toc-item accordion" style={{backgroundColor: `${section.background}`}}>
// // //           <button 
// // //             className="toc-link accordion-header" 
// // //             onClick={() => toggleSection(section.id)}
// // //           >
// // //             {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
// // //             {section.title}
// // //             <span className={`accordion-arrow ${expandedSection === section.id ? 'expanded' : ''}`}>
// // //               ▼
// // //             </span>
// // //           </button>
// // //           {expandedSection === section.id && (
// // //             <div className="subsections-list">
// // //               {section.subsections.map((subsection) => (
// // //                 <a
// // //                   key={subsection.id}
// // //                   href={`#${subsection.id}`}
// // //                   onClick={(e) => handleLinkClick(e, subsection.id)}
// // //                   className="subsection-link"
// // //                 >
// // //                   {subsection.title}
// // //                 </a>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       );
// // //     }

// // //     // Regular section without subsections (current behavior)
// // //     return (
// // //       <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
// // //         <a
// // //           href={`#${section.id}`}
// // //           onClick={(e) => handleLinkClick(e, section.id)}
// // //           className="toc-link"
// // //         >
// // //           {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
// // //           {section.title}
// // //         </a>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// // //       <h2 className="toc-title">{title}</h2>
// // //       {sections.length > 0 && (
// // //         <div className="toc-grid">
// // //           {sections.map(renderSection)}
// // //         </div>
// // //       )}
// // //       <style jsx global>{`
// // //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

// // //         .toc-container {
// // //           width: 90%;
// // //           max-width: 1200px;
// // //           margin: 1px auto;
// // //           padding: 20px;
// // //           background-color: #f8f9fa;
// // //           border: 1px solid #e9ecef;
// // //           border-radius: 8px;
// // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // //           font-family: 'Roboto', sans-serif;
// // //         }

// // //         .toc-title {
// // //           text-align: center;
// // //           margin-bottom: 20px;
// // //           font-size: 28px;
// // //           color: #343a40;
// // //           font-family: 'Poppins', sans-serif;
// // //           font-weight: 600;
// // //         }

// // //         .toc-grid {
// // //           display: flex;
// // //           flex-wrap: wrap;
// // //           justify-content: center;
// // //           gap: 10px;
// // //         }

// // //         .toc-item {
// // //           flex: 0 0 calc(33.333% - 15px);
// // //           min-width: 180px;
// // //           background-color: #ffffff;
// // //           border: 1px solid #dee2e6;
// // //           border-radius: 6px;
// // //           padding: 15px;
// // //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// // //           transition: all 0.2s ease;
// // //           min-height: 60px;
// // //           height: fit-content;
// // //         }

// // //         .toc-link {
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           text-align: center;
// // //           text-decoration: none;
// // //           color: #007bff;
// // //           font-weight: 500;
// // //           font-size: 16px;
// // //           line-height: 1.4;
// // //         }

// // //         .toc-icon {
// // //           margin-right: 8px;
// // //           display: flex;
// // //           align-items: center;
// // //         }

// // //         .accordion-header {
// // //           width: 100%;
// // //           border: none;
// // //           background: none;
// // //           cursor: pointer;
// // //           padding: 0;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: space-between;
// // //         }

// // //         .accordion-arrow {
// // //           margin-left: 8px;
// // //           font-size: 12px;
// // //           transition: transform 0.2s;
// // //         }

// // //         .accordion-arrow.expanded {
// // //           transform: rotate(180deg);
// // //         }

// // //         .subsections-list {
// // //           margin-top: 10px;
// // //           padding-top: 10px;
// // //           border-top: 1px solid #dee2e6;
// // //           display: flex;
// // //           flex-direction: column;
// // //           gap: 8px;
// // //         }

// // //         .subsection-link {
// // //           color: #6c757d;
// // //           text-decoration: none;
// // //           font-size: 14px;
// // //           padding: 4px 8px;
// // //           border-radius: 4px;
// // //           transition: all 0.2s;
// // //         }

// // //         .subsection-link:hover {
// // //           background-color: #f8f9fa;
// // //           color: #007bff;
// // //         }

// // //         .toc-link:hover {
// // //           color: #0056b3;
// // //         }

// // //         .toc-item:hover {
// // //           transform: translateY(-3px);
// // //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// // //         }

// // //         .sticky {
// // //           position: fixed;
// // //           top: 20px;
// // //           left: 0;
// // //           width: 220px;
// // //           height: calc(100vh - 40px);
// // //           overflow-y: auto;
// // //           z-index: 1000;
// // //           padding-top: 70px;
// // //           scrollbar-width: none;
// // //           -ms-overflow-style: none;
// // //         }

// // //         .sticky::-webkit-scrollbar {
// // //           display: none;
// // //         }

// // //         .sticky .toc-grid {
// // //           flex-direction: column;
// // //         }

// // //         .sticky .toc-item {
// // //           width: 100%;
// // //         }

// // //         @media (max-width: 768px) {
// // //           .toc-container {
// // //             width: 95%;
// // //           }

// // //           .toc-item {
// // //             flex: 0 0 calc(50% - 15px);
// // //           }

// // //           .sticky {
// // //             width: 200px;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // };

// // // export default SectionTableOfContents;
// // import React, { useState, useEffect, useRef } from 'react';
// // import Image from 'next/image';
// // import { ChevronDown } from 'lucide-react';

// // const SectionTableOfContents = ({ sections = [], title = '' }) => {
// //   const [isSticky, setIsSticky] = useState(false);
// //   const [expandedSection, setExpandedSection] = useState(null);
// //   const boxRef = useRef(null);
// //   const stickyThreshold = useRef(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (boxRef.current) {
// //         const currentScrollPos = window.pageYOffset;
// //         setIsSticky(currentScrollPos > stickyThreshold.current);
// //       }
// //     };

// //     const setInitialThreshold = () => {
// //       if (boxRef.current) {
// //         stickyThreshold.current = boxRef.current.offsetTop + 100;
// //       }
// //     };

// //     setInitialThreshold();
// //     window.addEventListener('scroll', handleScroll);
// //     window.addEventListener('resize', setInitialThreshold);

// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //       window.removeEventListener('resize', setInitialThreshold);
// //     };
// //   }, []);

// //   const handleLinkClick = (e, id) => {
// //     e.preventDefault();
// //     const element = document.getElementById(id);
// //     if (element) {
// //       const offset = isSticky ? 30 : 600;
// //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// //       window.scrollTo({
// //         top: elementPosition - offset,
// //         behavior: 'smooth'
// //       });
// //     }
// //   };

// //   const toggleSection = (sectionId) => {
// //     setExpandedSection(expandedSection === sectionId ? null : sectionId);
// //   };

// //   const renderIcon = (icon) => {
// //     if (typeof icon === 'string') {
// //       return <Image src={icon} alt="" width={34} height={34} />;
// //     } else if (React.isValidElement(icon)) {
// //       return React.cloneElement(icon, { width: 24, height: 24 });
// //     } else if (icon && typeof icon === 'object' && icon.src) {
// //       return <Image src={icon} alt="" width={24} height={24} />;
// //     }
// //     return null;
// //   };

// //   const renderSection = (section) => {
// //     if (section.subsections) {
// //       return (
// //         <div key={section.id} className="toc-item accordion" style={{backgroundColor: `${section.background}`}}>
// //           <button 
// //             className="toc-link accordion-header" 
// //             onClick={() => toggleSection(section.id)}
// //           >
// //             {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
// //             <span className="section-title">{section.title}</span>
// //             <ChevronDown 
// //               className={`accordion-arrow ${expandedSection === section.id ? 'expanded' : ''}`}
// //               size={20}
// //             />
// //           </button>
// //           {expandedSection === section.id && (
// //             <div className="subsections-list">
// //               {section.subsections.map((subsection) => (
// //                 <a
// //                   key={subsection.id}
// //                   href={`#${subsection.id}`}
// //                   onClick={(e) => handleLinkClick(e, subsection.id)}
// //                   className="subsection-link"
// //                 >
// //                   {subsection.title}
// //                 </a>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       );
// //     }

// //     return (
// //       <div key={section.id} className="toc-item" style={{backgroundColor: `${section.background}`}}>
// //         <a
// //           href={`#${section.id}`}
// //           onClick={(e) => handleLinkClick(e, section.id)}
// //           className="toc-link"
// //         >
// //           {section.icon && <span className="toc-icon">{renderIcon(section.icon)}</span>}
// //           {section.title}
// //         </a>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
// //       <h2 className="toc-title">{title}</h2>
// //       {sections.length > 0 && (
// //         <div className="toc-grid">
// //           {sections.map(renderSection)}
// //         </div>
// //       )}
// //       <style jsx global>{`
// //         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

// //         .toc-container {
// //           width: 90%;
// //           max-width: 1200px;
// //           margin: 1px auto;
// //           padding: 20px;
// //           background-color: #f8f9fa;
// //           border: 1px solid #e9ecef;
// //           border-radius: 8px;
// //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// //           font-family: 'Roboto', sans-serif;
// //         }

// //         .toc-title {
// //           text-align: center;
// //           margin-bottom: 20px;
// //           font-size: 28px;
// //           color: #343a40;
// //           font-family: 'Poppins', sans-serif;
// //           font-weight: 600;
// //         }

// //         .toc-grid {
// //           display: flex;
// //           flex-wrap: wrap;
// //           justify-content: flex-start;
// //           gap: 12px;
// //         }

// //         .toc-item {
// //           flex: 0 0 calc(30% - 12px);
// //           min-width: 160px;
// //           background-color: #ffffff;
// //           border: 1px solid #dee2e6;
// //           border-radius: 6px;
// //           padding: 15px;
// //           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
// //           transition: all 0.2s ease;
// //           min-height: 60px;
// //           height: fit-content;
// //         }

// //         .toc-link {
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           text-align: left;
// //           text-decoration: none;
// //           color: #007bff;
// //           font-weight: 500;
// //           font-size: 16px;
// //           line-height: 1.4;
// //           width: 100%;
// //         }

// //         .section-title {
// //           flex: 1;
// //           margin: 0 10px;
// //         }

// //         .toc-icon {
// //           margin-right: 8px;
// //           display: flex;
// //           align-items: center;
// //           flex-shrink: 0;
// //         }

// //         .accordion-header {
// //           width: 100%;
// //           border: none;
// //           background: none;
// //           cursor: pointer;
// //           padding: 0;
// //           display: flex;
// //           align-items: center;
// //         }

// //         .accordion-arrow {
// //           color: #6c757d;
// //           transition: transform 0.2s ease;
// //         }

// //         .accordion-arrow.expanded {
// //           transform: rotate(180deg);
// //         }

// //         .subsections-list {
// //           margin-top: 12px;
// //           padding-top: 12px;
// //           border-top: 1px solid #dee2e6;
// //           display: flex;
// //           flex-direction: column;
// //           gap: 8px;
// //         }

// //         .subsection-link {
// //           color: #6c757d;
// //           text-decoration: none;
// //           font-size: 14px;
// //           padding: 4px 8px;
// //           border-radius: 4px;
// //           transition: all 0.2s;
// //           margin-left: 24px;
// //         }

// //         .subsection-link:hover {
// //           background-color: #f8f9fa;
// //           color: #007bff;
// //         }

// //         .toc-link:hover {
// //           color: #0056b3;
// //         }

// //         .toc-item:hover {
// //           transform: translateY(-2px);
// //           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
// //         }

// //         .sticky {
// //           position: fixed;
// //           top: 20px;
// //           left: 0;
// //           width: 170px;
// //           height: calc(100vh - 40px);
// //           overflow-y: auto;
// //           z-index: 1000;
// //           padding-top: 70px;
// //           scrollbar-width: none;
// //           -ms-overflow-style: none;
// //         }

// //         .sticky::-webkit-scrollbar {
// //           display: none;
// //         }

// //         .sticky .toc-grid {
// //           flex-direction: column;
// //         }

// //         .sticky .toc-item {
// //           width: calc(100% - 20px);
// //           margin-right: 20px;
// //         }

// //         @media (max-width: 768px) {
// //           .toc-container {
// //             width: 95%;
// //           }

// //           .toc-item {
// //             flex: 0 0 calc(45% - 12px);
// //           }

// //           .sticky {
// //             width: 170px;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default SectionTableOfContents;
// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { ChevronDown } from 'lucide-react';

// const SectionTableOfContents = ({ sections = [], title = '' }) => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const boxRef = useRef(null);
//   const stickyThreshold = useRef(0);

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

//   const handleLinkClick = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = isSticky ? 30 : 400;
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
//               size={20}
//             />
//           </button>
//           {expandedSection === section.id && (
//             <div className="subsections-list">
//               {section.subsections.map((subsection) => (
//                 <a
//                   key={subsection.id}
//                   href={`#${subsection.id}`}
//                   onClick={(e) => handleLinkClick(e, subsection.id)}
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

//   return (
//     <div ref={boxRef} className={`toc-container ${isSticky ? 'sticky' : ''}`}>
//       <h2 className="toc-title">{title}</h2>
//       {sections.length > 0 && (
//         <div className="toc-grid">
//           {sections.map(renderSection)}
//         </div>
//       )}
//       <style jsx global>{`
//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Roboto:wght@400;500&display=swap');

//         .toc-container {
//           width: 90%;
//           max-width: 1200px;
//           margin: 1px auto;
//           padding: 20px;
//           background-color: #f8f9fa;
//           border: 1px solid #e9ecef;
//           border-radius: 8px;
//           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//           font-family: 'Roboto', sans-serif;
//         }

//         .toc-title {
//           text-align: center;
//           margin-bottom: 20px;
//           font-size: 28px;
//           color: #343a40;
//           font-family: 'Poppins', sans-serif;
//           font-weight: 600;
//         }

//         .toc-grid {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 12px;
//         }

//         .toc-item {
//           flex: 0 0 calc(30% - 12px);
//           min-width: 160px;
//           background-color: #ffffff;
//           border: 1px solid #dee2e6;
//           border-radius: 6px;
//           padding: 10px;
//           box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//           transition: all 0.2s ease;
//           min-height: 45px;
//           height: fit-content;
//         }

//         .toc-link {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           text-align: left;
//           text-decoration: none;
//           color: #007bff;
//           font-weight: 500;
//           font-size: 16px;
//           line-height: 1.4;
//           width: 100%;
//         }

//         .section-title {
//           flex: 1;
//           margin: 0 10px;
//         }

//         .toc-icon {
//           margin-right: 8px;
//           display: flex;
//           align-items: center;
//           flex-shrink: 0;
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
//           color: #6c757d;
//           transition: transform 0.2s ease;
//         }

//         .accordion-arrow.expanded {
//           transform: rotate(180deg);
//         }

//         .subsections-list {
//           margin-top: 12px;
//           padding-top: 12px;
//           border-top: 1px solid #dee2e6;
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .subsection-link {
//           color: #6c757d;
//           text-decoration: none;
//           font-size: 14px;
//           padding: 4px 8px;
//           border-radius: 4px;
//           transition: all 0.2s;
//           margin-left: 24px;
//         }

//         .subsection-link:hover {
//           background-color: #f8f9fa;
//           color: #007bff;
//         }

//         .toc-link:hover {
//           color: #0056b3;
//         }

//         .toc-item:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 4px 6px rgba(0,0,0,0.1);
//         }

//         .sticky {
//           position: fixed;
//           top: 20px;
//           left: 0;
//           width: 170px;
//           height: calc(100vh - 40px);
//           overflow-y: auto;
//           z-index: 1000;
//           padding-top: 70px;
//           scrollbar-width: none;
//           -ms-overflow-style: none;
//         }

//         .sticky::-webkit-scrollbar {
//           display: none;
//         }

//         .sticky .toc-grid {
//           flex-direction: column;
//         }

//         .sticky .toc-item {
//           width: calc(100% - 20px);
//           margin-right: 20px;
//         }

//         @media (max-width: 768px) {
//           .toc-container {
//             width: 95%;
//           }

//           .toc-item {
//             flex: 0 0 calc(45% - 12px);
//           }

//           .sticky {
//             width: 170px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SectionTableOfContents;
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
      `}</style>
    </div>
  );
};

export default SectionTableOfContents;