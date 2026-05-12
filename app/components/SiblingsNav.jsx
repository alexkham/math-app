// // 'use client';

// // import { useEffect, useState } from 'react';
// // import { usePathname } from 'next/navigation';
// // import Link from 'next/link';

// // /* ═══════════════════════════════════════════
// //    SIBLING NAV

// //    Wrapper component. Reads /sitemap.xml,
// //    finds all siblings of the current page,
// //    and renders a sticky left nav alongside
// //    the wrapped content. Zero layout work
// //    needed on the page.

// //    Props:
// //      children     — page content
// //      title        — section header text
// //                     default: 'In this section'
// //      bg           — nav background color
// //                     default: '#ffffff'
// //      color        — link text color
// //                     default: '#304090'
// //      activeColor  — active link highlight color
// //                     default: '#B85C2A'
// //      activeBg     — active link background
// //                     default: '#F0EDE8'
// //      width        — nav panel width
// //                     default: '200px'
// //      topOffset    — sticky top offset
// //                     default: '24px'
// //      gap          — gap between nav and content
// //                     default: '28px'

// //    Usage:
// //      <SiblingNav>
// //        <YourPageComponent />
// //      </SiblingNav>
// //    ═══════════════════════════════════════════ */

// // function slugToLabel(slug) {
// //   return slug
// //     .split('-')
// //     .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
// //     .join(' ');
// // }

// // export default function SiblingsNav({
// //   children,
// //   title = 'In this section',
// //   bg = '#ffffff',
// //   color = '#304090',
// //   activeColor = '#B85C2A',
// //   activeBg = '#F0EDE8',
// //   width = '200px',
// //   topOffset = '24px',
// //   gap = '28px',
// //   maxWidth = '1580px',
// //   padding = '0 28px',
// // }) {
// //   const pathname = usePathname();
// //   const [siblings, setSiblings] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean);
// //   const parentPath = '/' + parts.slice(0, -1).join('/');

// //   useEffect(() => {
// //     let cancelled = false;

// //     async function fetchSiblings() {
// //       try {
// //         const res = await fetch('/sitemap.xml');
// //         const text = await res.text();
// //         const parser = new DOMParser();
// //         const xml = parser.parseFromString(text, 'application/xml');

// //         const matched = Array.from(xml.querySelectorAll('url > loc'))
// //           .map((el) => {
// //             try { return new URL(el.textContent.trim()).pathname.replace(/\/$/, ''); }
// //             catch { return null; }
// //           })
// //           .filter((path) => {
// //             if (!path) return false;
// //             if (!path.startsWith(parentPath + '/')) return false;
// //             const rest = path.slice(parentPath.length + 1);
// //             return rest.length > 0 && !rest.includes('/');
// //           })
// //           .map((path) => ({
// //             slug: path.split('/').pop(),
// //             path,
// //             label: slugToLabel(path.split('/').pop()),
// //           }))
// //           .sort((a, b) => a.label.localeCompare(b.label));

// //         if (!cancelled) {
// //           setSiblings(matched);
// //           setLoading(false);
// //         }
// //       } catch {
// //         if (!cancelled) setLoading(false);
// //       }
// //     }

// //     if (parts.length >= 2) fetchSiblings();
// //     else setLoading(false);

// //     return () => { cancelled = true; };
// //   }, [parentPath, parts.length]);

// //   /* If too shallow or only one sibling, just render children as-is */
// //   const showNav = !loading && siblings.length > 1 && parts.length >= 2;

// //   if (!showNav) return <>{children}</>;

// //   const currentPath = pathname.replace(/\/$/, '');

// //   return (
// //     <div style={s.outer}>
// //       <div style={s.wrapper(gap, width)}>
// //       {/* ── Nav panel ── */}
// //       <nav style={s.nav(bg, width, topOffset)} aria-label="Section navigation">
// //         {title && <div style={s.title(color)}>{title}</div>}
// //         <ul style={s.list}>
// //           {siblings.map(({ slug, path, label }) => {
// //             const isActive = path === currentPath;
// //             return (
// //               <li key={slug}>
// //                 <Link href={path} style={s.link(color, activeColor, activeBg, isActive)}>
// //                   {isActive && <span style={s.dot(activeColor)} aria-hidden="true" />}
// //                   {label}
// //                 </Link>
// //               </li>
// //             );
// //           })}
// //         </ul>
// //       </nav>

// //       {/* ── Page content ── */}
// //       <div style={s.content}>
// //         {children}
// //       </div>
// //     </div>
// //     </div>
// //   );
// // }

// // /* ═══════════════════════════════════════════
// //    STYLES
// //    ═══════════════════════════════════════════ */

// // const s = {
// //   outer: {
// //     maxWidth: '1380px',
// //     margin: '0 auto',
// //     padding: '0 28px',
// //     boxSizing: 'border-box',
// //     width: '100%',
// //   },

// //   wrapper: (gap, width) => ({
// //     display: 'grid',
// //     gridTemplateColumns: `${width} 1fr`,
// //     gap,
// //     width: '100%',
// //     alignItems: 'start',
// //   }),

// //   nav: (bg, width, topOffset) => ({
// //     width,
// //     minWidth: width,
// //     flexShrink: 0,
// //     position: 'sticky',
// //     top: topOffset,
// //     alignSelf: 'flex-start',
// //     backgroundColor: bg,
// //     borderRadius: '10px',
// //     border: '1px solid #c8d0e0',
// //     padding: '14px 0',
// //     boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
// //     fontFamily: "'DM Sans', sans-serif",
// //   }),

// //   title: (color) => ({
// //     fontSize: '0.72rem',
// //     fontWeight: '700',
// //     color,
// //     textTransform: 'uppercase',
// //     letterSpacing: '0.6px',
// //     padding: '0 14px 10px 14px',
// //     borderBottom: '1px solid #e8edf4',
// //     marginBottom: '6px',
// //   }),

// //   list: {
// //     listStyle: 'none',
// //     margin: 0,
// //     padding: 0,
// //   },

// //   link: (color, activeColor, activeBg, isActive) => ({
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     padding: '7px 14px',
// //     fontSize: '0.88rem',
// //     fontWeight: isActive ? '600' : '400',
// //     color: isActive ? activeColor : color,
// //     backgroundColor: isActive ? activeBg : 'transparent',
// //     textDecoration: 'none',
// //     borderLeft: `3px solid ${isActive ? activeColor : 'transparent'}`,
// //     transition: 'background 0.12s, color 0.12s',
// //     lineHeight: 1.4,
// //   }),

// //   dot: (activeColor) => ({
// //     display: 'inline-block',
// //     width: '5px',
// //     height: '5px',
// //     borderRadius: '50%',
// //     backgroundColor: activeColor,
// //     flexShrink: 0,
// //   }),

// //   content: {
// //     minWidth: 0,
// //   },
// // };



// 'use client';

// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// /* ═══════════════════════════════════════════
//    SIBLING NAV  (v2)

//    Wrapper component. Reads /sitemap.xml,
//    finds all siblings of the current page,
//    and renders a sticky left nav alongside
//    the wrapped content.

//    v2 changes:
//      • maxWidth and padding props are now
//        actually applied to the outer frame.
//      • Content cell has a real frame:
//          width 100%, min-width 0,
//          box-sizing border-box,
//          overflow hidden, position relative.
//        Prevents nested components from
//        visually escaping the column.
//      • Inner content box keeps children
//        at full column width and never
//        collapses shorter than the nav.
//      • Vertical rhythm matched: content
//        cell shares the nav's top padding
//        so both columns start at the same y.
//      • New optional childMaxWidth prop to
//        constrain very wide nested components
//        from the wrapper instead of the page.

//    Props:
//      children       — page content
//      title          — section header text
//                       default: 'In this section'
//      bg             — nav background color
//                       default: '#ffffff'
//      color          — link text color
//                       default: '#304090'
//      activeColor    — active link highlight color
//                       default: '#B85C2A'
//      activeBg       — active link background
//                       default: '#F0EDE8'
//      width          — nav panel width
//                       default: '200px'
//      topOffset      — sticky top offset
//                       default: '24px'
//      gap            — gap between nav and content
//                       default: '28px'
//      maxWidth       — outer frame max width
//                       default: '1380px'
//      padding        — outer frame padding
//                       default: '0 28px'
//      childMaxWidth  — optional max width applied
//                       to the inner content box
//                       default: '100%'

//    Usage:
//      <SiblingsNav>
//        <YourPageComponent />
//      </SiblingsNav>
//    ═══════════════════════════════════════════ */

// function slugToLabel(slug) {
//   return slug
//     .split('-')
//     .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
//     .join(' ');
// }

// export default function SiblingsNav({
//   children,
//   title = 'In this section',
//   bg = '#ffffff',
//   color = '#304090',
//   activeColor = '#B85C2A',
//   activeBg = '#F0EDE8',
//   width = '200px',
//   topOffset = '24px',
//   gap = '28px',
//   maxWidth = '1380px',
//   padding = '0 28px',
//   childMaxWidth = '100%',
// }) {
//   const pathname = usePathname();
//   const [siblings, setSiblings] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean);
//   const parentPath = '/' + parts.slice(0, -1).join('/');

//   useEffect(() => {
//     let cancelled = false;

//     async function fetchSiblings() {
//       try {
//         const res = await fetch('/sitemap.xml');
//         const text = await res.text();
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(text, 'application/xml');

//         const matched = Array.from(xml.querySelectorAll('url > loc'))
//           .map((el) => {
//             try { return new URL(el.textContent.trim()).pathname.replace(/\/$/, ''); }
//             catch { return null; }
//           })
//           .filter((path) => {
//             if (!path) return false;
//             if (!path.startsWith(parentPath + '/')) return false;
//             const rest = path.slice(parentPath.length + 1);
//             return rest.length > 0 && !rest.includes('/');
//           })
//           .map((path) => ({
//             slug: path.split('/').pop(),
//             path,
//             label: slugToLabel(path.split('/').pop()),
//           }))
//           .sort((a, b) => a.label.localeCompare(b.label));

//         if (!cancelled) {
//           setSiblings(matched);
//           setLoading(false);
//         }
//       } catch {
//         if (!cancelled) setLoading(false);
//       }
//     }

//     if (parts.length >= 2) fetchSiblings();
//     else setLoading(false);

//     return () => { cancelled = true; };
//   }, [parentPath, parts.length]);

//   /* If too shallow or only one sibling, just render children as-is */
//   const showNav = !loading && siblings.length > 1 && parts.length >= 2;

//   if (!showNav) return <>{children}</>;

//   const currentPath = pathname.replace(/\/$/, '');

//   return (
//     <div style={s.outer(maxWidth, padding)}>
//       <div style={s.wrapper(gap, width)}>
//         {/* ── Nav panel ── */}
//         <nav style={s.nav(bg, width, topOffset)} aria-label="Section navigation">
//           {title && <div style={s.title(color)}>{title}</div>}
//           <ul style={s.list}>
//             {siblings.map(({ slug, path, label }) => {
//               const isActive = path === currentPath;
//               return (
//                 <li key={slug}>
//                   <Link href={path} style={s.link(color, activeColor, activeBg, isActive)}>
//                     {isActive && <span style={s.dot(activeColor)} aria-hidden="true" />}
//                     {label}
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* ── Page content cell ── */}
//         <div style={s.contentCell}>
//           <div style={s.contentInner(childMaxWidth)}>
//             {children}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ═══════════════════════════════════════════
//    STYLES
//    ═══════════════════════════════════════════ */

// /* Vertical rhythm constant — keep nav and content
//    visually starting at the same y-coordinate.
//    Matches the nav's top padding (14px). */
// const TOP_RHYTHM = '14px';

// const s = {
//   outer: (maxWidth, padding) => ({
//     maxWidth,
//     margin: '0 auto',
//     padding,
//     boxSizing: 'border-box',
//     width: '100%',
//   }),

//   wrapper: (gap, width) => ({
//     display: 'grid',
//     gridTemplateColumns: `${width} 1fr`,
//     gap,
//     width: '100%',
//     alignItems: 'start',
//   }),

//   nav: (bg, width, topOffset) => ({
//     width,
//     minWidth: width,
//     flexShrink: 0,
//     position: 'sticky',
//     top: topOffset,
//     alignSelf: 'flex-start',
//     backgroundColor: bg,
//     borderRadius: '10px',
//     border: '1px solid #c8d0e0',
//     padding: '14px 0',
//     boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//     fontFamily: "'DM Sans', sans-serif",
//     boxSizing: 'border-box',
//   }),

//   title: (color) => ({
//     fontSize: '0.72rem',
//     fontWeight: '700',
//     color,
//     textTransform: 'uppercase',
//     letterSpacing: '0.6px',
//     padding: '0 14px 10px 14px',
//     borderBottom: '1px solid #e8edf4',
//     marginBottom: '6px',
//   }),

//   list: {
//     listStyle: 'none',
//     margin: 0,
//     padding: 0,
//   },

//   link: (color, activeColor, activeBg, isActive) => ({
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     padding: '7px 14px',
//     fontSize: '0.88rem',
//     fontWeight: isActive ? '600' : '400',
//     color: isActive ? activeColor : color,
//     backgroundColor: isActive ? activeBg : 'transparent',
//     textDecoration: 'none',
//     borderLeft: `3px solid ${isActive ? activeColor : 'transparent'}`,
//     transition: 'background 0.12s, color 0.12s',
//     lineHeight: 1.4,
//   }),

//   dot: (activeColor) => ({
//     display: 'inline-block',
//     width: '5px',
//     height: '5px',
//     borderRadius: '50%',
//     backgroundColor: activeColor,
//     flexShrink: 0,
//   }),

//   /* Rigid frame for the right-hand column.
//      Contains nested components that try to
//      stretch beyond their column. */
//   contentCell: {
//     width: '100%',
//     minWidth: 0,
//     boxSizing: 'border-box',
//     position: 'relative',
//     overflow: 'hidden',
//     paddingTop: TOP_RHYTHM,
//   },

//   /* Inner content box.
//      Stretches to fill the cell by default,
//      and never collapses shorter than the nav. */
//   contentInner: (childMaxWidth) => ({
//     width: '100%',
//     maxWidth: childMaxWidth,
//     margin: '0 auto',
//     boxSizing: 'border-box',
//     display: 'block',
//   }),
// };



'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/* ═══════════════════════════════════════════
   SIBLING NAV  (v3)

   Wrapper component. Reads /sitemap.xml,
   finds all siblings of the current page,
   and renders a sticky left nav alongside
   the wrapped content.

   v3 changes (the ones that actually matter):

     1. Grid columns use minmax(0, 1fr) for the
        content track. Without this, CSS Grid
        sizes the track to intrinsic content
        width, leaving the gap visible in the
        screenshots. With it, the track flexes.

     2. Content cell is itself a single-column
        grid: `grid-template-columns: minmax(0, 1fr)`.
        This stretches direct children to fill
        the column width — the "rigid slot" the
        wrapper enforces.

     3. No more `margin: 0 auto` centering
        inside the cell. A child narrower than
        the cell now sits left-aligned, not
        floating in the middle.

     4. Removed the cosmetic paddingTop hack.
        Vertical alignment between nav text and
        content text depends on the child's own
        internal padding, which the wrapper
        can't see.

     5. Removed overflow: hidden. If a child
        has popovers or tooltips, clipping them
        is worse than the rare overflow problem.

   Props:
     children       — page content
     title          — section header text
                      default: 'In this section'
     bg             — nav background color
                      default: '#ffffff'
     color          — link text color
                      default: '#304090'
     activeColor    — active link highlight color
                      default: '#B85C2A'
     activeBg       — active link background
                      default: '#F0EDE8'
     width          — nav panel width
                      default: '200px'
     topOffset      — sticky top offset
                      default: '24px'
     gap            — gap between nav and content
                      default: '28px'
     maxWidth       — outer frame max width
                      default: '1380px'
     padding        — outer frame padding
                      default: '0 28px'
     childMaxWidth  — optional max width on the
                      content cell (use when a
                      page's child is too wide)
                      default: 'none'

   Usage:
     <SiblingsNav>
       <YourPageComponent />
     </SiblingsNav>
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
  childMaxWidth = 'none',
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

  /* If too shallow or only one sibling, just render children as-is */
  const showNav = !loading && siblings.length > 1 && parts.length >= 2;

  if (!showNav) return <>{children}</>;

  const currentPath = pathname.replace(/\/$/, '');

  return (
    <div style={s.outer(maxWidth, padding)}>
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

        {/* ── Content cell: rigid single-column grid that forces
              direct children to stretch to full width ── */}
        <div style={s.contentCell(childMaxWidth)}>
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
  outer: (maxWidth, padding) => ({
    maxWidth,
    margin: '0 auto',
    padding,
    boxSizing: 'border-box',
    width: '100%',
  }),

  wrapper: (gap, width) => ({
    display: 'grid',
    /* minmax(0, 1fr) is the critical bit.
       Plain `1fr` lets the track grow to fit
       intrinsic content width, which is why
       the column was visually floating. */
    gridTemplateColumns: `${width} minmax(0, 1fr)`,
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

  /* Rigid slot for the wrapped page content.
     Single-column grid with minmax(0, 1fr)
     stretches direct children to fill the
     column width. */
  contentCell: (childMaxWidth) => ({
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr)',
    width: '100%',
    maxWidth: childMaxWidth,
    minWidth: 0,
    boxSizing: 'border-box',
    position: 'relative',
  }),
};