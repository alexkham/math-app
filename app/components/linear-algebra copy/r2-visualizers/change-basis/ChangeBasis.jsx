
// // // // // 'use client';

// // // // // import { useState, useCallback } from 'react';
// // // // // import {
// // // // //   Math2D, SVGRender, projection, useDrag, DEFAULT_GEOM,
// // // // //   AppShell, Card, LayerChips, CanvasReadout, ScenariosPanel, ExplanationCard,
// // // // // } from '../2DCore';

// // // // // // =====================================================================
// // // // // //   SECTION 1  ::  Scenarios
// // // // // // =====================================================================
// // // // // const C30 = Math.cos(Math.PI / 6), S30 = Math.sin(Math.PI / 6);
// // // // // const SQ = Math.SQRT1_2;

// // // // // export const SCENARIOS = {
// // // // //   standard: {
// // // // //     label: 'Standard basis', b1: [1, 0], b2: [0, 1], group: 'natural', tag: 'identity',
// // // // //     title: 'Standard basis', exTag: 'identity \u00B7 e\u2081, e\u2082',
// // // // //     body: 'The default coordinate system. <span class="b1">b\u2081</span> = (1, 0), <span class="b2">b\u2082</span> = (0, 1). Coordinates in this basis match the standard coordinates of <span class="v">v</span> &mdash; they&apos;re the same numbers. The change-of-basis matrix is the identity.',
// // // // //   },
// // // // //   rotated30: {
// // // // //     label: 'Rotated 30\u00B0', b1: [C30, S30], b2: [-S30, C30], group: 'natural', tag: '\u22A5 unit',
// // // // //     title: 'Rotated by 30\u00B0', exTag: 'orthonormal \u00B7 rotation',
// // // // //     body: 'A rotated orthonormal basis. <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> are still unit vectors at right angles &mdash; just turned. <span class="v">v</span> sits in the same place, but its new coordinates are <em>rotated in the opposite direction</em>. For orthonormal bases, <code>B\u207B\u00B9 = B\u1D40</code>.',
// // // // //   },
// // // // //   rotated45: {
// // // // //     label: 'Rotated 45\u00B0', b1: [SQ, SQ], b2: [-SQ, SQ], group: 'natural', tag: '\u22A5 unit',
// // // // //     title: 'Rotated by 45\u00B0', exTag: 'orthonormal \u00B7 diagonal axes',
// // // // //     body: 'New axes lie along <code>y = x</code> and <code>y = \u2212x</code>. <span class="v">v</span> is unchanged; its coordinates simply trade Cartesian for diagonal. Both bases describe the same space &mdash; just from different angles.',
// // // // //   },
// // // // //   scaled: {
// // // // //     label: 'Stretched axes', b1: [2, 0], b2: [0, 0.5], group: 'natural', tag: 'orth, non-unit',
// // // // //     title: 'Stretched orthogonal basis', exTag: 'orthogonal \u00B7 not unit',
// // // // //     body: 'Axes still perpendicular but no longer unit length. One coord-step along <span class="b1">b\u2081</span> covers 2 standard units; one along <span class="b2">b\u2082</span> covers 0.5. So <span class="v">v</span>&apos;s coordinates <em>shrink along b\u2081 and grow along b\u2082</em> relative to standard.',
// // // // //   },
// // // // //   skewed: {
// // // // //     label: 'Skewed', b1: [1, 0.4], b2: [-0.3, 1], group: 'nonorth', tag: 'not \u22A5',
// // // // //     title: 'Skewed basis', exTag: 'non-orthogonal \u00B7 valid',
// // // // //     body: '<span class="b1">b\u2081</span> stays mostly horizontal and <span class="b2">b\u2082</span> tilts left. The basis is still <em>valid</em> &mdash; det &ne; 0 &mdash; just not perpendicular. The basis-grid (dashed) shows parallelograms instead of squares. <span class="v">v</span>&apos;s coordinates still exist uniquely.',
// // // // //   },
// // // // //   diagBasis: {
// // // // //     label: 'Diagonals', b1: [1, 1], b2: [1, -1], group: 'nonorth', tag: '\u22A5 not unit',
// // // // //     title: 'Diagonal basis', exTag: 'orthogonal \u00B7 longer than unit',
// // // // //     body: 'Two perpendicular diagonals. Each basis vector has length <code>\u221A2</code>, so they&apos;re orthogonal but not <em>orthonormal</em>. <span class="v">v</span>&apos;s coordinates are scaled accordingly.',
// // // // //   },
// // // // //   obtuse: {
// // // // //     label: 'Obtuse basis', b1: [1, 0.3], b2: [0.3, 1], group: 'nonorth', tag: 'wide angle',
// // // // //     title: 'Wide-angle basis', exTag: 'non-orthogonal \u00B7 valid',
// // // // //     body: 'Both <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> tilt toward each other. Still a valid basis. The parallelogram cells in the basis-grid become elongated rhombi.',
// // // // //   },
// // // // //   flipY: {
// // // // //     label: 'Y flipped', b1: [1, 0], b2: [0, -1], group: 'special', tag: 'det \u22121',
// // // // //     title: 'Y-axis flipped', exTag: 'orientation reversed',
// // // // //     body: 'Same x-axis but y points down. <code>det B = \u22121</code> &mdash; the basis is left-handed instead of right-handed. <span class="v">v</span>&apos;s y-coord flips sign in this basis.',
// // // // //   },
// // // // //   swapped: {
// // // // //     label: 'Axes swapped', b1: [0, 1], b2: [1, 0], group: 'special', tag: 'det \u22121',
// // // // //     title: 'Axes swapped', exTag: '(b\u2081, b\u2082) \u2194',
// // // // //     body: 'Just trade the two axes. <span class="b1">b\u2081</span> = (0, 1), <span class="b2">b\u2082</span> = (1, 0). <span class="v">v</span>&apos;s coordinates swap as well. <code>det B = \u22121</code> &mdash; swapping two basis vectors flips orientation.',
// // // // //   },
// // // // //   collinear: {
// // // // //     label: 'Collinear (bad)', b1: [1, 0], b2: [2, 0], group: 'degenerate', tag: 'det = 0',
// // // // //     title: 'Degenerate \u2014 not a basis', exTag: 'det = 0 \u00B7 linearly dependent',
// // // // //     body: '<span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> both lie on the x-axis &mdash; they&apos;re multiples of each other. They <em>fail to span</em> the plane: any vector off the x-axis can&apos;t be written as a combination. <span class="warn">Coordinates are undefined.</span> A proper basis needs two linearly independent vectors.',
// // // // //   },
// // // // // };

// // // // // export const SCENARIO_GROUPS = [
// // // // //   { key: 'natural',    label: 'Natural',     tag: '\u22A5 axes',
// // // // //     color: 'var(--b1)', softBg: 'var(--b1-tint)', border: 'var(--b1-line)' },
// // // // //   { key: 'nonorth',    label: 'Non-orth',    tag: 'parallelogram',
// // // // //     color: 'var(--b2)', softBg: 'var(--b2-tint)', border: 'var(--b2-line)' },
// // // // //   { key: 'special',    label: 'Orientation', tag: 'det \u22121',
// // // // //     color: 'var(--accent)', softBg: 'var(--accent-soft)', border: 'var(--accent-line)' },
// // // // //   { key: 'degenerate', label: 'Degenerate',  tag: 'not a basis',
// // // // //     color: 'var(--warn)', softBg: 'var(--warn-tint)', border: 'var(--warn-line)' },
// // // // // ];

// // // // // export const DEFAULT_LAYERS = { grid: true, bgrid: true, decomp: true, labels: true };

// // // // // export const ALL_LAYER_DEFS = [
// // // // //   { key: 'grid', label: 'std grid' },
// // // // //   { key: 'bgrid', label: 'basis grid', swatch: 'linear-gradient(to right,#0e6e8a 50%,#5b34c4 50%)' },
// // // // //   { key: 'decomp', label: 'decomposition' },
// // // // //   { key: 'labels', label: 'labels' },
// // // // // ];

// // // // // const DEFAULT_LEDE = {
// // // // //   crumb: 'Linear Algebra<span class="r2-dot">&middot;</span>Change of basis',
// // // // //   body: 'Same vector, different numbers. Drag <span class="b1"><strong>b\u2081</strong></span> and <span class="b2"><strong>b\u2082</strong></span> to define a new basis &mdash; <span class="v">v</span> stays put in space, but its coordinates <code>(c\u2081, c\u2082)</code> shift to express <code>v = c\u2081\u00B7b\u2081 + c\u2082\u00B7b\u2082</code>. The basis grid (dashed) shows what the new coordinate system looks like.',
// // // // // };

// // // // // // =====================================================================
// // // // // //   SECTION 2  ::  Tool-specific CSS
// // // // // // =====================================================================
// // // // // const TOOL_CSS = `
// // // // // .cb-bgrid-1{stroke:var(--b1);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // // // // .cb-bgrid-1.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // // // // .cb-bgrid-2{stroke:var(--b2);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // // // // .cb-bgrid-2.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // // // // .cb-decomp-leg1{stroke:var(--b1);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // // // // .cb-decomp-leg2{stroke:var(--b2);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // // // // .cb-decomp-corner{fill:var(--text-faint);stroke:none}
// // // // // .cb-v-shaft{stroke:var(--v);stroke-width:2.5;fill:none;stroke-linecap:round}
// // // // // .cb-b1-shaft{stroke:var(--b1);stroke-width:2.4;fill:none;stroke-linecap:round}
// // // // // .cb-b2-shaft{stroke:var(--b2);stroke-width:2.4;fill:none;stroke-linecap:round}
// // // // // .cb-v-handle{fill:var(--v);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // // // .cb-b1-handle{fill:var(--b1);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // // // .cb-b2-handle{fill:var(--b2);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // // // .cb-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
// // // // // .cb-b1-label{fill:var(--b1);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // // // // .cb-b2-label{fill:var(--b2);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // // // // .cb-singular-warn{fill:var(--warn);font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:.05em}

// // // // // .cb-coord-row{
// // // // //   display:flex;align-items:center;justify-content:center;gap:10px;
// // // // //   padding:6px 0;flex-wrap:wrap;
// // // // // }
// // // // // .cb-coord-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;color:var(--text)}
// // // // // .cb-coord-lab .sub{font-size:11px;vertical-align:sub;font-weight:400;color:var(--text-faint)}
// // // // // .cb-coord-lab.v{color:var(--v)}
// // // // // .cb-coord-op{color:var(--text-faint);font-size:13px}
// // // // // .cb-vec{
// // // // //   display:flex;flex-direction:column;gap:2px;padding:6px 10px;position:relative;
// // // // //   font-family:var(--font-mono);font-size:13px;
// // // // // }
// // // // // .cb-vec::before,.cb-vec::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // // // // .cb-vec::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // // // // .cb-vec::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // // // // .cb-vec .cell{text-align:center;min-width:38px;padding:0 4px;font-variant-numeric:tabular-nums;font-weight:500}
// // // // // .cb-vec.std .cell{color:var(--v)}
// // // // // .cb-vec.nb .cell.c1{color:var(--b1)}
// // // // // .cb-vec.nb .cell.c2{color:var(--b2)}

// // // // // .cb-decomp-eq{
// // // // //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// // // // //   text-align:center;padding:10px 0 2px;margin-top:8px;
// // // // //   border-top:1px solid var(--border);letter-spacing:.02em;
// // // // // }
// // // // // .cb-decomp-eq .v{color:var(--v);font-weight:600}
// // // // // .cb-decomp-eq .c1{color:var(--b1);font-weight:600}
// // // // // .cb-decomp-eq .c2{color:var(--b2);font-weight:600}
// // // // // .cb-decomp-eq .b1n{color:var(--b1);font-family:var(--font-display);font-style:italic;font-weight:500}
// // // // // .cb-decomp-eq .b2n{color:var(--b2);font-family:var(--font-display);font-style:italic;font-weight:500}

// // // // // .cb-bmat-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:5px 0;flex-wrap:wrap}
// // // // // .cb-bmat-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
// // // // // .cb-bmat-lab.inv::after{content:'\\207B\\00B9';font-size:11px;vertical-align:super;font-weight:400}
// // // // // .cb-bmat-eq{color:var(--text-faint);font-size:14px}
// // // // // .cb-bmat{
// // // // //   display:grid;gap:3px 12px;padding:7px 10px;position:relative;
// // // // //   font-family:var(--font-mono);font-size:13.5px;grid-template-columns:auto auto;
// // // // // }
// // // // // .cb-bmat::before,.cb-bmat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // // // // .cb-bmat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // // // // .cb-bmat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // // // // .cb-bmat .cell{text-align:center;min-width:38px;padding:1px 3px;font-variant-numeric:tabular-nums;font-weight:600}
// // // // // .cb-bmat .cell.c1{color:var(--b1)}
// // // // // .cb-bmat .cell.c2{color:var(--b2)}
// // // // // .cb-bmat.singular .cell{color:var(--warn)}
// // // // // .cb-det-line{
// // // // //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// // // // //   text-align:center;padding:10px 0 2px;margin-top:6px;
// // // // //   border-top:1px solid var(--border);letter-spacing:.02em;
// // // // // }
// // // // // .cb-det-line .val{color:var(--text);font-weight:600;font-variant-numeric:tabular-nums}
// // // // // .cb-det-line .val.warn{color:var(--warn)}
// // // // // .cb-det-line .kind{font-weight:500;margin-left:2px}
// // // // // `;

// // // // // // =====================================================================
// // // // // //   SECTION 3  ::  Hook
// // // // // // =====================================================================
// // // // // export function useChangeBasisState(options = {}) {
// // // // //   const {
// // // // //     initialB1 = [1, 0],
// // // // //     initialB2 = [0, 1],
// // // // //     initialV = [2.5, 1.5],
// // // // //     initialPreset = 'standard',
// // // // //     initialLayers = DEFAULT_LAYERS,
// // // // //     scenarios = SCENARIOS,
// // // // //   } = options;

// // // // //   const [b1, setB1Internal] = useState(initialB1);
// // // // //   const [b2, setB2Internal] = useState(initialB2);
// // // // //   const [v, setV] = useState(initialV);
// // // // //   const [preset, setPresetInternal] = useState(initialPreset);
// // // // //   const [layers, setLayers] = useState(initialLayers);

// // // // //   const setB1 = useCallback((next) => { setB1Internal(next); setPresetInternal(null); }, []);
// // // // //   const setB2 = useCallback((next) => { setB2Internal(next); setPresetInternal(null); }, []);

// // // // //   const selectPreset = useCallback((key) => {
// // // // //     const sc = scenarios[key];
// // // // //     if (!sc) return;
// // // // //     setB1Internal(sc.b1.slice());
// // // // //     setB2Internal(sc.b2.slice());
// // // // //     setPresetInternal(key);
// // // // //   }, [scenarios]);

// // // // //   return { b1, b2, v, preset, layers, setB1, setB2, setV, selectPreset, setLayers };
// // // // // }

// // // // // // =====================================================================
// // // // // //   SECTION 4  ::  Tool-specific SVG helpers
// // // // // // =====================================================================
// // // // // function decompositionSVG(b1, b2, v, geom) {
// // // // //   const c = Math2D.coordsInBasis(b1, b2, v);
// // // // //   if (!c) return '';
// // // // //   const tx = projection(geom);
// // // // //   const [ox, oy] = tx([0, 0]);
// // // // //   const leg1End = [c[0] * b1[0], c[0] * b1[1]];
// // // // //   const [l1x, l1y] = tx(leg1End);
// // // // //   const [vx, vy] = tx(v);
// // // // //   let s = '';
// // // // //   s += `<line class="cb-decomp-leg1" x1="${ox}" y1="${oy}" x2="${l1x.toFixed(2)}" y2="${l1y.toFixed(2)}"/>`;
// // // // //   s += `<line class="cb-decomp-leg2" x1="${l1x.toFixed(2)}" y1="${l1y.toFixed(2)}" x2="${vx.toFixed(2)}" y2="${vy.toFixed(2)}"/>`;
// // // // //   s += `<circle class="cb-decomp-corner" cx="${l1x.toFixed(2)}" cy="${l1y.toFixed(2)}" r="3"/>`;
// // // // //   return s;
// // // // // }

// // // // // function arrowSVG(p, kind, label, showLabel, geom) {
// // // // //   const tx = projection(geom);
// // // // //   const [ox, oy] = tx([0, 0]);
// // // // //   const mag = Math.hypot(p[0], p[1]);
// // // // //   let s = '';
// // // // //   if (mag < 0.02) {
// // // // //     s += `<circle class="cb-${kind}-handle" cx="${ox}" cy="${oy}" r="5.5"/>`;
// // // // //     return s;
// // // // //   }
// // // // //   const [tipX, tipY] = tx(p);
// // // // //   s += `<line class="cb-${kind}-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#cb-arr-${kind})"/>`;
// // // // //   s += `<circle class="cb-${kind}-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5.5"/>`;
// // // // //   if (showLabel) {
// // // // //     const lx = p[0] + (p[0] >= 0 ? 0.35 : -0.35);
// // // // //     const ly = p[1] + (p[1] >= 0 ? 0.35 : -0.35);
// // // // //     const [px, py] = tx([lx, ly]);
// // // // //     s += `<text class="cb-${kind}-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
// // // // //   }
// // // // //   return s;
// // // // // }

// // // // // // =====================================================================
// // // // // //   SECTION 5  ::  Sub-components
// // // // // // =====================================================================
// // // // // export function BasisCanvas({
// // // // //   b1 = [1, 0],
// // // // //   b2 = [0, 1],
// // // // //   v = [2.5, 1.5],
// // // // //   layers = DEFAULT_LAYERS,
// // // // //   geom = DEFAULT_GEOM,
// // // // //   onB1Change,
// // // // //   onB2Change,
// // // // //   onVChange,
// // // // //   className,
// // // // //   style,
// // // // // }) {
// // // // //   const { svgRef, isDragging, handlers } = useDrag({
// // // // //     geom,
// // // // //     onDrag: (h, p) => {
// // // // //       if (h === 'v' && onVChange) onVChange(p);
// // // // //       else if (h === 'b1' && onB1Change) onB1Change(p);
// // // // //       else if (h === 'b2' && onB2Change) onB2Change(p);
// // // // //     },
// // // // //   });

// // // // //   let inner = '';
// // // // //   if (layers.grid) inner += SVGRender.grid(geom);
// // // // //   if (layers.bgrid) inner += SVGRender.basisGrid(b1, b2, geom, 'cb-bgrid-1', 'cb-bgrid-2');
// // // // //   if (layers.decomp) inner += decompositionSVG(b1, b2, v, geom);
// // // // //   inner += arrowSVG(b1, 'b1', '\u0062\u2081', layers.labels, geom);
// // // // //   inner += arrowSVG(b2, 'b2', '\u0062\u2082', layers.labels, geom);
// // // // //   inner += arrowSVG(v, 'v', 'v', layers.labels, geom);
// // // // //   inner += SVGRender.origin(geom);

// // // // //   const singular = Math.abs(Math2D.det(Math2D.basisMatrix(b1, b2))) < 1e-7;
// // // // //   if (singular) {
// // // // //     inner += `<text class="cb-singular-warn" x="${geom.width / 2}" y="30" text-anchor="middle">basis is singular \u2014 coords undefined</text>`;
// // // // //   }

// // // // //   const tx = projection(geom);
// // // // //   const [vx, vy] = tx(v);
// // // // //   const [b1x, b1y] = tx(b1);
// // // // //   const [b2x, b2y] = tx(b2);

// // // // //   return (
// // // // //     <svg
// // // // //       ref={svgRef}
// // // // //       className={'r2-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
// // // // //       style={style}
// // // // //       viewBox={`0 0 ${geom.width} ${geom.height}`}
// // // // //       xmlns="http://www.w3.org/2000/svg"
// // // // //       {...handlers}
// // // // //     >
// // // // //       <defs>
// // // // //         <marker id="cb-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // // // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#b54708" />
// // // // //         </marker>
// // // // //         <marker id="cb-arr-b1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // // // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0e6e8a" />
// // // // //         </marker>
// // // // //         <marker id="cb-arr-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // // // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#5b34c4" />
// // // // //         </marker>
// // // // //       </defs>
// // // // //       <g dangerouslySetInnerHTML={{ __html: inner }} />
// // // // //       {onB1Change && <circle className="r2-tip-hit" data-handle="b1" cx={b1x} cy={b1y} r={14} />}
// // // // //       {onB2Change && <circle className="r2-tip-hit" data-handle="b2" cx={b2x} cy={b2y} r={14} />}
// // // // //       {onVChange  && <circle className="r2-tip-hit" data-handle="v"  cx={vx}  cy={vy}  r={14} />}
// // // // //     </svg>
// // // // //   );
// // // // // }

// // // // // export function CoordinatesCard({ b1 = [1, 0], b2 = [0, 1], v = [2.5, 1.5] }) {
// // // // //   const c = Math2D.coordsInBasis(b1, b2, v);
// // // // //   const singular = !c;
// // // // //   return (
// // // // //     <Card badge="01" title="Coordinates of v" note="in two bases">
// // // // //       <div className="cb-coord-row">
// // // // //         <span className="cb-coord-lab v">v<span className="sub">std</span></span>
// // // // //         <span className="cb-coord-op">=</span>
// // // // //         <div className="cb-vec std">
// // // // //           <span className="cell">{Math2D.fmt(v[0])}</span>
// // // // //           <span className="cell">{Math2D.fmt(v[1])}</span>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="cb-coord-row">
// // // // //         <span className="cb-coord-lab">v<span className="sub">B</span></span>
// // // // //         <span className="cb-coord-op">=</span>
// // // // //         <div className="cb-vec nb">
// // // // //           <span className="cell c1">{c ? Math2D.fmt(c[0]) : '\u2014'}</span>
// // // // //           <span className="cell c2">{c ? Math2D.fmt(c[1]) : '\u2014'}</span>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="cb-decomp-eq">
// // // // //         <span className="v">v</span> = <span className="c1">{c ? Math2D.fmt(c[0]) : '?'}</span>
// // // // //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// // // // //         <span className="b1n">b&#8321;</span> + <span className="c2">{c ? Math2D.fmt(c[1]) : '?'}</span>
// // // // //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// // // // //         <span className="b2n">b&#8322;</span>
// // // // //       </div>
// // // // //       {singular && (
// // // // //         <div className="r2-status-strip warn">
// // // // //           <span className="r2-status-badge">!</span>
// // // // //           <span>Basis is singular &mdash; b&#8321; and b&#8322; are linearly dependent. Coordinates undefined.</span>
// // // // //         </div>
// // // // //       )}
// // // // //     </Card>
// // // // //   );
// // // // // }

// // // // // export function BasisMatrixCard({ b1 = [1, 0], b2 = [0, 1] }) {
// // // // //   const B = Math2D.basisMatrix(b1, b2);
// // // // //   const Binv = Math2D.inverse(B);
// // // // //   const dB = Math2D.det(B);
// // // // //   const singular = Math.abs(dB) < 1e-7;
// // // // //   const orth = Math2D.orthInfo(b1, b2);
// // // // //   let orthLabel = 'oblique';
// // // // //   let orthColor = 'var(--text-dim)';
// // // // //   if (orth.kind === 'singular') { orthLabel = 'not a basis'; orthColor = 'var(--warn)'; }
// // // // //   else if (orth.kind === 'orthonormal') { orthLabel = 'orthonormal'; orthColor = 'var(--b1)'; }
// // // // //   else if (orth.kind === 'orthogonal') { orthLabel = 'orthogonal (not unit)'; orthColor = 'var(--b1)'; }
// // // // //   else if (orth.kind === 'oblique') { orthLabel = `oblique, ${Math2D.fmt(orth.angle)}\u00B0`; orthColor = 'var(--b2)'; }
// // // // //   return (
// // // // //     <Card badge="02" title="Change-of-basis matrix" note="columns = b₁, b₂">
// // // // //       <div className="cb-bmat-row">
// // // // //         <span className="cb-bmat-lab">B</span>
// // // // //         <span className="cb-bmat-eq">=</span>
// // // // //         <div className={'cb-bmat' + (singular ? ' singular' : '')}>
// // // // //           <span className="cell c1">{Math2D.fmt(B[0][0])}</span>
// // // // //           <span className="cell c2">{Math2D.fmt(B[0][1])}</span>
// // // // //           <span className="cell c1">{Math2D.fmt(B[1][0])}</span>
// // // // //           <span className="cell c2">{Math2D.fmt(B[1][1])}</span>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="cb-bmat-row">
// // // // //         <span className="cb-bmat-lab inv">B</span>
// // // // //         <span className="cb-bmat-eq">=</span>
// // // // //         <div className={'cb-bmat' + (Binv ? '' : ' singular')}>
// // // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][0]) : '\u2014'}</span>
// // // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][1]) : '\u2014'}</span>
// // // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][0]) : '\u2014'}</span>
// // // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][1]) : '\u2014'}</span>
// // // // //         </div>
// // // // //       </div>
// // // // //       <div className="cb-det-line">
// // // // //         det B = <span className={'val' + (singular ? ' warn' : '')}>{Math2D.fmt(dB)}</span>
// // // // //         &nbsp;&middot;&nbsp;
// // // // //         <span className="kind" style={{ color: orthColor }}>{orthLabel}</span>
// // // // //       </div>
// // // // //     </Card>
// // // // //   );
// // // // // }

// // // // // // =====================================================================
// // // // // //   SECTION 6  ::  Core + Wrapper
// // // // // // =====================================================================
// // // // // export function ChangeBasisCore({
// // // // //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// // // // //   children,
// // // // // }) {
// // // // //   const state = useChangeBasisState({ initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios });
// // // // //   if (typeof children === 'function') return children(state);
// // // // //   return null;
// // // // // }

// // // // // export default function ChangeBasis({
// // // // //   lede,
// // // // //   ledeCrumb = DEFAULT_LEDE.crumb,
// // // // //   ledeBody = DEFAULT_LEDE.body,
// // // // //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// // // // //   layerChips, canvas, explanation, coordinates, basisMatrix, scenariosPanel,
// // // // //   visibleScenarios, enabledLayers, explanationOverride,
// // // // //   layout,
// // // // //   className, style,
// // // // // }) {
// // // // //   return (
// // // // //     <ChangeBasisCore
// // // // //       initialB1={initialB1}
// // // // //       initialB2={initialB2}
// // // // //       initialV={initialV}
// // // // //       initialPreset={initialPreset}
// // // // //       initialLayers={initialLayers}
// // // // //       scenarios={scenarios}
// // // // //     >
// // // // //       {(ctx) => {
// // // // //         const slotChips = layerChips !== undefined ? layerChips : (
// // // // //           <LayerChips layers={ctx.layers} onChange={ctx.setLayers} defs={ALL_LAYER_DEFS} enabled={enabledLayers} />
// // // // //         );
// // // // //         const slotCanvas = canvas !== undefined ? canvas : (
// // // // //           <BasisCanvas
// // // // //             b1={ctx.b1} b2={ctx.b2} v={ctx.v}
// // // // //             layers={ctx.layers}
// // // // //             onB1Change={ctx.setB1}
// // // // //             onB2Change={ctx.setB2}
// // // // //             onVChange={ctx.setV}
// // // // //           />
// // // // //         );
// // // // //         const slotExp = explanation !== undefined ? explanation : (
// // // // //           <ExplanationCard
// // // // //             preset={ctx.preset}
// // // // //             scenarios={scenarios || SCENARIOS}
// // // // //             override={explanationOverride}
// // // // //           />
// // // // //         );
// // // // //         const slotCoords = coordinates !== undefined ? coordinates : (
// // // // //           <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v} />
// // // // //         );
// // // // //         const slotMatrix = basisMatrix !== undefined ? basisMatrix : (
// // // // //           <BasisMatrixCard b1={ctx.b1} b2={ctx.b2} />
// // // // //         );
// // // // //         const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
// // // // //           <ScenariosPanel
// // // // //             scenarios={scenarios || SCENARIOS}
// // // // //             groups={SCENARIO_GROUPS}
// // // // //             preset={ctx.preset}
// // // // //             onSelect={ctx.selectPreset}
// // // // //             visibleKeys={visibleScenarios}
// // // // //             columns={4}
// // // // //             badge="03"
// // // // //           />
// // // // //         );

// // // // //         if (typeof layout === 'function') {
// // // // //           return (
// // // // //             <AppShell extraCSS={TOOL_CSS} className={className} style={style} lede={null} scenarios={null}>
// // // // //               {layout(ctx)}
// // // // //             </AppShell>
// // // // //           );
// // // // //         }

// // // // //         return (
// // // // //           <AppShell
// // // // //             ledeCrumb={lede === undefined ? ledeCrumb : null}
// // // // //             ledeBody={lede === undefined ? ledeBody : null}
// // // // //             lede={lede}
// // // // //             chips={slotChips}
// // // // //             scenarios={null}
// // // // //             extraCSS={TOOL_CSS}
// // // // //             className={className}
// // // // //             style={style}
// // // // //           >
// // // // //             <main className="r2-main cols-2-wide">
// // // // //               <section className="r2-canvas-col">
// // // // //                 <div className="r2-canvas-wrap">{slotCanvas}</div>
// // // // //                 <div className="r2-readouts cols-3">
// // // // //                   <CanvasReadout kind="v"  label="v" value={Math2D.fmtPair(ctx.v)} />
// // // // //                   <CanvasReadout kind="b1" label="b" sub="1" value={Math2D.fmtPair(ctx.b1)} />
// // // // //                   <CanvasReadout kind="b2" label="b" sub="2" value={Math2D.fmtPair(ctx.b2)} />
// // // // //                 </div>
// // // // //                 {slotScenarios}
// // // // //               </section>
// // // // //               <section className="r2-info-col">
// // // // //                 {slotExp}
// // // // //                 {slotCoords}
// // // // //                 {slotMatrix}
// // // // //               </section>
// // // // //             </main>
// // // // //           </AppShell>
// // // // //         );
// // // // //       }}
// // // // //     </ChangeBasisCore>
// // // // //   );
// // // // // }


// // // // 'use client';

// // // // import { useState, useCallback } from 'react';
// // // // import {
// // // //   Math2D, SVGRender, projection, useDrag, DEFAULT_GEOM,
// // // //   AppShell, Card, LayerChips, CanvasReadout, ScenariosPanel, ExplanationCard,
// // // // } from '../2DCore';

// // // // // =====================================================================
// // // // //   SECTION 1  ::  Scenarios
// // // // // =====================================================================
// // // // const C30 = Math.cos(Math.PI / 6), S30 = Math.sin(Math.PI / 6);
// // // // const SQ = Math.SQRT1_2;

// // // // export const SCENARIOS = {
// // // //   standard: {
// // // //     label: 'Standard basis', b1: [1, 0], b2: [0, 1], group: 'natural', tag: 'identity',
// // // //     title: 'Standard basis', exTag: 'identity \u00B7 e\u2081, e\u2082',
// // // //     body: 'The default coordinate system. <span class="b1">b\u2081</span> = (1, 0), <span class="b2">b\u2082</span> = (0, 1). Coordinates in this basis match the standard coordinates of <span class="v">v</span> &mdash; they&apos;re the same numbers. The change-of-basis matrix is the identity.',
// // // //   },
// // // //   rotated30: {
// // // //     label: 'Rotated 30\u00B0', b1: [C30, S30], b2: [-S30, C30], group: 'natural', tag: '\u22A5 unit',
// // // //     title: 'Rotated by 30\u00B0', exTag: 'orthonormal \u00B7 rotation',
// // // //     body: 'A rotated orthonormal basis. <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> are still unit vectors at right angles &mdash; just turned. <span class="v">v</span> sits in the same place, but its new coordinates are <em>rotated in the opposite direction</em>. For orthonormal bases, <code>B\u207B\u00B9 = B\u1D40</code>.',
// // // //   },
// // // //   rotated45: {
// // // //     label: 'Rotated 45\u00B0', b1: [SQ, SQ], b2: [-SQ, SQ], group: 'natural', tag: '\u22A5 unit',
// // // //     title: 'Rotated by 45\u00B0', exTag: 'orthonormal \u00B7 diagonal axes',
// // // //     body: 'New axes lie along <code>y = x</code> and <code>y = \u2212x</code>. <span class="v">v</span> is unchanged; its coordinates simply trade Cartesian for diagonal. Both bases describe the same space &mdash; just from different angles.',
// // // //   },
// // // //   scaled: {
// // // //     label: 'Stretched axes', b1: [2, 0], b2: [0, 0.5], group: 'natural', tag: 'orth, non-unit',
// // // //     title: 'Stretched orthogonal basis', exTag: 'orthogonal \u00B7 not unit',
// // // //     body: 'Axes still perpendicular but no longer unit length. One coord-step along <span class="b1">b\u2081</span> covers 2 standard units; one along <span class="b2">b\u2082</span> covers 0.5. So <span class="v">v</span>&apos;s coordinates <em>shrink along b\u2081 and grow along b\u2082</em> relative to standard.',
// // // //   },
// // // //   skewed: {
// // // //     label: 'Skewed', b1: [1, 0.4], b2: [-0.3, 1], group: 'nonorth', tag: 'not \u22A5',
// // // //     title: 'Skewed basis', exTag: 'non-orthogonal \u00B7 valid',
// // // //     body: '<span class="b1">b\u2081</span> stays mostly horizontal and <span class="b2">b\u2082</span> tilts left. The basis is still <em>valid</em> &mdash; det &ne; 0 &mdash; just not perpendicular. The basis-grid (dashed) shows parallelograms instead of squares. <span class="v">v</span>&apos;s coordinates still exist uniquely.',
// // // //   },
// // // //   diagBasis: {
// // // //     label: 'Diagonals', b1: [1, 1], b2: [1, -1], group: 'nonorth', tag: '\u22A5 not unit',
// // // //     title: 'Diagonal basis', exTag: 'orthogonal \u00B7 longer than unit',
// // // //     body: 'Two perpendicular diagonals. Each basis vector has length <code>\u221A2</code>, so they&apos;re orthogonal but not <em>orthonormal</em>. <span class="v">v</span>&apos;s coordinates are scaled accordingly.',
// // // //   },
// // // //   obtuse: {
// // // //     label: 'Obtuse basis', b1: [1, 0.3], b2: [0.3, 1], group: 'nonorth', tag: 'wide angle',
// // // //     title: 'Wide-angle basis', exTag: 'non-orthogonal \u00B7 valid',
// // // //     body: 'Both <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> tilt toward each other. Still a valid basis. The parallelogram cells in the basis-grid become elongated rhombi.',
// // // //   },
// // // //   flipY: {
// // // //     label: 'Y flipped', b1: [1, 0], b2: [0, -1], group: 'special', tag: 'det \u22121',
// // // //     title: 'Y-axis flipped', exTag: 'orientation reversed',
// // // //     body: 'Same x-axis but y points down. <code>det B = \u22121</code> &mdash; the basis is left-handed instead of right-handed. <span class="v">v</span>&apos;s y-coord flips sign in this basis.',
// // // //   },
// // // //   swapped: {
// // // //     label: 'Axes swapped', b1: [0, 1], b2: [1, 0], group: 'special', tag: 'det \u22121',
// // // //     title: 'Axes swapped', exTag: '(b\u2081, b\u2082) \u2194',
// // // //     body: 'Just trade the two axes. <span class="b1">b\u2081</span> = (0, 1), <span class="b2">b\u2082</span> = (1, 0). <span class="v">v</span>&apos;s coordinates swap as well. <code>det B = \u22121</code> &mdash; swapping two basis vectors flips orientation.',
// // // //   },
// // // //   collinear: {
// // // //     label: 'Collinear (bad)', b1: [1, 0], b2: [2, 0], group: 'degenerate', tag: 'det = 0',
// // // //     title: 'Degenerate \u2014 not a basis', exTag: 'det = 0 \u00B7 linearly dependent',
// // // //     body: '<span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> both lie on the x-axis &mdash; they&apos;re multiples of each other. They <em>fail to span</em> the plane: any vector off the x-axis can&apos;t be written as a combination. <span class="warn">Coordinates are undefined.</span> A proper basis needs two linearly independent vectors.',
// // // //   },
// // // // };

// // // // export const SCENARIO_GROUPS = [
// // // //   { key: 'natural',    label: 'Natural',     tag: '\u22A5 axes',
// // // //     color: 'var(--b1)', softBg: 'var(--b1-tint)', border: 'var(--b1-line)' },
// // // //   { key: 'nonorth',    label: 'Non-orth',    tag: 'parallelogram',
// // // //     color: 'var(--b2)', softBg: 'var(--b2-tint)', border: 'var(--b2-line)' },
// // // //   { key: 'special',    label: 'Orientation', tag: 'det \u22121',
// // // //     color: 'var(--accent)', softBg: 'var(--accent-soft)', border: 'var(--accent-line)' },
// // // //   { key: 'degenerate', label: 'Degenerate',  tag: 'not a basis',
// // // //     color: 'var(--warn)', softBg: 'var(--warn-tint)', border: 'var(--warn-line)' },
// // // // ];

// // // // export const DEFAULT_LAYERS = { grid: true, bgrid: true, decomp: true, labels: true };

// // // // export const ALL_LAYER_DEFS = [
// // // //   { key: 'grid', label: 'std grid' },
// // // //   { key: 'bgrid', label: 'basis grid', swatch: 'linear-gradient(to right,#0e6e8a 50%,#5b34c4 50%)' },
// // // //   { key: 'decomp', label: 'decomposition' },
// // // //   { key: 'labels', label: 'labels' },
// // // // ];

// // // // // =====================================================================
// // // // //   SECTION 1b  ::  Custom geom for this tool (560 x 460 rendered)
// // // // // =====================================================================
// // // // // SVG viewBox 700 x 575 -> 700/575 == 560/460, so the SVG fills the
// // // // // 560 x 460 container exactly with no letterboxing. gridRy=5 keeps the
// // // // // grid extent clean (integer ticks); the canvas just has a touch of
// // // // // breathing room above/below the grid.
// // // // export const CB_GEOM = { width: 700, height: 575, scale: 50, gridRx: 7, gridRy: 5 };

// // // // // =====================================================================
// // // // //   SECTION 1c  ::  Animation steps (placeholder; wire to behavior later)
// // // // // =====================================================================
// // // // export const DEFAULT_ANIM_STEPS = [
// // // //   { num: '01', label: 'Start' },
// // // //   { num: '02', label: 'Tilt b\u2081' },
// // // //   { num: '03', label: 'Tilt b\u2082' },
// // // //   { num: '04', label: 'Settle' },
// // // // ];

// // // // const DEFAULT_LEDE = {
// // // //   crumb: 'Linear Algebra<span class="r2-dot">&middot;</span>Change of basis',
// // // //   body: 'Same vector, different numbers. Drag <span class="b1"><strong>b\u2081</strong></span> and <span class="b2"><strong>b\u2082</strong></span> to define a new basis &mdash; <span class="v">v</span> stays put in space, but its coordinates <code>(c\u2081, c\u2082)</code> shift to express <code>v = c\u2081\u00B7b\u2081 + c\u2082\u00B7b\u2082</code>. The basis grid (dashed) shows what the new coordinate system looks like.',
// // // // };

// // // // // =====================================================================
// // // // //   SECTION 2  ::  Tool-specific CSS
// // // // // =====================================================================
// // // // const TOOL_CSS = `
// // // // /* ---- app width override: 1300 ---- */
// // // // .r2-root .r2-app{max-width:1300px}

// // // // /* ---- new 2-col layout: 760px canvas-col, info grows ---- */
// // // // .r2-main.cb-cols{grid-template-columns:760px minmax(360px,1fr)}
// // // // @media (max-width:1100px){
// // // //   .r2-main.cb-cols{grid-template-columns:minmax(0,760px);justify-content:center}
// // // // }

// // // // /* ---- canvas: 100px padding each side, height 100 less than width ---- */
// // // // .cb-canvas-wrap{padding:0 100px;width:100%;display:flex;align-items:center;justify-content:center}
// // // // .cb-canvas-wrap .r2-canvas{aspect-ratio:700/575;height:auto}

// // // // /* ---- basis grid + decomposition + arrows ---- */
// // // // .cb-bgrid-1{stroke:var(--b1);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // // // .cb-bgrid-1.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // // // .cb-bgrid-2{stroke:var(--b2);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // // // .cb-bgrid-2.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // // // .cb-decomp-leg1{stroke:var(--b1);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // // // .cb-decomp-leg2{stroke:var(--b2);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // // // .cb-decomp-corner{fill:var(--text-faint);stroke:none}
// // // // .cb-v-shaft{stroke:var(--v);stroke-width:2.5;fill:none;stroke-linecap:round}
// // // // .cb-b1-shaft{stroke:var(--b1);stroke-width:2.4;fill:none;stroke-linecap:round}
// // // // .cb-b2-shaft{stroke:var(--b2);stroke-width:2.4;fill:none;stroke-linecap:round}
// // // // .cb-v-handle{fill:var(--v);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // // .cb-b1-handle{fill:var(--b1);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // // .cb-b2-handle{fill:var(--b2);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // // .cb-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
// // // // .cb-b1-label{fill:var(--b1);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // // // .cb-b2-label{fill:var(--b2);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // // // .cb-singular-warn{fill:var(--warn);font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:.05em}

// // // // /* ---- coordinates card ---- */
// // // // .cb-coord-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:6px 0;flex-wrap:wrap}
// // // // .cb-coord-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;color:var(--text)}
// // // // .cb-coord-lab .sub{font-size:11px;vertical-align:sub;font-weight:400;color:var(--text-faint)}
// // // // .cb-coord-lab.v{color:var(--v)}
// // // // .cb-coord-op{color:var(--text-faint);font-size:13px}
// // // // .cb-vec{display:flex;flex-direction:column;gap:2px;padding:6px 10px;position:relative;font-family:var(--font-mono);font-size:13px}
// // // // .cb-vec::before,.cb-vec::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // // // .cb-vec::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // // // .cb-vec::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // // // .cb-vec .cell{text-align:center;min-width:38px;padding:0 4px;font-variant-numeric:tabular-nums;font-weight:500}
// // // // .cb-vec.std .cell{color:var(--v)}
// // // // .cb-vec.nb .cell.c1{color:var(--b1)}
// // // // .cb-vec.nb .cell.c2{color:var(--b2)}

// // // // .cb-decomp-eq{
// // // //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// // // //   text-align:center;padding:10px 0 2px;margin-top:8px;
// // // //   border-top:1px solid var(--border);letter-spacing:.02em;
// // // // }
// // // // .cb-decomp-eq .v{color:var(--v);font-weight:600}
// // // // .cb-decomp-eq .c1{color:var(--b1);font-weight:600}
// // // // .cb-decomp-eq .c2{color:var(--b2);font-weight:600}
// // // // .cb-decomp-eq .b1n{color:var(--b1);font-family:var(--font-display);font-style:italic;font-weight:500}
// // // // .cb-decomp-eq .b2n{color:var(--b2);font-family:var(--font-display);font-style:italic;font-weight:500}

// // // // /* ---- basis-matrix card ---- */
// // // // .cb-bmat-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:5px 0;flex-wrap:wrap}
// // // // .cb-bmat-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
// // // // .cb-bmat-lab.inv::after{content:'\\207B\\00B9';font-size:11px;vertical-align:super;font-weight:400}
// // // // .cb-bmat-eq{color:var(--text-faint);font-size:14px}
// // // // .cb-bmat{display:grid;gap:3px 12px;padding:7px 10px;position:relative;font-family:var(--font-mono);font-size:13.5px;grid-template-columns:auto auto}
// // // // .cb-bmat::before,.cb-bmat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // // // .cb-bmat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // // // .cb-bmat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // // // .cb-bmat .cell{text-align:center;min-width:38px;padding:1px 3px;font-variant-numeric:tabular-nums;font-weight:600}
// // // // .cb-bmat .cell.c1{color:var(--b1)}
// // // // .cb-bmat .cell.c2{color:var(--b2)}
// // // // .cb-bmat.singular .cell{color:var(--warn)}
// // // // .cb-det-line{
// // // //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// // // //   text-align:center;padding:10px 0 2px;margin-top:6px;
// // // //   border-top:1px solid var(--border);letter-spacing:.02em;
// // // // }
// // // // .cb-det-line .val{color:var(--text);font-weight:600;font-variant-numeric:tabular-nums}
// // // // .cb-det-line .val.warn{color:var(--warn)}
// // // // .cb-det-line .kind{font-weight:500;margin-left:2px}

// // // // /* ---- animation panel ---- */
// // // // .cb-anim-card{padding:12px 14px}
// // // // .cb-anim-head{
// // // //   font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
// // // //   color:var(--text-faint);margin-bottom:10px;display:flex;align-items:center;
// // // // }
// // // // .cb-anim-head .r2-badge{color:var(--accent);margin-right:6px}
// // // // .cb-anim-steps{display:flex;gap:6px;align-items:center;margin-bottom:10px}
// // // // .cb-step-btn{
// // // //   flex:1;background:var(--surface-2);border:1px solid var(--border);
// // // //   padding:6px 8px;border-radius:4px;font-family:var(--font-mono);font-size:10.5px;
// // // //   letter-spacing:.04em;color:var(--text-dim);font-weight:600;cursor:pointer;text-align:center;
// // // //   white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .12s;
// // // // }
// // // // .cb-step-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// // // // .cb-step-btn.active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
// // // // .cb-step-btn .num{display:block;font-size:9px;color:var(--text-faint);margin-bottom:2px;letter-spacing:.1em}
// // // // .cb-step-btn.active .num{color:var(--accent)}
// // // // .cb-anim-progress{
// // // //   height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px;
// // // // }
// // // // .cb-anim-progress .fill{
// // // //   position:absolute;left:0;top:0;bottom:0;
// // // //   background:linear-gradient(90deg,var(--b1),var(--b2));border-radius:3px;
// // // //   transition:width .2s;
// // // // }
// // // // .cb-anim-controls{display:flex;gap:6px;align-items:center}
// // // // .cb-anim-ctrl{
// // // //   background:var(--surface-2);border:1px solid var(--border);
// // // //   width:30px;height:28px;border-radius:4px;cursor:pointer;
// // // //   font-family:var(--font-mono);font-size:12px;color:var(--text-dim);font-weight:600;
// // // //   display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;
// // // // }
// // // // .cb-anim-ctrl:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// // // // .cb-anim-ctrl.play{
// // // //   background:var(--accent);border-color:var(--accent);color:#fff;
// // // //   width:auto;padding:0 14px;letter-spacing:.08em;font-size:10.5px;text-transform:uppercase;
// // // // }
// // // // .cb-anim-ctrl.play:hover{background:var(--accent-hover);color:#fff;border-color:var(--accent-hover)}
// // // // .cb-anim-time{
// // // //   font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
// // // //   font-variant-numeric:tabular-nums;margin-left:6px;
// // // // }
// // // // .cb-anim-ctrl.reset{margin-left:auto;width:auto;padding:0 10px;gap:6px;display:inline-flex;align-items:center}
// // // // .cb-anim-ctrl.reset .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
// // // // .cb-anim-ctrl.reset svg{display:block}
// // // // `;

// // // // // =====================================================================
// // // // //   SECTION 3  ::  Hook
// // // // // =====================================================================
// // // // export function useChangeBasisState(options = {}) {
// // // //   const {
// // // //     initialB1 = [1, 0],
// // // //     initialB2 = [0, 1],
// // // //     initialV = [2.5, 1.5],
// // // //     initialPreset = 'standard',
// // // //     initialLayers = DEFAULT_LAYERS,
// // // //     scenarios = SCENARIOS,
// // // //   } = options;

// // // //   const [b1, setB1Internal] = useState(initialB1);
// // // //   const [b2, setB2Internal] = useState(initialB2);
// // // //   const [v, setV] = useState(initialV);
// // // //   const [preset, setPresetInternal] = useState(initialPreset);
// // // //   const [layers, setLayers] = useState(initialLayers);

// // // //   const setB1 = useCallback((next) => { setB1Internal(next); setPresetInternal(null); }, []);
// // // //   const setB2 = useCallback((next) => { setB2Internal(next); setPresetInternal(null); }, []);

// // // //   const selectPreset = useCallback((key) => {
// // // //     const sc = scenarios[key];
// // // //     if (!sc) return;
// // // //     setB1Internal(sc.b1.slice());
// // // //     setB2Internal(sc.b2.slice());
// // // //     setPresetInternal(key);
// // // //   }, [scenarios]);

// // // //   return { b1, b2, v, preset, layers, setB1, setB2, setV, selectPreset, setLayers };
// // // // }

// // // // // =====================================================================
// // // // //   SECTION 4  ::  Tool-specific SVG helpers
// // // // // =====================================================================
// // // // function decompositionSVG(b1, b2, v, geom) {
// // // //   const c = Math2D.coordsInBasis(b1, b2, v);
// // // //   if (!c) return '';
// // // //   const tx = projection(geom);
// // // //   const [ox, oy] = tx([0, 0]);
// // // //   const leg1End = [c[0] * b1[0], c[0] * b1[1]];
// // // //   const [l1x, l1y] = tx(leg1End);
// // // //   const [vx, vy] = tx(v);
// // // //   let s = '';
// // // //   s += `<line class="cb-decomp-leg1" x1="${ox}" y1="${oy}" x2="${l1x.toFixed(2)}" y2="${l1y.toFixed(2)}"/>`;
// // // //   s += `<line class="cb-decomp-leg2" x1="${l1x.toFixed(2)}" y1="${l1y.toFixed(2)}" x2="${vx.toFixed(2)}" y2="${vy.toFixed(2)}"/>`;
// // // //   s += `<circle class="cb-decomp-corner" cx="${l1x.toFixed(2)}" cy="${l1y.toFixed(2)}" r="3"/>`;
// // // //   return s;
// // // // }

// // // // function arrowSVG(p, kind, label, showLabel, geom) {
// // // //   const tx = projection(geom);
// // // //   const [ox, oy] = tx([0, 0]);
// // // //   const mag = Math.hypot(p[0], p[1]);
// // // //   let s = '';
// // // //   if (mag < 0.02) {
// // // //     s += `<circle class="cb-${kind}-handle" cx="${ox}" cy="${oy}" r="5.5"/>`;
// // // //     return s;
// // // //   }
// // // //   const [tipX, tipY] = tx(p);
// // // //   s += `<line class="cb-${kind}-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#cb-arr-${kind})"/>`;
// // // //   s += `<circle class="cb-${kind}-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5.5"/>`;
// // // //   if (showLabel) {
// // // //     const lx = p[0] + (p[0] >= 0 ? 0.35 : -0.35);
// // // //     const ly = p[1] + (p[1] >= 0 ? 0.35 : -0.35);
// // // //     const [px, py] = tx([lx, ly]);
// // // //     s += `<text class="cb-${kind}-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
// // // //   }
// // // //   return s;
// // // // }

// // // // // =====================================================================
// // // // //   SECTION 5  ::  Sub-components
// // // // // =====================================================================
// // // // export function BasisCanvas({
// // // //   b1 = [1, 0],
// // // //   b2 = [0, 1],
// // // //   v = [2.5, 1.5],
// // // //   layers = DEFAULT_LAYERS,
// // // //   geom = CB_GEOM,
// // // //   onB1Change,
// // // //   onB2Change,
// // // //   onVChange,
// // // //   className,
// // // //   style,
// // // // }) {
// // // //   const { svgRef, isDragging, handlers } = useDrag({
// // // //     geom,
// // // //     onDrag: (h, p) => {
// // // //       if (h === 'v' && onVChange) onVChange(p);
// // // //       else if (h === 'b1' && onB1Change) onB1Change(p);
// // // //       else if (h === 'b2' && onB2Change) onB2Change(p);
// // // //     },
// // // //   });

// // // //   let inner = '';
// // // //   if (layers.grid) inner += SVGRender.grid(geom);
// // // //   if (layers.bgrid) inner += SVGRender.basisGrid(b1, b2, geom, 'cb-bgrid-1', 'cb-bgrid-2');
// // // //   if (layers.decomp) inner += decompositionSVG(b1, b2, v, geom);
// // // //   inner += arrowSVG(b1, 'b1', '\u0062\u2081', layers.labels, geom);
// // // //   inner += arrowSVG(b2, 'b2', '\u0062\u2082', layers.labels, geom);
// // // //   inner += arrowSVG(v, 'v', 'v', layers.labels, geom);
// // // //   inner += SVGRender.origin(geom);

// // // //   const singular = Math.abs(Math2D.det(Math2D.basisMatrix(b1, b2))) < 1e-7;
// // // //   if (singular) {
// // // //     inner += `<text class="cb-singular-warn" x="${geom.width / 2}" y="30" text-anchor="middle">basis is singular \u2014 coords undefined</text>`;
// // // //   }

// // // //   const tx = projection(geom);
// // // //   const [vx, vy] = tx(v);
// // // //   const [b1x, b1y] = tx(b1);
// // // //   const [b2x, b2y] = tx(b2);

// // // //   return (
// // // //     <svg
// // // //       ref={svgRef}
// // // //       className={'r2-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
// // // //       style={style}
// // // //       viewBox={`0 0 ${geom.width} ${geom.height}`}
// // // //       xmlns="http://www.w3.org/2000/svg"
// // // //       {...handlers}
// // // //     >
// // // //       <defs>
// // // //         <marker id="cb-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#b54708" />
// // // //         </marker>
// // // //         <marker id="cb-arr-b1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0e6e8a" />
// // // //         </marker>
// // // //         <marker id="cb-arr-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#5b34c4" />
// // // //         </marker>
// // // //       </defs>
// // // //       <g dangerouslySetInnerHTML={{ __html: inner }} />
// // // //       {onB1Change && <circle className="r2-tip-hit" data-handle="b1" cx={b1x} cy={b1y} r={14} />}
// // // //       {onB2Change && <circle className="r2-tip-hit" data-handle="b2" cx={b2x} cy={b2y} r={14} />}
// // // //       {onVChange  && <circle className="r2-tip-hit" data-handle="v"  cx={vx}  cy={vy}  r={14} />}
// // // //     </svg>
// // // //   );
// // // // }

// // // // export function CoordinatesCard({ b1 = [1, 0], b2 = [0, 1], v = [2.5, 1.5] }) {
// // // //   const c = Math2D.coordsInBasis(b1, b2, v);
// // // //   const singular = !c;
// // // //   return (
// // // //     <Card badge="01" title="Coordinates of v" note="in two bases">
// // // //       <div className="cb-coord-row">
// // // //         <span className="cb-coord-lab v">v<span className="sub">std</span></span>
// // // //         <span className="cb-coord-op">=</span>
// // // //         <div className="cb-vec std">
// // // //           <span className="cell">{Math2D.fmt(v[0])}</span>
// // // //           <span className="cell">{Math2D.fmt(v[1])}</span>
// // // //         </div>
// // // //       </div>
// // // //       <div className="cb-coord-row">
// // // //         <span className="cb-coord-lab">v<span className="sub">B</span></span>
// // // //         <span className="cb-coord-op">=</span>
// // // //         <div className="cb-vec nb">
// // // //           <span className="cell c1">{c ? Math2D.fmt(c[0]) : '\u2014'}</span>
// // // //           <span className="cell c2">{c ? Math2D.fmt(c[1]) : '\u2014'}</span>
// // // //         </div>
// // // //       </div>
// // // //       <div className="cb-decomp-eq">
// // // //         <span className="v">v</span> = <span className="c1">{c ? Math2D.fmt(c[0]) : '?'}</span>
// // // //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// // // //         <span className="b1n">b&#8321;</span> + <span className="c2">{c ? Math2D.fmt(c[1]) : '?'}</span>
// // // //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// // // //         <span className="b2n">b&#8322;</span>
// // // //       </div>
// // // //       {singular && (
// // // //         <div className="r2-status-strip warn">
// // // //           <span className="r2-status-badge">!</span>
// // // //           <span>Basis is singular &mdash; b&#8321; and b&#8322; are linearly dependent. Coordinates undefined.</span>
// // // //         </div>
// // // //       )}
// // // //     </Card>
// // // //   );
// // // // }

// // // // export function BasisMatrixCard({ b1 = [1, 0], b2 = [0, 1] }) {
// // // //   const B = Math2D.basisMatrix(b1, b2);
// // // //   const Binv = Math2D.inverse(B);
// // // //   const dB = Math2D.det(B);
// // // //   const singular = Math.abs(dB) < 1e-7;
// // // //   const orth = Math2D.orthInfo(b1, b2);
// // // //   let orthLabel = 'oblique';
// // // //   let orthColor = 'var(--text-dim)';
// // // //   if (orth.kind === 'singular') { orthLabel = 'not a basis'; orthColor = 'var(--warn)'; }
// // // //   else if (orth.kind === 'orthonormal') { orthLabel = 'orthonormal'; orthColor = 'var(--b1)'; }
// // // //   else if (orth.kind === 'orthogonal') { orthLabel = 'orthogonal (not unit)'; orthColor = 'var(--b1)'; }
// // // //   else if (orth.kind === 'oblique') { orthLabel = `oblique, ${Math2D.fmt(orth.angle)}\u00B0`; orthColor = 'var(--b2)'; }
// // // //   return (
// // // //     <Card badge="02" title="Change-of-basis matrix" note="columns = b₁, b₂">
// // // //       <div className="cb-bmat-row">
// // // //         <span className="cb-bmat-lab">B</span>
// // // //         <span className="cb-bmat-eq">=</span>
// // // //         <div className={'cb-bmat' + (singular ? ' singular' : '')}>
// // // //           <span className="cell c1">{Math2D.fmt(B[0][0])}</span>
// // // //           <span className="cell c2">{Math2D.fmt(B[0][1])}</span>
// // // //           <span className="cell c1">{Math2D.fmt(B[1][0])}</span>
// // // //           <span className="cell c2">{Math2D.fmt(B[1][1])}</span>
// // // //         </div>
// // // //       </div>
// // // //       <div className="cb-bmat-row">
// // // //         <span className="cb-bmat-lab inv">B</span>
// // // //         <span className="cb-bmat-eq">=</span>
// // // //         <div className={'cb-bmat' + (Binv ? '' : ' singular')}>
// // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][0]) : '\u2014'}</span>
// // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][1]) : '\u2014'}</span>
// // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][0]) : '\u2014'}</span>
// // // //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][1]) : '\u2014'}</span>
// // // //         </div>
// // // //       </div>
// // // //       <div className="cb-det-line">
// // // //         det B = <span className={'val' + (singular ? ' warn' : '')}>{Math2D.fmt(dB)}</span>
// // // //         &nbsp;&middot;&nbsp;
// // // //         <span className="kind" style={{ color: orthColor }}>{orthLabel}</span>
// // // //       </div>
// // // //     </Card>
// // // //   );
// // // // }

// // // // export function AnimationCard({
// // // //   steps = DEFAULT_ANIM_STEPS,
// // // //   step = 0,
// // // //   progress = 0,
// // // //   isPlaying = false,
// // // //   onStep,
// // // //   onPlayToggle,
// // // //   onPrev,
// // // //   onNext,
// // // //   onReset,
// // // //   duration = 1,
// // // // }) {
// // // //   const pct = Math.max(0, Math.min(1, progress)) * 100;
// // // //   const time = (progress * duration).toFixed(2);
// // // //   const total = duration.toFixed(2);
// // // //   return (
// // // //     <div className="r2-card cb-anim-card">
// // // //       <div className="cb-anim-head"><span className="r2-badge">&#9656;</span>Animation</div>
// // // //       <div className="cb-anim-steps">
// // // //         {steps.map((s, i) => (
// // // //           <button
// // // //             key={i}
// // // //             className={'cb-step-btn' + (i === step ? ' active' : '')}
// // // //             onClick={() => onStep && onStep(i)}
// // // //             type="button"
// // // //           >
// // // //             <span className="num">{s.num}</span>{s.label}
// // // //           </button>
// // // //         ))}
// // // //       </div>
// // // //       <div className="cb-anim-progress">
// // // //         <div className="fill" style={{ width: pct + '%' }} />
// // // //       </div>
// // // //       <div className="cb-anim-controls">
// // // //         <button className="cb-anim-ctrl" title="Previous step" onClick={onPrev} type="button">&#9664;</button>
// // // //         <button className="cb-anim-ctrl play" onClick={onPlayToggle} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
// // // //         <button className="cb-anim-ctrl" title="Next step" onClick={onNext} type="button">&#9654;</button>
// // // //         <span className="cb-anim-time">{time} / {total}</span>
// // // //         <button className="cb-anim-ctrl reset" title="Reset" onClick={onReset} type="button">
// // // //           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// // // //             <path d="M3 12a9 9 0 1 0 3-6.7" />
// // // //             <polyline points="3 4 3 10 9 10" />
// // // //           </svg>
// // // //           <span className="lbl">Reset</span>
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // // =====================================================================
// // // // //   SECTION 6  ::  Animation state hook (placeholder; no tick yet)
// // // // // =====================================================================
// // // // export function useAnimState(options = {}) {
// // // //   const { initialStep = 0, initialProgress = 0, initialPlaying = false } = options;
// // // //   const [step, setStep] = useState(initialStep);
// // // //   const [progress, setProgress] = useState(initialProgress);
// // // //   const [isPlaying, setIsPlaying] = useState(initialPlaying);

// // // //   const playToggle = useCallback(() => setIsPlaying((p) => !p), []);
// // // //   const reset = useCallback(() => { setStep(0); setProgress(0); setIsPlaying(false); }, []);
// // // //   const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
// // // //   const next = useCallback(() => setStep((s) => s + 1), []);

// // // //   return { step, progress, isPlaying, setStep, setProgress, setIsPlaying, playToggle, reset, prev, next };
// // // // }

// // // // // =====================================================================
// // // // //   SECTION 7  ::  Core + Wrapper
// // // // // =====================================================================
// // // // export function ChangeBasisCore({
// // // //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// // // //   children,
// // // // }) {
// // // //   const state = useChangeBasisState({ initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios });
// // // //   if (typeof children === 'function') return children(state);
// // // //   return null;
// // // // }

// // // // export default function ChangeBasis({
// // // //   lede,
// // // //   ledeCrumb = DEFAULT_LEDE.crumb,
// // // //   ledeBody = DEFAULT_LEDE.body,
// // // //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// // // //   layerChips, canvas, explanation, coordinates, basisMatrix, scenariosPanel, animation,
// // // //   visibleScenarios, enabledLayers, explanationOverride,
// // // //   animSteps = DEFAULT_ANIM_STEPS,
// // // //   layout,
// // // //   className, style,
// // // // }) {
// // // //   const anim = useAnimState();

// // // //   return (
// // // //     <ChangeBasisCore
// // // //       initialB1={initialB1}
// // // //       initialB2={initialB2}
// // // //       initialV={initialV}
// // // //       initialPreset={initialPreset}
// // // //       initialLayers={initialLayers}
// // // //       scenarios={scenarios}
// // // //     >
// // // //       {(ctx) => {
// // // //         const slotChips = layerChips !== undefined ? layerChips : (
// // // //           <LayerChips layers={ctx.layers} onChange={ctx.setLayers} defs={ALL_LAYER_DEFS} enabled={enabledLayers} />
// // // //         );
// // // //         const slotCanvas = canvas !== undefined ? canvas : (
// // // //           <BasisCanvas
// // // //             b1={ctx.b1} b2={ctx.b2} v={ctx.v}
// // // //             layers={ctx.layers}
// // // //             geom={CB_GEOM}
// // // //             onB1Change={ctx.setB1}
// // // //             onB2Change={ctx.setB2}
// // // //             onVChange={ctx.setV}
// // // //           />
// // // //         );
// // // //         const slotExp = explanation !== undefined ? explanation : (
// // // //           <ExplanationCard
// // // //             preset={ctx.preset}
// // // //             scenarios={scenarios || SCENARIOS}
// // // //             override={explanationOverride}
// // // //           />
// // // //         );
// // // //         const slotCoords = coordinates !== undefined ? coordinates : (
// // // //           <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v} />
// // // //         );
// // // //         const slotMatrix = basisMatrix !== undefined ? basisMatrix : (
// // // //           <BasisMatrixCard b1={ctx.b1} b2={ctx.b2} />
// // // //         );
// // // //         const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
// // // //           <ScenariosPanel
// // // //             scenarios={scenarios || SCENARIOS}
// // // //             groups={SCENARIO_GROUPS}
// // // //             preset={ctx.preset}
// // // //             onSelect={ctx.selectPreset}
// // // //             visibleKeys={visibleScenarios}
// // // //             columns={4}
// // // //             badge="03"
// // // //           />
// // // //         );
// // // //         const slotAnim = animation !== undefined ? animation : (
// // // //           <AnimationCard
// // // //             steps={animSteps}
// // // //             step={anim.step}
// // // //             progress={anim.progress}
// // // //             isPlaying={anim.isPlaying}
// // // //             onStep={anim.setStep}
// // // //             onPlayToggle={anim.playToggle}
// // // //             onPrev={anim.prev}
// // // //             onNext={anim.next}
// // // //             onReset={anim.reset}
// // // //           />
// // // //         );

// // // //         if (typeof layout === 'function') {
// // // //           return (
// // // //             <AppShell extraCSS={TOOL_CSS} className={className} style={style} lede={null} scenarios={null}>
// // // //               {layout(ctx)}
// // // //             </AppShell>
// // // //           );
// // // //         }

// // // //         return (
// // // //           <AppShell
// // // //             ledeCrumb={lede === undefined ? ledeCrumb : null}
// // // //             ledeBody={lede === undefined ? ledeBody : null}
// // // //             lede={lede}
// // // //             scenarios={null}
// // // //             extraCSS={TOOL_CSS}
// // // //             className={className}
// // // //             style={style}
// // // //           >
// // // //             <main className="r2-main cb-cols">
// // // //               <section className="r2-canvas-col">
// // // //                 <div className="cb-canvas-wrap">{slotCanvas}</div>
// // // //                 <div className="r2-readouts cols-3">
// // // //                   <CanvasReadout kind="v"  label="v" value={Math2D.fmtPair(ctx.v)} />
// // // //                   <CanvasReadout kind="b1" label="b" sub="1" value={Math2D.fmtPair(ctx.b1)} />
// // // //                   <CanvasReadout kind="b2" label="b" sub="2" value={Math2D.fmtPair(ctx.b2)} />
// // // //                 </div>
// // // //                 {slotScenarios}
// // // //               </section>
// // // //               <section className="r2-info-col">
// // // //                 {slotExp}
// // // //                 {slotChips}
// // // //                 {slotAnim}
// // // //                 {slotCoords}
// // // //                 {slotMatrix}
// // // //               </section>
// // // //             </main>
// // // //           </AppShell>
// // // //         );
// // // //       }}
// // // //     </ChangeBasisCore>
// // // //   );
// // // // }


// // // 'use client';

// // // import { useState, useCallback } from 'react';
// // // import {
// // //   Math2D, SVGRender, projection, useDrag, DEFAULT_GEOM,
// // //   AppShell, Card, LayerChips, CanvasReadout, ScenariosPanel, ExplanationCard,
// // // } from '../2DCore';

// // // // =====================================================================
// // // //   SECTION 1  ::  Scenarios
// // // // =====================================================================
// // // const C30 = Math.cos(Math.PI / 6), S30 = Math.sin(Math.PI / 6);
// // // const SQ = Math.SQRT1_2;

// // // export const SCENARIOS = {
// // //   standard: {
// // //     label: 'Standard basis', b1: [1, 0], b2: [0, 1], group: 'natural', tag: 'identity',
// // //     title: 'Standard basis', exTag: 'identity \u00B7 e\u2081, e\u2082',
// // //     body: 'The default coordinate system. <span class="b1">b\u2081</span> = (1, 0), <span class="b2">b\u2082</span> = (0, 1). Coordinates in this basis match the standard coordinates of <span class="v">v</span> &mdash; they&apos;re the same numbers. The change-of-basis matrix is the identity.',
// // //   },
// // //   rotated30: {
// // //     label: 'Rotated 30\u00B0', b1: [C30, S30], b2: [-S30, C30], group: 'natural', tag: '\u22A5 unit',
// // //     title: 'Rotated by 30\u00B0', exTag: 'orthonormal \u00B7 rotation',
// // //     body: 'A rotated orthonormal basis. <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> are still unit vectors at right angles &mdash; just turned. <span class="v">v</span> sits in the same place, but its new coordinates are <em>rotated in the opposite direction</em>. For orthonormal bases, <code>B\u207B\u00B9 = B\u1D40</code>.',
// // //   },
// // //   rotated45: {
// // //     label: 'Rotated 45\u00B0', b1: [SQ, SQ], b2: [-SQ, SQ], group: 'natural', tag: '\u22A5 unit',
// // //     title: 'Rotated by 45\u00B0', exTag: 'orthonormal \u00B7 diagonal axes',
// // //     body: 'New axes lie along <code>y = x</code> and <code>y = \u2212x</code>. <span class="v">v</span> is unchanged; its coordinates simply trade Cartesian for diagonal. Both bases describe the same space &mdash; just from different angles.',
// // //   },
// // //   scaled: {
// // //     label: 'Stretched axes', b1: [2, 0], b2: [0, 0.5], group: 'natural', tag: 'orth, non-unit',
// // //     title: 'Stretched orthogonal basis', exTag: 'orthogonal \u00B7 not unit',
// // //     body: 'Axes still perpendicular but no longer unit length. One coord-step along <span class="b1">b\u2081</span> covers 2 standard units; one along <span class="b2">b\u2082</span> covers 0.5. So <span class="v">v</span>&apos;s coordinates <em>shrink along b\u2081 and grow along b\u2082</em> relative to standard.',
// // //   },
// // //   skewed: {
// // //     label: 'Skewed', b1: [1, 0.4], b2: [-0.3, 1], group: 'nonorth', tag: 'not \u22A5',
// // //     title: 'Skewed basis', exTag: 'non-orthogonal \u00B7 valid',
// // //     body: '<span class="b1">b\u2081</span> stays mostly horizontal and <span class="b2">b\u2082</span> tilts left. The basis is still <em>valid</em> &mdash; det &ne; 0 &mdash; just not perpendicular. The basis-grid (dashed) shows parallelograms instead of squares. <span class="v">v</span>&apos;s coordinates still exist uniquely.',
// // //   },
// // //   diagBasis: {
// // //     label: 'Diagonals', b1: [1, 1], b2: [1, -1], group: 'nonorth', tag: '\u22A5 not unit',
// // //     title: 'Diagonal basis', exTag: 'orthogonal \u00B7 longer than unit',
// // //     body: 'Two perpendicular diagonals. Each basis vector has length <code>\u221A2</code>, so they&apos;re orthogonal but not <em>orthonormal</em>. <span class="v">v</span>&apos;s coordinates are scaled accordingly.',
// // //   },
// // //   obtuse: {
// // //     label: 'Obtuse basis', b1: [1, 0.3], b2: [0.3, 1], group: 'nonorth', tag: 'wide angle',
// // //     title: 'Wide-angle basis', exTag: 'non-orthogonal \u00B7 valid',
// // //     body: 'Both <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> tilt toward each other. Still a valid basis. The parallelogram cells in the basis-grid become elongated rhombi.',
// // //   },
// // //   flipY: {
// // //     label: 'Y flipped', b1: [1, 0], b2: [0, -1], group: 'special', tag: 'det \u22121',
// // //     title: 'Y-axis flipped', exTag: 'orientation reversed',
// // //     body: 'Same x-axis but y points down. <code>det B = \u22121</code> &mdash; the basis is left-handed instead of right-handed. <span class="v">v</span>&apos;s y-coord flips sign in this basis.',
// // //   },
// // //   swapped: {
// // //     label: 'Axes swapped', b1: [0, 1], b2: [1, 0], group: 'special', tag: 'det \u22121',
// // //     title: 'Axes swapped', exTag: '(b\u2081, b\u2082) \u2194',
// // //     body: 'Just trade the two axes. <span class="b1">b\u2081</span> = (0, 1), <span class="b2">b\u2082</span> = (1, 0). <span class="v">v</span>&apos;s coordinates swap as well. <code>det B = \u22121</code> &mdash; swapping two basis vectors flips orientation.',
// // //   },
// // //   collinear: {
// // //     label: 'Collinear (bad)', b1: [1, 0], b2: [2, 0], group: 'degenerate', tag: 'det = 0',
// // //     title: 'Degenerate \u2014 not a basis', exTag: 'det = 0 \u00B7 linearly dependent',
// // //     body: '<span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> both lie on the x-axis &mdash; they&apos;re multiples of each other. They <em>fail to span</em> the plane: any vector off the x-axis can&apos;t be written as a combination. <span class="warn">Coordinates are undefined.</span> A proper basis needs two linearly independent vectors.',
// // //   },
// // // };

// // // export const SCENARIO_GROUPS = [
// // //   { key: 'natural',    label: 'Natural',     tag: '\u22A5 axes',
// // //     color: 'var(--b1)', softBg: 'var(--b1-tint)', border: 'var(--b1-line)' },
// // //   { key: 'nonorth',    label: 'Non-orth',    tag: 'parallelogram',
// // //     color: 'var(--b2)', softBg: 'var(--b2-tint)', border: 'var(--b2-line)' },
// // //   { key: 'special',    label: 'Orientation', tag: 'det \u22121',
// // //     color: 'var(--accent)', softBg: 'var(--accent-soft)', border: 'var(--accent-line)' },
// // //   { key: 'degenerate', label: 'Degenerate',  tag: 'not a basis',
// // //     color: 'var(--warn)', softBg: 'var(--warn-tint)', border: 'var(--warn-line)' },
// // // ];

// // // export const DEFAULT_LAYERS = { grid: true, bgrid: true, decomp: true, labels: true };

// // // export const ALL_LAYER_DEFS = [
// // //   { key: 'grid', label: 'std grid' },
// // //   { key: 'bgrid', label: 'basis grid', swatch: 'linear-gradient(to right,#0e6e8a 50%,#5b34c4 50%)' },
// // //   { key: 'decomp', label: 'decomposition' },
// // //   { key: 'labels', label: 'labels' },
// // // ];

// // // // =====================================================================
// // // //   SECTION 1b  ::  Geom (square canvas, 7x7 grid extent)
// // // // =====================================================================
// // // export const CB_GEOM = { width: 700, height: 700, scale: 50, gridRx: 7, gridRy: 7 };

// // // // =====================================================================
// // // //   SECTION 1c  ::  Animation steps (placeholder)
// // // // =====================================================================
// // // export const DEFAULT_ANIM_STEPS = [
// // //   { num: '01', label: 'Start' },
// // //   { num: '02', label: 'Tilt b\u2081' },
// // //   { num: '03', label: 'Tilt b\u2082' },
// // //   { num: '04', label: 'Settle' },
// // // ];

// // // const DEFAULT_LEDE = {
// // //   crumb: 'Linear Algebra<span class="r2-dot">&middot;</span>Change of basis',
// // //   body: 'Same vector, different numbers. Drag <span class="b1"><strong>b\u2081</strong></span> and <span class="b2"><strong>b\u2082</strong></span> to define a new basis &mdash; <span class="v">v</span> stays put in space, but its coordinates <code>(c\u2081, c\u2082)</code> shift to express <code>v = c\u2081\u00B7b\u2081 + c\u2082\u00B7b\u2082</code>.',
// // // };

// // // // =====================================================================
// // // //   SECTION 2  ::  Tool-specific CSS
// // // // =====================================================================
// // // const TOOL_CSS = `
// // // /* ---- app width override ---- */
// // // .r2-root .r2-app{max-width:1340px}

// // // /* ---- 3-col layout: scenarios | square canvas | info ---- */
// // // .r2-main.cb-cols{grid-template-columns:230px 620px minmax(360px,1fr)}
// // // .r2-scen-col{display:flex;flex-direction:column;gap:10px;min-width:0}
// // // @media (max-width:1240px){
// // //   .r2-main.cb-cols{grid-template-columns:1fr;justify-content:center}
// // // }

// // // /* ---- canvas: square, no padding ---- */
// // // .cb-canvas-wrap{padding:0;width:100%}
// // // .cb-canvas-wrap .r2-canvas{aspect-ratio:1/1;height:auto}

// // // /* ---- scenarios as sidebar (single column) ---- */
// // // .r2-scen-sections.cols-1{grid-template-columns:1fr;gap:14px}

// // // /* ---- basis grid + decomposition + arrows ---- */
// // // .cb-bgrid-1{stroke:var(--b1);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // // .cb-bgrid-1.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // // .cb-bgrid-2{stroke:var(--b2);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // // .cb-bgrid-2.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // // .cb-decomp-leg1{stroke:var(--b1);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // // .cb-decomp-leg2{stroke:var(--b2);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // // .cb-decomp-corner{fill:var(--text-faint);stroke:none}
// // // .cb-v-shaft{stroke:var(--v);stroke-width:2.5;fill:none;stroke-linecap:round}
// // // .cb-b1-shaft{stroke:var(--b1);stroke-width:2.4;fill:none;stroke-linecap:round}
// // // .cb-b2-shaft{stroke:var(--b2);stroke-width:2.4;fill:none;stroke-linecap:round}
// // // .cb-v-handle{fill:var(--v);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // .cb-b1-handle{fill:var(--b1);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // .cb-b2-handle{fill:var(--b2);stroke:#fff;stroke-width:1.5;cursor:grab}
// // // .cb-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
// // // .cb-b1-label{fill:var(--b1);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // // .cb-b2-label{fill:var(--b2);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // // .cb-singular-warn{fill:var(--warn);font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:.05em}

// // // /* ---- coordinates card ---- */
// // // .cb-coord-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:6px 0;flex-wrap:wrap}
// // // .cb-coord-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;color:var(--text)}
// // // .cb-coord-lab .sub{font-size:11px;vertical-align:sub;font-weight:400;color:var(--text-faint)}
// // // .cb-coord-lab.v{color:var(--v)}
// // // .cb-coord-op{color:var(--text-faint);font-size:13px}
// // // .cb-vec{display:flex;flex-direction:column;gap:2px;padding:6px 10px;position:relative;font-family:var(--font-mono);font-size:13px}
// // // .cb-vec::before,.cb-vec::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // // .cb-vec::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // // .cb-vec::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // // .cb-vec .cell{text-align:center;min-width:38px;padding:0 4px;font-variant-numeric:tabular-nums;font-weight:500}
// // // .cb-vec.std .cell{color:var(--v)}
// // // .cb-vec.nb .cell.c1{color:var(--b1)}
// // // .cb-vec.nb .cell.c2{color:var(--b2)}

// // // .cb-decomp-eq{
// // //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// // //   text-align:center;padding:10px 0 2px;margin-top:8px;
// // //   border-top:1px solid var(--border);letter-spacing:.02em;
// // // }
// // // .cb-decomp-eq .v{color:var(--v);font-weight:600}
// // // .cb-decomp-eq .c1{color:var(--b1);font-weight:600}
// // // .cb-decomp-eq .c2{color:var(--b2);font-weight:600}
// // // .cb-decomp-eq .b1n{color:var(--b1);font-family:var(--font-display);font-style:italic;font-weight:500}
// // // .cb-decomp-eq .b2n{color:var(--b2);font-family:var(--font-display);font-style:italic;font-weight:500}

// // // /* ---- basis-matrix card ---- */
// // // .cb-bmat-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:5px 0;flex-wrap:wrap}
// // // .cb-bmat-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
// // // .cb-bmat-lab.inv::after{content:'\\207B\\00B9';font-size:11px;vertical-align:super;font-weight:400}
// // // .cb-bmat-eq{color:var(--text-faint);font-size:14px}
// // // .cb-bmat{display:grid;gap:3px 12px;padding:7px 10px;position:relative;font-family:var(--font-mono);font-size:13.5px;grid-template-columns:auto auto}
// // // .cb-bmat::before,.cb-bmat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // // .cb-bmat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // // .cb-bmat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // // .cb-bmat .cell{text-align:center;min-width:38px;padding:1px 3px;font-variant-numeric:tabular-nums;font-weight:600}
// // // .cb-bmat .cell.c1{color:var(--b1)}
// // // .cb-bmat .cell.c2{color:var(--b2)}
// // // .cb-bmat.singular .cell{color:var(--warn)}
// // // .cb-det-line{
// // //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// // //   text-align:center;padding:10px 0 2px;margin-top:6px;
// // //   border-top:1px solid var(--border);letter-spacing:.02em;
// // // }
// // // .cb-det-line .val{color:var(--text);font-weight:600;font-variant-numeric:tabular-nums}
// // // .cb-det-line .val.warn{color:var(--warn)}
// // // .cb-det-line .kind{font-weight:500;margin-left:2px}

// // // /* ---- animation panel ---- */
// // // .cb-anim-card{padding:12px 14px}
// // // .cb-anim-head{
// // //   font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
// // //   color:var(--text-faint);margin-bottom:10px;display:flex;align-items:center;
// // // }
// // // .cb-anim-head .r2-badge{color:var(--accent);margin-right:6px}
// // // .cb-anim-steps{display:flex;gap:6px;align-items:center;margin-bottom:10px}
// // // .cb-step-btn{
// // //   flex:1;background:var(--surface-2);border:1px solid var(--border);
// // //   padding:6px 8px;border-radius:4px;font-family:var(--font-mono);font-size:10.5px;
// // //   letter-spacing:.04em;color:var(--text-dim);font-weight:600;cursor:pointer;text-align:center;
// // //   white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .12s;
// // // }
// // // .cb-step-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// // // .cb-step-btn.active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
// // // .cb-step-btn .num{display:block;font-size:9px;color:var(--text-faint);margin-bottom:2px;letter-spacing:.1em}
// // // .cb-step-btn.active .num{color:var(--accent)}
// // // .cb-anim-progress{
// // //   height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px;
// // // }
// // // .cb-anim-progress .fill{
// // //   position:absolute;left:0;top:0;bottom:0;
// // //   background:linear-gradient(90deg,var(--b1),var(--b2));border-radius:3px;
// // //   transition:width .2s;
// // // }
// // // .cb-anim-controls{display:flex;gap:6px;align-items:center}
// // // .cb-anim-ctrl{
// // //   background:var(--surface-2);border:1px solid var(--border);
// // //   width:30px;height:28px;border-radius:4px;cursor:pointer;
// // //   font-family:var(--font-mono);font-size:12px;color:var(--text-dim);font-weight:600;
// // //   display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;
// // // }
// // // .cb-anim-ctrl:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// // // .cb-anim-ctrl.play{
// // //   background:var(--accent);border-color:var(--accent);color:#fff;
// // //   width:auto;padding:0 14px;letter-spacing:.08em;font-size:10.5px;text-transform:uppercase;
// // // }
// // // .cb-anim-ctrl.play:hover{background:var(--accent-hover);color:#fff;border-color:var(--accent-hover)}
// // // .cb-anim-time{
// // //   font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
// // //   font-variant-numeric:tabular-nums;margin-left:6px;
// // // }
// // // .cb-anim-ctrl.reset{margin-left:auto;width:auto;padding:0 10px;gap:6px;display:inline-flex;align-items:center}
// // // .cb-anim-ctrl.reset .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
// // // .cb-anim-ctrl.reset svg{display:block}
// // // `;

// // // // =====================================================================
// // // //   SECTION 3  ::  Hook
// // // // =====================================================================
// // // export function useChangeBasisState(options = {}) {
// // //   const {
// // //     initialB1 = [1, 0],
// // //     initialB2 = [0, 1],
// // //     initialV = [2.5, 1.5],
// // //     initialPreset = 'standard',
// // //     initialLayers = DEFAULT_LAYERS,
// // //     scenarios = SCENARIOS,
// // //   } = options;

// // //   const [b1, setB1Internal] = useState(initialB1);
// // //   const [b2, setB2Internal] = useState(initialB2);
// // //   const [v, setV] = useState(initialV);
// // //   const [preset, setPresetInternal] = useState(initialPreset);
// // //   const [layers, setLayers] = useState(initialLayers);

// // //   const setB1 = useCallback((next) => { setB1Internal(next); setPresetInternal(null); }, []);
// // //   const setB2 = useCallback((next) => { setB2Internal(next); setPresetInternal(null); }, []);

// // //   const selectPreset = useCallback((key) => {
// // //     const sc = scenarios[key];
// // //     if (!sc) return;
// // //     setB1Internal(sc.b1.slice());
// // //     setB2Internal(sc.b2.slice());
// // //     setPresetInternal(key);
// // //   }, [scenarios]);

// // //   return { b1, b2, v, preset, layers, setB1, setB2, setV, selectPreset, setLayers };
// // // }

// // // // =====================================================================
// // // //   SECTION 4  ::  Tool-specific SVG helpers
// // // // =====================================================================
// // // function decompositionSVG(b1, b2, v, geom) {
// // //   const c = Math2D.coordsInBasis(b1, b2, v);
// // //   if (!c) return '';
// // //   const tx = projection(geom);
// // //   const [ox, oy] = tx([0, 0]);
// // //   const leg1End = [c[0] * b1[0], c[0] * b1[1]];
// // //   const [l1x, l1y] = tx(leg1End);
// // //   const [vx, vy] = tx(v);
// // //   let s = '';
// // //   s += `<line class="cb-decomp-leg1" x1="${ox}" y1="${oy}" x2="${l1x.toFixed(2)}" y2="${l1y.toFixed(2)}"/>`;
// // //   s += `<line class="cb-decomp-leg2" x1="${l1x.toFixed(2)}" y1="${l1y.toFixed(2)}" x2="${vx.toFixed(2)}" y2="${vy.toFixed(2)}"/>`;
// // //   s += `<circle class="cb-decomp-corner" cx="${l1x.toFixed(2)}" cy="${l1y.toFixed(2)}" r="3"/>`;
// // //   return s;
// // // }

// // // function arrowSVG(p, kind, label, showLabel, geom) {
// // //   const tx = projection(geom);
// // //   const [ox, oy] = tx([0, 0]);
// // //   const mag = Math.hypot(p[0], p[1]);
// // //   let s = '';
// // //   if (mag < 0.02) {
// // //     s += `<circle class="cb-${kind}-handle" cx="${ox}" cy="${oy}" r="5.5"/>`;
// // //     return s;
// // //   }
// // //   const [tipX, tipY] = tx(p);
// // //   s += `<line class="cb-${kind}-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#cb-arr-${kind})"/>`;
// // //   s += `<circle class="cb-${kind}-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5.5"/>`;
// // //   if (showLabel) {
// // //     const lx = p[0] + (p[0] >= 0 ? 0.35 : -0.35);
// // //     const ly = p[1] + (p[1] >= 0 ? 0.35 : -0.35);
// // //     const [px, py] = tx([lx, ly]);
// // //     s += `<text class="cb-${kind}-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
// // //   }
// // //   return s;
// // // }

// // // // =====================================================================
// // // //   SECTION 5  ::  Sub-components
// // // // =====================================================================
// // // export function BasisCanvas({
// // //   b1 = [1, 0],
// // //   b2 = [0, 1],
// // //   v = [2.5, 1.5],
// // //   layers = DEFAULT_LAYERS,
// // //   geom = CB_GEOM,
// // //   onB1Change,
// // //   onB2Change,
// // //   onVChange,
// // //   className,
// // //   style,
// // // }) {
// // //   const { svgRef, isDragging, handlers } = useDrag({
// // //     geom,
// // //     onDrag: (h, p) => {
// // //       if (h === 'v' && onVChange) onVChange(p);
// // //       else if (h === 'b1' && onB1Change) onB1Change(p);
// // //       else if (h === 'b2' && onB2Change) onB2Change(p);
// // //     },
// // //   });

// // //   let inner = '';
// // //   if (layers.grid) inner += SVGRender.grid(geom);
// // //   if (layers.bgrid) inner += SVGRender.basisGrid(b1, b2, geom, 'cb-bgrid-1', 'cb-bgrid-2');
// // //   if (layers.decomp) inner += decompositionSVG(b1, b2, v, geom);
// // //   inner += arrowSVG(b1, 'b1', '\u0062\u2081', layers.labels, geom);
// // //   inner += arrowSVG(b2, 'b2', '\u0062\u2082', layers.labels, geom);
// // //   inner += arrowSVG(v, 'v', 'v', layers.labels, geom);
// // //   inner += SVGRender.origin(geom);

// // //   const singular = Math.abs(Math2D.det(Math2D.basisMatrix(b1, b2))) < 1e-7;
// // //   if (singular) {
// // //     inner += `<text class="cb-singular-warn" x="${geom.width / 2}" y="30" text-anchor="middle">basis is singular \u2014 coords undefined</text>`;
// // //   }

// // //   const tx = projection(geom);
// // //   const [vx, vy] = tx(v);
// // //   const [b1x, b1y] = tx(b1);
// // //   const [b2x, b2y] = tx(b2);

// // //   return (
// // //     <svg
// // //       ref={svgRef}
// // //       className={'r2-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
// // //       style={style}
// // //       viewBox={`0 0 ${geom.width} ${geom.height}`}
// // //       xmlns="http://www.w3.org/2000/svg"
// // //       {...handlers}
// // //     >
// // //       <defs>
// // //         <marker id="cb-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#b54708" />
// // //         </marker>
// // //         <marker id="cb-arr-b1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0e6e8a" />
// // //         </marker>
// // //         <marker id="cb-arr-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// // //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#5b34c4" />
// // //         </marker>
// // //       </defs>
// // //       <g dangerouslySetInnerHTML={{ __html: inner }} />
// // //       {onB1Change && <circle className="r2-tip-hit" data-handle="b1" cx={b1x} cy={b1y} r={14} />}
// // //       {onB2Change && <circle className="r2-tip-hit" data-handle="b2" cx={b2x} cy={b2y} r={14} />}
// // //       {onVChange  && <circle className="r2-tip-hit" data-handle="v"  cx={vx}  cy={vy}  r={14} />}
// // //     </svg>
// // //   );
// // // }

// // // export function CoordinatesCard({ b1 = [1, 0], b2 = [0, 1], v = [2.5, 1.5] }) {
// // //   const c = Math2D.coordsInBasis(b1, b2, v);
// // //   const singular = !c;
// // //   return (
// // //     <Card badge="01" title="Coordinates of v" note="in two bases">
// // //       <div className="cb-coord-row">
// // //         <span className="cb-coord-lab v">v<span className="sub">std</span></span>
// // //         <span className="cb-coord-op">=</span>
// // //         <div className="cb-vec std">
// // //           <span className="cell">{Math2D.fmt(v[0])}</span>
// // //           <span className="cell">{Math2D.fmt(v[1])}</span>
// // //         </div>
// // //       </div>
// // //       <div className="cb-coord-row">
// // //         <span className="cb-coord-lab">v<span className="sub">B</span></span>
// // //         <span className="cb-coord-op">=</span>
// // //         <div className="cb-vec nb">
// // //           <span className="cell c1">{c ? Math2D.fmt(c[0]) : '\u2014'}</span>
// // //           <span className="cell c2">{c ? Math2D.fmt(c[1]) : '\u2014'}</span>
// // //         </div>
// // //       </div>
// // //       <div className="cb-decomp-eq">
// // //         <span className="v">v</span> = <span className="c1">{c ? Math2D.fmt(c[0]) : '?'}</span>
// // //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// // //         <span className="b1n">b&#8321;</span> + <span className="c2">{c ? Math2D.fmt(c[1]) : '?'}</span>
// // //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// // //         <span className="b2n">b&#8322;</span>
// // //       </div>
// // //       {singular && (
// // //         <div className="r2-status-strip warn">
// // //           <span className="r2-status-badge">!</span>
// // //           <span>Basis is singular &mdash; b&#8321; and b&#8322; are linearly dependent. Coordinates undefined.</span>
// // //         </div>
// // //       )}
// // //     </Card>
// // //   );
// // // }

// // // export function BasisMatrixCard({ b1 = [1, 0], b2 = [0, 1] }) {
// // //   const B = Math2D.basisMatrix(b1, b2);
// // //   const Binv = Math2D.inverse(B);
// // //   const dB = Math2D.det(B);
// // //   const singular = Math.abs(dB) < 1e-7;
// // //   const orth = Math2D.orthInfo(b1, b2);
// // //   let orthLabel = 'oblique';
// // //   let orthColor = 'var(--text-dim)';
// // //   if (orth.kind === 'singular') { orthLabel = 'not a basis'; orthColor = 'var(--warn)'; }
// // //   else if (orth.kind === 'orthonormal') { orthLabel = 'orthonormal'; orthColor = 'var(--b1)'; }
// // //   else if (orth.kind === 'orthogonal') { orthLabel = 'orthogonal (not unit)'; orthColor = 'var(--b1)'; }
// // //   else if (orth.kind === 'oblique') { orthLabel = `oblique, ${Math2D.fmt(orth.angle)}\u00B0`; orthColor = 'var(--b2)'; }
// // //   return (
// // //     <Card badge="02" title="Change-of-basis matrix" note="columns = b₁, b₂">
// // //       <div className="cb-bmat-row">
// // //         <span className="cb-bmat-lab">B</span>
// // //         <span className="cb-bmat-eq">=</span>
// // //         <div className={'cb-bmat' + (singular ? ' singular' : '')}>
// // //           <span className="cell c1">{Math2D.fmt(B[0][0])}</span>
// // //           <span className="cell c2">{Math2D.fmt(B[0][1])}</span>
// // //           <span className="cell c1">{Math2D.fmt(B[1][0])}</span>
// // //           <span className="cell c2">{Math2D.fmt(B[1][1])}</span>
// // //         </div>
// // //       </div>
// // //       <div className="cb-bmat-row">
// // //         <span className="cb-bmat-lab inv">B</span>
// // //         <span className="cb-bmat-eq">=</span>
// // //         <div className={'cb-bmat' + (Binv ? '' : ' singular')}>
// // //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][0]) : '\u2014'}</span>
// // //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][1]) : '\u2014'}</span>
// // //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][0]) : '\u2014'}</span>
// // //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][1]) : '\u2014'}</span>
// // //         </div>
// // //       </div>
// // //       <div className="cb-det-line">
// // //         det B = <span className={'val' + (singular ? ' warn' : '')}>{Math2D.fmt(dB)}</span>
// // //         &nbsp;&middot;&nbsp;
// // //         <span className="kind" style={{ color: orthColor }}>{orthLabel}</span>
// // //       </div>
// // //     </Card>
// // //   );
// // // }

// // // export function AnimationCard({
// // //   steps = DEFAULT_ANIM_STEPS,
// // //   step = 0,
// // //   progress = 0,
// // //   isPlaying = false,
// // //   onStep,
// // //   onPlayToggle,
// // //   onPrev,
// // //   onNext,
// // //   onReset,
// // //   duration = 1,
// // // }) {
// // //   const pct = Math.max(0, Math.min(1, progress)) * 100;
// // //   const time = (progress * duration).toFixed(2);
// // //   const total = duration.toFixed(2);
// // //   return (
// // //     <div className="r2-card cb-anim-card">
// // //       <div className="cb-anim-head"><span className="r2-badge">&#9656;</span>Animation</div>
// // //       <div className="cb-anim-steps">
// // //         {steps.map((s, i) => (
// // //           <button
// // //             key={i}
// // //             className={'cb-step-btn' + (i === step ? ' active' : '')}
// // //             onClick={() => onStep && onStep(i)}
// // //             type="button"
// // //           >
// // //             <span className="num">{s.num}</span>{s.label}
// // //           </button>
// // //         ))}
// // //       </div>
// // //       <div className="cb-anim-progress">
// // //         <div className="fill" style={{ width: pct + '%' }} />
// // //       </div>
// // //       <div className="cb-anim-controls">
// // //         <button className="cb-anim-ctrl" title="Previous step" onClick={onPrev} type="button">&#9664;</button>
// // //         <button className="cb-anim-ctrl play" onClick={onPlayToggle} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
// // //         <button className="cb-anim-ctrl" title="Next step" onClick={onNext} type="button">&#9654;</button>
// // //         <span className="cb-anim-time">{time} / {total}</span>
// // //         <button className="cb-anim-ctrl reset" title="Reset" onClick={onReset} type="button">
// // //           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// // //             <path d="M3 12a9 9 0 1 0 3-6.7" />
// // //             <polyline points="3 4 3 10 9 10" />
// // //           </svg>
// // //           <span className="lbl">Reset</span>
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // // =====================================================================
// // // //   SECTION 6  ::  Animation state hook (placeholder)
// // // // =====================================================================
// // // export function useAnimState(options = {}) {
// // //   const { initialStep = 0, initialProgress = 0, initialPlaying = false } = options;
// // //   const [step, setStep] = useState(initialStep);
// // //   const [progress, setProgress] = useState(initialProgress);
// // //   const [isPlaying, setIsPlaying] = useState(initialPlaying);

// // //   const playToggle = useCallback(() => setIsPlaying((p) => !p), []);
// // //   const reset = useCallback(() => { setStep(0); setProgress(0); setIsPlaying(false); }, []);
// // //   const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
// // //   const next = useCallback(() => setStep((s) => s + 1), []);

// // //   return { step, progress, isPlaying, setStep, setProgress, setIsPlaying, playToggle, reset, prev, next };
// // // }

// // // // =====================================================================
// // // //   SECTION 7  ::  Core + Wrapper
// // // // =====================================================================
// // // export function ChangeBasisCore({
// // //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// // //   children,
// // // }) {
// // //   const state = useChangeBasisState({ initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios });
// // //   if (typeof children === 'function') return children(state);
// // //   return null;
// // // }

// // // export default function ChangeBasis({
// // //   lede,
// // //   ledeCrumb = DEFAULT_LEDE.crumb,
// // //   ledeBody = DEFAULT_LEDE.body,
// // //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// // //   layerChips, canvas, explanation, coordinates, basisMatrix, scenariosPanel, animation,
// // //   visibleScenarios, enabledLayers, explanationOverride,
// // //   animSteps = DEFAULT_ANIM_STEPS,
// // //   layout,
// // //   className, style,
// // // }) {
// // //   const anim = useAnimState();

// // //   return (
// // //     <ChangeBasisCore
// // //       initialB1={initialB1}
// // //       initialB2={initialB2}
// // //       initialV={initialV}
// // //       initialPreset={initialPreset}
// // //       initialLayers={initialLayers}
// // //       scenarios={scenarios}
// // //     >
// // //       {(ctx) => {
// // //         const slotChips = layerChips !== undefined ? layerChips : (
// // //           <LayerChips layers={ctx.layers} onChange={ctx.setLayers} defs={ALL_LAYER_DEFS} enabled={enabledLayers} />
// // //         );
// // //         const slotCanvas = canvas !== undefined ? canvas : (
// // //           <BasisCanvas
// // //             b1={ctx.b1} b2={ctx.b2} v={ctx.v}
// // //             layers={ctx.layers}
// // //             geom={CB_GEOM}
// // //             onB1Change={ctx.setB1}
// // //             onB2Change={ctx.setB2}
// // //             onVChange={ctx.setV}
// // //           />
// // //         );
// // //         const slotExp = explanation !== undefined ? explanation : (
// // //           <ExplanationCard
// // //             preset={ctx.preset}
// // //             scenarios={scenarios || SCENARIOS}
// // //             override={explanationOverride}
// // //           />
// // //         );
// // //         const slotCoords = coordinates !== undefined ? coordinates : (
// // //           <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v} />
// // //         );
// // //         const slotMatrix = basisMatrix !== undefined ? basisMatrix : (
// // //           <BasisMatrixCard b1={ctx.b1} b2={ctx.b2} />
// // //         );
// // //         const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
// // //           <ScenariosPanel
// // //             scenarios={scenarios || SCENARIOS}
// // //             groups={SCENARIO_GROUPS}
// // //             preset={ctx.preset}
// // //             onSelect={ctx.selectPreset}
// // //             visibleKeys={visibleScenarios}
// // //             columns={1}
// // //             badge="03"
// // //           />
// // //         );
// // //         const slotAnim = animation !== undefined ? animation : (
// // //           <AnimationCard
// // //             steps={animSteps}
// // //             step={anim.step}
// // //             progress={anim.progress}
// // //             isPlaying={anim.isPlaying}
// // //             onStep={anim.setStep}
// // //             onPlayToggle={anim.playToggle}
// // //             onPrev={anim.prev}
// // //             onNext={anim.next}
// // //             onReset={anim.reset}
// // //           />
// // //         );

// // //         if (typeof layout === 'function') {
// // //           return (
// // //             <AppShell extraCSS={TOOL_CSS} className={className} style={style} lede={null} scenarios={null}>
// // //               {layout(ctx)}
// // //             </AppShell>
// // //           );
// // //         }

// // //         return (
// // //           <AppShell
// // //             ledeCrumb={lede === undefined ? ledeCrumb : null}
// // //             ledeBody={lede === undefined ? ledeBody : null}
// // //             lede={lede}
// // //             scenarios={null}
// // //             extraCSS={TOOL_CSS}
// // //             className={className}
// // //             style={style}
// // //           >
// // //             <main className="r2-main cb-cols">
// // //               <section className="r2-scen-col">
// // //                 {slotScenarios}
// // //               </section>
// // //               <section className="r2-canvas-col">
// // //                 <div className="cb-canvas-wrap">{slotCanvas}</div>
// // //                 <div className="r2-readouts cols-3">
// // //                   <CanvasReadout kind="v"  label="v" value={Math2D.fmtPair(ctx.v)} />
// // //                   <CanvasReadout kind="b1" label="b" sub="1" value={Math2D.fmtPair(ctx.b1)} />
// // //                   <CanvasReadout kind="b2" label="b" sub="2" value={Math2D.fmtPair(ctx.b2)} />
// // //                 </div>
// // //               </section>
// // //               <section className="r2-info-col">
// // //                 {slotExp}
// // //                 {slotChips}
// // //                 {slotAnim}
// // //                 {slotCoords}
// // //                 {slotMatrix}
// // //               </section>
// // //             </main>
// // //           </AppShell>
// // //         );
// // //       }}
// // //     </ChangeBasisCore>
// // //   );
// // // }


// // 'use client';

// // import { useState, useCallback } from 'react';
// // import {
// //   Math2D, SVGRender, projection, useDrag, DEFAULT_GEOM,
// //   AppShell, Card, LayerChips, CanvasReadout, ScenariosPanel, ExplanationCard,
// // } from '../2DCore';

// // // =====================================================================
// // //   SECTION 1  ::  Scenarios
// // // =====================================================================
// // const C30 = Math.cos(Math.PI / 6), S30 = Math.sin(Math.PI / 6);
// // const SQ = Math.SQRT1_2;

// // export const SCENARIOS = {
// //   standard: {
// //     label: 'Standard basis', b1: [1, 0], b2: [0, 1], group: 'natural', tag: 'identity',
// //     title: 'Standard basis', exTag: 'identity \u00B7 e\u2081, e\u2082',
// //     body: 'The default coordinate system. <span class="b1">b\u2081</span> = (1, 0), <span class="b2">b\u2082</span> = (0, 1). Coordinates in this basis match the standard coordinates of <span class="v">v</span> &mdash; they&apos;re the same numbers. The change-of-basis matrix is the identity.',
// //   },
// //   rotated30: {
// //     label: 'Rotated 30\u00B0', b1: [C30, S30], b2: [-S30, C30], group: 'natural', tag: '\u22A5 unit',
// //     title: 'Rotated by 30\u00B0', exTag: 'orthonormal \u00B7 rotation',
// //     body: 'A rotated orthonormal basis. <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> are still unit vectors at right angles &mdash; just turned. <span class="v">v</span> sits in the same place, but its new coordinates are <em>rotated in the opposite direction</em>. For orthonormal bases, <code>B\u207B\u00B9 = B\u1D40</code>.',
// //   },
// //   rotated45: {
// //     label: 'Rotated 45\u00B0', b1: [SQ, SQ], b2: [-SQ, SQ], group: 'natural', tag: '\u22A5 unit',
// //     title: 'Rotated by 45\u00B0', exTag: 'orthonormal \u00B7 diagonal axes',
// //     body: 'New axes lie along <code>y = x</code> and <code>y = \u2212x</code>. <span class="v">v</span> is unchanged; its coordinates simply trade Cartesian for diagonal. Both bases describe the same space &mdash; just from different angles.',
// //   },
// //   scaled: {
// //     label: 'Stretched axes', b1: [2, 0], b2: [0, 0.5], group: 'natural', tag: 'orth, non-unit',
// //     title: 'Stretched orthogonal basis', exTag: 'orthogonal \u00B7 not unit',
// //     body: 'Axes still perpendicular but no longer unit length. One coord-step along <span class="b1">b\u2081</span> covers 2 standard units; one along <span class="b2">b\u2082</span> covers 0.5. So <span class="v">v</span>&apos;s coordinates <em>shrink along b\u2081 and grow along b\u2082</em> relative to standard.',
// //   },
// //   skewed: {
// //     label: 'Skewed', b1: [1, 0.4], b2: [-0.3, 1], group: 'nonorth', tag: 'not \u22A5',
// //     title: 'Skewed basis', exTag: 'non-orthogonal \u00B7 valid',
// //     body: '<span class="b1">b\u2081</span> stays mostly horizontal and <span class="b2">b\u2082</span> tilts left. The basis is still <em>valid</em> &mdash; det &ne; 0 &mdash; just not perpendicular. The basis-grid (dashed) shows parallelograms instead of squares. <span class="v">v</span>&apos;s coordinates still exist uniquely.',
// //   },
// //   diagBasis: {
// //     label: 'Diagonals', b1: [1, 1], b2: [1, -1], group: 'nonorth', tag: '\u22A5 not unit',
// //     title: 'Diagonal basis', exTag: 'orthogonal \u00B7 longer than unit',
// //     body: 'Two perpendicular diagonals. Each basis vector has length <code>\u221A2</code>, so they&apos;re orthogonal but not <em>orthonormal</em>. <span class="v">v</span>&apos;s coordinates are scaled accordingly.',
// //   },
// //   obtuse: {
// //     label: 'Obtuse basis', b1: [1, 0.3], b2: [0.3, 1], group: 'nonorth', tag: 'wide angle',
// //     title: 'Wide-angle basis', exTag: 'non-orthogonal \u00B7 valid',
// //     body: 'Both <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> tilt toward each other. Still a valid basis. The parallelogram cells in the basis-grid become elongated rhombi.',
// //   },
// //   flipY: {
// //     label: 'Y flipped', b1: [1, 0], b2: [0, -1], group: 'special', tag: 'det \u22121',
// //     title: 'Y-axis flipped', exTag: 'orientation reversed',
// //     body: 'Same x-axis but y points down. <code>det B = \u22121</code> &mdash; the basis is left-handed instead of right-handed. <span class="v">v</span>&apos;s y-coord flips sign in this basis.',
// //   },
// //   swapped: {
// //     label: 'Axes swapped', b1: [0, 1], b2: [1, 0], group: 'special', tag: 'det \u22121',
// //     title: 'Axes swapped', exTag: '(b\u2081, b\u2082) \u2194',
// //     body: 'Just trade the two axes. <span class="b1">b\u2081</span> = (0, 1), <span class="b2">b\u2082</span> = (1, 0). <span class="v">v</span>&apos;s coordinates swap as well. <code>det B = \u22121</code> &mdash; swapping two basis vectors flips orientation.',
// //   },
// //   collinear: {
// //     label: 'Collinear (bad)', b1: [1, 0], b2: [2, 0], group: 'degenerate', tag: 'det = 0',
// //     title: 'Degenerate \u2014 not a basis', exTag: 'det = 0 \u00B7 linearly dependent',
// //     body: '<span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> both lie on the x-axis &mdash; they&apos;re multiples of each other. They <em>fail to span</em> the plane: any vector off the x-axis can&apos;t be written as a combination. <span class="warn">Coordinates are undefined.</span> A proper basis needs two linearly independent vectors.',
// //   },
// // };

// // export const SCENARIO_GROUPS = [
// //   { key: 'natural',    label: 'Natural',     tag: '\u22A5 axes',
// //     color: 'var(--b1)', softBg: 'var(--b1-tint)', border: 'var(--b1-line)' },
// //   { key: 'nonorth',    label: 'Non-orth',    tag: 'parallelogram',
// //     color: 'var(--b2)', softBg: 'var(--b2-tint)', border: 'var(--b2-line)' },
// //   { key: 'special',    label: 'Orientation', tag: 'det \u22121',
// //     color: 'var(--accent)', softBg: 'var(--accent-soft)', border: 'var(--accent-line)' },
// //   { key: 'degenerate', label: 'Degenerate',  tag: 'not a basis',
// //     color: 'var(--warn)', softBg: 'var(--warn-tint)', border: 'var(--warn-line)' },
// // ];

// // export const DEFAULT_LAYERS = { grid: true, bgrid: true, decomp: true, labels: true };

// // export const ALL_LAYER_DEFS = [
// //   { key: 'grid', label: 'std grid' },
// //   { key: 'bgrid', label: 'basis grid', swatch: 'linear-gradient(to right,#0e6e8a 50%,#5b34c4 50%)' },
// //   { key: 'decomp', label: 'decomposition' },
// //   { key: 'labels', label: 'labels' },
// // ];

// // // =====================================================================
// // //   SECTION 1b  ::  Geom (square canvas, 7x7 grid extent)
// // // =====================================================================
// // export const CB_GEOM = { width: 700, height: 700, scale: 50, gridRx: 7, gridRy: 7 };

// // // =====================================================================
// // //   SECTION 1c  ::  Animation steps (placeholder)
// // // =====================================================================
// // export const DEFAULT_ANIM_STEPS = [
// //   { num: '01', label: 'Start' },
// //   { num: '02', label: 'Tilt b\u2081' },
// //   { num: '03', label: 'Tilt b\u2082' },
// //   { num: '04', label: 'Settle' },
// // ];

// // const DEFAULT_LEDE = {
// //   crumb: 'Linear Algebra<span class="r2-dot">&middot;</span>Change of basis',
// //   body: 'Same vector, different numbers. Drag <span class="b1"><strong>b\u2081</strong></span> and <span class="b2"><strong>b\u2082</strong></span> to define a new basis &mdash; <span class="v">v</span> stays put in space, but its coordinates <code>(c\u2081, c\u2082)</code> shift to express <code>v = c\u2081\u00B7b\u2081 + c\u2082\u00B7b\u2082</code>.',
// // };

// // // =====================================================================
// // //   SECTION 2  ::  Tool-specific CSS
// // // =====================================================================
// // const TOOL_CSS = `
// // /* ---- app width override ---- */
// // .r2-root .r2-app{max-width:1340px}

// // /* ---- 3-col layout: scenarios | square canvas | info ---- */
// // .r2-main.cb-cols{grid-template-columns:230px 620px minmax(360px,1fr)}
// // .r2-scen-col{display:flex;flex-direction:column;gap:10px;min-width:0}
// // @media (max-width:1240px){
// //   .r2-main.cb-cols{grid-template-columns:1fr;justify-content:center}
// // }

// // /* ---- canvas: square, no padding ---- */
// // .cb-canvas-wrap{padding:0;width:100%}
// // .cb-canvas-wrap .r2-canvas{aspect-ratio:1/1;height:auto}

// // /* ---- scenarios as sidebar (single column) ---- */
// // .r2-scen-sections.cols-1{grid-template-columns:1fr;gap:14px}

// // /* ---- right column: 10% smaller fonts ---- */
// // .r2-info-col .r2-card h2{font-size:9.9px}
// // .r2-info-col .r2-card h2 .r2-note{font-size:9.9px}
// // .r2-info-col .r2-ex-header h3{font-size:17.1px}
// // .r2-info-col .r2-ex-tag{font-size:9px}
// // .r2-info-col .r2-ex-body{font-size:12.6px}
// // .r2-info-col .r2-ex-body code{font-size:10.8px}
// // .r2-info-col .r2-chip{font-size:9.9px}
// // .r2-info-col .r2-status-strip{font-size:10.8px}
// // .r2-info-col .cb-coord-lab{font-size:15.3px}
// // .r2-info-col .cb-coord-lab .sub{font-size:9.9px}
// // .r2-info-col .cb-coord-op{font-size:11.7px}
// // .r2-info-col .cb-vec{font-size:11.7px}
// // .r2-info-col .cb-decomp-eq{font-size:11.25px}
// // .r2-info-col .cb-bmat-lab{font-size:16.2px}
// // .r2-info-col .cb-bmat-lab.inv::after{font-size:9.9px}
// // .r2-info-col .cb-bmat-eq{font-size:12.6px}
// // .r2-info-col .cb-bmat{font-size:12.15px}
// // .r2-info-col .cb-det-line{font-size:11.25px}
// // .r2-info-col .cb-anim-head{font-size:9.9px}
// // .r2-info-col .cb-step-btn{font-size:9.45px}
// // .r2-info-col .cb-step-btn .num{font-size:8.1px}
// // .r2-info-col .cb-anim-ctrl{font-size:10.8px}
// // .r2-info-col .cb-anim-ctrl.play{font-size:9.45px}
// // .r2-info-col .cb-anim-time{font-size:9.9px}
// // .r2-info-col .cb-anim-ctrl.reset .lbl{font-size:9px}

// // /* ---- basis grid + decomposition + arrows ---- */
// // .cb-bgrid-1{stroke:var(--b1);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // .cb-bgrid-1.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // .cb-bgrid-2{stroke:var(--b2);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// // .cb-bgrid-2.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// // .cb-decomp-leg1{stroke:var(--b1);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // .cb-decomp-leg2{stroke:var(--b2);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// // .cb-decomp-corner{fill:var(--text-faint);stroke:none}
// // .cb-v-shaft{stroke:var(--v);stroke-width:2.5;fill:none;stroke-linecap:round}
// // .cb-b1-shaft{stroke:var(--b1);stroke-width:2.4;fill:none;stroke-linecap:round}
// // .cb-b2-shaft{stroke:var(--b2);stroke-width:2.4;fill:none;stroke-linecap:round}
// // .cb-v-handle{fill:var(--v);stroke:#fff;stroke-width:1.5;cursor:grab}
// // .cb-b1-handle{fill:var(--b1);stroke:#fff;stroke-width:1.5;cursor:grab}
// // .cb-b2-handle{fill:var(--b2);stroke:#fff;stroke-width:1.5;cursor:grab}
// // .cb-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
// // .cb-b1-label{fill:var(--b1);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // .cb-b2-label{fill:var(--b2);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// // .cb-singular-warn{fill:var(--warn);font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:.05em}

// // /* ---- coordinates card ---- */
// // .cb-coord-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:6px 0;flex-wrap:wrap}
// // .cb-coord-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;color:var(--text)}
// // .cb-coord-lab .sub{font-size:11px;vertical-align:sub;font-weight:400;color:var(--text-faint)}
// // .cb-coord-lab.v{color:var(--v)}
// // .cb-coord-op{color:var(--text-faint);font-size:13px}
// // .cb-vec{display:flex;flex-direction:column;gap:2px;padding:6px 10px;position:relative;font-family:var(--font-mono);font-size:13px}
// // .cb-vec::before,.cb-vec::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // .cb-vec::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // .cb-vec::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // .cb-vec .cell{text-align:center;min-width:38px;padding:0 4px;font-variant-numeric:tabular-nums;font-weight:500}
// // .cb-vec.std .cell{color:var(--v)}
// // .cb-vec.nb .cell.c1{color:var(--b1)}
// // .cb-vec.nb .cell.c2{color:var(--b2)}

// // .cb-decomp-eq{
// //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// //   text-align:center;padding:10px 0 2px;margin-top:8px;
// //   border-top:1px solid var(--border);letter-spacing:.02em;
// // }
// // .cb-decomp-eq .v{color:var(--v);font-weight:600}
// // .cb-decomp-eq .c1{color:var(--b1);font-weight:600}
// // .cb-decomp-eq .c2{color:var(--b2);font-weight:600}
// // .cb-decomp-eq .b1n{color:var(--b1);font-family:var(--font-display);font-style:italic;font-weight:500}
// // .cb-decomp-eq .b2n{color:var(--b2);font-family:var(--font-display);font-style:italic;font-weight:500}

// // /* ---- basis-matrix card ---- */
// // .cb-bmat-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:5px 0;flex-wrap:wrap}
// // .cb-bmat-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
// // .cb-bmat-lab.inv::after{content:'\\207B\\00B9';font-size:11px;vertical-align:super;font-weight:400}
// // .cb-bmat-eq{color:var(--text-faint);font-size:14px}
// // .cb-bmat{display:grid;gap:3px 12px;padding:7px 10px;position:relative;font-family:var(--font-mono);font-size:13.5px;grid-template-columns:auto auto}
// // .cb-bmat::before,.cb-bmat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// // .cb-bmat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// // .cb-bmat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// // .cb-bmat .cell{text-align:center;min-width:38px;padding:1px 3px;font-variant-numeric:tabular-nums;font-weight:600}
// // .cb-bmat .cell.c1{color:var(--b1)}
// // .cb-bmat .cell.c2{color:var(--b2)}
// // .cb-bmat.singular .cell{color:var(--warn)}
// // .cb-det-line{
// //   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
// //   text-align:center;padding:10px 0 2px;margin-top:6px;
// //   border-top:1px solid var(--border);letter-spacing:.02em;
// // }
// // .cb-det-line .val{color:var(--text);font-weight:600;font-variant-numeric:tabular-nums}
// // .cb-det-line .val.warn{color:var(--warn)}
// // .cb-det-line .kind{font-weight:500;margin-left:2px}

// // /* ---- animation panel ---- */
// // .cb-anim-card{padding:12px 14px}
// // .cb-anim-head{
// //   font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
// //   color:var(--text-faint);margin-bottom:10px;display:flex;align-items:center;
// // }
// // .cb-anim-head .r2-badge{color:var(--accent);margin-right:6px}
// // .cb-anim-steps{display:flex;gap:6px;align-items:center;margin-bottom:10px}
// // .cb-step-btn{
// //   flex:1;background:var(--surface-2);border:1px solid var(--border);
// //   padding:6px 8px;border-radius:4px;font-family:var(--font-mono);font-size:10.5px;
// //   letter-spacing:.04em;color:var(--text-dim);font-weight:600;cursor:pointer;text-align:center;
// //   white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .12s;
// // }
// // .cb-step-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// // .cb-step-btn.active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
// // .cb-step-btn .num{display:block;font-size:9px;color:var(--text-faint);margin-bottom:2px;letter-spacing:.1em}
// // .cb-step-btn.active .num{color:var(--accent)}
// // .cb-anim-progress{
// //   height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px;
// // }
// // .cb-anim-progress .fill{
// //   position:absolute;left:0;top:0;bottom:0;
// //   background:linear-gradient(90deg,var(--b1),var(--b2));border-radius:3px;
// //   transition:width .2s;
// // }
// // .cb-anim-controls{display:flex;gap:6px;align-items:center}
// // .cb-anim-ctrl{
// //   background:var(--surface-2);border:1px solid var(--border);
// //   width:30px;height:28px;border-radius:4px;cursor:pointer;
// //   font-family:var(--font-mono);font-size:12px;color:var(--text-dim);font-weight:600;
// //   display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;
// // }
// // .cb-anim-ctrl:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// // .cb-anim-ctrl.play{
// //   background:var(--accent);border-color:var(--accent);color:#fff;
// //   width:auto;padding:0 14px;letter-spacing:.08em;font-size:10.5px;text-transform:uppercase;
// // }
// // .cb-anim-ctrl.play:hover{background:var(--accent-hover);color:#fff;border-color:var(--accent-hover)}
// // .cb-anim-time{
// //   font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
// //   font-variant-numeric:tabular-nums;margin-left:6px;
// // }
// // .cb-anim-ctrl.reset{margin-left:auto;width:auto;padding:0 10px;gap:6px;display:inline-flex;align-items:center}
// // .cb-anim-ctrl.reset .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
// // .cb-anim-ctrl.reset svg{display:block}
// // `;

// // // =====================================================================
// // //   SECTION 3  ::  Hook
// // // =====================================================================
// // export function useChangeBasisState(options = {}) {
// //   const {
// //     initialB1 = [1, 0],
// //     initialB2 = [0, 1],
// //     initialV = [2.5, 1.5],
// //     initialPreset = 'standard',
// //     initialLayers = DEFAULT_LAYERS,
// //     scenarios = SCENARIOS,
// //   } = options;

// //   const [b1, setB1Internal] = useState(initialB1);
// //   const [b2, setB2Internal] = useState(initialB2);
// //   const [v, setV] = useState(initialV);
// //   const [preset, setPresetInternal] = useState(initialPreset);
// //   const [layers, setLayers] = useState(initialLayers);

// //   const setB1 = useCallback((next) => { setB1Internal(next); setPresetInternal(null); }, []);
// //   const setB2 = useCallback((next) => { setB2Internal(next); setPresetInternal(null); }, []);

// //   const selectPreset = useCallback((key) => {
// //     const sc = scenarios[key];
// //     if (!sc) return;
// //     setB1Internal(sc.b1.slice());
// //     setB2Internal(sc.b2.slice());
// //     setPresetInternal(key);
// //   }, [scenarios]);

// //   return { b1, b2, v, preset, layers, setB1, setB2, setV, selectPreset, setLayers };
// // }

// // // =====================================================================
// // //   SECTION 4  ::  Tool-specific SVG helpers
// // // =====================================================================
// // function decompositionSVG(b1, b2, v, geom) {
// //   const c = Math2D.coordsInBasis(b1, b2, v);
// //   if (!c) return '';
// //   const tx = projection(geom);
// //   const [ox, oy] = tx([0, 0]);
// //   const leg1End = [c[0] * b1[0], c[0] * b1[1]];
// //   const [l1x, l1y] = tx(leg1End);
// //   const [vx, vy] = tx(v);
// //   let s = '';
// //   s += `<line class="cb-decomp-leg1" x1="${ox}" y1="${oy}" x2="${l1x.toFixed(2)}" y2="${l1y.toFixed(2)}"/>`;
// //   s += `<line class="cb-decomp-leg2" x1="${l1x.toFixed(2)}" y1="${l1y.toFixed(2)}" x2="${vx.toFixed(2)}" y2="${vy.toFixed(2)}"/>`;
// //   s += `<circle class="cb-decomp-corner" cx="${l1x.toFixed(2)}" cy="${l1y.toFixed(2)}" r="3"/>`;
// //   return s;
// // }

// // function arrowSVG(p, kind, label, showLabel, geom) {
// //   const tx = projection(geom);
// //   const [ox, oy] = tx([0, 0]);
// //   const mag = Math.hypot(p[0], p[1]);
// //   let s = '';
// //   if (mag < 0.02) {
// //     s += `<circle class="cb-${kind}-handle" cx="${ox}" cy="${oy}" r="5.5"/>`;
// //     return s;
// //   }
// //   const [tipX, tipY] = tx(p);
// //   s += `<line class="cb-${kind}-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#cb-arr-${kind})"/>`;
// //   s += `<circle class="cb-${kind}-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5.5"/>`;
// //   if (showLabel) {
// //     const lx = p[0] + (p[0] >= 0 ? 0.35 : -0.35);
// //     const ly = p[1] + (p[1] >= 0 ? 0.35 : -0.35);
// //     const [px, py] = tx([lx, ly]);
// //     s += `<text class="cb-${kind}-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
// //   }
// //   return s;
// // }

// // // =====================================================================
// // //   SECTION 5  ::  Sub-components
// // // =====================================================================
// // export function BasisCanvas({
// //   b1 = [1, 0],
// //   b2 = [0, 1],
// //   v = [2.5, 1.5],
// //   layers = DEFAULT_LAYERS,
// //   geom = CB_GEOM,
// //   onB1Change,
// //   onB2Change,
// //   onVChange,
// //   className,
// //   style,
// // }) {
// //   const { svgRef, isDragging, handlers } = useDrag({
// //     geom,
// //     onDrag: (h, p) => {
// //       if (h === 'v' && onVChange) onVChange(p);
// //       else if (h === 'b1' && onB1Change) onB1Change(p);
// //       else if (h === 'b2' && onB2Change) onB2Change(p);
// //     },
// //   });

// //   let inner = '';
// //   if (layers.grid) inner += SVGRender.grid(geom);
// //   if (layers.bgrid) inner += SVGRender.basisGrid(b1, b2, geom, 'cb-bgrid-1', 'cb-bgrid-2');
// //   if (layers.decomp) inner += decompositionSVG(b1, b2, v, geom);
// //   inner += arrowSVG(b1, 'b1', '\u0062\u2081', layers.labels, geom);
// //   inner += arrowSVG(b2, 'b2', '\u0062\u2082', layers.labels, geom);
// //   inner += arrowSVG(v, 'v', 'v', layers.labels, geom);
// //   inner += SVGRender.origin(geom);

// //   const singular = Math.abs(Math2D.det(Math2D.basisMatrix(b1, b2))) < 1e-7;
// //   if (singular) {
// //     inner += `<text class="cb-singular-warn" x="${geom.width / 2}" y="30" text-anchor="middle">basis is singular \u2014 coords undefined</text>`;
// //   }

// //   const tx = projection(geom);
// //   const [vx, vy] = tx(v);
// //   const [b1x, b1y] = tx(b1);
// //   const [b2x, b2y] = tx(b2);

// //   return (
// //     <svg
// //       ref={svgRef}
// //       className={'r2-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
// //       style={style}
// //       viewBox={`0 0 ${geom.width} ${geom.height}`}
// //       xmlns="http://www.w3.org/2000/svg"
// //       {...handlers}
// //     >
// //       <defs>
// //         <marker id="cb-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#b54708" />
// //         </marker>
// //         <marker id="cb-arr-b1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0e6e8a" />
// //         </marker>
// //         <marker id="cb-arr-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#5b34c4" />
// //         </marker>
// //       </defs>
// //       <g dangerouslySetInnerHTML={{ __html: inner }} />
// //       {onB1Change && <circle className="r2-tip-hit" data-handle="b1" cx={b1x} cy={b1y} r={14} />}
// //       {onB2Change && <circle className="r2-tip-hit" data-handle="b2" cx={b2x} cy={b2y} r={14} />}
// //       {onVChange  && <circle className="r2-tip-hit" data-handle="v"  cx={vx}  cy={vy}  r={14} />}
// //     </svg>
// //   );
// // }

// // export function CoordinatesCard({ b1 = [1, 0], b2 = [0, 1], v = [2.5, 1.5] }) {
// //   const c = Math2D.coordsInBasis(b1, b2, v);
// //   const singular = !c;
// //   return (
// //     <Card badge="01" title="Coordinates of v" note="in two bases">
// //       <div className="cb-coord-row">
// //         <span className="cb-coord-lab v">v<span className="sub">std</span></span>
// //         <span className="cb-coord-op">=</span>
// //         <div className="cb-vec std">
// //           <span className="cell">{Math2D.fmt(v[0])}</span>
// //           <span className="cell">{Math2D.fmt(v[1])}</span>
// //         </div>
// //       </div>
// //       <div className="cb-coord-row">
// //         <span className="cb-coord-lab">v<span className="sub">B</span></span>
// //         <span className="cb-coord-op">=</span>
// //         <div className="cb-vec nb">
// //           <span className="cell c1">{c ? Math2D.fmt(c[0]) : '\u2014'}</span>
// //           <span className="cell c2">{c ? Math2D.fmt(c[1]) : '\u2014'}</span>
// //         </div>
// //       </div>
// //       <div className="cb-decomp-eq">
// //         <span className="v">v</span> = <span className="c1">{c ? Math2D.fmt(c[0]) : '?'}</span>
// //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// //         <span className="b1n">b&#8321;</span> + <span className="c2">{c ? Math2D.fmt(c[1]) : '?'}</span>
// //         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
// //         <span className="b2n">b&#8322;</span>
// //       </div>
// //       {singular && (
// //         <div className="r2-status-strip warn">
// //           <span className="r2-status-badge">!</span>
// //           <span>Basis is singular &mdash; b&#8321; and b&#8322; are linearly dependent. Coordinates undefined.</span>
// //         </div>
// //       )}
// //     </Card>
// //   );
// // }

// // export function BasisMatrixCard({ b1 = [1, 0], b2 = [0, 1] }) {
// //   const B = Math2D.basisMatrix(b1, b2);
// //   const Binv = Math2D.inverse(B);
// //   const dB = Math2D.det(B);
// //   const singular = Math.abs(dB) < 1e-7;
// //   const orth = Math2D.orthInfo(b1, b2);
// //   let orthLabel = 'oblique';
// //   let orthColor = 'var(--text-dim)';
// //   if (orth.kind === 'singular') { orthLabel = 'not a basis'; orthColor = 'var(--warn)'; }
// //   else if (orth.kind === 'orthonormal') { orthLabel = 'orthonormal'; orthColor = 'var(--b1)'; }
// //   else if (orth.kind === 'orthogonal') { orthLabel = 'orthogonal (not unit)'; orthColor = 'var(--b1)'; }
// //   else if (orth.kind === 'oblique') { orthLabel = `oblique, ${Math2D.fmt(orth.angle)}\u00B0`; orthColor = 'var(--b2)'; }
// //   return (
// //     <Card badge="02" title="Change-of-basis matrix" note="columns = b₁, b₂">
// //       <div className="cb-bmat-row">
// //         <span className="cb-bmat-lab">B</span>
// //         <span className="cb-bmat-eq">=</span>
// //         <div className={'cb-bmat' + (singular ? ' singular' : '')}>
// //           <span className="cell c1">{Math2D.fmt(B[0][0])}</span>
// //           <span className="cell c2">{Math2D.fmt(B[0][1])}</span>
// //           <span className="cell c1">{Math2D.fmt(B[1][0])}</span>
// //           <span className="cell c2">{Math2D.fmt(B[1][1])}</span>
// //         </div>
// //       </div>
// //       <div className="cb-bmat-row">
// //         <span className="cb-bmat-lab inv">B</span>
// //         <span className="cb-bmat-eq">=</span>
// //         <div className={'cb-bmat' + (Binv ? '' : ' singular')}>
// //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][0]) : '\u2014'}</span>
// //           <span className="cell">{Binv ? Math2D.fmt(Binv[0][1]) : '\u2014'}</span>
// //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][0]) : '\u2014'}</span>
// //           <span className="cell">{Binv ? Math2D.fmt(Binv[1][1]) : '\u2014'}</span>
// //         </div>
// //       </div>
// //       <div className="cb-det-line">
// //         det B = <span className={'val' + (singular ? ' warn' : '')}>{Math2D.fmt(dB)}</span>
// //         &nbsp;&middot;&nbsp;
// //         <span className="kind" style={{ color: orthColor }}>{orthLabel}</span>
// //       </div>
// //     </Card>
// //   );
// // }

// // export function AnimationCard({
// //   steps = DEFAULT_ANIM_STEPS,
// //   step = 0,
// //   progress = 0,
// //   isPlaying = false,
// //   onStep,
// //   onPlayToggle,
// //   onPrev,
// //   onNext,
// //   onReset,
// //   duration = 1,
// // }) {
// //   const pct = Math.max(0, Math.min(1, progress)) * 100;
// //   const time = (progress * duration).toFixed(2);
// //   const total = duration.toFixed(2);
// //   return (
// //     <div className="r2-card cb-anim-card">
// //       <div className="cb-anim-head"><span className="r2-badge">&#9656;</span>Animation</div>
// //       <div className="cb-anim-steps">
// //         {steps.map((s, i) => (
// //           <button
// //             key={i}
// //             className={'cb-step-btn' + (i === step ? ' active' : '')}
// //             onClick={() => onStep && onStep(i)}
// //             type="button"
// //           >
// //             <span className="num">{s.num}</span>{s.label}
// //           </button>
// //         ))}
// //       </div>
// //       <div className="cb-anim-progress">
// //         <div className="fill" style={{ width: pct + '%' }} />
// //       </div>
// //       <div className="cb-anim-controls">
// //         <button className="cb-anim-ctrl" title="Previous step" onClick={onPrev} type="button">&#9664;</button>
// //         <button className="cb-anim-ctrl play" onClick={onPlayToggle} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
// //         <button className="cb-anim-ctrl" title="Next step" onClick={onNext} type="button">&#9654;</button>
// //         <span className="cb-anim-time">{time} / {total}</span>
// //         <button className="cb-anim-ctrl reset" title="Reset" onClick={onReset} type="button">
// //           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
// //             <path d="M3 12a9 9 0 1 0 3-6.7" />
// //             <polyline points="3 4 3 10 9 10" />
// //           </svg>
// //           <span className="lbl">Reset</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // // =====================================================================
// // //   SECTION 6  ::  Animation state hook (placeholder)
// // // =====================================================================
// // export function useAnimState(options = {}) {
// //   const { initialStep = 0, initialProgress = 0, initialPlaying = false } = options;
// //   const [step, setStep] = useState(initialStep);
// //   const [progress, setProgress] = useState(initialProgress);
// //   const [isPlaying, setIsPlaying] = useState(initialPlaying);

// //   const playToggle = useCallback(() => setIsPlaying((p) => !p), []);
// //   const reset = useCallback(() => { setStep(0); setProgress(0); setIsPlaying(false); }, []);
// //   const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
// //   const next = useCallback(() => setStep((s) => s + 1), []);

// //   return { step, progress, isPlaying, setStep, setProgress, setIsPlaying, playToggle, reset, prev, next };
// // }

// // // =====================================================================
// // //   SECTION 7  ::  Core + Wrapper
// // // =====================================================================
// // export function ChangeBasisCore({
// //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// //   children,
// // }) {
// //   const state = useChangeBasisState({ initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios });
// //   if (typeof children === 'function') return children(state);
// //   return null;
// // }

// // export default function ChangeBasis({
// //   lede,
// //   ledeCrumb = DEFAULT_LEDE.crumb,
// //   ledeBody = DEFAULT_LEDE.body,
// //   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
// //   layerChips, canvas, explanation, coordinates, basisMatrix, scenariosPanel, animation,
// //   visibleScenarios, enabledLayers, explanationOverride,
// //   animSteps = DEFAULT_ANIM_STEPS,
// //   layout,
// //   className, style,
// // }) {
// //   const anim = useAnimState();

// //   return (
// //     <ChangeBasisCore
// //       initialB1={initialB1}
// //       initialB2={initialB2}
// //       initialV={initialV}
// //       initialPreset={initialPreset}
// //       initialLayers={initialLayers}
// //       scenarios={scenarios}
// //     >
// //       {(ctx) => {
// //         const slotChips = layerChips !== undefined ? layerChips : (
// //           <LayerChips layers={ctx.layers} onChange={ctx.setLayers} defs={ALL_LAYER_DEFS} enabled={enabledLayers} />
// //         );
// //         const slotCanvas = canvas !== undefined ? canvas : (
// //           <BasisCanvas
// //             b1={ctx.b1} b2={ctx.b2} v={ctx.v}
// //             layers={ctx.layers}
// //             geom={CB_GEOM}
// //             onB1Change={ctx.setB1}
// //             onB2Change={ctx.setB2}
// //             onVChange={ctx.setV}
// //           />
// //         );
// //         const slotExp = explanation !== undefined ? explanation : (
// //           <ExplanationCard
// //             preset={ctx.preset}
// //             scenarios={scenarios || SCENARIOS}
// //             override={explanationOverride}
// //           />
// //         );
// //         const slotCoords = coordinates !== undefined ? coordinates : (
// //           <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v} />
// //         );
// //         const slotMatrix = basisMatrix !== undefined ? basisMatrix : (
// //           <BasisMatrixCard b1={ctx.b1} b2={ctx.b2} />
// //         );
// //         const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
// //           <ScenariosPanel
// //             scenarios={scenarios || SCENARIOS}
// //             groups={SCENARIO_GROUPS}
// //             preset={ctx.preset}
// //             onSelect={ctx.selectPreset}
// //             visibleKeys={visibleScenarios}
// //             columns={1}
// //             badge="03"
// //           />
// //         );
// //         const slotAnim = animation !== undefined ? animation : (
// //           <AnimationCard
// //             steps={animSteps}
// //             step={anim.step}
// //             progress={anim.progress}
// //             isPlaying={anim.isPlaying}
// //             onStep={anim.setStep}
// //             onPlayToggle={anim.playToggle}
// //             onPrev={anim.prev}
// //             onNext={anim.next}
// //             onReset={anim.reset}
// //           />
// //         );

// //         if (typeof layout === 'function') {
// //           return (
// //             <AppShell extraCSS={TOOL_CSS} className={className} style={style} lede={null} scenarios={null}>
// //               {layout(ctx)}
// //             </AppShell>
// //           );
// //         }

// //         return (
// //           <AppShell
// //             ledeCrumb={lede === undefined ? ledeCrumb : null}
// //             ledeBody={lede === undefined ? ledeBody : null}
// //             lede={lede}
// //             scenarios={null}
// //             extraCSS={TOOL_CSS}
// //             className={className}
// //             style={style}
// //           >
// //             <main className="r2-main cb-cols">
// //               <section className="r2-scen-col">
// //                 {slotScenarios}
// //               </section>
// //               <section className="r2-canvas-col">
// //                 <div className="cb-canvas-wrap">{slotCanvas}</div>
// //                 <div className="r2-readouts cols-3">
// //                   <CanvasReadout kind="v"  label="v" value={Math2D.fmtPair(ctx.v)} />
// //                   <CanvasReadout kind="b1" label="b" sub="1" value={Math2D.fmtPair(ctx.b1)} />
// //                   <CanvasReadout kind="b2" label="b" sub="2" value={Math2D.fmtPair(ctx.b2)} />
// //                 </div>
// //               </section>
// //               <section className="r2-info-col">
// //                 {slotExp}
// //                 {slotChips}
// //                 {slotAnim}
// //                 {slotCoords}
// //                 {slotMatrix}
// //               </section>
// //             </main>
// //           </AppShell>
// //         );
// //       }}
// //     </ChangeBasisCore>
// //   );
// // }


// 'use client';

// import { useState, useCallback } from 'react';
// import {
//   Math2D, SVGRender, projection, useDrag, DEFAULT_GEOM,
//   AppShell, Card, LayerChips, CanvasReadout, ScenariosPanel, ExplanationCard,
// } from '../2DCore';

// // =====================================================================
// //   SECTION 1  ::  Scenarios
// // =====================================================================
// const C30 = Math.cos(Math.PI / 6), S30 = Math.sin(Math.PI / 6);
// const SQ = Math.SQRT1_2;

// export const SCENARIOS = {
//   standard: {
//     label: 'Standard basis', b1: [1, 0], b2: [0, 1], group: 'natural', tag: 'identity',
//     title: 'Standard basis', exTag: 'identity \u00B7 e\u2081, e\u2082',
//     body: 'The default coordinate system. <span class="b1">b\u2081</span> = (1, 0), <span class="b2">b\u2082</span> = (0, 1). Coordinates in this basis match the standard coordinates of <span class="v">v</span> &mdash; they&apos;re the same numbers. The change-of-basis matrix is the identity.',
//   },
//   rotated30: {
//     label: 'Rotated 30\u00B0', b1: [C30, S30], b2: [-S30, C30], group: 'natural', tag: '\u22A5 unit',
//     title: 'Rotated by 30\u00B0', exTag: 'orthonormal \u00B7 rotation',
//     body: 'A rotated orthonormal basis. <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> are still unit vectors at right angles &mdash; just turned. <span class="v">v</span> sits in the same place, but its new coordinates are <em>rotated in the opposite direction</em>. For orthonormal bases, <code>B\u207B\u00B9 = B\u1D40</code>.',
//   },
//   rotated45: {
//     label: 'Rotated 45\u00B0', b1: [SQ, SQ], b2: [-SQ, SQ], group: 'natural', tag: '\u22A5 unit',
//     title: 'Rotated by 45\u00B0', exTag: 'orthonormal \u00B7 diagonal axes',
//     body: 'New axes lie along <code>y = x</code> and <code>y = \u2212x</code>. <span class="v">v</span> is unchanged; its coordinates simply trade Cartesian for diagonal. Both bases describe the same space &mdash; just from different angles.',
//   },
//   scaled: {
//     label: 'Stretched axes', b1: [2, 0], b2: [0, 0.5], group: 'natural', tag: 'orth, non-unit',
//     title: 'Stretched orthogonal basis', exTag: 'orthogonal \u00B7 not unit',
//     body: 'Axes still perpendicular but no longer unit length. One coord-step along <span class="b1">b\u2081</span> covers 2 standard units; one along <span class="b2">b\u2082</span> covers 0.5. So <span class="v">v</span>&apos;s coordinates <em>shrink along b\u2081 and grow along b\u2082</em> relative to standard.',
//   },
//   skewed: {
//     label: 'Skewed', b1: [1, 0.4], b2: [-0.3, 1], group: 'nonorth', tag: 'not \u22A5',
//     title: 'Skewed basis', exTag: 'non-orthogonal \u00B7 valid',
//     body: '<span class="b1">b\u2081</span> stays mostly horizontal and <span class="b2">b\u2082</span> tilts left. The basis is still <em>valid</em> &mdash; det &ne; 0 &mdash; just not perpendicular. The basis-grid (dashed) shows parallelograms instead of squares. <span class="v">v</span>&apos;s coordinates still exist uniquely.',
//   },
//   diagBasis: {
//     label: 'Diagonals', b1: [1, 1], b2: [1, -1], group: 'nonorth', tag: '\u22A5 not unit',
//     title: 'Diagonal basis', exTag: 'orthogonal \u00B7 longer than unit',
//     body: 'Two perpendicular diagonals. Each basis vector has length <code>\u221A2</code>, so they&apos;re orthogonal but not <em>orthonormal</em>. <span class="v">v</span>&apos;s coordinates are scaled accordingly.',
//   },
//   obtuse: {
//     label: 'Obtuse basis', b1: [1, 0.3], b2: [0.3, 1], group: 'nonorth', tag: 'wide angle',
//     title: 'Wide-angle basis', exTag: 'non-orthogonal \u00B7 valid',
//     body: 'Both <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> tilt toward each other. Still a valid basis. The parallelogram cells in the basis-grid become elongated rhombi.',
//   },
//   flipY: {
//     label: 'Y flipped', b1: [1, 0], b2: [0, -1], group: 'special', tag: 'det \u22121',
//     title: 'Y-axis flipped', exTag: 'orientation reversed',
//     body: 'Same x-axis but y points down. <code>det B = \u22121</code> &mdash; the basis is left-handed instead of right-handed. <span class="v">v</span>&apos;s y-coord flips sign in this basis.',
//   },
//   swapped: {
//     label: 'Axes swapped', b1: [0, 1], b2: [1, 0], group: 'special', tag: 'det \u22121',
//     title: 'Axes swapped', exTag: '(b\u2081, b\u2082) \u2194',
//     body: 'Just trade the two axes. <span class="b1">b\u2081</span> = (0, 1), <span class="b2">b\u2082</span> = (1, 0). <span class="v">v</span>&apos;s coordinates swap as well. <code>det B = \u22121</code> &mdash; swapping two basis vectors flips orientation.',
//   },
//   collinear: {
//     label: 'Collinear (bad)', b1: [1, 0], b2: [2, 0], group: 'degenerate', tag: 'det = 0',
//     title: 'Degenerate \u2014 not a basis', exTag: 'det = 0 \u00B7 linearly dependent',
//     body: '<span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> both lie on the x-axis &mdash; they&apos;re multiples of each other. They <em>fail to span</em> the plane: any vector off the x-axis can&apos;t be written as a combination. <span class="warn">Coordinates are undefined.</span> A proper basis needs two linearly independent vectors.',
//   },
// };

// export const SCENARIO_GROUPS = [
//   { key: 'natural',    label: 'Natural',     tag: '\u22A5 axes',
//     color: 'var(--b1)', softBg: 'var(--b1-tint)', border: 'var(--b1-line)' },
//   { key: 'nonorth',    label: 'Non-orth',    tag: 'parallelogram',
//     color: 'var(--b2)', softBg: 'var(--b2-tint)', border: 'var(--b2-line)' },
//   { key: 'special',    label: 'Orientation', tag: 'det \u22121',
//     color: 'var(--accent)', softBg: 'var(--accent-soft)', border: 'var(--accent-line)' },
//   { key: 'degenerate', label: 'Degenerate',  tag: 'not a basis',
//     color: 'var(--warn)', softBg: 'var(--warn-tint)', border: 'var(--warn-line)' },
// ];

// export const DEFAULT_LAYERS = { grid: true, bgrid: true, decomp: true, labels: true };

// export const ALL_LAYER_DEFS = [
//   { key: 'grid', label: 'std grid' },
//   { key: 'bgrid', label: 'basis grid', swatch: 'linear-gradient(to right,#0e6e8a 50%,#5b34c4 50%)' },
//   { key: 'decomp', label: 'decomposition' },
//   { key: 'labels', label: 'labels' },
// ];

// // =====================================================================
// //   SECTION 1b  ::  Geom (square canvas, 7x7 grid extent)
// // =====================================================================
// export const CB_GEOM = { width: 700, height: 700, scale: 50, gridRx: 7, gridRy: 7 };

// // =====================================================================
// //   SECTION 1c  ::  Animation steps (placeholder)
// // =====================================================================
// export const DEFAULT_ANIM_STEPS = [
//   { num: '01', label: 'Start' },
//   { num: '02', label: 'Tilt b\u2081' },
//   { num: '03', label: 'Tilt b\u2082' },
//   { num: '04', label: 'Settle' },
// ];

// const DEFAULT_LEDE = {
//   crumb: 'Linear Algebra<span class="r2-dot">&middot;</span>Change of basis',
//   body: 'Same vector, different numbers. Drag <span class="b1"><strong>b\u2081</strong></span> and <span class="b2"><strong>b\u2082</strong></span> to define a new basis &mdash; <span class="v">v</span> stays put in space, but its coordinates <code>(c\u2081, c\u2082)</code> shift to express <code>v = c\u2081\u00B7b\u2081 + c\u2082\u00B7b\u2082</code>.',
// };

// // =====================================================================
// //   SECTION 2  ::  Tool-specific CSS
// // =====================================================================
// const TOOL_CSS = `
// /* ---- app width override ---- */
// .r2-root .r2-app{max-width:1340px}

// /* ---- 3-col layout: scenarios | square canvas | info ---- */
// .r2-main.cb-cols{grid-template-columns:230px 620px minmax(360px,1fr)}
// .r2-scen-col{display:flex;flex-direction:column;gap:10px;min-width:0}
// @media (max-width:1240px){
//   .r2-main.cb-cols{grid-template-columns:1fr;justify-content:center}
// }

// /* ---- canvas: square, no padding ---- */
// .cb-canvas-wrap{padding:0;width:100%}
// .cb-canvas-wrap .r2-canvas{aspect-ratio:1/1;height:auto}

// /* ---- scenarios as sidebar (single column) ---- */
// .r2-scen-sections.cols-1{grid-template-columns:1fr;gap:14px}

// /* ---- right column: 10% smaller fonts ---- */
// .r2-info-col .r2-card h2{font-size:9.9px}
// .r2-info-col .r2-card h2 .r2-note{font-size:9.9px}
// .r2-info-col .r2-ex-header h3{font-size:17.1px}
// .r2-info-col .r2-ex-tag{font-size:9px}
// .r2-info-col .r2-ex-body{font-size:12.6px}
// .r2-info-col .r2-ex-body code{font-size:10.8px}
// .r2-info-col .r2-chip{font-size:9.9px}
// .r2-info-col .r2-status-strip{font-size:10.8px}
// .r2-info-col .cb-coord-lab{font-size:15.3px}
// .r2-info-col .cb-coord-lab .sub{font-size:9.9px}
// .r2-info-col .cb-coord-op{font-size:11.7px}
// .r2-info-col .cb-vec{font-size:11.7px}
// .r2-info-col .cb-decomp-eq{font-size:11.25px}
// .r2-info-col .cb-bmat-lab{font-size:16.2px}
// .r2-info-col .cb-bmat-lab.inv::after{font-size:9.9px}
// .r2-info-col .cb-bmat-eq{font-size:12.6px}
// .r2-info-col .cb-bmat{font-size:12.15px}
// .r2-info-col .cb-det-line{font-size:11.25px}
// .r2-info-col .cb-anim-head{font-size:9.9px}
// .r2-info-col .cb-step-btn{font-size:9.45px}
// .r2-info-col .cb-step-btn .num{font-size:8.1px}
// .r2-info-col .cb-anim-ctrl{font-size:10.8px}
// .r2-info-col .cb-anim-ctrl.play{font-size:9.45px}
// .r2-info-col .cb-anim-time{font-size:9.9px}
// .r2-info-col .cb-anim-ctrl.reset .lbl{font-size:9px}

// /* ---- basis grid + decomposition + arrows ---- */
// .cb-bgrid-1{stroke:var(--b1);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// .cb-bgrid-1.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// .cb-bgrid-2{stroke:var(--b2);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
// .cb-bgrid-2.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
// .cb-decomp-leg1{stroke:var(--b1);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// .cb-decomp-leg2{stroke:var(--b2);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
// .cb-decomp-corner{fill:var(--text-faint);stroke:none}
// .cb-v-shaft{stroke:var(--v);stroke-width:2.5;fill:none;stroke-linecap:round}
// .cb-b1-shaft{stroke:var(--b1);stroke-width:2.4;fill:none;stroke-linecap:round}
// .cb-b2-shaft{stroke:var(--b2);stroke-width:2.4;fill:none;stroke-linecap:round}
// .cb-v-handle{fill:var(--v);stroke:#fff;stroke-width:1.5;cursor:grab}
// .cb-b1-handle{fill:var(--b1);stroke:#fff;stroke-width:1.5;cursor:grab}
// .cb-b2-handle{fill:var(--b2);stroke:#fff;stroke-width:1.5;cursor:grab}
// .cb-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
// .cb-b1-label{fill:var(--b1);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// .cb-b2-label{fill:var(--b2);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
// .cb-singular-warn{fill:var(--warn);font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:.05em}

// /* ---- coordinates card ---- */
// .cb-coord-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:6px 0;flex-wrap:wrap}
// .cb-coord-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;color:var(--text)}
// .cb-coord-lab .sub{font-size:11px;vertical-align:sub;font-weight:400;color:var(--text-faint)}
// .cb-coord-lab.v{color:var(--v)}
// .cb-coord-op{color:var(--text-faint);font-size:13px}
// .cb-vec{display:flex;flex-direction:column;gap:2px;padding:6px 10px;position:relative;font-family:var(--font-mono);font-size:13px}
// .cb-vec::before,.cb-vec::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// .cb-vec::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// .cb-vec::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// .cb-vec .cell{text-align:center;min-width:38px;padding:0 4px;font-variant-numeric:tabular-nums;font-weight:500}
// .cb-vec.std .cell{color:var(--v)}
// .cb-vec.nb .cell.c1{color:var(--b1)}
// .cb-vec.nb .cell.c2{color:var(--b2)}

// .cb-decomp-eq{
//   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
//   text-align:center;padding:10px 0 2px;margin-top:8px;
//   border-top:1px solid var(--border);letter-spacing:.02em;
// }
// .cb-decomp-eq .v{color:var(--v);font-weight:600}
// .cb-decomp-eq .c1{color:var(--b1);font-weight:600}
// .cb-decomp-eq .c2{color:var(--b2);font-weight:600}
// .cb-decomp-eq .b1n{color:var(--b1);font-family:var(--font-display);font-style:italic;font-weight:500}
// .cb-decomp-eq .b2n{color:var(--b2);font-family:var(--font-display);font-style:italic;font-weight:500}

// /* ---- basis-matrix card ---- */
// .cb-bmat-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:5px 0;flex-wrap:wrap}
// .cb-bmat-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
// .cb-bmat-lab.inv::after{content:'\\207B\\00B9';font-size:11px;vertical-align:super;font-weight:400}
// .cb-bmat-eq{color:var(--text-faint);font-size:14px}
// .cb-bmat{display:grid;gap:3px 12px;padding:7px 10px;position:relative;font-family:var(--font-mono);font-size:13.5px;grid-template-columns:auto auto}
// .cb-bmat::before,.cb-bmat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
// .cb-bmat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
// .cb-bmat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
// .cb-bmat .cell{text-align:center;min-width:38px;padding:1px 3px;font-variant-numeric:tabular-nums;font-weight:600}
// .cb-bmat .cell.c1{color:var(--b1)}
// .cb-bmat .cell.c2{color:var(--b2)}
// .cb-bmat.singular .cell{color:var(--warn)}
// .cb-det-line{
//   font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
//   text-align:center;padding:10px 0 2px;margin-top:6px;
//   border-top:1px solid var(--border);letter-spacing:.02em;
// }
// .cb-det-line .val{color:var(--text);font-weight:600;font-variant-numeric:tabular-nums}
// .cb-det-line .val.warn{color:var(--warn)}
// .cb-det-line .kind{font-weight:500;margin-left:2px}

// /* ---- animation panel ---- */
// .cb-anim-card{padding:12px 14px}
// .cb-anim-head{
//   font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
//   color:var(--text-faint);margin-bottom:10px;display:flex;align-items:center;
// }
// .cb-anim-head .r2-badge{color:var(--accent);margin-right:6px}
// .cb-anim-steps{display:flex;gap:6px;align-items:center;margin-bottom:10px}
// .cb-step-btn{
//   flex:1;background:var(--surface-2);border:1px solid var(--border);
//   padding:6px 8px;border-radius:4px;font-family:var(--font-mono);font-size:10.5px;
//   letter-spacing:.04em;color:var(--text-dim);font-weight:600;cursor:pointer;text-align:center;
//   white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .12s;
// }
// .cb-step-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// .cb-step-btn.active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
// .cb-step-btn .num{display:block;font-size:9px;color:var(--text-faint);margin-bottom:2px;letter-spacing:.1em}
// .cb-step-btn.active .num{color:var(--accent)}
// .cb-anim-progress{
//   height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px;
// }
// .cb-anim-progress .fill{
//   position:absolute;left:0;top:0;bottom:0;
//   background:linear-gradient(90deg,var(--b1),var(--b2));border-radius:3px;
//   transition:width .2s;
// }
// .cb-anim-controls{display:flex;gap:6px;align-items:center}
// .cb-anim-ctrl{
//   background:var(--surface-2);border:1px solid var(--border);
//   width:30px;height:28px;border-radius:4px;cursor:pointer;
//   font-family:var(--font-mono);font-size:12px;color:var(--text-dim);font-weight:600;
//   display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;
// }
// .cb-anim-ctrl:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
// .cb-anim-ctrl.play{
//   background:var(--accent);border-color:var(--accent);color:#fff;
//   width:auto;padding:0 14px;letter-spacing:.08em;font-size:10.5px;text-transform:uppercase;
// }
// .cb-anim-ctrl.play:hover{background:var(--accent-hover);color:#fff;border-color:var(--accent-hover)}
// .cb-anim-time{
//   font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
//   font-variant-numeric:tabular-nums;margin-left:6px;
// }
// .cb-anim-ctrl.reset{margin-left:auto;width:auto;padding:0 10px;gap:6px;display:inline-flex;align-items:center}
// .cb-anim-ctrl.reset .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
// .cb-anim-ctrl.reset svg{display:block}
// `;

// // =====================================================================
// //   SECTION 3  ::  Hook
// // =====================================================================
// export function useChangeBasisState(options = {}) {
//   const {
//     initialB1 = [1, 0],
//     initialB2 = [0, 1],
//     initialV = [2.5, 1.5],
//     initialPreset = 'standard',
//     initialLayers = DEFAULT_LAYERS,
//     scenarios = SCENARIOS,
//   } = options;

//   const [b1, setB1Internal] = useState(initialB1);
//   const [b2, setB2Internal] = useState(initialB2);
//   const [v, setV] = useState(initialV);
//   const [preset, setPresetInternal] = useState(initialPreset);
//   const [layers, setLayers] = useState(initialLayers);

//   const setB1 = useCallback((next) => { setB1Internal(next); setPresetInternal(null); }, []);
//   const setB2 = useCallback((next) => { setB2Internal(next); setPresetInternal(null); }, []);

//   const selectPreset = useCallback((key) => {
//     const sc = scenarios[key];
//     if (!sc) return;
//     setB1Internal(sc.b1.slice());
//     setB2Internal(sc.b2.slice());
//     setPresetInternal(key);
//   }, [scenarios]);

//   return { b1, b2, v, preset, layers, setB1, setB2, setV, selectPreset, setLayers };
// }

// // =====================================================================
// //   SECTION 4  ::  Tool-specific SVG helpers
// // =====================================================================
// function decompositionSVG(b1, b2, v, geom) {
//   const c = Math2D.coordsInBasis(b1, b2, v);
//   if (!c) return '';
//   const tx = projection(geom);
//   const [ox, oy] = tx([0, 0]);
//   const leg1End = [c[0] * b1[0], c[0] * b1[1]];
//   const [l1x, l1y] = tx(leg1End);
//   const [vx, vy] = tx(v);
//   let s = '';
//   s += `<line class="cb-decomp-leg1" x1="${ox}" y1="${oy}" x2="${l1x.toFixed(2)}" y2="${l1y.toFixed(2)}"/>`;
//   s += `<line class="cb-decomp-leg2" x1="${l1x.toFixed(2)}" y1="${l1y.toFixed(2)}" x2="${vx.toFixed(2)}" y2="${vy.toFixed(2)}"/>`;
//   s += `<circle class="cb-decomp-corner" cx="${l1x.toFixed(2)}" cy="${l1y.toFixed(2)}" r="3"/>`;
//   return s;
// }

// function arrowSVG(p, kind, label, showLabel, geom) {
//   const tx = projection(geom);
//   const [ox, oy] = tx([0, 0]);
//   const mag = Math.hypot(p[0], p[1]);
//   let s = '';
//   if (mag < 0.02) {
//     s += `<circle class="cb-${kind}-handle" cx="${ox}" cy="${oy}" r="5.5"/>`;
//     return s;
//   }
//   const [tipX, tipY] = tx(p);
//   s += `<line class="cb-${kind}-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#cb-arr-${kind})"/>`;
//   s += `<circle class="cb-${kind}-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5.5"/>`;
//   if (showLabel) {
//     const lx = p[0] + (p[0] >= 0 ? 0.35 : -0.35);
//     const ly = p[1] + (p[1] >= 0 ? 0.35 : -0.35);
//     const [px, py] = tx([lx, ly]);
//     s += `<text class="cb-${kind}-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
//   }
//   return s;
// }

// // =====================================================================
// //   SECTION 5  ::  Sub-components
// // =====================================================================
// export function BasisCanvas({
//   b1 = [1, 0],
//   b2 = [0, 1],
//   v = [2.5, 1.5],
//   layers = DEFAULT_LAYERS,
//   geom = CB_GEOM,
//   onB1Change,
//   onB2Change,
//   onVChange,
//   className,
//   style,
// }) {
//   const { svgRef, isDragging, handlers } = useDrag({
//     geom,
//     onDrag: (h, p) => {
//       if (h === 'v' && onVChange) onVChange(p);
//       else if (h === 'b1' && onB1Change) onB1Change(p);
//       else if (h === 'b2' && onB2Change) onB2Change(p);
//     },
//   });

//   let inner = '';
//   if (layers.grid) inner += SVGRender.grid(geom);
//   if (layers.bgrid) inner += SVGRender.basisGrid(b1, b2, geom, 'cb-bgrid-1', 'cb-bgrid-2');
//   if (layers.decomp) inner += decompositionSVG(b1, b2, v, geom);
//   inner += arrowSVG(b1, 'b1', '\u0062\u2081', layers.labels, geom);
//   inner += arrowSVG(b2, 'b2', '\u0062\u2082', layers.labels, geom);
//   inner += arrowSVG(v, 'v', 'v', layers.labels, geom);
//   inner += SVGRender.origin(geom);

//   const singular = Math.abs(Math2D.det(Math2D.basisMatrix(b1, b2))) < 1e-7;
//   if (singular) {
//     inner += `<text class="cb-singular-warn" x="${geom.width / 2}" y="30" text-anchor="middle">basis is singular \u2014 coords undefined</text>`;
//   }

//   const tx = projection(geom);
//   const [vx, vy] = tx(v);
//   const [b1x, b1y] = tx(b1);
//   const [b2x, b2y] = tx(b2);

//   return (
//     <svg
//       ref={svgRef}
//       className={'r2-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
//       style={style}
//       viewBox={`0 0 ${geom.width} ${geom.height}`}
//       xmlns="http://www.w3.org/2000/svg"
//       {...handlers}
//     >
//       <defs>
//         <marker id="cb-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
//           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#b54708" />
//         </marker>
//         <marker id="cb-arr-b1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
//           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0e6e8a" />
//         </marker>
//         <marker id="cb-arr-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
//           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#5b34c4" />
//         </marker>
//       </defs>
//       <g dangerouslySetInnerHTML={{ __html: inner }} />
//       {onB1Change && <circle className="r2-tip-hit" data-handle="b1" cx={b1x} cy={b1y} r={14} />}
//       {onB2Change && <circle className="r2-tip-hit" data-handle="b2" cx={b2x} cy={b2y} r={14} />}
//       {onVChange  && <circle className="r2-tip-hit" data-handle="v"  cx={vx}  cy={vy}  r={14} />}
//     </svg>
//   );
// }

// export function CoordinatesCard({ b1 = [1, 0], b2 = [0, 1], v = [2.5, 1.5] }) {
//   const c = Math2D.coordsInBasis(b1, b2, v);
//   const singular = !c;
//   return (
//     <Card badge="01" title="Coordinates of v" note="in two bases">
//       <div className="cb-coord-row">
//         <span className="cb-coord-lab v">v<span className="sub">std</span></span>
//         <span className="cb-coord-op">=</span>
//         <div className="cb-vec std">
//           <span className="cell">{Math2D.fmt(v[0])}</span>
//           <span className="cell">{Math2D.fmt(v[1])}</span>
//         </div>
//       </div>
//       <div className="cb-coord-row">
//         <span className="cb-coord-lab">v<span className="sub">B</span></span>
//         <span className="cb-coord-op">=</span>
//         <div className="cb-vec nb">
//           <span className="cell c1">{c ? Math2D.fmt(c[0]) : '\u2014'}</span>
//           <span className="cell c2">{c ? Math2D.fmt(c[1]) : '\u2014'}</span>
//         </div>
//       </div>
//       <div className="cb-decomp-eq">
//         <span className="v">v</span> = <span className="c1">{c ? Math2D.fmt(c[0]) : '?'}</span>
//         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
//         <span className="b1n">b&#8321;</span> + <span className="c2">{c ? Math2D.fmt(c[1]) : '?'}</span>
//         <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
//         <span className="b2n">b&#8322;</span>
//       </div>
//       {singular && (
//         <div className="r2-status-strip warn">
//           <span className="r2-status-badge">!</span>
//           <span>Basis is singular &mdash; b&#8321; and b&#8322; are linearly dependent. Coordinates undefined.</span>
//         </div>
//       )}
//     </Card>
//   );
// }

// export function BasisMatrixCard({ b1 = [1, 0], b2 = [0, 1] }) {
//   const B = Math2D.basisMatrix(b1, b2);
//   const Binv = Math2D.inverse(B);
//   const dB = Math2D.det(B);
//   const singular = Math.abs(dB) < 1e-7;
//   const orth = Math2D.orthInfo(b1, b2);
//   let orthLabel = 'oblique';
//   let orthColor = 'var(--text-dim)';
//   if (orth.kind === 'singular') { orthLabel = 'not a basis'; orthColor = 'var(--warn)'; }
//   else if (orth.kind === 'orthonormal') { orthLabel = 'orthonormal'; orthColor = 'var(--b1)'; }
//   else if (orth.kind === 'orthogonal') { orthLabel = 'orthogonal (not unit)'; orthColor = 'var(--b1)'; }
//   else if (orth.kind === 'oblique') { orthLabel = `oblique, ${Math2D.fmt(orth.angle)}\u00B0`; orthColor = 'var(--b2)'; }
//   return (
//     <Card badge="02" title="Change-of-basis matrix" note="columns = b₁, b₂">
//       <div className="cb-bmat-row">
//         <span className="cb-bmat-lab">B</span>
//         <span className="cb-bmat-eq">=</span>
//         <div className={'cb-bmat' + (singular ? ' singular' : '')}>
//           <span className="cell c1">{Math2D.fmt(B[0][0])}</span>
//           <span className="cell c2">{Math2D.fmt(B[0][1])}</span>
//           <span className="cell c1">{Math2D.fmt(B[1][0])}</span>
//           <span className="cell c2">{Math2D.fmt(B[1][1])}</span>
//         </div>
//       </div>
//       <div className="cb-bmat-row">
//         <span className="cb-bmat-lab inv">B</span>
//         <span className="cb-bmat-eq">=</span>
//         <div className={'cb-bmat' + (Binv ? '' : ' singular')}>
//           <span className="cell">{Binv ? Math2D.fmt(Binv[0][0]) : '\u2014'}</span>
//           <span className="cell">{Binv ? Math2D.fmt(Binv[0][1]) : '\u2014'}</span>
//           <span className="cell">{Binv ? Math2D.fmt(Binv[1][0]) : '\u2014'}</span>
//           <span className="cell">{Binv ? Math2D.fmt(Binv[1][1]) : '\u2014'}</span>
//         </div>
//       </div>
//       <div className="cb-det-line">
//         det B = <span className={'val' + (singular ? ' warn' : '')}>{Math2D.fmt(dB)}</span>
//         &nbsp;&middot;&nbsp;
//         <span className="kind" style={{ color: orthColor }}>{orthLabel}</span>
//       </div>
//     </Card>
//   );
// }

// export function AnimationCard({
//   steps = DEFAULT_ANIM_STEPS,
//   step = 0,
//   progress = 0,
//   isPlaying = false,
//   onStep,
//   onPlayToggle,
//   onPrev,
//   onNext,
//   onReset,
//   duration = 1,
// }) {
//   const pct = Math.max(0, Math.min(1, progress)) * 100;
//   const time = (progress * duration).toFixed(2);
//   const total = duration.toFixed(2);
//   return (
//     <div className="r2-card cb-anim-card">
//       <div className="cb-anim-head"><span className="r2-badge">&#9656;</span>Animation</div>
//       <div className="cb-anim-steps">
//         {steps.map((s, i) => (
//           <button
//             key={i}
//             className={'cb-step-btn' + (i === step ? ' active' : '')}
//             onClick={() => onStep && onStep(i)}
//             type="button"
//           >
//             <span className="num">{s.num}</span>{s.label}
//           </button>
//         ))}
//       </div>
//       <div className="cb-anim-progress">
//         <div className="fill" style={{ width: pct + '%' }} />
//       </div>
//       <div className="cb-anim-controls">
//         <button className="cb-anim-ctrl" title="Previous step" onClick={onPrev} type="button">&#9664;</button>
//         <button className="cb-anim-ctrl play" onClick={onPlayToggle} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
//         <button className="cb-anim-ctrl" title="Next step" onClick={onNext} type="button">&#9654;</button>
//         <span className="cb-anim-time">{time} / {total}</span>
//         <button className="cb-anim-ctrl reset" title="Reset" onClick={onReset} type="button">
//           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M3 12a9 9 0 1 0 3-6.7" />
//             <polyline points="3 4 3 10 9 10" />
//           </svg>
//           <span className="lbl">Reset</span>
//         </button>
//       </div>
//     </div>
//   );
// }

// // =====================================================================
// //   SECTION 6  ::  Animation state hook (placeholder)
// // =====================================================================
// export function useAnimState(options = {}) {
//   const { initialStep = 0, initialProgress = 0, initialPlaying = false } = options;
//   const [step, setStep] = useState(initialStep);
//   const [progress, setProgress] = useState(initialProgress);
//   const [isPlaying, setIsPlaying] = useState(initialPlaying);

//   const playToggle = useCallback(() => setIsPlaying((p) => !p), []);
//   const reset = useCallback(() => { setStep(0); setProgress(0); setIsPlaying(false); }, []);
//   const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
//   const next = useCallback(() => setStep((s) => s + 1), []);

//   return { step, progress, isPlaying, setStep, setProgress, setIsPlaying, playToggle, reset, prev, next };
// }

// // =====================================================================
// //   SECTION 7  ::  Core + Wrapper
// // =====================================================================
// export function ChangeBasisCore({
//   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
//   children,
// }) {
//   const state = useChangeBasisState({ initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios });
//   if (typeof children === 'function') return children(state);
//   return null;
// }

// export default function ChangeBasis({
//   lede,
//   ledeCrumb = DEFAULT_LEDE.crumb,
//   ledeBody = DEFAULT_LEDE.body,
//   initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
//   layerChips, canvas, explanation, coordinates, basisMatrix, scenariosPanel, animation,
//   visibleScenarios, enabledLayers, explanationOverride,
//   animSteps = DEFAULT_ANIM_STEPS,
//   layout,
//   className, style,
// }) {
//   const anim = useAnimState();

//   return (
//     <ChangeBasisCore
//       initialB1={initialB1}
//       initialB2={initialB2}
//       initialV={initialV}
//       initialPreset={initialPreset}
//       initialLayers={initialLayers}
//       scenarios={scenarios}
//     >
//       {(ctx) => {
//         const slotChips = layerChips !== undefined ? layerChips : (
//           <LayerChips layers={ctx.layers} onChange={ctx.setLayers} defs={ALL_LAYER_DEFS} enabled={enabledLayers} />
//         );
//         const slotCanvas = canvas !== undefined ? canvas : (
//           <BasisCanvas
//             b1={ctx.b1} b2={ctx.b2} v={ctx.v}
//             layers={ctx.layers}
//             geom={CB_GEOM}
//             onB1Change={ctx.setB1}
//             onB2Change={ctx.setB2}
//             onVChange={ctx.setV}
//           />
//         );
//         const slotExp = explanation !== undefined ? explanation : (
//           <ExplanationCard
//             preset={ctx.preset}
//             scenarios={scenarios || SCENARIOS}
//             override={explanationOverride}
//           />
//         );
//         const slotCoords = coordinates !== undefined ? coordinates : (
//           <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v} />
//         );
//         const slotMatrix = basisMatrix !== undefined ? basisMatrix : (
//           <BasisMatrixCard b1={ctx.b1} b2={ctx.b2} />
//         );
//         const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
//           <ScenariosPanel
//             scenarios={scenarios || SCENARIOS}
//             groups={SCENARIO_GROUPS}
//             preset={ctx.preset}
//             onSelect={ctx.selectPreset}
//             visibleKeys={visibleScenarios}
//             columns={1}
//             badge="03"
//           />
//         );
//         const slotAnim = animation !== undefined ? animation : (
//           <AnimationCard
//             steps={animSteps}
//             step={anim.step}
//             progress={anim.progress}
//             isPlaying={anim.isPlaying}
//             onStep={anim.setStep}
//             onPlayToggle={anim.playToggle}
//             onPrev={anim.prev}
//             onNext={anim.next}
//             onReset={anim.reset}
//           />
//         );

//         if (typeof layout === 'function') {
//           return (
//             <AppShell extraCSS={TOOL_CSS} className={className} style={style} lede={null} scenarios={null}>
//               {layout(ctx)}
//             </AppShell>
//           );
//         }

//         return (
//           <AppShell
//             ledeCrumb={lede === undefined ? ledeCrumb : null}
//             ledeBody={lede === undefined ? ledeBody : null}
//             lede={lede}
//             scenarios={null}
//             extraCSS={TOOL_CSS}
//             className={className}
//             style={style}
//           >
//             <main className="r2-main cb-cols">
//               <section className="r2-scen-col">
//                 {slotScenarios}
//               </section>
//               <section className="r2-canvas-col">
//                 <div className="cb-canvas-wrap">{slotCanvas}</div>
//                 <div className="r2-readouts cols-3">
//                   <CanvasReadout kind="v"  label="v" value={Math2D.fmtPair(ctx.v)} />
//                   <CanvasReadout kind="b1" label="b" sub="1" value={Math2D.fmtPair(ctx.b1)} />
//                   <CanvasReadout kind="b2" label="b" sub="2" value={Math2D.fmtPair(ctx.b2)} />
//                 </div>
//                 {slotAnim}
//               </section>
//               <section className="r2-info-col">
//                 {slotExp}
//                 {slotChips}
//                 {slotCoords}
//                 {slotMatrix}
//               </section>
//             </main>
//           </AppShell>
//         );
//       }}
//     </ChangeBasisCore>
//   );
// }


'use client';

import { useState, useCallback } from 'react';
import {
  Math2D, SVGRender, projection, useDrag, DEFAULT_GEOM,
  AppShell, Card, LayerChips, CanvasReadout, ScenariosPanel, ExplanationCard,
} from '../2DCore';

// =====================================================================
//   SECTION 1  ::  Scenarios
// =====================================================================
const C30 = Math.cos(Math.PI / 6), S30 = Math.sin(Math.PI / 6);
const SQ = Math.SQRT1_2;

export const SCENARIOS = {
  standard: {
    label: 'Standard basis', b1: [1, 0], b2: [0, 1], group: 'natural', tag: 'identity',
    title: 'Standard basis', exTag: 'identity \u00B7 e\u2081, e\u2082',
    body: 'The default coordinate system. <span class="b1">b\u2081</span> = (1, 0), <span class="b2">b\u2082</span> = (0, 1). Coordinates in this basis match the standard coordinates of <span class="v">v</span> &mdash; they&apos;re the same numbers. The change-of-basis matrix is the identity.',
  },
  rotated30: {
    label: 'Rotated 30\u00B0', b1: [C30, S30], b2: [-S30, C30], group: 'natural', tag: '\u22A5 unit',
    title: 'Rotated by 30\u00B0', exTag: 'orthonormal \u00B7 rotation',
    body: 'A rotated orthonormal basis. <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> are still unit vectors at right angles &mdash; just turned. <span class="v">v</span> sits in the same place, but its new coordinates are <em>rotated in the opposite direction</em>. For orthonormal bases, <code>B\u207B\u00B9 = B\u1D40</code>.',
  },
  rotated45: {
    label: 'Rotated 45\u00B0', b1: [SQ, SQ], b2: [-SQ, SQ], group: 'natural', tag: '\u22A5 unit',
    title: 'Rotated by 45\u00B0', exTag: 'orthonormal \u00B7 diagonal axes',
    body: 'New axes lie along <code>y = x</code> and <code>y = \u2212x</code>. <span class="v">v</span> is unchanged; its coordinates simply trade Cartesian for diagonal. Both bases describe the same space &mdash; just from different angles.',
  },
  scaled: {
    label: 'Stretched axes', b1: [2, 0], b2: [0, 0.5], group: 'natural', tag: 'orth, non-unit',
    title: 'Stretched orthogonal basis', exTag: 'orthogonal \u00B7 not unit',
    body: 'Axes still perpendicular but no longer unit length. One coord-step along <span class="b1">b\u2081</span> covers 2 standard units; one along <span class="b2">b\u2082</span> covers 0.5. So <span class="v">v</span>&apos;s coordinates <em>shrink along b\u2081 and grow along b\u2082</em> relative to standard.',
  },
  skewed: {
    label: 'Skewed', b1: [1, 0.4], b2: [-0.3, 1], group: 'nonorth', tag: 'not \u22A5',
    title: 'Skewed basis', exTag: 'non-orthogonal \u00B7 valid',
    body: '<span class="b1">b\u2081</span> stays mostly horizontal and <span class="b2">b\u2082</span> tilts left. The basis is still <em>valid</em> &mdash; det &ne; 0 &mdash; just not perpendicular. The basis-grid (dashed) shows parallelograms instead of squares. <span class="v">v</span>&apos;s coordinates still exist uniquely.',
  },
  diagBasis: {
    label: 'Diagonals', b1: [1, 1], b2: [1, -1], group: 'nonorth', tag: '\u22A5 not unit',
    title: 'Diagonal basis', exTag: 'orthogonal \u00B7 longer than unit',
    body: 'Two perpendicular diagonals. Each basis vector has length <code>\u221A2</code>, so they&apos;re orthogonal but not <em>orthonormal</em>. <span class="v">v</span>&apos;s coordinates are scaled accordingly.',
  },
  obtuse: {
    label: 'Obtuse basis', b1: [1, 0.3], b2: [0.3, 1], group: 'nonorth', tag: 'wide angle',
    title: 'Wide-angle basis', exTag: 'non-orthogonal \u00B7 valid',
    body: 'Both <span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> tilt toward each other. Still a valid basis. The parallelogram cells in the basis-grid become elongated rhombi.',
  },
  flipY: {
    label: 'Y flipped', b1: [1, 0], b2: [0, -1], group: 'special', tag: 'det \u22121',
    title: 'Y-axis flipped', exTag: 'orientation reversed',
    body: 'Same x-axis but y points down. <code>det B = \u22121</code> &mdash; the basis is left-handed instead of right-handed. <span class="v">v</span>&apos;s y-coord flips sign in this basis.',
  },
  swapped: {
    label: 'Axes swapped', b1: [0, 1], b2: [1, 0], group: 'special', tag: 'det \u22121',
    title: 'Axes swapped', exTag: '(b\u2081, b\u2082) \u2194',
    body: 'Just trade the two axes. <span class="b1">b\u2081</span> = (0, 1), <span class="b2">b\u2082</span> = (1, 0). <span class="v">v</span>&apos;s coordinates swap as well. <code>det B = \u22121</code> &mdash; swapping two basis vectors flips orientation.',
  },
  collinear: {
    label: 'Collinear (bad)', b1: [1, 0], b2: [2, 0], group: 'degenerate', tag: 'det = 0',
    title: 'Degenerate \u2014 not a basis', exTag: 'det = 0 \u00B7 linearly dependent',
    body: '<span class="b1">b\u2081</span> and <span class="b2">b\u2082</span> both lie on the x-axis &mdash; they&apos;re multiples of each other. They <em>fail to span</em> the plane: any vector off the x-axis can&apos;t be written as a combination. <span class="warn">Coordinates are undefined.</span> A proper basis needs two linearly independent vectors.',
  },
};

export const SCENARIO_GROUPS = [
  { key: 'natural',    label: 'Natural',     tag: '\u22A5 axes',
    color: 'var(--b1)', softBg: 'var(--b1-tint)', border: 'var(--b1-line)' },
  { key: 'nonorth',    label: 'Non-orth',    tag: 'parallelogram',
    color: 'var(--b2)', softBg: 'var(--b2-tint)', border: 'var(--b2-line)' },
  { key: 'special',    label: 'Orientation', tag: 'det \u22121',
    color: 'var(--accent)', softBg: 'var(--accent-soft)', border: 'var(--accent-line)' },
  { key: 'degenerate', label: 'Degenerate',  tag: 'not a basis',
    color: 'var(--warn)', softBg: 'var(--warn-tint)', border: 'var(--warn-line)' },
];

export const DEFAULT_LAYERS = { grid: true, bgrid: true, decomp: true, labels: true };

export const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'std grid' },
  { key: 'bgrid', label: 'basis grid', swatch: 'linear-gradient(to right,#0e6e8a 50%,#5b34c4 50%)' },
  { key: 'decomp', label: 'decomposition' },
  { key: 'labels', label: 'labels' },
];

// =====================================================================
//   SECTION 1b  ::  Geom (square canvas, 7x7 grid extent)
// =====================================================================
export const CB_GEOM = { width: 600, height: 600, scale: 50, gridRx: 6, gridRy: 6 };

// =====================================================================
//   SECTION 1c  ::  Animation steps (placeholder)
// =====================================================================
export const DEFAULT_ANIM_STEPS = [
  { num: '01', label: 'Start' },
  { num: '02', label: 'Tilt b\u2081' },
  { num: '03', label: 'Tilt b\u2082' },
  { num: '04', label: 'Settle' },
];

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="r2-dot">&middot;</span>Change of basis',
  body: 'Same vector, different numbers. Drag <span class="b1"><strong>b\u2081</strong></span> and <span class="b2"><strong>b\u2082</strong></span> to define a new basis &mdash; <span class="v">v</span> stays put in space, but its coordinates <code>(c\u2081, c\u2082)</code> shift to express <code>v = c\u2081\u00B7b\u2081 + c\u2082\u00B7b\u2082</code>.',
};

// =====================================================================
//   SECTION 2  ::  Tool-specific CSS
// =====================================================================
const TOOL_CSS = `
/* ---- app width override ---- */
.r2-root .r2-app{max-width:1340px}

/* ---- 3-col layout: scenarios | square canvas | info ---- */
.r2-main.cb-cols{grid-template-columns:230px 620px minmax(360px,1fr)}
.r2-scen-col{display:flex;flex-direction:column;gap:10px;min-width:0}
@media (max-width:1240px){
  .r2-main.cb-cols{grid-template-columns:1fr;justify-content:center}
}

/* ---- canvas: square, side padding to shrink by 2 tiles ---- */
.cb-canvas-wrap{padding:0 44px;width:100%}
.cb-canvas-wrap .r2-canvas{aspect-ratio:1/1;height:auto}

/* ---- scenarios as sidebar (single column) ---- */
.r2-scen-sections.cols-1{grid-template-columns:1fr;gap:14px}

/* ---- right column: 10% smaller fonts ---- */
.r2-info-col .r2-card h2{font-size:9.9px}
.r2-info-col .r2-card h2 .r2-note{font-size:9.9px}
.r2-info-col .r2-ex-header h3{font-size:17.1px}
.r2-info-col .r2-ex-tag{font-size:9px}
.r2-info-col .r2-ex-body{font-size:12.6px}
.r2-info-col .r2-ex-body code{font-size:10.8px}
.r2-info-col .r2-chip{font-size:9.9px}
.r2-info-col .r2-status-strip{font-size:10.8px}
.r2-info-col .cb-coord-lab{font-size:15.3px}
.r2-info-col .cb-coord-lab .sub{font-size:9.9px}
.r2-info-col .cb-coord-op{font-size:11.7px}
.r2-info-col .cb-vec{font-size:11.7px}
.r2-info-col .cb-decomp-eq{font-size:11.25px}
.r2-info-col .cb-bmat-lab{font-size:16.2px}
.r2-info-col .cb-bmat-lab.inv::after{font-size:9.9px}
.r2-info-col .cb-bmat-eq{font-size:12.6px}
.r2-info-col .cb-bmat{font-size:12.15px}
.r2-info-col .cb-det-line{font-size:11.25px}
.r2-info-col .cb-anim-head{font-size:9.9px}
.r2-info-col .cb-step-btn{font-size:9.45px}
.r2-info-col .cb-step-btn .num{font-size:8.1px}
.r2-info-col .cb-anim-ctrl{font-size:10.8px}
.r2-info-col .cb-anim-ctrl.play{font-size:9.45px}
.r2-info-col .cb-anim-time{font-size:9.9px}
.r2-info-col .cb-anim-ctrl.reset .lbl{font-size:9px}

/* ---- basis grid + decomposition + arrows ---- */
.cb-bgrid-1{stroke:var(--b1);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
.cb-bgrid-1.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
.cb-bgrid-2{stroke:var(--b2);stroke-width:1;fill:none;opacity:.18;stroke-dasharray:4 3}
.cb-bgrid-2.axis{stroke-width:1.4;opacity:.5;stroke-dasharray:none}
.cb-decomp-leg1{stroke:var(--b1);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
.cb-decomp-leg2{stroke:var(--b2);stroke-width:1.8;fill:none;stroke-dasharray:6 4;opacity:.55;stroke-linecap:round}
.cb-decomp-corner{fill:var(--text-faint);stroke:none}
.cb-v-shaft{stroke:var(--v);stroke-width:2.5;fill:none;stroke-linecap:round}
.cb-b1-shaft{stroke:var(--b1);stroke-width:2.4;fill:none;stroke-linecap:round}
.cb-b2-shaft{stroke:var(--b2);stroke-width:2.4;fill:none;stroke-linecap:round}
.cb-v-handle{fill:var(--v);stroke:#fff;stroke-width:1.5;cursor:grab}
.cb-b1-handle{fill:var(--b1);stroke:#fff;stroke-width:1.5;cursor:grab}
.cb-b2-handle{fill:var(--b2);stroke:#fff;stroke-width:1.5;cursor:grab}
.cb-v-label{fill:var(--v);font-family:var(--font-display);font-style:italic;font-size:16px;font-weight:600}
.cb-b1-label{fill:var(--b1);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
.cb-b2-label{fill:var(--b2);font-family:var(--font-display);font-style:italic;font-size:14px;font-weight:600}
.cb-singular-warn{fill:var(--warn);font-family:var(--font-mono);font-size:12px;font-weight:600;letter-spacing:.05em}

/* ---- coordinates card ---- */
.cb-coord-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:6px 0;flex-wrap:wrap}
.cb-coord-lab{font-family:var(--font-display);font-style:italic;font-size:17px;font-weight:500;color:var(--text)}
.cb-coord-lab .sub{font-size:11px;vertical-align:sub;font-weight:400;color:var(--text-faint)}
.cb-coord-lab.v{color:var(--v)}
.cb-coord-op{color:var(--text-faint);font-size:13px}
.cb-vec{display:flex;flex-direction:column;gap:2px;padding:6px 10px;position:relative;font-family:var(--font-mono);font-size:13px}
.cb-vec::before,.cb-vec::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
.cb-vec::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.cb-vec::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.cb-vec .cell{text-align:center;min-width:38px;padding:0 4px;font-variant-numeric:tabular-nums;font-weight:500}
.cb-vec.std .cell{color:var(--v)}
.cb-vec.nb .cell.c1{color:var(--b1)}
.cb-vec.nb .cell.c2{color:var(--b2)}

.cb-decomp-eq{
  font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
  text-align:center;padding:10px 0 2px;margin-top:8px;
  border-top:1px solid var(--border);letter-spacing:.02em;
}
.cb-decomp-eq .v{color:var(--v);font-weight:600}
.cb-decomp-eq .c1{color:var(--b1);font-weight:600}
.cb-decomp-eq .c2{color:var(--b2);font-weight:600}
.cb-decomp-eq .b1n{color:var(--b1);font-family:var(--font-display);font-style:italic;font-weight:500}
.cb-decomp-eq .b2n{color:var(--b2);font-family:var(--font-display);font-style:italic;font-weight:500}

/* ---- basis-matrix card ---- */
.cb-bmat-row{display:flex;align-items:center;justify-content:center;gap:10px;padding:5px 0;flex-wrap:wrap}
.cb-bmat-lab{font-family:var(--font-display);font-style:italic;font-size:18px;font-weight:500;color:var(--text)}
.cb-bmat-lab.inv::after{content:'\\207B\\00B9';font-size:11px;vertical-align:super;font-weight:400}
.cb-bmat-eq{color:var(--text-faint);font-size:14px}
.cb-bmat{display:grid;gap:3px 12px;padding:7px 10px;position:relative;font-family:var(--font-mono);font-size:13.5px;grid-template-columns:auto auto}
.cb-bmat::before,.cb-bmat::after{content:'';position:absolute;top:3px;bottom:3px;width:5px;border:1.2px solid var(--text-dim)}
.cb-bmat::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.cb-bmat::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.cb-bmat .cell{text-align:center;min-width:38px;padding:1px 3px;font-variant-numeric:tabular-nums;font-weight:600}
.cb-bmat .cell.c1{color:var(--b1)}
.cb-bmat .cell.c2{color:var(--b2)}
.cb-bmat.singular .cell{color:var(--warn)}
.cb-det-line{
  font-family:var(--font-mono);font-size:12.5px;color:var(--text-dim);
  text-align:center;padding:10px 0 2px;margin-top:6px;
  border-top:1px solid var(--border);letter-spacing:.02em;
}
.cb-det-line .val{color:var(--text);font-weight:600;font-variant-numeric:tabular-nums}
.cb-det-line .val.warn{color:var(--warn)}
.cb-det-line .kind{font-weight:500;margin-left:2px}

/* ---- animation panel ---- */
.cb-anim-card{padding:12px 14px}
.cb-anim-head{
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
  color:var(--text-faint);margin-bottom:10px;display:flex;align-items:center;
}
.cb-anim-head .r2-badge{color:var(--accent);margin-right:6px}
.cb-anim-steps{display:flex;gap:6px;align-items:center;margin-bottom:10px}
.cb-step-btn{
  flex:1;background:var(--surface-2);border:1px solid var(--border);
  padding:6px 8px;border-radius:4px;font-family:var(--font-mono);font-size:10.5px;
  letter-spacing:.04em;color:var(--text-dim);font-weight:600;cursor:pointer;text-align:center;
  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;transition:all .12s;
}
.cb-step-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.cb-step-btn.active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.cb-step-btn .num{display:block;font-size:9px;color:var(--text-faint);margin-bottom:2px;letter-spacing:.1em}
.cb-step-btn.active .num{color:var(--accent)}
.cb-anim-progress{
  height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px;
}
.cb-anim-progress .fill{
  position:absolute;left:0;top:0;bottom:0;
  background:linear-gradient(90deg,var(--b1),var(--b2));border-radius:3px;
  transition:width .2s;
}
.cb-anim-controls{display:flex;gap:6px;align-items:center}
.cb-anim-ctrl{
  background:var(--surface-2);border:1px solid var(--border);
  width:30px;height:28px;border-radius:4px;cursor:pointer;
  font-family:var(--font-mono);font-size:12px;color:var(--text-dim);font-weight:600;
  display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;
}
.cb-anim-ctrl:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.cb-anim-ctrl.play{
  background:var(--accent);border-color:var(--accent);color:#fff;
  width:auto;padding:0 14px;letter-spacing:.08em;font-size:10.5px;text-transform:uppercase;
}
.cb-anim-ctrl.play:hover{background:var(--accent-hover);color:#fff;border-color:var(--accent-hover)}
.cb-anim-time{
  font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
  font-variant-numeric:tabular-nums;margin-left:6px;
}
.cb-anim-ctrl.reset{margin-left:auto;width:auto;padding:0 10px;gap:6px;display:inline-flex;align-items:center}
.cb-anim-ctrl.reset .lbl{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;font-weight:600}
.cb-anim-ctrl.reset svg{display:block}
`;

// =====================================================================
//   SECTION 3  ::  Hook
// =====================================================================
export function useChangeBasisState(options = {}) {
  const {
    initialB1 = [1, 0],
    initialB2 = [0, 1],
    initialV = [2.5, 1.5],
    initialPreset = 'standard',
    initialLayers = DEFAULT_LAYERS,
    scenarios = SCENARIOS,
  } = options;

  const [b1, setB1Internal] = useState(initialB1);
  const [b2, setB2Internal] = useState(initialB2);
  const [v, setV] = useState(initialV);
  const [preset, setPresetInternal] = useState(initialPreset);
  const [layers, setLayers] = useState(initialLayers);

  const setB1 = useCallback((next) => { setB1Internal(next); setPresetInternal(null); }, []);
  const setB2 = useCallback((next) => { setB2Internal(next); setPresetInternal(null); }, []);

  const selectPreset = useCallback((key) => {
    const sc = scenarios[key];
    if (!sc) return;
    setB1Internal(sc.b1.slice());
    setB2Internal(sc.b2.slice());
    setPresetInternal(key);
  }, [scenarios]);

  return { b1, b2, v, preset, layers, setB1, setB2, setV, selectPreset, setLayers };
}

// =====================================================================
//   SECTION 4  ::  Tool-specific SVG helpers
// =====================================================================
function decompositionSVG(b1, b2, v, geom) {
  const c = Math2D.coordsInBasis(b1, b2, v);
  if (!c) return '';
  const tx = projection(geom);
  const [ox, oy] = tx([0, 0]);
  const leg1End = [c[0] * b1[0], c[0] * b1[1]];
  const [l1x, l1y] = tx(leg1End);
  const [vx, vy] = tx(v);
  let s = '';
  s += `<line class="cb-decomp-leg1" x1="${ox}" y1="${oy}" x2="${l1x.toFixed(2)}" y2="${l1y.toFixed(2)}"/>`;
  s += `<line class="cb-decomp-leg2" x1="${l1x.toFixed(2)}" y1="${l1y.toFixed(2)}" x2="${vx.toFixed(2)}" y2="${vy.toFixed(2)}"/>`;
  s += `<circle class="cb-decomp-corner" cx="${l1x.toFixed(2)}" cy="${l1y.toFixed(2)}" r="3"/>`;
  return s;
}

function arrowSVG(p, kind, label, showLabel, geom) {
  const tx = projection(geom);
  const [ox, oy] = tx([0, 0]);
  const mag = Math.hypot(p[0], p[1]);
  let s = '';
  if (mag < 0.02) {
    s += `<circle class="cb-${kind}-handle" cx="${ox}" cy="${oy}" r="5.5"/>`;
    return s;
  }
  const [tipX, tipY] = tx(p);
  s += `<line class="cb-${kind}-shaft" x1="${ox}" y1="${oy}" x2="${tipX.toFixed(2)}" y2="${tipY.toFixed(2)}" marker-end="url(#cb-arr-${kind})"/>`;
  s += `<circle class="cb-${kind}-handle" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="5.5"/>`;
  if (showLabel) {
    const lx = p[0] + (p[0] >= 0 ? 0.35 : -0.35);
    const ly = p[1] + (p[1] >= 0 ? 0.35 : -0.35);
    const [px, py] = tx([lx, ly]);
    s += `<text class="cb-${kind}-label" x="${px.toFixed(2)}" y="${py.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">${label}</text>`;
  }
  return s;
}

// =====================================================================
//   SECTION 5  ::  Sub-components
// =====================================================================
export function BasisCanvas({
  b1 = [1, 0],
  b2 = [0, 1],
  v = [2.5, 1.5],
  layers = DEFAULT_LAYERS,
  geom = CB_GEOM,
  onB1Change,
  onB2Change,
  onVChange,
  className,
  style,
}) {
  const { svgRef, isDragging, handlers } = useDrag({
    geom,
    onDrag: (h, p) => {
      if (h === 'v' && onVChange) onVChange(p);
      else if (h === 'b1' && onB1Change) onB1Change(p);
      else if (h === 'b2' && onB2Change) onB2Change(p);
    },
  });

  let inner = '';
  if (layers.grid) inner += SVGRender.grid(geom);
  if (layers.bgrid) inner += SVGRender.basisGrid(b1, b2, geom, 'cb-bgrid-1', 'cb-bgrid-2');
  if (layers.decomp) inner += decompositionSVG(b1, b2, v, geom);
  inner += arrowSVG(b1, 'b1', '\u0062\u2081', layers.labels, geom);
  inner += arrowSVG(b2, 'b2', '\u0062\u2082', layers.labels, geom);
  inner += arrowSVG(v, 'v', 'v', layers.labels, geom);
  inner += SVGRender.origin(geom);

  const singular = Math.abs(Math2D.det(Math2D.basisMatrix(b1, b2))) < 1e-7;
  if (singular) {
    inner += `<text class="cb-singular-warn" x="${geom.width / 2}" y="30" text-anchor="middle">basis is singular \u2014 coords undefined</text>`;
  }

  const tx = projection(geom);
  const [vx, vy] = tx(v);
  const [b1x, b1y] = tx(b1);
  const [b2x, b2y] = tx(b2);

  return (
    <svg
      ref={svgRef}
      className={'r2-canvas' + (isDragging ? ' dragging' : '') + (className ? ' ' + className : '')}
      style={style}
      viewBox={`0 0 ${geom.width} ${geom.height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...handlers}
    >
      <defs>
        <marker id="cb-arr-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#b54708" />
        </marker>
        <marker id="cb-arr-b1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0e6e8a" />
        </marker>
        <marker id="cb-arr-b2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#5b34c4" />
        </marker>
      </defs>
      <g dangerouslySetInnerHTML={{ __html: inner }} />
      {onB1Change && <circle className="r2-tip-hit" data-handle="b1" cx={b1x} cy={b1y} r={14} />}
      {onB2Change && <circle className="r2-tip-hit" data-handle="b2" cx={b2x} cy={b2y} r={14} />}
      {onVChange  && <circle className="r2-tip-hit" data-handle="v"  cx={vx}  cy={vy}  r={14} />}
    </svg>
  );
}

export function CoordinatesCard({ b1 = [1, 0], b2 = [0, 1], v = [2.5, 1.5] }) {
  const c = Math2D.coordsInBasis(b1, b2, v);
  const singular = !c;
  return (
    <Card badge="01" title="Coordinates of v" note="in two bases">
      <div className="cb-coord-row">
        <span className="cb-coord-lab v">v<span className="sub">std</span></span>
        <span className="cb-coord-op">=</span>
        <div className="cb-vec std">
          <span className="cell">{Math2D.fmt(v[0])}</span>
          <span className="cell">{Math2D.fmt(v[1])}</span>
        </div>
      </div>
      <div className="cb-coord-row">
        <span className="cb-coord-lab">v<span className="sub">B</span></span>
        <span className="cb-coord-op">=</span>
        <div className="cb-vec nb">
          <span className="cell c1">{c ? Math2D.fmt(c[0]) : '\u2014'}</span>
          <span className="cell c2">{c ? Math2D.fmt(c[1]) : '\u2014'}</span>
        </div>
      </div>
      <div className="cb-decomp-eq">
        <span className="v">v</span> = <span className="c1">{c ? Math2D.fmt(c[0]) : '?'}</span>
        <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
        <span className="b1n">b&#8321;</span> + <span className="c2">{c ? Math2D.fmt(c[1]) : '?'}</span>
        <span style={{ color: 'var(--text-faint)' }}>&middot;</span>
        <span className="b2n">b&#8322;</span>
      </div>
      {singular && (
        <div className="r2-status-strip warn">
          <span className="r2-status-badge">!</span>
          <span>Basis is singular &mdash; b&#8321; and b&#8322; are linearly dependent. Coordinates undefined.</span>
        </div>
      )}
    </Card>
  );
}

export function BasisMatrixCard({ b1 = [1, 0], b2 = [0, 1] }) {
  const B = Math2D.basisMatrix(b1, b2);
  const Binv = Math2D.inverse(B);
  const dB = Math2D.det(B);
  const singular = Math.abs(dB) < 1e-7;
  const orth = Math2D.orthInfo(b1, b2);
  let orthLabel = 'oblique';
  let orthColor = 'var(--text-dim)';
  if (orth.kind === 'singular') { orthLabel = 'not a basis'; orthColor = 'var(--warn)'; }
  else if (orth.kind === 'orthonormal') { orthLabel = 'orthonormal'; orthColor = 'var(--b1)'; }
  else if (orth.kind === 'orthogonal') { orthLabel = 'orthogonal (not unit)'; orthColor = 'var(--b1)'; }
  else if (orth.kind === 'oblique') { orthLabel = `oblique, ${Math2D.fmt(orth.angle)}\u00B0`; orthColor = 'var(--b2)'; }
  return (
    <Card badge="02" title="Change-of-basis matrix" note="columns = b₁, b₂">
      <div className="cb-bmat-row">
        <span className="cb-bmat-lab">B</span>
        <span className="cb-bmat-eq">=</span>
        <div className={'cb-bmat' + (singular ? ' singular' : '')}>
          <span className="cell c1">{Math2D.fmt(B[0][0])}</span>
          <span className="cell c2">{Math2D.fmt(B[0][1])}</span>
          <span className="cell c1">{Math2D.fmt(B[1][0])}</span>
          <span className="cell c2">{Math2D.fmt(B[1][1])}</span>
        </div>
      </div>
      <div className="cb-bmat-row">
        <span className="cb-bmat-lab inv">B</span>
        <span className="cb-bmat-eq">=</span>
        <div className={'cb-bmat' + (Binv ? '' : ' singular')}>
          <span className="cell">{Binv ? Math2D.fmt(Binv[0][0]) : '\u2014'}</span>
          <span className="cell">{Binv ? Math2D.fmt(Binv[0][1]) : '\u2014'}</span>
          <span className="cell">{Binv ? Math2D.fmt(Binv[1][0]) : '\u2014'}</span>
          <span className="cell">{Binv ? Math2D.fmt(Binv[1][1]) : '\u2014'}</span>
        </div>
      </div>
      <div className="cb-det-line">
        det B = <span className={'val' + (singular ? ' warn' : '')}>{Math2D.fmt(dB)}</span>
        &nbsp;&middot;&nbsp;
        <span className="kind" style={{ color: orthColor }}>{orthLabel}</span>
      </div>
    </Card>
  );
}

export function AnimationCard({
  steps = DEFAULT_ANIM_STEPS,
  step = 0,
  progress = 0,
  isPlaying = false,
  onStep,
  onPlayToggle,
  onPrev,
  onNext,
  onReset,
  duration = 1,
}) {
  const pct = Math.max(0, Math.min(1, progress)) * 100;
  const time = (progress * duration).toFixed(2);
  const total = duration.toFixed(2);
  return (
    <div className="r2-card cb-anim-card">
      <div className="cb-anim-head"><span className="r2-badge">&#9656;</span>Animation</div>
      <div className="cb-anim-steps">
        {steps.map((s, i) => (
          <button
            key={i}
            className={'cb-step-btn' + (i === step ? ' active' : '')}
            onClick={() => onStep && onStep(i)}
            type="button"
          >
            <span className="num">{s.num}</span>{s.label}
          </button>
        ))}
      </div>
      <div className="cb-anim-progress">
        <div className="fill" style={{ width: pct + '%' }} />
      </div>
      <div className="cb-anim-controls">
        <button className="cb-anim-ctrl" title="Previous step" onClick={onPrev} type="button">&#9664;</button>
        <button className="cb-anim-ctrl play" onClick={onPlayToggle} type="button">{isPlaying ? 'Pause' : 'Play'}</button>
        <button className="cb-anim-ctrl" title="Next step" onClick={onNext} type="button">&#9654;</button>
        <span className="cb-anim-time">{time} / {total}</span>
        <button className="cb-anim-ctrl reset" title="Reset" onClick={onReset} type="button">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 3-6.7" />
            <polyline points="3 4 3 10 9 10" />
          </svg>
          <span className="lbl">Reset</span>
        </button>
      </div>
    </div>
  );
}

// =====================================================================
//   SECTION 6  ::  Animation state hook (placeholder)
// =====================================================================
export function useAnimState(options = {}) {
  const { initialStep = 0, initialProgress = 0, initialPlaying = false } = options;
  const [step, setStep] = useState(initialStep);
  const [progress, setProgress] = useState(initialProgress);
  const [isPlaying, setIsPlaying] = useState(initialPlaying);

  const playToggle = useCallback(() => setIsPlaying((p) => !p), []);
  const reset = useCallback(() => { setStep(0); setProgress(0); setIsPlaying(false); }, []);
  const prev = useCallback(() => setStep((s) => Math.max(0, s - 1)), []);
  const next = useCallback(() => setStep((s) => s + 1), []);

  return { step, progress, isPlaying, setStep, setProgress, setIsPlaying, playToggle, reset, prev, next };
}

// =====================================================================
//   SECTION 7  ::  Core + Wrapper
// =====================================================================
export function ChangeBasisCore({
  initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
  children,
}) {
  const state = useChangeBasisState({ initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios });
  if (typeof children === 'function') return children(state);
  return null;
}

export default function ChangeBasis({
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody = DEFAULT_LEDE.body,
  initialB1, initialB2, initialV, initialPreset, initialLayers, scenarios,
  layerChips, canvas, explanation, coordinates, basisMatrix, scenariosPanel, animation,
  visibleScenarios, enabledLayers, explanationOverride,
  animSteps = DEFAULT_ANIM_STEPS,
  layout,
  className, style,
}) {
  const anim = useAnimState();

  return (
    <ChangeBasisCore
      initialB1={initialB1}
      initialB2={initialB2}
      initialV={initialV}
      initialPreset={initialPreset}
      initialLayers={initialLayers}
      scenarios={scenarios}
    >
      {(ctx) => {
        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={ctx.layers} onChange={ctx.setLayers} defs={ALL_LAYER_DEFS} enabled={enabledLayers} />
        );
        const slotCanvas = canvas !== undefined ? canvas : (
          <BasisCanvas
            b1={ctx.b1} b2={ctx.b2} v={ctx.v}
            layers={ctx.layers}
            geom={CB_GEOM}
            onB1Change={ctx.setB1}
            onB2Change={ctx.setB2}
            onVChange={ctx.setV}
          />
        );
        const slotExp = explanation !== undefined ? explanation : (
          <ExplanationCard
            preset={ctx.preset}
            scenarios={scenarios || SCENARIOS}
            override={explanationOverride}
          />
        );
        const slotCoords = coordinates !== undefined ? coordinates : (
          <CoordinatesCard b1={ctx.b1} b2={ctx.b2} v={ctx.v} />
        );
        const slotMatrix = basisMatrix !== undefined ? basisMatrix : (
          <BasisMatrixCard b1={ctx.b1} b2={ctx.b2} />
        );
        const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
          <ScenariosPanel
            scenarios={scenarios || SCENARIOS}
            groups={SCENARIO_GROUPS}
            preset={ctx.preset}
            onSelect={ctx.selectPreset}
            visibleKeys={visibleScenarios}
            columns={1}
            badge="03"
          />
        );
        const slotAnim = animation !== undefined ? animation : (
          <AnimationCard
            steps={animSteps}
            step={anim.step}
            progress={anim.progress}
            isPlaying={anim.isPlaying}
            onStep={anim.setStep}
            onPlayToggle={anim.playToggle}
            onPrev={anim.prev}
            onNext={anim.next}
            onReset={anim.reset}
          />
        );

        if (typeof layout === 'function') {
          return (
            <AppShell extraCSS={TOOL_CSS} className={className} style={style} lede={null} scenarios={null}>
              {layout(ctx)}
            </AppShell>
          );
        }

        return (
          <AppShell
            ledeCrumb={lede === undefined ? ledeCrumb : null}
            ledeBody={lede === undefined ? ledeBody : null}
            lede={lede}
            scenarios={null}
            extraCSS={TOOL_CSS}
            className={className}
            style={style}
          >
            <main className="r2-main cb-cols">
              <section className="r2-scen-col">
                {slotScenarios}
              </section>
              <section className="r2-canvas-col">
                <div className="cb-canvas-wrap">{slotCanvas}</div>
                <div className="r2-readouts cols-3">
                  <CanvasReadout kind="v"  label="v" value={Math2D.fmtPair(ctx.v)} />
                  <CanvasReadout kind="b1" label="b" sub="1" value={Math2D.fmtPair(ctx.b1)} />
                  <CanvasReadout kind="b2" label="b" sub="2" value={Math2D.fmtPair(ctx.b2)} />
                </div>
                {slotAnim}
              </section>
              <section className="r2-info-col">
                {slotExp}
                {slotChips}
                {slotCoords}
                {slotMatrix}
              </section>
            </main>
          </AppShell>
        );
      }}
    </ChangeBasisCore>
  );
}