/**
 * Runtime scroll-offset measurement for SectionFrontPage / MindMapHero.
 *
 * Anchor scrolling used to subtract hardcoded constants (navbar 55px,
 * sticky strip 110px). In reality the site navbar (MyNavbar3) is 60px
 * and can change height (mobile rows, menu states), and the sticky
 * TopicStrip wraps to a variable number of rows depending on how many
 * sections a hub has — so hardcoded offsets sometimes land the section
 * title hidden behind the menu. Both heights are measured live at
 * scroll time; the old constants remain as SSR-safe fallbacks.
 */

import { useState, useEffect } from 'react';

export const FALLBACK_NAVBAR_H = 60; // MyNavbar3 declares height: 60px
export const FALLBACK_STRIP_H = 110;
export const TOPIC_STRIP_ID = 'lmc-topic-strip';

/** Height of the site-wide fixed navbar, measured from the DOM. */
export function getNavbarHeight() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return FALLBACK_NAVBAR_H;
  const navs = document.querySelectorAll('nav');
  for (const nav of navs) {
    if (nav.id === TOPIC_STRIP_ID) continue;
    const cs = window.getComputedStyle(nav);
    if (cs.position === 'fixed' && nav.getBoundingClientRect().top <= 0.5) {
      const h = nav.getBoundingClientRect().height;
      if (h > 0) return h;
    }
  }
  return FALLBACK_NAVBAR_H;
}

/** Height of the sticky TopicStrip, measured from the DOM. */
export function getStickyStripHeight() {
  if (typeof document === 'undefined') return FALLBACK_STRIP_H;
  const strip = document.getElementById(TOPIC_STRIP_ID);
  const h = strip ? strip.getBoundingClientRect().height : 0;
  return h > 0 ? h : FALLBACK_STRIP_H;
}

/** Total offset an anchor scroll must clear: navbar + strip + padding. */
export function getAnchorScrollOffset(extra = 10) {
  return getNavbarHeight() + getStickyStripHeight() + extra;
}

/** Live navbar height for sticky/fixed layout (updates on resize). */
export function useNavbarHeight() {
  const [h, setH] = useState(FALLBACK_NAVBAR_H);
  useEffect(() => {
    const update = () => setH(getNavbarHeight());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return h;
}
