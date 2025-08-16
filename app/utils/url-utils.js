// // // // // utils/url-utils.js

// // // // const normalizeUrl = (url) => {
// // // //     if (!url) return '';
    
// // // //     // If it's already a relative path, return as is
// // // //     if (url.startsWith('/')) return url;
    
// // // //     try {
// // // //       const urlObj = new URL(url);
      
// // // //       // For internal links (your domain), convert to relative path
// // // //       if (urlObj.hostname.includes('learnmathclass.com')) {
// // // //         return urlObj.pathname;
// // // //       }
  
// // // //       // For external links, ensure www consistency
// // // //       if (!urlObj.hostname.startsWith('www.')) {
// // // //         urlObj.hostname = 'www.' + urlObj.hostname;
// // // //       }
// // // //       return urlObj.toString();
// // // //     } catch (e) {
// // // //       console.error('Error normalizing URL:', url, e);
// // // //       return url;
// // // //     }
// // // //   };
  
// // // //   export { normalizeUrl };



// // // // utils/url-utils.js

// // // const normalizeUrl = (url) => {
// // //     if (!url) return '';
    
// // //     // If it's already a relative path, return as is
// // //     if (url.startsWith('/')) return url;
    
// // //     // Add protocol if missing
// // //     let urlToProcess = url;
// // //     if (!url.startsWith('http://') && !url.startsWith('https://')) {
// // //         urlToProcess = 'https://' + url;
// // //     }
    
// // //     try {
// // //         const urlObj = new URL(urlToProcess);
        
// // //         // For internal links (your domain), convert to relative path
// // //         if (urlObj.hostname.includes('learnmathclass.com')) {
// // //             return urlObj.pathname;
// // //         }

// // //         // For external links, ensure www consistency
// // //         if (!urlObj.hostname.startsWith('www.')) {
// // //             urlObj.hostname = 'www.' + urlObj.hostname;
// // //         }
// // //         return urlObj.toString();
// // //     } catch (e) {
// // //         console.error('Error normalizing URL:', url, e);
// // //         // If URL is invalid, try to extract path
// // //         const pathMatch = url.match(/[\/]([^\/].*)$/);
// // //         if (pathMatch) {
// // //             return '/' + pathMatch[1];
// // //         }
// // //         return url;
// // //     }
// // // };

// // // export { normalizeUrl };

// // // utils/url-utils.js
// // const normalizeUrl = (url) => {
// //     if (!url) return '';
  
// //     // If it's already a relative path, return as is
// //     if (url.startsWith('/')) return url;
  
// //     // Add protocol if missing
// //     let urlToProcess = url;
// //     if (!url.startsWith('http://') && !url.startsWith('https://')) {
// //       urlToProcess = 'https://' + url;
// //     }
  
// //     try {
// //       const urlObj = new URL(urlToProcess);
  
// //       // For internal links (your domain), convert to relative path
// //       if (urlObj.hostname.includes('learnmathclass.com')) {
// //         return urlObj.pathname + urlObj.search + urlObj.hash;
// //       }
  
// //       // For external links, ensure www consistency by explicitly setting it
// //       const hostname = urlObj.hostname;
// //       if (!hostname.startsWith('www.')) {
// //         // Create new URL to preserve all properties
// //         const newUrl = new URL(urlObj.toString());
// //         newUrl.hostname = 'www.' + hostname;
// //         return newUrl.toString();
// //       }
  
// //       return urlObj.toString();
// //     } catch (e) {
// //       console.error('Error normalizing URL:', url, e);
// //       // If URL is invalid, try to extract path
// //       const pathMatch = url.match(/[\/]([^\/].*)$/);
// //       if (pathMatch) {
// //         return '/' + pathMatch[1];
// //       }
// //       return url;
// //     }
// //   };
  
// //   export { normalizeUrl };


// // const normalizeUrl = (url) => {
// //     if (!url) return '';
// //     if (url.startsWith('/')) return url;
   
// //     let urlToProcess = url;
// //     if (!url.startsWith('http://') && !url.startsWith('https://')) {
// //       urlToProcess = 'https://' + url;
// //     }
   
// //     try {
// //       const urlObj = new URL(urlToProcess);
// //       if (urlObj.hostname.includes('learnmathclass.com')) {
// //         return urlObj.pathname + urlObj.search + urlObj.hash;
// //       }
      
// //       if (!urlObj.hostname.startsWith('www.')) {
// //         const newUrl = new URL(urlObj.toString());
// //         newUrl.hostname = 'www.' + urlObj.hostname;
// //         return newUrl.toString();
// //       }
// //       return urlObj.toString();
// //     } catch (e) {
// //       console.error('Error normalizing URL:', url, e);
// //       const pathMatch = url.match(/[\/]([^\/].*)$/);
// //       return pathMatch ? '/' + pathMatch[1] : url;
// //     }
// //    };


// //     export { normalizeUrl };

// const normalizeUrl = (url) => {
//     if (!url) return '';
//     if (url.startsWith('/')) return url;
   
//     let urlToProcess = url;
//     if (!urlToProcess.startsWith('http://') && !urlToProcess.startsWith('https://')) {
//       urlToProcess = 'https://www.learnmathclass.com' + url;
//     }
   
//     try {
//       const urlObj = new URL(urlToProcess);
   
//       if (urlObj.hostname.includes('learnmathclass.com')) {
//         const wwwUrl = new URL(urlToProcess);
//         if (!wwwUrl.hostname.startsWith('www.')) {
//           wwwUrl.hostname = 'www.' + wwwUrl.hostname;
//         }
//         return wwwUrl.toString();
//       }
//       return urlToProcess;
//     } catch (e) {
//       console.error('Error:', e);
//       return url;
//     }
//    };
   
//    export { normalizeUrl };

const normalizeUrl = (url) => {
    if (!url) return '';
    if (url.startsWith('/')) return url;
  
    let urlToProcess = url;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      urlToProcess = 'https://' + url;
    }
  
    try {
      const urlObj = new URL(urlToProcess);
      if (urlObj.hostname.includes('learnmathclass.com')) {
        return urlObj.pathname + urlObj.search + urlObj.hash;
      }
      
      if (!urlObj.hostname.startsWith('www.')) {
        const newUrl = new URL(urlObj.toString());
        newUrl.hostname = 'www.' + urlObj.hostname;
        return newUrl.toString();
      }
      return urlObj.toString();
    } catch (e) {
      console.error('Error normalizing URL:', url, e);
      const pathMatch = url.match(/[\/]([^\/].*)$/);
      return pathMatch ? '/' + pathMatch[1] : url;
    }
  };
  
  export { normalizeUrl };