# Verifies every Line 2 link anchor actually exists on its destination page.
#
# A dead anchor still returns 200 - the page loads and the reader lands at the
# top instead of at the concept - so a status check alone cannot catch it. This
# fetches each destination once, collects its rendered element ids, and checks
# every anchor against them.
#
# Read-only.

import io, json, re, sys, collections, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
# Section is a flag: python line2-anchor-verify.py [--section=trigonometry|all]
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'linear-algebra')
LA = {k: v for k, v in REG['tools'].items()
      if SECTION == 'all' or v.get('section') == SECTION}
BASE = 'http://localhost:3000'

links = []
for k, v in sorted(LA.items()):
    for t in v['relatedTerms']:
        if t['status'] != 'linked':
            continue
        for L in t['links']:
            links.append((k.replace('linear-algebra-', ''), t['term'], L))

pages = sorted({L['target']['path'] for _, _, L in links})
ids, status = {}, {}
for p in pages:
    try:
        r = urllib.request.urlopen(BASE + p, timeout=300)
        html = r.read().decode('utf-8', 'replace')
        status[p] = r.status
        ids[p] = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', html))
    except Exception as e:
        status[p] = getattr(e, 'code', 'ERR')
        ids[p] = set()

bad_page = [(p, c) for p, c in status.items() if c != 200]
dead, ok, noanchor = [], 0, 0
for tool, term, L in links:
    tg = L['target']
    a = tg.get('section')
    if not a:
        noanchor += 1
        continue
    if a in ids.get(tg['path'], set()):
        ok += 1
    else:
        dead.append((tool, term, tg['path'] + '#' + a))

print('link records            : %d' % len(links))
print('destination pages       : %d   non-200: %d' % (len(pages), len(bad_page)))
for b in bad_page:
    print('    ', b)
print('anchors verified present: %d' % ok)
print('links with no anchor    : %d  (page root - always fine)' % noanchor)
print('DEAD anchors            : %d' % len(dead))
by = collections.Counter(d[2].split('#')[0] for d in dead)
for p, c in by.most_common():
    print('    %-44s %d' % (p, c))
for d in dead[:25]:
    print('    %-28s %-26s %s' % d)
