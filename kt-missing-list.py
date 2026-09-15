# Lists every DISTINCT Key Terms concept that has no entry on the definitions
# page, across the 45 linear-algebra visual-tool pages.
#
# One row per concept, not per occurrence: a term heading a Key Terms entry on
# four different tools is one gap to fill, not four. The tools it appears on are
# listed alongside it so the gap can be sized.
#
# A term is listed whether or not its head ended up linked to a lesson or to the
# formulas page - those are substitutes, not definitions.
#
# Anchors are read off the rendered pages, never from the repositories: 226 of
# 257 formulaUrl values are dead anchors, so the repository cannot be trusted.

import io, json, re, sys, collections, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

h = urllib.request.urlopen('http://localhost:3000/linear-algebra/definitions',
                           timeout=300).read().decode('utf-8', 'replace')
DEF_IDS = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', h))
hf = urllib.request.urlopen('http://localhost:3000/linear-algebra/formulas',
                            timeout=300).read().decode('utf-8', 'replace')
FORM_IDS = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', hf))

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
HEAD = re.compile(r'(?:\*\*([^*\n]+)\*\*|\[([^\]\n]+)\]\(!([^)\n]+)\))'
                  r'(?:\s*\$[^$]*\$)*(?=\s*(?:—|–|-)\s)')


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


def norm(t):
    t = re.sub(r'\$[^$]*\$', ' ', t)
    t = re.sub(r'\s*\([^)]*\)', ' ', t)
    t = re.sub(r'[^A-Za-z0-9\s]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()


def exists(base, ids):
    for v in (base.lower(), base.lower()[:-1] if base.lower().endswith('s') else base.lower() + 's'):
        if re.sub(r'\s+', '_', v) in ids:
            return True
    return False


# normalised term -> {display, tools, outcomes, informulas}
gaps = {}
heads_seen = 0
for key in sorted(LA):
    tool = key.replace('linear-algebra-', '')
    raw = io.open(LA[key]['pagePath'], encoding='utf-8', newline='').read()
    m = mask(raw)
    sp = spans(m)
    obj_of = {s: o for o, s in wired(m)}
    o = obj_of.get('key-terms')
    if o not in sp:
        continue
    s, e = sp[o]
    for hh in HEAD.finditer(raw[s:e]):
        display = (hh.group(1) or hh.group(2)).strip()
        url = hh.group(3)
        heads_seen += 1
        base = norm(display)
        if not base or exists(base, DEF_IDS):
            continue
        k = base.lower()
        g = gaps.setdefault(k, {'display': base, 'tools': set(), 'out': collections.Counter(),
                                'formulas': exists(base, FORM_IDS)})
        g['tools'].add(tool)
        if not url:
            g['out']['unlinked'] += 1
        elif '/formulas' in url:
            g['out']['formulas'] += 1
        else:
            g['out']['lesson'] += 1

rows = sorted(gaps.values(), key=lambda g: (-len(g['tools']), g['display'].lower()))
multi = sum(1 for g in rows if len(g['tools']) > 1)

doc = ['# Missing from the definitions page - distinct concepts', '',
       'Generated 2026-09-14 from the Key Terms blocks of all 45 linear-algebra',
       'visual-tool pages.', '',
       '**%d distinct concepts**, appearing as %d entry heads. %d of them appear'
       % (len(rows), heads_seen, multi),
       'on more than one tool.', '',
       'A concept is listed when no anchor on `/linear-algebra/definitions`',
       'matches it - including ones whose head was linked to a lesson or to the',
       'formulas page instead, since those are substitutes rather than',
       'definitions.', '',
       'Columns: where the head currently points, and whether the formulas page',
       'already carries the concept.', '',
       '| concept | tools | currently | on formulas page |',
       '|---|---|---|---|']
for g in rows:
    where = ', '.join('%s x%d' % (k, v) if v > 1 else k for k, v in g['out'].most_common())
    doc.append('| %s | %d | %s | %s |'
               % (g['display'], len(g['tools']), where, 'yes' if g['formulas'] else ''))
doc += ['', '## By tool', '']
by_tool = collections.defaultdict(list)
for g in rows:
    for t in g['tools']:
        by_tool[t].append(g['display'])
for t in sorted(by_tool):
    doc.append('**%s** — %s' % (t, ', '.join(sorted(by_tool[t]))))
    doc.append('')

io.open('key-terms-missing-from-definitions.md', 'w', encoding='utf-8').write('\n'.join(doc) + '\n')
print('distinct concepts: %d   from %d heads   on >1 tool: %d' % (len(rows), heads_seen, multi))
print('written key-terms-missing-from-definitions.md')
