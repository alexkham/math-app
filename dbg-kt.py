import io, re, sys, json

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
LINK = re.compile(r'\[([^\]\n]*)\]\(!([^)\n]*)\)')


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


def spans(masked):
    out = {}
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", masked):
        s = m.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", masked[s:])
        e = s + (stop.start() if stop else len(masked) - s)
        for c in CONTENT.finditer(masked, s, e):
            out.setdefault(c.group(1), (c.start(2), c.end(2)))
    return out


def wired(masked):
    rows = re.findall(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked)
    return rows or re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked)


for slug in sys.argv[1:]:
    key = 'linear-algebra-' + slug
    tool = REG['tools'][key]
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    obj_of = {s: o for o, s in wired(masked)}
    kt = obj_of.get('key-terms')
    print('=== %s   key-terms obj=%s  span=%s' % (slug, kt, sp.get(kt)))
    if kt in sp:
        s, e = sp[kt]
        for m in LINK.finditer(raw[s:e]):
            print('    [%-38s] -> %s' % (m.group(1)[:38], m.group(2)))
    print('  registry expects:')
    for t in tool['relatedTerms']:
        if t['status'] == 'linked' and t['links'][0].get('fromSection') == 'key-terms':
            L = t['links'][0]
            u = L['target']['path'] + ('#' + L['target']['section'] if L['target'].get('section') else '')
            print('    %-22s surface=%-22r -> %s' % (t['term'], L.get('surface'), u))
    print()
