


import React from 'react';
import Link from 'next/link';
import styles from './TreeStructure2.module.css';
import { processContent } from '@/app/utils/contentProcessor';

const TreeItem = ({ title, children, expandTopLevel = false, viewMode = 'tooltip' }) => {
  // const hasChildren = children && Object.keys(children).length > 0;
  const hasChildren = children && Object.keys(children).length > 0 && !children.explanation && !children.url;
  const hasUrl = children && children.url;
  const hasExplanation = children && children.explanation;

  
const renderContent = () => {
    if (hasUrl) {
      return (
        <div className={styles.textBlock}>
          <Link href={children.url} className={styles.link}>{title}</Link>
          {viewMode === 'parsed' && hasExplanation && (
            <>
              <div className={styles.text}>{processContent(children.explanation)}</div>
              <div className={styles.actionsRow}>
                <Link href={children.url} className={styles.actionLink}>Learn more</Link>
              </div>
            </>
          )}
          {viewMode === 'tooltip' && hasExplanation && (
            <span className={styles.tooltip}>{children.explanation}</span>
          )}
        </div>
      );
    }
   
    if (hasExplanation) {
      return (
        <div className={styles.textBlock}>
          <span className={styles.title}>{title}</span>
          {viewMode === 'parsed' && (
            <>
              <div className={styles.text}>{processContent(children.explanation)}</div>
              {/* <div className={styles.actionsRow}> */}
                <Link href="#" className={styles.actionLink}>Learn more</Link>
              {/* </div> */}
            </>
          )}
          {viewMode === 'tooltip' && (
            <span className={styles.tooltip}>{processContent(children.explanation)}</span>
          )}
        </div>
      );
    }
   
    return <span className={hasChildren ? styles.title : styles.text}>{title}</span>;
   };

return (
    <li className={styles.treeItem}>
      <details open={expandTopLevel}>
        <summary className={styles.summary}>
          {hasChildren && !hasUrl && (
            <span className={`${styles.symbol} ${!expandTopLevel ? styles.closed : ''}`}></span>
          )}
          {renderContent()}
        </summary>
        {hasChildren && !hasUrl && (
          <ul>
            {Object.entries(children).map(([key, value]) => (
              <TreeItem
                key={key}
                title={key}
                viewMode={viewMode}
              >
                {value}
              </TreeItem>
            ))}
          </ul>
        )}
      </details>
    </li>
  );
};

const Tree = ({ data, expandTopLevel = false, viewMode = 'tooltip' }) => {
  return (
    <ul className={styles.tree}>
      {Object.entries(data).map(([key, value]) => (
        <TreeItem
          key={key}
          title={key}
          expandTopLevel={expandTopLevel}
          viewMode={viewMode}
        >
          {value}
        </TreeItem>
      ))}
    </ul>
  );
};

const TreeStructure2 = ({ data, expandTopLevel = false, viewMode = 'tooltip', width = "100%" }) => {
  return (
    <div className={styles.treeWrapper}>
      <div className={styles.treeContainer} style={{ width }}>
        <Tree data={data} expandTopLevel={expandTopLevel} viewMode={viewMode} />
      </div>
    </div>
  );
};

export default TreeStructure2;