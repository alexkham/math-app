# Records planted Operation A units into content-pages-registry.json.
#
# Reads opa-planted.json, a list of planted units accumulated as pages are done,
# and flips the matching relatedTerms entries from `pending` to `linked` with a
# link record carrying the unit description. Terms on a processed page that were
# not planted are dropped with a reason, so the page ends with zero pendings -
# the completeness criterion.
#
# Each planted record:
#   {"page": "vectors/linear-combinations", "entity": "linear_combination",
#    "tool": "vector-linear-combination", "fromSection": "1",
#    "diagrams": ["vectorLinCombDiagrams.add"], "arrangement": "single"}
#
# A page is only closed out (its leftover terms dropped) once it appears in
# opa-planted.json's "done" list, so half-finished pages keep their pendings.
#
# DRY RUN by default. --apply writes.

import io, json, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/content-pages-registry.json'
# --planted=opa-planted-<section>.json selects the pass being recorded; the
# linear-algebra file keys its pages without a section prefix, newer ones
# carry the full key, so PREFIX is empty for those.
PLANTED_PATH = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--planted=')),
                   'opa-planted.json')
TODAY = datetime.date.today().isoformat()

def drop_reason(term):
    """Why a mapped term did not earn a backlink on a processed page.

    The bar is demonstration value, not treatment: most terms appear as ordinary
    vocabulary inside prose about something else, and a live demo of them would
    interrupt rather than help. Density also binds - at most one unit per
    section - so a term can be a fine candidate and still lose its slot to a
    better one in the same section.
    """
    n = len(term.get('sections') or [])
    if n > 2:
        return ('Runs through %d sections as ordinary vocabulary rather than being '
                'demonstrated in any one of them; a unit would interrupt the '
                'argument instead of carrying it.' % n)
    return ('Passing mention - the section uses the term but does not engage the '
            'concept in a way a live demonstration would enhance.')


reg = json.load(io.open(REG_PATH, encoding='utf-8'))
reg_sections = {k.split('/')[0] for k in reg['pages']}
data = json.load(io.open(PLANTED_PATH, encoding='utf-8'))
units = data['units']
done_pages = set(data['done'])

by_page = collections.defaultdict(list)
for u in units:
    by_page[u['page']].append(u)

apply = '--apply' in sys.argv
tot_linked = tot_dropped = 0

for page in sorted(done_pages):
    key = page if page.count('/') and page.split('/')[0] in reg_sections else 'linear-algebra/' + page
    entry = reg['pages'].get(key)
    if not entry:
        print('  MISSING registry entry:', key)
        continue
    planted = {u['entity']: u for u in by_page.get(page, [])}
    nl = nd = 0
    for term in entry['relatedTerms']:
        if term['status'] != 'pending':
            continue
        u = planted.get(term['entity'])
        if u:
            nl += 1
            if apply:
                term['status'] = 'linked'
                term['links'] = [{
                    'fromSection': u['fromSection'],
                    'tool': u['tool'],
                    'target': {'path': '/linear-algebra/visual-tools/' + u['tool'],
                               'section': None},
                    'unit': None if u.get('linkOnly') else {
                        'diagrams': u['diagrams'],
                        'arrangement': u['arrangement'],
                        'newStates': u.get('newStates', []),
                    },
                    'added': TODAY,
                }]
                term.pop('candidateTools', None)
        else:
            nd += 1
            if apply:
                term['status'] = 'dropped'
                term['reason'] = drop_reason(term)
                term.pop('candidateTools', None)
    tot_linked += nl; tot_dropped += nd
    print('%-46s linked %2d   dropped %3d' % (page, nl, nd))

print('-' * 72)
print('pages closed: %d   units linked: %d   terms dropped: %d'
      % (len(done_pages), tot_linked, tot_dropped))

if apply:
    reg['$meta'].setdefault('operationA', {})['linearAlgebraLinked'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(reg, ensure_ascii=False, indent=2) + '\n')
    print('WRITTEN to %s' % REG_PATH)
else:
    print('DRY RUN - nothing written.')
