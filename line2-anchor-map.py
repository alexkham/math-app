# Builds a trustworthy formula-name -> anchor map by reading the anchors the
# formulas page ACTUALLY renders, and reports which repository formulaUrl values
# are stale.
#
# Why this is needed: formulasRepository entries carry formulaUrl built from the
# entity ("/linear-algebra/formulas#matrix"), but the rendered page anchors one
# element per FORMULA ("#matrix_subtraction", "#pythagorean_theorem"). There is
# no #matrix on the page at all, so every entity-derived anchor is a dead jump
# that still returns 200 - the page loads, the reader just lands at the top.
#
# Read-only. Writes line2-formula-anchors.json for the write pass to use.

import io, json, re, subprocess, sys, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

html = urllib.request.urlopen('http://localhost:3000/linear-algebra/formulas',
                              timeout=300).read().decode('utf-8', 'replace')
IDS = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', html))

NODE = r'''
import fs from 'fs';
function load(file, varName) {
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/export\s+default\s+\w+\s*;?\s*$/m, '')
           .replace(/module\.exports\s*=\s*\w+\s*;?\s*$/m, '');
  return new Function(src + '\nreturn ' + varName + ';')();
}
const f = load('app/api/db/repositories/formulasRepository.js', 'formulasRepository');
console.log(JSON.stringify(f.filter(x => x.section === 'linear-algebra')
  .map(x => ({name: x.name, entity: x.entity, url: x.formulaUrl}))));
'''
out = subprocess.run(['node', '--input-type=module', '-e', NODE],
                     capture_output=True, text=True, encoding='utf-8')
FORMULAS = json.loads(out.stdout)


def slug(name):
    s = re.sub(r"[^a-z0-9]+", '_', (name or '').lower()).strip('_')
    return s


mapped, unmapped, stale = {}, [], 0
for f in FORMULAS:
    a = slug(f['name'])
    if a in IDS:
        mapped[f['name'].lower()] = '/linear-algebra/formulas#' + a
    else:
        unmapped.append(f['name'])
    cur = (f.get('url') or '').split('#')[-1]
    if cur and cur not in IDS:
        stale += 1

print('linear-algebra formulas          : %d' % len(FORMULAS))
print('names resolving to a real anchor : %d' % len(mapped))
print('names with no matching anchor    : %d' % len(unmapped))
print('repository formulaUrl values that are DEAD anchors: %d of %d' % (stale, len(FORMULAS)))
if unmapped:
    print('\nunmapped sample:', ', '.join(unmapped[:10]))

io.open('line2-formula-anchors.json', 'w', encoding='utf-8').write(
    json.dumps(mapped, ensure_ascii=False, indent=1) + '\n')
print('\nwritten line2-formula-anchors.json (%d entries)' % len(mapped))
