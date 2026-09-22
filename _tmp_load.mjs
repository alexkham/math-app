
import fs from 'fs';
import path from 'path';

function load(file, varName) {
  let src = fs.readFileSync(file, 'utf8');
  // strip the module tail so the array literal is all that is left
  src = src.replace(/export\s+default\s+\w+\s*;?\s*$/m, '')
           .replace(/module\.exports\s*=\s*\w+\s*;?\s*$/m, '');
  const fn = new Function(src + '\nreturn ' + varName + ';');
  return fn();
}

const defs = load('app/api/db/repositories/definitionsRepository.js', 'definitionsRepository');
const forms = load('app/api/db/repositories/formulasRepository.js', 'formulasRepository');

const out = [];
for (const d of defs) {
  out.push({ kind: 'definition', name: d.name, entity: d.entity, section: d.section,
             defUrl: d.definitionUrl || null,
             contentUrl: (d.link && d.link.url) || null,
             related: (d.relatedDefinitions || []).map(r => r.name) });
}
for (const f of forms) {
  out.push({ kind: 'formula', name: f.name, entity: f.entity, section: f.section,
             defUrl: f.formulaUrl || null,
             contentUrl: (f.link && f.link.url) || null,
             related: (f.relatedDefinitions || []).map(r => r.name) });
}
console.log(JSON.stringify(out));
