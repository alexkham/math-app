

// import React,{useEffect} from 'react';
// import { processContent } from '@/app/utils/contentProcessor';
// import styles from './Sections.module.css';

// const Sections = ({ sections,leftMargin='220px' }) => {
//  const renderContent = (content) => {
//    if (!content) return null;
   
//    if (!Array.isArray(content)) {
//      return React.isValidElement(content) ? content : processContent(content);
//    }

//    let currentGroup = [];
//    const groups = [];

//    content.forEach((item) => {
//      if (item.layout === 'horizontal') {
//        currentGroup.push(item);
//        if (currentGroup.length === 2) {
//          groups.push([...currentGroup]);
//          currentGroup = [];
//        }
//      } else {
//        if (currentGroup.length) {
//          groups.push([...currentGroup]);
//          currentGroup = [];
//        }
//        groups.push([{ content: item, layout: 'vertical' }]);
//      }
//    });

//    if (currentGroup.length) {
//      groups.push([...currentGroup]);
//    }

//    return groups.map((group, groupIndex) => {
//      if (group.length === 1 && group[0].layout === 'vertical') {
//        return (
//          <div key={groupIndex} className={styles.verticalContent}>
//            {React.isValidElement(group[0].content) 
//              ? group[0].content 
//              : processContent(group[0].content)}
//          </div>
//        );
//      } 
     
//      return (
//        <div key={groupIndex} className={styles.horizontalGroup}>
//          {group.map((item, itemIndex) => (
//            <div 
//              key={itemIndex} 
//              className={styles.horizontalItem}
//              style={{ 
//                flex: item.width || 1,
//                order: item.position === 'right' ? 1 : 0 
//              }}
//            >
//              {React.isValidElement(item.content) 
//                ? item.content 
//                : processContent(item.content)}
//            </div>
//          ))}
//        </div>
//      );
//    });
//  };

//  const flattenedSections = sections.reduce((acc, section) => (
//    section.subsections ? [...acc, ...section.subsections] : [...acc, section]
//  ), []);

//  const scrollToSection = (id) => {
//    const element = document.getElementById(id);
//    if (element) {
//      window.scrollTo({
//        top: element.getBoundingClientRect().top + window.pageYOffset - 300,
//        behavior: 'smooth'
//      });
//    }
//  };

//  useEffect(() => {
//   if (window.location.hash) {
//     const id = window.location.hash.substring(1);
//     setTimeout(() => {
//       const element = document.getElementById(id);
//       if (element) {
//         const headerOffset = 200; // Match your header height
//         const elementPosition = element.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
//         window.scrollTo({
//           top: offsetPosition,
//           behavior: 'smooth'
//         });
//       }
//     }, 100); // Small delay to ensure DOM is ready
//   }
// }, []);



//  return (
//    <div className={styles.sectionsContainer} style={{marginLeft:leftMargin}} suppressHydrationWarning={true} >
//      {flattenedSections.map((section, index) => (
//        <section key={section.id} id={section.id} className={styles.section}>
//          <div className={styles.sectionContent}>
//           <br/>
         
         
//            <h2 className={styles.sectionTitle}>{section.title}</h2>
//            {section.image && (
//              <div className={styles.sectionImage}>
//                <img src={section.image} alt={section.title} />
//              </div>
//            )}
//            {section.svg && (
//              <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
//            )}
//            <div className={styles.sectionText}>
//              {renderContent(section.content)}
//            </div>
//            {section.link && <a href={section.link} className={styles.pageLink}>Learn More</a>}
//          </div>
//          <div className={styles.sectionNavigation}>
//            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
//              className={styles.navButton}>Back to Top</button>
//            {index > 0 && (
//              <button 
//                onClick={() => scrollToSection(flattenedSections[index - 1].id)} 
//                className={styles.navButton}>Previous</button>
//            )}
//            {index < flattenedSections.length - 1 && (
//              <button 
//                onClick={() => scrollToSection(flattenedSections[index + 1].id)} 
//                className={styles.navButton}>Next</button>
//            )}
//          </div>
//        </section>
//      ))}
//    </div>
//  );
// };

// export default Sections;


import React,{useEffect} from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import { lora700, poppins500 } from '@/app/utils/fonts';
import styles from './Sections.module.css';

const Sections = ({ sections,leftMargin='220px' }) => {
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

 useEffect(() => {
  if (window.location.hash) {
    const id = window.location.hash.substring(1);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 200; // Match your header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100); // Small delay to ensure DOM is ready
  }
}, []);



 return (
   <div className={styles.sectionsContainer} style={{marginLeft:leftMargin}} suppressHydrationWarning={true} >
     {flattenedSections.map((section, index) => (
       <section key={section.id} id={section.id} className={styles.section}>
         <div className={styles.sectionContent}>
          <br/>
         
         
           <h2 className={`${styles.sectionTitle} ${lora700.className}`}>{section.title}</h2>
           {section.image && (
             <div className={styles.sectionImage}>
               <img src={section.image} alt={section.title} />
             </div>
           )}
           {section.svg && (
             <div className={styles.sectionImage} dangerouslySetInnerHTML={{ __html: section.svg }} />
           )}
           <div className={`${styles.sectionText} ${poppins500.className}`}>
             {renderContent(section.content)}
           </div>
           {section.link && <a href={section.link} className={styles.pageLink}>Learn More</a>}
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