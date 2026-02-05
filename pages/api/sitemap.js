
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

    const urlRegex = /<loc>(.*?)<\/loc>/g;
    const urls = [];
    let match;
    while ((match = urlRegex.exec(sitemapContent)) !== null) {
      urls.push(match[1]);
    }

    const urlStructure = {};

    urls.forEach(url => {
      const pathSegments = new URL(url).pathname.split('/').filter(Boolean);
      
      for (let i = 0; i < pathSegments.length; i++) {
        const parent = i === 0 ? '/' : '/' + pathSegments.slice(0, i).join('/');
        const child = pathSegments[i];
        
        if (!urlStructure[parent]) {
          urlStructure[parent] = new Set();
        }
        urlStructure[parent].add(child);
      }
    });

    // Convert Sets to Arrays
    for (const key in urlStructure) {
      urlStructure[key] = Array.from(urlStructure[key]);
    }

    console.log('Generated URL structure:', urlStructure);
    res.status(200).json(urlStructure);
  } catch (error) {
    console.error('Error parsing sitemap:', error);
    res.status(500).json({ error: 'Failed to parse sitemap' });
  }
}


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