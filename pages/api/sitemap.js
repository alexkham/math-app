// import fs from 'fs';
// import path from 'path';

// export function parseSitemap() {
//   const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
//   const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
//   const urlRegex = /<loc>(.*?)<\/loc>/g;
//   const urls = [];
//   let match;
//   while ((match = urlRegex.exec(sitemapContent)) !== null) {
//     urls.push(match[1]);
//   }

//   const categorizedUrls = {
//     main: [],
//     categories: {},
//     leaves: []
//   };

//   urls.forEach(url => {
//     const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
//     if (pathSegments.length === 0) {
//       categorizedUrls.main.push(url);
//     } else if (pathSegments.length === 1) {
//       if (!categorizedUrls.categories[pathSegments[0]]) {
//         categorizedUrls.categories[pathSegments[0]] = [];
//       }
//       categorizedUrls.categories[pathSegments[0]].push(url);
//     } else {
//       categorizedUrls.leaves.push(url);
//     }
//   });

//   return categorizedUrls;
// }

// export default function handler(req, res) {
//   if (req.method === 'GET') {
//     try {
//       const categorizedUrls = parseSitemap();
//       res.status(200).json(categorizedUrls);
//     } catch (error) {
//       res.status(500).json({ error: 'Error parsing sitemap' });
//     }
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import fs from 'fs';
import path from 'path';

export function parseSitemap() {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    console.log(`Reading sitemap from: ${sitemapPath}`); // Log the path to verify it's correct

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    if (!sitemapContent) {
        console.error("Failed to read sitemap content or it's empty.");
    } else {
        console.log("Sitemap content read successfully.");
    }
  
    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1]);
    }

    console.log(`Extracted URLs: ${urls.length}`); // Log the number of URLs extracted

    const categorizedUrls = {
        main: [],
        categories: {},
        leaves: []
    };

    urls.forEach(url => {
        const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
        if (pathSegments.length === 0) {
            categorizedUrls.main.push(url);
        } else if (pathSegments.length === 1) {
            if (!categorizedUrls.categories[pathSegments[0]]) {
                categorizedUrls.categories[pathSegments[0]] = [];
            }
            categorizedUrls.categories[pathSegments[0]].push(url);
        } else {
            categorizedUrls.leaves.push(url);
        }
    });

    // Log final categorized URLs for inspection
    console.log("Categorized URLs:");
    console.log(`Main: ${categorizedUrls.main.length}`);
    Object.keys(categorizedUrls.categories).forEach(cat => {
        console.log(`Category - ${cat}: ${categorizedUrls.categories[cat].length}`);
    });
    console.log(`Leaves: ${categorizedUrls.leaves.length}`);

    return categorizedUrls;
}
