'use client';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { trackAssistant } from './assistantClient';

/**
 * SearchProvider: one piece of state for the whole site search.
 *
 *   isOpen                the palette is showing
 *   mode                  'search' | 'assistant' (Ask AI), which view the palette shows
 *   initialQuery          text the palette starts with (from openSearch / setMode('search', carry))
 *   openCount             increments on every open (and on every switch to Search); the palette uses it to reset itself
 *   pendingQuestion       question to send as soon as Ask AI mode mounts (from openAssistant / setMode('assistant', carry))
 *   openSearch(query='')  open the palette in Search mode, optionally prefilled
 *   openAssistant(question='', source='pill')   open in Ask AI mode; a question is sent immediately
 *   setMode(mode, carry='', source='switch')    switch while open; carry goes to the search input or becomes pendingQuestion
 *   consumePendingQuestion()                    returns pendingQuestion and clears it
 *   closeSearch()         close it
 *
 * The conversation itself lives in AssistantProvider. `source` only feeds the GA4 assistant_open event.
 *
 * Also owns the global Ctrl+K / Cmd+K toggle, the body scroll lock while open,
 * and returning focus to the element that opened the palette.
 */

const SearchContext = createContext(null);

/** Attribute the palette puts on its own input so Ctrl+K still works there. */
export const SEARCH_INPUT_ATTR = 'data-lmc-search-input';

const NOOP_CONTEXT = {
  isOpen: false,
  mode: 'search',
  initialQuery: '',
  openCount: 0,
  pendingQuestion: '',
  openSearch: () => {},
  openAssistant: () => {},
  setMode: () => {},
  consumePendingQuestion: () => '',
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
  const [mode, setModeState] = useState('search');
  const [initialQuery, setInitialQuery] = useState('');
  const [openCount, setOpenCount] = useState(0);
  const [pendingQuestion, setPendingQuestion] = useState('');
  const openerRef = useRef(null);
  const pendingRef = useRef('');

  const setPending = useCallback((question) => {
    const text = typeof question === 'string' ? question : '';
    pendingRef.current = text;
    setPendingQuestion(text);
  }, []);

  const openSearch = useCallback((query = '') => {
    if (typeof document !== 'undefined') openerRef.current = document.activeElement;
    setModeState('search');
    setPending('');
    setInitialQuery(typeof query === 'string' ? query : '');
    setOpenCount((count) => count + 1);
    setIsOpen(true);
  }, [setPending]);

  const openAssistant = useCallback((question = '', source = 'pill') => {
    if (typeof document !== 'undefined') openerRef.current = document.activeElement;
    setModeState('assistant');
    setPending(question);
    setInitialQuery('');
    setOpenCount((count) => count + 1);
    setIsOpen(true);
    trackAssistant('assistant_open', { source });
  }, [setPending]);

  const setMode = useCallback((next, carry = '', source = 'switch') => {
    const text = typeof carry === 'string' ? carry : '';
    if (next === 'assistant') {
      setModeState('assistant');
      if (text) setPending(text);
      trackAssistant('assistant_open', { source });
      return;
    }
    setModeState('search');
    setPending('');
    setInitialQuery(text);
    setOpenCount((count) => count + 1); // the palette resets its search state and focuses the input
  }, [setPending]);

  const consumePendingQuestion = useCallback(() => {
    const text = pendingRef.current;
    if (text) setPending('');
    return text;
  }, [setPending]);

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
    () => ({
      isOpen, mode, initialQuery, openCount, pendingQuestion,
      openSearch, openAssistant, setMode, consumePendingQuestion, closeSearch,
    }),
    [isOpen, mode, initialQuery, openCount, pendingQuestion, openSearch, openAssistant, setMode, consumePendingQuestion, closeSearch],
  );

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

/** Read the search context. Outside a provider it returns inert values instead of throwing. */
export function useSiteSearch() {
  const context = useContext(SearchContext);
  return context || NOOP_CONTEXT;
}

export default SearchProvider;
