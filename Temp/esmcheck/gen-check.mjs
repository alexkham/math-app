// generic name check: node gen-check.mjs <module> <names csv> [samples json file]  — point names + sideLabels vs each other, segments, frame
import { resolve } from './resolver.mjs';
import fs from 'fs';
const mod = (await import('./' + process.argv[2])).default; const base = mod.model; const VB = mod.viewBox; const names = process.argv[3].split(',');
const segs = base.objects.filter(o => o.type === 'segment' || o.type === 'line').map(o => o.of);
const sls = base.objects.filter(o => o.type === 'sideLabel');
const at = (s) => { const { P } = resolve({ ...base, points: { ...base.points, ...(s.points || {}) }, params: { ...base.params, ...(s.params || {}) } }); return mod.isValid(P) ? P : null; };
const boxes = (P) => { const c = mod.labelCenter.map(k => P[k]); const K = { x: c.reduce((s, p) => s + p.x, 0) / c.length, y: c.reduce((s, p) => s + p.y, 0) / c.length }; const out = [];
  for (const k of names) { const p = P[k]; const dx = p.x - K.x, dy = p.y - K.y, n = Math.hypot(dx, dy) || 1; const x = p.x + dx / n * 22, y = p.y + dy / n * 22; out.push({ id: k, l: x - 7, r: x + 7, t: y - 11, b: y + 11 }); }
  for (const o of sls) { const p = P[o.of[0]], q = P[o.of[1]]; const m = { x: (p.x + q.x) / 2, y: (p.y + q.y) / 2 }; let n; if (o.side) { const L = Math.hypot(q.x - p.x, q.y - p.y); const u = { x: (q.x - p.x) / L, y: (q.y - p.y) / L }; n = { x: u.y * o.side, y: -u.x * o.side }; } else { const dx = m.x - K.x, dy = m.y - K.y, L = Math.hypot(dx, dy) || 1; n = { x: dx / L, y: dy / L }; } const off = o.offset || 16; const x = m.x + n.x * off, y = m.y + n.y * off; out.push({ id: o.text, seg: o.of, l: x - 6, r: x + 6, t: y - 10, b: y + 10 }); }
  return out; };
const gap = (P) => { const bs = boxes(P); let mn = 1e9, w = '';
  for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) { const a = bs[i], c = bs[j]; const g = Math.max(Math.max(a.l, c.l) - Math.min(a.r, c.r), Math.max(a.t, c.t) - Math.min(a.b, c.b)); if (g < mn) { mn = g; w = a.id + '|' + c.id; } }
  for (const a of bs) { const g = Math.min(a.l - VB[0], VB[0] + VB[2] - a.r, a.t - VB[1], VB[1] + VB[3] - a.b); if (g < mn) { mn = g; w = a.id + '|frame'; }
    for (const [s, t] of segs) { if (a.id === s || a.id === t) continue; const A = P[s], B = P[t]; let d = 1e9; for (let k = 0; k <= 60; k++) { const x = A.x + (B.x - A.x) * k / 60, y = A.y + (B.y - A.y) * k / 60; d = Math.min(d, Math.hypot(Math.max(a.l - x, 0, x - a.r), Math.max(a.t - y, 0, y - a.b))); } if (d < mn) { mn = d; w = a.id + '|' + s + t; } } }
  return [Math.round(mn * 10) / 10, w]; };
const D0 = at({}); console.log('default', !!D0, D0 && mod.readout(D0), JSON.stringify(D0 && gap(D0)));
if (process.argv[4]) { const S = JSON.parse(fs.readFileSync(process.argv[4], 'utf8')); let worst = [1e9], n = 0; const rows = [];
  for (const s of S) { const P = at(s); if (!P) continue; n++; const g = gap(P); rows.push([g[0], g[1], JSON.stringify(s)]); if (g[0] < worst[0]) worst = [...g, JSON.stringify(s)]; }
  console.log('valid', n, '/', S.length, 'worst', worst.join('  ')); if (process.argv[5]) { rows.sort((a, b) => b[0] - a[0]); console.log(rows.slice(0, +process.argv[5]).map(r => r.join('  ')).join('\n')); } }
