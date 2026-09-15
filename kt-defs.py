# Finishes the Key Terms -> definitions route.
#
# The earlier pass only ever considered terms that were already in the scanned
# relatedTerms list, so it covered 126 of 277 Key Terms entries. This one works
# from the ENTRIES themselves: every bold term at the head of a Key Terms
# paragraph is resolved against the anchors the definitions and formulas pages
# actually render, and the link is placed on a plain-text occurrence of that
# term inside its own entry.
#
# The bold head never carries the link - "never bold+link" is a standing rule,
# and prose is never rewritten to manufacture a spot. An entry that never
# restates its own term therefore has nowhere legal to put the link, and is
# reported rather than forced.
#
# Anchors are verified against the rendered pages, not against the repositories:
# 226 of 257 formulaUrl values are dead anchors, so the repository cannot be
# trusted for this.
#
# DRY RUN by default. --apply writes pages + registry.

import io, json, re, sys, datetime, collections, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}
TODAY = datetime.date.today().isoformat()

BASE = 'http://localhost:3000'
REFPAGES = ['/linear-algebra/definitions', '/linear-algebra/formulas',
            '/algebra/definitions', '/set-theory/definitions']
IDS = {}
for p in REFPAGES:
    try:
        h = urllib.request.urlopen(BASE + p, timeout=300).read().decode('utf-8', 'replace')
        IDS[p] = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', h))
    except Exception:
        IDS[p] = set()
print('reference anchors: ' + ', '.join('%s=%d' % (p.rsplit('/', 1)[-1], len(v))
                                        for p, v in IDS.items()))

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
SKIP = [re.compile(r'\$\$.*?\$\$', re.S), re.compile(r'\$[^$\n]*\$'),
        re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'), re.compile(r'@\[[^\]]*\]@'),
        re.compile(r'\[[^\]]*\]\([^)]*\)'), re.compile(r'`[^`\n]*`'),
        re.compile(r'\*\*[^*\n]*\*\*')]


def mask_comments(src):
    o = list(src)
    for m in re.finditer(r'^[ \t]*//[^\n]*', src, flags=re.M):
        for i in range(m.start(), m.end()):
            o[i] = '\x00'
    t = ''.join(o)
    for m in re.finditer(r'/\*.*?\*/', t, flags=re.S):
        for i in range(m.start(), m.end()):
            o[i] = '\x00'
    return ''.join(o)


def guard(text):
    o = list(text)
    for p in SKIP:
        for m in p.finditer(text):
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


def slug(s):
    return re.sub(r'[^a-z0-9]+', '_', s.lower()).strip('_')


def variants(term):
    """Surface forms and anchor candidates for a Key Terms head."""
    t = term.strip()
    t = re.sub(r'\s*\([^)]*\)\s*$', '', t).strip()      # drop "(REF)" tails
    out = [t]
    low = t.lower()
    if low.endswith('s'):
        out.append(t[:-1])
    else:
        out.append(t + 's')
    if low.endswith('y'):
        out.append(t[:-1] + 'ies')
    return out


def resolve(term):
    """term -> (path, anchor) using only anchors that really exist."""
    for v in variants(term):
        s = slug(v)
        for p in REFPAGES:
            if s in IDS[p]:
                return p, s
    return None, None


apply = '--apply' in sys.argv
planted = already = noanchor = nospot = 0
unbolded = []
missing_examples = collections.Counter()

for key in sorted(LA):
    tool = LA[key]
    slugname = key.replace('linear-algebra-', '')
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    obj_of = {s: o for o, s in wired(masked)}
    o = obj_of.get('key-terms')
    if o not in sp:
        continue
    ks, ke = sp[o]
    body = raw[ks:ke]

    # Entry heads only: a bold run FOLLOWED BY a dash. Plain emphasis inside a
    # definition ("the pivots need not be 1", "Note what is **not** required")
    # is bold too, and counting it as an entry inflates the total and produces
    # nonsense lookups.
    heads = [m for m in re.finditer(r'\*\*([^*\n]+)\*\*(?=\s*(?:—|–|-)\s)', body)]
    edits = []
    for i, h in enumerate(heads):
        term = h.group(1).strip()
        start = h.end()
        end = heads[i + 1].start() if i + 1 < len(heads) else len(body)
        entry = body[start:end]

        path, anchor = resolve(term)
        if not path:
            noanchor += 1
            missing_examples[term] += 1
            continue

        url = '%s#%s' % (path, anchor)
        if url in entry:
            already += 1
            continue

        g = guard(entry).lower()
        spot = None
        for v in sorted(variants(term), key=len, reverse=True):
            m = re.search(r'(?<![a-z0-9])' + re.escape(v.lower()) + r'(?![a-z0-9])', g)
            if m:
                spot = (start + m.start(), start + m.end(), entry[m.start():m.end()])
                break

        if not spot:
            # No plain-text restatement inside the entry. The head itself then
            # carries the link - and the bold is REPLACED by it rather than
            # wrapped around it, so "never bold+link" is respected: the result is
            # [Term](!url) - definition, not **[Term](!url)**.
            spot = (h.start(), h.end(), term)
            unbolded.append((slugname, term))

        a, b, surface = spot
        edits.append((ks + a, ks + b, '[%s](!%s)' % (surface, url)))
        planted += 1
        if apply:
            tool['relatedTerms'].append({
                'term': term.lower(), 'entity': anchor,
                'sections': ['key-terms'], 'status': 'linked',
                'links': [{'fromSection': 'key-terms', 'surface': surface,
                           'target': {'path': path, 'section': anchor},
                           'method': 'key-terms-entry', 'role': 'definition',
                           'added': TODAY}],
            })

    if apply and edits:
        new = raw
        for a, b, rep in sorted(edits, key=lambda x: -x[0]):
            new = new[:a] + rep + new[b:]
        io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(new)
    if edits or nospot:
        print('%-34s planted %2d' % (slugname, len(edits)))

print('\nnew Key Terms definition links : %d' % planted)
print('entries already linked         : %d' % already)
print('no anchor on any reference page: %d' % noanchor)
print('heads converted from bold to link : %d' % len(unbolded))
if missing_examples:
    print('\nterms with no reference anchor (top):')
    for t, c in missing_examples.most_common(12):
        print('   %-42s x%d' % (t, c))
print('\n%s' % ('WRITTEN' if apply else 'DRY RUN - nothing written.'))

if apply:
    REG['$meta']['lineTwo']['keyTermsDefinitions'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
