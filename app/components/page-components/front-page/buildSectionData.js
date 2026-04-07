

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
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'formulas', link: childRoute, navIcon: getNavIcon(seo, 'formulas'), introContent: seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'definitions') {
//       const data = await processDefinitions(parentSlug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'definitions', link: childRoute, navIcon: getNavIcon(seo, 'definitions'), introContent: seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'calculators') {
//       const data = processToolSection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'calculators', link: childRoute, navIcon: getNavIcon(seo, 'calculators'), content: seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else if (type === 'visual-tools') {
//       const data = processToolSection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'visual-tools', link: childRoute, navIcon: getNavIcon(seo, 'visual-tools'), content: seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     } else {
//       const data = processSubsection(sectionRoute, slug);
//       sections.push({ id: slug, title: seo.name || seo.title || slugToTitle(slug), type: 'subsection', link: childRoute, navIcon: getNavIcon(seo, 'subsection'), content: seo.description || null, ...visualProps });
//       sectionData[slug] = data;
//     }
//   }

//   return { sections, sectionData };
// }

// export default buildSectionData;



/**
 * buildSectionData
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
};

function getDataModulePath(parentSlug, type) {
  const capitalized = type.charAt(0).toUpperCase() + type.slice(1);
  return `@/app/api/db/${type}/${parentSlug}/${parentSlug}${capitalized}`;
}


/* ================================================================
   FILESYSTEM UTILITIES
   ================================================================ */

function getPagesDir() {
  return path.join(process.cwd(), 'pages');
}

function getChildSlugs(parentRoute) {
  const dir = path.join(getPagesDir(), parentRoute);
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir).filter((entry) => {
    if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      return ['index.js', 'index.jsx', 'index.ts', 'index.tsx'].some(
        (f) => fs.existsSync(path.join(full, f))
      );
    }
    if (stat.isFile()) {
      const ext = path.extname(entry);
      const name = path.basename(entry, ext);
      if (!['.js', '.jsx', '.ts', '.tsx'].includes(ext)) return false;
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

function stripComments(source) {
  let result = source.replace(/\/\/.*$/gm, '');
  result = result.replace(/\/\*[\s\S]*?\*\//g, '');
  return result;
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

  // Layout for intro block: 'horizontal' (default) or 'vertical'
  const introLayoutMatch = content.match(
    /introLayout\s*:\s*["'`](horizontal|vertical)["'`]/
  );
  if (introLayoutMatch) result.introLayout = introLayoutMatch[1];

  // Image position: 'right' (default), 'left', 'top', 'bottom'
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
  const children = childSlugs.map((childSlug) => {
    const href = `${toolRoute}/${childSlug}`;
    const filePath = findPageFile(href);
    const seo = extractSeoData(filePath);
    return { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
  });
  return { children };
}

function processSubsection(parentRoute, slug) {
  const sectionRoute = `${parentRoute}/${slug}`;
  const childSlugs = getChildSlugs(sectionRoute);
  const children = childSlugs.map((childSlug) => {
    const href = `${sectionRoute}/${childSlug}`;
    const filePath = findPageFile(href);
    const seo = extractSeoData(filePath);
    const child = { title: seo.name || seo.title || slugToTitle(childSlug), description: seo.description || null, href, image: seo.image || null, imageAlt: seo.imageAlt || null, svg: seo.svg || null };
    const grandchildSlugs = getChildSlugs(href);
    if (grandchildSlugs.length > 0) {
      child.children = grandchildSlugs.map((gcSlug) => {
        const gcHref = `${href}/${gcSlug}`;
        const gcFile = findPageFile(gcHref);
        const gcSeo = extractSeoData(gcFile);
        return { title: gcSeo.name || gcSeo.title || slugToTitle(gcSlug), description: gcSeo.description || null, href: gcHref };
      });
    }
    return child;
  });
  return { children };
}


/* ================================================================
   MAIN ENTRY POINT
   ================================================================ */

export async function buildSectionData(sectionRoute) {
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

  return { sections, sectionData };
}

export default buildSectionData;