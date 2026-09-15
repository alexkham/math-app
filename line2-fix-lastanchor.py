# Last dead anchor: "least-squares solutions" on the SVD tool page.
#
# It is a formula-kind concept whose name has no anchor on the formulas page,
# and the definitions page has no least_squares entry either - only
# square_matrix matches at all. Neither reference page can receive it.
#
# So it goes to the lesson page for least squares, at the page root, which needs
# no anchor and therefore cannot rot.
#
# DRY RUN by default. --apply writes page + registry.

import io, json, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
KEY = 'linear-algebra-singular-value-decomposition'
TERM = 'least-squares solutions'
NEW = '/linear-algebra/orthogonality/least-squares'

tool = REG['tools'][KEY]
rec = next(t for t in tool['relatedTerms'] if t['term'] == TERM)
L = rec['links'][0]
old_url = L['target']['path'] + ('#' + L['target']['section'] if L['target'].get('section') else '')
old_md = '[%s](!%s)' % (L['surface'], old_url)
new_md = '[%s](!%s)' % (L['surface'], NEW)

src = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
n = src.count(old_md)
print('occurrences of %r on the page: %d' % (old_md, n))
print('  ->', new_md)

if '--apply' in sys.argv and n:
    io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(src.replace(old_md, new_md, 1))
    L['target'] = {'path': NEW, 'section': None}
    L['role'] = 'lesson'
    L['anchorRepaired'] = ('neither the formulas page nor the definitions page has an entry '
                           'for this concept; sent to the least-squares lesson at page root')
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('WRITTEN')
else:
    print('DRY RUN - nothing written.')
