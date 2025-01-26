
import React, { useState, useEffect, useRef } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { Pause, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { capitalizeWords } from '@/app/utils/utils-functions';

const Tooltip = ({ children, text, show }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div 
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && show && (
        <span style={{
          position: 'absolute',
          bottom: '100%',
          left: '80%',
          transform: 'translateX(-80%)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '3px',
          whiteSpace: 'nowrap',
          fontSize: '12px',
          zIndex: 10000,
          overflow: 'visible'
        }}>
          {text}
        </span>
      )}
    </div>
  );
};

const VerticalScrollingFormulaWidget = ({ 
  formulaData = [], 
  moreFormulasLink = "#", 
  title = "",
  backgroundColor = '#6d95db',
  headerColor = '#407de5',
  footerColor = '#2162d0',
  width='100%',
  type='formula'
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isPaused) return;

    const scrollInterval = setInterval(() => {
      if (containerRef.current && contentRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const scrollHeight = contentRef.current.clientHeight;

        if (scrollTop >= scrollHeight / 2) {
          setScrollPosition(0);
        } else {
          setScrollPosition((prevPosition) => prevPosition + 1);
        }
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition]);

  const displayData = [...formulaData, ...formulaData];

  const handleBack = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop -= containerRef.current.clientHeight;
    }
  };

  const handleForward = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop += containerRef.current.clientHeight;
    }
  };

  return (
    <div style={{ position: 'relative', width: width, borderRadius: '3px', overflow: 'hidden',margin:'auto' }}>
      <div style={{ 
        backgroundColor: headerColor, 
        height: '35px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'white',
        fontWeight: '500',
        margin: '1px',
        borderRadius: '3px',
       
      }}>
        {title}
      </div>
      
      <div 
        ref={containerRef}
        style={{
          backgroundColor: backgroundColor,
          color: 'white',
          height: '180px',
          overflow: 'hidden',
          scrollBehavior: 'smooth',
          padding: '20px',
          margin: '1px'
        }}
      >
        <div ref={contentRef} style={{ textAlign: 'center' }}>
          {displayData.map((item, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <h2 style={{ fontSize: '1rem', fontWeight: '500', marginBottom: '8px' }}>{item.name}</h2>
              <div style={{ fontSize: '1rem' }}>
               { (type==='formula')?<InlineMath math={item.formula.replace(/\$/g, '')} />:item.formula}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ 
        backgroundColor: footerColor, 
        height: '35px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        padding: '0 10px',
        margin: '1px',
        borderRadius: '3px'
      }}>
        <a 
          href={moreFormulasLink}
          style={{ 
            color: 'white', 
            textDecoration: 'none', 
            fontWeight: '500',
            padding: '5px 10px',
            borderRadius: '3px',
            background: 'transparent',
            border: '1px solid white',
            transition: 'background-color 0.3s, color 0.3s',
            fontSize: '14px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = footerColor;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
        >
          See All {type==='formula'?'Formulas':capitalizeWords(type+'s')}
        </a>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <Tooltip text="Press Pause to Use" show={!isPaused}>
            <button 
              onClick={handleBack} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: isPaused ? 'pointer' : 'not-allowed', 
                color: 'white',
                zIndex: 10000 ,
               
              }}
              disabled={!isPaused}
            >
              <ChevronLeft size={24} />
            </button>
          </Tooltip>
          
          <button 
            onClick={() => setIsPaused(!isPaused)} 
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
          >
            {isPaused ? <Play size={24} /> : <Pause size={24} />}
          </button>
          
          <Tooltip text="Press Pause to Use" show={!isPaused}>
            <button 
              onClick={handleForward} 
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: isPaused ? 'pointer' : 'not-allowed', 
                color: 'white',
                overflow: 'visible',
                zIndex: 10000,
                 
              }}
              disabled={!isPaused}
            >
              <ChevronRight size={24} />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default VerticalScrollingFormulaWidget;