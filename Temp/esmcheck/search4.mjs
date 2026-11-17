import { resolve } from './resolver.mjs';
import { angleGeom } from './math.mjs';
import P0 from './cb.mjs';
const base = P0.model; const ids = ['angB','angD','p1','p2','q1','q2'];
const objs = Object.fromEntries(base.objects.filter(o => ids.includes(o.id)).map(o => [o.id, o]));
const cfg = JSON.parse(process.argv[2] || '{}'); const LC = P0.labelCenter, VB = P0.viewBox;
const boxes = (P, R, me) => { const out = ids.map(id => { const o = objs[id]; const v = P[o.at]; const { a1, d } = angleGeom(v, P[o.from], P[o.to]); const m = a1 + d / 2; const lr = R[id] + (me ? 24 : 15);
  const txt = me ? `${o.label} ${Math.round(Math.abs(d) * 180 / Math.PI)}°` : o.label; const w = 9 * [...txt].length + 2, h = 20; const x = v.x + lr * Math.cos(m), y = v.y + lr * Math.sin(m);
  return { id, l: x - w / 2, r: x + w / 2, t: y - h / 2, b: y + h / 2 }; });
  const c = LC.map(k => P[k]); const cx = c.reduce((s, p) => s + p.x, 0) / c.length, cy = c.reduce((s, p) => s + p.y, 0) / c.length;
  for (const k of ['A', 'B', 'C', 'D', 'P', 'Q', 'R']) { const p = P[k]; const dx = p.x - cx, dy = p.y - cy, n = Math.hypot(dx, dy) || 1; const x = p.x + dx / n * 22, y = p.y + dy / n * 22;
    out.push({ id: k, l: x - 7, r: x + 7, t: y - 11, b: y + 11 }); }
  return out; };
const minGap = (bs) => { let mn = 1e9, w = ''; for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i], c = bs[j]; const g = Math.max(Math.max(a.l, c.l) - Math.min(a.r, c.r), Math.max(a.t, c.t) - Math.min(a.b, c.b)); if (g < mn) { mn = g; w = a.id + '|' + c.id; } }
  for (const a of bs) { const g = Math.min(a.l - VB[0], VB[0] + VB[2] - a.r, a.t - VB[1], VB[1] + VB[3] - a.b); if (g < mn) { mn = g; w = a.id + '|frame'; } } return [mn, w]; };
const at = (pr, pts) => { const { P } = resolve({ ...base, points: { ...base.points, ...pts }, params: { ...base.params, ...pr } }); return P0.isValid(P) ? P : null; };
const samples = [];
for (let tp = 0.1; tp <= 0.601; tp += 0.05) for (let tq = 0.1; tq <= 0.601; tq += 0.05) for (const ay of [110, 140, 170]) for (const by of [110, 140, 170]) for (const cy of [290, 320, 350]) {
  const pts = { A: { x: 80, y: ay }, B: { x: 500, y: by }, C: { x: 80, y: cy } }; const P = at({ tp, tq }, pts); if (P) samples.push([{ tp, tq, ay, by, cy }, P]); }
const D0 = at({}, {});
const cur = Object.fromEntries(ids.map(id => [id, objs[id].radius]));
const rep = (R) => { let w = [1e9]; for (const [pr, Q] of samples) { const g = minGap(boxes(Q, R, false)); if (g[0] < w[0]) w = [g[0], g[1], pr]; } return { worst: [Math.round(w[0]), w[1], JSON.stringify(w[2])], def: minGap(boxes(D0, R, false)).map(x => typeof x === 'number' ? Math.round(x) : x), defM: minGap(boxes(D0, R, true)).map(x => typeof x === 'number' ? Math.round(x) : x) }; };
console.log('valid default', !!D0, P0.readout(D0), 'samples', samples.length, JSON.stringify(rep(cur)));
if (cfg.search) { const lim = { angB: [18, 130], angD: [18, 130], p1: [18, 90], p2: [18, 90], q1: [18, 90], q2: [18, 90] }; const sub = samples.filter((_, i) => i % 3 === 0);
  const sc = (R0) => { const R = R0; let w = Math.min(minGap(boxes(D0, R, true))[0], minGap(boxes(D0, R, false))[0]); for (const [, Q] of sub) { w = Math.min(w, minGap(boxes(Q, R, false))[0]); } return w; };
  let best = null, bs = -1e9; for (let st = 0; st < 10; st++) { let R = Object.fromEntries(Object.entries(lim).map(([id, [a, b]]) => [id, Math.round(a + Math.random() * (b - a))])); let s0 = sc(R);
    for (let it = 0; it < 300; it++) { const id = ids[Math.floor(Math.random() * ids.length)]; const R2 = { ...R, [id]: Math.min(lim[id][1], Math.max(lim[id][0], R[id] + Math.round((Math.random() - 0.5) * 16))) }; const s2 = sc(R2); if (s2 >= s0) { R = R2; s0 = s2; } }
    if (s0 > bs) { bs = s0; best = R; } }
  console.log('best', Math.round(bs), JSON.stringify(best), JSON.stringify(rep(best))); }
