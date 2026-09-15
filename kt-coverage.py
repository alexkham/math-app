# How many Key Terms ENTRIES actually carry a definitions link?
# Read-only.

import io, json, re, sys

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


tot_entries = tot_linked = 0
rows = []
for k in sorted(LA):
    raw = io.open(LA[k]['pagePath'], encoding='utf-8', newline='').read()
    m = mask(raw)
    sp = spans(m)
    obj_of = {s: o for o, s in wired(m)}
    o = obj_of.get('key-terms')
    if o not in sp:
        rows.append((k.replace('linear-algebra-', ''), 0, 0)); continue
    s, e = sp[o]
    body = raw[s:e]
    # one entry per bold run at the head of a paragraph
    # An entry head is now either **Term** — ... or [Term](!url) — ..., because
    # heads that had to carry the link had their bold replaced by it. Counting
    # only the bold form undercounts the entries and overstates coverage.
    bold_heads = re.findall(r'\*\*([^*\n]+)\*\*\s*(?:—|–|-)\s', body)
    link_heads = re.findall(r'\[([^\]\n]+)\]\(![^)\n]+\)\s*(?:—|–|-)\s', body)
    entries = bold_heads + link_heads
    links = re.findall(r'\]\(!(/[a-z0-9\-/]+(?:#[a-z0-9_\-]+)?)\)', body)
    defs = [u for u in links if '/definitions' in u or '/formulas' in u]
    tot_entries += len(entries); tot_linked += len(defs)
    rows.append((k.replace('linear-algebra-', ''), len(entries), len(defs)))

print('%-34s %8s %10s' % ('tool', 'entries', 'def links'))
for r in rows:
    flag = '' if r[2] >= r[1] else '   <-- short by %d' % (r[1] - r[2])
    print('%-34s %8d %10d%s' % (r[0], r[1], r[2], flag))
print('-' * 60)
print('%-34s %8d %10d' % ('TOTAL', tot_entries, tot_linked))
print('\ncoverage: %.0f%% of Key Terms entries carry a definitions/formulas link'
      % (100.0 * tot_linked / max(tot_entries, 1)))
