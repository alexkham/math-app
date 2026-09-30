'use client';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

/**
 * SearchProvider: one piece of state for the whole site search.
 *
 *   isOpen                the palette is showing
 *   initialQuery          text the palette starts with (from openSearch)
 *   openCount             increments on every open; the palette uses it to reset itself
 *   openSearch(query='')  open the palette, optionally prefilled
 *   closeSearch()         close it
 *
 * Also owns the global Ctrl+K / Cmd+K toggle, the body scroll lock while open,
 * and returning focus to the element that opened the palette.
 */

const SearchContext = createContext(null);

/** Attribute the palette puts on its own input so Ctrl+K still works there. */
export const SEARCH_INPUT_ATTR = 'data-lmc-search-input';

const NOOP_CONTEXT = {
  isOpen: false,
  initialQuery: '',
  openCount: 0,
  openSearch: () => {},
  closeSearch: () => {},
};

function isTypingElsewhere(target) {
  if (!target || !target.tagName) return false;
  if (typeof target.getAttribute === 'function' && target.getAttribute(SEARCH_INPUT_ATTR) !== null) return false;
  const tag = target.tagName.toLowerCase();
  return tag === 'input' || tag === 'textarea' || tag === 'select' || target.isContentEditable === true;
}

export function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState('');
  const [openCount, setOpenCount] = useState(0);
  const openerRef = useRef(null);

  const openSearch = useCallback((query = '') => {
    if (typeof document !== 'undefined') openerRef.current = document.activeElement;
    setInitialQuery(typeof query === 'string' ? query : '');
    setOpenCount((count) => count + 1);
    setIsOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Body scroll lock while open; focus returns to the opener on close.
  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return undefined;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = 'hidden';
    return () => {
      body.style.overflow = previousOverflow;
      const opener = openerRef.current;
      openerRef.current = null;
      if (opener && typeof opener.focus === 'function' && document.contains(opener)) {
        opener.focus({ preventScroll: true });
      }
    };
  }, [isOpen]);

  // Global Ctrl+K / Cmd+K toggle.
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    const onKeyDown = (event) => {
      if (!(event.ctrlKey || event.metaKey) || event.altKey || event.shiftKey) return;
      if (String(event.key).toLowerCase() !== 'k') return;
      if (!isOpen && isTypingElsewhere(event.target)) return;
      event.preventDefault();
      if (isOpen) closeSearch();
      else openSearch('');
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, openSearch, closeSearch]);

  const value = useMemo(
    () => ({ isOpen, initialQuery, openCount, openSearch, closeSearch }),
    [isOpen, initialQuery, openCount, openSearch, closeSearch],
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

/** Read the search context. Outside a provider it returns inert values instead of throwing. */
export function useSiteSearch() {
  const context = useContext(SearchContext);
  return context || NOOP_CONTEXT;
}

export default SearchProvider;
