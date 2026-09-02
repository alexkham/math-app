# Line 2 prereq: build the concept index once, from the definitions and formulas
# repositories, and cache it as JSON for the per-tool passes.
#
# Both repos are .js files exporting an array literal, so they are parsed by
# running them through node rather than by regex.
#
# Index shape, per lowercased surface form:
#   { key: [ {entity, name, section, defUrl, contentUrl, kind} ] }
# A surface form mapping to more than one ENTITY is dropped as ambiguous, per
# the doc ("Drop any variant that would map to two entries").

import io, json, re, subprocess, sys

OUT = 'line2-concept-index.json'

NODE = r'''
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
'''

io.open('_tmp_load.mjs', 'w', encoding='utf-8').write(NODE)
r = subprocess.run(['node', '_tmp_load.mjs'], capture_output=True, text=True, encoding='utf-8')
if r.returncode != 0:
    print(r.stderr[-3000:], file=sys.stderr)
    sys.exit(1)
entries = json.loads(r.stdout)
print('repository entries loaded:', len(entries))


def variants(name):
    """Surface forms for a term: the name, and simple plural/singular pairs."""
    n = name.strip().lower()
    if not n:
        return []
    out = {n}
    if n.endswith('ies') and len(n) > 4:
        out.add(n[:-3] + 'y')
    elif n.endswith('es') and len(n) > 3:
        out.add(n[:-2])
        out.add(n[:-1])
    elif n.endswith('s') and len(n) > 3:
        out.add(n[:-1])
    else:
        out.add(n + 's')
        if n.endswith('y'):
            out.add(n[:-1] + 'ies')
    return sorted(out)


# Own-name matches and related-name matches are indexed SEPARATELY. A term that
# is some entry's own name belongs to that entry, full stop - folding the two
# together made "equation" ambiguous against every entry listing Equation as a
# related definition, which dropped most of the terms worth linking.
primary, secondary = {}, {}
for e in entries:
    for v in variants(e['name']):
        primary.setdefault(v, []).append(e)
    for rel in e.get('related', []):
        for v in variants(rel):
            secondary.setdefault(v, []).append(e)

ambiguous, short = [], []
clean = {}
for k in set(primary) | set(secondary):
    if len(k) < 4:
        short.append(k)
        continue
    hits = primary.get(k) or secondary.get(k)
    ents = {h['entity'] for h in hits}
    if len(ents) > 1:
        # a definition and a formula sharing one entity name is not ambiguous
        defs_only = [h for h in hits if h['kind'] == 'definition']
        if len({h['entity'] for h in defs_only}) == 1:
            hits = defs_only
        else:
            ambiguous.append((k, sorted(ents)[:4]))
            continue
    # Keep EVERY candidate, grouped by section. The registry contract says a
    # tool links its own section by default and crosses sections only when
    # topical, so the scanner needs the per-section options - collapsing to one
    # global winner sent "Pythagorean theorem" on a trigonometry page to a
    # linear-algebra inner-product URL.
    best = next((h for h in hits if h['kind'] == 'definition'), hits[0])
    by_section = {}
    for h in hits:
        by_section.setdefault(h['section'], h)
    clean[k] = {**best, 'bySection': by_section}

print('surface forms kept   :', len(clean))
print('dropped as ambiguous :', len(ambiguous))
print('dropped as too short :', len(short))
print('\nsample ambiguous:', ambiguous[:8])

json.dump(clean, io.open(OUT, 'w', encoding='utf-8'), indent=0, ensure_ascii=False)
print('\nwrote', OUT)

# how many entries actually have a real content page to point at?
withcontent = sum(1 for v in clean.values() if v['contentUrl'])
withdef = sum(1 for v in clean.values() if v['defUrl'])
print('forms whose entry has a content-page URL:', withcontent)
print('forms whose entry has a definitions URL :', withdef)
