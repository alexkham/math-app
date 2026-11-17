import { resolve } from './resolver.mjs';
const mod = (await import('./ma.mjs')).default; const base = mod.model; const VB = mod.viewBox;
const segs = [['A','B'],['B','C'],['C','A'],['A','M'],['A','H']];
const at = (pts) => { const { P } = resolve({ ...base, points: { ...base.points, ...pts } }); return mod.isValid(P) ? P : null; };
const boxes = (P) => { const c = ['A','A','B','C'].map(k => P[k]); const K = { x: c.reduce((s,p)=>s+p.x,0)/4, y: c.reduce((s,p)=>s+p.y,0)/4 }; const out = [];
  for (const k of ['A','B','C','M','H']) { const p = P[k]; const dx = p.x-K.x, dy = p.y-K.y, n = Math.hypot(dx,dy)||1; const x = p.x+dx/n*22, y = p.y+dy/n*22; out.push({ id:k, l:x-7, r:x+7, t:y-11, b:y+11 }); }
  const p = P.A, q = P.H; const m = { x: (p.x+q.x)/2, y: (p.y+q.y)/2 }; const dx = m.x-K.x, dy = m.y-K.y, n = Math.hypot(dx,dy)||1; const x = m.x+dx/n*16, y = m.y+dy/n*16;
  return out; };
const gap = (P) => { const bs = boxes(P); let mn = 1e9, w = '';
  for (let i=0;i<bs.length;i++) for (let j=i+1;j<bs.length;j++){ const a=bs[i],c=bs[j]; const g=Math.max(Math.max(a.l,c.l)-Math.min(a.r,c.r),Math.max(a.t,c.t)-Math.min(a.b,c.b)); if(g<mn){mn=g;w=a.id+'|'+c.id;} }
  for (const a of bs){ const g=Math.min(a.l-VB[0],VB[0]+VB[2]-a.r,a.t-VB[1],VB[1]+VB[3]-a.b); if(g<mn){mn=g;w=a.id+'|frame';}
    for (const [s,t] of segs){ if (a.id===s||a.id===t) continue; const A=P[s],B=P[t]; let d=1e9; for(let k=0;k<=60;k++){const x=A.x+(B.x-A.x)*k/60,y=A.y+(B.y-A.y)*k/60; d=Math.min(d,Math.hypot(Math.max(a.l-x,0,x-a.r),Math.max(a.t-y,0,y-a.b)));} if(d<mn){mn=d;w=a.id+'|'+s+t;} } }
  return [Math.round(mn*10)/10, w]; };
const D0 = at({}); console.log('default', !!D0, D0 && mod.readout(D0), JSON.stringify(D0 && gap(D0)));
if (process.argv[2]) { for (const p of JSON.parse(process.argv[2])) { const P = at(p); console.log(JSON.stringify(p), P ? mod.readout(P) + ' ' + JSON.stringify(gap(P)) : 'invalid'); } process.exit(); }
let worst = [1e9], n = 0, tot = 0;
const Bs = [{x:120,y:320},{x:105,y:320},{x:140,y:320},{x:120,y:300},{x:120,y:338}], Cs = [{x:440,y:320},{x:455,y:320},{x:410,y:320},{x:440,y:300},{x:440,y:338}];
for (const B of Bs) for (const C of Cs) for (let x=100;x<=460;x+=6) for (let y=110;y<=240;y+=6){ tot++; const P = at({A:{x,y},B,C}); if(!P) continue; n++; const g = gap(P); if (g[0] < worst[0]) worst = [...g, JSON.stringify({A:{x,y},B,C})]; }
console.log('valid', n, '/', tot, 'worst', worst.join('  '));
