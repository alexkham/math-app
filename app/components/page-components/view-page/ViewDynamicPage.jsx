// // // import Link from 'next/link'
// // // import { processContent } from '@/app/utils/contentProcessor'

// // // // Default color theme — pass `theme` prop to override any subset of these.
// // // const defaultTheme = {
// // //   primary:          '#2c5d99',  // buttons, accent borders, hover states
// // //   primaryDark:      '#143a66',  // titles, formula text
// // //   border:           '#d8e1ec',  // card / panel borders
// // //   borderAccent:     '#c8d9ec',  // formula box border, intro strip border
// // //   borderSubtle:     '#ecf1f7',  // sidebar title underline
// // //   bgGradientStart:  '#f1f7fd',  // intro / formula gradient left edge
// // //   bgGradientEnd:    '#e8f1fa',  // intro / formula gradient right edge
// // //   textBody:         '#3a4a5e',  // blurb body text, sidebar links
// // //   textMuted:        '#6b7a8f',  // labels, sidebar title, nav label
// // //   cardBg:           '#ffffff',  // card background, header nav background
// // //   pageBg:           '#fafbfd',  // (currently unused, exposed for completeness)
// // // }

// // // // ---------------------------------------------------------------
// // // // LAYOUT ARCHITECTURE
// // // // ---------------------------------------------------------------
// // // // Everything (intro, header nav, cards) lives inside a single
// // // // centered column with `position: relative`. The sidebar is
// // // // `position: absolute` with a NEGATIVE left offset, so it hangs
// // // // off the column's left edge by exactly (sidebar width + gap).
// // // // The sidebar is anchored to the COLUMN, not the viewport — so
// // // // it survives any browser, zoom, scrollbar, or container quirk.
// // // //
// // // // Inside the absolute outer shell, a `position: sticky` child
// // // // handles "stays put on scroll" without participating in any grid.
// // // //
// // // // The breakpoint for hiding the sidebar is geometrically derived
// // // // from the same constants that position it, so the math is
// // // // internally consistent.
// // // // ---------------------------------------------------------------

// // // const COLUMN_WIDTH  = 1180
// // // const SIDEBAR_WIDTH = 190
// // // const SIDEBAR_GAP   = 30
// // // const HIDE_BREAKPOINT = COLUMN_WIDTH + 2 * (SIDEBAR_WIDTH + SIDEBAR_GAP) // 1620

// // // export default function ViewDynamicPage({
// // //   cards = [],
// // //   introContent = '',
// // //   theme = {},
// // //   sidebarTitle = 'On this page',
// // //   headerNavLabel = 'Jump to:',
// // //   actionLabel = 'Open solver \u2192'
// // // }) {

// // //   const t = { ...defaultTheme, ...theme }

// // //   const styles = {
// // //     contentColumn: {
// // //       position: 'relative',
// // //       maxWidth: `${COLUMN_WIDTH}px`,
// // //       margin: '0 auto',
// // //       padding: '0 20px',
// // //     },
// // //     sidebarShell: {
// // //       position: 'absolute',
// // //       top: '60px',
// // //       left: `-${SIDEBAR_WIDTH + SIDEBAR_GAP}px`,
// // //       width: `${SIDEBAR_WIDTH}px`,
// // //       height: '100%',
// // //     },
// // //     sidebarSticky: {
// // //       position: 'sticky',
// // //       top: '54px',
// // //       background: t.cardBg,
// // //       border: `1px solid ${t.border}`,
// // //       borderRadius: '8px',
// // //       padding: '18px 16px',
// // //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
// // //       maxHeight: 'calc(100vh - 78px)',
// // //       overflowY: 'auto',
// // //     },
// // //     sidebarTitle: {
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       fontSize: '11.5px',
// // //       textTransform: 'uppercase',
// // //       letterSpacing: '1.2px',
// // //       color: t.textMuted,
// // //       fontWeight: 600,
// // //       margin: '0 0 12px',
// // //       paddingBottom: '10px',
// // //       borderBottom: `1px solid ${t.borderSubtle}`,
// // //     },
// // //     sidebarList: {
// // //       listStyle: 'none',
// // //       padding: 0,
// // //       margin: 0,
// // //     },
// // //     sidebarLink: {
// // //       display: 'block',
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //       fontSize: '14px',
// // //       color: t.textBody,
// // //       padding: '7px 10px',
// // //       borderRadius: '5px',
// // //       textDecoration: 'none',
// // //       borderLeft: '3px solid transparent',
// // //       marginBottom: '1px',
// // //     },
// // //     introStrip: {
// // //       background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
// // //       border: `1px solid ${t.borderAccent}`,
// // //       borderLeft: `3px solid ${t.primary}`,
// // //       borderRadius: '8px',
// // //       padding: '14px 20px',
// // //       margin: '0 0 26px',
// // //       color: t.primaryDark,
// // //       fontSize: '15px',
// // //       lineHeight: 1.6,
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //     },
// // //     headerNav: {
// // //       background: t.cardBg,
// // //       border: `1px solid ${t.border}`,
// // //       borderRadius: '8px',
// // //       padding: '14px 18px',
// // //       margin: '0 0 28px',
// // //       display: 'flex',
// // //       flexWrap: 'wrap',
// // //       alignItems: 'center',
// // //       gap: '8px',
// // //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
// // //     },
// // //     headerNavLabel: {
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       fontSize: '11.5px',
// // //       textTransform: 'uppercase',
// // //       letterSpacing: '1.2px',
// // //       color: t.textMuted,
// // //       fontWeight: 600,
// // //       marginRight: '6px',
// // //     },
// // //     headerNavLink: {
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       fontSize: '13px',
// // //       color: t.primary,
// // //       background: t.bgGradientStart,
// // //       border: `1px solid ${t.borderAccent}`,
// // //       borderRadius: '999px',
// // //       padding: '5px 13px',
// // //       textDecoration: 'none',
// // //       fontWeight: 500,
// // //     },
// // //     cardsGrid: {
// // //       display: 'grid',
// // //       gridTemplateColumns: 'repeat(2, 1fr)',
// // //       gap: '28px',
// // //       margin: '40px 0',
// // //     },
// // //     card: {
// // //       display: 'flex',
// // //       flexDirection: 'column',
// // //       border: `1px solid ${t.border}`,
// // //       borderRadius: '10px',
// // //       padding: '30px 28px',
// // //       backgroundColor: t.cardBg,
// // //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //       scrollMarginTop: '24px',
// // //     },
// // //     cardLabel: {
// // //       fontSize: '12px',
// // //       letterSpacing: '0.8px',
// // //       textTransform: 'uppercase',
// // //       color: t.textMuted,
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       fontWeight: 600,
// // //       marginBottom: '6px',
// // //     },
// // //     cardTitle: {
// // //       fontSize: '22px',
// // //       fontWeight: 600,
// // //       color: t.primaryDark,
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //       marginBottom: '16px',
// // //       lineHeight: 1.25,
// // //     },
// // //     formulaBlock: {
// // //       background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
// // //       border: `1px solid ${t.borderAccent}`,
// // //       borderLeft: `3px solid ${t.primary}`,
// // //       borderRadius: '6px',
// // //       padding: '20px 22px',
// // //       margin: '0 0 20px 0',
// // //       textAlign: 'center',
// // //       fontSize: '22px',
// // //       color: t.primaryDark,
// // //       overflowX: 'auto',
// // //       overflowY: 'hidden',
// // //       scrollbarWidth: 'none',
// // //       msOverflowStyle: 'none',
// // //     },
// // //     blurb: {
// // //       fontSize: '17px',
// // //       color: t.textBody,
// // //       lineHeight: 1.65,
// // //       marginBottom: '22px',
// // //       flex: '1 1 auto',
// // //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// // //     },
// // //     primaryAction: {
// // //       display: 'inline-block',
// // //       padding: '12px 20px',
// // //       background: t.primary,
// // //       color: '#ffffff',
// // //       borderRadius: '6px',
// // //       textDecoration: 'none',
// // //       fontSize: '14px',
// // //       fontWeight: 600,
// // //       textAlign: 'center',
// // //       fontFamily: 'system-ui, -apple-system, sans-serif',
// // //       letterSpacing: '0.3px',
// // //       marginTop: 'auto',
// // //     },
// // //   }

// // //   return (
// // //     <>
// // //       <style>{`
// // //         .vdp-formula-block::-webkit-scrollbar {
// // //           display: none;
// // //           width: 0;
// // //           height: 0;
// // //         }
// // //         .vdp-header-nav-link:hover {
// // //           background: ${t.primary} !important;
// // //           color: #ffffff !important;
// // //           border-color: ${t.primary} !important;
// // //         }
// // //         .vdp-sidebar-link:hover {
// // //           background: ${t.bgGradientStart} !important;
// // //           color: ${t.primaryDark} !important;
// // //           border-left-color: ${t.primary} !important;
// // //         }
// // //         @media (max-width: ${HIDE_BREAKPOINT}px) {
// // //           .vdp-sidebar-shell { display: none !important; }
// // //         }
// // //         @media (max-width: 760px) {
// // //           .vdp-cards-grid { grid-template-columns: 1fr !important; }
// // //         }
// // //       `}</style>

// // //       <div style={styles.contentColumn}>

// // //         <aside
// // //           className="vdp-sidebar-shell"
// // //           style={styles.sidebarShell}
// // //           aria-label={sidebarTitle}
// // //         >
// // //           <div style={styles.sidebarSticky}>
// // //             <h3 style={styles.sidebarTitle}>{sidebarTitle}</h3>
// // //             <ul style={styles.sidebarList}>
// // //               {cards.map((c) => (
// // //                 <li key={c.slug}>
// // //                   <a
// // //                     href={`#card-${c.slug}`}
// // //                     className="vdp-sidebar-link"
// // //                     style={styles.sidebarLink}
// // //                   >
// // //                     {c.shortNav}
// // //                   </a>
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           </div>
// // //         </aside>

// // //         {introContent && (
// // //           <div style={styles.introStrip}>
// // //             {processContent(introContent)}
// // //           </div>
// // //         )}

// // //         <nav style={styles.headerNav} aria-label="Quick navigation">
// // //           <span style={styles.headerNavLabel}>{headerNavLabel}</span>
// // //           {cards.map((c) => (
// // //             <a
// // //               key={c.slug}
// // //               href={`#card-${c.slug}`}
// // //               className="vdp-header-nav-link"
// // //               style={styles.headerNavLink}
// // //             >
// // //               {c.label}
// // //             </a>
// // //           ))}
// // //         </nav>

// // //         <div className="vdp-cards-grid" style={styles.cardsGrid}>
// // //           {cards.map((c) => (
// // //             <article key={c.slug} id={`card-${c.slug}`} style={styles.card}>
// // //               <div style={styles.cardLabel}>{c.label}</div>
// // //               <div style={styles.cardTitle}>{c.title}</div>
// // //               <div className="vdp-formula-block" style={styles.formulaBlock}>
// // //                 {processContent(c.formula)}
// // //               </div>
// // //               <div style={styles.blurb}>
// // //                 {processContent(c.blurb)}
// // //               </div>
// // //               <Link href={c.href} style={styles.primaryAction}>
// // //                 {actionLabel}
// // //               </Link>
// // //             </article>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </>
// // //   )
// // // }



// // import Link from 'next/link'
// // import { processContent } from '@/app/utils/contentProcessor'

// // // Default color theme — pass `theme` prop to override any subset of these.
// // const defaultTheme = {
// //   primary:          '#2c5d99',  // buttons, accent borders, hover states
// //   primaryDark:      '#143a66',  // titles, formula text
// //   border:           '#d8e1ec',  // card / panel borders
// //   borderAccent:     '#c8d9ec',  // formula box border, intro strip border
// //   borderSubtle:     '#ecf1f7',  // sidebar title underline
// //   bgGradientStart:  '#f1f7fd',  // intro / formula gradient left edge
// //   bgGradientEnd:    '#e8f1fa',  // intro / formula gradient right edge
// //   textBody:         '#3a4a5e',  // blurb body text, sidebar links
// //   textMuted:        '#6b7a8f',  // labels, sidebar title, nav label
// //   cardBg:           '#ffffff',  // card background, header nav background
// //   pageBg:           '#fafbfd',  // (currently unused, exposed for completeness)
// // }

// // // ---------------------------------------------------------------
// // // LAYOUT ARCHITECTURE
// // // ---------------------------------------------------------------
// // // Everything (intro, header nav, cards) lives inside a single
// // // centered column with `position: relative`. The sidebar is
// // // `position: absolute` with a NEGATIVE left offset, so it hangs
// // // off the column's left edge by exactly (sidebar width + gap).
// // // The sidebar is anchored to the COLUMN, not the viewport — so
// // // it survives any browser, zoom, scrollbar, or container quirk.
// // //
// // // Inside the absolute outer shell, a `position: sticky` child
// // // handles "stays put on scroll" without participating in any grid.
// // //
// // // The breakpoint for hiding the sidebar is geometrically derived
// // // from the same constants that position it, so the math is
// // // internally consistent.
// // // ---------------------------------------------------------------

// // const COLUMN_WIDTH  = 1180
// // const SIDEBAR_WIDTH = 190
// // const SIDEBAR_GAP   = 30
// // const HIDE_BREAKPOINT = COLUMN_WIDTH + 2 * (SIDEBAR_WIDTH + SIDEBAR_GAP) // 1620

// // export default function ViewDynamicPage({
// //   cards = [],
// //   introContent = '',
// //   theme = {},
// //   sidebarTitle = 'On this page',
// //   headerNavLabel = 'Jump to:',
// //   actionLabel = 'Open solver \u2192'
// // }) {

// //   const t = { ...defaultTheme, ...theme }

// //   const styles = {
// //     contentColumn: {
// //       position: 'relative',
// //       maxWidth: `${COLUMN_WIDTH}px`,
// //       margin: '0 auto',
// //       padding: '0 20px',
// //     },
// //     sidebarShell: {
// //       position: 'absolute',
// //       top: '60px',
// //       left: `-${SIDEBAR_WIDTH + SIDEBAR_GAP}px`,
// //       width: `${SIDEBAR_WIDTH}px`,
// //       height: '100%',
// //     },
// //     sidebarSticky: {
// //       position: 'sticky',
// //       top: '54px',
// //       background: t.cardBg,
// //       border: `1px solid ${t.border}`,
// //       borderRadius: '8px',
// //       padding: '18px 16px',
// //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
// //       maxHeight: 'calc(100vh - 78px)',
// //       overflowY: 'auto',
// //     },
// //     sidebarTitle: {
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       fontSize: '11.5px',
// //       textTransform: 'uppercase',
// //       letterSpacing: '1.2px',
// //       color: t.textMuted,
// //       fontWeight: 600,
// //       margin: '0 0 12px',
// //       paddingBottom: '10px',
// //       borderBottom: `1px solid ${t.borderSubtle}`,
// //     },
// //     sidebarList: {
// //       listStyle: 'none',
// //       padding: 0,
// //       margin: 0,
// //     },
// //     sidebarLink: {
// //       display: 'block',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //       fontSize: '14px',
// //       color: t.textBody,
// //       padding: '7px 10px',
// //       borderRadius: '5px',
// //       textDecoration: 'none',
// //       borderLeft: '3px solid transparent',
// //       marginBottom: '1px',
// //     },
// //     introStrip: {
// //       background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
// //       border: `1px solid ${t.borderAccent}`,
// //       borderLeft: `3px solid ${t.primary}`,
// //       borderRadius: '8px',
// //       padding: '14px 20px',
// //       margin: '0 0 26px',
// //       color: t.primaryDark,
// //       fontSize: '15px',
// //       lineHeight: 1.6,
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //     },
// //     headerNav: {
// //       background: t.cardBg,
// //       border: `1px solid ${t.border}`,
// //       borderRadius: '8px',
// //       padding: '14px 18px',
// //       margin: '0 0 28px',
// //       display: 'flex',
// //       flexWrap: 'wrap',
// //       alignItems: 'center',
// //       gap: '8px',
// //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
// //     },
// //     headerNavLabel: {
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       fontSize: '11.5px',
// //       textTransform: 'uppercase',
// //       letterSpacing: '1.2px',
// //       color: t.textMuted,
// //       fontWeight: 600,
// //       marginRight: '6px',
// //     },
// //     headerNavLink: {
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       fontSize: '13px',
// //       color: t.primary,
// //       background: t.bgGradientStart,
// //       border: `1px solid ${t.borderAccent}`,
// //       borderRadius: '999px',
// //       padding: '5px 13px',
// //       textDecoration: 'none',
// //       fontWeight: 500,
// //     },
// //     cardsGrid: {
// //       display: 'grid',
// //       gridTemplateColumns: 'repeat(2, 1fr)',
// //       gap: '28px',
// //       margin: '40px 0',
// //     },
// //     card: {
// //       display: 'flex',
// //       flexDirection: 'column',
// //       border: `1px solid ${t.border}`,
// //       borderRadius: '10px',
// //       padding: '30px 28px',
// //       backgroundColor: t.cardBg,
// //       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //       scrollMarginTop: '24px',
// //     },
// //     cardIcon: {
// //       display: 'flex',
// //       alignItems: 'center',
// //       justifyContent: 'center',
// //       marginBottom: '14px',
// //       lineHeight: 0,
// //     },
// //     cardLabel: {
// //       fontSize: '12px',
// //       letterSpacing: '0.8px',
// //       textTransform: 'uppercase',
// //       color: t.textMuted,
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       fontWeight: 600,
// //       marginBottom: '6px',
// //     },
// //     cardTitle: {
// //       fontSize: '22px',
// //       fontWeight: 600,
// //       color: t.primaryDark,
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //       marginBottom: '16px',
// //       lineHeight: 1.25,
// //     },
// //     formulaBlock: {
// //       background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
// //       border: `1px solid ${t.borderAccent}`,
// //       borderLeft: `3px solid ${t.primary}`,
// //       borderRadius: '6px',
// //       padding: '20px 22px',
// //       margin: '0 0 20px 0',
// //       textAlign: 'center',
// //       fontSize: '22px',
// //       color: t.primaryDark,
// //       overflowX: 'auto',
// //       overflowY: 'hidden',
// //       scrollbarWidth: 'none',
// //       msOverflowStyle: 'none',
// //     },
// //     blurb: {
// //       fontSize: '17px',
// //       color: t.textBody,
// //       lineHeight: 1.65,
// //       marginBottom: '22px',
// //       flex: '1 1 auto',
// //       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
// //     },
// //     primaryAction: {
// //       display: 'inline-block',
// //       padding: '12px 20px',
// //       background: t.primary,
// //       color: '#ffffff',
// //       borderRadius: '6px',
// //       textDecoration: 'none',
// //       fontSize: '14px',
// //       fontWeight: 600,
// //       textAlign: 'center',
// //       fontFamily: 'system-ui, -apple-system, sans-serif',
// //       letterSpacing: '0.3px',
// //       marginTop: 'auto',
// //     },
// //   }

// //   return (
// //     <>
// //       <style>{`
// //         .vdp-formula-block::-webkit-scrollbar {
// //           display: none;
// //           width: 0;
// //           height: 0;
// //         }
// //         .vdp-header-nav-link:hover {
// //           background: ${t.primary} !important;
// //           color: #ffffff !important;
// //           border-color: ${t.primary} !important;
// //         }
// //         .vdp-sidebar-link:hover {
// //           background: ${t.bgGradientStart} !important;
// //           color: ${t.primaryDark} !important;
// //           border-left-color: ${t.primary} !important;
// //         }
// //         @media (max-width: ${HIDE_BREAKPOINT}px) {
// //           .vdp-sidebar-shell { display: none !important; }
// //         }
// //         @media (max-width: 760px) {
// //           .vdp-cards-grid { grid-template-columns: 1fr !important; }
// //         }
// //       `}</style>

// //       <div style={styles.contentColumn}>

// //         <aside
// //           className="vdp-sidebar-shell"
// //           style={styles.sidebarShell}
// //           aria-label={sidebarTitle}
// //         >
// //           <div style={styles.sidebarSticky}>
// //             <h3 style={styles.sidebarTitle}>{sidebarTitle}</h3>
// //             <ul style={styles.sidebarList}>
// //               {cards.map((c) => (
// //                 <li key={c.slug}>
// //                   <a
// //                     href={`#card-${c.slug}`}
// //                     className="vdp-sidebar-link"
// //                     style={styles.sidebarLink}
// //                   >
// //                     {c.shortNav}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         </aside>

// //         {introContent && (
// //           <div style={styles.introStrip}>
// //             {processContent(introContent)}
// //           </div>
// //         )}

// //         <nav style={styles.headerNav} aria-label="Quick navigation">
// //           <span style={styles.headerNavLabel}>{headerNavLabel}</span>
// //           {cards.map((c) => (
// //             <a
// //               key={c.slug}
// //               href={`#card-${c.slug}`}
// //               className="vdp-header-nav-link"
// //               style={styles.headerNavLink}
// //             >
// //               {c.label}
// //             </a>
// //           ))}
// //         </nav>

// //         <div className="vdp-cards-grid" style={styles.cardsGrid}>
// //           {cards.map((c) => (
// //             <article key={c.slug} id={`card-${c.slug}`} style={styles.card}>
// //               {c.icon && (
// //                 <div style={styles.cardIcon}>
// //                   {c.icon}
// //                 </div>
// //               )}
// //               <div style={styles.cardLabel}>{c.label}</div>
// //               <div style={styles.cardTitle}>{c.title}</div>
// //               {c.formula && (
// //                 <div className="vdp-formula-block" style={styles.formulaBlock}>
// //                   {processContent(c.formula)}
// //                 </div>
// //               )}
// //               <div style={styles.blurb}>
// //                 {processContent(c.blurb)}
// //               </div>
// //               <Link href={c.href} style={styles.primaryAction}>
// //                 {actionLabel}
// //               </Link>
// //             </article>
// //           ))}
// //         </div>

// //       </div>
// //     </>
// //   )
// // }


// import Link from 'next/link'
// import { processContent } from '@/app/utils/contentProcessor'

// // Default color theme — pass `theme` prop to override any subset of these.
// const defaultTheme = {
//   primary:          '#2c5d99',  // buttons, accent borders, hover states
//   primaryDark:      '#143a66',  // titles, formula text
//   border:           '#d8e1ec',  // card / panel borders
//   borderAccent:     '#c8d9ec',  // formula box border, intro strip border
//   borderSubtle:     '#ecf1f7',  // sidebar title underline
//   bgGradientStart:  '#f1f7fd',  // intro / formula gradient left edge
//   bgGradientEnd:    '#e8f1fa',  // intro / formula gradient right edge
//   textBody:         '#3a4a5e',  // blurb body text, sidebar links
//   textMuted:        '#6b7a8f',  // labels, sidebar title, nav label
//   cardBg:           '#ffffff',  // card background, header nav background
//   pageBg:           '#fafbfd',  // (currently unused, exposed for completeness)
// }

// // ---------------------------------------------------------------
// // LAYOUT ARCHITECTURE
// // ---------------------------------------------------------------
// // Everything (intro, header nav, cards) lives inside a single
// // centered column with `position: relative`. The sidebar is
// // `position: absolute` with a NEGATIVE left offset, so it hangs
// // off the column's left edge by exactly (sidebar width + gap).
// // The sidebar is anchored to the COLUMN, not the viewport — so
// // it survives any browser, zoom, scrollbar, or container quirk.
// //
// // Inside the absolute outer shell, a `position: sticky` child
// // handles "stays put on scroll" without participating in any grid.
// //
// // The breakpoint for hiding the sidebar is geometrically derived
// // from the same constants that position it, so the math is
// // internally consistent.
// // ---------------------------------------------------------------

// const COLUMN_WIDTH  = 1180
// const SIDEBAR_WIDTH = 190
// const SIDEBAR_GAP   = 30
// const HIDE_BREAKPOINT = COLUMN_WIDTH + 2 * (SIDEBAR_WIDTH + SIDEBAR_GAP) // 1620

// export default function ViewDynamicPage({
//   cards = [],
//   introContent = '',
//   theme = {},
//   sidebarTitle = 'On this page',
//   headerNavLabel = 'Jump to:',
//   actionLabel = 'Open solver \u2192',
//   countNoun = '',          // e.g. "solvers", "calculators", "visualizers" — leave empty to hide the count pill
//   countPrefix = 'free'     // e.g. "free" → "9 free solvers". Set to '' for just "9 solvers".
// }) {

//   const t = { ...defaultTheme, ...theme }

//   const computedCount = countNoun
//     ? `${cards.length}${countPrefix ? ' ' + countPrefix : ''} ${countNoun}`
//     : ''

//   const styles = {
//     contentColumn: {
//       position: 'relative',
//       maxWidth: `${COLUMN_WIDTH}px`,
//       margin: '0 auto',
//       padding: '0 20px',
//     },
//     sidebarShell: {
//       position: 'absolute',
//       top: '60px',
//       left: `-${SIDEBAR_WIDTH + SIDEBAR_GAP}px`,
//       width: `${SIDEBAR_WIDTH}px`,
//       height: '100%',
//     },
//     sidebarSticky: {
//       position: 'sticky',
//       top: '54px',
//       background: t.cardBg,
//       border: `1px solid ${t.border}`,
//       borderRadius: '8px',
//       padding: '18px 16px',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//       maxHeight: 'calc(100vh - 78px)',
//       overflowY: 'auto',
//     },
//     sidebarTitle: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '11.5px',
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: t.textMuted,
//       fontWeight: 600,
//       margin: '0 0 12px',
//       paddingBottom: '10px',
//       borderBottom: `1px solid ${t.borderSubtle}`,
//     },
//     sidebarList: {
//       listStyle: 'none',
//       padding: 0,
//       margin: 0,
//     },
//     sidebarLink: {
//       display: 'block',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       fontSize: '14px',
//       color: t.textBody,
//       padding: '7px 10px',
//       borderRadius: '5px',
//       textDecoration: 'none',
//       borderLeft: '3px solid transparent',
//       marginBottom: '1px',
//     },
//     introStrip: {
//       background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
//       border: `1px solid ${t.borderAccent}`,
//       borderLeft: `3px solid ${t.primary}`,
//       borderRadius: '8px',
//       padding: '14px 20px',
//       margin: '0 0 26px',
//       color: t.primaryDark,
//       fontSize: '15px',
//       lineHeight: 1.6,
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//     },
//     headerNav: {
//       background: t.cardBg,
//       border: `1px solid ${t.border}`,
//       borderRadius: '8px',
//       padding: '14px 18px',
//       margin: '0 0 28px',
//       display: 'flex',
//       flexWrap: 'wrap',
//       alignItems: 'center',
//       gap: '8px',
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
//     },
//     headerNavLabel: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '11.5px',
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: t.textMuted,
//       fontWeight: 600,
//       marginRight: '6px',
//     },
//     headerNavLink: {
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '13px',
//       color: t.primary,
//       background: t.bgGradientStart,
//       border: `1px solid ${t.borderAccent}`,
//       borderRadius: '999px',
//       padding: '5px 13px',
//       textDecoration: 'none',
//       fontWeight: 500,
//     },
//     headerNavCount: {
//       marginLeft: 'auto',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontSize: '12px',
//       textTransform: 'uppercase',
//       letterSpacing: '1.2px',
//       color: t.primaryDark,
//       fontWeight: 600,
//       background: t.bgGradientStart,
//       border: `1px solid ${t.borderAccent}`,
//       borderRadius: '999px',
//       padding: '5px 13px',
//       whiteSpace: 'nowrap',
//     },
//     cardsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '28px',
//       margin: '40px 0',
//     },
//     card: {
//       display: 'flex',
//       flexDirection: 'column',
//       border: `1px solid ${t.border}`,
//       borderRadius: '10px',
//       padding: '30px 28px',
//       backgroundColor: t.cardBg,
//       boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       scrollMarginTop: '24px',
//     },
//     cardIcon: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginBottom: '14px',
//       lineHeight: 0,
//     },
//     cardLabel: {
//       fontSize: '12px',
//       letterSpacing: '0.8px',
//       textTransform: 'uppercase',
//       color: t.textMuted,
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       fontWeight: 600,
//       marginBottom: '6px',
//     },
//     cardTitle: {
//       fontSize: '22px',
//       fontWeight: 600,
//       color: t.primaryDark,
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//       marginBottom: '16px',
//       lineHeight: 1.25,
//     },
//     formulaBlock: {
//       background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
//       border: `1px solid ${t.borderAccent}`,
//       borderLeft: `3px solid ${t.primary}`,
//       borderRadius: '6px',
//       padding: '20px 22px',
//       margin: '0 0 20px 0',
//       textAlign: 'center',
//       fontSize: '22px',
//       color: t.primaryDark,
//       overflowX: 'auto',
//       overflowY: 'hidden',
//       scrollbarWidth: 'none',
//       msOverflowStyle: 'none',
//     },
//     blurb: {
//       fontSize: '17px',
//       color: t.textBody,
//       lineHeight: 1.65,
//       marginBottom: '22px',
//       flex: '1 1 auto',
//       fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
//     },
//     primaryAction: {
//       display: 'inline-block',
//       padding: '12px 20px',
//       background: t.primary,
//       color: '#ffffff',
//       borderRadius: '6px',
//       textDecoration: 'none',
//       fontSize: '14px',
//       fontWeight: 600,
//       textAlign: 'center',
//       fontFamily: 'system-ui, -apple-system, sans-serif',
//       letterSpacing: '0.3px',
//       marginTop: 'auto',
//     },
//   }

//   return (
//     <>
//       <style>{`
//         .vdp-formula-block::-webkit-scrollbar {
//           display: none;
//           width: 0;
//           height: 0;
//         }
//         .vdp-header-nav-link:hover {
//           background: ${t.primary} !important;
//           color: #ffffff !important;
//           border-color: ${t.primary} !important;
//         }
//         .vdp-sidebar-link:hover {
//           background: ${t.bgGradientStart} !important;
//           color: ${t.primaryDark} !important;
//           border-left-color: ${t.primary} !important;
//         }
//         @media (max-width: ${HIDE_BREAKPOINT}px) {
//           .vdp-sidebar-shell { display: none !important; }
//         }
//         @media (max-width: 760px) {
//           .vdp-cards-grid { grid-template-columns: 1fr !important; }
//           .vdp-header-nav-count { margin-left: 0 !important; }
//         }
//       `}</style>

//       <div style={styles.contentColumn}>

//         <aside
//           className="vdp-sidebar-shell"
//           style={styles.sidebarShell}
//           aria-label={sidebarTitle}
//         >
//           <div style={styles.sidebarSticky}>
//             <h3 style={styles.sidebarTitle}>{sidebarTitle}</h3>
//             <ul style={styles.sidebarList}>
//               {cards.map((c) => (
//                 <li key={c.slug}>
//                   <a
//                     href={`#card-${c.slug}`}
//                     className="vdp-sidebar-link"
//                     style={styles.sidebarLink}
//                   >
//                     {c.shortNav}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </aside>

//         {introContent && (
//           <div style={styles.introStrip}>
//             {processContent(introContent)}
//           </div>
//         )}

//         <nav style={styles.headerNav} aria-label="Quick navigation">
//           <span style={styles.headerNavLabel}>{headerNavLabel}</span>
//           {cards.map((c) => (
//             <a
//               key={c.slug}
//               href={`#card-${c.slug}`}
//               className="vdp-header-nav-link"
//               style={styles.headerNavLink}
//             >
//               {c.label}
//             </a>
//           ))}
//           {computedCount && (
//             <span className="vdp-header-nav-count" style={styles.headerNavCount}>
//               {computedCount}
//             </span>
//           )}
//         </nav>

//         <div className="vdp-cards-grid" style={styles.cardsGrid}>
//           {cards.map((c) => (
//             <article key={c.slug} id={`card-${c.slug}`} style={styles.card}>
//               {c.icon && (
//                 <div style={styles.cardIcon}>
//                   {c.icon}
//                 </div>
//               )}
//               <div style={styles.cardLabel}>{c.label}</div>
//               <div style={styles.cardTitle}>{c.title}</div>
//               {c.formula && (
//                 <div className="vdp-formula-block" style={styles.formulaBlock}>
//                   {processContent(c.formula)}
//                 </div>
//               )}
//               <div style={styles.blurb}>
//                 {processContent(c.blurb)}
//               </div>
//               <Link href={c.href} style={styles.primaryAction}>
//                 {actionLabel}
//               </Link>
//             </article>
//           ))}
//         </div>

//       </div>
//     </>
//   )
// }


import Link from 'next/link'
import { useState } from 'react'
import { processContent } from '@/app/utils/contentProcessor'

// Default color theme — pass `theme` prop to override any subset of these.
const defaultTheme = {
  primary:          '#2c5d99',  // buttons, accent borders, hover states
  primaryDark:      '#143a66',  // titles, formula text
  border:           '#d8e1ec',  // card / panel borders
  borderAccent:     '#c8d9ec',  // formula box border, intro strip border
  borderSubtle:     '#ecf1f7',  // sidebar title underline
  bgGradientStart:  '#f1f7fd',  // intro / formula gradient left edge
  bgGradientEnd:    '#e8f1fa',  // intro / formula gradient right edge
  textBody:         '#3a4a5e',  // blurb body text, sidebar links
  textMuted:        '#6b7a8f',  // labels, sidebar title, nav label
  cardBg:           '#ffffff',  // card background, header nav background
  pageBg:           '#fafbfd',  // (currently unused, exposed for completeness)
}

// ---------------------------------------------------------------
// LAYOUT ARCHITECTURE
// ---------------------------------------------------------------
// Everything (intro, header nav, cards) lives inside a single
// centered column with `position: relative`. The sidebar is
// `position: absolute` with a NEGATIVE left offset, so it hangs
// off the column's left edge by exactly (sidebar width + gap).
// The sidebar is anchored to the COLUMN, not the viewport — so
// it survives any browser, zoom, scrollbar, or container quirk.
//
// Inside the absolute outer shell, a `position: sticky` child
// handles "stays put on scroll" without participating in any grid.
//
// The breakpoint for hiding the sidebar is geometrically derived
// from the same constants that position it, so the math is
// internally consistent.
// ---------------------------------------------------------------

const COLUMN_WIDTH  = 1180
const SIDEBAR_WIDTH = 190
const SIDEBAR_GAP   = 30
const HIDE_BREAKPOINT = COLUMN_WIDTH + 2 * (SIDEBAR_WIDTH + SIDEBAR_GAP) // 1620

export default function ViewDynamicPage({
  cards = [],
  introContent = '',
  theme = {},
  sidebarTitle = 'On this page',
  headerNavLabel = 'Jump to:',
  actionLabel = 'Open solver \u2192',
  countNoun = '',
  countPrefix = 'free',

  // ---- ARTICLE (optional) ----
  // article = {
  //   eyebrow: 'Why use these tools',         // optional small uppercase label
  //   title:   'Heading goes here',           // optional large heading
  //   content: 'Markdown body...'             // required if article present (processContent renders it)
  // }
  article = null,

  // ---- VIDEOS (optional) ----
  // videos = [
  //   { id: 'abc',       // any unique id
  //     title: '...',    // shown in player meta + playlist
  //     duration: '3:12',// optional
  //     embedUrl: 'https://www.youtube.com/embed/...',  // iframe src for modal
  //     thumbnail: '...' // optional image url; if omitted a gradient placeholder is shown
  //   }, ...
  // ]
  videos = [],

  // ---- VIDEO LAYOUT (only matters if videos.length > 0) ----
  // 'above'  — player + playlist accordion above the article
  // 'beside' — player + sticky vertical playlist beside the article (2-col split)
  // 'below'  — player + playlist accordion below the article (CTA position)
  // 'strip'  — grid of clickable thumbnails, no fixed player (modal opens on click)
  videoLayout = 'beside',

  // ---- VIDEO COPY (optional overrides) ----
  videosHeading = 'Walkthroughs',
  videosCtaLabel = 'Watch the walkthrough',
  videosStripTitle = 'Watch a quick intro for any topic'
}) {

  const t = { ...defaultTheme, ...theme }

  const computedCount = countNoun
    ? `${cards.length}${countPrefix ? ' ' + countPrefix : ''} ${countNoun}`
    : ''

  // ---- video state ----
  const hasVideos = Array.isArray(videos) && videos.length > 0
  const hasArticle = article && (article.title || article.content || article.eyebrow)
  const [activeVideoIdx, setActiveVideoIdx] = useState(0)
  const [modalVideo, setModalVideo] = useState(null) // currently playing in modal; null = closed
  const [playlistOpen, setPlaylistOpen] = useState(true)

  const activeVideo = hasVideos ? videos[activeVideoIdx] : null

  const styles = {
    contentColumn: {
      position: 'relative',
      maxWidth: `${COLUMN_WIDTH}px`,
      margin: '0 auto',
      padding: '0 20px',
    },
    sidebarShell: {
      position: 'absolute',
      top: '60px',
      left: `-${SIDEBAR_WIDTH + SIDEBAR_GAP}px`,
      width: `${SIDEBAR_WIDTH}px`,
      height: '100%',
    },
    sidebarSticky: {
      position: 'sticky',
      top: '54px',
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: '8px',
      padding: '18px 16px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
      maxHeight: 'calc(100vh - 78px)',
      overflowY: 'auto',
    },
    sidebarTitle: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: t.textMuted,
      fontWeight: 600,
      margin: '0 0 12px',
      paddingBottom: '10px',
      borderBottom: `1px solid ${t.borderSubtle}`,
    },
    sidebarList: { listStyle: 'none', padding: 0, margin: 0 },
    sidebarLink: {
      display: 'block',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      fontSize: '14px',
      color: t.textBody,
      padding: '7px 10px',
      borderRadius: '5px',
      textDecoration: 'none',
      borderLeft: '3px solid transparent',
      marginBottom: '1px',
    },
    introStrip: {
      background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
      border: `1px solid ${t.borderAccent}`,
      borderLeft: `3px solid ${t.primary}`,
      borderRadius: '8px',
      padding: '14px 20px',
      margin: '0 0 26px',
      color: t.primaryDark,
      fontSize: '15px',
      lineHeight: 1.6,
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
    },
    headerNav: {
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: '8px',
      padding: '14px 18px',
      margin: '0 0 28px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '8px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
    },
    headerNavLabel: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: t.textMuted,
      fontWeight: 600,
      marginRight: '6px',
    },
    headerNavLink: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '13px',
      color: t.primary,
      background: t.bgGradientStart,
      border: `1px solid ${t.borderAccent}`,
      borderRadius: '999px',
      padding: '5px 13px',
      textDecoration: 'none',
      fontWeight: 500,
    },
    headerNavCount: {
      marginLeft: 'auto',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: t.primaryDark,
      fontWeight: 600,
      background: t.bgGradientStart,
      border: `1px solid ${t.borderAccent}`,
      borderRadius: '999px',
      padding: '5px 13px',
      whiteSpace: 'nowrap',
    },

    // ---- ARTICLE ----
    articleBlock: {
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: '10px',
      padding: '32px 36px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      color: t.textBody,
      lineHeight: 1.7,
      fontSize: '16px',
    },
    articleEyebrow: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      textTransform: 'uppercase',
      letterSpacing: '1.4px',
      color: t.textMuted,
      fontWeight: 600,
      margin: '0 0 8px',
    },
    articleTitle: {
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      fontSize: '26px',
      fontWeight: 600,
      color: t.primaryDark,
      margin: '0 0 22px',
      lineHeight: 1.25,
      letterSpacing: '-0.2px',
    },

    // ---- VIDEO PLAYER (clickable thumbnail) ----
    player: {
      position: 'relative',
      width: '100%',
      aspectRatio: '16 / 9',
      background: `linear-gradient(135deg, #1f4577 0%, ${t.primaryDark} 100%)`,
      borderRadius: '8px',
      overflow: 'hidden',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      padding: 0,
    },
    playerThumb: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.7,
    },
    playButton: {
      position: 'relative',
      zIndex: 2,
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
    },
    playArrow: {
      width: 0,
      height: 0,
      borderLeft: `16px solid ${t.primary}`,
      borderTop: '11px solid transparent',
      borderBottom: '11px solid transparent',
      marginLeft: '4px',
    },
    playerMeta: {
      position: 'absolute',
      bottom: '14px',
      left: '16px',
      right: '16px',
      zIndex: 2,
      color: '#fff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      textAlign: 'left',
    },
    playerTitle: { fontSize: '15px', fontWeight: 600, margin: '0 0 4px' },
    playerDuration: { fontSize: '12px', opacity: 0.85, margin: 0 },

    // ---- VERTICAL PLAYLIST (beside layout) ----
    vPlaylist: {
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
      maxHeight: '320px',
      overflowY: 'auto',
      marginTop: '14px',
    },
    vPlaylistHeader: {
      padding: '12px 16px',
      borderBottom: `1px solid ${t.borderSubtle}`,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: t.textMuted,
      fontWeight: 600,
      background: t.pageBg,
      position: 'sticky',
      top: 0,
      zIndex: 1,
      display: 'flex',
      justifyContent: 'space-between',
    },
    vCountSpan: {
      color: t.primary,
      textTransform: 'none',
      letterSpacing: 0,
      fontSize: '12px',
    },
    vPlaylistItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 14px',
      cursor: 'pointer',
      borderBottom: `1px solid ${t.borderSubtle}`,
      borderLeft: '3px solid transparent',
      background: 'transparent',
      width: '100%',
      textAlign: 'left',
    },
    vThumb: {
      width: '64px',
      height: '36px',
      flexShrink: 0,
      borderRadius: '4px',
      background: `linear-gradient(135deg, #1f4577 0%, ${t.primaryDark} 100%)`,
      position: 'relative',
      overflow: 'hidden',
    },
    vThumbImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.85,
    },
    vInfo: { flex: '1 1 auto', minWidth: 0 },
    vItemTitle: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '13px',
      fontWeight: 500,
      color: t.primaryDark,
      margin: '0 0 2px',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    vItemDuration: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      color: t.textMuted,
      margin: 0,
    },

    // ---- HORIZONTAL PLAYLIST (above/below layouts, accordion) ----
    hPlaylistWrap: {
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: '8px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
      overflow: 'hidden',
      marginTop: '14px',
    },
    hPlaylistToggle: {
      width: '100%',
      padding: '12px 16px',
      background: t.pageBg,
      border: 'none',
      borderBottom: playlistOpen ? `1px solid ${t.borderSubtle}` : 'none',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
      color: t.textMuted,
      fontWeight: 600,
      cursor: 'pointer',
      textAlign: 'left',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    hChevron: {
      width: 0,
      height: 0,
      borderLeft: '5px solid transparent',
      borderRight: '5px solid transparent',
      borderTop: `6px solid ${t.textMuted}`,
      marginLeft: '10px',
      transform: playlistOpen ? 'rotate(0deg)' : 'rotate(-90deg)',
      transition: 'transform 0.2s',
    },
    hPlaylistStrip: {
      display: playlistOpen ? 'grid' : 'none',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '12px',
      padding: '16px',
    },
    hCard: {
      cursor: 'pointer',
      borderRadius: '6px',
      padding: '4px',
      border: '2px solid transparent',
      background: 'transparent',
      textAlign: 'left',
      width: '100%',
    },
    hCardActive: {
      borderColor: t.primary,
      background: '#eef4fb',
    },
    hThumb: {
      width: '100%',
      aspectRatio: '16 / 9',
      background: `linear-gradient(135deg, #1f4577 0%, ${t.primaryDark} 100%)`,
      borderRadius: '4px',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '6px',
    },
    hCardTitle: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '12.5px',
      fontWeight: 500,
      color: t.primaryDark,
      margin: '0 0 2px',
      lineHeight: 1.3,
    },
    hCardDuration: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11px',
      color: t.textMuted,
      margin: 0,
    },

    // ---- STRIP-ONLY LAYOUT ----
    stripOnly: {
      background: t.cardBg,
      border: `1px solid ${t.border}`,
      borderRadius: '10px',
      padding: '20px 24px',
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.04)',
      marginBottom: '36px',
    },
    stripOnlyHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '14px',
    },
    stripOnlyTitle: {
      fontSize: '17px',
      fontWeight: 600,
      color: t.primaryDark,
      margin: 0,
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
    },
    stripOnlySubtitle: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '12px',
      color: t.textMuted,
      textTransform: 'uppercase',
      letterSpacing: '1.2px',
    },
    stripOnlyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
      gap: '14px',
    },

    // ---- BESIDE LAYOUT (2-col split) ----
    besideGrid: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr',
      gap: '32px',
      alignItems: 'start',
      marginBottom: '36px',
    },
    besideVideoCol: { position: 'sticky', top: '20px' },

    // ---- BELOW CTA WRAP ----
    belowCtaWrap: {
      marginTop: '24px',
      paddingTop: '24px',
      borderTop: `1px solid ${t.borderSubtle}`,
    },
    belowCtaLabel: {
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '11.5px',
      textTransform: 'uppercase',
      letterSpacing: '1.4px',
      color: t.textMuted,
      fontWeight: 600,
      margin: '0 0 12px',
    },

    // ---- MODAL ----
    modalOverlay: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(10, 22, 40, 0.85)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    },
    modalInner: {
      position: 'relative',
      width: '100%',
      maxWidth: '960px',
      aspectRatio: '16 / 9',
      background: '#000',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    },
    modalIframe: {
      width: '100%',
      height: '100%',
      border: 'none',
    },
    modalClose: {
      position: 'absolute',
      top: '-44px',
      right: '0',
      background: 'transparent',
      border: 'none',
      color: '#fff',
      fontSize: '28px',
      cursor: 'pointer',
      padding: '4px 12px',
      lineHeight: 1,
    },

    // ---- CARDS GRID ----
    cardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '28px',
      margin: '40px 0',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      border: `1px solid ${t.border}`,
      borderRadius: '10px',
      padding: '30px 28px',
      backgroundColor: t.cardBg,
      boxShadow: '0 1px 3px rgba(20, 58, 102, 0.06), 0 4px 12px rgba(20, 58, 102, 0.04)',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      scrollMarginTop: '24px',
    },
    cardIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '14px',
      lineHeight: 0,
    },
    cardLabel: {
      fontSize: '12px',
      letterSpacing: '0.8px',
      textTransform: 'uppercase',
      color: t.textMuted,
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontWeight: 600,
      marginBottom: '6px',
    },
    cardTitle: {
      fontSize: '22px',
      fontWeight: 600,
      color: t.primaryDark,
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
      marginBottom: '16px',
      lineHeight: 1.25,
    },
    formulaBlock: {
      background: `linear-gradient(to right, ${t.bgGradientStart} 0%, ${t.bgGradientEnd} 100%)`,
      border: `1px solid ${t.borderAccent}`,
      borderLeft: `3px solid ${t.primary}`,
      borderRadius: '6px',
      padding: '20px 22px',
      margin: '0 0 20px 0',
      textAlign: 'center',
      fontSize: '22px',
      color: t.primaryDark,
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
    blurb: {
      fontSize: '17px',
      color: t.textBody,
      lineHeight: 1.65,
      marginBottom: '22px',
      flex: '1 1 auto',
      fontFamily: 'Georgia, &apos;Times New Roman&apos;, serif',
    },
    primaryAction: {
      display: 'inline-block',
      padding: '12px 20px',
      background: t.primary,
      color: '#ffffff',
      borderRadius: '6px',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: 600,
      textAlign: 'center',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '0.3px',
      marginTop: 'auto',
    },
  }

  // ---- helpers ----
  function openModal(video) {
    setModalVideo(video)
  }
  function closeModal() {
    setModalVideo(null)
  }
  function selectVideo(idx) {
    setActiveVideoIdx(idx)
    openModal(videos[idx])
  }

  function renderPlayerThumb(video) {
    return (
      <button
        type="button"
        style={styles.player}
        onClick={() => video && openModal(video)}
      >
        {video?.thumbnail && (
          <img src={video.thumbnail} alt="" style={styles.playerThumb} />
        )}
        <div style={styles.playButton}>
          <div style={styles.playArrow}></div>
        </div>
        {video && (
          <div style={styles.playerMeta}>
            <p style={styles.playerTitle}>{video.title}</p>
            {video.duration && <p style={styles.playerDuration}>{video.duration}</p>}
          </div>
        )}
      </button>
    )
  }

  function renderVerticalPlaylist() {
    return (
      <div style={styles.vPlaylist}>
        <div style={styles.vPlaylistHeader}>
          <span>{videosHeading}</span>
          <span style={styles.vCountSpan}>{videos.length} videos</span>
        </div>
        {videos.map((v, idx) => {
          const isActive = idx === activeVideoIdx
          return (
            <button
              key={v.id}
              type="button"
              className="vdp-v-playlist-item"
              style={{
                ...styles.vPlaylistItem,
                ...(isActive ? { background: '#eef4fb', borderLeftColor: t.primary } : {})
              }}
              onClick={() => selectVideo(idx)}
            >
              <div style={styles.vThumb}>
                {v.thumbnail && <img src={v.thumbnail} alt="" style={styles.vThumbImg} />}
              </div>
              <div style={styles.vInfo}>
                <p style={{ ...styles.vItemTitle, ...(isActive ? { color: t.primary } : {}) }}>{v.title}</p>
                {v.duration && <p style={styles.vItemDuration}>{v.duration}</p>}
              </div>
            </button>
          )
        })}
      </div>
    )
  }

  function renderHorizontalPlaylist() {
    return (
      <div style={styles.hPlaylistWrap}>
        <button
          type="button"
          style={styles.hPlaylistToggle}
          onClick={() => setPlaylistOpen(o => !o)}
        >
          <span>
            {videosHeading}
            <span style={{ ...styles.vCountSpan, marginLeft: '6px' }}>{videos.length} videos</span>
          </span>
          <span style={styles.hChevron}></span>
        </button>
        <div style={styles.hPlaylistStrip}>
          {videos.map((v, idx) => {
            const isActive = idx === activeVideoIdx
            return (
              <button
                key={v.id}
                type="button"
                style={{ ...styles.hCard, ...(isActive ? styles.hCardActive : {}) }}
                onClick={() => selectVideo(idx)}
              >
                <div style={styles.hThumb}>
                  {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
                </div>
                <p style={styles.hCardTitle}>{v.title}</p>
                {v.duration && <p style={styles.hCardDuration}>{v.duration}</p>}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  function renderArticle() {
    if (!hasArticle) return null
    return (
      <div style={styles.articleBlock}>
        {article.eyebrow && <p style={styles.articleEyebrow}>{article.eyebrow}</p>}
        {article.title && <h2 style={styles.articleTitle}>{article.title}</h2>}
        {article.content && processContent(article.content)}
      </div>
    )
  }

  // ---- assemble article + video block based on layout ----
  function renderArticleVideoBlock() {
    // No article AND no videos → render nothing
    if (!hasArticle && !hasVideos) return null

    // Videos only, no article: just render whatever video layout is appropriate
    // (strip-only is the obvious choice; otherwise show a single player + playlist standalone)
    if (!hasArticle && hasVideos) {
      if (videoLayout === 'strip') {
        return (
          <div style={styles.stripOnly}>
            <div style={styles.stripOnlyHeader}>
              <h3 style={styles.stripOnlyTitle}>{videosStripTitle}</h3>
              <span style={styles.stripOnlySubtitle}>{videos.length} videos</span>
            </div>
            <div style={styles.stripOnlyGrid}>
              {videos.map((v, idx) => (
                <button
                  key={v.id}
                  type="button"
                  style={styles.hCard}
                  onClick={() => selectVideo(idx)}
                >
                  <div style={styles.hThumb}>
                    {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
                  </div>
                  <p style={styles.hCardTitle}>{v.title}</p>
                  {v.duration && <p style={styles.hCardDuration}>{v.duration}</p>}
                </button>
              ))}
            </div>
          </div>
        )
      }
      return (
        <div style={{ marginBottom: '36px' }}>
          {renderPlayerThumb(activeVideo)}
          {videos.length > 1 && renderHorizontalPlaylist()}
        </div>
      )
    }

    // Article only, no videos
    if (hasArticle && !hasVideos) {
      return <div style={{ marginBottom: '36px' }}>{renderArticle()}</div>
    }

    // Both article + videos
    if (videoLayout === 'strip') {
      // Strip layout: strip first, then article (or article then strip — pick: article first for reading priority)
      return (
        <>
          <div style={{ marginBottom: '28px' }}>{renderArticle()}</div>
          <div style={styles.stripOnly}>
            <div style={styles.stripOnlyHeader}>
              <h3 style={styles.stripOnlyTitle}>{videosStripTitle}</h3>
              <span style={styles.stripOnlySubtitle}>{videos.length} videos</span>
            </div>
            <div style={styles.stripOnlyGrid}>
              {videos.map((v, idx) => (
                <button
                  key={v.id}
                  type="button"
                  style={styles.hCard}
                  onClick={() => selectVideo(idx)}
                >
                  <div style={styles.hThumb}>
                    {v.thumbnail && <img src={v.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />}
                  </div>
                  <p style={styles.hCardTitle}>{v.title}</p>
                  {v.duration && <p style={styles.hCardDuration}>{v.duration}</p>}
                </button>
              ))}
            </div>
          </div>
        </>
      )
    }

    if (videoLayout === 'above') {
      return (
        <div style={{ marginBottom: '36px' }}>
          {renderPlayerThumb(activeVideo)}
          {videos.length > 1 && renderHorizontalPlaylist()}
          <div style={{ marginTop: '28px' }}>{renderArticle()}</div>
        </div>
      )
    }

    if (videoLayout === 'beside') {
      return (
        <div style={styles.besideGrid}>
          {renderArticle()}
          <div style={styles.besideVideoCol}>
            {renderPlayerThumb(activeVideo)}
            {videos.length > 1 && renderVerticalPlaylist()}
          </div>
        </div>
      )
    }

    // 'below' (default fallback)
    return (
      <div style={{ marginBottom: '36px' }}>
        <div style={styles.articleBlock}>
          {article.eyebrow && <p style={styles.articleEyebrow}>{article.eyebrow}</p>}
          {article.title && <h2 style={styles.articleTitle}>{article.title}</h2>}
          {article.content && processContent(article.content)}

          <div style={styles.belowCtaWrap}>
            <p style={styles.belowCtaLabel}>{videosCtaLabel}</p>
            {renderPlayerThumb(activeVideo)}
            {videos.length > 1 && renderHorizontalPlaylist()}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <style>{`
        .vdp-formula-block::-webkit-scrollbar {
          display: none; width: 0; height: 0;
        }
        .vdp-header-nav-link:hover {
          background: ${t.primary} !important;
          color: #ffffff !important;
          border-color: ${t.primary} !important;
        }
        .vdp-sidebar-link:hover {
          background: ${t.bgGradientStart} !important;
          color: ${t.primaryDark} !important;
          border-left-color: ${t.primary} !important;
        }
        .vdp-v-playlist-item:hover {
          background: ${t.bgGradientStart} !important;
        }
        @media (max-width: ${HIDE_BREAKPOINT}px) {
          .vdp-sidebar-shell { display: none !important; }
        }
        @media (max-width: 760px) {
          .vdp-cards-grid { grid-template-columns: 1fr !important; }
          .vdp-header-nav-count { margin-left: 0 !important; }
          .vdp-beside-grid { grid-template-columns: 1fr !important; }
          .vdp-beside-video-col { position: static !important; }
        }
      `}</style>

      <div style={styles.contentColumn}>

        <aside
          className="vdp-sidebar-shell"
          style={styles.sidebarShell}
          aria-label={sidebarTitle}
        >
          <div style={styles.sidebarSticky}>
            <h3 style={styles.sidebarTitle}>{sidebarTitle}</h3>
            <ul style={styles.sidebarList}>
              {cards.map((c) => (
                <li key={c.slug}>
                  <a
                    href={`#card-${c.slug}`}
                    className="vdp-sidebar-link"
                    style={styles.sidebarLink}
                  >
                    {c.shortNav}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {introContent && (
          <div style={styles.introStrip}>
            {processContent(introContent)}
          </div>
        )}

        <nav style={styles.headerNav} aria-label="Quick navigation">
          <span style={styles.headerNavLabel}>{headerNavLabel}</span>
          {cards.map((c) => (
            <a
              key={c.slug}
              href={`#card-${c.slug}`}
              className="vdp-header-nav-link"
              style={styles.headerNavLink}
            >
              {c.label}
            </a>
          ))}
          {computedCount && (
            <span className="vdp-header-nav-count" style={styles.headerNavCount}>
              {computedCount}
            </span>
          )}
        </nav>

        {renderArticleVideoBlock()}

        <div className="vdp-cards-grid" style={styles.cardsGrid}>
          {cards.map((c) => (
            <article key={c.slug} id={`card-${c.slug}`} style={styles.card}>
              {c.icon && (
                <div style={styles.cardIcon}>
                  {c.icon}
                </div>
              )}
              <div style={styles.cardLabel}>{c.label}</div>
              <div style={styles.cardTitle}>{c.title}</div>
              {c.formula && (
                <div className="vdp-formula-block" style={styles.formulaBlock}>
                  {processContent(c.formula)}
                </div>
              )}
              <div style={styles.blurb}>
                {processContent(c.blurb)}
              </div>
              <Link href={c.href} style={styles.primaryAction}>
                {actionLabel}
              </Link>
            </article>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {modalVideo && (
        <div
          style={styles.modalOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            style={styles.modalInner}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              style={styles.modalClose}
              onClick={closeModal}
              aria-label="Close video"
            >
              ✕
            </button>
            {modalVideo.embedUrl ? (
              <iframe
                src={modalVideo.embedUrl}
                style={styles.modalIframe}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={modalVideo.title}
              />
            ) : (
              <div style={{ color: '#fff', padding: '40px', textAlign: 'center' }}>
                No embedUrl provided for this video.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}