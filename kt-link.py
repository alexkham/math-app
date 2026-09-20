# Key Terms three-tier linker, section-parametrised.
#
#   python kt-link.py --section=trigonometry [--apply]
#
# Alex's rule (2026-09-15, restated for every section):
#   tier 1  the head links to its definitions entry, if one exists;
#   tier 2  otherwise to a lesson section, if one exists;
#   tier 3  otherwise it stays bold.
# A head never carries bold AND a link - the bold is replaced by the link.
# Maths in the head stays OUTSIDE the label ("[Rank](!..) $r$ - ...").
#
# Unlike kt-relink.py (linear-algebra only) this script does NOT re-decide a head
# that already carries a link: an existing link is authority, because heads may
# have been placed by hand. It only fills in bold heads and records everything in
# the registry.
#
# DRY RUN by default. --apply writes pages + registry.

import io, json, os, re, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'trigonometry')
apply = '--apply' in sys.argv
TODAY = datetime.date.today().isoformat()
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
DEFS = '/%s/definitions' % SECTION

REG = json.load(io.open(REG_PATH, encoding='utf-8'))
TOOLS = {k: v for k, v in REG['tools'].items() if v.get('section') == SECTION}

# ---- tier 1 source: the ids the definitions page actually renders ------------
GLOSSARY = next((p for p in (
    'app/api/db/definitions/%s/%sDefinitions.js' % (SECTION, SECTION),
    'app/api/db/definitions/%s/%sDefinitions.js' % (
        SECTION, re.sub(r'-(\w)', lambda m: m.group(1).upper(), SECTION)),
) if os.path.exists(p)), None)
GSRC = io.open(GLOSSARY, encoding='utf-8').read() if GLOSSARY else ''
GLIVE = '\n'.join('' if l.lstrip().startswith('//') else l for l in GSRC.split('\n'))
IDS = {}
for m in re.finditer(r"id: '([a-z0-9_]+)',\s*\n\s*name: '([^']+)'", GLIVE):
    IDS[m.group(2).lower()] = m.group(1)
    IDS[m.group(1).replace('_', ' ')] = m.group(1)

ALIASES = json.load(io.open('kt-aliases-%s.json' % SECTION, encoding='utf-8')) \
    if os.path.exists('kt-aliases-%s.json' % SECTION) else {}

# ---- tier 2 source: every section title on the section's content pages -------
SECTION_TITLES, PAGE_BY_NAME = {}, {}
for root, dirs, files in os.walk('pages/' + SECTION):
    dirs[:] = [d for d in dirs if d not in ('visual-tools', 'calculators')]
    if 'index.jsx' not in files:
        continue
    rel = root.replace(os.sep, '/')[len('pages/'):]
    if rel.endswith('/definitions') or rel.endswith('/formulas') or rel == SECTION:
        continue
    url = '/' + rel
    PAGE_BY_NAME.setdefault(rel.split('/')[-1].replace('-', ' ').lower(), url)
    src = io.open(root + os.sep + 'index.jsx', encoding='utf-8').read()
    live = '\n'.join('' if l.lstrip().startswith('//') else l for l in src.split('\n'))
    live = re.sub(r'/\*.*?\*/', '', live, flags=re.S)
    titles = dict(re.findall(r'\n\s{2,8}(\w+)\s*:\s*\{\s*\n?\s*title\s*:\s*`([^`]*)`', live))
    titles.update(dict(re.findall(r"\n\s{2,8}(\w+)\s*:\s*\{\s*\n?\s*title\s*:\s*'([^']*)'", live)))
    titles.update(dict(re.findall(r'\n\s{2,8}(\w+)\s*:\s*\{\s*\n?\s*title\s*:\s*"([^"]*)"', live)))
    tail = live[live.rfind('const ') if 'const ' in live else 0:]
    for m in re.finditer(r"id\s*:\s*[`'\"]([a-z0-9\-]+)[`'\"]", live):
        k = re.search(r"sectionsContent(?:\.(\w+)|\[\s*'(\w+)'\s*\])", live[m.end():m.end() + 400])
        t = titles.get(k.group(1) or k.group(2)) if k else None
        if not t:
            continue
        n = re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', ' ', t.lower())).strip()
        SECTION_TITLES.setdefault(n, '%s#%s' % (url, m.group(1)))
        s = re.sub(r'^(the|a|an)\s+', '', n)
        SECTION_TITLES.setdefault(s, '%s#%s' % (url, m.group(1)))

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
HEAD = re.compile(r'(?:\*\*([^*\n]+)\*\*|\[([^\]\n]+)\]\(!([^)\n]+)\))'
                  r'((?:\s*\$[^$\n]*\$)*)(?=\s*(?:—|–|-|&mdash;)\s)')


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


def key_terms_span(masked, raw):
    """(start, end) of the Key Terms section's content literal."""
    for m in re.finditer(r"title:\s*`Key Terms`", masked):
        c = re.search(r"content:\s*`((?:[^`\\]|\\.)*)`", masked[m.end():m.end() + 8000])
        if c:
            return m.end() + c.start(1), m.end() + c.end(1)
    return None


def page_file(v):
    p = v['pagePath']
    return p if p.endswith('.jsx') else 'pages' + p + '/index.jsx'


def clean(term):
    t = re.sub(r'\$[^$]*\$', ' ', term)
    t = re.sub(r'\s*\([^)]*\)', ' ', t)
    t = re.sub(r"[^A-Za-z0-9'\-\s]", ' ', t)
    return re.sub(r'\s+', ' ', t).strip()


def variants(term):
    t = clean(term).lower()
    out = [t, t.replace('-', ' ')]
    for c in list(out):
        # plurals both ways, including identity <-> identities and the
        # article-stripped form ("the reference angle" -> "reference angle")
        if c.endswith('ies'):
            out.append(c[:-3] + 'y')
        elif c.endswith('y'):
            out.append(c[:-1] + 'ies')
        if c.endswith('s'):
            out.append(c[:-1])
        else:
            out.append(c + 's')
        out.append(re.sub(r'^(the|a|an)\s+', '', c))
    seen = set()
    return [c for c in out if c and not (c in seen or seen.add(c))]


def alias_for(term, tool_key):
    """Alias value: a lesson URL if it starts with /, else a definitions id.
    'tool:term' keys win over the plain term, so the same word can resolve
    differently on two tools (a triangle's vertex vs an angle's vertex)."""
    for c in variants(term):
        for k in ('%s:%s' % (tool_key, c), c):
            if k in ALIASES:
                return ALIASES[k]
    return None


def definition_for(term, tool_key):
    a = alias_for(term, tool_key)
    if a and not a.startswith('/'):
        return a
    for c in variants(term):
        if c in IDS:
            return IDS[c]
    return None


def lesson_for(term, tool_key):
    a = alias_for(term, tool_key)
    if a and a.startswith('/'):
        return a
    for c in variants(term):
        if c in PAGE_BY_NAME:
            return PAGE_BY_NAME[c]
    for c in variants(term):
        n = re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', ' ', c)).strip()
        if n in SECTION_TITLES:
            return SECTION_TITLES[n]
    for c in variants(term):
        n = re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9 ]', ' ', c)).strip()
        if len(n) < 5:
            continue
        for title, u in SECTION_TITLES.items():
            if title == n or title.startswith(n + ' ') or (' ' + n + ' ') in (' ' + title + ' '):
                return u
    return None


stats = collections.Counter()
unresolved = []
for key in sorted(TOOLS):
    tool = TOOLS[key]
    path = page_file(tool)
    raw = io.open(path, encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    span = key_terms_span(masked, raw)
    if not span:
        stats['page without Key Terms'] += 1
        continue
    ks, ke = span
    body = raw[ks:ke]
    edits, records, changes = [], [], []
    for h in HEAD.finditer(body):
        bold, existing_label, existing_url = h.group(1), h.group(2), h.group(3)
        maths = h.group(4) or ''
        term = (bold or existing_label).strip()
        if existing_url:
            # an existing link is authority; record it, never re-decide it
            p, _, sec = existing_url.partition('#')
            if not p:
                # "!#slug" is a Line 1 SAME-PAGE anchor, not a Line 2
                # destination. Leave the head alone and record nothing here -
                # Line 1 owns these and a Line 2 record would read as a dead
                # cross-page anchor in every verifier.
                stats['same-page anchor (Line 1, left alone)'] += 1
                continue
            records.append({'term': clean(term).lower(),
                            'entity': sec if p.endswith('/definitions') else None,
                            'sections': ['key-terms'], 'status': 'linked',
                            'links': [{'fromSection': 'key-terms', 'surface': existing_label,
                                       'target': {'path': p, 'section': sec or None},
                                       'method': 'key-terms-head' if p.endswith('/definitions')
                                       else 'key-terms-head-lesson',
                                       'role': 'definition' if p.endswith('/definitions') else 'lesson',
                                       'added': TODAY}]})
            stats['already linked'] += 1
            continue
        label = re.sub(r'\$[^$]*\$', '', term).strip(' -–—')
        ident = definition_for(term, key)
        if ident:
            url, role, method = '%s#%s' % (DEFS, ident), 'definition', 'key-terms-head'
            stats['bold -> definitions'] += 1
        else:
            url = lesson_for(term, key)
            if not url:
                stats['unresolved (stays bold)'] += 1
                unresolved.append((key, term))
                continue
            role, method = 'lesson', 'key-terms-head-lesson'
            stats['bold -> lesson'] += 1
        edits.append((ks + h.start(), ks + h.end(), '[%s](!%s)%s' % (label, url, maths)))
        changes.append((term, role, url))
        records.append({'term': clean(term).lower(),
                        'entity': ident, 'sections': ['key-terms'], 'status': 'linked',
                        'links': [{'fromSection': 'key-terms', 'surface': label,
                                   'target': {'path': url.split('#')[0],
                                              'section': url.split('#')[1] if '#' in url else None},
                                   'method': method, 'role': role, 'added': TODAY}]})
    if changes:
        print('%s  (%d)' % (key, len(changes)))
        for term, role, url in changes:
            print('   %-28s %-11s %s' % (term[:28], role, url))
    if apply:
        if edits:
            new = raw
            for a, b, rep in sorted(edits, key=lambda x: -x[0]):
                new = new[:a] + rep + new[b:]
            io.open(path, 'w', encoding='utf-8', newline='').write(new)
        terms = [t for t in tool.get('relatedTerms') or []
                 if not (t.get('links') and t['links'][0].get('fromSection') == 'key-terms')]
        tool['relatedTerms'] = terms + records

print('\n' + '\n'.join('%-28s %d' % (k, v) for k, v in stats.most_common()))
if unresolved:
    print('\nunresolved heads (%d):' % len(unresolved))
    for k, t in unresolved:
        print('   %-32s %s' % (k, t))
if apply:
    REG['$meta'].setdefault('lineTwo', {})['%sKeyTerms' % SECTION] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('\nWRITTEN pages + registry')
else:
    print('\nDRY RUN - nothing written.')
