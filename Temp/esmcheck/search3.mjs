import { resolve } from './resolver.mjs';
import { angleGeom, dist } from './math.mjs';
import P0 from './ie.mjs';
const base = P0.model; const ids = ['a1','a2','mB','b1','b2','tB','tI'];
const objs = Object.fromEntries(base.objects.filter(o => ids.includes(o.id)).map(o => [o.id, o]));
const [cfgArg] = process.argv.slice(2); const cfg = JSON.parse(cfgArg);
const LC = cfg.lc, VB = cfg.vb || [60, 42, 440, 360];
const deg = (v, p, q) => Math.abs(angleGeom(v, p, q).d) * 180 / Math.PI;
const boxes = (P, R, me) => { const out = ids.map(id => { const o = objs[id]; const v = P[o.at]; const { a1, d } = angleGeom(v, P[o.from], P[o.to]); const m = a1 + d / 2; const lr = R[id] + (me ? 24 : 15);
  const txt = me ? `${o.label} ${Math.round(Math.abs(d) * 180 / Math.PI)}°` : o.label; const w = 9 * [...txt].length + 2, h = 20; const x = v.x + lr * Math.cos(m), y = v.y + lr * Math.sin(m);
  return { id, l: x - w / 2, r: x + w / 2, t: y - h / 2, b: y + h / 2 }; });
  const c = LC.map(k => P[k]); const cx = c.reduce((s, p) => s + p.x, 0) / c.length, cy = c.reduce((s, p) => s + p.y, 0) / c.length;
  for (const k of ['A', 'B', 'C', 'I', 'M']) { const p = P[k]; const dx = p.x - cx, dy = p.y - cy, n = Math.hypot(dx, dy) || 1; const x = p.x + dx / n * 22, y = p.y + dy / n * 22; const w = k === 'M' ? 18 : 13;
    out.push({ id: k, l: x - w / 2, r: x + w / 2, t: y - 11, b: y + 11 }); }
  return out; };
const minGap = (bs) => { let mn = 1e9, w = ''; for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i], c = bs[j]; const g = Math.max(Math.max(a.l, c.l) - Math.min(a.r, c.r), Math.max(a.t, c.t) - Math.min(a.b, c.b)); if (g < mn) { mn = g; w = a.id + '|' + c.id; } }
  for (const a of bs) { const g = Math.min(a.l - VB[0], VB[0] + VB[2] - a.r, a.t - VB[1], VB[1] + VB[3] - a.b); if (g < mn) { mn = g; w = a.id + '|frame'; } } return [mn, w]; };
const ok = (P) => P0.isValid(P) && dist(P.B, P.I) > (cfg.bi || 0) && dist(P.A, P.I) > (cfg.ai || 0) && deg(P.A, P.B, P.C) > (cfg.amin || 0) && deg(P.B, P.A, P.C) > (cfg.bmin || 0) && deg(P.A, P.B, P.C) < (cfg.amax || 180) && deg(P.B, P.A, P.C) < (cfg.bmax || 180) && deg(P.C, P.A, P.B) > (cfg.gmin || 0);
const at = (pr) => { const { P } = resolve({ ...base, params: { ...base.params, ...pr } }); return P && ok(P) ? P : null; };
const samples = []; for (let ta = -2.4; ta <= -0.9; ta += 0.1) for (let tb = 2.0; tb <= 3.2; tb += 0.1) for (let tc = 0.0; tc <= 1.2; tc += 0.1) { const P = at({ ta, tb, tc }); if (P) samples.push([{ ta: +ta.toFixed(2), tb: +tb.toFixed(2), tc: +tc.toFixed(2) }, P]); }
const sub = samples.filter((_, i) => i % 3 === 0);
const lim = cfg.fix ? { a1: [26, 90], a2: [26, 90], mB: [60, 60], b1: [56, 56], b2: [28, 28], tB: [96, 96], tI: [14, 30] } : { a1: [26, 90], a2: [26, 90], mB: [28, 64], b1: [28, 64], b2: [26, 64], tB: [16, 120], tI: [14, 44] };
const sc = (R) => { let w = 1e9; for (const [, Q] of sub) { w = Math.min(w, minGap(boxes(Q, R, false))[0]); } return w; };
let best = null, bs = -1e9;
for (let st = 0; st < 10; st++) { let R = Object.fromEntries(Object.entries(lim).map(([id, [a, b]]) => [id, Math.round(a + Math.random() * (b - a))])); let s0 = sc(R);
  for (let it = 0; it < 300; it++) { const id = ids[Math.floor(Math.random() * ids.length)]; const R2 = { ...R, [id]: Math.min(lim[id][1], Math.max(lim[id][0], R[id] + Math.round((Math.random() - 0.5) * 16))) }; const s2 = sc(R2); if (s2 >= s0) { R = R2; s0 = s2; } }
  if (s0 > bs) { bs = s0; best = R; } }
let wst = [1e9]; for (const [pr, Q] of samples) { const g = minGap(boxes(Q, best, false)); if (g[0] < wst[0]) wst = [g[0], g[1], pr]; }
const D0 = cfg.def && at(cfg.def); if (D0) console.log('fixed default', JSON.stringify(minGap(boxes(D0, best, true))), JSON.stringify(minGap(boxes(D0, best, false))));
let bd = [-1e9]; for (const [pr, Q] of samples) { const g = minGap(boxes(Q, best, true)); const g2 = minGap(boxes(Q, best, false)); const v = Math.min(g[0], g2[0]); if (v > bd[0]) bd = [v, g[1], pr]; }
console.log(cfgArg, 'n', samples.length, 'worst', Math.round(wst[0]), wst[1], JSON.stringify(wst[2]), JSON.stringify(best), 'default', Math.round(bd[0]), bd[1], JSON.stringify(bd[2]));
