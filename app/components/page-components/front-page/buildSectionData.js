

// // // // // /**
// // // // //  * buildSectionData
// // // // //  */

// // // // // import fs from 'fs';
// // // // // import path from 'path';


// // // // // /* ================================================================
// // // // //    CONFIGURATION
// // // // //    ================================================================ */

// // // // // const TYPE_MAP = {
// // // // //   'formulas': 'formulas',
// // // // //   'definitions': 'definitions',
// // // // //   'calculators': 'calculators',
// // // // //   'visual-tools': 'visual-tools',
// // // // // };

// // // // // const TYPE_ICONS = {
// // // // //   'formulas': 'formulas',
// // // // //   'definitions': 'definitions',
// // // // //   'calculators': 'calculators',
// // // // //   'visual-tools': 'visual-tools',
// // // // //   'subsection': 'subsection',
// // // // // };

// // // // // function getDataModulePath(parentSlug, type) {
// // // // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // // // //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // // // // }


// // // // // /* ================================================================
// // // // //    FILESYSTEM UTILITIES
// // // // //    ================================================================ */

// // // // // function getPagesDir() {
// // // // //   return path.join(process.cwd(), 'pages');
// // // // // }

// // // // // function getChildSlugs(parentRoute) {
// // // // //   const dir = path.join(getPagesDir(), parentRoute);
// // // // //   if (!fs.existsSync(dir)) return [];

// // // // //   return fs.readdirSync(dir).filter((entry) => {
// // // // //     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
// // // // //     const full = path.join(dir, entry);
// // // // //     const stat = fs.statSync(full);
// // // // //     if (stat.isDirectory()) {
// // // // //       return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
// // // // //         (f) => fs.existsSync(path.join(full, f))
// // // // //       );
// // // // //     }
// // // // //     if (stat.isFile()) {
// // // // //       const ext = path.extname(entry);
// // // // //       const name = path.basename(entry, ext);
// // // // //       if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return false;
// // // // //       if (name === 'index') return false;
// // // // //       return true;
// // // // //     }
// // // // //     return false;
// // // // //   }).map((entry) => {
// // // // //     const full = path.join(dir, entry);
// // // // //     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
// // // // //   });
// // // // // }

// // // // // function findPageFile(route) {
// // // // //   const pagesDir = getPagesDir();
// // // // //   const candidates = [
// // // // //     path.join(pagesDir, route, 'index.js'),
// // // // //     path.join(pagesDir, route, 'index.jsx'),
// // // // //     path.join(pagesDir, route, 'index.ts'),
// // // // //     path.join(pagesDir, route, 'index.tsx'),
// // // // //     path.join(pagesDir, route + '.js'),
// // // // //     path.join(pagesDir, route + '.jsx'),
// // // // //     path.join(pagesDir, route + '.ts'),
// // // // //     path.join(pagesDir, route + '.tsx'),
// // // // //   ];
// // // // //   for (const candidate of candidates) {
// // // // //     if (fs.existsSync(candidate)) return candidate;
// // // // //   }
// // // // //   return null;
// // // // // }


// // // // // /* ================================================================
// // // // //    SEO DATA EXTRACTION
// // // // //    ================================================================ */

// // // // // function cleanTitle(rawTitle) {
// // // // //   if (!rawTitle) return null;
// // // // //   const pipeIndex = rawTitle.indexOf('|');
// // // // //   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// // // // // }

// // // // // function stripComments(source) {
// // // // //   let result = source.replace(/\/\/.*$/gm, '');
// // // // //   result = result.replace(/\/\*[\s\S]*?\*\//g, '');
// // // // //   return result;
// // // // // }

// // // // // function extractSeoData(filePath) {
// // // // //   if (!filePath) return {};

// // // // //   let content;
// // // // //   try {
// // // // //     content = fs.readFileSync(filePath, 'utf-8');
// // // // //   } catch (e) {
// // // // //     return {};
// // // // //   }

// // // // //   content = stripComments(content);
// // // // //   const result = {};

// // // // //   const titleMatch = content.match(
// // // // //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// // // // //   );
// // // // //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// // // // //   if (!result.title) {
// // // // //     const headTitleMatch = content.match(
// // // // //       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
// // // // //     );
// // // // //     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
// // // // //   }

// // // // //   const descMatch = content.match(
// // // // //     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
// // // // //   );
// // // // //   if (descMatch) result.description = descMatch[1];

// // // // //   const hubDescMatch = content.match(
// // // // //     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
// // // // //   );
// // // // //   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

// // // // //   const nameMatch = content.match(
// // // // //     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
// // // // //   );
// // // // //   if (nameMatch) result.name = nameMatch[1];

// // // // //   const urlMatch = content.match(
// // // // //     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
// // // // //   );
// // // // //   if (urlMatch) result.url = urlMatch[1];

// // // // //   const navIconMatch = content.match(
// // // // //     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
// // // // //   );
// // // // //   if (navIconMatch) result.navIcon = navIconMatch[1];

// // // // //   const imageMatch = content.match(
// // // // //     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
// // // // //   );
// // // // //   if (imageMatch) result.image = imageMatch[1];

// // // // //   const imageAltMatch = content.match(
// // // // //     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
// // // // //   );
// // // // //   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

// // // // //   const svgMatch = content.match(
// // // // //     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
// // // // //   );
// // // // //   if (svgMatch) result.svg = svgMatch[1];

// // // // //   // Layout for intro block: 'horizontal' (default) or 'vertical'
// // // // //   const introLayoutMatch = content.match(
// // // // //     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
// // // // //   );
// // // // //   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

// // // // //   // Image position: 'right' (default), 'left', 'top', 'bottom'
// // // // //   const introImagePositionMatch = content.match(
// // // // //     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
// // // // //   );
// // // // //   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

// // // // //   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
// // // // //     result.schemaType = 'WebApplication';
// // // // //   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
// // // // //     result.schemaType = 'LearningResource';
// // // // //   }

// // // // //   return result;
// // // // // }


// // // // // /* ================================================================
// // // // //    SLUG UTILITIES
// // // // //    ================================================================ */

// // // // // function slugToTitle(slug) {
// // // // //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // // // // }

// // // // // function classifySlug(slug) {
// // // // //   return TYPE_MAP[slug] || 'subsection';
// // // // // }

// // // // // function getNavIcon(seo, typeOrSlug) {
// // // // //   if (seo.navIcon) return seo.navIcon;
// // // // //   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// // // // // }

// // // // // function extractVisualProps(seo) {
// // // // //   const props = {};
// // // // //   if (seo.image) props.image = seo.image;
// // // // //   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
// // // // //   if (seo.svg) props.svg = seo.svg;
// // // // //   if (seo.introLayout) props.introLayout = seo.introLayout;
// // // // //   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
// // // // //   return props;
// // // // // }


// // // // // /* ================================================================
// // // // //    TYPE-SPECIFIC PROCESSORS
// // // // //    ================================================================ */

// // // // // async function processFormulas(parentSlug) {
// // // // //   const modulePath = getDataModulePath(parentSlug, 'formulas');
// // // // //   let formulasList;
// // // // //   try {
// // // // //     const mod = await import(modulePath);
// // // // //     formulasList = mod.default;
// // // // //   } catch (e) {
// // // // //     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
// // // // //     return { categories: [], items: [], totalCount: 0 };
// // // // //   }
// // // // //   const categoryMap = {};
// // // // //   const items = [];
// // // // //   formulasList.forEach((item) => {
// // // // //     const catKey = item.category || 'uncategorized';
// // // // //     const catName = item.categoryName || slugToTitle(catKey);
// // // // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // // // //     categoryMap[catKey].count++;
// // // // //     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
// // // // //   });
// // // // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // // // }

// // // // // async function processDefinitions(parentSlug) {
// // // // //   const modulePath = getDataModulePath(parentSlug, 'definitions');
// // // // //   let defsList;
// // // // //   try {
// // // // //     const mod = await import(modulePath);
// // // // //     defsList = mod.default;
// // // // //   } catch (e) {
// // // // //     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
// // // // //     return { categories: [], items: [], totalCount: 0 };
// // // // //   }
// // // // //   const categoryMap = {};
// // // // //   const items = [];
// // // // //   defsList.forEach((item) => {
// // // // //     const catKey = item.category || 'uncategorized';
// // // // //     const catName = item.categoryName || slugToTitle(catKey);
// // // // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // // // //     categoryMap[catKey].count++;
// // // // //     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
// // // // //   });
// // // // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // // // }

// // // // // function processToolSection(parentRoute, slug) {
// // // // //   const toolRoute = `${parentRoute}/${slug}`;
// // // // //   const childSlugs = getChildSlugs(toolRoute);
// // // // //   const children = childSlugs.map((childSlug) => {
// // // // //     const href = `${toolRoute}/${childSlug}`;
// // // // //     const filePath = findPageFile(href);
// // // // //     const seo = extractSeoData(filePath);
// // // // //     return { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // // // //   });
// // // // //   return { children };
// // // // // }

// // // // // function processSubsection(parentRoute, slug) {
// // // // //   const sectionRoute = `${parentRoute}/${slug}`;
// // // // //   const childSlugs = getChildSlugs(sectionRoute);
// // // // //   const children = childSlugs.map((childSlug) => {
// // // // //     const href = `${sectionRoute}/${childSlug}`;
// // // // //     const filePath = findPageFile(href);
// // // // //     const seo = extractSeoData(filePath);
// // // // //     const child = { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // // // //     const grandchildSlugs = getChildSlugs(href);
// // // // //     if (grandchildSlugs.length > 0) {
// // // // //       child.children = grandchildSlugs.map((gcSlug) => {
// // // // //         const gcHref = `${href}/${gcSlug}`;
// // // // //         const gcFile = findPageFile(gcHref);
// // // // //         const gcSeo = extractSeoData(gcFile);
// // // // //         return { title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug), description: gcSeo.description || null, href: gcHref };
// // // // //       });
// // // // //     }
// // // // //     return child;
// // // // //   });
// // // // //   return { children };
// // // // // }


// // // // // /* ================================================================
// // // // //    MAIN ENTRY POINT
// // // // //    ================================================================ */

// // // // // export async function buildSectionData(sectionRoute) {
// // // // //   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
// // // // //   const childSlugs = getChildSlugs(sectionRoute);
// // // // //   const sections = [];
// // // // //   const sectionData = {};

// // // // //   for (const slug of childSlugs) {
// // // // //     const type = classifySlug(slug);
// // // // //     const childRoute = `${sectionRoute}/${slug}`;
// // // // //     const filePath = findPageFile(childRoute);
// // // // //     const seo = extractSeoData(filePath);
// // // // //     const visualProps = extractVisualProps(seo);

// // // // //     if (type === 'formulas') {
// // // // //       const data = await processFormulas(parentSlug);
// // // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // // // //       sectionData[slug] = data;
// // // // //     } else if (type === 'definitions') {
// // // // //       const data = await processDefinitions(parentSlug);
// // // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // // // //       sectionData[slug] = data;
// // // // //     } else if (type === 'calculators') {
// // // // //       const data = processToolSection(sectionRoute, slug);
// // // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // // //       sectionData[slug] = data;
// // // // //     } else if (type === 'visual-tools') {
// // // // //       const data = processToolSection(sectionRoute, slug);
// // // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // // //       sectionData[slug] = data;
// // // // //     } else {
// // // // //       const data = processSubsection(sectionRoute, slug);
// // // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // // //       sectionData[slug] = data;
// // // // //     }
// // // // //   }

// // // // //   return { sections, sectionData };
// // // // // }

// // // // // export default buildSectionData;



// // // // /**
// // // //  * buildSectionData
// // // //  *
// // // //  * Auto-discovers sections from the filesystem and optionally merges
// // // //  * developer-authored custom prose content per section.
// // // //  *
// // // //  * Usage:
// // // //  *   const { sections, sectionData } = await buildSectionData('/algebra', {
// // // //  *     customSections: { ... }
// // // //  *   });
// // // //  *
// // // //  * customSections shape (all fields optional unless noted):
// // // //  * {
// // // //  *   '<sectionId>': {
// // // //  *     mode: 'augment' | 'replace' | 'prose-only',  // REQUIRED
// // // //  *     body: string,                                // REQUIRED — markdown / HTML string
// // // //  *
// // // //  *     // augment only:
// // // //  *     position: 'before' | 'after',                // default: 'before'
// // // //  *
// // // //  *     // prose-only only (synthesizes a NEW section that doesn't exist on disk):
// // // //  *     title: string,
// // // //  *     navIcon: string,                             // e.g. 'subsection', 'formulas'
// // // //  *     link: string,                                // optional "learn more" href
// // // //  *     linkText: string,
// // // //  *     insertAfter: '<sectionId>',                  // place after this auto section
// // // //  *     insertBefore: '<sectionId>',                 // OR before this one
// // // //  *   }
// // // //  * }
// // // //  *
// // // //  * Modes:
// // // //  *   - augment      : auto content + your prose (before or after the grid)
// // // //  *   - replace      : your prose replaces the auto grid; header/footer/nav stay
// // // //  *   - prose-only   : a brand new narrative section, no auto-pulled content
// // // //  *   - (absent)     : default behavior — pure auto-discovery
// // // //  */

// // // // import fs from 'fs';
// // // // import path from 'path';


// // // // /* ================================================================
// // // //    CONFIGURATION
// // // //    ================================================================ */

// // // // const TYPE_MAP = {
// // // //   'formulas': 'formulas',
// // // //   'definitions': 'definitions',
// // // //   'calculators': 'calculators',
// // // //   'visual-tools': 'visual-tools',
// // // // };

// // // // const TYPE_ICONS = {
// // // //   'formulas': 'formulas',
// // // //   'definitions': 'definitions',
// // // //   'calculators': 'calculators',
// // // //   'visual-tools': 'visual-tools',
// // // //   'subsection': 'subsection',
// // // //   'prose-only': 'subsection',
// // // // };

// // // // // TYPE_ORDER moved here from SectionsContainer so prose-only insertion
// // // // // is respected. Component now renders sections in the order received.
// // // // const TYPE_ORDER = {
// // // //   'visual-tools': 0,
// // // //   'formulas': 1,
// // // //   'definitions': 2,
// // // //   'editorial': 3,
// // // //   'standalone': 4,
// // // //   'subsection': 5,
// // // //   'calculators': 6,
// // // // };

// // // // // function getDataModulePath(parentSlug, type) {
// // // // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // // // //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // // // // }
// // // // function getDataModulePath(parentSlug, type) {
// // // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // // //   const camelSlug = parentSlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
// // // //   return `@/app/api/db/${type}/${parentSlug}/${camelSlug}${capitalized}`;
// // // // }

// // // // /* ================================================================
// // // //    FILESYSTEM UTILITIES
// // // //    ================================================================ */

// // // // function getPagesDir() {
// // // //   return path.join(process.cwd(), 'pages');
// // // // }

// // // // function getChildSlugs(parentRoute) {
// // // //   const dir = path.join(getPagesDir(), parentRoute);
// // // //   if (!fs.existsSync(dir)) return [];

// // // //   return fs.readdirSync(dir).filter((entry) => {
// // // //     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
// // // //     const full = path.join(dir, entry);
// // // //     const stat = fs.statSync(full);
// // // //     if (stat.isDirectory()) {
// // // //       return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
// // // //         (f) => fs.existsSync(path.join(full, f))
// // // //       );
// // // //     }
// // // //     if (stat.isFile()) {
// // // //       const ext = path.extname(entry);
// // // //       const name = path.basename(entry, ext);
// // // //       if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return false;
// // // //       if (name === 'index') return false;
// // // //       return true;
// // // //     }
// // // //     return false;
// // // //   }).map((entry) => {
// // // //     const full = path.join(dir, entry);
// // // //     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
// // // //   });
// // // // }

// // // // function findPageFile(route) {
// // // //   const pagesDir = getPagesDir();
// // // //   const candidates = [
// // // //     path.join(pagesDir, route, 'index.js'),
// // // //     path.join(pagesDir, route, 'index.jsx'),
// // // //     path.join(pagesDir, route, 'index.ts'),
// // // //     path.join(pagesDir, route, 'index.tsx'),
// // // //     path.join(pagesDir, route + '.js'),
// // // //     path.join(pagesDir, route + '.jsx'),
// // // //     path.join(pagesDir, route + '.ts'),
// // // //     path.join(pagesDir, route + '.tsx'),
// // // //   ];
// // // //   for (const candidate of candidates) {
// // // //     if (fs.existsSync(candidate)) return candidate;
// // // //   }
// // // //   return null;
// // // // }


// // // // /* ================================================================
// // // //    SEO DATA EXTRACTION
// // // //    ================================================================ */

// // // // function cleanTitle(rawTitle) {
// // // //   if (!rawTitle) return null;
// // // //   const pipeIndex = rawTitle.indexOf('|');
// // // //   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// // // // }

// // // // function stripComments(source) {
// // // //   let result = source.replace(/\/\/.*$/gm, '');
// // // //   result = result.replace(/\/\*[\s\S]*?\*\//g, '');
// // // //   return result;
// // // // }

// // // // function extractSeoData(filePath) {
// // // //   if (!filePath) return {};

// // // //   let content;
// // // //   try {
// // // //     content = fs.readFileSync(filePath, 'utf-8');
// // // //   } catch (e) {
// // // //     return {};
// // // //   }

// // // //   content = stripComments(content);
// // // //   const result = {};

// // // //   const titleMatch = content.match(
// // // //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// // // //   );
// // // //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// // // //   if (!result.title) {
// // // //     const headTitleMatch = content.match(
// // // //       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
// // // //     );
// // // //     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
// // // //   }

// // // //   const descMatch = content.match(
// // // //     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
// // // //   );
// // // //   if (descMatch) result.description = descMatch[1];

// // // //   const hubDescMatch = content.match(
// // // //     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
// // // //   );
// // // //   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

// // // //   const nameMatch = content.match(
// // // //     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
// // // //   );
// // // //   if (nameMatch) result.name = nameMatch[1];

// // // //   const urlMatch = content.match(
// // // //     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
// // // //   );
// // // //   if (urlMatch) result.url = urlMatch[1];

// // // //   const navIconMatch = content.match(
// // // //     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
// // // //   );
// // // //   if (navIconMatch) result.navIcon = navIconMatch[1];

// // // //   const imageMatch = content.match(
// // // //     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
// // // //   );
// // // //   if (imageMatch) result.image = imageMatch[1];

// // // //   const imageAltMatch = content.match(
// // // //     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
// // // //   );
// // // //   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

// // // //   const svgMatch = content.match(
// // // //     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
// // // //   );
// // // //   if (svgMatch) result.svg = svgMatch[1];

// // // //   const introLayoutMatch = content.match(
// // // //     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
// // // //   );
// // // //   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

// // // //   const introImagePositionMatch = content.match(
// // // //     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
// // // //   );
// // // //   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

// // // //   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
// // // //     result.schemaType = 'WebApplication';
// // // //   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
// // // //     result.schemaType = 'LearningResource';
// // // //   }

// // // //   return result;
// // // // }


// // // // /* ================================================================
// // // //    SLUG UTILITIES
// // // //    ================================================================ */

// // // // function slugToTitle(slug) {
// // // //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // // // }

// // // // function classifySlug(slug) {
// // // //   return TYPE_MAP[slug] || 'subsection';
// // // // }

// // // // function getNavIcon(seo, typeOrSlug) {
// // // //   if (seo.navIcon) return seo.navIcon;
// // // //   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// // // // }

// // // // function extractVisualProps(seo) {
// // // //   const props = {};
// // // //   if (seo.image) props.image = seo.image;
// // // //   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
// // // //   if (seo.svg) props.svg = seo.svg;
// // // //   if (seo.introLayout) props.introLayout = seo.introLayout;
// // // //   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
// // // //   return props;
// // // // }


// // // // /* ================================================================
// // // //    TYPE-SPECIFIC PROCESSORS
// // // //    ================================================================ */

// // // // async function processFormulas(parentSlug) {
// // // //   const modulePath = getDataModulePath(parentSlug, 'formulas');
// // // //   let formulasList;
// // // //   try {
// // // //     const mod = await import(modulePath);
// // // //     formulasList = mod.default;
// // // //   } catch (e) {
// // // //     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
// // // //     return { categories: [], items: [], totalCount: 0 };
// // // //   }
// // // //   const categoryMap = {};
// // // //   const items = [];
// // // //   formulasList.forEach((item) => {
// // // //     const catKey = item.category || 'uncategorized';
// // // //     const catName = item.categoryName || slugToTitle(catKey);
// // // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // // //     categoryMap[catKey].count++;
// // // //     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
// // // //   });
// // // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // // }

// // // // async function processDefinitions(parentSlug) {
// // // //   const modulePath = getDataModulePath(parentSlug, 'definitions');
// // // //   let defsList;
// // // //   try {
// // // //     const mod = await import(modulePath);
// // // //     defsList = mod.default;
// // // //   } catch (e) {
// // // //     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
// // // //     return { categories: [], items: [], totalCount: 0 };
// // // //   }
// // // //   const categoryMap = {};
// // // //   const items = [];
// // // //   defsList.forEach((item) => {
// // // //     const catKey = item.category || 'uncategorized';
// // // //     const catName = item.categoryName || slugToTitle(catKey);
// // // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // // //     categoryMap[catKey].count++;
// // // //     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
// // // //   });
// // // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // // }

// // // // function processToolSection(parentRoute, slug) {
// // // //   const toolRoute = `${parentRoute}/${slug}`;
// // // //   const childSlugs = getChildSlugs(toolRoute);
// // // //   const children = childSlugs.map((childSlug) => {
// // // //     const href = `${toolRoute}/${childSlug}`;
// // // //     const filePath = findPageFile(href);
// // // //     const seo = extractSeoData(filePath);
// // // //     return { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // // //   });
// // // //   return { children };
// // // // }

// // // // function processSubsection(parentRoute, slug) {
// // // //   const sectionRoute = `${parentRoute}/${slug}`;
// // // //   const childSlugs = getChildSlugs(sectionRoute);
// // // //   const children = childSlugs.map((childSlug) => {
// // // //     const href = `${sectionRoute}/${childSlug}`;
// // // //     const filePath = findPageFile(href);
// // // //     const seo = extractSeoData(filePath);
// // // //     const child = { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // // //     const grandchildSlugs = getChildSlugs(href);
// // // //     if (grandchildSlugs.length > 0) {
// // // //       child.children = grandchildSlugs.map((gcSlug) => {
// // // //         const gcHref = `${href}/${gcSlug}`;
// // // //         const gcFile = findPageFile(gcHref);
// // // //         const gcSeo = extractSeoData(gcFile);
// // // //         return { title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug), description: gcSeo.description || null, href: gcHref };
// // // //       });
// // // //     }
// // // //     return child;
// // // //   });
// // // //   return { children };
// // // // }


// // // // /* ================================================================
// // // //    CUSTOM SECTIONS MERGE
// // // //    ================================================================ */

// // // // /**
// // // //  * Validates a custom section entry. Returns true if it should be applied,
// // // //  * false otherwise (with a console warning).
// // // //  */
// // // // function validateCustomEntry(id, entry) {
// // // //   if (!entry || typeof entry !== 'object') {
// // // //     console.warn(`buildSectionData: customSections["${id}"] is not an object — skipped.`);
// // // //     return false;
// // // //   }
// // // //   const validModes = ['augment', 'replace', 'prose-only'];
// // // //   if (!validModes.includes(entry.mode)) {
// // // //     console.warn(`buildSectionData: customSections["${id}"].mode must be one of ${validModes.join(', ')} — got "${entry.mode}". Skipped.`);
// // // //     return false;
// // // //   }
// // // //   if (typeof entry.body !== 'string' || entry.body.trim().length === 0) {
// // // //     console.warn(`buildSectionData: customSections["${id}"].body must be a non-empty string — skipped.`);
// // // //     return false;
// // // //   }
// // // //   return true;
// // // // }

// // // // /**
// // // //  * Mutates `sections` in place: attaches custom payload to existing sections
// // // //  * (augment / replace) and splices in new prose-only sections at the right
// // // //  * position. Updates `sectionData` for synthesized sections.
// // // //  */
// // // // function applyCustomSections(sections, sectionData, customSections) {
// // // //   if (!customSections || typeof customSections !== 'object') return;

// // // //   const autoIds = new Set(sections.map((s) => s.id));

// // // //   // Pass 1: augment / replace on existing sections.
// // // //   for (const section of sections) {
// // // //     const entry = customSections[section.id];
// // // //     if (!entry) continue;
// // // //     if (!validateCustomEntry(section.id, entry)) continue;

// // // //     if (entry.mode === 'augment') {
// // // //       section.custom = {
// // // //         mode: 'augment',
// // // //         position: entry.position === 'after' ? 'after' : 'before',
// // // //         body: entry.body,
// // // //       };
// // // //     } else if (entry.mode === 'replace') {
// // // //       section.custom = {
// // // //         mode: 'replace',
// // // //         body: entry.body,
// // // //       };
// // // //     } else if (entry.mode === 'prose-only') {
// // // //       console.warn(
// // // //         `buildSectionData: customSections["${section.id}"] uses mode "prose-only" but a section with that id already exists from auto-discovery. Use mode "replace" instead — skipped.`
// // // //       );
// // // //     }
// // // //   }

// // // //   // Pass 2: synthesize prose-only sections and splice them in.
// // // //   for (const [id, entry] of Object.entries(customSections)) {
// // // //     if (!entry || entry.mode !== 'prose-only') continue;
// // // //     if (autoIds.has(id)) continue; // already warned above
// // // //     if (!validateCustomEntry(id, entry)) continue;

// // // //     const newSection = {
// // // //       id,
// // // //       title: entry.title || slugToTitle(id),
// // // //       type: 'prose-only',
// // // //       navIcon: entry.navIcon || TYPE_ICONS['prose-only'],
// // // //       link: entry.link || null,
// // // //       linkText: entry.linkText || null,
// // // //       custom: {
// // // //         mode: 'prose-only',
// // // //         body: entry.body,
// // // //       },
// // // //     };

// // // //     let insertIndex = sections.length;
// // // //     if (entry.insertAfter) {
// // // //       const idx = sections.findIndex((s) => s.id === entry.insertAfter);
// // // //       if (idx >= 0) insertIndex = idx + 1;
// // // //       else console.warn(`buildSectionData: insertAfter target "${entry.insertAfter}" not found for prose-only section "${id}". Appending at end.`);
// // // //     } else if (entry.insertBefore) {
// // // //       const idx = sections.findIndex((s) => s.id === entry.insertBefore);
// // // //       if (idx >= 0) insertIndex = idx;
// // // //       else console.warn(`buildSectionData: insertBefore target "${entry.insertBefore}" not found for prose-only section "${id}". Appending at end.`);
// // // //     }
// // // //     sections.splice(insertIndex, 0, newSection);
// // // //     sectionData[id] = {}; // empty data slot for parity with other sections
// // // //   }
// // // // }


// // // // /* ================================================================
// // // //    MAIN ENTRY POINT
// // // //    ================================================================ */

// // // // export async function buildSectionData(sectionRoute, options = {}) {
// // // //   const { customSections = {} } = options;

// // // //   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
// // // //   const childSlugs = getChildSlugs(sectionRoute);
// // // //   const sections = [];
// // // //   const sectionData = {};

// // // //   for (const slug of childSlugs) {
// // // //     const type = classifySlug(slug);
// // // //     const childRoute = `${sectionRoute}/${slug}`;
// // // //     const filePath = findPageFile(childRoute);
// // // //     const seo = extractSeoData(filePath);
// // // //     const visualProps = extractVisualProps(seo);

// // // //     if (type === 'formulas') {
// // // //       const data = await processFormulas(parentSlug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else if (type === 'definitions') {
// // // //       const data = await processDefinitions(parentSlug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else if (type === 'calculators') {
// // // //       const data = processToolSection(sectionRoute, slug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else if (type === 'visual-tools') {
// // // //       const data = processToolSection(sectionRoute, slug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else {
// // // //       const data = processSubsection(sectionRoute, slug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     }
// // // //   }

// // // //   // Sort by type order BEFORE merging custom sections, so prose-only
// // // //   // insertAfter / insertBefore positions reference the final auto order.
// // // //   sections.sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5));

// // // //   // Merge developer-authored custom sections (no-op if customSections is empty).
// // // //   applyCustomSections(sections, sectionData, customSections);

// // // //   return { sections, sectionData };
// // // // }

// // // // export default buildSectionData;




// // // // /**
// // // //  * buildSectionData
// // // //  */

// // // // import fs from 'fs';
// // // // import path from 'path';


// // // // /* ================================================================
// // // //    CONFIGURATION
// // // //    ================================================================ */

// // // // const TYPE_MAP = {
// // // //   'formulas': 'formulas',
// // // //   'definitions': 'definitions',
// // // //   'calculators': 'calculators',
// // // //   'visual-tools': 'visual-tools',
// // // // };

// // // // const TYPE_ICONS = {
// // // //   'formulas': 'formulas',
// // // //   'definitions': 'definitions',
// // // //   'calculators': 'calculators',
// // // //   'visual-tools': 'visual-tools',
// // // //   'subsection': 'subsection',
// // // // };

// // // // function getDataModulePath(parentSlug, type) {
// // // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // // //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // // // }


// // // // /* ================================================================
// // // //    FILESYSTEM UTILITIES
// // // //    ================================================================ */

// // // // function getPagesDir() {
// // // //   return path.join(process.cwd(), 'pages');
// // // // }

// // // // function getChildSlugs(parentRoute) {
// // // //   const dir = path.join(getPagesDir(), parentRoute);
// // // //   if (!fs.existsSync(dir)) return [];

// // // //   return fs.readdirSync(dir).filter((entry) => {
// // // //     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
// // // //     const full = path.join(dir, entry);
// // // //     const stat = fs.statSync(full);
// // // //     if (stat.isDirectory()) {
// // // //       return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
// // // //         (f) => fs.existsSync(path.join(full, f))
// // // //       );
// // // //     }
// // // //     if (stat.isFile()) {
// // // //       const ext = path.extname(entry);
// // // //       const name = path.basename(entry, ext);
// // // //       if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return false;
// // // //       if (name === 'index') return false;
// // // //       return true;
// // // //     }
// // // //     return false;
// // // //   }).map((entry) => {
// // // //     const full = path.join(dir, entry);
// // // //     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
// // // //   });
// // // // }

// // // // function findPageFile(route) {
// // // //   const pagesDir = getPagesDir();
// // // //   const candidates = [
// // // //     path.join(pagesDir, route, 'index.js'),
// // // //     path.join(pagesDir, route, 'index.jsx'),
// // // //     path.join(pagesDir, route, 'index.ts'),
// // // //     path.join(pagesDir, route, 'index.tsx'),
// // // //     path.join(pagesDir, route + '.js'),
// // // //     path.join(pagesDir, route + '.jsx'),
// // // //     path.join(pagesDir, route + '.ts'),
// // // //     path.join(pagesDir, route + '.tsx'),
// // // //   ];
// // // //   for (const candidate of candidates) {
// // // //     if (fs.existsSync(candidate)) return candidate;
// // // //   }
// // // //   return null;
// // // // }


// // // // /* ================================================================
// // // //    SEO DATA EXTRACTION
// // // //    ================================================================ */

// // // // function cleanTitle(rawTitle) {
// // // //   if (!rawTitle) return null;
// // // //   const pipeIndex = rawTitle.indexOf('|');
// // // //   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// // // // }

// // // // function stripComments(source) {
// // // //   let result = source.replace(/\/\/.*$/gm, '');
// // // //   result = result.replace(/\/\*[\s\S]*?\*\//g, '');
// // // //   return result;
// // // // }

// // // // function extractSeoData(filePath) {
// // // //   if (!filePath) return {};

// // // //   let content;
// // // //   try {
// // // //     content = fs.readFileSync(filePath, 'utf-8');
// // // //   } catch (e) {
// // // //     return {};
// // // //   }

// // // //   content = stripComments(content);
// // // //   const result = {};

// // // //   const titleMatch = content.match(
// // // //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// // // //   );
// // // //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// // // //   if (!result.title) {
// // // //     const headTitleMatch = content.match(
// // // //       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
// // // //     );
// // // //     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
// // // //   }

// // // //   const descMatch = content.match(
// // // //     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
// // // //   );
// // // //   if (descMatch) result.description = descMatch[1];

// // // //   const hubDescMatch = content.match(
// // // //     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
// // // //   );
// // // //   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

// // // //   const nameMatch = content.match(
// // // //     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
// // // //   );
// // // //   if (nameMatch) result.name = nameMatch[1];

// // // //   const urlMatch = content.match(
// // // //     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
// // // //   );
// // // //   if (urlMatch) result.url = urlMatch[1];

// // // //   const navIconMatch = content.match(
// // // //     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
// // // //   );
// // // //   if (navIconMatch) result.navIcon = navIconMatch[1];

// // // //   const imageMatch = content.match(
// // // //     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
// // // //   );
// // // //   if (imageMatch) result.image = imageMatch[1];

// // // //   const imageAltMatch = content.match(
// // // //     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
// // // //   );
// // // //   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

// // // //   const svgMatch = content.match(
// // // //     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
// // // //   );
// // // //   if (svgMatch) result.svg = svgMatch[1];

// // // //   // Layout for intro block: 'horizontal' (default) or 'vertical'
// // // //   const introLayoutMatch = content.match(
// // // //     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
// // // //   );
// // // //   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

// // // //   // Image position: 'right' (default), 'left', 'top', 'bottom'
// // // //   const introImagePositionMatch = content.match(
// // // //     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
// // // //   );
// // // //   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

// // // //   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
// // // //     result.schemaType = 'WebApplication';
// // // //   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
// // // //     result.schemaType = 'LearningResource';
// // // //   }

// // // //   return result;
// // // // }


// // // // /* ================================================================
// // // //    SLUG UTILITIES
// // // //    ================================================================ */

// // // // function slugToTitle(slug) {
// // // //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // // // }

// // // // function classifySlug(slug) {
// // // //   return TYPE_MAP[slug] || 'subsection';
// // // // }

// // // // function getNavIcon(seo, typeOrSlug) {
// // // //   if (seo.navIcon) return seo.navIcon;
// // // //   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// // // // }

// // // // function extractVisualProps(seo) {
// // // //   const props = {};
// // // //   if (seo.image) props.image = seo.image;
// // // //   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
// // // //   if (seo.svg) props.svg = seo.svg;
// // // //   if (seo.introLayout) props.introLayout = seo.introLayout;
// // // //   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
// // // //   return props;
// // // // }


// // // // /* ================================================================
// // // //    TYPE-SPECIFIC PROCESSORS
// // // //    ================================================================ */

// // // // async function processFormulas(parentSlug) {
// // // //   const modulePath = getDataModulePath(parentSlug, 'formulas');
// // // //   let formulasList;
// // // //   try {
// // // //     const mod = await import(modulePath);
// // // //     formulasList = mod.default;
// // // //   } catch (e) {
// // // //     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
// // // //     return { categories: [], items: [], totalCount: 0 };
// // // //   }
// // // //   const categoryMap = {};
// // // //   const items = [];
// // // //   formulasList.forEach((item) => {
// // // //     const catKey = item.category || 'uncategorized';
// // // //     const catName = item.categoryName || slugToTitle(catKey);
// // // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // // //     categoryMap[catKey].count++;
// // // //     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
// // // //   });
// // // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // // }

// // // // async function processDefinitions(parentSlug) {
// // // //   const modulePath = getDataModulePath(parentSlug, 'definitions');
// // // //   let defsList;
// // // //   try {
// // // //     const mod = await import(modulePath);
// // // //     defsList = mod.default;
// // // //   } catch (e) {
// // // //     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
// // // //     return { categories: [], items: [], totalCount: 0 };
// // // //   }
// // // //   const categoryMap = {};
// // // //   const items = [];
// // // //   defsList.forEach((item) => {
// // // //     const catKey = item.category || 'uncategorized';
// // // //     const catName = item.categoryName || slugToTitle(catKey);
// // // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // // //     categoryMap[catKey].count++;
// // // //     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
// // // //   });
// // // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // // }

// // // // function processToolSection(parentRoute, slug) {
// // // //   const toolRoute = `${parentRoute}/${slug}`;
// // // //   const childSlugs = getChildSlugs(toolRoute);
// // // //   const children = childSlugs.map((childSlug) => {
// // // //     const href = `${toolRoute}/${childSlug}`;
// // // //     const filePath = findPageFile(href);
// // // //     const seo = extractSeoData(filePath);
// // // //     return { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // // //   });
// // // //   return { children };
// // // // }

// // // // function processSubsection(parentRoute, slug) {
// // // //   const sectionRoute = `${parentRoute}/${slug}`;
// // // //   const childSlugs = getChildSlugs(sectionRoute);
// // // //   const children = childSlugs.map((childSlug) => {
// // // //     const href = `${sectionRoute}/${childSlug}`;
// // // //     const filePath = findPageFile(href);
// // // //     const seo = extractSeoData(filePath);
// // // //     const child = { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // // //     const grandchildSlugs = getChildSlugs(href);
// // // //     if (grandchildSlugs.length > 0) {
// // // //       child.children = grandchildSlugs.map((gcSlug) => {
// // // //         const gcHref = `${href}/${gcSlug}`;
// // // //         const gcFile = findPageFile(gcHref);
// // // //         const gcSeo = extractSeoData(gcFile);
// // // //         return { title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug), description: gcSeo.description || null, href: gcHref };
// // // //       });
// // // //     }
// // // //     return child;
// // // //   });
// // // //   return { children };
// // // // }


// // // // /* ================================================================
// // // //    MAIN ENTRY POINT
// // // //    ================================================================ */

// // // // export async function buildSectionData(sectionRoute) {
// // // //   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
// // // //   const childSlugs = getChildSlugs(sectionRoute);
// // // //   const sections = [];
// // // //   const sectionData = {};

// // // //   for (const slug of childSlugs) {
// // // //     const type = classifySlug(slug);
// // // //     const childRoute = `${sectionRoute}/${slug}`;
// // // //     const filePath = findPageFile(childRoute);
// // // //     const seo = extractSeoData(filePath);
// // // //     const visualProps = extractVisualProps(seo);

// // // //     if (type === 'formulas') {
// // // //       const data = await processFormulas(parentSlug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else if (type === 'definitions') {
// // // //       const data = await processDefinitions(parentSlug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else if (type === 'calculators') {
// // // //       const data = processToolSection(sectionRoute, slug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else if (type === 'visual-tools') {
// // // //       const data = processToolSection(sectionRoute, slug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     } else {
// // // //       const data = processSubsection(sectionRoute, slug);
// // // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // // //       sectionData[slug] = data;
// // // //     }
// // // //   }

// // // //   return { sections, sectionData };
// // // // }

// // // // export default buildSectionData;



// // // /**
// // //  * buildSectionData
// // //  *
// // //  * Auto-discovers sections from the filesystem and optionally merges
// // //  * developer-authored custom prose content per section.
// // //  *
// // //  * Usage:
// // //  *   const { sections, sectionData } = await buildSectionData('/algebra', {
// // //  *     customSections: { ... }
// // //  *   });
// // //  *
// // //  * customSections shape (all fields optional unless noted):
// // //  * {
// // //  *   '<sectionId>': {
// // //  *     mode: 'augment' | 'replace' | 'prose-only',  // REQUIRED
// // //  *     body: string,                                // REQUIRED — markdown / HTML string
// // //  *
// // //  *     // augment only:
// // //  *     position: 'before' | 'after',                // default: 'before'
// // //  *
// // //  *     // prose-only only (synthesizes a NEW section that doesn't exist on disk):
// // //  *     title: string,
// // //  *     navIcon: string,                             // e.g. 'subsection', 'formulas'
// // //  *     link: string,                                // optional "learn more" href
// // //  *     linkText: string,
// // //  *     insertAfter: '<sectionId>',                  // place after this auto section
// // //  *     insertBefore: '<sectionId>',                 // OR before this one
// // //  *   }
// // //  * }
// // //  *
// // //  * Modes:
// // //  *   - augment      : auto content + your prose (before or after the grid)
// // //  *   - replace      : your prose replaces the auto grid; header/footer/nav stay
// // //  *   - prose-only   : a brand new narrative section, no auto-pulled content
// // //  *   - (absent)     : default behavior — pure auto-discovery
// // //  */

// // // import fs from 'fs';
// // // import path from 'path';


// // // /* ================================================================
// // //    CONFIGURATION
// // //    ================================================================ */

// // // const TYPE_MAP = {
// // //   'formulas': 'formulas',
// // //   'definitions': 'definitions',
// // //   'calculators': 'calculators',
// // //   'visual-tools': 'visual-tools',
// // // };

// // // const TYPE_ICONS = {
// // //   'formulas': 'formulas',
// // //   'definitions': 'definitions',
// // //   'calculators': 'calculators',
// // //   'visual-tools': 'visual-tools',
// // //   'subsection': 'subsection',
// // //   'prose-only': 'subsection',
// // // };

// // // // TYPE_ORDER moved here from SectionsContainer so prose-only insertion
// // // // is respected. Component now renders sections in the order received.
// // // const TYPE_ORDER = {
// // //   'visual-tools': 0,
// // //   'formulas': 1,
// // //   'definitions': 2,
// // //   'editorial': 3,
// // //   'standalone': 4,
// // //   'subsection': 5,
// // //   'calculators': 6,
// // // };

// // // // function getDataModulePath(parentSlug, type) {
// // // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // // //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // // // }
// // // function getDataModulePath(parentSlug, type) {
// // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // //   const camelSlug = parentSlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
// // //   return `@/app/api/db/${type}/${parentSlug}/${camelSlug}${capitalized}`;
// // // }

// // // /* ================================================================
// // //    FILESYSTEM UTILITIES
// // //    ================================================================ */

// // // function getPagesDir() {
// // //   return path.join(process.cwd(), 'pages');
// // // }

// // // const INDEX_FILES = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];
// // // const PAGE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
// // // const DYNAMIC_ROUTE_RE = /^\[.+\]\.(js|jsx|ts|tsx)$/;

// // // function getChildSlugs(parentRoute) {
// // //   const dir = path.join(getPagesDir(), parentRoute);
// // //   if (!fs.existsSync(dir)) return [];

// // //   return fs.readdirSync(dir).filter((entry) => {
// // //     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
// // //     const full = path.join(dir, entry);
// // //     const stat = fs.statSync(full);
// // //     if (stat.isDirectory()) {
// // //       // Accept a directory if it has a static index page (the usual hub
// // //       // case) OR if it contains a Next.js dynamic route file like
// // //       // [view].jsx — the directory is reachable via that route and
// // //       // should appear as a section even without a static index. Without
// // //       // this, hubs implemented purely as `[view].jsx` (e.g. equations,
// // //       // inequalities, sequences under /algebra/calculators) are skipped
// // //       // entirely and never reach the cards grid.
// // //       const inside = fs.readdirSync(full);
// // //       const hasIndex = inside.some(f => INDEX_FILES.includes(f));
// // //       const hasDynamicRoute = inside.some(f => DYNAMIC_ROUTE_RE.test(f));
// // //       return hasIndex || hasDynamicRoute;
// // //     }
// // //     if (stat.isFile()) {
// // //       const ext = path.extname(entry);
// // //       const name = path.basename(entry, ext);
// // //       if (!PAGE_EXTENSIONS.includes(ext)) return false;
// // //       if (name === 'index') return false;
// // //       return true;
// // //     }
// // //     return false;
// // //   }).map((entry) => {
// // //     const full = path.join(dir, entry);
// // //     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
// // //   });
// // // }

// // // function findPageFile(route) {
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
// // //   for (const candidate of candidates) {
// // //     if (fs.existsSync(candidate)) return candidate;
// // //   }
// // //   return null;
// // // }


// // // /* ================================================================
// // //    SEO DATA EXTRACTION
// // //    ================================================================ */

// // // function cleanTitle(rawTitle) {
// // //   if (!rawTitle) return null;
// // //   const pipeIndex = rawTitle.indexOf('|');
// // //   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// // // }

// // // /**
// // //  * Strip JS line and block comments without touching string or template
// // //  * literal contents.
// // //  *
// // //  * The naive `\/\/.*$` strip mangles URL-like substrings inside string
// // //  * literals — for example `xmlns="http://www.w3.org/2000/svg"`. After
// // //  * the strip, everything from `http:` onward on that line disappears,
// // //  * leaving a truncated `<svg>` opening tag with no closing `>` and an
// // //  * unterminated `xmlns` attribute. Downstream that SVG renders without
// // //  * its inline `<style>` block (the unterminated attribute consumes it),
// // //  * which collapses every styled `<rect>` to the browser default fill
// // //  * (solid black) — visible as black-rect placeholder shapes on the hub
// // //  * cards.
// // //  *
// // //  * We protect strings by substituting each literal with a sentinel
// // //  * placeholder, stripping comments in the sanitized text, then
// // //  * restoring the literals.
// // //  */
// // // function stripComments(source) {
// // //   const literals = [];
// // //   // Use control characters as delimiters so they can never clash with
// // //   // legitimate source code contents.
// // //   const OPEN = '\x00LMC_LIT_';
// // //   const CLOSE = '\x00';

// // //   let safe = source.replace(
// // //     /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g,
// // //     (match) => {
// // //       const idx = literals.length;
// // //       literals.push(match);
// // //       return `${OPEN}${idx}${CLOSE}`;
// // //     }
// // //   );

// // //   safe = safe.replace(/\/\/.*$/gm, '');
// // //   safe = safe.replace(/\/\*[\s\S]*?\*\//g, '');

// // //   safe = safe.replace(/\x00LMC_LIT_(\d+)\x00/g, (_, idx) => literals[parseInt(idx, 10)]);

// // //   return safe;
// // // }

// // // function extractSeoData(filePath) {
// // //   if (!filePath) return {};

// // //   let content;
// // //   try {
// // //     content = fs.readFileSync(filePath, 'utf-8');
// // //   } catch (e) {
// // //     return {};
// // //   }

// // //   content = stripComments(content);
// // //   const result = {};

// // //   const titleMatch = content.match(
// // //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// // //   );
// // //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// // //   if (!result.title) {
// // //     const headTitleMatch = content.match(
// // //       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
// // //     );
// // //     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
// // //   }

// // //   const descMatch = content.match(
// // //     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
// // //   );
// // //   if (descMatch) result.description = descMatch[1];

// // //   const hubDescMatch = content.match(
// // //     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
// // //   );
// // //   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

// // //   const nameMatch = content.match(
// // //     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
// // //   );
// // //   if (nameMatch) result.name = nameMatch[1];

// // //   const urlMatch = content.match(
// // //     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
// // //   );
// // //   if (urlMatch) result.url = urlMatch[1];

// // //   const navIconMatch = content.match(
// // //     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
// // //   );
// // //   if (navIconMatch) result.navIcon = navIconMatch[1];

// // //   const imageMatch = content.match(
// // //     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
// // //   );
// // //   if (imageMatch) result.image = imageMatch[1];

// // //   const imageAltMatch = content.match(
// // //     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
// // //   );
// // //   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

// // //   const svgMatch = content.match(
// // //     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
// // //   );
// // //   if (svgMatch) result.svg = svgMatch[1];

// // //   const introLayoutMatch = content.match(
// // //     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
// // //   );
// // //   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

// // //   const introImagePositionMatch = content.match(
// // //     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
// // //   );
// // //   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

// // //   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
// // //     result.schemaType = 'WebApplication';
// // //   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
// // //     result.schemaType = 'LearningResource';
// // //   }

// // //   return result;
// // // }


// // // /* ================================================================
// // //    SLUG UTILITIES
// // //    ================================================================ */

// // // function slugToTitle(slug) {
// // //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // // }

// // // function classifySlug(slug) {
// // //   return TYPE_MAP[slug] || 'subsection';
// // // }

// // // function getNavIcon(seo, typeOrSlug) {
// // //   if (seo.navIcon) return seo.navIcon;
// // //   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// // // }

// // // function extractVisualProps(seo) {
// // //   const props = {};
// // //   if (seo.image) props.image = seo.image;
// // //   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
// // //   if (seo.svg) props.svg = seo.svg;
// // //   if (seo.introLayout) props.introLayout = seo.introLayout;
// // //   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
// // //   return props;
// // // }


// // // /* ================================================================
// // //    TYPE-SPECIFIC PROCESSORS
// // //    ================================================================ */

// // // async function processFormulas(parentSlug) {
// // //   const modulePath = getDataModulePath(parentSlug, 'formulas');
// // //   let formulasList;
// // //   try {
// // //     const mod = await import(modulePath);
// // //     formulasList = mod.default;
// // //   } catch (e) {
// // //     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
// // //     return { categories: [], items: [], totalCount: 0 };
// // //   }
// // //   const categoryMap = {};
// // //   const items = [];
// // //   formulasList.forEach((item) => {
// // //     const catKey = item.category || 'uncategorized';
// // //     const catName = item.categoryName || slugToTitle(catKey);
// // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // //     categoryMap[catKey].count++;
// // //     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
// // //   });
// // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // }

// // // async function processDefinitions(parentSlug) {
// // //   const modulePath = getDataModulePath(parentSlug, 'definitions');
// // //   let defsList;
// // //   try {
// // //     const mod = await import(modulePath);
// // //     defsList = mod.default;
// // //   } catch (e) {
// // //     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
// // //     return { categories: [], items: [], totalCount: 0 };
// // //   }
// // //   const categoryMap = {};
// // //   const items = [];
// // //   defsList.forEach((item) => {
// // //     const catKey = item.category || 'uncategorized';
// // //     const catName = item.categoryName || slugToTitle(catKey);
// // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // //     categoryMap[catKey].count++;
// // //     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
// // //   });
// // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // }

// // // function processToolSection(parentRoute, slug) {
// // //   const toolRoute = `${parentRoute}/${slug}`;
// // //   const childSlugs = getChildSlugs(toolRoute);
// // //   const children = childSlugs.map((childSlug) => {
// // //     const href = `${toolRoute}/${childSlug}`;
// // //     const filePath = findPageFile(href);
// // //     const seo = extractSeoData(filePath);
// // //     // Prefer hubDescription for hub-card display; fall back to the
// // //     // 150-160 char meta description.
// // //     return {
// // //       title: seo.name || seo.title || slugToTitle(childSlug),
// // //       description: seo.hubDescription || seo.description || null,
// // //       href,
// // //       image: seo.image || null,
// // //       imageAlt: seo.imageAlt || null,
// // //       svg: seo.svg || null,
// // //     };
// // //   });
// // //   return { children };
// // // }

// // // function processSubsection(parentRoute, slug) {
// // //   const sectionRoute = `${parentRoute}/${slug}`;
// // //   const childSlugs = getChildSlugs(sectionRoute);
// // //   const children = childSlugs.map((childSlug) => {
// // //     const href = `${sectionRoute}/${childSlug}`;
// // //     const filePath = findPageFile(href);
// // //     const seo = extractSeoData(filePath);
// // //     const child = {
// // //       title: seo.name || seo.title || slugToTitle(childSlug),
// // //       description: seo.hubDescription || seo.description || null,
// // //       href,
// // //       image: seo.image || null,
// // //       imageAlt: seo.imageAlt || null,
// // //       svg: seo.svg || null,
// // //     };
// // //     const grandchildSlugs = getChildSlugs(href);
// // //     if (grandchildSlugs.length > 0) {
// // //       child.children = grandchildSlugs.map((gcSlug) => {
// // //         const gcHref = `${href}/${gcSlug}`;
// // //         const gcFile = findPageFile(gcHref);
// // //         const gcSeo = extractSeoData(gcFile);
// // //         return {
// // //           title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug),
// // //           description: gcSeo.hubDescription || gcSeo.description || null,
// // //           href: gcHref,
// // //         };
// // //       });
// // //     }
// // //     return child;
// // //   });
// // //   return { children };
// // // }


// // // /* ================================================================
// // //    CUSTOM SECTIONS MERGE
// // //    ================================================================ */

// // // /**
// // //  * Validates a custom section entry. Returns true if it should be applied,
// // //  * false otherwise (with a console warning).
// // //  */
// // // function validateCustomEntry(id, entry) {
// // //   if (!entry || typeof entry !== 'object') {
// // //     console.warn(`buildSectionData: customSections["${id}"] is not an object — skipped.`);
// // //     return false;
// // //   }
// // //   const validModes = ['augment', 'replace', 'prose-only'];
// // //   if (!validModes.includes(entry.mode)) {
// // //     console.warn(`buildSectionData: customSections["${id}"].mode must be one of ${validModes.join(', ')} — got "${entry.mode}". Skipped.`);
// // //     return false;
// // //   }
// // //   if (typeof entry.body !== 'string' || entry.body.trim().length === 0) {
// // //     console.warn(`buildSectionData: customSections["${id}"].body must be a non-empty string — skipped.`);
// // //     return false;
// // //   }
// // //   return true;
// // // }

// // // /**
// // //  * Mutates `sections` in place: attaches custom payload to existing sections
// // //  * (augment / replace) and splices in new prose-only sections at the right
// // //  * position. Updates `sectionData` for synthesized sections.
// // //  */
// // // function applyCustomSections(sections, sectionData, customSections) {
// // //   if (!customSections || typeof customSections !== 'object') return;

// // //   const autoIds = new Set(sections.map((s) => s.id));

// // //   // Pass 1: augment / replace on existing sections.
// // //   for (const section of sections) {
// // //     const entry = customSections[section.id];
// // //     if (!entry) continue;
// // //     if (!validateCustomEntry(section.id, entry)) continue;

// // //     if (entry.mode === 'augment') {
// // //       section.custom = {
// // //         mode: 'augment',
// // //         position: entry.position === 'after' ? 'after' : 'before',
// // //         body: entry.body,
// // //       };
// // //     } else if (entry.mode === 'replace') {
// // //       section.custom = {
// // //         mode: 'replace',
// // //         body: entry.body,
// // //       };
// // //     } else if (entry.mode === 'prose-only') {
// // //       console.warn(
// // //         `buildSectionData: customSections["${section.id}"] uses mode "prose-only" but a section with that id already exists from auto-discovery. Use mode "replace" instead — skipped.`
// // //       );
// // //     }
// // //   }

// // //   // Pass 2: synthesize prose-only sections and splice them in.
// // //   for (const [id, entry] of Object.entries(customSections)) {
// // //     if (!entry || entry.mode !== 'prose-only') continue;
// // //     if (autoIds.has(id)) continue; // already warned above
// // //     if (!validateCustomEntry(id, entry)) continue;

// // //     const newSection = {
// // //       id,
// // //       title: entry.title || slugToTitle(id),
// // //       type: 'prose-only',
// // //       navIcon: entry.navIcon || TYPE_ICONS['prose-only'],
// // //       link: entry.link || null,
// // //       linkText: entry.linkText || null,
// // //       custom: {
// // //         mode: 'prose-only',
// // //         body: entry.body,
// // //       },
// // //     };

// // //     let insertIndex = sections.length;
// // //     if (entry.insertAfter) {
// // //       const idx = sections.findIndex((s) => s.id === entry.insertAfter);
// // //       if (idx >= 0) insertIndex = idx + 1;
// // //       else console.warn(`buildSectionData: insertAfter target "${entry.insertAfter}" not found for prose-only section "${id}". Appending at end.`);
// // //     } else if (entry.insertBefore) {
// // //       const idx = sections.findIndex((s) => s.id === entry.insertBefore);
// // //       if (idx >= 0) insertIndex = idx;
// // //       else console.warn(`buildSectionData: insertBefore target "${entry.insertBefore}" not found for prose-only section "${id}". Appending at end.`);
// // //     }
// // //     sections.splice(insertIndex, 0, newSection);
// // //     sectionData[id] = {}; // empty data slot for parity with other sections
// // //   }
// // // }


// // // /* ================================================================
// // //    MAIN ENTRY POINT
// // //    ================================================================ */

// // // export async function buildSectionData(sectionRoute, options = {}) {
// // //   const { customSections = {} } = options;

// // //   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
// // //   const childSlugs = getChildSlugs(sectionRoute);
// // //   const sections = [];
// // //   const sectionData = {};

// // //   for (const slug of childSlugs) {
// // //     const type = classifySlug(slug);
// // //     const childRoute = `${sectionRoute}/${slug}`;
// // //     const filePath = findPageFile(childRoute);
// // //     const seo = extractSeoData(filePath);
// // //     const visualProps = extractVisualProps(seo);

// // //     if (type === 'formulas') {
// // //       const data = await processFormulas(parentSlug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else if (type === 'definitions') {
// // //       const data = await processDefinitions(parentSlug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else if (type === 'calculators') {
// // //       const data = processToolSection(sectionRoute, slug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else if (type === 'visual-tools') {
// // //       const data = processToolSection(sectionRoute, slug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else {
// // //       const data = processSubsection(sectionRoute, slug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     }
// // //   }

// // //   // Sort by type order BEFORE merging custom sections, so prose-only
// // //   // insertAfter / insertBefore positions reference the final auto order.
// // //   sections.sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5));

// // //   // Merge developer-authored custom sections (no-op if customSections is empty).
// // //   applyCustomSections(sections, sectionData, customSections);

// // //   return { sections, sectionData };
// // // }

// // // export default buildSectionData;


// // // /**
// // //  * buildSectionData
// // //  */

// // // import fs from 'fs';
// // // import path from 'path';


// // // /* ================================================================
// // //    CONFIGURATION
// // //    ================================================================ */

// // // const TYPE_MAP = {
// // //   'formulas': 'formulas',
// // //   'definitions': 'definitions',
// // //   'calculators': 'calculators',
// // //   'visual-tools': 'visual-tools',
// // // };

// // // const TYPE_ICONS = {
// // //   'formulas': 'formulas',
// // //   'definitions': 'definitions',
// // //   'calculators': 'calculators',
// // //   'visual-tools': 'visual-tools',
// // //   'subsection': 'subsection',
// // // };

// // // function getDataModulePath(parentSlug, type) {
// // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // // }


// // // /* ================================================================
// // //    FILESYSTEM UTILITIES
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

// // // function findPageFile(route) {
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
// // //   for (const candidate of candidates) {
// // //     if (fs.existsSync(candidate)) return candidate;
// // //   }
// // //   return null;
// // // }


// // // /* ================================================================
// // //    SEO DATA EXTRACTION
// // //    ================================================================ */

// // // function cleanTitle(rawTitle) {
// // //   if (!rawTitle) return null;
// // //   const pipeIndex = rawTitle.indexOf('|');
// // //   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// // // }

// // // function stripComments(source) {
// // //   let result = source.replace(/\/\/.*$/gm, '');
// // //   result = result.replace(/\/\*[\s\S]*?\*\//g, '');
// // //   return result;
// // // }

// // // function extractSeoData(filePath) {
// // //   if (!filePath) return {};

// // //   let content;
// // //   try {
// // //     content = fs.readFileSync(filePath, 'utf-8');
// // //   } catch (e) {
// // //     return {};
// // //   }

// // //   content = stripComments(content);
// // //   const result = {};

// // //   const titleMatch = content.match(
// // //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// // //   );
// // //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// // //   if (!result.title) {
// // //     const headTitleMatch = content.match(
// // //       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
// // //     );
// // //     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
// // //   }

// // //   const descMatch = content.match(
// // //     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
// // //   );
// // //   if (descMatch) result.description = descMatch[1];

// // //   const hubDescMatch = content.match(
// // //     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
// // //   );
// // //   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

// // //   const nameMatch = content.match(
// // //     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
// // //   );
// // //   if (nameMatch) result.name = nameMatch[1];

// // //   const urlMatch = content.match(
// // //     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
// // //   );
// // //   if (urlMatch) result.url = urlMatch[1];

// // //   const navIconMatch = content.match(
// // //     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
// // //   );
// // //   if (navIconMatch) result.navIcon = navIconMatch[1];

// // //   const imageMatch = content.match(
// // //     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
// // //   );
// // //   if (imageMatch) result.image = imageMatch[1];

// // //   const imageAltMatch = content.match(
// // //     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
// // //   );
// // //   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

// // //   const svgMatch = content.match(
// // //     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
// // //   );
// // //   if (svgMatch) result.svg = svgMatch[1];

// // //   // Layout for intro block: 'horizontal' (default) or 'vertical'
// // //   const introLayoutMatch = content.match(
// // //     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
// // //   );
// // //   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

// // //   // Image position: 'right' (default), 'left', 'top', 'bottom'
// // //   const introImagePositionMatch = content.match(
// // //     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
// // //   );
// // //   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

// // //   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
// // //     result.schemaType = 'WebApplication';
// // //   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
// // //     result.schemaType = 'LearningResource';
// // //   }

// // //   return result;
// // // }


// // // /* ================================================================
// // //    SLUG UTILITIES
// // //    ================================================================ */

// // // function slugToTitle(slug) {
// // //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // // }

// // // function classifySlug(slug) {
// // //   return TYPE_MAP[slug] || 'subsection';
// // // }

// // // function getNavIcon(seo, typeOrSlug) {
// // //   if (seo.navIcon) return seo.navIcon;
// // //   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// // // }

// // // function extractVisualProps(seo) {
// // //   const props = {};
// // //   if (seo.image) props.image = seo.image;
// // //   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
// // //   if (seo.svg) props.svg = seo.svg;
// // //   if (seo.introLayout) props.introLayout = seo.introLayout;
// // //   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
// // //   return props;
// // // }


// // // /* ================================================================
// // //    TYPE-SPECIFIC PROCESSORS
// // //    ================================================================ */

// // // async function processFormulas(parentSlug) {
// // //   const modulePath = getDataModulePath(parentSlug, 'formulas');
// // //   let formulasList;
// // //   try {
// // //     const mod = await import(modulePath);
// // //     formulasList = mod.default;
// // //   } catch (e) {
// // //     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
// // //     return { categories: [], items: [], totalCount: 0 };
// // //   }
// // //   const categoryMap = {};
// // //   const items = [];
// // //   formulasList.forEach((item) => {
// // //     const catKey = item.category || 'uncategorized';
// // //     const catName = item.categoryName || slugToTitle(catKey);
// // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // //     categoryMap[catKey].count++;
// // //     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
// // //   });
// // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // }

// // // async function processDefinitions(parentSlug) {
// // //   const modulePath = getDataModulePath(parentSlug, 'definitions');
// // //   let defsList;
// // //   try {
// // //     const mod = await import(modulePath);
// // //     defsList = mod.default;
// // //   } catch (e) {
// // //     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
// // //     return { categories: [], items: [], totalCount: 0 };
// // //   }
// // //   const categoryMap = {};
// // //   const items = [];
// // //   defsList.forEach((item) => {
// // //     const catKey = item.category || 'uncategorized';
// // //     const catName = item.categoryName || slugToTitle(catKey);
// // //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// // //     categoryMap[catKey].count++;
// // //     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
// // //   });
// // //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // // }

// // // function processToolSection(parentRoute, slug) {
// // //   const toolRoute = `${parentRoute}/${slug}`;
// // //   const childSlugs = getChildSlugs(toolRoute);
// // //   const children = childSlugs.map((childSlug) => {
// // //     const href = `${toolRoute}/${childSlug}`;
// // //     const filePath = findPageFile(href);
// // //     const seo = extractSeoData(filePath);
// // //     return { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // //   });
// // //   return { children };
// // // }

// // // function processSubsection(parentRoute, slug) {
// // //   const sectionRoute = `${parentRoute}/${slug}`;
// // //   const childSlugs = getChildSlugs(sectionRoute);
// // //   const children = childSlugs.map((childSlug) => {
// // //     const href = `${sectionRoute}/${childSlug}`;
// // //     const filePath = findPageFile(href);
// // //     const seo = extractSeoData(filePath);
// // //     const child = { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// // //     const grandchildSlugs = getChildSlugs(href);
// // //     if (grandchildSlugs.length > 0) {
// // //       child.children = grandchildSlugs.map((gcSlug) => {
// // //         const gcHref = `${href}/${gcSlug}`;
// // //         const gcFile = findPageFile(gcHref);
// // //         const gcSeo = extractSeoData(gcFile);
// // //         return { title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug), description: gcSeo.description || null, href: gcHref };
// // //       });
// // //     }
// // //     return child;
// // //   });
// // //   return { children };
// // // }


// // // /* ================================================================
// // //    MAIN ENTRY POINT
// // //    ================================================================ */

// // // export async function buildSectionData(sectionRoute) {
// // //   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
// // //   const childSlugs = getChildSlugs(sectionRoute);
// // //   const sections = [];
// // //   const sectionData = {};

// // //   for (const slug of childSlugs) {
// // //     const type = classifySlug(slug);
// // //     const childRoute = `${sectionRoute}/${slug}`;
// // //     const filePath = findPageFile(childRoute);
// // //     const seo = extractSeoData(filePath);
// // //     const visualProps = extractVisualProps(seo);

// // //     if (type === 'formulas') {
// // //       const data = await processFormulas(parentSlug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else if (type === 'definitions') {
// // //       const data = await processDefinitions(parentSlug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else if (type === 'calculators') {
// // //       const data = processToolSection(sectionRoute, slug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else if (type === 'visual-tools') {
// // //       const data = processToolSection(sectionRoute, slug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     } else {
// // //       const data = processSubsection(sectionRoute, slug);
// // //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
// // //       sectionData[slug] = data;
// // //     }
// // //   }

// // //   return { sections, sectionData };
// // // }

// // // export default buildSectionData;



// // /**
// //  * buildSectionData
// //  *
// //  * Auto-discovers sections from the filesystem and optionally merges
// //  * developer-authored custom prose content per section.
// //  *
// //  * Usage:
// //  *   const { sections, sectionData } = await buildSectionData('/algebra', {
// //  *     customSections: { ... }
// //  *   });
// //  *
// //  * customSections shape (all fields optional unless noted):
// //  * {
// //  *   '<sectionId>': {
// //  *     mode: 'augment' | 'replace' | 'prose-only',  // REQUIRED
// //  *     body: string,                                // REQUIRED — markdown / HTML string
// //  *
// //  *     // augment only:
// //  *     position: 'before' | 'after',                // default: 'before'
// //  *
// //  *     // prose-only only (synthesizes a NEW section that doesn't exist on disk):
// //  *     title: string,
// //  *     navIcon: string,                             // e.g. 'subsection', 'formulas'
// //  *     link: string,                                // optional "learn more" href
// //  *     linkText: string,
// //  *     insertAfter: '<sectionId>',                  // place after this auto section
// //  *     insertBefore: '<sectionId>',                 // OR before this one
// //  *   }
// //  * }
// //  *
// //  * Modes:
// //  *   - augment      : auto content + your prose (before or after the grid)
// //  *   - replace      : your prose replaces the auto grid; header/footer/nav stay
// //  *   - prose-only   : a brand new narrative section, no auto-pulled content
// //  *   - (absent)     : default behavior — pure auto-discovery
// //  *
// //  * Flattened-URL directories:
// //  *   Some hub directories don't have an index.jsx and contain only a
// //  *   dynamic route file like [view].jsx. Their directory route doesn't
// //  *   resolve to a page on its own. For such directories, cards link to
// //  *   the first dynamic-route view instead of the bare directory route,
// //  *   so the hub card stays clickable without forcing the developer to
// //  *   author an intermediate landing page.
// //  */

// // import fs from 'fs';
// // import path from 'path';


// // /* ================================================================
// //    CONFIGURATION
// //    ================================================================ */

// // const TYPE_MAP = {
// //   'formulas': 'formulas',
// //   'definitions': 'definitions',
// //   'calculators': 'calculators',
// //   'visual-tools': 'visual-tools',
// // };

// // const TYPE_ICONS = {
// //   'formulas': 'formulas',
// //   'definitions': 'definitions',
// //   'calculators': 'calculators',
// //   'visual-tools': 'visual-tools',
// //   'subsection': 'subsection',
// //   'prose-only': 'subsection',
// // };

// // // TYPE_ORDER moved here from SectionsContainer so prose-only insertion
// // // is respected. Component now renders sections in the order received.
// // const TYPE_ORDER = {
// //   'visual-tools': 0,
// //   'formulas': 1,
// //   'definitions': 2,
// //   'editorial': 3,
// //   'standalone': 4,
// //   'subsection': 5,
// //   'calculators': 6,
// // };

// // // function getDataModulePath(parentSlug, type) {
// // //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// // //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // // }
// // function getDataModulePath(parentSlug, type) {
// //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// //   const camelSlug = parentSlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
// //   return `@/app/api/db/${type}/${parentSlug}/${camelSlug}${capitalized}`;
// // }

// // /* ================================================================
// //    FILESYSTEM UTILITIES
// //    ================================================================ */

// // function getPagesDir() {
// //   return path.join(process.cwd(), 'pages');
// // }

// // const INDEX_FILES = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];
// // const PAGE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
// // const DYNAMIC_ROUTE_RE = /^\[.+\]\.(js|jsx|ts|tsx)$/;

// // function getChildSlugs(parentRoute) {
// //   const dir = path.join(getPagesDir(), parentRoute);
// //   if (!fs.existsSync(dir)) return [];

// //   return fs.readdirSync(dir).filter((entry) => {
// //     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
// //     const full = path.join(dir, entry);
// //     const stat = fs.statSync(full);
// //     if (stat.isDirectory()) {
// //       // Accept a directory if it has a static index page (the usual hub
// //       // case) OR if it contains a Next.js dynamic route file like
// //       // [view].jsx — the directory is reachable via that route and
// //       // should appear as a section even without a static index. Without
// //       // this, hubs implemented purely as `[view].jsx` (e.g. equations,
// //       // inequalities, sequences under /algebra/calculators) are skipped
// //       // entirely and never reach the cards grid.
// //       const inside = fs.readdirSync(full);
// //       const hasIndex = inside.some(f => INDEX_FILES.includes(f));
// //       const hasDynamicRoute = inside.some(f => DYNAMIC_ROUTE_RE.test(f));
// //       return hasIndex || hasDynamicRoute;
// //     }
// //     if (stat.isFile()) {
// //       const ext = path.extname(entry);
// //       const name = path.basename(entry, ext);
// //       if (!PAGE_EXTENSIONS.includes(ext)) return false;
// //       if (name === 'index') return false;
// //       return true;
// //     }
// //     return false;
// //   }).map((entry) => {
// //     const full = path.join(dir, entry);
// //     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
// //   });
// // }

// // function findPageFile(route) {
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
// //   for (const candidate of candidates) {
// //     if (fs.existsSync(candidate)) return candidate;
// //   }
// //   return null;
// // }

// // /**
// //  * For directories that follow the "flattened URL" pattern — only a
// //  * dynamic route file (e.g. [view].jsx) and no index.jsx — find the
// //  * first view slug so cards can link to a valid URL instead of the
// //  * directory itself (which would 404).
// //  *
// //  * Looks at the dynamic route file's source for, in order:
// //  *   1. `viewConfig = { 'first-key': ...`  — the project's existing
// //  *      convention. Most reliable; this is where view-specific SEO is
// //  *      authored.
// //  *   2. `params: { <anyName>: 'first-value' }` — generic Next.js
// //  *      getStaticPaths return shape. Fallback for files that don't
// //  *      use a viewConfig literal.
// //  *
// //  * Returns the first view slug or null if none could be found.
// //  */
// // function findFirstDynamicView(directoryPath) {
// //   if (!fs.existsSync(directoryPath)) return null;

// //   let entries;
// //   try {
// //     entries = fs.readdirSync(directoryPath);
// //   } catch (e) {
// //     return null;
// //   }
// //   const dynamicFile = entries.find(f => DYNAMIC_ROUTE_RE.test(f));
// //   if (!dynamicFile) return null;

// //   let content;
// //   try {
// //     content = fs.readFileSync(path.join(directoryPath, dynamicFile), 'utf-8');
// //   } catch (e) {
// //     return null;
// //   }
// //   content = stripComments(content);

// //   const viewConfigMatch = content.match(
// //     /viewConfig\s*=\s*\{\s*['"`]([^'"`]+)['"`]\s*:/
// //   );
// //   if (viewConfigMatch) return viewConfigMatch[1];

// //   const paramsMatch = content.match(
// //     /params:\s*\{\s*\w+\s*:\s*['"`]([^'"`]+)['"`]/
// //   );
// //   if (paramsMatch) return paramsMatch[1];

// //   return null;
// // }

// // /**
// //  * Resolve the href for a child directory card.
// //  *
// //  *   - If the directory has a static index page, link straight to it.
// //  *   - Else, if it has a dynamic route file, link to the first view.
// //  *   - Else, return the bare directory route (caller's last resort).
// //  *
// //  * `directoryRoute` is the URL path (e.g. /algebra/calculators/equations);
// //  * `directoryFsPath` is the absolute filesystem path of the same dir.
// //  */
// // function resolveChildHref(directoryRoute, directoryFsPath, hasStaticIndex) {
// //   if (hasStaticIndex) return directoryRoute;
// //   const firstView = findFirstDynamicView(directoryFsPath);
// //   if (firstView) return `${directoryRoute}/${firstView}`;
// //   return directoryRoute;
// // }


// // /* ================================================================
// //    SEO DATA EXTRACTION
// //    ================================================================ */

// // function cleanTitle(rawTitle) {
// //   if (!rawTitle) return null;
// //   const pipeIndex = rawTitle.indexOf('|');
// //   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// // }

// // /**
// //  * Strip JS line and block comments without touching string or template
// //  * literal contents.
// //  *
// //  * The naive `\/\/.*$` strip mangles URL-like substrings inside string
// //  * literals — for example `xmlns="http://www.w3.org/2000/svg"`. After
// //  * the strip, everything from `http:` onward on that line disappears,
// //  * leaving a truncated `<svg>` opening tag with no closing `>` and an
// //  * unterminated `xmlns` attribute. Downstream that SVG renders without
// //  * its inline `<style>` block (the unterminated attribute consumes it),
// //  * which collapses every styled `<rect>` to the browser default fill
// //  * (solid black) — visible as black-rect placeholder shapes on the hub
// //  * cards.
// //  *
// //  * We protect strings by substituting each literal with a sentinel
// //  * placeholder, stripping comments in the sanitized text, then
// //  * restoring the literals.
// //  */
// // function stripComments(source) {
// //   const literals = [];
// //   // Use control characters as delimiters so they can never clash with
// //   // legitimate source code contents.
// //   const OPEN = '\x00LMC_LIT_';
// //   const CLOSE = '\x00';

// //   let safe = source.replace(
// //     /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g,
// //     (match) => {
// //       const idx = literals.length;
// //       literals.push(match);
// //       return `${OPEN}${idx}${CLOSE}`;
// //     }
// //   );

// //   safe = safe.replace(/\/\/.*$/gm, '');
// //   safe = safe.replace(/\/\*[\s\S]*?\*\//g, '');

// //   safe = safe.replace(/\x00LMC_LIT_(\d+)\x00/g, (_, idx) => literals[parseInt(idx, 10)]);

// //   return safe;
// // }

// // function extractSeoData(filePath) {
// //   if (!filePath) return {};

// //   let content;
// //   try {
// //     content = fs.readFileSync(filePath, 'utf-8');
// //   } catch (e) {
// //     return {};
// //   }

// //   content = stripComments(content);
// //   const result = {};

// //   const titleMatch = content.match(
// //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// //   );
// //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// //   if (!result.title) {
// //     const headTitleMatch = content.match(
// //       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
// //     );
// //     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
// //   }

// //   const descMatch = content.match(
// //     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
// //   );
// //   if (descMatch) result.description = descMatch[1];

// //   const hubDescMatch = content.match(
// //     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
// //   );
// //   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

// //   const nameMatch = content.match(
// //     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
// //   );
// //   if (nameMatch) result.name = nameMatch[1];

// //   const urlMatch = content.match(
// //     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
// //   );
// //   if (urlMatch) result.url = urlMatch[1];

// //   const navIconMatch = content.match(
// //     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
// //   );
// //   if (navIconMatch) result.navIcon = navIconMatch[1];

// //   const imageMatch = content.match(
// //     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
// //   );
// //   if (imageMatch) result.image = imageMatch[1];

// //   const imageAltMatch = content.match(
// //     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
// //   );
// //   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

// //   const svgMatch = content.match(
// //     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
// //   );
// //   if (svgMatch) result.svg = svgMatch[1];

// //   const introLayoutMatch = content.match(
// //     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
// //   );
// //   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

// //   const introImagePositionMatch = content.match(
// //     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
// //   );
// //   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

// //   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
// //     result.schemaType = 'WebApplication';
// //   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
// //     result.schemaType = 'LearningResource';
// //   }

// //   return result;
// // }


// // /* ================================================================
// //    SLUG UTILITIES
// //    ================================================================ */

// // function slugToTitle(slug) {
// //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // }

// // function classifySlug(slug) {
// //   return TYPE_MAP[slug] || 'subsection';
// // }

// // function getNavIcon(seo, typeOrSlug) {
// //   if (seo.navIcon) return seo.navIcon;
// //   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// // }

// // function extractVisualProps(seo) {
// //   const props = {};
// //   if (seo.image) props.image = seo.image;
// //   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
// //   if (seo.svg) props.svg = seo.svg;
// //   if (seo.introLayout) props.introLayout = seo.introLayout;
// //   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
// //   return props;
// // }


// // /* ================================================================
// //    TYPE-SPECIFIC PROCESSORS
// //    ================================================================ */

// // async function processFormulas(parentSlug) {
// //   const modulePath = getDataModulePath(parentSlug, 'formulas');
// //   let formulasList;
// //   try {
// //     const mod = await import(modulePath);
// //     formulasList = mod.default;
// //   } catch (e) {
// //     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
// //     return { categories: [], items: [], totalCount: 0 };
// //   }
// //   const categoryMap = {};
// //   const items = [];
// //   formulasList.forEach((item) => {
// //     const catKey = item.category || 'uncategorized';
// //     const catName = item.categoryName || slugToTitle(catKey);
// //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// //     categoryMap[catKey].count++;
// //     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
// //   });
// //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // }

// // async function processDefinitions(parentSlug) {
// //   const modulePath = getDataModulePath(parentSlug, 'definitions');
// //   let defsList;
// //   try {
// //     const mod = await import(modulePath);
// //     defsList = mod.default;
// //   } catch (e) {
// //     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
// //     return { categories: [], items: [], totalCount: 0 };
// //   }
// //   const categoryMap = {};
// //   const items = [];
// //   defsList.forEach((item) => {
// //     const catKey = item.category || 'uncategorized';
// //     const catName = item.categoryName || slugToTitle(catKey);
// //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// //     categoryMap[catKey].count++;
// //     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
// //   });
// //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // }

// // function processToolSection(parentRoute, slug) {
// //   const toolRoute = `${parentRoute}/${slug}`;
// //   const childSlugs = getChildSlugs(toolRoute);
// //   const children = childSlugs.map((childSlug) => {
// //     const href = `${toolRoute}/${childSlug}`;
// //     const filePath = findPageFile(href);
// //     const seo = extractSeoData(filePath);
// //     const effectiveHref = resolveChildHref(
// //       href,
// //       path.join(getPagesDir(), toolRoute, childSlug),
// //       !!filePath
// //     );
// //     return {
// //       title: seo.name || seo.title || slugToTitle(childSlug),
// //       description: seo.hubDescription || seo.description || null,
// //       href: effectiveHref,
// //       image: seo.image || null,
// //       imageAlt: seo.imageAlt || null,
// //       svg: seo.svg || null,
// //     };
// //   });
// //   return { children };
// // }

// // function processSubsection(parentRoute, slug) {
// //   const sectionRoute = `${parentRoute}/${slug}`;
// //   const childSlugs = getChildSlugs(sectionRoute);
// //   const children = childSlugs.map((childSlug) => {
// //     const href = `${sectionRoute}/${childSlug}`;
// //     const filePath = findPageFile(href);
// //     const seo = extractSeoData(filePath);
// //     const effectiveHref = resolveChildHref(
// //       href,
// //       path.join(getPagesDir(), sectionRoute, childSlug),
// //       !!filePath
// //     );
// //     const child = {
// //       title: seo.name || seo.title || slugToTitle(childSlug),
// //       description: seo.hubDescription || seo.description || null,
// //       href: effectiveHref,
// //       image: seo.image || null,
// //       imageAlt: seo.imageAlt || null,
// //       svg: seo.svg || null,
// //     };
// //     const grandchildSlugs = getChildSlugs(href);
// //     if (grandchildSlugs.length > 0) {
// //       child.children = grandchildSlugs.map((gcSlug) => {
// //         const gcHref = `${href}/${gcSlug}`;
// //         const gcFile = findPageFile(gcHref);
// //         const gcSeo = extractSeoData(gcFile);
// //         const gcEffectiveHref = resolveChildHref(
// //           gcHref,
// //           path.join(getPagesDir(), sectionRoute, childSlug, gcSlug),
// //           !!gcFile
// //         );
// //         return {
// //           title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug),
// //           description: gcSeo.hubDescription || gcSeo.description || null,
// //           href: gcEffectiveHref,
// //         };
// //       });
// //     }
// //     return child;
// //   });
// //   return { children };
// // }


// // /* ================================================================
// //    CUSTOM SECTIONS MERGE
// //    ================================================================ */

// // /**
// //  * Validates a custom section entry. Returns true if it should be applied,
// //  * false otherwise (with a console warning).
// //  */
// // function validateCustomEntry(id, entry) {
// //   if (!entry || typeof entry !== 'object') {
// //     console.warn(`buildSectionData: customSections["${id}"] is not an object — skipped.`);
// //     return false;
// //   }
// //   const validModes = ['augment', 'replace', 'prose-only'];
// //   if (!validModes.includes(entry.mode)) {
// //     console.warn(`buildSectionData: customSections["${id}"].mode must be one of ${validModes.join(', ')} — got "${entry.mode}". Skipped.`);
// //     return false;
// //   }
// //   if (typeof entry.body !== 'string' || entry.body.trim().length === 0) {
// //     console.warn(`buildSectionData: customSections["${id}"].body must be a non-empty string — skipped.`);
// //     return false;
// //   }
// //   return true;
// // }

// // /**
// //  * Mutates `sections` in place: attaches custom payload to existing sections
// //  * (augment / replace) and splices in new prose-only sections at the right
// //  * position. Updates `sectionData` for synthesized sections.
// //  */
// // function applyCustomSections(sections, sectionData, customSections) {
// //   if (!customSections || typeof customSections !== 'object') return;

// //   const autoIds = new Set(sections.map((s) => s.id));

// //   // Pass 1: augment / replace on existing sections.
// //   for (const section of sections) {
// //     const entry = customSections[section.id];
// //     if (!entry) continue;
// //     if (!validateCustomEntry(section.id, entry)) continue;

// //     if (entry.mode === 'augment') {
// //       section.custom = {
// //         mode: 'augment',
// //         position: entry.position === 'after' ? 'after' : 'before',
// //         body: entry.body,
// //       };
// //     } else if (entry.mode === 'replace') {
// //       section.custom = {
// //         mode: 'replace',
// //         body: entry.body,
// //       };
// //     } else if (entry.mode === 'prose-only') {
// //       console.warn(
// //         `buildSectionData: customSections["${section.id}"] uses mode "prose-only" but a section with that id already exists from auto-discovery. Use mode "replace" instead — skipped.`
// //       );
// //     }
// //   }

// //   // Pass 2: synthesize prose-only sections and splice them in.
// //   for (const [id, entry] of Object.entries(customSections)) {
// //     if (!entry || entry.mode !== 'prose-only') continue;
// //     if (autoIds.has(id)) continue; // already warned above
// //     if (!validateCustomEntry(id, entry)) continue;

// //     const newSection = {
// //       id,
// //       title: entry.title || slugToTitle(id),
// //       type: 'prose-only',
// //       navIcon: entry.navIcon || TYPE_ICONS['prose-only'],
// //       link: entry.link || null,
// //       linkText: entry.linkText || null,
// //       custom: {
// //         mode: 'prose-only',
// //         body: entry.body,
// //       },
// //     };

// //     let insertIndex = sections.length;
// //     if (entry.insertAfter) {
// //       const idx = sections.findIndex((s) => s.id === entry.insertAfter);
// //       if (idx >= 0) insertIndex = idx + 1;
// //       else console.warn(`buildSectionData: insertAfter target "${entry.insertAfter}" not found for prose-only section "${id}". Appending at end.`);
// //     } else if (entry.insertBefore) {
// //       const idx = sections.findIndex((s) => s.id === entry.insertBefore);
// //       if (idx >= 0) insertIndex = idx;
// //       else console.warn(`buildSectionData: insertBefore target "${entry.insertBefore}" not found for prose-only section "${id}". Appending at end.`);
// //     }
// //     sections.splice(insertIndex, 0, newSection);
// //     sectionData[id] = {}; // empty data slot for parity with other sections
// //   }
// // }


// // /* ================================================================
// //    MAIN ENTRY POINT
// //    ================================================================ */

// // export async function buildSectionData(sectionRoute, options = {}) {
// //   const { customSections = {} } = options;

// //   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
// //   const childSlugs = getChildSlugs(sectionRoute);
// //   const sections = [];
// //   const sectionData = {};

// //   for (const slug of childSlugs) {
// //     const type = classifySlug(slug);
// //     const childRoute = `${sectionRoute}/${slug}`;
// //     const filePath = findPageFile(childRoute);
// //     const seo = extractSeoData(filePath);
// //     const visualProps = extractVisualProps(seo);
// //     // Section-level link should also fall back to the first view when
// //     // the section directory is flattened (no index, only [view].jsx).
// //     const sectionLink = resolveChildHref(
// //       childRoute,
// //       path.join(getPagesDir(), childRoute),
// //       !!filePath
// //     );

// //     if (type === 'formulas') {
// //       const data = await processFormulas(parentSlug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: sectionLink, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else if (type === 'definitions') {
// //       const data = await processDefinitions(parentSlug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: sectionLink, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else if (type === 'calculators') {
// //       const data = processToolSection(sectionRoute, slug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: sectionLink, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else if (type === 'visual-tools') {
// //       const data = processToolSection(sectionRoute, slug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: sectionLink, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else {
// //       const data = processSubsection(sectionRoute, slug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: sectionLink, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     }
// //   }

// //   // Sort by type order BEFORE merging custom sections, so prose-only
// //   // insertAfter / insertBefore positions reference the final auto order.
// //   sections.sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5));

// //   // Merge developer-authored custom sections (no-op if customSections is empty).
// //   applyCustomSections(sections, sectionData, customSections);

// //   return { sections, sectionData };
// // }

// // export default buildSectionData;


// // /**
// //  * buildSectionData
// //  */

// // import fs from 'fs';
// // import path from 'path';


// // /* ================================================================
// //    CONFIGURATION
// //    ================================================================ */

// // const TYPE_MAP = {
// //   'formulas': 'formulas',
// //   'definitions': 'definitions',
// //   'calculators': 'calculators',
// //   'visual-tools': 'visual-tools',
// // };

// // const TYPE_ICONS = {
// //   'formulas': 'formulas',
// //   'definitions': 'definitions',
// //   'calculators': 'calculators',
// //   'visual-tools': 'visual-tools',
// //   'subsection': 'subsection',
// // };

// // function getDataModulePath(parentSlug, type) {
// //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // }


// // /* ================================================================
// //    FILESYSTEM UTILITIES
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

// // function findPageFile(route) {
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
// //   for (const candidate of candidates) {
// //     if (fs.existsSync(candidate)) return candidate;
// //   }
// //   return null;
// // }


// // /* ================================================================
// //    SEO DATA EXTRACTION
// //    ================================================================ */

// // function cleanTitle(rawTitle) {
// //   if (!rawTitle) return null;
// //   const pipeIndex = rawTitle.indexOf('|');
// //   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// // }

// // function stripComments(source) {
// //   let result = source.replace(/\/\/.*$/gm, '');
// //   result = result.replace(/\/\*[\s\S]*?\*\//g, '');
// //   return result;
// // }

// // function extractSeoData(filePath) {
// //   if (!filePath) return {};

// //   let content;
// //   try {
// //     content = fs.readFileSync(filePath, 'utf-8');
// //   } catch (e) {
// //     return {};
// //   }

// //   content = stripComments(content);
// //   const result = {};

// //   const titleMatch = content.match(
// //     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
// //   );
// //   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

// //   if (!result.title) {
// //     const headTitleMatch = content.match(
// //       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
// //     );
// //     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
// //   }

// //   const descMatch = content.match(
// //     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
// //   );
// //   if (descMatch) result.description = descMatch[1];

// //   const hubDescMatch = content.match(
// //     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
// //   );
// //   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

// //   const nameMatch = content.match(
// //     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
// //   );
// //   if (nameMatch) result.name = nameMatch[1];

// //   const urlMatch = content.match(
// //     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
// //   );
// //   if (urlMatch) result.url = urlMatch[1];

// //   const navIconMatch = content.match(
// //     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
// //   );
// //   if (navIconMatch) result.navIcon = navIconMatch[1];

// //   const imageMatch = content.match(
// //     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
// //   );
// //   if (imageMatch) result.image = imageMatch[1];

// //   const imageAltMatch = content.match(
// //     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
// //   );
// //   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

// //   const svgMatch = content.match(
// //     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
// //   );
// //   if (svgMatch) result.svg = svgMatch[1];

// //   // Layout for intro block: 'horizontal' (default) or 'vertical'
// //   const introLayoutMatch = content.match(
// //     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
// //   );
// //   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

// //   // Image position: 'right' (default), 'left', 'top', 'bottom'
// //   const introImagePositionMatch = content.match(
// //     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
// //   );
// //   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

// //   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
// //     result.schemaType = 'WebApplication';
// //   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
// //     result.schemaType = 'LearningResource';
// //   }

// //   return result;
// // }


// // /* ================================================================
// //    SLUG UTILITIES
// //    ================================================================ */

// // function slugToTitle(slug) {
// //   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// // }

// // function classifySlug(slug) {
// //   return TYPE_MAP[slug] || 'subsection';
// // }

// // function getNavIcon(seo, typeOrSlug) {
// //   if (seo.navIcon) return seo.navIcon;
// //   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// // }

// // function extractVisualProps(seo) {
// //   const props = {};
// //   if (seo.image) props.image = seo.image;
// //   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
// //   if (seo.svg) props.svg = seo.svg;
// //   if (seo.introLayout) props.introLayout = seo.introLayout;
// //   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
// //   return props;
// // }


// // /* ================================================================
// //    TYPE-SPECIFIC PROCESSORS
// //    ================================================================ */

// // async function processFormulas(parentSlug) {
// //   const modulePath = getDataModulePath(parentSlug, 'formulas');
// //   let formulasList;
// //   try {
// //     const mod = await import(modulePath);
// //     formulasList = mod.default;
// //   } catch (e) {
// //     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
// //     return { categories: [], items: [], totalCount: 0 };
// //   }
// //   const categoryMap = {};
// //   const items = [];
// //   formulasList.forEach((item) => {
// //     const catKey = item.category || 'uncategorized';
// //     const catName = item.categoryName || slugToTitle(catKey);
// //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// //     categoryMap[catKey].count++;
// //     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
// //   });
// //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // }

// // async function processDefinitions(parentSlug) {
// //   const modulePath = getDataModulePath(parentSlug, 'definitions');
// //   let defsList;
// //   try {
// //     const mod = await import(modulePath);
// //     defsList = mod.default;
// //   } catch (e) {
// //     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
// //     return { categories: [], items: [], totalCount: 0 };
// //   }
// //   const categoryMap = {};
// //   const items = [];
// //   defsList.forEach((item) => {
// //     const catKey = item.category || 'uncategorized';
// //     const catName = item.categoryName || slugToTitle(catKey);
// //     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
// //     categoryMap[catKey].count++;
// //     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
// //   });
// //   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// // }

// // function processToolSection(parentRoute, slug) {
// //   const toolRoute = `${parentRoute}/${slug}`;
// //   const childSlugs = getChildSlugs(toolRoute);
// //   const children = childSlugs.map((childSlug) => {
// //     const href = `${toolRoute}/${childSlug}`;
// //     const filePath = findPageFile(href);
// //     const seo = extractSeoData(filePath);
// //     return { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// //   });
// //   return { children };
// // }

// // function processSubsection(parentRoute, slug) {
// //   const sectionRoute = `${parentRoute}/${slug}`;
// //   const childSlugs = getChildSlugs(sectionRoute);
// //   const children = childSlugs.map((childSlug) => {
// //     const href = `${sectionRoute}/${childSlug}`;
// //     const filePath = findPageFile(href);
// //     const seo = extractSeoData(filePath);
// //     const child = { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
// //     const grandchildSlugs = getChildSlugs(href);
// //     if (grandchildSlugs.length > 0) {
// //       child.children = grandchildSlugs.map((gcSlug) => {
// //         const gcHref = `${href}/${gcSlug}`;
// //         const gcFile = findPageFile(gcHref);
// //         const gcSeo = extractSeoData(gcFile);
// //         return { title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug), description: gcSeo.description || null, href: gcHref };
// //       });
// //     }
// //     return child;
// //   });
// //   return { children };
// // }


// // /* ================================================================
// //    MAIN ENTRY POINT
// //    ================================================================ */

// // export async function buildSectionData(sectionRoute) {
// //   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
// //   const childSlugs = getChildSlugs(sectionRoute);
// //   const sections = [];
// //   const sectionData = {};

// //   for (const slug of childSlugs) {
// //     const type = classifySlug(slug);
// //     const childRoute = `${sectionRoute}/${slug}`;
// //     const filePath = findPageFile(childRoute);
// //     const seo = extractSeoData(filePath);
// //     const visualProps = extractVisualProps(seo);

// //     if (type === 'formulas') {
// //       const data = await processFormulas(parentSlug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else if (type === 'definitions') {
// //       const data = await processDefinitions(parentSlug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else if (type === 'calculators') {
// //       const data = processToolSection(sectionRoute, slug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else if (type === 'visual-tools') {
// //       const data = processToolSection(sectionRoute, slug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     } else {
// //       const data = processSubsection(sectionRoute, slug);
// //       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
// //       sectionData[slug] = data;
// //     }
// //   }

// //   return { sections, sectionData };
// // }

// // export default buildSectionData;



// /**
//  * buildSectionData
//  *
//  * Auto-discovers sections from the filesystem and optionally merges
//  * developer-authored custom prose content per section.
//  *
//  * Usage:
//  *   const { sections, sectionData } = await buildSectionData('/algebra', {
//  *     customSections: { ... }
//  *   });
//  *
//  * customSections shape (all fields optional unless noted):
//  * {
//  *   '<sectionId>': {
//  *     mode: 'augment' | 'replace' | 'prose-only',  // REQUIRED
//  *     body: string,                                // REQUIRED — markdown / HTML string
//  *
//  *     // augment only:
//  *     position: 'before' | 'after',                // default: 'before'
//  *
//  *     // prose-only only (synthesizes a NEW section that doesn't exist on disk):
//  *     title: string,
//  *     navIcon: string,                             // e.g. 'subsection', 'formulas'
//  *     link: string,                                // optional "learn more" href
//  *     linkText: string,
//  *     insertAfter: '<sectionId>',                  // place after this auto section
//  *     insertBefore: '<sectionId>',                 // OR before this one
//  *   }
//  * }
//  *
//  * Modes:
//  *   - augment      : auto content + your prose (before or after the grid)
//  *   - replace      : your prose replaces the auto grid; header/footer/nav stay
//  *   - prose-only   : a brand new narrative section, no auto-pulled content
//  *   - (absent)     : default behavior — pure auto-discovery
//  *
//  * Flattened-URL directories ("[view].jsx-only"):
//  *   Some hub directories have no index.jsx and contain only a Next.js
//  *   dynamic route file like [view].jsx with a `viewConfig` object
//  *   inside. The directory route itself is not a real URL; each
//  *   viewConfig entry represents a real view URL of its own (e.g.
//  *   /algebra/calculators/equations/linear,
//  *   /algebra/calculators/equations/quadratic, ...).
//  *
//  *   For such directories we DO NOT create one hub card. We expand the
//  *   directory into one card per viewConfig entry — each card with its
//  *   own title and description pulled from that entry, and an href
//  *   pointing to its specific view URL.
//  */

// import fs from 'fs';
// import path from 'path';


// /* ================================================================
//    CONFIGURATION
//    ================================================================ */

// const TYPE_MAP = {
//   'formulas': 'formulas',
//   'definitions': 'definitions',
//   'calculators': 'calculators',
//   'visual-tools': 'visual-tools',
// };

// const TYPE_ICONS = {
//   'formulas': 'formulas',
//   'definitions': 'definitions',
//   'calculators': 'calculators',
//   'visual-tools': 'visual-tools',
//   'subsection': 'subsection',
//   'prose-only': 'subsection',
// };

// // TYPE_ORDER moved here from SectionsContainer so prose-only insertion
// // is respected. Component now renders sections in the order received.
// const TYPE_ORDER = {
//   'visual-tools': 0,
//   'formulas': 1,
//   'definitions': 2,
//   'editorial': 3,
//   'standalone': 4,
//   'subsection': 5,
//   'calculators': 6,
// };

// // function getDataModulePath(parentSlug, type) {
// //   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
// //   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// // }
// function getDataModulePath(parentSlug, type) {
//   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
//   const camelSlug = parentSlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
//   return `@/app/api/db/${type}/${parentSlug}/${camelSlug}${capitalized}`;
// }

// /* ================================================================
//    FILESYSTEM UTILITIES
//    ================================================================ */

// function getPagesDir() {
//   return path.join(process.cwd(), 'pages');
// }

// const INDEX_FILES = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];
// const PAGE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
// const DYNAMIC_ROUTE_RE = /^\[.+\]\.(js|jsx|ts|tsx)$/;

// function getChildSlugs(parentRoute) {
//   const dir = path.join(getPagesDir(), parentRoute);
//   if (!fs.existsSync(dir)) return [];

//   return fs.readdirSync(dir).filter((entry) => {
//     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
//     const full = path.join(dir, entry);
//     const stat = fs.statSync(full);
//     if (stat.isDirectory()) {
//       // Accept a directory if it has a static index page (the usual
//       // hub case) OR if it contains a Next.js dynamic route file like
//       // [view].jsx. The latter is a flattened-URL hub: the directory
//       // itself isn't a URL, but each viewConfig entry inside the
//       // dynamic file IS a URL, and we'll expand them into individual
//       // cards downstream.
//       const inside = fs.readdirSync(full);
//       const hasIndex = inside.some(f => INDEX_FILES.includes(f));
//       const hasDynamicRoute = inside.some(f => DYNAMIC_ROUTE_RE.test(f));
//       return hasIndex || hasDynamicRoute;
//     }
//     if (stat.isFile()) {
//       const ext = path.extname(entry);
//       const name = path.basename(entry, ext);
//       if (!PAGE_EXTENSIONS.includes(ext)) return false;
//       if (name === 'index') return false;
//       return true;
//     }
//     return false;
//   }).map((entry) => {
//     const full = path.join(dir, entry);
//     return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
//   });
// }

// function findPageFile(route) {
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
//   for (const candidate of candidates) {
//     if (fs.existsSync(candidate)) return candidate;
//   }
//   return null;
// }


// /* ================================================================
//    SEO DATA EXTRACTION
//    ================================================================ */

// function cleanTitle(rawTitle) {
//   if (!rawTitle) return null;
//   const pipeIndex = rawTitle.indexOf('|');
//   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// }

// /**
//  * Strip JS line and block comments without touching string or template
//  * literal contents.
//  *
//  * The naive `\/\/.*$` strip mangles URL-like substrings inside string
//  * literals — for example `xmlns="http://www.w3.org/2000/svg"`. After
//  * the strip, everything from `http:` onward on that line disappears,
//  * leaving a truncated `<svg>` opening tag, which then renders without
//  * its inline `<style>` block — visible as black-rect placeholder
//  * shapes on hub cards.
//  *
//  * We protect strings by substituting each literal with a sentinel
//  * placeholder, stripping comments in the sanitized text, then
//  * restoring the literals.
//  */
// function stripComments(source) {
//   const literals = [];
//   const OPEN = '\x00LMC_LIT_';
//   const CLOSE = '\x00';

//   let safe = source.replace(
//     /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g,
//     (match) => {
//       const idx = literals.length;
//       literals.push(match);
//       return `${OPEN}${idx}${CLOSE}`;
//     }
//   );

//   safe = safe.replace(/\/\/.*$/gm, '');
//   safe = safe.replace(/\/\*[\s\S]*?\*\//g, '');

//   safe = safe.replace(/\x00LMC_LIT_(\d+)\x00/g, (_, idx) => literals[parseInt(idx, 10)]);

//   return safe;
// }

// function extractSeoData(filePath) {
//   if (!filePath) return {};

//   let content;
//   try {
//     content = fs.readFileSync(filePath, 'utf-8');
//   } catch (e) {
//     return {};
//   }

//   content = stripComments(content);
//   const result = {};

//   const titleMatch = content.match(
//     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
//   );
//   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

//   if (!result.title) {
//     const headTitleMatch = content.match(
//       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
//     );
//     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
//   }

//   const descMatch = content.match(
//     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
//   );
//   if (descMatch) result.description = descMatch[1];

//   const hubDescMatch = content.match(
//     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
//   );
//   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

//   const nameMatch = content.match(
//     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
//   );
//   if (nameMatch) result.name = nameMatch[1];

//   const urlMatch = content.match(
//     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
//   );
//   if (urlMatch) result.url = urlMatch[1];

//   const navIconMatch = content.match(
//     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
//   );
//   if (navIconMatch) result.navIcon = navIconMatch[1];

//   const imageMatch = content.match(
//     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
//   );
//   if (imageMatch) result.image = imageMatch[1];

//   const imageAltMatch = content.match(
//     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
//   );
//   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

//   const svgMatch = content.match(
//     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
//   );
//   if (svgMatch) result.svg = svgMatch[1];

//   const introLayoutMatch = content.match(
//     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
//   );
//   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

//   const introImagePositionMatch = content.match(
//     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
//   );
//   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

//   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
//     result.schemaType = 'WebApplication';
//   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
//     result.schemaType = 'LearningResource';
//   }

//   return result;
// }


// /* ================================================================
//    DYNAMIC ROUTE VIEW EXTRACTION
//    ================================================================ */

// /**
//  * String-aware brace matching. `source[openIdx]` must be '{'. Returns
//  * the index of the matching '}'. Braces inside single-quote,
//  * double-quote, and template-literal strings do not count toward the
//  * depth. Returns -1 if no match is found.
//  */
// function findClosingBrace(source, openIdx) {
//   let depth = 0;
//   let inString = null;
//   let escape = false;

//   for (let i = openIdx; i < source.length; i++) {
//     const ch = source[i];

//     if (escape) { escape = false; continue; }

//     if (inString) {
//       if (ch === '\\') escape = true;
//       else if (ch === inString) inString = null;
//       continue;
//     }

//     if (ch === '"' || ch === "'" || ch === '`') {
//       inString = ch;
//       continue;
//     }

//     if (ch === '{') depth++;
//     else if (ch === '}') {
//       depth--;
//       if (depth === 0) return i;
//     }
//   }

//   return -1;
// }

// /**
//  * Walk the text between the braces of a `viewConfig = { ... }` object
//  * and pull out each top-level entry. Returns an array of `{ key,
//  * block }` pairs where `block` is the raw text inside that entry's
//  * own braces. Entries whose value isn't an object literal are
//  * skipped — viewConfig is expected to map each view key to an
//  * options object.
//  */
// function parseViewConfigBody(body) {
//   const results = [];
//   let i = 0;

//   while (i < body.length) {
//     while (i < body.length && /[\s,]/.test(body[i])) i++;
//     if (i >= body.length) break;

//     let key = null;

//     if (body[i] === '"' || body[i] === "'" || body[i] === '`') {
//       const quote = body[i];
//       i++;
//       const start = i;
//       while (i < body.length && body[i] !== quote) {
//         if (body[i] === '\\') i++;
//         i++;
//       }
//       key = body.substring(start, i);
//       if (i < body.length) i++;
//     } else if (/[a-zA-Z_$]/.test(body[i])) {
//       const start = i;
//       while (i < body.length && /[\w$]/.test(body[i])) i++;
//       key = body.substring(start, i);
//     } else {
//       break;
//     }

//     if (!key) break;

//     while (i < body.length && /\s/.test(body[i])) i++;
//     if (body[i] !== ':') break;
//     i++;
//     while (i < body.length && /\s/.test(body[i])) i++;

//     if (body[i] !== '{') {
//       // Non-object value — skip until the next top-level comma so we
//       // can continue scanning for the next key.
//       let depth = 0;
//       let inStr = null;
//       let esc = false;
//       while (i < body.length) {
//         const ch = body[i];
//         if (esc) { esc = false; i++; continue; }
//         if (inStr) {
//           if (ch === '\\') esc = true;
//           else if (ch === inStr) inStr = null;
//           i++;
//           continue;
//         }
//         if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; i++; continue; }
//         if (ch === ',' && depth === 0) break;
//         if (ch === '{' || ch === '[' || ch === '(') depth++;
//         else if (ch === '}' || ch === ']' || ch === ')') depth--;
//         i++;
//       }
//       continue;
//     }

//     const blockEnd = findClosingBrace(body, i);
//     if (blockEnd === -1) break;

//     const block = body.substring(i + 1, blockEnd);
//     results.push({ key, block });

//     i = blockEnd + 1;
//   }

//   return results;
// }

// /**
//  * For a directory containing only a dynamic route file (e.g.
//  * [view].jsx), extract one record per `viewConfig` entry. Each
//  * record has the view's slug plus whichever metadata fields could
//  * be pulled from its block.
//  *
//  * Returns [] if there's no dynamic file or no parseable viewConfig.
//  */
// function extractViewsFromDynamicRoute(directoryPath) {
//   if (!fs.existsSync(directoryPath)) return [];

//   let entries;
//   try {
//     entries = fs.readdirSync(directoryPath);
//   } catch (e) {
//     return [];
//   }

//   const dynamicFile = entries.find(f => DYNAMIC_ROUTE_RE.test(f));
//   if (!dynamicFile) return [];

//   let content;
//   try {
//     content = fs.readFileSync(path.join(directoryPath, dynamicFile), 'utf-8');
//   } catch (e) {
//     return [];
//   }
//   content = stripComments(content);

//   const startMatch = content.match(/viewConfig\s*=\s*\{/);
//   if (!startMatch) return [];

//   const braceStart = startMatch.index + startMatch[0].length - 1;
//   const braceEnd = findClosingBrace(content, braceStart);
//   if (braceEnd === -1) return [];

//   const viewConfigBody = content.substring(braceStart + 1, braceEnd);
//   const rawEntries = parseViewConfigBody(viewConfigBody);

//   return rawEntries.map(({ key, block }) => {
//     const fields = { key };

//     const titleMatch = block.match(/title\s*:\s*["'`]([^"'`]{5,500})["'`]/);
//     if (titleMatch) fields.title = cleanTitle(titleMatch[1]);

//     const descMatch = block.match(/description\s*:\s*["'`]([^"'`]{10,1000})["'`]/);
//     if (descMatch) fields.description = descMatch[1];

//     const hubDescMatch = block.match(/hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/);
//     if (hubDescMatch) fields.hubDescription = hubDescMatch[1];

//     const nameMatch = block.match(/name\s*:\s*["'`]([^"'`]{3,200})["'`]/);
//     if (nameMatch) fields.name = nameMatch[1];

//     const h1Match = block.match(/h1\s*:\s*["'`]([^"'`]{3,200})["'`]/);
//     if (h1Match) fields.h1 = h1Match[1];

//     const svgMatch = block.match(/svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
//     if (svgMatch) fields.svg = svgMatch[1];

//     const imageMatch = block.match(/image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/);
//     if (imageMatch) fields.image = imageMatch[1];

//     const imageAltMatch = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
//     if (imageAltMatch) fields.imageAlt = imageAltMatch[1];

//     return fields;
//   });
// }

// /**
//  * Build card records for a single child directory inside a tool/
//  * subsection section. If the directory has a static index page, this
//  * returns a one-element array with the hub card. If the directory is
//  * a flattened-URL hub (only [view].jsx, no index), this returns one
//  * card per viewConfig entry.
//  */
// function buildChildCards(parentRoute, childSlug) {
//   const href = `${parentRoute}/${childSlug}`;
//   const filePath = findPageFile(href);

//   if (filePath) {
//     const seo = extractSeoData(filePath);
//     return [{
//       title: seo.name || seo.title || slugToTitle(childSlug),
//       description: seo.hubDescription || seo.description || null,
//       href,
//       image: seo.image || null,
//       imageAlt: seo.imageAlt || null,
//       svg: seo.svg || null,
//     }];
//   }

//   const childDir = path.join(getPagesDir(), parentRoute, childSlug);
//   const views = extractViewsFromDynamicRoute(childDir);

//   if (views.length > 0) {
//     return views.map((view) => ({
//       title: view.name || view.h1 || view.title || slugToTitle(view.key),
//       description: view.hubDescription || view.description || null,
//       href: `${href}/${view.key}`,
//       image: view.image || null,
//       imageAlt: view.imageAlt || null,
//       svg: view.svg || null,
//     }));
//   }

//   // Degraded fallback: directory was discovered (has a [*].jsx) but
//   // no viewConfig pattern matched. Still show one card so the entry
//   // is visible — the link will almost certainly 404, but the
//   // discoverability is better than silent omission.
//   return [{
//     title: slugToTitle(childSlug),
//     description: null,
//     href,
//     image: null,
//     imageAlt: null,
//     svg: null,
//   }];
// }


// /* ================================================================
//    SLUG UTILITIES
//    ================================================================ */

// function slugToTitle(slug) {
//   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// }

// function classifySlug(slug) {
//   return TYPE_MAP[slug] || 'subsection';
// }

// function getNavIcon(seo, typeOrSlug) {
//   if (seo.navIcon) return seo.navIcon;
//   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// }

// function extractVisualProps(seo) {
//   const props = {};
//   if (seo.image) props.image = seo.image;
//   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
//   if (seo.svg) props.svg = seo.svg;
//   if (seo.introLayout) props.introLayout = seo.introLayout;
//   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
//   return props;
// }


// /* ================================================================
//    TYPE-SPECIFIC PROCESSORS
//    ================================================================ */

// async function processFormulas(parentSlug) {
//   const modulePath = getDataModulePath(parentSlug, 'formulas');
//   let formulasList;
//   try {
//     const mod = await import(modulePath);
//     formulasList = mod.default;
//   } catch (e) {
//     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
//     return { categories: [], items: [], totalCount: 0 };
//   }
//   const categoryMap = {};
//   const items = [];
//   formulasList.forEach((item) => {
//     const catKey = item.category || 'uncategorized';
//     const catName = item.categoryName || slugToTitle(catKey);
//     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
//     categoryMap[catKey].count++;
//     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
//   });
//   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// }

// async function processDefinitions(parentSlug) {
//   const modulePath = getDataModulePath(parentSlug, 'definitions');
//   let defsList;
//   try {
//     const mod = await import(modulePath);
//     defsList = mod.default;
//   } catch (e) {
//     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
//     return { categories: [], items: [], totalCount: 0 };
//   }
//   const categoryMap = {};
//   const items = [];
//   defsList.forEach((item) => {
//     const catKey = item.category || 'uncategorized';
//     const catName = item.categoryName || slugToTitle(catKey);
//     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
//     categoryMap[catKey].count++;
//     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
//   });
//   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// }

// function processToolSection(parentRoute, slug) {
//   const toolRoute = `${parentRoute}/${slug}`;
//   const childSlugs = getChildSlugs(toolRoute);
//   const children = [];
//   for (const childSlug of childSlugs) {
//     children.push(...buildChildCards(toolRoute, childSlug));
//   }
//   return { children };
// }

// function processSubsection(parentRoute, slug) {
//   const sectionRoute = `${parentRoute}/${slug}`;
//   const childSlugs = getChildSlugs(sectionRoute);
//   const children = [];

//   for (const childSlug of childSlugs) {
//     const cards = buildChildCards(sectionRoute, childSlug);
//     // If the child resolved to multiple cards (flattened viewConfig
//     // expansion), add them all flat — no grandchildren traversal,
//     // since the cards already represent the leaf URLs.
//     if (cards.length > 1) {
//       children.push(...cards);
//       continue;
//     }

//     const card = cards[0];
//     // For single-card children, also look for grandchildren that
//     // could populate the card's nested `children` list. Grandchildren
//     // get the same flattened-expansion treatment via buildChildCards.
//     const childHref = card.href;
//     const grandchildSlugs = getChildSlugs(childHref);
//     if (grandchildSlugs.length > 0) {
//       const grandchildren = [];
//       for (const gcSlug of grandchildSlugs) {
//         const gcCards = buildChildCards(childHref, gcSlug);
//         for (const gc of gcCards) {
//           grandchildren.push({
//             title: gc.title,
//             description: gc.description,
//             href: gc.href,
//           });
//         }
//       }
//       card.children = grandchildren;
//     }
//     children.push(card);
//   }

//   return { children };
// }


// /* ================================================================
//    CUSTOM SECTIONS MERGE
//    ================================================================ */

// function validateCustomEntry(id, entry) {
//   if (!entry || typeof entry !== 'object') {
//     console.warn(`buildSectionData: customSections["${id}"] is not an object — skipped.`);
//     return false;
//   }
//   const validModes = ['augment', 'replace', 'prose-only'];
//   if (!validModes.includes(entry.mode)) {
//     console.warn(`buildSectionData: customSections["${id}"].mode must be one of ${validModes.join(', ')} — got "${entry.mode}". Skipped.`);
//     return false;
//   }
//   if (typeof entry.body !== 'string' || entry.body.trim().length === 0) {
//     console.warn(`buildSectionData: customSections["${id}"].body must be a non-empty string — skipped.`);
//     return false;
//   }
//   return true;
// }

// function applyCustomSections(sections, sectionData, customSections) {
//   if (!customSections || typeof customSections !== 'object') return;

//   const autoIds = new Set(sections.map((s) => s.id));

//   for (const section of sections) {
//     const entry = customSections[section.id];
//     if (!entry) continue;
//     if (!validateCustomEntry(section.id, entry)) continue;

//     if (entry.mode === 'augment') {
//       section.custom = {
//         mode: 'augment',
//         position: entry.position === 'after' ? 'after' : 'before',
//         body: entry.body,
//       };
//     } else if (entry.mode === 'replace') {
//       section.custom = {
//         mode: 'replace',
//         body: entry.body,
//       };
//     } else if (entry.mode === 'prose-only') {
//       console.warn(
//         `buildSectionData: customSections["${section.id}"] uses mode "prose-only" but a section with that id already exists from auto-discovery. Use mode "replace" instead — skipped.`
//       );
//     }
//   }

//   for (const [id, entry] of Object.entries(customSections)) {
//     if (!entry || entry.mode !== 'prose-only') continue;
//     if (autoIds.has(id)) continue;
//     if (!validateCustomEntry(id, entry)) continue;

//     const newSection = {
//       id,
//       title: entry.title || slugToTitle(id),
//       type: 'prose-only',
//       navIcon: entry.navIcon || TYPE_ICONS['prose-only'],
//       link: entry.link || null,
//       linkText: entry.linkText || null,
//       custom: {
//         mode: 'prose-only',
//         body: entry.body,
//       },
//     };

//     let insertIndex = sections.length;
//     if (entry.insertAfter) {
//       const idx = sections.findIndex((s) => s.id === entry.insertAfter);
//       if (idx >= 0) insertIndex = idx + 1;
//       else console.warn(`buildSectionData: insertAfter target "${entry.insertAfter}" not found for prose-only section "${id}". Appending at end.`);
//     } else if (entry.insertBefore) {
//       const idx = sections.findIndex((s) => s.id === entry.insertBefore);
//       if (idx >= 0) insertIndex = idx;
//       else console.warn(`buildSectionData: insertBefore target "${entry.insertBefore}" not found for prose-only section "${id}". Appending at end.`);
//     }
//     sections.splice(insertIndex, 0, newSection);
//     sectionData[id] = {};
//   }
// }


// /* ================================================================
//    MAIN ENTRY POINT
//    ================================================================ */

// export async function buildSectionData(sectionRoute, options = {}) {
//   const { customSections = {} } = options;

//   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
//   const childSlugs = getChildSlugs(sectionRoute);
//   const sections = [];
//   const sectionData = {};

//   for (const slug of childSlugs) {
//     const type = classifySlug(slug);
//     const childRoute = `${sectionRoute}/${slug}`;
//     const filePath = findPageFile(childRoute);
//     const seo = extractSeoData(filePath);
//     const visualProps = extractVisualProps(seo);

//     if (type === 'formulas') {
//       const data = await processFormulas(parentSlug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'definitions') {
//       const data = await processDefinitions(parentSlug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'calculators') {
//       const data = processToolSection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'visual-tools') {
//       const data = processToolSection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else {
//       const data = processSubsection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     }
//   }

//   sections.sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5));

//   applyCustomSections(sections, sectionData, customSections);

//   return { sections, sectionData };
// }

// export default buildSectionData;


// /**
//  * buildSectionData
//  */

// import fs from 'fs';
// import path from 'path';


// /* ================================================================
//    CONFIGURATION
//    ================================================================ */

// const TYPE_MAP = {
//   'formulas': 'formulas',
//   'definitions': 'definitions',
//   'calculators': 'calculators',
//   'visual-tools': 'visual-tools',
// };

// const TYPE_ICONS = {
//   'formulas': 'formulas',
//   'definitions': 'definitions',
//   'calculators': 'calculators',
//   'visual-tools': 'visual-tools',
//   'subsection': 'subsection',
// };

// function getDataModulePath(parentSlug, type) {
//   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
//   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// }


// /* ================================================================
//    FILESYSTEM UTILITIES
//    ================================================================ */

// function getPagesDir() {
//   return path.join(process.cwd(), 'pages');
// }

// function getChildSlugs(parentRoute) {
//   const dir = path.join(getPagesDir(), parentRoute);
//   if (!fs.existsSync(dir)) return [];

//   return fs.readdirSync(dir).filter((entry) => {
//     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
//     const full = path.join(dir, entry);
//     const stat = fs.statSync(full);
//     if (stat.isDirectory()) {
//       return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
//         (f) => fs.existsSync(path.join(full, f))
//       );
//     }
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

// function findPageFile(route) {
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
//   for (const candidate of candidates) {
//     if (fs.existsSync(candidate)) return candidate;
//   }
//   return null;
// }


// /* ================================================================
//    SEO DATA EXTRACTION
//    ================================================================ */

// function cleanTitle(rawTitle) {
//   if (!rawTitle) return null;
//   const pipeIndex = rawTitle.indexOf('|');
//   return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
// }

// function stripComments(source) {
//   let result = source.replace(/\/\/.*$/gm, '');
//   result = result.replace(/\/\*[\s\S]*?\*\//g, '');
//   return result;
// }

// function extractSeoData(filePath) {
//   if (!filePath) return {};

//   let content;
//   try {
//     content = fs.readFileSync(filePath, 'utf-8');
//   } catch (e) {
//     return {};
//   }

//   content = stripComments(content);
//   const result = {};

//   const titleMatch = content.match(
//     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
//   );
//   if (titleMatch) result.title = cleanTitle(titleMatch[1]);

//   if (!result.title) {
//     const headTitleMatch = content.match(
//       /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
//     );
//     if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
//   }

//   const descMatch = content.match(
//     /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
//   );
//   if (descMatch) result.description = descMatch[1];

//   const hubDescMatch = content.match(
//     /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
//   );
//   if (hubDescMatch) result.hubDescription = hubDescMatch[1];

//   const nameMatch = content.match(
//     /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
//   );
//   if (nameMatch) result.name = nameMatch[1];

//   const urlMatch = content.match(
//     /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
//   );
//   if (urlMatch) result.url = urlMatch[1];

//   const navIconMatch = content.match(
//     /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
//   );
//   if (navIconMatch) result.navIcon = navIconMatch[1];

//   const imageMatch = content.match(
//     /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
//   );
//   if (imageMatch) result.image = imageMatch[1];

//   const imageAltMatch = content.match(
//     /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
//   );
//   if (imageAltMatch) result.imageAlt = imageAltMatch[1];

//   const svgMatch = content.match(
//     /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
//   );
//   if (svgMatch) result.svg = svgMatch[1];

//   // Layout for intro block: 'horizontal' (default) or 'vertical'
//   const introLayoutMatch = content.match(
//     /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
//   );
//   if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

//   // Image position: 'right' (default), 'left', 'top', 'bottom'
//   const introImagePositionMatch = content.match(
//     /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
//   );
//   if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

//   if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
//     result.schemaType = 'WebApplication';
//   } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
//     result.schemaType = 'LearningResource';
//   }

//   return result;
// }


// /* ================================================================
//    SLUG UTILITIES
//    ================================================================ */

// function slugToTitle(slug) {
//   return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// }

// function classifySlug(slug) {
//   return TYPE_MAP[slug] || 'subsection';
// }

// function getNavIcon(seo, typeOrSlug) {
//   if (seo.navIcon) return seo.navIcon;
//   return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
// }

// function extractVisualProps(seo) {
//   const props = {};
//   if (seo.image) props.image = seo.image;
//   if (seo.imageAlt) props.imageAlt = seo.imageAlt;
//   if (seo.svg) props.svg = seo.svg;
//   if (seo.introLayout) props.introLayout = seo.introLayout;
//   if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
//   return props;
// }


// /* ================================================================
//    TYPE-SPECIFIC PROCESSORS
//    ================================================================ */

// async function processFormulas(parentSlug) {
//   const modulePath = getDataModulePath(parentSlug, 'formulas');
//   let formulasList;
//   try {
//     const mod = await import(modulePath);
//     formulasList = mod.default;
//   } catch (e) {
//     console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
//     return { categories: [], items: [], totalCount: 0 };
//   }
//   const categoryMap = {};
//   const items = [];
//   formulasList.forEach((item) => {
//     const catKey = item.category || 'uncategorized';
//     const catName = item.categoryName || slugToTitle(catKey);
//     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
//     categoryMap[catKey].count++;
//     items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
//   });
//   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// }

// async function processDefinitions(parentSlug) {
//   const modulePath = getDataModulePath(parentSlug, 'definitions');
//   let defsList;
//   try {
//     const mod = await import(modulePath);
//     defsList = mod.default;
//   } catch (e) {
//     console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
//     return { categories: [], items: [], totalCount: 0 };
//   }
//   const categoryMap = {};
//   const items = [];
//   defsList.forEach((item) => {
//     const catKey = item.category || 'uncategorized';
//     const catName = item.categoryName || slugToTitle(catKey);
//     if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
//     categoryMap[catKey].count++;
//     items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
//   });
//   return { categories: Object.values(categoryMap), items, totalCount: items.length };
// }

// function processToolSection(parentRoute, slug) {
//   const toolRoute = `${parentRoute}/${slug}`;
//   const childSlugs = getChildSlugs(toolRoute);
//   const children = childSlugs.map((childSlug) => {
//     const href = `${toolRoute}/${childSlug}`;
//     const filePath = findPageFile(href);
//     const seo = extractSeoData(filePath);
//     return { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
//   });
//   return { children };
// }

// function processSubsection(parentRoute, slug) {
//   const sectionRoute = `${parentRoute}/${slug}`;
//   const childSlugs = getChildSlugs(sectionRoute);
//   const children = childSlugs.map((childSlug) => {
//     const href = `${sectionRoute}/${childSlug}`;
//     const filePath = findPageFile(href);
//     const seo = extractSeoData(filePath);
//     const child = { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
//     const grandchildSlugs = getChildSlugs(href);
//     if (grandchildSlugs.length > 0) {
//       child.children = grandchildSlugs.map((gcSlug) => {
//         const gcHref = `${href}/${gcSlug}`;
//         const gcFile = findPageFile(gcHref);
//         const gcSeo = extractSeoData(gcFile);
//         return { title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug), description: gcSeo.description || null, href: gcHref };
//       });
//     }
//     return child;
//   });
//   return { children };
// }


// /* ================================================================
//    MAIN ENTRY POINT
//    ================================================================ */

// export async function buildSectionData(sectionRoute) {
//   const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
//   const childSlugs = getChildSlugs(sectionRoute);
//   const sections = [];
//   const sectionData = {};

//   for (const slug of childSlugs) {
//     const type = classifySlug(slug);
//     const childRoute = `${sectionRoute}/${slug}`;
//     const filePath = findPageFile(childRoute);
//     const seo = extractSeoData(filePath);
//     const visualProps = extractVisualProps(seo);

//     if (type === 'formulas') {
//       const data = await processFormulas(parentSlug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'definitions') {
//       const data = await processDefinitions(parentSlug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'calculators') {
//       const data = processToolSection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'visual-tools') {
//       const data = processToolSection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else {
//       const data = processSubsection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     }
//   }

//   return { sections, sectionData };
// }

// export default buildSectionData;



/**
 * buildSectionData
 *
 * Auto-discovers sections from the filesystem and optionally merges
 * developer-authored custom prose content per section.
 *
 * Usage:
 *   const { sections, sectionData } = await buildSectionData('/algebra', {
 *     customSections: { ... }
 *   });
 *
 * customSections shape (all fields optional unless noted):
 * {
 *   '<sectionId>': {
 *     mode: 'augment' | 'replace' | 'prose-only',  // REQUIRED
 *     body: string,                                // REQUIRED — markdown / HTML string
 *
 *     // augment only:
 *     position: 'before' | 'after',                // default: 'before'
 *
 *     // prose-only only (synthesizes a NEW section that doesn't exist on disk):
 *     title: string,
 *     navIcon: string,                             // e.g. 'subsection', 'formulas'
 *     link: string,                                // optional "learn more" href
 *     linkText: string,
 *     insertAfter: '<sectionId>',                  // place after this auto section
 *     insertBefore: '<sectionId>',                 // OR before this one
 *   }
 * }
 *
 * Modes:
 *   - augment      : auto content + your prose (before or after the grid)
 *   - replace      : your prose replaces the auto grid; header/footer/nav stay
 *   - prose-only   : a brand new narrative section, no auto-pulled content
 *   - (absent)     : default behavior — pure auto-discovery
 *
 * Flattened-URL directories ("[view].jsx-only"):
 *   Some hub directories have no index.jsx and contain only a Next.js
 *   dynamic route file like [view].jsx with a `viewConfig` object
 *   inside. The directory route itself is not a real URL; each
 *   viewConfig entry represents a real view URL of its own (e.g.
 *   /algebra/calculators/equations/linear,
 *   /algebra/calculators/equations/quadratic, ...).
 *
 *   For such directories we DO NOT create one hub card. We expand the
 *   directory into one card per viewConfig entry — each card with its
 *   own title and description pulled from that entry, and an href
 *   pointing to its specific view URL.
 */

import fs from 'fs';
import path from 'path';


/* ================================================================
   CONFIGURATION
   ================================================================ */

const TYPE_MAP = {
  'formulas': 'formulas',
  'definitions': 'definitions',
  'calculators': 'calculators',
  'visual-tools': 'visual-tools',
};

const TYPE_ICONS = {
  'formulas': 'formulas',
  'definitions': 'definitions',
  'calculators': 'calculators',
  'visual-tools': 'visual-tools',
  'subsection': 'subsection',
  'prose-only': 'subsection',
};

// TYPE_ORDER moved here from SectionsContainer so prose-only insertion
// is respected. Component now renders sections in the order received.
const TYPE_ORDER = {
  'visual-tools': 0,
  'formulas': 1,
  'definitions': 2,
  'editorial': 3,
  'standalone': 4,
  'subsection': 5,
  'calculators': 6,
};

// function getDataModulePath(parentSlug, type) {
//   const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
//   return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
// }
function getDataModulePath(parentSlug, type) {
  const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
  const camelSlug = parentSlug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  return `@/app/api/db/${type}/${parentSlug}/${camelSlug}${capitalized}`;
}

/* ================================================================
   FILESYSTEM UTILITIES
   ================================================================ */

function getPagesDir() {
  return path.join(process.cwd(), 'pages');
}

const INDEX_FILES = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];
const PAGE_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];
const DYNAMIC_ROUTE_RE = /^\[.+\]\.(js|jsx|ts|tsx)$/;

function getChildSlugs(parentRoute) {
  const dir = path.join(getPagesDir(), parentRoute);
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir).filter((entry) => {
    if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      // Accept a directory if it has a static index page (the usual
      // hub case) OR if it contains a Next.js dynamic route file like
      // [view].jsx. The latter is a flattened-URL hub: the directory
      // itself isn't a URL, but each viewConfig entry inside the
      // dynamic file IS a URL, and we'll expand them into individual
      // cards downstream.
      const inside = fs.readdirSync(full);
      const hasIndex = inside.some(f => INDEX_FILES.includes(f));
      const hasDynamicRoute = inside.some(f => DYNAMIC_ROUTE_RE.test(f));
      return hasIndex || hasDynamicRoute;
    }
    if (stat.isFile()) {
      const ext = path.extname(entry);
      const name = path.basename(entry, ext);
      if (!PAGE_EXTENSIONS.includes(ext)) return false;
      if (name === 'index') return false;
      return true;
    }
    return false;
  }).map((entry) => {
    const full = path.join(dir, entry);
    return fs.statSync(full).isDirectory() ? entry : path.basename(entry, path.extname(entry));
  });
}

function findPageFile(route) {
  const pagesDir = getPagesDir();
  const candidates = [
    path.join(pagesDir, route, 'index.js'),
    path.join(pagesDir, route, 'index.jsx'),
    path.join(pagesDir, route, 'index.ts'),
    path.join(pagesDir, route, 'index.tsx'),
    path.join(pagesDir, route + '.js'),
    path.join(pagesDir, route + '.jsx'),
    path.join(pagesDir, route + '.ts'),
    path.join(pagesDir, route + '.tsx'),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}


/* ================================================================
   SEO DATA EXTRACTION
   ================================================================ */

function cleanTitle(rawTitle) {
  if (!rawTitle) return null;
  const pipeIndex = rawTitle.indexOf('|');
  return pipeIndex > 0 ? rawTitle.substring(0, pipeIndex).trim() : rawTitle.trim();
}

/**
 * Strip JS line and block comments without touching string or template
 * literal contents.
 *
 * The naive `\/\/.*$` strip mangles URL-like substrings inside string
 * literals — for example `xmlns="http://www.w3.org/2000/svg"`. After
 * the strip, everything from `http:` onward on that line disappears,
 * leaving a truncated `<svg>` opening tag, which then renders without
 * its inline `<style>` block — visible as black-rect placeholder
 * shapes on hub cards.
 *
 * We protect strings by substituting each literal with a sentinel
 * placeholder, stripping comments in the sanitized text, then
 * restoring the literals.
 */
function stripComments(source) {
  const literals = [];
  const OPEN = '\x00LMC_LIT_';
  const CLOSE = '\x00';

  let safe = source.replace(
    /"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`/g,
    (match) => {
      const idx = literals.length;
      literals.push(match);
      return `${OPEN}${idx}${CLOSE}`;
    }
  );

  safe = safe.replace(/\/\/.*$/gm, '');
  safe = safe.replace(/\/\*[\s\S]*?\*\//g, '');

  safe = safe.replace(/\x00LMC_LIT_(\d+)\x00/g, (_, idx) => literals[parseInt(idx, 10)]);

  return safe;
}

function extractSeoData(filePath) {
  if (!filePath) return {};

  let content;
  try {
    content = fs.readFileSync(filePath, 'utf-8');
  } catch (e) {
    return {};
  }

  content = stripComments(content);
  const result = {};

  const titleMatch = content.match(
    /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
  );
  if (titleMatch) result.title = cleanTitle(titleMatch[1]);

  if (!result.title) {
    const headTitleMatch = content.match(
      /(?:pageTitle|title)\s*[:=]\s*["'`]([^"'`]{5,200})["'`]/
    );
    if (headTitleMatch) result.title = cleanTitle(headTitleMatch[1]);
  }

  const descMatch = content.match(
    /(?:description)\s*:\s*["'`]([^"'`]{10,500})["'`]/
  );
  if (descMatch) result.description = descMatch[1];

  const hubDescMatch = content.match(
    /hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/
  );
  if (hubDescMatch) result.hubDescription = hubDescMatch[1];

  const nameMatch = content.match(
    /(?:name)\s*:\s*["'`]([^"'`]{3,100})["'`]/
  );
  if (nameMatch) result.name = nameMatch[1];

  const urlMatch = content.match(
    /(?:url)\s*:\s*["'`](\/[^"'`]{1,200})["'`]/
  );
  if (urlMatch) result.url = urlMatch[1];

  const navIconMatch = content.match(
    /(?:navIcon)\s*:\s*["'`]([^"'`]{1,20})["'`]/
  );
  if (navIconMatch) result.navIcon = navIconMatch[1];

  const imageMatch = content.match(
    /image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/
  );
  if (imageMatch) result.image = imageMatch[1];

  const imageAltMatch = content.match(
    /imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/
  );
  if (imageAltMatch) result.imageAlt = imageAltMatch[1];

  const svgMatch = content.match(
    /svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/
  );
  if (svgMatch) result.svg = svgMatch[1];

  const iconMatch = content.match(
    /icon\s*:\s*["'`]([^"'`]{1,20})["'`]/
  );
  if (iconMatch) result.icon = iconMatch[1];

  const introLayoutMatch = content.match(
    /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
  );
  if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

  const introImagePositionMatch = content.match(
    /introImagePosition\s*:\s*["'`](left|right|top|bottom)["'`]/
  );
  if (introImagePositionMatch) result.introImagePosition = introImagePositionMatch[1];

  if (content.includes('"WebApplication"') || content.includes("'WebApplication'")) {
    result.schemaType = 'WebApplication';
  } else if (content.includes('"LearningResource"') || content.includes("'LearningResource'")) {
    result.schemaType = 'LearningResource';
  }

  return result;
}


/* ================================================================
   DYNAMIC ROUTE VIEW EXTRACTION
   ================================================================ */

/**
 * String-aware brace matching. `source[openIdx]` must be '{'. Returns
 * the index of the matching '}'. Braces inside single-quote,
 * double-quote, and template-literal strings do not count toward the
 * depth. Returns -1 if no match is found.
 */
function findClosingBrace(source, openIdx) {
  let depth = 0;
  let inString = null;
  let escape = false;

  for (let i = openIdx; i < source.length; i++) {
    const ch = source[i];

    if (escape) { escape = false; continue; }

    if (inString) {
      if (ch === '\\') escape = true;
      else if (ch === inString) inString = null;
      continue;
    }

    if (ch === '"' || ch === "'" || ch === '`') {
      inString = ch;
      continue;
    }

    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }

  return -1;
}

/**
 * Walk the text between the braces of a `viewConfig = { ... }` object
 * and pull out each top-level entry. Returns an array of `{ key,
 * block }` pairs where `block` is the raw text inside that entry's
 * own braces. Entries whose value isn't an object literal are
 * skipped — viewConfig is expected to map each view key to an
 * options object.
 */
function parseViewConfigBody(body) {
  const results = [];
  let i = 0;

  while (i < body.length) {
    while (i < body.length && /[\s,]/.test(body[i])) i++;
    if (i >= body.length) break;

    let key = null;

    if (body[i] === '"' || body[i] === "'" || body[i] === '`') {
      const quote = body[i];
      i++;
      const start = i;
      while (i < body.length && body[i] !== quote) {
        if (body[i] === '\\') i++;
        i++;
      }
      key = body.substring(start, i);
      if (i < body.length) i++;
    } else if (/[a-zA-Z_$]/.test(body[i])) {
      const start = i;
      while (i < body.length && /[\w$]/.test(body[i])) i++;
      key = body.substring(start, i);
    } else {
      break;
    }

    if (!key) break;

    while (i < body.length && /\s/.test(body[i])) i++;
    if (body[i] !== ':') break;
    i++;
    while (i < body.length && /\s/.test(body[i])) i++;

    if (body[i] !== '{') {
      // Non-object value — skip until the next top-level comma so we
      // can continue scanning for the next key.
      let depth = 0;
      let inStr = null;
      let esc = false;
      while (i < body.length) {
        const ch = body[i];
        if (esc) { esc = false; i++; continue; }
        if (inStr) {
          if (ch === '\\') esc = true;
          else if (ch === inStr) inStr = null;
          i++;
          continue;
        }
        if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; i++; continue; }
        if (ch === ',' && depth === 0) break;
        if (ch === '{' || ch === '[' || ch === '(') depth++;
        else if (ch === '}' || ch === ']' || ch === ')') depth--;
        i++;
      }
      continue;
    }

    const blockEnd = findClosingBrace(body, i);
    if (blockEnd === -1) break;

    const block = body.substring(i + 1, blockEnd);
    results.push({ key, block });

    i = blockEnd + 1;
  }

  return results;
}

/**
 * For a directory containing only a dynamic route file (e.g.
 * [view].jsx), extract one record per `viewConfig` entry. Each
 * record has the view's slug plus whichever metadata fields could
 * be pulled from its block.
 *
 * Returns [] if there's no dynamic file or no parseable viewConfig.
 */
function extractViewsFromDynamicRoute(directoryPath) {
  if (!fs.existsSync(directoryPath)) return [];

  let entries;
  try {
    entries = fs.readdirSync(directoryPath);
  } catch (e) {
    return [];
  }

  const dynamicFile = entries.find(f => DYNAMIC_ROUTE_RE.test(f));
  if (!dynamicFile) return [];

  let content;
  try {
    content = fs.readFileSync(path.join(directoryPath, dynamicFile), 'utf-8');
  } catch (e) {
    return [];
  }
  content = stripComments(content);

  const startMatch = content.match(/viewConfig\s*=\s*\{/);
  if (!startMatch) return [];

  const braceStart = startMatch.index + startMatch[0].length - 1;
  const braceEnd = findClosingBrace(content, braceStart);
  if (braceEnd === -1) return [];

  const viewConfigBody = content.substring(braceStart + 1, braceEnd);
  const rawEntries = parseViewConfigBody(viewConfigBody);

  return rawEntries.map(({ key, block }) => {
    const fields = { key };

    const titleMatch = block.match(/title\s*:\s*["'`]([^"'`]{5,500})["'`]/);
    if (titleMatch) fields.title = cleanTitle(titleMatch[1]);

    const descMatch = block.match(/description\s*:\s*["'`]([^"'`]{10,1000})["'`]/);
    if (descMatch) fields.description = descMatch[1];

    const hubDescMatch = block.match(/hubDescription\s*:\s*["'`]([^"'`]{10,2000})["'`]/);
    if (hubDescMatch) fields.hubDescription = hubDescMatch[1];

    const nameMatch = block.match(/name\s*:\s*["'`]([^"'`]{3,200})["'`]/);
    if (nameMatch) fields.name = nameMatch[1];

    const h1Match = block.match(/h1\s*:\s*["'`]([^"'`]{3,200})["'`]/);
    if (h1Match) fields.h1 = h1Match[1];

    const svgMatch = block.match(/svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
    if (svgMatch) fields.svg = svgMatch[1];

    const iconMatch = block.match(/icon\s*:\s*["'`]([^"'`]{1,20})["'`]/);
    if (iconMatch) fields.icon = iconMatch[1];

    const imageMatch = block.match(/image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/);
    if (imageMatch) fields.image = imageMatch[1];

    const imageAltMatch = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
    if (imageAltMatch) fields.imageAlt = imageAltMatch[1];

    return fields;
  });
}

/**
 * Build card records for a single child directory inside a tool/
 * subsection section. If the directory has a static index page, this
 * returns a one-element array with the hub card. If the directory is
 * a flattened-URL hub (only [view].jsx, no index), this returns one
 * card per viewConfig entry.
 */
function buildChildCards(parentRoute, childSlug) {
  const href = `${parentRoute}/${childSlug}`;
  const filePath = findPageFile(href);

  if (filePath) {
    const seo = extractSeoData(filePath);
    return [{
      title: seo.name || seo.title || slugToTitle(childSlug),
      description: seo.hubDescription || seo.description || null,
      href,
      image: seo.image || null,
      imageAlt: seo.imageAlt || null,
      svg: seo.svg || null,
      icon: seo.icon || null,
    }];
  }

  const childDir = path.join(getPagesDir(), parentRoute, childSlug);
  const views = extractViewsFromDynamicRoute(childDir);

  if (views.length > 0) {
    return views.map((view) => ({
      title: view.name || view.h1 || view.title || slugToTitle(view.key),
      description: view.hubDescription || view.description || null,
      href: `${href}/${view.key}`,
      image: view.image || null,
      imageAlt: view.imageAlt || null,
      svg: view.svg || null,
      icon: view.icon || null,
    }));
  }

  // Degraded fallback: directory was discovered (has a [*].jsx) but
  // no viewConfig pattern matched. Still show one card so the entry
  // is visible — the link will almost certainly 404, but the
  // discoverability is better than silent omission.
  return [{
    title: slugToTitle(childSlug),
    description: null,
    href,
    image: null,
    imageAlt: null,
    svg: null,
  }];
}


/* ================================================================
   SLUG UTILITIES
   ================================================================ */

function slugToTitle(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function classifySlug(slug) {
  return TYPE_MAP[slug] || 'subsection';
}

function getNavIcon(seo, typeOrSlug) {
  if (seo.navIcon) return seo.navIcon;
  return TYPE_ICONS[typeOrSlug] || TYPE_ICONS['subsection'];
}

function extractVisualProps(seo) {
  const props = {};
  if (seo.image) props.image = seo.image;
  if (seo.imageAlt) props.imageAlt = seo.imageAlt;
  if (seo.svg) props.svg = seo.svg;
  if (seo.icon) props.icon = seo.icon;
  if (seo.introLayout) props.introLayout = seo.introLayout;
  if (seo.introImagePosition) props.introImagePosition = seo.introImagePosition;
  return props;
}


/* ================================================================
   TYPE-SPECIFIC PROCESSORS
   ================================================================ */

async function processFormulas(parentSlug) {
  const modulePath = getDataModulePath(parentSlug, 'formulas');
  let formulasList;
  try {
    const mod = await import(modulePath);
    formulasList = mod.default;
  } catch (e) {
    console.warn(`buildSectionData: could not import formulas module at ${modulePath}:`, e.message);
    return { categories: [], items: [], totalCount: 0 };
  }
  const categoryMap = {};
  const items = [];
  formulasList.forEach((item) => {
    const catKey = item.category || 'uncategorized';
    const catName = item.categoryName || slugToTitle(catKey);
    if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
    categoryMap[catKey].count++;
    items.push({ title: item.title || item.name || '', formula: item.formula || item.latex || item.tex || '', category: catKey });
  });
  return { categories: Object.values(categoryMap), items, totalCount: items.length };
}

async function processDefinitions(parentSlug) {
  const modulePath = getDataModulePath(parentSlug, 'definitions');
  let defsList;
  try {
    const mod = await import(modulePath);
    defsList = mod.default;
  } catch (e) {
    console.warn(`buildSectionData: could not import definitions module at ${modulePath}:`, e.message);
    return { categories: [], items: [], totalCount: 0 };
  }
  const categoryMap = {};
  const items = [];
  defsList.forEach((item) => {
    const catKey = item.category || 'uncategorized';
    const catName = item.categoryName || slugToTitle(catKey);
    if (!categoryMap[catKey]) categoryMap[catKey] = { key: catKey, name: catName, count: 0 };
    categoryMap[catKey].count++;
    items.push({ title: item.title || item.term || item.name || '', description: item.description || item.definition || '', category: catKey });
  });
  return { categories: Object.values(categoryMap), items, totalCount: items.length };
}

function processToolSection(parentRoute, slug) {
  const toolRoute = `${parentRoute}/${slug}`;
  const childSlugs = getChildSlugs(toolRoute);
  const children = [];
  for (const childSlug of childSlugs) {
    children.push(...buildChildCards(toolRoute, childSlug));
  }
  return { children };
}

function processSubsection(parentRoute, slug) {
  const sectionRoute = `${parentRoute}/${slug}`;
  const childSlugs = getChildSlugs(sectionRoute);
  const children = [];

  for (const childSlug of childSlugs) {
    const cards = buildChildCards(sectionRoute, childSlug);
    // If the child resolved to multiple cards (flattened viewConfig
    // expansion), add them all flat — no grandchildren traversal,
    // since the cards already represent the leaf URLs.
    if (cards.length > 1) {
      children.push(...cards);
      continue;
    }

    const card = cards[0];
    // For single-card children, also look for grandchildren that
    // could populate the card's nested `children` list. Grandchildren
    // get the same flattened-expansion treatment via buildChildCards.
    const childHref = card.href;
    const grandchildSlugs = getChildSlugs(childHref);
    if (grandchildSlugs.length > 0) {
      const grandchildren = [];
      for (const gcSlug of grandchildSlugs) {
        const gcCards = buildChildCards(childHref, gcSlug);
        for (const gc of gcCards) {
          grandchildren.push({
            title: gc.title,
            description: gc.description,
            href: gc.href,
          });
        }
      }
      card.children = grandchildren;
    }
    children.push(card);
  }

  return { children };
}


/* ================================================================
   CUSTOM SECTIONS MERGE
   ================================================================ */

function validateCustomEntry(id, entry) {
  if (!entry || typeof entry !== 'object') {
    console.warn(`buildSectionData: customSections["${id}"] is not an object — skipped.`);
    return false;
  }
  const validModes = ['augment', 'replace', 'prose-only'];
  if (!validModes.includes(entry.mode)) {
    console.warn(`buildSectionData: customSections["${id}"].mode must be one of ${validModes.join(', ')} — got "${entry.mode}". Skipped.`);
    return false;
  }
  if (typeof entry.body !== 'string' || entry.body.trim().length === 0) {
    console.warn(`buildSectionData: customSections["${id}"].body must be a non-empty string — skipped.`);
    return false;
  }
  return true;
}

function applyCustomSections(sections, sectionData, customSections) {
  if (!customSections || typeof customSections !== 'object') return;

  const autoIds = new Set(sections.map((s) => s.id));

  for (const section of sections) {
    const entry = customSections[section.id];
    if (!entry) continue;
    if (!validateCustomEntry(section.id, entry)) continue;

    if (entry.mode === 'augment') {
      section.custom = {
        mode: 'augment',
        position: entry.position === 'after' ? 'after' : 'before',
        body: entry.body,
      };
    } else if (entry.mode === 'replace') {
      section.custom = {
        mode: 'replace',
        body: entry.body,
      };
    } else if (entry.mode === 'prose-only') {
      console.warn(
        `buildSectionData: customSections["${section.id}"] uses mode "prose-only" but a section with that id already exists from auto-discovery. Use mode "replace" instead — skipped.`
      );
    }
  }

  for (const [id, entry] of Object.entries(customSections)) {
    if (!entry || entry.mode !== 'prose-only') continue;
    if (autoIds.has(id)) continue;
    if (!validateCustomEntry(id, entry)) continue;

    const newSection = {
      id,
      title: entry.title || slugToTitle(id),
      type: 'prose-only',
      navIcon: entry.navIcon || TYPE_ICONS['prose-only'],
      link: entry.link || null,
      linkText: entry.linkText || null,
      custom: {
        mode: 'prose-only',
        body: entry.body,
      },
    };

    let insertIndex = sections.length;
    if (entry.insertAfter) {
      const idx = sections.findIndex((s) => s.id === entry.insertAfter);
      if (idx >= 0) insertIndex = idx + 1;
      else console.warn(`buildSectionData: insertAfter target "${entry.insertAfter}" not found for prose-only section "${id}". Appending at end.`);
    } else if (entry.insertBefore) {
      const idx = sections.findIndex((s) => s.id === entry.insertBefore);
      if (idx >= 0) insertIndex = idx;
      else console.warn(`buildSectionData: insertBefore target "${entry.insertBefore}" not found for prose-only section "${id}". Appending at end.`);
    }
    sections.splice(insertIndex, 0, newSection);
    sectionData[id] = {};
  }
}


/* ================================================================
   MAIN ENTRY POINT
   ================================================================ */

export async function buildSectionData(sectionRoute, options = {}) {
  const { customSections = {} } = options;

  const parentSlug = sectionRoute.replace(/^\//, '').split('/')[0];
  const childSlugs = getChildSlugs(sectionRoute);
  const sections = [];
  const sectionData = {};

  for (const slug of childSlugs) {
    const type = classifySlug(slug);
    const childRoute = `${sectionRoute}/${slug}`;
    const filePath = findPageFile(childRoute);
    const seo = extractSeoData(filePath);
    const visualProps = extractVisualProps(seo);

    if (type === 'formulas') {
      const data = await processFormulas(parentSlug);
      sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
      sectionData[slug] = data;
    } else if (type === 'definitions') {
      const data = await processDefinitions(parentSlug);
      sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.hubDescription || seo.description || null, ...visualProps });
      sectionData[slug] = data;
    } else if (type === 'calculators') {
      const data = processToolSection(sectionRoute, slug);
      sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.hubDescription || seo.description || null, ...visualProps });
      sectionData[slug] = data;
    } else if (type === 'visual-tools') {
      const data = processToolSection(sectionRoute, slug);
      sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.hubDescription || seo.description || null, ...visualProps });
      sectionData[slug] = data;
    } else {
      const data = processSubsection(sectionRoute, slug);
      sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.hubDescription || seo.description || null, ...visualProps });
      sectionData[slug] = data;
    }
  }

  sections.sort((a, b) => (TYPE_ORDER[a.type] ?? 5) - (TYPE_ORDER[b.type] ?? 5));

  applyCustomSections(sections, sectionData, customSections);

  return { sections, sectionData };
}

export default buildSectionData;