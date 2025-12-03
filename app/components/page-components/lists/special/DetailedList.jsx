'use client';

/**
 * Color themes configuration for the DetailedList component
 * @typedef {Object} ColorTheme
 * @property {string} primary - Main color for badges and titles
 * @property {string} primaryLight - Lighter shade for hover effects
 * @property {string} background - Background color for description sections
 * @property {string} backgroundLight - Lighter background for hover states
 * @property {string} border - Border color
 * @property {string} text - Text color for descriptions
 * @property {string} textDark - Dark text color for titles
 */
const colorThemes = {
  blue: {
    primary: '#1e40af',
    primaryLight: '#3b82f6',
    background: '#eff6ff',
    backgroundLight: '#dbeafe',
    border: '#bfdbfe',
    text: '#1e40af',
    textDark: '#0f172a'
  },
  red: {
    primary: '#b91c1c',
    primaryLight: '#ef4444',
    background: '#fee2e2',
    backgroundLight: '#fecaca',
    border: '#fca5a5',
    text: '#b91c1c',
    textDark: '#0f172a'
  },
  orange: {
    primary: '#c2410c',
    primaryLight: '#f97316',
    background: '#ffedd5',
    backgroundLight: '#fed7aa',
    border: '#fdba74',
    text: '#c2410c',
    textDark: '#0f172a'
  },
  green: {
    primary: '#15803d',
    primaryLight: '#22c55e',
    background: '#dcfce7',
    backgroundLight: '#bbf7d0',
    border: '#86efac',
    text: '#15803d',
    textDark: '#0f172a'
  },
  violet: {
    primary: '#6d28d9',
    primaryLight: '#8b5cf6',
    background: '#ede9fe',
    backgroundLight: '#ddd6fe',
    border: '#c4b5fd',
    text: '#6d28d9',
    textDark: '#0f172a'
  },
  gray: {
    primary: '#374151',
    primaryLight: '#6b7280',
    background: '#f3f4f6',
    backgroundLight: '#e5e7eb',
    border: '#d1d5db',
    text: '#374151',
    textDark: '#0f172a'
  },
  navy: {
    primary: '#1e3a5f',
    primaryLight: '#2d5a8a',
    background: '#e8f0f8',
    backgroundLight: '#d4e4f4',
    border: '#9fb8d1',
    text: '#1e3a5f',
    textDark: '#0f172a'
  },
  burgundy: {
    primary: '#6b1f2d',
    primaryLight: '#8b2e3f',
    background: '#f5e8eb',
    backgroundLight: '#ead1d7',
    border: '#c9949e',
    text: '#6b1f2d',
    textDark: '#0f172a'
  },
  teal: {
    primary: '#0f4d4d',
    primaryLight: '#1a6b6b',
    background: '#e6f3f3',
    backgroundLight: '#cce6e6',
    border: '#99cccc',
    text: '#0f4d4d',
    textDark: '#0f172a'
  }
};

/**
 * DetailedList Component
 * 
 * A flexible, professional list component with support for numbered/unnumbered lists,
 * separated descriptions, multiple color themes, and optional links.
 * 
 * @component
 * @example
 * // Basic usage
 * const data = {
 *   title: 'My Topics',
 *   items: [
 *     { title: 'Item 1', description: 'Description 1' },
 *     { title: 'Item 2', description: 'Description 2' }
 *   ]
 * };
 * <DetailedList data={data} />
 * 
 * @example
 * // Numbered list with separated descriptions and custom theme
 * <DetailedList 
 *   numbered={true}
 *   separatedDescription={true}
 *   theme="green"
 *   data={data}
 * />
 * 
 * @example
 * // With links and custom link text
 * const data = {
 *   title: 'Resources',
 *   items: [
 *     {
 *       title: 'Documentation',
 *       description: 'Complete guide',
 *       link: 'https://example.com/docs',
 *       linkText: 'View Docs'
 *     }
 *   ]
 * };
 * <DetailedList data={data} />
 * 
 * @param {Object} props - Component props
 * @param {boolean} [props.numbered=false] - Whether to display numbered badges (1, 2, 3...) on each item
 * @param {boolean} [props.separatedDescription=false] - Controls visual separation between title and description
 * @param {'blue'|'red'|'orange'|'green'|'violet'|'gray'|'navy'|'burgundy'|'teal'} [props.theme='blue'] - Color scheme for the list
 * @param {Object} props.data - Data object containing list content
 * @param {string} [props.data.title] - Main heading for the list (optional)
 * @param {Array<Object>} props.data.items - Array of list items (required)
 * @param {string} props.data.items[].title - Item title (required)
 * @param {string} [props.data.items[].description] - Item description (optional)
 * @param {string} [props.data.items[].link] - URL to open when item is clicked (optional)
 * @param {string} [props.data.items[].linkText='Learn More'] - Custom link button text (optional)
 * 
 * @returns {JSX.Element} Rendered list component
 */
 export function  DetailedList({ numbered = false, data, separatedDescription = false, theme = 'blue' }) {
  const colors = colorThemes[theme] || colorThemes.blue;
  
  return (
    <div style={{
      maxWidth: '700px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {data.title && (
        <h2 style={{
          fontSize: '24px',
          fontWeight: '600',
          color: colors.primary,
          marginBottom: '24px',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          {data.title}
        </h2>
      )}
      
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {data.items.map((item, index) => (
          <div key={index} style={{
            padding: separatedDescription && item.description ? '0' : '24px',
            backgroundColor: '#ffffff',
            border: '2px solid #e2e8f0',
            borderRadius: '8px',
            position: 'relative',
            paddingLeft: separatedDescription && item.description ? '0' : (numbered ? '80px' : '24px'),
            transition: 'all 0.2s ease',
            cursor: item.link ? 'pointer' : 'default',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            overflow: 'hidden'
          }}
          onClick={() => {
            if (item.link) {
              window.open(item.link, '_blank');
            }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = colors.primaryLight;
            e.currentTarget.style.boxShadow = `0 4px 12px ${colors.primaryLight}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#e2e8f0';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            {separatedDescription && item.description ? (
              <>
                <div style={{
                  padding: '24px',
                  paddingLeft: numbered ? '80px' : '24px',
                  position: 'relative',
                  backgroundColor: '#ffffff',
                  borderBottom: '2px solid #e2e8f0'
                }}>
                  {numbered && (
                    <div style={{
                      position: 'absolute',
                      left: '24px',
                      top: '24px',
                      width: '40px',
                      height: '40px',
                      backgroundColor: colors.primary,
                      color: '#ffffff',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      fontWeight: '700'
                    }}>
                      {index + 1}
                    </div>
                  )}
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: colors.textDark,
                    margin: 0,
                    letterSpacing: '-0.01em'
                  }}>
                    {item.title}
                  </h3>
                </div>
                
                <div style={{
                  padding: '24px',
                  backgroundColor: colors.background,
                  borderTop: `2px solid ${colors.border}`,
                  borderLeft: `4px solid ${colors.primaryLight}`,
                  margin: '0'
                }}>
                  <p style={{
                    fontSize: '14px',
                    color: colors.text,
                    lineHeight: '1.8',
                    margin: 0,
                    fontStyle: 'italic',
                    fontWeight: '400'
                  }}>
                    {item.description}
                  </p>
                </div>
                
                {item.link && (
                  <div style={{
                    padding: '16px 24px',
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      backgroundColor: colors.background,
                      border: `1px solid ${colors.primaryLight}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: colors.primary,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.backgroundLight;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.background;
                    }}>
                      <span>{item.linkText || 'Learn More'}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                {numbered && (
                  <div style={{
                    position: 'absolute',
                    left: '24px',
                    top: '24px',
                    width: '40px',
                    height: '40px',
                    backgroundColor: colors.primary,
                    color: '#ffffff',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    fontWeight: '700'
                  }}>
                    {index + 1}
                  </div>
                )}
                
                <div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: colors.primary,
                    margin: 0,
                    marginBottom: item.description ? '12px' : 0
                  }}>
                    {item.title}
                  </h3>
                  
                  {item.description && (
                    <p style={{
                      fontSize: '16px',
                      color: '#64748b',
                      lineHeight: '1.6',
                      margin: 0,
                      marginBottom: item.link ? '16px' : 0
                    }}>
                      {item.description}
                    </p>
                  )}
                  
                  {item.link && (
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginTop: '16px',
                      padding: '8px 16px',
                      backgroundColor: colors.background,
                      border: `1px solid ${colors.primaryLight}`,
                      borderRadius: '6px',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: colors.primary,
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.backgroundLight;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.background;
                    }}>
                      <span>{item.linkText || 'Learn More'}</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3L11 8L6 13" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

