
// // // // /**
// // // //  * VisualToolsPage v25 — file 1 of 3 (visualToolsCards.jsx)
// // // //  *
// // // //  * Change from v24:
// // // //  *   - Visual fields (image/svg/icon) are now read from item.* OR
// // // //  *     item.seoData.* via rawImage/rawSvg/rawIcon helpers. buildToolIndexData
// // // //  *     forwards seoData without lifting svg/icon/image to the top level, so
// // // //  *     getVisualType was returning null and every card collapsed to text-only
// // // //  *     v3. Now the seoData-nested values are picked up.
// // // //  *
// // // //  * Change from v24 (prior):
// // // //  *   - CardIconBadge (V3/B3) now also accepts an SVG string passed via
// // // //  *     item.icon, not only item.svg. This matches the SidebarIcon convention
// // // //  *     where the `icon` field may itself be raw <svg> markup.
// // // //  *   - Precedence: item.svg → item.icon-as-svg → item.icon-as-text.
// // // //  *
// // // //  * Change from v22:
// // // //  *   - MiniV3 + BigB3 icon badges render inline SVG via CardIconBadge.
// // // //  */

// // // // import React, { useMemo, useState, useEffect } from 'react';
// // // // import Link from 'next/link';
// // // // import Image from 'next/image';
// // // // import { processContent } from '@/app/utils/contentProcessor';


// // // // /* ================================================================
// // // //    CONSTANTS
// // // //    ================================================================ */

// // // // export const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// // // // export const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// // // // export const NAVBAR_HEIGHT = 55;
// // // // export const SIDEBAR_COLLAPSED = 68;
// // // // export const SIDEBAR_EXPANDED = 290;
// // // // export const MOBILE_BREAKPOINT = 768;

// // // // export const UNCATEGORIZED_LABEL = 'Other';
// // // // export const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// // // // export const CTA_OPEN = 'Open tool →';
// // // // export const CTA_VIEW = 'View Details';

// // // // export const DEFAULT_CARD_HEIGHTS = {
// // // //   v1: 320, v2: 200, v3: 220, v4: 300,
// // // //   b1: 280, b2: 360, b3: 240,
// // // // };

// // // // export const FADE_PX = 28;

// // // // export const VALID_VIDEO_LAYOUTS = new Set(['above', 'beside', 'below', 'strip']);


// // // // /* ================================================================
// // // //    INLINE UTILITIES
// // // //    ================================================================ */

// // // // export const hexToRgba = (hex, alpha) => {
// // // //   const h = hex.replace('#', '');
// // // //   const r = parseInt(h.substring(0, 2), 16);
// // // //   const g = parseInt(h.substring(2, 4), 16);
// // // //   const b = parseInt(h.substring(4, 6), 16);
// // // //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // // // };

// // // // export const generateShortTitle = (title = '') =>
// // // //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // // // export function slugify(s) {
// // // //   return String(s || '').toLowerCase().trim()
// // // //     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// // // // }

// // // // export function isValidImagePath(val) {
// // // //   if (typeof val !== 'string') return false;
// // // //   const v = val.trim();
// // // //   if (!v) return false;
// // // //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // // // }

// // // // export function isValidSvg(val) {
// // // //   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// // // // }

// // // // export function isValidIcon(val) {
// // // //   if (typeof val !== 'string') return false;
// // // //   const v = val.trim();
// // // //   if (!v) return false;
// // // //   if (v.startsWith('/') || v.startsWith('http')) return false;
// // // //   if (v.toLowerCase().startsWith('<svg')) return false;
// // // //   return true;
// // // // }

// // // // export function constrainSvg(svg) {
// // // //   return svg.replace(
// // // //     /<svg\b([^>]*)>/i,
// // // //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// // // //   );
// // // // }

// // // // /* Visual fields may live at item.* or item.seoData.* (buildToolIndexData
// // // //    forwards seoData without lifting these to the top level). */
// // // // export function rawImage(item) {
// // // //   if (!item) return undefined;
// // // //   return item.image != null ? item.image : (item.seoData ? item.seoData.image : undefined);
// // // // }
// // // // export function rawSvg(item) {
// // // //   if (!item) return undefined;
// // // //   return item.svg != null ? item.svg : (item.seoData ? item.seoData.svg : undefined);
// // // // }
// // // // export function rawIcon(item) {
// // // //   if (!item) return undefined;
// // // //   return item.icon != null ? item.icon : (item.seoData ? item.seoData.icon : undefined);
// // // // }

// // // // export function wrapFormula(f) {
// // // //   if (!f) return '';
// // // //   const t = String(f).trim();
// // // //   if (!t) return '';
// // // //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// // // //   return `$${t}$`;
// // // // }

// // // // export function getVisualType(item) {
// // // //   if (!item) return null;
// // // //   if (isValidImagePath(rawImage(item))) return 'image';
// // // //   if (isValidSvg(rawSvg(item))) return 'svg';
// // // //   if (isValidIcon(rawIcon(item))) return 'icon';
// // // //   return null;
// // // // }

// // // // export function toolIdFor(item, fallbackIdx = 0) {
// // // //   if (item && item.id) return `tool-${slugify(item.id)}`;
// // // //   if (item && item.title) return `tool-${slugify(item.title)}`;
// // // //   return `tool-${fallbackIdx}`;
// // // // }

// // // // export function subGroupId(categoryName, subName) {
// // // //   return `sub-${slugify(categoryName)}-${slugify(subName)}`;
// // // // }

// // // // export function categoryId(categoryName) {
// // // //   return `cat-${slugify(categoryName)}`;
// // // // }

// // // // export function resolveCardHeight(item, variant, cardHeights) {
// // // //   if (item && Number.isFinite(item.cardHeight)) return item.cardHeight;
// // // //   if (cardHeights && Number.isFinite(cardHeights[variant])) return cardHeights[variant];
// // // //   return DEFAULT_CARD_HEIGHTS[variant];
// // // // }

// // // // export function hasArticleContent(a) {
// // // //   if (!a || typeof a !== 'object') return false;
// // // //   return !!(a.eyebrow || a.title || a.content);
// // // // }

// // // // export function sanitizeVideos(videos) {
// // // //   if (!Array.isArray(videos)) return [];
// // // //   return videos.filter((v) => v && (v.embedUrl || v.title));
// // // // }

// // // // export function sanitizeVideoLayout(layout) {
// // // //   if (typeof layout !== 'string') return 'beside';
// // // //   const l = layout.toLowerCase();
// // // //   return VALID_VIDEO_LAYOUTS.has(l) ? l : 'beside';
// // // // }


// // // // /* ================================================================
// // // //    HOOKS
// // // //    ================================================================ */

// // // // export const useIsMobile = () => {
// // // //   const [isMobile, setIsMobile] = useState(false);
// // // //   useEffect(() => {
// // // //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
// // // //     const update = () => setIsMobile(mql.matches);
// // // //     update();
// // // //     mql.addEventListener('change', update);
// // // //     return () => mql.removeEventListener('change', update);
// // // //   }, []);
// // // //   return isMobile;
// // // // };


// // // // /* ================================================================
// // // //    GRID LAYOUT
// // // //    ================================================================ */

// // // // export function rowSizes(N) {
// // // //   if (!Number.isFinite(N) || N <= 0) return [];
// // // //   if (N === 1) return [1];
// // // //   if (N % 3 === 1 && N >= 4) {
// // // //     const fullThrees = (N - 4) / 3;
// // // //     return [...Array(fullThrees).fill(3), 2, 2];
// // // //   }
// // // //   if (N % 3 === 2) {
// // // //     const fullThrees = (N - 2) / 3;
// // // //     return [...Array(fullThrees).fill(3), 2];
// // // //   }
// // // //   return Array(N / 3).fill(3);
// // // // }

// // // // export function getGridColumn(rowSize, posInRow) {
// // // //   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
// // // //   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
// // // //   if (rowSize === 1) return '2 / span 3';
// // // //   return 'auto';
// // // // }

// // // // export function buildPlacements(items) {
// // // //   const list = Array.isArray(items) ? items : [];
// // // //   const rows = rowSizes(list.length);
// // // //   const out = [];
// // // //   let idx = 0;
// // // //   for (const rowSize of rows) {
// // // //     for (let pos = 0; pos < rowSize; pos++) {
// // // //       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
// // // //       idx += 1;
// // // //     }
// // // //   }
// // // //   return out;
// // // // }


// // // // /* ================================================================
// // // //    VARIANT RESOLVERS
// // // //    ================================================================ */

// // // // const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// // // // const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// // // // export function resolveMiniVariant(requested, item) {
// // // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
// // // //   if (!VALID_MINI.has(v)) v = 'v1';
// // // //   const hasVisual  = getVisualType(item) !== null;
// // // //   const hasFormula = !!(item && item.formula);
// // // //   if (v === 'v4' && !hasFormula) v = 'v1';
// // // //   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
// // // //   return v;
// // // // }

// // // // export function resolveBigVariant(requested, item) {
// // // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
// // // //   if (!VALID_BIG.has(v)) v = 'b1';
// // // //   const hasVisual = getVisualType(item) !== null;
// // // //   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
// // // //   return v;
// // // // }


// // // // /* ================================================================
// // // //    VISUAL
// // // //    ================================================================ */

// // // // export const Visual = ({ item, height, mode = 'banner' }) => {
// // // //   const [imgFailed, setImgFailed] = useState(false);
// // // //   const img = rawImage(item);
// // // //   const svg = rawSvg(item);
// // // //   const icon = rawIcon(item);
// // // //   useEffect(() => { setImgFailed(false); }, [img]);

// // // //   const v = getVisualType(item);

// // // //   if (v === 'image' && !imgFailed) {
// // // //     return (
// // // //       <div style={{
// // // //         width: '100%', height, position: 'relative',
// // // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // // //       }}>
// // // //         <Image
// // // //           src={img}
// // // //           alt={item.imageAlt || item.title || ''}
// // // //           fill
// // // //           style={{ objectFit: 'cover' }}
// // // //           onError={() => setImgFailed(true)}
// // // //         />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(svg))) {
// // // //     return (
// // // //       <div style={{
// // // //         width: '100%', height,
// // // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // // //       }}>
// // // //         <div style={{
// // // //           width: '80%', height: '80%',
// // // //           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
// // // //         }}
// // // //         dangerouslySetInnerHTML={{ __html: constrainSvg(svg) }} />
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(icon))) {
// // // //     return (
// // // //       <div style={{
// // // //         width: '100%', height,
// // // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //         background: 'rgba(255,255,255,0.06)',
// // // //         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
// // // //         opacity: 0.85, flexShrink: 0,
// // // //       }}>
// // // //         {icon}
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return null;
// // // // };


// // // // /* ================================================================
// // // //    CARD ICON BADGE (V3 / B3)
// // // //    ----------------------------------------------------------------
// // // //    Renders inline SVG (item.svg) OR text/emoji (item.icon) inside a
// // // //    rounded badge. SVG takes precedence. Returns null when neither
// // // //    is present so callers can render it unconditionally.
// // // //    ================================================================ */

// // // // const CardIconBadge = ({ item, size, radius, fontSize }) => {
// // // //   const svg = rawSvg(item);
// // // //   const icon = rawIcon(item);
// // // //   const svgSource =
// // // //     isValidSvg(svg) ? svg
// // // //       : (isValidSvg(icon) ? icon : null);
// // // //   const showIcon = !svgSource && isValidIcon(icon);
// // // //   if (!svgSource && !showIcon) return null;
// // // //   return (
// // // //     <div style={{
// // // //       width: size, height: size, borderRadius: radius,
// // // //       background: 'rgba(255,255,255,0.15)',
// // // //       display: 'flex', alignItems: 'center', justifyContent: 'center',
// // // //       fontSize, flexShrink: 0, overflow: 'hidden',
// // // //     }}>
// // // //       {svgSource ? (
// // // //         <div
// // // //           style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
// // // //           dangerouslySetInnerHTML={{ __html: constrainSvg(svgSource) }}
// // // //         />
// // // //       ) : icon}
// // // //     </div>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    FADING DESCRIPTION
// // // //    ================================================================ */

// // // // const fadeMask = `linear-gradient(to bottom, black calc(100% - ${FADE_PX}px), transparent 100%)`;

// // // // export const FadingDescription = ({ children, fontSize, lineHeight, color, opacity }) => (
// // // //   <div
// // // //     className="vtp-desc-scroll"
// // // //     style={{
// // // //       flex: 1, minHeight: 0,
// // // //       overflowY: 'auto', overflowX: 'hidden',
// // // //       scrollbarWidth: 'none', msOverflowStyle: 'none',
// // // //       WebkitMaskImage: fadeMask, maskImage: fadeMask,
// // // //     }}
// // // //   >
// // // //     <p style={{ margin: 0, fontSize, lineHeight, color, opacity, paddingBottom: FADE_PX }}>
// // // //       {children}
// // // //     </p>
// // // //   </div>
// // // // );


// // // // /* ================================================================
// // // //    CTA STYLES
// // // //    ================================================================ */

// // // // const ctaTextStyle = (theme) => ({
// // // //   fontSize: '0.78rem', fontWeight: 600,
// // // //   color: theme.cardText, opacity: 0.9,
// // // //   textTransform: 'uppercase', letterSpacing: '0.5px',
// // // //   fontFamily: FONT_FAMILY, flexShrink: 0,
// // // // });

// // // // const ctaPillStyle = (theme) => ({
// // // //   display: 'inline-block',
// // // //   border: `1px solid ${theme.cardText}`,
// // // //   padding: '8px 18px', borderRadius: 999,
// // // //   fontSize: '0.88rem', fontWeight: 500,
// // // //   color: theme.cardText, alignSelf: 'flex-start',
// // // //   fontFamily: FONT_FAMILY, flexShrink: 0,
// // // // });


// // // // /* ================================================================
// // // //    MINI CARD VARIANTS
// // // //    ================================================================ */

// // // // const MiniV1 = ({ item, theme, height }) => {
// // // //   const visualHeight = Math.max(110, Math.round(height * 0.42));
// // // //   return (
// // // //     <Link href={item.href || '#'} style={{
// // // //       display: 'flex', flexDirection: 'column',
// // // //       background: theme.cardBg, color: theme.cardText,
// // // //       borderRadius: 8, overflow: 'hidden',
// // // //       height, textDecoration: 'none',
// // // //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //       fontFamily: FONT_FAMILY,
// // // //     }}
// // // //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //     >
// // // //       <Visual item={item} height={visualHeight} mode="banner" />
// // // //       <div style={{ padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // // //         <h3 style={{
// // // //           fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 22,
// // // //           color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// // // //           minHeight: 'calc(1.05rem * 1.3 * 2)',
// // // //         }}>{item.title}</h3>
// // // //         {item.description && (
// // // //           <FadingDescription fontSize="0.85rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// // // //         )}
// // // //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // };

// // // // const MiniV2 = ({ item, theme, height }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'row',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 8, overflow: 'hidden',
// // // //     height, textDecoration: 'none',
// // // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //     fontFamily: FONT_FAMILY,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <div style={{ width: '40%', flexShrink: 0 }}>
// // // //       <Visual item={item} height="100%" mode="side" />
// // // //     </div>
// // // //     <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // // //       <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
// // // //       {item.description && (
// // // //         <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// // // //       )}
// // // //       <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // // //     </div>
// // // //   </Link>
// // // // );

// // // // const MiniV3 = ({ item, theme, height }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'column', gap: 22,
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 8, padding: '20px 22px',
// // // //     height, textDecoration: 'none',
// // // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //     fontFamily: FONT_FAMILY, minHeight: 0,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <div style={{
// // // //       display: 'flex', alignItems: 'flex-start', gap: 12, flexShrink: 0,
// // // //       minHeight: 'calc(1.05rem * 1.3 * 2)',
// // // //     }}>
// // // //       <CardIconBadge item={item} size={44} radius={10} fontSize="1.3rem" />
// // // //       <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
// // // //     </div>
// // // //     {item.description && (
// // // //       <FadingDescription fontSize="0.86rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// // // //     )}
// // // //     <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
// // // //   </Link>
// // // // );

// // // // const MiniV4 = ({ item, theme, height }) => {
// // // //   const formulaHeight = Math.max(80, Math.round(height * 0.32));
// // // //   return (
// // // //     <Link href={item.href || '#'} style={{
// // // //       display: 'flex', flexDirection: 'column',
// // // //       background: theme.cardBg, color: theme.cardText,
// // // //       borderRadius: 8, overflow: 'hidden',
// // // //       height, textDecoration: 'none',
// // // //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // // //       fontFamily: FONT_FAMILY,
// // // //     }}
// // // //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // // //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // // //     >
// // // //       <div style={{ background: 'rgba(255,255,255,0.08)', height: formulaHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 16px', fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic', color: theme.cardText, opacity: 0.95, flexShrink: 0 }}>
// // // //         {processContent(wrapFormula(item.formula))}
// // // //       </div>
// // // //       <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // // //         <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4, color: theme.cardText, flexShrink: 0 }}>{item.title}</h3>
// // // //         {item.description && (
// // // //           <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.85}>{item.description}</FadingDescription>
// // // //         )}
// // // //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // };


// // // // /* ================================================================
// // // //    BIG CARD VARIANTS
// // // //    ================================================================ */

// // // // const BigB1 = ({ item, theme, height }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'row',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 10, overflow: 'hidden',
// // // //     height, textDecoration: 'none',
// // // //     transition: 'box-shadow 0.3s ease',
// // // //     fontFamily: FONT_FAMILY,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <div style={{ width: '45%', flexShrink: 0 }}>
// // // //       <Visual item={item} height="100%" mode="side" />
// // // //     </div>
// // // //     <div style={{ padding: '22px 26px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // // //       <h3 style={{
// // // //         fontSize: '1.4rem', fontWeight: 600, margin: 0, marginBottom: 22,
// // // //         color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// // // //         minHeight: 'calc(1.4rem * 1.3 * 2)',
// // // //       }}>{item.title}</h3>
// // // //       {item.description && (
// // // //         <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// // // //       )}
// // // //       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // // //     </div>
// // // //   </Link>
// // // // );

// // // // const BigB2 = ({ item, theme, height }) => {
// // // //   const visualHeight = Math.max(140, Math.round(height * 0.5));
// // // //   return (
// // // //     <Link href={item.href || '#'} style={{
// // // //       display: 'flex', flexDirection: 'column',
// // // //       background: theme.cardBg, color: theme.cardText,
// // // //       borderRadius: 10, overflow: 'hidden',
// // // //       height, textDecoration: 'none',
// // // //       transition: 'box-shadow 0.3s ease',
// // // //       fontFamily: FONT_FAMILY,
// // // //     }}
// // // //     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // // //     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // // //     >
// // // //       <Visual item={item} height={visualHeight} mode="banner" />
// // // //       <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // // //         <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
// // // //         {item.description && (
// // // //           <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// // // //         )}
// // // //         <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // // //       </div>
// // // //     </Link>
// // // //   );
// // // // };

// // // // const BigB3 = ({ item, theme, height }) => (
// // // //   <Link href={item.href || '#'} style={{
// // // //     display: 'flex', flexDirection: 'column',
// // // //     background: theme.cardBg, color: theme.cardText,
// // // //     borderRadius: 10, padding: '24px 28px',
// // // //     height, textDecoration: 'none',
// // // //     transition: 'box-shadow 0.3s ease',
// // // //     fontFamily: FONT_FAMILY, minHeight: 0,
// // // //   }}
// // // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // // //   >
// // // //     <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexShrink: 0 }}>
// // // //       <CardIconBadge item={item} size={52} radius={12} fontSize="1.6rem" />
// // // //       <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
// // // //     </div>
// // // //     {item.description && (
// // // //       <FadingDescription fontSize="1rem" lineHeight={1.6} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// // // //     )}
// // // //     <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // // //   </Link>
// // // // );


// // // // /* ================================================================
// // // //    CARD DISPATCHERS + GRID
// // // //    ================================================================ */

// // // // const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// // // // const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// // // // export const MiniCard = ({ item, theme, variant = 'v1', cardHeights }) => {
// // // //   const resolved = resolveMiniVariant(variant, item);
// // // //   const Component = MINI_MAP[resolved] || MiniV1;
// // // //   const height = resolveCardHeight(item, resolved, cardHeights);
// // // //   return <Component item={item} theme={theme} height={height} />;
// // // // };

// // // // export const BigCard = ({ item, theme, variant = 'b1', cardHeights }) => {
// // // //   const resolved = resolveBigVariant(variant, item);
// // // //   const Component = BIG_MAP[resolved] || BigB1;
// // // //   const height = resolveCardHeight(item, resolved, cardHeights);
// // // //   return <Component item={item} theme={theme} height={height} />;
// // // // };

// // // // export const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
// // // //   const placements = useMemo(() => buildPlacements(items), [items]);
// // // //   if (!placements.length) return null;
// // // //   return (
// // // //     <div style={{
// // // //       display: 'grid',
// // // //       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
// // // //       gap: '1rem',
// // // //       alignItems: 'start',
// // // //     }}>
// // // //       {placements.map(({ item, gridColumn, index }, i) => (
// // // //         <div
// // // //           key={i}
// // // //           id={getCellId ? getCellId(item, index) : undefined}
// // // //           className="vtp-algo-cell"
// // // //           style={{ gridColumn, minWidth: 0, scrollMarginTop: '100px' }}
// // // //         >
// // // //           {renderItem(item)}
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   );
// // // // };


// // // /**
// // //  * VisualToolsPage v26 — file 1 of 3 (visualToolsCards.jsx)
// // //  *
// // //  * Change from v25:
// // //  *   - BigB1 icon column width reduced from 45% to 33.33% (1/3 instead of ~1/2).
// // //  *
// // //  * Change from v24:
// // //  *   - Visual fields (image/svg/icon) are now read from item.* OR
// // //  *     item.seoData.* via rawImage/rawSvg/rawIcon helpers. buildToolIndexData
// // //  *     forwards seoData without lifting svg/icon/image to the top level, so
// // //  *     getVisualType was returning null and every card collapsed to text-only
// // //  *     v3. Now the seoData-nested values are picked up.
// // //  *
// // //  * Change from v24 (prior):
// // //  *   - CardIconBadge (V3/B3) now also accepts an SVG string passed via
// // //  *     item.icon, not only item.svg. This matches the SidebarIcon convention
// // //  *     where the `icon` field may itself be raw <svg> markup.
// // //  *   - Precedence: item.svg → item.icon-as-svg → item.icon-as-text.
// // //  *
// // //  * Change from v22:
// // //  *   - MiniV3 + BigB3 icon badges render inline SVG via CardIconBadge.
// // //  */

// // // import React, { useMemo, useState, useEffect } from 'react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';
// // // import { processContent } from '@/app/utils/contentProcessor';


// // // /* ================================================================
// // //    CONSTANTS
// // //    ================================================================ */

// // // export const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// // // export const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// // // export const NAVBAR_HEIGHT = 55;
// // // export const SIDEBAR_COLLAPSED = 68;
// // // export const SIDEBAR_EXPANDED = 290;
// // // export const MOBILE_BREAKPOINT = 768;

// // // export const UNCATEGORIZED_LABEL = 'Other';
// // // export const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// // // export const CTA_OPEN = 'Open tool →';
// // // export const CTA_VIEW = 'View Details';

// // // export const DEFAULT_CARD_HEIGHTS = {
// // //   v1: 320, v2: 200, v3: 220, v4: 300,
// // //   b1: 280, b2: 360, b3: 240,
// // // };

// // // export const FADE_PX = 28;

// // // export const VALID_VIDEO_LAYOUTS = new Set(['above', 'beside', 'below', 'strip']);


// // // /* ================================================================
// // //    INLINE UTILITIES
// // //    ================================================================ */

// // // export const hexToRgba = (hex, alpha) => {
// // //   const h = hex.replace('#', '');
// // //   const r = parseInt(h.substring(0, 2), 16);
// // //   const g = parseInt(h.substring(2, 4), 16);
// // //   const b = parseInt(h.substring(4, 6), 16);
// // //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // // };

// // // export const generateShortTitle = (title = '') =>
// // //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // // export function slugify(s) {
// // //   return String(s || '').toLowerCase().trim()
// // //     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// // // }

// // // export function isValidImagePath(val) {
// // //   if (typeof val !== 'string') return false;
// // //   const v = val.trim();
// // //   if (!v) return false;
// // //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // // }

// // // export function isValidSvg(val) {
// // //   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// // // }

// // // export function isValidIcon(val) {
// // //   if (typeof val !== 'string') return false;
// // //   const v = val.trim();
// // //   if (!v) return false;
// // //   if (v.startsWith('/') || v.startsWith('http')) return false;
// // //   if (v.toLowerCase().startsWith('<svg')) return false;
// // //   return true;
// // // }

// // // export function constrainSvg(svg) {
// // //   return svg.replace(
// // //     /<svg\b([^>]*)>/i,
// // //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// // //   );
// // // }

// // // /* Visual fields may live at item.* or item.seoData.* (buildToolIndexData
// // //    forwards seoData without lifting these to the top level). */
// // // export function rawImage(item) {
// // //   if (!item) return undefined;
// // //   return item.image != null ? item.image : (item.seoData ? item.seoData.image : undefined);
// // // }
// // // export function rawSvg(item) {
// // //   if (!item) return undefined;
// // //   return item.svg != null ? item.svg : (item.seoData ? item.seoData.svg : undefined);
// // // }
// // // export function rawIcon(item) {
// // //   if (!item) return undefined;
// // //   return item.icon != null ? item.icon : (item.seoData ? item.seoData.icon : undefined);
// // // }

// // // export function wrapFormula(f) {
// // //   if (!f) return '';
// // //   const t = String(f).trim();
// // //   if (!t) return '';
// // //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// // //   return `$${t}$`;
// // // }

// // // export function getVisualType(item) {
// // //   if (!item) return null;
// // //   if (isValidImagePath(rawImage(item))) return 'image';
// // //   if (isValidSvg(rawSvg(item))) return 'svg';
// // //   if (isValidIcon(rawIcon(item))) return 'icon';
// // //   return null;
// // // }

// // // export function toolIdFor(item, fallbackIdx = 0) {
// // //   if (item && item.id) return `tool-${slugify(item.id)}`;
// // //   if (item && item.title) return `tool-${slugify(item.title)}`;
// // //   return `tool-${fallbackIdx}`;
// // // }

// // // export function subGroupId(categoryName, subName) {
// // //   return `sub-${slugify(categoryName)}-${slugify(subName)}`;
// // // }

// // // export function categoryId(categoryName) {
// // //   return `cat-${slugify(categoryName)}`;
// // // }

// // // export function resolveCardHeight(item, variant, cardHeights) {
// // //   if (item && Number.isFinite(item.cardHeight)) return item.cardHeight;
// // //   if (cardHeights && Number.isFinite(cardHeights[variant])) return cardHeights[variant];
// // //   return DEFAULT_CARD_HEIGHTS[variant];
// // // }

// // // export function hasArticleContent(a) {
// // //   if (!a || typeof a !== 'object') return false;
// // //   return !!(a.eyebrow || a.title || a.content);
// // // }

// // // export function sanitizeVideos(videos) {
// // //   if (!Array.isArray(videos)) return [];
// // //   return videos.filter((v) => v && (v.embedUrl || v.title));
// // // }

// // // export function sanitizeVideoLayout(layout) {
// // //   if (typeof layout !== 'string') return 'beside';
// // //   const l = layout.toLowerCase();
// // //   return VALID_VIDEO_LAYOUTS.has(l) ? l : 'beside';
// // // }


// // // /* ================================================================
// // //    HOOKS
// // //    ================================================================ */

// // // export const useIsMobile = () => {
// // //   const [isMobile, setIsMobile] = useState(false);
// // //   useEffect(() => {
// // //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
// // //     const update = () => setIsMobile(mql.matches);
// // //     update();
// // //     mql.addEventListener('change', update);
// // //     return () => mql.removeEventListener('change', update);
// // //   }, []);
// // //   return isMobile;
// // // };


// // // /* ================================================================
// // //    GRID LAYOUT
// // //    ================================================================ */

// // // export function rowSizes(N) {
// // //   if (!Number.isFinite(N) || N <= 0) return [];
// // //   if (N === 1) return [1];
// // //   if (N % 3 === 1 && N >= 4) {
// // //     const fullThrees = (N - 4) / 3;
// // //     return [...Array(fullThrees).fill(3), 2, 2];
// // //   }
// // //   if (N % 3 === 2) {
// // //     const fullThrees = (N - 2) / 3;
// // //     return [...Array(fullThrees).fill(3), 2];
// // //   }
// // //   return Array(N / 3).fill(3);
// // // }

// // // export function getGridColumn(rowSize, posInRow) {
// // //   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
// // //   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
// // //   if (rowSize === 1) return '2 / span 3';
// // //   return 'auto';
// // // }

// // // export function buildPlacements(items) {
// // //   const list = Array.isArray(items) ? items : [];
// // //   const rows = rowSizes(list.length);
// // //   const out = [];
// // //   let idx = 0;
// // //   for (const rowSize of rows) {
// // //     for (let pos = 0; pos < rowSize; pos++) {
// // //       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
// // //       idx += 1;
// // //     }
// // //   }
// // //   return out;
// // // }


// // // /* ================================================================
// // //    VARIANT RESOLVERS
// // //    ================================================================ */

// // // const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// // // const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// // // export function resolveMiniVariant(requested, item) {
// // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
// // //   if (!VALID_MINI.has(v)) v = 'v1';
// // //   const hasVisual  = getVisualType(item) !== null;
// // //   const hasFormula = !!(item && item.formula);
// // //   if (v === 'v4' && !hasFormula) v = 'v1';
// // //   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
// // //   return v;
// // // }

// // // export function resolveBigVariant(requested, item) {
// // //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
// // //   if (!VALID_BIG.has(v)) v = 'b1';
// // //   const hasVisual = getVisualType(item) !== null;
// // //   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
// // //   return v;
// // // }


// // // /* ================================================================
// // //    VISUAL
// // //    ================================================================ */

// // // export const Visual = ({ item, height, mode = 'banner' }) => {
// // //   const [imgFailed, setImgFailed] = useState(false);
// // //   const img = rawImage(item);
// // //   const svg = rawSvg(item);
// // //   const icon = rawIcon(item);
// // //   useEffect(() => { setImgFailed(false); }, [img]);

// // //   const v = getVisualType(item);

// // //   if (v === 'image' && !imgFailed) {
// // //     return (
// // //       <div style={{
// // //         width: '100%', height, position: 'relative',
// // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // //       }}>
// // //         <Image
// // //           src={img}
// // //           alt={item.imageAlt || item.title || ''}
// // //           fill
// // //           style={{ objectFit: 'cover' }}
// // //           onError={() => setImgFailed(true)}
// // //         />
// // //       </div>
// // //     );
// // //   }

// // //   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(svg))) {
// // //     return (
// // //       <div style={{
// // //         width: '100%', height,
// // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// // //       }}>
// // //         <div style={{
// // //           width: '80%', height: '80%',
// // //           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
// // //         }}
// // //         dangerouslySetInnerHTML={{ __html: constrainSvg(svg) }} />
// // //       </div>
// // //     );
// // //   }

// // //   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(icon))) {
// // //     return (
// // //       <div style={{
// // //         width: '100%', height,
// // //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //         background: 'rgba(255,255,255,0.06)',
// // //         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
// // //         opacity: 0.85, flexShrink: 0,
// // //       }}>
// // //         {icon}
// // //       </div>
// // //     );
// // //   }

// // //   return null;
// // // };


// // // /* ================================================================
// // //    CARD ICON BADGE (V3 / B3)
// // //    ----------------------------------------------------------------
// // //    Renders inline SVG (item.svg) OR text/emoji (item.icon) inside a
// // //    rounded badge. SVG takes precedence. Returns null when neither
// // //    is present so callers can render it unconditionally.
// // //    ================================================================ */

// // // const CardIconBadge = ({ item, size, radius, fontSize }) => {
// // //   const svg = rawSvg(item);
// // //   const icon = rawIcon(item);
// // //   const svgSource =
// // //     isValidSvg(svg) ? svg
// // //       : (isValidSvg(icon) ? icon : null);
// // //   const showIcon = !svgSource && isValidIcon(icon);
// // //   if (!svgSource && !showIcon) return null;
// // //   return (
// // //     <div style={{
// // //       width: size, height: size, borderRadius: radius,
// // //       background: 'rgba(255,255,255,0.15)',
// // //       display: 'flex', alignItems: 'center', justifyContent: 'center',
// // //       fontSize, flexShrink: 0, overflow: 'hidden',
// // //     }}>
// // //       {svgSource ? (
// // //         <div
// // //           style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
// // //           dangerouslySetInnerHTML={{ __html: constrainSvg(svgSource) }}
// // //         />
// // //       ) : icon}
// // //     </div>
// // //   );
// // // };


// // // /* ================================================================
// // //    FADING DESCRIPTION
// // //    ================================================================ */

// // // const fadeMask = `linear-gradient(to bottom, black calc(100% - ${FADE_PX}px), transparent 100%)`;

// // // export const FadingDescription = ({ children, fontSize, lineHeight, color, opacity }) => (
// // //   <div
// // //     className="vtp-desc-scroll"
// // //     style={{
// // //       flex: 1, minHeight: 0,
// // //       overflowY: 'auto', overflowX: 'hidden',
// // //       scrollbarWidth: 'none', msOverflowStyle: 'none',
// // //       WebkitMaskImage: fadeMask, maskImage: fadeMask,
// // //     }}
// // //   >
// // //     <p style={{ margin: 0, fontSize, lineHeight, color, opacity, paddingBottom: FADE_PX }}>
// // //       {children}
// // //     </p>
// // //   </div>
// // // );


// // // /* ================================================================
// // //    CTA STYLES
// // //    ================================================================ */

// // // const ctaTextStyle = (theme) => ({
// // //   fontSize: '0.78rem', fontWeight: 600,
// // //   color: theme.cardText, opacity: 0.9,
// // //   textTransform: 'uppercase', letterSpacing: '0.5px',
// // //   fontFamily: FONT_FAMILY, flexShrink: 0,
// // // });

// // // const ctaPillStyle = (theme) => ({
// // //   display: 'inline-block',
// // //   border: `1px solid ${theme.cardText}`,
// // //   padding: '8px 18px', borderRadius: 999,
// // //   fontSize: '0.88rem', fontWeight: 500,
// // //   color: theme.cardText, alignSelf: 'flex-start',
// // //   fontFamily: FONT_FAMILY, flexShrink: 0,
// // // });


// // // /* ================================================================
// // //    MINI CARD VARIANTS
// // //    ================================================================ */

// // // const MiniV1 = ({ item, theme, height }) => {
// // //   const visualHeight = Math.max(110, Math.round(height * 0.42));
// // //   return (
// // //     <Link href={item.href || '#'} style={{
// // //       display: 'flex', flexDirection: 'column',
// // //       background: theme.cardBg, color: theme.cardText,
// // //       borderRadius: 8, overflow: 'hidden',
// // //       height, textDecoration: 'none',
// // //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //       fontFamily: FONT_FAMILY,
// // //     }}
// // //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //     >
// // //       <Visual item={item} height={visualHeight} mode="banner" />
// // //       <div style={{ padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // //         <h3 style={{
// // //           fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 22,
// // //           color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// // //           minHeight: 'calc(1.05rem * 1.3 * 2)',
// // //         }}>{item.title}</h3>
// // //         {item.description && (
// // //           <FadingDescription fontSize="0.85rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// // //         )}
// // //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // //       </div>
// // //     </Link>
// // //   );
// // // };

// // // const MiniV2 = ({ item, theme, height }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'row',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 8, overflow: 'hidden',
// // //     height, textDecoration: 'none',
// // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //     fontFamily: FONT_FAMILY,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <div style={{ width: '40%', flexShrink: 0 }}>
// // //       <Visual item={item} height="100%" mode="side" />
// // //     </div>
// // //     <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // //       <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
// // //       {item.description && (
// // //         <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// // //       )}
// // //       <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // //     </div>
// // //   </Link>
// // // );

// // // const MiniV3 = ({ item, theme, height }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'column', gap: 22,
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 8, padding: '20px 22px',
// // //     height, textDecoration: 'none',
// // //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //     fontFamily: FONT_FAMILY, minHeight: 0,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <div style={{
// // //       display: 'flex', alignItems: 'flex-start', gap: 12, flexShrink: 0,
// // //       minHeight: 'calc(1.05rem * 1.3 * 2)',
// // //     }}>
// // //       <CardIconBadge item={item} size={44} radius={10} fontSize="1.3rem" />
// // //       <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
// // //     </div>
// // //     {item.description && (
// // //       <FadingDescription fontSize="0.86rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// // //     )}
// // //     <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
// // //   </Link>
// // // );

// // // const MiniV4 = ({ item, theme, height }) => {
// // //   const formulaHeight = Math.max(80, Math.round(height * 0.32));
// // //   return (
// // //     <Link href={item.href || '#'} style={{
// // //       display: 'flex', flexDirection: 'column',
// // //       background: theme.cardBg, color: theme.cardText,
// // //       borderRadius: 8, overflow: 'hidden',
// // //       height, textDecoration: 'none',
// // //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// // //       fontFamily: FONT_FAMILY,
// // //     }}
// // //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// // //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// // //     >
// // //       <div style={{ background: 'rgba(255,255,255,0.08)', height: formulaHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 16px', fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic', color: theme.cardText, opacity: 0.95, flexShrink: 0 }}>
// // //         {processContent(wrapFormula(item.formula))}
// // //       </div>
// // //       <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // //         <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4, color: theme.cardText, flexShrink: 0 }}>{item.title}</h3>
// // //         {item.description && (
// // //           <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.85}>{item.description}</FadingDescription>
// // //         )}
// // //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// // //       </div>
// // //     </Link>
// // //   );
// // // };


// // // /* ================================================================
// // //    BIG CARD VARIANTS
// // //    ================================================================ */

// // // const BigB1 = ({ item, theme, height }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'row',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 10, overflow: 'hidden',
// // //     height, textDecoration: 'none',
// // //     transition: 'box-shadow 0.3s ease',
// // //     fontFamily: FONT_FAMILY,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <div style={{ width: '33.33%', flexShrink: 0 }}>
// // //       <Visual item={item} height="100%" mode="side" />
// // //     </div>
// // //     <div style={{ padding: '22px 26px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // //       <h3 style={{
// // //         fontSize: '1.4rem', fontWeight: 600, margin: 0, marginBottom: 22,
// // //         color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// // //         minHeight: 'calc(1.4rem * 1.3 * 2)',
// // //       }}>{item.title}</h3>
// // //       {item.description && (
// // //         <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// // //       )}
// // //       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // //     </div>
// // //   </Link>
// // // );

// // // const BigB2 = ({ item, theme, height }) => {
// // //   const visualHeight = Math.max(140, Math.round(height * 0.5));
// // //   return (
// // //     <Link href={item.href || '#'} style={{
// // //       display: 'flex', flexDirection: 'column',
// // //       background: theme.cardBg, color: theme.cardText,
// // //       borderRadius: 10, overflow: 'hidden',
// // //       height, textDecoration: 'none',
// // //       transition: 'box-shadow 0.3s ease',
// // //       fontFamily: FONT_FAMILY,
// // //     }}
// // //     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // //     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // //     >
// // //       <Visual item={item} height={visualHeight} mode="banner" />
// // //       <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// // //         <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
// // //         {item.description && (
// // //           <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// // //         )}
// // //         <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // //       </div>
// // //     </Link>
// // //   );
// // // };

// // // const BigB3 = ({ item, theme, height }) => (
// // //   <Link href={item.href || '#'} style={{
// // //     display: 'flex', flexDirection: 'column',
// // //     background: theme.cardBg, color: theme.cardText,
// // //     borderRadius: 10, padding: '24px 28px',
// // //     height, textDecoration: 'none',
// // //     transition: 'box-shadow 0.3s ease',
// // //     fontFamily: FONT_FAMILY, minHeight: 0,
// // //   }}
// // //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// // //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// // //   >
// // //     <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexShrink: 0 }}>
// // //       <CardIconBadge item={item} size={52} radius={12} fontSize="1.6rem" />
// // //       <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
// // //     </div>
// // //     {item.description && (
// // //       <FadingDescription fontSize="1rem" lineHeight={1.6} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// // //     )}
// // //     <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// // //   </Link>
// // // );


// // // /* ================================================================
// // //    CARD DISPATCHERS + GRID
// // //    ================================================================ */

// // // const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// // // const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// // // export const MiniCard = ({ item, theme, variant = 'v1', cardHeights }) => {
// // //   const resolved = resolveMiniVariant(variant, item);
// // //   const Component = MINI_MAP[resolved] || MiniV1;
// // //   const height = resolveCardHeight(item, resolved, cardHeights);
// // //   return <Component item={item} theme={theme} height={height} />;
// // // };

// // // export const BigCard = ({ item, theme, variant = 'b1', cardHeights }) => {
// // //   const resolved = resolveBigVariant(variant, item);
// // //   const Component = BIG_MAP[resolved] || BigB1;
// // //   const height = resolveCardHeight(item, resolved, cardHeights);
// // //   return <Component item={item} theme={theme} height={height} />;
// // // };

// // // export const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
// // //   const placements = useMemo(() => buildPlacements(items), [items]);
// // //   if (!placements.length) return null;
// // //   return (
// // //     <div style={{
// // //       display: 'grid',
// // //       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
// // //       gap: '1rem',
// // //       alignItems: 'start',
// // //     }}>
// // //       {placements.map(({ item, gridColumn, index }, i) => (
// // //         <div
// // //           key={i}
// // //           id={getCellId ? getCellId(item, index) : undefined}
// // //           className="vtp-algo-cell"
// // //           style={{ gridColumn, minWidth: 0, scrollMarginTop: '100px' }}
// // //         >
// // //           {renderItem(item)}
// // //         </div>
// // //       ))}
// // //     </div>
// // //   );
// // // };


// // /**
// //  * VisualToolsPage v27 — file 1 of 3 (visualToolsCards.jsx)
// //  *
// //  * Change from v26:
// //  *   - BigB1: title shrunk (1.4rem → 1.15rem, marginBottom 22 → 12, minHeight
// //  *     recalculated for new size). Description enlarged (0.95rem → 1.05rem,
// //  *     lineHeight 1.55 → 1.65).
// //  *
// //  * Change from v25:
// //  *   - BigB1 icon column width reduced from 45% to 33.33% (1/3 instead of ~1/2).
// //  *
// //  * Change from v24:
// //  *   - Visual fields (image/svg/icon) are now read from item.* OR
// //  *     item.seoData.* via rawImage/rawSvg/rawIcon helpers. buildToolIndexData
// //  *     forwards seoData without lifting svg/icon/image to the top level, so
// //  *     getVisualType was returning null and every card collapsed to text-only
// //  *     v3. Now the seoData-nested values are picked up.
// //  *
// //  * Change from v24 (prior):
// //  *   - CardIconBadge (V3/B3) now also accepts an SVG string passed via
// //  *     item.icon, not only item.svg. This matches the SidebarIcon convention
// //  *     where the `icon` field may itself be raw <svg> markup.
// //  *   - Precedence: item.svg → item.icon-as-svg → item.icon-as-text.
// //  *
// //  * Change from v22:
// //  *   - MiniV3 + BigB3 icon badges render inline SVG via CardIconBadge.
// //  */

// // import React, { useMemo, useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { processContent } from '@/app/utils/contentProcessor';


// // /* ================================================================
// //    CONSTANTS
// //    ================================================================ */

// // export const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// // export const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// // export const NAVBAR_HEIGHT = 55;
// // export const SIDEBAR_COLLAPSED = 68;
// // export const SIDEBAR_EXPANDED = 290;
// // export const MOBILE_BREAKPOINT = 768;

// // export const UNCATEGORIZED_LABEL = 'Other';
// // export const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// // export const CTA_OPEN = 'Open tool →';
// // export const CTA_VIEW = 'View Details';

// // export const DEFAULT_CARD_HEIGHTS = {
// //   v1: 320, v2: 200, v3: 220, v4: 300,
// //   b1: 280, b2: 360, b3: 240,
// // };

// // export const FADE_PX = 28;

// // export const VALID_VIDEO_LAYOUTS = new Set(['above', 'beside', 'below', 'strip']);


// // /* ================================================================
// //    INLINE UTILITIES
// //    ================================================================ */

// // export const hexToRgba = (hex, alpha) => {
// //   const h = hex.replace('#', '');
// //   const r = parseInt(h.substring(0, 2), 16);
// //   const g = parseInt(h.substring(2, 4), 16);
// //   const b = parseInt(h.substring(4, 6), 16);
// //   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// // };

// // export const generateShortTitle = (title = '') =>
// //   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// // export function slugify(s) {
// //   return String(s || '').toLowerCase().trim()
// //     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// // }

// // export function isValidImagePath(val) {
// //   if (typeof val !== 'string') return false;
// //   const v = val.trim();
// //   if (!v) return false;
// //   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// // }

// // export function isValidSvg(val) {
// //   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// // }

// // export function isValidIcon(val) {
// //   if (typeof val !== 'string') return false;
// //   const v = val.trim();
// //   if (!v) return false;
// //   if (v.startsWith('/') || v.startsWith('http')) return false;
// //   if (v.toLowerCase().startsWith('<svg')) return false;
// //   return true;
// // }

// // export function constrainSvg(svg) {
// //   return svg.replace(
// //     /<svg\b([^>]*)>/i,
// //     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
// //   );
// // }

// // /* Visual fields may live at item.* or item.seoData.* (buildToolIndexData
// //    forwards seoData without lifting these to the top level). */
// // export function rawImage(item) {
// //   if (!item) return undefined;
// //   return item.image != null ? item.image : (item.seoData ? item.seoData.image : undefined);
// // }
// // export function rawSvg(item) {
// //   if (!item) return undefined;
// //   return item.svg != null ? item.svg : (item.seoData ? item.seoData.svg : undefined);
// // }
// // export function rawIcon(item) {
// //   if (!item) return undefined;
// //   return item.icon != null ? item.icon : (item.seoData ? item.seoData.icon : undefined);
// // }

// // export function wrapFormula(f) {
// //   if (!f) return '';
// //   const t = String(f).trim();
// //   if (!t) return '';
// //   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
// //   return `$${t}$`;
// // }

// // export function getVisualType(item) {
// //   if (!item) return null;
// //   if (isValidImagePath(rawImage(item))) return 'image';
// //   if (isValidSvg(rawSvg(item))) return 'svg';
// //   if (isValidIcon(rawIcon(item))) return 'icon';
// //   return null;
// // }

// // export function toolIdFor(item, fallbackIdx = 0) {
// //   if (item && item.id) return `tool-${slugify(item.id)}`;
// //   if (item && item.title) return `tool-${slugify(item.title)}`;
// //   return `tool-${fallbackIdx}`;
// // }

// // export function subGroupId(categoryName, subName) {
// //   return `sub-${slugify(categoryName)}-${slugify(subName)}`;
// // }

// // export function categoryId(categoryName) {
// //   return `cat-${slugify(categoryName)}`;
// // }

// // export function resolveCardHeight(item, variant, cardHeights) {
// //   if (item && Number.isFinite(item.cardHeight)) return item.cardHeight;
// //   if (cardHeights && Number.isFinite(cardHeights[variant])) return cardHeights[variant];
// //   return DEFAULT_CARD_HEIGHTS[variant];
// // }

// // export function hasArticleContent(a) {
// //   if (!a || typeof a !== 'object') return false;
// //   return !!(a.eyebrow || a.title || a.content);
// // }

// // export function sanitizeVideos(videos) {
// //   if (!Array.isArray(videos)) return [];
// //   return videos.filter((v) => v && (v.embedUrl || v.title));
// // }

// // export function sanitizeVideoLayout(layout) {
// //   if (typeof layout !== 'string') return 'beside';
// //   const l = layout.toLowerCase();
// //   return VALID_VIDEO_LAYOUTS.has(l) ? l : 'beside';
// // }


// // /* ================================================================
// //    HOOKS
// //    ================================================================ */

// // export const useIsMobile = () => {
// //   const [isMobile, setIsMobile] = useState(false);
// //   useEffect(() => {
// //     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
// //     const update = () => setIsMobile(mql.matches);
// //     update();
// //     mql.addEventListener('change', update);
// //     return () => mql.removeEventListener('change', update);
// //   }, []);
// //   return isMobile;
// // };


// // /* ================================================================
// //    GRID LAYOUT
// //    ================================================================ */

// // export function rowSizes(N) {
// //   if (!Number.isFinite(N) || N <= 0) return [];
// //   if (N === 1) return [1];
// //   if (N % 3 === 1 && N >= 4) {
// //     const fullThrees = (N - 4) / 3;
// //     return [...Array(fullThrees).fill(3), 2, 2];
// //   }
// //   if (N % 3 === 2) {
// //     const fullThrees = (N - 2) / 3;
// //     return [...Array(fullThrees).fill(3), 2];
// //   }
// //   return Array(N / 3).fill(3);
// // }

// // export function getGridColumn(rowSize, posInRow) {
// //   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
// //   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
// //   if (rowSize === 1) return '2 / span 3';
// //   return 'auto';
// // }

// // export function buildPlacements(items) {
// //   const list = Array.isArray(items) ? items : [];
// //   const rows = rowSizes(list.length);
// //   const out = [];
// //   let idx = 0;
// //   for (const rowSize of rows) {
// //     for (let pos = 0; pos < rowSize; pos++) {
// //       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
// //       idx += 1;
// //     }
// //   }
// //   return out;
// // }


// // /* ================================================================
// //    VARIANT RESOLVERS
// //    ================================================================ */

// // const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// // const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// // export function resolveMiniVariant(requested, item) {
// //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
// //   if (!VALID_MINI.has(v)) v = 'v1';
// //   const hasVisual  = getVisualType(item) !== null;
// //   const hasFormula = !!(item && item.formula);
// //   if (v === 'v4' && !hasFormula) v = 'v1';
// //   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
// //   return v;
// // }

// // export function resolveBigVariant(requested, item) {
// //   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
// //   if (!VALID_BIG.has(v)) v = 'b1';
// //   const hasVisual = getVisualType(item) !== null;
// //   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
// //   return v;
// // }


// // /* ================================================================
// //    VISUAL
// //    ================================================================ */

// // export const Visual = ({ item, height, mode = 'banner' }) => {
// //   const [imgFailed, setImgFailed] = useState(false);
// //   const img = rawImage(item);
// //   const svg = rawSvg(item);
// //   const icon = rawIcon(item);
// //   useEffect(() => { setImgFailed(false); }, [img]);

// //   const v = getVisualType(item);

// //   if (v === 'image' && !imgFailed) {
// //     return (
// //       <div style={{
// //         width: '100%', height, position: 'relative',
// //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// //       }}>
// //         <Image
// //           src={img}
// //           alt={item.imageAlt || item.title || ''}
// //           fill
// //           style={{ objectFit: 'cover' }}
// //           onError={() => setImgFailed(true)}
// //         />
// //       </div>
// //     );
// //   }

// //   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(svg))) {
// //     return (
// //       <div style={{
// //         width: '100%', height,
// //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// //         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
// //       }}>
// //         <div style={{
// //           width: '80%', height: '80%',
// //           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
// //         }}
// //         dangerouslySetInnerHTML={{ __html: constrainSvg(svg) }} />
// //       </div>
// //     );
// //   }

// //   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(icon))) {
// //     return (
// //       <div style={{
// //         width: '100%', height,
// //         display: 'flex', alignItems: 'center', justifyContent: 'center',
// //         background: 'rgba(255,255,255,0.06)',
// //         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
// //         opacity: 0.85, flexShrink: 0,
// //       }}>
// //         {icon}
// //       </div>
// //     );
// //   }

// //   return null;
// // };


// // /* ================================================================
// //    CARD ICON BADGE (V3 / B3)
// //    ----------------------------------------------------------------
// //    Renders inline SVG (item.svg) OR text/emoji (item.icon) inside a
// //    rounded badge. SVG takes precedence. Returns null when neither
// //    is present so callers can render it unconditionally.
// //    ================================================================ */

// // const CardIconBadge = ({ item, size, radius, fontSize }) => {
// //   const svg = rawSvg(item);
// //   const icon = rawIcon(item);
// //   const svgSource =
// //     isValidSvg(svg) ? svg
// //       : (isValidSvg(icon) ? icon : null);
// //   const showIcon = !svgSource && isValidIcon(icon);
// //   if (!svgSource && !showIcon) return null;
// //   return (
// //     <div style={{
// //       width: size, height: size, borderRadius: radius,
// //       background: 'rgba(255,255,255,0.15)',
// //       display: 'flex', alignItems: 'center', justifyContent: 'center',
// //       fontSize, flexShrink: 0, overflow: 'hidden',
// //     }}>
// //       {svgSource ? (
// //         <div
// //           style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
// //           dangerouslySetInnerHTML={{ __html: constrainSvg(svgSource) }}
// //         />
// //       ) : icon}
// //     </div>
// //   );
// // };


// // /* ================================================================
// //    FADING DESCRIPTION
// //    ================================================================ */

// // const fadeMask = `linear-gradient(to bottom, black calc(100% - ${FADE_PX}px), transparent 100%)`;

// // export const FadingDescription = ({ children, fontSize, lineHeight, color, opacity }) => (
// //   <div
// //     className="vtp-desc-scroll"
// //     style={{
// //       flex: 1, minHeight: 0,
// //       overflowY: 'auto', overflowX: 'hidden',
// //       scrollbarWidth: 'none', msOverflowStyle: 'none',
// //       WebkitMaskImage: fadeMask, maskImage: fadeMask,
// //     }}
// //   >
// //     <p style={{ margin: 0, fontSize, lineHeight, color, opacity, paddingBottom: FADE_PX }}>
// //       {children}
// //     </p>
// //   </div>
// // );


// // /* ================================================================
// //    CTA STYLES
// //    ================================================================ */

// // const ctaTextStyle = (theme) => ({
// //   fontSize: '0.78rem', fontWeight: 600,
// //   color: theme.cardText, opacity: 0.9,
// //   textTransform: 'uppercase', letterSpacing: '0.5px',
// //   fontFamily: FONT_FAMILY, flexShrink: 0,
// // });

// // const ctaPillStyle = (theme) => ({
// //   display: 'inline-block',
// //   border: `1px solid ${theme.cardText}`,
// //   padding: '8px 18px', borderRadius: 999,
// //   fontSize: '0.88rem', fontWeight: 500,
// //   color: theme.cardText, alignSelf: 'flex-start',
// //   fontFamily: FONT_FAMILY, flexShrink: 0,
// // });


// // /* ================================================================
// //    MINI CARD VARIANTS
// //    ================================================================ */

// // const MiniV1 = ({ item, theme, height }) => {
// //   const visualHeight = Math.max(110, Math.round(height * 0.42));
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column',
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 8, overflow: 'hidden',
// //       height, textDecoration: 'none',
// //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //       fontFamily: FONT_FAMILY,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <Visual item={item} height={visualHeight} mode="banner" />
// //       <div style={{ padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// //         <h3 style={{
// //           fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 22,
// //           color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// //           minHeight: 'calc(1.05rem * 1.3 * 2)',
// //         }}>{item.title}</h3>
// //         {item.description && (
// //           <FadingDescription fontSize="0.85rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// //         )}
// //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// //       </div>
// //     </Link>
// //   );
// // };

// // const MiniV2 = ({ item, theme, height }) => (
// //   <Link href={item.href || '#'} style={{
// //     display: 'flex', flexDirection: 'row',
// //     background: theme.cardBg, color: theme.cardText,
// //     borderRadius: 8, overflow: 'hidden',
// //     height, textDecoration: 'none',
// //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //     fontFamily: FONT_FAMILY,
// //   }}
// //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //   >
// //     <div style={{ width: '40%', flexShrink: 0 }}>
// //       <Visual item={item} height="100%" mode="side" />
// //     </div>
// //     <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// //       <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
// //       {item.description && (
// //         <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// //       )}
// //       <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// //     </div>
// //   </Link>
// // );

// // const MiniV3 = ({ item, theme, height }) => (
// //   <Link href={item.href || '#'} style={{
// //     display: 'flex', flexDirection: 'column', gap: 22,
// //     background: theme.cardBg, color: theme.cardText,
// //     borderRadius: 8, padding: '20px 22px',
// //     height, textDecoration: 'none',
// //     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //     fontFamily: FONT_FAMILY, minHeight: 0,
// //   }}
// //   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //   >
// //     <div style={{
// //       display: 'flex', alignItems: 'flex-start', gap: 12, flexShrink: 0,
// //       minHeight: 'calc(1.05rem * 1.3 * 2)',
// //     }}>
// //       <CardIconBadge item={item} size={44} radius={10} fontSize="1.3rem" />
// //       <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
// //     </div>
// //     {item.description && (
// //       <FadingDescription fontSize="0.86rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
// //     )}
// //     <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
// //   </Link>
// // );

// // const MiniV4 = ({ item, theme, height }) => {
// //   const formulaHeight = Math.max(80, Math.round(height * 0.32));
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column',
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 8, overflow: 'hidden',
// //       height, textDecoration: 'none',
// //       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
// //       fontFamily: FONT_FAMILY,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <div style={{ background: 'rgba(255,255,255,0.08)', height: formulaHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 16px', fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic', color: theme.cardText, opacity: 0.95, flexShrink: 0 }}>
// //         {processContent(wrapFormula(item.formula))}
// //       </div>
// //       <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// //         <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4, color: theme.cardText, flexShrink: 0 }}>{item.title}</h3>
// //         {item.description && (
// //           <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.85}>{item.description}</FadingDescription>
// //         )}
// //         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
// //       </div>
// //     </Link>
// //   );
// // };


// // /* ================================================================
// //    BIG CARD VARIANTS
// //    ================================================================ */

// // const BigB1 = ({ item, theme, height }) => (
// //   <Link href={item.href || '#'} style={{
// //     display: 'flex', flexDirection: 'row',
// //     background: theme.cardBg, color: theme.cardText,
// //     borderRadius: 10, overflow: 'hidden',
// //     height, textDecoration: 'none',
// //     transition: 'box-shadow 0.3s ease',
// //     fontFamily: FONT_FAMILY,
// //   }}
// //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// //   >
// //     <div style={{ width: '33.33%', flexShrink: 0 }}>
// //       <Visual item={item} height="100%" mode="side" />
// //     </div>
// //     <div style={{ padding: '22px 26px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// //       <h3 style={{
// //         fontSize: '1.15rem', fontWeight: 600, margin: 0, marginBottom: 12,
// //         color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
// //         minHeight: 'calc(1.15rem * 1.3 * 2)',
// //       }}>{item.title}</h3>
// //       {item.description && (
// //         <FadingDescription fontSize="0.8rem" lineHeight={1.35} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// //       )}
// //       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// //     </div>
// //   </Link>
// // );

// // const BigB2 = ({ item, theme, height }) => {
// //   const visualHeight = Math.max(140, Math.round(height * 0.5));
// //   return (
// //     <Link href={item.href || '#'} style={{
// //       display: 'flex', flexDirection: 'column',
// //       background: theme.cardBg, color: theme.cardText,
// //       borderRadius: 10, overflow: 'hidden',
// //       height, textDecoration: 'none',
// //       transition: 'box-shadow 0.3s ease',
// //       fontFamily: FONT_FAMILY,
// //     }}
// //     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// //     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// //     >
// //       <Visual item={item} height={visualHeight} mode="banner" />
// //       <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
// //         <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
// //         {item.description && (
// //           <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// //         )}
// //         <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// //       </div>
// //     </Link>
// //   );
// // };

// // const BigB3 = ({ item, theme, height }) => (
// //   <Link href={item.href || '#'} style={{
// //     display: 'flex', flexDirection: 'column',
// //     background: theme.cardBg, color: theme.cardText,
// //     borderRadius: 10, padding: '24px 28px',
// //     height, textDecoration: 'none',
// //     transition: 'box-shadow 0.3s ease',
// //     fontFamily: FONT_FAMILY, minHeight: 0,
// //   }}
// //   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
// //   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
// //   >
// //     <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexShrink: 0 }}>
// //       <CardIconBadge item={item} size={52} radius={12} fontSize="1.6rem" />
// //       <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
// //     </div>
// //     {item.description && (
// //       <FadingDescription fontSize="1rem" lineHeight={1.6} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
// //     )}
// //     <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
// //   </Link>
// // );


// // /* ================================================================
// //    CARD DISPATCHERS + GRID
// //    ================================================================ */

// // const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// // const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// // export const MiniCard = ({ item, theme, variant = 'v1', cardHeights }) => {
// //   const resolved = resolveMiniVariant(variant, item);
// //   const Component = MINI_MAP[resolved] || MiniV1;
// //   const height = resolveCardHeight(item, resolved, cardHeights);
// //   return <Component item={item} theme={theme} height={height} />;
// // };

// // export const BigCard = ({ item, theme, variant = 'b1', cardHeights }) => {
// //   const resolved = resolveBigVariant(variant, item);
// //   const Component = BIG_MAP[resolved] || BigB1;
// //   const height = resolveCardHeight(item, resolved, cardHeights);
// //   return <Component item={item} theme={theme} height={height} />;
// // };

// // export const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
// //   const placements = useMemo(() => buildPlacements(items), [items]);
// //   if (!placements.length) return null;
// //   return (
// //     <div style={{
// //       display: 'grid',
// //       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
// //       gap: '1rem',
// //       alignItems: 'start',
// //     }}>
// //       {placements.map(({ item, gridColumn, index }, i) => (
// //         <div
// //           key={i}
// //           id={getCellId ? getCellId(item, index) : undefined}
// //           className="vtp-algo-cell"
// //           style={{ gridColumn, minWidth: 0, scrollMarginTop: '100px' }}
// //         >
// //           {renderItem(item)}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };


// /**
//  * VisualToolsPage v29 — file 1 of 3 (visualToolsCards.jsx)
//  *
//  * Change from v28:
//  *   - BigB1: replaced fixed `height` with `minHeight: height` and removed
//  *     `overflow: hidden`. Card now grows with content like BigB3 does in
//  *     practice (where a parent cardHeights override or item.cardHeight is
//  *     in use), so icon and non-icon BigCards render at matching heights.
//  *
//  * Change from v27:
//  *   - DEFAULT_CARD_HEIGHTS.b1: 280 → 240 (matches b3 baseline).
//  *
//  * Change from v26:
//  *   - BigB1: title shrunk (1.4rem → 1.15rem, marginBottom 22 → 12, minHeight
//  *     recalculated for new size). Description user-tuned.
//  *
//  * Change from v25:
//  *   - BigB1 icon column width reduced from 45% to 33.33% (1/3 instead of ~1/2).
//  *
//  * Change from v24:
//  *   - Visual fields (image/svg/icon) are now read from item.* OR
//  *     item.seoData.* via rawImage/rawSvg/rawIcon helpers. buildToolIndexData
//  *     forwards seoData without lifting svg/icon/image to the top level, so
//  *     getVisualType was returning null and every card collapsed to text-only
//  *     v3. Now the seoData-nested values are picked up.
//  *
//  * Change from v24 (prior):
//  *   - CardIconBadge (V3/B3) now also accepts an SVG string passed via
//  *     item.icon, not only item.svg. This matches the SidebarIcon convention
//  *     where the `icon` field may itself be raw <svg> markup.
//  *   - Precedence: item.svg → item.icon-as-svg → item.icon-as-text.
//  *
//  * Change from v22:
//  *   - MiniV3 + BigB3 icon badges render inline SVG via CardIconBadge.
//  */

// import React, { useMemo, useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { processContent } from '@/app/utils/contentProcessor';


// /* ================================================================
//    CONSTANTS
//    ================================================================ */

// export const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
// export const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

// export const NAVBAR_HEIGHT = 55;
// export const SIDEBAR_COLLAPSED = 68;
// export const SIDEBAR_EXPANDED = 290;
// export const MOBILE_BREAKPOINT = 768;

// export const UNCATEGORIZED_LABEL = 'Other';
// export const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

// export const CTA_OPEN = 'Open tool →';
// export const CTA_VIEW = 'View Details';

// export const DEFAULT_CARD_HEIGHTS = {
//   v1: 320, v2: 200, v3: 220, v4: 300,
//   b1: 240, b2: 360, b3: 240,
// };

// export const FADE_PX = 28;

// export const VALID_VIDEO_LAYOUTS = new Set(['above', 'beside', 'below', 'strip']);


// /* ================================================================
//    INLINE UTILITIES
//    ================================================================ */

// export const hexToRgba = (hex, alpha) => {
//   const h = hex.replace('#', '');
//   const r = parseInt(h.substring(0, 2), 16);
//   const g = parseInt(h.substring(2, 4), 16);
//   const b = parseInt(h.substring(4, 6), 16);
//   return `rgba(${r}, ${g}, ${b}, ${alpha})`;
// };

// export const generateShortTitle = (title = '') =>
//   title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

// export function slugify(s) {
//   return String(s || '').toLowerCase().trim()
//     .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
// }

// export function isValidImagePath(val) {
//   if (typeof val !== 'string') return false;
//   const v = val.trim();
//   if (!v) return false;
//   return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
// }

// export function isValidSvg(val) {
//   return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
// }

// export function isValidIcon(val) {
//   if (typeof val !== 'string') return false;
//   const v = val.trim();
//   if (!v) return false;
//   if (v.startsWith('/') || v.startsWith('http')) return false;
//   if (v.toLowerCase().startsWith('<svg')) return false;
//   return true;
// }

// export function constrainSvg(svg) {
//   return svg.replace(
//     /<svg\b([^>]*)>/i,
//     '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
//   );
// }

// /* Visual fields may live at item.* or item.seoData.* (buildToolIndexData
//    forwards seoData without lifting these to the top level). */
// export function rawImage(item) {
//   if (!item) return undefined;
//   return item.image != null ? item.image : (item.seoData ? item.seoData.image : undefined);
// }
// export function rawSvg(item) {
//   if (!item) return undefined;
//   return item.svg != null ? item.svg : (item.seoData ? item.seoData.svg : undefined);
// }
// export function rawIcon(item) {
//   if (!item) return undefined;
//   return item.icon != null ? item.icon : (item.seoData ? item.seoData.icon : undefined);
// }

// export function wrapFormula(f) {
//   if (!f) return '';
//   const t = String(f).trim();
//   if (!t) return '';
//   if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
//   return `$${t}$`;
// }

// export function getVisualType(item) {
//   if (!item) return null;
//   if (isValidImagePath(rawImage(item))) return 'image';
//   if (isValidSvg(rawSvg(item))) return 'svg';
//   if (isValidIcon(rawIcon(item))) return 'icon';
//   return null;
// }

// export function toolIdFor(item, fallbackIdx = 0) {
//   if (item && item.id) return `tool-${slugify(item.id)}`;
//   if (item && item.title) return `tool-${slugify(item.title)}`;
//   return `tool-${fallbackIdx}`;
// }

// export function subGroupId(categoryName, subName) {
//   return `sub-${slugify(categoryName)}-${slugify(subName)}`;
// }

// export function categoryId(categoryName) {
//   return `cat-${slugify(categoryName)}`;
// }

// export function resolveCardHeight(item, variant, cardHeights) {
//   if (item && Number.isFinite(item.cardHeight)) return item.cardHeight;
//   if (cardHeights && Number.isFinite(cardHeights[variant])) return cardHeights[variant];
//   return DEFAULT_CARD_HEIGHTS[variant];
// }

// export function hasArticleContent(a) {
//   if (!a || typeof a !== 'object') return false;
//   return !!(a.eyebrow || a.title || a.content);
// }

// export function sanitizeVideos(videos) {
//   if (!Array.isArray(videos)) return [];
//   return videos.filter((v) => v && (v.embedUrl || v.title));
// }

// export function sanitizeVideoLayout(layout) {
//   if (typeof layout !== 'string') return 'beside';
//   const l = layout.toLowerCase();
//   return VALID_VIDEO_LAYOUTS.has(l) ? l : 'beside';
// }


// /* ================================================================
//    HOOKS
//    ================================================================ */

// export const useIsMobile = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   useEffect(() => {
//     const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
//     const update = () => setIsMobile(mql.matches);
//     update();
//     mql.addEventListener('change', update);
//     return () => mql.removeEventListener('change', update);
//   }, []);
//   return isMobile;
// };


// /* ================================================================
//    GRID LAYOUT
//    ================================================================ */

// export function rowSizes(N) {
//   if (!Number.isFinite(N) || N <= 0) return [];
//   if (N === 1) return [1];
//   if (N % 3 === 1 && N >= 4) {
//     const fullThrees = (N - 4) / 3;
//     return [...Array(fullThrees).fill(3), 2, 2];
//   }
//   if (N % 3 === 2) {
//     const fullThrees = (N - 2) / 3;
//     return [...Array(fullThrees).fill(3), 2];
//   }
//   return Array(N / 3).fill(3);
// }

// export function getGridColumn(rowSize, posInRow) {
//   if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
//   if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
//   if (rowSize === 1) return '2 / span 3';
//   return 'auto';
// }

// export function buildPlacements(items) {
//   const list = Array.isArray(items) ? items : [];
//   const rows = rowSizes(list.length);
//   const out = [];
//   let idx = 0;
//   for (const rowSize of rows) {
//     for (let pos = 0; pos < rowSize; pos++) {
//       out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
//       idx += 1;
//     }
//   }
//   return out;
// }


// /* ================================================================
//    VARIANT RESOLVERS
//    ================================================================ */

// const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
// const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

// export function resolveMiniVariant(requested, item) {
//   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
//   if (!VALID_MINI.has(v)) v = 'v1';
//   const hasVisual  = getVisualType(item) !== null;
//   const hasFormula = !!(item && item.formula);
//   if (v === 'v4' && !hasFormula) v = 'v1';
//   if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
//   return v;
// }

// export function resolveBigVariant(requested, item) {
//   let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
//   if (!VALID_BIG.has(v)) v = 'b1';
//   const hasVisual = getVisualType(item) !== null;
//   if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
//   return v;
// }


// /* ================================================================
//    VISUAL
//    ================================================================ */

// export const Visual = ({ item, height, mode = 'banner' }) => {
//   const [imgFailed, setImgFailed] = useState(false);
//   const img = rawImage(item);
//   const svg = rawSvg(item);
//   const icon = rawIcon(item);
//   useEffect(() => { setImgFailed(false); }, [img]);

//   const v = getVisualType(item);

//   if (v === 'image' && !imgFailed) {
//     return (
//       <div style={{
//         width: '100%', height, position: 'relative',
//         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
//       }}>
//         <Image
//           src={img}
//           alt={item.imageAlt || item.title || ''}
//           fill
//           style={{ objectFit: 'cover' }}
//           onError={() => setImgFailed(true)}
//         />
//       </div>
//     );
//   }

//   if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(svg))) {
//     return (
//       <div style={{
//         width: '100%', height,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
//       }}>
//         <div style={{
//           width: '80%', height: '80%',
//           display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
//         }}
//         dangerouslySetInnerHTML={{ __html: constrainSvg(svg) }} />
//       </div>
//     );
//   }

//   if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(icon))) {
//     return (
//       <div style={{
//         width: '100%', height,
//         display: 'flex', alignItems: 'center', justifyContent: 'center',
//         background: 'rgba(255,255,255,0.06)',
//         fontSize: mode === 'banner' ? '2rem' : '1.6rem',
//         opacity: 0.85, flexShrink: 0,
//       }}>
//         {icon}
//       </div>
//     );
//   }

//   return null;
// };


// /* ================================================================
//    CARD ICON BADGE (V3 / B3)
//    ================================================================ */

// const CardIconBadge = ({ item, size, radius, fontSize }) => {
//   const svg = rawSvg(item);
//   const icon = rawIcon(item);
//   const svgSource =
//     isValidSvg(svg) ? svg
//       : (isValidSvg(icon) ? icon : null);
//   const showIcon = !svgSource && isValidIcon(icon);
//   if (!svgSource && !showIcon) return null;
//   return (
//     <div style={{
//       width: size, height: size, borderRadius: radius,
//       background: 'rgba(255,255,255,0.15)',
//       display: 'flex', alignItems: 'center', justifyContent: 'center',
//       fontSize, flexShrink: 0, overflow: 'hidden',
//     }}>
//       {svgSource ? (
//         <div
//           style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
//           dangerouslySetInnerHTML={{ __html: constrainSvg(svgSource) }}
//         />
//       ) : icon}
//     </div>
//   );
// };


// /* ================================================================
//    FADING DESCRIPTION
//    ================================================================ */

// const fadeMask = `linear-gradient(to bottom, black calc(100% - ${FADE_PX}px), transparent 100%)`;

// export const FadingDescription = ({ children, fontSize, lineHeight, color, opacity }) => (
//   <div
//     className="vtp-desc-scroll"
//     style={{
//       flex: 1, minHeight: 0,
//       overflowY: 'auto', overflowX: 'hidden',
//       scrollbarWidth: 'none', msOverflowStyle: 'none',
//       WebkitMaskImage: fadeMask, maskImage: fadeMask,
//     }}
//   >
//     <p style={{ margin: 0, fontSize, lineHeight, color, opacity, paddingBottom: FADE_PX }}>
//       {children}
//     </p>
//   </div>
// );


// /* ================================================================
//    CTA STYLES
//    ================================================================ */

// const ctaTextStyle = (theme) => ({
//   fontSize: '0.78rem', fontWeight: 600,
//   color: theme.cardText, opacity: 0.9,
//   textTransform: 'uppercase', letterSpacing: '0.5px',
//   fontFamily: FONT_FAMILY, flexShrink: 0,
// });

// const ctaPillStyle = (theme) => ({
//   display: 'inline-block',
//   border: `1px solid ${theme.cardText}`,
//   padding: '8px 18px', borderRadius: 999,
//   fontSize: '0.88rem', fontWeight: 500,
//   color: theme.cardText, alignSelf: 'flex-start',
//   fontFamily: FONT_FAMILY, flexShrink: 0,
// });


// /* ================================================================
//    MINI CARD VARIANTS
//    ================================================================ */

// const MiniV1 = ({ item, theme, height }) => {
//   const visualHeight = Math.max(110, Math.round(height * 0.42));
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column',
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 8, overflow: 'hidden',
//       height, textDecoration: 'none',
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//       fontFamily: FONT_FAMILY,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <Visual item={item} height={visualHeight} mode="banner" />
//       <div style={{ padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//         <h3 style={{
//           fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 22,
//           color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
//           minHeight: 'calc(1.05rem * 1.3 * 2)',
//         }}>{item.title}</h3>
//         {item.description && (
//           <FadingDescription fontSize="0.85rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
//         )}
//         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
//       </div>
//     </Link>
//   );
// };

// const MiniV2 = ({ item, theme, height }) => (
//   <Link href={item.href || '#'} style={{
//     display: 'flex', flexDirection: 'row',
//     background: theme.cardBg, color: theme.cardText,
//     borderRadius: 8, overflow: 'hidden',
//     height, textDecoration: 'none',
//     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//     fontFamily: FONT_FAMILY,
//   }}
//   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//   >
//     <div style={{ width: '40%', flexShrink: 0 }}>
//       <Visual item={item} height="100%" mode="side" />
//     </div>
//     <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//       <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
//       {item.description && (
//         <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
//       )}
//       <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
//     </div>
//   </Link>
// );

// const MiniV3 = ({ item, theme, height }) => (
//   <Link href={item.href || '#'} style={{
//     display: 'flex', flexDirection: 'column', gap: 22,
//     background: theme.cardBg, color: theme.cardText,
//     borderRadius: 8, padding: '20px 22px',
//     height, textDecoration: 'none',
//     transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//     fontFamily: FONT_FAMILY, minHeight: 0,
//   }}
//   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//   >
//     <div style={{
//       display: 'flex', alignItems: 'flex-start', gap: 12, flexShrink: 0,
//       minHeight: 'calc(1.05rem * 1.3 * 2)',
//     }}>
//       <CardIconBadge item={item} size={44} radius={10} fontSize="1.3rem" />
//       <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
//     </div>
//     {item.description && (
//       <FadingDescription fontSize="0.86rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
//     )}
//     <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
//   </Link>
// );

// const MiniV4 = ({ item, theme, height }) => {
//   const formulaHeight = Math.max(80, Math.round(height * 0.32));
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column',
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 8, overflow: 'hidden',
//       height, textDecoration: 'none',
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//       fontFamily: FONT_FAMILY,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <div style={{ background: 'rgba(255,255,255,0.08)', height: formulaHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 16px', fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic', color: theme.cardText, opacity: 0.95, flexShrink: 0 }}>
//         {processContent(wrapFormula(item.formula))}
//       </div>
//       <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//         <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4, color: theme.cardText, flexShrink: 0 }}>{item.title}</h3>
//         {item.description && (
//           <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.85}>{item.description}</FadingDescription>
//         )}
//         <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
//       </div>
//     </Link>
//   );
// };


// /* ================================================================
//    BIG CARD VARIANTS
//    ================================================================ */

// const BigB1 = ({ item, theme, height }) => (
//   <Link href={item.href || '#'} style={{
//     display: 'flex', flexDirection: 'row',
//     background: theme.cardBg, color: theme.cardText,
//     borderRadius: 10,
//     minHeight: height, textDecoration: 'none',
//     transition: 'box-shadow 0.3s ease',
//     fontFamily: FONT_FAMILY,
//   }}
//   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
//   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
//   >
//     <div style={{ width: '33.33%', flexShrink: 0, alignSelf: 'stretch' }}>
//       <Visual item={item} height="100%" mode="side" />
//     </div>
//     <div style={{ padding: '22px 26px', display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
//       <h3 style={{
//         fontSize: '1.15rem', fontWeight: 600, margin: 0, marginBottom: 12,
//         color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
//         minHeight: 'calc(1.15rem * 1.3 * 2)',
//       }}>{item.title}</h3>
//       {item.description && (
//         <FadingDescription fontSize="0.8rem" lineHeight={1.35} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
//       )}
//       <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
//     </div>
//   </Link>
// );

// const BigB2 = ({ item, theme, height }) => {
//   const visualHeight = Math.max(140, Math.round(height * 0.5));
//   return (
//     <Link href={item.href || '#'} style={{
//       display: 'flex', flexDirection: 'column',
//       background: theme.cardBg, color: theme.cardText,
//       borderRadius: 10, overflow: 'hidden',
//       height, textDecoration: 'none',
//       transition: 'box-shadow 0.3s ease',
//       fontFamily: FONT_FAMILY,
//     }}
//     onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
//     onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
//     >
//       <Visual item={item} height={visualHeight} mode="banner" />
//       <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
//         <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
//         {item.description && (
//           <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
//         )}
//         <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
//       </div>
//     </Link>
//   );
// };

// const BigB3 = ({ item, theme, height }) => (
//   <Link href={item.href || '#'} style={{
//     display: 'flex', flexDirection: 'column',
//     background: theme.cardBg, color: theme.cardText,
//     borderRadius: 10, padding: '24px 28px',
//     height, textDecoration: 'none',
//     transition: 'box-shadow 0.3s ease',
//     fontFamily: FONT_FAMILY, minHeight: 0,
//   }}
//   onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
//   onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
//   >
//     <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexShrink: 0 }}>
//       <CardIconBadge item={item} size={52} radius={12} fontSize="1.6rem" />
//       <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
//     </div>
//     {item.description && (
//       <FadingDescription fontSize="1rem" lineHeight={1.6} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
//     )}
//     <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
//   </Link>
// );


// /* ================================================================
//    CARD DISPATCHERS + GRID
//    ================================================================ */

// const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
// const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

// export const MiniCard = ({ item, theme, variant = 'v1', cardHeights }) => {
//   const resolved = resolveMiniVariant(variant, item);
//   const Component = MINI_MAP[resolved] || MiniV1;
//   const height = resolveCardHeight(item, resolved, cardHeights);
//   return <Component item={item} theme={theme} height={height} />;
// };

// export const BigCard = ({ item, theme, variant = 'b1', cardHeights }) => {
//   const resolved = resolveBigVariant(variant, item);
//   const Component = BIG_MAP[resolved] || BigB1;
//   const height = resolveCardHeight(item, resolved, cardHeights);
//   return <Component item={item} theme={theme} height={height} />;
// };

// export const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
//   const placements = useMemo(() => buildPlacements(items), [items]);
//   if (!placements.length) return null;
//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
//       gap: '1rem',
//       alignItems: 'stretch',
//     }}>
//       {placements.map(({ item, gridColumn, index }, i) => (
//         <div
//           key={i}
//           id={getCellId ? getCellId(item, index) : undefined}
//           className="vtp-algo-cell"
//           style={{ gridColumn, minWidth: 0, scrollMarginTop: '100px' }}
//         >
//           {renderItem(item)}
//         </div>
//       ))}
//     </div>
//   );
// };


/**
 * VisualToolsPage v30 — file 1 of 3 (visualToolsCards.jsx)
 *
 * Change from v29:
 *   - Reverted BigB1 to fixed `height` (from `minHeight`), restored
 *     `overflow: hidden`, removed the `alignSelf: stretch` on icon column.
 *   - Reverted AlgorithmicGrid to `alignItems: 'start'`.
 *   - Net effect: BigB1 is again exactly `height` tall regardless of
 *     description length. Long descriptions scroll/fade inside.
 *
 * Change from v28:
 *   - DEFAULT_CARD_HEIGHTS.b1: 280 → 240 (matches b3 baseline).
 *
 * Change from v26:
 *   - BigB1: title shrunk (1.4rem → 1.15rem, marginBottom 22 → 12, minHeight
 *     recalculated for new size). Description user-tuned.
 *
 * Change from v25:
 *   - BigB1 icon column width reduced from 45% to 33.33%.
 *
 * Change from v24:
 *   - Visual fields read from item.* or item.seoData.* via raw* helpers.
 *
 * Change from v24 (prior):
 *   - CardIconBadge accepts SVG via item.icon (precedence svg → icon-as-svg →
 *     icon-as-text).
 *
 * Change from v22:
 *   - MiniV3 + BigB3 icon badges render inline SVG via CardIconBadge.
 */

import React, { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { processContent } from '@/app/utils/contentProcessor';


/* ================================================================
   CONSTANTS
   ================================================================ */

export const FONT_FAMILY = '"Inter", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif';
export const SERIF_FAMILY = '"Source Serif 4", Georgia, serif';

export const NAVBAR_HEIGHT = 55;
export const SIDEBAR_COLLAPSED = 68;
export const SIDEBAR_EXPANDED = 290;
export const MOBILE_BREAKPOINT = 768;

export const UNCATEGORIZED_LABEL = 'Other';
export const GRID_TEMPLATE_COLUMNS = 'repeat(6, minmax(0, 1fr))';

export const CTA_OPEN = 'Open tool →';
export const CTA_VIEW = 'View Details';

export const DEFAULT_CARD_HEIGHTS = {
  v1: 320, v2: 200, v3: 220, v4: 300,
  b1: 240, b2: 360, b3: 240,
};

export const FADE_PX = 28;

export const VALID_VIDEO_LAYOUTS = new Set(['above', 'beside', 'below', 'strip']);


/* ================================================================
   INLINE UTILITIES
   ================================================================ */

export const hexToRgba = (hex, alpha) => {
  const h = hex.replace('#', '');
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const generateShortTitle = (title = '') =>
  title.replace(/\s*(Visualizers?|Explorer|Calculator)\s*$/i, '').trim();

export function slugify(s) {
  return String(s || '').toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'group';
}

export function isValidImagePath(val) {
  if (typeof val !== 'string') return false;
  const v = val.trim();
  if (!v) return false;
  return v.startsWith('/') || v.startsWith('http://') || v.startsWith('https://') || v.startsWith('data:image/');
}

export function isValidSvg(val) {
  return typeof val === 'string' && val.trim().toLowerCase().startsWith('<svg');
}

export function isValidIcon(val) {
  if (typeof val !== 'string') return false;
  const v = val.trim();
  if (!v) return false;
  if (v.startsWith('/') || v.startsWith('http')) return false;
  if (v.toLowerCase().startsWith('<svg')) return false;
  return true;
}

export function constrainSvg(svg) {
  return svg.replace(
    /<svg\b([^>]*)>/i,
    '<svg$1 style="max-width:100%;max-height:100%;width:auto;height:auto;display:block;" preserveAspectRatio="xMidYMid meet">'
  );
}

export function rawImage(item) {
  if (!item) return undefined;
  return item.image != null ? item.image : (item.seoData ? item.seoData.image : undefined);
}
export function rawSvg(item) {
  if (!item) return undefined;
  return item.svg != null ? item.svg : (item.seoData ? item.seoData.svg : undefined);
}
export function rawIcon(item) {
  if (!item) return undefined;
  return item.icon != null ? item.icon : (item.seoData ? item.seoData.icon : undefined);
}

export function wrapFormula(f) {
  if (!f) return '';
  const t = String(f).trim();
  if (!t) return '';
  if (/^\${1,2}.*\${1,2}$/s.test(t)) return t;
  return `$${t}$`;
}

export function getVisualType(item) {
  if (!item) return null;
  if (isValidImagePath(rawImage(item))) return 'image';
  if (isValidSvg(rawSvg(item))) return 'svg';
  if (isValidIcon(rawIcon(item))) return 'icon';
  return null;
}

export function toolIdFor(item, fallbackIdx = 0) {
  if (item && item.id) return `tool-${slugify(item.id)}`;
  if (item && item.title) return `tool-${slugify(item.title)}`;
  return `tool-${fallbackIdx}`;
}

export function subGroupId(categoryName, subName) {
  return `sub-${slugify(categoryName)}-${slugify(subName)}`;
}

export function categoryId(categoryName) {
  return `cat-${slugify(categoryName)}`;
}

export function resolveCardHeight(item, variant, cardHeights) {
  if (item && Number.isFinite(item.cardHeight)) return item.cardHeight;
  if (cardHeights && Number.isFinite(cardHeights[variant])) return cardHeights[variant];
  return DEFAULT_CARD_HEIGHTS[variant];
}

export function hasArticleContent(a) {
  if (!a || typeof a !== 'object') return false;
  return !!(a.eyebrow || a.title || a.content);
}

export function sanitizeVideos(videos) {
  if (!Array.isArray(videos)) return [];
  return videos.filter((v) => v && (v.embedUrl || v.title));
}

export function sanitizeVideoLayout(layout) {
  if (typeof layout !== 'string') return 'beside';
  const l = layout.toLowerCase();
  return VALID_VIDEO_LAYOUTS.has(l) ? l : 'beside';
}


/* ================================================================
   HOOKS
   ================================================================ */

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);
  return isMobile;
};


/* ================================================================
   GRID LAYOUT
   ================================================================ */

export function rowSizes(N) {
  if (!Number.isFinite(N) || N <= 0) return [];
  if (N === 1) return [1];
  if (N % 3 === 1 && N >= 4) {
    const fullThrees = (N - 4) / 3;
    return [...Array(fullThrees).fill(3), 2, 2];
  }
  if (N % 3 === 2) {
    const fullThrees = (N - 2) / 3;
    return [...Array(fullThrees).fill(3), 2];
  }
  return Array(N / 3).fill(3);
}

export function getGridColumn(rowSize, posInRow) {
  if (rowSize === 3) return `${1 + posInRow * 2} / span 2`;
  if (rowSize === 2) return `${1 + posInRow * 3} / span 3`;
  if (rowSize === 1) return '2 / span 3';
  return 'auto';
}

export function buildPlacements(items) {
  const list = Array.isArray(items) ? items : [];
  const rows = rowSizes(list.length);
  const out = [];
  let idx = 0;
  for (const rowSize of rows) {
    for (let pos = 0; pos < rowSize; pos++) {
      out.push({ item: list[idx], gridColumn: getGridColumn(rowSize, pos), index: idx });
      idx += 1;
    }
  }
  return out;
}


/* ================================================================
   VARIANT RESOLVERS
   ================================================================ */

const VALID_MINI = new Set(['v1', 'v2', 'v3', 'v4']);
const VALID_BIG  = new Set(['b1', 'b2', 'b3']);

export function resolveMiniVariant(requested, item) {
  let v = (typeof requested === 'string' ? requested.toLowerCase() : 'v1');
  if (!VALID_MINI.has(v)) v = 'v1';
  const hasVisual  = getVisualType(item) !== null;
  const hasFormula = !!(item && item.formula);
  if (v === 'v4' && !hasFormula) v = 'v1';
  if ((v === 'v1' || v === 'v2') && !hasVisual) v = 'v3';
  return v;
}

export function resolveBigVariant(requested, item) {
  let v = (typeof requested === 'string' ? requested.toLowerCase() : 'b1');
  if (!VALID_BIG.has(v)) v = 'b1';
  const hasVisual = getVisualType(item) !== null;
  if ((v === 'b1' || v === 'b2') && !hasVisual) v = 'b3';
  return v;
}


/* ================================================================
   VISUAL
   ================================================================ */

export const Visual = ({ item, height, mode = 'banner' }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const img = rawImage(item);
  const svg = rawSvg(item);
  const icon = rawIcon(item);
  useEffect(() => { setImgFailed(false); }, [img]);

  const v = getVisualType(item);

  if (v === 'image' && !imgFailed) {
    return (
      <div style={{
        width: '100%', height, position: 'relative',
        background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
      }}>
        <Image
          src={img}
          alt={item.imageAlt || item.title || ''}
          fill
          style={{ objectFit: 'cover' }}
          onError={() => setImgFailed(true)}
        />
      </div>
    );
  }

  if (v === 'svg' || (v === 'image' && imgFailed && isValidSvg(svg))) {
    return (
      <div style={{
        width: '100%', height,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.06)', overflow: 'hidden', flexShrink: 0,
      }}>
        <div style={{
          width: '80%', height: '80%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        }}
        dangerouslySetInnerHTML={{ __html: constrainSvg(svg) }} />
      </div>
    );
  }

  if (v === 'icon' || (v === 'image' && imgFailed && isValidIcon(icon))) {
    return (
      <div style={{
        width: '100%', height,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(255,255,255,0.06)',
        fontSize: mode === 'banner' ? '2rem' : '1.6rem',
        opacity: 0.85, flexShrink: 0,
      }}>
        {icon}
      </div>
    );
  }

  return null;
};


/* ================================================================
   CARD ICON BADGE (V3 / B3)
   ================================================================ */

const CardIconBadge = ({ item, size, radius, fontSize }) => {
  const svg = rawSvg(item);
  const icon = rawIcon(item);
  const svgSource =
    isValidSvg(svg) ? svg
      : (isValidSvg(icon) ? icon : null);
  const showIcon = !svgSource && isValidIcon(icon);
  if (!svgSource && !showIcon) return null;
  return (
    <div style={{
      width: size, height: size, borderRadius: radius,
      background: 'rgba(255,255,255,0.15)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize, flexShrink: 0, overflow: 'hidden',
    }}>
      {svgSource ? (
        <div
          style={{ width: '70%', height: '70%', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}
          dangerouslySetInnerHTML={{ __html: constrainSvg(svgSource) }}
        />
      ) : icon}
    </div>
  );
};


/* ================================================================
   FADING DESCRIPTION
   ================================================================ */

const fadeMask = `linear-gradient(to bottom, black calc(100% - ${FADE_PX}px), transparent 100%)`;

export const FadingDescription = ({ children, fontSize, lineHeight, color, opacity }) => (
  <div
    className="vtp-desc-scroll"
    style={{
      flex: 1, minHeight: 0,
      overflowY: 'auto', overflowX: 'hidden',
      scrollbarWidth: 'none', msOverflowStyle: 'none',
      WebkitMaskImage: fadeMask, maskImage: fadeMask,
    }}
  >
    <p style={{ margin: 0, fontSize, lineHeight, color, opacity, paddingBottom: FADE_PX }}>
      {children}
    </p>
  </div>
);


/* ================================================================
   CTA STYLES
   ================================================================ */

const ctaTextStyle = (theme) => ({
  fontSize: '0.78rem', fontWeight: 600,
  color: theme.cardText, opacity: 0.9,
  textTransform: 'uppercase', letterSpacing: '0.5px',
  fontFamily: FONT_FAMILY, flexShrink: 0,
});

const ctaPillStyle = (theme) => ({
  display: 'inline-block',
  border: `1px solid ${theme.cardText}`,
  padding: '8px 18px', borderRadius: 999,
  fontSize: '0.88rem', fontWeight: 500,
  color: theme.cardText, alignSelf: 'flex-start',
  fontFamily: FONT_FAMILY, flexShrink: 0,
});


/* ================================================================
   MINI CARD VARIANTS
   ================================================================ */

const MiniV1 = ({ item, theme, height }) => {
  const visualHeight = Math.max(110, Math.round(height * 0.42));
  return (
    <Link href={item.href || '#'} style={{
      display: 'flex', flexDirection: 'column',
      background: theme.cardBg, color: theme.cardText,
      borderRadius: 8, overflow: 'hidden',
      height, textDecoration: 'none',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      fontFamily: FONT_FAMILY,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <Visual item={item} height={visualHeight} mode="banner" />
      <div style={{ padding: '14px 18px 14px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <h3 style={{
          fontSize: '1.05rem', fontWeight: 600, margin: 0, marginBottom: 22,
          color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
          minHeight: 'calc(1.05rem * 1.3 * 2)',
        }}>{item.title}</h3>
        {item.description && (
          <FadingDescription fontSize="0.85rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
        )}
        <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
      </div>
    </Link>
  );
};

const MiniV2 = ({ item, theme, height }) => (
  <Link href={item.href || '#'} style={{
    display: 'flex', flexDirection: 'row',
    background: theme.cardBg, color: theme.cardText,
    borderRadius: 8, overflow: 'hidden',
    height, textDecoration: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    fontFamily: FONT_FAMILY,
  }}
  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div style={{ width: '40%', flexShrink: 0 }}>
      <Visual item={item} height="100%" mode="side" />
    </div>
    <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
      <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 6, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
      {item.description && (
        <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
      )}
      <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
    </div>
  </Link>
);

const MiniV3 = ({ item, theme, height }) => (
  <Link href={item.href || '#'} style={{
    display: 'flex', flexDirection: 'column', gap: 22,
    background: theme.cardBg, color: theme.cardText,
    borderRadius: 8, padding: '20px 22px',
    height, textDecoration: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    fontFamily: FONT_FAMILY, minHeight: 0,
  }}
  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div style={{
      display: 'flex', alignItems: 'flex-start', gap: 12, flexShrink: 0,
      minHeight: 'calc(1.05rem * 1.3 * 2)',
    }}>
      <CardIconBadge item={item} size={44} radius={10} fontSize="1.3rem" />
      <h3 style={{ fontSize: '1.05rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
    </div>
    {item.description && (
      <FadingDescription fontSize="0.86rem" lineHeight={1.5} color={theme.cardText} opacity={0.88}>{item.description}</FadingDescription>
    )}
    <div style={ctaTextStyle(theme)}>{CTA_OPEN}</div>
  </Link>
);

const MiniV4 = ({ item, theme, height }) => {
  const formulaHeight = Math.max(80, Math.round(height * 0.32));
  return (
    <Link href={item.href || '#'} style={{
      display: 'flex', flexDirection: 'column',
      background: theme.cardBg, color: theme.cardText,
      borderRadius: 8, overflow: 'hidden',
      height, textDecoration: 'none',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      fontFamily: FONT_FAMILY,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 16px -4px rgba(0,0,0,0.15)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      <div style={{ background: 'rgba(255,255,255,0.08)', height: formulaHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 16px', fontFamily: SERIF_FAMILY, fontSize: '1.4rem', fontStyle: 'italic', color: theme.cardText, opacity: 0.95, flexShrink: 0 }}>
        {processContent(wrapFormula(item.formula))}
      </div>
      <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: 0, marginBottom: 4, color: theme.cardText, flexShrink: 0 }}>{item.title}</h3>
        {item.description && (
          <FadingDescription fontSize="0.82rem" lineHeight={1.45} color={theme.cardText} opacity={0.85}>{item.description}</FadingDescription>
        )}
        <div style={{ marginTop: 10, ...ctaTextStyle(theme) }}>{CTA_OPEN}</div>
      </div>
    </Link>
  );
};


/* ================================================================
   BIG CARD VARIANTS
   ================================================================ */

const BigB1 = ({ item, theme, height }) => (
  <Link href={item.href || '#'} style={{
    display: 'flex', flexDirection: 'row',
    background: theme.cardBg, color: theme.cardText,
    borderRadius: 10, overflow: 'hidden',
    height, textDecoration: 'none',
    transition: 'box-shadow 0.3s ease',
    fontFamily: FONT_FAMILY,
  }}
  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div style={{ width: '33.33%', flexShrink: 0 }}>
      <Visual item={item} height="100%" mode="side" />
    </div>
    <div style={{ padding: '22px 26px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
      <h3 style={{
        fontSize: '1.15rem', fontWeight: 600, margin: 0, marginBottom: 12,
        color: theme.cardText, lineHeight: 1.3, flexShrink: 0,
        minHeight: 'calc(1.15rem * 1.3 * 2)',
      }}>{item.title}</h3>
      {item.description && (
        <FadingDescription fontSize="0.8rem" lineHeight={1.35} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
      )}
      <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
    </div>
  </Link>
);

const BigB2 = ({ item, theme, height }) => {
  const visualHeight = Math.max(140, Math.round(height * 0.5));
  return (
    <Link href={item.href || '#'} style={{
      display: 'flex', flexDirection: 'column',
      background: theme.cardBg, color: theme.cardText,
      borderRadius: 10, overflow: 'hidden',
      height, textDecoration: 'none',
      transition: 'box-shadow 0.3s ease',
      fontFamily: FONT_FAMILY,
    }}
    onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      <Visual item={item} height={visualHeight} mode="banner" />
      <div style={{ padding: '18px 22px', display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
        <h3 style={{ fontSize: '1.35rem', fontWeight: 600, margin: 0, marginBottom: 8, color: theme.cardText, lineHeight: 1.3, flexShrink: 0 }}>{item.title}</h3>
        {item.description && (
          <FadingDescription fontSize="0.95rem" lineHeight={1.55} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
        )}
        <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
      </div>
    </Link>
  );
};

const BigB3 = ({ item, theme, height }) => (
  <Link href={item.href || '#'} style={{
    display: 'flex', flexDirection: 'column',
    background: theme.cardBg, color: theme.cardText,
    borderRadius: 10, padding: '24px 28px',
    height, textDecoration: 'none',
    transition: 'box-shadow 0.3s ease',
    fontFamily: FONT_FAMILY, minHeight: 0,
  }}
  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.15)'; }}
  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12, flexShrink: 0 }}>
      <CardIconBadge item={item} size={52} radius={12} fontSize="1.6rem" />
      <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: 0, color: theme.cardText, lineHeight: 1.3 }}>{item.title}</h3>
    </div>
    {item.description && (
      <FadingDescription fontSize="1rem" lineHeight={1.6} color={theme.cardText} opacity={0.9}>{item.description}</FadingDescription>
    )}
    <div style={{ marginTop: 14, ...ctaPillStyle(theme) }}>{CTA_VIEW}</div>
  </Link>
);


/* ================================================================
   CARD DISPATCHERS + GRID
   ================================================================ */

const MINI_MAP = { v1: MiniV1, v2: MiniV2, v3: MiniV3, v4: MiniV4 };
const BIG_MAP  = { b1: BigB1, b2: BigB2, b3: BigB3 };

export const MiniCard = ({ item, theme, variant = 'v1', cardHeights }) => {
  const resolved = resolveMiniVariant(variant, item);
  const Component = MINI_MAP[resolved] || MiniV1;
  const height = resolveCardHeight(item, resolved, cardHeights);
  return <Component item={item} theme={theme} height={height} />;
};

export const BigCard = ({ item, theme, variant = 'b1', cardHeights }) => {
  const resolved = resolveBigVariant(variant, item);
  const Component = BIG_MAP[resolved] || BigB1;
  const height = resolveCardHeight(item, resolved, cardHeights);
  return <Component item={item} theme={theme} height={height} />;
};

export const AlgorithmicGrid = ({ items, renderItem, getCellId }) => {
  const placements = useMemo(() => buildPlacements(items), [items]);
  if (!placements.length) return null;
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: GRID_TEMPLATE_COLUMNS,
      gap: '1rem',
      alignItems: 'start',
    }}>
      {placements.map(({ item, gridColumn, index }, i) => (
        <div
          key={i}
          id={getCellId ? getCellId(item, index) : undefined}
          className="vtp-algo-cell"
          style={{ gridColumn, minWidth: 0, scrollMarginTop: '100px' }}
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};