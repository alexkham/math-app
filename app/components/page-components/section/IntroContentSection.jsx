
import React from 'react';
import { processContent } from '@/app/utils/contentProcessor';
import styles from './IntroSection.module.css';

const IntroSection = ({
  id,
  content,
  title,
  backgroundColor = '#ffffff',
  textColor = '#000000'
}) => {
  return (
    <section 
      id={id}
      className={styles.container}
      style={{
        backgroundColor,
        color: textColor
      }}
    >
      <div className={styles.content}>
        {title && (
          <h1 className={styles.title}>
            {processContent(title)}
          </h1>
        )}
        {processContent(content)}
      </div>
    </section>
  );
};

export default IntroSection;