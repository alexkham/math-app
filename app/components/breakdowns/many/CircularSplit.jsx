import React from 'react';

const RenderItem = ({ item, styles }) => {
  if (typeof item === 'string') {
    return <div style={styles.item}>{item}</div>;
  }

  const { title, link, content } = item;
  
  const Content = () => (
    <>
      {title && <h4 style={styles.itemTitle}>{title}</h4>}
      {content && content.map((subItem, index) => (
        <div key={index} style={styles.itemContent}>{subItem}</div>
      ))}
    </>
  );

  if (link && title) {
    return (
      <div style={styles.item}>
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Content />
        </a>
      </div>
    );
  }

  return <div style={styles.item}><Content /></div>;
};

const CircularSplitBreakdown = ({ sections, styles, centerContent, centerStyles }) => {
  const defaultStyles = {
    container: {
      width: '100%',
      maxWidth: '1024px',
      margin: '0 auto',
      position: 'relative',
      height: '600px'
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '40px'
    },
    section: {
      position: 'absolute',
      width: '30%',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '10px',
      backgroundColor: '#f3f4f6'
    },
    centerCircle: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2
    },
    sideTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textAlign: 'center'
    },
    item: {
      padding: '10px 0',
      textAlign: 'center',
      width: '100%'
    },
    itemTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '10px',
      textAlign: 'center'
    },
    itemContent: {
      fontSize: '14px',
      margin: '5px 0',
      textAlign: 'center'
    }
  };

  const finalStyles = styles || defaultStyles;
  const finalCenterStyles = centerStyles || {};

  const calculatePosition = (index, total) => {
    const angle = (2 * Math.PI * index) / total - Math.PI / 2;
    const radius = 200; // Adjust this value to change the circle size
    
    return {
      left: `${50 + 35 * Math.cos(angle)}%`,
      top: `${50 + 35 * Math.sin(angle)}%`,
      transform: 'translate(-50%, -50%)'
    };
  };

  return (
    <div style={finalStyles.container}>
      {sections.map((section, index) => {
        const position = calculatePosition(index, sections.length);
        const sectionStyle = {
          ...finalStyles.section,
          ...position,
          backgroundColor: section.backgroundColor || finalStyles.section.backgroundColor
        };

        return (
          <div key={index} style={sectionStyle}>
            {section.title && <h3 style={finalStyles.sideTitle}>{section.title}</h3>}
            {section.content.map((item, itemIndex) => (
              <RenderItem key={itemIndex} item={item} styles={finalStyles} />
            ))}
          </div>
        );
      })}

      {centerContent && (
        <div style={{...finalStyles.centerCircle, ...finalCenterStyles}}>
          {centerContent}
        </div>
      )}
    </div>
  );
};

export default CircularSplitBreakdown;