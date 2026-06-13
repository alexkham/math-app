
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/* ═══════════════════════════════════════════
   SIBLINGS NAV — STANDALONE (v3)

   v3 change: the nav now FLOATS by default
   (`float: left`). This lets you place it
   directly before the content component as
   plain siblings — no grid or flex parent
   needed — and the content will flow around
   it on the right.

   Props:
     float        — 'left' (default) | 'right' | 'none'
     marginRight  — space between nav and the
                    content that flows past it
                    default: '24px'
     marginBottom — space below the nav if content
                    is shorter than the nav
                    default: '24px'
     (other props unchanged: title, bg, color,
      activeColor, activeBg, width, topOffset)

   Usage (your current layout):
     <SiblingsNavStandalone />
     <DoubleAngleExplorer />

   To clear floats around something below:
     <div style={{ clear: 'both' }} />
   ═══════════════════════════════════════════ */

function slugToLabel(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function SiblingsNavStandalone({
  title = 'In this section',
  bg = '#ffffff',
  color = '#304090',
  activeColor = '#B85C2A',
  activeBg = '#F0EDE8',
  width = '200px',
  topOffset = '24px',
  float = 'left',
  marginRight = '24px',
  marginBottom = '24px',
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
  }, [parentPath, parts.length]);

  const showNav = !loading && siblings.length > 1 && parts.length >= 2;
  if (!showNav) return null;

  const currentPath = pathname.replace(/\/$/, '');

  return (
    <nav
      style={s.nav(bg, width, topOffset, float, marginRight, marginBottom)}
      aria-label="Section navigation"
    >
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
  );
}

const s = {
  nav: (bg, width, topOffset, float, marginRight, marginBottom) => ({
    width,
    minWidth: width,
    float,
    marginRight: float === 'left' ? marginRight : 0,
    marginLeft: float === 'right' ? marginRight : 0,
    marginBottom,
    /* sticky doesn't combine with float; keep it static-flow.
       If you need sticky behavior, switch float to 'none' and
       use a grid/flex parent instead. */
    position: 'static',
    backgroundColor: bg,
    borderRadius: '10px',
    border: '1px solid #c8d0e0',
    padding: '14px 0',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: 'border-box',
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
};