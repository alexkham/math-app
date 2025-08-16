

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
