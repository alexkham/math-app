# Final Key Terms coverage: of every entry head across the 45 tool pages, how
# many are now links, and where do they go? Comment-masked and scoped to the
# key-terms section only. Read-only.

import io, json, re, sys, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}
CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")


def mask(src):
    o = list(src)
    for m in re.finditer(r'^[ \t]*//[^\n]*', src, flags=re.M):
        for i in range(m.start(), m.end()):
            o[i] = '\x00'
    t = ''.join(o)
    for m in re.finditer(r'/\*.*?\*/', t, flags=re.S):
        for i in range(m.start(), m.end()):
            o[i] = '\x00'
    return ''.join(o)


def spans(m):
    out = {}
    for x in re.finditer(r"sectionsContent\s*[:=]\s*\{", m):
        s = x.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", m[s:])
        e = s + (stop.start() if stop else len(m) - s)
        for c in CONTENT.finditer(m, s, e):
            out.setdefault(c.group(1), (c.start(2), c.end(2)))
    return out


def wired(m):
    r = re.findall(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", m)
    return r or re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", m)


bold = 0
dest = collections.Counter()
unlinked = []
for k in sorted(LA):
    raw = io.open(LA[k]['pagePath'], encoding='utf-8', newline='').read()
    m = mask(raw)
    sp = spans(m)
    obj_of = {s: o for o, s in wired(m)}
    o = obj_of.get('key-terms')
    if o not in sp:
        continue
    s, e = sp[o]
    body = raw[s:e]
    for h in re.finditer(r'\*\*([^*\n]+)\*\*(?=\s*(?:—|–|-)\s)', body):
        bold += 1
        unlinked.append((k.replace('linear-algebra-', ''), h.group(1).strip()))
    # maths may sit between the link and the dash: [Rank](!url) $r$ — ...
    for h in re.finditer(r'\[([^\]\n]+)\]\(!([^)\n]+)\)(?:\s*\$[^$]*\$)*(?=\s*(?:—|–|-)\s)', body):
        u = h.group(2)
        kind = ('definitions' if '/definitions' in u else
                'formulas' if '/formulas' in u else 'lesson')
        dest[kind] += 1

total = bold + sum(dest.values())
print('Key Terms entry heads : %d' % total)
print('  linked              : %d  (%.0f%%)' % (sum(dest.values()),
                                                100.0 * sum(dest.values()) / max(total, 1)))
for kk, c in dest.most_common():
    print('      -> %-12s %d' % (kk, c))
print('  still plain bold    : %d' % bold)
print('\nsample still-unlinked heads:')
for r in unlinked[:20]:
    print('   %-30s %s' % r)
