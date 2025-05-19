
// import React, { useState, useMemo } from 'react';
// import ExpandableTable from './ExpandableTable';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import styles from './DataWrapper.module.css';

// export default function DataWrapper2({ 
//   data,
//   config = {
//     displayColumns: [], // Controls what columns are shown
//     copyableFields: [], // Fields that can be copied
//     nestedCopyableFields: [], // Content fields that can be copied
//     searchableFields: [] // Fields to search in
//   }
// }) {
//   const [selectedSections, setSelectedSections] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Extract valid section keys (must be arrays)
//   const sections = useMemo(
//     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
//     [data]
//   );

//   // Process data based on selected sections and search query
//   const processedData = useMemo(() => {
//     if (!sections.length) return [];
    
//     let result = [];
//     const sectionsToProcess = selectedSections.length > 0 ? selectedSections : sections;

//     // Combine data from selected sections
//     sectionsToProcess.forEach((section) => {
//       if (data[section] && Array.isArray(data[section])) {
//         result = result.concat(
//           data[section].map(item => ({
//             id: item.id || Math.random().toString(36).substr(2, 9),
//             ...item
//           }))
//         );
//       }
//     });

//     if (!result.length) return [];

//     // Filter based on search query - use ONLY searchableFields from config
//     return searchQuery && config.searchableFields.length > 0
//       ? result.filter((item) =>
//           config.searchableFields.some((field) => {
//             const value = item[field];
//             return value != null && 
//               String(value).toLowerCase().includes(searchQuery.toLowerCase());
//           })
//         )
//       : result;
//   }, [data, selectedSections, sections, searchQuery, config.searchableFields]);

//   const toggleSection = (section) => {
//     setSelectedSections((prev) =>
//       prev.includes(section) 
//         ? prev.filter((s) => s !== section) 
//         : [...prev, section]
//     );
//   };

//   const deselectSection = (section) => {
//     setSelectedSections((prev) => prev.filter((s) => s !== section));
//   };

//   const selectAll = () => setSelectedSections(sections);
//   const clearAll = () => {
//     setSelectedSections([]);
//     setSearchQuery('');
//   };

//   // Don't render if no data or no display columns specified
//   if (!sections.length || !config.displayColumns.length) {
//     return <div className={styles.noData}>
//       {!sections.length ? 'No data available' : 'No columns specified for display'}
//     </div>;
//   }

//   return (
//     <div className={styles.container}>
//       {/* Controls Section */}
//       <div className={styles.topControls}>
//         <div className={styles.searchWrapper}>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={styles.searchBar}
//           />
//           {searchQuery && (
//             <button
//               className={styles.clearSearchButton}
//               onClick={() => setSearchQuery('')}
//               aria-label="Clear Search"
//             >
//               ✖
//             </button>
//           )}
//         </div>

//         <button
//           onClick={selectAll}
//           className={`${styles.controlButton} ${styles.selectButton}`}
//         >
//           Select All
//         </button>
//         <button
//           onClick={clearAll}
//           className={`${styles.controlButton} ${styles.clearButton}`}
//         >
//           Clear All
//         </button>
//         <button 
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
//           className={styles.chevronButton}
//         >
//           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//           {isDropdownOpen ? 'Hide Categories' : 'Show Categories'}
//         </button>
//       </div>

//       {/* Dropdown Section */}
//       <div
//         className={`${styles.sectionButtons} ${
//           isDropdownOpen ? styles.show : ''
//         }`}
//       >
//         {sections.map((section) => (
//           <button
//             key={section}
//             onClick={() => toggleSection(section)}
//             className={`${styles.sectionButton} ${
//               selectedSections.includes(section) ? styles.active : ''
//             }`}
//           >
//             <span className={styles.sectionText}>
//               {section.replace(/_/g, ' ')}
//             </span>
//             {selectedSections.includes(section) && (
//               <span
//                 className={styles.closeButton}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   deselectSection(section);
//                 }}
//               >
//                 ✖
//               </span>
//             )}
//           </button>
//         ))}
//       </div>

//       {/* Table Section */}
//       <div className={styles.tableWrapper}>
//         <ExpandableTable
//           data={processedData}
//           includedFields={config.displayColumns}
//           copyableFields={config.copyableFields || []}
//           nestedCopyableFields={config.nestedCopyableFields || []}
//         />
//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';
import ExpandableTable from './ExpandableTable';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './DataWrapper.module.css';

export default function DataWrapper2({ 
  data,
  config = {
    displayColumns: [], // Controls what columns are shown
    copyableFields: [], // Fields that can be copied
    nestedCopyableFields: [], // Content fields that can be copied
    searchableFields: [] // Fields to search in
  },
  searchable=true
}) {
  const [selectedSections, setSelectedSections] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract valid section keys (must be arrays)
  const sections = useMemo(
    () => Object.keys(data).filter((key) => Array.isArray(data[key])),
    [data]
  );

  // Process data based on selected sections and search query
  // Now we organize data by section
  const processedDataBySections = useMemo(() => {
    if (!sections.length) return {};
    
    let result = {};
    const sectionsToProcess = selectedSections.length > 0 ? selectedSections : sections;

    // Process each section separately
    sectionsToProcess.forEach((section) => {
      if (data[section] && Array.isArray(data[section])) {
        let sectionData = data[section].map(item => ({
          id: item.id || Math.random().toString(36).substr(2, 9),
          ...item
        }));
        
        // Filter based on search query if needed
        if (searchQuery && config.searchableFields.length > 0) {
          sectionData = sectionData.filter((item) =>
            config.searchableFields.some((field) => {
              const value = item[field];
              return value != null && 
                String(value).toLowerCase().includes(searchQuery.toLowerCase());
            })
          );
        }
        
        // Only add section if it has data after filtering
        if (sectionData.length > 0) {
          result[section] = sectionData;
        }
      }
    });

    return result;
  }, [data, selectedSections, sections, searchQuery, config.searchableFields]);

  const toggleSection = (section) => {
    setSelectedSections((prev) =>
      prev.includes(section) 
        ? prev.filter((s) => s !== section) 
        : [...prev, section]
    );
  };

  const deselectSection = (section) => {
    setSelectedSections((prev) => prev.filter((s) => s !== section));
  };

  const selectAll = () => setSelectedSections(sections);
  const clearAll = () => {
    setSelectedSections([]);
    setSearchQuery('');
  };

  // Don't render if no data or no display columns specified
  if (!sections.length || !config.displayColumns.length) {
    return <div className={styles.noData}>
      {!sections.length ? 'No data available' : 'No columns specified for display'}
    </div>;
  }

  // Get sections that have data after filtering
  const sectionsWithData = Object.keys(processedDataBySections);
  const hasData = sectionsWithData.length > 0;

  return (
    <div className={styles.container}>
      {/* Controls Section */}
      {searchable&&<div className={styles.topControls}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchBar}
          />
          {searchQuery && (
            <button
              className={styles.clearSearchButton}
              onClick={() => setSearchQuery('')}
              aria-label="Clear Search"
            >
              ✖
            </button>
          )}
        </div>

        <button
          onClick={selectAll}
          className={`${styles.controlButton} ${styles.selectButton}`}
        >
          Select All
        </button>
        <button
          onClick={clearAll}
          className={`${styles.controlButton} ${styles.clearButton}`}
        >
          Clear All
        </button>
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
          className={styles.chevronButton}
        >
          {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {isDropdownOpen ? 'Hide Categories' : 'Show Categories'}
        </button>
      </div>}

      {/* Dropdown Section */}
      <div
        className={`${styles.sectionButtons} ${
          isDropdownOpen ? styles.show : ''
        }`}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => toggleSection(section)}
            className={`${styles.sectionButton} ${
              selectedSections.includes(section) ? styles.active : ''
            }`}
          >
            <span className={styles.sectionText}>
              {section.replace(/_/g, ' ')}
            </span>
            {selectedSections.includes(section) && (
              <span
                className={styles.closeButton}
                onClick={(e) => {
                  e.stopPropagation();
                  deselectSection(section);
                }}
              >
                ✖
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Table Sections with Headers */}
      <div className={styles.tableWrapper}>
        {!hasData && <div className={styles.noData}>No matching data found</div>}
        
        {sectionsWithData.map((section) => (
          <div key={section} className={styles.sectionContainer}>
            <h2 className={styles.sectionHeader}>
              {section.replace(/_/g, ' ')}
            </h2>
            <ExpandableTable
              data={processedDataBySections[section]}
              includedFields={config.displayColumns}
              copyableFields={config.copyableFields || []}
              nestedCopyableFields={config.nestedCopyableFields || []}
            />
          </div>
        ))}
      </div>
    </div>
  );
}