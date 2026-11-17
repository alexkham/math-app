import { resolve } from './resolver.mjs';
import { angleGeom, dist } from './math.mjs';
import P0 from './ie.mjs';
const base = P0.model; const ids = ['a1','a2','mB','b1','b2','tB','tI'];
const objs = Object.fromEntries(base.objects.filter(o => ids.includes(o.id)).map(o => [o.id, o]));
const boxes = (P, R, me) => ids.map(id => { const o = objs[id]; const v = P[o.at]; const { a1, d } = angleGeom(v, P[o.from], P[o.to]); const m = a1 + d / 2; const lr = R[id] + (me ? 24 : 15);
  const txt = me ? `${o.label} ${Math.round(Math.abs(d) * 180 / Math.PI)}°` : o.label; const w = 9 * [...txt].length, h = 20; const x = v.x + lr * Math.cos(m), y = v.y + lr * Math.sin(m);
  return { id, l: x - w / 2, r: x + w / 2, t: y - h / 2, b: y + h / 2 }; });
const minGap = (bs) => { let mn = 1e9, w = ''; for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i], c = bs[j]; const g = Math.max(Math.max(a.l, c.l) - Math.min(a.r, c.r), Math.max(a.t, c.t) - Math.min(a.b, c.b)); if (g < mn) { mn = g; w = a.id + '|' + c.id; } } return [mn, w]; };
const dmin = +process.argv[2], amin = +process.argv[3], bmin = +(process.argv[4] || 0);
const deg = (v, p, q) => Math.abs(angleGeom(v, p, q).d) * 180 / Math.PI;
const ok = (P) => P0.isValid(P) && dist(P.B, P.I) > dmin && dist(P.C, P.I) > 70 && deg(P.A, P.B, P.C) > amin && deg(P.B, P.A, P.C) > bmin;
const at = (pr) => { const { P } = resolve({ ...base, params: { ...base.params, ...pr } }); return ok(P) ? P : null; };
const samples = []; for (let ta = -2.3; ta <= -1.0; ta += 0.1) for (let tb = 2.1; tb <= 3.1; tb += 0.1) for (let tc = 0.1; tc <= 1.1; tc += 0.1) { const P = at({ ta, tb, tc }); if (P) samples.push([{ ta, tb, tc }, P]); }
const sub = samples.filter((_, i) => i % 4 === 0);
const lim = { a1: [40, 90], a2: [40, 90], mB: [28, 60], b1: [28, 60], b2: [28, 60], tB: [16, 120], tI: [16, 44] };
const DEF = process.argv[5] ? JSON.parse(process.argv[5]) : null; const PD = DEF && at(DEF);
const sc = (R0) => { const R = { ...R0, b2: R0.b1 }; let w = PD ? minGap(boxes(PD, R, true))[0] : 1e9; for (const [, Q] of sub) { w = Math.min(w, minGap(boxes(Q, R, false))[0]); } return w; };
let best = null, bs = -1e9;
for (let st = 0; st < 12; st++) { let R = Object.fromEntries(Object.entries(lim).map(([id, [a, b]]) => [id, Math.round(a + Math.random() * (b - a))])); let s0 = sc(R);
  for (let it = 0; it < 400; it++) { const id = ids[Math.floor(Math.random() * ids.length)]; const R2 = { ...R, [id]: Math.min(lim[id][1], Math.max(lim[id][0], R[id] + Math.round((Math.random() - 0.5) * 16))) }; const s2 = sc(R2); if (s2 >= s0) { R = R2; s0 = s2; } }
  if (s0 > bs) { bs = s0; best = { ...R, b2: R.b1 }; } }
let wst = [1e9]; for (const [pr, Q] of samples) { const g = minGap(boxes(Q, best, false)); if (g[0] < wst[0]) wst = [g[0], g[1], pr]; }
// best default for measures
let bd = [-1e9]; for (const [pr, Q] of samples) { const g = minGap(boxes(Q, best, true)); if (g[0] > bd[0]) bd = [g[0], g[1], pr]; }
if (PD) console.log('default measures', JSON.stringify(minGap(boxes(PD, best, true))));
console.log('n', samples.length, 'labels-only worst', Math.round(wst[0]), wst[1], JSON.stringify(best), 'best default w/ measures', Math.round(bd[0]), bd[1], JSON.stringify(bd[2]));
