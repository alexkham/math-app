# Make the Key Terms block reach the page.
#
#   python kt-render-fix.py --section=trigonometry [--apply]
#
# kt-rendercheck.py found tool pages whose Key Terms section exists in
# sectionsContent and in the table of contents but never renders, in two shapes:
#
#   A. <Sections sections={genericSections.slice(1)}/> - Key Terms is entry 0 of
#      genericSections and is deliberately dropped, because a <KeyTermsCard> was
#      meant to render it above. On these pages the card is commented out, so
#      nothing renders it. Fix: drop the .slice(1).
#   B. genericSections has no key-terms entry at all, though sectionsContent.obj0
#      is the Key Terms block. Fix: prepend the standard entry.
#
# Both are page edits in the page's own idiom. No component is touched.

import io, json, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'trigonometry')
apply = '--apply' in sys.argv
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))

ENTRY = """    {
        id:'key-terms',
        title:sectionsContent.obj0.title,
        link:sectionsContent.obj0.link,
        content:[
          sectionsContent.obj0.content,
        ]
    },
"""


def page_file(v):
    p = v['pagePath']
    return p if p.endswith('.jsx') else 'pages' + p + '/index.jsx'


fixed = 0
for k, v in sorted((k, v) for k, v in REG['tools'].items() if v.get('section') == SECTION):
    path = page_file(v)
    raw = io.open(path, encoding='utf-8', newline='').read()
    live = '\n'.join('' if l.lstrip().startswith('//') else l for l in raw.split('\n'))
    live = re.sub(r'\{/\*.*?\*/\}', '', live, flags=re.S)
    if not re.search(r"obj0\s*:\s*\{\s*\n?\s*title:\s*`Key Terms`", live):
        continue

    i = live.rfind('const genericSections')
    if i < 0:
        continue
    has_entry = bool(re.search(r"id\s*:\s*'key-terms'", live[i:]))
    sl = re.search(r'(<Sections\s+sections=\{genericSections)\.slice\(1\)(\}\s*/>)', raw)

    if has_entry and sl:
        new = raw[:sl.start()] + sl.group(1) + sl.group(2) + raw[sl.end():]
        how = 'A: dropped .slice(1)'
    elif not has_entry:
        # prepend the entry to the LIVE genericSections array
        j = raw.rfind('const genericSections')
        b = raw.index('[', j) + 1
        nl = '\r\n' if '\r\n' in raw[b:b + 200] else '\n'
        body = ENTRY.replace('\n', nl)
        new = raw[:b] + nl + body.rstrip(nl) + raw[b:]
        how = 'B: prepended key-terms entry'
    else:
        continue

    print('%-34s %s' % (k, how))
    fixed += 1
    if apply:
        io.open(path, 'w', encoding='utf-8', newline='').write(new)

print('\n%d page(s) %s' % (fixed, 'FIXED' if apply else 'to fix - DRY RUN'))
