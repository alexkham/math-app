
// /**
//  * buildToolIndexData — v5
//  *
//  * Change from v4:
//  *   - stripComments no longer treats the `//` inside a URL (e.g.
//  *     xmlns="http://www.w3.org/2000/svg") as a line comment. Single-line
//  *     SVG strings were being truncated at `http://`, which deleted the
//  *     closing </svg> and made the svg extractor fail → svg:null on every
//  *     leaf. The line-comment pass now skips `://`.
//  *
//  * Walks `pages/<route>/**` recursively and returns a FLAT list of leaves.
//  * Grouping is no longer derived from URL hierarchy; it comes from
//  * `category` / `subCategory` fields the leaf declares in its seoData.
//  *
//  * Returns:
//  *   { items: [
//  *       {
//  *         title, description, shortDescription, href,
//  *         image, imageAlt, svg, icon, formula,
//  *         category, subCategory, cardVariant
//  *       }, ...
//  *     ]
//  *   }
//  *
//  * Leaf detection:
//  *   - A directory with an index file = one leaf.
//  *   - A directory with [view].jsx (dynamic route) = N leaves, one per
//  *     view declared in getStaticPaths + viewConfig.
//  *   - Directories with both an index AND nested-page subdirectories:
//  *     the index is one leaf, and the subdirectories are also walked
//  *     (so each tool page becomes its own leaf regardless of nesting).
//  *   - Directories with NO index file are pure containers — only walked.
//  *
//  * Field extraction:
//  *   - `seoData` block scanned for: title, description, hubDescription,
//  *     name, url, image, imageAlt, svg, icon, formula, label, category,
//  *     subCategory, cardVariant.
//  *   - The same extractor runs against each viewConfig sub-block for
//  *     [view].jsx files.
//  *   - `description` prefers hubDescription, falls back to seoData.description.
//  *   - `shortDescription` is always seoData.description (≤160 chars).
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

// function findIndexFile(absDir) {
//   const candidates = ['index.js', 'index.jsx', 'index.ts', 'index.tsx'];
//   for (const c of candidates) {
//     const full = path.join(absDir, c);
//     if (fs.existsSync(full)) return full;
//   }
//   return null;
// }

// function findViewFile(absDir) {
//   const candidates = ['[view].js', '[view].jsx', '[view].ts', '[view].tsx'];
//   for (const c of candidates) {
//     const full = path.join(absDir, c);
//     if (fs.existsSync(full)) return full;
//   }
//   return null;
// }

// function listSubdirs(absDir) {
//   if (!fs.existsSync(absDir)) return [];
//   return fs.readdirSync(absDir).filter((entry) => {
//     if (entry.startsWith('_') || entry.startsWith('[') || entry.startsWith('.')) return false;
//     const full = path.join(absDir, entry);
//     return fs.statSync(full).isDirectory();
//   });
// }


// /* ================================================================
//    TEXT UTILITIES
//    ================================================================ */

// function stripComments(src) {
//   // Block comments first.
//   let out = src.replace(/\/\*[\s\S]*?\*\//g, '');
//   // Line comments — but do NOT match the `//` inside a URL scheme (://).
//   // The captured leading char (start-of-line or any non-colon char) is kept;
//   // everything from `//` to end of line is removed.
//   out = out.replace(/(^|[^:])\/\/.*$/gm, '$1');
//   return out;
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
//   return String(slug).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
// }

// function ensureLeadingSlash(p) {
//   if (!p) return p;
//   return '/' + String(p).replace(/^\/+/, '');
// }


// /* ================================================================
//    FIELD EXTRACTION (block of code containing seoData / viewConfig)
//    ================================================================ */

// function extractFields(block) {
//   const result = {};

//   // title (prefer seoData.title)
//   const seoTitle = block.match(
//     /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
//   );
//   if (seoTitle) result.title = cleanTitle(seoTitle[1]);
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

//   const img = block.match(/(?:^|\W)image\s*:\s*["'`]([^"'`]{3,300})["'`]/);
//   if (img) result.image = img[1];

//   const imgAlt = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
//   if (imgAlt) result.imageAlt = imgAlt[1];

//   const svg = block.match(/(?:^|\W)svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
//   if (svg) result.svg = svg[1];

//   const icon = block.match(/(?:^|\W)icon\s*:\s*["'`]([^"'`]{1,80})["'`]/);
//   if (icon) result.icon = icon[1];

//   const formula = block.match(/(?:^|\W)formula\s*:\s*["'`]([^"'`]{1,200})["'`]/);
//   if (formula) result.formula = formula[1];

//   const label = block.match(/(?:^|\W)label\s*:\s*["'`]([^"'`]{1,80})["'`]/);
//   if (label) result.label = label[1];

//   // Taxonomy fields
//   const category = block.match(/(?:^|\W)category\s*:\s*["'`]([^"'`]{1,120})["'`]/);
//   if (category) result.category = category[1];

//   const subCategory = block.match(/(?:^|\W)subCategory\s*:\s*["'`]([^"'`]{1,120})["'`]/);
//   if (subCategory) result.subCategory = subCategory[1];

//   const cardVariant = block.match(/(?:^|\W)cardVariant\s*:\s*["'`]([^"'`]{1,20})["'`]/);
//   if (cardVariant) result.cardVariant = cardVariant[1];

//   return result;
// }

// function extractFieldsFromFile(filePath) {
//   if (!filePath) return {};
//   let content;
//   try { content = fs.readFileSync(filePath, 'utf-8'); }
//   catch (e) { return {}; }
//   return extractFields(stripComments(content));
// }


// /* ================================================================
//    LEAF FACTORY — turn raw extracted fields into a normalized leaf
//    ================================================================ */

// function buildLeaf({ slug, route, fields }) {
//   const title = fields.name || fields.title || slugToTitle(slug);
//   return {
//     title,
//     description: fields.hubDescription || fields.description || null,
//     shortDescription: fields.description || null,
//     href: ensureLeadingSlash(fields.url || route),
//     image: fields.image || null,
//     imageAlt: fields.imageAlt || null,
//     svg: fields.svg || null,
//     icon: fields.icon || null,
//     formula: fields.formula || null,
//     category: fields.category || null,
//     subCategory: fields.subCategory || null,
//     cardVariant: fields.cardVariant || null,
//   };
// }


// /* ================================================================
//    [view].jsx — extract one leaf per declared view
//    ================================================================ */

// function extractViewLeaves(viewFilePath, parentRoute) {
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

//   // Find each slug's viewConfig sub-block boundary.
//   const slugStarts = {};
//   for (const slug of slugs) {
//     const re = new RegExp(`["'\`]${escapeRegex(slug)}["'\`]\\s*:\\s*\\{`);
//     const mm = content.match(re);
//     slugStarts[slug] = mm ? mm.index + mm[0].length : -1;
//   }

//   const leaves = [];
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
//     leaves.push(buildLeaf({
//       slug,
//       route: `${parentRoute}/${slug}`,
//       fields,
//     }));
//   }
//   return leaves;
// }


// /* ================================================================
//    RECURSIVE WALK
//    ================================================================ */

// function walk(absDir, route, out) {
//   const indexFile = findIndexFile(absDir);
//   const viewFile = findViewFile(absDir);
//   const subdirs = listSubdirs(absDir);

//   // 1. [view].jsx → multiple leaves (one per view)
//   if (viewFile) {
//     const viewLeaves = extractViewLeaves(viewFile, route);
//     out.push(...viewLeaves);
//   }

//   // 2. plain index → one leaf for this folder.
//   //    Only emit when it's a real tool page (no [view].jsx, OR
//   //    the folder has both a hub-style index and views — in that case
//   //    the views are the actual tools and we skip the hub).
//   if (indexFile && !viewFile) {
//     const fields = extractFieldsFromFile(indexFile);
//     // Accept ALL leaves; component decides if missing fields → standalone.
//     const slug = path.basename(absDir);
//     out.push(buildLeaf({ slug, route, fields }));
//   }

//   // 3. recurse into subfolders regardless — flat URLs may still have
//   //    nested folders for organizational reasons.
//   for (const sub of subdirs) {
//     walk(path.join(absDir, sub), `${route}/${sub}`, out);
//   }
// }


// /* ================================================================
//    MAIN
//    ================================================================ */

// export async function buildToolIndexData(route) {
//   const root = path.join(getPagesDir(), route);
//   if (!fs.existsSync(root)) return { items: [] };

//   const items = [];
//   // Don't emit the route itself as a leaf (it's the hub page rendering this list).
//   for (const sub of listSubdirs(root)) {
//     walk(path.join(root, sub), `${route}/${sub}`, items);
//   }
//   return { items };
// }

// export default buildToolIndexData;


/**
 * buildToolIndexData — v6
 *
 * Change from v5:
 *   - New `skip` option. Pass an array of folder names to ignore at the
 *     index.jsx level while still descending into them. Example:
 *
 *       buildToolIndexData('algebra/calculators', { skip: ['sequences'] })
 *
 *     This emits leaves for every page under sequences/ (including the
 *     ones produced by sequences/[view].jsx) but does NOT emit
 *     sequences/index.jsx as a tool tile of its own. The skip is matched
 *     by directory basename, anywhere in the tree.
 *
 * Change from v4:
 *   - stripComments no longer treats the `//` inside a URL (e.g.
 *     xmlns="http://www.w3.org/2000/svg") as a line comment.
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
 *   - A directory with an index file = one leaf (unless its name is in `skip`).
 *   - A directory with [view].jsx (dynamic route) = N leaves, one per
 *     view declared in getStaticPaths + viewConfig. Views inside skipped
 *     folders are still emitted — skip only suppresses the folder's own
 *     index.jsx, not the views or descendants.
 *   - Directories with both an index AND nested-page subdirectories:
 *     the index is one leaf, and the subdirectories are also walked.
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
  // Block comments first.
  let out = src.replace(/\/\*[\s\S]*?\*\//g, '');
  // Line comments — but do NOT match the `//` inside a URL scheme (://).
  // The captured leading char (start-of-line or any non-colon char) is kept;
  // everything from `//` to end of line is removed.
  out = out.replace(/(^|[^:])\/\/.*$/gm, '$1');
  return out;
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

  // Taxonomy fields
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

function walk(absDir, route, out, skip) {
  const indexFile = findIndexFile(absDir);
  const viewFile = findViewFile(absDir);
  const subdirs = listSubdirs(absDir);
  const basename = path.basename(absDir);
  const isSkipped = skip.has(basename);

  // 1. [view].jsx → multiple leaves (one per view)
  //    Views are emitted even from skipped folders. Skip only suppresses
  //    the folder's own index.jsx as a hub-level leaf.
  if (viewFile) {
    const viewLeaves = extractViewLeaves(viewFile, route);
    out.push(...viewLeaves);
  }

  // 2. plain index → one leaf for this folder.
  //    Suppressed when the folder is in `skip`, or when there is also a
  //    [view].jsx in this folder (then the views are the actual tools).
  if (indexFile && !viewFile && !isSkipped) {
    const fields = extractFieldsFromFile(indexFile);
    const slug = basename;
    out.push(buildLeaf({ slug, route, fields }));
  }

  // 3. Recurse into subfolders regardless of whether this folder was
  //    skipped — skip is per-folder, not subtree-wide.
  for (const sub of subdirs) {
    walk(path.join(absDir, sub), `${route}/${sub}`, out, skip);
  }
}


/* ================================================================
   MAIN
   ================================================================ */

export async function buildToolIndexData(route, options = {}) {
  const skip = new Set(Array.isArray(options.skip) ? options.skip : []);

  const root = path.join(getPagesDir(), route);
  if (!fs.existsSync(root)) return { items: [] };

  const items = [];
  // Don't emit the root route itself as a leaf (it's the hub page rendering this list).
  for (const sub of listSubdirs(root)) {
    walk(path.join(root, sub), `${route}/${sub}`, items, skip);
  }
  return { items };
}

export default buildToolIndexData;