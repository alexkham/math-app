// import React, { useState, useMemo } from 'react';
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
//           placeholder="Search formulas..."
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
//             {items.map((item, itemIndex) => (
//               <FormulaAccordion
//                 key={itemIndex}
//                 data={item}
//                 idPrefix={`group${groupIndex}-item${itemIndex}-`}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FormulaAccordionWrapper;
import React, { useState, useMemo } from 'react';
import styles from '../accordion/GeneralAccordionWrapper.module.css';
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
          placeholder="Search formulas..."
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
            {items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                {item.before && <div className={styles.beforeContent}>{item.before}</div>}
                <FormulaAccordion
                  data={{...item, before: undefined, after: undefined}}
                  idPrefix={`group${groupIndex}-item${itemIndex}-`}
                />
                {item.after && <div className={styles.afterContent}>{item.after}</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormulaAccordionWrapper;