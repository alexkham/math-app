// // // // // // // // // // import React from 'react';
// // // // // // // // // // import styles from './GeneralAccordionComponent.module.css';
// // // // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // // // // // // import Link from 'next/link';

// // // // // // // // // // function GeneralAccordion({ data, link, width = '100%', idPrefix = '' }) {
// // // // // // // // // //   const toggleSection = (sectionId) => {
// // // // // // // // // //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// // // // // // // // // //     sections.forEach(section => {
// // // // // // // // // //       if (section.id === sectionId) {
// // // // // // // // // //         section.classList.toggle(styles.open);
// // // // // // // // // //         if (section.classList.contains(styles.open)) {
// // // // // // // // // //           setTimeout(() => {
// // // // // // // // // //             const yOffset = -30;
// // // // // // // // // //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // // // // // // //             window.scrollTo({top: y, behavior: 'smooth'});
// // // // // // // // // //           }, 400);
// // // // // // // // // //         }
// // // // // // // // // //       } else {
// // // // // // // // // //         section.classList.remove(styles.open);
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //   };

// // // // // // // // // //   const preventClose = (event) => {
// // // // // // // // // //     event.stopPropagation();
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={styles.accordion} style={{ width }}>
// // // // // // // // // //       {data.map((item, index) => (
// // // // // // // // // //         <div
// // // // // // // // // //           key={index}
// // // // // // // // // //           id={`${idPrefix}section${index}`}
// // // // // // // // // //           className={styles.accordion__section}
// // // // // // // // // //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // // // // // // // // //         >
// // // // // // // // // //           <div className={styles.accordion__label}>
// // // // // // // // // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // // // // // // // //             <span className={styles.chevron}></span>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className={styles.accordion__content} onClick={preventClose}>
// // // // // // // // // //             <div className={styles.content}>
// // // // // // // // // //               {item.content}
// // // // // // // // // //             </div>
// // // // // // // // // //             {item.related_items && item.related_items.length > 0 && (
// // // // // // // // // //               <div className={styles.related_items}>
// // // // // // // // // //                 <h4>Related Items:</h4>
// // // // // // // // // //                 <ul>
// // // // // // // // // //                   {item.related_items.map((relatedItem, itemIndex) => (
// // // // // // // // // //                     <li key={itemIndex}>
// // // // // // // // // //                       {link ? (
// // // // // // // // // //                         <Link href={`${link}/${encodeURIComponent(relatedItem.name)}`}>
// // // // // // // // // //                           {relatedItem.name}
// // // // // // // // // //                         </Link>
// // // // // // // // // //                       ) : (
// // // // // // // // // //                         <span>{relatedItem.name}</span>
// // // // // // // // // //                       )}
// // // // // // // // // //                       <span className={styles.tooltip}>{relatedItem.description}</span>
// // // // // // // // // //                     </li>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </ul>
// // // // // // // // // //               </div>
// // // // // // // // // //             )}
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       ))}
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default GeneralAccordion;
// // // // // // // // // import React, { useEffect } from 'react';
// // // // // // // // // import styles from './GeneralAccordionComponent.module.css';
// // // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // // // // // import Link from 'next/link';

// // // // // // // // // function GeneralAccordion({ data, link, width = '100%', idPrefix = '' }) {
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const hash = window.location.hash;
// // // // // // // // //     if (hash) {
// // // // // // // // //       const id = hash.replace('#', '');
// // // // // // // // //       setTimeout(() => {
// // // // // // // // //         const element = document.getElementById(id);
// // // // // // // // //         if (element) {
// // // // // // // // //           element.classList.add(styles.open);
// // // // // // // // //           element.scrollIntoView({ behavior: 'smooth', block: 'start' });
// // // // // // // // //           window.scrollBy(0, -30); // Scroll up by 30px
// // // // // // // // //         }
// // // // // // // // //       }, 0);
// // // // // // // // //     }
// // // // // // // // //   }, []);

// // // // // // // // //   const toggleSection = (sectionId) => {
// // // // // // // // //     const section = document.getElementById(sectionId);
// // // // // // // // //     if (section) {
// // // // // // // // //       section.classList.toggle(styles.open);
// // // // // // // // //       if (section.classList.contains(styles.open)) {
// // // // // // // // //         setTimeout(() => {
// // // // // // // // //           const yOffset = -30;
// // // // // // // // //           const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // // // // // //           window.scrollTo({top: y, behavior: 'smooth'});
// // // // // // // // //         }, 100);
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const preventClose = (event) => {
// // // // // // // // //     event.stopPropagation();
// // // // // // // // //   };

// // // // // // // // //   const renderContent = (content) => {
// // // // // // // // //     if (typeof content === 'string') {
// // // // // // // // //       return <p>{content}</p>;
// // // // // // // // //     } else if (Array.isArray(content)) {
// // // // // // // // //       return content.map((item, index) => <p key={index}>{item}</p>);
// // // // // // // // //     } else if (typeof content === 'object') {
// // // // // // // // //       return Object.entries(content).map(([key, value]) => (
// // // // // // // // //         <div key={key}>
// // // // // // // // //           <strong>{capitalizeWords(key)}:</strong> {value}
// // // // // // // // //         </div>
// // // // // // // // //       ));
// // // // // // // // //     }
// // // // // // // // //     return null;
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.accordion} style={{ width }}>
// // // // // // // // //       {data.map((item, index) => (
// // // // // // // // //         <div
// // // // // // // // //           key={index}
// // // // // // // // //           id={`${idPrefix}section${index}`}
// // // // // // // // //           className={styles.accordion__section}
// // // // // // // // //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // // // // // // // //         >
// // // // // // // // //           <div className={styles.accordion__label}>
// // // // // // // // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // // // // // // //             <span className={styles.chevron}></span>
// // // // // // // // //           </div>
// // // // // // // // //           <div className={styles.accordion__content} onClick={preventClose}>
// // // // // // // // //             <div className={styles.content}>
// // // // // // // // //               {renderContent(item.content)}
// // // // // // // // //             </div>
// // // // // // // // //             {item.related_items && item.related_items.length > 0 && (
// // // // // // // // //               <div className={styles.related_items}>
// // // // // // // // //                 <h4>Related Items:</h4>
// // // // // // // // //                 <ul>
// // // // // // // // //                   {item.related_items.map((relatedItem, itemIndex) => (
// // // // // // // // //                     <li key={itemIndex}>
// // // // // // // // //                       {link ? (
// // // // // // // // //                         <Link href={`${link}/${encodeURIComponent(relatedItem.name)}`}>
// // // // // // // // //                           {relatedItem.name}
// // // // // // // // //                         </Link>
// // // // // // // // //                       ) : (
// // // // // // // // //                         <span>{relatedItem.name}</span>
// // // // // // // // //                       )}
// // // // // // // // //                       <span className={styles.tooltip}>{relatedItem.description}</span>
// // // // // // // // //                     </li>
// // // // // // // // //                   ))}
// // // // // // // // //                 </ul>
// // // // // // // // //               </div>
// // // // // // // // //             )}
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       ))}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // export default GeneralAccordion;
// // // // // // // // import React, { useState, useRef } from 'react';
// // // // // // // // import styles from './GeneralAccordion.module.css';
// // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // // // // import Link from 'next/link';

// // // // // // // // function GeneralAccordion({ data, link, width = '100%', idPrefix = '' }) {
// // // // // // // //   const [openSection, setOpenSection] = useState(null);
// // // // // // // //   const accordionRef = useRef(null);

// // // // // // // //   const toggleSection = (sectionId) => {
// // // // // // // //     setOpenSection(openSection === sectionId ? null : sectionId);
    
// // // // // // // //     // Scroll behavior
// // // // // // // //     if (openSection !== sectionId) {
// // // // // // // //       setTimeout(() => {
// // // // // // // //         const section = document.getElementById(sectionId);
// // // // // // // //         if (section) {
// // // // // // // //           const yOffset = -30;
// // // // // // // //           const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // // // // //           window.scrollTo({ top: y, behavior: 'smooth' });
// // // // // // // //         }
// // // // // // // //       }, 100); // Short delay to allow for DOM update
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const preventClose = (event) => {
// // // // // // // //     event.stopPropagation();
// // // // // // // //   };

// // // // // // // //   const renderContent = (content) => {
// // // // // // // //     if (typeof content === 'string') {
// // // // // // // //       return <p>{content}</p>;
// // // // // // // //     } else if (Array.isArray(content)) {
// // // // // // // //       return content.map((item, index) => <p key={index}>{item}</p>);
// // // // // // // //     } else if (typeof content === 'object') {
// // // // // // // //       return Object.entries(content).map(([key, value]) => (
// // // // // // // //         <div key={key}>
// // // // // // // //           <strong>{capitalizeWords(key)}:</strong> {value}
// // // // // // // //         </div>
// // // // // // // //       ));
// // // // // // // //     }
// // // // // // // //     return null;
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div className={styles.accordion} style={{ width }} ref={accordionRef}>
// // // // // // // //       {data.map((item, index) => {
// // // // // // // //         const sectionId = `${idPrefix}section${index}`;
// // // // // // // //         return (
// // // // // // // //           <div
// // // // // // // //             key={index}
// // // // // // // //             id={sectionId}
// // // // // // // //             className={`${styles.accordion__section} ${openSection === sectionId ? styles.open : ''}`}
// // // // // // // //             onClick={() => toggleSection(sectionId)}
// // // // // // // //           >
// // // // // // // //             <div className={styles.accordion__label}>
// // // // // // // //               {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // // // // // //               <span className={styles.chevron}></span>
// // // // // // // //             </div>
// // // // // // // //             <div className={styles.accordion__content} onClick={preventClose}>
// // // // // // // //               <div className={styles.content}>
// // // // // // // //                 {renderContent(item.content)}
// // // // // // // //               </div>
// // // // // // // //               {item.related_items && item.related_items.length > 0 && (
// // // // // // // //                 <div className={styles.related_items}>
// // // // // // // //                   <h4>Related Items:</h4>
// // // // // // // //                   <ul>
// // // // // // // //                     {item.related_items.map((relatedItem, itemIndex) => (
// // // // // // // //                       <li key={itemIndex}>
// // // // // // // //                         {link ? (
// // // // // // // //                           <Link href={`${link}/${encodeURIComponent(relatedItem.name)}`}>
// // // // // // // //                             {relatedItem.name}
// // // // // // // //                           </Link>
// // // // // // // //                         ) : (
// // // // // // // //                           <span>{relatedItem.name}</span>
// // // // // // // //                         )}
// // // // // // // //                         <span className={styles.tooltip}>{relatedItem.description}</span>
// // // // // // // //                       </li>
// // // // // // // //                     ))}
// // // // // // // //                   </ul>
// // // // // // // //                 </div>
// // // // // // // //               )}
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         );
// // // // // // // //       })}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default GeneralAccordion;
// // // // // // // import React from 'react';
// // // // // // // import styles from './GeneralAccordion.module.css';
// // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // // // import Link from 'next/link';

// // // // // // // function GeneralAccordion({ data, link, width = '1000px', idPrefix = '' }) {
// // // // // // //   const toggleSection = (sectionId) => {
// // // // // // //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// // // // // // //     sections.forEach(section => {
// // // // // // //       if (section.id === sectionId) {
// // // // // // //         section.classList.toggle(styles.open);
// // // // // // //         if (section.classList.contains(styles.open)) {
// // // // // // //           setTimeout(() => {
// // // // // // //             const yOffset = -30;
// // // // // // //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // // // //             window.scrollTo({top: y, behavior: 'smooth'});
// // // // // // //           }, 400);
// // // // // // //         }
// // // // // // //       } else {
// // // // // // //         section.classList.remove(styles.open);
// // // // // // //       }
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const preventClose = (event) => {
// // // // // // //     event.stopPropagation();
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className={styles.accordion} style={{ width }}>
// // // // // // //       {data.map((item, index) => (
// // // // // // //         <div
// // // // // // //           key={index}
// // // // // // //           id={`${idPrefix}section${index}`}
// // // // // // //           className={styles.accordion__section}
// // // // // // //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // // // // // //         >
// // // // // // //           <div className={styles.accordion__label}>
// // // // // // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // // // // //             <span className={styles.chevron}></span>
// // // // // // //           </div>
// // // // // // //           <div className={styles.accordion__content} onClick={preventClose}>
// // // // // // //             <div className={styles.content}>
// // // // // // //               {item.content}
// // // // // // //             </div>
// // // // // // //             {item.related_items && item.related_items.length > 0 && (
// // // // // // //               <div className={styles.related_items}>
// // // // // // //                 <h4>Related Items:</h4>
// // // // // // //                 <ul>
// // // // // // //                   {item.related_items.map((relatedItem, itemIndex) => (
// // // // // // //                     <li key={itemIndex}>
// // // // // // //                       {link ? (
// // // // // // //                         <Link href={`${link}/${encodeURIComponent(relatedItem.name)}`}>
// // // // // // //                           {relatedItem.name}
// // // // // // //                         </Link>
// // // // // // //                       ) : (
// // // // // // //                         <span>{relatedItem.name}</span>
// // // // // // //                       )}
// // // // // // //                       <span className={styles.tooltip}>{relatedItem.description}</span>
// // // // // // //                     </li>
// // // // // // //                   ))}
// // // // // // //                 </ul>
// // // // // // //               </div>
// // // // // // //             )}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default GeneralAccordion;
// // // // // // import React from 'react';
// // // // // // import styles from './GeneralAccordion.module.css';
// // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // // import Link from 'next/link';

// // // // // // function GeneralAccordion({ data, link, width = '1000px', idPrefix = '' }) {
// // // // // //   const toggleSection = (sectionId) => {
// // // // // //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// // // // // //     sections.forEach(section => {
// // // // // //       if (section.id === sectionId) {
// // // // // //         section.classList.toggle(styles.open);
// // // // // //         if (section.classList.contains(styles.open)) {
// // // // // //           setTimeout(() => {
// // // // // //             const yOffset = -30;
// // // // // //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // // //             window.scrollTo({top: y, behavior: 'smooth'});
// // // // // //           }, 400);
// // // // // //         }
// // // // // //       } else {
// // // // // //         section.classList.remove(styles.open);
// // // // // //       }
// // // // // //     });
// // // // // //   };

// // // // // //   const preventClose = (event) => {
// // // // // //     event.stopPropagation();
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.accordion} style={{ width }}>
// // // // // //       {data.map((item, index) => (
// // // // // //         <div
// // // // // //            key={index}
// // // // // //            id={`${idPrefix}section${index}`}
// // // // // //            className={styles.accordion__section}
// // // // // //            onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // // // // //         >
// // // // // //           <div className={styles.accordion__label}>
// // // // // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // // // //             <span className={styles.chevron}></span>
// // // // // //           </div>
// // // // // //           <div className={styles.accordion__content} onClick={preventClose}>
// // // // // //             {/* {item.content} */}
// // // // // //                  {<div dangerouslySetInnerHTML={{ __html: item.content }} /> }          
// // // // // //             {item.related_items && item.related_items.length > 0 && (
// // // // // //               <div className={styles.related_items}>
// // // // // //                 <h4>Related Items:</h4>
// // // // // //                 <ul>
// // // // // //                   {item.related_items.map((relatedItem, itemIndex) => (
// // // // // //                     <li key={itemIndex}>
// // // // // //                       {link ? (
// // // // // //                         <Link href={`${link}/${encodeURIComponent(relatedItem.name)}`}>
// // // // // //                           {relatedItem.name}
// // // // // //                         </Link>
// // // // // //                       ) : (
// // // // // //                         <span>{relatedItem.name}</span>
// // // // // //                       )}
// // // // // //                       <span className={styles.tooltip}>{relatedItem.description}</span>
// // // // // //                     </li>
// // // // // //                   ))}
// // // // // //                 </ul>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default GeneralAccordion;
// // // // // import React from 'react';
// // // // // import styles from './GeneralAccordion.module.css';
// // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // import Link from 'next/link';

// // // // // function GeneralAccordion({ data, link, width = '1000px', idPrefix = '' }) {
// // // // //   const toggleSection = (sectionId) => {
// // // // //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// // // // //     sections.forEach(section => {
// // // // //       if (section.id === sectionId) {
// // // // //         section.classList.toggle(styles.open);
// // // // //         if (section.classList.contains(styles.open)) {
// // // // //           setTimeout(() => {
// // // // //             const yOffset = -30;
// // // // //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // //             window.scrollTo({top: y, behavior: 'smooth'});
// // // // //           }, 400);
// // // // //         }
// // // // //       } else {
// // // // //         section.classList.remove(styles.open);
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   const preventClose = (event) => {
// // // // //     event.stopPropagation();
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.accordion} style={{ width }}>
// // // // //       {data.map((item, index) => (
// // // // //         <div
// // // // //           key={index}
// // // // //           id={`${idPrefix}section${index}`}
// // // // //           className={styles.accordion__section}
// // // // //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // // // //         >
// // // // //           <h1 className={styles.accordion__label}>
// // // // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // // //             <span className={styles.chevron}></span>
// // // // //           </h1>
// // // // //           <div className={styles.accordion__content} onClick={preventClose}>
// // // // //             {Array.isArray(item.content) 
// // // // //               ? item.content.map((field, fieldIndex) => (
// // // // //                   <div key={fieldIndex} dangerouslySetInnerHTML={{ __html: field }} />
// // // // //                 ))
// // // // //               : <div dangerouslySetInnerHTML={{ __html: item.content }} />
// // // // //             }
// // // // //             {item.related_items && item.related_items.length > 0 && (
// // // // //               <div className={styles.related_items}>
// // // // //                 <h4>Related Items:</h4>
// // // // //                 <ul>
// // // // //                   {item.related_items.map((relatedItem, itemIndex) => (
// // // // //                     <li key={itemIndex}>
// // // // //                       {link ? (
// // // // //                         <Link href={`${link}/${encodeURIComponent(relatedItem.name)}`}>
// // // // //                           {relatedItem.name}
// // // // //                         </Link>
// // // // //                       ) : (
// // // // //                         <span>{relatedItem.name}</span>
// // // // //                       )}
// // // // //                       <span className={styles.tooltip}>{relatedItem.description}</span>
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default GeneralAccordion;
// // // // // import React from 'react';
// // // // // import styles from './GeneralAccordion.module.css';
// // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // import Link from 'next/link';

// // // // // function GeneralAccordion({ data, link, width = '1000px', idPrefix = '', contentFields = [] }) {
// // // // //   const toggleSection = (sectionId) => {
// // // // //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// // // // //     sections.forEach(section => {
// // // // //       if (section.id === sectionId) {
// // // // //         section.classList.toggle(styles.open);
// // // // //         if (section.classList.contains(styles.open)) {
// // // // //           setTimeout(() => {
// // // // //             const yOffset = -30;
// // // // //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // // //             window.scrollTo({top: y, behavior: 'smooth'});
// // // // //           }, 400);
// // // // //         }
// // // // //       } else {
// // // // //         section.classList.remove(styles.open);
// // // // //       }
// // // // //     });
// // // // //   };

// // // // //   const preventClose = (event) => {
// // // // //     event.stopPropagation();
// // // // //   };

// // // // //   const renderContent = (item) => {
// // // // //     if (contentFields.length > 0) {
// // // // //       return contentFields.map((field, index) => (
// // // // //         item[field] ? <div key={index} dangerouslySetInnerHTML={{ __html: item[field] }} /> : null
// // // // //       ));
// // // // //     } else if (item.content) {
// // // // //       return <div dangerouslySetInnerHTML={{ __html: item.content }} />;
// // // // //     }
// // // // //     return null;
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.accordion} style={{ width }}>
// // // // //       {data.map((item, index) => (
// // // // //         <div
// // // // //           key={index}
// // // // //           id={`${idPrefix}section${index}`}
// // // // //           className={styles.accordion__section}
// // // // //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // // // //         >
// // // // //           <h1 className={styles.accordion__label}>
// // // // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // // //             <span className={styles.chevron}></span>
// // // // //           </h1>
// // // // //           <div className={styles.accordion__content} onClick={preventClose}>
// // // // //             {renderContent(item)}
// // // // //             {item.related_items && item.related_items.length > 0 && (
// // // // //               <div className={styles.related_items}>
// // // // //                 <h4>Related Items:</h4>
// // // // //                 <ul>
// // // // //                   {item.related_items.map((relatedItem, itemIndex) => (
// // // // //                     <li key={itemIndex}>
// // // // //                       {link ? (
// // // // //                         <Link href={`${link}/${encodeURIComponent(relatedItem.name)}`}>
// // // // //                           {relatedItem.name}
// // // // //                         </Link>
// // // // //                       ) : (
// // // // //                         <span>{relatedItem.name}</span>
// // // // //                       )}
// // // // //                       <span className={styles.tooltip}>{relatedItem.description}</span>
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default GeneralAccordion;
// // // // import React from 'react';
// // // // import styles from './GeneralAccordion.module.css';
// // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // import Link from 'next/link';

// // // // function GeneralAccordion({ data, linkField, width = '1000px', idPrefix = '', contentFields = [] }) {
// // // //   const toggleSection = (sectionId) => {
// // // //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// // // //     sections.forEach(section => {
// // // //       if (section.id === sectionId) {
// // // //         section.classList.toggle(styles.open);
// // // //         if (section.classList.contains(styles.open)) {
// // // //           setTimeout(() => {
// // // //             const yOffset = -30;
// // // //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // // //             window.scrollTo({top: y, behavior: 'smooth'});
// // // //           }, 400);
// // // //         }
// // // //       } else {
// // // //         section.classList.remove(styles.open);
// // // //       }
// // // //     });
// // // //   };

// // // //   const preventClose = (event) => {
// // // //     event.stopPropagation();
// // // //   };

// // // //   const renderContent = (item) => {
// // // //     if (contentFields.length > 0) {
// // // //       return contentFields.map((field, index) => (
// // // //         item[field] ? <div key={index} dangerouslySetInnerHTML={{ __html: item[field] }} /> : null
// // // //       ));
// // // //     } else if (item.content) {
// // // //       return <div dangerouslySetInnerHTML={{ __html: item.content }} />;
// // // //     }
// // // //     return null;
// // // //   };

// // // //   return (
// // // //     <div className={styles.accordion} style={{ width }}>
// // // //       {data.map((item, index) => (
// // // //         <div
// // // //           key={index}
// // // //           id={`${idPrefix}section${index}`}
// // // //           className={styles.accordion__section}
// // // //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // // //         >
// // // //           <h1 className={styles.accordion__label}>
// // // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // // //             <span className={styles.chevron}></span>
// // // //           </h1>
// // // //           <div className={styles.accordion__content} onClick={preventClose}>
// // // //             {renderContent(item)}
// // // //             {item.related_items && item.related_items.length > 0 && (
// // // //               <div className={styles.related_items}>
// // // //                 <h4>Related Items:</h4>
// // // //                 <ul>
// // // //                   {item.related_items.map((relatedItem, itemIndex) => (
// // // //                     <li key={itemIndex}>
// // // //                       {linkField ? (
// // // //                         <Link href={`${item[linkField]}/${encodeURIComponent(relatedItem.name)}`}>
// // // //                           {relatedItem.name}
// // // //                         </Link>
// // // //                       ) : (
// // // //                         <span>{relatedItem.name}</span>
// // // //                       )}
// // // //                       <span className={styles.tooltip}>{relatedItem.description}</span>
// // // //                     </li>
// // // //                   ))}
// // // //                 </ul>
// // // //               </div>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // }

// // // // export default GeneralAccordion;
// // // import React from 'react';
// // // import styles from './GeneralAccordion.module.css';
// // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // import Link from 'next/link';

// // // function GeneralAccordion({ data, linkField,linkTitle, width = '1000px', idPrefix = '', contentFields = [] }) {
// // //   const toggleSection = (sectionId) => {
// // //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// // //     sections.forEach(section => {
// // //       if (section.id === sectionId) {
// // //         section.classList.toggle(styles.open);
// // //         if (section.classList.contains(styles.open)) {
// // //           setTimeout(() => {
// // //             const yOffset = -30;
// // //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// // //             window.scrollTo({top: y, behavior: 'smooth'});
// // //           }, 400);
// // //         }
// // //       } else {
// // //         section.classList.remove(styles.open);
// // //       }
// // //     });
// // //   };

// // //   const preventClose = (event) => {
// // //     event.stopPropagation();
// // //   };

// // //   const renderContent = (item) => {
// // //     if (contentFields.length > 0) {
// // //       return contentFields.map((field, index) => (
// // //         item[field] ? <div key={index} dangerouslySetInnerHTML={{ __html: item[field] }} /> : null
// // //       ));
// // //     } else if (item.content) {
// // //       return <div dangerouslySetInnerHTML={{ __html: item.content }} />;
// // //     }
// // //     return null;
// // //   };

// // //   return (
// // //     <div className={styles.accordion} style={{ width }}>
// // //       {data.map((item, index) => (
// // //         <div
// // //           key={index}
// // //           id={`${idPrefix}section${index}`}
// // //           className={styles.accordion__section}
// // //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// // //         >
// // //           <h1 className={styles.accordion__label}>
// // //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// // //             <span className={styles.chevron}></span>
// // //           </h1>
// // //           <div className={styles.accordion__content} onClick={preventClose}>
// // //             {renderContent(item)}
// // //             {linkField && item[linkField] && (
// // //               <div className={styles.related_items}>
// // //                 <h4>Related Items:</h4>
// // //                 <ul>
// // //                   <li>
// // //                     <Link href={item[linkField]}>
// // //                       {linkTitle || 'Related Link'}
// // //                     </Link>
// // //                   </li>
// // //                 </ul>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // }

// // // export default GeneralAccordion;
// // import React from 'react';
// // import styles from './GeneralAccordion.module.css';
// // import { capitalizeWords } from '@/app/utils/utils-functions';
// // import Link from 'next/link';

// // function GeneralAccordion({ data, linkField, linkTitle, width = '1000px', idPrefix = '', contentFields = [] }) {
// //   const toggleSection = (sectionId) => {
// //     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
// //     sections.forEach(section => {
// //       if (section.id === sectionId) {
// //         section.classList.toggle(styles.open);
// //         if (section.classList.contains(styles.open)) {
// //           setTimeout(() => {
// //             const yOffset = -30;
// //             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// //             window.scrollTo({top: y, behavior: 'smooth'});
// //           }, 400);
// //         }
// //       } else {
// //         section.classList.remove(styles.open);
// //       }
// //     });
// //   };

// //   const preventClose = (event) => {
// //     event.stopPropagation();
// //   };

// //   const renderContent = (item) => {
// //     if (contentFields.length > 0) {
// //       return contentFields.map((field, index) => (
// //         item[field] ? <div key={index} dangerouslySetInnerHTML={{ __html: item[field] }} /> : null
// //       ));
// //     } else if (item.content) {
// //       return <div dangerouslySetInnerHTML={{ __html: item.content }} />;
// //     }
// //     return null;
// //   };

// //   return (
// //     <div className={styles.accordion} style={{ width }}>
// //       {data.map((item, index) => (
// //         <div
// //           key={index}
// //           id={`${idPrefix}section${index}`}
// //           className={styles.accordion__section}
// //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
// //         >
// //           {item.before && (
// //             <div className={styles.accordion__before} onClick={preventClose}>
// //               <div dangerouslySetInnerHTML={{ __html: item.before }} />
// //             </div>
// //           )}
// //           <h1 className={styles.accordion__label}>
// //             {capitalizeWords(item.title.replaceAll('_', ' '))}
// //             <span className={styles.chevron}></span>
// //           </h1>
// //           <div className={styles.accordion__content} onClick={preventClose}>
// //             {renderContent(item)}
// //             {linkField && item[linkField] && (
// //               <div className={styles.related_items}>
// //                 <h4>Related Items:</h4>
// //                 <ul>
// //                   <li>
// //                     <Link href={item[linkField]}>
// //                       {linkTitle || 'Related Link'}
// //                     </Link>
// //                   </li>
// //                 </ul>
// //               </div>
// //             )}
// //           </div>
// //           {item.after && (
// //             <div className={styles.accordion__after} onClick={preventClose}>
// //               <div dangerouslySetInnerHTML={{ __html: item.after }} />
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default GeneralAccordion;
// 'use client'
// import React from 'react';
// import styles from './GeneralAccordion.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import Link from 'next/link';

// function GeneralAccordion({ data, linkField, linkTitle, width = '1000px', idPrefix = '', contentFields = [] }) {
//   const toggleSection = (sectionId) => {
//     const sections = document.querySelectorAll(`.${styles.accordion__section}`);
//     sections.forEach(section => {
//       if (section.id === sectionId) {
//         section.classList.toggle(styles.open);
//         if (section.classList.contains(styles.open)) {
//           setTimeout(() => {
//             const yOffset = -30;
//             const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//             window.scrollTo({top: y, behavior: 'smooth'});
//           }, 400);
//         }
//       } else {
//         section.classList.remove(styles.open);
//       }
//     });
//   };

//   const preventClose = (event) => {
//     event.stopPropagation();
//   };

//   const renderContent = (item) => {
//     if (contentFields.length > 0) {
//       return contentFields.map((field, index) => (
//         item[field] ? <div key={index} dangerouslySetInnerHTML={{ __html: item[field] }} /> : null
//       ));
//     } else if (item.content) {
//       return <div dangerouslySetInnerHTML={{ __html: item.content }} />;
//     }
//     return null;
//   };


//   return (
//     <div className={styles.accordion} style={{ width }}>
//       {data.map((item, index) => (
//         <React.Fragment key={index}>
//           {item.before && (
//             <div className={styles.accordion__before} onClick={preventClose}>
//               <div dangerouslySetInnerHTML={{ __html: item.before }} />
//             </div>
//           )}
//           <div
//             id={`${idPrefix}section${index}`}
//             className={styles.accordion__section}
//           >
//             <h1 className={styles.accordion__label} onClick={() => toggleSection(`${idPrefix}section${index}`)}>
//               {capitalizeWords(item.title.replaceAll('_', ' '))}
//               <span className={styles.chevron}></span>
//             </h1>
//             <div className={styles.accordion__content} onClick={preventClose}>
//               {renderContent(item)}
//               {linkField && item[linkField] && (
//                 <div className={styles.related_items}>
//                   <h4>Related Items:</h4>
//                   <ul>
//                     <li>
//                       <Link href={item[linkField]}>
//                         {linkTitle || 'Related Link'}
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//             {item.after && (
//               <div className={styles.accordion__after} onClick={preventClose}>
//                 <div dangerouslySetInnerHTML={{ __html: item.after }} />
//               </div>
//             )}
//             <span 
//               className={styles.chevronBottom}
//               onClick={() => toggleSection(`${idPrefix}section${index}`)}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="#b3b3b3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//                 <rect width="18" height="18" x="3" y="3" rx="2"/>
//                 <path d="m8 14 4-4 4 4"/>
//               </svg>
//             </span>
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   );

//   // return (
//   //   <div className={styles.accordion} style={{ width }}>
//   //     {data.map((item, index) => (
//   //       <React.Fragment key={index}>
//   //         {item.before && (
//   //           <div className={styles.accordion__before} onClick={preventClose}>
//   //             <div dangerouslySetInnerHTML={{ __html: item.before }} />
//   //           </div>
//   //         )}
//   //         <div
//   //           id={`${idPrefix}section${index}`}
//   //           className={styles.accordion__section}
//   //           onClick={() => toggleSection(`${idPrefix}section${index}`)}
//   //         >
//   //           <h1 className={styles.accordion__label}>
//   //             {capitalizeWords(item.title.replaceAll('_', ' '))}
//   //             <span className={styles.chevron}></span>
//   //           </h1>
//   //           <div className={styles.accordion__content} onClick={preventClose}>
//   //             {renderContent(item)}
//   //             {linkField && item[linkField] && (
//   //               <div className={styles.related_items}>
//   //                 <h4>Related Items:</h4>
//   //                 <ul>
//   //                   <li>
//   //                     <Link href={item[linkField]}>
//   //                       {linkTitle || 'Related Link'}
//   //                     </Link>
//   //                   </li>
//   //                 </ul>
//   //               </div>
//   //             )}
//   //              <span onClick={toggleSection} className={styles.chevronContainer}>
//   //                 {/* <svg xmlns="http://www.w3.org/2000/svg" width="44" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-chevron-up"><circle cx="12" cy="12" r="10"/><path d="m8 14 4-4 4 4"/></svg> */}
//   //                 <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="#b3b3b3" stroke="white" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-up"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m8 14 4-4 4 4"/></svg>
//   //                  </span>
//   //           </div>
//   //           {item.after && (
//   //             <div className={styles.accordion__after} onClick={preventClose}>
//   //               <div dangerouslySetInnerHTML={{ __html: item.after }} />
//   //             </div>
//   //           )}
            
//   //         </div>
//   //       </React.Fragment>
//   //     ))}
//   //   </div>
//   // );
// }

// export default GeneralAccordion;
'use client'
import React from 'react';
import styles from './GeneralAccordion.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';
import Link from 'next/link';

function GeneralAccordion({ data, linkField, linkTitle, width = '1000px', idPrefix = '', contentFields = [] }) {
  const toggleSection = (sectionId) => {
    const sections = document.querySelectorAll(`.${styles.accordion__section}`);
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.toggle(styles.open);
        if (section.classList.contains(styles.open)) {
          setTimeout(() => {
            const yOffset = -30;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }, 400);
        }
      } else {
        section.classList.remove(styles.open);
      }
    });
  };

  const toggleBottom = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.remove(styles.open);
      const yOffset = -30;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const preventClose = (event) => {
    event.stopPropagation();
  };

  const renderContent = (item) => {
    if (contentFields.length > 0) {
      return contentFields.map((field, index) => (
        item[field] ? <div key={index} dangerouslySetInnerHTML={{ __html: item[field] }} /> : null
      ));
    } else if (item.content) {
      return <div dangerouslySetInnerHTML={{ __html: item.content }} />;
    }
    return null;
  };

  return (
    <div className={styles.accordion} style={{ width }}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item.before && (
            <div className={styles.accordion__before} onClick={preventClose}>
              <div dangerouslySetInnerHTML={{ __html: item.before }} />
            </div>
          )}
          <div
            id={`${idPrefix}section${index}`}
            className={styles.accordion__section}
          >
            <h1 className={styles.accordion__label} onClick={() => toggleSection(`${idPrefix}section${index}`)}>
              {capitalizeWords(item.title.replaceAll('_', ' '))}
              <span className={styles.chevron}></span>
            </h1>
            <div className={styles.accordion__content} onClick={preventClose}>
              {renderContent(item)}
              {linkField && item[linkField] && (
                <div className={styles.related_items}>
                  <h4>Related Items:</h4>
                  <ul>
                    <li>
                      <Link href={item[linkField]}>
                        {linkTitle || 'Related Link'}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {item.after && (
              <div className={styles.accordion__after} onClick={preventClose}>
                <div dangerouslySetInnerHTML={{ __html: item.after }} />
              </div>
            )}
            <span 
              className={styles.chevronBottom}
              onClick={() => toggleBottom(`${idPrefix}section${index}`)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="#b3b3b3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/>
                <path d="m8 14 4-4 4 4"/>
              </svg>
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default GeneralAccordion;