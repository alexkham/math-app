# Post-write verification for the Line 2 linear-algebra pass.
# Read-only: resolves every destination and greps for malformed link shapes.

import io, json, re, sys, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = [k for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra']


def live(src):
    src = '\n'.join('' if l.lstrip().startswith('//') else l for l in src.split('\n'))
    return re.sub(r'/\*.*?\*/', '', src, flags=re.S)


targets = set()
for k in LA:
    for t in REG['tools'][k]['relatedTerms']:
        if t['status'] == 'linked':
            targets.add(t['links'][0]['target']['path'])

bad = []
for u in sorted(targets):
    try:
        code = urllib.request.urlopen('http://localhost:3000' + u, timeout=150).status
    except Exception as e:
        code = getattr(e, 'code', 'ERR')
    if code != 200:
        bad.append((u, code))
print('unique lesson destinations: %d   non-200: %d' % (len(targets), len(bad)))
for b in bad:
    print('   BROKEN', b)

BOLD_LINK = re.compile(r'\*\*\[[^\]]*\]\(![^)]*\)\*\*')
MATH_LABEL = re.compile(r'\[[^\]]*\$[^\]]*\]\(![^)]*\)')
NESTED = re.compile(r'\[[^\]]*\[[^\]]*\]\([^)]*\)\]')
NO_BANG = re.compile(r'\]\((/linear-algebra/[a-z0-9\-/#]*)\)')

bl = ml = ne = nb = 0
for k in LA:
    src = live(io.open(REG['tools'][k]['pagePath'], encoding='utf-8').read())
    bl += len(BOLD_LINK.findall(src))
    ml += len(MATH_LABEL.findall(src))
    ne += len(NESTED.findall(src))
    nb += len(NO_BANG.findall(src))
print('bold+link: %d   math inside label: %d   nested: %d   missing ! prefix: %d'
      % (bl, ml, ne, nb))
