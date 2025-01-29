// import React, { useState, useMemo, useEffect } from 'react';
// import styles from '../accordion/GeneralAccordion.module.css';  // Note: changed to access accordion styles
// import wrapperStyles from '../accordion/GeneralAccordionWrapper.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import { X } from 'lucide-react';
// import FormulaAccordion from './FormulaAccordion';

// const FormulaAccordionWrapper = ({ data, groupByField,type='Formula' }) => {
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

//   // const clearSearch = () => {
//   //   setSearchTerm('');
//   // };

//   const clearSearch = () => {
//     const hash = window.location.hash;
//     setSearchTerm('');
//     if (hash) {
//       setTimeout(() => window.location.hash = hash, 100);
//     }
//   };
 
//   // useEffect(() => {
//   //   const hash = window.location.hash.substring(1);
//   //   if (hash) {
//   //     setTimeout(() => {
//   //       const section = document.getElementById(hash);
//   //       if (section) {
//   //         section.classList.add(styles.open);
//   //         setTimeout(() => {
//   //           const y = section.getBoundingClientRect().top + window.pageYOffset - 150;
//   //           window.scrollTo({
//   //             top: y,
//   //             behavior: 'instant'
//   //           });
//   //         }, 100);
//   //       }
//   //     }, 100);
//   //   }
//   // }, []);


//   const handleAnchorClick = () => {
//     setSearchTerm('');
//   };
  
//   // Add to component event listener
//   useEffect(() => {
//     document.addEventListener('click', (e) => {
//       if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
//         handleAnchorClick();
//       }
//     });
//   }, []);

//   useEffect(() => {
//     const links = document.querySelectorAll('a[href*="#"]');
//     links.forEach(link => {
//       link.addEventListener('click', () => setSearchTerm(''));
//     });
//   }, []);

//   useEffect(() => {
//     const handleHashChange = () => {
//       if (searchTerm) {
//         setSearchTerm('');
//       }
//     };
//     window.addEventListener('hashchange', handleHashChange);
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, [searchTerm]);

//   useEffect(() => {
//     if (window.location.hash) {
//       const id = window.location.hash.substring(1);
//       setTimeout(() => {
//         const element = document.getElementById(id);
//         if (element) {
//           element.classList.add(styles.open); // Open the accordion
//           const headerOffset = 450;
//           const elementPosition = element.getBoundingClientRect().top;
//           const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
//           window.scrollTo({
//             top: offsetPosition,
//             behavior: 'instant'
//           });
//         }
//       }, 100);
//     }
//   }, []);
//   return (
//     <div className={wrapperStyles.wrapper}>
//       <div className={wrapperStyles.searchContainer}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder={`Search in ${type}s...`}
//           className={wrapperStyles.searchInput}
//         />
//         {searchTerm && (
//           <button onClick={clearSearch} className={wrapperStyles.clearButton}>
//             <X size={20} className={wrapperStyles.clearIcon} />
//           </button>
//         )}
//       </div>

//       {Object.entries(groupedAndFilteredData).map(([group, items]) => (
//         <div key={group} className={wrapperStyles.group}>
//           <h3 className={wrapperStyles.groupHeader}>{capitalizeWords(group)}</h3>
//           <div className={wrapperStyles.groupContent}>
//             {items.map((item) => (
//               <FormulaAccordion
//                 key={item.itemId}
//                 data={item}
//                 idPrefix={item.itemId}
//                 type={type}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormulaAccordionWrapper;


// import React, { useState, useMemo, useEffect } from 'react';
// import styles from '../accordion/GeneralAccordion.module.css';
// import wrapperStyles from '../accordion/GeneralAccordionWrapper.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import { X } from 'lucide-react';
// import FormulaAccordion from './FormulaAccordion';

// const FormulaAccordionWrapper = ({ data, groupByField, type='Formula' }) => {
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

//   useEffect(() => {
//     const handleHashNavigation = () => {
//       const hash = window.location.hash.slice(1);
//       if (!hash) return;

//       const element = document.getElementById(hash);
//       if (!element) return;

//       element.classList.add(styles.open);
      
//       // Force layout recalculation
//       element.offsetHeight;

//       const offset = 150;
//       const position = element.getBoundingClientRect().top + window.scrollY - offset;
      
//       window.scrollTo({
//         top: Math.max(0, position),
//         behavior: 'instant'
//       });
//     };

//     // Initial hash navigation
//     setTimeout(handleHashNavigation, 100);

//     // Handle hash changes
//     window.addEventListener('hashchange', handleHashNavigation);
//     return () => window.removeEventListener('hashchange', handleHashNavigation);
//   }, []);

//   const clearSearch = () => {
//     const hash = window.location.hash;
//     setSearchTerm('');
//     if (hash) {
//       setTimeout(() => window.location.hash = hash, 100);
//     }
//   };

//   useEffect(() => {
//     const handleAnchorClick = (e) => {
//       if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
//         setSearchTerm('');
//       }
//     };

//     document.addEventListener('click', handleAnchorClick);
//     return () => document.removeEventListener('click', handleAnchorClick);
//   }, []);

//   useEffect(() => {
//     const handleHashChange = () => searchTerm && setSearchTerm('');
//     window.addEventListener('hashchange', handleHashChange);
//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, [searchTerm]);

//   return (
//     <div className={wrapperStyles.wrapper}>
//       <div className={wrapperStyles.searchContainer}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder={`Search in ${type}s...`}
//           className={wrapperStyles.searchInput}
//         />
//         {searchTerm && (
//           <button onClick={clearSearch} className={wrapperStyles.clearButton}>
//             <X size={20} className={wrapperStyles.clearIcon} />
//           </button>
//         )}
//       </div>

//       {Object.entries(groupedAndFilteredData).map(([group, items]) => (
//         <div key={group} className={wrapperStyles.group}>
//           <h3 className={wrapperStyles.groupHeader}>{capitalizeWords(group)}</h3>
//           <div className={wrapperStyles.groupContent}>
//             {items.map((item) => (
//               <FormulaAccordion
//                 key={item.itemId}
//                 data={item}
//                 idPrefix={item.itemId}
//                 type={type}
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
import styles from '../accordion/GeneralAccordion.module.css';
import wrapperStyles from '../accordion/GeneralAccordionWrapper.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';
import { X } from 'lucide-react';
import FormulaAccordion from './FormulaAccordion';

const FormulaAccordionWrapper = ({ data, groupByField, type='Formula' }) => {
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

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;

      const element = document.getElementById(hash);
      if (!element) return;

      element.classList.add(styles.open);
      
      // Force layout recalculation
      element.offsetHeight;

      const offset = 150;
      const position = element.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: Math.max(0, position),
        behavior: 'instant'
      });
    };

    // Initial hash navigation
    setTimeout(handleHashNavigation, 100);

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  const clearSearch = () => {
    const hash = window.location.hash;
    setSearchTerm('');
    if (hash) {
      setTimeout(() => window.location.hash = hash, 100);
    }
  };

  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        setSearchTerm('');
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    const handleHashChange = () => searchTerm && setSearchTerm('');
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [searchTerm]);

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.slice(1);
      if (!hash) return;
  
      // Try to find either formula or category element
      const element = document.getElementById(hash);
      if (!element) return;
  
      // If it's an accordion element, open it
      if (element.classList.contains(styles.accordion)) {
        element.classList.add(styles.open);
      }
      
      const offset = 150;
      const position = element.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: Math.max(0, position),
        behavior: 'instant'
      });
    };
  
    setTimeout(handleHashNavigation, 100);
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  return (
    <div className={wrapperStyles.wrapper}>
      <div className={wrapperStyles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search in ${type}s...`}
          className={wrapperStyles.searchInput}
        />
        {searchTerm && (
          <button onClick={clearSearch} className={wrapperStyles.clearButton}>
            <X size={20} className={wrapperStyles.clearIcon} />
          </button>
        )}
      </div>

      {Object.entries(groupedAndFilteredData).map(([group, items]) => {
        const categoryId = `category_${group.toLowerCase().replace(/\s+/g, '_')}`;
        return (
          <div key={group} className={wrapperStyles.group} id={categoryId}>
            <h3 className={wrapperStyles.groupHeader}>{capitalizeWords(group)}</h3>
            <div className={wrapperStyles.groupContent}>
              {items.map((item) => (
                <FormulaAccordion
                  key={item.itemId}
                  data={item}
                  idPrefix={item.itemId}
                  type={type}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormulaAccordionWrapper;