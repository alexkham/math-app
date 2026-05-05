/**
 * buildToolIndexData
 *
 * For tool-index pages like /algebra/visual-tools, /algebra/calculators, etc.
 * Scans direct children. For children that have a [view].jsx dynamic route,
 * also extracts the list of views from getStaticPaths + per-view metadata
 * from the viewConfig object.
 *
 * Returns:
 * {
 *   children: [
 *     {
 *       title, description, shortDescription, href,
 *       image, imageAlt, svg,
 *       hasViews: boolean,
 *       views: [
 *         { title, description, shortDescription, href, formula?, label?, image?, svg? },
 *         ...
 *       ]
 *     },
 *     ...
 *   ]
 * }
 *
 * `description` prefers hubDescription (long form) and falls back to seoData.description.
 * `shortDescription` is always seoData.description (the ≤160-char meta-tag form).
 *
 * For viewConfig blocks, supports optional `formula` and `label` fields so view
 * cards (like the algebraic identity cards) can render a math expression + caption.
 */

import fs from 'fs';
import path from 'path';


/* ================================================================
   FILESYSTEM
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

function findIndexFile(route) {
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
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return null;
}

function findViewFile(route) {
  const pagesDir = getPagesDir();
  const candidates = [
    path.join(pagesDir, route, '[view].js'),
    path.join(pagesDir, route, '[view].jsx'),
    path.join(pagesDir, route, '[view].ts'),
    path.join(pagesDir, route, '[view].tsx'),
  ];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return null;
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
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}


/* ================================================================
   FIELD EXTRACTION (works on a text block: full file or a slug's
   viewConfig sub-block)
   ================================================================ */

function extractFields(block) {
  const result = {};

  const titleMatch = block.match(
    /(?:seoData|seo)\s*[:{]\s*[^}]*?title\s*:\s*["'`]([^"'`]{5,200})["'`]/s
  );
  if (titleMatch) result.title = cleanTitle(titleMatch[1]);

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

  const img = block.match(/(?:^|\W)image\s*:\s*["'`](\/[^"'`]{3,200})["'`]/);
  if (img) result.image = img[1];

  const imgAlt = block.match(/imageAlt\s*:\s*["'`]([^"'`]{3,200})["'`]/);
  if (imgAlt) result.imageAlt = imgAlt[1];

  const svg = block.match(/(?:^|\W)svg\s*:\s*["'`](<svg[\s\S]*?<\/svg>)["'`]/);
  if (svg) result.svg = svg[1];

  const formula = block.match(/(?:^|\W)formula\s*:\s*["'`]([^"'`]{1,120})["'`]/);
  if (formula) result.formula = formula[1];

  const label = block.match(/(?:^|\W)label\s*:\s*["'`]([^"'`]{1,80})["'`]/);
  if (label) result.label = label[1];

  return result;
}

function extractSeoFromFile(filePath) {
  if (!filePath) return {};
  let content;
  try { content = fs.readFileSync(filePath, 'utf-8'); }
  catch (e) { return {}; }
  return extractFields(stripComments(content));
}


/* ================================================================
   DYNAMIC ROUTE: [view].jsx
   ================================================================ */

function extractViews(viewFilePath, parentRoute) {
  let content;
  try { content = fs.readFileSync(viewFilePath, 'utf-8'); }
  catch (e) { return []; }
  content = stripComments(content);

  // 1. Collect view slugs from getStaticPaths
  const slugs = [];
  const pathsRe = /\{\s*params\s*:\s*\{\s*view\s*:\s*["'`]([^"'`]+)["'`]/g;
  let m;
  while ((m = pathsRe.exec(content)) !== null) {
    if (!slugs.includes(m[1])) slugs.push(m[1]);
  }
  if (slugs.length === 0) return [];

  // 2. For each slug, isolate its viewConfig sub-block then extract fields.
  //    Block end = start of the next known slug's block, or EOF.
  const slugStarts = {};
  for (const slug of slugs) {
    const re = new RegExp(`["'\`]${escapeRegex(slug)}["'\`]\\s*:\\s*\\{`);
    const mm = content.match(re);
    slugStarts[slug] = mm ? mm.index + mm[0].length : -1;
  }

  const views = [];
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

    views.push({
      title: fields.name || fields.title || slugToTitle(slug),
      description: fields.hubDescription || fields.description || null,
      shortDescription: fields.description || null,
      href: fields.url || `${parentRoute}/${slug}`,
      image: fields.image || null,
      imageAlt: fields.imageAlt || null,
      svg: fields.svg || null,
      formula: fields.formula || null,
      label: fields.label || null,
    });
  }

  return views;
}


/* ================================================================
   MAIN
   ================================================================ */

export async function buildToolIndexData(route) {
  const childSlugs = getChildSlugs(route);
  const children = [];

  for (const slug of childSlugs) {
    const childRoute = `${route}/${slug}`;
    const indexFile = findIndexFile(childRoute);
    const viewFile = findViewFile(childRoute);
    const seo = extractSeoFromFile(indexFile);

    const card = {
      title: seo.name || seo.title || slugToTitle(slug),
      description: seo.hubDescription || seo.description || null,
      shortDescription: seo.description || null,
      href: childRoute,
      image: seo.image || null,
      imageAlt: seo.imageAlt || null,
      svg: seo.svg || null,
      hasViews: false,
      views: [],
    };

    if (viewFile) {
      const views = extractViews(viewFile, childRoute);
      if (views.length > 0) {
        card.hasViews = true;
        card.views = views;
      }
    }

    children.push(card);
  }

  return { children };
}

export default buildToolIndexData;