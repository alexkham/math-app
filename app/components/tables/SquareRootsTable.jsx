// // // // // components/SquareRootsTable.jsx
// // // // 'use client';
// // // // import styles from './SquareRootsTable.module.css';

// // // // const SquareRootsTable = () => {
// // // //   // Generate data for the table
// // // //   const generateSquareRoots = (start, count) => {
// // // //     return Array.from({ length: count }, (_, index) => {
// // // //       const number = start + index;
// // // //       return {
// // // //         root: number,
// // // //         square: number * number
// // // //       };
// // // //     });
// // // //   };

// // // //   // Create arrays for each stack (10 numbers each)
// // // //   const stacks = [
// // // //     generateSquareRoots(1, 10),
// // // //     generateSquareRoots(11, 10),
// // // //     generateSquareRoots(21, 10),
// // // //     generateSquareRoots(31, 10),
// // // //     generateSquareRoots(41, 10),
// // // //     generateSquareRoots(51, 10),
// // // //     generateSquareRoots(61, 10),
// // // //     generateSquareRoots(71, 10),
// // // //     generateSquareRoots(81, 10),
// // // //     generateSquareRoots(91, 10),
// // // //   ];

// // // //   return (
// // // //     <div className={styles.container}>
// // // //       <h2 className={styles.title}>Square Roots of Perfect Squares 1 - 10000</h2>
      
// // // //       {/* Upper Row */}
// // // //       <div className={styles.row}>
// // // //         {stacks.slice(0, 5).map((stack, stackIndex) => (
// // // //           <div key={`upper-stack-${stackIndex}`} className={styles.stack}>
            
// // // //             {stack.map(({ root, square }) => (
// // // //               <div key={root} className={styles.item}>
// // // //                 √{square} = {root}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //        <br/>
// // // //        <br/>
// // // //        <br/>
// // // //       {/* Lower Row */}
// // // //       <div className={styles.row}>
// // // //         {stacks.slice(5, 10).map((stack, stackIndex) => (
// // // //           <div key={`lower-stack-${stackIndex}`} className={styles.stack}>
// // // //             {stack.map(({ root, square }) => (
// // // //               <div key={root} className={styles.item}>
// // // //                 √{square} = {root}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SquareRootsTable;

// // // // components/SquareRootsTable.jsx
// // // 'use client';
// // // import styles from './SquareRootsTable.module.css';

// // // const SquareRootsTable = () => {
// // //   // Generate data for the table
// // //   const generateSquareRoots = (start, count) => {
// // //     return Array.from({ length: count }, (_, index) => {
// // //       const number = start + index;
// // //       return {
// // //         root: number,
// // //         square: number * number
// // //       };
// // //     });
// // //   };

// // //   // Create arrays for each stack (10 numbers each)
// // //   const stacks = [
// // //     generateSquareRoots(1, 10),
// // //     generateSquareRoots(11, 10),
// // //     generateSquareRoots(21, 10),
// // //     generateSquareRoots(31, 10),
// // //     generateSquareRoots(41, 10),
// // //     generateSquareRoots(51, 10),
// // //     generateSquareRoots(61, 10),
// // //     generateSquareRoots(71, 10),
// // //     generateSquareRoots(81, 10),
// // //     generateSquareRoots(91, 10),
// // //   ];

// // //   // const getStackRange = (stackIndex) => {
// // //   //   const firstRoot = stacks[stackIndex][0].root;
// // //   //   const lastRoot = stacks[stackIndex][9].root;
// // //   //   return `${firstRoot} - ${lastRoot}`;
// // //   // };

// // //   const getStackRange = (stackIndex) => {
// // //     const firstSquare = stacks[stackIndex][0].square;
// // //     const lastSquare = stacks[stackIndex][9].square;
// // //     return `${firstSquare} - ${lastSquare}`;
// // //   };
 
// // //   return (
// // //     <div className={styles.container}>
// // //       <h2 className={styles.title}>Square Roots of Perfect Squares 1 - 10000</h2>
      
// // //       {/* Upper Row */}
// // //       <div className={styles.row}>
// // //         {stacks.slice(0, 5).map((stack, stackIndex) => (
// // //           <div key={`upper-stack-${stackIndex}`} className={styles.stack}>
// // //             <h3 className={styles.stackTitle}>{getStackRange(stackIndex)}</h3>
// // //             {stack.map(({ root, square }) => (
// // //               <div key={root} className={styles.item}>
// // //                 √{square} = {root}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <br/>
// // //       <br/>
// // //       <br/>
      
// // //       {/* Lower Row */}
// // //       <div className={styles.row}>
// // //         {stacks.slice(5, 10).map((stack, stackIndex) => (
// // //           <div key={`lower-stack-${stackIndex}`} className={styles.stack}>
// // //             <h3 className={styles.stackTitle}>{getStackRange(stackIndex + 5)}</h3>
// // //             {stack.map(({ root, square }) => (
// // //               <div key={root} className={styles.item}>
// // //                 √{square} = {root}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SquareRootsTable;

// // // components/SquareRootsTable.jsx
// // 'use client';
// // import { useState } from 'react';
// // import styles from './SquareRootsTable.module.css';

// // const SquareRootsTable = () => {
// //   const [searchValue, setSearchValue] = useState('');
// //   const [activeSearch, setActiveSearch] = useState('');

// //   // Generate data for the table
// //   const generateSquareRoots = (start, count) => {
// //     return Array.from({ length: count }, (_, index) => {
// //       const number = start + index;
// //       return {
// //         root: number,
// //         square: number * number
// //       };
// //     });
// //   };

// //   // Create arrays for each stack (10 numbers each)
// //   const stacks = [
// //     generateSquareRoots(1, 10),
// //     generateSquareRoots(11, 10),
// //     generateSquareRoots(21, 10),
// //     generateSquareRoots(31, 10),
// //     generateSquareRoots(41, 10),
// //     generateSquareRoots(51, 10),
// //     generateSquareRoots(61, 10),
// //     generateSquareRoots(71, 10),
// //     generateSquareRoots(81, 10),
// //     generateSquareRoots(91, 10),
// //   ];

// //   const getStackRange = (stackIndex) => {
// //     const firstSquare = stacks[stackIndex][0].square;
// //     const lastSquare = stacks[stackIndex][9].square;
// //     return `${firstSquare} - ${lastSquare}`;
// //   };

// //   const handleSearch = () => {
// //     setActiveSearch(searchValue.trim());
// //   };

// //   const isHighlighted = (square) => {
// //     if (!activeSearch) return false;
// //     return square === parseInt(activeSearch);
// //   };


  

// //   return (
// //     <div className={styles.container}>
// //       <h2 className={styles.title}>Square Roots of Perfect Squares 1 - 10000</h2>
      
// //       <div className={styles.searchContainer}>
// //         <input
// //           type="number"
// //           placeholder="Search for a perfect square..."
// //           value={searchValue}
// //           onChange={(e) => setSearchValue(e.target.value)}
// //           onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
// //           className={styles.searchInput}
// //         />
// //         <button 
// //           onClick={handleSearch}
// //           className={styles.searchButton}
// //         >
// //           Search
// //         </button>
// //       </div>

// //       {/* Upper Row */}
// //       <div className={styles.row}>
// //         {stacks.slice(0, 5).map((stack, stackIndex) => (
// //           <div key={`upper-stack-${stackIndex}`} className={styles.stack}>
// //             <h3 className={styles.stackTitle}>{getStackRange(stackIndex)}</h3>
// //             {stack.map(({ root, square }) => (
// //               <div 
// //                 key={root} 
// //                 className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
// //               >
// //                 √{square} = {root}
// //               </div>
// //             ))}
// //           </div>
// //         ))}
// //       </div>

// //       <br/>
// //       <br/>
// //       <br/>
      
// //       {/* Lower Row */}
// //       <div className={styles.row}>
// //         {stacks.slice(5, 10).map((stack, stackIndex) => (
// //           <div key={`lower-stack-${stackIndex}`} className={styles.stack}>
// //             <h3 className={styles.stackTitle}>{getStackRange(stackIndex + 5)}</h3>
// //             {stack.map(({ root, square }) => (
// //               <div 
// //                 key={root} 
// //                 className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
// //               >
// //                 √{square} = {root}
// //               </div>
// //             ))}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default SquareRootsTable;

// // components/SquareRootsTable.jsx
// 'use client';
// import { useState } from 'react';
// import styles from './SquareRootsTable.module.css';

// const SquareRootsTable = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const [activeSearch, setActiveSearch] = useState('');

//   const generateSquareRoots = (start, count) => {
//     return Array.from({ length: count }, (_, index) => {
//       const number = start + index;
//       return {
//         root: number,
//         square: number * number
//       };
//     });
//   };

//   const stacks = [
//     generateSquareRoots(1, 10),
//     generateSquareRoots(11, 10),
//     generateSquareRoots(21, 10),
//     generateSquareRoots(31, 10),
//     generateSquareRoots(41, 10),
//     generateSquareRoots(51, 10),
//     generateSquareRoots(61, 10),
//     generateSquareRoots(71, 10),
//     generateSquareRoots(81, 10),
//     generateSquareRoots(91, 10),
//   ];

//   const getStackRange = (stackIndex) => {
//     const firstSquare = stacks[stackIndex][0].square;
//     const lastSquare = stacks[stackIndex][9].square;
//     return `${firstSquare} - ${lastSquare}`;
//   };

//   const handleSearch = () => {
//     setActiveSearch(searchValue.trim());
//   };

//   const resetSearch = () => {
//     setSearchValue('');
//     setActiveSearch('');
//   };

//   const isHighlighted = (square) => {
//     if (!activeSearch) return false;
//     return square === parseInt(activeSearch);
//   };

//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Square Roots of Perfect Squares 1 - 10000</h2>
      
//       <div className={styles.searchContainer}>
//         <input
//           type="number"
//           placeholder="Search for a perfect square..."
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//           className={styles.searchInput}
//         />
//         <button 
//           onClick={handleSearch}
//           className={styles.searchButton}
//         >
//           Search
//         </button>
//         <button 
//           onClick={resetSearch}
//           className={styles.resetSearchButton}
//         >
//           Reset Search
//         </button>
//       </div>
      
//       {/* Upper Row */}
//       <div className={styles.row}>
//         {stacks.slice(0, 5).map((stack, stackIndex) => (
//           <div key={`upper-stack-${stackIndex}`} className={styles.stack}>
//             <h3 className={styles.stackTitle}>{getStackRange(stackIndex)}</h3>
//             {stack.map(({ root, square }) => (
//               <div 
//                 key={root} 
//                 className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
//               >
//                 √{square} = {root}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>

//       <br/>
//       <br/>
//       <br/>
      
//       {/* Lower Row */}
//       <div className={styles.row}>
//         {stacks.slice(5, 10).map((stack, stackIndex) => (
//           <div key={`lower-stack-${stackIndex}`} className={styles.stack}>
//             <h3 className={styles.stackTitle}>{getStackRange(stackIndex + 5)}</h3>
//             {stack.map(({ root, square }) => (
//               <div 
//                 key={root} 
//                 className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
//               >
//                 √{square} = {root}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SquareRootsTable;

'use client';
import { useState, useRef, useCallback } from 'react';
import styles from './SquareRootsTable.module.css';

const SquareRootsTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const stackRefs = useRef([]);

  const generateSquareRoots = (start, count) => {
    return Array.from({ length: count }, (_, index) => {
      const number = start + index;
      return {
        root: number,
        square: number * number
      };
    });
  };

  const stacks = [
    generateSquareRoots(1, 10),
    generateSquareRoots(11, 10),
    generateSquareRoots(21, 10),
    generateSquareRoots(31, 10),
    generateSquareRoots(41, 10),
    generateSquareRoots(51, 10),
    generateSquareRoots(61, 10),
    generateSquareRoots(71, 10),
    generateSquareRoots(81, 10),
    generateSquareRoots(91, 10),
  ];

  const setStackRef = useCallback((element, index) => {
    stackRefs.current[index] = element;
  }, []);

  const getStackRange = (stackIndex) => {
    const firstSquare = stacks[stackIndex][0].square;
    const lastSquare = stacks[stackIndex][9].square;
    return `${firstSquare} - ${lastSquare}`;
  };

  const scrollToMatch = (searchNum) => {
    for (let i = 0; i < stacks.length; i++) {
      const stack = stacks[i];
      const hasMatch = stack.some(({ square }) => square === searchNum);
      
      if (hasMatch && stackRefs.current[i]) {
        stackRefs.current[i].scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        break;
      }
    }
  };

  const handleSearch = () => {
    if (!searchValue.trim()) return;
    setActiveSearch(searchValue.trim());
    const searchNum = parseInt(searchValue.trim(), 10);
    if (!isNaN(searchNum)) {
      scrollToMatch(searchNum);
    }
  };

  const resetSearch = () => {
    setSearchValue('');
    setActiveSearch('');
  };

  const isHighlighted = (square) => {
    if (!activeSearch) return false;
    const searchNum = parseInt(activeSearch, 10);
    return square === searchNum;
  };

  return (
    <div className={styles.container}>
      {/* <h2 className={styles.title}>Square Roots of Perfect Squares 1 - 10000</h2> */}
      
      {/* <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search for a perfect square..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className={styles.searchInput}
        />
        <button 
          onClick={handleSearch}
          className={styles.searchButton}
        >
          Search
        </button>
        <button 
          onClick={resetSearch}
          className={styles.resetSearchButton}
        >
          Reset Search
        </button>
      </div> */}

{/* <div className={styles.searchContainer}>
  <div className={styles.searchWrapper}>
    <input
      type="text"
      placeholder="Search for a perfect square..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      className={styles.searchInput}
    />
    {searchValue && (
      <button 
        onClick={resetSearch}
        className={styles.resetButton}
        aria-label="Clear search"
      >
        ×
      </button>
    )}
  </div>
  <button 
    onClick={handleSearch}
    className={styles.searchButton}
  >
    Search
  </button>
</div> */}

<div className={styles.searchContainer}>
  <div className={styles.searchWrapper}>
    <input
      type="text"
      placeholder="Search for a perfect square..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      className={styles.searchInput}
    />
    {searchValue && (
      <button 
        onClick={resetSearch}
        className={styles.resetButton}
        aria-label="Clear search"
      >
        ×
      </button>
    )}
  </div>
  <button 
    onClick={handleSearch}
    className={styles.searchButton}
  >
    Search
  </button>
</div>
{activeSearch && !stacks.flat().some(({square}) => square === parseInt(activeSearch)) && (
  <div className={styles.notFoundMessage}>
    Number {activeSearch} is not a perfect square in the table
  </div>
)}

<br/>
<br/>
<br/>
      
      {/* Upper Row */}
      <div className={styles.row}>
        {stacks.slice(0, 5).map((stack, stackIndex) => (
          <div 
            key={`upper-stack-${stackIndex}`} 
            className={styles.stack}
            ref={(el) => setStackRef(el, stackIndex)}
          >
            <h3 className={styles.stackTitle}>{getStackRange(stackIndex)}</h3>
            {stack.map(({ root, square }) => (
              <div 
                key={root} 
                className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
              >
                √{square} = {root}
              </div>
            ))}
          </div>
        ))}
      </div>

      <br/>
      <br/>
      <br/>
      
      {/* Lower Row */}
      <div className={styles.row}>
        {stacks.slice(5, 10).map((stack, stackIndex) => (
          <div 
            key={`lower-stack-${stackIndex}`} 
            className={styles.stack}
            ref={(el) => setStackRef(el, stackIndex + 5)}
          >
            <h3 className={styles.stackTitle}>{getStackRange(stackIndex + 5)}</h3>
            {stack.map(({ root, square }) => (
              <div 
                key={root} 
                className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
              >
                √{square} = {root}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SquareRootsTable;