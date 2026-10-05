/**
 * navigate.js: open a site URL from inside the search dialog.
 *
 * Extracted from SearchPalette.open() (2026-10-05) so that search results, links inside
 * Ask AI answers and source chips all navigate the same way.
 *
 *   navigateToUrl(url, { router, currentPath, closeSearch, fullPageNavigation })
 *
 *   - URL with a #hash on the current page: close the dialog, scroll smoothly to the anchor
 *     after 60 ms and replace the address bar entry. No navigation.
 *   - Otherwise: close the dialog, then router.push(url). With fullPageNavigation (the
 *     App Router mount in app/layout.js) window.location.assign(url) instead, because the
 *     App Router cannot client-navigate into Pages Router routes.
 *
 *   splitUrl(url)          → { pathname, hash }
 *   isModifiedClick(event) → true for Ctrl/Cmd/Shift/Alt-click and middle click (let the browser open a tab)
 */

export function splitUrl(url) {
  const text = String(url || '');
  const hashAt = text.indexOf('#');
  const withoutHash = hashAt === -1 ? text : text.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : text.slice(hashAt);
  return { pathname: withoutHash.split('?')[0], hash };
}

export function isModifiedClick(event) {
  if (!event) return false;
  return !!(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button === 1);
}

export function navigateToUrl(url, { router, currentPath, closeSearch, fullPageNavigation = false } = {}) {
  if (!url) return;
  const { pathname, hash } = splitUrl(url);
  const here = currentPath || (typeof window !== 'undefined' ? window.location.pathname : '');
  if (typeof closeSearch === 'function') closeSearch();
  if (hash && pathname === here) {
    window.setTimeout(() => {
      const id = decodeURIComponent(hash.slice(1));
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (window.history && window.history.replaceState) window.history.replaceState(null, '', url);
    }, 60);
    return;
  }
  if (fullPageNavigation || !router || typeof router.push !== 'function') {
    window.location.assign(url);
    return;
  }
  router.push(url);
}
