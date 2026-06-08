

// 'use client';

// import { useState, useEffect, useRef, useCallback } from 'react';

// // =====================================================================
// //  SECTION 1  ::  Math2D
// // =====================================================================
// const Math2D = {
//   apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
//   det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],
//   trace: (M) => M[0][0] + M[1][1],
//   interp: (t, A) => [
//     [(1 - t) + t * A[0][0], t * A[0][1]],
//     [t * A[1][0], (1 - t) + t * A[1][1]],
//   ],

//   eigenvalues(A) {
//     const tr = A[0][0] + A[1][1];
//     const d = A[0][0] * A[1][1] - A[0][1] * A[1][0];
//     const disc = (tr * tr) / 4 - d;
//     if (disc >= -1e-12) {
//       const r = Math.sqrt(Math.max(0, disc));
//       return { type: 'real', vals: [tr / 2 + r, tr / 2 - r], disc };
//     }
//     const r = Math.sqrt(-disc);
//     return { type: 'complex', vals: [{ re: tr / 2, im: r }, { re: tr / 2, im: -r }], disc };
//   },

//   eigenvector(A, lam) {
//     const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
//     const tol = 1e-9;
//     if (Math.abs(b) > tol) {
//       const v = [b, lam - a];
//       const n = Math.hypot(v[0], v[1]);
//       if (n > tol) return [v[0] / n, v[1] / n];
//     }
//     if (Math.abs(c) > tol) {
//       const v = [lam - d, c];
//       const n = Math.hypot(v[0], v[1]);
//       if (n > tol) return [v[0] / n, v[1] / n];
//     }
//     if (Math.abs(lam - a) < tol) return [1, 0];
//     if (Math.abs(lam - d) < tol) return [0, 1];
//     return null;
//   },

//   rank(A) {
//     if (Math.abs(A[0][0] * A[1][1] - A[0][1] * A[1][0]) > 1e-6) return 2;
//     const s = Math.abs(A[0][0]) + Math.abs(A[0][1]) + Math.abs(A[1][0]) + Math.abs(A[1][1]);
//     return s < 1e-9 ? 0 : 1;
//   },

//   kerImg(A) {
//     const r = Math2D.rank(A);
//     if (r !== 1) return { rank: r };
//     let ker;
//     if (Math.hypot(A[0][0], A[0][1]) > 1e-9) ker = [-A[0][1], A[0][0]];
//     else ker = [-A[1][1], A[1][0]];
//     let n = Math.hypot(ker[0], ker[1]) || 1;
//     ker = [ker[0] / n, ker[1] / n];
//     let img;
//     if (Math.hypot(A[0][0], A[1][0]) > 1e-9) img = [A[0][0], A[1][0]];
//     else img = [A[0][1], A[1][1]];
//     n = Math.hypot(img[0], img[1]) || 1;
//     img = [img[0] / n, img[1] / n];
//     return { rank: 1, ker, img };
//   },

//   classify(A) {
//     const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
//     const dd = a * d - b * c;
//     if (Math.abs(a - 1) < 1e-6 && Math.abs(d - 1) < 1e-6 && Math.abs(b) < 1e-6 && Math.abs(c) < 1e-6) return 'identity';
//     if (Math.abs(dd) < 1e-6) {
//       const s = Math.abs(a) + Math.abs(b) + Math.abs(c) + Math.abs(d);
//       return s < 1e-6 ? 'zero map' : 'singular \u2192 line';
//     }
//     if (Math.abs(b) < 1e-6 && Math.abs(c) < 1e-6) {
//       if (Math.abs(a - d) < 1e-6) return a > 0 ? 'uniform scaling' : 'scaling + 180\u00B0';
//       return 'axis-aligned stretch';
//     }
//     if (Math.abs(b + c) < 1e-6 && Math.abs(a - d) < 1e-6 && Math.abs(a * a + b * b - 1) < 1e-3) return 'rotation';
//     if (Math.abs(b - c) < 1e-6 && Math.abs(a + d) < 1e-6 && Math.abs(a * a + b * b - 1) < 1e-3) return 'reflection';
//     if (dd < 0) return 'orientation-reversing';
//     return 'general invertible';
//   },

//   fmt(x, p = 3) {
//     if (Math.abs(x) < 1e-9) return '0';
//     const r = Math.round(x * Math.pow(10, p)) / Math.pow(10, p);
//     return r.toFixed(p).replace(/\.?0+$/, '') || '0';
//   },

//   fmt2(x) { return Math2D.fmt(x, 2); },
// };

// // =====================================================================
// //  SECTION 2  ::  SVG render
// // =====================================================================
// const SVG_STYLE_CSS = `
// .grid-line { stroke: #e2e8f0; stroke-width: 1; fill: none; vector-effect: non-scaling-stroke; }
// .grid-axis { stroke: #94a3b8; stroke-width: 1.4; fill: none; }
// .sample-dot { fill: rgba(99,102,241,0.5); }
// .unit-circle { fill: rgba(99,102,241,0.06); stroke: #6366f1; stroke-width: 1.5; stroke-dasharray: 4 3; }
// .unit-square { stroke-width: 1.5; }
// .eigen-line { stroke: #c026d3; stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.7; }
// .eigen-tip { fill: #c026d3; }
// .eigen-tip-orig { fill: none; stroke: #c026d3; stroke-width: 1.4; opacity: 0.5; }
// .kernel-line { stroke: #dc2626; stroke-width: 2; stroke-dasharray: 8 5; fill: none; opacity: 0.9; }
// .kernel-halo { stroke: #dc2626; stroke-width: 10; fill: none; opacity: 0.10; }
// .image-line { stroke: #059669; stroke-width: 2.2; fill: none; opacity: 0.95; }
// .image-halo { stroke: #059669; stroke-width: 12; fill: none; opacity: 0.13; }
// .ker-label { fill: #dc2626; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 14px; font-weight: 500; }
// .img-label { fill: #059669; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 14px; font-weight: 500; }
// .kernel-dot { fill: #dc2626; stroke: #fff; stroke-width: 1.2; }
// .kernel-ghost { fill: none; stroke: #dc2626; stroke-width: 1.2; opacity: 0.5; }
// .image-dot { fill: #059669; stroke: #fff; stroke-width: 1.2; }
// .image-ghost { fill: none; stroke: #059669; stroke-width: 1.2; opacity: 0.5; }
// .zero-ring { fill: none; stroke: #64748b; stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.6; }
// .basis-i { stroke: #ea580c; stroke-width: 2.6; fill: none; stroke-linecap: round; }
// .basis-j { stroke: #0891b2; stroke-width: 2.6; fill: none; stroke-linecap: round; }
// .label-i { fill: #ea580c; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 17px; font-weight: 600; }
// .label-j { fill: #0891b2; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 17px; font-weight: 600; }
// .origin-dot { fill: #1e293b; }
// .canvas-corner { font-family: 'JetBrains Mono', monospace; font-size: 9px; fill: #64748b; letter-spacing: 0.1em; text-transform: uppercase; }
// `;

// const SVGRender = {
//   _project: (geom) => (p) => [geom.cx + geom.scale * p[0], geom.cy - geom.scale * p[1]],

//   grid(M, geom) {
//     const tx = SVGRender._project(geom);
//     const { gridR } = geom;
//     let s = '';
//     for (let i = -gridR; i <= gridR; i++) {
//       const cls = i === 0 ? 'grid-axis' : 'grid-line';
//       const [x1, y1] = tx(Math2D.apply(M, [-gridR, i]));
//       const [x2, y2] = tx(Math2D.apply(M, [gridR, i]));
//       s += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
//       const [x3, y3] = tx(Math2D.apply(M, [i, -gridR]));
//       const [x4, y4] = tx(Math2D.apply(M, [i, gridR]));
//       s += `<line class="${cls}" x1="${x3.toFixed(2)}" y1="${y3.toFixed(2)}" x2="${x4.toFixed(2)}" y2="${y4.toFixed(2)}"/>`;
//     }
//     return s;
//   },

//   samples(M, geom) {
//     const tx = SVGRender._project(geom);
//     let s = '';
//     for (let i = -4; i <= 4; i++) for (let j = -4; j <= 4; j++) {
//       if (i === 0 && j === 0) continue;
//       const [x, y] = tx(Math2D.apply(M, [i, j]));
//       s += `<circle class="sample-dot" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="2.4"/>`;
//     }
//     return s;
//   },

//   circle(M, geom) {
//     const tx = SVGRender._project(geom);
//     const N = 96, pts = [];
//     for (let i = 0; i < N; i++) {
//       const a = (2 * Math.PI * i) / N;
//       const [x, y] = tx(Math2D.apply(M, [Math.cos(a), Math.sin(a)]));
//       pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
//     }
//     return `<polygon class="unit-circle" points="${pts.join(' ')}"/>`;
//   },

//   square(M, geom) {
//     const tx = SVGRender._project(geom);
//     const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
//     const pts = corners.map((c) => tx(Math2D.apply(M, c)).map((v) => v.toFixed(2)).join(',')).join(' ');
//     const dM = Math2D.det(M);
//     let fill, stroke;
//     if (dM > 1e-3) { fill = 'rgba(99,102,241,0.15)'; stroke = '#6366f1'; }
//     else if (dM < -1e-3) { fill = 'rgba(236,72,153,0.15)'; stroke = '#ec4899'; }
//     else { fill = 'rgba(148,163,184,0.15)'; stroke = '#94a3b8'; }
//     return `<polygon class="unit-square" points="${pts}" fill="${fill}" stroke="${stroke}"/>`;
//   },

//   eigen(M, A, geom) {
//     const tx = SVGRender._project(geom);
//     const { gridR } = geom;
//     const ev = Math2D.eigenvalues(A);
//     if (ev.type === 'complex') return '';
//     const seen = [];
//     let s = '';
//     ev.vals.forEach((lam) => {
//       const v = Math2D.eigenvector(A, lam);
//       if (!v) return;
//       if (seen.find((u) => Math.abs(u[0] * v[1] - u[1] * v[0]) < 1e-6)) return;
//       seen.push(v);
//       const [x1, y1] = tx([-gridR * v[0], -gridR * v[1]]);
//       const [x2, y2] = tx([gridR * v[0], gridR * v[1]]);
//       s += `<line class="eigen-line" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
//       const [ox, oy] = tx(v);
//       s += `<circle class="eigen-tip-orig" cx="${ox.toFixed(2)}" cy="${oy.toFixed(2)}" r="3.5"/>`;
//       const [tipX, tipY] = tx(Math2D.apply(M, v));
//       s += `<circle class="eigen-tip" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="4"/>`;
//     });
//     return s;
//   },

//   kerImg(M, A, showLabels, geom) {
//     const tx = SVGRender._project(geom);
//     const { gridR } = geom;
//     const ki = Math2D.kerImg(A);
//     if (ki.rank === 2) return '';
//     let s = '';
//     const [ox, oy] = tx([0, 0]);
//     if (ki.rank === 0) {
//       s += `<circle class="zero-ring" cx="${ox}" cy="${oy}" r="22"/>`;
//       s += `<circle class="zero-ring" cx="${ox}" cy="${oy}" r="44"/>`;
//       s += `<circle class="zero-ring" cx="${ox}" cy="${oy}" r="68"/>`;
//       if (showLabels) s += `<text class="ker-label" x="${ox + 80}" y="${oy + 4}" font-size="11">ker A = \u211D&sup2;</text>`;
//       return s;
//     }
//     const lineThroughOrigin = (dir, hCls, lCls) => {
//       const [x1, y1] = tx([-gridR * dir[0], -gridR * dir[1]]);
//       const [x2, y2] = tx([gridR * dir[0], gridR * dir[1]]);
//       return `<line class="${hCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`
//         + `<line class="${lCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
//     };
//     s += lineThroughOrigin(ki.img, 'image-halo', 'image-line');
//     s += lineThroughOrigin(ki.ker, 'kernel-halo', 'kernel-line');
//     for (const d of [-2.4, -1.6, -0.8, 0.8, 1.6, 2.4]) {
//       const p = [d * ki.ker[0], d * ki.ker[1]];
//       const [gx, gy] = tx(p);
//       s += `<circle class="kernel-ghost" cx="${gx.toFixed(2)}" cy="${gy.toFixed(2)}" r="3"/>`;
//       const [px, py] = tx(Math2D.apply(M, p));
//       s += `<circle class="kernel-dot" cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="3.4"/>`;
//     }
//     const perp = [-ki.ker[1], ki.ker[0]];
//     for (const d of [-2, -1, 1, 2]) {
//       const p = [d * perp[0], d * perp[1]];
//       const [gx, gy] = tx(p);
//       s += `<circle class="image-ghost" cx="${gx.toFixed(2)}" cy="${gy.toFixed(2)}" r="3"/>`;
//       const [px, py] = tx(Math2D.apply(M, p));
//       s += `<circle class="image-dot" cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="3.4"/>`;
//     }
//     if (showLabels) {
//       const kp = [-ki.ker[1], ki.ker[0]];
//       const kLab = [4.5 * ki.ker[0] + 0.55 * kp[0], 4.5 * ki.ker[1] + 0.55 * kp[1]];
//       const [klx, kly] = tx(kLab);
//       s += `<text class="ker-label" x="${klx.toFixed(2)}" y="${kly.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">ker A</text>`;
//       const ip = [-ki.img[1], ki.img[0]];
//       const iLab = [4.5 * ki.img[0] + 0.55 * ip[0], 4.5 * ki.img[1] + 0.55 * ip[1]];
//       const [ilx, ily] = tx(iLab);
//       s += `<text class="img-label" x="${ilx.toFixed(2)}" y="${ily.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">im A</text>`;
//     }
//     return s;
//   },

//   basis(M, showLabels, geom) {
//     const tx = SVGRender._project(geom);
//     const O = tx([0, 0]);
//     const iVec = Math2D.apply(M, [1, 0]);
//     const jVec = Math2D.apply(M, [0, 1]);
//     const Itip = tx(iVec);
//     const Jtip = tx(jVec);
//     let s = '';
//     s += `<line class="basis-i" x1="${O[0]}" y1="${O[1]}" x2="${Itip[0].toFixed(2)}" y2="${Itip[1].toFixed(2)}" marker-end="url(#arr-i)"/>`;
//     s += `<line class="basis-j" x1="${O[0]}" y1="${O[1]}" x2="${Jtip[0].toFixed(2)}" y2="${Jtip[1].toFixed(2)}" marker-end="url(#arr-j)"/>`;
//     if (showLabels) {
//       const li = tx([iVec[0] + 0.2 * Math.sign(iVec[0] || 1), iVec[1] + 0.2]);
//       const lj = tx([jVec[0] + 0.2, jVec[1] + 0.2 * Math.sign(jVec[1] || 1)]);
//       s += `<text class="label-i" x="${li[0].toFixed(2)}" y="${li[1].toFixed(2)}" text-anchor="middle" dominant-baseline="middle">&#238;</text>`;
//       s += `<text class="label-j" x="${lj[0].toFixed(2)}" y="${lj[1].toFixed(2)}" text-anchor="middle" dominant-baseline="middle">&#309;</text>`;
//     }
//     return s;
//   },
// };

// // =====================================================================
// //  SECTION 3  ::  Scenarios (preset matrix + grouping + explanation copy)
// // =====================================================================
// const SQ = Math.SQRT1_2;

// const SCENARIOS = {
//   identity: {
//     A: [[1, 0], [0, 1]], group: 'full', label: 'Identity',
//     title: 'Identity', tag: 'rank 2 \u00B7 det 1',
//     body: 'The identity matrix maps every vector to itself: <code>Iv = v</code>. The grid stays exactly where it started.',
//     insight: 'Both columns are the standard basis vectors. Every direction is an eigenvector with eigenvalue 1.',
//     watch: 'Edit a single entry to break the identity \u2014 even a small perturbation gives a non-trivial map.',
//   },
//   rot45: {
//     A: [[SQ, -SQ], [SQ, SQ]], group: 'full', label: 'Rotate 45\u00B0',
//     title: 'Rotate 45\u00B0 counterclockwise', tag: 'rank 2 \u00B7 det 1 \u00B7 rigid',
//     body: 'A rotation matrix has columns <code>(cos\u03B8, sin\u03B8)</code> and <code>(\u2212sin\u03B8, cos\u03B8)</code>. Here \u03B8 = \u03C0/4, so both equal \u221A2/2 \u2248 0.707.',
//     insight: 'Distances and angles are preserved \u2014 a rigid motion. Eigenvalues are complex since no real direction is invariant.',
//     watch: 'The unit circle stays a circle. The unit square becomes a tilted square of the same area.',
//   },
//   rot90: {
//     A: [[0, -1], [1, 0]], group: 'full', label: 'Rotate 90\u00B0',
//     title: 'Rotate 90\u00B0 counterclockwise', tag: 'rank 2 \u00B7 det 1 \u00B7 rigid',
//     body: 'A quarter turn. <code>\u00EE</code> goes to (0, 1); <code>\u0135</code> goes to (\u22121, 0). Apply A four times to return to identity.',
//     insight: 'Eigenvalues are \u00B1i. The only real invariant subspace is the origin itself \u2014 no real line is fixed.',
//     watch: 'Basis vectors swap roles. The grid rotates as a rigid body around the origin.',
//   },
//   scale2: {
//     A: [[2, 0], [0, 2]], group: 'full', label: 'Scale 2\u00D7',
//     title: 'Uniform scaling by 2', tag: 'rank 2 \u00B7 det 4',
//     body: 'Every vector doubles in length: A = 2I. Areas multiply by 4, which is det A.',
//     insight: 'Both eigenvalues are 2; every direction is an eigenvector. Diagonal matrices with equal entries are always scalings.',
//     watch: 'The unit square grows to a 2\u00D72 square. The unit circle grows to a circle of radius 2.',
//   },
//   shearX: {
//     A: [[1, 1], [0, 1]], group: 'full', label: 'Shear x',
//     title: 'Horizontal shear', tag: 'rank 2 \u00B7 det 1',
//     body: 'Each point <code>(x, y)</code> maps to <code>(x + y, y)</code>. Horizontal lines slide; the x-axis itself stays fixed.',
//     insight: 'det = 1 so area is preserved, but angles are not. The only real eigenvector lies along the x-axis (eigenvalue 1, repeated).',
//     watch: 'Vertical lines tilt into parallel slanted lines. The unit square becomes a parallelogram of the same area.',
//   },
//   reflectX: {
//     A: [[1, 0], [0, -1]], group: 'full', label: 'Reflect x-axis',
//     title: 'Reflection across the x-axis', tag: 'rank 2 \u00B7 det \u22121',
//     body: 'Flips the y-component: <code>(x, y) \u21A6 (x, \u2212y)</code>. The x-axis is fixed; the y-axis is reversed.',
//     insight: 'det = \u22121 signals orientation reversal \u2014 the unit square flips from CCW to CW. Eigenvalues are +1 (along x) and \u22121 (along y).',
//     watch: 'The unit square fill changes color to indicate flipped orientation. The grid mirrors without warping.',
//   },
//   reflectDiag: {
//     A: [[0, 1], [1, 0]], group: 'full', label: 'Reflect y=x',
//     title: 'Reflection across y = x', tag: 'rank 2 \u00B7 det \u22121',
//     body: 'Swaps coordinates: <code>(x, y) \u21A6 (y, x)</code>. The line y = x is fixed; the line y = \u2212x is reversed.',
//     insight: 'Eigenvalues are +1 (along y = x) and \u22121 (along y = \u2212x). The two eigendirections are perpendicular.',
//     watch: '\u00EE and \u0135 swap positions. Anything on the diagonal stays put.',
//   },
//   twist: {
//     A: [[1.4, 0.6], [-0.3, 1.2]], group: 'full', label: 'Twist & stretch',
//     title: 'Twist & stretch', tag: 'rank 2 \u00B7 generic',
//     body: 'A typical invertible matrix \u2014 not a rotation, not a pure scaling. det A \u2248 1.86, so areas grow.',
//     insight: 'Eigenvalues are complex, so no real direction maps to a scaled copy of itself \u2014 the map mixes rotation and stretching.',
//     watch: 'The grid spirals slightly as it stretches. That faint swirl is the signature of complex eigenvalues.',
//   },
//   projectX: {
//     A: [[1, 0], [0, 0]], group: 'rank1', label: 'Project to x',
//     title: 'Projection onto the x-axis', tag: 'rank 1 \u00B7 det 0',
//     body: 'Crushes the y-component: <code>(x, y) \u21A6 (x, 0)</code>. Image is the x-axis; kernel is the y-axis.',
//     insight: 'Eigenvalues are 1 (on the image) and 0 (on the kernel). A projection satisfies A&sup2; = A \u2014 projecting twice changes nothing.',
//     watch: 'The unit square collapses to a horizontal segment. The unit circle collapses to a diameter.',
//   },
//   projectDiag: {
//     A: [[0.5, 0.5], [0.5, 0.5]], group: 'rank1', label: 'Project to y=x',
//     title: 'Orthogonal projection onto y = x', tag: 'rank 1 \u00B7 det 0 \u00B7 symmetric',
//     body: 'Maps every point to its closest point on the diagonal. Image is y = x; kernel is y = \u2212x.',
//     insight: 'A is symmetric, so the kernel and image are perpendicular \u2014 the hallmark of an orthogonal projection.',
//     watch: 'Two perpendicular directions split the plane: one preserved (the diagonal), one annihilated (the anti-diagonal).',
//   },
//   rank1: {
//     A: [[1, 2], [2, 4]], group: 'rank1', label: 'Outer product',
//     title: 'Rank-1 outer product', tag: 'rank 1 \u00B7 det 0',
//     body: 'A = [[1, 2], [2, 4]]. Both rows are proportional to (1, 2); both columns are proportional to (1, 2).',
//     insight: 'Image is the line spanned by (1, 2); kernel is perpendicular to (1, 2). Eigenvalues: 5 (trace) and 0.',
//     watch: 'Four distinct entries, but the transformation lives in just one dimension.',
//   },
//   zero: {
//     A: [[0, 0], [0, 0]], group: 'zero', label: 'Zero map',
//     title: 'Zero map', tag: 'rank 0 \u00B7 det 0',
//     body: 'Sends every vector to the origin. Kernel is all of <code>\u211D&sup2;</code>; image is the single point {0}.',
//     insight: 'The most degenerate transformation possible. Both eigenvalues are 0; rank-nullity gives dim ker = 2.',
//     watch: 'The unit square, unit circle, and basis vectors all shrink to a point at the origin.',
//   },
// };

// const SCENARIO_CUSTOM = {
//   title: 'Custom matrix', tag: 'edited',
//   body: 'You&apos;re exploring outside the preset scenarios. The transformation may not have a clean name, but it still has a determinant, eigenvalues, and a rank.',
//   insight: 'The Live panel below tracks det M(t) as you scrub. det M(t) = 0 marks the moments when M(t) is singular.',
//   watch: 'Try setting all entries to make det A = 0 \u2014 the unit square will collapse to a line.',
// };

// const SCENARIO_GROUPS = [
//   { key: 'full',  label: 'Full rank',  tag: 'rank 2', tagClass: 'full' },
//   { key: 'rank1', label: 'Singular',   tag: 'rank 1', tagClass: 'rank1' },
//   { key: 'zero',  label: 'Degenerate', tag: 'rank 0', tagClass: 'zero' },
// ];

// // Back-compat for atomic consumers
// const PRESETS = Object.fromEntries(
//   Object.entries(SCENARIOS).map(([k, v]) => [k, v.A])
// );

// // =====================================================================
// //  SECTION 4  ::  Hooks
// // =====================================================================
// const DEFAULT_LAYERS = {
//   grid: true, basis: true, square: true, circle: true,
//   eigen: false, kernelImage: true, samples: false, labels: true,
// };

// function useTransformState(options = {}) {
//   const {
//     initialA = [[1, 0], [0, 1]],
//     initialScenario = 'identity',
//     initialLayers = DEFAULT_LAYERS,
//     scenarios = SCENARIOS,
//   } = options;

//   const [A, setAInternal] = useState(initialA);
//   const [activeScenario, setActiveScenario] = useState(initialScenario);
//   const [layers, setLayers] = useState(initialLayers);

//   const setA = useCallback((next) => {
//     setAInternal(next);
//     setActiveScenario(null);
//   }, []);

//   const selectScenario = useCallback((key) => {
//     const sc = scenarios[key];
//     if (!sc || !sc.A) return;
//     setAInternal([sc.A[0].slice(), sc.A[1].slice()]);
//     setActiveScenario(key);
//   }, [scenarios]);

//   return { A, activeScenario, layers, setA, selectScenario, setLayers };
// }

// const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// function useAnimationState(options = {}) {
//   const { step = 0.1, duration = 1600, initialT = 0 } = options;
//   const [t, setTState] = useState(initialT);
//   const [playing, setPlaying] = useState(false);
//   const animRef = useRef(null);
//   const tRef = useRef(initialT);
//   useEffect(() => { tRef.current = t; }, [t]);

//   const cancel = useCallback(() => {
//     if (animRef.current !== null) {
//       cancelAnimationFrame(animRef.current);
//       animRef.current = null;
//     }
//     setPlaying(false);
//   }, []);

//   const animateTo = useCallback((target, dur = duration) => {
//     if (animRef.current !== null) {
//       cancelAnimationFrame(animRef.current);
//       animRef.current = null;
//     }
//     const tStart = tRef.current;
//     const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
//     setPlaying(true);
//     const frame = (now) => {
//       const elapsed = now - startTime;
//       const localT = Math.min(1, elapsed / dur);
//       const eased = easeInOutCubic(localT);
//       const newT = tStart + (target - tStart) * eased;
//       tRef.current = newT;
//       setTState(newT);
//       if (localT < 1) animRef.current = requestAnimationFrame(frame);
//       else { animRef.current = null; setPlaying(false); }
//     };
//     animRef.current = requestAnimationFrame(frame);
//   }, [duration]);

//   const reset = useCallback(() => { cancel(); tRef.current = 0; setTState(0); }, [cancel]);

//   const stepFwd = useCallback(() => {
//     cancel();
//     const cur = tRef.current;
//     const next = Math.min(1, Math.floor(cur / step + 1) * step);
//     tRef.current = next;
//     setTState(next);
//   }, [step, cancel]);

//   const stepBack = useCallback(() => {
//     cancel();
//     const cur = tRef.current;
//     const prev = Math.max(0, Math.ceil(cur / step - 1) * step);
//     tRef.current = prev;
//     setTState(prev);
//   }, [step, cancel]);

//   const play = useCallback(() => {
//     const cur = tRef.current;
//     if (cur >= 0.999) {
//       tRef.current = 0;
//       setTState(0);
//       requestAnimationFrame(() => animateTo(1, duration));
//     } else {
//       animateTo(1, duration);
//     }
//   }, [duration, animateTo]);

//   const setT = useCallback((newT) => { cancel(); tRef.current = newT; setTState(newT); }, [cancel]);

//   useEffect(() => () => {
//     if (animRef.current !== null) cancelAnimationFrame(animRef.current);
//   }, []);

//   return { t, playing, step, animateTo, cancel, reset, stepFwd, stepBack, play, setT };
// }

// // =====================================================================
// //  SECTION 5  ::  Component CSS
// // =====================================================================
// const COMPONENT_CSS = `
// ${SVG_STYLE_CSS}

// .lt5-root { font-family: 'IBM Plex Sans', system-ui, sans-serif; color: #0f172a; }

// .lt5-app {
//   height: 100vh; display: grid; grid-template-rows: auto 1fr auto;
//   gap: 14px; padding: 18px 26px 16px; max-width: 1500px; margin: 0 auto;
//   background: #f0f6fc;
//   background-image:
//     radial-gradient(circle at 12% 8%, rgba(147,197,253,.25) 0%, transparent 35%),
//     radial-gradient(circle at 88% 92%, rgba(191,219,254,.22) 0%, transparent 40%);
//   box-sizing: border-box;
// }

// .lt5-lede { display: flex; align-items: baseline; gap: 12px; font-size: 13px; color: #475569; }
// .lt5-lede .lt5-crumb {
//   font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.18em;
//   text-transform: uppercase; color: #64748b;
// }
// .lt5-lede .lt5-crumb .lt5-dot { color: #2563eb; margin: 0 6px; }
// .lt5-lede .lt5-body { flex: 1; }
// .lt5-lede strong { color: #0f172a; font-weight: 500; }
// .lt5-lede code {
//   font-family: 'JetBrains Mono', monospace; font-size: 11px;
//   color: #2563eb; padding: 1px 4px; background: #eff6ff; border-radius: 3px;
// }

// .lt5-main { display: grid; grid-template-columns: auto 250px 1fr; gap: 16px; min-height: 0; }

// .lt5-canvas-col { display: flex; flex-direction: column; gap: 8px; min-width: 0; min-height: 0; }
// .lt5-layer-chips {
//   display: flex; flex-wrap: wrap; gap: 4px; padding: 6px 8px;
//   background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;
//   box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06);
// }
// .lt5-chip {
//   display: inline-flex; align-items: center; gap: 5px; padding: 4px 9px;
//   font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.04em;
//   color: #64748b; background: transparent; border: 1px solid transparent;
//   border-radius: 4px; cursor: pointer; user-select: none; transition: all .12s;
// }
// .lt5-chip input { width: 11px; height: 11px; margin: 0; accent-color: #2563eb; cursor: pointer; }
// .lt5-chip:hover, .lt5-chip:has(input:checked) { color: #0f172a; background: #eff6ff; }

// .lt5-canvas-wrap { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 0; }
// .lt5-canvas-svg {
//   height: 100%; aspect-ratio: 1/1; max-height: 100%; max-width: 100%;
//   background: linear-gradient(135deg, #fff 0%, #f0f7fc 100%);
//   border: 1px solid #e2e8f0; border-radius: 8px;
//   box-shadow: 0 1px 3px rgba(15,23,42,.05), 0 4px 12px rgba(37,99,235,.06);
//   display: block;
// }

// .lt5-controls-col { display: flex; flex-direction: column; gap: 10px; min-height: 0; }
// .lt5-card {
//   background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
//   box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06);
//   padding: 12px 14px;
// }
// .lt5-card h2 {
//   font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 600;
//   letter-spacing: 0.2em; text-transform: uppercase; color: #64748b;
//   margin: 0 0 10px;
// }
// .lt5-card h2 .lt5-badge { color: #2563eb; margin-right: 6px; }

// .lt5-matrix-wrap { display: flex; justify-content: center; padding: 4px 0 2px; }
// .lt5-matrix-bracket {
//   display: grid; grid-template-columns: auto auto; gap: 5px;
//   padding: 8px 18px; position: relative;
// }
// .lt5-matrix-bracket::before, .lt5-matrix-bracket::after {
//   content: ''; position: absolute; top: 4px; bottom: 4px; width: 7px;
//   border: 1.5px solid #475569;
// }
// .lt5-matrix-bracket::before { left: 0; border-right: none; border-radius: 2px 0 0 2px; }
// .lt5-matrix-bracket::after { right: 0; border-left: none; border-radius: 0 2px 2px 0; }
// .lt5-matrix-bracket input {
//   width: 52px; padding: 5px 6px; background: #f8fafc;
//   border: 1px solid #cbd5e1; border-radius: 3px; color: #0f172a;
//   font-family: 'JetBrains Mono', monospace; font-size: 12px;
//   text-align: center; outline: none;
//   transition: border-color .15s, background .15s;
//   -moz-appearance: textfield;
// }
// .lt5-matrix-bracket input::-webkit-outer-spin-button,
// .lt5-matrix-bracket input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
// .lt5-matrix-bracket input:focus { border-color: #2563eb; background: #eff6ff; }

// .lt5-scenarios-card { flex: 1; overflow-y: auto; min-height: 0; }
// .lt5-scen-group + .lt5-scen-group { margin-top: 10px; }
// .lt5-scen-label {
//   display: flex; align-items: center; justify-content: space-between;
//   font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.12em;
//   text-transform: uppercase; color: #64748b; margin-bottom: 5px;
// }
// .lt5-scen-label .lt5-tag {
//   padding: 1px 5px; border-radius: 3px; font-size: 8px; font-weight: 500;
// }
// .lt5-scen-label .lt5-tag.full { background: rgba(99,102,241,.12); color: #6366f1; }
// .lt5-scen-label .lt5-tag.rank1 { background: rgba(5,150,105,.12); color: #059669; }
// .lt5-scen-label .lt5-tag.zero { background: rgba(220,38,38,.10); color: #dc2626; }

// .lt5-scen-btn {
//   display: block; width: 100%; background: #f8fafc;
//   border: 1px solid #e2e8f0; color: #1e293b;
//   padding: 6px 10px; font-family: 'IBM Plex Sans', system-ui, sans-serif;
//   font-size: 11.5px; font-weight: 500;
//   cursor: pointer; border-radius: 4px; text-align: left;
//   transition: all .12s; margin-bottom: 4px;
// }
// .lt5-scen-btn:hover { background: #eff6ff; border-color: #2563eb; color: #2563eb; }
// .lt5-scen-btn.active { background: #dbeafe; border-color: #2563eb; color: #1d4ed8; font-weight: 600; }
// .lt5-scen-btn.rank1 { border-left: 2px solid #059669; }
// .lt5-scen-btn.rank1:hover { border-color: #059669; color: #059669; background: rgba(5,150,105,.06); }
// .lt5-scen-btn.rank1.active { background: rgba(5,150,105,.12); border-color: #059669; color: #059669; }
// .lt5-scen-btn.zero { border-left: 2px solid #dc2626; }
// .lt5-scen-btn.zero:hover { border-color: #dc2626; color: #dc2626; background: rgba(220,38,38,.06); }
// .lt5-scen-btn.zero.active { background: rgba(220,38,38,.10); border-color: #dc2626; color: #dc2626; }

// .lt5-explain-col { display: flex; flex-direction: column; gap: 10px; min-height: 0; max-width: 420px; }
// .lt5-ex-card { flex: 1 1 auto; overflow-y: auto; min-height: 0; }
// .lt5-ex-header {
//   display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
//   margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;
// }
// .lt5-ex-header h3 {
//   font-family: Fraunces, Georgia, serif; font-weight: 500; font-size: 20px;
//   color: #0f172a; margin: 0; letter-spacing: -0.01em; line-height: 1.15;
// }
// .lt5-ex-tag {
//   font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.1em;
//   text-transform: uppercase; color: #64748b; white-space: nowrap; padding-top: 2px;
// }
// .lt5-ex-body { color: #1e293b; font-size: 13px; line-height: 1.55; margin: 0 0 10px; }
// .lt5-ex-block { margin-top: 10px; padding-top: 10px; border-top: 1px dashed #e2e8f0; }
// .lt5-ex-block-label {
//   font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.15em;
//   text-transform: uppercase; color: #64748b; margin-bottom: 4px;
// }
// .lt5-ex-block-label.insight { color: #2563eb; }
// .lt5-ex-block-label.watch { color: #059669; }
// .lt5-ex-block p { margin: 0; font-size: 12.5px; color: #1e293b; line-height: 1.55; }
// .lt5-ex-body code, .lt5-ex-block code {
//   font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
//   background: #eff6ff; color: #1d4ed8; padding: 1px 4px; border-radius: 3px;
// }

// .lt5-live-card { flex-shrink: 0; }
// .lt5-live-card h2 { display: flex; align-items: center; justify-content: space-between; }
// .lt5-live-card h2 .lt5-t-readout {
//   color: #2563eb; font-family: 'JetBrains Mono', monospace;
//   letter-spacing: 0.05em; text-transform: none; font-weight: 500;
// }
// .lt5-live-grid { display: grid; grid-template-columns: auto 1fr; gap: 6px 14px; align-items: center; }
// .lt5-live-label {
//   font-family: 'JetBrains Mono', monospace; font-size: 9px;
//   letter-spacing: 0.12em; text-transform: uppercase; color: #64748b;
// }
// .lt5-live-val {
//   font-family: 'JetBrains Mono', monospace; font-size: 12px;
//   color: #0f172a; font-weight: 500;
// }
// .lt5-live-val.live { color: #2563eb; }

// .lt5-math-matrix {
//   display: grid; grid-template-columns: auto auto; gap: 2px 12px;
//   padding: 3px 11px; position: relative;
//   font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
//   color: #0f172a; width: fit-content;
// }
// .lt5-math-matrix::before, .lt5-math-matrix::after {
//   content: ''; position: absolute; top: 1px; bottom: 1px; width: 5px;
//   border: 1.2px solid #475569;
// }
// .lt5-math-matrix::before { left: 0; border-right: none; border-radius: 2px 0 0 2px; }
// .lt5-math-matrix::after { right: 0; border-left: none; border-radius: 0 2px 2px 0; }
// .lt5-math-matrix span { text-align: right; min-width: 46px; color: #2563eb; }

// .lt5-playback {
//   display: flex; align-items: center; gap: 14px; padding: 8px 14px;
//   background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
//   box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06);
// }
// .lt5-play-group { display: flex; gap: 4px; }
// .lt5-ctrl-btn {
//   display: inline-flex; align-items: center; justify-content: center;
//   width: 32px; height: 32px; border: 1px solid #e2e8f0;
//   background: #fff; border-radius: 5px; cursor: pointer;
//   color: #475569; transition: all .12s; padding: 0;
// }
// .lt5-ctrl-btn:hover { border-color: #2563eb; color: #2563eb; background: #eff6ff; }
// .lt5-ctrl-btn:active { transform: scale(.94); }
// .lt5-ctrl-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
// .lt5-ctrl-btn svg { width: 16px; height: 16px; fill: currentColor; }
// .lt5-ctrl-btn.primary { background: #2563eb; border-color: #2563eb; color: #fff; }
// .lt5-ctrl-btn.primary:hover { background: #1d4ed8; border-color: #1d4ed8; color: #fff; }
// .lt5-ctrl-divider { width: 1px; align-self: stretch; background: #e2e8f0; margin: 0 4px; }

// .lt5-slider-wrap { flex: 1; display: flex; align-items: center; gap: 10px; }
// .lt5-slider {
//   flex: 1; -webkit-appearance: none; appearance: none; height: 4px;
//   border-radius: 2px; outline: none; cursor: pointer;
// }
// .lt5-slider::-webkit-slider-thumb {
//   -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%;
//   background: #2563eb; cursor: pointer; border: 2px solid #fff;
//   box-shadow: 0 0 0 1px #2563eb, 0 1px 2px rgba(15,23,42,.15);
// }
// .lt5-slider::-moz-range-thumb {
//   width: 14px; height: 14px; border-radius: 50%;
//   background: #2563eb; cursor: pointer; border: 2px solid #fff;
// }
// .lt5-t-label {
//   font-family: 'JetBrains Mono', monospace; font-size: 12px;
//   color: #64748b; min-width: 88px; text-align: right; letter-spacing: 0.04em;
// }
// .lt5-t-label .val { color: #0f172a; font-weight: 500; }

// .lt5-ex-card::-webkit-scrollbar, .lt5-scenarios-card::-webkit-scrollbar { width: 6px; }
// .lt5-ex-card::-webkit-scrollbar-thumb, .lt5-scenarios-card::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }

// @media (max-height: 800px) {
//   .lt5-app { padding: 12px 20px; gap: 10px; }
//   .lt5-matrix-bracket input { width: 46px; font-size: 11px; padding: 4px; }
//   .lt5-card { padding: 10px 12px; }
//   .lt5-ex-header h3 { font-size: 17px; }
//   .lt5-ex-body, .lt5-ex-block p { font-size: 12px; }
// }
// @media (max-height: 720px) {
//   .lt5-layer-chips { padding: 4px 6px; }
//   .lt5-chip { padding: 3px 7px; font-size: 9.5px; }
//   .lt5-scen-btn { padding: 5px 9px; font-size: 11px; }
// }
// `;

// // =====================================================================
// //  SECTION 6  ::  Sub-components
// // =====================================================================

// // ----- VisualizerCanvas -----
// const DEFAULT_GEOM = { size: 600, scale: 42, gridR: 10 };

// function VisualizerCanvas({
//   A = [[1, 0], [0, 1]],
//   t = 1,
//   layers = DEFAULT_LAYERS,
//   size = DEFAULT_GEOM.size,
//   scale = DEFAULT_GEOM.scale,
//   gridR = DEFAULT_GEOM.gridR,
//   showStatus = true,
//   className,
//   style,
// }) {
//   const cx = size / 2;
//   const cy = size / 2;
//   const geom = { cx, cy, scale, gridR };
//   const M = Math2D.interp(t, A);
//   return (
//     <svg
//       className={'lt5-canvas-svg' + (className ? ' ' + className : '')}
//       viewBox={`0 0 ${size} ${size}`}
//       xmlns="http://www.w3.org/2000/svg"
//       style={style}
//     >
//       <defs>
//         <marker id="arr-i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
//           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
//         </marker>
//         <marker id="arr-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
//           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
//         </marker>
//       </defs>
//       {layers.grid && <g dangerouslySetInnerHTML={{ __html: SVGRender.grid(M, geom) }} />}
//       {layers.samples && <g dangerouslySetInnerHTML={{ __html: SVGRender.samples(M, geom) }} />}
//       {layers.circle && <g dangerouslySetInnerHTML={{ __html: SVGRender.circle(M, geom) }} />}
//       {layers.square && <g dangerouslySetInnerHTML={{ __html: SVGRender.square(M, geom) }} />}
//       {layers.kernelImage && <g dangerouslySetInnerHTML={{ __html: SVGRender.kerImg(M, A, layers.labels, geom) }} />}
//       {layers.eigen && <g dangerouslySetInnerHTML={{ __html: SVGRender.eigen(M, A, geom) }} />}
//       {layers.basis && <g dangerouslySetInnerHTML={{ __html: SVGRender.basis(M, layers.labels, geom) }} />}
//       <circle className="origin-dot" cx={cx} cy={cy} r={2.4} />
//       <text className="canvas-corner" x={12} y={size - 12}>&#8477;&sup2; plane</text>
//       {showStatus && (
//         <text className="canvas-corner" x={size - 12} y={size - 12} textAnchor="end">
//           {Math2D.classify(A)}
//         </text>
//       )}
//     </svg>
//   );
// }

// // ----- LayerChips -----
// const ALL_LAYER_DEFS = [
//   { key: 'grid', label: 'grid' },
//   { key: 'basis', label: 'basis' },
//   { key: 'square', label: 'unit sq' },
//   { key: 'circle', label: 'unit \u25CB' },
//   { key: 'eigen', label: 'eigen' },
//   { key: 'kernelImage', label: 'ker / im' },
//   { key: 'samples', label: 'samples' },
//   { key: 'labels', label: 'labels' },
// ];

// function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
//   const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
//   return (
//     <div className="lt5-layer-chips">
//       {defs.map((d) => (
//         <label key={d.key} className="lt5-chip">
//           <input
//             type="checkbox"
//             checked={!!layers[d.key]}
//             onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
//           />
//           {d.label}
//         </label>
//       ))}
//     </div>
//   );
// }

// // ----- MatrixInput (with safe mid-edit string state) -----
// function CellInput({ value, onCommit, step }) {
//   const [str, setStr] = useState(String(value));
//   useEffect(() => { setStr(String(value)); }, [value]);
//   return (
//     <input
//       type="number"
//       step={step}
//       value={str}
//       onChange={(e) => {
//         const next = e.target.value;
//         setStr(next);
//         if (next === '' || next === '-' || next === '.') return;
//         const v = parseFloat(next);
//         if (!Number.isNaN(v)) onCommit(v);
//       }}
//       onBlur={() => {
//         const v = parseFloat(str);
//         if (Number.isNaN(v)) setStr(String(value));
//         else if (v !== value) onCommit(v);
//       }}
//     />
//   );
// }

// function MatrixInput({ A = [[1, 0], [0, 1]], onChange = () => {}, step = 0.1 }) {
//   return (
//     <div className="lt5-matrix-wrap">
//       <div className="lt5-matrix-bracket">
//         {[[0,0],[0,1],[1,0],[1,1]].map(([r, c]) => (
//           <CellInput
//             key={`${r}-${c}`}
//             value={A[r][c]}
//             step={step}
//             onCommit={(v) => {
//               const next = A.map((row) => row.slice());
//               next[r][c] = v;
//               onChange(next);
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // ----- ScenariosPanel -----
// function ScenariosPanel({
//   scenarios = SCENARIOS,
//   groups = SCENARIO_GROUPS,
//   visibleScenarios,
//   activeScenario = null,
//   onSelect = () => {},
// }) {
//   const visible = visibleScenarios
//     ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, v]) => v))
//     : scenarios;

//   return (
//     <>
//       {groups.map((g) => {
//         const inGroup = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
//         if (!inGroup.length) return null;
//         return (
//           <div key={g.key} className="lt5-scen-group">
//             <div className="lt5-scen-label">
//               <span>{g.label}</span>
//               <span className={`lt5-tag ${g.tagClass}`}>{g.tag}</span>
//             </div>
//             {inGroup.map(([key, sc]) => (
//               <button
//                 key={key}
//                 className={`lt5-scen-btn ${g.tagClass}${activeScenario === key ? ' active' : ''}`}
//                 onClick={() => onSelect(key)}
//               >
//                 {sc.label}
//               </button>
//             ))}
//           </div>
//         );
//       })}
//     </>
//   );
// }

// // ----- ExplanationCard -----
// function pickScenarioCopy(activeScenario, A, scenarios, override) {
//   const customCopy = (override && override.custom) || SCENARIO_CUSTOM;
//   if (activeScenario && scenarios[activeScenario]) {
//     const fromOverride = override && override.byScenario && override.byScenario[activeScenario];
//     return fromOverride || scenarios[activeScenario];
//   }
//   return customCopy;
// }

// function ExplanationCard({ A, activeScenario, scenarios = SCENARIOS, override, className, style }) {
//   const sc = pickScenarioCopy(activeScenario, A, scenarios, override);
//   return (
//     <div className={'lt5-card lt5-ex-card' + (className ? ' ' + className : '')} style={style}>
//       <div className="lt5-ex-header">
//         <h3>{sc.title}</h3>
//         <span className="lt5-ex-tag">{sc.tag}</span>
//       </div>
//       <p className="lt5-ex-body" dangerouslySetInnerHTML={{ __html: sc.body }} />
//       <div className="lt5-ex-block">
//         <div className="lt5-ex-block-label insight">Insight</div>
//         <p dangerouslySetInnerHTML={{ __html: sc.insight }} />
//       </div>
//       <div className="lt5-ex-block">
//         <div className="lt5-ex-block-label watch">What to watch</div>
//         <p dangerouslySetInnerHTML={{ __html: sc.watch }} />
//       </div>
//     </div>
//   );
// }

// // ----- LiveDataCard -----
// function LiveDataCard({ A, t, className, style }) {
//   const M = Math2D.interp(t, A);
//   const ev = Math2D.eigenvalues(A);
//   const eigStr = ev.type === 'real'
//     ? ev.vals.map((v) => Math2D.fmt(v)).join(', ')
//     : `${Math2D.fmt(ev.vals[0].re)} \u00B1 ${Math2D.fmt(ev.vals[0].im)}i`;

//   return (
//     <div className={'lt5-card lt5-live-card' + (className ? ' ' + className : '')} style={style}>
//       <h2>
//         <span><span className="lt5-badge">04</span>Live</span>
//         <span className="lt5-t-readout">t = {t.toFixed(3)}</span>
//       </h2>
//       <div className="lt5-live-grid">
//         <span className="lt5-live-label">M(t)</span>
//         <div className="lt5-math-matrix">
//           <span>{Math2D.fmt2(M[0][0])}</span>
//           <span>{Math2D.fmt2(M[0][1])}</span>
//           <span>{Math2D.fmt2(M[1][0])}</span>
//           <span>{Math2D.fmt2(M[1][1])}</span>
//         </div>
//         <span className="lt5-live-label">det M(t)</span>
//         <span className="lt5-live-val live">{Math2D.fmt(Math2D.det(M))}</span>
//         <span className="lt5-live-label">det A</span>
//         <span className="lt5-live-val">{Math2D.fmt(Math2D.det(A))}</span>
//         <span className="lt5-live-label">trace A</span>
//         <span className="lt5-live-val">{Math2D.fmt(Math2D.trace(A))}</span>
//         <span className="lt5-live-label">eigenvalues</span>
//         <span className="lt5-live-val">{eigStr}</span>
//         <span className="lt5-live-label">rank A</span>
//         <span className="lt5-live-val">{Math2D.rank(A)}</span>
//       </div>
//     </div>
//   );
// }

// // ----- PlaybackBar (icon buttons + slider) -----
// const ICON_RESET   = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>;
// const ICON_STEP_BACK = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>;
// const ICON_STEP_FWD  = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z"/></svg>;
// const ICON_PLAY  = <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>;
// const ICON_PAUSE = <svg viewBox="0 0 24 24"><path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z"/></svg>;

// function PlaybackBar({
//   t = 0, playing = false,
//   onPlay = () => {}, onPause = () => {},
//   onStepFwd = () => {}, onStepBack = () => {},
//   onReset = () => {}, onScrub = () => {},
// }) {
//   const fill = (t * 100).toFixed(2) + '%';
//   const sliderBg = `linear-gradient(to right, #2563eb 0%, #2563eb ${fill}, #cbd5e1 ${fill}, #cbd5e1 100%)`;
//   const backDisabled = t <= 1e-4;
//   const fwdDisabled = t >= 1 - 1e-4;

//   return (
//     <div className="lt5-playback">
//       <div className="lt5-play-group">
//         <button className="lt5-ctrl-btn" onClick={onReset} aria-label="Reset" title="Reset to t = 0">
//           {ICON_RESET}
//         </button>
//         <button className="lt5-ctrl-btn" onClick={onStepBack} disabled={backDisabled} aria-label="Step back" title="Step -0.1">
//           {ICON_STEP_BACK}
//         </button>
//         <button
//           className="lt5-ctrl-btn primary"
//           onClick={playing ? onPause : onPlay}
//           aria-label={playing ? 'Pause' : 'Play'}
//           title="Play / Pause"
//         >
//           {playing ? ICON_PAUSE : ICON_PLAY}
//         </button>
//         <button className="lt5-ctrl-btn" onClick={onStepFwd} disabled={fwdDisabled} aria-label="Step forward" title="Step +0.1">
//           {ICON_STEP_FWD}
//         </button>
//       </div>
//       <div className="lt5-ctrl-divider" />
//       <div className="lt5-slider-wrap">
//         <input
//           type="range"
//           min={0} max={1} step={0.001} value={t}
//           className="lt5-slider"
//           style={{ background: sliderBg }}
//           onChange={(e) => onScrub(parseFloat(e.target.value))}
//           aria-label="Animation parameter"
//         />
//         <span className="lt5-t-label">
//           t = <span className="val">{t.toFixed(3)}</span>
//         </span>
//       </div>
//     </div>
//   );
// }

// // =====================================================================
// //  SECTION 7  ::  Core + default Wrapper
// // =====================================================================

// export function LinearTransformCore({
//   initialA = [[1, 0], [0, 1]],
//   initialScenario = 'identity',
//   initialLayers = DEFAULT_LAYERS,
//   scenarios = SCENARIOS,
//   step = 0.1,
//   duration = 1600,
//   initialT = 0,
//   children,
// }) {
//   const transform = useTransformState({ initialA, initialScenario, initialLayers, scenarios });
//   const anim = useAnimationState({ step, duration, initialT });

//   // Scenario click auto-plays from t=0 -> 1
//   useEffect(() => {
//     if (!transform.activeScenario) return;
//     anim.setT(0);
//     requestAnimationFrame(() => anim.animateTo(1, duration));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [transform.activeScenario]);

//   if (typeof children === 'function') return children({ transform, anim });
//   return null;
// }

// const DEFAULT_LEDE = {
//   crumb: 'Linear Algebra<span class="lt5-dot">&middot;</span>Demo',
//   body: 'A 2&times;2 matrix reshapes the plane &mdash; <strong>pick a scenario</strong>, scrub <code>t</code> from 0 to 1, and read what&apos;s happening on the right.',
// };

// export default function LinearTransform({
//   // Header / lede
//   lede,           // full JSX override
//   ledeCrumb = DEFAULT_LEDE.crumb,
//   ledeBody  = DEFAULT_LEDE.body,
//   // Core options
//   initialA, initialScenario, initialLayers, scenarios,
//   step, duration, initialT,
//   // Slot overrides (undefined = default, null = hidden, JSX = replace)
//   canvas, layerChips, matrixInput, scenariosPanel, explanation, liveData, playback,
//   // Atomization helpers
//   visibleScenarios, enabledLayers, explanationOverride,
//   // Layout escape hatch
//   layout,
//   // Outer
//   className, style,
// }) {
//   return (
//     <LinearTransformCore
//       initialA={initialA}
//       initialScenario={initialScenario}
//       initialLayers={initialLayers}
//       scenarios={scenarios}
//       step={step}
//       duration={duration}
//       initialT={initialT}
//     >
//       {({ transform, anim }) => {
//         const renderLede = () => {
//           if (lede !== undefined) return lede;
//           if (ledeCrumb === null && ledeBody === null) return null;
//           return (
//             <div className="lt5-lede">
//               {ledeCrumb && (
//                 <span className="lt5-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />
//               )}
//               {ledeBody && (
//                 <span className="lt5-body" dangerouslySetInnerHTML={{ __html: ledeBody }} />
//               )}
//             </div>
//           );
//         };

//         const slotCanvas = canvas !== undefined ? canvas : (
//           <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
//         );
//         const slotChips = layerChips !== undefined ? layerChips : (
//           <LayerChips
//             layers={transform.layers}
//             onChange={transform.setLayers}
//             enabledLayers={enabledLayers}
//           />
//         );
//         const slotMatrix = matrixInput !== undefined ? matrixInput : (
//           <MatrixInput A={transform.A} onChange={transform.setA} />
//         );
//         const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
//           <ScenariosPanel
//             scenarios={scenarios || SCENARIOS}
//             visibleScenarios={visibleScenarios}
//             activeScenario={transform.activeScenario}
//             onSelect={transform.selectScenario}
//           />
//         );
//         const slotExplanation = explanation !== undefined ? explanation : (
//           <ExplanationCard
//             A={transform.A}
//             activeScenario={transform.activeScenario}
//             scenarios={scenarios || SCENARIOS}
//             override={explanationOverride}
//           />
//         );
//         const slotLive = liveData !== undefined ? liveData : (
//           <LiveDataCard A={transform.A} t={anim.t} />
//         );
//         const slotPlayback = playback !== undefined ? playback : (
//           <PlaybackBar
//             t={anim.t}
//             playing={anim.playing}
//             onPlay={anim.play}
//             onPause={anim.cancel}
//             onStepFwd={anim.stepFwd}
//             onStepBack={anim.stepBack}
//             onReset={anim.reset}
//             onScrub={anim.setT}
//           />
//         );

//         if (typeof layout === 'function') {
//           return (
//             <div className={'lt5-root ' + (className || '')} style={style}>
//               <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
//               {layout({ transform, anim })}
//             </div>
//           );
//         }

//         return (
//           <div className={'lt5-root ' + (className || '')} style={style}>
//             <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
//             <div className="lt5-app">
//               {renderLede()}
//               <main className="lt5-main">
//                 <section className="lt5-canvas-col">
//                   {slotChips}
//                   <div className="lt5-canvas-wrap">{slotCanvas}</div>
//                 </section>
//                 <section className="lt5-controls-col">
//                   {slotMatrix !== null && (
//                     <div className="lt5-card">
//                       <h2><span className="lt5-badge">A</span>Matrix</h2>
//                       {slotMatrix}
//                     </div>
//                   )}
//                   {slotScenarios !== null && (
//                     <div className="lt5-card lt5-scenarios-card">
//                       <h2><span className="lt5-badge">02</span>Scenarios</h2>
//                       {slotScenarios}
//                     </div>
//                   )}
//                 </section>
//                 <section className="lt5-explain-col">
//                   {slotExplanation}
//                   {slotLive}
//                 </section>
//               </main>
//               {slotPlayback !== null && (
//                 <footer>{slotPlayback}</footer>
//               )}
//             </div>
//           </div>
//         );
//       }}
//     </LinearTransformCore>
//   );
// }

// export {
//   VisualizerCanvas, LayerChips, MatrixInput, ScenariosPanel,
//   ExplanationCard, LiveDataCard, PlaybackBar,
//   useTransformState, useAnimationState,
//   Math2D, SVGRender,
//   SCENARIOS, SCENARIO_GROUPS, SCENARIO_CUSTOM, PRESETS, DEFAULT_LAYERS,
// };



'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

// =====================================================================
//  SECTION 1  ::  Math2D
// =====================================================================
const Math2D = {
  apply: (M, p) => [M[0][0] * p[0] + M[0][1] * p[1], M[1][0] * p[0] + M[1][1] * p[1]],
  det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],
  trace: (M) => M[0][0] + M[1][1],
  interp: (t, A) => [
    [(1 - t) + t * A[0][0], t * A[0][1]],
    [t * A[1][0], (1 - t) + t * A[1][1]],
  ],

  eigenvalues(A) {
    const tr = A[0][0] + A[1][1];
    const d = A[0][0] * A[1][1] - A[0][1] * A[1][0];
    const disc = (tr * tr) / 4 - d;
    if (disc >= -1e-12) {
      const r = Math.sqrt(Math.max(0, disc));
      return { type: 'real', vals: [tr / 2 + r, tr / 2 - r], disc };
    }
    const r = Math.sqrt(-disc);
    return { type: 'complex', vals: [{ re: tr / 2, im: r }, { re: tr / 2, im: -r }], disc };
  },

  eigenvector(A, lam) {
    const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
    const tol = 1e-9;
    if (Math.abs(b) > tol) {
      const v = [b, lam - a];
      const n = Math.hypot(v[0], v[1]);
      if (n > tol) return [v[0] / n, v[1] / n];
    }
    if (Math.abs(c) > tol) {
      const v = [lam - d, c];
      const n = Math.hypot(v[0], v[1]);
      if (n > tol) return [v[0] / n, v[1] / n];
    }
    if (Math.abs(lam - a) < tol) return [1, 0];
    if (Math.abs(lam - d) < tol) return [0, 1];
    return null;
  },

  rank(A) {
    if (Math.abs(A[0][0] * A[1][1] - A[0][1] * A[1][0]) > 1e-6) return 2;
    const s = Math.abs(A[0][0]) + Math.abs(A[0][1]) + Math.abs(A[1][0]) + Math.abs(A[1][1]);
    return s < 1e-9 ? 0 : 1;
  },

  kerImg(A) {
    const r = Math2D.rank(A);
    if (r !== 1) return { rank: r };
    let ker;
    if (Math.hypot(A[0][0], A[0][1]) > 1e-9) ker = [-A[0][1], A[0][0]];
    else ker = [-A[1][1], A[1][0]];
    let n = Math.hypot(ker[0], ker[1]) || 1;
    ker = [ker[0] / n, ker[1] / n];
    let img;
    if (Math.hypot(A[0][0], A[1][0]) > 1e-9) img = [A[0][0], A[1][0]];
    else img = [A[0][1], A[1][1]];
    n = Math.hypot(img[0], img[1]) || 1;
    img = [img[0] / n, img[1] / n];
    return { rank: 1, ker, img };
  },

  classify(A) {
    const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
    const dd = a * d - b * c;
    if (Math.abs(a - 1) < 1e-6 && Math.abs(d - 1) < 1e-6 && Math.abs(b) < 1e-6 && Math.abs(c) < 1e-6) return 'identity';
    if (Math.abs(dd) < 1e-6) {
      const s = Math.abs(a) + Math.abs(b) + Math.abs(c) + Math.abs(d);
      return s < 1e-6 ? 'zero map' : 'singular \u2192 line';
    }
    if (Math.abs(b) < 1e-6 && Math.abs(c) < 1e-6) {
      if (Math.abs(a - d) < 1e-6) return a > 0 ? 'uniform scaling' : 'scaling + 180\u00B0';
      return 'axis-aligned stretch';
    }
    if (Math.abs(b + c) < 1e-6 && Math.abs(a - d) < 1e-6 && Math.abs(a * a + b * b - 1) < 1e-3) return 'rotation';
    if (Math.abs(b - c) < 1e-6 && Math.abs(a + d) < 1e-6 && Math.abs(a * a + b * b - 1) < 1e-3) return 'reflection';
    if (dd < 0) return 'orientation-reversing';
    return 'general invertible';
  },

  fmt(x, p = 3) {
    if (Math.abs(x) < 1e-9) return '0';
    const r = Math.round(x * Math.pow(10, p)) / Math.pow(10, p);
    return r.toFixed(p).replace(/\.?0+$/, '') || '0';
  },

  fmt2(x) { return Math2D.fmt(x, 2); },
};

// =====================================================================
//  SECTION 2  ::  SVG render
// =====================================================================
const SVG_STYLE_CSS = `
.lt5-root .grid-line { stroke: #e2e8f0; stroke-width: 1; fill: none; vector-effect: non-scaling-stroke; }
.lt5-root .grid-axis { stroke: #94a3b8; stroke-width: 1.4; fill: none; }
.lt5-root .sample-dot { fill: rgba(99,102,241,0.5); }
.lt5-root .unit-circle { fill: rgba(99,102,241,0.06); stroke: #6366f1; stroke-width: 1.5; stroke-dasharray: 4 3; }
.lt5-root .unit-square { stroke-width: 1.5; }
.lt5-root .eigen-line { stroke: #c026d3; stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.7; }
.lt5-root .eigen-tip { fill: #c026d3; }
.lt5-root .eigen-tip-orig { fill: none; stroke: #c026d3; stroke-width: 1.4; opacity: 0.5; }
.lt5-root .kernel-line { stroke: #dc2626; stroke-width: 2; stroke-dasharray: 8 5; fill: none; opacity: 0.9; }
.lt5-root .kernel-halo { stroke: #dc2626; stroke-width: 10; fill: none; opacity: 0.10; }
.lt5-root .image-line { stroke: #059669; stroke-width: 2.2; fill: none; opacity: 0.95; }
.lt5-root .image-halo { stroke: #059669; stroke-width: 12; fill: none; opacity: 0.13; }
.lt5-root .ker-label { fill: #dc2626; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 14px; font-weight: 500; }
.lt5-root .img-label { fill: #059669; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 14px; font-weight: 500; }
.lt5-root .kernel-dot { fill: #dc2626; stroke: #fff; stroke-width: 1.2; }
.lt5-root .kernel-ghost { fill: none; stroke: #dc2626; stroke-width: 1.2; opacity: 0.5; }
.lt5-root .image-dot { fill: #059669; stroke: #fff; stroke-width: 1.2; }
.lt5-root .image-ghost { fill: none; stroke: #059669; stroke-width: 1.2; opacity: 0.5; }
.lt5-root .zero-ring { fill: none; stroke: #64748b; stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.6; }
.lt5-root .basis-i { stroke: #ea580c; stroke-width: 2.6; fill: none; stroke-linecap: round; }
.lt5-root .basis-j { stroke: #0891b2; stroke-width: 2.6; fill: none; stroke-linecap: round; }
.lt5-root .label-i { fill: #ea580c; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 17px; font-weight: 600; }
.lt5-root .label-j { fill: #0891b2; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 17px; font-weight: 600; }
.lt5-root .origin-dot { fill: #1e293b; }
.lt5-root .canvas-corner { font-family: 'JetBrains Mono', monospace; font-size: 9px; fill: #7989a3; letter-spacing: 0.1em; text-transform: uppercase; }
`;

const SVGRender = {
  _project: (geom) => (p) => [geom.cx + geom.scale * p[0], geom.cy - geom.scale * p[1]],

  grid(M, geom) {
    const tx = SVGRender._project(geom);
    const { gridR } = geom;
    let s = '';
    for (let i = -gridR; i <= gridR; i++) {
      const cls = i === 0 ? 'grid-axis' : 'grid-line';
      const [x1, y1] = tx(Math2D.apply(M, [-gridR, i]));
      const [x2, y2] = tx(Math2D.apply(M, [gridR, i]));
      s += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
      const [x3, y3] = tx(Math2D.apply(M, [i, -gridR]));
      const [x4, y4] = tx(Math2D.apply(M, [i, gridR]));
      s += `<line class="${cls}" x1="${x3.toFixed(2)}" y1="${y3.toFixed(2)}" x2="${x4.toFixed(2)}" y2="${y4.toFixed(2)}"/>`;
    }
    return s;
  },

  samples(M, geom) {
    const tx = SVGRender._project(geom);
    let s = '';
    for (let i = -4; i <= 4; i++) for (let j = -4; j <= 4; j++) {
      if (i === 0 && j === 0) continue;
      const [x, y] = tx(Math2D.apply(M, [i, j]));
      s += `<circle class="sample-dot" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="2.4"/>`;
    }
    return s;
  },

  circle(M, geom) {
    const tx = SVGRender._project(geom);
    const N = 96, pts = [];
    for (let i = 0; i < N; i++) {
      const a = (2 * Math.PI * i) / N;
      const [x, y] = tx(Math2D.apply(M, [Math.cos(a), Math.sin(a)]));
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return `<polygon class="unit-circle" points="${pts.join(' ')}"/>`;
  },

  square(M, geom) {
    const tx = SVGRender._project(geom);
    const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
    const pts = corners.map((c) => tx(Math2D.apply(M, c)).map((v) => v.toFixed(2)).join(',')).join(' ');
    const dM = Math2D.det(M);
    let fill, stroke;
    if (dM > 1e-3) { fill = 'rgba(99,102,241,0.15)'; stroke = '#6366f1'; }
    else if (dM < -1e-3) { fill = 'rgba(236,72,153,0.15)'; stroke = '#ec4899'; }
    else { fill = 'rgba(148,163,184,0.15)'; stroke = '#94a3b8'; }
    return `<polygon class="unit-square" points="${pts}" fill="${fill}" stroke="${stroke}"/>`;
  },

  eigen(M, A, geom) {
    const tx = SVGRender._project(geom);
    const { gridR } = geom;
    const ev = Math2D.eigenvalues(A);
    if (ev.type === 'complex') return '';
    const seen = [];
    let s = '';
    ev.vals.forEach((lam) => {
      const v = Math2D.eigenvector(A, lam);
      if (!v) return;
      if (seen.find((u) => Math.abs(u[0] * v[1] - u[1] * v[0]) < 1e-6)) return;
      seen.push(v);
      const [x1, y1] = tx([-gridR * v[0], -gridR * v[1]]);
      const [x2, y2] = tx([gridR * v[0], gridR * v[1]]);
      s += `<line class="eigen-line" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
      const [ox, oy] = tx(v);
      s += `<circle class="eigen-tip-orig" cx="${ox.toFixed(2)}" cy="${oy.toFixed(2)}" r="3.5"/>`;
      const [tipX, tipY] = tx(Math2D.apply(M, v));
      s += `<circle class="eigen-tip" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="4"/>`;
    });
    return s;
  },

  kerImg(M, A, showLabels, geom) {
    const tx = SVGRender._project(geom);
    const { gridR } = geom;
    const ki = Math2D.kerImg(A);
    if (ki.rank === 2) return '';
    let s = '';
    const [ox, oy] = tx([0, 0]);
    if (ki.rank === 0) {
      s += `<circle class="zero-ring" cx="${ox}" cy="${oy}" r="22"/>`;
      s += `<circle class="zero-ring" cx="${ox}" cy="${oy}" r="44"/>`;
      s += `<circle class="zero-ring" cx="${ox}" cy="${oy}" r="68"/>`;
      if (showLabels) s += `<text class="ker-label" x="${ox + 80}" y="${oy + 4}" font-size="11">ker A = \u211D&sup2;</text>`;
      return s;
    }
    const lineThroughOrigin = (dir, hCls, lCls) => {
      const [x1, y1] = tx([-gridR * dir[0], -gridR * dir[1]]);
      const [x2, y2] = tx([gridR * dir[0], gridR * dir[1]]);
      return `<line class="${hCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`
        + `<line class="${lCls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
    };
    s += lineThroughOrigin(ki.img, 'image-halo', 'image-line');
    s += lineThroughOrigin(ki.ker, 'kernel-halo', 'kernel-line');
    for (const d of [-2.4, -1.6, -0.8, 0.8, 1.6, 2.4]) {
      const p = [d * ki.ker[0], d * ki.ker[1]];
      const [gx, gy] = tx(p);
      s += `<circle class="kernel-ghost" cx="${gx.toFixed(2)}" cy="${gy.toFixed(2)}" r="3"/>`;
      const [px, py] = tx(Math2D.apply(M, p));
      s += `<circle class="kernel-dot" cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="3.4"/>`;
    }
    const perp = [-ki.ker[1], ki.ker[0]];
    for (const d of [-2, -1, 1, 2]) {
      const p = [d * perp[0], d * perp[1]];
      const [gx, gy] = tx(p);
      s += `<circle class="image-ghost" cx="${gx.toFixed(2)}" cy="${gy.toFixed(2)}" r="3"/>`;
      const [px, py] = tx(Math2D.apply(M, p));
      s += `<circle class="image-dot" cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="3.4"/>`;
    }
    if (showLabels) {
      const kp = [-ki.ker[1], ki.ker[0]];
      const kLab = [4.5 * ki.ker[0] + 0.55 * kp[0], 4.5 * ki.ker[1] + 0.55 * kp[1]];
      const [klx, kly] = tx(kLab);
      s += `<text class="ker-label" x="${klx.toFixed(2)}" y="${kly.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">ker A</text>`;
      const ip = [-ki.img[1], ki.img[0]];
      const iLab = [4.5 * ki.img[0] + 0.55 * ip[0], 4.5 * ki.img[1] + 0.55 * ip[1]];
      const [ilx, ily] = tx(iLab);
      s += `<text class="img-label" x="${ilx.toFixed(2)}" y="${ily.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">im A</text>`;
    }
    return s;
  },

  basis(M, showLabels, geom) {
    const tx = SVGRender._project(geom);
    const O = tx([0, 0]);
    const iVec = Math2D.apply(M, [1, 0]);
    const jVec = Math2D.apply(M, [0, 1]);
    const Itip = tx(iVec);
    const Jtip = tx(jVec);
    let s = '';
    s += `<line class="basis-i" x1="${O[0]}" y1="${O[1]}" x2="${Itip[0].toFixed(2)}" y2="${Itip[1].toFixed(2)}" marker-end="url(#lt-arr-i)"/>`;
    s += `<line class="basis-j" x1="${O[0]}" y1="${O[1]}" x2="${Jtip[0].toFixed(2)}" y2="${Jtip[1].toFixed(2)}" marker-end="url(#lt-arr-j)"/>`;
    if (showLabels) {
      const li = tx([iVec[0] + 0.2 * Math.sign(iVec[0] || 1), iVec[1] + 0.2]);
      const lj = tx([jVec[0] + 0.2, jVec[1] + 0.2 * Math.sign(jVec[1] || 1)]);
      s += `<text class="label-i" x="${li[0].toFixed(2)}" y="${li[1].toFixed(2)}" text-anchor="middle" dominant-baseline="middle">&#238;</text>`;
      s += `<text class="label-j" x="${lj[0].toFixed(2)}" y="${lj[1].toFixed(2)}" text-anchor="middle" dominant-baseline="middle">&#309;</text>`;
    }
    return s;
  },
};

// =====================================================================
//  SECTION 3  ::  Scenarios
// =====================================================================
const SQ = Math.SQRT1_2;

const SCENARIOS = {
  identity: {
    A: [[1, 0], [0, 1]], group: 'full', label: 'Identity',
    title: 'Identity', tag: 'rank 2 \u00B7 det 1',
    body: 'The identity matrix maps every vector to itself: <code>Iv = v</code>. The grid stays exactly where it started.',
    insight: 'Both columns are the standard basis vectors. Every direction is an eigenvector with eigenvalue 1.',
    watch: 'Edit a single entry to break the identity \u2014 even a small perturbation gives a non-trivial map.',
  },
  rot45: {
    A: [[SQ, -SQ], [SQ, SQ]], group: 'full', label: 'Rotate 45\u00B0',
    title: 'Rotate 45\u00B0 counterclockwise', tag: 'rank 2 \u00B7 det 1 \u00B7 rigid',
    body: 'A rotation matrix has columns <code>(cos\u03B8, sin\u03B8)</code> and <code>(\u2212sin\u03B8, cos\u03B8)</code>. Here \u03B8 = \u03C0/4, so both equal \u221A2/2 \u2248 0.707.',
    insight: 'Distances and angles are preserved \u2014 a rigid motion. Eigenvalues are complex since no real direction is invariant.',
    watch: 'The unit circle stays a circle. The unit square becomes a tilted square of the same area.',
  },
  rot90: {
    A: [[0, -1], [1, 0]], group: 'full', label: 'Rotate 90\u00B0',
    title: 'Rotate 90\u00B0 counterclockwise', tag: 'rank 2 \u00B7 det 1 \u00B7 rigid',
    body: 'A quarter turn. <code>\u00EE</code> goes to (0, 1); <code>\u0135</code> goes to (\u22121, 0). Apply A four times to return to identity.',
    insight: 'Eigenvalues are \u00B1i. The only real invariant subspace is the origin itself \u2014 no real line is fixed.',
    watch: 'Basis vectors swap roles. The grid rotates as a rigid body around the origin.',
  },
  scale2: {
    A: [[2, 0], [0, 2]], group: 'full', label: 'Scale 2\u00D7',
    title: 'Uniform scaling by 2', tag: 'rank 2 \u00B7 det 4',
    body: 'Every vector doubles in length: A = 2I. Areas multiply by 4, which is det A.',
    insight: 'Both eigenvalues are 2; every direction is an eigenvector. Diagonal matrices with equal entries are always scalings.',
    watch: 'The unit square grows to a 2\u00D72 square. The unit circle grows to a circle of radius 2.',
  },
  shearX: {
    A: [[1, 1], [0, 1]], group: 'full', label: 'Shear x',
    title: 'Horizontal shear', tag: 'rank 2 \u00B7 det 1',
    body: 'Each point <code>(x, y)</code> maps to <code>(x + y, y)</code>. Horizontal lines slide; the x-axis itself stays fixed.',
    insight: 'det = 1 so area is preserved, but angles are not. The only real eigenvector lies along the x-axis (eigenvalue 1, repeated).',
    watch: 'Vertical lines tilt into parallel slanted lines. The unit square becomes a parallelogram of the same area.',
  },
  reflectX: {
    A: [[1, 0], [0, -1]], group: 'full', label: 'Reflect x-axis',
    title: 'Reflection across the x-axis', tag: 'rank 2 \u00B7 det \u22121',
    body: 'Flips the y-component: <code>(x, y) \u21A6 (x, \u2212y)</code>. The x-axis is fixed; the y-axis is reversed.',
    insight: 'det = \u22121 signals orientation reversal \u2014 the unit square flips from CCW to CW. Eigenvalues are +1 (along x) and \u22121 (along y).',
    watch: 'The unit square fill changes color to indicate flipped orientation. The grid mirrors without warping.',
  },
  reflectDiag: {
    A: [[0, 1], [1, 0]], group: 'full', label: 'Reflect y=x',
    title: 'Reflection across y = x', tag: 'rank 2 \u00B7 det \u22121',
    body: 'Swaps coordinates: <code>(x, y) \u21A6 (y, x)</code>. The line y = x is fixed; the line y = \u2212x is reversed.',
    insight: 'Eigenvalues are +1 (along y = x) and \u22121 (along y = \u2212x). The two eigendirections are perpendicular.',
    watch: '\u00EE and \u0135 swap positions. Anything on the diagonal stays put.',
  },
  twist: {
    A: [[1.4, 0.6], [-0.3, 1.2]], group: 'full', label: 'Twist & stretch',
    title: 'Twist & stretch', tag: 'rank 2 \u00B7 generic',
    body: 'A typical invertible matrix \u2014 not a rotation, not a pure scaling. det A \u2248 1.86, so areas grow.',
    insight: 'Eigenvalues are complex, so no real direction maps to a scaled copy of itself \u2014 the map mixes rotation and stretching.',
    watch: 'The grid spirals slightly as it stretches. That faint swirl is the signature of complex eigenvalues.',
  },
  projectX: {
    A: [[1, 0], [0, 0]], group: 'rank1', label: 'Project to x',
    title: 'Projection onto the x-axis', tag: 'rank 1 \u00B7 det 0',
    body: 'Crushes the y-component: <code>(x, y) \u21A6 (x, 0)</code>. Image is the x-axis; kernel is the y-axis.',
    insight: 'Eigenvalues are 1 (on the image) and 0 (on the kernel). A projection satisfies A&sup2; = A \u2014 projecting twice changes nothing.',
    watch: 'The unit square collapses to a horizontal segment. The unit circle collapses to a diameter.',
  },
  projectDiag: {
    A: [[0.5, 0.5], [0.5, 0.5]], group: 'rank1', label: 'Project to y=x',
    title: 'Orthogonal projection onto y = x', tag: 'rank 1 \u00B7 det 0 \u00B7 symmetric',
    body: 'Maps every point to its closest point on the diagonal. Image is y = x; kernel is y = \u2212x.',
    insight: 'A is symmetric, so the kernel and image are perpendicular \u2014 the hallmark of an orthogonal projection.',
    watch: 'Two perpendicular directions split the plane: one preserved (the diagonal), one annihilated (the anti-diagonal).',
  },
  rank1: {
    A: [[1, 2], [2, 4]], group: 'rank1', label: 'Outer product',
    title: 'Rank-1 outer product', tag: 'rank 1 \u00B7 det 0',
    body: 'A = [[1, 2], [2, 4]]. Both rows are proportional to (1, 2); both columns are proportional to (1, 2).',
    insight: 'Image is the line spanned by (1, 2); kernel is perpendicular to (1, 2). Eigenvalues: 5 (trace) and 0.',
    watch: 'Four distinct entries, but the transformation lives in just one dimension.',
  },
  zero: {
    A: [[0, 0], [0, 0]], group: 'zero', label: 'Zero map',
    title: 'Zero map', tag: 'rank 0 \u00B7 det 0',
    body: 'Sends every vector to the origin. Kernel is all of <code>\u211D&sup2;</code>; image is the single point {0}.',
    insight: 'The most degenerate transformation possible. Both eigenvalues are 0; rank-nullity gives dim ker = 2.',
    watch: 'The unit square, unit circle, and basis vectors all shrink to a point at the origin.',
  },
};

const SCENARIO_CUSTOM = {
  title: 'Custom matrix', tag: 'edited',
  body: 'You&apos;re exploring outside the preset scenarios. The transformation may not have a clean name, but it still has a determinant, eigenvalues, and a rank.',
  insight: 'The Live panel tracks det M(t) as you scrub. det M(t) = 0 marks the moments when M(t) is singular.',
  watch: 'Try setting all entries to make det A = 0 \u2014 the unit square will collapse to a line.',
};

const SCENARIO_GROUPS = [
  { key: 'full',  label: 'Full rank',  tag: 'rank 2', tagClass: 'full' },
  { key: 'rank1', label: 'Singular',   tag: 'rank 1', tagClass: 'rank1' },
  { key: 'zero',  label: 'Degenerate', tag: 'rank 0', tagClass: 'zero' },
];

const PRESETS = Object.fromEntries(
  Object.entries(SCENARIOS).map(([k, v]) => [k, v.A])
);

// =====================================================================
//  SECTION 4  ::  Hooks
// =====================================================================
const DEFAULT_LAYERS = {
  grid: true, basis: true, square: true, circle: true,
  eigen: false, kernelImage: true, samples: false, labels: true,
};

function useTransformState(options = {}) {
  const {
    initialA = [[1, 0], [0, 1]],
    initialScenario = 'identity',
    initialLayers = DEFAULT_LAYERS,
    scenarios = SCENARIOS,
  } = options;

  const [A, setAInternal] = useState(initialA);
  const [activeScenario, setActiveScenario] = useState(initialScenario);
  const [layers, setLayers] = useState(initialLayers);

  const setA = useCallback((next) => {
    setAInternal(next);
    setActiveScenario(null);
  }, []);

  const selectScenario = useCallback((key) => {
    const sc = scenarios[key];
    if (!sc || !sc.A) return;
    setAInternal([sc.A[0].slice(), sc.A[1].slice()]);
    setActiveScenario(key);
  }, [scenarios]);

  return { A, activeScenario, layers, setA, selectScenario, setLayers };
}

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function useAnimationState(options = {}) {
  const { step = 0.1, duration = 1600, initialT = 0 } = options;
  const [t, setTState] = useState(initialT);
  const [playing, setPlaying] = useState(false);
  const animRef = useRef(null);
  const tRef = useRef(initialT);
  useEffect(() => { tRef.current = t; }, [t]);

  const cancel = useCallback(() => {
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    setPlaying(false);
  }, []);

  const animateTo = useCallback((target, dur = duration) => {
    if (animRef.current !== null) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }
    const tStart = tRef.current;
    const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
    setPlaying(true);
    const frame = (now) => {
      const elapsed = now - startTime;
      const localT = Math.min(1, elapsed / dur);
      const eased = easeInOutCubic(localT);
      const newT = tStart + (target - tStart) * eased;
      tRef.current = newT;
      setTState(newT);
      if (localT < 1) animRef.current = requestAnimationFrame(frame);
      else { animRef.current = null; setPlaying(false); }
    };
    animRef.current = requestAnimationFrame(frame);
  }, [duration]);

  const reset = useCallback(() => { cancel(); tRef.current = 0; setTState(0); }, [cancel]);

  const stepFwd = useCallback(() => {
    cancel();
    const cur = tRef.current;
    const next = Math.min(1, Math.floor(cur / step + 1) * step);
    tRef.current = next;
    setTState(next);
  }, [step, cancel]);

  const stepBack = useCallback(() => {
    cancel();
    const cur = tRef.current;
    const prev = Math.max(0, Math.ceil(cur / step - 1) * step);
    tRef.current = prev;
    setTState(prev);
  }, [step, cancel]);

  const play = useCallback(() => {
    const cur = tRef.current;
    if (cur >= 0.999) {
      tRef.current = 0;
      setTState(0);
      requestAnimationFrame(() => animateTo(1, duration));
    } else {
      animateTo(1, duration);
    }
  }, [duration, animateTo]);

  const setT = useCallback((newT) => { cancel(); tRef.current = newT; setTState(newT); }, [cancel]);

  useEffect(() => () => {
    if (animRef.current !== null) cancelAnimationFrame(animRef.current);
  }, []);

  return { t, playing, step, animateTo, cancel, reset, stepFwd, stepBack, play, setT };
}

// =====================================================================
//  SECTION 5  ::  Component CSS  (v7 layout)
// =====================================================================
const COMPONENT_CSS = `
${SVG_STYLE_CSS}

.lt5-root{
  --bg:#f7f9fc;
  --surface:#ffffff;
  --surface-2:#f3f6fa;
  --border:#dde3ec;
  --border-strong:#c4cdda;

  --text:#0f1729;
  --text-soft:#243049;
  --text-dim:#4a5673;
  --text-faint:#7989a3;

  --accent:#2b5bd7;
  --accent-hover:#1e46b3;
  --accent-soft:#eaf0fb;
  --accent-line:#c8d6f1;

  --i:#ea580c;--j:#0891b2;
  --eigen:#057a55;--kernel:#dc2626;--image:#059669;--unit:#6366f1;

  --font-display:'Fraunces',Georgia,serif;
  --font-body:'IBM Plex Sans',-apple-system,BlinkMacSystemFont,sans-serif;
  --font-mono:'JetBrains Mono',Menlo,monospace;

  --shadow-card:0 1px 0 rgba(15,23,41,.04),0 1px 2px rgba(15,23,41,.04);
  --radius:6px;

  color:var(--text);font-family:var(--font-body);line-height:1.5;
  -webkit-font-smoothing:antialiased;
  background:var(--bg);
}
.lt5-root *{box-sizing:border-box}

.lt5-app{
  display:grid;grid-template-rows:auto auto;
  gap:10px;padding:14px 24px;max-width:1340px;margin:0 auto;
  background:var(--bg);
}

/* ---- Lede ---- */
.lt5-lede{display:flex;align-items:baseline;gap:14px;font-size:14px;color:var(--text-dim);line-height:1.45}
.lt5-crumb{font-family:var(--font-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.lt5-crumb .lt5-dot{color:var(--accent);margin:0 6px}
.lt5-lede strong{color:var(--text);font-weight:500}
.lt5-lede code{font-family:var(--font-mono);font-size:13px;background:var(--accent-soft);color:var(--accent-hover);padding:1px 6px;border-radius:3px}

/* ---- 3-col layout: scenarios sidebar | square canvas col | info ---- */
.lt5-main{
  display:grid;gap:14px;align-items:start;
  grid-template-columns:230px 620px minmax(360px,1fr);
}
.lt5-scen-col,.lt5-canvas-col,.lt5-info-col{display:flex;flex-direction:column;gap:10px;min-width:0}
@media (max-width:1240px){
  .lt5-main{grid-template-columns:1fr;justify-content:center}
}

/* ---- Canvas (620x620, no padding) ---- */
.lt5-canvas-wrap{width:100%;display:flex;align-items:center;justify-content:center}
.lt5-canvas-svg{
  width:100%;aspect-ratio:1/1;
  background:var(--surface);
  border:1px solid var(--border);border-radius:var(--radius);
  box-shadow:var(--shadow-card);
  display:block;
}

/* ---- Readouts ---- */
.lt5-readouts{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%}
.lt5-readout{
  background:var(--surface);border:1px solid var(--border);border-left:3px solid currentColor;
  padding:8px 12px;border-radius:5px;
  display:flex;align-items:baseline;gap:10px;
  font-family:var(--font-mono);font-size:13.5px;font-weight:600;min-width:0;
}
.lt5-readout .lt5-lab{font-family:var(--font-display);font-style:italic;font-size:15px;font-weight:500;flex-shrink:0}
.lt5-readout .lt5-eq{color:var(--text-faint);font-weight:400;flex-shrink:0}
.lt5-readout .lt5-val{color:var(--text);font-weight:500;font-variant-numeric:tabular-nums;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lt5-readout.lt5-det{color:var(--unit)}
.lt5-readout.lt5-cls{color:var(--accent)}
.lt5-readout.lt5-cls .lt5-val{font-family:var(--font-body);font-weight:500;font-size:12.5px;text-transform:lowercase;letter-spacing:.02em}

/* ---- Animation panel (canvas col, under readouts) ---- */
.lt5-anim-card{
  background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
  box-shadow:var(--shadow-card);padding:12px 14px;
}
.lt5-anim-head{
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;text-transform:uppercase;
  color:var(--text-faint);margin-bottom:10px;display:flex;align-items:center;justify-content:space-between;
}
.lt5-anim-head .lt5-badge{color:var(--accent);margin-right:6px}
.lt5-anim-head .lt5-t-readout{font-weight:500;letter-spacing:.05em;text-transform:none;color:var(--accent)}
.lt5-anim-progress{
  height:5px;background:var(--surface-2);border-radius:3px;overflow:hidden;position:relative;margin-bottom:10px;
}
.lt5-anim-progress .lt5-fill{
  position:absolute;left:0;top:0;bottom:0;
  background:linear-gradient(90deg,var(--i),var(--j));border-radius:3px;
  transition:width .12s linear;
}
.lt5-anim-controls{display:flex;gap:6px;align-items:center}
.lt5-ctrl-btn{
  background:var(--surface-2);border:1px solid var(--border);
  width:30px;height:28px;border-radius:4px;cursor:pointer;
  color:var(--text-dim);font-weight:600;
  display:inline-flex;align-items:center;justify-content:center;padding:0;transition:all .12s;
}
.lt5-ctrl-btn:hover{background:var(--accent-soft);color:var(--accent);border-color:var(--accent-line)}
.lt5-ctrl-btn:active{transform:scale(.94)}
.lt5-ctrl-btn:disabled{opacity:.4;cursor:not-allowed;transform:none}
.lt5-ctrl-btn svg{width:11px;height:11px;fill:currentColor}
.lt5-ctrl-btn.lt5-primary{
  background:var(--accent);border-color:var(--accent);color:#fff;
  width:auto;padding:0 14px;font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;font-family:var(--font-mono);
}
.lt5-ctrl-btn.lt5-primary:hover{background:var(--accent-hover);border-color:var(--accent-hover);color:#fff}
.lt5-slider{
  flex:1;-webkit-appearance:none;appearance:none;height:4px;border-radius:2px;outline:none;cursor:pointer;
  min-width:60px;margin:0 4px;
}
.lt5-slider::-webkit-slider-thumb{
  -webkit-appearance:none;width:14px;height:14px;border-radius:50%;
  background:var(--accent);border:2px solid #fff;cursor:pointer;
  box-shadow:0 0 0 1px var(--accent);
}
.lt5-slider::-moz-range-thumb{
  width:12px;height:12px;border-radius:50%;
  background:var(--accent);border:2px solid #fff;cursor:pointer;
}
.lt5-t-label{
  font-family:var(--font-mono);font-size:11px;color:var(--text-faint);
  min-width:70px;text-align:right;font-variant-numeric:tabular-nums;
}
.lt5-t-label .lt5-val{color:var(--text);font-weight:600}

/* ---- Card ---- */
.lt5-card{
  background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);
  box-shadow:var(--shadow-card);padding:12px 14px;
}
.lt5-card h2{
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.18em;
  text-transform:uppercase;color:var(--text-faint);margin:0 0 10px;
  display:flex;align-items:center;justify-content:space-between;
}
.lt5-badge{color:var(--accent);margin-right:6px;font-weight:600}
.lt5-card h2 .lt5-note{font-weight:500;letter-spacing:.04em;text-transform:none;font-size:11px;color:var(--text-dim);font-family:var(--font-mono)}

/* ---- Chips ---- */
.lt5-chips-strip{
  display:flex;flex-wrap:wrap;gap:2px;padding:4px 8px;
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--radius);box-shadow:var(--shadow-card);
}
.lt5-chip{
  display:inline-flex;align-items:center;gap:6px;padding:4px 10px;
  font-family:var(--font-mono);font-size:11px;letter-spacing:.04em;
  color:var(--text-faint);background:transparent;border:1px solid transparent;
  border-radius:4px;cursor:pointer;user-select:none;transition:all .12s;
}
.lt5-chip input{width:12px;height:12px;margin:0;accent-color:var(--accent);cursor:pointer}
.lt5-chip:hover,.lt5-chip:has(input:checked){color:var(--text);background:var(--accent-soft)}

/* ---- Explanation ---- */
.lt5-ex-header{
  display:flex;align-items:baseline;justify-content:space-between;gap:12px;
  margin-bottom:10px;padding-bottom:10px;border-bottom:1px solid var(--border);
}
.lt5-ex-header h3{
  font-family:var(--font-display);font-weight:500;font-size:19px;color:var(--text);
  margin:0;letter-spacing:-.01em;line-height:1.2;
}
.lt5-ex-tag{font-family:var(--font-mono);font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-faint);white-space:nowrap}
.lt5-ex-body{color:var(--text-soft);font-size:13.5px;line-height:1.55;margin:0 0 10px}
.lt5-ex-block{margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)}
.lt5-ex-block-label{
  font-family:var(--font-mono);font-size:9.5px;letter-spacing:.15em;text-transform:uppercase;
  color:var(--text-faint);margin-bottom:4px;
}
.lt5-ex-block-label.lt5-insight{color:var(--accent)}
.lt5-ex-block-label.lt5-watch{color:var(--image)}
.lt5-ex-block p{margin:0;font-size:12.5px;color:var(--text-soft);line-height:1.55}
.lt5-ex-body code,.lt5-ex-block code{
  font-family:var(--font-mono);font-size:11.5px;
  background:var(--accent-soft);color:var(--accent-hover);padding:1px 4px;border-radius:3px;
}

/* ---- Matrix editor ---- */
.lt5-matrix-wrap{display:flex;justify-content:center;padding:2px 0}
.lt5-matrix-bracket{
  display:grid;grid-template-columns:auto auto;gap:5px;
  padding:7px 16px;position:relative;
}
.lt5-matrix-bracket::before,.lt5-matrix-bracket::after{
  content:'';position:absolute;top:3px;bottom:3px;width:6px;
  border:1.4px solid var(--text-dim);
}
.lt5-matrix-bracket::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.lt5-matrix-bracket::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.lt5-matrix-bracket input{
  width:50px;padding:5px 6px;background:var(--surface-2);
  border:1px solid var(--border);border-radius:3px;color:var(--text);
  font-family:var(--font-mono);font-size:12px;text-align:center;outline:none;
  -moz-appearance:textfield;transition:border-color .15s,background .15s;
}
.lt5-matrix-bracket input::-webkit-outer-spin-button,
.lt5-matrix-bracket input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}
.lt5-matrix-bracket input:focus{border-color:var(--accent);background:var(--accent-soft)}

/* ---- Live card ---- */
.lt5-live-grid{display:grid;grid-template-columns:auto 1fr;gap:6px 14px;align-items:center}
.lt5-live-label{font-family:var(--font-mono);font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--text-faint)}
.lt5-live-val{
  font-family:var(--font-mono);font-size:12px;color:var(--text);font-weight:500;
  text-align:right;font-variant-numeric:tabular-nums;
}
.lt5-live-val.lt5-live{color:var(--accent)}
.lt5-math-matrix{
  display:grid;grid-template-columns:auto auto;gap:2px 12px;
  padding:3px 11px;position:relative;
  font-family:var(--font-mono);font-size:11.5px;color:var(--text);width:fit-content;justify-self:end;
}
.lt5-math-matrix::before,.lt5-math-matrix::after{
  content:'';position:absolute;top:1px;bottom:1px;width:5px;border:1.2px solid var(--text-dim);
}
.lt5-math-matrix::before{left:0;border-right:none;border-radius:2px 0 0 2px}
.lt5-math-matrix::after{right:0;border-left:none;border-radius:0 2px 2px 0}
.lt5-math-matrix span{text-align:right;min-width:46px;color:var(--accent)}

/* ---- Scenarios sidebar ---- */
.lt5-scenarios-card{padding:12px 14px}
.lt5-scenarios-card h2{margin-bottom:8px}
.lt5-scen-sections{display:flex;flex-direction:column;gap:13px}
.lt5-scen-section{min-width:0}
.lt5-scen-section-label{
  display:flex;align-items:center;justify-content:space-between;gap:6px;
  font-family:var(--font-mono);font-size:11px;font-weight:600;letter-spacing:.08em;
  text-transform:uppercase;color:var(--text-dim);margin-bottom:6px;
}
.lt5-scen-section-label .lt5-tag{
  padding:2px 7px;border-radius:3px;font-size:9.5px;font-weight:700;
  letter-spacing:.05em;text-transform:uppercase;border:1px solid transparent;white-space:nowrap;
}
.lt5-scen-section-label .lt5-tag.full{background:rgba(99,102,241,.14);color:var(--unit);border-color:rgba(99,102,241,.35)}
.lt5-scen-section-label .lt5-tag.rank1{background:rgba(5,150,105,.14);color:var(--image);border-color:rgba(5,150,105,.4)}
.lt5-scen-section-label .lt5-tag.zero{background:rgba(220,38,38,.12);color:var(--kernel);border-color:rgba(220,38,38,.4)}
.lt5-preset-grid{display:flex;flex-direction:column;gap:4px}
.lt5-preset-btn{
  background:var(--surface-2);border:1px solid var(--border);
  border-left:3px solid var(--border-strong);
  color:var(--text-soft);padding:6px 10px;
  font-family:var(--font-body);font-size:12.5px;font-weight:500;
  cursor:pointer;border-radius:4px;text-align:left;transition:all .12s;
}
.lt5-preset-btn:hover{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover)}
.lt5-preset-btn.lt5-active{background:var(--accent-soft);border-color:var(--accent-line);color:var(--accent-hover);font-weight:600;border-left-color:var(--accent)}
.lt5-preset-btn.full{border-left-color:var(--unit)}
.lt5-preset-btn.rank1{border-left-color:var(--image)}
.lt5-preset-btn.zero{border-left-color:var(--kernel)}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

const DEFAULT_GEOM = { size: 600, scale: 50, gridR: 8 };

function VisualizerCanvas({
  A = [[1, 0], [0, 1]],
  t = 1,
  layers = DEFAULT_LAYERS,
  size = DEFAULT_GEOM.size,
  scale = DEFAULT_GEOM.scale,
  gridR = DEFAULT_GEOM.gridR,
  showStatus = true,
  className,
  style,
}) {
  const cx = size / 2;
  const cy = size / 2;
  const geom = { cx, cy, scale, gridR };
  const M = Math2D.interp(t, A);
  return (
    <svg
      className={'lt5-canvas-svg' + (className ? ' ' + className : '')}
      viewBox={`0 0 ${size} ${size}`}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <defs>
        <marker id="lt-arr-i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
        <marker id="lt-arr-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
        </marker>
      </defs>
      {layers.grid && <g dangerouslySetInnerHTML={{ __html: SVGRender.grid(M, geom) }} />}
      {layers.samples && <g dangerouslySetInnerHTML={{ __html: SVGRender.samples(M, geom) }} />}
      {layers.circle && <g dangerouslySetInnerHTML={{ __html: SVGRender.circle(M, geom) }} />}
      {layers.square && <g dangerouslySetInnerHTML={{ __html: SVGRender.square(M, geom) }} />}
      {layers.kernelImage && <g dangerouslySetInnerHTML={{ __html: SVGRender.kerImg(M, A, layers.labels, geom) }} />}
      {layers.eigen && <g dangerouslySetInnerHTML={{ __html: SVGRender.eigen(M, A, geom) }} />}
      {layers.basis && <g dangerouslySetInnerHTML={{ __html: SVGRender.basis(M, layers.labels, geom) }} />}
      <circle className="origin-dot" cx={cx} cy={cy} r={2.4} />
      <text className="canvas-corner" x={12} y={size - 12}>&#8477;&sup2; plane</text>
      {showStatus && (
        <text className="canvas-corner" x={size - 12} y={size - 12} textAnchor="end">
          {Math2D.classify(A)}
        </text>
      )}
    </svg>
  );
}

const ALL_LAYER_DEFS = [
  { key: 'grid', label: 'grid' },
  { key: 'basis', label: 'basis' },
  { key: 'square', label: 'unit sq' },
  { key: 'circle', label: 'unit \u25CB' },
  { key: 'eigen', label: 'eigen' },
  { key: 'kernelImage', label: 'ker / im' },
  { key: 'samples', label: 'samples' },
  { key: 'labels', label: 'labels' },
];

function LayerChips({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYER_DEFS }) {
  const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
  return (
    <div className="lt5-chips-strip">
      {defs.map((d) => (
        <label key={d.key} className="lt5-chip">
          <input
            type="checkbox"
            checked={!!layers[d.key]}
            onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
          />
          {d.label}
        </label>
      ))}
    </div>
  );
}

function CellInput({ value, onCommit, step }) {
  const [str, setStr] = useState(String(value));
  useEffect(() => { setStr(String(value)); }, [value]);
  return (
    <input
      type="number"
      step={step}
      value={str}
      onChange={(e) => {
        const next = e.target.value;
        setStr(next);
        if (next === '' || next === '-' || next === '.') return;
        const v = parseFloat(next);
        if (!Number.isNaN(v)) onCommit(v);
      }}
      onBlur={() => {
        const v = parseFloat(str);
        if (Number.isNaN(v)) setStr(String(value));
        else if (v !== value) onCommit(v);
      }}
    />
  );
}

function MatrixInput({ A = [[1, 0], [0, 1]], onChange = () => {}, step = 0.1 }) {
  return (
    <div className="lt5-matrix-wrap">
      <div className="lt5-matrix-bracket">
        {[[0,0],[0,1],[1,0],[1,1]].map(([r, c]) => (
          <CellInput
            key={`${r}-${c}`}
            value={A[r][c]}
            step={step}
            onCommit={(v) => {
              const next = A.map((row) => row.slice());
              next[r][c] = v;
              onChange(next);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CanvasReadout({ kind = 'det', label = 'det M(t)', value = '0' }) {
  return (
    <div className={`lt5-readout lt5-${kind}`}>
      <span className="lt5-lab">{label}</span>
      <span className="lt5-eq">=</span>
      <span className="lt5-val">{value}</span>
    </div>
  );
}

function ScenariosPanel({
  scenarios = SCENARIOS,
  groups = SCENARIO_GROUPS,
  visibleScenarios,
  activeScenario = null,
  onSelect = () => {},
  badge = '03',
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, v]) => v))
    : scenarios;
  return (
    <div className="lt5-card lt5-scenarios-card">
      <h2><span><span className="lt5-badge">{badge}</span>Scenarios</span></h2>
      <div className="lt5-scen-sections">
        {groups.map((g) => {
          const inGroup = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
          if (!inGroup.length) return null;
          return (
            <div key={g.key} className="lt5-scen-section">
              <div className="lt5-scen-section-label">
                <span>{g.label}</span>
                <span className={`lt5-tag ${g.tagClass}`}>{g.tag}</span>
              </div>
              <div className="lt5-preset-grid">
                {inGroup.map(([key, sc]) => (
                  <button
                    key={key}
                    className={`lt5-preset-btn ${g.tagClass}${activeScenario === key ? ' lt5-active' : ''}`}
                    onClick={() => onSelect(key)}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function pickScenarioCopy(activeScenario, A, scenarios, override) {
  const customCopy = (override && override.custom) || SCENARIO_CUSTOM;
  if (activeScenario && scenarios[activeScenario]) {
    const fromOverride = override && override.byScenario && override.byScenario[activeScenario];
    return fromOverride || scenarios[activeScenario];
  }
  return customCopy;
}

function ExplanationCard({ A, activeScenario, scenarios = SCENARIOS, override, className, style }) {
  const sc = pickScenarioCopy(activeScenario, A, scenarios, override);
  return (
    <div className={'lt5-card lt5-ex-card' + (className ? ' ' + className : '')} style={style}>
      <div className="lt5-ex-header">
        <h3>{sc.title}</h3>
        <span className="lt5-ex-tag">{sc.tag}</span>
      </div>
      <p className="lt5-ex-body" dangerouslySetInnerHTML={{ __html: sc.body }} />
      <div className="lt5-ex-block">
        <div className="lt5-ex-block-label lt5-insight">Insight</div>
        <p dangerouslySetInnerHTML={{ __html: sc.insight }} />
      </div>
      <div className="lt5-ex-block">
        <div className="lt5-ex-block-label lt5-watch">What to watch</div>
        <p dangerouslySetInnerHTML={{ __html: sc.watch }} />
      </div>
    </div>
  );
}

function LiveDataCard({ A, t, className, style }) {
  const M = Math2D.interp(t, A);
  const ev = Math2D.eigenvalues(A);
  const eigStr = ev.type === 'real'
    ? ev.vals.map((v) => Math2D.fmt(v)).join(', ')
    : `${Math2D.fmt(ev.vals[0].re)} \u00B1 ${Math2D.fmt(ev.vals[0].im)}i`;
  return (
    <div className={'lt5-card' + (className ? ' ' + className : '')} style={style}>
      <h2>
        <span><span className="lt5-badge">04</span>Live</span>
        <span className="lt5-note">t = {t.toFixed(3)}</span>
      </h2>
      <div className="lt5-live-grid">
        <span className="lt5-live-label">M(t)</span>
        <div className="lt5-math-matrix">
          <span>{Math2D.fmt2(M[0][0])}</span>
          <span>{Math2D.fmt2(M[0][1])}</span>
          <span>{Math2D.fmt2(M[1][0])}</span>
          <span>{Math2D.fmt2(M[1][1])}</span>
        </div>
        <span className="lt5-live-label">det M(t)</span>
        <span className="lt5-live-val lt5-live">{Math2D.fmt(Math2D.det(M))}</span>
        <span className="lt5-live-label">det A</span>
        <span className="lt5-live-val">{Math2D.fmt(Math2D.det(A))}</span>
        <span className="lt5-live-label">trace A</span>
        <span className="lt5-live-val">{Math2D.fmt(Math2D.trace(A))}</span>
        <span className="lt5-live-label">eigenvalues</span>
        <span className="lt5-live-val">{eigStr}</span>
        <span className="lt5-live-label">rank A</span>
        <span className="lt5-live-val">{Math2D.rank(A)}</span>
      </div>
    </div>
  );
}

const ICON_RESET   = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>;
const ICON_STEP_BACK = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>;
const ICON_STEP_FWD  = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z"/></svg>;

function AnimationCard({
  t = 0,
  playing = false,
  onPlay = () => {},
  onPause = () => {},
  onStepFwd = () => {},
  onStepBack = () => {},
  onReset = () => {},
  onScrub = () => {},
}) {
  const pct = (Math.max(0, Math.min(1, t)) * 100).toFixed(2);
  const sliderBg = `linear-gradient(to right, var(--accent) 0%, var(--accent) ${pct}%, var(--border) ${pct}%, var(--border) 100%)`;
  const backDisabled = t <= 1e-4;
  const fwdDisabled = t >= 1 - 1e-4;
  return (
    <div className="lt5-anim-card">
      <div className="lt5-anim-head">
        <span><span className="lt5-badge">&#9656;</span>Animation</span>
        <span className="lt5-t-readout">t = {t.toFixed(3)}</span>
      </div>
      <div className="lt5-anim-progress"><div className="lt5-fill" style={{ width: pct + '%' }} /></div>
      <div className="lt5-anim-controls">
        <button className="lt5-ctrl-btn" onClick={onReset} title="Reset" type="button">{ICON_RESET}</button>
        <button className="lt5-ctrl-btn" onClick={onStepBack} disabled={backDisabled} title="Step -0.1" type="button">{ICON_STEP_BACK}</button>
        <button
          className="lt5-ctrl-btn lt5-primary"
          onClick={playing ? onPause : onPlay}
          title="Play / Pause"
          type="button"
        >
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="lt5-ctrl-btn" onClick={onStepFwd} disabled={fwdDisabled} title="Step +0.1" type="button">{ICON_STEP_FWD}</button>
        <input
          type="range"
          min={0} max={1} step={0.001} value={t}
          className="lt5-slider"
          style={{ background: sliderBg }}
          onChange={(e) => onScrub(parseFloat(e.target.value))}
          aria-label="Animation parameter t"
        />
        <span className="lt5-t-label">t = <span className="lt5-val">{t.toFixed(3)}</span></span>
      </div>
    </div>
  );
}

// =====================================================================
//  SECTION 7  ::  Core + Wrapper
// =====================================================================

export function LinearTransformCore({
  initialA = [[1, 0], [0, 1]],
  initialScenario = 'identity',
  initialLayers = DEFAULT_LAYERS,
  scenarios = SCENARIOS,
  step = 0.1,
  duration = 1600,
  initialT = 0,
  children,
}) {
  const transform = useTransformState({ initialA, initialScenario, initialLayers, scenarios });
  const anim = useAnimationState({ step, duration, initialT });

  useEffect(() => {
    if (!transform.activeScenario) return;
    anim.setT(0);
    requestAnimationFrame(() => anim.animateTo(1, duration));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transform.activeScenario]);

  if (typeof children === 'function') return children({ transform, anim });
  return null;
}

const DEFAULT_LEDE = {
  crumb: 'Linear Algebra<span class="lt5-dot">&middot;</span>Linear transformations',
  body: 'A 2&times;2 matrix reshapes the plane &mdash; <strong>pick a scenario</strong>, scrub <code>t</code> from 0 to 1, and read what is happening on the right.',
};

export default function LinearTransform({
  lede,
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody  = DEFAULT_LEDE.body,
  initialA, initialScenario, initialLayers, scenarios,
  step, duration, initialT,
  canvas, layerChips, matrixInput, scenariosPanel, explanation, liveData, animation,
  visibleScenarios, enabledLayers, explanationOverride,
  layout,
  className, style,
}) {
  return (
    <LinearTransformCore
      initialA={initialA}
      initialScenario={initialScenario}
      initialLayers={initialLayers}
      scenarios={scenarios}
      step={step}
      duration={duration}
      initialT={initialT}
    >
      {({ transform, anim }) => {
        const renderLede = () => {
          if (lede !== undefined) return lede;
          if (ledeCrumb === null && ledeBody === null) return null;
          return (
            <div className="lt5-lede">
              {ledeCrumb && <span className="lt5-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />}
              {ledeBody && <span dangerouslySetInnerHTML={{ __html: ledeBody }} />}
            </div>
          );
        };

        const M = Math2D.interp(anim.t, transform.A);
        const slotCanvas = canvas !== undefined ? canvas : (
          <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} showStatus={false} />
        );
        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips layers={transform.layers} onChange={transform.setLayers} enabledLayers={enabledLayers} />
        );
        const slotMatrix = matrixInput !== undefined ? matrixInput : (
          <MatrixInput A={transform.A} onChange={transform.setA} />
        );
        const slotScenarios = scenariosPanel !== undefined ? scenariosPanel : (
          <ScenariosPanel
            scenarios={scenarios || SCENARIOS}
            visibleScenarios={visibleScenarios}
            activeScenario={transform.activeScenario}
            onSelect={transform.selectScenario}
          />
        );
        const slotExplanation = explanation !== undefined ? explanation : (
          <ExplanationCard
            A={transform.A}
            activeScenario={transform.activeScenario}
            scenarios={scenarios || SCENARIOS}
            override={explanationOverride}
          />
        );
        const slotLive = liveData !== undefined ? liveData : (
          <LiveDataCard A={transform.A} t={anim.t} />
        );
        const slotAnim = animation !== undefined ? animation : (
          <AnimationCard
            t={anim.t}
            playing={anim.playing}
            onPlay={anim.play}
            onPause={anim.cancel}
            onStepFwd={anim.stepFwd}
            onStepBack={anim.stepBack}
            onReset={anim.reset}
            onScrub={anim.setT}
          />
        );

        if (typeof layout === 'function') {
          return (
            <div className={'lt5-root ' + (className || '')} style={style}>
              <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
              {layout({ transform, anim })}
            </div>
          );
        }

        return (
          <div className={'lt5-root ' + (className || '')} style={style}>
            <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
            <div className="lt5-app">
              {renderLede()}
              <main className="lt5-main">
                <aside className="lt5-scen-col">
                  {slotScenarios}
                </aside>
                <section className="lt5-canvas-col">
                  <div className="lt5-canvas-wrap">{slotCanvas}</div>
                  <div className="lt5-readouts">
                    <CanvasReadout kind="det" label="det M(t)" value={Math2D.fmt(Math2D.det(M))} />
                    <CanvasReadout kind="cls" label="classify" value={Math2D.classify(transform.A)} />
                  </div>
                  {slotAnim}
                </section>
                <section className="lt5-info-col">
                  {slotExplanation}
                  {slotChips}
                  {slotMatrix !== null && (
                    <div className="lt5-card">
                      <h2><span><span className="lt5-badge">A</span>Matrix</span></h2>
                      {slotMatrix}
                    </div>
                  )}
                  {slotLive}
                </section>
              </main>
            </div>
          </div>
        );
      }}
    </LinearTransformCore>
  );
}

export {
  VisualizerCanvas, LayerChips, MatrixInput, ScenariosPanel,
  ExplanationCard, LiveDataCard, AnimationCard, CanvasReadout,
  useTransformState, useAnimationState,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, SCENARIO_CUSTOM, PRESETS,
  DEFAULT_LAYERS, DEFAULT_GEOM, ALL_LAYER_DEFS,
};