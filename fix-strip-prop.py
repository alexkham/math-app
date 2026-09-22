# Repair strip wiring that landed in the wrong props object.
#
#   python fix-strip-prop.py [--apply]
#
# line3-write.wire_strip anchored on the FIRST `props: {` in the file. On most
# pages that is getStaticProps' return value. On pages that build a tab strip in
# JSX (the three matrix-multiplication picture tools) the first `props: {` is a
# CHILD COMPONENT's props, so `relatedTools: getRelatedTools(...)` was injected
# into the client render path - wrong place, and getRelatedTools is server-only
# because it imports the 370 KB registry.
#
# This moves the injected line out of the JSX props object and into the props
# object that getStaticProps actually returns.

import io, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
apply = '--apply' in sys.argv

PAGES = [
    'pages/linear-algebra/visual-tools/matrix-multiplication-columns/index.jsx',
    'pages/linear-algebra/visual-tools/matrix-multiplication-rows/index.jsx',
    'pages/linear-algebra/visual-tools/matrix-multiplication-rows-columns/index.jsx',
]

for p in PAGES:
    raw = io.open(p, encoding='utf-8', newline='').read()
    m = re.search(r'[ \t]*\n?[ \t]*relatedTools: getRelatedTools\((\'[^\']+\')\),[ \t]*', raw)
    if not m:
        print('%-70s no injected line found' % p)
        continue
    key = m.group(1)
    cleaned = raw[:m.start()] + raw[m.end():]

    gsp = re.search(r'export async function getStaticProps', cleaned)
    if not gsp:
        print('%-70s NO getStaticProps' % p)
        continue
    ret = re.search(r'return\s*\{\s*\n(\s*)props\s*:\s*\{', cleaned[gsp.end():])
    if not ret:
        print('%-70s NO return props in getStaticProps' % p)
        continue
    at = gsp.end() + ret.end()
    indent = ret.group(1) + '  '
    nl = '\r\n' if '\r\n' in cleaned[:2000] else '\n'
    new = cleaned[:at] + nl + indent + 'relatedTools: getRelatedTools(%s),' % key + cleaned[at:]
    print('%-70s moved into getStaticProps' % p)
    if apply:
        io.open(p, 'w', encoding='utf-8', newline='').write(new)

print('\n%s' % ('WRITTEN' if apply else 'DRY RUN - nothing written.'))
