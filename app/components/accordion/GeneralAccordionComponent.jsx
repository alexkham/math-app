
'use client'
import React from 'react';
import styles from './GeneralAccordion.module.css';
import { capitalizeWords } from '@/app/utils/utils-functions';
import Link from 'next/link';

function GeneralAccordion({ data, linkField, linkTitle, width = '1000px', idPrefix = '', contentFields = [] }) {
  const toggleSection = (sectionId) => {
    const sections = document.querySelectorAll(`.${styles.accordion__section}`);
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.toggle(styles.open);
        if (section.classList.contains(styles.open)) {
          setTimeout(() => {
            const yOffset = -30;
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }, 400);
        }
      } else {
        section.classList.remove(styles.open);
      }
    });
  };

  const toggleBottom = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.remove(styles.open);
      const yOffset = -30;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  };

  const preventClose = (event) => {
    event.stopPropagation();
  };

  const renderContent = (item) => {
    if (contentFields.length > 0) {
      return contentFields.map((field, index) => (
        item[field] ? <div key={index} dangerouslySetInnerHTML={{ __html: item[field] }} /> : null
      ));
    } else if (item.content) {
      return <div dangerouslySetInnerHTML={{ __html: item.content }} />;
    }
    return null;
  };

  return (
    <div className={styles.accordion} style={{ width }}>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item.before && (
            <div className={styles.accordion__before} onClick={preventClose}>
              <div dangerouslySetInnerHTML={{ __html: item.before }} />
            </div>
          )}
          <div
            id={`${idPrefix}section${index}`}
            className={styles.accordion__section}
          >
            <h1 className={styles.accordion__label} onClick={() => toggleSection(`${idPrefix}section${index}`)}>
              {capitalizeWords(item.title.replaceAll('_', ' '))}
              <span className={styles.chevron}></span>
            </h1>
            <div className={styles.accordion__content} onClick={preventClose}>
              {renderContent(item)}
              {linkField && item[linkField] && (
                <div className={styles.related_items}>
                  <h4>Related Items:</h4>
                  <ul>
                    <li>
                      <Link href={item[linkField]}>
                        {linkTitle || 'Related Link'}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            {item.after && (
              <div className={styles.accordion__after} onClick={preventClose}>
                <div dangerouslySetInnerHTML={{ __html: item.after }} />
              </div>
            )}
            <span 
              className={styles.chevronBottom}
              onClick={() => toggleBottom(`${idPrefix}section${index}`)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="#b3b3b3" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/>
                <path d="m8 14 4-4 4 4"/>
              </svg>
            </span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default GeneralAccordion;