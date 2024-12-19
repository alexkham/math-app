// // // components/SquareRootsTable.jsx
// // 'use client';
// // import { useState, useRef, useCallback } from 'react';
// // import styles from './SquareRootsTable.module.css';

// // const GenericSquareRootsTable = () => {
// //   const [searchValue, setSearchValue] = useState('');
// //   const [activeSearch, setActiveSearch] = useState('');
// //   const [fromNumber, setFromNumber] = useState(1);
// //   const [toNumber, setToNumber] = useState(100);
// //   const stackRefs = useRef([]);

// //   const MAX_RANGE = 100000;

// //   const handleRangeChange = (newFrom, newTo) => {
// //     if (newTo - newFrom > MAX_RANGE) {
// //       alert(`Maximum range allowed is ${MAX_RANGE} numbers`);
// //       return false;
// //     }
// //     if (newFrom < 1) {
// //       alert("From number must be at least 1");
// //       return false;
// //     }
// //     return true;
// //   };

// //   const handleFromChange = (e) => {
// //     const newFrom = parseInt(e.target.value) || 1;
// //     if (handleRangeChange(newFrom, toNumber)) {
// //       setFromNumber(newFrom);
// //     }
// //   };

// //   const handleToChange = (e) => {
// //     const newTo = parseInt(e.target.value) || 1;
// //     if (handleRangeChange(fromNumber, newTo)) {
// //       setToNumber(newTo);
// //     }
// //   };

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
// //   const calculateStacks = useCallback(() => {
// //     const total = Math.min(toNumber - fromNumber + 1, MAX_RANGE);
// //     const itemsPerStack = 10;
// //     const numStacks = Math.ceil(total / itemsPerStack);
    
// //     const stacks = [];
// //     for (let i = 0; i < numStacks; i++) {
// //       const start = fromNumber + (i * itemsPerStack);
// //       const count = Math.min(itemsPerStack, toNumber - start + 1);
      
// //       if (count > 0) {
// //         stacks.push(generateSquareRoots(start, count));
// //       }
// //     }
// //     return stacks;
// //   }, [fromNumber, toNumber]);

// //   const stacks = calculateStacks();
// //   const midPoint = Math.ceil(stacks.length / 2);
// //   const upperStacks = stacks.slice(0, midPoint);
// //   const lowerStacks = stacks.slice(midPoint);

// //   const setStackRef = useCallback((element, index) => {
// //     stackRefs.current[index] = element;
// //   }, []);

// //   const getStackRange = (stack) => {
// //     if (!stack.length) return '';
// //     const firstSquare = stack[0].square;
// //     const lastSquare = stack[stack.length - 1].square;
// //     return `${firstSquare} - ${lastSquare}`;
// //   };

// //   const scrollToMatch = (searchNum) => {
// //     for (let i = 0; i < stacks.length; i++) {
// //       const stack = stacks[i];
// //       const hasMatch = stack.some(({ square }) => square === searchNum);
      
// //       if (hasMatch && stackRefs.current[i]) {
// //         stackRefs.current[i].scrollIntoView({
// //           behavior: 'smooth',
// //           block: 'center'
// //         });
// //         break;
// //       }
// //     }
// //   };

// //   const handleSearch = () => {
// //     if (!searchValue.trim()) return;
// //     setActiveSearch(searchValue.trim());
// //     const searchNum = parseInt(searchValue.trim(), 10);
// //     if (!isNaN(searchNum)) {
// //       scrollToMatch(searchNum);
// //     }
// //   };

// //   const resetSearch = () => {
// //     setSearchValue('');
// //     setActiveSearch('');
// //   };

// //   const isHighlighted = (square) => {
// //     if (!activeSearch) return false;
// //     const searchNum = parseInt(activeSearch, 10);
// //     return square === searchNum;
// //   };

// //   return (
// //     <div className={styles.container}>
// //       <h2 className={styles.title}>Square Roots of Perfect Squares</h2>
      
// //       <div className={styles.rangeInputs}>
// //         <div className={styles.inputGroup}>
// //           <label htmlFor="fromNumber">From:</label>
// //           <input
// //             type="number"
// //             id="fromNumber"
// //             value={fromNumber}
// //             onChange={handleFromChange}
// //             min="1"
// //             className={styles.rangeInput}
// //           />
// //         </div>
// //         <div className={styles.inputGroup}>
// //           <label htmlFor="toNumber">To:</label>
// //           <input
// //             type="number"
// //             id="toNumber"
// //             value={toNumber}
// //             onChange={handleToChange}
// //             min={fromNumber}
// //             className={styles.rangeInput}
// //           />
// //         </div>
// //       </div>

// //       <div className={styles.searchContainer}>
// //         <div className={styles.searchWrapper}>
// //           <input
// //             type="text"
// //             placeholder="Search for a perfect square..."
// //             value={searchValue}
// //             onChange={(e) => setSearchValue(e.target.value)}
// //             onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
// //             className={styles.searchInput}
// //           />
// //           {searchValue && (
// //             <button 
// //               onClick={resetSearch}
// //               className={styles.resetButton}
// //               aria-label="Clear search"
// //             >
// //               ×
// //             </button>
// //           )}
// //         </div>
// //         <button 
// //           onClick={handleSearch}
// //           className={styles.searchButton}
// //         >
// //           Search
// //         </button>
// //       </div>

// //       {activeSearch && !stacks.flat().some(({square}) => square === parseInt(activeSearch)) && (
// //         <div className={styles.notFoundMessage}>
// //           {activeSearch} is not found in perfect squares table
// //         </div>
// //       )}
      
// //       {/* Upper Row */}
// //       <div className={styles.row}>
// //         {upperStacks.map((stack, stackIndex) => (
// //           <div 
// //             key={`upper-stack-${stackIndex}`} 
// //             className={styles.stack}
// //             ref={(el) => setStackRef(el, stackIndex)}
// //           >
// //             <h3 className={styles.stackTitle}>{getStackRange(stack)}</h3>
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
// //       {lowerStacks.length > 0 && (
// //         <div className={styles.row}>
// //           {lowerStacks.map((stack, stackIndex) => (
// //             <div 
// //               key={`lower-stack-${stackIndex}`} 
// //               className={styles.stack}
// //               ref={(el) => setStackRef(el, stackIndex + upperStacks.length)}
// //             >
// //               <h3 className={styles.stackTitle}>{getStackRange(stack)}</h3>
// //               {stack.map(({ root, square }) => (
// //                 <div 
// //                   key={root} 
// //                   className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
// //                 >
// //                   √{square} = {root}
// //                 </div>
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default GenericSquareRootsTable;


// // components/SquareRootsTable.jsx
// 'use client';
// import { useState, useRef, useCallback } from 'react';
// import styles from './SquareRootsTable.module.css';

// const GenericSquareRootsTable = () => {
//  const [searchValue, setSearchValue] = useState('');
//  const [activeSearch, setActiveSearch] = useState('');
//  const [fromNumber, setFromNumber] = useState(1);
//  const [toNumber, setToNumber] = useState(100);
//  const stackRefs = useRef([]);

//  const MAX_SQUARE = 10000000;

//  const handleRangeChange = (newFrom, newTo) => {
//    if (newFrom < 1) {
//      alert("From number must be at least 1");
//      return false;
//    }
//    if (newTo * newTo > MAX_SQUARE) {
//      alert(`Maximum root allowed is ${Math.floor(Math.sqrt(MAX_SQUARE))} (square: ${MAX_SQUARE})`);
//      return false;
//    }
//    return true;
//  };

//  const handleFromChange = (e) => {
//    const newFrom = parseInt(e.target.value) || 1;
//    if (handleRangeChange(newFrom, toNumber)) {
//      setFromNumber(newFrom);
//    }
//  };

//  const handleToChange = (e) => {
//    const newTo = parseInt(e.target.value) || 1;
//    if (handleRangeChange(fromNumber, newTo)) {
//      setToNumber(newTo);
//    }
//  };

//  const generateSquareRoots = (start, count) => {
//    return Array.from({ length: count }, (_, index) => {
//      const number = start + index;
//      return {
//        root: number,
//        square: number * number
//      };
//    });
//  };

//  const calculateStacks = useCallback(() => {
//    const total = toNumber - fromNumber + 1;
//    const itemsPerStack = 10;
//    const numStacks = Math.ceil(total / itemsPerStack);
   
//    const stacks = [];
//    for (let i = 0; i < numStacks; i++) {
//      const start = fromNumber + (i * itemsPerStack);
//      const count = Math.min(itemsPerStack, toNumber - start + 1);
     
//      if (count > 0) {
//        stacks.push(generateSquareRoots(start, count));
//      }
//    }
//    return stacks;
//  }, [fromNumber, toNumber]);

//  const stacks = calculateStacks();
//  const midPoint = Math.ceil(stacks.length / 2);
//  const upperStacks = stacks.slice(0, midPoint);
//  const lowerStacks = stacks.slice(midPoint);

//  const setStackRef = useCallback((element, index) => {
//    stackRefs.current[index] = element;
//  }, []);

//  const getStackRange = (stack) => {
//    if (!stack.length) return '';
//    const firstSquare = stack[0].square;
//    const lastSquare = stack[stack.length - 1].square;
//    return `${firstSquare} - ${lastSquare}`;
//  };

//  const scrollToMatch = (searchNum) => {
//    for (let i = 0; i < stacks.length; i++) {
//      const stack = stacks[i];
//      const hasMatch = stack.some(({ square }) => square === searchNum);
     
//      if (hasMatch && stackRefs.current[i]) {
//        stackRefs.current[i].scrollIntoView({
//          behavior: 'smooth',
//          block: 'center'
//        });
//        break;
//      }
//    }
//  };

//  const handleSearch = () => {
//    if (!searchValue.trim()) return;
//    setActiveSearch(searchValue.trim());
//    const searchNum = parseInt(searchValue.trim(), 10);
//    if (!isNaN(searchNum)) {
//      scrollToMatch(searchNum);
//    }
//  };

//  const resetSearch = () => {
//    setSearchValue('');
//    setActiveSearch('');
//  };

//  const isHighlighted = (square) => {
//    if (!activeSearch) return false;
//    const searchNum = parseInt(activeSearch, 10);
//    return square === searchNum;
//  };

//  return (
//    <div className={styles.container}>
//      <h2 className={styles.title}>Square Roots of Perfect Squares</h2>
     
//      <div className={styles.rangeInputs}>
//        <div className={styles.inputGroup}>
//          <label htmlFor="fromNumber">From:</label>
//          <input
//            type="number"
//            id="fromNumber"
//            value={fromNumber}
//            onChange={handleFromChange}
//            min="1"
//            className={styles.rangeInput}
//          />
//        </div>
//        <div className={styles.inputGroup}>
//          <label htmlFor="toNumber">To:</label>
//          <input
//            type="number"
//            id="toNumber"
//            value={toNumber}
//            onChange={handleToChange}
//            min={fromNumber}
//            className={styles.rangeInput}
//          />
//        </div>
//      </div>

//      <div className={styles.searchContainer}>
//        <div className={styles.searchWrapper}>
//          <input
//            type="text"
//            placeholder="Search for a perfect square..."
//            value={searchValue}
//            onChange={(e) => setSearchValue(e.target.value)}
//            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//            className={styles.searchInput}
//          />
//          {searchValue && (
//            <button 
//              onClick={resetSearch}
//              className={styles.resetButton}
//              aria-label="Clear search"
//            >
//              ×
//            </button>
//          )}
//        </div>
//        <button 
//          onClick={handleSearch}
//          className={styles.searchButton}
//        >
//          Search
//        </button>
//      </div>

//      {activeSearch && !stacks.flat().some(({square}) => square === parseInt(activeSearch)) && (
//        <div className={styles.notFoundMessage}>
//          {activeSearch} is not found in perfect squares table
//        </div>
//      )}
     
//      {/* Upper Row */}
//      <div className={styles.row}>
//        {upperStacks.map((stack, stackIndex) => (
//          <div 
//            key={`upper-stack-${stackIndex}`} 
//            className={styles.stack}
//            ref={(el) => setStackRef(el, stackIndex)}
//          >
//            <h3 className={styles.stackTitle}>{getStackRange(stack)}</h3>
//            {stack.map(({ root, square }) => (
//              <div 
//                key={root} 
//                className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
//              >
//                √{square} = {root}
//              </div>
//            ))}
//          </div>
//        ))}
//      </div>

//      <br/>
//      <br/>
//      <br/>
     
//      {/* Lower Row */}
//      {lowerStacks.length > 0 && (
//        <div className={styles.row}>
//          {lowerStacks.map((stack, stackIndex) => (
//            <div 
//              key={`lower-stack-${stackIndex}`} 
//              className={styles.stack}
//              ref={(el) => setStackRef(el, stackIndex + upperStacks.length)}
//            >
//              <h3 className={styles.stackTitle}>{getStackRange(stack)}</h3>
//              {stack.map(({ root, square }) => (
//                <div 
//                  key={root} 
//                  className={`${styles.item} ${isHighlighted(square) ? styles.highlighted : ''}`}
//                >
//                  √{square} = {root}
//                </div>
//              ))}
//            </div>
//          ))}
//        </div>
//      )}
//    </div>
//  );
// };

// export default GenericSquareRootsTable;

// components/SquareRootsTable.jsx
'use client';
import { useState, useRef, useCallback } from 'react';
import styles from './SquareRootsTable.module.css';

const GenericSquareRootsTable = () => {
 const [searchValue, setSearchValue] = useState('');
 const [activeSearch, setActiveSearch] = useState('');
 const [fromNumber, setFromNumber] = useState(1);
 const [toNumber, setToNumber] = useState(100);
 const stackRefs = useRef([]);

 const generateSquareRoots = (start, count) => {
   return Array.from({ length: count }, (_, index) => {
     const number = start + index;
     return {
       root: number,
       square: number * number
     };
   }).filter(({square}) => square <= 10000000);
 };

 const calculateStacks = useCallback(() => {
   const total = toNumber - fromNumber + 1;
   const itemsPerStack = 10;
   const numStacks = Math.ceil(total / itemsPerStack);
   
   const stacks = [];
   for (let i = 0; i < numStacks; i++) {
     const start = fromNumber + (i * itemsPerStack);
     const count = Math.min(itemsPerStack, toNumber - start + 1);
     
     if (count > 0) {
       const stack = generateSquareRoots(start, count);
       if (stack.length > 0) {
         stacks.push(stack);
       }
     }
   }
   return stacks;
 }, [fromNumber, toNumber]);

 const stacks = calculateStacks();
 const midPoint = Math.ceil(stacks.length / 2);
 const upperStacks = stacks.slice(0, midPoint);
 const lowerStacks = stacks.slice(midPoint);

 const setStackRef = useCallback((element, index) => {
   stackRefs.current[index] = element;
 }, []);

 const getStackRange = (stack) => {
   if (!stack.length) return '';
   const firstSquare = stack[0].square;
   const lastSquare = stack[stack.length - 1].square;
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
     <h2 className={styles.title}>Square Roots of Perfect Squares</h2>
     
     <div className={styles.rangeInputs}>
       <div className={styles.inputGroup}>
         <label htmlFor="fromNumber">From:</label>
         <input
           type="number"
           id="fromNumber"
           value={fromNumber}
           onChange={(e) => setFromNumber(parseInt(e.target.value) || 1)}
           min="1"
           className={styles.rangeInput}
         />
       </div>
       <div className={styles.inputGroup}>
         <label htmlFor="toNumber">To:</label>
         <input
           type="number"
           id="toNumber"
           value={toNumber}
           onChange={(e) => setToNumber(parseInt(e.target.value) || 1)}
           min={fromNumber}
           className={styles.rangeInput}
         />
       </div>
     </div>

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
         {activeSearch} is not found in perfect squares table
       </div>
     )}
     
     {/* Upper Row */}
     <div className={styles.row}>
       {upperStacks.map((stack, stackIndex) => (
         <div 
           key={`upper-stack-${stackIndex}`} 
           className={styles.stack}
           ref={(el) => setStackRef(el, stackIndex)}
         >
           <h3 className={styles.stackTitle}>{getStackRange(stack)}</h3>
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
     {lowerStacks.length > 0 && (
       <div className={styles.row}>
         {lowerStacks.map((stack, stackIndex) => (
           <div 
             key={`lower-stack-${stackIndex}`} 
             className={styles.stack}
             ref={(el) => setStackRef(el, stackIndex + upperStacks.length)}
           >
             <h3 className={styles.stackTitle}>{getStackRange(stack)}</h3>
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
     )}
   </div>
 );
};

export default GenericSquareRootsTable;