// // import React, { useState, useEffect } from 'react';

// // function ScrollToBottom() {
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const toggleVisibility = () => {
// //       const scrolled = window.scrollY;
// //       const windowHeight = window.innerHeight;
// //       const documentHeight = document.documentElement.scrollHeight;
      
// //       // Show button when NOT at bottom
// //       if (scrolled + windowHeight < documentHeight - 100) {
// //         setIsVisible(true);
// //       } else {
// //         setIsVisible(false);
// //       }
// //     };

// //     window.addEventListener('scroll', toggleVisibility);
// //     toggleVisibility(); // Check on mount

// //     return () => {
// //       window.removeEventListener('scroll', toggleVisibility);
// //     };
// //   }, []);

// //   const scrollToBottom = () => {
// //     window.scrollTo({
// //       top: document.documentElement.scrollHeight,
// //       behavior: 'smooth'
// //     });
// //   };

// //   return (
// //     <button
// //       onClick={scrollToBottom}
// //       style={{
// //         position: 'fixed',
// //         bottom: '40px',
// //         right: '40px',
// //         width: '50px',
// //         height: '50px',
// //         borderRadius: '50%',
// //         background: 'white',
// //         border: '2px solid #e0e0e0',
// //         cursor: 'pointer',
// //         display: isVisible ? 'flex' : 'none',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
// //         transition: 'all 0.3s ease',
// //         zIndex: 1000,
// //       }}
// //       onMouseEnter={(e) => {
// //         e.currentTarget.style.background = '#f5f5f5';
// //         e.currentTarget.style.transform = 'translateY(-3px)';
// //         e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
// //       }}
// //       onMouseLeave={(e) => {
// //         e.currentTarget.style.background = 'white';
// //         e.currentTarget.style.transform = 'translateY(0)';
// //         e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
// //       }}
// //       aria-label="Scroll to bottom"
// //     >
// //       <svg
// //         xmlns="http://www.w3.org/2000/svg"
// //         width="24"
// //         height="24"
// //         viewBox="0 0 24 24"
// //         fill="none"
// //         stroke="#333"
// //         strokeWidth="2"
// //         strokeLinecap="round"
// //         strokeLinejoin="round"
// //       >
// //         <polyline points="6 9 12 15 18 9"></polyline>
// //       </svg>
// //     </button>
// //   );
// // }

// // export default ScrollToBottom;


// import React, { useState, useEffect } from 'react';

// function ScrollToBottom({ 
//   bottom = '40px', 
//   right = '40px',
//   left = null,
//   top = null 
// }) {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       const scrolled = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;
      
//       // Show button when NOT at bottom
//       if (scrolled + windowHeight < documentHeight - 100) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     };

//     window.addEventListener('scroll', toggleVisibility);
//     toggleVisibility(); // Check on mount

//     return () => {
//       window.removeEventListener('scroll', toggleVisibility);
//     };
//   }, []);

//   const scrollToBottom = () => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth'
//     });
//   };

//   const position = {
//     position: 'fixed',
//     ...(bottom !== null && { bottom }),
//     ...(right !== null && { right }),
//     ...(left !== null && { left }),
//     ...(top !== null && { top }),
//   };

//   return (
//     <button
//       onClick={scrollToBottom}
//       style={{
//         ...position,
//         width: '50px',
//         height: '50px',
//         borderRadius: '50%',
//         background: 'white',
//         border: '2px solid #e0e0e0',
//         cursor: 'pointer',
//         display: isVisible ? 'flex' : 'none',
//         alignItems: 'center',
//         justifyContent: 'center',
//         boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
//         transition: 'all 0.3s ease',
//         zIndex: 1000,
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.background = '#f5f5f5';
//         e.currentTarget.style.transform = 'translateY(-3px)';
//         e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.background = 'white';
//         e.currentTarget.style.transform = 'translateY(0)';
//         e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
//       }}
//       aria-label="Scroll to bottom"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="24"
//         height="24"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="#333"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <polyline points="6 9 12 15 18 9"></polyline>
//       </svg>
//     </button>
//   );
// }

// export default ScrollToBottom;


import React, { useState, useEffect } from 'react';

function ScrollToBottom({ 
  bottom = '40px', 
  right = '40px',
  left = null,
  top = null,
  center = false,
  offset = '40px'
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button when NOT at bottom
      if (scrolled + windowHeight < documentHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Check on mount

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  const position = center 
    ? {
        position: 'fixed',
        bottom: offset,
        left: '50%',
        transform: 'translateX(-50%)',
      }
    : {
        position: 'fixed',
        ...(bottom !== null && { bottom }),
        ...(right !== null && { right }),
        ...(left !== null && { left }),
        ...(top !== null && { top }),
      };

  return (
    <button
      onClick={scrollToBottom}
      style={{
        ...position,
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
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
      }}
      aria-label="Scroll to bottom"
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
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
  );
}

export default ScrollToBottom;