# Repairs link labels that swallowed inline maths.
#
# kt-lessons.py linked whole Key Terms heads, and some heads carry maths:
# "Column space $C(A)$", "Rank $r$". That produced [Column space $C(A)$](!url),
# and maths inside a link label is forbidden - processContent does not render it
# as maths there.
#
# The fix keeps the link on the words and pushes the maths back outside it:
#   [Column space $C(A)$](!url)  ->  [Column space](!url) $C(A)$
#
# DRY RUN by default. --apply writes pages + registry.

import io, json, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

BAD = re.compile(r'\[([^\]\n]*\$[^\]\n]*)\]\(!([^)\n]+)\)')

apply = '--apply' in sys.argv
fixed = 0
for key in sorted(LA):
    tool = LA[key]
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    out = raw
    for m in list(BAD.finditer(raw)):
        label, url = m.group(1), m.group(2)
        # Keep the maths where it was relative to the words: "$\Sigma$ notation"
        # must not become "notation $\Sigma$".
        lead = re.match(r'\s*((?:\$[^$]*\$\s*)+)', label)
        trail = re.search(r'((?:\s*\$[^$]*\$)+)\s*$', label)
        pre = lead.group(1).strip() if lead else ''
        post = trail.group(1).strip() if trail else ''
        words = label
        if pre:
            words = words[lead.end(1):]
        if post:
            words = words[:trail.start(1)]
        words = re.sub(r'\$[^$]*\$', '', words)
        words = re.sub(r'\s+', ' ', words).strip(' -–—')
        if not words:
            continue
        new = '%s[%s](!%s)%s' % (pre + ' ' if pre else '', words, url,
                                 ' ' + post if post else '')
        out = out.replace(m.group(0), new, 1)
        fixed += 1
        print('  %-30s [%s]  ->  %s' % (key.replace('linear-algebra-', ''),
                                        label[:32], new[:60]))
        if apply:
            for t in tool['relatedTerms']:
                for L in t.get('links', []):
                    if L.get('surface') == label:
                        L['surface'] = words
                        L['labelRepaired'] = 'inline maths moved outside the link label'
    if apply and out != raw:
        io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(out)

print('\nlabels repaired: %d' % fixed)
if apply:
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('WRITTEN')
else:
    print('DRY RUN - nothing written.')
