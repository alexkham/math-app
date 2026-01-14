import React, { useRef } from 'react';

export default function SVGDownloadWrapper({ children, filename = 'visualization' }) {
  const containerRef = useRef(null);

  const downloadSVG = () => {
    if (!containerRef.current) return;

    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) {
      alert('No SVG found in component');
      return;
    }

    // Clone the SVG to avoid modifying the original
    const svgClone = svgElement.cloneNode(true);
    
    // Ensure SVG has proper namespace
    svgClone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    
    // Serialize SVG to string
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgClone);
    
    // Create blob and download
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={downloadSVG}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Download SVG
        </button>
      </div>
      <div ref={containerRef}>
        {children}
      </div>
    </div>
  );
}