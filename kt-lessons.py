# Links the remaining Key Terms heads to lesson pages, and lists every Key Terms
# entry that has no definitions entry behind it.
#
# After kt-defs.py, 204 of 277 heads carry a definitions or formulas link. The
# other 73 have no entry in either repository, so they were left bold. This
# sends them to the lesson page that teaches the concept instead, using the
# concept index (built from the repositories' own contentUrl values) and falling
# back to the section list of the 54 mapped linear-algebra content pages.
#
# As before the bold is REPLACED by the link, never wrapped around it.
#
# Also writes key-terms-missing-from-definitions.md: the full list, per tool, of
# heads with no definitions entry - the content backlog this pass exposes.
#
# DRY RUN by default. --apply writes pages + registry + the list.

import io, json, re, sys, datetime, collections, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
CREG = json.load(io.open('app/api/db/repositories/content-pages-registry.json', encoding='utf-8'))
INDEX = json.load(io.open('line2-concept-index.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}
TODAY = datetime.date.today().isoformat()

DEF_IDS = set()
try:
    h = urllib.request.urlopen('http://localhost:3000/linear-algebra/definitions',
                               timeout=300).read().decode('utf-8', 'replace')
    DEF_IDS = set(re.findall(r'id="([A-Za-z0-9_\-]+)"', h))
except Exception:
    pass

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")


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


# page name -> url, for the title fallback
PAGE_BY_NAME = {}
SECTION_TITLES = {}     # normalised section title -> url#id
for k, v in CREG['pages'].items():
    if not k.startswith('linear-algebra/'):
        continue
    url = '/' + v['pagePath'][len('pages/'):-len('/index.jsx')]
    PAGE_BY_NAME[v['slug'].split('/')[-1].replace('-', ' ').lower()] = url

    # A Key Terms head is usually a teaching term - "Back-substitution",
    # "Free variable", "Pivot columns" - that no repository carries but that a
    # lesson page has a whole SECTION about. Those titles are the better index,
    # and they give a precise anchor rather than a page root.
    try:
        src = io.open(v['pagePath'], encoding='utf-8').read()
    except Exception:
        continue
    lv = mask_comments(src)
    titles = dict(re.findall(r'\n\s{2,6}(obj\d+)\s*:\s*\{\s*\n?\s*title\s*:\s*`([^`]*)`', lv))
    for m in re.finditer(r"id\s*:\s*[`'\"]([^`'\"]+)[`'\"]", lv):
        w = lv[m.end():m.end() + 300]
        kk = re.search(r'sectionsContent[.\[\']+(\w+)', w)
        if not kk:
            continue
        title = titles.get(kk.group(1))
        if not title:
            continue
        norm = re.sub(r'[^a-z0-9 ]', ' ', title.lower())
        norm = re.sub(r'\s+', ' ', norm).strip()
        # index under the leading article too: "The Null Space" must be findable
        # as "null space"
        SECTION_TITLES.setdefault(norm, '%s#%s' % (url, m.group(1)))
        stripped = re.sub(r'^(the|a|an)\s+', '', norm)
        if stripped != norm:
            SECTION_TITLES.setdefault(stripped, '%s#%s' % (url, m.group(1)))


def cleaned(term):
    """Key Terms heads carry maths and parentheticals that no index will match:
    'Column space $C(A)$', 'Row echelon form (REF)', 'Rank $r$'. Strip both
    before any lookup."""
    t = re.sub(r'\$[^$]*\$', ' ', term)              # drop inline maths
    t = re.sub(r'\s*\([^)]*\)', ' ', t)              # drop parentheticals
    t = re.sub(r'[^A-Za-z0-9\'\-\s]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()


# Head wording and repository wording differ in predictable ways.
SYNONYMS = {
    'factorization': 'decomposition', 'factorisation': 'decomposition',
}
QUALIFY = [' matrix', ' form', ' space', ' product']


def lesson_for(term):
    """A lesson URL for this term, or None. Index first, page titles second."""
    t = cleaned(term).lower()
    if not t:
        return None, None
    cands = [t]
    for a, b in SYNONYMS.items():
        if a in t:
            cands.append(t.replace(a, b))
    base = list(cands)
    for c in base:
        cands.append(c[:-1] if c.endswith('s') else c + 's')
        # a bare adjective head ("Symmetric", "Positive definite") is the
        # repository's concept minus its noun
        for q in QUALIFY:
            cands.append(c + q)
    seen = set()
    cands = [c for c in cands if not (c in seen or seen.add(c))]
    for c in cands:
        e = INDEX.get(c)
        if e:
            by = (e.get('bySection') or {}).get('linear-algebra') or e
            u = by.get('contentUrl')
            if u and '/visual-tools/' not in u and u.startswith('/linear-algebra'):
                return u, 'concept-index'
    for c in cands:
        if c in PAGE_BY_NAME:
            return PAGE_BY_NAME[c], 'page-title'
    # section titles: exact, then a title that simply starts with the term
    for c in cands:
        n = re.sub(r'[^a-z0-9 ]', ' ', c)
        n = re.sub(r'\s+', ' ', n).strip()
        if n in SECTION_TITLES:
            return SECTION_TITLES[n], 'section-title'
    for c in cands:
        n = re.sub(r'[^a-z0-9 ]', ' ', c)
        n = re.sub(r'\s+', ' ', n).strip()
        if len(n) < 5:
            continue
        for title, u in SECTION_TITLES.items():
            if title.startswith(n + ' ') or title == n:
                return u, 'section-title-prefix'
    return None, None


apply = '--apply' in sys.argv
linked = unresolved = 0
missing_rows = []
unresolved_rows = []

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

    heads = [m for m in re.finditer(r'\*\*([^*\n]+)\*\*(?=\s*(?:—|–|-)\s)', body)]
    edits = []
    for h in heads:
        term = h.group(1).strip()
        anchor = re.sub(r'[^a-z0-9]+', '_', cleaned(term).lower()).strip('_')
        missing_rows.append((slugname, term, anchor in DEF_IDS))

        url, how = lesson_for(term)
        if not url:
            unresolved += 1
            unresolved_rows.append((slugname, term))
            continue
        edits.append((ks + h.start(), ks + h.end(), '[%s](!%s)' % (term, url)))
        linked += 1
        if apply:
            tool['relatedTerms'].append({
                'term': term.lower(), 'entity': None, 'sections': ['key-terms'],
                'status': 'linked',
                'links': [{'fromSection': 'key-terms', 'surface': term,
                           'target': {'path': url.split('#')[0],
                                      'section': url.split('#')[1] if '#' in url else None},
                           'method': how, 'role': 'lesson', 'added': TODAY}],
            })

    if apply and edits:
        new = raw
        for a, b, rep in sorted(edits, key=lambda x: -x[0]):
            new = new[:a] + rep + new[b:]
        io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(new)

missing = [r for r in missing_rows if not r[2]]
print('remaining bold heads linked to lessons : %d' % linked)
print('still unresolved (no lesson found)     : %d' % unresolved)
print('key terms with NO definitions entry    : %d' % len(missing))

if unresolved_rows:
    print('\nunresolved:')
    for s, t in unresolved_rows[:30]:
        print('   %-30s %s' % (s, t))

if apply:
    by_tool = collections.defaultdict(list)
    for s, t, ok in missing:
        by_tool[s].append(t)
    doc = ['# Key Terms with no entry in the definitions repository',
           '',
           'Generated %s from the 45 linear-algebra visual-tool pages.' % TODAY,
           '',
           'Every term below heads a Key Terms entry on a tool page but has no',
           'matching anchor on /linear-algebra/definitions. They are the content',
           'backlog this linking pass exposed: until they exist as definitions,',
           'those entries can only be sent to a lesson page.',
           '',
           '%d terms across %d tools.' % (len(missing), len(by_tool)),
           '']
    for s in sorted(by_tool):
        doc.append('## %s' % s)
        for t in sorted(set(by_tool[s])):
            doc.append('- %s' % t)
        doc.append('')
    io.open('key-terms-missing-from-definitions.md', 'w', encoding='utf-8').write('\n'.join(doc))
    REG['$meta']['lineTwo']['keyTermsLessons'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('\nWRITTEN - pages, registry, key-terms-missing-from-definitions.md')
else:
    print('\nDRY RUN - nothing written.')
