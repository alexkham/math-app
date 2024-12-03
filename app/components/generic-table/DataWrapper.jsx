
// // // // // // // // // // // // // // 'use client';
// // // // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // // // // // // import styles from './DataWrapper.module.css';

// // // // // // // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // // // // // // //   const [processedData, setProcessedData] = useState([]);
// // // // // // // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // // // // // // // // // // // //   const sections = Object.keys(data).filter(key => Array.isArray(data[key]));

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     let result = [];
// // // // // // // // // // // // // //     const sectionsToProcess = selectedSections.length > 0
// // // // // // // // // // // // // //       ? selectedSections
// // // // // // // // // // // // // //       : sections;
    
// // // // // // // // // // // // // //     sectionsToProcess.forEach(section => {
// // // // // // // // // // // // // //       if (data[section]) {
// // // // // // // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     });
    
// // // // // // // // // // // // // //     setProcessedData(result);
// // // // // // // // // // // // // //   }, [data, selectedSections, sections]);

// // // // // // // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // // // // // // //     setSelectedSections(prev => {
// // // // // // // // // // // // // //       if (prev.includes(section)) {
// // // // // // // // // // // // // //         return prev.filter(s => s !== section);
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //       return [...prev, section];
// // // // // // // // // // // // // //     });
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const selectAll = () => {
// // // // // // // // // // // // // //     setSelectedSections(sections);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const clearAll = () => {
// // // // // // // // // // // // // //     setSelectedSections([]);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   const toggleDropdown = () => {
// // // // // // // // // // // // // //     setIsDropdownOpen(!isDropdownOpen);
// // // // // // // // // // // // // //   };

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // // // // // //       <div className={styles.controls}>
// // // // // // // // // // // // // //         <div className={styles.mainButtons}>
// // // // // // // // // // // // // //           <button onClick={selectAll} className={styles.controlButton}>Select All</button>
// // // // // // // // // // // // // //           <button onClick={clearAll} className={styles.controlButton}>Clear</button>
// // // // // // // // // // // // // //           <button onClick={toggleDropdown} className={styles.controlButton}>
// // // // // // // // // // // // // //             {isDropdownOpen ? 'Hide Sections' : 'Show Sections'}
// // // // // // // // // // // // // //           </button>
// // // // // // // // // // // // // //         </div>
        
// // // // // // // // // // // // // //         <div className={`${styles.sectionButtons} ${isDropdownOpen ? styles.show : ''}`}>
// // // // // // // // // // // // // //           {sections.map(section => (
// // // // // // // // // // // // // //             <button
// // // // // // // // // // // // // //               key={section}
// // // // // // // // // // // // // //               onClick={() => toggleSection(section)}
// // // // // // // // // // // // // //               className={`${styles.sectionButton} ${selectedSections.includes(section) ? styles.active : ''}`}
// // // // // // // // // // // // // //             >
// // // // // // // // // // // // // //               {section.replace(/_/g, ' ')}
// // // // // // // // // // // // // //             </button>
// // // // // // // // // // // // // //           ))}
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // // // // // // //         <ExpandableTable 
// // // // // // // // // // // // // //           data={processedData}
// // // // // // // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation']}
// // // // // // // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // // // // // // //         />
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </div>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }


// // // // // // // // // // // // // 'use client';
// // // // // // // // // // // // // import React, { useState, useMemo } from 'react';
// // // // // // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // // // // // import styles from './DataWrapper.module.css';

// // // // // // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState(''); // Search query state

// // // // // // // // // // // // //   const sections = useMemo(
// // // // // // // // // // // // //     () => Object.keys(data).filter(key => Array.isArray(data[key])),
// // // // // // // // // // // // //     [data]
// // // // // // // // // // // // //   );

// // // // // // // // // // // // //   const processedData = useMemo(() => {
// // // // // // // // // // // // //     let result = [];
// // // // // // // // // // // // //     const sectionsToProcess = selectedSections.length > 0
// // // // // // // // // // // // //       ? selectedSections
// // // // // // // // // // // // //       : sections;

// // // // // // // // // // // // //     sectionsToProcess.forEach(section => {
// // // // // // // // // // // // //       if (data[section]) {
// // // // // // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     });

// // // // // // // // // // // // //     // Filter based on the search query
// // // // // // // // // // // // //     return result.filter(item =>
// // // // // // // // // // // // //       Object.values(item).some(value =>
// // // // // // // // // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // // // // // //       )
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // // // // // //     setSelectedSections(prev => {
// // // // // // // // // // // // //       if (prev.includes(section)) {
// // // // // // // // // // // // //         return prev.filter(s => s !== section);
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //       return [...prev, section];
// // // // // // // // // // // // //     });
// // // // // // // // // // // // //   };

// // // // // // // // // // // // //   const selectAll = () => setSelectedSections(sections);
// // // // // // // // // // // // //   const clearAll = () => setSelectedSections([]);
// // // // // // // // // // // // //   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // // // // //       <div className={styles.controls}>
// // // // // // // // // // // // //         <div className={styles.mainButtons}>
// // // // // // // // // // // // //           <button onClick={selectAll} className={styles.controlButton}>Select All</button>
// // // // // // // // // // // // //           <button onClick={clearAll} className={styles.controlButton}>Clear</button>
// // // // // // // // // // // // //           <button onClick={toggleDropdown} className={styles.controlButton}>
// // // // // // // // // // // // //             {isDropdownOpen ? 'Hide Sections' : 'Show Sections'}
// // // // // // // // // // // // //           </button>
// // // // // // // // // // // // //         </div>

// // // // // // // // // // // // //         <input
// // // // // // // // // // // // //           type="text"
// // // // // // // // // // // // //           placeholder="Search..."
// // // // // // // // // // // // //           value={searchQuery}
// // // // // // // // // // // // //           onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // // // //           className={styles.searchBar} // Add styling in CSS
// // // // // // // // // // // // //         />

// // // // // // // // // // // // //         <div className={`${styles.sectionButtons} ${isDropdownOpen ? styles.show : ''}`}>
// // // // // // // // // // // // //           {sections.map(section => (
// // // // // // // // // // // // //             <button
// // // // // // // // // // // // //               key={section}
// // // // // // // // // // // // //               onClick={() => toggleSection(section)}
// // // // // // // // // // // // //               className={`${styles.sectionButton} ${selectedSections.includes(section) ? styles.active : ''}`}
// // // // // // // // // // // // //             >
// // // // // // // // // // // // //               {section.replace(/_/g, ' ')}
// // // // // // // // // // // // //             </button>
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // // // // // //         <ExpandableTable 
// // // // // // // // // // // // //           data={processedData}
// // // // // // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation']}
// // // // // // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // // // // // //         />
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </div>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // }
// // // // // // // // // // // // 'use client';
// // // // // // // // // // // // import React, { useState, useMemo } from 'react';
// // // // // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // // // // import styles from './DataWrapper.module.css';

// // // // // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState(''); // Search query state

// // // // // // // // // // // //   const sections = useMemo(
// // // // // // // // // // // //     () => Object.keys(data).filter(key => Array.isArray(data[key])),
// // // // // // // // // // // //     [data]
// // // // // // // // // // // //   );

// // // // // // // // // // // //   const processedData = useMemo(() => {
// // // // // // // // // // // //     let result = [];
// // // // // // // // // // // //     const sectionsToProcess = selectedSections.length > 0
// // // // // // // // // // // //       ? selectedSections
// // // // // // // // // // // //       : sections;

// // // // // // // // // // // //     sectionsToProcess.forEach(section => {
// // // // // // // // // // // //       if (data[section]) {
// // // // // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     });

// // // // // // // // // // // //     // Filter based on the search query
// // // // // // // // // // // //     return result.filter(item =>
// // // // // // // // // // // //       Object.values(item).some(value =>
// // // // // // // // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // // // // //       )
// // // // // // // // // // // //     );
// // // // // // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // // // // //     setSelectedSections(prev => {
// // // // // // // // // // // //       if (prev.includes(section)) {
// // // // // // // // // // // //         return prev.filter(s => s !== section);
// // // // // // // // // // // //       }
// // // // // // // // // // // //       return [...prev, section];
// // // // // // // // // // // //     });
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const selectAll = () => setSelectedSections(sections);

// // // // // // // // // // // //   const clearAll = () => {
// // // // // // // // // // // //     setSelectedSections([]);
// // // // // // // // // // // //     setSearchQuery(''); // Clear search bar
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

// // // // // // // // // // // //   const clearSearch = () => setSearchQuery(''); // Clear search only

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // // // //       <div className={styles.controls}>
// // // // // // // // // // // //         <div className={styles.mainButtons}>
// // // // // // // // // // // //           <button onClick={selectAll} className={styles.controlButton}>Select All</button>
// // // // // // // // // // // //           <button onClick={clearAll} className={styles.controlButton}>Clear</button>
// // // // // // // // // // // //           <button onClick={toggleDropdown} className={styles.controlButton}>
// // // // // // // // // // // //             {isDropdownOpen ? 'Hide Sections' : 'Show Sections'}
// // // // // // // // // // // //           </button>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <div className={styles.searchWrapper}>
// // // // // // // // // // // //           <input
// // // // // // // // // // // //             type="text"
// // // // // // // // // // // //             placeholder="Search..."
// // // // // // // // // // // //             value={searchQuery}
// // // // // // // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // // //             className={styles.searchBar}
// // // // // // // // // // // //           />
// // // // // // // // // // // //           {searchQuery && (
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               className={styles.clearSearchButton}
// // // // // // // // // // // //               onClick={clearSearch}
// // // // // // // // // // // //               aria-label="Clear Search"
// // // // // // // // // // // //             >
// // // // // // // // // // // //               ✖
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           )}
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //         <div className={`${styles.sectionButtons} ${isDropdownOpen ? styles.show : ''}`}>
// // // // // // // // // // // //           {sections.map(section => (
// // // // // // // // // // // //             <button
// // // // // // // // // // // //               key={section}
// // // // // // // // // // // //               onClick={() => toggleSection(section)}
// // // // // // // // // // // //               className={`${styles.sectionButton} ${selectedSections.includes(section) ? styles.active : ''}`}
// // // // // // // // // // // //             >
// // // // // // // // // // // //               {section.replace(/_/g, ' ')}
// // // // // // // // // // // //             </button>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // // // // //         <ExpandableTable 
// // // // // // // // // // // //           data={processedData}
// // // // // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation']}
// // // // // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // // // // //         />
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }
// // // // // // // // // // // // 'use client';
// // // // // // // // // // // import React, { useState, useMemo } from 'react';
// // // // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // // // import styles from './DataWrapper.module.css';

// // // // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // // // // //   const [searchQuery, setSearchQuery] = useState(''); // Search query state

// // // // // // // // // // //   const sections = useMemo(
// // // // // // // // // // //     () => Object.keys(data).filter(key => Array.isArray(data[key])),
// // // // // // // // // // //     [data]
// // // // // // // // // // //   );

// // // // // // // // // // //   const processedData = useMemo(() => {
// // // // // // // // // // //     let result = [];
// // // // // // // // // // //     const sectionsToProcess = selectedSections.length > 0
// // // // // // // // // // //       ? selectedSections
// // // // // // // // // // //       : sections;

// // // // // // // // // // //     sectionsToProcess.forEach(section => {
// // // // // // // // // // //       if (data[section]) {
// // // // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // // // //       }
// // // // // // // // // // //     });

// // // // // // // // // // //     // Filter based on the search query
// // // // // // // // // // //     return result.filter(item =>
// // // // // // // // // // //       Object.values(item).some(value =>
// // // // // // // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // // // //       )
// // // // // // // // // // //     );
// // // // // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // // // //     setSelectedSections((prev) => {
// // // // // // // // // // //       if (prev.includes(section)) {
// // // // // // // // // // //         return prev.filter((s) => s !== section);
// // // // // // // // // // //       }
// // // // // // // // // // //       return [...prev, section];
// // // // // // // // // // //     });
// // // // // // // // // // //   };

// // // // // // // // // // //   const selectAll = () => setSelectedSections(sections);

// // // // // // // // // // //   const clearAll = () => {
// // // // // // // // // // //     setSelectedSections([]);
// // // // // // // // // // //     setSearchQuery(''); // Clear search bar
// // // // // // // // // // //   };

// // // // // // // // // // //   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

// // // // // // // // // // //   const clearSearch = () => setSearchQuery(''); // Clear search only

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // // //       {/* Controls Section */}
// // // // // // // // // // //       <div className={styles.topControls}>
// // // // // // // // // // //         {/* Search Bar */}
// // // // // // // // // // //         <div className={styles.searchWrapper}>
// // // // // // // // // // //           <input
// // // // // // // // // // //             type="text"
// // // // // // // // // // //             placeholder="Search..."
// // // // // // // // // // //             value={searchQuery}
// // // // // // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // // //             className={styles.searchBar}
// // // // // // // // // // //           />
// // // // // // // // // // //           {searchQuery && (
// // // // // // // // // // //             <button
// // // // // // // // // // //               className={styles.clearSearchButton}
// // // // // // // // // // //               onClick={clearSearch}
// // // // // // // // // // //               aria-label="Clear Search"
// // // // // // // // // // //             >
// // // // // // // // // // //               ✖
// // // // // // // // // // //             </button>
// // // // // // // // // // //           )}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         {/* Main Buttons */}
// // // // // // // // // // //         <button onClick={selectAll} className={`${styles.controlButton} ${styles.selectButton}`}>
// // // // // // // // // // //           Select All
// // // // // // // // // // //         </button>
// // // // // // // // // // //         <button onClick={clearAll} className={`${styles.controlButton} ${styles.clearButton}`}>
// // // // // // // // // // //           Clear All
// // // // // // // // // // //         </button>
// // // // // // // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // // // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // // // // // // //           Sections
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Dropdown Section */}
// // // // // // // // // // //       <div className={`${styles.sectionButtons} ${isDropdownOpen ? styles.show : ''}`}>
// // // // // // // // // // //         {sections.map((section) => (
// // // // // // // // // // //           <button
// // // // // // // // // // //             key={section}
// // // // // // // // // // //             onClick={() => toggleSection(section)}
// // // // // // // // // // //             className={`${styles.sectionButton} ${selectedSections.includes(section) ? styles.active : ''}`}
// // // // // // // // // // //           >
// // // // // // // // // // //             {section.replace(/_/g, ' ')}
// // // // // // // // // // //           </button>
// // // // // // // // // // //         ))}
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Table Section */}
// // // // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // // // //         <ExpandableTable
// // // // // // // // // // //           data={processedData}
// // // // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation']}
// // // // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // // // //         />
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }


// // // // // // // // // // import React, { useState, useMemo } from 'react';
// // // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // // import styles from './DataWrapper.module.css';
// // // // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');

// // // // // // // // // //   // Extract section keys
// // // // // // // // // //   const sections = useMemo(
// // // // // // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // // // // // //     [data]
// // // // // // // // // //   );

// // // // // // // // // //   // Process data based on selected sections and search query
// // // // // // // // // //   const processedData = useMemo(() => {
// // // // // // // // // //     let result = [];
// // // // // // // // // //     const sectionsToProcess =
// // // // // // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // // // // // //     sectionsToProcess.forEach((section) => {
// // // // // // // // // //       if (data[section]) {
// // // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // // //       }
// // // // // // // // // //     });

// // // // // // // // // //     // Ensure `result` has the structure expected by `ExpandableTable`
// // // // // // // // // //     return result
// // // // // // // // // //       .filter((item) =>
// // // // // // // // // //         Object.values(item).some((value) =>
// // // // // // // // // //           String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // // //         )
// // // // // // // // // //       )
// // // // // // // // // //       .map((row) => ({
// // // // // // // // // //         id: row.id || Math.random().toString(36).substr(2, 9), // Ensure unique IDs
// // // // // // // // // //         ...row,
// // // // // // // // // //       }));
// // // // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // // //     setSelectedSections((prev) =>
// // // // // // // // // //       prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
// // // // // // // // // //     );
// // // // // // // // // //   };

// // // // // // // // // //   const selectAll = () => setSelectedSections(sections);

// // // // // // // // // //   const clearAll = () => {
// // // // // // // // // //     setSelectedSections([]);
// // // // // // // // // //     setSearchQuery('');
// // // // // // // // // //   };

// // // // // // // // // //   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

// // // // // // // // // //   const clearSearch = () => setSearchQuery('');

// // // // // // // // // //   return (
// // // // // // // // // //     <div className={styles.container}>
// // // // // // // // // //       {/* Controls Section */}
// // // // // // // // // //       <div className={styles.topControls}>
// // // // // // // // // //         {/* Search Bar */}
// // // // // // // // // //         <div className={styles.searchWrapper}>
// // // // // // // // // //           <input
// // // // // // // // // //             type="text"
// // // // // // // // // //             placeholder="Search..."
// // // // // // // // // //             value={searchQuery}
// // // // // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // //             className={styles.searchBar}
// // // // // // // // // //           />
// // // // // // // // // //           {searchQuery && (
// // // // // // // // // //             <button
// // // // // // // // // //               className={styles.clearSearchButton}
// // // // // // // // // //               onClick={clearSearch}
// // // // // // // // // //               aria-label="Clear Search"
// // // // // // // // // //             >
// // // // // // // // // //               ✖
// // // // // // // // // //             </button>
// // // // // // // // // //           )}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Main Buttons */}
// // // // // // // // // //         <button
// // // // // // // // // //           onClick={selectAll}
// // // // // // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // // // // // //         >
// // // // // // // // // //           Select All
// // // // // // // // // //         </button>
// // // // // // // // // //         <button
// // // // // // // // // //           onClick={clearAll}
// // // // // // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // // // // // //         >
// // // // // // // // // //           Clear All
// // // // // // // // // //         </button>
// // // // // // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // // // // // //           Sections
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Dropdown Section */}
// // // // // // // // // //       <div
// // // // // // // // // //         className={`${styles.sectionButtons} ${
// // // // // // // // // //           isDropdownOpen ? styles.show : ''
// // // // // // // // // //         }`}
// // // // // // // // // //       >
// // // // // // // // // //         {sections.map((section) => (
// // // // // // // // // //           <button
// // // // // // // // // //             key={section}
// // // // // // // // // //             onClick={() => toggleSection(section)}
// // // // // // // // // //             className={`${styles.sectionButton} ${
// // // // // // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // // // // // //             }`}
// // // // // // // // // //           >
// // // // // // // // // //             {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // // // // // //           </button>
// // // // // // // // // //         ))}
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Table Section */}
// // // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // // //         <ExpandableTable
// // // // // // // // // //           data={processedData}
// // // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']} // Ensure fields align with child expectations
// // // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // // //           nestedCopyableFields={['content']}
// // // // // // // // // //         />
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // }


// // // // // // // // // import React, { useState, useMemo } from 'react';
// // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // import styles from './DataWrapper.module.css';
// // // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');

// // // // // // // // //   // Extract section keys
// // // // // // // // //   const sections = useMemo(
// // // // // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // // // // //     [data]
// // // // // // // // //   );

// // // // // // // // //   // Process data based on selected sections and search query
// // // // // // // // //   const processedData = useMemo(() => {
// // // // // // // // //     let result = [];
// // // // // // // // //     const sectionsToProcess =
// // // // // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // // // // //     sectionsToProcess.forEach((section) => {
// // // // // // // // //       if (data[section]) {
// // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // //       }
// // // // // // // // //     });

// // // // // // // // //     // Ensure `result` has the structure expected by `ExpandableTable`
// // // // // // // // //     return result
// // // // // // // // //       .filter((item) =>
// // // // // // // // //         Object.values(item).some((value) =>
// // // // // // // // //           String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // //         )
// // // // // // // // //       )
// // // // // // // // //       .map((row) => ({
// // // // // // // // //         id: row.id || Math.random().toString(36).substr(2, 9), // Ensure unique IDs
// // // // // // // // //         ...row,
// // // // // // // // //       }));
// // // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // //     setSelectedSections((prev) =>
// // // // // // // // //       prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   const selectAll = () => setSelectedSections(sections);

// // // // // // // // //   const clearAll = () => {
// // // // // // // // //     setSelectedSections([]);
// // // // // // // // //     setSearchQuery('');
// // // // // // // // //   };

// // // // // // // // //   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

// // // // // // // // //   const clearSearch = () => setSearchQuery('');

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.container}>
// // // // // // // // //       {/* Controls Section */}
// // // // // // // // //       <div className={styles.topControls}>
// // // // // // // // //         {/* Search Bar */}
// // // // // // // // //         <div className={styles.searchWrapper}>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             placeholder="Search..."
// // // // // // // // //             value={searchQuery}
// // // // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // //             className={styles.searchBar}
// // // // // // // // //           />
// // // // // // // // //           {searchQuery && (
// // // // // // // // //             <button
// // // // // // // // //               className={styles.clearSearchButton}
// // // // // // // // //               onClick={clearSearch}
// // // // // // // // //               aria-label="Clear Search"
// // // // // // // // //             >
// // // // // // // // //               ✖
// // // // // // // // //             </button>
// // // // // // // // //           )}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Main Buttons */}
// // // // // // // // //         <button
// // // // // // // // //           onClick={selectAll}
// // // // // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // // // // //         >
// // // // // // // // //           Select All
// // // // // // // // //         </button>
// // // // // // // // //         <button
// // // // // // // // //           onClick={clearAll}
// // // // // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // // // // //         >
// // // // // // // // //           Clear All
// // // // // // // // //         </button>
// // // // // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // // // // //           Sections
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Dropdown Section */}
// // // // // // // // //       <div
// // // // // // // // //         className={`${styles.sectionButtons} ${
// // // // // // // // //           isDropdownOpen ? styles.show : ''
// // // // // // // // //         }`}
// // // // // // // // //       >
// // // // // // // // //         {sections.map((section) => (
// // // // // // // // //           <button
// // // // // // // // //             key={section}
// // // // // // // // //             onClick={() => toggleSection(section)}
// // // // // // // // //             className={`${styles.sectionButton} ${
// // // // // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // // // // //             }`}
// // // // // // // // //           >
// // // // // // // // //             {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // // // // //             {selectedSections.includes(section) && (
// // // // // // // // //               <span
// // // // // // // // //                 className={styles.closeButton}
// // // // // // // // //                 onClick={(e) => {
// // // // // // // // //                   e.stopPropagation();
// // // // // // // // //                   toggleSection(section);
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 ✖
// // // // // // // // //               </span>
// // // // // // // // //             )}
// // // // // // // // //           </button>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Table Section */}
// // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // //         <ExpandableTable
// // // // // // // // //           data={processedData}
// // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']} // Ensure fields align with child expectations
// // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // //           nestedCopyableFields={['content']}
// // // // // // // // //         />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // // import React, { useState, useMemo } from 'react';
// // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // import styles from './DataWrapper.module.css';
// // // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');

// // // // // // // // //   // Extract section keys
// // // // // // // // //   const sections = useMemo(
// // // // // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // // // // //     [data]
// // // // // // // // //   );

// // // // // // // // //   // Process data based on selected sections and search query
// // // // // // // // //   const processedData = useMemo(() => {
// // // // // // // // //     let result = [];
// // // // // // // // //     const sectionsToProcess =
// // // // // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // // // // //     sectionsToProcess.forEach((section) => {
// // // // // // // // //       if (data[section]) {
// // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // //       }
// // // // // // // // //     });

// // // // // // // // //     // Ensure `result` has the structure expected by `ExpandableTable`
// // // // // // // // //     return result
// // // // // // // // //       .filter((item) =>
// // // // // // // // //         Object.values(item).some((value) =>
// // // // // // // // //           String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // //         )
// // // // // // // // //       )
// // // // // // // // //       .map((row) => ({
// // // // // // // // //         id: row.id || Math.random().toString(36).substr(2, 9), // Ensure unique IDs
// // // // // // // // //         ...row,
// // // // // // // // //       }));
// // // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // //     setSelectedSections((prev) =>
// // // // // // // // //       prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
// // // // // // // // //     );
// // // // // // // // //   };

// // // // // // // // //   const selectAll = () => setSelectedSections(sections);

// // // // // // // // //   const clearAll = () => {
// // // // // // // // //     setSelectedSections([]);
// // // // // // // // //     setSearchQuery('');
// // // // // // // // //   };

// // // // // // // // //   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

// // // // // // // // //   const clearSearch = () => setSearchQuery('');

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.container}>
// // // // // // // // //       {/* Controls Section */}
// // // // // // // // //       <div className={styles.topControls}>
// // // // // // // // //         {/* Search Bar */}
// // // // // // // // //         <div className={styles.searchWrapper}>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             placeholder="Search..."
// // // // // // // // //             value={searchQuery}
// // // // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // //             className={styles.searchBar}
// // // // // // // // //           />
// // // // // // // // //           {searchQuery && (
// // // // // // // // //             <button
// // // // // // // // //               className={styles.clearSearchButton}
// // // // // // // // //               onClick={clearSearch}
// // // // // // // // //               aria-label="Clear Search"
// // // // // // // // //             >
// // // // // // // // //               ✖
// // // // // // // // //             </button>
// // // // // // // // //           )}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Main Buttons */}
// // // // // // // // //         <button
// // // // // // // // //           onClick={selectAll}
// // // // // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // // // // //         >
// // // // // // // // //           Select All
// // // // // // // // //         </button>
// // // // // // // // //         <button
// // // // // // // // //           onClick={clearAll}
// // // // // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // // // // //         >
// // // // // // // // //           Clear All
// // // // // // // // //         </button>
// // // // // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // // // // //           Sections
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Dropdown Section */}
// // // // // // // // //       <div
// // // // // // // // //         className={`${styles.sectionButtons} ${
// // // // // // // // //           isDropdownOpen ? styles.show : ''
// // // // // // // // //         }`}
// // // // // // // // //       >
// // // // // // // // //         {sections.map((section) => (
// // // // // // // // //           <button
// // // // // // // // //             key={section}
// // // // // // // // //             onClick={() => toggleSection(section)}
// // // // // // // // //             className={`${styles.sectionButton} ${
// // // // // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // // // // //             }`}
// // // // // // // // //           >
// // // // // // // // //             <span className={styles.sectionText}>
// // // // // // // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // // // // //             </span>
// // // // // // // // //             {selectedSections.includes(section) && (
// // // // // // // // //               <span
// // // // // // // // //                 className={styles.closeButton}
// // // // // // // // //                 onClick={(e) => {
// // // // // // // // //                   e.stopPropagation(); // Prevent triggering the parent button click
// // // // // // // // //                   toggleSection(section);
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 ✖
// // // // // // // // //               </span>
// // // // // // // // //             )}
// // // // // // // // //           </button>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Table Section */}
// // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // //         <ExpandableTable
// // // // // // // // //           data={processedData}
// // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']} // Ensure fields align with child expectations
// // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // //           nestedCopyableFields={['content']}
// // // // // // // // //         />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // // import React, { useState, useMemo, useEffect } from 'react';
// // // // // // // // // import { useRouter } from 'next/router';
// // // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // // import styles from './DataWrapper.module.css';
// // // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // // //   const router = useRouter();
// // // // // // // // //   const { sections: querySections } = router.query;

// // // // // // // // //   // Local state for selected sections
// // // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // // //   // Local state for search query
// // // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // // // // // // //   // Extract section keys
// // // // // // // // //   const sections = useMemo(
// // // // // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // // // // //     [data]
// // // // // // // // //   );

// // // // // // // // //   // Sync local state with the URL query on initial page load
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (querySections) {
// // // // // // // // //       setSelectedSections(querySections.split(','));
// // // // // // // // //     }
// // // // // // // // //   }, [querySections]);

// // // // // // // // //   // Process data based on selected sections and search query
// // // // // // // // //   const processedData = useMemo(() => {
// // // // // // // // //     const sectionsToProcess =
// // // // // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // // // // //     let result = [];
// // // // // // // // //     sectionsToProcess.forEach((section) => {
// // // // // // // // //       if (data[section]) {
// // // // // // // // //         result = result.concat(data[section]);
// // // // // // // // //       }
// // // // // // // // //     });

// // // // // // // // //     // Apply search query filtering
// // // // // // // // //     return result.filter((item) =>
// // // // // // // // //       Object.values(item).some((value) =>
// // // // // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // // //       )
// // // // // // // // //     );
// // // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // // //   // Update state and the URL when a section is toggled
// // // // // // // // //   const toggleSection = (section) => {
// // // // // // // // //     const updatedSections = selectedSections.includes(section)
// // // // // // // // //       ? selectedSections.filter((s) => s !== section) // Remove the section
// // // // // // // // //       : [...selectedSections, section]; // Add the section

// // // // // // // // //     // Update local state
// // // // // // // // //     setSelectedSections(updatedSections);

// // // // // // // // //     // Update the URL query
// // // // // // // // //     const queryString = updatedSections.length > 0 ? `?sections=${updatedSections.join(',')}` : '';
// // // // // // // // //     router.push(`/symbols${queryString}`, undefined, { shallow: true });
// // // // // // // // //   };

// // // // // // // // //   // Clear all sections
// // // // // // // // //   const clearAll = () => {
// // // // // // // // //     setSelectedSections([]); // Reset state
// // // // // // // // //     setSearchQuery(''); // Reset search query
// // // // // // // // //     router.push('/symbols', undefined, { shallow: true }); // Reset URL
// // // // // // // // //   };

// // // // // // // // //   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Keep existing dropdown behavior
// // // // // // // // //   const clearSearch = () => setSearchQuery(''); // Clear the search input

// // // // // // // // //   return (
// // // // // // // // //     <div className={styles.container}>
// // // // // // // // //       {/* Controls Section */}
// // // // // // // // //       <div className={styles.topControls}>
// // // // // // // // //         <div className={styles.searchWrapper}>
// // // // // // // // //           <input
// // // // // // // // //             type="text"
// // // // // // // // //             placeholder="Search..."
// // // // // // // // //             value={searchQuery}
// // // // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // //             className={styles.searchBar}
// // // // // // // // //           />
// // // // // // // // //           {searchQuery && (
// // // // // // // // //             <button
// // // // // // // // //               className={styles.clearSearchButton}
// // // // // // // // //               onClick={clearSearch}
// // // // // // // // //               aria-label="Clear Search"
// // // // // // // // //             >
// // // // // // // // //               ✖
// // // // // // // // //             </button>
// // // // // // // // //           )}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Main Buttons */}
// // // // // // // // //         <button
// // // // // // // // //           onClick={() => {}}
// // // // // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // // // // //         >
// // // // // // // // //           Select All
// // // // // // // // //         </button>
// // // // // // // // //         <button
// // // // // // // // //           onClick={clearAll}
// // // // // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // // // // //         >
// // // // // // // // //           Clear All
// // // // // // // // //         </button>
      
// // // // // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // // // // //           Sections
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Dropdown Section */}
// // // // // // // // //       <div
// // // // // // // // //         className={`${styles.sectionButtons} ${
// // // // // // // // //           isDropdownOpen ? styles.show : ''
// // // // // // // // //         }`}
// // // // // // // // //       >
// // // // // // // // //         {sections.map((section) => (
// // // // // // // // //           <button
// // // // // // // // //             key={section}
// // // // // // // // //             onClick={() => toggleSection(section)}
// // // // // // // // //             className={`${styles.sectionButton} ${
// // // // // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // // // // //             }`}
// // // // // // // // //           >
// // // // // // // // //             <span className={styles.sectionText}>
// // // // // // // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // // // // //             </span>
// // // // // // // // //             {selectedSections.includes(section) && (
// // // // // // // // //               <span
// // // // // // // // //                 className={styles.closeButton}
// // // // // // // // //                 onClick={(e) => {
// // // // // // // // //                   e.stopPropagation();
// // // // // // // // //                   toggleSection(section);
// // // // // // // // //                 }}
// // // // // // // // //               >
// // // // // // // // //                 ✖
// // // // // // // // //               </span>
// // // // // // // // //             )}
// // // // // // // // //           </button>
// // // // // // // // //         ))}
// // // // // // // // //       </div>

// // // // // // // // //       {/* Table Section */}
// // // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // // //         <ExpandableTable
// // // // // // // // //           data={processedData}
// // // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // // //           nestedCopyableFields={['content']}
// // // // // // // // //         />
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // import React, { useState, useMemo, useEffect } from 'react';
// // // // // // // // import { useRouter } from 'next/router';
// // // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // // import styles from './DataWrapper.module.css';
// // // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // // // export default function DataWrapper({ data }) {
// // // // // // // //   const router = useRouter();
// // // // // // // //   const { sections: querySections } = router.query;

// // // // // // // //   // Local state for selected sections
// // // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // // //   // Local state for search query
// // // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // // // // // //   // Extract section keys
// // // // // // // //   const sections = useMemo(
// // // // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // // // //     [data]
// // // // // // // //   );

// // // // // // // //   // Sync local state with the URL query on initial page load
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (querySections) {
// // // // // // // //       setSelectedSections(querySections.split(','));
// // // // // // // //     }
// // // // // // // //   }, [querySections]);

// // // // // // // //   // Process data based on selected sections and search query
// // // // // // // //   const processedData = useMemo(() => {
// // // // // // // //     const sectionsToProcess =
// // // // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // // // //     let result = [];
// // // // // // // //     sectionsToProcess.forEach((section) => {
// // // // // // // //       if (data[section]) {
// // // // // // // //         result = result.concat(data[section]);
// // // // // // // //       }
// // // // // // // //     });

// // // // // // // //     // Apply search query filtering
// // // // // // // //     return result.filter((item) =>
// // // // // // // //       Object.values(item).some((value) =>
// // // // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // // //       )
// // // // // // // //     );
// // // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // // //   // Update state and the URL when a section is toggled
// // // // // // // //   const toggleSection = (section) => {
// // // // // // // //     const updatedSections = selectedSections.includes(section)
// // // // // // // //       ? selectedSections.filter((s) => s !== section) // Remove the section
// // // // // // // //       : [...selectedSections, section]; // Add the section

// // // // // // // //     // Update local state
// // // // // // // //     setSelectedSections(updatedSections);

// // // // // // // //     // Update the URL query
// // // // // // // //     const queryString = updatedSections.length > 0 ? `?sections=${updatedSections.join(',')}` : '';
// // // // // // // //     router.push(`/symbols${queryString}`, undefined, { shallow: true });
// // // // // // // //   };

// // // // // // // //   // Select all sections
// // // // // // // //   const selectAll = () => {
// // // // // // // //     setSelectedSections(sections);
// // // // // // // //     const queryString = `?sections=${sections.join(',')}`;
// // // // // // // //     router.push(`/symbols${queryString}`, undefined, { shallow: true });
// // // // // // // //   };

// // // // // // // //   // Clear all sections
// // // // // // // //   const clearAll = () => {
// // // // // // // //     setSelectedSections([]); // Reset state
// // // // // // // //     setSearchQuery(''); // Reset search query
// // // // // // // //     router.push('/symbols', undefined, { shallow: true }); // Reset URL
// // // // // // // //   };

// // // // // // // //   // Toggle dropdown visibility
// // // // // // // //   const toggleDropdown = () => {
// // // // // // // //     setIsDropdownOpen((prev) => !prev);
// // // // // // // //   };

// // // // // // // //   // Clear the search query
// // // // // // // //   const clearSearch = () => setSearchQuery('');

// // // // // // // //   return (
// // // // // // // //     <div className={styles.container}>
// // // // // // // //       {/* Controls Section */}
// // // // // // // //       <div className={styles.topControls}>
// // // // // // // //         <div className={styles.searchWrapper}>
// // // // // // // //           <input
// // // // // // // //             type="text"
// // // // // // // //             placeholder="Search..."
// // // // // // // //             value={searchQuery}
// // // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // //             className={styles.searchBar}
// // // // // // // //           />
// // // // // // // //           {searchQuery && (
// // // // // // // //             <button
// // // // // // // //               className={styles.clearSearchButton}
// // // // // // // //               onClick={clearSearch}
// // // // // // // //               aria-label="Clear Search"
// // // // // // // //             >
// // // // // // // //               ✖
// // // // // // // //             </button>
// // // // // // // //           )}
// // // // // // // //         </div>

// // // // // // // //         {/* Main Buttons */}
// // // // // // // //         <button
// // // // // // // //           onClick={selectAll}
// // // // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // // // //         >
// // // // // // // //           Select All
// // // // // // // //         </button>
// // // // // // // //         <button
// // // // // // // //           onClick={clearAll}
// // // // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // // // //         >
// // // // // // // //           Clear All
// // // // // // // //         </button>

// // // // // // // //         {/* Dropdown Toggle */}
// // // // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // // // //           Sections
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Dropdown Section */}
// // // // // // // //       <div
// // // // // // // //         className={`${styles.sectionButtons} ${
// // // // // // // //           isDropdownOpen ? styles.show : styles.hide
// // // // // // // //         }`}
// // // // // // // //       >
// // // // // // // //         {sections.map((section) => (
// // // // // // // //           <button
// // // // // // // //             key={section}
// // // // // // // //             onClick={() => toggleSection(section)}
// // // // // // // //             className={`${styles.sectionButton} ${
// // // // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // // // //             }`}
// // // // // // // //           >
// // // // // // // //             <span className={styles.sectionText}>
// // // // // // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // // // //             </span>
// // // // // // // //             {selectedSections.includes(section) && (
// // // // // // // //               <span
// // // // // // // //                 className={styles.closeButton}
// // // // // // // //                 onClick={(e) => {
// // // // // // // //                   e.stopPropagation();
// // // // // // // //                   toggleSection(section);
// // // // // // // //                 }}
// // // // // // // //               >
// // // // // // // //                 ✖
// // // // // // // //               </span>
// // // // // // // //             )}
// // // // // // // //           </button>
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Table Section */}
// // // // // // // //       <div className={styles.tableWrapper}>
// // // // // // // //         <ExpandableTable
// // // // // // // //           data={processedData}
// // // // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // // //           nestedCopyableFields={['content']}
// // // // // // // //         />
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import React, { useState, useMemo, useEffect } from 'react';
// // // // // // // import { useRouter } from 'next/router';
// // // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // // import styles from './DataWrapper.module.css';
// // // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // // export default function DataWrapper({ data }) {
// // // // // // //   const router = useRouter();
// // // // // // //   const { sections: querySections } = router.query;

// // // // // // //   // Local state for selected sections
// // // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // // //   // Local state for search query
// // // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // // // // //   // Extract section keys
// // // // // // //   const sections = useMemo(
// // // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // // //     [data]
// // // // // // //   );

// // // // // // //   // Sync local state with the URL query on initial page load
// // // // // // //   useEffect(() => {
// // // // // // //     if (querySections) {
// // // // // // //       setSelectedSections(querySections.split(','));
// // // // // // //     }
// // // // // // //   }, [querySections]);

// // // // // // //   // Process data based on selected sections and search query
// // // // // // //   const processedData = useMemo(() => {
// // // // // // //     const sectionsToProcess =
// // // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // // //     let result = [];
// // // // // // //     sectionsToProcess.forEach((section) => {
// // // // // // //       if (data[section]) {
// // // // // // //         result = result.concat(data[section]);
// // // // // // //       }
// // // // // // //     });

// // // // // // //     // Apply search query filtering
// // // // // // //     return result.filter((item) =>
// // // // // // //       Object.values(item).some((value) =>
// // // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // // //       )
// // // // // // //     );
// // // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // // //   // Update state and the URL when a section is toggled
// // // // // // //   const toggleSection = (section) => {
// // // // // // //     const updatedSections = selectedSections.includes(section)
// // // // // // //       ? selectedSections.filter((s) => s !== section) // Remove the section
// // // // // // //       : [...selectedSections, section]; // Add the section

// // // // // // //     // Update local state
// // // // // // //     setSelectedSections(updatedSections);

// // // // // // //     // Update the URL query
// // // // // // //     const queryString = updatedSections.length > 0 ? `?sections=${updatedSections.join(',')}` : '';
// // // // // // //     router.push(`/symbols${queryString}`, undefined, { shallow: true });
// // // // // // //   };

// // // // // // //   // Select all sections
// // // // // // //   const selectAll = () => {
// // // // // // //     setSelectedSections(sections);
// // // // // // //     const queryString = `?sections=${sections.join(',')}`;
// // // // // // //     router.push(`/symbols${queryString}`, undefined, { shallow: true });
// // // // // // //   };

// // // // // // //   // Clear all selections
// // // // // // //   const clearAll = () => {
// // // // // // //     // Reset state
// // // // // // //     setSelectedSections([]);
// // // // // // //     setSearchQuery('');

// // // // // // //     // Update URL to remove `sections` from the query without navigation
// // // // // // //     router.replace(
// // // // // // //       {
// // // // // // //         pathname: router.pathname,
// // // // // // //         query: {}, // Remove all query parameters (or keep others if needed)
// // // // // // //       },
// // // // // // //       undefined,
// // // // // // //       { shallow: true }
// // // // // // //     );
// // // // // // //   };

// // // // // // //   // Toggle dropdown visibility
// // // // // // //   const toggleDropdown = () => {
// // // // // // //     setIsDropdownOpen((prev) => !prev);
// // // // // // //   };

// // // // // // //   // Clear the search query
// // // // // // //   const clearSearch = () => setSearchQuery('');

// // // // // // //   return (
// // // // // // //     <div className={styles.container}>
// // // // // // //       {/* Controls Section */}
// // // // // // //       <div className={styles.topControls}>
// // // // // // //         <div className={styles.searchWrapper}>
// // // // // // //           <input
// // // // // // //             type="text"
// // // // // // //             placeholder="Search..."
// // // // // // //             value={searchQuery}
// // // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // //             className={styles.searchBar}
// // // // // // //           />
// // // // // // //           {searchQuery && (
// // // // // // //             <button
// // // // // // //               className={styles.clearSearchButton}
// // // // // // //               onClick={clearSearch}
// // // // // // //               aria-label="Clear Search"
// // // // // // //             >
// // // // // // //               ✖
// // // // // // //             </button>
// // // // // // //           )}
// // // // // // //         </div>

// // // // // // //         {/* Main Buttons */}
// // // // // // //         <button
// // // // // // //           onClick={selectAll}
// // // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // // //         >
// // // // // // //           Select All
// // // // // // //         </button>
// // // // // // //         <button
// // // // // // //           onClick={clearAll}
// // // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // // //         >
// // // // // // //           Clear All
// // // // // // //         </button>

// // // // // // //         {/* Dropdown Toggle */}
// // // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // // //           Sections
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Dropdown Section */}
// // // // // // //       <div
// // // // // // //         className={`${styles.sectionButtons} ${
// // // // // // //           isDropdownOpen ? styles.show : styles.hide
// // // // // // //         }`}
// // // // // // //       >
// // // // // // //         {sections.map((section) => (
// // // // // // //           <button
// // // // // // //             key={section}
// // // // // // //             onClick={() => toggleSection(section)}
// // // // // // //             className={`${styles.sectionButton} ${
// // // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // // //             }`}
// // // // // // //           >
// // // // // // //             <span className={styles.sectionText}>
// // // // // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // // //             </span>
// // // // // // //             {selectedSections.includes(section) && (
// // // // // // //               <span
// // // // // // //                 className={styles.closeButton}
// // // // // // //                 onClick={(e) => {
// // // // // // //                   e.stopPropagation();
// // // // // // //                   toggleSection(section);
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 ✖
// // // // // // //               </span>
// // // // // // //             )}
// // // // // // //           </button>
// // // // // // //         ))}
// // // // // // //       </div>

// // // // // // //       {/* Table Section */}
// // // // // // //       <div className={styles.tableWrapper}>
// // // // // // //         <ExpandableTable
// // // // // // //           data={processedData}
// // // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // // //           nestedCopyableFields={['content']}
// // // // // // //         />
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import React, { useState, useMemo, useEffect } from 'react';
// // // // // // import { useRouter } from 'next/router';
// // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // import styles from './DataWrapper.module.css';
// // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // export default function DataWrapper({ data }) {
// // // // // //   const router = useRouter();
// // // // // //   const { sections: querySections } = router.query;

// // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // // // //   const sections = useMemo(
// // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // //     [data]
// // // // // //   );

// // // // // //   useEffect(() => {
// // // // // //     if (querySections) {
// // // // // //       setSelectedSections(querySections.split(','));
// // // // // //     }
// // // // // //   }, [querySections]);

// // // // // //   const processedData = useMemo(() => {
// // // // // //     const sectionsToProcess =
// // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // //     let result = [];
// // // // // //     sectionsToProcess.forEach((section) => {
// // // // // //       if (data[section]) {
// // // // // //         result = result.concat(data[section]);
// // // // // //       }
// // // // // //     });

// // // // // //     return result.filter((item) =>
// // // // // //       Object.values(item).some((value) =>
// // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // //       )
// // // // // //     );
// // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // //   const toggleSection = (section) => {
// // // // // //     const updatedSections = selectedSections.includes(section)
// // // // // //       ? selectedSections.filter((s) => s !== section)
// // // // // //       : [...selectedSections, section];

// // // // // //     setSelectedSections(updatedSections);

// // // // // //     const queryString = updatedSections.length > 0 ? `?sections=${updatedSections.join(',')}` : '';
// // // // // //     router.push(
// // // // // //       {
// // // // // //         pathname: '/symbols',
// // // // // //         query: { sections: updatedSections.join(',') },
// // // // // //       },
// // // // // //       undefined,
// // // // // //       { shallow: true }
// // // // // //     );
// // // // // //   };

// // // // // //   const selectAll = () => {
// // // // // //     setSelectedSections(sections);

// // // // // //     router.push(
// // // // // //       {
// // // // // //         pathname: '/symbols',
// // // // // //         query: { sections: sections.join(',') },
// // // // // //       },
// // // // // //       undefined,
// // // // // //       { shallow: true }
// // // // // //     );
// // // // // //   };

// // // // // //   const clearAll = () => {
// // // // // //     setSelectedSections([]);
// // // // // //     setSearchQuery('');

// // // // // //     router.replace(
// // // // // //       {
// // // // // //         pathname: router.pathname,
// // // // // //         query: {},
// // // // // //       },
// // // // // //       undefined,
// // // // // //       { shallow: true }
// // // // // //     );
// // // // // //   };

// // // // // //   const toggleDropdown = () => {
// // // // // //     setIsDropdownOpen((prev) => !prev);
// // // // // //   };

// // // // // //   const clearSearch = () => setSearchQuery('');

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <div className={styles.topControls}>
// // // // // //         <div className={styles.searchWrapper}>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search..."
// // // // // //             value={searchQuery}
// // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //             className={styles.searchBar}
// // // // // //           />
// // // // // //           {searchQuery && (
// // // // // //             <button
// // // // // //               className={styles.clearSearchButton}
// // // // // //               onClick={clearSearch}
// // // // // //               aria-label="Clear Search"
// // // // // //             >
// // // // // //               ✖
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <button
// // // // // //           onClick={selectAll}
// // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // //         >
// // // // // //           Select All
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={clearAll}
// // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // //         >
// // // // // //           Clear All
// // // // // //         </button>

// // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // //           Sections
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div
// // // // // //         className={`${styles.sectionButtons} ${
// // // // // //           isDropdownOpen ? styles.show : styles.hide
// // // // // //         }`}
// // // // // //       >
// // // // // //         {sections.map((section) => (
// // // // // //           <button
// // // // // //             key={section}
// // // // // //             onClick={() => toggleSection(section)}
// // // // // //             className={`${styles.sectionButton} ${
// // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // //             }`}
// // // // // //           >
// // // // // //             <span className={styles.sectionText}>
// // // // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // //             </span>
// // // // // //             {selectedSections.includes(section) && (
// // // // // //               <span
// // // // // //                 className={styles.closeButton}
// // // // // //                 onClick={(e) => {
// // // // // //                   e.stopPropagation();
// // // // // //                   toggleSection(section);
// // // // // //                 }}
// // // // // //               >
// // // // // //                 ✖
// // // // // //               </span>
// // // // // //             )}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <div className={styles.tableWrapper}>
// // // // // //         <ExpandableTable
// // // // // //           data={processedData}
// // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // //           nestedCopyableFields={['content']}
// // // // // //         />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // // import React, { useState, useMemo, useEffect } from 'react';
// // // // // // import { useRouter } from 'next/router';
// // // // // // import ExpandableTable from './ExpandableTable';
// // // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // // import styles from './DataWrapper.module.css';
// // // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // // export default function DataWrapper({ data }) {
// // // // // //   const router = useRouter();
// // // // // //   const { pathname } = router;

// // // // // //   // Local state for selected sections
// // // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // // // //   // Extract section keys
// // // // // //   const sections = useMemo(
// // // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // // //     [data]
// // // // // //   );

// // // // // //   // Process data based on selected sections and search query
// // // // // //   const processedData = useMemo(() => {
// // // // // //     const sectionsToProcess =
// // // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // // //     let result = [];
// // // // // //     sectionsToProcess.forEach((section) => {
// // // // // //       if (data[section]) {
// // // // // //         result = result.concat(data[section]);
// // // // // //       }
// // // // // //     });

// // // // // //     return result.filter((item) =>
// // // // // //       Object.values(item).some((value) =>
// // // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // // //       )
// // // // // //     );
// // // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // // //   // Toggle a section and update the URL
// // // // // //   const toggleSection = (section) => {
// // // // // //     const updatedSections = selectedSections.includes(section)
// // // // // //       ? selectedSections.filter((s) => s !== section) // Remove the section
// // // // // //       : [...selectedSections, section]; // Add the section

// // // // // //     setSelectedSections(updatedSections);

// // // // // //     // Update the URL path dynamically
// // // // // //     const updatedPath =
// // // // // //       updatedSections.length > 0
// // // // // //         ? `${pathname}/${updatedSections
// // // // // //             .map((s) => s.replace(/ /g, '_').toLowerCase())
// // // // // //             .join('_')}`
// // // // // //         : '/symbols';

// // // // // //     router.push(updatedPath, undefined, { shallow: true });
// // // // // //   };

// // // // // //   // Select all sections (no navigation)
// // // // // //   const selectAll = () => {
// // // // // //     setSelectedSections(sections);
// // // // // //   };

// // // // // //   // Clear all sections (no navigation)
// // // // // //   const clearAll = () => {
// // // // // //     setSelectedSections([]);
// // // // // //     setSearchQuery('');
// // // // // //   };

// // // // // //   const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
// // // // // //   const clearSearch = () => setSearchQuery('');

// // // // // //   return (
// // // // // //     <div className={styles.container}>
// // // // // //       <div className={styles.topControls}>
// // // // // //         <div className={styles.searchWrapper}>
// // // // // //           <input
// // // // // //             type="text"
// // // // // //             placeholder="Search..."
// // // // // //             value={searchQuery}
// // // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //             className={styles.searchBar}
// // // // // //           />
// // // // // //           {searchQuery && (
// // // // // //             <button
// // // // // //               className={styles.clearSearchButton}
// // // // // //               onClick={clearSearch}
// // // // // //               aria-label="Clear Search"
// // // // // //             >
// // // // // //               ✖
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>

// // // // // //         <button
// // // // // //           onClick={selectAll}
// // // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // // //         >
// // // // // //           Select All
// // // // // //         </button>
// // // // // //         <button
// // // // // //           onClick={clearAll}
// // // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // // //         >
// // // // // //           Clear All
// // // // // //         </button>

// // // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // // //           Sections
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       <div
// // // // // //         className={`${styles.sectionButtons} ${
// // // // // //           isDropdownOpen ? styles.show : styles.hide
// // // // // //         }`}
// // // // // //       >
// // // // // //         {sections.map((section) => (
// // // // // //           <button
// // // // // //             key={section}
// // // // // //             onClick={() => toggleSection(section)}
// // // // // //             className={`${styles.sectionButton} ${
// // // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // // //             }`}
// // // // // //           >
// // // // // //             <span className={styles.sectionText}>
// // // // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // // // //             </span>
// // // // // //             {selectedSections.includes(section) && (
// // // // // //               <span
// // // // // //                 className={styles.closeButton}
// // // // // //                 onClick={(e) => {
// // // // // //                   e.stopPropagation();
// // // // // //                   toggleSection(section);
// // // // // //                 }}
// // // // // //               >
// // // // // //                 ✖
// // // // // //               </span>
// // // // // //             )}
// // // // // //           </button>
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       <div className={styles.tableWrapper}>
// // // // // //         <ExpandableTable
// // // // // //           data={processedData}
// // // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // // // // //           copyableFields={['symbol', 'latex_code']}
// // // // // //           nestedCopyableFields={['content']}
// // // // // //         />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState, useMemo, useEffect } from 'react';
// // // // // import { useRouter } from 'next/router';
// // // // // import ExpandableTable from './ExpandableTable';
// // // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // // import styles from './DataWrapper.module.css';
// // // // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // // export default function DataWrapper({ data }) {
// // // // //   const router = useRouter();
// // // // //   const { pathname } = router;

// // // // //   // Local state for selected sections
// // // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // // //   const [searchQuery, setSearchQuery] = useState('');
// // // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// // // // //   const [copiedStates, setCopiedStates] = useState({}); // Add state for copy buttons

// // // // //   // Extract section keys
// // // // //   const sections = useMemo(
// // // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // // //     [data]
// // // // //   );

// // // // //   // Process data based on selected sections and search query
// // // // //   const processedData = useMemo(() => {
// // // // //     const sectionsToProcess =
// // // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // // //     let result = [];
// // // // //     sectionsToProcess.forEach((section) => {
// // // // //       if (data[section]) {
// // // // //         result = result.concat(data[section]);
// // // // //       }
// // // // //     });

// // // // //     return result.filter((item) =>
// // // // //       Object.values(item).some((value) =>
// // // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // // //       )
// // // // //     );
// // // // //   }, [data, selectedSections, sections, searchQuery]);

// // // // //   // Handle copy functionality
// // // // //   const handleCopy = async (text, id) => {
// // // // //     try {
// // // // //       await navigator.clipboard.writeText(text);
// // // // //       setCopiedStates(prev => ({
// // // // //         ...prev,
// // // // //         [id]: true
// // // // //       }));
      
// // // // //       // Reset the copied state after 2 seconds
// // // // //       setTimeout(() => {
// // // // //         setCopiedStates(prev => ({
// // // // //           ...prev,
// // // // //           [id]: false
// // // // //         }));
// // // // //       }, 2000);
// // // // //     } catch (err) {
// // // // //       console.error('Failed to copy text: ', err);
// // // // //     }
// // // // //   };

// // // // //   // Toggle a section and update the URL
// // // // //   const toggleSection = (section) => {
// // // // //     const updatedSections = selectedSections.includes(section)
// // // // //       ? selectedSections.filter((s) => s !== section)
// // // // //       : [...selectedSections, section];

// // // // //     setSelectedSections(updatedSections);

// // // // //     const updatedPath =
// // // // //       updatedSections.length > 0
// // // // //         ? `${pathname}/${updatedSections
// // // // //             .map((s) => s.replace(/ /g, '_').toLowerCase())
// // // // //             .join('_')}`
// // // // //         : '/symbols';

// // // // //     router.push(updatedPath, undefined, { shallow: true });
// // // // //   };

// // // // //   const selectAll = () => setSelectedSections(sections);
// // // // //   const clearAll = () => {
// // // // //     setSelectedSections([]);
// // // // //     setSearchQuery('');
// // // // //   };

// // // // //   const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
// // // // //   const clearSearch = () => setSearchQuery('');

// // // // //   return (
// // // // //     <div className={styles.container}>
// // // // //       <div className={styles.topControls}>
// // // // //         <div className={styles.searchWrapper}>
// // // // //           <input
// // // // //             type="text"
// // // // //             placeholder="Search..."
// // // // //             value={searchQuery}
// // // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // // //             className={styles.searchBar}
// // // // //           />
// // // // //           {searchQuery && (
// // // // //             <button
// // // // //               className={styles.clearSearchButton}
// // // // //               onClick={clearSearch}
// // // // //               aria-label="Clear Search"
// // // // //             >
// // // // //               ✖
// // // // //             </button>
// // // // //           )}
// // // // //         </div>

// // // // //         <button
// // // // //           onClick={selectAll}
// // // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // // //         >
// // // // //           Select All
// // // // //         </button>
// // // // //         <button
// // // // //           onClick={clearAll}
// // // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // // //         >
// // // // //           Clear All
// // // // //         </button>

// // // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // // //           Sections
// // // // //         </button>
// // // // //       </div>

// // // // //       <div
// // // // //         className={`${styles.sectionButtons} ${
// // // // //           isDropdownOpen ? styles.show : styles.hide
// // // // //         }`}
// // // // //       >
// // // // //         {sections.map((section) => (
// // // // //           <button
// // // // //             key={section}
// // // // //             onClick={() => toggleSection(section)}
// // // // //             className={`${styles.sectionButton} ${
// // // // //               selectedSections.includes(section) ? styles.active : ''
// // // // //             }`}
// // // // //           >
// // // // //             <span className={styles.sectionText}>
// // // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // // //             </span>
// // // // //             {selectedSections.includes(section) && (
// // // // //               <span
// // // // //                 className={styles.closeButton}
// // // // //                 onClick={(e) => {
// // // // //                   e.stopPropagation();
// // // // //                   toggleSection(section);
// // // // //                 }}
// // // // //               >
// // // // //                 ✖
// // // // //               </span>
// // // // //             )}
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       <div className={styles.tableWrapper}>
// // // // //         <ExpandableTable
// // // // //           data={processedData}
// // // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // // // //           copyableFields={['symbol', 'latex_code']}
// // // // //           nestedCopyableFields={['content']}
// // // // //           onCopy={handleCopy}
// // // // //           copiedStates={copiedStates}
// // // // //         />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React, { useState, useMemo } from 'react';
// // // // import { useRouter } from 'next/router';
// // // // import ExpandableTable from './ExpandableTable';
// // // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // // import styles from './DataWrapper.module.css';
// // // // import { capitalizeWords } from '@/app/utils/utils-functions';


// // // // // Memoize the ExpandableTable to prevent re-rendering
// // // // const MemoizedExpandableTable = React.memo(ExpandableTable);


// // // // export default function DataWrapper({ data }) {
// // // //   const router = useRouter();
// // // //   const { pathname } = router;

// // // //   // Local state for selected sections
// // // //   const [selectedSections, setSelectedSections] = useState([]);
// // // //   const [searchQuery, setSearchQuery] = useState('');
// // // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // // //   // Extract section keys
// // // //   const sections = useMemo(
// // // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // // //     [data]
// // // //   );

// // // //   // Process data based on selected sections and search query
// // // //   const processedData = useMemo(() => {
// // // //     const sectionsToProcess =
// // // //       selectedSections.length > 0 ? selectedSections : sections;

// // // //     let result = [];
// // // //     sectionsToProcess.forEach((section) => {
// // // //       if (data[section]) {
// // // //         result = result.concat(data[section]);
// // // //       }
// // // //     });

// // // //     return result.filter((item) =>
// // // //       Object.values(item).some((value) =>
// // // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // // //       )
// // // //     );
// // // //   }, [data, selectedSections, sections, searchQuery]);

// // // //   // Toggle a section and update the URL
// // // //   const toggleSection = (section) => {
// // // //     const updatedSections = selectedSections.includes(section)
// // // //       ? selectedSections.filter((s) => s !== section)
// // // //       : [...selectedSections, section];

// // // //     setSelectedSections(updatedSections);

// // // //     const updatedPath =
// // // //       updatedSections.length > 0
// // // //         ? `${pathname}/${updatedSections
// // // //             .map((s) => s.replace(/ /g, '_').toLowerCase())
// // // //             .join('_')}`
// // // //         : '/symbols';

// // // //     router.push(updatedPath, undefined, { shallow: true });
// // // //   };

// // // //   // Select all sections
// // // //   const selectAll = () => {
// // // //     setSelectedSections(sections);
// // // //   };

// // // //   // Clear all selections
// // // //   const clearAll = () => {
// // // //     setSelectedSections([]);
// // // //     setSearchQuery('');
// // // //   };

// // // //   const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
// // // //   const clearSearch = () => setSearchQuery('');

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <div className={styles.topControls}>
// // // //         <div className={styles.searchWrapper}>
// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search..."
// // // //             value={searchQuery}
// // // //             onChange={(e) => setSearchQuery(e.target.value)}
// // // //             className={styles.searchBar}
// // // //           />
// // // //           {searchQuery && (
// // // //             <button
// // // //               className={styles.clearSearchButton}
// // // //               onClick={clearSearch}
// // // //               aria-label="Clear Search"
// // // //             >
// // // //               ✖
// // // //             </button>
// // // //           )}
// // // //         </div>

// // // //         <button
// // // //           onClick={selectAll}
// // // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // // //         >
// // // //           Select All
// // // //         </button>
// // // //         <button
// // // //           onClick={clearAll}
// // // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // // //         >
// // // //           Clear All
// // // //         </button>

// // // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // // //           Sections
// // // //         </button>
// // // //       </div>

// // // //       <div
// // // //         className={`${styles.sectionButtons} ${
// // // //           isDropdownOpen ? styles.show : styles.hide
// // // //         }`}
// // // //       >
// // // //         {sections.map((section) => (
// // // //           <button
// // // //             key={section}
// // // //             onClick={() => toggleSection(section)}
// // // //             className={`${styles.sectionButton} ${
// // // //               selectedSections.includes(section) ? styles.active : ''
// // // //             }`}
// // // //           >
// // // //             <span className={styles.sectionText}>
// // // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // // //             </span>
// // // //             {selectedSections.includes(section) && (
// // // //               <span
// // // //                 className={styles.closeButton}
// // // //                 onClick={(e) => {
// // // //                   e.stopPropagation();
// // // //                   toggleSection(section);
// // // //                 }}
// // // //               >
// // // //                 ✖
// // // //               </span>
// // // //             )}
// // // //           </button>
// // // //         ))}
// // // //       </div>

// // // //       <div className={styles.tableWrapper}>
// // // //         {/* Memoized ExpandableTable */}
// // // //         <MemoizedExpandableTable
// // // //           data={processedData} // Pass memoized data
// // // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // // //           copyableFields={['symbol', 'latex_code']} // Prevent unnecessary state loss
// // // //           nestedCopyableFields={['content']} // Ensure stability of nested data
// // // //         />
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // import React, { useState, useMemo } from 'react';
// // // import { useRouter } from 'next/router';
// // // import ExpandableTable from './ExpandableTable';
// // // import { ChevronDown, ChevronUp } from 'lucide-react';
// // // import styles from './DataWrapper.module.css';
// // // import { capitalizeWords } from '@/app/utils/utils-functions';

// // // // Memoize the ExpandableTable to prevent re-rendering
// // // const MemoizedExpandableTable = React.memo(ExpandableTable);

// // // export default function DataWrapper({ data }) {
// // //   const router = useRouter();
// // //   const { pathname } = router;

// // //   // Local state for selected sections
// // //   const [selectedSections, setSelectedSections] = useState([]);
// // //   const [searchQuery, setSearchQuery] = useState('');
// // //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// // //   // Extract section keys
// // //   const sections = useMemo(
// // //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// // //     [data]
// // //   );

// // //   // Process data based on selected sections and search query
// // //   const processedData = useMemo(() => {
// // //     const sectionsToProcess =
// // //       selectedSections.length > 0 ? selectedSections : sections;

// // //     let result = [];
// // //     sectionsToProcess.forEach((section) => {
// // //       if (data[section]) {
// // //         result = result.concat(data[section]);
// // //       }
// // //     });

// // //     return result.filter((item) =>
// // //       Object.values(item).some((value) =>
// // //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// // //       )
// // //     );
// // //   }, [data, selectedSections, sections, searchQuery]);

// // //   const toggleSection = (section) => {
// // //     const updatedSections = selectedSections.includes(section)
// // //       ? selectedSections.filter((s) => s !== section)
// // //       : [...selectedSections, section];

// // //     setSelectedSections(updatedSections);

// // //     const updatedPath =
// // //       updatedSections.length > 0
// // //         ? `${pathname}/${updatedSections
// // //             .map((s) => s.replace(/ /g, '_').toLowerCase())
// // //             .join('_')}`
// // //         : '/symbols';

// // //     router.push(updatedPath, undefined, { shallow: true });
// // //   };

// // //   const selectAll = () => {
// // //     setSelectedSections(sections);
// // //   };

// // //   const clearAll = () => {
// // //     setSelectedSections([]);
// // //     setSearchQuery('');
// // //   };

// // //   const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
// // //   const clearSearch = () => setSearchQuery('');

// // //   return (
// // //     <div className={styles.container}>
// // //       <div className={styles.topControls}>
// // //         <div className={styles.searchWrapper}>
// // //           <input
// // //             type="text"
// // //             placeholder="Search..."
// // //             value={searchQuery}
// // //             onChange={(e) => setSearchQuery(e.target.value)}
// // //             className={styles.searchBar}
// // //           />
// // //           {searchQuery && (
// // //             <button
// // //               className={styles.clearSearchButton}
// // //               onClick={clearSearch}
// // //               aria-label="Clear Search"
// // //             >
// // //               ✖
// // //             </button>
// // //           )}
// // //         </div>

// // //         <button
// // //           onClick={selectAll}
// // //           className={`${styles.controlButton} ${styles.selectButton}`}
// // //         >
// // //           Select All
// // //         </button>
// // //         <button
// // //           onClick={clearAll}
// // //           className={`${styles.controlButton} ${styles.clearButton}`}
// // //         >
// // //           Clear All
// // //         </button>

// // //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// // //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// // //           Sections
// // //         </button>
// // //       </div>

// // //       <div
// // //         className={`${styles.sectionButtons} ${
// // //           isDropdownOpen ? styles.show : styles.hide
// // //         }`}
// // //       >
// // //         {sections.map((section) => (
// // //           <button
// // //             key={section}
// // //             onClick={() => toggleSection(section)}
// // //             className={`${styles.sectionButton} ${
// // //               selectedSections.includes(section) ? styles.active : ''
// // //             }`}
// // //           >
// // //             <span className={styles.sectionText}>
// // //               {capitalizeWords(section.replace(/_/g, ' '))}
// // //             </span>
// // //             {selectedSections.includes(section) && (
// // //               <span
// // //                 className={styles.closeButton}
// // //                 onClick={(e) => {
// // //                   e.stopPropagation();
// // //                   toggleSection(section);
// // //                 }}
// // //               >
// // //                 ✖
// // //               </span>
// // //             )}
// // //           </button>
// // //         ))}
// // //       </div>

// // //       <div className={styles.tableWrapper}>
// // //         <MemoizedExpandableTable
// // //           data={processedData}
// // //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// // //           copyableFields={['symbol', 'latex_code']}
// // //           nestedCopyableFields={['content']}
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState, useMemo } from 'react';
// // import { useRouter } from 'next/router';
// // import ExpandableTable from './ExpandableTable';
// // import { ChevronDown, ChevronUp } from 'lucide-react';
// // import styles from './DataWrapper.module.css';
// // import { capitalizeWords } from '@/app/utils/utils-functions';

// // export default function DataWrapper({ data }) {
// //   const router = useRouter();
// //   const { pathname } = router;

// //   const [selectedSections, setSelectedSections] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

// //   // Extract section keys
// //   const sections = useMemo(
// //     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
// //     [data]
// //   );

// //   // Memoize processed data
// //   const processedData = useMemo(() => {
// //     const sectionsToProcess =
// //       selectedSections.length > 0 ? selectedSections : sections;

// //     let result = [];
// //     sectionsToProcess.forEach((section) => {
// //       if (data[section]) {
// //         result = result.concat(data[section]);
// //       }
// //     });

// //     return result.filter((item) =>
// //       Object.values(item).some((value) =>
// //         String(value).toLowerCase().includes(searchQuery.toLowerCase())
// //       )
// //     );
// //   }, [data, selectedSections, sections, searchQuery]);

// //   const toggleSection = (section) => {
// //     const updatedSections = selectedSections.includes(section)
// //       ? selectedSections.filter((s) => s !== section)
// //       : [...selectedSections, section];

// //     setSelectedSections(updatedSections);

// //     const updatedPath =
// //       updatedSections.length > 0
// //         ? `${pathname}/${updatedSections
// //             .map((s) => s.replace(/ /g, '_').toLowerCase())
// //             .join('_')}`
// //         : '/symbols';

// //     router.push(updatedPath, undefined, { shallow: true });
// //   };

// //   const selectAll = () => {
// //     setSelectedSections(sections);
// //   };

// //   const clearAll = () => {
// //     setSelectedSections([]);
// //     setSearchQuery('');
// //   };

// //   const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
// //   const clearSearch = () => setSearchQuery('');

// //   return (
// //     <div className={styles.container}>
// //       <div className={styles.topControls}>
// //         <div className={styles.searchWrapper}>
// //           <input
// //             type="text"
// //             placeholder="Search..."
// //             value={searchQuery}
// //             onChange={(e) => setSearchQuery(e.target.value)}
// //             className={styles.searchBar}
// //           />
// //           {searchQuery && (
// //             <button
// //               className={styles.clearSearchButton}
// //               onClick={clearSearch}
// //               aria-label="Clear Search"
// //             >
// //               ✖
// //             </button>
// //           )}
// //         </div>

// //         <button
// //           onClick={selectAll}
// //           className={`${styles.controlButton} ${styles.selectButton}`}
// //         >
// //           Select All
// //         </button>
// //         <button
// //           onClick={clearAll}
// //           className={`${styles.controlButton} ${styles.clearButton}`}
// //         >
// //           Clear All
// //         </button>

// //         <button onClick={toggleDropdown} className={styles.chevronButton}>
// //           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// //           Sections
// //         </button>
// //       </div>

// //       <div
// //         className={`${styles.sectionButtons} ${
// //           isDropdownOpen ? styles.show : styles.hide
// //         }`}
// //       >
// //         {sections.map((section) => (
// //           <button
// //             key={section}
// //             onClick={() => toggleSection(section)}
// //             className={`${styles.sectionButton} ${
// //               selectedSections.includes(section) ? styles.active : ''
// //             }`}
// //           >
// //             <span className={styles.sectionText}>
// //               {capitalizeWords(section.replace(/_/g, ' '))}
// //             </span>
// //             {selectedSections.includes(section) && (
// //               <span
// //                 className={styles.closeButton}
// //                 onClick={(e) => {
// //                   e.stopPropagation();
// //                   toggleSection(section);
// //                 }}
// //               >
// //                 ✖
// //               </span>
// //             )}
// //           </button>
// //         ))}
// //       </div>

// //       <div className={styles.tableWrapper}>
// //         {/* Use a key to prevent unnecessary resets */}
// //         <ExpandableTable
// //         //   key={JSON.stringify(processedData)} // Use processed data as a stable key
// //           data={processedData}
// //           includedFields={['symbol', 'latex_code', 'explanation', 'content']}
// //           copyableFields={['symbol', 'latex_code']}
// //           nestedCopyableFields={['content']}
// //         />
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useMemo } from 'react';
// import ExpandableTable from './ExpandableTable';
// import { ChevronDown, ChevronUp } from 'lucide-react';
// import styles from './DataWrapper.module.css';

// export default function DataWrapper({ data }) {
//   const [selectedSections, setSelectedSections] = useState([]);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   // Extract section keys
//   const sections = useMemo(
//     () => Object.keys(data).filter((key) => Array.isArray(data[key])),
//     [data]
//   );

//   // Process data based on selected sections and search query
//   const processedData = useMemo(() => {
//     let result = [];
//     const sectionsToProcess =
//       selectedSections.length > 0 ? selectedSections : sections;

//     sectionsToProcess.forEach((section) => {
//       if (data[section]) {
//         result = result.concat(data[section]);
//       }
//     });

//     // Ensure `result` has the structure expected by `ExpandableTable`
//     return result
//       .filter((item) =>
//         Object.values(item).some((value) =>
//           String(value).toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       )
//       .map((row) => ({
//         id: row.id || Math.random().toString(36).substr(2, 9), // Ensure unique IDs
//         ...row,
//       }));
//   }, [data, selectedSections, sections, searchQuery]);

//   const toggleSection = (section) => {
//     setSelectedSections((prev) =>
//       prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
//     );
//   };

//   const selectAll = () => setSelectedSections(sections);

//   const clearAll = () => {
//     setSelectedSections([]);
//     setSearchQuery('');
//   };

//   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//   const clearSearch = () => setSearchQuery('');

//   return (
//     <div className={styles.container}>
//       {/* Controls Section */}
//       <div className={styles.topControls}>
//         {/* Search Bar */}
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
//               onClick={clearSearch}
//               aria-label="Clear Search"
//             >
//               ✖
//             </button>
//           )}
//         </div>

//         {/* Main Buttons */}
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
//         <button onClick={toggleDropdown} className={styles.chevronButton}>
//           {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
//           Sections
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
//             {section.replace(/_/g, ' ')}
//           </button>
//         ))}
//       </div>

//       {/* Table Section */}
//       <div className={styles.tableWrapper}>
//         <ExpandableTable
//           data={processedData}
//           includedFields={['symbol', 'latex_code', 'explanation', 'content']} // Ensure fields align with child expectations
//           copyableFields={['symbol', 'latex_code']}
//           nestedCopyableFields={['content']}
//         />
//       </div>
//     </div>
//   );
// }


import React, { useState, useMemo } from 'react';
import ExpandableTable from './ExpandableTable';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './DataWrapper.module.css';

export default function DataWrapper({ data }) {
  const [selectedSections, setSelectedSections] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Extract section keys
  const sections = useMemo(
    () => Object.keys(data).filter((key) => Array.isArray(data[key])),
    [data]
  );

  // Process data based on selected sections and search query
  const processedData = useMemo(() => {
    let result = [];
    const sectionsToProcess =
      selectedSections.length > 0 ? selectedSections : sections;

    sectionsToProcess.forEach((section) => {
      if (data[section]) {
        result = result.concat(data[section]);
      }
    });

    // Ensure `result` has the structure expected by `ExpandableTable`
    return result
      .filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .map((row) => ({
        id: row.id || Math.random().toString(36).substr(2, 9), // Ensure unique IDs
        ...row,
      }));
  }, [data, selectedSections, sections, searchQuery]);

  const toggleSection = (section) => {
    setSelectedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
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

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const clearSearch = () => setSearchQuery('');

  return (
    <div className={styles.container}>
      {/* Controls Section */}
      <div className={styles.topControls}>
        {/* Search Bar */}
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
              onClick={clearSearch}
              aria-label="Clear Search"
            >
              ✖
            </button>
          )}
        </div>

        {/* Main Buttons */}
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
        <button onClick={toggleDropdown} className={styles.chevronButton}>
          {isDropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {isDropdownOpen ?'Hide Categories':'Show Categories'}
        </button>
      </div>

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
                  e.stopPropagation(); // Prevent parent button toggle
                  deselectSection(section);
                }}
              >
                ✖
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className={styles.tableWrapper}>
        <ExpandableTable
          data={processedData}
          includedFields={['symbol', 'latex_code', 'explanation', 'content']} // Ensure fields align with child expectations
          copyableFields={['symbol', 'latex_code']}
          nestedCopyableFields={['content']}
        />
      </div>
    </div>
  );
}
