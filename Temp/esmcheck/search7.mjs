// generic label check: node search5.mjs <module> '<json cfg>'  cfg: {pts:[point names], samples:[{points:{..}}], search:1, lim:{id:[a,b]}}
import { resolve } from './resolver.mjs';
import { angleGeom } from './math.mjs';
const mod = (await import('./' + process.argv[2])).default; const _a = process.argv[3] || '{}'; const cfg = JSON.parse(_a.startsWith('@') ? (await import('fs')).readFileSync(_a.slice(1), 'utf8') : _a);
const base = mod.model; const angs = base.objects.filter(o => o.type === 'angle'); const LC = mod.labelCenter, VB = mod.viewBox;
const defR = (P, o) => o.radius || Math.max(14, Math.min(34, 0.3 * Math.min(Math.hypot(P[o.from].x - P[o.at].x, P[o.from].y - P[o.at].y), Math.hypot(P[o.to].x - P[o.at].x, P[o.to].y - P[o.at].y))));
const boxes = (P, R, me) => { const out = angs.map(o => { const v = P[o.at]; const { a1, d } = angleGeom(v, P[o.from], P[o.to]); const m = a1 + d * (o.labelAt ?? 0.5); const lr = (R[o.id] ?? defR(P, o)) + (me ? 24 : 15);
  const txt = me ? `${o.label} ${Math.round(Math.abs(d) * 180 / Math.PI)}°` : o.label; const w = 9 * [...txt].length + 2, h = 20; const x = v.x + lr * Math.cos(m), y = v.y + lr * Math.sin(m);
  return { id: o.id, l: x - w / 2, r: x + w / 2, t: y - h / 2, b: y + h / 2 }; });
  const c = LC.map(k => P[k]); const cx = c.reduce((s, p) => s + p.x, 0) / c.length, cy = c.reduce((s, p) => s + p.y, 0) / c.length;
  for (const k of cfg.pts) { const p = P[k]; const dx = p.x - cx, dy = p.y - cy, n = Math.hypot(dx, dy) || 1; const x = p.x + dx / n * 22, y = p.y + dy / n * 22; out.push({ id: k, l: x - 7, r: x + 7, t: y - 11, b: y + 11 }); }
  return out; };
const segGap = (bs, P) => { if (!cfg.segs || !P) return [1e9, '']; let mn = 1e9, w = ''; for (const a of bs) for (const [p, q] of cfg.segs) { if (cfg.segFor && !cfg.segFor.includes(a.id)) continue; const A = P[p], B = P[q]; if (!A || !B) continue; if ((a.id === p || a.id === q) && !(cfg.noSkip || []).includes(a.id)) continue; let d = 1e9; for (let k = 0; k <= 30; k++) { const x = A.x + (B.x - A.x) * k / 30, y = A.y + (B.y - A.y) * k / 30; const dx = Math.max(a.l - x, 0, x - a.r), dy = Math.max(a.t - y, 0, y - a.b); d = Math.min(d, Math.hypot(dx, dy)); } if (d < mn) { mn = d; w = a.id + '|' + p + q; } } return [Math.round(mn) - (cfg.segNeed || 4), w]; };
const minGap = (bs, P) => { const sg = segGap(bs, P); let mn = 1e9, w = ''; for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i], c = bs[j]; const g = Math.max(Math.max(a.l, c.l) - Math.min(a.r, c.r), Math.max(a.t, c.t) - Math.min(a.b, c.b)); if (g < mn) { mn = g; w = a.id + '|' + c.id; } }
  for (const a of bs) { const g = Math.min(a.l - VB[0], VB[0] + VB[2] - a.r, a.t - VB[1], VB[1] + VB[3] - a.b); if (g < mn) { mn = g; w = a.id + '|frame'; } } if (sg[0] < mn) { mn = sg[0]; w = sg[1]; } return [Math.round(mn), w]; };
const at = (s) => { const { P } = resolve({ ...base, points: { ...base.points, ...(s.points || {}) }, params: { ...base.params, ...(s.params || {}) } }); return mod.isValid(P) ? P : null; };
const D0 = at({}); const samples = (cfg.samples || []).map(s => [s, at(s)]).filter(x => x[1]);
const cur = Object.fromEntries(angs.filter(o => o.radius).map(o => [o.id, o.radius]));
const rep = (R) => { let w = [1e9]; for (const [s, Q] of samples) { const g = minGap(boxes(Q, R, false), Q); const g2 = minGap(boxes(Q, R, true), Q); for (const x of (cfg.noMdrag ? [g] : [g, g2])) if (x[0] < w[0]) w = [x[0], x[1], JSON.stringify(s)]; } return { worst: w, def: minGap(boxes(D0, R, false), D0), defM: minGap(boxes(D0, R, true), D0) }; };
console.log('default valid', !!D0, D0 && mod.readout(D0), 'samples', samples.length, '/', (cfg.samples || []).length, JSON.stringify(rep(cur)));
if (cfg.search) {
  const ids = angs.map(o => o.id); const lo = cfg.lo || 14, hi = cfg.hi || 90; const sub = samples.filter((_, i) => i % (cfg.every || 2) === 0);
  const tie = (R) => { for (const [x, ...ys] of (cfg.tie || [])) for (const y of ys) R[y] = R[x]; return R; };
  const sc = (R) => { tie(R); let w = Math.min(minGap(boxes(D0, R, true), D0)[0], minGap(boxes(D0, R, false), D0)[0]); for (const [, Q] of sub) { w = Math.min(w, minGap(boxes(Q, R, false), Q)[0], cfg.noMdrag ? 1e9 : minGap(boxes(Q, R, true), Q)[0]); if (w < -40) break; } return w; };
  let best = null, bs = -1e9;
  for (let st = 0; st < (cfg.starts || 8); st++) { const L = (id) => (cfg.lim && cfg.lim[id]) || [lo, hi]; let R = Object.fromEntries(ids.map(id => [id, Math.round(L(id)[0] + Math.random() * (L(id)[1] - L(id)[0]))])); let s0 = sc(R);
    for (let it = 0; it < (cfg.iters || 300); it++) { const id = ids[Math.floor(Math.random() * ids.length)]; const R2 = { ...R, [id]: Math.min(L(id)[1], Math.max(L(id)[0], R[id] + Math.round((Math.random() - 0.5) * 20))) }; const s2 = sc(R2); if (s2 >= s0) { R = R2; s0 = s2; } }
    if (s0 > bs) { bs = s0; best = R; } }
  console.log('best', bs, JSON.stringify(best), JSON.stringify(rep(best)));
}
if (cfg.rank) {
  const R = cfg.R || cur; const rows = samples.map(([s, Q]) => { const g = minGap(boxes(Q, R, false), Q), g2 = minGap(boxes(Q, R, true), Q); return [Math.min(g[0], g2[0]), g[0], g[1], g2[0], g2[1], JSON.stringify(s.params || s.points)]; });
  rows.sort((a, b) => b[0] - a[0]); console.log(rows.slice(0, cfg.rank).map(r => r.join('  ')).join('\n'));
}
