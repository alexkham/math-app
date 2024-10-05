// // import React from 'react';
// // import styles from '../accordion/GeneralAccordion.module.css';
// // import FormulaWidget from './FormulaWidget';
// // import { capitalizeWords } from '@/app/utils/utils-functions';

// // function FormulaAccordion({ data, width = '1000px', idPrefix = '' }) {
// //   const toggleSection = (sectionId) => {
// //     const section = document.getElementById(sectionId);
// //     if (section) {
// //       section.classList.toggle(styles.open);
// //       if (section.classList.contains(styles.open)) {
// //         setTimeout(() => {
// //           const yOffset = -30;
// //           const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// //           window.scrollTo({top: y, behavior: 'smooth'});
// //         }, 400);
// //       }
// //     }
// //   };

// //   const preventClose = (event) => {
// //     event.stopPropagation();
// //   };

// //   return (
// //     <div className={styles.accordion} style={{ width }}>
// //       <div id={`${idPrefix}section`} className={styles.accordion__section}>
// //         <h1 className={styles.accordion__label} onClick={() => toggleSection(`${idPrefix}section`)}>
// //           {capitalizeWords(data.name?.replaceAll('_', ' ') || 'Untitled')}
// //           <span className={styles.chevron}></span>
// //         </h1>
// //         <div className={styles.accordion__content} onClick={preventClose}>
// //           <FormulaWidget data={data} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FormulaAccordion;
// // import React, { useId } from 'react';
// // import styles from '../accordion/GeneralAccordion.module.css';
// // import FormulaWidget from './FormulaWidget';
// // import { capitalizeWords } from '@/app/utils/utils-functions';

// // function FormulaAccordion({ data, width = '1000px', idPrefix = '' }) {
// //   const uniqueId = useId();
// //   const sectionId = `${idPrefix}section-${uniqueId}`;

// //   const toggleSection = () => {
// //     const section = document.getElementById(sectionId);
// //     if (section) {
// //       section.classList.toggle(styles.open);
// //       if (section.classList.contains(styles.open)) {
// //         setTimeout(() => {
// //           const yOffset = -30;
// //           const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
// //           window.scrollTo({top: y, behavior: 'smooth'});
// //         }, 400);
// //       }
// //     }
// //   };

// //   const preventClose = (event) => {
// //     event.stopPropagation();
// //   };

// //   return (
// //     <div className={styles.accordion} style={{ width }}>
// //       <div id={sectionId} className={styles.accordion__section}>
// //         <h1 className={styles.accordion__label} onClick={toggleSection}>
// //           {capitalizeWords(data.name?.replaceAll('_', ' ') || 'Untitled')}
// //           <span className={styles.chevron}></span>
// //         </h1>
// //         <div className={styles.accordion__content} onClick={preventClose}>
// //           <FormulaWidget data={data} title={''} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default FormulaAccordion;
// import React, { useId } from 'react';
// import styles from '../accordion/GeneralAccordion.module.css';
// import FormulaWidget from './FormulaWidget';
// import { capitalizeWords } from '@/app/utils/utils-functions';

// function FormulaAccordion({ data, width = '1000px', idPrefix = '' }) {
//   const uniqueId = useId();
//   const sectionId = `${idPrefix}section-${uniqueId}`;

//   const toggleSection = () => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.classList.toggle(styles.open);
//       if (section.classList.contains(styles.open)) {
//         setTimeout(() => {
//           const yOffset = -30;
//           const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//           window.scrollTo({top: y, behavior: 'smooth'});
//         }, 400);
//       }
//     }
//   };

//   const toggleBottom = () => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.classList.remove(styles.open);
//       const yOffset = -30;
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({top: y, behavior: 'smooth'});
//     }
//   };

//   const preventClose = (event) => {
//     event.stopPropagation();
//   };

//   return (
//     <div className={styles.accordion} style={{ width }}>
//       <div id={sectionId} className={styles.accordion__section}>
//         <h1 className={styles.accordion__label} onClick={toggleSection}>
//           {capitalizeWords(data.name?.replaceAll('_', ' ') || 'Untitled')}
//           <span className={styles.chevron}></span>
//         </h1>
//         <div className={styles.accordion__content} onClick={preventClose}>
//           <FormulaWidget data={data} title={''} />
//         </div>
//         <span
//           className={styles.chevronBottom}
//           onClick={toggleBottom}
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="#b3b3b3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
//             <rect width="18" height="18" x="3" y="3" rx="2"/>
//             <path d="m8 14 4-4 4 4"/>
//           </svg>
//         </span>
//       </div>
//     </div>
//   );
// }

// export default FormulaAccordion;
import React, { useId } from 'react';
import styles from '../accordion/GeneralAccordion.module.css';
import FormulaWidget from './FormulaWidget';
import { capitalizeWords } from '@/app/utils/utils-functions';

function FormulaAccordion({ data, width = '1000px', idPrefix = '' }) {
  const uniqueId = useId();
  const sectionId = `${idPrefix}section-${uniqueId}`;

  const toggleSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.toggle(styles.open);
      if (section.classList.contains(styles.open)) {
        setTimeout(() => {
          const yOffset = -30;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }, 400);
      }
    }
  };

  const toggleBottom = () => {
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

  // Create a new data object without 'before' and 'after' fields
  const accordionData = { ...data };
  delete accordionData.before;
  delete accordionData.after;

  return (
    <>
      {data.before && (
        <div className={styles.accordion__before}>
          {data.before}
        </div>
      )}
      <div className={styles.accordion} style={{ width }}>
        <div id={sectionId} className={styles.accordion__section}>
          <h1 className={styles.accordion__label} onClick={toggleSection}>
            {capitalizeWords(data.name?.replaceAll('_', ' ') || 'Untitled')}
            <span className={styles.chevron}></span>
          </h1>
          <div className={styles.accordion__content} onClick={preventClose}>
            <FormulaWidget data={accordionData} title={''} />
          </div>
          <span
            className={styles.chevronBottom}
            onClick={toggleBottom}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="#b3b3b3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="m8 14 4-4 4 4"/>
            </svg>
          </span>
        </div>
      </div>
      {data.after && (
        <div className={styles.accordion__after}>
          {data.after}
        </div>
      )}
    </>
  );
}

export default FormulaAccordion;