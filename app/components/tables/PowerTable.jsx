'use client';
import { useState, useRef, useCallback } from 'react';
import styles from './SquareRootsTable.module.css';

const PowerTable = () => {
 const [searchValue, setSearchValue] = useState('');
 const [activeSearch, setActiveSearch] = useState('');
 const stackRefs = useRef([]);

 const generatePowers = (base, count) => {
   return Array.from({ length: count }, (_, index) => {
     const power = index + 1;
     return {
       base,
       power,
       result: BigInt(Math.pow(base, power))
     };
   });
 };

 const stacks = [
   generatePowers(1, 10),
   generatePowers(2, 10),  
   generatePowers(3, 10),
   generatePowers(4, 10),
   generatePowers(5, 10),
   generatePowers(6, 10),
   generatePowers(7, 10),
   generatePowers(8, 10),
   generatePowers(9, 10),
   generatePowers(10, 10),
 ];

 const setStackRef = useCallback((element, index) => {
   stackRefs.current[index] = element;
 }, []);

 const getStackRange = (stackIndex) => {
   const firstPower = stacks[stackIndex][0].result;
   const lastPower = stacks[stackIndex][9].result;
   return `${firstPower} - ${lastPower}`;
 };

 const scrollToMatch = (searchNum) => {
   const searchBigInt = BigInt(searchNum);
   for (let i = 0; i < stacks.length; i++) {
     const stack = stacks[i];
     const hasMatch = stack.some(({ result }) => result === searchBigInt);
     
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

 const isHighlighted = (result) => {
   if (!activeSearch) return false;
   const searchNum = BigInt(activeSearch);
   return result === searchNum;
 };

 return (
   <div className={styles.container}>      
     <div className={styles.searchContainer}>
       <div className={styles.searchWrapper}>
         <input
           type="text"
           placeholder="Search for a power..."
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
         className={styles.searchButton1}
       >
         Search
       </button>
     </div>

     {activeSearch && !stacks.flat().some(({result}) => result === BigInt(activeSearch)) && (
       <div className={styles.notFoundMessage}>
         Number {activeSearch} is not a power in the table
       </div>
     )}

     <br/>
     <br/>
     <br/>
     
     <div className={styles.row}>
       {stacks.slice(0, 5).map((stack, stackIndex) => (
         <div 
           key={`upper-stack-${stackIndex}`} 
           className={styles.stack}
           ref={(el) => setStackRef(el, stackIndex)}
         >
           <h3 className={styles.stackTitle}>{getStackRange(stackIndex)}</h3>
           {stack.map(({ base, power, result }) => (
             <div 
               key={`${base}-${power}`} 
               className={`${styles.item} ${isHighlighted(result) ? styles.highlighted : ''}`}
             >
               {base}<sup>{power}</sup> = {result.toString()}
             </div>
           ))}
         </div>
       ))}
     </div>

     <br/>
     <br/>
     <br/>
     
     <div className={styles.row}>
       {stacks.slice(5, 10).map((stack, stackIndex) => (
         <div 
           key={`lower-stack-${stackIndex}`} 
           className={styles.stack}
           ref={(el) => setStackRef(el, stackIndex + 5)}
         >
           <h3 className={styles.stackTitle}>{getStackRange(stackIndex + 5)}</h3>
           {stack.map(({ base, power, result }) => (
             <div 
               key={`${base}-${power}`}
               className={`${styles.item} ${isHighlighted(result) ? styles.highlighted : ''}`}
             >
               {base}<sup>{power}</sup> = {result.toString()}
             </div>
           ))}
         </div>
       ))}
     </div>
   </div>
 );
};

export default PowerTable;