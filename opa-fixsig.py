# One-off repair: the first run of opa-plant.py appended ", demoUnits" after a
# component signature that already ended in a trailing comma, producing
#
#     schemas,
#     , demoUnits}) {
#
# which is a syntax error. This rewrites that exact shape to a valid signature.
# Idempotent: pages already correct are left alone.

import io, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

PAGES = [
    'vectors', 'vectors/basic-operations', 'vectors/cross-product',
    'vectors/dot-product', 'vectors/magnitude', 'vectors/properties',
]

BAD = re.compile(r',(\s*\n\s*),\s*demoUnits\}\)')

apply = '--apply' in sys.argv
for slug in PAGES:
    path = 'pages/linear-algebra/%s/index.jsx' % slug
    src = io.open(path, encoding='utf-8', newline='').read()
    new, n = BAD.subn(lambda m: ',' + m.group(1) + 'demoUnits})', src)
    print('%-34s %s' % (slug, 'fixed %d' % n if n else 'already clean'))
    if apply and n:
        io.open(path, 'w', encoding='utf-8', newline='').write(new)

print('\n%s' % ('WRITTEN' if apply else 'DRY RUN - nothing written.'))
