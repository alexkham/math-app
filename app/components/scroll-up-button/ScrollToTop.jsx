

import React, { useState, useEffect } from 'react';

function ScrollToTop({ 
  top = null,
  bottom = '40px',
  left = null,
  right = '40px',
  center = false
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const getPosition = () => {
    if (center) {
      const pos = { position: 'fixed', left: '50%', transform: 'translateX(-50%)' };
      if (top !== null) pos.top = top;
      if (bottom !== null) pos.bottom = bottom;
      return pos;
    }

    const pos = { position: 'fixed' };
    if (top !== null) pos.top = top;
    if (bottom !== null) pos.bottom = bottom;
    if (left !== null) pos.left = left;
    if (right !== null) pos.right = right;
    
    return pos;
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        ...getPosition(),
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'white',
        border: '2px solid #e0e0e0',
        cursor: 'pointer',
        display: isVisible ? 'flex' : 'none',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
        transition: 'all 0.3s ease',
        zIndex: 1000,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#f5f5f5';
        e.currentTarget.style.transform = center ? 'translateX(-50%) translateY(-3px)' : 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.transform = center ? 'translateX(-50%)' : 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
      }}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#333"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  );
}

export default ScrollToTop;