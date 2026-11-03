// check-sister-links.mjs
//
// Checks every link from this site to linearalgebranotes.com and calculatematrix.com
// against a snapshot of their pages and anchors (app/api/db/external/sister-sites.json).
// Run: npm run check-links
//
// Scans live code only (lines starting with // are skipped) in pages/ and app/, and fails when a link
//   - points to a page that is not in the snapshot,
//   - points to an #anchor that page does not have,
//   - is not https, uses a www. host, or carries a query string.
// Links are found as markdown [text](url) and as plain "url" strings in code.
//
// The snapshot goes stale when either site adds, renames or removes pages or sections:
// a failure here means either a real broken link or a stale snapshot — rebuild the
// two sites and refresh the snapshot before changing the link.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SNAPSHOT = path.join(ROOT, 'app/api/db/external/sister-sites.json');
const HOSTS = ['linearalgebranotes.com', 'calculatematrix.com'];
const URL_RE = /https?:\/\/(?:www\.)?(?:linearalgebranotes|calculatematrix)\.com[^\s)"'`<>\]]*/g;

const snapshot = JSON.parse(fs.readFileSync(SNAPSHOT, 'utf8'));
const pages = {};
for (const host of HOSTS) {
  for (const [url, anchors] of Object.entries(snapshot[host] || {})) pages[url] = new Set(anchors);
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(jsx?|mjs|json)$/.test(name) && p !== SNAPSHOT) out.push(p);
  }
  return out;
}

const errors = [];
let total = 0;
const files = [...walk(path.join(ROOT, 'pages')), ...walk(path.join(ROOT, 'app'))];

for (const file of files) {
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    if (line.trimStart().startsWith('//')) return;
    for (const raw of line.match(URL_RE) || []) {
      const url = raw.replace(/[.,;:]+$/, '');
      const where = `${path.relative(ROOT, file)}:${i + 1}`;
      total += 1;
      if (!url.startsWith('https://')) { errors.push(`${where}: not https: ${url}`); continue; }
      if (url.includes('://www.')) { errors.push(`${where}: www. host (use the bare domain): ${url}`); continue; }
      if (url.includes('?')) { errors.push(`${where}: query string: ${url}`); continue; }
      const [base, anchor] = url.split('#');
      const page = base.replace(/\/$/, '') || base;
      const host = HOSTS.find((h) => page === `https://${h}`);
      if (host) continue; // a link to the home page
      if (!pages[page]) { errors.push(`${where}: page not on the site: ${page}`); continue; }
      if (anchor && !pages[page].has(anchor)) errors.push(`${where}: #${anchor} not on ${page}`);
    }
  });
}

console.log(`check-sister-links: ${total} link(s) to linearalgebranotes.com and calculatematrix.com in ${files.length} files.`);
if (errors.length) {
  console.error(`\n${errors.length} broken link(s):`);
  errors.forEach((e) => console.error(`  ${e}`));
  process.exit(1);
}
console.log('No broken links.');
