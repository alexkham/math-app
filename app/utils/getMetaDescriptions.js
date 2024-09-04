// export async function getMetaDescriptions(categorizedUrls) {
//   console.log("Inside getMetaDescriptions !!!!!!!!!!!!!!!!!!!!")
//     const descriptions = {};
  
//     const processUrl = async (fullUrl) => {
//       try {
//         const response = await fetch(fullUrl);
//         const html = await response.text();
        
//         // const metaMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
//         // const metaMatch = html.match(/<meta[^>]*\bname=["']description["'][^>]*\bcontent=["']([^"']+)["'][^>]*>/i);
//         const metaMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
//         if (metaMatch) {
//           console.log(`Found description for ${url}: ${metaMatch[1]}`);
//         } else {
//           console.log(`No description found for ${url}`);
//         }

        
//         if (metaMatch) {
//           console.log(`Found description for ${fullUrl}: ${metaMatch[1]}`);
//           descriptions[fullUrl] = metaMatch[1];
//         } else {
//           console.log(`No description found for ${fullUrl}`);
//         }
//       } catch (error) {
//         console.error(`Error fetching ${fullUrl}: ${error.message}`);
//       }
//     };
  
//     const processUrls = async (urls) => {
//       if (Array.isArray(urls)) {
//         await Promise.all(urls.map(processUrl));
//       } else if (typeof urls === 'string') {
//         await processUrl(urls);
//       } else {
//         console.log('Unexpected URL format:', urls);
//       }
//     };
  
//     // Process all categories of URLs
//     await processUrls(categorizedUrls.main);
//     await Promise.all(Object.values(categorizedUrls.categories).map(processUrls));
//     await processUrls(categorizedUrls.leaves);
  
//     console.log('Final descriptions object:', descriptions);
//     return descriptions;
//   }

export async function getMetaDescriptions(categorizedUrls) {
  console.log("Inside getMetaDescriptions !!!!!!!!!!!!!!!!!!!!");
  const descriptions = {};

  const processUrl = async (fullUrl) => {
      try {
          console.log(`Fetching URL: ${fullUrl}`); // To trace what URL is being fetched
          const response = await fetch(fullUrl);
          const html = await response.text();
          
          const metaMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
          if (metaMatch) {
              console.log(`Found description for ${fullUrl}: ${metaMatch[1]}`);
              descriptions[fullUrl] = metaMatch[1];
          } else {
              console.log(`No description found for ${fullUrl}`);
          }
      } catch (error) {
          console.error(`Error fetching ${fullUrl}: ${error.message}`);
      }
  };

  const processUrls = async (urls) => {
      if (Array.isArray(urls)) {
          await Promise.all(urls.map(url => processUrl(url)));
      } else if (typeof urls === 'string') {
          await processUrl(urls);
      } else {
          console.log('Unexpected URL format:', urls);
      }
  };

  // Process all categories of URLs
  if (categorizedUrls.main) await processUrls(categorizedUrls.main);
  if (categorizedUrls.categories) await Promise.all(Object.values(categorizedUrls.categories).map(processUrls));
  if (categorizedUrls.leaves) await processUrls(categorizedUrls.leaves);

  console.log('Final descriptions object:', descriptions);
  return descriptions;
}
