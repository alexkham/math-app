# Structural probe for Operation A Stage 1 on the linear-algebra content pages.
# Read-only. Reports whether each page's sectionsContent and section-id wiring
# can be extracted, so the mapper is not written against guesswork.

import io, os, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")


def mask_comments(src):
    out = list(src)
    for m in re.finditer(r'^[ \t]*//[^\n]*', src, flags=re.M):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    tmp = ''.join(out)
    for m in re.finditer(r'/\*.*?\*/', tmp, flags=re.S):
        for i in range(m.start(), m.end()):
            out[i] = '\x00'
    return ''.join(out)


def sections_content(masked):
    blocks = {}
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", masked):
        tail = m.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", masked[tail:])
        end = tail + (stop.start() if stop else len(masked) - tail)
        for c in CONTENT.finditer(masked, tail, end):
            blocks.setdefault(c.group(1), c.group(2))
    return blocks


def titles(masked):
    out = {}
    for m in re.finditer(r"\n\s*(\w+)\s*:\s*\{\s*\n?\s*title\s*:\s*`([^`]*)`", masked):
        out.setdefault(m.group(1), m.group(2))
    return out


def section_ids(masked):
    """The rendered section list: id + which sectionsContent key feeds it."""
    rows = []
    for m in re.finditer(r"id\s*:\s*[`'\"]([^`'\"]+)[`'\"]", masked):
        window = masked[m.end():m.end() + 400]
        k = re.search(r"sectionsContent(?:\.(\w+)|\[\s*'(\w+)'\s*\])", window)
        rows.append((m.group(1), (k.group(1) or k.group(2)) if k else None))
    return rows


pages = []
for root, dirs, files in os.walk('pages/linear-algebra'):
    dirs[:] = [d for d in dirs if d not in ('visual-tools', 'calculators')]
    if 'index.jsx' in files:
        rel = root.replace(os.sep, '/')
        if rel.endswith('/visual-tools') or '/visual-tools/' in rel:
            continue
        pages.append(rel + '/index.jsx')
pages.sort()

ok = bad = 0
print('%-52s %7s %7s %7s %6s' % ('page', 'blocks', 'titles', 'ids', 'wired'))
for p in pages:
    masked = mask_comments(io.open(p, encoding='utf-8').read())
    b = sections_content(masked)
    t = titles(masked)
    ids = section_ids(masked)
    wired = sum(1 for _, k in ids if k and k in b)
    flag = '' if (b and wired) else '   <-- CHECK'
    if b and wired:
        ok += 1
    else:
        bad += 1
    print('%-52s %7d %7d %7d %6d%s'
          % (p[len('pages/linear-algebra/'):-len('/index.jsx')] or '(root)',
             len(b), len(t), len(ids), wired, flag))

print('-' * 84)
print('pages: %d   extractable: %d   needs attention: %d' % (len(pages), ok, bad))
