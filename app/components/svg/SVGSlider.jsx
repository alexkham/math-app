
import React, { useState, useEffect, useRef } from 'react';

const ChevronLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const SVGSlider = ({ diagrams, title, explanation, link, width = 550, height = 400, description = '' }) => {
  const svgKeys = Object.keys(diagrams);
  const [currentIndex, setCurrentIndex] = useState(0);
  const svgContainerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % svgKeys.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [svgKeys.length]);

  useEffect(() => {
    if (svgContainerRef.current) {
      const svgElement = svgContainerRef.current.querySelector('svg');
      if (svgElement) {
        const viewBox = svgElement.getAttribute('viewBox');
        if (viewBox) {
          const [, , vbWidth, vbHeight] = viewBox.split(' ').map(Number);
          const containerWidth = width - 20;
          const containerHeight = height - 60;
          const scale = Math.min(containerWidth / vbWidth, containerHeight / vbHeight);
          const scaledWidth = vbWidth * scale;
          const scaledHeight = vbHeight * scale;
          svgElement.style.width = `${scaledWidth}px`;
          svgElement.style.height = `${scaledHeight}px`;
          svgElement.style.maxWidth = '100%';
          svgElement.style.maxHeight = '100%';
        }
      }
    }
  }, [currentIndex, width, height]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? svgKeys.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % svgKeys.length
    );
  };

  const styles = getStyles(width, height);

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.headerContainer}>
        <div style={styles.titleExplanationContainer}>
          {title && <h3 style={styles.title}>{title}</h3>}
          {explanation && <p style={styles.explanation}>{explanation}</p>}
        </div>
        {link && (
          <a href={link} style={styles.link} target="_blank" rel="noopener noreferrer">
            See all Diagrams
          </a>
        )}
      </div>
      <div style={styles.frame}>
        <div 
          ref={svgContainerRef}
          style={styles.svgContainer} 
          dangerouslySetInnerHTML={{ __html: diagrams[svgKeys[currentIndex]].svg }} 
        />
        <button onClick={goToPrevious} style={{...styles.navButton, left: '10px'}}>
          <ChevronLeft />
        </button>
        <button onClick={goToNext} style={{...styles.navButton, right: '10px'}}>
          <ChevronRight />
        </button>
      </div>
      <div style={styles.dotsContainer}>
        {svgKeys.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.dot,
              backgroundColor: index === currentIndex ? '#0a3784' : '#9fb4f1',
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <div style={styles.descriptionContainer}>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const getStyles = (width, height) => ({
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px',
    backgroundColor: '#2e5ff4',
    borderRadius: '10px',
    width: `${width-30}px`,
    height: `${height-3}px`,
    // margin: '0 auto',
  },
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: '5px',
  },
  titleExplanationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#ffffff',
    margin: '0 0 2px 0',
  },
  explanation: {
    fontSize: '11px',
    color: '#e6e6e6',
    margin: '0',
    maxWidth: '70%',
  },
  frame: {
    position: 'relative',
    width: '100%',
    height: `${height - 80}px`,
    backgroundColor: 'white',
    borderRadius: '8px 8px 0 0',
    overflow: 'hidden',
    marginBottom: '5px',
  },
  svgContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: '#cccccc',
    opacity: '0.4',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '3px',
    marginBottom: '3px',
  },
  dot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    margin: '0 3px',
    cursor: 'pointer',
    backgroundColor: '#99b3ff',
    transition: 'background-color 0.3s ease',
  },
  link: {
    color: '#ffffff',
    backgroundColor: '#0a3784',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '12px',
    padding: '4px 8px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  descriptionContainer: {
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: '0 0 8px 8px',
    padding: '5px',
    minHeight: '50px',
  },
  description: {
    fontSize: '12px',
    color: '#333333',
    margin: '0',
    textAlign: 'center',
  },
});

export default SVGSlider;