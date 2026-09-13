# Removes the Line 2 links this pass planted into "Related Concepts" sections.
#
# Those sections are structural and reserved for Line 3's tool-to-tool mesh -
# the standing rule is that they stay untouched. The write pass had no exclusion
# for them and planted 25 links there. This unwraps exactly those, leaving the
# surface text as it was, and records the terms as dropped with the reason.
#
# Targets only records written by this pass (method != 'pre-existing') whose
# fromSection names a related-concepts section. DRY RUN unless --apply.

import io, json, re, sys

REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
apply = '--apply' in sys.argv

total = 0
for key, tool in sorted(REG['tools'].items()):
    if tool.get('section') != 'linear-algebra':
        continue
    hits = [t for t in tool['relatedTerms']
            if t['status'] == 'linked'
            and t['links'][0].get('method') != 'pre-existing'
            and 'related' in (t['links'][0].get('fromSection') or '')]
    if not hits:
        continue

    path = tool['pagePath']
    src = io.open(path, encoding='utf-8', newline='').read()
    changed = 0
    for rec in hits:
        link = rec['links'][0]
        tgt = link['target']
        url = tgt['path'] + ('#' + tgt['section'] if tgt.get('section') else '')
        wrapped = '[%s](!%s)' % (link['surface'], url)
        if wrapped not in src:
            print('  MISSING on page, skipped: %s -> %s' % (link['surface'], url))
            continue
        src = src.replace(wrapped, link['surface'], 1)
        changed += 1
        if apply:
            rec['status'] = 'dropped'
            rec['reason'] = ('Related Concepts is a structural section reserved for '
                             'the Line 3 tool-to-tool mesh and stays untouched by '
                             'Line 2. Term is linked elsewhere on the site where it '
                             'occurs in ordinary prose.')
            rec.pop('links', None)
    total += changed
    print('%-46s unwrapped %d' % (key.replace('linear-algebra-', ''), changed))
    if apply and changed:
        io.open(path, 'w', encoding='utf-8', newline='').write(src)

print('-' * 60)
print('TOTAL unwrapped: %d' % total)
if apply:
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('WRITTEN: pages + registry')
else:
    print('DRY RUN - nothing written.')
