// // import React, { useMemo, useState } from 'react';
// // import { getTheme } from './sectionFrontPageThemes';

// // const NAVBAR_HEIGHT = 55;
// // const VIEWBOX_W = 1400;

// // /* ================================================================
// //    HELPERS — pure, no React
// //    ================================================================ */

// // const groupSections = (sections) => {
// //   const tools = [];
// //   const reference = [];
// //   const topics = [];
// //   (sections || []).forEach((s) => {
// //     if (s.type === 'visual-tools' || s.type === 'calculators') tools.push(s);
// //     else if (s.type === 'formulas' || s.type === 'definitions') reference.push(s);
// //     else topics.push(s);
// //   });
// //   return { tools, reference, topics };
// // };

// // const getSectionCount = (section, sectionData) => {
// //   const data = sectionData?.[section.id];
// //   if (!data) return null;
// //   if (data.totalCount != null) return data.totalCount;
// //   if (Array.isArray(data.children)) return data.children.length;
// //   return null;
// // };

// // const getCountLabel = (section, count) => {
// //   if (count == null) return null;
// //   const isTool = section.type === 'visual-tools' || section.type === 'calculators';
// //   const isRef = section.type === 'formulas' || section.type === 'definitions';
// //   if (isTool) return `${count} ${count === 1 ? 'tool' : 'tools'}`;
// //   if (isRef) return `${count} ${count === 1 ? 'item' : 'items'}`;
// //   return `${count} ${count === 1 ? 'topic' : 'topics'}`;
// // };

// // const scrollToSection = (id) => {
// //   if (typeof document === 'undefined') return;
// //   const el = document.getElementById(id);
// //   if (!el) return;
// //   window.scrollTo({
// //     top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10,
// //     behavior: 'smooth',
// //   });
// // };

// // const handleNodeActivate = (section) => () => {
// //   if (section.link) {
// //     window.location.href = section.link;
// //   } else if (section.id) {
// //     scrollToSection(section.id);
// //   }
// // };

// // /* ================================================================
// //    PALETTE — derived from the parent theme
// //    ================================================================ */

// // const derivePalette = (t) => ({
// //   canvasTop: '#f0f4fc',
// //   canvasBottom: '#dde6f3',
// //   rootBg: t.sidebarBg || '#0a1f3d',          // dark-blue, not black
// //   rootEyebrow: '#60a5fa',
// //   rootTitle: '#ffffff',
// //   rootSubtitle: 'rgba(255,255,255,0.55)',
// //   ctaBg: t.buttonBg || '#2563eb',
// //   ctaText: '#ffffff',
// //   podBg: '#ffffff',
// //   podBorder: '#d8e0ec',
// //   cardBg: '#ffffff',
// //   cardBorder: '#e5eaf1',
// //   cardBorderHover: t.buttonBg || '#2563eb',
// //   textPrimary: t.textPrimary || '#0a1f3d',
// //   textSecondary: t.textSecondary || '#5b6b80',
// //   textMuted: t.textMuted || '#94a3b8',
// //   link: t.buttonBg || '#2563eb',
// //   connector: '#93a8c4',
// //   iconBg: '#dbeafe',
// //   podStripTools: t.buttonBg || '#2563eb',
// //   podStripRef: '#1e40af',
// //   podStripTopics: '#475569',
// // });

// // /* ================================================================
// //    GLYPH — small svg glyph for a section, used inside cards
// //    ================================================================ */

// // const Glyph = ({ type, cx, cy, color, bg }) => {
// //   if (type === 'visual-tools') {
// //     return (
// //       <>
// //         <circle cx={cx} cy={cy} r="18" fill={bg} />
// //         <circle cx={cx} cy={cy} r="10" fill="none" stroke={color} strokeWidth="1.4" />
// //         <circle cx={cx} cy={cy} r="3.2" fill={color} />
// //       </>
// //     );
// //   }
// //   if (type === 'calculators') {
// //     return (
// //       <>
// //         <rect x={cx - 19} y={cy - 20} width="38" height="40" rx="6" fill={bg} stroke={color} strokeWidth="1.2" />
// //         <rect x={cx - 13} y={cy - 16} width="26" height="8" rx="1.5" fill={color} />
// //         {[-11, 0, 11].map((dx, i) => (
// //           <React.Fragment key={`r1-${i}`}>
// //             <circle cx={cx + dx} cy={cy + 2} r="1.4" fill={color} />
// //             <circle cx={cx + dx} cy={cy + 12} r="1.4" fill={color} />
// //           </React.Fragment>
// //         ))}
// //       </>
// //     );
// //   }
// //   if (type === 'formulas') {
// //     return (
// //       <>
// //         <circle cx={cx} cy={cy} r="18" fill={bg} />
// //         <text x={cx} y={cy + 8} textAnchor="middle" fontSize="20" fontWeight="700"
// //               fontStyle="italic" fill={color}
// //               fontFamily="'Source Serif 4', Georgia, serif">ƒ</text>
// //       </>
// //     );
// //   }
// //   if (type === 'definitions') {
// //     return (
// //       <>
// //         <circle cx={cx} cy={cy} r="18" fill={bg} />
// //         <text x={cx} y={cy + 6} textAnchor="middle" fontSize="12.5" fontWeight="700" fill={color}
// //               fontFamily="'Source Serif 4', Georgia, serif">Aa</text>
// //       </>
// //     );
// //   }
// //   return null;
// // };

// // /* ================================================================
// //    POD HEADER — strip + chip + count
// //    ================================================================ */

// // const PodHeader = ({ x, y, w, label, count, countNoun, stripColor, palette, glyph }) => (
// //   <>
// //     {/* top accent strip */}
// //     <rect x={x} y={y} width={w} height="3" rx="1.5" fill={stripColor} />
// //     {/* outlined chip */}
// //     <rect x={x + 20} y={y + 24} width="148" height="28" rx="14"
// //           fill={palette.podBg} stroke={stripColor} strokeWidth="1" />
// //     {glyph}
// //     <text x={x + 56} y={y + 43} fontSize="10.5" fontWeight="700" fill={stripColor}
// //           letterSpacing="1.3px"
// //           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
// //       {label}
// //     </text>
// //     {/* right-side count */}
// //     {count != null && (
// //       <text x={x + w - 20} y={y + 42} textAnchor="end" fontSize="10" fontWeight="600"
// //             fill={palette.textMuted} letterSpacing="0.6px"
// //             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
// //         {`${count} ${countNoun}`}
// //       </text>
// //     )}
// //   </>
// // );

// // /* ================================================================
// //    CARDS
// //    ================================================================ */

// // // Full-size card (Tools/Reference variant, with glyph + 2-line description)
// // const CardFull = ({ section, x, y, w, h, palette, sectionData, hoverId, setHoverId }) => {
// //   const count = getSectionCount(section, sectionData);
// //   const countLabel = getCountLabel(section, count);
// //   const isHover = hoverId === section.id;
// //   const desc = section.description ?? section.subtitle ?? '';
// //   // simple line split (first ~36 chars per line, then second line is rest)
// //   const lines = (() => {
// //     if (!desc) return ['', ''];
// //     const words = String(desc).split(/\s+/);
// //     let l1 = '';
// //     let l2 = '';
// //     for (const w of words) {
// //       if ((l1 + ' ' + w).trim().length <= 38 && !l2) l1 = (l1 + ' ' + w).trim();
// //       else l2 = (l2 + ' ' + w).trim();
// //     }
// //     return [l1, l2];
// //   })();
// //   const linkText = (section.type === 'formulas' || section.type === 'definitions') ? 'Browse →' : 'Open →';

// //   return (
// //     <g style={{ cursor: 'pointer', transition: 'transform 0.18s ease' }}
// //        transform={isHover ? `translate(${x},${y - 2})` : `translate(${x},${y})`}
// //        onMouseEnter={() => setHoverId(section.id)}
// //        onMouseLeave={() => setHoverId(null)}
// //        onClick={handleNodeActivate(section)}>
// //       <rect x="0" y="0" width={w} height={h} rx="12"
// //             fill={palette.cardBg}
// //             stroke={isHover ? palette.cardBorderHover : palette.cardBorder}
// //             strokeWidth="1" />
// //       <Glyph type={section.type} cx="36" cy="40" color={palette.podStripTools} bg={palette.iconBg} />
// //       <text x="66" y="37" fontSize="16" fontWeight="700" fill={palette.textPrimary}
// //             fontFamily="'Source Serif 4', Georgia, serif">{section.title}</text>
// //       {countLabel && (
// //         <text x="66" y="56" fontSize="11" fill={palette.textMuted}
// //               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{countLabel}</text>
// //       )}
// //       {lines[0] && (
// //         <text x="20" y="94" fontSize="12.5" fill={palette.textSecondary}
// //               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{lines[0]}</text>
// //       )}
// //       {lines[1] && (
// //         <text x="20" y="112" fontSize="12.5" fill={palette.textSecondary}
// //               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{lines[1]}</text>
// //       )}
// //       <text x={w - 20} y={h - 14} textAnchor="end" fontSize="11" fontWeight="700"
// //             fill={palette.link}
// //             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{linkText}</text>
// //     </g>
// //   );
// // };

// // // Compact card (Topics variant — title + short subtitle + count + Open →)
// // const CardCompact = ({ section, x, y, w, h, palette, sectionData, hoverId, setHoverId }) => {
// //   const count = getSectionCount(section, sectionData);
// //   const countLabel = getCountLabel(section, count);
// //   const isHover = hoverId === section.id;
// //   const desc = section.description ?? section.subtitle ?? '';
// //   const subtitle = String(desc).length > 48 ? String(desc).slice(0, 46).trim() + '…' : desc;

// //   return (
// //     <g style={{ cursor: 'pointer', transition: 'transform 0.18s ease' }}
// //        transform={isHover ? `translate(${x},${y - 2})` : `translate(${x},${y})`}
// //        onMouseEnter={() => setHoverId(section.id)}
// //        onMouseLeave={() => setHoverId(null)}
// //        onClick={handleNodeActivate(section)}>
// //       <rect x="0" y="0" width={w} height={h} rx="11"
// //             fill={palette.cardBg}
// //             stroke={isHover ? palette.cardBorderHover : palette.cardBorder}
// //             strokeWidth="1" />
// //       <text x="20" y="30" fontSize="15" fontWeight="700" fill={palette.textPrimary}
// //             fontFamily="'Source Serif 4', Georgia, serif">{section.title}</text>
// //       {subtitle && (
// //         <text x="20" y="50" fontSize="11.5" fill={palette.textSecondary}
// //               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{subtitle}</text>
// //       )}
// //       {countLabel && (
// //         <text x="20" y={h - 14} fontSize="10.5" fontWeight="600" fill={palette.textMuted}
// //               letterSpacing="0.6px"
// //               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
// //           {countLabel.toUpperCase()}
// //         </text>
// //       )}
// //       <text x={w - 20} y={h - 14} textAnchor="end" fontSize="11" fontWeight="700"
// //             fill={palette.link}
// //             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">Open →</text>
// //     </g>
// //   );
// // };

// // /* ================================================================
// //    HUB — used by both layouts (shape differs)
// //    ================================================================ */

// // const HubRect = ({ x, y, w, h, meta, total, palette }) => (
// //   <>
// //     <rect x={x} y={y} width={w} height={h} rx="20" fill={palette.rootBg} />
// //     <text x={x + w / 2} y={y + 30} textAnchor="middle" fontSize="10" fontWeight="700"
// //           fill={palette.rootEyebrow} letterSpacing="1.8px"
// //           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">SECTION</text>
// //     <text x={x + w / 2} y={y + 72} textAnchor="middle" fontSize="32" fontWeight="700"
// //           fill={palette.rootTitle} letterSpacing="-0.01em"
// //           fontFamily="'Source Serif 4', Georgia, serif">{meta.title}</text>
// //     <text x={x + w / 2} y={y + 96} textAnchor="middle" fontSize="11" fontWeight="500"
// //           fill={palette.rootSubtitle}
// //           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{`${total} subsections`}</text>
// //     <g style={{ cursor: 'pointer' }} onClick={() => scrollToSection('main-content-top')}>
// //       <rect x={x + w / 2 - 70} y={y + 108} width="140" height="22" rx="11" fill={palette.ctaBg} />
// //       <text x={x + w / 2} y={y + 124} textAnchor="middle" fontSize="10.5" fontWeight="700"
// //             fill={palette.ctaText} letterSpacing="0.8px"
// //             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">BROWSE ALL →</text>
// //     </g>
// //   </>
// // );

// // const HubCircle = ({ cx, cy, r, meta, total, palette }) => (
// //   <>
// //     <circle cx={cx} cy={cy} r={r} fill={palette.rootBg} />
// //     <text x={cx} y={cy - 22} textAnchor="middle" fontSize="10" fontWeight="700"
// //           fill={palette.rootEyebrow} letterSpacing="1.8px"
// //           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">SECTION</text>
// //     <text x={cx} y={cy + 12} textAnchor="middle" fontSize="26" fontWeight="700"
// //           fill={palette.rootTitle} letterSpacing="-0.01em"
// //           fontFamily="'Source Serif 4', Georgia, serif">{meta.title}</text>
// //     <text x={cx} y={cy + 30} textAnchor="middle" fontSize="10.5" fontWeight="500"
// //           fill={palette.rootSubtitle}
// //           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{`${total} subsections`}</text>
// //     <g style={{ cursor: 'pointer' }} onClick={() => scrollToSection('main-content-top')}>
// //       <rect x={cx - 49} y={cy + 42} width="98" height="22" rx="11" fill={palette.ctaBg} />
// //       <text x={cx} y={cy + 58} textAnchor="middle" fontSize="10.5" fontWeight="700"
// //             fill={palette.ctaText} letterSpacing="0.7px"
// //             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">BROWSE →</text>
// //     </g>
// //   </>
// // );

// // /* ================================================================
// //    SYMMETRIC LAYOUT
// //    - Tools and Reference flank the hub on top (left/right)
// //    - Hub in center
// //    - Topics pod spans the full width at the bottom
// //    ================================================================ */

// // const SymmetricMindMap = ({ palette, meta, groups, sectionData, total }) => {
// //   const [hoverId, setHoverId] = useState(null);

// //   // Compute Topics pod dimensions based on count
// //   const topicsCount = groups.topics.length;
// //   const topicsCols = 4;
// //   const topicsRows = Math.max(1, Math.ceil(topicsCount / topicsCols));
// //   const cardW = 295;
// //   const cardH = 92;
// //   const cardGapX = 15;
// //   const cardGapY = 16;
// //   const topicsHeaderH = 72;
// //   const topicsPadTop = 56; // space inside pod from y to first card row
// //   const topicsPodH = topicsHeaderH + topicsRows * cardH + (topicsRows - 1) * cardGapY + 20;

// //   const topPodY = 60;
// //   const topPodH = 240;
// //   const hubX = 600;
// //   const hubY = 320;
// //   const hubW = 200;
// //   const hubH = 140;
// //   const topicsPodY = 480;
// //   const viewBoxH = topicsPodY + topicsPodH + 40;

// //   return (
// //     <svg viewBox={`0 0 ${VIEWBOX_W} ${viewBoxH}`} style={{ display: 'block', width: '100%', height: 'auto' }}
// //          xmlns="http://www.w3.org/2000/svg">
// //       <defs>
// //         <linearGradient id="mmh-sym-bg" x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0" stopColor={palette.canvasTop} />
// //           <stop offset="1" stopColor={palette.canvasBottom} />
// //         </linearGradient>
// //         <filter id="mmh-sym-shadow" x="-10%" y="-10%" width="120%" height="120%">
// //           <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0a1f3d" floodOpacity="0.08" />
// //         </filter>
// //       </defs>
// //       <rect width={VIEWBOX_W} height={viewBoxH} fill="url(#mmh-sym-bg)" />

// //       {/* Connectors */}
// //       <path d={`M ${hubX + 40} ${hubY + 60} C ${hubX - 60} ${hubY + 60}, ${hubX - 60} ${topPodY + 140}, ${hubX - 160} ${topPodY + 140}`}
// //             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
// //       <path d={`M ${hubX + hubW - 40} ${hubY + 60} C ${hubX + hubW + 60} ${hubY + 60}, ${hubX + hubW + 60} ${topPodY + 140}, ${hubX + hubW + 160} ${topPodY + 140}`}
// //             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
// //       <path d={`M ${hubX + hubW / 2} ${hubY + hubH} L ${hubX + hubW / 2} ${topicsPodY - 5}`}
// //             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />

// //       {/* Hub */}
// //       <g filter="url(#mmh-sym-shadow)">
// //         <HubRect x={hubX} y={hubY} w={hubW} h={hubH} meta={meta} total={total} palette={palette} />
// //       </g>

// //       {/* Pod: TOOLS (top-left) */}
// //       <g>
// //         <rect x="60" y={topPodY} width="580" height={topPodH} rx="16"
// //               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
// //         <PodHeader x={60} y={topPodY} w={580} label="INTERACTIVE"
// //                    count={groups.tools.length} countNoun={groups.tools.length === 1 ? 'TOOL' : 'TOOLS'}
// //                    stripColor={palette.podStripTools} palette={palette}
// //                    glyph={<>
// //                      <circle cx="100" cy={topPodY + 38} r="6" fill="none" stroke={palette.podStripTools} strokeWidth="1.2" />
// //                      <circle cx="100" cy={topPodY + 38} r="2" fill={palette.podStripTools} />
// //                    </>} />
// //         {groups.tools.slice(0, 2).map((sec, i) => (
// //           <CardFull key={sec.id} section={sec} sectionData={sectionData}
// //                     x={80 + i * 290} y={topPodY + 68}
// //                     w={i === 0 ? 270 : 250} h={152}
// //                     palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
// //         ))}
// //       </g>

// //       {/* Pod: REFERENCE (top-right) */}
// //       <g>
// //         <rect x="760" y={topPodY} width="580" height={topPodH} rx="16"
// //               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
// //         <PodHeader x={760} y={topPodY} w={580} label="REFERENCE"
// //                    count={groups.reference.reduce((s, sec) => s + (getSectionCount(sec, sectionData) || 0), 0)}
// //                    countNoun="ITEMS"
// //                    stripColor={palette.podStripRef} palette={palette}
// //                    glyph={<text x="800" y={topPodY + 45} fontSize="14" fontWeight="700"
// //                                 fontStyle="italic" fill={palette.podStripRef}
// //                                 fontFamily="'Source Serif 4', Georgia, serif">ƒ</text>} />
// //         {groups.reference.slice(0, 2).map((sec, i) => (
// //           <CardFull key={sec.id} section={sec} sectionData={sectionData}
// //                     x={780 + i * 290} y={topPodY + 68}
// //                     w={i === 0 ? 270 : 250} h={152}
// //                     palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
// //         ))}
// //       </g>

// //       {/* Pod: TOPICS (bottom, full width) */}
// //       <g>
// //         <rect x="60" y={topicsPodY} width="1280" height={topicsPodH} rx="16"
// //               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
// //         <PodHeader x={60} y={topicsPodY} w={1280} label="CORE TOPICS"
// //                    count={topicsCount} countNoun={topicsCount === 1 ? 'SUBSECTION' : 'SUBSECTIONS'}
// //                    stripColor={palette.podStripTopics} palette={palette}
// //                    glyph={<text x="100" y={topicsPodY + 45} fontSize="14" fontWeight="700"
// //                                 fill={palette.podStripTopics}
// //                                 fontFamily="'Source Serif 4', Georgia, serif">§</text>} />
// //         {groups.topics.map((sec, i) => {
// //           const col = i % topicsCols;
// //           const row = Math.floor(i / topicsCols);
// //           const x = 80 + col * (cardW + cardGapX);
// //           const y = topicsPodY + topicsPadTop + 16 + row * (cardH + cardGapY);
// //           return (
// //             <CardCompact key={sec.id} section={sec} sectionData={sectionData}
// //                          x={x} y={y} w={cardW} h={cardH}
// //                          palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
// //           );
// //         })}
// //       </g>
// //     </svg>
// //   );
// // };

// // /* ================================================================
// //    ASYMMETRIC LAYOUT
// //    - Tools (top-left) and Reference (bottom-left): small pods stacked
// //    - Hub in middle-left
// //    - Topics: large pod on the right
// //    ================================================================ */

// // const AsymmetricMindMap = ({ palette, meta, groups, sectionData, total }) => {
// //   const [hoverId, setHoverId] = useState(null);

// //   const topicsCount = groups.topics.length;
// //   const topicsCols = 2;
// //   const topicsRows = Math.max(1, Math.ceil(topicsCount / topicsCols));
// //   const cardW = 290;
// //   const cardH = 120;
// //   const cardGapX = 20;
// //   const cardGapY = 12;
// //   const topicsHeaderH = 72;
// //   const topicsPodH = topicsHeaderH + topicsRows * cardH + (topicsRows - 1) * cardGapY + 20;
// //   const topicsPodY = 100;
// //   const topicsPodX = 720;
// //   const topicsPodW = 620;

// //   // Left column height should roughly match right column height
// //   const leftPodH = 240;
// //   const leftToolsY = 100;
// //   const leftRefY = leftToolsY + leftPodH + 120; // gap for hub
// //   const hubCx = 530;
// //   const hubCy = (leftToolsY + leftPodH + leftRefY) / 2; // between the two left pods
// //   const hubR = 88;

// //   const viewBoxH = Math.max(leftRefY + leftPodH + 40, topicsPodY + topicsPodH + 40);

// //   return (
// //     <svg viewBox={`0 0 ${VIEWBOX_W} ${viewBoxH}`} style={{ display: 'block', width: '100%', height: 'auto' }}
// //          xmlns="http://www.w3.org/2000/svg">
// //       <defs>
// //         <linearGradient id="mmh-asym-bg" x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0" stopColor={palette.canvasTop} />
// //           <stop offset="1" stopColor={palette.canvasBottom} />
// //         </linearGradient>
// //         <filter id="mmh-asym-shadow">
// //           <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0a1f3d" floodOpacity="0.08" />
// //         </filter>
// //       </defs>
// //       <rect width={VIEWBOX_W} height={viewBoxH} fill="url(#mmh-asym-bg)" />

// //       {/* Connectors */}
// //       <path d={`M ${hubCx - hubR + 25} ${hubCy - 30} C ${hubCx - 150} ${hubCy - 90}, ${hubCx - 250} ${leftToolsY + 200}, ${hubCx - 270} ${leftToolsY + 160}`}
// //             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
// //       <path d={`M ${hubCx - hubR + 25} ${hubCy + 30} C ${hubCx - 150} ${hubCy + 90}, ${hubCx - 250} ${leftRefY + 40}, ${hubCx - 270} ${leftRefY + 80}`}
// //             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
// //       <path d={`M ${hubCx + hubR} ${hubCy} L ${topicsPodX} ${hubCy}`}
// //             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />

// //       {/* Hub */}
// //       <g filter="url(#mmh-asym-shadow)">
// //         <HubCircle cx={hubCx} cy={hubCy} r={hubR} meta={meta} total={total} palette={palette} />
// //       </g>

// //       {/* Pod: TOOLS (top-left) */}
// //       <g>
// //         <rect x="60" y={leftToolsY} width="380" height={leftPodH} rx="16"
// //               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
// //         <PodHeader x={60} y={leftToolsY} w={380} label="INTERACTIVE"
// //                    count={groups.tools.length} countNoun={groups.tools.length === 1 ? 'TOOL' : 'TOOLS'}
// //                    stripColor={palette.podStripTools} palette={palette}
// //                    glyph={<>
// //                      <circle cx="100" cy={leftToolsY + 38} r="6" fill="none" stroke={palette.podStripTools} strokeWidth="1.2" />
// //                      <circle cx="100" cy={leftToolsY + 38} r="2" fill={palette.podStripTools} />
// //                    </>} />
// //         {groups.tools.slice(0, 2).map((sec, i) => (
// //           <CardCompact key={sec.id} section={sec} sectionData={sectionData}
// //                        x={80} y={leftToolsY + 68 + i * 88}
// //                        w={340} h={76}
// //                        palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
// //         ))}
// //       </g>

// //       {/* Pod: REFERENCE (bottom-left) */}
// //       <g>
// //         <rect x="60" y={leftRefY} width="380" height={leftPodH} rx="16"
// //               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
// //         <PodHeader x={60} y={leftRefY} w={380} label="REFERENCE"
// //                    count={groups.reference.reduce((s, sec) => s + (getSectionCount(sec, sectionData) || 0), 0)}
// //                    countNoun="ITEMS"
// //                    stripColor={palette.podStripRef} palette={palette}
// //                    glyph={<text x="98" y={leftRefY + 45} fontSize="14" fontWeight="700"
// //                                 fontStyle="italic" fill={palette.podStripRef}
// //                                 fontFamily="'Source Serif 4', Georgia, serif">ƒ</text>} />
// //         {groups.reference.slice(0, 2).map((sec, i) => (
// //           <CardCompact key={sec.id} section={sec} sectionData={sectionData}
// //                        x={80} y={leftRefY + 68 + i * 88}
// //                        w={340} h={76}
// //                        palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
// //         ))}
// //       </g>

// //       {/* Pod: TOPICS (right, large) */}
// //       <g>
// //         <rect x={topicsPodX} y={topicsPodY} width={topicsPodW} height={topicsPodH} rx="16"
// //               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
// //         <PodHeader x={topicsPodX} y={topicsPodY} w={topicsPodW} label="CORE TOPICS"
// //                    count={topicsCount} countNoun={topicsCount === 1 ? 'SUBSECTION' : 'SUBSECTIONS'}
// //                    stripColor={palette.podStripTopics} palette={palette}
// //                    glyph={<text x={topicsPodX + 40} y={topicsPodY + 45} fontSize="14" fontWeight="700"
// //                                 fill={palette.podStripTopics}
// //                                 fontFamily="'Source Serif 4', Georgia, serif">§</text>} />
// //         {groups.topics.map((sec, i) => {
// //           const col = i % topicsCols;
// //           const row = Math.floor(i / topicsCols);
// //           const x = topicsPodX + 20 + col * (cardW + cardGapX);
// //           const y = topicsPodY + 68 + row * (cardH + cardGapY);
// //           return (
// //             <CardCompact key={sec.id} section={sec} sectionData={sectionData}
// //                          x={x} y={y} w={cardW} h={cardH}
// //                          palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
// //           );
// //         })}
// //       </g>
// //     </svg>
// //   );
// // };

// // /* ================================================================
// //    MAIN COMPONENT
// //    Receives raw sections + sectionData + theme name from parent.
// //    Groups internally, derives palette internally.
// //    ================================================================ */

// // const MindMapHero = ({
// //   theme = 'deepBlue',
// //   meta,
// //   sections,
// //   sectionData,
// //   layout = 'symmetric',
// // }) => {
// //   const t = getTheme(theme);
// //   const palette = derivePalette(t);
// //   const groups = useMemo(() => groupSections(sections), [sections]);
// //   const total = (sections || []).length;

// //   const LayoutComponent = layout === 'asymmetric' ? AsymmetricMindMap : SymmetricMindMap;

// //   return (
// //     <div style={{ background: palette.canvasTop, padding: '32px 24px 16px' }}>
// //       <div style={{ maxWidth: 1320, margin: '0 auto' }}>
// //         {meta?.breadcrumbUrl && (
// //           <div style={{
// //             fontSize: 13, color: palette.textMuted, marginBottom: 16, fontWeight: 500,
// //             fontFamily: "-apple-system, 'Segoe UI', system-ui, sans-serif",
// //           }}>
// //             <a href="/" style={{ color: palette.textMuted, textDecoration: 'none' }}>Home</a>
// //             {' '}&rsaquo;{' '}
// //             {meta.title}
// //           </div>
// //         )}
// //         <LayoutComponent palette={palette} meta={meta} groups={groups}
// //                          sectionData={sectionData} total={total} />
// //       </div>
// //       {/* anchor for hub CTA scroll target */}
// //       <div id="main-content-top" style={{ height: 1, marginTop: 8 }} />
// //     </div>
// //   );
// // };

// // export default MindMapHero;



// import React, { useMemo, useState } from 'react';
// import { getTheme } from './sectionFrontPageThemes';

// const NAVBAR_HEIGHT = 55;
// const VIEWBOX_W = 1400;

// /* ================================================================
//    HELPERS — pure, no React
//    ================================================================ */

// const groupSections = (sections) => {
//   const tools = [];
//   const reference = [];
//   const topics = [];
//   (sections || []).forEach((s) => {
//     if (s.type === 'visual-tools' || s.type === 'calculators') tools.push(s);
//     else if (s.type === 'formulas' || s.type === 'definitions') reference.push(s);
//     else topics.push(s);
//   });
//   return { tools, reference, topics };
// };

// const getSectionCount = (section, sectionData) => {
//   const data = sectionData?.[section.id];
//   if (!data) return null;
//   if (data.totalCount != null) return data.totalCount;
//   if (Array.isArray(data.children)) return data.children.length;
//   return null;
// };

// const getCountLabel = (section, count) => {
//   if (count == null) return null;
//   const isTool = section.type === 'visual-tools' || section.type === 'calculators';
//   const isRef = section.type === 'formulas' || section.type === 'definitions';
//   if (isTool) return `${count} ${count === 1 ? 'tool' : 'tools'}`;
//   if (isRef) return `${count} ${count === 1 ? 'item' : 'items'}`;
//   return `${count} ${count === 1 ? 'topic' : 'topics'}`;
// };

// const scrollToSection = (id) => {
//   if (typeof document === 'undefined') return;
//   const el = document.getElementById(id);
//   if (!el) return;
//   window.scrollTo({
//     top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10,
//     behavior: 'smooth',
//   });
// };

// // Links always lead to the section card ON the page, never out.
// const handleNodeActivate = (section) => () => {
//   if (section.id) scrollToSection(section.id);
// };

// // Strip redundant section-name from a subsection title.
// //  "Algebra Visual Tools"  + section="Algebra" → "Visual Tools"
// //  "Inequalities in Algebra" + section="Algebra" → "Inequalities"
// // Respects section.shortTitle if author provides one.
// const shortenTitle = (section, sectionName) => {
//   if (section?.shortTitle) return String(section.shortTitle).trim();
//   const t = String(section?.title || '').trim();
//   if (!sectionName) return t;
//   const s = String(sectionName).trim();
//   if (!s) return t;
//   const lower = t.toLowerCase();
//   const slower = s.toLowerCase();
//   if (lower.startsWith(slower + ' ')) return t.slice(s.length + 1);
//   const suffix = ' in ' + s;
//   if (lower.endsWith(suffix.toLowerCase())) return t.slice(0, t.length - suffix.length);
//   return t;
// };

// // Plain ellipsis truncation.
// const truncate = (s, max) => {
//   if (!s) return '';
//   const str = String(s);
//   if (str.length <= max) return str;
//   return str.slice(0, Math.max(1, max - 1)).trim() + '…';
// };

// /* ================================================================
//    PALETTE — derived from the parent theme
//    ================================================================ */

// const derivePalette = (t) => ({
//   canvasTop: '#f0f4fc',
//   canvasBottom: '#dde6f3',
//   rootBg: t.sidebarBg || '#0a1f3d',
//   rootEyebrow: '#60a5fa',
//   rootTitle: '#ffffff',
//   rootSubtitle: 'rgba(255,255,255,0.55)',
//   ctaBg: t.buttonBg || '#2563eb',
//   ctaText: '#ffffff',
//   podBg: '#ffffff',
//   podBorder: '#d8e0ec',
//   cardBg: '#ffffff',
//   cardBorder: '#e5eaf1',
//   cardBorderHover: t.buttonBg || '#2563eb',
//   textPrimary: t.textPrimary || '#0a1f3d',
//   textSecondary: t.textSecondary || '#5b6b80',
//   textMuted: t.textMuted || '#94a3b8',
//   link: t.buttonBg || '#2563eb',
//   connector: '#93a8c4',
//   iconBg: '#dbeafe',
//   podStripTools: t.buttonBg || '#2563eb',
//   podStripRef: '#1e40af',
//   podStripTopics: '#475569',
// });

// /* ================================================================
//    GLYPH — small svg glyph for a section, used inside cards
//    Uses plain ASCII chars (no ƒ entity) and Georgia-first font stack
//    for reliable cross-platform rendering inside SVG.
//    ================================================================ */

// const Glyph = ({ type, cx, cy, color, bg }) => {
//   if (type === 'visual-tools') {
//     return (
//       <>
//         <circle cx={cx} cy={cy} r="18" fill={bg} />
//         <circle cx={cx} cy={cy} r="10" fill="none" stroke={color} strokeWidth="1.4" />
//         <circle cx={cx} cy={cy} r="3.2" fill={color} />
//       </>
//     );
//   }
//   if (type === 'calculators') {
//     return (
//       <>
//         <rect x={cx - 19} y={cy - 20} width="38" height="40" rx="6" fill={bg} stroke={color} strokeWidth="1.2" />
//         <rect x={cx - 13} y={cy - 16} width="26" height="8" rx="1.5" fill={color} />
//         {[-11, 0, 11].map((dx, i) => (
//           <React.Fragment key={`r1-${i}`}>
//             <circle cx={cx + dx} cy={cy + 2} r="1.4" fill={color} />
//             <circle cx={cx + dx} cy={cy + 12} r="1.4" fill={color} />
//           </React.Fragment>
//         ))}
//       </>
//     );
//   }
//   if (type === 'formulas') {
//     return (
//       <>
//         <circle cx={cx} cy={cy} r="18" fill={bg} />
//         <text x={cx} y={cy + 7} textAnchor="middle" fontSize="22" fontWeight="700"
//               fontStyle="italic" fill={color}
//               fontFamily="Georgia, 'Source Serif 4', serif">f</text>
//       </>
//     );
//   }
//   if (type === 'definitions') {
//     return (
//       <>
//         <circle cx={cx} cy={cy} r="18" fill={bg} />
//         <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}
//               fontFamily="Georgia, 'Source Serif 4', serif">Aa</text>
//       </>
//     );
//   }
//   // Fallback for subsection/standalone/editorial/prose-only → simple section mark
//   return (
//     <>
//       <circle cx={cx} cy={cy} r="18" fill={bg} />
//       <text x={cx} y={cy + 6} textAnchor="middle" fontSize="16" fontWeight="700" fill={color}
//             fontFamily="Georgia, 'Source Serif 4', serif">§</text>
//     </>
//   );
// };

// /* ================================================================
//    POD HEADER — strip + chip + count
//    ================================================================ */

// const PodHeader = ({ x, y, w, label, count, countNoun, stripColor, palette, glyph }) => (
//   <>
//     <rect x={x} y={y} width={w} height="3" rx="1.5" fill={stripColor} />
//     <rect x={x + 20} y={y + 24} width="148" height="28" rx="14"
//           fill={palette.podBg} stroke={stripColor} strokeWidth="1" />
//     {glyph}
//     <text x={x + 56} y={y + 43} fontSize="10.5" fontWeight="700" fill={stripColor}
//           letterSpacing="1.3px"
//           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
//       {label}
//     </text>
//     {count != null && (
//       <text x={x + w - 20} y={y + 42} textAnchor="end" fontSize="10" fontWeight="600"
//             fill={palette.textMuted} letterSpacing="0.6px"
//             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
//         {`${count} ${countNoun}`}
//       </text>
//     )}
//   </>
// );

// /* ================================================================
//    CARDS
//    ================================================================ */

// // Full-size card (Tools/Reference): glyph on the left, title + sub + 2 description lines + jump link.
// const CardFull = ({ section, sectionName, x, y, w, h, palette, sectionData, hoverId, setHoverId }) => {
//   const count = getSectionCount(section, sectionData);
//   const countLabel = getCountLabel(section, count);
//   const isHover = hoverId === section.id;

//   // available text width = w - icon area (66) - right padding (15)
//   const titleMaxChars = Math.max(8, Math.floor((w - 81) / 7.8));
//   const displayTitle = truncate(shortenTitle(section, sectionName), titleMaxChars);

//   const desc = section.description ?? section.subtitle ?? '';
//   const descMaxLine = Math.max(20, Math.floor((w - 35) / 6.6));
//   const lines = (() => {
//     if (!desc) return ['', ''];
//     const words = String(desc).split(/\s+/);
//     let l1 = '';
//     let l2 = '';
//     for (const word of words) {
//       if (l2) {
//         l2 = (l2 + ' ' + word).trim();
//       } else if ((l1 + ' ' + word).trim().length <= descMaxLine) {
//         l1 = (l1 + ' ' + word).trim();
//       } else {
//         l2 = word;
//       }
//     }
//     if (l2.length > descMaxLine) l2 = truncate(l2, descMaxLine);
//     return [l1, l2];
//   })();

//   return (
//     <g style={{ cursor: 'pointer', transition: 'transform 0.18s ease' }}
//        transform={isHover ? `translate(${x},${y - 2})` : `translate(${x},${y})`}
//        onMouseEnter={() => setHoverId(section.id)}
//        onMouseLeave={() => setHoverId(null)}
//        onClick={handleNodeActivate(section)}>
//       <rect x="0" y="0" width={w} height={h} rx="12"
//             fill={palette.cardBg}
//             stroke={isHover ? palette.cardBorderHover : palette.cardBorder}
//             strokeWidth="1" />
//       <Glyph type={section.type} cx="36" cy="40" color={palette.podStripTools} bg={palette.iconBg} />
//       <text x="66" y="37" fontSize="16" fontWeight="700" fill={palette.textPrimary}
//             fontFamily="'Source Serif 4', Georgia, serif">{displayTitle}</text>
//       {countLabel && (
//         <text x="66" y="56" fontSize="11" fill={palette.textMuted}
//               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{countLabel}</text>
//       )}
//       {lines[0] && (
//         <text x="20" y="94" fontSize="12.5" fill={palette.textSecondary}
//               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{lines[0]}</text>
//       )}
//       {lines[1] && (
//         <text x="20" y="112" fontSize="12.5" fill={palette.textSecondary}
//               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{lines[1]}</text>
//       )}
//       <text x={w - 20} y={h - 14} textAnchor="end" fontSize="11" fontWeight="700"
//             fill={palette.link}
//             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">Jump to ↓</text>
//     </g>
//   );
// };

// // Compact card (Topics + asymmetric small pods): title + subtitle + count + jump.
// const CardCompact = ({ section, sectionName, x, y, w, h, palette, sectionData, hoverId, setHoverId }) => {
//   const count = getSectionCount(section, sectionData);
//   const countLabel = getCountLabel(section, count);
//   const isHover = hoverId === section.id;

//   const titleMaxChars = Math.max(10, Math.floor((w - 40) / 7.4));
//   const displayTitle = truncate(shortenTitle(section, sectionName), titleMaxChars);

//   const desc = section.description ?? section.subtitle ?? '';
//   const subMaxChars = Math.max(20, Math.floor((w - 40) / 6.4));
//   const subtitle = truncate(desc, subMaxChars);

//   return (
//     <g style={{ cursor: 'pointer', transition: 'transform 0.18s ease' }}
//        transform={isHover ? `translate(${x},${y - 2})` : `translate(${x},${y})`}
//        onMouseEnter={() => setHoverId(section.id)}
//        onMouseLeave={() => setHoverId(null)}
//        onClick={handleNodeActivate(section)}>
//       <rect x="0" y="0" width={w} height={h} rx="11"
//             fill={palette.cardBg}
//             stroke={isHover ? palette.cardBorderHover : palette.cardBorder}
//             strokeWidth="1" />
//       <text x="20" y="30" fontSize="15" fontWeight="700" fill={palette.textPrimary}
//             fontFamily="'Source Serif 4', Georgia, serif">{displayTitle}</text>
//       {subtitle && (
//         <text x="20" y="50" fontSize="11.5" fill={palette.textSecondary}
//               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{subtitle}</text>
//       )}
//       {countLabel && (
//         <text x="20" y={h - 14} fontSize="10.5" fontWeight="600" fill={palette.textMuted}
//               letterSpacing="0.6px"
//               fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
//           {countLabel.toUpperCase()}
//         </text>
//       )}
//       <text x={w - 20} y={h - 14} textAnchor="end" fontSize="11" fontWeight="700"
//             fill={palette.link}
//             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">Jump to ↓</text>
//     </g>
//   );
// };

// /* ================================================================
//    HUB
//    ================================================================ */

// const HubRect = ({ x, y, w, h, meta, total, palette }) => (
//   <>
//     <rect x={x} y={y} width={w} height={h} rx="20" fill={palette.rootBg} />
//     <text x={x + w / 2} y={y + 30} textAnchor="middle" fontSize="10" fontWeight="700"
//           fill={palette.rootEyebrow} letterSpacing="1.8px"
//           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">SECTION</text>
//     <text x={x + w / 2} y={y + 72} textAnchor="middle" fontSize="32" fontWeight="700"
//           fill={palette.rootTitle} letterSpacing="-0.01em"
//           fontFamily="'Source Serif 4', Georgia, serif">{meta?.title}</text>
//     <text x={x + w / 2} y={y + 96} textAnchor="middle" fontSize="11" fontWeight="500"
//           fill={palette.rootSubtitle}
//           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{`${total} subsections`}</text>
//     <g style={{ cursor: 'pointer' }} onClick={() => scrollToSection('main-content-top')}>
//       <rect x={x + w / 2 - 70} y={y + 108} width="140" height="22" rx="11" fill={palette.ctaBg} />
//       <text x={x + w / 2} y={y + 124} textAnchor="middle" fontSize="10.5" fontWeight="700"
//             fill={palette.ctaText} letterSpacing="0.8px"
//             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">BROWSE ALL ↓</text>
//     </g>
//   </>
// );

// const HubCircle = ({ cx, cy, r, meta, total, palette }) => (
//   <>
//     <circle cx={cx} cy={cy} r={r} fill={palette.rootBg} />
//     <text x={cx} y={cy - 22} textAnchor="middle" fontSize="10" fontWeight="700"
//           fill={palette.rootEyebrow} letterSpacing="1.8px"
//           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">SECTION</text>
//     <text x={cx} y={cy + 12} textAnchor="middle" fontSize="26" fontWeight="700"
//           fill={palette.rootTitle} letterSpacing="-0.01em"
//           fontFamily="'Source Serif 4', Georgia, serif">{meta?.title}</text>
//     <text x={cx} y={cy + 30} textAnchor="middle" fontSize="10.5" fontWeight="500"
//           fill={palette.rootSubtitle}
//           fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{`${total} subsections`}</text>
//     <g style={{ cursor: 'pointer' }} onClick={() => scrollToSection('main-content-top')}>
//       <rect x={cx - 49} y={cy + 42} width="98" height="22" rx="11" fill={palette.ctaBg} />
//       <text x={cx} y={cy + 58} textAnchor="middle" fontSize="10.5" fontWeight="700"
//             fill={palette.ctaText} letterSpacing="0.7px"
//             fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">BROWSE ↓</text>
//     </g>
//   </>
// );

// /* ================================================================
//    SYMMETRIC LAYOUT
//    ================================================================ */

// const SymmetricMindMap = ({ palette, meta, groups, sectionData, total }) => {
//   const [hoverId, setHoverId] = useState(null);

//   const topicsCount = groups.topics.length;
//   const topicsCols = 4;
//   const topicsRows = Math.max(1, Math.ceil(topicsCount / topicsCols));
//   const cardW = 295;
//   const cardH = 92;
//   const cardGapX = 15;
//   const cardGapY = 16;
//   const topicsPodH = 72 + topicsRows * cardH + (topicsRows - 1) * cardGapY + 20;

//   const topPodY = 60;
//   const topPodH = 240;
//   const hubX = 600;
//   const hubY = 320;
//   const hubW = 200;
//   const hubH = 140;
//   const topicsPodY = 480;
//   const viewBoxH = topicsPodY + topicsPodH + 40;

//   // Equal-width Tools/Ref cards so titles don't get squeezed.
//   const innerW = 540;            // pod inner content width (580 - 2*20)
//   const tcCardW = (innerW - 20) / 2; // = 260
//   const tcCardH = 152;

//   return (
//     <svg viewBox={`0 0 ${VIEWBOX_W} ${viewBoxH}`} style={{ display: 'block', width: '100%', height: 'auto' }}
//          xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <linearGradient id="mmh-sym-bg" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0" stopColor={palette.canvasTop} />
//           <stop offset="1" stopColor={palette.canvasBottom} />
//         </linearGradient>
//         <filter id="mmh-sym-shadow" x="-10%" y="-10%" width="120%" height="120%">
//           <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0a1f3d" floodOpacity="0.08" />
//         </filter>
//       </defs>
//       <rect width={VIEWBOX_W} height={viewBoxH} fill="url(#mmh-sym-bg)" />

//       {/* Connectors */}
//       <path d={`M ${hubX + 40} ${hubY + 60} C ${hubX - 60} ${hubY + 60}, ${hubX - 60} ${topPodY + 140}, ${hubX - 160} ${topPodY + 140}`}
//             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
//       <path d={`M ${hubX + hubW - 40} ${hubY + 60} C ${hubX + hubW + 60} ${hubY + 60}, ${hubX + hubW + 60} ${topPodY + 140}, ${hubX + hubW + 160} ${topPodY + 140}`}
//             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
//       <path d={`M ${hubX + hubW / 2} ${hubY + hubH} L ${hubX + hubW / 2} ${topicsPodY - 5}`}
//             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />

//       {/* Hub */}
//       <g filter="url(#mmh-sym-shadow)">
//         <HubRect x={hubX} y={hubY} w={hubW} h={hubH} meta={meta} total={total} palette={palette} />
//       </g>

//       {/* Pod: TOOLS (top-left) */}
//       <g>
//         <rect x="60" y={topPodY} width="580" height={topPodH} rx="16"
//               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
//         <PodHeader x={60} y={topPodY} w={580} label="INTERACTIVE"
//                    count={groups.tools.length} countNoun={groups.tools.length === 1 ? 'TOOL' : 'TOOLS'}
//                    stripColor={palette.podStripTools} palette={palette}
//                    glyph={<>
//                      <circle cx="100" cy={topPodY + 38} r="6" fill="none" stroke={palette.podStripTools} strokeWidth="1.2" />
//                      <circle cx="100" cy={topPodY + 38} r="2" fill={palette.podStripTools} />
//                    </>} />
//         {groups.tools.slice(0, 2).map((sec, i) => (
//           <CardFull key={sec.id} section={sec} sectionName={meta?.title} sectionData={sectionData}
//                     x={80 + i * (tcCardW + 20)} y={topPodY + 68}
//                     w={tcCardW} h={tcCardH}
//                     palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
//         ))}
//       </g>

//       {/* Pod: REFERENCE (top-right) */}
//       <g>
//         <rect x="760" y={topPodY} width="580" height={topPodH} rx="16"
//               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
//         <PodHeader x={760} y={topPodY} w={580} label="REFERENCE"
//                    count={groups.reference.reduce((s, sec) => s + (getSectionCount(sec, sectionData) || 0), 0)}
//                    countNoun="ITEMS"
//                    stripColor={palette.podStripRef} palette={palette}
//                    glyph={<text x="800" y={topPodY + 47} fontSize="16" fontWeight="700"
//                                 fontStyle="italic" fill={palette.podStripRef}
//                                 fontFamily="Georgia, 'Source Serif 4', serif">f</text>} />
//         {groups.reference.slice(0, 2).map((sec, i) => (
//           <CardFull key={sec.id} section={sec} sectionName={meta?.title} sectionData={sectionData}
//                     x={780 + i * (tcCardW + 20)} y={topPodY + 68}
//                     w={tcCardW} h={tcCardH}
//                     palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
//         ))}
//       </g>

//       {/* Pod: TOPICS (bottom, full width) */}
//       <g>
//         <rect x="60" y={topicsPodY} width="1280" height={topicsPodH} rx="16"
//               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
//         <PodHeader x={60} y={topicsPodY} w={1280} label="CORE TOPICS"
//                    count={topicsCount} countNoun={topicsCount === 1 ? 'SUBSECTION' : 'SUBSECTIONS'}
//                    stripColor={palette.podStripTopics} palette={palette}
//                    glyph={<text x="100" y={topicsPodY + 46} fontSize="16" fontWeight="700"
//                                 fill={palette.podStripTopics}
//                                 fontFamily="Georgia, 'Source Serif 4', serif">§</text>} />
//         {groups.topics.map((sec, i) => {
//           const col = i % topicsCols;
//           const row = Math.floor(i / topicsCols);
//           const x = 80 + col * (cardW + cardGapX);
//           const y = topicsPodY + 72 + row * (cardH + cardGapY);
//           return (
//             <CardCompact key={sec.id} section={sec} sectionName={meta?.title} sectionData={sectionData}
//                          x={x} y={y} w={cardW} h={cardH}
//                          palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
//           );
//         })}
//       </g>
//     </svg>
//   );
// };

// /* ================================================================
//    ASYMMETRIC LAYOUT
//    ================================================================ */

// const AsymmetricMindMap = ({ palette, meta, groups, sectionData, total }) => {
//   const [hoverId, setHoverId] = useState(null);

//   const topicsCount = groups.topics.length;
//   const topicsCols = 2;
//   const topicsRows = Math.max(1, Math.ceil(topicsCount / topicsCols));
//   const cardW = 290;
//   const cardH = 120;
//   const cardGapX = 20;
//   const cardGapY = 12;
//   const topicsPodH = 72 + topicsRows * cardH + (topicsRows - 1) * cardGapY + 20;
//   const topicsPodY = 100;
//   const topicsPodX = 720;
//   const topicsPodW = 620;

//   const leftPodH = 240;
//   const leftToolsY = 100;
//   const leftRefY = leftToolsY + leftPodH + 120;
//   const hubCx = 530;
//   const hubCy = (leftToolsY + leftPodH + leftRefY) / 2;
//   const hubR = 88;

//   const viewBoxH = Math.max(leftRefY + leftPodH + 40, topicsPodY + topicsPodH + 40);

//   return (
//     <svg viewBox={`0 0 ${VIEWBOX_W} ${viewBoxH}`} style={{ display: 'block', width: '100%', height: 'auto' }}
//          xmlns="http://www.w3.org/2000/svg">
//       <defs>
//         <linearGradient id="mmh-asym-bg" x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0" stopColor={palette.canvasTop} />
//           <stop offset="1" stopColor={palette.canvasBottom} />
//         </linearGradient>
//         <filter id="mmh-asym-shadow">
//           <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0a1f3d" floodOpacity="0.08" />
//         </filter>
//       </defs>
//       <rect width={VIEWBOX_W} height={viewBoxH} fill="url(#mmh-asym-bg)" />

//       {/* Connectors */}
//       <path d={`M ${hubCx - hubR + 25} ${hubCy - 30} C ${hubCx - 150} ${hubCy - 90}, ${hubCx - 250} ${leftToolsY + 200}, ${hubCx - 270} ${leftToolsY + 160}`}
//             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
//       <path d={`M ${hubCx - hubR + 25} ${hubCy + 30} C ${hubCx - 150} ${hubCy + 90}, ${hubCx - 250} ${leftRefY + 40}, ${hubCx - 270} ${leftRefY + 80}`}
//             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
//       <path d={`M ${hubCx + hubR} ${hubCy} L ${topicsPodX} ${hubCy}`}
//             fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />

//       {/* Hub */}
//       <g filter="url(#mmh-asym-shadow)">
//         <HubCircle cx={hubCx} cy={hubCy} r={hubR} meta={meta} total={total} palette={palette} />
//       </g>

//       {/* Pod: TOOLS (top-left) */}
//       <g>
//         <rect x="60" y={leftToolsY} width="380" height={leftPodH} rx="16"
//               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
//         <PodHeader x={60} y={leftToolsY} w={380} label="INTERACTIVE"
//                    count={groups.tools.length} countNoun={groups.tools.length === 1 ? 'TOOL' : 'TOOLS'}
//                    stripColor={palette.podStripTools} palette={palette}
//                    glyph={<>
//                      <circle cx="100" cy={leftToolsY + 38} r="6" fill="none" stroke={palette.podStripTools} strokeWidth="1.2" />
//                      <circle cx="100" cy={leftToolsY + 38} r="2" fill={palette.podStripTools} />
//                    </>} />
//         {groups.tools.slice(0, 2).map((sec, i) => (
//           <CardCompact key={sec.id} section={sec} sectionName={meta?.title} sectionData={sectionData}
//                        x={80} y={leftToolsY + 68 + i * 88}
//                        w={340} h={76}
//                        palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
//         ))}
//       </g>

//       {/* Pod: REFERENCE (bottom-left) */}
//       <g>
//         <rect x="60" y={leftRefY} width="380" height={leftPodH} rx="16"
//               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
//         <PodHeader x={60} y={leftRefY} w={380} label="REFERENCE"
//                    count={groups.reference.reduce((s, sec) => s + (getSectionCount(sec, sectionData) || 0), 0)}
//                    countNoun="ITEMS"
//                    stripColor={palette.podStripRef} palette={palette}
//                    glyph={<text x="98" y={leftRefY + 47} fontSize="16" fontWeight="700"
//                                 fontStyle="italic" fill={palette.podStripRef}
//                                 fontFamily="Georgia, 'Source Serif 4', serif">f</text>} />
//         {groups.reference.slice(0, 2).map((sec, i) => (
//           <CardCompact key={sec.id} section={sec} sectionName={meta?.title} sectionData={sectionData}
//                        x={80} y={leftRefY + 68 + i * 88}
//                        w={340} h={76}
//                        palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
//         ))}
//       </g>

//       {/* Pod: TOPICS (right, large) */}
//       <g>
//         <rect x={topicsPodX} y={topicsPodY} width={topicsPodW} height={topicsPodH} rx="16"
//               fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
//         <PodHeader x={topicsPodX} y={topicsPodY} w={topicsPodW} label="CORE TOPICS"
//                    count={topicsCount} countNoun={topicsCount === 1 ? 'SUBSECTION' : 'SUBSECTIONS'}
//                    stripColor={palette.podStripTopics} palette={palette}
//                    glyph={<text x={topicsPodX + 40} y={topicsPodY + 46} fontSize="16" fontWeight="700"
//                                 fill={palette.podStripTopics}
//                                 fontFamily="Georgia, 'Source Serif 4', serif">§</text>} />
//         {groups.topics.map((sec, i) => {
//           const col = i % topicsCols;
//           const row = Math.floor(i / topicsCols);
//           const x = topicsPodX + 20 + col * (cardW + cardGapX);
//           const y = topicsPodY + 72 + row * (cardH + cardGapY);
//           return (
//             <CardCompact key={sec.id} section={sec} sectionName={meta?.title} sectionData={sectionData}
//                          x={x} y={y} w={cardW} h={cardH}
//                          palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
//           );
//         })}
//       </g>
//     </svg>
//   );
// };

// /* ================================================================
//    MAIN COMPONENT
//    ================================================================ */

// const MindMapHero = ({
//   theme = 'deepBlue',
//   meta,
//   sections,
//   sectionData,
//   layout = 'symmetric',
// }) => {
//   const t = getTheme(theme);
//   const palette = derivePalette(t);
//   const groups = useMemo(() => groupSections(sections), [sections]);
//   const total = (sections || []).length;

//   const LayoutComponent = layout === 'asymmetric' ? AsymmetricMindMap : SymmetricMindMap;

//   return (
//     <div style={{ background: palette.canvasTop, padding: '32px 24px 16px' }}>
//       <div style={{ maxWidth: 1320, margin: '0 auto' }}>
//         {meta?.breadcrumbUrl && (
//           <div style={{
//             fontSize: 13, color: palette.textMuted, marginBottom: 16, fontWeight: 500,
//             fontFamily: "-apple-system, 'Segoe UI', system-ui, sans-serif",
//           }}>
//             <a href="/" style={{ color: palette.textMuted, textDecoration: 'none' }}>Home</a>
//             {' '}&rsaquo;{' '}
//             {meta.title}
//           </div>
//         )}
//         <LayoutComponent palette={palette} meta={meta} groups={groups}
//                          sectionData={sectionData} total={total} />
//       </div>
//       <div id="main-content-top" style={{ height: 1, marginTop: 8 }} />
//     </div>
//   );
// };

// export default MindMapHero;



import React, { useMemo, useState } from 'react';
import { getTheme } from './sectionFrontPageThemes';

const NAVBAR_HEIGHT = 55;
const VIEWBOX_W = 1400;

/* ================================================================
   HELPERS
   ================================================================ */

const groupSections = (sections) => {
  const tools = [];
  const reference = [];
  const topics = [];
  (sections || []).forEach((s) => {
    if (s.type === 'visual-tools' || s.type === 'calculators') tools.push(s);
    else if (s.type === 'formulas' || s.type === 'definitions') reference.push(s);
    else topics.push(s);
  });
  return { tools, reference, topics };
};

const getSectionCount = (section, sectionData) => {
  const data = sectionData?.[section.id];
  if (!data) return null;
  if (data.totalCount != null) return data.totalCount;
  if (Array.isArray(data.children)) return data.children.length;
  return null;
};

const getCountLabel = (section, count) => {
  if (count == null) return null;
  const isTool = section.type === 'visual-tools' || section.type === 'calculators';
  const isRef = section.type === 'formulas' || section.type === 'definitions';
  if (isTool) return `${count} ${count === 1 ? 'tool' : 'tools'}`;
  if (isRef) return `${count} ${count === 1 ? 'item' : 'items'}`;
  return `${count} ${count === 1 ? 'topic' : 'topics'}`;
};

const scrollToSection = (id) => {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT - 10,
    behavior: 'smooth',
  });
};

const handleNodeActivate = (section) => () => {
  if (section.id) scrollToSection(section.id);
};

/* ================================================================
   WORD-WRAPPING — pure JS, runs at render time

   wrapText(text, maxChars) returns an array of lines.
   We use per-font-size character-width estimates to choose maxChars.
   Single words longer than maxChars are not broken (they overflow on
   one line rather than getting cut mid-word — same policy as a sign
   on a building, you don't chop "Mathematics" in half).
   ================================================================ */

const wrapText = (text, maxChars) => {
  if (!text) return [];
  const words = String(text).trim().split(/\s+/);
  const lines = [];
  let current = '';
  for (const w of words) {
    if (!current) {
      current = w;
    } else if ((current + ' ' + w).length <= maxChars) {
      current = current + ' ' + w;
    } else {
      lines.push(current);
      current = w;
    }
  }
  if (current) lines.push(current);
  return lines;
};

// Char-width estimates by font size (serif bold). Conservative.
const charsForWidth = (px, fontSize) => {
  const perChar = fontSize * 0.52;  // empirical for Source Serif/Georgia bold
  return Math.max(4, Math.floor(px / perChar));
};

/* ================================================================
   PALETTE
   ================================================================ */

const derivePalette = (t) => ({
  canvasTop: '#f0f4fc',
  canvasBottom: '#dde6f3',
  rootBg: t.sidebarBg || '#0a1f3d',
  rootEyebrow: '#60a5fa',
  rootTitle: '#ffffff',
  rootSubtitle: 'rgba(255,255,255,0.55)',
  ctaBg: t.buttonBg || '#2563eb',
  ctaText: '#ffffff',
  podBg: '#ffffff',
  podBorder: '#d8e0ec',
  cardBg: '#ffffff',
  cardBorder: '#e5eaf1',
  cardBorderHover: t.buttonBg || '#2563eb',
  textPrimary: t.textPrimary || '#0a1f3d',
  textSecondary: t.textSecondary || '#5b6b80',
  textMuted: t.textMuted || '#94a3b8',
  link: t.buttonBg || '#2563eb',
  connector: '#93a8c4',
  iconBg: '#dbeafe',
  podStripTools: t.buttonBg || '#2563eb',
  podStripRef: '#1e40af',
  podStripTopics: '#475569',
});

/* ================================================================
   GLYPH
   ================================================================ */

const Glyph = ({ type, cx, cy, color, bg }) => {
  if (type === 'visual-tools') {
    return (
      <>
        <circle cx={cx} cy={cy} r="18" fill={bg} />
        <circle cx={cx} cy={cy} r="10" fill="none" stroke={color} strokeWidth="1.4" />
        <circle cx={cx} cy={cy} r="3.2" fill={color} />
      </>
    );
  }
  if (type === 'calculators') {
    return (
      <>
        <rect x={cx - 19} y={cy - 20} width="38" height="40" rx="6" fill={bg} stroke={color} strokeWidth="1.2" />
        <rect x={cx - 13} y={cy - 16} width="26" height="8" rx="1.5" fill={color} />
        {[-11, 0, 11].map((dx, i) => (
          <React.Fragment key={`r-${i}`}>
            <circle cx={cx + dx} cy={cy + 2} r="1.4" fill={color} />
            <circle cx={cx + dx} cy={cy + 12} r="1.4" fill={color} />
          </React.Fragment>
        ))}
      </>
    );
  }
  if (type === 'formulas') {
    return (
      <>
        <circle cx={cx} cy={cy} r="18" fill={bg} />
        <text x={cx} y={cy + 7} textAnchor="middle" fontSize="22" fontWeight="700"
              fontStyle="italic" fill={color}
              fontFamily="Georgia, 'Source Serif 4', serif">f</text>
      </>
    );
  }
  if (type === 'definitions') {
    return (
      <>
        <circle cx={cx} cy={cy} r="18" fill={bg} />
        <text x={cx} y={cy + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}
              fontFamily="Georgia, 'Source Serif 4', serif">Aa</text>
      </>
    );
  }
  return (
    <>
      <circle cx={cx} cy={cy} r="18" fill={bg} />
      <text x={cx} y={cy + 6} textAnchor="middle" fontSize="16" fontWeight="700" fill={color}
            fontFamily="Georgia, 'Source Serif 4', serif">§</text>
    </>
  );
};

/* ================================================================
   POD HEADER
   ================================================================ */

const PodHeader = ({ x, y, w, label, count, countNoun, stripColor, palette, glyph }) => (
  <>
    <rect x={x} y={y} width={w} height="3" rx="1.5" fill={stripColor} />
    <rect x={x + 20} y={y + 24} width="148" height="28" rx="14"
          fill={palette.podBg} stroke={stripColor} strokeWidth="1" />
    {glyph}
    <text x={x + 56} y={y + 43} fontSize="10.5" fontWeight="700" fill={stripColor}
          letterSpacing="1.3px"
          fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
      {label}
    </text>
    {count != null && (
      <text x={x + w - 20} y={y + 42} textAnchor="end" fontSize="10" fontWeight="600"
            fill={palette.textMuted} letterSpacing="0.6px"
            fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
        {`${count} ${countNoun}`}
      </text>
    )}
  </>
);

/* ================================================================
   CARDS — measure their own content height
   Each card function returns { node, height } so the parent layout
   can stack them without overlap.
   ================================================================ */

const TITLE_FONT = 16;
const TITLE_LINE_H = 22;
const SUB_FONT = 12.5;
const SUB_LINE_H = 18;

const cardFullHeight = (section, w) => {
  const titleW = w - 81;                                // x=66 to ~w-15
  const titleMax = charsForWidth(titleW, TITLE_FONT);
  const titleLines = wrapText(section.title, titleMax);
  const descSrc = section.description ?? section.subtitle ?? '';
  const descW = w - 35;
  const descMax = charsForWidth(descW, SUB_FONT);
  const descLines = wrapText(descSrc, descMax);

  // top padding 20 + title block + countLabel (18) + gap (14) + desc block + bottom (38 for link row)
  const titleBlockH = Math.max(TITLE_LINE_H, titleLines.length * TITLE_LINE_H);
  const descBlockH = descLines.length * SUB_LINE_H;
  return {
    height: 20 + titleBlockH + 4 + 18 + 14 + descBlockH + 38,
    titleLines,
    descLines,
  };
};

const CardFull = ({ section, x, y, w, palette, sectionData, hoverId, setHoverId }) => {
  const isHover = hoverId === section.id;
  const { height, titleLines, descLines } = cardFullHeight(section, w);
  const count = getSectionCount(section, sectionData);
  const countLabel = getCountLabel(section, count);

  const titleTopY = 20 + TITLE_LINE_H - 6;            // baseline of first line
  const countY = titleTopY + (titleLines.length - 1) * TITLE_LINE_H + 19;
  const descStartY = countY + 28;

  return (
    <g style={{ cursor: 'pointer', transition: 'transform 0.18s ease' }}
       transform={isHover ? `translate(${x},${y - 2})` : `translate(${x},${y})`}
       onMouseEnter={() => setHoverId(section.id)}
       onMouseLeave={() => setHoverId(null)}
       onClick={handleNodeActivate(section)}>
      <rect x="0" y="0" width={w} height={height} rx="12"
            fill={palette.cardBg}
            stroke={isHover ? palette.cardBorderHover : palette.cardBorder}
            strokeWidth="1" />
      <Glyph type={section.type} cx="36" cy="40" color={palette.podStripTools} bg={palette.iconBg} />
      {titleLines.map((line, i) => (
        <text key={`t-${i}`} x="66" y={titleTopY + i * TITLE_LINE_H}
              fontSize={TITLE_FONT} fontWeight="700" fill={palette.textPrimary}
              fontFamily="'Source Serif 4', Georgia, serif">{line}</text>
      ))}
      {countLabel && (
        <text x="66" y={countY} fontSize="11" fill={palette.textMuted}
              fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{countLabel}</text>
      )}
      {descLines.map((line, i) => (
        <text key={`d-${i}`} x="20" y={descStartY + i * SUB_LINE_H}
              fontSize={SUB_FONT} fill={palette.textSecondary}
              fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{line}</text>
      ))}
      <text x={w - 20} y={height - 14} textAnchor="end" fontSize="11" fontWeight="700"
            fill={palette.link}
            fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">Jump to ↓</text>
    </g>
  );
};

const cardCompactHeight = (section, w, showSubtitle = true) => {
  const titleW = w - 40;
  const titleMax = charsForWidth(titleW, 15);
  const titleLines = wrapText(section.title, titleMax);
  const sub = showSubtitle ? (section.description ?? section.subtitle ?? '') : '';
  const subW = w - 40;
  const subMax = charsForWidth(subW, 11.5);
  const subLines = wrapText(sub, subMax);

  const titleBlock = titleLines.length * 20;
  const subBlock = subLines.length * 16;
  // top 18 + title + 8 + sub + 18 + footer row (count+link, 22)
  return {
    height: 18 + titleBlock + 8 + subBlock + 18 + 22,
    titleLines,
    subLines,
  };
};

const CardCompact = ({ section, x, y, w, palette, sectionData, hoverId, setHoverId, showSubtitle = true }) => {
  const isHover = hoverId === section.id;
  const { height, titleLines, subLines } = cardCompactHeight(section, w, showSubtitle);
  const count = getSectionCount(section, sectionData);
  const countLabel = getCountLabel(section, count);

  const titleTopY = 18 + 16;
  const subTopY = titleTopY + (titleLines.length - 1) * 20 + 22;

  return (
    <g style={{ cursor: 'pointer', transition: 'transform 0.18s ease' }}
       transform={isHover ? `translate(${x},${y - 2})` : `translate(${x},${y})`}
       onMouseEnter={() => setHoverId(section.id)}
       onMouseLeave={() => setHoverId(null)}
       onClick={handleNodeActivate(section)}>
      <rect x="0" y="0" width={w} height={height} rx="11"
            fill={palette.cardBg}
            stroke={isHover ? palette.cardBorderHover : palette.cardBorder}
            strokeWidth="1" />
      {titleLines.map((line, i) => (
        <text key={`ct-${i}`} x="20" y={titleTopY + i * 20}
              fontSize="15" fontWeight="700" fill={palette.textPrimary}
              fontFamily="'Source Serif 4', Georgia, serif">{line}</text>
      ))}
      {subLines.map((line, i) => (
        <text key={`cs-${i}`} x="20" y={subTopY + i * 16}
              fontSize="11.5" fill={palette.textSecondary}
              fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{line}</text>
      ))}
      {countLabel && (
        <text x="20" y={height - 14} fontSize="10.5" fontWeight="600" fill={palette.textMuted}
              letterSpacing="0.6px"
              fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">
          {countLabel.toUpperCase()}
        </text>
      )}
      <text x={w - 20} y={height - 14} textAnchor="end" fontSize="11" fontWeight="700"
            fill={palette.link}
            fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">Jump to ↓</text>
    </g>
  );
};

/* ================================================================
   HUB
   ================================================================ */

const HubRect = ({ x, y, w, h, meta, total, palette }) => (
  <>
    <rect x={x} y={y} width={w} height={h} rx="20" fill={palette.rootBg} />
    <text x={x + w / 2} y={y + 30} textAnchor="middle" fontSize="10" fontWeight="700"
          fill={palette.rootEyebrow} letterSpacing="1.8px"
          fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">SECTION</text>
    <text x={x + w / 2} y={y + 72} textAnchor="middle" fontSize="32" fontWeight="700"
          fill={palette.rootTitle} letterSpacing="-0.01em"
          fontFamily="'Source Serif 4', Georgia, serif">{meta?.title}</text>
    <text x={x + w / 2} y={y + 96} textAnchor="middle" fontSize="11" fontWeight="500"
          fill={palette.rootSubtitle}
          fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{`${total} subsections`}</text>
    <g style={{ cursor: 'pointer' }} onClick={() => scrollToSection('main-content-top')}>
      <rect x={x + w / 2 - 70} y={y + 108} width="140" height="22" rx="11" fill={palette.ctaBg} />
      <text x={x + w / 2} y={y + 124} textAnchor="middle" fontSize="10.5" fontWeight="700"
            fill={palette.ctaText} letterSpacing="0.8px"
            fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">BROWSE ALL ↓</text>
    </g>
  </>
);

const HubCircle = ({ cx, cy, r, meta, total, palette }) => (
  <>
    <circle cx={cx} cy={cy} r={r} fill={palette.rootBg} />
    <text x={cx} y={cy - 22} textAnchor="middle" fontSize="10" fontWeight="700"
          fill={palette.rootEyebrow} letterSpacing="1.8px"
          fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">SECTION</text>
    <text x={cx} y={cy + 12} textAnchor="middle" fontSize="26" fontWeight="700"
          fill={palette.rootTitle} letterSpacing="-0.01em"
          fontFamily="'Source Serif 4', Georgia, serif">{meta?.title}</text>
    <text x={cx} y={cy + 30} textAnchor="middle" fontSize="10.5" fontWeight="500"
          fill={palette.rootSubtitle}
          fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">{`${total} subsections`}</text>
    <g style={{ cursor: 'pointer' }} onClick={() => scrollToSection('main-content-top')}>
      <rect x={cx - 49} y={cy + 42} width="98" height="22" rx="11" fill={palette.ctaBg} />
      <text x={cx} y={cy + 58} textAnchor="middle" fontSize="10.5" fontWeight="700"
            fill={palette.ctaText} letterSpacing="0.7px"
            fontFamily="-apple-system, 'Segoe UI', system-ui, sans-serif">BROWSE ↓</text>
    </g>
  </>
);

/* ================================================================
   SYMMETRIC LAYOUT
   ================================================================ */

const SymmetricMindMap = ({ palette, meta, groups, sectionData, total }) => {
  const [hoverId, setHoverId] = useState(null);

  // Cards in Tools/Reference pods
  const tcCardW = 260;
  const cardGapX = 20;

  // Pre-compute heights for every full-size card
  const toolsCards = groups.tools.slice(0, 2).map((s) => ({ section: s, ...cardFullHeight(s, tcCardW) }));
  const refCards = groups.reference.slice(0, 2).map((s) => ({ section: s, ...cardFullHeight(s, tcCardW) }));

  const tallestFull = Math.max(
    140,
    ...toolsCards.map((c) => c.height),
    ...refCards.map((c) => c.height),
  );

  // Top pod height = header (60) + top padding (8) + tallest card + bottom padding (20)
  const topPodY = 60;
  const topPodH = 60 + 8 + tallestFull + 20;

  // Topics pod: 4 columns
  const topicsCols = 4;
  const topicsGapX = 15;
  const topicsGapY = 16;
  const topicsInnerW = 1280 - 40;
  const topicsCardW = Math.floor((topicsInnerW - (topicsCols - 1) * topicsGapX) / topicsCols);
  const topicsCards = groups.topics.map((s) => ({ section: s, ...cardCompactHeight(s, topicsCardW, true) }));

  // Group cards into rows; each row uses the tallest card in that row
  const topicsRows = [];
  for (let i = 0; i < topicsCards.length; i += topicsCols) {
    topicsRows.push(topicsCards.slice(i, i + topicsCols));
  }
  const topicsRowHeights = topicsRows.map((row) => Math.max(...row.map((c) => c.height)));
  const topicsBlockH = topicsRowHeights.reduce((a, b) => a + b, 0) + (topicsRowHeights.length - 1) * topicsGapY;
  const topicsPodH = 72 + topicsBlockH + 20;

  // Hub position — between top pods and topics pod
  const hubW = 200;
  const hubH = 140;
  const hubX = (VIEWBOX_W - hubW) / 2;
  const gapBetweenPods = 40;
  const hubY = topPodY + topPodH + Math.max(0, (gapBetweenPods + 20));
  const topicsPodY = hubY + hubH + gapBetweenPods;

  const viewBoxH = topicsPodY + topicsPodH + 40;

  return (
    <svg viewBox={`0 0 ${VIEWBOX_W} ${viewBoxH}`} style={{ display: 'block', width: '100%', height: 'auto' }}
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mmh-sym-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette.canvasTop} />
          <stop offset="1" stopColor={palette.canvasBottom} />
        </linearGradient>
        <filter id="mmh-sym-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0a1f3d" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width={VIEWBOX_W} height={viewBoxH} fill="url(#mmh-sym-bg)" />

      {/* Connectors — re-anchored to the dynamic hub Y */}
      <path d={`M ${hubX + 40} ${hubY + 60} C ${hubX - 60} ${hubY + 60}, ${hubX - 60} ${topPodY + topPodH / 2}, ${hubX - 160} ${topPodY + topPodH / 2}`}
            fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
      <path d={`M ${hubX + hubW - 40} ${hubY + 60} C ${hubX + hubW + 60} ${hubY + 60}, ${hubX + hubW + 60} ${topPodY + topPodH / 2}, ${hubX + hubW + 160} ${topPodY + topPodH / 2}`}
            fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
      <path d={`M ${hubX + hubW / 2} ${hubY + hubH} L ${hubX + hubW / 2} ${topicsPodY - 5}`}
            fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />

      {/* Hub */}
      <g filter="url(#mmh-sym-shadow)">
        <HubRect x={hubX} y={hubY} w={hubW} h={hubH} meta={meta} total={total} palette={palette} />
      </g>

      {/* Pod: TOOLS */}
      <g>
        <rect x="60" y={topPodY} width="580" height={topPodH} rx="16"
              fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
        <PodHeader x={60} y={topPodY} w={580} label="INTERACTIVE"
                   count={groups.tools.length} countNoun={groups.tools.length === 1 ? 'TOOL' : 'TOOLS'}
                   stripColor={palette.podStripTools} palette={palette}
                   glyph={<>
                     <circle cx="100" cy={topPodY + 38} r="6" fill="none" stroke={palette.podStripTools} strokeWidth="1.2" />
                     <circle cx="100" cy={topPodY + 38} r="2" fill={palette.podStripTools} />
                   </>} />
        {toolsCards.map((c, i) => (
          <CardFull key={c.section.id} section={c.section} sectionData={sectionData}
                    x={80 + i * (tcCardW + cardGapX)} y={topPodY + 68}
                    w={tcCardW}
                    palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
        ))}
      </g>

      {/* Pod: REFERENCE */}
      <g>
        <rect x="760" y={topPodY} width="580" height={topPodH} rx="16"
              fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
        <PodHeader x={760} y={topPodY} w={580} label="REFERENCE"
                   count={groups.reference.reduce((s, sec) => s + (getSectionCount(sec, sectionData) || 0), 0)}
                   countNoun="ITEMS"
                   stripColor={palette.podStripRef} palette={palette}
                   glyph={<text x="800" y={topPodY + 47} fontSize="16" fontWeight="700"
                                fontStyle="italic" fill={palette.podStripRef}
                                fontFamily="Georgia, 'Source Serif 4', serif">f</text>} />
        {refCards.map((c, i) => (
          <CardFull key={c.section.id} section={c.section} sectionData={sectionData}
                    x={780 + i * (tcCardW + cardGapX)} y={topPodY + 68}
                    w={tcCardW}
                    palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
        ))}
      </g>

      {/* Pod: TOPICS */}
      <g>
        <rect x="60" y={topicsPodY} width="1280" height={topicsPodH} rx="16"
              fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
        <PodHeader x={60} y={topicsPodY} w={1280} label="CORE TOPICS"
                   count={groups.topics.length} countNoun={groups.topics.length === 1 ? 'SUBSECTION' : 'SUBSECTIONS'}
                   stripColor={palette.podStripTopics} palette={palette}
                   glyph={<text x="100" y={topicsPodY + 46} fontSize="16" fontWeight="700"
                                fill={palette.podStripTopics}
                                fontFamily="Georgia, 'Source Serif 4', serif">§</text>} />
        {(() => {
          let rowY = topicsPodY + 72;
          const out = [];
          topicsRows.forEach((row, rIdx) => {
            row.forEach((c, cIdx) => {
              const x = 80 + cIdx * (topicsCardW + topicsGapX);
              out.push(
                <CardCompact key={c.section.id} section={c.section} sectionData={sectionData}
                             x={x} y={rowY} w={topicsCardW}
                             palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
              );
            });
            rowY += topicsRowHeights[rIdx] + topicsGapY;
          });
          return out;
        })()}
      </g>
    </svg>
  );
};

/* ================================================================
   ASYMMETRIC LAYOUT
   ================================================================ */

const AsymmetricMindMap = ({ palette, meta, groups, sectionData, total }) => {
  const [hoverId, setHoverId] = useState(null);

  // Left pods use compact cards stacked vertically
  const leftCardW = 340;

  const toolsCards = groups.tools.slice(0, 2).map((s) => ({ section: s, ...cardCompactHeight(s, leftCardW, false) }));
  const refCards = groups.reference.slice(0, 2).map((s) => ({ section: s, ...cardCompactHeight(s, leftCardW, false) }));

  const toolsBlockH = toolsCards.reduce((a, c) => a + c.height, 0) + Math.max(0, toolsCards.length - 1) * 12;
  const refBlockH = refCards.reduce((a, c) => a + c.height, 0) + Math.max(0, refCards.length - 1) * 12;

  const toolsPodH = 72 + toolsBlockH + 20;
  const refPodH = 72 + refBlockH + 20;

  // Topics
  const topicsCols = 2;
  const topicsGapX = 20;
  const topicsGapY = 12;
  const topicsPodX = 720;
  const topicsPodW = 620;
  const topicsInnerW = topicsPodW - 40;
  const topicsCardW = Math.floor((topicsInnerW - (topicsCols - 1) * topicsGapX) / topicsCols);
  const topicsCards = groups.topics.map((s) => ({ section: s, ...cardCompactHeight(s, topicsCardW, true) }));

  const topicsRows = [];
  for (let i = 0; i < topicsCards.length; i += topicsCols) {
    topicsRows.push(topicsCards.slice(i, i + topicsCols));
  }
  const topicsRowHeights = topicsRows.map((row) => Math.max(...row.map((c) => c.height)));
  const topicsBlockH = topicsRowHeights.reduce((a, b) => a + b, 0) + Math.max(0, topicsRowHeights.length - 1) * topicsGapY;
  const topicsPodH = 72 + topicsBlockH + 20;

  // Layout
  const leftToolsY = 100;
  const hubGap = 80;
  const leftRefY = leftToolsY + toolsPodH + hubGap;
  const topicsPodY = 100;
  const hubCx = 530;
  const hubCy = (leftToolsY + toolsPodH + leftRefY) / 2;
  const hubR = 88;

  const viewBoxH = Math.max(leftRefY + refPodH, topicsPodY + topicsPodH) + 40;

  return (
    <svg viewBox={`0 0 ${VIEWBOX_W} ${viewBoxH}`} style={{ display: 'block', width: '100%', height: 'auto' }}
         xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="mmh-asym-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={palette.canvasTop} />
          <stop offset="1" stopColor={palette.canvasBottom} />
        </linearGradient>
        <filter id="mmh-asym-shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#0a1f3d" floodOpacity="0.08" />
        </filter>
      </defs>
      <rect width={VIEWBOX_W} height={viewBoxH} fill="url(#mmh-asym-bg)" />

      {/* Connectors */}
      <path d={`M ${hubCx - hubR + 25} ${hubCy - 30} C ${hubCx - 150} ${hubCy - 90}, ${hubCx - 250} ${leftToolsY + toolsPodH - 40}, ${hubCx - 270} ${leftToolsY + toolsPodH - 80}`}
            fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
      <path d={`M ${hubCx - hubR + 25} ${hubCy + 30} C ${hubCx - 150} ${hubCy + 90}, ${hubCx - 250} ${leftRefY + 40}, ${hubCx - 270} ${leftRefY + 80}`}
            fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />
      <path d={`M ${hubCx + hubR} ${hubCy} L ${topicsPodX} ${hubCy}`}
            fill="none" stroke={palette.connector} strokeWidth="1.5" opacity="0.7" />

      {/* Hub */}
      <g filter="url(#mmh-asym-shadow)">
        <HubCircle cx={hubCx} cy={hubCy} r={hubR} meta={meta} total={total} palette={palette} />
      </g>

      {/* Pod: TOOLS */}
      <g>
        <rect x="60" y={leftToolsY} width="380" height={toolsPodH} rx="16"
              fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
        <PodHeader x={60} y={leftToolsY} w={380} label="INTERACTIVE"
                   count={groups.tools.length} countNoun={groups.tools.length === 1 ? 'TOOL' : 'TOOLS'}
                   stripColor={palette.podStripTools} palette={palette}
                   glyph={<>
                     <circle cx="100" cy={leftToolsY + 38} r="6" fill="none" stroke={palette.podStripTools} strokeWidth="1.2" />
                     <circle cx="100" cy={leftToolsY + 38} r="2" fill={palette.podStripTools} />
                   </>} />
        {(() => {
          let y = leftToolsY + 72;
          return toolsCards.map((c) => {
            const node = (
              <CardCompact key={c.section.id} section={c.section} sectionData={sectionData}
                           x={80} y={y} w={leftCardW}
                           palette={palette} hoverId={hoverId} setHoverId={setHoverId}
                           showSubtitle={false} />
            );
            y += c.height + 12;
            return node;
          });
        })()}
      </g>

      {/* Pod: REFERENCE */}
      <g>
        <rect x="60" y={leftRefY} width="380" height={refPodH} rx="16"
              fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
        <PodHeader x={60} y={leftRefY} w={380} label="REFERENCE"
                   count={groups.reference.reduce((s, sec) => s + (getSectionCount(sec, sectionData) || 0), 0)}
                   countNoun="ITEMS"
                   stripColor={palette.podStripRef} palette={palette}
                   glyph={<text x="98" y={leftRefY + 47} fontSize="16" fontWeight="700"
                                fontStyle="italic" fill={palette.podStripRef}
                                fontFamily="Georgia, 'Source Serif 4', serif">f</text>} />
        {(() => {
          let y = leftRefY + 72;
          return refCards.map((c) => {
            const node = (
              <CardCompact key={c.section.id} section={c.section} sectionData={sectionData}
                           x={80} y={y} w={leftCardW}
                           palette={palette} hoverId={hoverId} setHoverId={setHoverId}
                           showSubtitle={false} />
            );
            y += c.height + 12;
            return node;
          });
        })()}
      </g>

      {/* Pod: TOPICS */}
      <g>
        <rect x={topicsPodX} y={topicsPodY} width={topicsPodW} height={topicsPodH} rx="16"
              fill={palette.podBg} stroke={palette.podBorder} strokeWidth="1" />
        <PodHeader x={topicsPodX} y={topicsPodY} w={topicsPodW} label="CORE TOPICS"
                   count={groups.topics.length} countNoun={groups.topics.length === 1 ? 'SUBSECTION' : 'SUBSECTIONS'}
                   stripColor={palette.podStripTopics} palette={palette}
                   glyph={<text x={topicsPodX + 40} y={topicsPodY + 46} fontSize="16" fontWeight="700"
                                fill={palette.podStripTopics}
                                fontFamily="Georgia, 'Source Serif 4', serif">§</text>} />
        {(() => {
          let rowY = topicsPodY + 72;
          const out = [];
          topicsRows.forEach((row, rIdx) => {
            row.forEach((c, cIdx) => {
              const x = topicsPodX + 20 + cIdx * (topicsCardW + topicsGapX);
              out.push(
                <CardCompact key={c.section.id} section={c.section} sectionData={sectionData}
                             x={x} y={rowY} w={topicsCardW}
                             palette={palette} hoverId={hoverId} setHoverId={setHoverId} />
              );
            });
            rowY += topicsRowHeights[rIdx] + topicsGapY;
          });
          return out;
        })()}
      </g>
    </svg>
  );
};

/* ================================================================
   MAIN COMPONENT
   ================================================================ */

const MindMapHero = ({
  theme = 'deepBlue',
  meta,
  sections,
  sectionData,
  layout = 'symmetric',
}) => {
  const t = getTheme(theme);
  const palette = derivePalette(t);
  const groups = useMemo(() => groupSections(sections), [sections]);
  const total = (sections || []).length;

  const LayoutComponent = layout === 'asymmetric' ? AsymmetricMindMap : SymmetricMindMap;

  return (
    <div style={{ background: palette.canvasTop, padding: '32px 24px 16px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto' }}>
        {meta?.breadcrumbUrl && (
          <div style={{
            fontSize: 13, color: palette.textMuted, marginBottom: 16, fontWeight: 500,
            fontFamily: "-apple-system, 'Segoe UI', system-ui, sans-serif",
          }}>
            <a href="/" style={{ color: palette.textMuted, textDecoration: 'none' }}>Home</a>
            {' '}&rsaquo;{' '}
            {meta.title}
          </div>
        )}
        <LayoutComponent palette={palette} meta={meta} groups={groups}
                         sectionData={sectionData} total={total} />
      </div>
      <div id="main-content-top" style={{ height: 1, marginTop: 8 }} />
    </div>
  );
};

export default MindMapHero;