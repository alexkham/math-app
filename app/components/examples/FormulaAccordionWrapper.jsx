import React, { useState, useMemo, useEffect } from 'react';
import styles from '../accordion/GeneralAccordion.module.css';  // Note: changed to access accordion styles
import wrapperStyles from '../accordion/GeneralAccordionWrapper.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';
import { X } from 'lucide-react';
import FormulaAccordion from './FormulaAccordion';

const FormulaAccordionWrapper = ({ data, groupByField,type='Formula' }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const groupedAndFilteredData = useMemo(() => {
    return data.reduce((acc, item) => {
      const matchesSearch =
        item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.formula?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Object.values(item.fields || {}).some(field =>
          field.toLowerCase().includes(searchTerm.toLowerCase())
        );

      if (matchesSearch) {
        const key = item[groupByField];
        if (!acc[key]) {
          acc[key] = [];
        }
        const itemId = item.name.toLowerCase().replace(/\s+/g, '_');
        acc[key].push({...item, itemId});
      }

      return acc;
    }, {});
  }, [data, searchTerm, groupByField]);

  // const clearSearch = () => {
  //   setSearchTerm('');
  // };

  const clearSearch = () => {
    const hash = window.location.hash;
    setSearchTerm('');
    if (hash) {
      setTimeout(() => window.location.hash = hash, 100);
    }
  };
 
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.classList.add(styles.open);
          setTimeout(() => {
            const y = section.getBoundingClientRect().top + window.pageYOffset - 150;
            window.scrollTo({
              top: y,
              behavior: 'instant'
            });
          }, 100);
        }
      }, 100);
    }
  }, []);


  const handleAnchorClick = () => {
    setSearchTerm('');
  };
  
  // Add to component event listener
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
        handleAnchorClick();
      }
    });
  }, []);

  useEffect(() => {
    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach(link => {
      link.addEventListener('click', () => setSearchTerm(''));
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      if (searchTerm) {
        setSearchTerm('');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [searchTerm]);


  return (
    <div className={wrapperStyles.wrapper}>
      <div className={wrapperStyles.searchContainer}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={`Search in ${type}s...`}
          className={wrapperStyles.searchInput}
        />
        {searchTerm && (
          <button onClick={clearSearch} className={wrapperStyles.clearButton}>
            <X size={20} className={wrapperStyles.clearIcon} />
          </button>
        )}
      </div>

      {Object.entries(groupedAndFilteredData).map(([group, items]) => (
        <div key={group} className={wrapperStyles.group}>
          <h3 className={wrapperStyles.groupHeader}>{capitalizeWords(group)}</h3>
          <div className={wrapperStyles.groupContent}>
            {items.map((item) => (
              <FormulaAccordion
                key={item.itemId}
                data={item}
                idPrefix={item.itemId}
                type={type}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormulaAccordionWrapper;