// // // // // utils/sitemap.js
// // // // export async function fetchSiteNavLinks(mode = 'children') {
// // // //     try {
// // // //       // Get current page path from filename
// // // //       const filename = __filename.split('/').pop().replace('.js', '');
// // // //       const currentPath = filename === 'index' ? '/' : `/${filename}`;
      
// // // //       // Fetch sitemap data
// // // //       const response = await fetch('/api/sitemap');
// // // //       const data = await response.json();
      
// // // //       let path = currentPath;
// // // //       let navLinks = [];
      
// // // //       // Process based on mode
// // // //       if (mode === 'children') {
// // // //         navLinks = data[path] || [];
// // // //       } else if (mode === 'siblings') {
// // // //         const pathParts = currentPath.split('/').filter(Boolean);
// // // //         const parentPath = pathParts.length > 1 
// // // //           ? '/' + pathParts.slice(0, -1).join('/') 
// // // //           : '/';
// // // //         const currentPageName = pathParts[pathParts.length - 1];
// // // //         navLinks = (data[parentPath] || []).filter(link => link !== currentPageName);
// // // //         path = parentPath;
// // // //       }
  
// // // //       navLinks = navLinks.filter(link => !link.includes('[') && !link.includes(']'));
      
// // // //       return {
// // // //         links: navLinks,
// // // //         currentPath: path
// // // //       };
// // // //     } catch (error) {
// // // //       console.error('Error fetching sitemap:', error);
// // // //       return { links: [], currentPath: '/' };
// // // //     }
// // // //   }



// // // // utils/sitemap.js
// // // export async function fetchSiteNavLinks(currentPath, mode = 'children') {
// // //     try {
// // //       // Fetch sitemap data
// // //       const response = await fetch('/api/sitemap');
// // //       const data = await response.json();
      
// // //       let path = currentPath;
// // //       let navLinks = [];
      
// // //       // Process based on mode
// // //       if (mode === 'children') {
// // //         navLinks = data[path] || [];
// // //       } else if (mode === 'siblings') {
// // //         const pathParts = currentPath.split('/').filter(Boolean);
// // //         const parentPath = pathParts.length > 0 
// // //           ? '/' + pathParts.slice(0, -1).join('/') 
// // //           : '/';
// // //         const currentPageName = pathParts[pathParts.length - 1];
// // //         navLinks = (data[parentPath] || []).filter(link => link !== currentPageName);
// // //         path = parentPath;
// // //       }
  
// // //       navLinks = navLinks.filter(link => !link.includes('[') && !link.includes(']'));
      
// // //       return {
// // //         links: navLinks,
// // //         currentPath: path
// // //       };
// // //     } catch (error) {
// // //       console.error('Error fetching sitemap:', error);
// // //       return { links: [], currentPath: currentPath };
// // //     }
// // //   }


// // export async function fetchSiteNavLinks(path, mode = 'children') {
// //     try {
// //       // Use absolute URL for server-side fetching
// //       const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
// //       const response = await fetch(`${apiUrl}/api/sitemap`);
// //       const data = await response.json();
      
// //       console.log('Raw sitemap data:', data);
      
// //       let resultPath = path;
// //       let navLinks = [];
      
// //       if (mode === 'children') {
// //         navLinks = data[path] || [];
// //       } else if (mode === 'siblings') {
// //         const pathParts = path.split('/').filter(Boolean);
// //         const parentPath = pathParts.length > 0 ? '/' + pathParts.slice(0, -1).join('/') : '/';
// //         const currentPageName = pathParts[pathParts.length - 1];
// //         navLinks = (data[parentPath] || []).filter(link => link !== currentPageName);
// //         resultPath = parentPath;
// //       }
  
// //       return {
// //         links: navLinks.filter(link => !link.includes('[') && !link.includes(']')),
// //         currentPath: resultPath
// //       };
// //     } catch (error) {
// //       console.error('Error fetching sitemap:', error);
// //       return { links: [], currentPath: path };
// //     }
// //   }


// // utils/sitemap.js
// import fs from 'fs';
// import path from 'path';

// export async function fetchSiteNavLinks(pagePath, mode = 'children') {
//   try {
//     // Read sitemap directly from filesystem
//     const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
//     const sitemapData = JSON.parse(fs.readFileSync(sitemapPath, 'utf8'));
    
//     let resultPath = pagePath;
//     let navLinks = [];
    
//     if (mode === 'children') {
//       navLinks = sitemapData[pagePath] || [];
//     } else if (mode === 'siblings') {
//       const pathParts = pagePath.split('/').filter(Boolean);
//       const parentPath = pathParts.length > 0 ? '/' + pathParts.slice(0, -1).join('/') : '/';
//       const currentPageName = pathParts[pathParts.length - 1];
//       navLinks = (sitemapData[parentPath] || []).filter(link => link !== currentPageName);
//       resultPath = parentPath;
//     }

//     return {
//       links: navLinks.filter(link => !link.includes('[') && !link.includes(']')),
//       currentPath: resultPath
//     };
//   } catch (error) {
//     console.error('Error reading sitemap:', error);
//     return { links: [], currentPath: pagePath };
//   }
// }



import { parseStringPromise } from 'xml2js';
import fs from 'fs';
import path from 'path';

export async function fetchSiteNavLinks(pagePath, mode = 'children') {
  try {
    // Find the sitemap.xml file
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const xml = fs.readFileSync(sitemapPath, 'utf8');
    
    // Parse XML to JavaScript object
    const result = await parseStringPromise(xml);
    console.log('Parsed sitemap:', result);
    
    // Extract URLs from the sitemap
    const urls = result.urlset.url.map(item => new URL(item.loc[0]).pathname);
    
    // Process URLs based on the mode
    let currentPath = pagePath;
    let navLinks = [];
    
    if (mode === 'children') {
      // Get URLs that are direct children of the current path
      navLinks = urls.filter(url => {
        const urlParts = url.split('/').filter(Boolean);
        const pageParts = pagePath.split('/').filter(Boolean);
        
        return urlParts.length === pageParts.length + 1 && 
               url.startsWith(pagePath === '/' ? '/' : pagePath + '/');
      }).map(url => url.split('/').filter(Boolean).pop());
    } else if (mode === 'siblings') {
      // Get parent path
      const pathParts = pagePath.split('/').filter(Boolean);
      const parentPath = pathParts.length > 0 ? '/' + pathParts.slice(0, -1).join('/') : '/';
      const currentPageName = pathParts[pathParts.length - 1];
      
      // Get siblings
      navLinks = urls.filter(url => {
        const urlParts = url.split('/').filter(Boolean);
        const parentParts = parentPath.split('/').filter(Boolean);
        
        return urlParts.length === parentParts.length + 1 && 
               url.startsWith(parentPath === '/' ? '/' : parentPath + '/') &&
               !url.endsWith('/' + currentPageName);
      }).map(url => url.split('/').filter(Boolean).pop());
      
      currentPath = parentPath;
    }
    
    return {
      links: navLinks.filter(link => !link.includes('[') && !link.includes(']')),
      currentPath
    };
  } catch (error) {
    console.error('Error processing sitemap:', error);
    return { links: [], currentPath: pagePath };
  }
}