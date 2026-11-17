// score each candidate default by the label check (both modes) with current radii
import { resolve } from './resolver.mjs';
const mod = (await import('./' + process.argv[2])).default; const cfg = JSON.parse(process.argv[3]);
const { execSync } = await import('child_process');
const res = [];
for (const s of cfg.samples) {
  const one = { ...cfg, samples: [s] };
  const m2 = { ...mod.model, params: s.params };
  const { P } = resolve(m2); if (!mod.isValid(P)) continue;
  res.push(s);
}
console.log(res.length);
