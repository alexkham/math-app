// // // import { useState, useEffect } from 'react';
// // // import { Search, X } from 'lucide-react';
// // // import styles from './SearchBar2.module.css';

// // // export default function SearchBar2({ width = '200px' }) {
// // //   const [query, setQuery] = useState('');
// // //   const [urls, setUrls] = useState({ main: [], categories: {}, leaves: [] });
// // //   const [results, setResults] = useState([]);

// // //   useEffect(() => {
// // //     fetch('/api/sitemap')
// // //       .then(response => response.json())
// // //       .then(data => setUrls(data))
// // //       .catch(error => console.error('Error fetching sitemap:', error));
// // //   }, []);

// // //   useEffect(() => {
// // //     if (query) {
// // //       const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
// // //       const allUrls = [
// // //         ...urls.main,
// // //         ...Object.values(urls.categories).flat(),
// // //         ...urls.leaves
// // //       ];
// // //       setResults(allUrls.filter(url => 
// // //         terms.every(term => url.toLowerCase().includes(term))
// // //       ));
// // //     } else {
// // //       setResults([]);
// // //     }
// // //   }, [query, urls]);

// // //   return (
// // //     <div className={styles.searchBarWrapper} style={{ width }}>
// // //       <div className={styles.searchInputWrapper}>
// // //         <Search className={styles.searchIcon} />
// // //         <input
// // //           type="text"
// // //           value={query}
// // //           onChange={(e) => setQuery(e.target.value)}
// // //           placeholder="Search pages..."
// // //           className={styles.searchInput}
// // //         />
// // //         {query && (
// // //           <button 
// // //             className={styles.clearButton} 
// // //             onClick={() => setQuery('')}
// // //             aria-label="Clear search"
// // //           >
// // //             <X size={18} />
// // //           </button>
// // //         )}
// // //       </div>
// // //       {results.length > 0 && (
// // //         <ul className={styles.resultsList}>
// // //           {results.map((url) => (
// // //             <li key={url} className={styles.resultItem}>
// // //               <a href={url} className={styles.resultLink}>{url}</a>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // // import { useState, useEffect } from 'react';
// // // import { Search, X } from 'lucide-react';
// // // import styles from './SearchBar2.module.css';

// // // export default function SearchBar({ width = '200px' }) {
// // //   const [query, setQuery] = useState('');
// // //   const [urls, setUrls] = useState({ main: [], categories: {}, leaves: [] });
// // //   const [results, setResults] = useState([]);

// // //   useEffect(() => {
// // //     fetch('/api/sitemap')
// // //       .then(response => response.json())
// // //       .then(data => setUrls(data))
// // //       .catch(error => console.error('Error fetching sitemap:', error));
// // //   }, []);

// // //   useEffect(() => {
// // //     if (query) {
// // //       const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
// // //       const allUrls = [
// // //         ...urls.main,
// // //         ...Object.values(urls.categories).flat(),
// // //         ...urls.leaves
// // //       ];
// // //       setResults(allUrls.filter(url => 
// // //         terms.every(term => url.toLowerCase().includes(term))
// // //       ));
// // //     } else {
// // //       setResults([]);
// // //     }
// // //   }, [query, urls]);

// // //   return (
// // //     <div className={styles.searchBarWrapper} style={{ width }}>
// // //       <div className={styles.searchInputWrapper}>
// // //         <Search className={styles.searchIcon} />
// // //         <input
// // //           type="text"
// // //           value={query}
// // //           onChange={(e) => setQuery(e.target.value)}
// // //           placeholder="Search pages..."
// // //           className={styles.searchInput}
// // //         />
// // //         {query && (
// // //           <button 
// // //             className={styles.clearButton} 
// // //             onClick={() => setQuery('')}
// // //             aria-label="Clear search"
// // //           >
// // //             <X size={18} />
// // //           </button>
// // //         )}
// // //       </div>
// // //       {results.length > 0 && (
// // //         <ul className={styles.resultsList}>
// // //           {results.map((url) => (
// // //             <li key={url} className={styles.resultItem}>
// // //               <a href={url} className={styles.resultLink}>{url}</a>
// // //             </li>
// // //           ))}
// // //         </ul>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // import { useState, useEffect } from 'react';
// // import { Search, X } from 'lucide-react';
// // import styles from './SearchBar2.module.css';

// // export default function SearchBar2({ width = '200px' }) {
// //   const [query, setQuery] = useState('');
// //   const [urls, setUrls] = useState({ main: [], categories: {}, leaves: [] });
// //   const [results, setResults] = useState([]);

// //   // useEffect(() => {
// //   //   fetch('/api/sitemap')
// //   //     .then(response => response.json())
// //   //     .then(data => setUrls(data))
// //   //     .catch(error => console.error('Error fetching sitemap:', error));
// //   // }, []);

// //   useEffect(() => {
// //     fetch('/api/sitemap')
// //   .then(response => response.json())
// //   .then(data => console.log(JSON.stringify(data, null, 2)))
// //   .catch(error => console.error('Error:', error));
// //   }, []);
 
// //   useEffect(() => {
// //     if (query) {
// //       const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
// //       const allUrls = [
// //         ...(Array.isArray(urls.main) ? urls.main : []),
// //         ...Object.values(urls.categories || {}).flat(),
// //         ...(Array.isArray(urls.leaves) ? urls.leaves : [])
// //       ];
// //       setResults(allUrls.filter(url => 
// //         terms.every(term => url.toLowerCase().includes(term))
// //       ));
// //     } else {
// //       setResults([]);
// //     }
// //   }, [query, urls]);

// //   return (
// //     <div className={styles.searchBarWrapper} style={{ width }}>
// //       <div className={styles.searchInputWrapper}>
// //         <Search className={styles.searchIcon} />
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search pages..."
// //           className={styles.searchInput}
// //         />
// //         {query && (
// //           <button 
// //             className={styles.clearButton} 
// //             onClick={() => setQuery('')}
// //             aria-label="Clear search"
// //           >
// //             <X size={18} />
// //           </button>
// //         )}
// //       </div>
// //       {results.length > 0 && (
// //         <ul className={styles.resultsList}>
// //           {results.map((url) => (
// //             <li key={url} className={styles.resultItem}>
// //               <a href={url} className={styles.resultLink}>{url}</a>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // }
// import { useState, useEffect } from 'react';
// import { Search, X } from 'lucide-react';
// import styles from './SearchBar2.module.css';

// export default function SearchBar2({ width = '200px' }) {
//   const [query, setQuery] = useState('');
//   const [sitemapData, setSitemapData] = useState({});
//   const [results, setResults] = useState([]);

//   useEffect(() => {
//     fetch('/api/sitemap')
//       .then(response => response.json())
//       .then(data => setSitemapData(data))
//       .catch(error => console.error('Error fetching sitemap:', error));
//   }, []);

//   useEffect(() => {
//     if (query) {
//       const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
//       const allUrls = Object.entries(sitemapData).flatMap(([key, values]) => 
//         [key, ...values.map(value => `${key}/${value}`)]
//       );
//       setResults(allUrls.filter(url => 
//         terms.every(term => url.toLowerCase().includes(term))
//       ));
//     } else {
//       setResults([]);
//     }
//   }, [query, sitemapData]);

//   return (
//     <div className={styles.searchBarWrapper} style={{ width }}>
//       <div className={styles.searchInputWrapper}>
//         <Search className={styles.searchIcon} />
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search pages..."
//           className={styles.searchInput}
//         />
//         {query && (
//           <button 
//             className={styles.clearButton} 
//             onClick={() => setQuery('')}
//             aria-label="Clear search"
//           >
//             <X size={18} />
//           </button>
//         )}
//       </div>
//       {results.length > 0 && (
//         <ul className={styles.resultsList}>
//           {results.map((url) => (
//             <li key={url} className={styles.resultItem}>
//               <a href={url} className={styles.resultLink}>{url}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import styles from './SearchBar2.module.css';

export default function SearchBar2({ width = '200px' }) {
  const [query, setQuery] = useState('');
  const [sitemapData, setSitemapData] = useState({});
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch('/api/sitemap')
      .then(response => response.json())
      .then(data => setSitemapData(data))
      .catch(error => console.error('Error fetching sitemap:', error));
  }, []);

  useEffect(() => {
    if (query) {
      const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
      const allUrls = new Set(Object.entries(sitemapData).flatMap(([key, values]) => 
        [key, ...values.map(value => `${key}/${value}`.replace('//', '/'))].filter(url => url !== '/')
      ));
      setResults(Array.from(allUrls).filter(url => 
        terms.every(term => url.toLowerCase().includes(term))
      ));
    } else {
      setResults([]);
    }
  }, [query, sitemapData]);

  return (
    <div className={styles.searchBarWrapper} style={{ width }}>
      <div className={styles.searchInputWrapper}>
        <Search className={styles.searchIcon} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search pages..."
          className={styles.searchInput}
        />
        {query && (
          <button 
            className={styles.clearButton} 
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>
      {results.length > 0 && (
        <ul className={styles.resultsList}>
          {results.map((url) => (
            <li key={url} className={styles.resultItem}>
              <a href={url} className={styles.resultLink}>{url}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}