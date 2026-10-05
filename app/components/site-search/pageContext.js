/**
 * pageContext.js: what "this page" means for Ask AI. No React.
 *
 *   currentPagePath(pathname)   '/probability/covariance' from usePathname(): no query, no hash,
 *                               no trailing slash (except '/'). '' when there is no usable path.
 *   currentPageTitle(pathname)  document.title with the site suffix removed (split on ' | ' and
 *                               ' - Learn', keep the first part), else the last path segment
 *                               humanised ('linear-algebra' → 'Linear Algebra'), else the path.
 *
 * The palette already reads the location with usePathname() from next/navigation (it works under
 * both routers), so the path is passed in rather than read from next/router.
 */

export function currentPagePath(pathname) {
  let path = String(pathname || '');
  if (!path && typeof window !== 'undefined') path = window.location.pathname || '';
  path = path.split('#')[0].split('?')[0];
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path.startsWith('/') ? path : '';
}

function humanise(segment) {
  let text = segment;
  try { text = decodeURIComponent(segment); } catch { /* keep as is */ }
  return text.replace(/[-_]+/g, ' ').trim().replace(/\b\w/g, (c) => c.toUpperCase());
}

export function currentPageTitle(pathname) {
  const path = currentPagePath(pathname);
  if (typeof document !== 'undefined') {
    const raw = String(document.title || '');
    const cut = raw.split(' | ')[0].split(' - Learn')[0].trim();
    if (cut) return cut;
  }
  const last = path.split('/').filter(Boolean).pop();
  if (last) return humanise(last);
  return path;
}
