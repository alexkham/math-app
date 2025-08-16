'use client';
import { useState, useRef, useCallback } from 'react';
import styles from './SquareRootsTable.module.css';

const CubeRootsTable = () => {
  const [searchValue, setSearchValue] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const stackRefs = useRef([]);

  const generateCubeRoots = (start, count) => {
    return Array.from({ length: count }, (_, index) => {
      const number = start + index;
      return {
        root: number,
        cube: number * number * number
      };
    });
  };

  const stacks = [
    generateCubeRoots(1, 10),
    generateCubeRoots(11, 10),
    generateCubeRoots(21, 10),
    generateCubeRoots(31, 10),
    generateCubeRoots(41, 10),
    generateCubeRoots(51, 10),
    generateCubeRoots(61, 10),
    generateCubeRoots(71, 10),
    generateCubeRoots(81, 10),
    generateCubeRoots(91, 10),
  ];

  const setStackRef = useCallback((element, index) => {
    stackRefs.current[index] = element;
  }, []);

  const getStackRange = (stackIndex) => {
    const firstCube = stacks[stackIndex][0].cube;
    const lastCube = stacks[stackIndex][9].cube;
    return `${firstCube} - ${lastCube}`;
  };

  const scrollToMatch = (searchNum) => {
    for (let i = 0; i < stacks.length; i++) {
      const stack = stacks[i];
      const hasMatch = stack.some(({ cube }) => cube === searchNum);
      
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

  const isHighlighted = (cube) => {
    if (!activeSearch) return false;
    const searchNum = parseInt(activeSearch, 10);
    return cube === searchNum;
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search for a perfect cube..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className={styles.searchInput}
          />
          {searchValue && (
            <button 
              onClick={resetSearch}
              className={ styles.resetButton}
              aria-label="Clear search"
            //   style={{marginTop:'-3px'}}
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
      {activeSearch && !stacks.flat().some(({cube}) => cube === parseInt(activeSearch)) && (
        <div className={styles.notFoundMessage}>
          Number {activeSearch} is not a perfect cube in the table
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
            {stack.map(({ root, cube }) => (
              <div 
                key={root} 
                className={`${styles.item} ${isHighlighted(cube) ? styles.highlighted : ''}`}
              >
                ∛{cube} = {root}
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
            {stack.map(({ root, cube }) => (
              <div 
                key={root} 
                className={`${styles.item} ${isHighlighted(cube) ? styles.highlighted : ''}`}
              >
                ∛{cube} = {root}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubeRootsTable;