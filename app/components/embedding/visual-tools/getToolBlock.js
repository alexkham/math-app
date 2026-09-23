// getToolBlock — builds the props for <ToolBlock> from the tool registry.
//
// SERVER ONLY. Import from getStaticProps, never from component code: it reads
// visual-tools-registry.json (~370 KB), which must not reach the browser. The
// page receives a small plain object and passes it down as props, so the
// tool's name, URL, related links and SVGs are in the static HTML.
//
// The registry is the single source of truth; nothing here adds data. Related
// links come from getRelatedTools (the existing Line 3 helper) unless the
// caller overrides them.

import registry from '@/app/api/db/repositories/visual-tools-registry.json';
import { getRelatedTools, urlFromPagePath } from '@/app/utils/getRelatedTools';

// Read a possibly nested key ('quadrants.q1') from a diagrams module export.
function pick(obj, key) {
  return String(key).split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

/**
 * Turn a diagrams module export ({ key: svg }) plus a list of picks into the
 * `states` array ToolBlock / StatePlayer consume.
 *
 * @param {object} diagrams   default export of a `<tool>Diagrams.js` module
 * @param {Array<string|{key:string,label?:string,caption?:string}>} picks
 * @returns {Array<{key:string,label:string,svg:string,caption?:string}>}
 */
export function buildStates(diagrams, picks = []) {
  const out = [];
  for (const p of picks) {
    const rec = typeof p === 'string' ? { key: p } : p;
    const svg = pick(diagrams, rec.key);
    if (typeof svg !== 'string' || !svg) continue;
    out.push({ key: rec.key, label: rec.label || rec.key, svg, ...(rec.caption ? { caption: rec.caption } : {}) });
  }
  return out;
}

/**
 * @param {string} key  registry key of the tool being embedded, e.g. 'calculus-tangent-line'
 * @param {object} [o]
 * @param {object} [o.diagrams]  the tool's diagrams module export
 * @param {Array}  [o.states]    picks for buildStates; ignored without `diagrams`
 * @param {'registry'|Array<string>|Array<{name:string,url:string}>|false} [o.related='registry']
 * @returns {{key:string,name:string,url:string|null,related:Array,states:Array}}
 */
export function getToolBlock(key, o = {}) {
  const tool = registry.tools[key];
  if (!tool) return { key, name: null, url: null, related: [], states: [] };

  let related = [];
  const r = o.related === undefined ? 'registry' : o.related;
  if (r === 'registry') {
    related = getRelatedTools(key);
  } else if (Array.isArray(r)) {
    for (const item of r) {
      if (typeof item === 'string') {
        const t = registry.tools[item];
        const url = t && urlFromPagePath(t.pagePath);
        if (t && url) related.push({ key: item, name: t.name || t.slug, url });
      } else if (item && item.url) {
        related.push(item);
      }
    }
  }

  const states = o.diagrams ? buildStates(o.diagrams, o.states || Object.keys(o.diagrams)) : [];

  return {
    key,
    name: tool.name || tool.slug,
    url: urlFromPagePath(tool.pagePath),
    related,
    states,
  };
}

export default getToolBlock;
