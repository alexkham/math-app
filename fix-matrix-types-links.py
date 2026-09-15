# Replaces the eight outbound Wikipedia links on the matrix-types tool page with
# the site's own pages.
#
# MatrixGenerator renders explanations[type].link as a "Learn more ->" anchor,
# in the same tab and without rel="nofollow", so each of these was sending the
# reader off the site from the one place they were most engaged. Every one of
# the eight concepts already has a section on /linear-algebra/matrix/types (or,
# for the zero matrix, on /linear-algebra/matrix), so the outbound link is not
# even buying coverage the site lacks.
#
# Only the `link:` values change. Descriptions, properties and every other field
# are untouched, and the commented-out archive at the top of the file is masked
# out so nothing in it is rewritten.
#
# DRY RUN by default. --apply writes.

import io, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
PAGE = 'pages/linear-algebra/visual-tools/matrix-types/index.jsx'

TYPES = 'https://www.learnmathclass.com'  # not used - links are site-relative
MAP = {
    'Identity_matrix':       ('/linear-algebra/matrix/types#2',  'The Identity Matrix'),
    'Zero_matrix':           ('/linear-algebra/matrix#3',        'Matrix Equality and the Zero Matrix'),
    'Scalar_matrix':         ('/linear-algebra/matrix/types#3',  'Diagonal Matrices (a scalar matrix is the equal-entry case)'),
    'Diagonal_matrix':       ('/linear-algebra/matrix/types#3',  'Diagonal Matrices'),
    'Triangular_matrix':     ('/linear-algebra/matrix/types#4',  'Triangular Matrices'),
    'Symmetric_matrix':      ('/linear-algebra/matrix/types#5',  'Symmetric Matrices'),
    'Skew-symmetric_matrix': ('/linear-algebra/matrix/types#6',  'Skew-Symmetric Matrices'),
}


def mask(src):
    """Length-preserving, so offsets still index the original."""
    out = list(src)
    for m in re.finditer(r'^[ \t]*//[^\n]*', src, flags=re.M):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    tmp = ''.join(out)
    for m in re.finditer(r'/\*.*?\*/', tmp, flags=re.S):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    return ''.join(out)


src = io.open(PAGE, encoding='utf-8', newline='').read()
masked = mask(src)

edits = []
for m in re.finditer(r'https://en\.wikipedia\.org/wiki/([A-Za-z\-_]+)', masked):
    slug = m.group(1)
    if slug not in MAP:
        print('  UNMAPPED: %s  (left alone)' % slug)
        continue
    url, where = MAP[slug]
    edits.append((m.start(), m.end(), url))
    print('  %-24s -> %-34s  (%s)' % (slug, url, where))

for a, b, rep in sorted(edits, key=lambda x: -x[0]):
    src = src[:a] + rep + src[b:]

print('\nreplaced %d of %d live Wikipedia links'
      % (len(edits), len(re.findall(r'en\.wikipedia\.org', mask(
          io.open(PAGE, encoding='utf-8', newline='').read())))))

if '--apply' in sys.argv:
    io.open(PAGE, 'w', encoding='utf-8', newline='').write(src)
    print('WRITTEN to %s' % PAGE)
else:
    print('DRY RUN - nothing written.')
