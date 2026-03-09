/**
 * QuickNav - On-page navigation with dropdown and pill links
 * 
 * @component
 * @param {Object} props
 * @param {Array<NavItem>} [props.items=[]] - Array of items to navigate to
 * @param {string} [props.dropdownLabel='All Tools'] - Dropdown button text
 * 
 * @typedef {Object} NavItem
 * @property {string} title - Item title (displayed in dropdown and pills)
 * 
 * @note Generates links to id="card-{index}" elements
 * @note Pills display shortened titles (strips "Visualizer", "Explorer", "Calculator" suffixes)
 * @note Uses smooth scroll with block: 'center' positioning
 * 
 * @example
 * <QuickNav 
 *   items={[{ title: "Divisibility Table Visualizer" }, { title: "Prime Calculator" }]}
 *   dropdownLabel="All Tools"
 * />
 */
import React, { useState } from 'react';

const QuickNav = ({ items = [], dropdownLabel = 'All Tools' }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const generateShortTitle = (title) => {
    return title
      .replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '')
      .trim();
  };

  const generateId = (index) => `card-${index}`;

  const handleClick = (e, index) => {
    e.preventDefault();
    setIsDropdownOpen(false);
    const element = document.getElementById(generateId(index));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  if (!items.length) return null;

  return (
    <nav style={styles.wrapper}>
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <div 
            style={styles.dropdown}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button style={{
              ...styles.dropdownBtn,
              background: isDropdownOpen ? '#3730a3' : '#4F46E5'
            }}>
              {dropdownLabel}
              <svg 
                width="10" 
                height="10" 
                viewBox="0 0 12 12" 
                style={{ 
                  marginLeft: '4px',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s ease'
                }}
              >
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>
            <div style={{
              ...styles.dropdownMenu,
              opacity: isDropdownOpen ? 1 : 0,
              visibility: isDropdownOpen ? 'visible' : 'hidden',
              transform: isDropdownOpen ? 'translateY(0)' : 'translateY(-8px)'
            }}>
              {items.map((item, index) => (
                <a 
                  key={index} 
                  href={`#${generateId(index)}`}
                  style={styles.dropdownItem}
                  onClick={(e) => handleClick(e, index)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f8fafc';
                    e.currentTarget.style.color = '#4F46E5';
                    e.currentTarget.style.paddingLeft = '18px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#334155';
                    e.currentTarget.style.paddingLeft = '14px';
                  }}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
          <span style={styles.label}>or quick jump:</span>
        </div>
        <span style={styles.count}>{items.length} tools</span>
      </div>
      <div style={styles.pills}>
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${generateId(index)}`}
            style={styles.pill}
            onClick={(e) => handleClick(e, index)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3730a3';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(79, 70, 229, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4F46E5';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {generateShortTitle(item.title)}
          </a>
        ))}
      </div>
    </nav>
  );
};

const styles = {
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto 40px',
    padding: '16px 20px',
    background: '#f8fafc',
    borderRadius: '12px',
    border: '2px solid #94a3b8',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
  },
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  dropdown: {
    position: 'relative',
  },
  dropdownBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '6px 12px',
    background: '#4F46E5',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  dropdownMenu: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: '0',
    minWidth: '280px',
    background: 'white',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
    transition: 'all 0.2s ease',
    zIndex: '100',
  },
  dropdownItem: {
    display: 'block',
    padding: '10px 14px',
    textDecoration: 'none',
    color: '#334155',
    fontSize: '0.85rem',
    borderBottom: '1px solid #f1f5f9',
    transition: 'all 0.15s ease',
  },
  label: {
    fontSize: '0.8rem',
    color: '#475569',
    fontWeight: '500',
  },
  count: {
    fontSize: '0.8rem',
    color: '#334155',
    background: '#e2e8f0',
    padding: '4px 12px',
    borderRadius: '20px',
    fontWeight: '600',
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '8px',
  },
  pill: {
    padding: '7px 14px',
    background: '#4F46E5',
    border: 'none',
    borderRadius: '20px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '0.8rem',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    whiteSpace: 'nowrap',
  },
};

export default QuickNav;