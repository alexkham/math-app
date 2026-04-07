
import React, { useState, useMemo } from 'react';
import ExpandableTable from './ExpandableTable';

const ChevronIcon = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    style={{
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'transform 0.2s ease',
    }}
  >
    <polyline
      points="3,5 7,9 11,5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//     minHeight: '600px',
//     padding: '26px',
//     margin:'auto',
//     width:'90%'
//   },
//   controlsPanel: {
//     background: '#f1f3f5',
//     borderRadius: '10px',
//     padding: '14px 16px',
//   },
//   topControls: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     gap: '8px',
//     flexWrap: 'wrap',
//     marginBottom: '0',
//   },
//   searchWrapper: {
//     position: 'relative',
//     flex: 1,
//     minWidth: '180px',
//     maxWidth: '280px',
//   },
//   searchBar: {
//     padding: '9px 36px 9px 14px',
//     width: '100%',
//     fontSize: '16px',
//     border: '1px solid #d0d5dd',
//     borderRadius: '24px',
//     outline: 'none',
//     background: '#fff',
//     boxSizing: 'border-box',
//   },
//   clearSearchButton: {
//     position: 'absolute',
//     top: '50%',
//     right: '10px',
//     transform: 'translateY(-50%)',
//     border: 'none',
//     background: 'none',
//     color: '#aaa',
//     fontSize: '16px',
//     cursor: 'pointer',
//     padding: '2px',
//     lineHeight: 1,
//   },
//   selectButton: {
//     padding: '7px 14px',
//     borderRadius: '24px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     fontWeight: '500',
//     border: 'none',
//     background: '#2563eb',
//     color: '#fff',
//   },
//   clearButton: {
//     padding: '7px 14px',
//     borderRadius: '24px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     fontWeight: '500',
//     border: '1px solid #fecaca',
//     background: '#fef2f2',
//     color: '#b91c1c',
//   },
//   chevronButton: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '4px',
//     padding: '7px 14px',
//     borderRadius: '24px',
//     fontSize: '15px',
//     cursor: 'pointer',
//     border: '1px solid #d0d5dd',
//     background: '#fff',
//     color: '#2563eb',
//     fontWeight: '500',
//   },
//   sectionButtons: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '6px',
//     overflow: 'hidden',
//     maxHeight: '0',
//     transition: 'max-height 0.3s ease-in-out, margin-top 0.3s ease-in-out',
//     marginTop: '0',
//   },
//   sectionButtonsShow: {
//     maxHeight: '500px',
//     marginTop: '10px',
//   },
//   chip: {
//     padding: '5px 12px',
//     borderRadius: '6px',
//     fontSize: '16px',
//     cursor: 'pointer',
//     background: '#fff',
//     color: '#475569',
//     fontWeight: '500',
//     border: '1px solid #d8dce2',
//     transition: 'background 0.15s, color 0.15s, border-color 0.15s',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '6px',
//   },
//   chipActive: {
//     background: '#dbeafe',
//     color: '#1e40af',
//     borderColor: '#93c5fd',
//   },
//   chipClose: {
//     fontSize: '16px',
//     cursor: 'pointer',
//     color: 'inherit',
//     fontWeight: 'bold',
//     lineHeight: 1,
//   },
//   tableWrapper: {
//     marginTop: '4px',
//     border: '1px solid #eaeaea',
//     borderRadius: '8px',
//     overflow: 'hidden',
//   },
// };

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    minHeight: '600px',
    padding: '26px',
    margin: 'auto',
    width: '90%',
  },
  controlsPanel: {
    background: '#f8f9fa',
    borderRadius: '12px',
    padding: '16px 20px',
    borderBottom: '1px solid #e5e7eb',
  },
  topControls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
    marginBottom: '0',
  },
  searchWrapper: {
    position: 'relative',
    flex: 1,
    minWidth: '220px',
    maxWidth: '340px',
  },
  searchBar: {
    padding: '10px 40px 10px 16px',
    width: '100%',
    fontSize: '17px',
    border: '1px solid #d0d5dd',
    borderRadius: '8px',
    outline: 'none',
    background: '#fff',
    boxSizing: 'border-box',
  },
  clearSearchButton: {
    position: 'absolute',
    top: '50%',
    right: '12px',
    transform: 'translateY(-50%)',
    border: 'none',
    background: 'none',
    color: '#aaa',
    fontSize: '17px',
    cursor: 'pointer',
    padding: '2px',
    lineHeight: 1,
  },
  selectButton: {
    padding: '8px 18px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '500',
    border: 'none',
    background: '#3b5998',
    color: '#fff',
  },
  clearButton: {
    padding: '8px 18px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: '500',
    border: 'none',
    background: 'none',
    color: '#dc2626',
  },
  chevronButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    padding: '8px 18px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    border: '1px solid #d0d5dd',
    background: '#fff',
    color: '#374151',
    fontWeight: '500',
  },
  sectionButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    overflow: 'hidden',
    maxHeight: '0',
    transition: 'max-height 0.3s ease-in-out, margin-top 0.3s ease-in-out',
    marginTop: '0',
  },
  sectionButtonsShow: {
    maxHeight: '500px',
    marginTop: '12px',
  },
  chip: {
    padding: '6px 14px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    background: '#fff',
    color: '#475569',
    fontWeight: '500',
    border: '1px solid #d8dce2',
    transition: 'background 0.15s, color 0.15s, border-color 0.15s',
    display: 'flex',
    alignItems: 'center',
    gap: '7px',
  },
  chipActive: {
    background: '#dbeafe',
    color: '#1e40af',
    borderColor: '#93c5fd',
  },
  chipClose: {
    fontSize: '17px',
    cursor: 'pointer',
    color: 'inherit',
    fontWeight: 'bold',
    lineHeight: 1,
  },
  tableWrapper: {
    marginTop: '4px',
    border: '1px solid #eaeaea',
    borderRadius: '10px',
    overflow: 'hidden',
  },
};


export default function DataWrapper({ data }) {
  const [selectedSections, setSelectedSections] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const sections = useMemo(
    () => Object.keys(data).filter((key) => Array.isArray(data[key])),
    [data]
  );

  const processedData = useMemo(() => {
    let result = [];
    const sectionsToProcess =
      selectedSections.length > 0 ? selectedSections : sections;

    sectionsToProcess.forEach((section) => {
      if (data[section]) {
        result = result.concat(data[section]);
      }
    });

    return result
      .filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .map((row) => ({
        id: row.id || Math.random().toString(36).substr(2, 9),
        ...row,
      }));
  }, [data, selectedSections, sections, searchQuery]);

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

  return (
    <div style={styles.container}>
      <div style={styles.controlsPanel}>
        <div style={styles.topControls}>
          <div style={styles.searchWrapper}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchBar}
            />
            {searchQuery && (
              <button
                style={styles.clearSearchButton}
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search"
              >
                &#10006;
              </button>
            )}
          </div>
          <button style={styles.selectButton} onClick={selectAll}>
            Select All
          </button>
          <button style={styles.clearButton} onClick={clearAll}>
            Clear All
          </button>
          <button
            style={styles.chevronButton}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {isDropdownOpen ? 'Hide Categories' : 'Show Categories'}
            <ChevronIcon open={isDropdownOpen} />
          </button>
        </div>

        <div
          style={{
            ...styles.sectionButtons,
            ...(isDropdownOpen ? styles.sectionButtonsShow : {}),
          }}
        >
          {sections.map((section) => {
            const isActive = selectedSections.includes(section);
            return (
              <span
                key={section}
                onClick={() => toggleSection(section)}
                style={{
                  ...styles.chip,
                  ...(isActive ? styles.chipActive : {}),
                }}
              >
                <span>{section.replace(/_/g, ' ')}</span>
                {isActive && (
                  <span
                    style={styles.chipClose}
                    onClick={(e) => {
                      e.stopPropagation();
                      deselectSection(section);
                    }}
                  >
                    &#10006;
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>

      <div style={styles.tableWrapper}>
        <ExpandableTable
          data={processedData}
          includedFields={['symbol', 'latex_code', 'explanation', 'content']}
          copyableFields={['symbol', 'latex_code']}
          nestedCopyableFields={['content']}
        />
      </div>
    </div>
  );
}