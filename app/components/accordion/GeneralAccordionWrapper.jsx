// 'use client';

// import React, { useState, useMemo } from 'react';
// import styles from './GeneralAccordionWrapper.module.css';
// import { capitalizeWords } from '@/app/utils/utils-functions';
// import { X } from 'lucide-react';

// const GeneralAccordionWrapper = ({ WrappedAccordion, data, groupByField, link }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const groupedAndFilteredData = useMemo(() => {
//     return data.reduce((acc, item) => {
//       const matchesSearch =
//         item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.content?.toLowerCase().includes(searchTerm.toLowerCase());

//       if (matchesSearch) {
//         const key = item[groupByField];
//         if (!acc[key]) {
//           acc[key] = [];
//         }
//         acc[key].push(item);
//       }

//       return acc;
//     }, {});
//   }, [data, searchTerm, groupByField]);

//   const clearSearch = () => {
//     setSearchTerm('');
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.searchContainer}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search..."
//           className={styles.searchInput}
//         />
//         {searchTerm && (
//           <button onClick={clearSearch} className={styles.clearButton}>
//             <X size={20} className={styles.clearIcon} />
//           </button>
//         )}
//       </div>

//       {Object.entries(groupedAndFilteredData).map(([group, items], groupIndex) => (
//         <div key={group} className={styles.group} id={group.toLowerCase().replaceAll(' ', '-')}>
//           <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
//           <div className={styles.groupContent}>
//             <WrappedAccordion
//               data={items}
//               idPrefix={`group${groupIndex}-`}
//               link={link}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default GeneralAccordionWrapper;
'use client';

import React, { useState, useMemo } from 'react';
import styles from './GeneralAccordionWrapper.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';
import { X } from 'lucide-react';

const GeneralAccordionWrapper = ({ WrappedAccordion, data, groupByField, linkField,linkTitle, contentFields }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const groupedAndFilteredData = useMemo(() => {
    return data.reduce((acc, item) => {
      const matchesSearch =
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.content?.toLowerCase().includes(searchTerm.toLowerCase());

      if (matchesSearch) {
        const key = item[groupByField];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
      }

      return acc;
    }, {});
  }, [data, searchTerm, groupByField]);

  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className={styles.searchInput}
        />
        {searchTerm && (
          <button onClick={clearSearch} className={styles.clearButton}>
            <X size={20} className={styles.clearIcon} />
          </button>
        )}
      </div>

      {Object.entries(groupedAndFilteredData).map(([group, items], groupIndex) => (
        <div key={group} className={styles.group} id={group.toLowerCase().replaceAll(' ', '-')}>
          <h3 className={styles.groupHeader}>{capitalizeWords(group)}</h3>
          <div className={styles.groupContent}>
            <WrappedAccordion
              data={items}
              idPrefix={`group${groupIndex}-`}
              linkField={linkField}
              contentFields={contentFields}
              linkTitle={linkTitle}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralAccordionWrapper;