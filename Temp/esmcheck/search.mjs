import { resolve } from './resolver.mjs';
import { angleGeom } from './math.mjs';
import P0 from './ie.mjs';
const base = P0.model;
const ids = ['a1','a2','mB','b1','b2','tB','tI'];
const objs = Object.fromEntries(base.objects.filter(o => ids.includes(o.id)).map(o => [o.id, o]));
function boxes(P, R, measures) {
  return ids.map(id => { const o = objs[id]; const v = P[o.at], p1 = P[o.from], p2 = P[o.to];
    const { a1, d } = angleGeom(v, p1, p2); const m = a1 + d / 2; const lr = R[id] + (measures ? 24 : 15);
    const deg = Math.round(Math.abs(d) * 180 / Math.PI);
    const txt = measures ? `${o.label} ${deg}°` : o.label; const w = 9 * [...txt].length, h = 20;
    const x = v.x + lr * Math.cos(m), y = v.y + lr * Math.sin(m);
    return { id, l: x - w / 2, r: x + w / 2, t: y - h / 2, b: y + h / 2 }; });
}
function minGap(bs) { let mn = 1e9, w = ''; for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i], c = bs[j];
  const g = Math.max(Math.max(a.l, c.l) - Math.min(a.r, c.r), Math.max(a.t, c.t) - Math.min(a.b, c.b)); if (g < mn) { mn = g; w = a.id + '|' + c.id; } } return [mn, w]; }
const at = (pr) => { const { P } = resolve({ ...base, params: { ...base.params, ...pr } }); return P0.isValid(P) ? P : null; };
const samples = [];
for (let da = -0.4; da <= 0.41; da += 0.1) for (let db = -0.3; db <= 0.31; db += 0.1) for (let dc = -0.3; dc <= 0.31; dc += 0.1) {
  const pr = { ta: base.params.ta + da, tb: base.params.tb + db, tc: base.params.tc + dc }; const P = at(pr); if (P) samples.push([pr, P]); }
const P = at({});
const cur = Object.fromEntries(ids.map(id => [id, objs[id].radius]));
const show = (R) => { let worst = [1e9, '', null]; for (const [pr, Q] of samples) { const g = minGap(boxes(Q, R, false)); if (g[0] < worst[0]) worst = [g[0], g[1], pr]; }
  return { def: minGap(boxes(P, R, false)), defM: minGap(boxes(P, R, true)), worstDrag: [Math.round(worst[0]), worst[1], worst[2] && Object.values(worst[2]).map(x => x.toFixed(2)).join(',')] }; };
console.log('samples', samples.length, 'current', JSON.stringify(show(cur)));
const tryR = JSON.parse(process.argv[2] || 'null'); if (tryR) console.log('try', JSON.stringify(show({ ...cur, ...tryR })));
if (process.argv[3] === 'search') {
  const rng = { a1: [40, 90], a2: [40, 90], mB: [28, 60], b1: [28, 60], b2: [28, 60], tB: [50, 120], tI: [16, 44] };
  const sub = samples.filter((_, i) => i % 3 === 0);
  const score = (R) => { let w = 1e9; for (const [, Q] of sub) w = Math.min(w, minGap(boxes(Q, R, false))[0]); return Math.min(w, minGap(boxes(P, R, false))[0], minGap(boxes(P, R, true))[0]); };
  let best = null, bs = -1e9;
  for (let k = 0; k < 6000; k++) { const R = Object.fromEntries(Object.entries(rng).map(([id, [a, b]]) => [id, Math.round(a + Math.random() * (b - a))])); const s = score(R); if (s > bs) { bs = s; best = R; } }
  console.log('best', Math.round(bs), JSON.stringify(best), JSON.stringify(show(best)));
}
