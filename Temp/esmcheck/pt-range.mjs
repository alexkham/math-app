import { resolve } from './resolver.mjs';
const mod = (await import('./pt.mjs')).default; const b = mod.model.params, d = Math.PI / 180;
for (const k of Object.keys(b)) { const ok = []; for (let x = -60; x <= 60; x += 1) { const { P } = resolve({ ...mod.model, params: { ...b, [k]: b[k] + x * d } }); if (mod.isValid(P)) ok.push(x); } console.log(k, ok.length ? ok[0] + '..' + ok[ok.length - 1] : 'none'); }
