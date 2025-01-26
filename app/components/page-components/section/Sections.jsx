// import React from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
// import styles from './Sections.module.css';

// const isClient = typeof window !== 'undefined';

// const Sections = ({ sections }) => {
//   const renderContent = (content) => {
//     if (!content) return null;

//     // For regular content items (no layout control)
//     if (!Array.isArray(content)) {
//       if (React.isValidElement(content)) {
//         return content;
//       }
//       return processContent(content);
//     }

//     // Group items by layout
//     let currentGroup = [];
//     const groups = [];

//     content.forEach((item) => {
//       // If item has layout info
//       if (item.layout === 'horizontal') {
//         currentGroup.push(item);
//         // If this is the last item in a horizontal group or next item isn't horizontal
//         if (currentGroup.length === 2) {
//           groups.push([...currentGroup]);
//           currentGroup = [];
//         }
//       } else {
//         // If we have pending horizontal items, group them
//         if (currentGroup.length > 0) {
//           groups.push([...currentGroup]);
//           currentGroup = [];
//         }
//         // Add vertical item as its own group
//         groups.push([{ content: item, layout: 'vertical' }]);
//       }
//     });

//     // Handle any remaining items
//     if (currentGroup.length > 0) {
//       groups.push([...currentGroup]);
//     }

//     return groups.map((group, groupIndex) => {
//       if (group.length === 1 && group[0].layout === 'vertical') {
//         // Render vertical content
//         return (
//           <div key={groupIndex} className={styles.verticalContent}>
//             {React.isValidElement(group[0].content) 
//               ? group[0].content 
//               : processContent(group[0].content)}
//           </div>
//         );
//       } else {
//         // Render horizontal group
//         return (
//           <div key={groupIndex} className={styles.horizontalGroup}>
//             {group.map((item, itemIndex) => (
//               <div 
//                 key={itemIndex} 
//                 className={styles.horizontalItem}
//                 style={{ 
//                   flex: item.width || 1,
//                   order: item.position === 'right' ? 1 : 0 
//                 }}
//               >
//                 {React.isValidElement(item.content) 
//                   ? item.content 
//                   : processContent(item.content)}
//               </div>
//             ))}
//           </div>
//         );
//       }
//     });
//   };

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
//               {renderContent(section.content)}
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
import { processContent } from '@/app/utils/contentProcessor';
import styles from './Sections.module.css';

const Sections = ({ sections }) => {
 const renderContent = (content) => {
   if (!content) return null;
   
   if (!Array.isArray(content)) {
     return React.isValidElement(content) ? content : processContent(content);
   }

   let currentGroup = [];
   const groups = [];

   content.forEach((item) => {
     if (item.layout === 'horizontal') {
       currentGroup.push(item);
       if (currentGroup.length === 2) {
         groups.push([...currentGroup]);
         currentGroup = [];
       }
     } else {
       if (currentGroup.length) {
         groups.push([...currentGroup]);
         currentGroup = [];
       }
       groups.push([{ content: item, layout: 'vertical' }]);
     }
   });

   if (currentGroup.length) {
     groups.push([...currentGroup]);
   }

   return groups.map((group, groupIndex) => {
     if (group.length === 1 && group[0].layout === 'vertical') {
       return (
         <div key={groupIndex} className={styles.verticalContent}>
           {React.isValidElement(group[0].content) 
             ? group[0].content 
             : processContent(group[0].content)}
         </div>
       );
     } 
     
     return (
       <div key={groupIndex} className={styles.horizontalGroup}>
         {group.map((item, itemIndex) => (
           <div 
             key={itemIndex} 
             className={styles.horizontalItem}
             style={{ 
               flex: item.width || 1,
               order: item.position === 'right' ? 1 : 0 
             }}
           >
             {React.isValidElement(item.content) 
               ? item.content 
               : processContent(item.content)}
           </div>
         ))}
       </div>
     );
   });
 };

 const flattenedSections = sections.reduce((acc, section) => (
   section.subsections ? [...acc, ...section.subsections] : [...acc, section]
 ), []);

 const scrollToSection = (id) => {
   const element = document.getElementById(id);
   if (element) {
     window.scrollTo({
       top: element.getBoundingClientRect().top + window.pageYOffset - 300,
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
             {renderContent(section.content)}
           </div>
           {section.link && <a href={section.link} className={styles.pageLink}>Go to  Page</a>}
         </div>
         <div className={styles.sectionNavigation}>
           <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
             className={styles.navButton}>Back to Top</button>
           {index > 0 && (
             <button 
               onClick={() => scrollToSection(flattenedSections[index - 1].id)} 
               className={styles.navButton}>Previous</button>
           )}
           {index < flattenedSections.length - 1 && (
             <button 
               onClick={() => scrollToSection(flattenedSections[index + 1].id)} 
               className={styles.navButton}>Next</button>
           )}
         </div>
       </section>
     ))}
   </div>
 );
};

export default Sections;