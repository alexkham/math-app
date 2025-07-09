

import React, { useId } from 'react';
import styles from '../accordion/GeneralAccordion.module.css';
import FormulaWidget from './FormulaWidget';
import { capitalizeWords } from '@/app/utils/utils-functions';
// import styles from './GeneralAccordion.module.css';

function FormulaAccordion({ data, width = '1000px', idPrefix = '', type='Formula' }) {
  const sectionId = `${idPrefix}`;

  const toggleSection = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.toggle(styles.open);
      if (section.classList.contains(styles.open)) {
        setTimeout(() => {
          const y = section.getBoundingClientRect().top + window.pageYOffset - 120;
          window.scrollTo({top: Math.max(0, y), behavior: 'smooth'});
        }, 400);
        window.history.pushState(null, '', `#${idPrefix}`);
      } else {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
  };

  const toggleBottom = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.remove(styles.open);
      const y = section.getBoundingClientRect().top + window.pageYOffset - 250;
      window.scrollTo({top: Math.max(0, y), behavior: 'smooth'});
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  const preventClose = (event) => {
    event.stopPropagation();
  };

  const accordionData = { ...data };
  delete accordionData.before;
  delete accordionData.after;

  const isOpen = false; // You might want to make this a state

  return (
    <>
      {data.before && (
        <div className={styles.accordion__before} style={{marginLeft:'10px'}}>
          {data.before}
        </div>
      )}
      <div className={styles.accordion} style={{ width }}>
        <div className={styles.accordion__section} id={sectionId}>
          <div className={styles.accordion__header} onClick={toggleSection}>
            <div className={styles.accordion__button}>
              {/* <span className={styles.accordion__buttonText}>
                {isOpen ? 'Close' : 'Open'}
              </span> */}
                                   
              {/* <svg 
                width="66" 
                height="36" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="white" 
                strokeWidth="8.5"
                className={styles.accordion__chevron}
              >
                <path d="M6 9l6 6 6-6" />
              </svg> */}
              <svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="white" 
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className={styles.accordion__chevron}
>
  <path d="M6 9l6 6 6-6" />
</svg>
            </div>
            <h1 className={styles.accordion__title}>
              {capitalizeWords(data.name?.replaceAll('_', ' ') || 'Untitled')}
            </h1>
          </div>
          <div className={styles.accordion__content} onClick={preventClose}>
            <FormulaWidget data={accordionData} title={''} type={type} />
          </div>
          <span className={styles.chevronBottom} onClick={toggleBottom}>
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="#b3b3b3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2"/>
              <path d="m8 14 4-4 4 4"/>
            </svg>
          </span>
        </div>
      </div>
      {data.after && (
        <div className={styles.accordion__after} style={{marginLeft:'10px'}}>
          {data.after}
        </div>
      )}
    </>
  );
}

export default FormulaAccordion;