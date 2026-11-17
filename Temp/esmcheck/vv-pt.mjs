import { resolve } from './resolver.mjs';
const mod = (await import('./vv.mjs')).default; const base = mod.model; const VB = mod.viewBox;
const segs = [['A','B'],['B','C'],['C','A'],['P','D'],['P','E'],['P','F'],['Bh','Ch'],['C','Ch']];
const at = (pts) => { const { P } = resolve({ ...base, points: { ...base.points, ...pts } }); return mod.isValid(P) ? P : null; };
const boxes = (P) => { const K = P.K, out = [];
  for (const k of ['A','B','C','P','D','E','F']) { const p = P[k]; const dx = p.x-K.x, dy = p.y-K.y, n = Math.hypot(dx,dy)||1; const x = p.x+dx/n*22, y = p.y+dy/n*22; out.push({ id:k, l:x-7, r:x+7, t:y-11, b:y+11 }); }
  const p = P.Bh, q = P.Ch; const L = Math.hypot(q.x-p.x,q.y-p.y); const u = {x:(q.x-p.x)/L,y:(q.y-p.y)/L}; const n = {x:u.y*-1,y:-u.x*-1}; const m = {x:(p.x+q.x)/2+n.x*16,y:(p.y+q.y)/2+n.y*16};
  out.push({ id:'h', l:m.x-7, r:m.x+7, t:m.y-11, b:m.y+11 }); return out; };
const gap = (P) => { const bs = boxes(P); let mn = 1e9, w = '';
  for (let i=0;i<bs.length;i++) for (let j=i+1;j<bs.length;j++){ const a=bs[i],c=bs[j]; const g=Math.max(Math.max(a.l,c.l)-Math.min(a.r,c.r),Math.max(a.t,c.t)-Math.min(a.b,c.b)); if(g<mn){mn=g;w=a.id+'|'+c.id;} }
  for (const a of bs){ const g=Math.min(a.l-VB[0],VB[0]+VB[2]-a.r,a.t-VB[1],VB[1]+VB[3]-a.b); if(g<mn){mn=g;w=a.id+'|frame';}
    for (const [s,t] of segs){ if (a.id===s||a.id===t) continue; const A=P[s],B=P[t]; let d=1e9; for(let k=0;k<=60;k++){const x=A.x+(B.x-A.x)*k/60,y=A.y+(B.y-A.y)*k/60; d=Math.min(d,Math.hypot(Math.max(a.l-x,0,x-a.r),Math.max(a.t-y,0,y-a.b)));} if(d<mn){mn=d;w=a.id+'|'+s+t;} } }
  return [Math.round(mn*10)/10, w]; };
for (const p of JSON.parse(process.argv[2])) { const P = at(p); console.log(JSON.stringify(p), P ? mod.readout(P)+'  '+JSON.stringify(gap(P)) : 'invalid'); }