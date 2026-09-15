# Reverts the one bad Key Terms link: "$\Sigma$ notation" on matrix-trace.
#
# The lessons pass matched the bare word "notation" against a section title and
# sent it to /linear-algebra/vectors#2, which is about vector notation and has
# nothing to do with summation. Checked for a better destination and there is
# none: /math-symbols renders no anchors at all, and no lesson section covers
# sigma notation.
#
# So the head goes back to being plain bold, like the other 141 page-local
# scaffolding terms. A wrong link is worse than no link.
#
# DRY RUN by default. --apply writes page + registry.

import io, json, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
KEY = 'linear-algebra-matrix-trace'
BAD = '[notation](!/linear-algebra/vectors#2)'
GOOD = '**notation**'

tool = REG['tools'][KEY]
src = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
n = src.count(BAD)
print('occurrences on page: %d' % n)

# the head reads "$\Sigma$ [notation](!...) —"; restoring bold keeps it a head
before = src.find(BAD)
if before >= 0:
    print('context: %s' % ' '.join(src[max(0, before - 30):before + len(BAD) + 40].split()))

removed = 0
if '--apply' in sys.argv and n:
    io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(src.replace(BAD, GOOD, 1))
    keep = []
    for t in tool['relatedTerms']:
        drop = False
        for L in t.get('links', []):
            if (L.get('surface') == 'notation'
                    and L.get('target', {}).get('path') == '/linear-algebra/vectors'):
                drop = True
        if drop and t.get('method') != 'scan' and len(t.get('links', [])) == 1:
            removed += 1
            continue
        keep.append(t)
    tool['relatedTerms'] = keep
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('registry records removed: %d' % removed)
    print('WRITTEN')
else:
    print('DRY RUN - nothing written.')
