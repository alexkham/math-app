// import React, { useState, useEffect, useRef } from 'react';
// import styles from './MovingBox.module.css';

// const MovingBox = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const boxRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (boxRef.current) {
//         const boxBottom = boxRef.current.getBoundingClientRect().bottom;
//         setIsSticky(boxBottom <= 0);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div ref={boxRef} className={`${styles.box} ${isSticky ? styles.sticky : ''}`}>
//       Table of Contents
//     </div>
//   );
// };

// export default MovingBox;
import React, { useState, useEffect, useRef } from 'react';
import styles from './MovingBox.module.css';

const MovingBox = () => {
  const [isSticky, setIsSticky] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const boxRect = boxRef.current.getBoundingClientRect();
        setIsSticky(boxRect.top + boxRect.height <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={boxRef} className={`${styles.box} ${isSticky ? styles.sticky : ''}`}>
      Table of Contents
    </div>
  );
};

export default MovingBox;