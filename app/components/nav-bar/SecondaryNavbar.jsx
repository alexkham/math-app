// // // // // // // // components/SecondaryNavbar.js
// // // // // // // 'use client';

// // // // // // // import { useState, useEffect } from 'react';
// // // // // // // import Link from 'next/link';
// // // // // // // import { usePathname } from 'next/navigation';

// // // // // // // export default function SecondaryNavbar() {
// // // // // // //   const [categories, setCategories] = useState({});
// // // // // // //   const pathname = usePathname();

// // // // // // //   useEffect(() => {
// // // // // // //     async function fetchSitemap() {
// // // // // // //       try {
// // // // // // //         const response = await fetch('/api/sitemap');
// // // // // // //         const data = await response.json();
// // // // // // //         setCategories(data.categories);
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error fetching sitemap:', error);
// // // // // // //       }
// // // // // // //     }

// // // // // // //     fetchSitemap();
// // // // // // //   }, []);

// // // // // // //   // Determine the current category
// // // // // // //   const currentCategory = pathname.split('/')[1];

// // // // // // //   // If there are no subcategories for the current category, don't render anything
// // // // // // //   if (!categories[currentCategory] || categories[currentCategory].length === 0) {
// // // // // // //     return null;
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <nav className="secondary-navbar bg-gray-100 p-4 mb-4">
// // // // // // //       <ul className="flex flex-wrap gap-4">
// // // // // // //         {categories[currentCategory].map((url) => {
// // // // // // //           const path = new URL(url).pathname;
// // // // // // //           const label = path.split('/').pop().replace(/-/g, ' ');
// // // // // // //           return (
// // // // // // //             <li key={url} className="bg-white px-3 py-2 rounded shadow">
// // // // // // //               <Link href={path} className="text-blue-600 hover:underline">
// // // // // // //                 {label}
// // // // // // //               </Link>
// // // // // // //             </li>
// // // // // // //           );
// // // // // // //         })}
// // // // // // //       </ul>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // }
// // // // // // // components/SecondaryNavbar.js
// // // // // // 'use client';

// // // // // // import { useState, useEffect } from 'react';
// // // // // // import Link from 'next/link';
// // // // // // import { usePathname } from 'next/navigation';

// // // // // // export default function SecondaryNavbar() {
// // // // // //   const [urlStructure, setUrlStructure] = useState({});
// // // // // //   const pathname = usePathname();

// // // // // //   useEffect(() => {
// // // // // //     async function fetchSitemap() {
// // // // // //       try {
// // // // // //         const response = await fetch('/api/sitemap');
// // // // // //         const data = await response.json();
// // // // // //         console.log('Fetched URL structure:', data);
// // // // // //         setUrlStructure(data);
// // // // // //       } catch (error) {
// // // // // //         console.error('Error fetching sitemap:', error);
// // // // // //       }
// // // // // //     }

// // // // // //     fetchSitemap();
// // // // // //   }, []);

// // // // // //   console.log('Current pathname:', pathname);
  
// // // // // //   // Find the closest parent path that has children
// // // // // //   let currentPath = pathname;
// // // // // //   let children = [];
// // // // // //   while (currentPath !== '') {
// // // // // //     children = urlStructure[currentPath] || [];
// // // // // //     if (children.length > 0) break;
// // // // // //     currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// // // // // //   }
  
// // // // // //   console.log('Children for path:', currentPath, children);

// // // // // //   if (children.length === 0) {
// // // // // //     console.log('No children found, not rendering navbar');
// // // // // //     return null;
// // // // // //   }

// // // // // //   console.log('Rendering navbar with children:', children);
// // // // // //   return (
// // // // // //     <nav className="secondary-navbar bg-gray-100 p-4 mb-4 border border-gray-300">
// // // // // //       <ul className="flex flex-wrap gap-4">
// // // // // //         {children.map((child) => (
// // // // // //           <li key={child} className="bg-white px-3 py-2 rounded shadow">
// // // // // //             <Link href={`${currentPath}/${child}`} className="text-blue-600 hover:underline">
// // // // // //               {child.replace(/-/g, ' ')}
// // // // // //             </Link>
// // // // // //           </li>
// // // // // //         ))}
// // // // // //       </ul>
// // // // // //     </nav>
// // // // // //   );
// // // // // // }
// // // // // // components/SecondaryNavbar.js
// // // // // 'use client';

// // // // // import { useState, useEffect } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { usePathname } from 'next/navigation';

// // // // // export default function SecondaryNavbar() {
// // // // //   const [urlStructure, setUrlStructure] = useState({});
// // // // //   const pathname = usePathname();

// // // // //   useEffect(() => {
// // // // //     async function fetchSitemap() {
// // // // //       try {
// // // // //         const response = await fetch('/api/sitemap');
// // // // //         const data = await response.json();
// // // // //         console.log('Fetched URL structure:', data);
// // // // //         setUrlStructure(data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching sitemap:', error);
// // // // //       }
// // // // //     }

// // // // //     fetchSitemap();
// // // // //   }, []);

// // // // //   console.log('Current pathname:', pathname);
  
// // // // //   // Find the closest parent path that has children
// // // // //   let currentPath = pathname;
// // // // //   let children = [];
// // // // //   while (currentPath !== '') {
// // // // //     children = urlStructure[currentPath] || [];
// // // // //     if (children.length > 0) break;
// // // // //     currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// // // // //   }
  
// // // // //   console.log('Children for path:', currentPath, children);

// // // // //   // Filter out potential dynamic routes (assuming they contain square brackets)
// // // // //   children = children.filter(child => !child.includes('[') && !child.includes(']'));

// // // // //   if (children.length === 0) {
// // // // //     console.log('No valid children found, not rendering navbar');
// // // // //     return null;
// // // // //   }

// // // // //   console.log('Rendering navbar with children:', children);
// // // // //   return (
// // // // //     <nav className="secondary-navbar bg-gray-100 p-4 mb-4 border border-gray-300">
// // // // //       <ul className="flex flex-wrap gap-4">
// // // // //         {children.map((child) => (
// // // // //           <li key={child} className="bg-white px-3 py-2 rounded shadow">
// // // // //             <Link href={`${currentPath}/${child}`} className="text-blue-600 hover:underline">
// // // // //               {child.replace(/-/g, ' ')}
// // // // //             </Link>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </nav>
// // // // //   );
// // // // // }
// // // // // 'use client';

// // // // // import { useState, useEffect } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { usePathname } from 'next/navigation';
// // // // // import styles from './SecondaryNavbar.module.css';

// // // // // export default function SecondaryNavbar() {
// // // // //   const [urlStructure, setUrlStructure] = useState({});
// // // // //   const pathname = usePathname();

// // // // //   useEffect(() => {
// // // // //     async function fetchSitemap() {
// // // // //       try {
// // // // //         const response = await fetch('/api/sitemap');
// // // // //         const data = await response.json();
// // // // //         console.log('Fetched URL structure:', data);
// // // // //         setUrlStructure(data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching sitemap:', error);
// // // // //       }
// // // // //     }

// // // // //     fetchSitemap();
// // // // //   }, []);

// // // // //   console.log('Current pathname:', pathname);
  
// // // // //   // Find the closest parent path that has children
// // // // //   let currentPath = pathname;
// // // // //   let children = [];
// // // // //   while (currentPath !== '') {
// // // // //     children = urlStructure[currentPath] || [];
// // // // //     if (children.length > 0) break;
// // // // //     currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// // // // //   }
  
// // // // //   console.log('Children for path:', currentPath, children);

// // // // //   // Filter out potential dynamic routes (assuming they contain square brackets)
// // // // //   children = children.filter(child => !child.includes('[') && !child.includes(']'));

// // // // //   if (children.length === 0) {
// // // // //     console.log('No valid children found, not rendering navbar');
// // // // //     return null;
// // // // //   }

// // // // //   console.log('Rendering navbar with children:', children);
// // // // //   return (
// // // // //     <nav className={styles.secondaryNavbar}>
// // // // //       <ul className={styles.navList}>
// // // // //         <li className={styles.label}>See Also in this Section:</li>
// // // // //         {children.map((child) => (
// // // // //           <li key={child} className={styles.navItem}>
// // // // //             <Link href={`${currentPath}/${child}`} className={styles.navLink}>
// // // // //               {child.replace(/-/g, ' ')}
// // // // //             </Link>
// // // // //           </li>
// // // // //         ))}
// // // // //       </ul>
// // // // //     </nav>
// // // // //   );
// // // // // }
// // // // // 'use client';

// // // // // import { useState, useEffect } from 'react';
// // // // // import Link from 'next/link';
// // // // // import { usePathname } from 'next/navigation';
// // // // // import styles from './SecondaryNavbar.module.css';

// // // // // export default function SecondaryNavbar() {
// // // // //   const [urlStructure, setUrlStructure] = useState({});
// // // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // // //   const pathname = usePathname();

// // // // //   useEffect(() => {
// // // // //     async function fetchSitemap() {
// // // // //       try {
// // // // //         const response = await fetch('/api/sitemap');
// // // // //         const data = await response.json();
// // // // //         setUrlStructure(data);
// // // // //       } catch (error) {
// // // // //         console.error('Error fetching sitemap:', error);
// // // // //       }
// // // // //     }

// // // // //     fetchSitemap();
// // // // //   }, []);

// // // // //   let currentPath = pathname;
// // // // //   let children = [];
// // // // //   while (currentPath !== '') {
// // // // //     children = urlStructure[currentPath] || [];
// // // // //     if (children.length > 0) break;
// // // // //     currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// // // // //   }

// // // // //   children = children.filter(child => !child.includes('[') && !child.includes(']'));

// // // // //   if (children.length === 0) {
// // // // //     return null;
// // // // //   }

// // // // //   return (
// // // // //     <nav className={`${styles.secondaryNavbar} ${isExpanded ? styles.expanded : ''}`}>
// // // // //       {/* <button 
// // // // //         className={styles.expandButton} 
// // // // //         onClick={() => setIsExpanded(!isExpanded)}
// // // // //         aria-expanded={isExpanded}
// // // // //       >
// // // // //         {isExpanded ? 'Close' : 'Explore More'}
// // // // //       </button> */}

// // // // // {/* <button 
// // // // //   className={styles.expandButton} 
// // // // //   onClick={() => setIsExpanded(!isExpanded)}
// // // // //   aria-expanded={isExpanded}
// // // // // >
// // // // //   {isExpanded ? 'Close' : 'Explore'}
// // // // // </button> */}
// // // // //      <button 
// // // // //   className={styles.expandButton} 
// // // // //   onClick={() => setIsExpanded(!isExpanded)}
// // // // //   aria-expanded={isExpanded}
// // // // // >
// // // // //   {isExpanded ? 'Close' : 'More in this Section '}
// // // // // </button>
     
// // // // //       <div className={styles.navContent}>
// // // // //         <h2 className={styles.navTitle}>Discover Related Topics</h2>
// // // // //         <ul className={styles.navList}>
// // // // //           {children.map((child) => (
// // // // //             <li key={child} className={styles.navItem}>
// // // // //               <Link href={`${currentPath}/${child}`} className={styles.navLink}>
// // // // //                 {child.replace(/-/g, ' ')}
// // // // //               </Link>
// // // // //             </li>
// // // // //           ))}
// // // // //         </ul>
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // }

// // // // 'use client';

// // // // import { useState, useEffect } from 'react';
// // // // import Link from 'next/link';
// // // // import { usePathname } from 'next/navigation';
// // // // import styles from './SecondaryNavbar.module.css';

// // // // export default function SecondaryNavbar({ mode = 'children' }) {
// // // //   const [urlStructure, setUrlStructure] = useState({});
// // // //   const [isExpanded, setIsExpanded] = useState(false);
// // // //   const pathname = usePathname();

// // // //   useEffect(() => {
// // // //     async function fetchSitemap() {
// // // //       try {
// // // //         const response = await fetch('/api/sitemap');
// // // //         const data = await response.json();
// // // //         setUrlStructure(data);
// // // //       } catch (error) {
// // // //         console.error('Error fetching sitemap:', error);
// // // //       }
// // // //     }

// // // //     fetchSitemap();
// // // //   }, []);

// // // //   let currentPath = pathname;
// // // //   let links = [];

// // // //   if (mode === 'children') {
// // // //     while (currentPath !== '') {
// // // //       links = urlStructure[currentPath] || [];
// // // //       if (links.length > 0) break;
// // // //       currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// // // //     }
// // // //   } else if (mode === 'siblings') {
// // // //     const parentPath = pathname.substring(0, pathname.lastIndexOf('/'));
// // // //     links = urlStructure[parentPath] || [];
// // // //     currentPath = parentPath;
// // // //   }

// // // //   links = links.filter(link => !link.includes('[') && !link.includes(']'));

// // // //   if (links.length === 0) {
// // // //     return null;
// // // //   }

// // // //   const title = mode === 'children' ? 'Discover Related Topics' : 'Explore Other Pages';

// // // //   return (
// // // //     <nav className={`${styles.secondaryNavbar} ${isExpanded ? styles.expanded : ''}`}>
// // // //       <button
// // // //         className={styles.expandButton}
// // // //         onClick={() => setIsExpanded(!isExpanded)}
// // // //         aria-expanded={isExpanded}
// // // //       >
// // // //         {isExpanded ? 'Close' : 'More in this Section'}
// // // //       </button>

// // // //       <div className={styles.navContent}>
// // // //         <h2 className={styles.navTitle}>{title}</h2>
// // // //         <ul className={styles.navList}>
// // // //           {links.map((link) => (
// // // //             <li key={link} className={styles.navItem}>
// // // //               <Link href={`${currentPath}/${link}`} className={styles.navLink}>
// // // //                 {link.replace(/-/g, ' ')}
// // // //               </Link>
// // // //             </li>
// // // //           ))}
// // // //         </ul>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // }
// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import Link from 'next/link';
// // // import { usePathname } from 'next/navigation';
// // // import styles from './SecondaryNavbar.module.css';

// // // export default function SecondaryNavbar({ mode = 'children' }) {
// // //   const [urlStructure, setUrlStructure] = useState({});
// // //   const [isExpanded, setIsExpanded] = useState(false);
// // //   const [debugInfo, setDebugInfo] = useState('');
// // //   const [links, setLinks] = useState([]);
// // //   const pathname = usePathname();

// // //   useEffect(() => {
// // //     async function fetchSitemap() {
// // //       try {
// // //         const response = await fetch('/api/sitemap');
// // //         const data = await response.json();
// // //         setUrlStructure(data);
// // //         setDebugInfo(prev => prev + '\nSitemap fetched successfully');
// // //       } catch (error) {
// // //         console.error('Error fetching sitemap:', error);
// // //         setDebugInfo(prev => prev + '\nError fetching sitemap: ' + error.message);
// // //       }
// // //     }

// // //     fetchSitemap();
// // //   }, []);

// // //   useEffect(() => {
// // //     let currentPath = pathname;
// // //     let newLinks = [];

// // //     if (mode === 'children') {
// // //       while (currentPath !== '') {
// // //         newLinks = urlStructure[currentPath] || [];
// // //         if (newLinks.length > 0) break;
// // //         currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// // //       }
// // //     } else if (mode === 'siblings') {
// // //       const parentPath = pathname.substring(0, pathname.lastIndexOf('/'));
// // //       newLinks = urlStructure[parentPath] || [];
// // //       currentPath = parentPath;
// // //     }

// // //     newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
// // //     setLinks(newLinks);

// // //     setDebugInfo(prev => prev + `\nMode: ${mode}, Current Path: ${currentPath}, Links: ${JSON.stringify(newLinks)}`);
// // //   }, [urlStructure, pathname, mode]);

// // //   const title = mode === 'children' ? 'Discover Related Topics' : 'Explore Other Pages';

// // //   return (
// // //     <nav className={`${styles.secondaryNavbar} ${isExpanded ? styles.expanded : ''}`}>
// // //       <button
// // //         className={styles.expandButton}
// // //         onClick={() => setIsExpanded(!isExpanded)}
// // //         aria-expanded={isExpanded}
// // //       >
// // //         {isExpanded ? 'Close' : 'More in this Section'}
// // //       </button>

// // //       <div className={styles.navContent}>
// // //         <h2 className={styles.navTitle}>{title}</h2>
// // //         {links.length > 0 ? (
// // //           <ul className={styles.navList}>
// // //             {links.map((link) => (
// // //               <li key={link} className={styles.navItem}>
// // //                 <Link href={`${pathname}/${link}`} className={styles.navLink}>
// // //                   {link.replace(/-/g, ' ')}
// // //                 </Link>
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         ) : (
// // //           <p>No links available</p>
// // //         )}
// // //         <pre>{debugInfo}</pre>
// // //       </div>
// // //     </nav>
// // //   );
// // // }
// // 'use client';

// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import styles from './SecondaryNavbar.module.css';

// // export default function SecondaryNavbar({ mode = 'children' }) {
// //   const [urlStructure, setUrlStructure] = useState({});
// //   const [isExpanded, setIsExpanded] = useState(false);
// //   const [debugInfo, setDebugInfo] = useState('Component mounted');
// //   const [links, setLinks] = useState([]);
// //   const [currentPath, setCurrentPath] = useState('');
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     setDebugInfo(prev => prev + '\nFetch effect triggered');
// //     async function fetchSitemap() {
// //       try {
// //         const response = await fetch('/api/sitemap');
// //         const data = await response.json();
// //         setUrlStructure(data);
// //         setDebugInfo(prev => prev + '\nSitemap fetched successfully. Data: ' + JSON.stringify(data));
// //       } catch (error) {
// //         console.error('Error fetching sitemap:', error);
// //         setDebugInfo(prev => prev + '\nError fetching sitemap: ' + error.message);
// //       }
// //     }

// //     fetchSitemap();
// //   }, []);

// //   useEffect(() => {
// //     setDebugInfo(prev => prev + '\nLink calculation effect triggered');
// //     let path = pathname;
// //     let newLinks = [];

// //     if (mode === 'children') {
// //       newLinks = urlStructure[path] || [];
// //     } else if (mode === 'siblings') {
// //       // For siblings, we always use the root links, excluding the current path
// //       newLinks = (urlStructure['/'] || []).filter(link => '/' + link !== pathname);
// //       path = '/';
// //     }

// //     newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
// //     setLinks(newLinks);
// //     setCurrentPath(path);

// //     setDebugInfo(prev => prev + `\nMode: ${mode}, Current Path: ${path}, Links: ${JSON.stringify(newLinks)}`);
// //   }, [urlStructure, pathname, mode]);

// //   return (
// //     <nav className={`${styles.secondaryNavbar} ${isExpanded ? styles.expanded : ''}`}>
// //       <button
// //         className={styles.expandButton}
// //         onClick={() => setIsExpanded(!isExpanded)}
// //         aria-expanded={isExpanded}
// //       >
// //         {isExpanded ? 'Close' : 'More in this Section'}
// //       </button>

// //       <div className={styles.navContent}>
// //         <h2 className={styles.navTitle}>
// //           {mode === 'children' ? 'Discover Related Topics' : 'Explore Other Pages'}
// //         </h2>
        
// //         {links.length > 0 ? (
// //           <ul className={styles.navList}>
// //             {links.map((link) => (
// //               <li key={link} className={styles.navItem}>
// //                 <Link href={`${currentPath}${currentPath === '/' ? '' : '/'}${link}`} className={styles.navLink}>
// //                   {link.replace(/-/g, ' ')}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         ) : (
// //           <p className={styles.noLinks}>No links available</p>
// //         )}

// //         <div className={styles.debugInfo}>
// //           <h3>Debug Information</h3>
// //           <p>Mode: {mode}</p>
// //           <p>Current Path: {currentPath}</p>
// //           <p>Links found: {links.length}</p>
// //           <p>Pathname: {pathname}</p>
// //           <p>URL Structure Keys: {Object.keys(urlStructure).join(', ')}</p>
// //           <pre>{debugInfo}</pre>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import styles from './SecondaryNavbar.module.css';

// export default function SecondaryNavbar({ mode = 'children' }) {
//   const [urlStructure, setUrlStructure] = useState({});
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [links, setLinks] = useState([]);
//   const [currentPath, setCurrentPath] = useState('');
//   const pathname = usePathname();

//   useEffect(() => {
//     async function fetchSitemap() {
//       try {
//         const response = await fetch('/api/sitemap');
//         const data = await response.json();
//         setUrlStructure(data);
//       } catch (error) {
//         console.error('Error fetching sitemap:', error);
//       }
//     }

//     fetchSitemap();
//   }, []);

//   useEffect(() => {
//     let path = pathname;
//     let newLinks = [];

//     if (mode === 'children') {
//       newLinks = urlStructure[path] || [];
//     } else if (mode === 'siblings') {
//       newLinks = (urlStructure['/'] || []).filter(link => '/' + link !== pathname);
//       path = '/';
//     }

//     newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
//     setLinks(newLinks);
//     setCurrentPath(path);
//   }, [urlStructure, pathname, mode]);

//   if (links.length === 0) {
//     return null;
//   }

//   return (
//     <nav className={`${styles.secondaryNavbar} ${isExpanded ? styles.expanded : ''}`}>
//       <button
//         className={styles.expandButton}
//         onClick={() => setIsExpanded(!isExpanded)}
//         aria-expanded={isExpanded}
//       >
//         {isExpanded ? 'Close' : 'More in this Section'}
//       </button>

//       <div className={styles.navContent}>
//         <h2 className={styles.navTitle}>
//           {mode === 'children' ? 'Discover Related Topics' : 'Explore Other Pages'}
//         </h2>
        
//         <ul className={styles.navList}>
//           {links.map((link) => (
//             <li key={link} className={styles.navItem}>
//               <Link href={`${currentPath}${currentPath === '/' ? '' : '/'}${link}`} className={styles.navLink}>
//                 {link.replace(/-/g, ' ')}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import styles from './SecondaryNavbar.module.css';

// export default function SecondaryNavbar({ mode = 'children', alignment = 'right' }) {
//   const [urlStructure, setUrlStructure] = useState({});
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [links, setLinks] = useState([]);
//   const [currentPath, setCurrentPath] = useState('');
//   const pathname = usePathname();

//   useEffect(() => {
//     async function fetchSitemap() {
//       try {
//         const response = await fetch('/api/sitemap');
//         const data = await response.json();
//         setUrlStructure(data);
//       } catch (error) {
//         console.error('Error fetching sitemap:', error);
//       }
//     }

//     fetchSitemap();
//   }, []);

//   useEffect(() => {
//     let path = pathname;
//     let newLinks = [];

//     if (mode === 'children') {
//       newLinks = urlStructure[path] || [];
//     } else if (mode === 'siblings') {
//       newLinks = (urlStructure['/'] || []).filter(link => '/' + link !== pathname);
//       path = '/';
//     }

//     newLinks = newLinks.filter(link => !link.includes('[') && !link.includes(']'));
//     setLinks(newLinks);
//     setCurrentPath(path);
//   }, [urlStructure, pathname, mode]);

//   if (links.length === 0) {
//     return null;
//   }

//   const alignmentClass = alignment === 'left' ? styles.leftAligned : '';

//   return (
//     <nav className={`${styles.secondaryNavbar} ${alignmentClass} ${isExpanded ? styles.expanded : ''}`}>
//       <button
//         className={styles.expandButton}
//         onClick={() => setIsExpanded(!isExpanded)}
//         aria-expanded={isExpanded}
//       >
//         {isExpanded ? 'Close' : 'More in this Section'}
//       </button>

//       <div className={styles.navContent}>
//         <h2 className={styles.navTitle}>
//           {mode === 'children' ? 'Discover Related Topics' : 'Explore Other Pages'}
//         </h2>
        
//         <ul className={styles.navList}>
//           {links.map((link) => (
//             <li key={link} className={styles.navItem}>
//               <Link href={`${currentPath}${currentPath === '/' ? '' : '/'}${link}`} className={styles.navLink}>
//                 {link.replace(/-/g, ' ')}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }
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