// // // // // // // // import React from 'react';
// // // // // // // // import styles from './Sections.module.css';

// // // // // // // // const Sections = ({ sections }) => {
// // // // // // // //   return (
// // // // // // // //     <div className={styles.sectionsContainer}>
// // // // // // // //       {sections&&sections.map((section) => (
// // // // // // // //         <section key={section.id} id={section.id} className={styles.section}>
// // // // // // // //             <br/>
// // // // // // // //             <br/>
// // // // // // // //             <br/>
// // // // // // // //           <h2 className={styles.sectionTitle}>{section.title}</h2>
// // // // // // // //           <div className={styles.sectionContent}>
// // // // // // // //             {section.content}
// // // // // // // //           </div>
// // // // // // // //         </section>
// // // // // // // //       ))}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Sections;
// // // // // // // import React from 'react';
// // // // // // // import styles from './Sections.module.css';

// // // // // // // const Sections = ({ sections }) => {
// // // // // // //   return (
// // // // // // //     <div className={styles.sectionsContainer}>
// // // // // // //       {sections && sections.map((section) => (
// // // // // // //         <section key={section.id} id={section.id} className={styles.section}>
// // // // // // //            <br/>
// // // // // // //            <br/>
// // // // // // //           <h2 className={styles.sectionTitle}>{section.title}</h2>
// // // // // // //           <div className={styles.sectionContent}>
// // // // // // //             {section.content}
// // // // // // //           </div>
// // // // // // //         </section>
// // // // // // //       ))}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Sections;
// // // // // // import React from 'react';
// // // // // // import styles from './Sections.module.css';

// // // // // // const Sections = ({ sections }) => {
// // // // // //   return (
// // // // // //     <div className={styles.sectionsContainer}>
// // // // // //       {sections && sections.map((section) => (
// // // // // //         <section key={section.id} id={section.id} className={styles.section}>
// // // // // //           <div className={styles.sectionContent}>
// // // // // //             <br/>
// // // // // //             <br/>
// // // // // //             <h2 className={styles.sectionTitle}>{section.title}</h2>
// // // // // //             <div className={styles.sectionText}>{section.content}</div>
// // // // // //           </div>
// // // // // //           {section.image && (
// // // // // //             <div className={styles.sectionImage}>
// // // // // //               <img src={section.image} alt={section.title} />
// // // // // //             </div>
// // // // // //           )}
// // // // // //           {section.svg && (
// // // // // //             <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
// // // // // //           )}
// // // // // //         </section>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Sections;

// // // // // import React from 'react';
// // // // // import styles from './Sections.module.css';

// // // // // const Sections = ({ sections }) => {
// // // // //   const scrollToTop = () => {
// // // // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // // // //   };

// // // // //   const scrollToSection = (id) => {
// // // // //     const element = document.getElementById(id);
// // // // //     if (element) {
// // // // //       const offset = 300; // Adjust this value based on your layout
// // // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // // //       window.scrollTo({
// // // // //         top: elementPosition - offset,
// // // // //         behavior: 'smooth'
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.sectionsContainer}>
// // // // //       {sections && sections.map((section, index) => (
// // // // //         <section key={section.id} id={section.id} className={styles.section}>
// // // // //             <br/>
// // // // //             <br/>
// // // // //           <div className={styles.sectionContent}>
// // // // //             <h2 className={styles.sectionTitle}>{section.title}</h2>
// // // // //             {section.image && (
// // // // //               <div className={styles.sectionImage}>
// // // // //                 <img src={section.image} alt={section.title} />
// // // // //               </div>
// // // // //             )}
// // // // //             {section.svg && (
// // // // //               <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
// // // // //             )}
// // // // //             <div className={styles.sectionText}>{section.content}</div>
// // // // //             {section.learnMoreLink && (
// // // // //               <a href={section.learnMoreLink} className={styles.learnMoreLink}>Learn More</a>
// // // // //             )}
// // // // //           </div>
// // // // //           <div className={styles.sectionNavigation}>
// // // // //             <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
// // // // //             {index > 0 && (
// // // // //               <button onClick={() => scrollToSection(sections[index - 1].id)} className={styles.navButton}>Previous</button>
// // // // //             )}
// // // // //             {index < sections.length - 1 && (
// // // // //               <button onClick={() => scrollToSection(sections[index + 1].id)} className={styles.navButton}>Next</button>
// // // // //             )}
// // // // //           </div>
// // // // //         </section>
// // // // //       ))}
// // // // //     </div>
// // // // //   );

// // // // // //   return (
// // // // // //     <div className={styles.sectionsContainer}>
// // // // // //       {sections && sections.map((section, index) => (
// // // // // //         <section key={section.id} id={section.id} className={styles.section}>
// // // // // //               <br/>
// // // // // //               <br/>
// // // // // //               <br/>
// // // // // //           <div className={styles.sectionCard}>
// // // // // //             <div className={styles.sectionContent}>
// // // // // //               <h2 className={styles.sectionTitle}>{section.title}</h2>
// // // // // //               <div className={styles.sectionText}>{section.content}</div>
// // // // // //             </div>
// // // // // //             {section.image && (
// // // // // //               <div className={styles.sectionImage}>
// // // // // //                 <img src={section.image} alt={section.title} />
// // // // // //               </div>
// // // // // //             )}
// // // // // //             {section.svg && (
// // // // // //               <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
// // // // // //             )}
// // // // // //             <div className={styles.sectionNavigation}>
// // // // // //               <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
// // // // // //               {index > 0 && (
// // // // // //                 <button onClick={() => scrollToSection(sections[index - 1].id)} className={styles.navButton}>Previous</button>
// // // // // //               )}
// // // // // //               {index < sections.length - 1 && (
// // // // // //                 <button onClick={() => scrollToSection(sections[index + 1].id)} className={styles.navButton}>Next</button>
// // // // // //               )}
// // // // // //               {section.learnMoreLink && (
// // // // // //                 <a href={section.learnMoreLink} className={styles.navButton}>Learn More</a>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </section>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // };

// // // // // export default Sections;
// // // // import React from 'react';
// // // // import styles from './Sections.module.css';

// // // // const Sections = ({ sections }) => {
// // // //   const scrollToTop = () => {
// // // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // // //   };

// // // //   const scrollToSection = (id) => {
// // // //     const element = document.getElementById(id);
// // // //     if (element) {
// // // //       const offset = 100; // Adjust this value based on your layout
// // // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // // //       window.scrollTo({
// // // //         top: elementPosition - offset,
// // // //         behavior: 'smooth'
// // // //       });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className={styles.sectionsContainer}>
// // // //       {sections && sections.map((section, index) => (
// // // //         <section key={section.id} id={section.id} className={styles.section}>
// // // //             <br/>
// // // //             <br/>
// // // //             <br/>
// // // //           <div className={styles.sectionContent}>
// // // //             <h2 className={styles.sectionTitle}>{section.title}</h2>
// // // //             {section.image && (
// // // //               <div className={styles.sectionImage}>
// // // //                 <img src={section.image} alt={section.title} />
// // // //               </div>
// // // //             )}
// // // //             {section.svg && (
// // // //               <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
// // // //             )}
// // // //             <div className={styles.sectionText}>{section.content}</div>
// // // //             <a href={section.pageLink} className={styles.pageLink}>Go to {section.title} Page</a>
// // // //             {section.learnMoreLink && (
// // // //               <a href={section.learnMoreLink} className={styles.learnMoreLink}>Learn More</a>
// // // //             )}
// // // //           </div>
// // // //           <div className={styles.sectionNavigation}>
// // // //             <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
// // // //             {index > 0 && (
// // // //               <button onClick={() => scrollToSection(sections[index - 1].id)} className={styles.navButton}>Previous</button>
// // // //             )}
// // // //             {index < sections.length - 1 && (
// // // //               <button onClick={() => scrollToSection(sections[index + 1].id)} className={styles.navButton}>Next</button>
// // // //             )}
// // // //           </div>
// // // //         </section>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Sections;
// // // import React from 'react';
// // // import styles from './Sections.module.css';

// // // const Sections = ({ sections }) => {
// // //   const scrollToTop = () => {
// // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // //   };

// // //   const scrollToSection = (id) => {
// // //     const element = document.getElementById(id);
// // //     if (element) {
// // //       const offset = 300;
// // //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// // //       window.scrollTo({
// // //         top: elementPosition - offset,
// // //         behavior: 'smooth'
// // //       });
// // //     }
// // //   };

// // //   return (
// // //     <div className={styles.sectionsContainer}>
// // //       {sections && sections.map((section, index) => (
// // //         <section key={section.id} id={section.id} className={styles.section}>
        
          
// // //           <div className={styles.sectionContent}>
// // //             <h2 className={styles.sectionTitle}>{section.title}</h2>
// // //             {section.image && (
// // //               <div className={styles.sectionImage}>
// // //                 <img src={section.image} alt={section.title} />
// // //               </div>
// // //             )}
// // //             {section.svg && (
// // //               <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
// // //             )}
// // //             <div className={styles.sectionText}>{section.content}</div>
// // //             <a href={section.pageLink} className={styles.pageLink}>Go to {section.title} Page</a>
// // //           </div>
// // //           <div className={styles.sectionNavigation}>
// // //             <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
// // //             {index > 0 && (
// // //               <button onClick={() => scrollToSection(sections[index - 1].id)} className={styles.navButton}>Previous</button>
// // //             )}
// // //             {index < sections.length - 1 && (
// // //               <button onClick={() => scrollToSection(sections[index + 1].id)} className={styles.navButton}>Next</button>
// // //             )}
// // //           </div>
// // //         </section>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default Sections;
// // import React from 'react';
// // import styles from './Sections.module.css';

// // const Sections = ({ sections }) => {
// //   // Flatten sections and subsections into a single array
// //   const flattenedSections = sections.reduce((acc, section) => {
// //     if (section.subsections) {
// //       return [...acc, ...section.subsections];
// //     }
// //     return [...acc, section];
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   const scrollToSection = (id) => {
// //     const element = document.getElementById(id);
// //     if (element) {
// //       const offset = 300;
// //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// //       window.scrollTo({
// //         top: elementPosition - offset,
// //         behavior: 'smooth'
// //       });
// //     }
// //   };

// //   return (
// //     <div className={styles.sectionsContainer}>
// //       {flattenedSections.map((section, index) => (
// //         <section key={section.id} id={section.id} className={styles.section}>
// //           <div className={styles.sectionContent}>
// //             <h2 className={styles.sectionTitle}>{section.title}</h2>
// //             {section.image && (
// //               <div className={styles.sectionImage}>
// //                 <img src={section.image} alt={section.title} />
// //               </div>
// //             )}
// //             {section.svg && (
// //               <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
// //             )}
// //             <div className={styles.sectionText}>{section.content}</div>
// //            {section.pageLink&& <a href={section.pageLink} className={styles.pageLink}>Go to {section.title} Page</a>}
// //           </div>
// //           <div className={styles.sectionNavigation}>
// //             <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
// //             {index > 0 && (
// //               <button 
// //                 onClick={() => scrollToSection(flattenedSections[index - 1].id)} 
// //                 className={styles.navButton}
// //               >
// //                 Previous
// //               </button>
// //             )}
// //             {index < flattenedSections.length - 1 && (
// //               <button 
// //                 onClick={() => scrollToSection(flattenedSections[index + 1].id)} 
// //                 className={styles.navButton}
// //               >
// //                 Next
// //               </button>
// //             )}
// //           </div>
// //         </section>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Sections;
// // import React from 'react';
// // import { InlineMath, BlockMath } from 'react-katex';
// // import 'katex/dist/katex.min.css';
// // import styles from './Sections.module.css';

// // const parseHTMLContent = (content) => {
// //   if (typeof content !== 'string') return content;
// //   if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
// //     return <div dangerouslySetInnerHTML={{ __html: content }} />;
// //   }
// //   return content;
// // };

// // const processContent = (content) => {
// //   const svgs = [];
// //   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
// //     svgs.push(match);
// //     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
// //   });

// //   const lines = contentWithPlaceholders.split('\n');
// //   let inList = false;
// //   let currentListItem = [];
// //   const elements = [];

// //   const processPart = (part, index) => {
// //     if (part.startsWith('__SVG_PLACEHOLDER_')) {
// //       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
// //       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
// //     } else if (part.startsWith('**') && part.endsWith('**')) {
// //       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
// //     } else if (part.startsWith('$$') && part.endsWith('$$')) {
// //       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
// //     } else if (part.startsWith('$') && part.endsWith('$')) {
// //       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
// //     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
// //       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
// //       if (linkMatch) {
// //         const [, text, url] = linkMatch;
// //         return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
// //       }
// //     } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
// //       return parseHTMLContent(part);
// //     }
// //     return part;
// //   };

// //   lines.forEach((line, lineIndex) => {
// //     const tabCount = line.match(/^\t*/)[0].length;
// //     const trimmedLine = line.replace(/^\t+/, '');
    
// //     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
// //     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

// //     if (trimmedLine.startsWith('- ')) {
// //       if (inList && currentListItem.length > 0) {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //       }
// //       inList = true;
// //       currentListItem.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts.slice(1)}
// //         </span>
// //       );
// //     } else if (inList) {
// //       if (trimmedLine === '') {
// //         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //         currentListItem = [];
// //         inList = false;
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       } else {
// //         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
// //         currentListItem.push(
// //           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //             {processedParts}
// //           </span>
// //         );
// //       }
// //     } else {
// //       elements.push(
// //         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
// //           {processedParts}
// //         </span>
// //       );
// //       if (lineIndex < lines.length - 1) {
// //         elements.push(<br key={`br-${elements.length}`} />);
// //       }
// //     }
// //   });

// //   if (inList && currentListItem.length > 0) {
// //     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
// //   }

// //   const hasListItems = elements.some(el => el.type === 'li');
// //   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// // };

// // const Sections = ({ sections }) => {
// //   const flattenedSections = sections.reduce((acc, section) => {
// //     if (section.subsections) {
// //       return [...acc, ...section.subsections];
// //     }
// //     return [...acc, section];
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   const scrollToSection = (id) => {
// //     const element = document.getElementById(id);
// //     if (element) {
// //       const offset = 300;
// //       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
// //       window.scrollTo({
// //         top: elementPosition - offset,
// //         behavior: 'smooth'
// //       });
// //     }
// //   };

// //   return (
// //     <div className={styles.sectionsContainer}>
// //       {flattenedSections.map((section, index) => (
// //         <section key={section.id} id={section.id} className={styles.section}>
// //           <div className={styles.sectionContent}>
// //             <h2 className={styles.sectionTitle}>{section.title}</h2>
// //             {section.image && (
// //               <div className={styles.sectionImage}>
// //                 <img src={section.image} alt={section.title} />
// //               </div>
// //             )}
// //             {section.svg && (
// //               <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
// //             )}
// //             <div className={styles.sectionText}>
// //               {processContent(section.content)}
// //             </div>
// //             {section.pageLink && <a href={section.pageLink} className={styles.pageLink}>Go to {section.title} Page</a>}
// //           </div>
// //           <div className={styles.sectionNavigation}>
// //             <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
// //             {index > 0 && (
// //               <button 
// //                 onClick={() => scrollToSection(flattenedSections[index - 1].id)} 
// //                 className={styles.navButton}
// //               >
// //                 Previous
// //               </button>
// //             )}
// //             {index < flattenedSections.length - 1 && (
// //               <button 
// //                 onClick={() => scrollToSection(flattenedSections[index + 1].id)} 
// //                 className={styles.navButton}
// //               >
// //                 Next
// //               </button>
// //             )}
// //           </div>
// //         </section>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Sections;
// import React from 'react';
// import { InlineMath, BlockMath } from 'react-katex';
// import 'katex/dist/katex.min.css';
// import styles from './Sections.module.css';

// const parseHTMLContent = (content) => {
//   if (typeof content !== 'string') return content;
//   if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
//     return <div dangerouslySetInnerHTML={{ __html: content }} />;
//   }
//   return content;
// };

// const processContent = (content) => {
//   if (Array.isArray(content)) {
//     return content.map((item, index) => 
//       React.isValidElement(item) ? React.cloneElement(item, { key: index }) : processContent(item)
//     );
//   }

//   if (React.isValidElement(content)) {
//     return content;
//   }

//   if (typeof content !== 'string') {
//     return content;
//   }

//   const svgs = [];
//   const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
//     svgs.push(match);
//     return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
//   });

//   const lines = contentWithPlaceholders.split('\n');
//   let inList = false;
//   let currentListItem = [];
//   const elements = [];

//   const processPart = (part, index) => {
//     if (part.startsWith('__SVG_PLACEHOLDER_')) {
//       const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
//       return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
//     } else if (part.startsWith('**') && part.endsWith('**')) {
//       return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
//     } else if (part.startsWith('$$') && part.endsWith('$$')) {
//       return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
//     } else if (part.startsWith('$') && part.endsWith('$')) {
//       return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
//     } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
//       const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
//       if (linkMatch) {
//         const [, text, url] = linkMatch;
//         return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
//       }
//     } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
//       return parseHTMLContent(part);
//     }
//     return part;
//   };

//   lines.forEach((line, lineIndex) => {
//     const tabCount = line.match(/^\t*/)[0].length;
//     const trimmedLine = line.replace(/^\t+/, '');
    
//     const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
//     const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

//     if (trimmedLine.startsWith('- ')) {
//       if (inList && currentListItem.length > 0) {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//       }
//       inList = true;
//       currentListItem.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts.slice(1)}
//         </span>
//       );
//     } else if (inList) {
//       if (trimmedLine === '') {
//         elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//         currentListItem = [];
//         inList = false;
//         elements.push(<br key={`br-${elements.length}`} />);
//       } else {
//         currentListItem.push(<br key={`br-${currentListItem.length}`} />);
//         currentListItem.push(
//           <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//             {processedParts}
//           </span>
//         );
//       }
//     } else {
//       elements.push(
//         <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
//           {processedParts}
//         </span>
//       );
//       if (lineIndex < lines.length - 1) {
//         elements.push(<br key={`br-${elements.length}`} />);
//       }
//     }
//   });

//   if (inList && currentListItem.length > 0) {
//     elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
//   }

//   const hasListItems = elements.some(el => el.type === 'li');
//   return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
// };

// const Sections = ({ sections }) => {
//   const flattenedSections = sections.reduce((acc, section) => {
//     if (section.subsections) {
//       return [...acc, ...section.subsections];
//     }
//     return [...acc, section];
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 300;
//       const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({
//         top: elementPosition - offset,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <div className={styles.sectionsContainer}>
//       {flattenedSections.map((section, index) => (
//         <section key={section.id} id={section.id} className={styles.section}>
//           <div className={styles.sectionContent}>
//             <h2 className={styles.sectionTitle}>{section.title}</h2>
//             {section.image && (
//               <div className={styles.sectionImage}>
//                 <img src={section.image} alt={section.title} />
//               </div>
//             )}
//             {section.svg && (
//               <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
//             )}
//             <div className={styles.sectionText}>
//               {processContent(section.content)}
//             </div>
//             {section.pageLink && <a href={section.pageLink} className={styles.pageLink}>Go to {section.title} Page</a>}
//           </div>
//           <div className={styles.sectionNavigation}>
//             <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
//             {index > 0 && (
//               <button 
//                 onClick={() => scrollToSection(flattenedSections[index - 1].id)} 
//                 className={styles.navButton}
//               >
//                 Previous
//               </button>
//             )}
//             {index < flattenedSections.length - 1 && (
//               <button 
//                 onClick={() => scrollToSection(flattenedSections[index + 1].id)} 
//                 className={styles.navButton}
//               >
//                 Next
//               </button>
//             )}
//           </div>
//         </section>
//       ))}
//     </div>
//   );
// };

// export default Sections;
import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import styles from './Sections.module.css';

const isClient = typeof window !== 'undefined';

const parseHTMLContent = (content) => {
  if (typeof content !== 'string') return content;
  if (content.trim().startsWith('<') && content.trim().endsWith('>')) {
    return <div dangerouslySetInnerHTML={{ __html: content }} />;
  }
  return content;
};

const processContent = (content) => {
  if (isClient && React.isValidElement(content)) {
    return content;
  }

  if (Array.isArray(content)) {
    return content.map((item, index) => {
      if (isClient && React.isValidElement(item)) {
        return React.cloneElement(item, { key: index });
      }
      return processContent(item);
    });
  }

  if (typeof content !== 'string') {
    return content;
  }

  const svgs = [];
  const contentWithPlaceholders = content.replace(/<svg[\s\S]*?<\/svg>/g, (match) => {
    svgs.push(match);
    return `__SVG_PLACEHOLDER_${svgs.length - 1}__`;
  });

  const lines = contentWithPlaceholders.split('\n');
  let inList = false;
  let currentListItem = [];
  const elements = [];

  const processPart = (part, index) => {
    if (part.startsWith('__SVG_PLACEHOLDER_')) {
      const svgIndex = parseInt(part.match(/__SVG_PLACEHOLDER_(\d+)__/)[1]);
      return <div key={`svg-${index}`} dangerouslySetInnerHTML={{ __html: svgs[svgIndex] }} />;
    } else if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={`strong-${index}`}>{part.slice(2, -2)}</strong>;
    } else if (part.startsWith('$$') && part.endsWith('$$')) {
      return <BlockMath key={`block-math-${index}`} math={part.slice(2, -2)} />;
    } else if (part.startsWith('$') && part.endsWith('$')) {
      return <InlineMath key={`inline-math-${index}`} math={part.slice(1, -1)} />;
    } else if (part.startsWith('[') && part.includes('](') && part.endsWith(')')) {
      const linkMatch = part.match(/\[(.+?)\]\((.+?)\)/);
      if (linkMatch) {
        const [, text, url] = linkMatch;
        return <a key={`link-${index}`} href={url} target="_blank" rel="noopener noreferrer">{text}</a>;
      }
    } else if (part.trim().startsWith('<') && part.trim().endsWith('>')) {
      return parseHTMLContent(part);
    }
    return part;
  };

  lines.forEach((line, lineIndex) => {
    const tabCount = line.match(/^\t*/)[0].length;
    const trimmedLine = line.replace(/^\t+/, '');
    
    const parts = trimmedLine.split(/(__SVG_PLACEHOLDER_\d+__|\$\$[\s\S]+?\$\$|\$[\s\S]+?\$|\*\*[\s\S]+?\*\*|\[.+?\]\(.+?\))/);
    const processedParts = parts.map((part, partIndex) => processPart(part, `${lineIndex}-${partIndex}`));

    if (trimmedLine.startsWith('- ')) {
      if (inList && currentListItem.length > 0) {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
      }
      inList = true;
      currentListItem.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts.slice(1)}
        </span>
      );
    } else if (inList) {
      if (trimmedLine === '') {
        elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
        currentListItem = [];
        inList = false;
        elements.push(<br key={`br-${elements.length}`} />);
      } else {
        currentListItem.push(<br key={`br-${currentListItem.length}`} />);
        currentListItem.push(
          <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
            {processedParts}
          </span>
        );
      }
    } else {
      elements.push(
        <span key={`tab-${lineIndex}`} style={{ marginLeft: `${tabCount * 2}em` }}>
          {processedParts}
        </span>
      );
      if (lineIndex < lines.length - 1) {
        elements.push(<br key={`br-${elements.length}`} />);
      }
    }
  });

  if (inList && currentListItem.length > 0) {
    elements.push(<li key={`li-${elements.length}`}>{currentListItem}</li>);
  }

  const hasListItems = elements.some(el => el.type === 'li');
  return hasListItems ? <ul>{elements}</ul> : <>{elements}</>;
};

const Sections = ({ sections }) => {
  const flattenedSections = sections.reduce((acc, section) => {
    if (section.subsections) {
      return [...acc, ...section.subsections];
    }
    return [...acc, section];
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 300;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.sectionsContainer}>
      {flattenedSections.map((section, index) => (
        <section key={section.id} id={section.id} className={styles.section}>
          <div className={styles.sectionContent}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            {section.image && (
              <div className={styles.sectionImage}>
                <img src={section.image} alt={section.title} />
              </div>
            )}
            {section.svg && (
              <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
            )}
            <div className={styles.sectionText}>
              {processContent(section.content)}
            </div>
            {section.pageLink && <a href={section.pageLink} className={styles.pageLink}>Go to {section.title} Page</a>}
          </div>
          <div className={styles.sectionNavigation}>
            <button onClick={scrollToTop} className={styles.navButton}>Back to Top</button>
            {index > 0 && (
              <button 
                onClick={() => scrollToSection(flattenedSections[index - 1].id)} 
                className={styles.navButton}
              >
                Previous
              </button>
            )}
            {index < flattenedSections.length - 1 && (
              <button 
                onClick={() => scrollToSection(flattenedSections[index + 1].id)} 
                className={styles.navButton}
              >
                Next
              </button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Sections;