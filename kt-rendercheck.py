# Does the Key Terms block actually RENDER on each tool page?
#
#   python kt-rendercheck.py --section=trigonometry
#
# A Key Terms section can exist in sectionsContent, be listed in the table of
# contents, and still never reach the page: several tool pages comment out
# <KeyTermsCard> and render <Sections sections={genericSections.slice(1)}/>,
# which drops index 0 - the Key Terms entry. Every link planted in that block is
# then invisible to readers and to crawlers.
#
# Structural detection is unreliable (the slice index and the card placement
# vary), so this checks the dev server's SERVER-RENDERED HTML: a distinctive
# phrase from the first key term's gloss must appear outside __NEXT_DATA__.

import io, json, re, sys, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'trigonometry')
BASE = 'http://localhost:3000'
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))

KT = re.compile(r"title:\s*`Key Terms`[\s\S]{0,200}?content:\s*`((?:[^`\\]|\\.)*)`")
GLOSS = re.compile(r"(?:—|&mdash;)\s*([A-Za-z][A-Za-z ,'-]{35,70})")


def page_file(v):
    p = v['pagePath']
    return p if p.endswith('.jsx') else 'pages' + p + '/index.jsx'


def page_url(v):
    p = v['pagePath']
    return p if not p.startswith('pages/') else '/' + p[len('pages/'):-len('/index.jsx')]


rendered, hidden, noprobe, nokt = [], [], [], []
for k, v in sorted((k, v) for k, v in REG['tools'].items() if v.get('section') == SECTION):
    src = io.open(page_file(v), encoding='utf-8').read()
    live = '\n'.join('' if l.lstrip().startswith('//') else l for l in src.split('\n'))
    m = KT.search(live)
    if not m:
        nokt.append(k)
        continue
    g = GLOSS.search(m.group(1))
    if not g:
        noprobe.append(k)
        continue
    probe = g.group(1).strip()
    try:
        html = urllib.request.urlopen(BASE + page_url(v), timeout=120).read().decode('utf-8', 'replace')
    except Exception as ex:
        print('  ERROR %-34s %s' % (k, ex))
        continue
    cut = html.find('__NEXT_DATA__')
    visible = html[:cut] if cut > 0 else html
    (rendered if probe in visible else hidden).append(k)

print('%s: %d tool pages have a Key Terms block' % (SECTION, len(rendered) + len(hidden) + len(noprobe)))
print('  rendered      : %d' % len(rendered))
print('  NOT RENDERED  : %d' % len(hidden))
for k in hidden:
    print('      ' + k)
if noprobe:
    print('  no usable probe: %s' % ', '.join(noprobe))
if nokt:
    print('  no Key Terms block: %s' % ', '.join(nokt))
