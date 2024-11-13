// // // // // // import React, { useState, useMemo } from 'react';
// // // // // // import styles from '../accordion/GeneralAccordionWrapper.module.css';
// // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // // import { X } from 'lucide-react';
// // // // // // import FormulaAccordion from './FormulaAccordion';

// // // // // // const FormulaAccordionWrapper = ({ data, groupByField }) => {
// // // // // //   const [searchTerm, setSearchTerm] = useState('');

// // // // // //   const groupedAndFilteredData = useMemo(() => {
// // // // // //     return data.reduce((acc, item) => {
// // // // // //       const matchesSearch =
// // // // // //         item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         Object.values(item.fields || {}).some(field => 
// // // // // //           field.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // //         );

// // // // // //       if (matchesSearch) {
// // // // // //         const key = item[groupByField];
// // // // // //         if (!acc[key]) {
// // // // // //           acc[key] = [];
// // // // // //         }
// // // // // //         acc[key].push(item);
// // // // // //       }

// // // // // //       return acc;
// // // // // //     }, {});
// // // // // //   }, [data, searchTerm, groupByField]);

// // // // // //   const clearSearch = () => {
// // // // // //     setSearchTerm('');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className={styles.wrapper}>
// // // // // //       <div className={styles.searchContainer}>
// // // // // //         <input
// // // // // //           type="text"
// // // // // //           value={searchTerm}
// // // // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //           placeholder="Search formulas..."
// // // // // //           className={styles.searchInput}
// // // // // //         />
// // // // // //         {searchTerm && (
// // // // // //           <button onClick={clearSearch} className={styles.clearButton}>
// // // // // //             <X size={20} className={styles.clearIcon} />
// // // // // //           </button>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {Object.entries(groupedAndFilteredData).map(([group, items], groupIndex) => (
// // // // // //         <div key={group} className={styles.group} id={group.toLowerCase().replaceAll(' ', '-')}>
// // // // // //           <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
// // // // // //           <div className={styles.groupContent}>
// // // // // //             {items.map((item, itemIndex) => (
// // // // // //               <FormulaAccordion
// // // // // //                 key={itemIndex}
// // // // // //                 data={item}
// // // // // //                 idPrefix={`group${groupIndex}-item${itemIndex}-`}
// // // // // //               />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default FormulaAccordionWrapper;
// // // // // import React, { useState, useMemo } from 'react';
// // // // // import styles from '../accordion/GeneralAccordionWrapper.module.css';
// // // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // // import { X } from 'lucide-react';
// // // // // import FormulaAccordion from './FormulaAccordion';

// // // // // const FormulaAccordionWrapper = ({ data, groupByField }) => {
// // // // //   const [searchTerm, setSearchTerm] = useState('');

// // // // //   const groupedAndFilteredData = useMemo(() => {
// // // // //     return data.reduce((acc, item) => {
// // // // //       const matchesSearch =
// // // // //         item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //         item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // //         Object.values(item.fields || {}).some(field => 
// // // // //           field.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //         );

// // // // //       if (matchesSearch) {
// // // // //         const key = item[groupByField];
// // // // //         if (!acc[key]) {
// // // // //           acc[key] = [];
// // // // //         }
// // // // //         acc[key].push(item);
// // // // //       }

// // // // //       return acc;
// // // // //     }, {});
// // // // //   }, [data, searchTerm, groupByField]);

// // // // //   const clearSearch = () => {
// // // // //     setSearchTerm('');
// // // // //   };

// // // // //   return (
// // // // //     <div className={styles.wrapper}>
// // // // //       <div className={styles.searchContainer}>
// // // // //         <input
// // // // //           type="text"
// // // // //           value={searchTerm}
// // // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // // //           placeholder="Search formulas..."
// // // // //           className={styles.searchInput}
// // // // //         />
// // // // //         {searchTerm && (
// // // // //           <button onClick={clearSearch} className={styles.clearButton}>
// // // // //             <X size={20} className={styles.clearIcon} />
// // // // //           </button>
// // // // //         )}
// // // // //       </div>

// // // // //       {Object.entries(groupedAndFilteredData).map(([group, items], groupIndex) => (
// // // // //         <div key={group} className={styles.group} id={group.toLowerCase().replaceAll(' ', '-')}>
// // // // //           <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
// // // // //           <div className={styles.groupContent}>
// // // // //             {items.map((item, itemIndex) => (
// // // // //               <React.Fragment key={itemIndex}>
// // // // //                 {item.before && <div className={styles.beforeContent}>{item.before}</div>}
// // // // //                 <FormulaAccordion
// // // // //                   data={{...item, before: undefined, after: undefined}}
// // // // //                   idPrefix={`group${groupIndex}-item${itemIndex}-`}
// // // // //                 />
// // // // //                 {item.after && <div className={styles.afterContent}>{item.after}</div>}
// // // // //               </React.Fragment>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FormulaAccordionWrapper;
// // // // import React, { useState, useMemo } from 'react';
// // // // import styles from '../accordion/GeneralAccordionWrapper.module.css';
// // // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // // import { X } from 'lucide-react';
// // // // import FormulaAccordion from './FormulaAccordion';

// // // // const FormulaAccordionWrapper = ({ data, groupByField }) => {
// // // //   const [searchTerm, setSearchTerm] = useState('');

// // // //   const groupedAndFilteredData = useMemo(() => {
// // // //     return data.reduce((acc, item) => {
// // // //       const matchesSearch =
// // // //         item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // //         Object.values(item.fields || {}).some(field =>
// // // //           field.toLowerCase().includes(searchTerm.toLowerCase())
// // // //         );

// // // //       if (matchesSearch) {
// // // //         const key = item[groupByField];
// // // //         if (!acc[key]) {
// // // //           acc[key] = [];
// // // //         }
// // // //         // Generate a unique ID for each item based only on the formula name
// // // //         const itemId = item.name.toLowerCase().replace(/\s+/g, '_');
// // // //         acc[key].push({...item, itemId});
// // // //       }

// // // //       return acc;
// // // //     }, {});
// // // //   }, [data, searchTerm, groupByField]);

// // // //   const clearSearch = () => {
// // // //     setSearchTerm('');
// // // //   };

// // // //   return (
// // // //     <div className={styles.wrapper}>
// // // //       <div className={styles.searchContainer}>
// // // //         <input
// // // //           type="text"
// // // //           value={searchTerm}
// // // //           onChange={(e) => setSearchTerm(e.target.value)}
// // // //           placeholder="Search formulas..."
// // // //           className={styles.searchInput}
// // // //         />
// // // //         {searchTerm && (
// // // //           <button onClick={clearSearch} className={styles.clearButton}>
// // // //             <X size={20} className={styles.clearIcon} />
// // // //           </button>
// // // //         )}
// // // //       </div>

// // // //       {Object.entries(groupedAndFilteredData).map(([group, items], groupIndex) => (
// // // //         <div key={group} className={styles.group} id={group.toLowerCase().replaceAll(' ', '-')}>
// // // //           <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
// // // //           <div className={styles.groupContent}>
// // // //             {items.map((item) => (
// // // //               <React.Fragment key={item.itemId}>
// // // //                 {item.before && <div className={styles.beforeContent}>{item.before}</div>}
// // // //                 <FormulaAccordion
// // // //                   data={{...item, before: undefined, after: undefined}}
// // // //                   idPrefix={item.itemId}
// // // //                 />
// // // //                 {item.after && <div className={styles.afterContent}>{item.after}</div>}
// // // //               </React.Fragment>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FormulaAccordionWrapper;
// // // import React, { useState, useMemo, useEffect } from 'react';
// // // import styles from '../accordion/GeneralAccordionWrapper.module.css';
// // // import { capitalizeWords } from '@/app/utils/utils-functions';
// // // import { X } from 'lucide-react';
// // // import FormulaAccordion from './FormulaAccordion';

// // // const FormulaAccordionWrapper = ({ data, groupByField }) => {
// // //   const [searchTerm, setSearchTerm] = useState('');

// // //   const groupedAndFilteredData = useMemo(() => {
// // //     return data.reduce((acc, item) => {
// // //       const matchesSearch =
// // //         item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //         Object.values(item.fields || {}).some(field =>
// // //           field.toLowerCase().includes(searchTerm.toLowerCase())
// // //         );

// // //       if (matchesSearch) {
// // //         const key = item[groupByField];
// // //         if (!acc[key]) {
// // //           acc[key] = [];
// // //         }
// // //         const itemId = item.name.toLowerCase().replace(/\s+/g, '_');
// // //         acc[key].push({...item, itemId});
// // //       }

// // //       return acc;
// // //     }, {});
// // //   }, [data, searchTerm, groupByField]);

// // //   const clearSearch = () => {
// // //     setSearchTerm('');
// // //   };

// // //   useEffect(() => {
// // //     const hash = window.location.hash.substring(1);
// // //     if (hash) {
// // //       const element = document.getElementById(hash);
// // //       if (element) {
// // //         element.scrollIntoView();
// // //         element.click();
// // //       }
// // //     }
// // //   }, []);

// // //   return (
// // //     <div className={styles.wrapper} >
// // //       <div className={styles.searchContainer} >
// // //         <input
// // //           type="text"
// // //           value={searchTerm}
// // //           onChange={(e) => setSearchTerm(e.target.value)}
// // //           placeholder="Search formulas..."
// // //           className={styles.searchInput}
// // //         />
// // //         {searchTerm && (
// // //           <button onClick={clearSearch} className={styles.clearButton}>
// // //             <X size={20} className={styles.clearIcon} />
// // //           </button>
// // //         )}
// // //       </div>

// // //       {Object.entries(groupedAndFilteredData).map(([group, items]) => (
// // //         <div key={group} className={styles.group}>
// // //           <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
// // //           <div className={styles.groupContent}>
// // //             {items.map((item) => (
// // //               <FormulaAccordion
// // //                 key={item.itemId}
// // //                 data={item}
// // //                 idPrefix={item.itemId}
// // //               />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };

// // // export default FormulaAccordionWrapper;

// // import React, { useState, useMemo, useEffect } from 'react';
// // import styles from '../accordion/GeneralAccordionWrapper.module.css';
// // import { capitalizeWords } from '@/app/utils/utils-functions';
// // import { X } from 'lucide-react';
// // import FormulaAccordion from './FormulaAccordion';

// // const FormulaAccordionWrapper = ({ data, groupByField }) => {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const groupedAndFilteredData = useMemo(() => {
// //     return data.reduce((acc, item) => {
// //       const matchesSearch =
// //         item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //         Object.values(item.fields || {}).some(field =>
// //           field.toLowerCase().includes(searchTerm.toLowerCase())
// //         );

// //       if (matchesSearch) {
// //         const key = item[groupByField];
// //         if (!acc[key]) {
// //           acc[key] = [];
// //         }
// //         const itemId = item.name.toLowerCase().replace(/\s+/g, '_');
// //         acc[key].push({...item, itemId});
// //       }

// //       return acc;
// //     }, {});
// //   }, [data, searchTerm, groupByField]);

// //   const clearSearch = () => {
// //     setSearchTerm('');
// //   };

// //   // useEffect(() => {
// //   //   const hash = window.location.hash.substring(1);
// //   //   if (hash) {
// //   //     setTimeout(() => {
// //   //       const section = document.getElementById(hash);
// //   //       if (section) {
// //   //         // Find the clickable label element within this section
// //   //         const label = section.querySelector(`.${styles.accordion__label}`);
// //   //         if (label) {
// //   //           label.click();
            
// //   //           // After opening, adjust scroll position
// //   //           setTimeout(() => {
// //   //             const y = section.getBoundingClientRect().top + window.pageYOffset - 150;
// //   //             window.scrollTo({
// //   //               top: y,
// //   //               behavior: 'instant'
// //   //             });
// //   //           }, 500); // after accordion animation
// //   //         }
// //   //       }
// //   //     }, 100);
// //   //   }
// //   // }, []);

// //   useEffect(() => {
// //     const hash = window.location.hash.substring(1);
// //     console.log('1. Hash:', hash);
    
// //     if (hash) {
// //       console.log('2. Has hash, waiting for timeout...');
      
// //       setTimeout(() => {
// //         console.log('3. Inside timeout');
// //         const section = document.getElementById(hash);
// //         console.log('4. Found section:', section);
        
// //         if (section) {
// //           console.log('5. Looking for label...');
// //           const label = section.querySelector(`.${styles.accordion__label}`);
// //           console.log('6. Found label:', label);
          
// //           if (label) {
// //             console.log('7. About to click label');
// //             label.click();
// //             console.log('8. Clicked label');
            
// //             setTimeout(() => {
// //               console.log('9. In scroll timeout');
// //               const y = section.getBoundingClientRect().top + window.pageYOffset - 150;
// //               console.log('10. Calculated Y:', y);
// //               window.scrollTo({
// //                 top: y,
// //                 behavior: 'instant'
// //               });
// //               console.log('11. Scrolled');
// //             }, 500);
// //           }
// //         }
// //       }, 100);
// //     }
// //   }, []);
 
// //   return (
// //     <div className={styles.wrapper}>
// //       <div className={styles.searchContainer}>
// //         <input
// //           type="text"
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           placeholder="Search formulas..."
// //           className={styles.searchInput}
// //         />
// //         {searchTerm && (
// //           <button onClick={clearSearch} className={styles.clearButton}>
// //             <X size={20} className={styles.clearIcon} />
// //           </button>
// //         )}
// //       </div>

// //       {Object.entries(groupedAndFilteredData).map(([group, items]) => (
// //         <div key={group} className={styles.group}>
// //           <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
// //           <div className={styles.groupContent}>
// //             {items.map((item) => (
// //               <FormulaAccordion
// //                 key={item.itemId}
// //                 data={item}
// //                 idPrefix={item.itemId}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default FormulaAccordionWrapper;

// import React, { useState, useMemo, useEffect } from 'react';
// import styles from '../accordion/GeneralAccordionWrapper.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import { X } from 'lucide-react';
// import FormulaAccordion from './FormulaAccordion';

// const FormulaAccordionWrapper = ({ data, groupByField }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const groupedAndFilteredData = useMemo(() => {
//     return data.reduce((acc, item) => {
//       const matchesSearch =
//         item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         Object.values(item.fields || {}).some(field =>
//           field.toLowerCase().includes(searchTerm.toLowerCase())
//         );

//       if (matchesSearch) {
//         const key = item[groupByField];
//         if (!acc[key]) {
//           acc[key] = [];
//         }
//         const itemId = item.name.toLowerCase().replace(/\s+/g, '_');
//         acc[key].push({...item, itemId});
//       }

//       return acc;
//     }, {});
//   }, [data, searchTerm, groupByField]);

//   const clearSearch = () => {
//     setSearchTerm('');
//   };

//   useEffect(() => {
//     const hash = window.location.hash.substring(1);
//     console.log('1. Hash:', hash);
    
//     if (hash) {
//       console.log('2. Has hash, waiting for timeout...');
      
//       setTimeout(() => {
//         console.log('3. Inside timeout');
//         const section = document.getElementById(hash);
//         console.log('4. Found section:', section);
        
//         if (section) {
//           console.log('5. Looking for label...');
//           const label = section.querySelector('h1');
//           console.log('6. Found label:', label);
          
//           if (label) {
//             console.log('7. About to click label');
//             label.click();
//             console.log('8. Clicked label');
            
//             setTimeout(() => {
//               console.log('9. In scroll timeout');
//               const y = section.getBoundingClientRect().top + window.pageYOffset - 150;
//               console.log('10. Calculated Y:', y);
//               window.scrollTo({
//                 top: y,
//                 behavior: 'instant'
//               });
//               console.log('11. Scrolled');
//             }, 500);
//           }
//         }
//       }, 100);
//     }
//   }, []);

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.searchContainer}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search formulas..."
//           className={styles.searchInput}
//         />
//         {searchTerm && (
//           <button onClick={clearSearch} className={styles.clearButton}>
//             <X size={20} className={styles.clearIcon} />
//           </button>
//         )}
//       </div>

//       {Object.entries(groupedAndFilteredData).map(([group, items]) => (
//         <div key={group} className={styles.group}>
//           <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
//           <div className={styles.groupContent}>
//             {items.map((item) => (
//               <FormulaAccordion
//                 key={item.itemId}
//                 data={item}
//                 idPrefix={item.itemId}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormulaAccordionWrapper;
import React, { useState, useMemo, useEffect } from 'react';
import styles from '../accordion/GeneralAccordion.module.css';  // Note: changed to access accordion styles
import wrapperStyles from '../accordion/GeneralAccordionWrapper.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';
import { X } from 'lucide-react';
import FormulaAccordion from './FormulaAccordion';

const FormulaAccordionWrapper = ({ data, groupByField }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const groupedAndFilteredData = useMemo(() => {
    return data.reduce((acc, item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.values(item.fields || {}).some(field =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        );

      if (matchesSearch) {
        const key = item[groupByField];
        if (!acc[key]) {
          acc[key] = [];
        }
        const itemId = item.name.toLowerCase().replace(/\s+/g, '_');
        acc[key].push({...item, itemId});
      }

      return acc;
    }, {});
  }, [data, searchTerm, groupByField]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.classList.add(styles.open);
          setTimeout(() => {
            const y = section.getBoundingClientRect().top + window.pageYOffset - 150;
            window.scrollTo({
              top: y,
              behavior: 'instant'
            });
          }, 100);
        }
      }, 100);
    }
  }, []);

  return (
    <div className={wrapperStyles.wrapper}>
      <div className={wrapperStyles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search formulas..."
          className={wrapperStyles.searchInput}
        />
        {searchTerm && (
          <button onClick={clearSearch} className={wrapperStyles.clearButton}>
            <X size={20} className={wrapperStyles.clearIcon} />
          </button>
        )}
      </div>

      {Object.entries(groupedAndFilteredData).map(([group, items]) => (
        <div key={group} className={wrapperStyles.group}>
          <h3 className={wrapperStyles.groupHeader}>{capitalizeWords(group)}</h3>
          <div className={wrapperStyles.groupContent}>
            {items.map((item) => (
              <FormulaAccordion
                key={item.itemId}
                data={item}
                idPrefix={item.itemId}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormulaAccordionWrapper;