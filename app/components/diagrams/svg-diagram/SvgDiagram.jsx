

import React from 'react';

const SvgDiagram = ({ 
  layout = 'vertical', // 'vertical', 'horizontal', 'side-by-side'
  width = 'auto',
  height = 'auto',
  scale = 1.0,
  data = {}, // This is the single identity object: { svg: '', explanation: '', links: [] }
  containerStyle = {},
  diagramStyle = {
    width: '100%',
    height: 'auto',
    minHeight: '200px',
    border: '2px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    backgroundColor: '#fafbfc'
  },
  frameStyle = {
    border: '2px solid #d1d5db',
    borderRadius: '16px',
    padding: '30px',
    margin: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)'
  },
  titleStyle = {
    fontSize: '22px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  explanationStyle = {
    fontSize: '16px',
    lineHeight: '1.8',
    marginTop: '25px',
    marginBottom: '25px',
    padding: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    color: '#1e293b',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
    border: '2px solid #e2e8f0',
    fontWeight: '400'
  },
  linksContainerStyle = {
    marginTop: '20px',
    textAlign: 'center'
  },
  linkStyle = {
    display: 'inline-block',
    margin: '6px 12px',
    padding: '10px 20px',
    backgroundColor: '#6c757d',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease',
    fontFamily: '"Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif'
  },
  linkHoverStyle = {
    backgroundColor: '#495057',
    transform: 'translateY(-1px)'
  },
  showFrame = true,
  showTitle = true
}) => {
  const [hoveredLink, setHoveredLink] = React.useState(null);

  // data is now the single identity object directly
  const { svg = '', explanation = '', links = [], title = '' } = data;

  if (!svg && !explanation && (!links || links.length === 0)) {
    return (
      <div style={{ ...frameStyle, textAlign: 'center', padding: '40px' }}>
        <p style={{ color: '#999', fontSize: '16px' }}>No diagram data provided</p>
      </div>
    );
  }

  const containerStyleFinal = showFrame ? { 
    ...frameStyle, 
    width, 
    height,
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    ...containerStyle 
  } : { 
    width, 
    height,
    transform: `scale(${scale})`,
    transformOrigin: 'top center',
    ...containerStyle 
  };

  const renderContent = () => {
    const svgElement = svg && (
      <div 
        style={diagramStyle}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );

    const textContent = (
      <>
        {explanation && (
          <div style={explanationStyle}>
            {explanation}
          </div>
        )}
        
        {links && links.length > 0 && (
          <div style={linksContainerStyle}>
            {links.map((link, index) => (
              link.text && link.url ? (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...linkStyle,
                    ...(hoveredLink === index ? linkHoverStyle : {})
                  }}
                  onMouseEnter={() => setHoveredLink(index)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {link.text}
                </a>
              ) : null
            ))}
          </div>
        )}
      </>
    );

    if (layout === 'horizontal') {
      return (
        <div style={{ display: 'flex', gap: '30px', alignItems: 'flex-start' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            {svgElement}
          </div>
          <div style={{ flex: '1', minWidth: '300px' }}>
            {textContent}
          </div>
        </div>
      );
    }

    if (layout === 'side-by-side') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', alignItems: 'start' }}>
          <div>
            {svgElement}
          </div>
          <div>
            {textContent}
          </div>
        </div>
      );
    }

    // Default vertical layout
    return (
      <div>
        {svgElement}
        {textContent}
      </div>
    );
  };

  return (
    <div style={containerStyleFinal}>
      {showTitle && title && (
        <h2 style={titleStyle}>{title}</h2>
      )}
      
      {renderContent()}
    </div>
  );
};

export default SvgDiagram;