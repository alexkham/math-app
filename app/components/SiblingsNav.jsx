'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/* ═══════════════════════════════════════════
   SIBLING NAV

   Wrapper component. Reads /sitemap.xml,
   finds all siblings of the current page,
   and renders a sticky left nav alongside
   the wrapped content. Zero layout work
   needed on the page.

   Props:
     children     — page content
     title        — section header text
                    default: 'In this section'
     bg           — nav background color
                    default: '#ffffff'
     color        — link text color
                    default: '#304090'
     activeColor  — active link highlight color
                    default: '#B85C2A'
     activeBg     — active link background
                    default: '#F0EDE8'
     width        — nav panel width
                    default: '200px'
     topOffset    — sticky top offset
                    default: '24px'
     gap          — gap between nav and content
                    default: '28px'

   Usage:
     <SiblingNav>
       <YourPageComponent />
     </SiblingNav>
   ═══════════════════════════════════════════ */

function slugToLabel(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function SiblingsNav({
  children,
  title = 'In this section',
  bg = '#ffffff',
  color = '#304090',
  activeColor = '#B85C2A',
  activeBg = '#F0EDE8',
  width = '200px',
  topOffset = '24px',
  gap = '28px',
  maxWidth = '1380px',
  padding = '0 28px',
}) {
  const pathname = usePathname();
  const [siblings, setSiblings] = useState([]);
  const [loading, setLoading] = useState(true);

  const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean);
  const parentPath = '/' + parts.slice(0, -1).join('/');

  useEffect(() => {
    let cancelled = false;

    async function fetchSiblings() {
      try {
        const res = await fetch('/sitemap.xml');
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');

        const matched = Array.from(xml.querySelectorAll('url > loc'))
          .map((el) => {
            try { return new URL(el.textContent.trim()).pathname.replace(/\/$/, ''); }
            catch { return null; }
          })
          .filter((path) => {
            if (!path) return false;
            if (!path.startsWith(parentPath + '/')) return false;
            const rest = path.slice(parentPath.length + 1);
            return rest.length > 0 && !rest.includes('/');
          })
          .map((path) => ({
            slug: path.split('/').pop(),
            path,
            label: slugToLabel(path.split('/').pop()),
          }))
          .sort((a, b) => a.label.localeCompare(b.label));

        if (!cancelled) {
          setSiblings(matched);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }

    if (parts.length >= 2) fetchSiblings();
    else setLoading(false);

    return () => { cancelled = true; };
  }, [parentPath]);

  /* If too shallow or only one sibling, just render children as-is */
  const showNav = !loading && siblings.length > 1 && parts.length >= 2;

  if (!showNav) return <>{children}</>;

  const currentPath = pathname.replace(/\/$/, '');

  return (
    <div style={s.outer}>
      <div style={s.wrapper(gap, width)}>
      {/* ── Nav panel ── */}
      <nav style={s.nav(bg, width, topOffset)} aria-label="Section navigation">
        {title && <div style={s.title(color)}>{title}</div>}
        <ul style={s.list}>
          {siblings.map(({ slug, path, label }) => {
            const isActive = path === currentPath;
            return (
              <li key={slug}>
                <Link href={path} style={s.link(color, activeColor, activeBg, isActive)}>
                  {isActive && <span style={s.dot(activeColor)} aria-hidden="true" />}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* ── Page content ── */}
      <div style={s.content}>
        {children}
      </div>
    </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════ */

const s = {
  outer: {
    maxWidth: '1380px',
    margin: '0 auto',
    padding: '0 28px',
    boxSizing: 'border-box',
    width: '100%',
  },

  wrapper: (gap, width) => ({
    display: 'grid',
    gridTemplateColumns: `${width} 1fr`,
    gap,
    width: '100%',
    alignItems: 'start',
  }),

  nav: (bg, width, topOffset) => ({
    width,
    minWidth: width,
    flexShrink: 0,
    position: 'sticky',
    top: topOffset,
    alignSelf: 'flex-start',
    backgroundColor: bg,
    borderRadius: '10px',
    border: '1px solid #c8d0e0',
    padding: '14px 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    fontFamily: "'DM Sans', sans-serif",
  }),

  title: (color) => ({
    fontSize: '0.72rem',
    fontWeight: '700',
    color,
    textTransform: 'uppercase',
    letterSpacing: '0.6px',
    padding: '0 14px 10px 14px',
    borderBottom: '1px solid #e8edf4',
    marginBottom: '6px',
  }),

  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },

  link: (color, activeColor, activeBg, isActive) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '7px 14px',
    fontSize: '0.88rem',
    fontWeight: isActive ? '600' : '400',
    color: isActive ? activeColor : color,
    backgroundColor: isActive ? activeBg : 'transparent',
    textDecoration: 'none',
    borderLeft: `3px solid ${isActive ? activeColor : 'transparent'}`,
    transition: 'background 0.12s, color 0.12s',
    lineHeight: 1.4,
  }),

  dot: (activeColor) => ({
    display: 'inline-block',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    backgroundColor: activeColor,
    flexShrink: 0,
  }),

  content: {
    minWidth: 0,
  },
};