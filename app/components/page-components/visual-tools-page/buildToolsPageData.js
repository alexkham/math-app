// // // /**
// // //  * buildToolIndexData
// // //  *
// // //  * For tool-index pages like /algebra/visual-tools, /algebra/calculators, etc.
// // //  * Scans direct children. For children that have a [view].jsx dynamic route,
// // //  * also extracts the list of views from getStaticPaths + per-view metadata
// // //  * from the viewConfig object.
// // //  *
// // //  * Returns:
// // //  * {
// // //  *   children: [
// // //  *     {
// // //  *       title, description, shortDescription, href,
// // //  *       image, imageAlt, svg,
// // //  *       hasViews: boolean,
// // //  *       views: [
// // //  *         { title, description, shortDescription, href, formula?, label?, image?, svg? },
// // //  *         ...
// // //  *       ]
// // //  *     },
// // //  *     ...
// // //  *   ]
// // //  * }
// // //  *
// // //  * `description` prefers hubDescription (long form) and falls back to seoData.description.
// // //  * `shortDescription` is always seoData.description (the ≤160-char meta-tag form).
// // //  *
// // //  * For viewConfig blocks, supports optional `formula` and `label` fields so view
// // //  * cards (like the algebraic identity cards) can render a math expression + caption.
// // //  */

// // // import fs from 'fs';
// // // import path from 'path';


// // // /* ================================================================
// // //    FILESYSTEM
// // //    ================================================================ */

// // // function getPagesDir() {
// // //   return path.join(process.cwd(), 'pages');
// // // }

// // // function getChildSlugs(parentRoute) {
// // //   const dir = path.join(getPagesDir(), parentRoute);
// // //   if (!fs.existsSync(dir)) return [];

// // //   return fs.readdirSync(dir).filter((entry) => {
// // //     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
// // //     const full = path.join(dir, entry);
// // //     const stat = fs.statSync(full);
// // //     if (stat.isDirectory()) {
// // //       return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
// // //         (f) => fs.existsSync(path.join(full, f))
// // //       );
// // //     }
// // //     if (stat.isFile()) {
// // //       const ext = path.extname(entry);
// // //       const name = path.basename(entry, ext);
// // //       if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return false;
// // //       if (name === 'index') return false;
// // //       return true;
// // //     }
// // //     return false;
// // //   }).map((entry) => {
// // //     const full = path.join(dir, entry);
// // //     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
// // //   });
// // // }

// // // function findIndexFile(route) {
// // //   const pagesDir = getPagesDir();
// // //   const candidates = [
// // //     path.join(pagesDir, route, 'index.js'),
// // //     path.join(pagesDir, route, 'index.jsx'),
// // //     path.join(pagesDir, route, 'index.ts'),
// // //     path.join(pagesDir, route, 'index.tsx'),
// // //     path.join(pagesDir, route + '.js'),
// // //     path.join(pagesDir, route + '.jsx'),
// // //     path.join(pagesDir, route + '.ts'),
// // //     path.join(pagesDir, route + '.tsx'),
// // //   ];
// // //   for (const c of candidates) if (fs.existsSync(c)) return c;
// // //   return null;
// // // }

// // // function findViewFile(route) {
// // //   const pagesDir = getPagesDir();
// // //   const candidates = [
// // //     path.join(pagesDir, route, '[view].js'),
// // //     path.join(pagesDir, route, '[view].jsx'),
// // //     path.join(pagesDir, route, '[view].ts'),
// // //     path.join(pagesDir, route, '[view].tsx'),
// // //   ];
// // //   for (const c of candidates) if (fs.existsSync(c)) return c;
// // //   return null;
// // // }


// // // /* ================================================================
// // //    TEXT UTILITIES
// // //    ================================================================ */

// // // function stripComments(src) {
// // //   return src.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
// // // }

// // // function escapeRegex(s) {
// // //   return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// // // }

// // // function cleanTitle(raw) {
// // //   if (!raw) return null;
// // //   const i = raw.indexOf('|');
// // //   return i > 0 ? raw.substring(0, i).trim() : raw.trim();
// // // }

// // // function slugToTitle(slug) {
// // //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // // }


// // // /* ================================================================
// // //    FIELD EXTRACTION (works on a text block: full file or a slug's
// // //    viewConfig sub-block)
// // //    ================================================================ */

// // // function extractFields(block) {
// // //   const result = {};

// // //   const titleMatch = block.match(
// // //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// // //   );
// // //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// // //   if (!result.title) {
// // //     const t = block.match(/(?:^|\W)title\s*:\s*["'`]([^"'`]{5,200})["'`]/);
// // //     if (t) result.title = cleanTitle(t[1]);
// // //   }

// // //   const desc = block.match(/(?:^|\W)description\s*:\s*["'`]([^"'`]{10,500})["'`]/);
// // //   if (desc) result.description = desc[1];

// // //   const hub = block.match(/hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/);
// // //   if (hub) result.hubDescription = hub[1];

// // //   const name = block.match(/(?:^|\W)name\s*:\s*["'`]([^"'`]{3,150})["'`]/);
// // //   if (name) result.name = name[1];

// // //   const url = block.match(/(?:^|\W)url\s*:\s*["'`](\/[^"'`]{1,200})["'`]/);
// // //   if (url) result.url = url[1];

// // //   const img = block.match(/(?:^|\W)image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/);
// // //   if (img) result.image = img[1];

// // //   const imgAlt = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
// // //   if (imgAlt) result.imageAlt = imgAlt[1];

// // //   const svg = block.match(/(?:^|\W)svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
// // //   if (svg) result.svg = svg[1];

// // //   const formula = block.match(/(?:^|\W)formula\s*:\s*["'`]([^"'`]{1,120})["'`]/);
// // //   if (formula) result.formula = formula[1];

// // //   const label = block.match(/(?:^|\W)label\s*:\s*["'`]([^"'`]{1,80})["'`]/);
// // //   if (label) result.label = label[1];

// // //   return result;
// // // }

// // // function extractSeoFromFile(filePath) {
// // //   if (!filePath) return {};
// // //   let content;
// // //   try { content = fs.readFileSync(filePath, 'utf-8'); }
// // //   catch (e) { return {}; }
// // //   return extractFields(stripComments(content));
// // // }


// // // /* ================================================================
// // //    DYNAMIC ROUTE: [view].jsx
// // //    ================================================================ */

// // // function extractViews(viewFilePath, parentRoute) {
// // //   let content;
// // //   try { content = fs.readFileSync(viewFilePath, 'utf-8'); }
// // //   catch (e) { return []; }
// // //   content = stripComments(content);

// // //   // 1. Collect view slugs from getStaticPaths
// // //   const slugs = [];
// // //   const pathsRe = /\{\s*params\s*:\s*\{\s*view\s*:\s*["'`]([^"'`]+)["'`]/g;
// // //   let m;
// // //   while ((m = pathsRe.exec(content)) !== null) {
// // //     if (!slugs.includes(m[1])) slugs.push(m[1]);
// // //   }
// // //   if (slugs.length === 0) return [];

// // //   // 2. For each slug, isolate its viewConfig sub-block then extract fields.
// // //   //    Block end = start of the next known slug's block, or EOF.
// // //   const slugStarts = {};
// // //   for (const slug of slugs) {
// // //     const re = new RegExp(`["'\`]${escapeRegex(slug)}["'\`]\\s*:\\s*\\{`);
// // //     const mm = content.match(re);
// // //     slugStarts[slug] = mm ? mm.index + mm[0].length : -1;
// // //   }

// // //   const views = [];
// // //   for (const slug of slugs) {
// // //     const start = slugStarts[slug];
// // //     if (start < 0) continue;

// // //     let end = content.length;
// // //     for (const other of slugs) {
// // //       if (other === slug) continue;
// // //       const os = slugStarts[other];
// // //       if (os > start && os < end) end = os;
// // //     }
// // //     const block = content.substring(start, end);
// // //     const fields = extractFields(block);

// // //     views.push({
// // //       title: fields.name || fields.title || slugToTitle(slug),
// // //       description: fields.hubDescription || fields.description || null,
// // //       shortDescription: fields.description || null,
// // //       href: fields.url || `${parentRoute}/${slug}`,
// // //       image: fields.image || null,
// // //       imageAlt: fields.imageAlt || null,
// // //       svg: fields.svg || null,
// // //       formula: fields.formula || null,
// // //       label: fields.label || null,
// // //     });
// // //   }

// // //   return views;
// // // }


// // // /* ================================================================
// // //    MAIN
// // //    ================================================================ */

// // // export async function buildToolIndexData(route) {
// // //   const childSlugs = getChildSlugs(route);
// // //   const children = [];

// // //   for (const slug of childSlugs) {
// // //     const childRoute = `${route}/${slug}`;
// // //     const indexFile = findIndexFile(childRoute);
// // //     const viewFile = findViewFile(childRoute);
// // //     const seo = extractSeoFromFile(indexFile);

// // //     const card = {
// // //       title: seo.name || seo.title || slugToTitle(slug),
// // //       description: seo.hubDescription || seo.description || null,
// // //       shortDescription: seo.description || null,
// // //       href: childRoute,
// // //       image: seo.image || null,
// // //       imageAlt: seo.imageAlt || null,
// // //       svg: seo.svg || null,
// // //       hasViews: false,
// // //       views: [],
// // //     };

// // //     if (viewFile) {
// // //       const views = extractViews(viewFile, childRoute);
// // //       if (views.length > 0) {
// // //         card.hasViews = true;
// // //         card.views = views;
// // //       }
// // //     }

// // //     children.push(card);
// // //   }

// // //   return { children };
// // // }

// // // export default buildToolIndexData;


// // /**
// //  * buildToolIndexData
// //  *
// //  * For tool-index pages like /algebra/visual-tools, /algebra/calculators, etc.
// //  * Scans direct children. For children that have a [view].jsx dynamic route,
// //  * also extracts the list of views from getStaticPaths + per-view metadata
// //  * from the viewConfig object.
// //  *
// //  * Returns:
// //  * {
// //  *   children: [
// //  *     {
// //  *       title, description, shortDescription, href,
// //  *       image, imageAlt, svg,
// //  *       hasViews: boolean,
// //  *       views: [
// //  *         { title, description, shortDescription, href, formula?, label?, image?, svg? },
// //  *         ...
// //  *       ]
// //  *     },
// //  *     ...
// //  *   ]
// //  * }
// //  *
// //  * `description` prefers hubDescription (long form) and falls back to seoData.description.
// //  * `shortDescription` is always seoData.description (the ≤160-char meta-tag form).
// //  *
// //  * For viewConfig blocks, supports optional `formula` and `label` fields so view
// //  * cards (like the algebraic identity cards) can render a math expression + caption.
// //  */

// // import fs from 'fs';
// // import path from 'path';


// // /* ================================================================
// //    FILESYSTEM
// //    ================================================================ */

// // function getPagesDir() {
// //   return path.join(process.cwd(), 'pages');
// // }

// // function getChildSlugs(parentRoute) {
// //   const dir = path.join(getPagesDir(), parentRoute);
// //   if (!fs.existsSync(dir)) return [];

// //   return fs.readdirSync(dir).filter((entry) => {
// //     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
// //     const full = path.join(dir, entry);
// //     const stat = fs.statSync(full);
// //     if (stat.isDirectory()) {
// //       return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
// //         (f) => fs.existsSync(path.join(full, f))
// //       );
// //     }
// //     if (stat.isFile()) {
// //       const ext = path.extname(entry);
// //       const name = path.basename(entry, ext);
// //       if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return false;
// //       if (name === 'index') return false;
// //       return true;
// //     }
// //     return false;
// //   }).map((entry) => {
// //     const full = path.join(dir, entry);
// //     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
// //   });
// // }

// // function findIndexFile(route) {
// //   const pagesDir = getPagesDir();
// //   const candidates = [
// //     path.join(pagesDir, route, 'index.js'),
// //     path.join(pagesDir, route, 'index.jsx'),
// //     path.join(pagesDir, route, 'index.ts'),
// //     path.join(pagesDir, route, 'index.tsx'),
// //     path.join(pagesDir, route + '.js'),
// //     path.join(pagesDir, route + '.jsx'),
// //     path.join(pagesDir, route + '.ts'),
// //     path.join(pagesDir, route + '.tsx'),
// //   ];
// //   for (const c of candidates) if (fs.existsSync(c)) return c;
// //   return null;
// // }

// // function findViewFile(route) {
// //   const pagesDir = getPagesDir();
// //   const candidates = [
// //     path.join(pagesDir, route, '[view].js'),
// //     path.join(pagesDir, route, '[view].jsx'),
// //     path.join(pagesDir, route, '[view].ts'),
// //     path.join(pagesDir, route, '[view].tsx'),
// //   ];
// //   for (const c of candidates) if (fs.existsSync(c)) return c;
// //   return null;
// // }


// // /* ================================================================
// //    TEXT UTILITIES
// //    ================================================================ */

// // function stripComments(src) {
// //   return src.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
// // }

// // function escapeRegex(s) {
// //   return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// // }

// // function cleanTitle(raw) {
// //   if (!raw) return null;
// //   const i = raw.indexOf('|');
// //   return i > 0 ? raw.substring(0, i).trim() : raw.trim();
// // }

// // function slugToTitle(slug) {
// //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // }

// // // Ensure href starts with '/'. Strips any leading slashes first to avoid '//'.
// // function ensureLeadingSlash(p) {
// //   if (!p) return p;
// //   return '/' + String(p).replace(/^\/+/, '');
// // }


// // /* ================================================================
// //    FIELD EXTRACTION (works on a text block: full file or a slug's
// //    viewConfig sub-block)
// //    ================================================================ */

// // function extractFields(block) {
// //   const result = {};

// //   const titleMatch = block.match(
// //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// //   );
// //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// //   if (!result.title) {
// //     const t = block.match(/(?:^|\W)title\s*:\s*["'`]([^"'`]{5,200})["'`]/);
// //     if (t) result.title = cleanTitle(t[1]);
// //   }

// //   const desc = block.match(/(?:^|\W)description\s*:\s*["'`]([^"'`]{10,500})["'`]/);
// //   if (desc) result.description = desc[1];

// //   const hub = block.match(/hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/);
// //   if (hub) result.hubDescription = hub[1];

// //   const name = block.match(/(?:^|\W)name\s*:\s*["'`]([^"'`]{3,150})["'`]/);
// //   if (name) result.name = name[1];

// //   const url = block.match(/(?:^|\W)url\s*:\s*["'`](\/[^"'`]{1,200})["'`]/);
// //   if (url) result.url = url[1];

// //   const img = block.match(/(?:^|\W)image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/);
// //   if (img) result.image = img[1];

// //   const imgAlt = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
// //   if (imgAlt) result.imageAlt = imgAlt[1];

// //   const svg = block.match(/(?:^|\W)svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
// //   if (svg) result.svg = svg[1];

// //   const formula = block.match(/(?:^|\W)formula\s*:\s*["'`]([^"'`]{1,120})["'`]/);
// //   if (formula) result.formula = formula[1];

// //   const label = block.match(/(?:^|\W)label\s*:\s*["'`]([^"'`]{1,80})["'`]/);
// //   if (label) result.label = label[1];

// //   return result;
// // }

// // function extractSeoFromFile(filePath) {
// //   if (!filePath) return {};
// //   let content;
// //   try { content = fs.readFileSync(filePath, 'utf-8'); }
// //   catch (e) { return {}; }
// //   return extractFields(stripComments(content));
// // }


// // /* ================================================================
// //    DYNAMIC ROUTE: [view].jsx
// //    ================================================================ */

// // function extractViews(viewFilePath, parentRoute) {
// //   let content;
// //   try { content = fs.readFileSync(viewFilePath, 'utf-8'); }
// //   catch (e) { return []; }
// //   content = stripComments(content);

// //   // 1. Collect view slugs from getStaticPaths
// //   const slugs = [];
// //   const pathsRe = /\{\s*params\s*:\s*\{\s*view\s*:\s*["'`]([^"'`]+)["'`]/g;
// //   let m;
// //   while ((m = pathsRe.exec(content)) !== null) {
// //     if (!slugs.includes(m[1])) slugs.push(m[1]);
// //   }
// //   if (slugs.length === 0) return [];

// //   // 2. For each slug, isolate its viewConfig sub-block then extract fields.
// //   //    Block end = start of the next known slug's block, or EOF.
// //   const slugStarts = {};
// //   for (const slug of slugs) {
// //     const re = new RegExp(`["'\`]${escapeRegex(slug)}["'\`]\\s*:\\s*\\{`);
// //     const mm = content.match(re);
// //     slugStarts[slug] = mm ? mm.index + mm[0].length : -1;
// //   }

// //   const views = [];
// //   for (const slug of slugs) {
// //     const start = slugStarts[slug];
// //     if (start < 0) continue;

// //     let end = content.length;
// //     for (const other of slugs) {
// //       if (other === slug) continue;
// //       const os = slugStarts[other];
// //       if (os > start && os < end) end = os;
// //     }
// //     const block = content.substring(start, end);
// //     const fields = extractFields(block);

// //     views.push({
// //       title: fields.name || fields.title || slugToTitle(slug),
// //       description: fields.hubDescription || fields.description || null,
// //       shortDescription: fields.description || null,
// //       href: ensureLeadingSlash(fields.url || `${parentRoute}/${slug}`),
// //       image: fields.image || null,
// //       imageAlt: fields.imageAlt || null,
// //       svg: fields.svg || null,
// //       formula: fields.formula || null,
// //       label: fields.label || null,
// //     });
// //   }

// //   return views;
// // }


// // /* ================================================================
// //    MAIN
// //    ================================================================ */

// // export async function buildToolIndexData(route) {
// //   const childSlugs = getChildSlugs(route);
// //   const children = [];

// //   for (const slug of childSlugs) {
// //     const childRoute = `${route}/${slug}`;
// //     const indexFile = findIndexFile(childRoute);
// //     const viewFile = findViewFile(childRoute);
// //     const seo = extractSeoFromFile(indexFile);

// //     const card = {
// //       title: seo.name || seo.title || slugToTitle(slug),
// //       description: seo.hubDescription || seo.description || null,
// //       shortDescription: seo.description || null,
// //       href: ensureLeadingSlash(childRoute),
// //       image: seo.image || null,
// //       imageAlt: seo.imageAlt || null,
// //       svg: seo.svg || null,
// //       hasViews: false,
// //       views: [],
// //     };

// //     if (viewFile) {
// //       const views = extractViews(viewFile, childRoute);
// //       if (views.length > 0) {
// //         card.hasViews = true;
// //         card.views = views;
// //       }
// //     }

// //     children.push(card);
// //   }

// //   return { children };
// // }

// // export default buildToolIndexData;


// /**
//  * buildToolIndexData — v3
//  *
//  * Scans direct children of `route` (e.g. /trigonometry/visual-tools).
//  * A child becomes a "group with views" if EITHER:
//  *   (a) it has a [view].jsx dynamic route — views come from getStaticPaths
//  *       + viewConfig metadata, OR
//  *   (b) it has nested subfolders, each with their own index.jsx —
//  *       each subfolder becomes one view of the parent card.
//  * Otherwise it's a standalone card.
//  *
//  * Returns: { children: [{ title, description, href, hasViews, views, ... }, ...] }
//  *
//  * Integration with VisualToolsPage:
//  *   Items with hasViews=true render as a GroupPanel (header + mini-card grid).
//  *   Items with hasViews=false render as a BigCard.
//  *   No component changes needed — the data shape is already what it consumes.
//  */

// import fs from 'fs';
// import path from 'path';


// /* ================================================================
//    FILESYSTEM
//    ================================================================ */

// function getPagesDir() {
//   return path.join(process.cwd(), 'pages');
// }

// function hasIndexFile(absDir) {
//   return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
//     (f) => fs.existsSync(path.join(absDir, f))
//   );
// }

// function getChildSlugs(parentRoute) {
//   const dir = path.join(getPagesDir(), parentRoute);
//   if (!fs.existsSync(dir)) return [];

//   return fs.readdirSync(dir).filter((entry) => {
//     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
//     const full = path.join(dir, entry);
//     const stat = fs.statSync(full);
//     if (stat.isDirectory()) return hasIndexFile(full);
//     if (stat.isFile()) {
//       const ext = path.extname(entry);
//       const name = path.basename(entry, ext);
//       if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return false;
//       if (name === 'index') return false;
//       return true;
//     }
//     return false;
//   }).map((entry) => {
//     const full = path.join(dir, entry);
//     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
//   });
// }

// // Subfolders only (directories with their own index file).
// // Used for grouping when a parent has no [view].jsx.
// function getSubfolderSlugs(parentRoute) {
//   const dir = path.join(getPagesDir(), parentRoute);
//   if (!fs.existsSync(dir)) return [];

//   return fs.readdirSync(dir).filter((entry) => {
//     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
//     const full = path.join(dir, entry);
//     if (!fs.statSync(full).isDirectory()) return false;
//     return hasIndexFile(full);
//   });
// }

// function findIndexFile(route) {
//   const pagesDir = getPagesDir();
//   const candidates = [
//     path.join(pagesDir, route, 'index.js'),
//     path.join(pagesDir, route, 'index.jsx'),
//     path.join(pagesDir, route, 'index.ts'),
//     path.join(pagesDir, route, 'index.tsx'),
//     path.join(pagesDir, route + '.js'),
//     path.join(pagesDir, route + '.jsx'),
//     path.join(pagesDir, route + '.ts'),
//     path.join(pagesDir, route + '.tsx'),
//   ];
//   for (const c of candidates) if (fs.existsSync(c)) return c;
//   return null;
// }

// function findViewFile(route) {
//   const pagesDir = getPagesDir();
//   const candidates = [
//     path.join(pagesDir, route, '[view].js'),
//     path.join(pagesDir, route, '[view].jsx'),
//     path.join(pagesDir, route, '[view].ts'),
//     path.join(pagesDir, route, '[view].tsx'),
//   ];
//   for (const c of candidates) if (fs.existsSync(c)) return c;
//   return null;
// }


// /* ================================================================
//    TEXT UTILITIES
//    ================================================================ */

// function stripComments(src) {
//   return src.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
// }

// function escapeRegex(s) {
//   return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// }

// function cleanTitle(raw) {
//   if (!raw) return null;
//   const i = raw.indexOf('|');
//   return i > 0 ? raw.substring(0, i).trim() : raw.trim();
// }

// function slugToTitle(slug) {
//   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// }

// function ensureLeadingSlash(p) {
//   if (!p) return p;
//   return '/' + String(p).replace(/^\/+/, '');
// }


// /* ================================================================
//    FIELD EXTRACTION
//    ================================================================ */

// function extractFields(block) {
//   const result = {};

//   const titleMatch = block.match(
//     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
//   );
//   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

//   if (!result.title) {
//     const t = block.match(/(?:^|\W)title\s*:\s*["'`]([^"'`]{5,200})["'`]/);
//     if (t) result.title = cleanTitle(t[1]);
//   }

//   const desc = block.match(/(?:^|\W)description\s*:\s*["'`]([^"'`]{10,500})["'`]/);
//   if (desc) result.description = desc[1];

//   const hub = block.match(/hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/);
//   if (hub) result.hubDescription = hub[1];

//   const name = block.match(/(?:^|\W)name\s*:\s*["'`]([^"'`]{3,150})["'`]/);
//   if (name) result.name = name[1];

//   const url = block.match(/(?:^|\W)url\s*:\s*["'`](\/[^"'`]{1,200})["'`]/);
//   if (url) result.url = url[1];

//   const img = block.match(/(?:^|\W)image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/);
//   if (img) result.image = img[1];

//   const imgAlt = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
//   if (imgAlt) result.imageAlt = imgAlt[1];

//   const svg = block.match(/(?:^|\W)svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
//   if (svg) result.svg = svg[1];

//   const formula = block.match(/(?:^|\W)formula\s*:\s*["'`]([^"'`]{1,120})["'`]/);
//   if (formula) result.formula = formula[1];

//   const label = block.match(/(?:^|\W)label\s*:\s*["'`]([^"'`]{1,80})["'`]/);
//   if (label) result.label = label[1];

//   return result;
// }

// function extractSeoFromFile(filePath) {
//   if (!filePath) return {};
//   let content;
//   try { content = fs.readFileSync(filePath, 'utf-8'); }
//   catch (e) { return {}; }
//   return extractFields(stripComments(content));
// }


// /* ================================================================
//    DYNAMIC ROUTE: [view].jsx
//    ================================================================ */

// function extractViews(viewFilePath, parentRoute) {
//   let content;
//   try { content = fs.readFileSync(viewFilePath, 'utf-8'); }
//   catch (e) { return []; }
//   content = stripComments(content);

//   const slugs = [];
//   const pathsRe = /\{\s*params\s*:\s*\{\s*view\s*:\s*["'`]([^"'`]+)["'`]/g;
//   let m;
//   while ((m = pathsRe.exec(content)) !== null) {
//     if (!slugs.includes(m[1])) slugs.push(m[1]);
//   }
//   if (slugs.length === 0) return [];

//   const slugStarts = {};
//   for (const slug of slugs) {
//     const re = new RegExp(`["'\`]${escapeRegex(slug)}["'\`]\\s*:\\s*\\{`);
//     const mm = content.match(re);
//     slugStarts[slug] = mm ? mm.index + mm[0].length : -1;
//   }

//   const views = [];
//   for (const slug of slugs) {
//     const start = slugStarts[slug];
//     if (start < 0) continue;

//     let end = content.length;
//     for (const other of slugs) {
//       if (other === slug) continue;
//       const os = slugStarts[other];
//       if (os > start && os < end) end = os;
//     }
//     const block = content.substring(start, end);
//     const fields = extractFields(block);

//     views.push({
//       title: fields.name || fields.title || slugToTitle(slug),
//       description: fields.hubDescription || fields.description || null,
//       shortDescription: fields.description || null,
//       href: ensureLeadingSlash(fields.url || `${parentRoute}/${slug}`),
//       image: fields.image || null,
//       imageAlt: fields.imageAlt || null,
//       svg: fields.svg || null,
//       formula: fields.formula || null,
//       label: fields.label || null,
//     });
//   }

//   return views;
// }


// /* ================================================================
//    NESTED SUBFOLDER VIEWS
//    For a parent folder without [view].jsx but with subfolders that each
//    have their own index file, treat each subfolder as a view.
//    ================================================================ */

// function extractSubfolderViews(parentRoute) {
//   const subSlugs = getSubfolderSlugs(parentRoute);
//   if (subSlugs.length === 0) return [];

//   const views = [];
//   for (const slug of subSlugs) {
//     const subRoute = `${parentRoute}/${slug}`;
//     const subIndex = findIndexFile(subRoute);
//     const seo = extractSeoFromFile(subIndex);

//     views.push({
//       title: seo.name || seo.title || slugToTitle(slug),
//       description: seo.hubDescription || seo.description || null,
//       shortDescription: seo.description || null,
//       href: ensureLeadingSlash(subRoute),
//       image: seo.image || null,
//       imageAlt: seo.imageAlt || null,
//       svg: seo.svg || null,
//       formula: seo.formula || null,
//       label: seo.label || null,
//     });
//   }
//   return views;
// }


// /* ================================================================
//    MAIN
//    ================================================================ */

// export async function buildToolIndexData(route) {
//   const childSlugs = getChildSlugs(route);
//   const children = [];

//   for (const slug of childSlugs) {
//     const childRoute = `${route}/${slug}`;
//     const indexFile = findIndexFile(childRoute);
//     const viewFile = findViewFile(childRoute);
//     const seo = extractSeoFromFile(indexFile);

//     const card = {
//       title: seo.name || seo.title || slugToTitle(slug),
//       description: seo.hubDescription || seo.description || null,
//       shortDescription: seo.description || null,
//       href: ensureLeadingSlash(childRoute),
//       image: seo.image || null,
//       imageAlt: seo.imageAlt || null,
//       svg: seo.svg || null,
//       hasViews: false,
//       views: [],
//     };

//     // Priority: [view].jsx > nested subfolders.
//     if (viewFile) {
//       const views = extractViews(viewFile, childRoute);
//       if (views.length > 0) {
//         card.hasViews = true;
//         card.views = views;
//       }
//     } else {
//       const views = extractSubfolderViews(childRoute);
//       if (views.length > 0) {
//         card.hasViews = true;
//         card.views = views;
//       }
//     }

//     children.push(card);
//   }

//   return { children };
// }

// export default buildToolIndexData;


/**
 * buildToolIndexData — v4
 *
 * Walks `pages/<route>/**` recursively and returns a FLAT list of leaves.
 * Grouping is no longer derived from URL hierarchy; it comes from
 * `category` / `subCategory` fields the leaf declares in its seoData.
 *
 * Returns:
 *   { items: [
 *       {
 *         title, description, shortDescription, href,
 *         image, imageAlt, svg, icon, formula,
 *         category, subCategory, cardVariant
 *       }, ...
 *     ]
 *   }
 *
 * Leaf detection:
 *   - A directory with an index file = one leaf.
 *   - A directory with [view].jsx (dynamic route) = N leaves, one per
 *     view declared in getStaticPaths + viewConfig.
 *   - Directories with both an index AND nested-page subdirectories:
 *     the index is one leaf, and the subdirectories are also walked
 *     (so each tool page becomes its own leaf regardless of nesting).
 *   - Directories with NO index file are pure containers — only walked.
 *
 * Field extraction:
 *   - `seoData` block scanned for: title, description, hubDescription,
 *     name, url, image, imageAlt, svg, icon, formula, label, category,
 *     subCategory, cardVariant.
 *   - The same extractor runs against each viewConfig sub-block for
 *     [view].jsx files.
 *   - `description` prefers hubDescription, falls back to seoData.description.
 *   - `shortDescription` is always seoData.description (≤160 chars).
 */

import fs from 'fs';
import path from 'path';


/* ================================================================
   FILESYSTEM
   ================================================================ */

function getPagesDir() {
  return path.join(process.cwd(), 'pages');
}

function hasIndexFile(absDir) {
  return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
    (f) => fs.existsSync(path.join(absDir, f))
  );
}

function findIndexFile(absDir) {
  const candidates = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];
  for (const c of candidates) {
    const full = path.join(absDir, c);
    if (fs.existsSync(full)) return full;
  }
  return null;
}

function findViewFile(absDir) {
  const candidates = ['[view].js', '[view].jsx', '[view].ts', '[view].tsx'];
  for (const c of candidates) {
    const full = path.join(absDir, c);
    if (fs.existsSync(full)) return full;
  }
  return null;
}

function listSubdirs(absDir) {
  if (!fs.existsSync(absDir)) return [];
  return fs.readdirSync(absDir).filter((entry) => {
    if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
    const full = path.join(absDir, entry);
    return fs.statSync(full).isDirectory();
  });
}


/* ================================================================
   TEXT UTILITIES
   ================================================================ */

function stripComments(src) {
  return src.replace(/\/\/.*$/gm, '').replace(/\/\*[\s\S]*?\*\//g, '');
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function cleanTitle(raw) {
  if (!raw) return null;
  const i = raw.indexOf('|');
  return i > 0 ? raw.substring(0, i).trim() : raw.trim();
}

function slugToTitle(slug) {
  return String(slug).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function ensureLeadingSlash(p) {
  if (!p) return p;
  return '/' + String(p).replace(/^\/+/, '');
}


/* ================================================================
   FIELD EXTRACTION (block of code containing seoData / viewConfig)
   ================================================================ */

function extractFields(block) {
  const result = {};

  // title (prefer seoData.title)
  const seoTitle = block.match(
    /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
  );
  if (seoTitle) result.title = cleanTitle(seoTitle[1]);
  if (!result.title) {
    const t = block.match(/(?:^|\W)title\s*:\s*["'`]([^"'`]{5,200})["'`]/);
    if (t) result.title = cleanTitle(t[1]);
  }

  const desc = block.match(/(?:^|\W)description\s*:\s*["'`]([^"'`]{10,500})["'`]/);
  if (desc) result.description = desc[1];

  const hub = block.match(/hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/);
  if (hub) result.hubDescription = hub[1];

  const name = block.match(/(?:^|\W)name\s*:\s*["'`]([^"'`]{3,150})["'`]/);
  if (name) result.name = name[1];

  const url = block.match(/(?:^|\W)url\s*:\s*["'`](\/[^"'`]{1,200})["'`]/);
  if (url) result.url = url[1];

  const img = block.match(/(?:^|\W)image\s*:\s*["'`]([^"'`]{3,300})["'`]/);
  if (img) result.image = img[1];

  const imgAlt = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
  if (imgAlt) result.imageAlt = imgAlt[1];

  const svg = block.match(/(?:^|\W)svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
  if (svg) result.svg = svg[1];

  const icon = block.match(/(?:^|\W)icon\s*:\s*["'`]([^"'`]{1,80})["'`]/);
  if (icon) result.icon = icon[1];

  const formula = block.match(/(?:^|\W)formula\s*:\s*["'`]([^"'`]{1,200})["'`]/);
  if (formula) result.formula = formula[1];

  const label = block.match(/(?:^|\W)label\s*:\s*["'`]([^"'`]{1,80})["'`]/);
  if (label) result.label = label[1];

  // Taxonomy fields (NEW)
  const category = block.match(/(?:^|\W)category\s*:\s*["'`]([^"'`]{1,120})["'`]/);
  if (category) result.category = category[1];

  const subCategory = block.match(/(?:^|\W)subCategory\s*:\s*["'`]([^"'`]{1,120})["'`]/);
  if (subCategory) result.subCategory = subCategory[1];

  const cardVariant = block.match(/(?:^|\W)cardVariant\s*:\s*["'`]([^"'`]{1,20})["'`]/);
  if (cardVariant) result.cardVariant = cardVariant[1];

  return result;
}

function extractFieldsFromFile(filePath) {
  if (!filePath) return {};
  let content;
  try { content = fs.readFileSync(filePath, 'utf-8'); }
  catch (e) { return {}; }
  return extractFields(stripComments(content));
}


/* ================================================================
   LEAF FACTORY — turn raw extracted fields into a normalized leaf
   ================================================================ */

function buildLeaf({ slug, route, fields }) {
  const title = fields.name || fields.title || slugToTitle(slug);
  return {
    title,
    description: fields.hubDescription || fields.description || null,
    shortDescription: fields.description || null,
    href: ensureLeadingSlash(fields.url || route),
    image: fields.image || null,
    imageAlt: fields.imageAlt || null,
    svg: fields.svg || null,
    icon: fields.icon || null,
    formula: fields.formula || null,
    category: fields.category || null,
    subCategory: fields.subCategory || null,
    cardVariant: fields.cardVariant || null,
  };
}


/* ================================================================
   [view].jsx — extract one leaf per declared view
   ================================================================ */

function extractViewLeaves(viewFilePath, parentRoute) {
  let content;
  try { content = fs.readFileSync(viewFilePath, 'utf-8'); }
  catch (e) { return []; }
  content = stripComments(content);

  const slugs = [];
  const pathsRe = /\{\s*params\s*:\s*\{\s*view\s*:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = pathsRe.exec(content)) !== null) {
    if (!slugs.includes(m[1])) slugs.push(m[1]);
  }
  if (slugs.length === 0) return [];

  // Find each slug's viewConfig sub-block boundary.
  const slugStarts = {};
  for (const slug of slugs) {
    const re = new RegExp(`["'\`]${escapeRegex(slug)}["'\`]\\s*:\\s*\\{`);
    const mm = content.match(re);
    slugStarts[slug] = mm ? mm.index + mm[0].length : -1;
  }

  const leaves = [];
  for (const slug of slugs) {
    const start = slugStarts[slug];
    if (start < 0) continue;
    let end = content.length;
    for (const other of slugs) {
      if (other === slug) continue;
      const os = slugStarts[other];
      if (os > start && os < end) end = os;
    }
    const block = content.substring(start, end);
    const fields = extractFields(block);
    leaves.push(buildLeaf({
      slug,
      route: `${parentRoute}/${slug}`,
      fields,
    }));
  }
  return leaves;
}


/* ================================================================
   RECURSIVE WALK
   ================================================================ */

function walk(absDir, route, out) {
  const indexFile = findIndexFile(absDir);
  const viewFile = findViewFile(absDir);
  const subdirs = listSubdirs(absDir);

  // 1. [view].jsx → multiple leaves (one per view)
  if (viewFile) {
    const viewLeaves = extractViewLeaves(viewFile, route);
    out.push(...viewLeaves);
  }

  // 2. plain index → one leaf for this folder.
  //    Only emit when it's a real tool page (no [view].jsx, OR
  //    the folder has both a hub-style index and views — in that case
  //    the views are the actual tools and we skip the hub).
  if (indexFile && !viewFile) {
    const fields = extractFieldsFromFile(indexFile);
    // Accept ALL leaves; component decides if missing fields → standalone.
    const slug = path.basename(absDir);
    out.push(buildLeaf({ slug, route, fields }));
  }

  // 3. recurse into subfolders regardless — flat URLs may still have
  //    nested folders for organizational reasons.
  for (const sub of subdirs) {
    walk(path.join(absDir, sub), `${route}/${sub}`, out);
  }
}


/* ================================================================
   MAIN
   ================================================================ */

export async function buildToolIndexData(route) {
  const root = path.join(getPagesDir(), route);
  if (!fs.existsSync(root)) return { items: [] };

  const items = [];
  // Don't emit the route itself as a leaf (it's the hub page rendering this list).
  for (const sub of listSubdirs(root)) {
    walk(path.join(root, sub), `${route}/${sub}`, items);
  }
  return { items };
}

export default buildToolIndexData;