
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SecondaryNavbar.module.css';

export default function SecondaryNavbar
({ mode = 'children',
  alignment = 'right' ,
  title ,
  verticalPosition = '50%',
  backgroundColor = ' #4d4dff',
  height ,
  width, }) {


  const [urlStructure, setUrlStructure] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
  const [links, setLinks] = useState([]);
  const [currentPath, setCurrentPath] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    async function fetchSitemap() {
      try {
        const response = await fetch('/api/sitemap');
        const data = await response.json();
        setUrlStructure(data);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    }

    fetchSitemap();
  }, []);

  useEffect(() => {
    let path = pathname;
    let newLinks = [];

    if (mode === 'children') {
      newLinks = urlStructure[path] || [];
    } else if (mode === 'siblings') {
      newLinks = (urlStructure['/'] || []).filter(link => '/' + link !== pathname);
      path = '/';
    }

    newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
    setLinks(newLinks);
    setCurrentPath(path);
  }, [urlStructure, pathname, mode]);

  if (links.length === 0) {
    return null;
  }

  const alignmentClass = alignment === 'left' ? styles.leftAligned : '';
  const navbarStyle = { 
  '--vertical-position': verticalPosition,
  '--background-color': backgroundColor,
  '--height': height,
  '--width': width, 
  [alignment === 'left' ? 'left' : 'right']: '0',};

  return (
    // <nav className={`${styles.secondaryNavbar} ${alignmentClass} ${isExpanded ? styles.expanded : ''}`}>
    <nav className={`${styles.secondaryNavbar} ${alignmentClass} ${isExpanded ? styles.expanded : ''}`} style={navbarStyle}>
      <button
        className={styles.expandButton}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Close' :title|| 'More in this Section'}
      </button>

      <div className={styles.navContent}>
        <h2 className={styles.navTitle}>
          {mode === 'children' ? 'Discover Related Topics' : 'Explore Other Pages'}
        </h2>
        
        <ul className={styles.navList}>
          {links.map((link) => (
            <li key={link} className={styles.navItem}>
              <Link href={`${currentPath}${currentPath === '/' ? '' : '/'}${link}`} className={styles.navLink}>
                {link.replace(/-/g, ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}