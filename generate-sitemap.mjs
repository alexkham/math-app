// // import fs from 'fs';
// // import path from 'path';
// // import { fileURLToPath } from 'url';

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = path.dirname(__filename);
// // const SITE_URL = 'https://www.learnmathclass.com';

// // const excludedPages = process.argv.slice(2).map(arg => arg.replace('--', ''));

// // (async () => {
// //   try {
// //     const { globby } = await import('globby');

// //     console.log('Current working directory:', process.cwd());
// //     console.log('Script directory:', __dirname);

// //     const pages = await globby([
// //       '.next/server/pages/**/*.html',
// //       '!.next/server/pages/404.html',
// //       '!.next/server/pages/500.html',
// //       '!.next/server/pages/_*.html',
// //     ]);

// //     console.log('Found pages:', pages);
// //     console.log('Excluded pages:', excludedPages);

// //     if (pages.length === 0) {
// //       console.log('No pages found. Make sure you\'ve run "next build" before generating the sitemap.');
// //       return;
// //     }

// //     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// // <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// //   ${pages
// //     .filter(page => !excludedPages.some(excludedPage => 
// //       page.endsWith(`/${excludedPage}.html`) || 
// //       page.includes(`/${excludedPage}/`)
// //     ))
// //     .map((page) => {
// //       const route = page
// //         .replace('.next/server/pages', '')
// //         .replace('.html', '')
// //         .replace(/\/index/g, '');
// //       return `
// //   <url>
// //     <loc>${SITE_URL}${route}</loc>
// //     <lastmod>${new Date().toISOString()}</lastmod>
// //     <changefreq>weekly</changefreq>
// //     <priority>0.8</priority>
// //   </url>`;
// //     })
// //     .join('')}
// // </urlset>`;

// //     const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
// //     fs.writeFileSync(outputPath, sitemap);
// //     console.log('Sitemap generated successfully!');
// //     console.log('Sitemap saved to:', outputPath);
// //   } catch (error) {
// //     console.error('An error occurred:', error);
// //   }
// // })();


// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const SITE_URL = 'https://www.learnmathclass.com';

// const excludedPages = process.argv.slice(2).map(arg => arg.replace('--', ''));

// function getSourceFileDate(route) {
//   const pagesDir = path.join(__dirname, 'pages');
//   const appDir = path.join(__dirname, 'app');

//   // Build list of candidate source files for this route
//   const cleanRoute = route === '' ? '/index' : route;
//   const candidates = [
//     path.join(pagesDir, `${cleanRoute}.js`),
//     path.join(pagesDir, `${cleanRoute}.jsx`),
//     path.join(pagesDir, `${cleanRoute}.tsx`),
//     path.join(pagesDir, `${cleanRoute}.ts`),
//     path.join(pagesDir, `${cleanRoute}/index.js`),
//     path.join(pagesDir, `${cleanRoute}/index.jsx`),
//     path.join(pagesDir, `${cleanRoute}/index.tsx`),
//     path.join(pagesDir, `${cleanRoute}/index.ts`),
//     path.join(appDir, `${cleanRoute}/page.js`),
//     path.join(appDir, `${cleanRoute}/page.jsx`),
//     path.join(appDir, `${cleanRoute}/page.tsx`),
//     path.join(appDir, `${cleanRoute}/page.ts`),
//   ];

//   for (const candidate of candidates) {
//     try {
//       const stats = fs.statSync(candidate);
//       return stats.mtime.toISOString();
//     } catch {
//       // File not found, try next candidate
//     }
//   }

//   // Fallback: use the built HTML file date
//   const builtHtml = path.join(__dirname, '.next', 'server', 'pages', `${cleanRoute}.html`);
//   try {
//     const stats = fs.statSync(builtHtml);
//     return stats.mtime.toISOString();
//   } catch {
//     // Final fallback: current date
//     return new Date().toISOString();
//   }
// }

// (async () => {
//   try {
//     const { globby } = await import('globby');

//     console.log('Current working directory:', process.cwd());
//     console.log('Script directory:', __dirname);

//     const pages = await globby([
//       '.next/server/pages/**/*.html',
//       '!.next/server/pages/404.html',
//       '!.next/server/pages/500.html',
//       '!.next/server/pages/_*.html',
//     ]);

//     console.log('Found pages:', pages);
//     console.log('Excluded pages:', excludedPages);

//     if (pages.length === 0) {
//       console.log('No pages found. Make sure you\'ve run "next build" before generating the sitemap.');
//       return;
//     }

//     const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   ${pages
//     .filter(page => !excludedPages.some(excludedPage => 
//       page.endsWith(`/${excludedPage}.html`) || 
//       page.includes(`/${excludedPage}/`)
//     ))
//     .map((page) => {
//       const route = page
//         .replace('.next/server/pages', '')
//         .replace('.html', '')
//         .replace(/\/index/g, '');
//       const lastmod = getSourceFileDate(route);
//       return `
//   <url>
//     <loc>${SITE_URL}${route}</loc>
//     <lastmod>${lastmod}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
//   </url>`;
//     })
//     .join('')}
// </urlset>`;

//     const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
//     fs.writeFileSync(outputPath, sitemap);
//     console.log('Sitemap generated successfully!');
//     console.log('Sitemap saved to:', outputPath);
//   } catch (error) {
//     console.error('An error occurred:', error);
//   }
// })();


import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SITE_URL = 'https://www.learnmathclass.com';

const excludedPages = process.argv.slice(2).map(arg => arg.replace('--', ''));

function getSourceFileDate(route) {
  const pagesDir = path.join(__dirname, 'pages');
  const appDir = path.join(__dirname, 'app');

  // Build list of candidate source files for this route
  const cleanRoute = route === '' ? '/index' : route;
  const candidates = [
    path.join(pagesDir, `${cleanRoute}.js`),
    path.join(pagesDir, `${cleanRoute}.jsx`),
    path.join(pagesDir, `${cleanRoute}.tsx`),
    path.join(pagesDir, `${cleanRoute}.ts`),
    path.join(pagesDir, `${cleanRoute}/index.js`),
    path.join(pagesDir, `${cleanRoute}/index.jsx`),
    path.join(pagesDir, `${cleanRoute}/index.tsx`),
    path.join(pagesDir, `${cleanRoute}/index.ts`),
    path.join(appDir, `${cleanRoute}/page.js`),
    path.join(appDir, `${cleanRoute}/page.jsx`),
    path.join(appDir, `${cleanRoute}/page.tsx`),
    path.join(appDir, `${cleanRoute}/page.ts`),
  ];

  for (const candidate of candidates) {
    try {
      const stats = fs.statSync(candidate);
      return stats.mtime.toISOString();
    } catch {
      // File not found, try next candidate
    }
  }

  // Fallback: use the built HTML file date
  const builtHtml = path.join(__dirname, '.next', 'server', 'pages', `${cleanRoute}.html`);
  try {
    const stats = fs.statSync(builtHtml);
    return stats.mtime.toISOString();
  } catch {
    // Final fallback: current date
    return new Date().toISOString();
  }
}

(async () => {
  try {
    const { globby } = await import('globby');

    console.log('Current working directory:', process.cwd());
    console.log('Script directory:', __dirname);

    const pages = await globby([
      '.next/server/pages/**/*.html',
      '!.next/server/pages/404.html',
      '!.next/server/pages/500.html',
      '!.next/server/pages/_*.html',
    ]);

    // Ensure homepage is included
    const homepagePath = '.next/server/pages/index.html';
    if (!pages.includes(homepagePath)) {
      pages.unshift(homepagePath);
    }

    console.log('Found pages:', pages);
    console.log('Excluded pages:', excludedPages);

    if (pages.length === 0) {
      console.log('No pages found. Make sure you\'ve run "next build" before generating the sitemap.');
      return;
    }

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .filter(page => !excludedPages.some(excludedPage => 
      page.endsWith(`/${excludedPage}.html`) || 
      page.includes(`/${excludedPage}/`)
    ))
    .map((page) => {
      const route = page
        .replace('.next/server/pages', '')
        .replace('.html', '')
        .replace(/\/index/g, '');

      // Skip _index routes (malformed filenames)
      if (route.includes('/_index')) return null;

      const lastmod = getSourceFileDate(route);
      return `
  <url>
    <loc>${SITE_URL}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
    })
    .filter(Boolean)
    .join('')}
</urlset>`;

    const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log('Sitemap generated successfully!');
    console.log('Sitemap saved to:', outputPath);
  } catch (error) {
    console.error('An error occurred:', error);
  }
})();