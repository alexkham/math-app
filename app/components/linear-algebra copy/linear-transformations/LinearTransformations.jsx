// // 'use client';

// // import { useState, useEffect, useRef, useCallback } from 'react';

// // // =====================================================================
// // //  SECTION 1  ::  Math2D
// // // =====================================================================
// // const Math2D = {
// //   apply: (M, p) => [
// //     M[0][0] * p[0] + M[0][1] * p[1],
// //     M[1][0] * p[0] + M[1][1] * p[1],
// //   ],
// //   det: (M) => M[0][0] * M[1][1] - M[0][1] * M[1][0],
// //   trace: (M) => M[0][0] + M[1][1],
// //   interp: (t, A) => [
// //     [(1 - t) * 1 + t * A[0][0], t * A[0][1]],
// //     [t * A[1][0], (1 - t) * 1 + t * A[1][1]],
// //   ],

// //   eigenvalues(A) {
// //     const tr = A[0][0] + A[1][1];
// //     const d = A[0][0] * A[1][1] - A[0][1] * A[1][0];
// //     const disc = (tr * tr) / 4 - d;
// //     if (disc >= -1e-12) {
// //       const r = Math.sqrt(Math.max(0, disc));
// //       return { type: 'real', vals: [tr / 2 + r, tr / 2 - r], disc };
// //     }
// //     const r = Math.sqrt(-disc);
// //     return {
// //       type: 'complex',
// //       vals: [{ re: tr / 2, im: r }, { re: tr / 2, im: -r }],
// //       disc,
// //     };
// //   },

// //   eigenvector(A, lam) {
// //     const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
// //     const tol = 1e-9;
// //     if (Math.abs(b) > tol) {
// //       const v = [b, lam - a];
// //       const n = Math.hypot(v[0], v[1]);
// //       if (n > tol) return [v[0] / n, v[1] / n];
// //     }
// //     if (Math.abs(c) > tol) {
// //       const v = [lam - d, c];
// //       const n = Math.hypot(v[0], v[1]);
// //       if (n > tol) return [v[0] / n, v[1] / n];
// //     }
// //     if (Math.abs(lam - a) < tol) return [1, 0];
// //     if (Math.abs(lam - d) < tol) return [0, 1];
// //     return null;
// //   },

// //   classify(A) {
// //     const a = A[0][0], b = A[0][1], c = A[1][0], d = A[1][1];
// //     const dd = a * d - b * c;
// //     if (Math.abs(a - 1) < 1e-6 && Math.abs(d - 1) < 1e-6 && Math.abs(b) < 1e-6 && Math.abs(c) < 1e-6) return 'identity';
// //     if (Math.abs(dd) < 1e-6) {
// //       if (Math.abs(a) + Math.abs(b) + Math.abs(c) + Math.abs(d) < 1e-6) return 'zero map';
// //       return 'singular';
// //     }
// //     if (Math.abs(b) < 1e-6 && Math.abs(c) < 1e-6) {
// //       if (Math.abs(a - d) < 1e-6) return a > 0 ? 'uniform scaling' : 'uniform scaling + 180\u00B0';
// //       return 'axis stretch';
// //     }
// //     if (Math.abs(b + c) < 1e-6 && Math.abs(a - d) < 1e-6 && Math.abs(a * a + b * b - 1) < 1e-3) return 'rotation';
// //     if (Math.abs(b - c) < 1e-6 && Math.abs(a + d) < 1e-6 && Math.abs(a * a + b * b - 1) < 1e-3) return 'reflection';
// //     if (Math.abs(a - 1) < 1e-6 && Math.abs(d - 1) < 1e-6 && (Math.abs(b) < 1e-6 || Math.abs(c) < 1e-6)) return 'shear';
// //     if (dd < 0) return 'orientation-reversing';
// //     return 'general invertible';
// //   },

// //   rank(A) {
// //     if (Math.abs(A[0][0] * A[1][1] - A[0][1] * A[1][0]) > 1e-9) return 2;
// //     if (A[0][0] || A[0][1] || A[1][0] || A[1][1]) return 1;
// //     return 0;
// //   },

// //   singularDirs(A) {
// //     let kerDir;
// //     if (Math.hypot(A[0][0], A[0][1]) > 1e-9) kerDir = [-A[0][1], A[0][0]];
// //     else kerDir = [-A[1][1], A[1][0]];
// //     let n = Math.hypot(kerDir[0], kerDir[1]) || 1;
// //     kerDir = [kerDir[0] / n, kerDir[1] / n];
// //     let imgDir;
// //     if (Math.hypot(A[0][0], A[1][0]) > 1e-9) imgDir = [A[0][0], A[1][0]];
// //     else imgDir = [A[0][1], A[1][1]];
// //     n = Math.hypot(imgDir[0], imgDir[1]) || 1;
// //     imgDir = [imgDir[0] / n, imgDir[1] / n];
// //     return { kerDir, imgDir };
// //   },

// //   fmt(x) {
// //     if (Math.abs(x) < 1e-9) return '0';
// //     return (Math.round(x * 1000) / 1000).toString();
// //   },
// // };

// // // =====================================================================
// // //  SECTION 2  ::  SVG render
// // // =====================================================================
// // const SVG_STYLE_CSS = `
// // .grid-line { stroke: #cfddef; stroke-width: 1; fill: none; vector-effect: non-scaling-stroke; }
// // .grid-axis { stroke: #64748b; stroke-width: 1.4; fill: none; }
// // .sample-dot { fill: rgba(124, 58, 237, 0.5); }
// // .unit-circle { fill: rgba(124, 58, 237, 0.06); stroke: #7c3aed; stroke-width: 1.4; stroke-dasharray: 4 3; }
// // .unit-square { stroke-width: 1.5; }
// // .eigen-line { stroke: #db2777; stroke-width: 1.3; stroke-dasharray: 6 4; opacity: 0.6; }
// // .eigen-tip { fill: #db2777; }
// // .eigen-tip-orig { fill: none; stroke: #db2777; stroke-width: 1.4; opacity: 0.5; }
// // .kernel-line { stroke: #dc2626; stroke-width: 2; stroke-dasharray: 8 5; fill: none; opacity: 0.85; }
// // .kernel-line-halo { stroke: #dc2626; stroke-width: 9; fill: none; opacity: 0.08; }
// // .image-line { stroke: #16a34a; stroke-width: 2.2; fill: none; opacity: 0.92; }
// // .image-line-halo { stroke: #16a34a; stroke-width: 11; fill: none; opacity: 0.1; }
// // .kernel-dot { fill: #dc2626; stroke: #ffffff; stroke-width: 1.2; }
// // .image-dot { fill: #16a34a; stroke: #ffffff; stroke-width: 1.2; }
// // .kernel-ghost { fill: none; stroke: #dc2626; stroke-width: 1.2; opacity: 0.5; }
// // .image-ghost { fill: none; stroke: #16a34a; stroke-width: 1.2; opacity: 0.5; }
// // .kernel-label { fill: #dc2626; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 15px; font-weight: 500; }
// // .image-label { fill: #047857; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 15px; font-weight: 500; }
// // .zero-map-ring { fill: none; stroke: #64748b; stroke-width: 1.2; stroke-dasharray: 3 4; opacity: 0.7; }
// // .zero-map-label { fill: #64748b; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 13px; }
// // .basis-i { stroke: #1d4ed8; stroke-width: 2.8; fill: none; stroke-linecap: round; }
// // .basis-j { stroke: #0891b2; stroke-width: 2.8; fill: none; stroke-linecap: round; }
// // .label-i { fill: #1d4ed8; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 19px; font-weight: 500; }
// // .label-j { fill: #0891b2; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 19px; font-weight: 500; }
// // .canvas-info { font-family: 'JetBrains Mono', monospace; font-size: 10px; fill: #94a3b8; letter-spacing: 0.1em; text-transform: uppercase; }
// // `;

// // const SVGRender = {
// //   _project: (geom) => (p) => [geom.cx + geom.scale * p[0], geom.cy - geom.scale * p[1]],

// //   grid(M, geom) {
// //     const tx = SVGRender._project(geom);
// //     const { gridR } = geom;
// //     let s = '';
// //     for (let i = -gridR; i <= gridR; i++) {
// //       const cls = i === 0 ? 'grid-axis' : 'grid-line';
// //       const [x1, y1] = tx(Math2D.apply(M, [-gridR, i]));
// //       const [x2, y2] = tx(Math2D.apply(M, [gridR, i]));
// //       s += `<line class="${cls}" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
// //       const [x3, y3] = tx(Math2D.apply(M, [i, -gridR]));
// //       const [x4, y4] = tx(Math2D.apply(M, [i, gridR]));
// //       s += `<line class="${cls}" x1="${x3.toFixed(2)}" y1="${y3.toFixed(2)}" x2="${x4.toFixed(2)}" y2="${y4.toFixed(2)}"/>`;
// //     }
// //     return s;
// //   },

// //   samples(M, geom) {
// //     const tx = SVGRender._project(geom);
// //     let s = '';
// //     for (let i = -4; i <= 4; i++) for (let j = -4; j <= 4; j++) {
// //       if (i === 0 && j === 0) continue;
// //       const [x, y] = tx(Math2D.apply(M, [i, j]));
// //       s += `<circle class="sample-dot" cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="2.4"/>`;
// //     }
// //     return s;
// //   },

// //   circle(M, geom) {
// //     const tx = SVGRender._project(geom);
// //     const N = 96, pts = [];
// //     for (let i = 0; i < N; i++) {
// //       const a = (2 * Math.PI * i) / N;
// //       const [x, y] = tx(Math2D.apply(M, [Math.cos(a), Math.sin(a)]));
// //       pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
// //     }
// //     return `<polygon class="unit-circle" points="${pts.join(' ')}"/>`;
// //   },

// //   square(M, geom) {
// //     const tx = SVGRender._project(geom);
// //     const corners = [[0, 0], [1, 0], [1, 1], [0, 1]];
// //     const pts = corners.map((c) => tx(Math2D.apply(M, c)).map((v) => v.toFixed(2)).join(',')).join(' ');
// //     const dM = Math2D.det(M);
// //     let fill, stroke;
// //     if (dM > 1e-3) { fill = 'rgba(124, 58, 237, 0.16)'; stroke = '#7c3aed'; }
// //     else if (dM < -1e-3) { fill = 'rgba(234, 88, 12, 0.16)'; stroke = '#ea580c'; }
// //     else { fill = 'rgba(148, 163, 184, 0.16)'; stroke = '#94a3b8'; }
// //     return `<polygon class="unit-square" points="${pts}" fill="${fill}" stroke="${stroke}"/>`;
// //   },

// //   eigen(M, A, geom) {
// //     const tx = SVGRender._project(geom);
// //     const { gridR } = geom;
// //     const ev = Math2D.eigenvalues(A);
// //     if (ev.type === 'complex') return '';
// //     const seen = [];
// //     let s = '';
// //     ev.vals.forEach((lam) => {
// //       const v = Math2D.eigenvector(A, lam);
// //       if (!v) return;
// //       const dup = seen.find((u) => Math.abs(u[0] * v[1] - u[1] * v[0]) < 1e-6);
// //       if (dup) return;
// //       seen.push(v);
// //       const [x1, y1] = tx([-gridR * v[0], -gridR * v[1]]);
// //       const [x2, y2] = tx([gridR * v[0], gridR * v[1]]);
// //       s += `<line class="eigen-line" x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}"/>`;
// //       const [ox, oy] = tx(v);
// //       s += `<circle class="eigen-tip-orig" cx="${ox.toFixed(2)}" cy="${oy.toFixed(2)}" r="4"/>`;
// //       const [tipX, tipY] = tx(Math2D.apply(M, v));
// //       s += `<circle class="eigen-tip" cx="${tipX.toFixed(2)}" cy="${tipY.toFixed(2)}" r="4.5"/>`;
// //     });
// //     return s;
// //   },

// //   kernelImage(M, A, showLabels, geom) {
// //     const tx = SVGRender._project(geom);
// //     const { gridR } = geom;
// //     const dA = Math2D.det(A);
// //     if (Math.abs(dA) > 1e-6) return '';
// //     const isZero = Math.abs(A[0][0]) + Math.abs(A[0][1]) + Math.abs(A[1][0]) + Math.abs(A[1][1]) < 1e-9;
// //     const [ox, oy] = tx([0, 0]);
// //     if (isZero) {
// //       let s = '';
// //       s += `<circle class="zero-map-ring" cx="${ox}" cy="${oy}" r="22"/>`;
// //       s += `<circle class="zero-map-ring" cx="${ox}" cy="${oy}" r="42"/>`;
// //       s += `<circle class="zero-map-ring" cx="${ox}" cy="${oy}" r="68"/>`;
// //       if (showLabels) s += `<text class="zero-map-label" x="${ox + 76}" y="${oy + 5}">ker A = \u211D\u00B2 \u00B7 im A = {0}</text>`;
// //       return s;
// //     }
// //     const { kerDir, imgDir } = Math2D.singularDirs(A);
// //     const [kx1, ky1] = tx([-gridR * kerDir[0], -gridR * kerDir[1]]);
// //     const [kx2, ky2] = tx([gridR * kerDir[0], gridR * kerDir[1]]);
// //     const [ix1, iy1] = tx([-gridR * imgDir[0], -gridR * imgDir[1]]);
// //     const [ix2, iy2] = tx([gridR * imgDir[0], gridR * imgDir[1]]);
// //     let s = '';
// //     s += `<line class="image-line-halo"  x1="${ix1.toFixed(2)}" y1="${iy1.toFixed(2)}" x2="${ix2.toFixed(2)}" y2="${iy2.toFixed(2)}"/>`;
// //     s += `<line class="kernel-line-halo" x1="${kx1.toFixed(2)}" y1="${ky1.toFixed(2)}" x2="${kx2.toFixed(2)}" y2="${ky2.toFixed(2)}"/>`;
// //     s += `<line class="image-line"  x1="${ix1.toFixed(2)}" y1="${iy1.toFixed(2)}" x2="${ix2.toFixed(2)}" y2="${iy2.toFixed(2)}"/>`;
// //     s += `<line class="kernel-line" x1="${kx1.toFixed(2)}" y1="${ky1.toFixed(2)}" x2="${kx2.toFixed(2)}" y2="${ky2.toFixed(2)}"/>`;
// //     for (const d of [-2.4, -1.6, -0.8, 0.8, 1.6, 2.4]) {
// //       const p = [d * kerDir[0], d * kerDir[1]];
// //       const [gx, gy] = tx(p);
// //       s += `<circle class="kernel-ghost" cx="${gx.toFixed(2)}" cy="${gy.toFixed(2)}" r="3.4"/>`;
// //       const [px, py] = tx(Math2D.apply(M, p));
// //       s += `<circle class="kernel-dot" cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="3.5"/>`;
// //     }
// //     const perp = [-kerDir[1], kerDir[0]];
// //     for (const d of [-2, -1, 1, 2]) {
// //       const p = [d * perp[0], d * perp[1]];
// //       const [gx, gy] = tx(p);
// //       s += `<circle class="image-ghost" cx="${gx.toFixed(2)}" cy="${gy.toFixed(2)}" r="3.4"/>`;
// //       const [px, py] = tx(Math2D.apply(M, p));
// //       s += `<circle class="image-dot" cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="3.5"/>`;
// //     }
// //     if (showLabels) {
// //       const kLab = [4.5 * kerDir[0] + 0.55 * -kerDir[1], 4.5 * kerDir[1] + 0.55 * kerDir[0]];
// //       const [kLx, kLy] = tx(kLab);
// //       s += `<text class="kernel-label" x="${kLx.toFixed(2)}" y="${kLy.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">ker A</text>`;
// //       const iLab = [4.5 * imgDir[0] + 0.55 * imgDir[1], 4.5 * imgDir[1] + 0.55 * -imgDir[0]];
// //       const [iLx, iLy] = tx(iLab);
// //       s += `<text class="image-label" x="${iLx.toFixed(2)}" y="${iLy.toFixed(2)}" text-anchor="middle" dominant-baseline="middle">im A</text>`;
// //     }
// //     return s;
// //   },

// //   basis(M, showLabels, geom) {
// //     const tx = SVGRender._project(geom);
// //     const O = tx([0, 0]);
// //     const iVec = Math2D.apply(M, [1, 0]);
// //     const jVec = Math2D.apply(M, [0, 1]);
// //     const Itip = tx(iVec);
// //     const Jtip = tx(jVec);
// //     let s = '';
// //     s += `<line class="basis-i" x1="${O[0]}" y1="${O[1]}" x2="${Itip[0].toFixed(2)}" y2="${Itip[1].toFixed(2)}" marker-end="url(#arrow-i)"/>`;
// //     s += `<line class="basis-j" x1="${O[0]}" y1="${O[1]}" x2="${Jtip[0].toFixed(2)}" y2="${Jtip[1].toFixed(2)}" marker-end="url(#arrow-j)"/>`;
// //     if (showLabels) {
// //       const li = tx([iVec[0] + 0.2 * Math.sign(iVec[0] || 1), iVec[1] + 0.2]);
// //       const lj = tx([jVec[0] + 0.2, jVec[1] + 0.2 * Math.sign(jVec[1] || 1)]);
// //       s += `<text class="label-i" x="${li[0].toFixed(2)}" y="${li[1].toFixed(2)}" text-anchor="middle" dominant-baseline="middle">&#238;</text>`;
// //       s += `<text class="label-j" x="${lj[0].toFixed(2)}" y="${lj[1].toFixed(2)}" text-anchor="middle" dominant-baseline="middle">&#309;</text>`;
// //     }
// //     return s;
// //   },
// // };

// // // =====================================================================
// // //  SECTION 3  ::  Presets
// // // =====================================================================
// // const SQ = Math.SQRT1_2;
// // const PRESETS = {
// //   identity:    [[1, 0], [0, 1]],
// //   rot45:       [[SQ, -SQ], [SQ, SQ]],
// //   rot90:       [[0, -1], [1, 0]],
// //   scale2:      [[2, 0], [0, 2]],
// //   scaleHalf:   [[0.5, 0], [0, 0.5]],
// //   shearX:      [[1, 1], [0, 1]],
// //   shearY:      [[1, 0], [1, 1]],
// //   reflectX:    [[1, 0], [0, -1]],
// //   reflectDiag: [[0, 1], [1, 0]],
// //   twist:       [[1.4, 0.6], [-0.3, 1.2]],
// //   projectX:    [[1, 0], [0, 0]],
// //   projectDiag: [[0.5, 0.5], [0.5, 0.5]],
// //   rank1:       [[1, 2], [2, 4]],
// //   rank1tilt:   [[1, -1.5], [-2 / 3, 1]],
// //   zero:        [[0, 0], [0, 0]],
// // };
// // const PRESET_META = {
// //   identity:    { label: 'Identity',        singular: false },
// //   rot45:       { label: 'Rotate 45\u00B0', singular: false },
// //   rot90:       { label: 'Rotate 90\u00B0', singular: false },
// //   scale2:      { label: 'Scale 2\u00D7',   singular: false },
// //   scaleHalf:   { label: 'Scale \u00BD',    singular: false },
// //   shearX:      { label: 'Shear x',         singular: false },
// //   shearY:      { label: 'Shear y',         singular: false },
// //   reflectX:    { label: 'Reflect x',       singular: false },
// //   reflectDiag: { label: 'Reflect y=x',     singular: false },
// //   twist:       { label: 'Twist+stretch',   singular: false },
// //   projectX:    { label: 'Project to x',    singular: true },
// //   projectDiag: { label: 'Project y=x',     singular: true },
// //   rank1:       { label: 'Rank-1 sym',      singular: true },
// //   rank1tilt:   { label: 'Rank-1 tilt',     singular: true },
// //   zero:        { label: 'Zero map',        singular: true },
// // };
// // const DEFAULT_PRESET_KEYS = Object.keys(PRESET_META);

// // // =====================================================================
// // //  SECTION 4  ::  Default explanations
// // // =====================================================================
// // const _fmt = Math2D.fmt;
// // const _matrix = (A) => `<span class="exp-matrix-display"><span class="num">${_fmt(A[0][0])}</span><span class="num">${_fmt(A[0][1])}</span><span class="num">${_fmt(A[1][0])}</span><span class="num">${_fmt(A[1][1])}</span></span>`;
// // const _det = (A) => `det A &thinsp;=&thinsp; <span class="v">a</span><span class="v">d</span> &minus; <span class="v">b</span><span class="v">c</span> &thinsp;=&thinsp; (${_fmt(A[0][0])})(${_fmt(A[1][1])}) &minus; (${_fmt(A[0][1])})(${_fmt(A[1][0])}) &thinsp;=&thinsp; <span class="num">${_fmt(Math2D.det(A))}</span>`;
// // const _trace = (A) => `tr&thinsp;A &thinsp;=&thinsp; ${_fmt(A[0][0])} + ${_fmt(A[1][1])} &thinsp;=&thinsp; <span class="num">${_fmt(Math2D.trace(A))}</span>`;
// // const _eigen = (A) => {
// //   const ev = Math2D.eigenvalues(A);
// //   let s = `discriminant &thinsp;=&thinsp; (tr/2)&sup2; &minus; det &thinsp;=&thinsp; <span class="num">${_fmt(ev.disc)}</span><br>`;
// //   if (ev.type === 'real') s += `&lambda;<sub>1</sub>,&thinsp;&lambda;<sub>2</sub> &thinsp;=&thinsp; <span class="pink">${_fmt(ev.vals[0])}</span>,&thinsp;<span class="pink">${_fmt(ev.vals[1])}</span>`;
// //   else s += `&lambda; &thinsp;=&thinsp; <span class="pink">${_fmt(ev.vals[0].re)} &plusmn; ${_fmt(ev.vals[0].im)}i</span>&nbsp;&nbsp;<span style="color:#64748b">(complex)</span>`;
// //   return s;
// // };
// // const _sing = (A) => {
// //   const { kerDir, imgDir } = Math2D.singularDirs(A);
// //   return `<span class="red">ker A</span> &nbsp;along&nbsp; (${_fmt(kerDir[0])},&thinsp;${_fmt(kerDir[1])})<br><span class="green">im A</span> &nbsp;along&nbsp; (${_fmt(imgDir[0])},&thinsp;${_fmt(imgDir[1])})`;
// // };

// // const EX_identity = {
// //   title: 'Identity',
// //   plain: 'A leaves every vector exactly where it was. &icirc; stays at (1,&thinsp;0), &jcirc; stays at (0,&thinsp;1) &mdash; nothing moves.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `${_det(s.A)}<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: () => `<em>Every</em> nonzero vector is an eigenvector with eigenvalue&nbsp;<span class="pink">1</span>. The whole plane is fixed.` },
// //     { label: 'Rank', body: () => `rank = <span class="num">2</span> &nbsp;(full)` },
// //     { type: 'insight', body: () => `Identity is the &ldquo;do nothing&rdquo; transformation &mdash; the neutral element for matrix multiplication.` },
// //   ],
// // };
// // const EX_rot45 = {
// //   title: '<em>Rotation</em> by 45&deg;',
// //   plain: 'Every vector spins counter-clockwise around the origin by 45&deg;. <b>Lengths preserved, angles preserved.</b>',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}<br>${_trace(s.A)} &nbsp;= 2&thinsp;cos(45&deg;)` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) + `<br><span style="color:#64748b">no real eigenvectors &mdash; no direction stays put</span>` },
// //     { label: 'Rank', body: () => `rank = <span class="num">2</span>` },
// //     { type: 'insight', body: () => `det&nbsp;=&nbsp;1 means orientation and area are preserved. Complex eigenvalues on the unit circle are the algebraic fingerprint of true rotation.` },
// //   ],
// // };
// // const EX_rot90 = {
// //   title: '<em>Rotation</em> by 90&deg;',
// //   plain: 'A quarter-turn counter-clockwise. &icirc; lands on &jcirc;, and &jcirc; lands on &minus;&icirc;.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { type: 'insight', body: () => `Eigenvalues are &plusmn;<em>i</em> &mdash; pure imaginary. Geometrically: A&sup2; = &minus;I, two quarter-turns make a half-turn.` },
// //   ],
// // };
// // const EX_scale2 = {
// //   title: '<em>Uniform scaling</em>, k = 2',
// //   plain: 'Every vector is doubled. The plane stretches uniformly &mdash; areas grow by k&sup2; = 4.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; 2I &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)} &nbsp;= k&sup2;<br>${_trace(s.A)} &nbsp;= 2k` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) + `<br><span style="color:#64748b">every direction is an eigenvector</span>` },
// //     { type: 'insight', body: () => `When A = kI, every nonzero vector is an eigenvector. The matrix has only one distinct eigenvalue but infinitely many eigendirections.` },
// //   ],
// // };
// // const EX_scaleHalf = {
// //   title: '<em>Uniform scaling</em>, k = &frac12;',
// //   plain: 'Every vector is halved. The plane contracts uniformly &mdash; areas shrink by k&sup2; = &frac14;.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `${_det(s.A)}<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { type: 'insight', body: () => `0&nbsp;&lt;&nbsp;k&nbsp;&lt;&nbsp;1: still invertible (det &gt; 0), but everything moves toward the origin under iteration A,&nbsp;A&sup2;,&nbsp;A&sup3;&hellip; The limit is&nbsp;<em>0</em>.` },
// //   ],
// // };
// // const EX_shearX = {
// //   title: '<em>Shear</em> along x',
// //   plain: 'Horizontal layers slide past each other. The x-axis is fixed; every other row slides right by an amount proportional to its y-coordinate.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) + `<br><span style="color:#64748b">algebraic multiplicity 2, geometric multiplicity 1</span>` },
// //     { type: 'insight', body: () => `det&nbsp;=&nbsp;1 &mdash; <em>area preserved</em>. Both eigenvalues are 1, but only the x-axis is an eigendirection. A is <em>not diagonalizable</em>.` },
// //   ],
// // };
// // const EX_shearY = {
// //   title: '<em>Shear</em> along y',
// //   plain: 'Vertical layers slide past each other. The y-axis is fixed; everything else slides up by its x-coordinate.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { type: 'insight', body: () => `Same story as shear-x, transposed. Area preserved, one eigendirection (the y-axis), not diagonalizable.` },
// //   ],
// // };
// // const EX_reflectX = {
// //   title: '<em>Reflection</em> across the x-axis',
// //   plain: 'The plane flips vertically. Points above the x-axis swap with their mirror images below.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) + `<br><span style="color:#64748b">+1 fixes the x-axis, &minus;1 flips the y-axis</span>` },
// //     { type: 'insight', body: () => `det&nbsp;=&nbsp;&minus;1: <em>area preserved, orientation reversed</em>. The unit square&apos;s vertices visit in the opposite order after the flip.` },
// //   ],
// // };
// // const EX_reflectDiag = {
// //   title: '<em>Reflection</em> across y = x',
// //   plain: 'Coordinates swap: (x, y) becomes (y, x). &icirc; and &jcirc; exchange places.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) + `<br><span style="color:#64748b">+1 along y=x, &minus;1 along y=&minus;x</span>` },
// //     { type: 'insight', body: () => `Same det&nbsp;=&nbsp;&minus;1 character as the x-axis reflection &mdash; just a different mirror line.` },
// //   ],
// // };
// // const EX_twist = {
// //   title: '<em>Twist &amp; stretch</em>',
// //   plain: 'A mixture of rotation, shear, and non-uniform stretching. The unit square becomes a tilted parallelogram.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { type: 'insight', body: () => `Real eigenvalues mean directions that A only stretches. Complex eigenvalues mean rotation&plus;scale. The det tells you the area factor.` },
// //   ],
// // };
// // const EX_projectX = {
// //   title: '<em>Projection</em> onto the x-axis',
// //   plain: 'Every point is collapsed onto the x-axis by dropping its y-coordinate. The plane <b>flattens to a line</b>.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)} &nbsp;&larr; <em>singular</em><br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) + `<br><span style="color:#64748b">0 along y-axis (crushed), 1 along x-axis (fixed)</span>` },
// //     { label: 'Kernel &amp; image', type: 'singular-dirs', body: (s) => _sing(s.A) },
// //     { label: 'Rank', body: () => `rank = <span class="num">1</span>` },
// //     { type: 'insight-singular', body: () => `Singular: an entire direction is destroyed. Once you flatten, you can&apos;t un-flatten &mdash; <em>no inverse exists</em>.` },
// //   ],
// // };
// // const EX_projectDiag = {
// //   title: '<em>Projection</em> onto y = x',
// //   plain: 'Every point is dropped perpendicularly onto the line y&nbsp;=&nbsp;x. The plane collapses to that line.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)} &nbsp;&larr; <em>singular</em>` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { label: 'Kernel &amp; image', type: 'singular-dirs', body: (s) => _sing(s.A) },
// //     { label: 'Rank', body: () => `rank = <span class="num">1</span>` },
// //     { type: 'insight-singular', body: () => `A&sup2; = A &mdash; projecting twice is the same as projecting once. That&apos;s the defining property of a projection matrix.` },
// //   ],
// // };
// // const EX_rank1 = {
// //   title: '<em>Rank-1</em>, symmetric',
// //   plain: 'Row 2 is twice row 1. The two columns are parallel &mdash; both point along (1,&thinsp;2). The plane collapses onto that line.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)} &nbsp;&larr; <em>singular</em>` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { label: 'Kernel &amp; image', type: 'singular-dirs', body: (s) => _sing(s.A) },
// //     { label: 'Rank', body: () => `rank = <span class="num">1</span>` },
// //     { type: 'insight-singular', body: () => `When rows are proportional, the columns are too &mdash; that&apos;s why det vanishes. The kernel is perpendicular to the row direction.` },
// //   ],
// // };
// // const EX_rank1tilt = {
// //   title: '<em>Rank-1</em>, asymmetric',
// //   plain: 'A non-symmetric rank-1 matrix &mdash; kernel and image lines are <em>not perpendicular</em>. Geometrically: an oblique projection-and-stretch onto a line.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)} &nbsp;&larr; <em>singular</em>` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { label: 'Kernel &amp; image', type: 'singular-dirs', body: (s) => _sing(s.A) },
// //     { label: 'Rank', body: () => `rank = <span class="num">1</span>` },
// //     { type: 'insight-singular', body: () => `For non-symmetric rank-1 matrices, ker A and im A live in different directions &mdash; they need not be perpendicular. Compare with the symmetric case above.` },
// //   ],
// // };
// // const EX_zero = {
// //   title: '<em>Zero map</em>',
// //   plain: 'Every vector collapses to the origin. The plane is annihilated.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}` },
// //     { label: 'Kernel &amp; image', body: () => `<span class="red">ker A</span> &thinsp;=&thinsp; &#8477;&sup2; &nbsp;(everything)<br><span class="green">im A</span> &thinsp;=&thinsp; {0} &nbsp;(just the origin)` },
// //     { label: 'Rank', body: () => `rank = <span class="num">0</span>` },
// //     { type: 'insight-singular', body: () => `The most degenerate transformation. Maximum kernel (the whole plane), minimum image (a single point).` },
// //   ],
// // };
// // const EX_uniformFlipped = {
// //   title: '<em>Uniform scaling</em> &times; 180&deg;',
// //   plain: 'Scale by |k| <em>and</em> rotate by 180&deg;. det A &gt; 0 (negative times negative), so orientation is preserved.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `${_det(s.A)}<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { type: 'insight', body: () => `A = kI with k&nbsp;&lt;&nbsp;0: a flip through the origin combined with a scale.` },
// //   ],
// // };
// // const EX_axisStretch = {
// //   title: '<em>Axis-aligned stretch</em>',
// //   plain: 'Different scaling along x vs y &mdash; the plane stretches into an ellipse aligned with the axes.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) + `<br><span style="color:#64748b">eigenvectors are &icirc; and &jcirc;</span>` },
// //     { type: 'insight', body: () => `Diagonal matrices have the standard basis as eigenvectors; the diagonal entries are the eigenvalues.` },
// //   ],
// // };
// // const EX_orientationReversing = {
// //   title: '<em>Orientation-reversing</em>',
// //   plain: 'det A &lt; 0 &mdash; the unit square&apos;s vertices visit in <em>reverse order</em> after the transformation. The plane is flipped.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `${_det(s.A)} &nbsp;&larr; negative<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { type: 'insight', body: () => `Negative determinant always means orientation reversal. Pure reflections give det = &minus;1; mixed transformations give arbitrary negative values.` },
// //   ],
// // };
// // const EX_singularGeneric = {
// //   title: '<em>Singular</em> &mdash; collapse to a line',
// //   plain: 'det A = 0. The columns of A are parallel; the plane is squashed onto a single line.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)} &nbsp;&larr; <em>singular</em>` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { label: 'Kernel &amp; image', type: 'singular-dirs', body: (s) => _sing(s.A) },
// //     { label: 'Rank', body: () => `rank = <span class="num">1</span>` },
// //     { type: 'insight-singular', body: () => `Once you flatten, you can&apos;t un-flatten &mdash; <em>no inverse exists</em>. ker A is everything that gets crushed to zero; im A is where everything else lands.` },
// //   ],
// // };
// // const EX_fallback = {
// //   title: 'Linear map',
// //   plain: 'A 2&times;2 matrix sends each vector v to A&middot;v. The four entries determine everything.',
// //   sections: [
// //     { label: 'Computation', body: (s) => `A &thinsp;=&thinsp; ${_matrix(s.A)}<br>${_det(s.A)}<br>${_trace(s.A)}` },
// //     { label: 'Eigenvalues', body: (s) => _eigen(s.A) },
// //     { type: 'insight', body: () => `Pick a preset, or edit the matrix entries directly.` },
// //   ],
// // };

// // const defaultExplanations = {
// //   byPreset: {
// //     identity: EX_identity, rot45: EX_rot45, rot90: EX_rot90,
// //     scale2: EX_scale2, scaleHalf: EX_scaleHalf,
// //     shearX: EX_shearX, shearY: EX_shearY,
// //     reflectX: EX_reflectX, reflectDiag: EX_reflectDiag,
// //     twist: EX_twist,
// //     projectX: EX_projectX, projectDiag: EX_projectDiag,
// //     rank1: EX_rank1, rank1tilt: EX_rank1tilt, zero: EX_zero,
// //   },
// //   byCharacter: {
// //     'identity': EX_identity,
// //     'rotation': EX_rot45,
// //     'uniform scaling': EX_scale2,
// //     'uniform scaling + 180\u00B0': EX_uniformFlipped,
// //     'axis stretch': EX_axisStretch,
// //     'shear': EX_shearX,
// //     'reflection': EX_reflectX,
// //     'orientation-reversing': EX_orientationReversing,
// //     'singular': EX_singularGeneric,
// //     'zero map': EX_zero,
// //     'general invertible': EX_twist,
// //   },
// //   fallback: EX_fallback,
// // };

// // // =====================================================================
// // //  SECTION 5  ::  Hooks
// // // =====================================================================
// // const DEFAULT_LAYERS = {
// //   grid: true, samples: false, square: true, circle: true,
// //   basis: true, eigen: false, kernelImage: true, labels: true,
// // };
// // const DEFAULT_STOPS = [0, 0.25, 0.5, 0.75, 1.0];

// // function useTransformState(options = {}) {
// //   const {
// //     initialA = [[1, 0], [0, 1]],
// //     initialPreset = 'identity',
// //     initialLayers = DEFAULT_LAYERS,
// //     presets = PRESETS,
// //   } = options;

// //   const [A, setAInternal] = useState(initialA);
// //   const [activePreset, setActivePreset] = useState(initialPreset);
// //   const [layers, setLayers] = useState(initialLayers);

// //   const setA = useCallback((next) => {
// //     setAInternal(next);
// //     setActivePreset(null);
// //   }, []);
// //   const selectPreset = useCallback((key) => {
// //     const P = presets[key];
// //     if (!P) return;
// //     setAInternal([P[0].slice(), P[1].slice()]);
// //     setActivePreset(key);
// //   }, [presets]);

// //   return { A, activePreset, layers, setA, selectPreset, setLayers };
// // }

// // const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// // function useAnimationState(options = {}) {
// //   const { stops = DEFAULT_STOPS, duration = 600, initialT = 0 } = options;
// //   const [t, setTState] = useState(initialT);
// //   const [playing, setPlaying] = useState(false);
// //   const animRef = useRef(null);
// //   const tRef = useRef(initialT);
// //   useEffect(() => { tRef.current = t; }, [t]);

// //   const cancel = useCallback(() => {
// //     if (animRef.current !== null) {
// //       cancelAnimationFrame(animRef.current);
// //       animRef.current = null;
// //     }
// //     setPlaying(false);
// //   }, []);

// //   const animateTo = useCallback((target, dur = duration) => {
// //     if (animRef.current !== null) {
// //       cancelAnimationFrame(animRef.current);
// //       animRef.current = null;
// //     }
// //     const tStart = tRef.current;
// //     const startTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
// //     setPlaying(true);
// //     const frame = (now) => {
// //       const elapsed = now - startTime;
// //       const localT = Math.min(1, elapsed / dur);
// //       const eased = easeInOutCubic(localT);
// //       const newT = tStart + (target - tStart) * eased;
// //       tRef.current = newT;
// //       setTState(newT);
// //       if (localT < 1) animRef.current = requestAnimationFrame(frame);
// //       else { animRef.current = null; setPlaying(false); }
// //     };
// //     animRef.current = requestAnimationFrame(frame);
// //   }, [duration]);

// //   const reset = useCallback(() => { cancel(); tRef.current = 0; setTState(0); }, [cancel]);

// //   const stepFwd = useCallback(() => {
// //     cancel();
// //     const current = tRef.current;
// //     let target = stops[stops.length - 1];
// //     for (let i = 0; i < stops.length; i++) if (stops[i] > current + 1e-4) { target = stops[i]; break; }
// //     animateTo(target, duration);
// //   }, [stops, duration, cancel, animateTo]);

// //   const stepBack = useCallback(() => {
// //     cancel();
// //     const current = tRef.current;
// //     let target = stops[0];
// //     for (let i = stops.length - 1; i >= 0; i--) if (stops[i] < current - 1e-4) { target = stops[i]; break; }
// //     animateTo(target, duration);
// //   }, [stops, duration, cancel, animateTo]);

// //   const play = useCallback(() => {
// //     const current = tRef.current;
// //     if (current >= 0.999) {
// //       tRef.current = 0;
// //       setTState(0);
// //       requestAnimationFrame(() => animateTo(1, duration * 2));
// //     } else {
// //       animateTo(1, duration * 2);
// //     }
// //   }, [duration, animateTo]);

// //   const setT = useCallback((newT) => { cancel(); tRef.current = newT; setTState(newT); }, [cancel]);

// //   useEffect(() => () => {
// //     if (animRef.current !== null) cancelAnimationFrame(animRef.current);
// //   }, []);

// //   return { t, playing, stops, animateTo, cancel, reset, stepFwd, stepBack, play, setT };
// // }

// // // =====================================================================
// // //  SECTION 6  ::  Component-wide CSS (single injection)
// // // =====================================================================
// // const COMPONENT_CSS = `
// // ${SVG_STYLE_CSS}

// // .lt-matrix-input::-webkit-outer-spin-button,
// // .lt-matrix-input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
// // .lt-matrix-input:hover { border-color: #64748b; }
// // .lt-matrix-input:focus { border-color: #2563eb !important; background: #eff6ff !important; }

// // .lt-preset-btn:hover { background: #eff6ff; border-color: #2563eb; color: #1d4ed8; }
// // .lt-preset-btn:active { transform: translateY(1px); }
// // .lt-preset-btn.active { background: #dbeafe; border-color: #2563eb; color: #1d4ed8; }
// // .lt-preset-btn.singular { border-left: 2px solid #16a34a; }
// // .lt-preset-btn.singular:hover { border-color: #16a34a; color: #047857; }
// // .lt-preset-btn.singular.active { background: #d1fae5; border-color: #16a34a; color: #047857; }

// // .lt-layer-row:hover { color: #0f172a !important; }

// // .lt-anim-btn:hover { background: #dbeafe; color: #1d4ed8; border-color: #2563eb; }
// // .lt-anim-btn:active { transform: scale(0.96); }
// // .lt-anim-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
// // .lt-anim-btn.primary:hover { background: #1d4ed8 !important; border-color: #1d4ed8 !important; color: #ffffff !important; }
// // .lt-anim-slider::-webkit-slider-thumb {
// //   -webkit-appearance: none; width: 15px; height: 15px; border-radius: 50%;
// //   background: #2563eb; cursor: pointer; border: 2px solid #ffffff;
// //   box-shadow: 0 0 0 1px #2563eb;
// // }
// // .lt-anim-slider::-moz-range-thumb {
// //   width: 13px; height: 13px; border-radius: 50%;
// //   background: #2563eb; cursor: pointer; border: 2px solid #ffffff;
// // }

// // .lt-exp::-webkit-scrollbar { width: 5px; }
// // .lt-exp::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
// // .lt-exp .exp-plain em { color: #1d4ed8; font-style: italic; }
// // .lt-exp .exp-plain b { color: #0f172a; font-weight: 500; }
// // .lt-exp .exp-title em { font-style: italic; }
// // .lt-exp .exp-math .v { color: #1d4ed8; font-weight: 500; }
// // .lt-exp .exp-math .num { color: #0f172a; font-weight: 500; }
// // .lt-exp .exp-math .red { color: #dc2626; font-weight: 500; }
// // .lt-exp .exp-math .green { color: #16a34a; font-weight: 500; }
// // .lt-exp .exp-math .pink { color: #db2777; font-weight: 500; }
// // .lt-exp .exp-insight em { font-style: italic; color: #1d4ed8; }
// // .lt-exp .exp-insight.singular em { color: #047857; }
// // .lt-exp .exp-matrix-display {
// //   display: inline-grid; grid-template-columns: auto auto; gap: 2px 11px;
// //   padding: 4px 12px; position: relative;
// //   font-family: 'JetBrains Mono', Menlo, monospace; font-size: 12.5px;
// //   vertical-align: middle;
// // }
// // .lt-exp .exp-matrix-display::before, .lt-exp .exp-matrix-display::after {
// //   content: ''; position: absolute; top: 0; bottom: 0; width: 5px;
// //   border: 1.2px solid #64748b;
// // }
// // .lt-exp .exp-matrix-display::before { left: 0; border-right: none; }
// // .lt-exp .exp-matrix-display::after { right: 0; border-left: none; }

// // .lt-header-eyebrow .pill {
// //   display: inline-block; background: #dbeafe; color: #1d4ed8;
// //   padding: 2px 9px; border-radius: 10px; margin-left: 8px;
// //   letter-spacing: 0.12em; font-size: 9px;
// // }
// // .lt-header-eyebrow .dot { color: #2563eb; margin: 0 7px; }
// // .lt-header-lede em { color: #1d4ed8; font-weight: 500; font-style: italic; }

// // @media (max-width: 1260px) {
// //   .lt-main { grid-template-columns: 1fr !important; gap: 18px !important; }
// //   .lt-controls-col { min-height: 0 !important; justify-content: flex-start !important; }
// //   .lt-main svg { width: 100% !important; max-width: 600px !important; }
// // }
// // `;

// // // =====================================================================
// // //  SECTION 7  ::  Sub-components
// // // =====================================================================

// // // ----- VisualizerCanvas -----
// // const DEFAULT_GEOM = { size: 600, scale: 42, gridR: 10 };
// // const canvasBaseStyle = {
// //   width: '100%', maxWidth: 600, height: 'auto', aspectRatio: '1 / 1',
// //   background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f1f6fc 100%)',
// //   border: '1px solid #e2e8f0', borderRadius: 6, display: 'block',
// //   boxShadow: '0 10px 28px -12px rgba(15, 23, 42, 0.14)',
// // };

// // function VisualizerCanvas({
// //   A = [[1, 0], [0, 1]],
// //   t = 1,
// //   layers = DEFAULT_LAYERS,
// //   size = DEFAULT_GEOM.size,
// //   scale = DEFAULT_GEOM.scale,
// //   gridR = DEFAULT_GEOM.gridR,
// //   showStatus = true,
// //   style,
// // }) {
// //   const cx = size / 2, cy = size / 2;
// //   const geom = { cx, cy, scale, gridR };
// //   const M = Math2D.interp(t, A);
// //   return (
// //     <svg viewBox={`0 0 ${size} ${size}`} xmlns="http://www.w3.org/2000/svg" style={{ ...canvasBaseStyle, ...style }}>
// //       <defs>
// //         <marker id="arrow-i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#1d4ed8" />
// //         </marker>
// //         <marker id="arrow-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
// //           <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#0891b2" />
// //         </marker>
// //       </defs>
// //       {layers.grid        && <g dangerouslySetInnerHTML={{ __html: SVGRender.grid(M, geom) }} />}
// //       {layers.samples     && <g dangerouslySetInnerHTML={{ __html: SVGRender.samples(M, geom) }} />}
// //       {layers.circle      && <g dangerouslySetInnerHTML={{ __html: SVGRender.circle(M, geom) }} />}
// //       {layers.square      && <g dangerouslySetInnerHTML={{ __html: SVGRender.square(M, geom) }} />}
// //       {layers.kernelImage && <g dangerouslySetInnerHTML={{ __html: SVGRender.kernelImage(M, A, layers.labels, geom) }} />}
// //       {layers.eigen       && <g dangerouslySetInnerHTML={{ __html: SVGRender.eigen(M, A, geom) }} />}
// //       {layers.basis       && <g dangerouslySetInnerHTML={{ __html: SVGRender.basis(M, layers.labels, geom) }} />}
// //       <circle cx={cx} cy={cy} r={2.5} fill="#0f172a" />
// //       <text className="canvas-info" x={14} y={size - 12}>x &middot; y plane</text>
// //       {showStatus && <text className="canvas-info" x={size - 14} y={size - 12} textAnchor="end">{Math2D.classify(A)}</text>}
// //     </svg>
// //   );
// // }

// // // ----- MatrixInput -----
// // const matrixStyles = {
// //   wrap: { display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '4px 0' },
// //   bracket: { display: 'grid', gridTemplateColumns: 'auto auto', gap: 6, padding: '8px 20px', position: 'relative' },
// //   barL: { position: 'absolute', top: 4, bottom: 4, left: 0, width: 9, borderTop: '1.5px solid #64748b', borderBottom: '1.5px solid #64748b', borderLeft: '1.5px solid #64748b', borderTopLeftRadius: 2, borderBottomLeftRadius: 2 },
// //   barR: { position: 'absolute', top: 4, bottom: 4, right: 0, width: 9, borderTop: '1.5px solid #64748b', borderBottom: '1.5px solid #64748b', borderRight: '1.5px solid #64748b', borderTopRightRadius: 2, borderBottomRightRadius: 2 },
// //   input: { width: 66, padding: '8px 8px', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: 3, color: '#0f172a', fontFamily: "'JetBrains Mono', Menlo, monospace", fontSize: 14, textAlign: 'center', outline: 'none', MozAppearance: 'textfield' },
// // };

// // function CellInput({ value, onCommit, step }) {
// //   const [str, setStr] = useState(String(value));
// //   useEffect(() => { setStr(String(value)); }, [value]);
// //   return (
// //     <input
// //       type="number" step={step} value={str}
// //       className="lt-matrix-input" style={matrixStyles.input}
// //       onChange={(e) => {
// //         const next = e.target.value;
// //         setStr(next);
// //         if (next === '' || next === '-' || next === '.') return;
// //         const v = parseFloat(next);
// //         if (!Number.isNaN(v)) onCommit(v);
// //       }}
// //       onBlur={() => {
// //         const v = parseFloat(str);
// //         if (Number.isNaN(v)) setStr(String(value));
// //         else if (v !== value) onCommit(v);
// //       }}
// //     />
// //   );
// // }

// // function MatrixInput({ A = [[1, 0], [0, 1]], onChange = () => {}, step = 0.1 }) {
// //   return (
// //     <div style={matrixStyles.wrap}>
// //       <div style={matrixStyles.bracket}>
// //         <div style={matrixStyles.barL} />
// //         <div style={matrixStyles.barR} />
// //         {[[0,0],[0,1],[1,0],[1,1]].map(([r,c]) => (
// //           <CellInput
// //             key={`${r}-${c}`}
// //             value={A[r][c]}
// //             step={step}
// //             onCommit={(v) => {
// //               const next = A.map((row) => row.slice());
// //               next[r][c] = v;
// //               onChange(next);
// //             }}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // // ----- PresetsGrid -----
// // const presetsStyles = {
// //   grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 },
// //   btn: { background: '#f8fafc', border: '1px solid #cbd5e1', color: '#334155', padding: '8px 11px', fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontSize: 12, fontWeight: 500, cursor: 'pointer', borderRadius: 3, textAlign: 'left', transition: 'all 0.12s' },
// // };

// // function PresetsGrid({ visiblePresets = DEFAULT_PRESET_KEYS, meta = PRESET_META, activePreset = null, onSelect = () => {} }) {
// //   return (
// //     <div style={presetsStyles.grid}>
// //       {visiblePresets.map((key) => {
// //         const m = meta[key];
// //         if (!m) return null;
// //         const cls = 'lt-preset-btn' + (m.singular ? ' singular' : '') + (activePreset === key ? ' active' : '');
// //         return (
// //           <button key={key} className={cls} style={presetsStyles.btn} onClick={() => onSelect(key)}>
// //             {m.label}
// //           </button>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // // ----- LayersPanel -----
// // const ALL_LAYERS = [
// //   { key: 'grid', label: 'grid' },
// //   { key: 'basis', label: '\u00EE,\u0135' },
// //   { key: 'square', label: 'unit sq' },
// //   { key: 'circle', label: 'unit circle' },
// //   { key: 'eigen', label: 'eigen' },
// //   { key: 'kernelImage', label: 'ker, im' },
// //   { key: 'samples', label: 'lattice' },
// //   { key: 'labels', label: 'labels' },
// // ];
// // const layersStyles = {
// //   grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px' },
// //   row: { display: 'flex', alignItems: 'center', gap: 7, cursor: 'pointer', fontSize: 12, color: '#334155', userSelect: 'none', padding: '3px 0', fontFamily: "'IBM Plex Sans', system-ui, sans-serif" },
// //   cb: { margin: 0, width: 13, height: 13, accentColor: '#2563eb', cursor: 'pointer', flexShrink: 0 },
// //   name: { flex: 1, lineHeight: 1.2 },
// // };

// // function LayersPanel({ layers = {}, onChange = () => {}, enabledLayers, layerDefs = ALL_LAYERS }) {
// //   const defs = enabledLayers ? layerDefs.filter((d) => enabledLayers.includes(d.key)) : layerDefs;
// //   return (
// //     <div style={layersStyles.grid}>
// //       {defs.map((d) => (
// //         <label key={d.key} className="lt-layer-row" style={layersStyles.row}>
// //           <input
// //             type="checkbox" style={layersStyles.cb}
// //             checked={!!layers[d.key]}
// //             onChange={(e) => onChange({ ...layers, [d.key]: e.target.checked })}
// //           />
// //           <span style={layersStyles.name}>{d.label}</span>
// //         </label>
// //       ))}
// //     </div>
// //   );
// // }

// // // ----- AnimationControls -----
// // const animStyles = {
// //   strip: { display: 'flex', alignItems: 'center', gap: 10, background: '#ffffff', padding: '12px 16px', border: '1px solid #e2e8f0', borderRadius: 6 },
// //   btn: { background: '#f8fafc', color: '#334155', border: '1px solid #cbd5e1', padding: '9px 11px', fontFamily: "'IBM Plex Sans', system-ui, sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: '0.04em', cursor: 'pointer', borderRadius: 4, transition: 'all 0.15s', display: 'inline-flex', alignItems: 'center', gap: 4, minWidth: 32, justifyContent: 'center' },
// //   btnPrimary: { background: '#2563eb', color: '#ffffff', borderColor: '#2563eb', padding: '9px 18px', minWidth: 72 },
// //   slider: { flex: 1, WebkitAppearance: 'none', appearance: 'none', height: 3, borderRadius: 2, outline: 'none', cursor: 'pointer' },
// //   tLabel: { fontFamily: "'JetBrains Mono', Menlo, monospace", fontSize: 12, color: '#64748b', minWidth: 72, textAlign: 'right', letterSpacing: '0.03em' },
// //   tValue: { color: '#1d4ed8', fontWeight: 500 },
// //   dotRow: { display: 'flex', gap: 5, alignItems: 'center', padding: '0 8px' },
// //   dot: { width: 6, height: 6, borderRadius: '50%', background: '#cbd5e1', transition: 'background 0.15s' },
// //   dotActive: { background: '#2563eb' },
// //   dotPassed: { background: '#1d4ed8' },
// // };

// // function _nearestStopIndex(stops, t) {
// //   let best = 0, bestDist = Infinity;
// //   stops.forEach((s, i) => { const d = Math.abs(s - t); if (d < bestDist) { bestDist = d; best = i; } });
// //   return best;
// // }

// // function AnimationControls({
// //   t = 0, playing = false, stops = DEFAULT_STOPS,
// //   onPlay = () => {}, onPause = () => {},
// //   onStepFwd = () => {}, onStepBack = () => {},
// //   onReset = () => {}, onScrub = () => {},
// // }) {
// //   const nearIdx = _nearestStopIndex(stops, t);
// //   const fill = (t * 100).toFixed(2) + '%';
// //   const sliderBg = `linear-gradient(to right, #2563eb 0%, #2563eb ${fill}, #cbd5e1 ${fill}, #cbd5e1 100%)`;
// //   const backDisabled = t <= stops[0] + 1e-4;
// //   const fwdDisabled = t >= stops[stops.length - 1] - 1e-4;
// //   const playLabel = playing ? 'Pause' : t >= 0.999 ? 'Replay' : 'Play';
// //   return (
// //     <div style={animStyles.strip}>
// //       <button className="lt-anim-btn" style={animStyles.btn} onClick={onReset} aria-label="Reset to t=0">&#x21BA;</button>
// //       <button className="lt-anim-btn" style={animStyles.btn} onClick={onStepBack} disabled={backDisabled} aria-label="Step backward">&#8249;</button>
// //       <button className="lt-anim-btn primary" style={{ ...animStyles.btn, ...animStyles.btnPrimary }} onClick={playing ? onPause : onPlay} aria-label={playing ? 'Pause' : 'Play'}>{playLabel}</button>
// //       <button className="lt-anim-btn" style={animStyles.btn} onClick={onStepFwd} disabled={fwdDisabled} aria-label="Step forward">&#8250;</button>
// //       <div style={animStyles.dotRow}>
// //         {stops.map((stop, i) => {
// //           let s = { ...animStyles.dot };
// //           if (stop < t - 0.001) s = { ...s, ...animStyles.dotPassed };
// //           else if (i === nearIdx && Math.abs(stop - t) < 0.02) s = { ...s, ...animStyles.dotActive };
// //           return <div key={i} style={s} />;
// //         })}
// //       </div>
// //       <input type="range" min={0} max={1} step={0.001} value={t}
// //         className="lt-anim-slider"
// //         style={{ ...animStyles.slider, background: sliderBg }}
// //         onChange={(e) => onScrub(parseFloat(e.target.value))}
// //         aria-label="Animation parameter" />
// //       <span style={animStyles.tLabel}>t&thinsp;=&thinsp;<span style={animStyles.tValue}>{t.toFixed(3)}</span></span>
// //     </div>
// //   );
// // }

// // // ----- ExplanationsPanel -----
// // const expStyles = {
// //   wrap: { background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 6, padding: '20px 22px', overflowY: 'auto', fontFamily: "'IBM Plex Sans', system-ui, sans-serif", color: '#0f172a' },
// //   character: { fontFamily: "'JetBrains Mono', Menlo, monospace", fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#64748b', margin: '0 0 5px' },
// //   title: { fontFamily: 'Fraunces, Georgia, serif', fontSize: 25, fontWeight: 500, fontVariationSettings: "'opsz' 24", color: '#1d4ed8', margin: '0 0 14px', lineHeight: 1.15, letterSpacing: '-0.01em' },
// //   plain: { fontSize: 14, color: '#334155', margin: '0 0 16px', lineHeight: 1.55 },
// //   section: { borderTop: '1px dashed #e2e8f0', paddingTop: 12, marginTop: 12 },
// //   sectionLabel: { fontFamily: "'JetBrains Mono', Menlo, monospace", fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748b', margin: '0 0 7px' },
// //   sectionLabelWarn: { color: '#16a34a' },
// //   math: { fontFamily: "'JetBrains Mono', Menlo, monospace", fontSize: 12.5, color: '#334155', lineHeight: 1.65, margin: 0 },
// //   insight: { background: '#eff6ff', borderLeft: '2px solid #2563eb', padding: '10px 13px', fontSize: 12.5, color: '#334155', lineHeight: 1.55, borderRadius: '0 4px 4px 0', marginTop: 12 },
// //   insightSingular: { background: '#ecfdf5', borderLeftColor: '#16a34a' },
// // };

// // function _pickExplanation(state, explns) {
// //   if (state.activePreset && explns.byPreset[state.activePreset]) return explns.byPreset[state.activePreset];
// //   const ch = Math2D.classify(state.A);
// //   if (explns.byCharacter[ch]) return explns.byCharacter[ch];
// //   return explns.fallback;
// // }

// // function ExplanationsPanel({ A = [[1, 0], [0, 1]], activePreset = null, override, style }) {
// //   const explns = override
// //     ? {
// //         byPreset: { ...defaultExplanations.byPreset, ...(override.byPreset || {}) },
// //         byCharacter: { ...defaultExplanations.byCharacter, ...(override.byCharacter || {}) },
// //         fallback: override.fallback || defaultExplanations.fallback,
// //       }
// //     : defaultExplanations;
// //   const state = { A, activePreset };
// //   const exp = _pickExplanation(state, explns);
// //   const ch = Math2D.classify(A);

// //   return (
// //     <div className="lt-exp" style={{ ...expStyles.wrap, ...style }}>
// //       <p style={expStyles.character}>{ch}</p>
// //       <h3 className="exp-title" style={expStyles.title} dangerouslySetInnerHTML={{ __html: exp.title }} />
// //       <p className="exp-plain" style={expStyles.plain} dangerouslySetInnerHTML={{ __html: exp.plain }} />
// //       {(exp.sections || []).map((sec, idx) => {
// //         const body = typeof sec.body === 'function' ? sec.body(state) : sec.body;
// //         if (sec.type === 'insight') {
// //           return <div key={idx} className="exp-insight" style={expStyles.insight} dangerouslySetInnerHTML={{ __html: body }} />;
// //         }
// //         if (sec.type === 'insight-singular') {
// //           return <div key={idx} className="exp-insight singular" style={{ ...expStyles.insight, ...expStyles.insightSingular }} dangerouslySetInnerHTML={{ __html: body }} />;
// //         }
// //         const labelStyle = sec.type === 'singular-dirs' ? { ...expStyles.sectionLabel, ...expStyles.sectionLabelWarn } : expStyles.sectionLabel;
// //         return (
// //           <div key={idx} style={expStyles.section}>
// //             {sec.label && <p style={labelStyle} dangerouslySetInnerHTML={{ __html: sec.label }} />}
// //             <p className="exp-math" style={expStyles.math} dangerouslySetInnerHTML={{ __html: body }} />
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // }

// // // =====================================================================
// // //  SECTION 8  ::  Core + default Wrapper
// // // =====================================================================

// // // Core: logic only, no UI. Render-prop hands { transform, anim } down.
// // export function LinearTransformCore({
// //   initialA = [[1, 0], [0, 1]],
// //   initialPreset = 'identity',
// //   initialLayers = DEFAULT_LAYERS,
// //   presets = PRESETS,
// //   stops = DEFAULT_STOPS,
// //   duration = 600,
// //   initialT = 0,
// //   children,
// // }) {
// //   const transform = useTransformState({ initialA, initialPreset, initialLayers, presets });
// //   const anim = useAnimationState({ stops, duration, initialT });

// //   // preset selection -> auto-play t: 0 -> 1
// //   useEffect(() => {
// //     if (!transform.activePreset) return;
// //     anim.setT(0);
// //     requestAnimationFrame(() => anim.animateTo(1, duration * 2));
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [transform.activePreset]);

// //   if (typeof children === 'function') return children({ transform, anim });
// //   return null;
// // }

// // // ----- header styles + render -----
// // const headerStyles = {
// //   wrap: {
// //     display: 'flex', alignItems: 'baseline', gap: 22,
// //     margin: '0 0 20px', flexWrap: 'wrap',
// //   },
// //   eyebrow: {
// //     fontFamily: "'JetBrains Mono', Menlo, monospace",
// //     fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
// //     color: '#64748b', margin: 0, fontWeight: 500, whiteSpace: 'nowrap',
// //   },
// //   lede: {
// //     fontFamily: 'Fraunces, Georgia, serif',
// //     fontSize: 17, color: '#334155', margin: 0,
// //     flex: 1, minWidth: 340, fontStyle: 'italic',
// //     fontVariationSettings: "'opsz' 14", lineHeight: 1.4,
// //   },
// // };

// // function renderHeader({ header, eyebrow, subtitle }) {
// //   if (header !== undefined) return header;            // full JSX override
// //   if (!eyebrow && !subtitle) return null;             // nothing passed -> nothing rendered
// //   return (
// //     <header style={headerStyles.wrap}>
// //       {eyebrow && (
// //         <p
// //           className="lt-header-eyebrow"
// //           style={headerStyles.eyebrow}
// //           dangerouslySetInnerHTML={{ __html: eyebrow }}
// //         />
// //       )}
// //       {subtitle && (
// //         <p
// //           className="lt-header-lede"
// //           style={headerStyles.lede}
// //           dangerouslySetInnerHTML={{ __html: subtitle }}
// //         />
// //       )}
// //     </header>
// //   );
// // }

// // // ----- layout styles -----
// // //
// // // controlsCol uses justifyContent: 'space-between' with a minHeight that
// // // matches the canvas column (canvas + anim strip + gap). This spreads the
// // // three controls cards vertically so the column visually balances against
// // // the canvas instead of leaving dead space below.
// // //
// // // Canvas col natural height: 600 (canvas) + 14 (gap) + ~56 (anim strip) = 670
// // // controlsMinHeight prop lets the consumer override if they swap the canvas.
// // const layoutStyles = {
// //   main: {
// //     display: 'grid',
// //     gridTemplateColumns: '600px 272px 1fr',
// //     gap: 22,
// //     alignItems: 'start',
// //   },
// //   canvasCol: { display: 'flex', flexDirection: 'column', gap: 14 },
// //   controlsCol: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: 14,
// //     justifyContent: 'space-between',
// //   },
// //   card: {
// //     background: '#ffffff',
// //     border: '1px solid #e2e8f0',
// //     borderRadius: 6,
// //     padding: '16px 18px',
// //   },
// //   cardTitle: {
// //     fontFamily: "'JetBrains Mono', Menlo, monospace",
// //     fontSize: 10, fontWeight: 600, letterSpacing: '0.22em',
// //     textTransform: 'uppercase', color: '#64748b', margin: '0 0 13px',
// //   },
// //   cardBadge: { color: '#2563eb', marginRight: 7, fontWeight: 500 },
// // };

// // /**
// //  * Default UI wrapper.
// //  *
// //  * Header props (all optional; if none passed, no header is rendered):
// //  *   eyebrow    HTML string for the small uppercase eyebrow line
// //  *   subtitle   HTML string for the Fraunces-italic lede paragraph
// //  *   header     full JSX override (replaces eyebrow+subtitle entirely)
// //  *
// //  * Slot overrides (undefined = default, null = hidden, JSX = replace):
// //  *   canvas, matrixInput, presetsGrid, layersPanel, animationCtrl, explanation
// //  *
// //  * Atomization helpers:
// //  *   visiblePresets, enabledLayers, explanationOverride
// //  *
// //  * Layout escape hatch:
// //  *   layout({transform, anim})   render-prop for completely custom layouts
// //  *
// //  * Sizing:
// //  *   controlsMinHeight   forces the controls column to at least this height
// //  *                       so it visually balances the canvas column. Default 670.
// //  *
// //  * Plus all Core options (initialA, initialPreset, ... stops, duration).
// //  */
// // export default function LinearTransform({
// //   // header (defaults to the v3.1 copy; pass null on any prop to hide it)
// //   header,
// //   eyebrow = 'Linear algebra<span class="dot">&middot;</span>Interactive<span class="pill">2D</span>',
// //   subtitle = 'Pick a preset or edit the matrix directly &mdash; the panel on the right explains what this <em>transformation</em> does, with the math worked out on your current values.',
// //   // core options
// //   initialA, initialPreset, initialLayers, presets,
// //   stops, duration, initialT,
// //   // slot overrides
// //   canvas, matrixInput, presetsGrid, layersPanel, animationCtrl, explanation,
// //   // atomization helpers
// //   visiblePresets, enabledLayers, explanationOverride,
// //   // sizing
// //   controlsMinHeight = 670,
// //   // full-custom layout
// //   layout,
// //   // outer
// //   className, style,
// // }) {
// //   const outerStyle = {
// //     maxWidth: 1400,
// //     margin: '24px auto',
// //     padding: '24px 32px 28px',
// //     background: '#eef3fa',
// //     border: '1px solid #d8e2ef',
// //     borderRadius: 10,
// //     ...style,
// //   };
// //   return (
// //     <LinearTransformCore
// //       initialA={initialA} initialPreset={initialPreset} initialLayers={initialLayers}
// //       presets={presets} stops={stops} duration={duration} initialT={initialT}
// //     >
// //       {({ transform, anim }) => {
// //         const headerNode = renderHeader({ header, eyebrow, subtitle });

// //         if (typeof layout === 'function') {
// //           return (
// //             <div className={className} style={outerStyle}>
// //               <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
// //               {headerNode}
// //               {layout({ transform, anim })}
// //             </div>
// //           );
// //         }

// //         const slotCanvas = canvas !== undefined ? canvas : (
// //           <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
// //         );
// //         const slotMatrix = matrixInput !== undefined ? matrixInput : (
// //           <MatrixInput A={transform.A} onChange={transform.setA} />
// //         );
// //         const slotPresets = presetsGrid !== undefined ? presetsGrid : (
// //           <PresetsGrid visiblePresets={visiblePresets} activePreset={transform.activePreset} onSelect={transform.selectPreset} />
// //         );
// //         const slotLayers = layersPanel !== undefined ? layersPanel : (
// //           <LayersPanel layers={transform.layers} onChange={transform.setLayers} enabledLayers={enabledLayers} />
// //         );
// //         const slotAnim = animationCtrl !== undefined ? animationCtrl : (
// //           <AnimationControls
// //             t={anim.t} playing={anim.playing} stops={anim.stops}
// //             onPlay={anim.play} onPause={anim.cancel}
// //             onStepFwd={anim.stepFwd} onStepBack={anim.stepBack}
// //             onReset={anim.reset} onScrub={anim.setT}
// //           />
// //         );
// //         const slotExp = explanation !== undefined ? explanation : (
// //           <ExplanationsPanel
// //             A={transform.A}
// //             activePreset={transform.activePreset}
// //             override={explanationOverride}
// //             style={{ maxHeight: controlsMinHeight }}
// //           />
// //         );

// //         return (
// //           <div className={className} style={outerStyle}>
// //             <style dangerouslySetInnerHTML={{ __html: COMPONENT_CSS }} />
// //             {headerNode}
// //             <div className="lt-main" style={layoutStyles.main}>
// //               <section style={layoutStyles.canvasCol}>
// //                 {slotCanvas}
// //                 {slotAnim}
// //               </section>
// //               <aside
// //                 className="lt-controls-col"
// //                 style={{ ...layoutStyles.controlsCol, minHeight: controlsMinHeight }}
// //               >
// //                 {slotMatrix !== null && (
// //                   <div style={layoutStyles.card}>
// //                     <h2 style={layoutStyles.cardTitle}><span style={layoutStyles.cardBadge}>01</span>The matrix A</h2>
// //                     {slotMatrix}
// //                   </div>
// //                 )}
// //                 {slotPresets !== null && (
// //                   <div style={layoutStyles.card}>
// //                     <h2 style={layoutStyles.cardTitle}><span style={layoutStyles.cardBadge}>02</span>Presets</h2>
// //                     {slotPresets}
// //                   </div>
// //                 )}
// //                 {slotLayers !== null && (
// //                   <div style={layoutStyles.card}>
// //                     <h2 style={layoutStyles.cardTitle}><span style={layoutStyles.cardBadge}>03</span>Layers</h2>
// //                     {slotLayers}
// //                   </div>
// //                 )}
// //               </aside>
// //               {slotExp}
// //             </div>
// //           </div>
// //         );
// //       }}
// //     </LinearTransformCore>
// //   );
// // }

// // // Named exports for atomic use
// // export {
// //   VisualizerCanvas, MatrixInput, PresetsGrid, LayersPanel,
// //   AnimationControls, ExplanationsPanel,
// //   useTransformState, useAnimationState,
// //   Math2D, SVGRender, PRESETS, PRESET_META, defaultExplanations,
// // };



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
.grid-line { stroke: #e2e8f0; stroke-width: 1; fill: none; vector-effect: non-scaling-stroke; }
.grid-axis { stroke: #94a3b8; stroke-width: 1.4; fill: none; }
.sample-dot { fill: rgba(99,102,241,0.5); }
.unit-circle { fill: rgba(99,102,241,0.06); stroke: #6366f1; stroke-width: 1.5; stroke-dasharray: 4 3; }
.unit-square { stroke-width: 1.5; }
.eigen-line { stroke: #c026d3; stroke-width: 1.4; stroke-dasharray: 6 4; opacity: 0.7; }
.eigen-tip { fill: #c026d3; }
.eigen-tip-orig { fill: none; stroke: #c026d3; stroke-width: 1.4; opacity: 0.5; }
.kernel-line { stroke: #dc2626; stroke-width: 2; stroke-dasharray: 8 5; fill: none; opacity: 0.9; }
.kernel-halo { stroke: #dc2626; stroke-width: 10; fill: none; opacity: 0.10; }
.image-line { stroke: #059669; stroke-width: 2.2; fill: none; opacity: 0.95; }
.image-halo { stroke: #059669; stroke-width: 12; fill: none; opacity: 0.13; }
.ker-label { fill: #dc2626; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 14px; font-weight: 500; }
.img-label { fill: #059669; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 14px; font-weight: 500; }
.kernel-dot { fill: #dc2626; stroke: #fff; stroke-width: 1.2; }
.kernel-ghost { fill: none; stroke: #dc2626; stroke-width: 1.2; opacity: 0.5; }
.image-dot { fill: #059669; stroke: #fff; stroke-width: 1.2; }
.image-ghost { fill: none; stroke: #059669; stroke-width: 1.2; opacity: 0.5; }
.zero-ring { fill: none; stroke: #64748b; stroke-width: 1; stroke-dasharray: 3 4; opacity: 0.6; }
.basis-i { stroke: #ea580c; stroke-width: 2.6; fill: none; stroke-linecap: round; }
.basis-j { stroke: #0891b2; stroke-width: 2.6; fill: none; stroke-linecap: round; }
.label-i { fill: #ea580c; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 17px; font-weight: 600; }
.label-j { fill: #0891b2; font-family: Fraunces, Georgia, serif; font-style: italic; font-size: 17px; font-weight: 600; }
.origin-dot { fill: #1e293b; }
.canvas-corner { font-family: 'JetBrains Mono', monospace; font-size: 9px; fill: #64748b; letter-spacing: 0.1em; text-transform: uppercase; }
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
    s += `<line class="basis-i" x1="${O[0]}" y1="${O[1]}" x2="${Itip[0].toFixed(2)}" y2="${Itip[1].toFixed(2)}" marker-end="url(#arr-i)"/>`;
    s += `<line class="basis-j" x1="${O[0]}" y1="${O[1]}" x2="${Jtip[0].toFixed(2)}" y2="${Jtip[1].toFixed(2)}" marker-end="url(#arr-j)"/>`;
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
//  SECTION 3  ::  Scenarios (preset matrix + grouping + explanation copy)
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
  insight: 'The Live panel below tracks det M(t) as you scrub. det M(t) = 0 marks the moments when M(t) is singular.',
  watch: 'Try setting all entries to make det A = 0 \u2014 the unit square will collapse to a line.',
};

const SCENARIO_GROUPS = [
  { key: 'full',  label: 'Full rank',  tag: 'rank 2', tagClass: 'full' },
  { key: 'rank1', label: 'Singular',   tag: 'rank 1', tagClass: 'rank1' },
  { key: 'zero',  label: 'Degenerate', tag: 'rank 0', tagClass: 'zero' },
];

// Back-compat for atomic consumers
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
//  SECTION 5  ::  Component CSS
// =====================================================================
const COMPONENT_CSS = `
${SVG_STYLE_CSS}

.lt5-root { font-family: 'IBM Plex Sans', system-ui, sans-serif; color: #0f172a; }

.lt5-app {
  height: 100vh; display: grid; grid-template-rows: auto 1fr auto;
  gap: 14px; padding: 18px 26px 16px; max-width: 1500px; margin: 0 auto;
  background: #f0f6fc;
  background-image:
    radial-gradient(circle at 12% 8%, rgba(147,197,253,.25) 0%, transparent 35%),
    radial-gradient(circle at 88% 92%, rgba(191,219,254,.22) 0%, transparent 40%);
  box-sizing: border-box;
}

.lt5-lede { display: flex; align-items: baseline; gap: 12px; font-size: 13px; color: #475569; }
.lt5-lede .lt5-crumb {
  font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.18em;
  text-transform: uppercase; color: #64748b;
}
.lt5-lede .lt5-crumb .lt5-dot { color: #2563eb; margin: 0 6px; }
.lt5-lede .lt5-body { flex: 1; }
.lt5-lede strong { color: #0f172a; font-weight: 500; }
.lt5-lede code {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: #2563eb; padding: 1px 4px; background: #eff6ff; border-radius: 3px;
}

.lt5-main { display: grid; grid-template-columns: auto 250px 1fr; gap: 16px; min-height: 0; }

.lt5-canvas-col { display: flex; flex-direction: column; gap: 8px; min-width: 0; min-height: 0; }
.lt5-layer-chips {
  display: flex; flex-wrap: wrap; gap: 4px; padding: 6px 8px;
  background: #fff; border: 1px solid #e2e8f0; border-radius: 6px;
  box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06);
}
.lt5-chip {
  display: inline-flex; align-items: center; gap: 5px; padding: 4px 9px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px; letter-spacing: 0.04em;
  color: #64748b; background: transparent; border: 1px solid transparent;
  border-radius: 4px; cursor: pointer; user-select: none; transition: all .12s;
}
.lt5-chip input { width: 11px; height: 11px; margin: 0; accent-color: #2563eb; cursor: pointer; }
.lt5-chip:hover, .lt5-chip:has(input:checked) { color: #0f172a; background: #eff6ff; }

.lt5-canvas-wrap { flex: 1; display: flex; align-items: center; justify-content: center; min-height: 0; }
.lt5-canvas-svg {
  height: 100%; aspect-ratio: 1/1; max-height: 100%; max-width: 100%;
  background: linear-gradient(135deg, #fff 0%, #f0f7fc 100%);
  border: 1px solid #e2e8f0; border-radius: 8px;
  box-shadow: 0 1px 3px rgba(15,23,42,.05), 0 4px 12px rgba(37,99,235,.06);
  display: block;
}

.lt5-controls-col { display: flex; flex-direction: column; gap: 10px; min-height: 0; }
.lt5-card {
  background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
  box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06);
  padding: 12px 14px;
}
.lt5-card h2 {
  font-family: 'JetBrains Mono', monospace; font-size: 9px; font-weight: 600;
  letter-spacing: 0.2em; text-transform: uppercase; color: #64748b;
  margin: 0 0 10px;
}
.lt5-card h2 .lt5-badge { color: #2563eb; margin-right: 6px; }

.lt5-matrix-wrap { display: flex; justify-content: center; padding: 4px 0 2px; }
.lt5-matrix-bracket {
  display: grid; grid-template-columns: auto auto; gap: 5px;
  padding: 8px 18px; position: relative;
}
.lt5-matrix-bracket::before, .lt5-matrix-bracket::after {
  content: ''; position: absolute; top: 4px; bottom: 4px; width: 7px;
  border: 1.5px solid #475569;
}
.lt5-matrix-bracket::before { left: 0; border-right: none; border-radius: 2px 0 0 2px; }
.lt5-matrix-bracket::after { right: 0; border-left: none; border-radius: 0 2px 2px 0; }
.lt5-matrix-bracket input {
  width: 52px; padding: 5px 6px; background: #f8fafc;
  border: 1px solid #cbd5e1; border-radius: 3px; color: #0f172a;
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  text-align: center; outline: none;
  transition: border-color .15s, background .15s;
  -moz-appearance: textfield;
}
.lt5-matrix-bracket input::-webkit-outer-spin-button,
.lt5-matrix-bracket input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
.lt5-matrix-bracket input:focus { border-color: #2563eb; background: #eff6ff; }

.lt5-scenarios-card { flex: 1; overflow-y: auto; min-height: 0; }
.lt5-scen-group + .lt5-scen-group { margin-top: 10px; }
.lt5-scen-label {
  display: flex; align-items: center; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.12em;
  text-transform: uppercase; color: #64748b; margin-bottom: 5px;
}
.lt5-scen-label .lt5-tag {
  padding: 1px 5px; border-radius: 3px; font-size: 8px; font-weight: 500;
}
.lt5-scen-label .lt5-tag.full { background: rgba(99,102,241,.12); color: #6366f1; }
.lt5-scen-label .lt5-tag.rank1 { background: rgba(5,150,105,.12); color: #059669; }
.lt5-scen-label .lt5-tag.zero { background: rgba(220,38,38,.10); color: #dc2626; }

.lt5-scen-btn {
  display: block; width: 100%; background: #f8fafc;
  border: 1px solid #e2e8f0; color: #1e293b;
  padding: 6px 10px; font-family: 'IBM Plex Sans', system-ui, sans-serif;
  font-size: 11.5px; font-weight: 500;
  cursor: pointer; border-radius: 4px; text-align: left;
  transition: all .12s; margin-bottom: 4px;
}
.lt5-scen-btn:hover { background: #eff6ff; border-color: #2563eb; color: #2563eb; }
.lt5-scen-btn.active { background: #dbeafe; border-color: #2563eb; color: #1d4ed8; font-weight: 600; }
.lt5-scen-btn.rank1 { border-left: 2px solid #059669; }
.lt5-scen-btn.rank1:hover { border-color: #059669; color: #059669; background: rgba(5,150,105,.06); }
.lt5-scen-btn.rank1.active { background: rgba(5,150,105,.12); border-color: #059669; color: #059669; }
.lt5-scen-btn.zero { border-left: 2px solid #dc2626; }
.lt5-scen-btn.zero:hover { border-color: #dc2626; color: #dc2626; background: rgba(220,38,38,.06); }
.lt5-scen-btn.zero.active { background: rgba(220,38,38,.10); border-color: #dc2626; color: #dc2626; }

.lt5-explain-col { display: flex; flex-direction: column; gap: 10px; min-height: 0; max-width: 420px; }
.lt5-ex-card { flex: 1 1 auto; overflow-y: auto; min-height: 0; }
.lt5-ex-header {
  display: flex; align-items: baseline; justify-content: space-between; gap: 12px;
  margin-bottom: 10px; padding-bottom: 10px; border-bottom: 1px solid #e2e8f0;
}
.lt5-ex-header h3 {
  font-family: Fraunces, Georgia, serif; font-weight: 500; font-size: 20px;
  color: #0f172a; margin: 0; letter-spacing: -0.01em; line-height: 1.15;
}
.lt5-ex-tag {
  font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.1em;
  text-transform: uppercase; color: #64748b; white-space: nowrap; padding-top: 2px;
}
.lt5-ex-body { color: #1e293b; font-size: 13px; line-height: 1.55; margin: 0 0 10px; }
.lt5-ex-block { margin-top: 10px; padding-top: 10px; border-top: 1px dashed #e2e8f0; }
.lt5-ex-block-label {
  font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.15em;
  text-transform: uppercase; color: #64748b; margin-bottom: 4px;
}
.lt5-ex-block-label.insight { color: #2563eb; }
.lt5-ex-block-label.watch { color: #059669; }
.lt5-ex-block p { margin: 0; font-size: 12.5px; color: #1e293b; line-height: 1.55; }
.lt5-ex-body code, .lt5-ex-block code {
  font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
  background: #eff6ff; color: #1d4ed8; padding: 1px 4px; border-radius: 3px;
}

.lt5-live-card { flex-shrink: 0; }
.lt5-live-card h2 { display: flex; align-items: center; justify-content: space-between; }
.lt5-live-card h2 .lt5-t-readout {
  color: #2563eb; font-family: 'JetBrains Mono', monospace;
  letter-spacing: 0.05em; text-transform: none; font-weight: 500;
}
.lt5-live-grid { display: grid; grid-template-columns: auto 1fr; gap: 6px 14px; align-items: center; }
.lt5-live-label {
  font-family: 'JetBrains Mono', monospace; font-size: 9px;
  letter-spacing: 0.12em; text-transform: uppercase; color: #64748b;
}
.lt5-live-val {
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  color: #0f172a; font-weight: 500;
}
.lt5-live-val.live { color: #2563eb; }

.lt5-math-matrix {
  display: grid; grid-template-columns: auto auto; gap: 2px 12px;
  padding: 3px 11px; position: relative;
  font-family: 'JetBrains Mono', monospace; font-size: 11.5px;
  color: #0f172a; width: fit-content;
}
.lt5-math-matrix::before, .lt5-math-matrix::after {
  content: ''; position: absolute; top: 1px; bottom: 1px; width: 5px;
  border: 1.2px solid #475569;
}
.lt5-math-matrix::before { left: 0; border-right: none; border-radius: 2px 0 0 2px; }
.lt5-math-matrix::after { right: 0; border-left: none; border-radius: 0 2px 2px 0; }
.lt5-math-matrix span { text-align: right; min-width: 46px; color: #2563eb; }

.lt5-playback {
  display: flex; align-items: center; gap: 14px; padding: 8px 14px;
  background: #fff; border: 1px solid #e2e8f0; border-radius: 8px;
  box-shadow: 0 1px 2px rgba(15,23,42,.04), 0 1px 3px rgba(15,23,42,.06);
}
.lt5-play-group { display: flex; gap: 4px; }
.lt5-ctrl-btn {
  display: inline-flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; border: 1px solid #e2e8f0;
  background: #fff; border-radius: 5px; cursor: pointer;
  color: #475569; transition: all .12s; padding: 0;
}
.lt5-ctrl-btn:hover { border-color: #2563eb; color: #2563eb; background: #eff6ff; }
.lt5-ctrl-btn:active { transform: scale(.94); }
.lt5-ctrl-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
.lt5-ctrl-btn svg { width: 16px; height: 16px; fill: currentColor; }
.lt5-ctrl-btn.primary { background: #2563eb; border-color: #2563eb; color: #fff; }
.lt5-ctrl-btn.primary:hover { background: #1d4ed8; border-color: #1d4ed8; color: #fff; }
.lt5-ctrl-divider { width: 1px; align-self: stretch; background: #e2e8f0; margin: 0 4px; }

.lt5-slider-wrap { flex: 1; display: flex; align-items: center; gap: 10px; }
.lt5-slider {
  flex: 1; -webkit-appearance: none; appearance: none; height: 4px;
  border-radius: 2px; outline: none; cursor: pointer;
}
.lt5-slider::-webkit-slider-thumb {
  -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%;
  background: #2563eb; cursor: pointer; border: 2px solid #fff;
  box-shadow: 0 0 0 1px #2563eb, 0 1px 2px rgba(15,23,42,.15);
}
.lt5-slider::-moz-range-thumb {
  width: 14px; height: 14px; border-radius: 50%;
  background: #2563eb; cursor: pointer; border: 2px solid #fff;
}
.lt5-t-label {
  font-family: 'JetBrains Mono', monospace; font-size: 12px;
  color: #64748b; min-width: 88px; text-align: right; letter-spacing: 0.04em;
}
.lt5-t-label .val { color: #0f172a; font-weight: 500; }

.lt5-ex-card::-webkit-scrollbar, .lt5-scenarios-card::-webkit-scrollbar { width: 6px; }
.lt5-ex-card::-webkit-scrollbar-thumb, .lt5-scenarios-card::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }

@media (max-height: 800px) {
  .lt5-app { padding: 12px 20px; gap: 10px; }
  .lt5-matrix-bracket input { width: 46px; font-size: 11px; padding: 4px; }
  .lt5-card { padding: 10px 12px; }
  .lt5-ex-header h3 { font-size: 17px; }
  .lt5-ex-body, .lt5-ex-block p { font-size: 12px; }
}
@media (max-height: 720px) {
  .lt5-layer-chips { padding: 4px 6px; }
  .lt5-chip { padding: 3px 7px; font-size: 9.5px; }
  .lt5-scen-btn { padding: 5px 9px; font-size: 11px; }
}
`;

// =====================================================================
//  SECTION 6  ::  Sub-components
// =====================================================================

// ----- VisualizerCanvas -----
const DEFAULT_GEOM = { size: 600, scale: 42, gridR: 10 };

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
        <marker id="arr-i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M 0 0 L 10 5 L 0 10 L 2.5 5 z" fill="#ea580c" />
        </marker>
        <marker id="arr-j" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.5" markerHeight="4.5" orient="auto" markerUnits="strokeWidth">
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

// ----- LayerChips -----
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
    <div className="lt5-layer-chips">
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

// ----- MatrixInput (with safe mid-edit string state) -----
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

// ----- ScenariosPanel -----
function ScenariosPanel({
  scenarios = SCENARIOS,
  groups = SCENARIO_GROUPS,
  visibleScenarios,
  activeScenario = null,
  onSelect = () => {},
}) {
  const visible = visibleScenarios
    ? Object.fromEntries(visibleScenarios.map((k) => [k, scenarios[k]]).filter(([, v]) => v))
    : scenarios;

  return (
    <>
      {groups.map((g) => {
        const inGroup = Object.entries(visible).filter(([, sc]) => sc.group === g.key);
        if (!inGroup.length) return null;
        return (
          <div key={g.key} className="lt5-scen-group">
            <div className="lt5-scen-label">
              <span>{g.label}</span>
              <span className={`lt5-tag ${g.tagClass}`}>{g.tag}</span>
            </div>
            {inGroup.map(([key, sc]) => (
              <button
                key={key}
                className={`lt5-scen-btn ${g.tagClass}${activeScenario === key ? ' active' : ''}`}
                onClick={() => onSelect(key)}
              >
                {sc.label}
              </button>
            ))}
          </div>
        );
      })}
    </>
  );
}

// ----- ExplanationCard -----
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
        <div className="lt5-ex-block-label insight">Insight</div>
        <p dangerouslySetInnerHTML={{ __html: sc.insight }} />
      </div>
      <div className="lt5-ex-block">
        <div className="lt5-ex-block-label watch">What to watch</div>
        <p dangerouslySetInnerHTML={{ __html: sc.watch }} />
      </div>
    </div>
  );
}

// ----- LiveDataCard -----
function LiveDataCard({ A, t, className, style }) {
  const M = Math2D.interp(t, A);
  const ev = Math2D.eigenvalues(A);
  const eigStr = ev.type === 'real'
    ? ev.vals.map((v) => Math2D.fmt(v)).join(', ')
    : `${Math2D.fmt(ev.vals[0].re)} \u00B1 ${Math2D.fmt(ev.vals[0].im)}i`;

  return (
    <div className={'lt5-card lt5-live-card' + (className ? ' ' + className : '')} style={style}>
      <h2>
        <span><span className="lt5-badge">04</span>Live</span>
        <span className="lt5-t-readout">t = {t.toFixed(3)}</span>
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
        <span className="lt5-live-val live">{Math2D.fmt(Math2D.det(M))}</span>
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

// ----- PlaybackBar (icon buttons + slider) -----
const ICON_RESET   = <svg viewBox="0 0 24 24"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>;
const ICON_STEP_BACK = <svg viewBox="0 0 24 24"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>;
const ICON_STEP_FWD  = <svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z"/></svg>;
const ICON_PLAY  = <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>;
const ICON_PAUSE = <svg viewBox="0 0 24 24"><path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z"/></svg>;

function PlaybackBar({
  t = 0, playing = false,
  onPlay = () => {}, onPause = () => {},
  onStepFwd = () => {}, onStepBack = () => {},
  onReset = () => {}, onScrub = () => {},
}) {
  const fill = (t * 100).toFixed(2) + '%';
  const sliderBg = `linear-gradient(to right, #2563eb 0%, #2563eb ${fill}, #cbd5e1 ${fill}, #cbd5e1 100%)`;
  const backDisabled = t <= 1e-4;
  const fwdDisabled = t >= 1 - 1e-4;

  return (
    <div className="lt5-playback">
      <div className="lt5-play-group">
        <button className="lt5-ctrl-btn" onClick={onReset} aria-label="Reset" title="Reset to t = 0">
          {ICON_RESET}
        </button>
        <button className="lt5-ctrl-btn" onClick={onStepBack} disabled={backDisabled} aria-label="Step back" title="Step -0.1">
          {ICON_STEP_BACK}
        </button>
        <button
          className="lt5-ctrl-btn primary"
          onClick={playing ? onPause : onPlay}
          aria-label={playing ? 'Pause' : 'Play'}
          title="Play / Pause"
        >
          {playing ? ICON_PAUSE : ICON_PLAY}
        </button>
        <button className="lt5-ctrl-btn" onClick={onStepFwd} disabled={fwdDisabled} aria-label="Step forward" title="Step +0.1">
          {ICON_STEP_FWD}
        </button>
      </div>
      <div className="lt5-ctrl-divider" />
      <div className="lt5-slider-wrap">
        <input
          type="range"
          min={0} max={1} step={0.001} value={t}
          className="lt5-slider"
          style={{ background: sliderBg }}
          onChange={(e) => onScrub(parseFloat(e.target.value))}
          aria-label="Animation parameter"
        />
        <span className="lt5-t-label">
          t = <span className="val">{t.toFixed(3)}</span>
        </span>
      </div>
    </div>
  );
}

// =====================================================================
//  SECTION 7  ::  Core + default Wrapper
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

  // Scenario click auto-plays from t=0 -> 1
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
  crumb: 'Linear Algebra<span class="lt5-dot">&middot;</span>Demo',
  body: 'A 2&times;2 matrix reshapes the plane &mdash; <strong>pick a scenario</strong>, scrub <code>t</code> from 0 to 1, and read what&apos;s happening on the right.',
};

export default function LinearTransform({
  // Header / lede
  lede,           // full JSX override
  ledeCrumb = DEFAULT_LEDE.crumb,
  ledeBody  = DEFAULT_LEDE.body,
  // Core options
  initialA, initialScenario, initialLayers, scenarios,
  step, duration, initialT,
  // Slot overrides (undefined = default, null = hidden, JSX = replace)
  canvas, layerChips, matrixInput, scenariosPanel, explanation, liveData, playback,
  // Atomization helpers
  visibleScenarios, enabledLayers, explanationOverride,
  // Layout escape hatch
  layout,
  // Outer
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
              {ledeCrumb && (
                <span className="lt5-crumb" dangerouslySetInnerHTML={{ __html: ledeCrumb }} />
              )}
              {ledeBody && (
                <span className="lt5-body" dangerouslySetInnerHTML={{ __html: ledeBody }} />
              )}
            </div>
          );
        };

        const slotCanvas = canvas !== undefined ? canvas : (
          <VisualizerCanvas A={transform.A} t={anim.t} layers={transform.layers} />
        );
        const slotChips = layerChips !== undefined ? layerChips : (
          <LayerChips
            layers={transform.layers}
            onChange={transform.setLayers}
            enabledLayers={enabledLayers}
          />
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
        const slotPlayback = playback !== undefined ? playback : (
          <PlaybackBar
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
                <section className="lt5-canvas-col">
                  {slotChips}
                  <div className="lt5-canvas-wrap">{slotCanvas}</div>
                </section>
                <section className="lt5-controls-col">
                  {slotMatrix !== null && (
                    <div className="lt5-card">
                      <h2><span className="lt5-badge">A</span>Matrix</h2>
                      {slotMatrix}
                    </div>
                  )}
                  {slotScenarios !== null && (
                    <div className="lt5-card lt5-scenarios-card">
                      <h2><span className="lt5-badge">02</span>Scenarios</h2>
                      {slotScenarios}
                    </div>
                  )}
                </section>
                <section className="lt5-explain-col">
                  {slotExplanation}
                  {slotLive}
                </section>
              </main>
              {slotPlayback !== null && (
                <footer>{slotPlayback}</footer>
              )}
            </div>
          </div>
        );
      }}
    </LinearTransformCore>
  );
}

export {
  VisualizerCanvas, LayerChips, MatrixInput, ScenariosPanel,
  ExplanationCard, LiveDataCard, PlaybackBar,
  useTransformState, useAnimationState,
  Math2D, SVGRender,
  SCENARIOS, SCENARIO_GROUPS, SCENARIO_CUSTOM, PRESETS, DEFAULT_LAYERS,
};