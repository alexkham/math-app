/**
 * ModernCardsGroup - Renders a responsive grid of cards
 * 
 * @component
 * @param {Object} props
 * @param {Array<CardItem>} [props.items=[]] - Array of card objects
 * 
 * @typedef {Object} CardItem
 * @property {string} title - Card title (required)
 * @property {string} description - Card description (required)
 * @property {string} [href] - Link URL for "View Details" button
 * @property {string} [backgroundColor='white'] - Card background color
 * @property {string} [textColor='#1a1f36'] - Text color
 * @property {string} [image] - Image path (renders on left side)
 * @property {React.ComponentType} [icon] - Icon component
 * @property {number} [ratio] - Flex ratio for paired cards (both cards need ratio)
 * 
 * @note Each card receives id="card-{index}" for on-page linking
 * @note Works with QuickNav component for smooth scroll navigation
 * 
 * @example
 * <ModernCardsGroup items={[
 *   { title: "Tool 1", description: "...", href: "/tool-1", backgroundColor: "#4F46E5", textColor: "#fff" },
 *   { title: "Tool 2", description: "...", href: "/tool-2" }
 * ]} />
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ModernCardsGroup.module.css';

const ModernCardsGroup = ({ items = [] }) => {
  if (!Array.isArray(items)) return null;

  return (
    <div className={styles.grid}>
      {items.map((item, index) => {
        // Only apply ratio style if both items in a pair have ratios
        const nextItem = items[index + 1];
        const prevItem = items[index - 1];
        const isPair = index % 2 === 0;
        
        let widthStyle = {};
        if (item.ratio && ((isPair && nextItem?.ratio) || (!isPair && prevItem?.ratio))) {
          widthStyle = { flexBasis: `${(item.ratio / (item.ratio + (isPair ? nextItem.ratio : prevItem.ratio))) * 100}%` };
        }

        return (
          <div 
            key={index} 
            id={`card-${index}`} 
            className={styles.card}
            style={{
              backgroundColor: item.backgroundColor || 'white',
              color: item.textColor || '#1a1f36',
              ...widthStyle
            }}
          >
            {item.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            
            <div className={`${styles.contentContainer} ${item.image ? styles.withImage : styles.fullWidth}`}>
              <div>
                <div className={styles.titleRow}>
                  {item.icon && (
                    <div className={styles.iconContainer}>
                      <item.icon className={styles.icon} style={{ color: item.textColor || '#4F46E5' }} />
                    </div>
                  )}
                  <h2 className={styles.title} style={{ color: item.textColor || '#1a1f36' }}>
                    {item.title}
                  </h2>
                </div>
                <p className={styles.description} style={{ color: item.textColor || '#64748b' }}>
                  {item.description}
                </p>
              </div>
              
              <div className={styles.footer}>
                <Link 
                  href={item.href || '#'} 
                  className={styles.viewButton}
                  // style={{ 
                  //   color: item.textColor || '#4F46E5',
                  //   borderColor: item.textColor || '#4F46E5'
                  // }}
                >
                  View Details
                </Link>
                <button className={styles.menuButton}>
                  <span className={styles.menuDot} style={{ background: item.textColor || '#64748b' }}></span>
                  <span className={styles.menuDot} style={{ background: item.textColor || '#64748b' }}></span>
                  <span className={styles.menuDot} style={{ background: item.textColor || '#64748b' }}></span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModernCardsGroup;