// // // inequality-types.js
// // // Registry of inequality types. Add a new type here = add one entry below.
// // // Each type exports:
// // //   id, label                  — identity
// // //   genericForm                — display string f(x) = ... showing what each param means
// // //   description                — tooltip for the type tab
// // //   params: [{key,label,min,max,step,tooltip}]
// // //   templates: [{name,vals}]
// // //   f(p)                       — returns x => number
// // //   domain(p)                  — { excluded?: number[], lo?: number, note?: string }
// // //   factors(p)                 — array of { id, display, label, criticalXs, kind, mult, eval, sign }
// // //                                where kind is 'zero' | 'pole' | 'domain' | 'expr' | 'irreducible'
// // //   composeIneq(spans)         — how to join factor spans into the full HTML expression
// // //   invert?(oldX, newX, p)     — optional: for dragging a critical point on the number line

// // import { sup, facStr, quadRoots, quadExprStr, round2 } from './logic.js';

// // export const TYPES = {
// //   poly: {
// //     id: 'poly',
// //     label: 'Polynomial',
// //     genericForm: 'f(x) = (x \u2212 r\u2081)(x \u2212 r\u2082)(x \u2212 r\u2083)',
// //     description: 'Cubic polynomial in factored form. Each root r is where the curve crosses (or touches) zero.',
// //     params: [
// //       { key: 'r1', label: 'root r\u2081', min: -8, max: 8, step: 1,
// //         tooltip: 'First root \u2014 where (x \u2212 r\u2081) = 0.' },
// //       { key: 'r2', label: 'root r\u2082', min: -8, max: 8, step: 1,
// //         tooltip: 'Second root.' },
// //       { key: 'r3', label: 'root r\u2083', min: -8, max: 8, step: 1,
// //         tooltip: 'Third root. Equal roots create a higher multiplicity (curve touches instead of crossing).' },
// //     ],
// //     templates: [
// //       { name: 'Three roots', vals: { r1: -2, r2: 1, r3: 5 } },
// //       { name: 'Double root', vals: { r1: -3, r2: 2, r3: 2 } },
// //       { name: 'Tight cluster', vals: { r1: -1, r2: 0, r3: 1 } },
// //     ],
// //     f: p => x => (x - p.r1) * (x - p.r2) * (x - p.r3),
// //     domain: () => ({ excluded: [] }),
// //     factors: p => {
// //       const counts = {};
// //       [p.r1, p.r2, p.r3].forEach(r => { counts[r] = (counts[r] || 0) + 1; });
// //       const seen = {};
// //       const facs = [];
// //       [p.r1, p.r2, p.r3].forEach(r => {
// //         if (seen[r]) return;
// //         seen[r] = 1;
// //         const m = counts[r];
// //         const base = facStr(r);
// //         const display = m > 1 ? `${base}${sup(m)}` : base;
// //         facs.push({
// //           id: `r${r}`,
// //           display,
// //           label: display,
// //           criticalXs: [r],
// //           kind: 'zero',
// //           mult: m,
// //           eval: x => Math.pow(x - r, m),
// //           sign: x => Math.sign(Math.pow(x - r, m)) || 0,
// //         });
// //       });
// //       return facs;
// //     },
// //     composeIneq: spans => spans.join(''),
// //     invert: (oldX, newX, p) => {
// //       const key = ['r1', 'r2', 'r3'].find(k => p[k] === oldX);
// //       return key ? { [key]: newX } : {};
// //     },
// //   },

// //   quad: {
// //     id: 'quad',
// //     label: 'Quadratic',
// //     genericForm: 'f(x) = ax\u00B2 + bx + c',
// //     description: 'Standard quadratic. The discriminant b\u00B2 \u2212 4ac determines how many real roots exist.',
// //     params: [
// //       { key: 'a', label: 'a', min: -4, max: 4, step: 1,
// //         tooltip: 'Leading coefficient. Sign determines opening direction; magnitude, the steepness. a = 0 degenerates to a line.' },
// //       { key: 'b', label: 'b', min: -8, max: 8, step: 1,
// //         tooltip: 'Linear coefficient. Together with a, controls the horizontal position of the vertex.' },
// //       { key: 'c', label: 'c', min: -9, max: 9, step: 1,
// //         tooltip: 'Constant term. Equals f(0); a vertical shift of the parabola.' },
// //     ],
// //     templates: [
// //       { name: 'Two roots', vals: { a: 1, b: -1, c: -6 } },
// //       { name: 'No real roots', vals: { a: 1, b: 0, c: 4 } },
// //       { name: 'Opens down', vals: { a: -1, b: 2, c: 3 } },
// //     ],
// //     f: p => x => p.a * x * x + p.b * x + p.c,
// //     domain: () => ({ excluded: [] }),
// //     factors: p => {
// //       const r = quadRoots(p.a, p.b, p.c);
// //       if (!r) {
// //         const expr = quadExprStr(p);
// //         return [{
// //           id: 'q',
// //           display: `(${expr})`,
// //           label: `(${expr})`,
// //           criticalXs: [],
// //           kind: 'irreducible',
// //           mult: 1,
// //           eval: x => p.a * x * x + p.b * x + p.c,
// //           sign: x => Math.sign(p.a * x * x + p.b * x + p.c) || 0,
// //         }];
// //       }
// //       if (r.double) {
// //         const rt = round2(r.distinct[0]);
// //         return [{
// //           id: `q${rt}`,
// //           display: `${facStr(rt)}\u00B2`,
// //           label: `${facStr(rt)}\u00B2`,
// //           criticalXs: [rt],
// //           kind: 'zero',
// //           mult: 2,
// //           eval: x => Math.pow(x - rt, 2),
// //           sign: x => Math.sign(Math.pow(x - rt, 2)) || 0,
// //         }];
// //       }
// //       return r.distinct.map(rt0 => {
// //         const rt = round2(rt0);
// //         return {
// //           id: `q${rt}`,
// //           display: facStr(rt),
// //           label: facStr(rt),
// //           criticalXs: [rt],
// //           kind: 'zero',
// //           mult: 1,
// //           eval: x => x - rt,
// //           sign: x => Math.sign(x - rt) || 0,
// //         };
// //       });
// //     },
// //     composeIneq: spans => spans.join(''),
// //   },

// //   abs: {
// //     id: 'abs',
// //     label: 'Absolute value',
// //     genericForm: 'f(x) = |x \u2212 h| \u2212 k',
// //     description: 'Absolute value shifted horizontally by h and lowered by k. The V-shape touches the axis when k = 0.',
// //     params: [
// //       { key: 'h', label: 'shift h', min: -6, max: 6, step: 1,
// //         tooltip: 'Horizontal shift \u2014 the vertex of the V is at x = h.' },
// //       { key: 'k', label: 'level k', min: 0, max: 8, step: 1,
// //         tooltip: 'How far the V is pushed down. k = 0 touches zero at h; k > 0 crosses zero at h \u00B1 k.' },
// //     ],
// //     templates: [
// //       { name: 'Centered', vals: { h: 0, k: 3 } },
// //       { name: 'Shifted', vals: { h: 2, k: 4 } },
// //       { name: 'Zero level', vals: { h: -1, k: 0 } },
// //     ],
// //     f: p => x => Math.abs(x - p.h) - p.k,
// //     domain: () => ({ excluded: [] }),
// //     factors: p => {
// //       const inside = p.h === 0 ? 'x' : `x ${p.h < 0 ? '+' : '\u2212'} ${Math.abs(p.h)}`;
// //       const display = `|${inside}|${p.k === 0 ? '' : ' \u2212 ' + p.k}`;
// //       const crits = p.k < 0 ? [] : (p.k === 0 ? [p.h] : [p.h - p.k, p.h + p.k]);
// //       return [{
// //         id: 'abs',
// //         display,
// //         label: display,
// //         criticalXs: crits,
// //         kind: 'expr',
// //         mult: 1,
// //         eval: x => Math.abs(x - p.h) - p.k,
// //         sign: x => Math.sign(Math.abs(x - p.h) - p.k) || 0,
// //       }];
// //     },
// //     composeIneq: spans => spans[0],
// //     invert: (oldX, newX, p) => ({ k: Math.max(0, Math.round(Math.abs(newX - p.h))) }),
// //   },

// //   rational: {
// //     id: 'rational',
// //     label: 'Rational',
// //     genericForm: 'f(x) = (x \u2212 a) / (x \u2212 b)',
// //     description: 'Rational with one zero (numerator) and one pole (denominator). The pole is excluded from the domain.',
// //     params: [
// //       { key: 'a', label: 'zero a', min: -7, max: 7, step: 1,
// //         tooltip: 'Numerator zero \u2014 where the value is exactly zero (a sign-change point).' },
// //       { key: 'b', label: 'pole b', min: -7, max: 7, step: 1,
// //         tooltip: 'Denominator zero \u2014 the value is undefined here (a vertical asymptote).' },
// //     ],
// //     templates: [
// //       { name: 'Simple', vals: { a: 1, b: -2 } },
// //       { name: 'Crossed', vals: { a: -3, b: 4 } },
// //       { name: 'Adjacent', vals: { a: 2, b: 3 } },
// //     ],
// //     f: p => x => (x - p.b === 0 ? NaN : (x - p.a) / (x - p.b)),
// //     domain: p => ({ excluded: [p.b], note: `x = ${p.b} makes the denominator zero` }),
// //     factors: p => [
// //       {
// //         id: 'num',
// //         display: facStr(p.a),
// //         label: `${facStr(p.a)} (num)`,
// //         criticalXs: [p.a],
// //         kind: 'zero',
// //         mult: 1,
// //         eval: x => x - p.a,
// //         sign: x => Math.sign(x - p.a) || 0,
// //       },
// //       {
// //         id: 'den',
// //         display: facStr(p.b),
// //         label: `${facStr(p.b)} (den)`,
// //         criticalXs: [p.b],
// //         kind: 'pole',
// //         mult: 1,
// //         eval: x => x - p.b,
// //         sign: x => Math.sign(x - p.b) || 0,
// //       },
// //     ],
// //     composeIneq: spans => `${spans[0]} / ${spans[1]}`,
// //     invert: (oldX, newX, p) => {
// //       if (p.a === oldX) return { a: newX };
// //       if (p.b === oldX) return { b: newX };
// //       return {};
// //     },
// //   },

// //   radical: {
// //     id: 'radical',
// //     label: 'Radical',
// //     genericForm: 'f(x) = \u221A(x \u2212 a) \u2212 k',
// //     description: 'Square root starting at x = a, then lowered by k. Domain is x \u2265 a.',
// //     params: [
// //       { key: 'a', label: 'start a', min: -6, max: 6, step: 1,
// //         tooltip: 'Domain start. The expression is only defined for x \u2265 a; everything to the left is forbidden.' },
// //       { key: 'k', label: 'level k', min: 0, max: 6, step: 1,
// //         tooltip: 'Vertical shift down. Larger k pushes the curve below zero over a wider region.' },
// //     ],
// //     templates: [
// //       { name: 'Basic', vals: { a: 0, k: 2 } },
// //       { name: 'Shifted', vals: { a: -3, k: 1 } },
// //       { name: 'High level', vals: { a: 1, k: 4 } },
// //     ],
// //     f: p => x => (x < p.a ? NaN : Math.sqrt(x - p.a) - p.k),
// //     domain: p => ({ excluded: [], lo: p.a, note: `defined only for x \u2265 ${p.a}` }),
// //     factors: p => {
// //       const inside = `x ${p.a < 0 ? '+' : '\u2212'} ${Math.abs(p.a)}`;
// //       const display = `\u221A${p.a === 0 ? 'x' : `(${inside})`}${p.k === 0 ? '' : ' \u2212 ' + p.k}`;
// //       const crits = [p.a];
// //       if (p.k > 0) crits.push(p.a + p.k * p.k);
// //       return [{
// //         id: 'rad',
// //         display,
// //         label: display,
// //         criticalXs: crits,
// //         kind: 'expr',
// //         mult: 1,
// //         eval: x => x < p.a ? NaN : Math.sqrt(x - p.a) - p.k,
// //         sign: x => x < p.a ? NaN : (Math.sign(Math.sqrt(x - p.a) - p.k) || 0),
// //       }];
// //     },
// //     composeIneq: spans => spans[0],
// //     invert: (oldX, newX, p) => {
// //       if (Math.abs(p.a - oldX) < 1e-9) return { a: newX };
// //       return { k: Math.max(0, Math.round(Math.sqrt(Math.max(0, newX - p.a)))) };
// //     },
// //   },
// // };



// // inequality-types.js
// // Registry of inequality types. Add a new type here = add one entry below.
// // Each type exports:
// //   id, label                  — identity
// //   genericForm                — display string f(x) = ... showing what each param means
// //   description                — tooltip for the type tab
// //   params: [{key,label,min,max,step,tooltip}]
// //   templates: [{name,vals}]
// //   f(p)                       — returns x => number
// //   domain(p)                  — { excluded?: number[], lo?: number, note?: string }
// //   factors(p)                 — array of { id, display, label, criticalXs, kind, mult, eval, sign }
// //                                where kind is 'zero' | 'pole' | 'domain' | 'expr' | 'irreducible'
// //   composeIneq(spans)         — how to join factor spans into the full HTML expression
// //   invert?(oldX, newX, p)     — optional: for dragging a critical point on the number line

// import { sup, facStr, quadRoots, quadExprStr, round2 } from './logic.js';

// export const TYPES = {
//   poly: {
//     id: 'poly',
//     label: 'Polynomial',
//     genericForm: 'f(x) = (x \u2212 r\u2081)(x \u2212 r\u2082)(x \u2212 r\u2083)',
//     description: 'Cubic polynomial in factored form. Each root r is where the curve crosses (or touches) zero.',
//     params: [
//       { key: 'r1', label: 'root r\u2081', min: -8, max: 8, step: 1,
//         tooltip: 'First root \u2014 where (x \u2212 r\u2081) = 0.' },
//       { key: 'r2', label: 'root r\u2082', min: -8, max: 8, step: 1,
//         tooltip: 'Second root.' },
//       { key: 'r3', label: 'root r\u2083', min: -8, max: 8, step: 1,
//         tooltip: 'Third root. Equal roots create a higher multiplicity (curve touches instead of crossing).' },
//     ],
//     templates: [
//       { name: 'Three roots', vals: { r1: -2, r2: 1, r3: 5 } },
//       { name: 'Double root', vals: { r1: -3, r2: 2, r3: 2 } },
//       { name: 'Tight cluster', vals: { r1: -1, r2: 0, r3: 1 } },
//     ],
//     f: p => x => (x - p.r1) * (x - p.r2) * (x - p.r3),
//     domain: () => ({ excluded: [] }),
//     factors: p => {
//       const counts = {};
//       [p.r1, p.r2, p.r3].forEach(r => { counts[r] = (counts[r] || 0) + 1; });
//       const seen = {};
//       const facs = [];
//       [p.r1, p.r2, p.r3].forEach(r => {
//         if (seen[r]) return;
//         seen[r] = 1;
//         const m = counts[r];
//         const base = facStr(r);
//         const display = m > 1 ? `${base}${sup(m)}` : base;
//         facs.push({
//           id: `r${r}`,
//           display,
//           label: display,
//           criticalXs: [r],
//           kind: 'zero',
//           mult: m,
//           eval: x => Math.pow(x - r, m),
//           sign: x => Math.sign(Math.pow(x - r, m)) || 0,
//         });
//       });
//       return facs;
//     },
//     composeIneq: spans => spans.join(''),
//     invert: (oldX, newX, p) => {
//       const key = ['r1', 'r2', 'r3'].find(k => p[k] === oldX);
//       return key ? { [key]: newX } : {};
//     },
//   },

//   quad: {
//     id: 'quad',
//     label: 'Quadratic',
//     genericForm: 'f(x) = ax\u00B2 + bx + c',
//     description: 'Standard quadratic. The discriminant b\u00B2 \u2212 4ac determines how many real roots exist.',
//     params: [
//       { key: 'a', label: 'a', min: -4, max: 4, step: 1,
//         tooltip: 'Leading coefficient. Sign determines opening direction; magnitude, the steepness. a = 0 degenerates to a line.' },
//       { key: 'b', label: 'b', min: -8, max: 8, step: 1,
//         tooltip: 'Linear coefficient. Together with a, controls the horizontal position of the vertex.' },
//       { key: 'c', label: 'c', min: -9, max: 9, step: 1,
//         tooltip: 'Constant term. Equals f(0); a vertical shift of the parabola.' },
//     ],
//     templates: [
//       { name: 'Two roots', vals: { a: 1, b: -1, c: -6 } },
//       { name: 'No real roots', vals: { a: 1, b: 0, c: 4 } },
//       { name: 'Opens down', vals: { a: -1, b: 2, c: 3 } },
//     ],
//     f: p => x => p.a * x * x + p.b * x + p.c,
//     domain: () => ({ excluded: [] }),
//     factors: p => {
//       const r = quadRoots(p.a, p.b, p.c);
//       if (!r) {
//         const expr = quadExprStr(p);
//         return [{
//           id: 'q',
//           display: `(${expr})`,
//           label: `(${expr})`,
//           criticalXs: [],
//           kind: 'irreducible',
//           mult: 1,
//           eval: x => p.a * x * x + p.b * x + p.c,
//           sign: x => Math.sign(p.a * x * x + p.b * x + p.c) || 0,
//         }];
//       }
//       if (r.double) {
//         const rt = round2(r.distinct[0]);
//         return [{
//           id: `q${rt}`,
//           display: `${facStr(rt)}\u00B2`,
//           label: `${facStr(rt)}\u00B2`,
//           criticalXs: [rt],
//           kind: 'zero',
//           mult: 2,
//           eval: x => Math.pow(x - rt, 2),
//           sign: x => Math.sign(Math.pow(x - rt, 2)) || 0,
//         }];
//       }
//       return r.distinct.map(rt0 => {
//         const rt = round2(rt0);
//         return {
//           id: `q${rt}`,
//           display: facStr(rt),
//           label: facStr(rt),
//           criticalXs: [rt],
//           kind: 'zero',
//           mult: 1,
//           eval: x => x - rt,
//           sign: x => Math.sign(x - rt) || 0,
//         };
//       });
//     },
//     composeIneq: spans => spans.join(''),
//   },

//   abs: {
//     id: 'abs',
//     label: 'Absolute value',
//     genericForm: 'f(x) = |x \u2212 h| \u2212 k',
//     description: 'Absolute value shifted horizontally by h and lowered by k. The V-shape touches the axis when k = 0.',
//     params: [
//       { key: 'h', label: 'shift h', min: -6, max: 6, step: 1,
//         tooltip: 'Horizontal shift \u2014 the vertex of the V is at x = h.' },
//       { key: 'k', label: 'level k', min: 0, max: 8, step: 1,
//         tooltip: 'How far the V is pushed down. k = 0 touches zero at h; k > 0 crosses zero at h \u00B1 k.' },
//     ],
//     templates: [
//       { name: 'Centered', vals: { h: 0, k: 3 } },
//       { name: 'Shifted', vals: { h: 2, k: 4 } },
//       { name: 'Zero level', vals: { h: -1, k: 0 } },
//     ],
//     f: p => x => Math.abs(x - p.h) - p.k,
//     domain: () => ({ excluded: [] }),
//     factors: p => {
//       const inside = p.h === 0 ? 'x' : `x ${p.h < 0 ? '+' : '\u2212'} ${Math.abs(p.h)}`;
//       const display = `|${inside}|${p.k === 0 ? '' : ' \u2212 ' + p.k}`;
//       const crits = p.k < 0 ? [] : (p.k === 0 ? [p.h] : [p.h - p.k, p.h + p.k]);
//       return [{
//         id: 'abs',
//         display,
//         label: display,
//         criticalXs: crits,
//         kind: 'expr',
//         mult: 1,
//         eval: x => Math.abs(x - p.h) - p.k,
//         sign: x => Math.sign(Math.abs(x - p.h) - p.k) || 0,
//       }];
//     },
//     composeIneq: spans => spans[0],
//     invert: (oldX, newX, p) => ({ k: Math.max(0, Math.round(Math.abs(newX - p.h))) }),
//   },

//   rational: {
//     id: 'rational',
//     label: 'Rational',
//     genericForm: 'f(x) = (x \u2212 a) / (x \u2212 b)',
//     description: 'Rational with one zero (numerator) and one pole (denominator). The pole is excluded from the domain.',
//     params: [
//       { key: 'a', label: 'zero a', min: -7, max: 7, step: 1,
//         tooltip: 'Numerator zero \u2014 where the value is exactly zero (a sign-change point).' },
//       { key: 'b', label: 'pole b', min: -7, max: 7, step: 1,
//         tooltip: 'Denominator zero \u2014 the value is undefined here (a vertical asymptote).' },
//     ],
//     templates: [
//       { name: 'Simple', vals: { a: 1, b: -2 } },
//       { name: 'Crossed', vals: { a: -3, b: 4 } },
//       { name: 'Adjacent', vals: { a: 2, b: 3 } },
//     ],
//     f: p => x => (x - p.b === 0 ? NaN : (x - p.a) / (x - p.b)),
//     domain: p => ({ excluded: [p.b], note: `x = ${p.b} makes the denominator zero` }),
//     factors: p => [
//       {
//         id: 'num',
//         display: facStr(p.a),
//         label: `${facStr(p.a)} (num)`,
//         criticalXs: [p.a],
//         kind: 'zero',
//         mult: 1,
//         eval: x => x - p.a,
//         sign: x => Math.sign(x - p.a) || 0,
//       },
//       {
//         id: 'den',
//         display: facStr(p.b),
//         label: `${facStr(p.b)} (den)`,
//         criticalXs: [p.b],
//         kind: 'pole',
//         mult: 1,
//         eval: x => x - p.b,
//         sign: x => Math.sign(x - p.b) || 0,
//       },
//     ],
//     composeIneq: spans => `${spans[0]} / ${spans[1]}`,
//     invert: (oldX, newX, p) => {
//       if (p.a === oldX) return { a: newX };
//       if (p.b === oldX) return { b: newX };
//       return {};
//     },
//   },

//   radical: {
//     id: 'radical',
//     label: 'Radical',
//     genericForm: 'f(x) = \u221A(x \u2212 a) \u2212 k',
//     description: 'Square root starting at x = a, then lowered by k. Domain is x \u2265 a.',
//     params: [
//       { key: 'a', label: 'start a', min: -6, max: 6, step: 1,
//         tooltip: 'Domain start. The expression is only defined for x \u2265 a; everything to the left is forbidden.' },
//       { key: 'k', label: 'level k', min: 0, max: 6, step: 1,
//         tooltip: 'Vertical shift down. Larger k pushes the curve below zero over a wider region.' },
//     ],
//     templates: [
//       { name: 'Basic', vals: { a: 0, k: 2 } },
//       { name: 'Shifted', vals: { a: -3, k: 1 } },
//       { name: 'High level', vals: { a: 1, k: 4 } },
//     ],
//     f: p => x => (x < p.a ? NaN : Math.sqrt(x - p.a) - p.k),
//     domain: p => ({ excluded: [], lo: p.a, note: `defined only for x \u2265 ${p.a}` }),
//     factors: p => {
//       const inside = `x ${p.a < 0 ? '+' : '\u2212'} ${Math.abs(p.a)}`;
//       const display = `\u221A${p.a === 0 ? 'x' : `(${inside})`}${p.k === 0 ? '' : ' \u2212 ' + p.k}`;
//       const crits = [p.a];
//       if (p.k > 0) crits.push(p.a + p.k * p.k);
//       return [{
//         id: 'rad',
//         display,
//         label: display,
//         criticalXs: crits,
//         kind: 'expr',
//         mult: 1,
//         eval: x => x < p.a ? NaN : Math.sqrt(x - p.a) - p.k,
//         sign: x => x < p.a ? NaN : (Math.sign(Math.sqrt(x - p.a) - p.k) || 0),
//       }];
//     },
//     composeIneq: spans => spans[0],
//     invert: (oldX, newX, p) => {
//       if (Math.abs(p.a - oldX) < 1e-9) return { a: newX };
//       return { k: Math.max(0, Math.round(Math.sqrt(Math.max(0, newX - p.a)))) };
//     },
//   },
// };



// inequality-types.js
// Registry of inequality types. Add a new type here = add one entry below.
// Each type exports:
//   id, label                  — identity
//   genericForm                — display string f(x) = ... showing what each param means
//   description                — tooltip for the type tab
//   params: [{key,label,min,max,step,tooltip}]
//   templates: [{name,vals}]
//   f(p)                       — returns x => number
//   domain(p)                  — { excluded?: number[], lo?: number, note?: string }
//   factors(p)                 — array of { id, display, label, criticalXs, kind, mult, eval, sign }
//                                where kind is 'zero' | 'pole' | 'domain' | 'expr' | 'irreducible'
//   composeIneq(spans)         — how to join factor spans into the full HTML expression
//   invert?(oldX, newX, p)     — optional: for dragging a critical point on the number line

import { sup, facStr, quadRoots, quadExprStr, round2 } from './logic.js';

export const TYPES = {
  poly: {
    id: 'poly',
    label: 'Polynomial',
    genericForm: 'f(x) = (x \u2212 r\u2081)(x \u2212 r\u2082)(x \u2212 r\u2083)',
    description: 'Cubic polynomial in factored form. Each root r is where the curve crosses (or touches) zero.',
    params: [
      { key: 'r1', label: 'root r\u2081', min: -8, max: 8, step: 1,
        tooltip: 'First root \u2014 where (x \u2212 r\u2081) = 0.' },
      { key: 'r2', label: 'root r\u2082', min: -8, max: 8, step: 1,
        tooltip: 'Second root.' },
      { key: 'r3', label: 'root r\u2083', min: -8, max: 8, step: 1,
        tooltip: 'Third root. Equal roots create a higher multiplicity (curve touches instead of crossing).' },
    ],
    templates: [
      { name: 'Three roots', vals: { r1: -2, r2: 1, r3: 5 } },
      { name: 'Double root', vals: { r1: -3, r2: 2, r3: 2 } },
      { name: 'Tight cluster', vals: { r1: -1, r2: 0, r3: 1 } },
    ],
    f: p => x => (x - p.r1) * (x - p.r2) * (x - p.r3),
    domain: () => ({ excluded: [] }),
    factors: p => {
      const counts = {};
      [p.r1, p.r2, p.r3].forEach(r => { counts[r] = (counts[r] || 0) + 1; });
      const seen = {};
      const facs = [];
      [p.r1, p.r2, p.r3].forEach(r => {
        if (seen[r]) return;
        seen[r] = 1;
        const m = counts[r];
        const base = facStr(r);
        const display = m > 1 ? `${base}${sup(m)}` : base;
        facs.push({
          id: `r${r}`,
          display,
          label: display,
          criticalXs: [r],
          kind: 'zero',
          mult: m,
          eval: x => Math.pow(x - r, m),
          sign: x => Math.sign(Math.pow(x - r, m)) || 0,
        });
      });
      return facs;
    },
    composeIneq: spans => spans.join(''),
    invert: (oldX, newX, p) => {
      const key = ['r1', 'r2', 'r3'].find(k => p[k] === oldX);
      return key ? { [key]: newX } : {};
    },
  },

  quad: {
    id: 'quad',
    label: 'Quadratic',
    genericForm: 'f(x) = ax\u00B2 + bx + c',
    description: 'Standard quadratic. The discriminant b\u00B2 \u2212 4ac determines how many real roots exist.',
    params: [
      { key: 'a', label: 'a', min: -4, max: 4, step: 1,
        tooltip: 'Leading coefficient. Sign determines opening direction; magnitude, the steepness. a = 0 degenerates to a line.' },
      { key: 'b', label: 'b', min: -8, max: 8, step: 1,
        tooltip: 'Linear coefficient. Together with a, controls the horizontal position of the vertex.' },
      { key: 'c', label: 'c', min: -9, max: 9, step: 1,
        tooltip: 'Constant term. Equals f(0); a vertical shift of the parabola.' },
    ],
    templates: [
      { name: 'Two roots', vals: { a: 1, b: -1, c: -6 } },
      { name: 'No real roots', vals: { a: 1, b: 0, c: 4 } },
      { name: 'Opens down', vals: { a: -1, b: 2, c: 3 } },
    ],
    f: p => x => p.a * x * x + p.b * x + p.c,
    domain: () => ({ excluded: [] }),
    factors: p => {
      const r = quadRoots(p.a, p.b, p.c);
      if (!r) {
        const expr = quadExprStr(p);
        return [{
          id: 'q',
          display: `(${expr})`,
          label: `(${expr})`,
          criticalXs: [],
          kind: 'irreducible',
          mult: 1,
          eval: x => p.a * x * x + p.b * x + p.c,
          sign: x => Math.sign(p.a * x * x + p.b * x + p.c) || 0,
        }];
      }
      if (r.double) {
        const rt = round2(r.distinct[0]);
        return [{
          id: `q${rt}`,
          display: `${facStr(rt)}\u00B2`,
          label: `${facStr(rt)}\u00B2`,
          criticalXs: [rt],
          kind: 'zero',
          mult: 2,
          eval: x => Math.pow(x - rt, 2),
          sign: x => Math.sign(Math.pow(x - rt, 2)) || 0,
        }];
      }
      return r.distinct.map(rt0 => {
        const rt = round2(rt0);
        return {
          id: `q${rt}`,
          display: facStr(rt),
          label: facStr(rt),
          criticalXs: [rt],
          kind: 'zero',
          mult: 1,
          eval: x => x - rt,
          sign: x => Math.sign(x - rt) || 0,
        };
      });
    },
    composeIneq: spans => spans.join(''),
  },

  abs: {
    id: 'abs',
    label: 'Absolute value',
    genericForm: 'f(x) = |x \u2212 h| \u2212 k',
    description: 'Absolute value shifted horizontally by h and lowered by k. The V-shape touches the axis when k = 0.',
    params: [
      { key: 'h', label: 'shift h', min: -6, max: 6, step: 1,
        tooltip: 'Horizontal shift \u2014 the vertex of the V is at x = h.' },
      { key: 'k', label: 'level k', min: 0, max: 8, step: 1,
        tooltip: 'How far the V is pushed down. k = 0 touches zero at h; k > 0 crosses zero at h \u00B1 k.' },
    ],
    templates: [
      { name: 'Centered', vals: { h: 0, k: 3 } },
      { name: 'Shifted', vals: { h: 2, k: 4 } },
      { name: 'Zero level', vals: { h: -1, k: 0 } },
    ],
    f: p => x => Math.abs(x - p.h) - p.k,
    domain: () => ({ excluded: [] }),
    factors: p => {
      const inside = p.h === 0 ? 'x' : `x ${p.h < 0 ? '+' : '\u2212'} ${Math.abs(p.h)}`;
      const display = `|${inside}|${p.k === 0 ? '' : ' \u2212 ' + p.k}`;
      const crits = p.k < 0 ? [] : (p.k === 0 ? [p.h] : [p.h - p.k, p.h + p.k]);
      return [{
        id: 'abs',
        display,
        label: display,
        criticalXs: crits,
        kind: 'expr',
        mult: 1,
        eval: x => Math.abs(x - p.h) - p.k,
        sign: x => Math.sign(Math.abs(x - p.h) - p.k) || 0,
      }];
    },
    composeIneq: spans => spans[0],
    invert: (oldX, newX, p) => ({ k: Math.max(0, Math.round(Math.abs(newX - p.h))) }),
  },

  rational: {
    id: 'rational',
    label: 'Rational',
    genericForm: 'f(x) = (x \u2212 a) / (x \u2212 b)',
    description: 'Rational with one zero (numerator) and one pole (denominator). The pole is excluded from the domain.',
    params: [
      { key: 'a', label: 'zero a', min: -7, max: 7, step: 1,
        tooltip: 'Numerator zero \u2014 where the value is exactly zero (a sign-change point).' },
      { key: 'b', label: 'pole b', min: -7, max: 7, step: 1,
        tooltip: 'Denominator zero \u2014 the value is undefined here (a vertical asymptote).' },
    ],
    templates: [
      { name: 'Simple', vals: { a: 1, b: -2 } },
      { name: 'Crossed', vals: { a: -3, b: 4 } },
      { name: 'Adjacent', vals: { a: 2, b: 3 } },
    ],
    f: p => x => (x - p.b === 0 ? NaN : (x - p.a) / (x - p.b)),
    domain: p => ({ excluded: [p.b], note: `x = ${p.b} makes the denominator zero` }),
    factors: p => [
      {
        id: 'num',
        display: facStr(p.a),
        label: `${facStr(p.a)} (num)`,
        criticalXs: [p.a],
        kind: 'zero',
        mult: 1,
        eval: x => x - p.a,
        sign: x => Math.sign(x - p.a) || 0,
      },
      {
        id: 'den',
        display: facStr(p.b),
        label: `${facStr(p.b)} (den)`,
        criticalXs: [p.b],
        kind: 'pole',
        mult: 1,
        eval: x => x - p.b,
        sign: x => Math.sign(x - p.b) || 0,
      },
    ],
    composeIneq: spans => `${spans[0]} / ${spans[1]}`,
    invert: (oldX, newX, p) => {
      if (p.a === oldX) return { a: newX };
      if (p.b === oldX) return { b: newX };
      return {};
    },
  },

  radical: {
    id: 'radical',
    label: 'Radical',
    genericForm: 'f(x) = \u221A(x \u2212 a) \u2212 k',
    description: 'Square root starting at x = a, then lowered by k. Domain is x \u2265 a.',
    params: [
      { key: 'a', label: 'start a', min: -6, max: 6, step: 1,
        tooltip: 'Domain start. The expression is only defined for x \u2265 a; everything to the left is forbidden.' },
      { key: 'k', label: 'level k', min: 0, max: 6, step: 1,
        tooltip: 'Vertical shift down. Larger k pushes the curve below zero over a wider region.' },
    ],
    templates: [
      { name: 'Basic', vals: { a: 0, k: 2 } },
      { name: 'Shifted', vals: { a: -3, k: 1 } },
      { name: 'High level', vals: { a: 1, k: 4 } },
    ],
    f: p => x => (x < p.a ? NaN : Math.sqrt(x - p.a) - p.k),
    domain: p => ({ excluded: [], lo: p.a, note: `defined only for x \u2265 ${p.a}` }),
    factors: p => {
      const inside = `x ${p.a < 0 ? '+' : '\u2212'} ${Math.abs(p.a)}`;
      const display = `\u221A${p.a === 0 ? 'x' : `(${inside})`}${p.k === 0 ? '' : ' \u2212 ' + p.k}`;
      const crits = [p.a];
      if (p.k > 0) crits.push(p.a + p.k * p.k);
      return [{
        id: 'rad',
        display,
        label: display,
        criticalXs: crits,
        kind: 'expr',
        mult: 1,
        eval: x => x < p.a ? NaN : Math.sqrt(x - p.a) - p.k,
        sign: x => x < p.a ? NaN : (Math.sign(Math.sqrt(x - p.a) - p.k) || 0),
      }];
    },
    composeIneq: spans => spans[0],
    invert: (oldX, newX, p) => {
      if (Math.abs(p.a - oldX) < 1e-9) return { a: newX };
      return { k: Math.max(0, Math.round(Math.sqrt(Math.max(0, newX - p.a)))) };
    },
  },
};