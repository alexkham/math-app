// Line 3 — resolves a tool's `relatedTools` records into what a page needs to
// render the "Related tools" strip.
//
// SERVER ONLY. Import this from getStaticProps, never from component code:
// it reads visual-tools-registry.json, which is ~370 KB and must not reach the
// browser bundle. The page receives a short plain array as a prop instead.
//
// The registry is the single source of truth; this file adds no data of its
// own. A record's `key` is resolved against `tools`, and the URL is derived
// from the target's `pagePath` - most are file paths under pages/, a few older
// sections store a URL directly, and both shapes are handled.

import registry from '../api/db/repositories/visual-tools-registry.json';

export function urlFromPagePath(pagePath) {
  if (!pagePath) return null;
  if (!pagePath.startsWith('pages/')) return pagePath; // already a URL
  // A dynamic-route tool (…/[view].jsx) is reached through its landing page,
  // the index.jsx in the same folder (2026-09-23).
  return '/' + pagePath.replace(/^pages\//, '').replace(/\/index\.jsx$/, '').replace(/\/\[view\]\.jsx$/, '');
}

/**
 * @param {string} key registry key of the CURRENT tool, e.g. 'linear-algebra-matrix-rank'
 * @returns {Array<{key:string,name:string,url:string,surface:string}>}
 */
export function getRelatedTools(key) {
  const self = registry.tools[key];
  if (!self || !Array.isArray(self.relatedTools)) return [];

  const out = [];
  const seen = new Set();
  for (const rec of self.relatedTools) {
    if (rec.status === 'dropped') continue;
    const target = registry.tools[rec.key];
    if (!target || rec.key === key || seen.has(rec.key)) continue;
    const url = urlFromPagePath(target.pagePath);
    if (!url) continue;
    seen.add(rec.key);
    out.push({
      key: rec.key,
      name: target.name || target.slug,
      url,
      surface: rec.surface || target.name || target.slug,
    });
  }
  return out;
}

export default getRelatedTools;
