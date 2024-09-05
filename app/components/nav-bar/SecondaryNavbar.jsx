// // // // components/SecondaryNavbar.js
// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import Link from 'next/link';
// // // import { usePathname } from 'next/navigation';

// // // export default function SecondaryNavbar() {
// // //   const [categories, setCategories] = useState({});
// // //   const pathname = usePathname();

// // //   useEffect(() => {
// // //     async function fetchSitemap() {
// // //       try {
// // //         const response = await fetch('/api/sitemap');
// // //         const data = await response.json();
// // //         setCategories(data.categories);
// // //       } catch (error) {
// // //         console.error('Error fetching sitemap:', error);
// // //       }
// // //     }

// // //     fetchSitemap();
// // //   }, []);

// // //   // Determine the current category
// // //   const currentCategory = pathname.split('/')[1];

// // //   // If there are no subcategories for the current category, don't render anything
// // //   if (!categories[currentCategory] || categories[currentCategory].length === 0) {
// // //     return null;
// // //   }

// // //   return (
// // //     <nav className="secondary-navbar bg-gray-100 p-4 mb-4">
// // //       <ul className="flex flex-wrap gap-4">
// // //         {categories[currentCategory].map((url) => {
// // //           const path = new URL(url).pathname;
// // //           const label = path.split('/').pop().replace(/-/g, ' ');
// // //           return (
// // //             <li key={url} className="bg-white px-3 py-2 rounded shadow">
// // //               <Link href={path} className="text-blue-600 hover:underline">
// // //                 {label}
// // //               </Link>
// // //             </li>
// // //           );
// // //         })}
// // //       </ul>
// // //     </nav>
// // //   );
// // // }
// // // components/SecondaryNavbar.js
// // 'use client';

// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';

// // export default function SecondaryNavbar() {
// //   const [urlStructure, setUrlStructure] = useState({});
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     async function fetchSitemap() {
// //       try {
// //         const response = await fetch('/api/sitemap');
// //         const data = await response.json();
// //         console.log('Fetched URL structure:', data);
// //         setUrlStructure(data);
// //       } catch (error) {
// //         console.error('Error fetching sitemap:', error);
// //       }
// //     }

// //     fetchSitemap();
// //   }, []);

// //   console.log('Current pathname:', pathname);
  
// //   // Find the closest parent path that has children
// //   let currentPath = pathname;
// //   let children = [];
// //   while (currentPath !== '') {
// //     children = urlStructure[currentPath] || [];
// //     if (children.length > 0) break;
// //     currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
// //   }
  
// //   console.log('Children for path:', currentPath, children);

// //   if (children.length === 0) {
// //     console.log('No children found, not rendering navbar');
// //     return null;
// //   }

// //   console.log('Rendering navbar with children:', children);
// //   return (
// //     <nav className="secondary-navbar bg-gray-100 p-4 mb-4 border border-gray-300">
// //       <ul className="flex flex-wrap gap-4">
// //         {children.map((child) => (
// //           <li key={child} className="bg-white px-3 py-2 rounded shadow">
// //             <Link href={`${currentPath}/${child}`} className="text-blue-600 hover:underline">
// //               {child.replace(/-/g, ' ')}
// //             </Link>
// //           </li>
// //         ))}
// //       </ul>
// //     </nav>
// //   );
// // }
// // components/SecondaryNavbar.js
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// export default function SecondaryNavbar() {
//   const [urlStructure, setUrlStructure] = useState({});
//   const pathname = usePathname();

//   useEffect(() => {
//     async function fetchSitemap() {
//       try {
//         const response = await fetch('/api/sitemap');
//         const data = await response.json();
//         console.log('Fetched URL structure:', data);
//         setUrlStructure(data);
//       } catch (error) {
//         console.error('Error fetching sitemap:', error);
//       }
//     }

//     fetchSitemap();
//   }, []);

//   console.log('Current pathname:', pathname);
  
//   // Find the closest parent path that has children
//   let currentPath = pathname;
//   let children = [];
//   while (currentPath !== '') {
//     children = urlStructure[currentPath] || [];
//     if (children.length > 0) break;
//     currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
//   }
  
//   console.log('Children for path:', currentPath, children);

//   // Filter out potential dynamic routes (assuming they contain square brackets)
//   children = children.filter(child => !child.includes('[') && !child.includes(']'));

//   if (children.length === 0) {
//     console.log('No valid children found, not rendering navbar');
//     return null;
//   }

//   console.log('Rendering navbar with children:', children);
//   return (
//     <nav className="secondary-navbar bg-gray-100 p-4 mb-4 border border-gray-300">
//       <ul className="flex flex-wrap gap-4">
//         {children.map((child) => (
//           <li key={child} className="bg-white px-3 py-2 rounded shadow">
//             <Link href={`${currentPath}/${child}`} className="text-blue-600 hover:underline">
//               {child.replace(/-/g, ' ')}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import styles from './SecondaryNavbar.module.css';

// export default function SecondaryNavbar() {
//   const [urlStructure, setUrlStructure] = useState({});
//   const pathname = usePathname();

//   useEffect(() => {
//     async function fetchSitemap() {
//       try {
//         const response = await fetch('/api/sitemap');
//         const data = await response.json();
//         console.log('Fetched URL structure:', data);
//         setUrlStructure(data);
//       } catch (error) {
//         console.error('Error fetching sitemap:', error);
//       }
//     }

//     fetchSitemap();
//   }, []);

//   console.log('Current pathname:', pathname);
  
//   // Find the closest parent path that has children
//   let currentPath = pathname;
//   let children = [];
//   while (currentPath !== '') {
//     children = urlStructure[currentPath] || [];
//     if (children.length > 0) break;
//     currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
//   }
  
//   console.log('Children for path:', currentPath, children);

//   // Filter out potential dynamic routes (assuming they contain square brackets)
//   children = children.filter(child => !child.includes('[') && !child.includes(']'));

//   if (children.length === 0) {
//     console.log('No valid children found, not rendering navbar');
//     return null;
//   }

//   console.log('Rendering navbar with children:', children);
//   return (
//     <nav className={styles.secondaryNavbar}>
//       <ul className={styles.navList}>
//         <li className={styles.label}>See Also in this Section:</li>
//         {children.map((child) => (
//           <li key={child} className={styles.navItem}>
//             <Link href={`${currentPath}/${child}`} className={styles.navLink}>
//               {child.replace(/-/g, ' ')}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './SecondaryNavbar.module.css';

export default function SecondaryNavbar() {
  const [urlStructure, setUrlStructure] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);
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

  let currentPath = pathname;
  let children = [];
  while (currentPath !== '') {
    children = urlStructure[currentPath] || [];
    if (children.length > 0) break;
    currentPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
  }

  children = children.filter(child => !child.includes('[') && !child.includes(']'));

  if (children.length === 0) {
    return null;
  }

  return (
    <nav className={`${styles.secondaryNavbar} ${isExpanded ? styles.expanded : ''}`}>
      {/* <button 
        className={styles.expandButton} 
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Close' : 'Explore More'}
      </button> */}

{/* <button 
  className={styles.expandButton} 
  onClick={() => setIsExpanded(!isExpanded)}
  aria-expanded={isExpanded}
>
  {isExpanded ? 'Close' : 'Explore'}
</button> */}
     <button 
  className={styles.expandButton} 
  onClick={() => setIsExpanded(!isExpanded)}
  aria-expanded={isExpanded}
>
  {isExpanded ? 'Close' : 'More in this Section '}
</button>
     
      <div className={styles.navContent}>
        <h2 className={styles.navTitle}>Discover Related Topics</h2>
        <ul className={styles.navList}>
          {children.map((child) => (
            <li key={child} className={styles.navItem}>
              <Link href={`${currentPath}/${child}`} className={styles.navLink}>
                {child.replace(/-/g, ' ')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}