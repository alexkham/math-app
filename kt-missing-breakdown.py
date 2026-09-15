# Of the Key Terms heads with no entry on the definitions page: what happened to
# each one? Read-only.

import io, json, re, sys, collections, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

h = urllib.request.urlopen('http://localhost:3000/linear-algebra/definitions',
                           timeout=300).read().decode('utf-8', 'replace')
DEF = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', h))

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
HEAD = re.compile(r'(?:\*\*([^*\n]+)\*\*|\[([^\]\n]+)\]\(!([^)\n]+)\))'
                  r'(?:\s*\$[^$]*\$)*(?=\s*(?:—|–|-)\s)')


def mask(s):
    o = list(s)
    for m in re.finditer(r'^[ \t]*//[^\n]*', s, flags=re.M):
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


def norm(t):
    t = re.sub(r'\$[^$]*\$', ' ', t)
    t = re.sub(r'\s*\([^)]*\)', ' ', t)
    t = re.sub(r'[^A-Za-z0-9\s]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip().lower()


c = collections.Counter()
for k, v in sorted(LA.items()):
    raw = io.open(v['pagePath'], encoding='utf-8', newline='').read()
    m = mask(raw)
    sp = spans(m)
    obj = {s: o for o, s in wired(m)}
    o = obj.get('key-terms')
    if o not in sp:
        continue
    s, e = sp[o]
    for hh in HEAD.finditer(raw[s:e]):
        term = (hh.group(1) or hh.group(2)).strip()
        url = hh.group(3)
        base = norm(term)
        cands = [base, base[:-1] if base.endswith('s') else base + 's']
        if any(re.sub(r'\s+', '_', x) in DEF for x in cands):
            c['HAS a definitions entry'] += 1
            continue
        if not url:
            c['no definition -> left plain bold'] += 1
        elif '/formulas' in url:
            c['no definition -> linked to formulas'] += 1
        elif '/definitions' in url:
            c['no definition -> linked to another definitions page'] += 1
        else:
            c['no definition -> linked to a lesson'] += 1

print('Key Terms entry heads, by outcome:')
for k2, n in c.most_common():
    print('   %-52s %d' % (k2, n))
print('   %-52s %d' % ('TOTAL', sum(c.values())))
