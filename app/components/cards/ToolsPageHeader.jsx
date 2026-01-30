import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ToolsPageHeader = ({ 
  items = [],
  intro = null,
  icon = '🔍',
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Extract stats from items
  const stats = useMemo(() => {
    const toolsCount = items.length;
    const categories = new Set(items.map(item => item.category).filter(Boolean));
    const categoriesCount = categories.size;
    
    return { toolsCount, categoriesCount };
  }, [items]);

  // Filter items based on search
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) return items;
    
    const term = searchTerm.toLowerCase();
    return items.filter(item => 
      item.title?.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term)
    );
  }, [items, searchTerm]);

  const generateShortTitle = (title) => {
    return title
      .replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '')
      .trim();
  };

  const handlePillClick = (e, item) => {
    e.preventDefault();
    const originalIndex = items.indexOf(item);
    const element = document.getElementById(`card-${originalIndex}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  if (!items.length) return null;

  return (
    <div style={styles.container}>
      {/* Intro Section */}
      <div style={styles.introWrapper}>
        {intro && (
          <div style={styles.header}>
            <div style={styles.iconBox}>{icon}</div>
            <div style={styles.textContent}>
              {intro.title && <h2 style={styles.title}>{intro.title}</h2>}
              {intro.description && <p style={styles.description}>{intro.description}</p>}
            </div>
          </div>
        )}

        {intro?.tip && (
          <div style={styles.tipBox}>
            <span style={styles.tipIcon}>💡</span>
            <span style={styles.tipText}>
              <strong>Tip:</strong> {intro.tip}
            </span>
          </div>
        )}

        <div style={styles.bottom}>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <span style={styles.statValue}>{stats.toolsCount}</span>
              <span style={styles.statLabel}>Tools</span>
            </div>
            {stats.categoriesCount > 0 && (
              <div style={styles.statItem}>
                <span style={styles.statValue}>{stats.categoriesCount}</span>
                <span style={styles.statLabel}>Categories</span>
              </div>
            )}
            <div style={styles.statItem}>
              <span style={styles.statValue}>100%</span>
              <span style={styles.statLabel}>Free</span>
            </div>
          </div>

          {/* <div style={styles.searchBox}>
            <svg 
              style={styles.searchIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#94a3b8" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={handleSearch}
              style={styles.searchInput}
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                style={styles.clearBtn}
                type="button"
              >
                ✕
              </button>
            )}
          </div> */}
        </div>
      </div>

      {/* Quick Nav Section */}
      {/* <nav style={styles.navWrapper}>
        <div style={styles.navHeader}>
          <div style={styles.navHeaderLeft}>
            <NavDropdown 
              items={filteredItems} 
              allItems={items}
              onItemClick={handlePillClick}
            />
            <span style={styles.navLabel}>or quick jump:</span>
          </div>
          <span style={styles.navCount}>
            {searchTerm ? `${filteredItems.length} of ${items.length}` : `${items.length} tools`}
          </span>
        </div>
        <div style={styles.pills}>
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={`#card-${items.indexOf(item)}`}
              style={styles.pill}
              onClick={(e) => handlePillClick(e, item)}
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
          {filteredItems.length === 0 && (
            <span style={styles.noResults}>No tools match your search</span>
          )}
        </div>
      </nav> */}

      {/* Cards Section
      <div style={styles.cardsGrid}>
        {filteredItems.map((item, index) => {
          const originalIndex = items.indexOf(item);
          const nextItem = items[originalIndex + 1];
          const prevItem = items[originalIndex - 1];
          const isPair = originalIndex % 2 === 0;
          
          let widthStyle = {};
          if (item.ratio && ((isPair && nextItem?.ratio) || (!isPair && prevItem?.ratio))) {
            widthStyle = { flexBasis: `${(item.ratio / (item.ratio + (isPair ? nextItem.ratio : prevItem.ratio))) * 100}%` };
          }

          return (
            <div 
              key={index}
              id={`card-${originalIndex}`}
              style={{
                ...styles.card,
                backgroundColor: item.backgroundColor || 'white',
                color: item.textColor || '#1a1f36',
                ...widthStyle
              }}
            >
              {item.image && (
                <div style={styles.imageContainer}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}
              
              <div style={{
                ...styles.contentContainer,
                ...(item.image ? styles.withImage : styles.fullWidth)
              }}>
                <div>
                  <div style={styles.titleRow}>
                    {item.icon && (
                      <div style={styles.cardIconContainer}>
                        <item.icon style={{ color: item.textColor || '#4F46E5' }} />
                      </div>
                    )}
                    <h2 style={{ ...styles.cardTitle, color: item.textColor || '#1a1f36' }}>
                      {item.title}
                    </h2>
                  </div>
                  <p style={{ ...styles.cardDescription, color: item.textColor || '#64748b' }}>
                    {item.description}
                  </p>
                </div>
                
                <div style={styles.footer}>
                  <Link 
                    href={item.href || '#'} 
                    style={styles.viewButton}
                  >
                    View Details
                  </Link>
                  <button style={styles.menuButton} type="button">
                    <span style={{ ...styles.menuDot, background: item.textColor || '#64748b' }}></span>
                    <span style={{ ...styles.menuDot, background: item.textColor || '#64748b' }}></span>
                    <span style={{ ...styles.menuDot, background: item.textColor || '#64748b' }}></span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

// Dropdown sub-component
const NavDropdown = ({ items, allItems, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      style={styles.dropdown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        type="button"
        style={{
          ...styles.dropdownBtn,
          background: isOpen ? '#3730a3' : '#4F46E5'
        }}
      >
        All Tools
        <svg 
          width="10" 
          height="10" 
          viewBox="0 0 12 12" 
          style={{ 
            marginLeft: '4px',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.2s ease'
          }}
        >
          <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        </svg>
      </button>
      <div style={{
        ...styles.dropdownMenu,
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transform: isOpen ? 'translateY(0)' : 'translateY(-8px)'
      }}>
        {items.map((item, index) => (
          <a 
            key={index} 
            href={`#card-${allItems.indexOf(item)}`}
            style={styles.dropdownItem}
            onClick={(e) => {
              onItemClick(e, item);
              setIsOpen(false);
            }}
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
        {items.length === 0 && (
          <span style={styles.dropdownEmpty}>No results</span>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },

  // Intro styles
  introWrapper: {
    background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
    border: '2px solid #cbd5e1',
    borderRadius: '16px 16px 0 0',
    padding: '28px 32px',
    borderBottom: 'none',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '20px',
    marginBottom: '20px',
  },
  iconBox: {
    width: '56px',
    height: '56px',
    background: 'linear-gradient(135deg, #4F46E5 0%, #6366f1 100%)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    flexShrink: 0,
  },
  textContent: {
    flex: 1,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1e293b',
    margin: '0 0 8px 0',
  },
  description: {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.6',
    margin: 0,
  },
  tipBox: {
    background: 'white',
    border: '1px solid #e2e8f0',
    borderLeft: '4px solid #4F46E5',
    borderRadius: '8px',
    padding: '14px 18px',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '0.875rem',
    color: '#475569',
  },
  tipIcon: {
    fontSize: '1.25rem',
    flexShrink: 0,
  },
  tipText: {
    lineHeight: '1.5',
  },
  bottom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '16px',
  },
  stats: {
    display: 'flex',
    gap: '24px',
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.85rem',
    color: '#64748b',
  },
  statValue: {
    fontWeight: '700',
    color: '#4F46E5',
    fontSize: '1.1rem',
  },
  statLabel: {
    color: '#64748b',
  },
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'white',
    border: '2px solid #cbd5e1',
    borderRadius: '8px',
    padding: '8px 14px',
    minWidth: '280px',
    transition: 'border-color 0.2s ease',
  },
  searchIcon: {
    width: '18px',
    height: '18px',
    flexShrink: 0,
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    fontSize: '0.875rem',
    color: '#334155',
    flex: 1,
    background: 'transparent',
  },
  clearBtn: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '0.875rem',
    padding: '0 4px',
  },

  // Nav styles
  navWrapper: {
    background: '#f8fafc',
    border: '2px solid #cbd5e1',
    borderTop: '1px solid #e2e8f0',
    borderRadius: '0 0 16px 16px',
    padding: '16px 20px',
    marginBottom: '40px',
  },
  navHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
  },
  navHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  navLabel: {
    fontSize: '0.8rem',
    color: '#475569',
    fontWeight: '500',
  },
  navCount: {
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
  noResults: {
    color: '#94a3b8',
    fontSize: '0.875rem',
    fontStyle: 'italic',
  },

  // Dropdown styles
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
  dropdownEmpty: {
    display: 'block',
    padding: '14px',
    color: '#94a3b8',
    fontSize: '0.85rem',
    textAlign: 'center',
  },

  // Cards styles
  cardsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    display: 'flex',
    borderRadius: '12px',
    overflow: 'hidden',
    minHeight: '200px',
    flex: '1 1 calc(50% - 10px)',
    minWidth: '300px',
    scrollMarginTop: '20px',
  },
  imageContainer: {
    position: 'relative',
    width: '40%',
    minHeight: '200px',
  },
  contentContainer: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  withImage: {
    width: '60%',
  },
  fullWidth: {
    width: '100%',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '12px',
  },
  cardIconContainer: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    margin: 0,
  },
  cardDescription: {
    fontSize: '0.9rem',
    lineHeight: '1.6',
    margin: 0,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '16px',
  },
  viewButton: {
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '6px',
    color: 'inherit',
    fontSize: '0.85rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
  },
  menuButton: {
    background: 'none',
    border: 'none',
    padding: '8px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
  },
  menuDot: {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
  },
};

export default ToolsPageHeader;