# Read-only helper for Operation A Stage 2: print a content page's live section
# prose so units can be authored against what the section actually says.
#
#   python opa-read.py <section>/<page-slug> [objKey ...]
#   e.g. python opa-read.py linear-algebra/vectors/linear-combinations obj2 obj3
#
# The slug carries its own section now; it used to be hardcoded to
# linear-algebra, which silently pointed every other section at a missing file.

import io, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?title\s*:\s*`([^`]*)`\s*,\s*content\s*:\s*`((?:[^`\\]|\\.)*)`")


def live(src):
    src = '\n'.join('' if l.lstrip().startswith('//') else l for l in src.split('\n'))
    return re.sub(r'/\*.*?\*/', '', src, flags=re.S)


slug = sys.argv[1]
want = set(sys.argv[2:])
path = 'pages/%s/index.jsx' % slug
src = live(io.open(path, encoding='utf-8').read())

for m in CONTENT.finditer(src):
    key, title, body = m.group(1), m.group(2), m.group(3)
    if want and key not in want:
        continue
    print('=' * 78)
    print('%s  |  %s   (%d chars)' % (key, title, len(body)))
    print('=' * 78)
    print(body if want else body[:400] + ('...' if len(body) > 400 else ''))
    print()
