# Line 2, formulas layer - and the repair of the six broken formulas links.
#
# Two jobs:
#
# 1. REPAIR. The six formulas links written in the definitions pass used the
#    repository's formulaUrl, which is built from the entity and is a dead
#    anchor: the page renders one anchor per FORMULA (#matrix_subtraction), not
#    per entity (#matrix). 226 of the 257 linear-algebra formulaUrl values are
#    dead the same way, so this is a repository fault rather than a typo. Each
#    of the six is re-pointed to a verified anchor where its name resolves, and
#    sent back to the definitions page where it does not.
#
# 2. PLANT. Sections that state something in display maths and name a formula
#    get a link to that formula's entry. The anchor comes from
#    line2-formula-anchors.json, which was read off the rendered page, so every
#    one is checked to exist before it is written.
#
# Key Terms sections are skipped: those belong to the definitions layer.
#
# DRY RUN by default. --apply writes pages + registry.

import io, json, re, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
ANCHORS = json.load(io.open('line2-formula-anchors.json', encoding='utf-8'))
TODAY = datetime.date.today().isoformat()
CAP = 5

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
DISPLAY = re.compile(r'\$\$.*?\$\$', re.S)
SKIP = [re.compile(r'\$\$.*?\$\$', re.S), re.compile(r'\$[^$\n]*\$'),
        re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'), re.compile(r'@\[[^\]]*\]@'),
        re.compile(r'\[[^\]]*\]\([^)]*\)'), re.compile(r'`[^`\n]*`'),
        re.compile(r'\*\*[^*\n]*\*\*')]


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


def guard(text):
    o = list(text)
    for p in SKIP:
        for m in p.finditer(text):
            for i in range(m.start(), m.end()):
                o[i] = '\x00'
    return ''.join(o)


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


apply = '--apply' in sys.argv
repaired = reverted = planted = 0
names_sorted = sorted(ANCHORS, key=len, reverse=True)

for key in sorted(k for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'):
    tool = REG['tools'][key]
    slug = key.replace('linear-algebra-', '')
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    slug_of = {o: s for o, s in wired(masked)}
    obj_of = {s: o for o, s in slug_of.items()}
    load = collections.Counter()
    for t in tool['relatedTerms']:
        if t['status'] == 'linked':
            for L in t['links']:
                load[L.get('fromSection')] += 1

    edits = []

    # ---- 1. repair broken formulas anchors ------------------------------
    for t in tool['relatedTerms']:
        if t['status'] != 'linked':
            continue
        for L in t['links']:
            tg = L['target']
            if not tg['path'].endswith('/formulas'):
                continue
            good = ANCHORS.get(t['term'].lower())
            obj = obj_of.get(L.get('fromSection'))
            if obj not in sp or not L.get('surface'):
                continue
            s, e = sp[obj]
            old = '[%s](!%s#%s)' % (L['surface'], tg['path'], tg.get('section'))
            idx = raw.find(old, s, e)
            if idx < 0:
                continue
            if good:
                new = '[%s](!%s)' % (L['surface'], good)
                repaired += 1
                print('  REPAIR %-28s %-26s #%s -> %s'
                      % (slug, t['term'], tg.get('section'), good.split('#')[1]))
                if apply:
                    L['target'] = {'path': '/linear-algebra/formulas',
                                   'section': good.split('#')[1]}
                    L['anchorRepaired'] = 'repository formulaUrl anchor did not exist on the page'
            else:
                dt = t.get('definitionTarget') or {}
                fallback = '/linear-algebra/definitions#' + (t['entity'] or '')
                new = '[%s](!%s)' % (L['surface'], fallback)
                reverted += 1
                print('  REVERT %-28s %-26s no formula anchor -> definitions' % (slug, t['term']))
                if apply:
                    L['target'] = {'path': '/linear-algebra/definitions', 'section': t['entity']}
                    L['anchorRepaired'] = ('no anchor on the formulas page matches this '
                                           'name; sent to the definitions entry instead')
            edits.append((idx, idx + len(old), new))

    # ---- 2. plant new formulas links ------------------------------------
    seen = set()
    for obj, (s, e) in sp.items():
        sec = slug_of.get(obj)
        if not sec or sec == 'key-terms' or load[sec] >= CAP:
            continue
        body = raw[s:e]
        if not DISPLAY.search(body):
            continue
        g = guard(body).lower()
        for n in names_sorted:
            if n in seen or load[sec] >= CAP:
                continue
            m = re.search(r'(?<![a-z0-9])' + re.escape(n) + r'(?![a-z0-9])', g)
            if not m:
                continue
            seen.add(n)
            surface = body[m.start():m.end()]
            url = ANCHORS[n]
            edits.append((s + m.start(), s + m.end(), '[%s](!%s)' % (surface, url)))
            load[sec] += 1
            planted += 1
            print('  PLANT  %-28s %-30s %-26s -> #%s'
                  % (slug, sec[:29], surface[:25], url.split('#')[1]))
            if apply:
                tool['relatedTerms'].append({
                    'term': n, 'entity': None, 'sections': [sec], 'status': 'linked',
                    'links': [{'fromSection': sec, 'surface': surface,
                               'target': {'path': '/linear-algebra/formulas',
                                          'section': url.split('#')[1]},
                               'method': 'formula-name-scan', 'role': 'formula',
                               'added': TODAY}],
                })
            break

    if apply and edits:
        new_src = raw
        for a, b, rep in sorted(edits, key=lambda x: -x[0]):
            new_src = new_src[:a] + rep + new_src[b:]
        io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(new_src)

print('\nbroken anchors repaired : %d' % repaired)
print('sent to definitions      : %d' % reverted)
print('new formulas links       : %d' % planted)
print('\n%s' % ('WRITTEN' if apply else 'DRY RUN - nothing written.'))

if apply:
    REG['$meta']['lineTwo']['formulasLayer'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
