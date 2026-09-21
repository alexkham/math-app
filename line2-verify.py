# Post-write verification for a Line 2 pass.
#
#   python line2-verify.py --section=trigonometry   (default: linear-algebra)
# Read-only: resolves every destination and greps for malformed link shapes.

import io, json, re, sys, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'linear-algebra')
LA = [k for k, v in REG['tools'].items() if v.get('section') == SECTION]


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

BOLD_LINK = re.compile(r'\*\*\[[^\]\n]*\]\(![^)\n]*\)\*\*')
# A label must not contain maths. Two traps this pattern avoids:
#   * it is line-scoped ([^\]\n]) - the old cross-line version matched from a
#     '[' many lines earlier all the way to a later link;
#   * maths regions are BLANKED before the scan (see mask_math), because an
#     interval such as $[0, 360)$ sitting just before a real link otherwise
#     looks exactly like a label full of maths. Both false positives were the
#     entire 'math inside label' count on three sections.
MATH_LABEL = re.compile(r'\[[^\]\n]*\$[^\]\n]*\]\(![^)\n]*\)')


def mask_math(text):
    out = list(text)
    for pat in (re.compile(r'\$\$.*?\$\$', re.S), re.compile(r'\$[^$\n]*\$'),
                re.compile(r'`[^`\n]*`')):
        for m in pat.finditer(text):
            for i in range(m.start(), m.end()):
                out[i] = '\x00'
    return ''.join(out)
NESTED = re.compile(r'\[[^\]]*\[[^\]]*\]\([^)]*\)\]')
NO_BANG = re.compile(r'\]\((/' + re.escape(SECTION) + r'/[a-z0-9\-/#]*)\)')

bl = ml = ne = nb = 0
for k in LA:
    pp = REG['tools'][k]['pagePath']
    pp = pp if pp.endswith('.jsx') else 'pages' + pp + '/index.jsx'
    src = live(io.open(pp, encoding='utf-8').read())
    src = mask_math(src)
    bl += len(BOLD_LINK.findall(src))
    ml += len(MATH_LABEL.findall(src))
    ne += len(NESTED.findall(src))
    nb += len(NO_BANG.findall(src))
print('bold+link: %d   math inside label: %d   nested: %d   missing ! prefix: %d'
      % (bl, ml, ne, nb))
