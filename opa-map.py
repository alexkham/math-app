# Operation A, Stage 1 - MAPPING, linear-algebra content pages.
#
# Registry only. Never edits a content page: mapping has standalone value and
# does not depend on the linking stage (Stage 2 plants demonstration units, one
# page per pass, with an approval stop - not this script's job).
#
# Per page it records identity, section inventory, and the related-terms list
# built the same mechanical way Line 2 builds it, then reverse-queries the tools
# registry so each term arrives with its candidate tools already attached.
#
# Scope decisions, from operation-a...-v1.md:
#   * /linear-algebra/definitions and /formulas are repository-rendered pages -
#     Operation B's territory, excluded here. The section hub is not a content
#     page. 54 pages remain of the 57 on disk.
#   * Own-section scope, noise excluded ENTIRELY. Unlike the Line 2 ledger,
#     which records cross-section matches as dropped, a term resolving outside
#     linear-algebra is simply never listed - the doc asks for a clean list.
#   * status is `pending` when at least one tool covers the concept, `deferred`
#     when none does. `deferred` is the honest bucket for "no tool demonstrates
#     this today" and is re-queryable as more tools get built.
#   * No link, no unit, no $conceptToolMap entry is written here. Choosing the
#     best-demonstrating tool is Stage 3 judgment and belongs to the content
#     side, one page at a time.
#
# DRY RUN by default. --apply writes content-pages-registry.json.

import io, json, os, re, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')

CONTENT_REG = 'app/api/db/repositories/content-pages-registry.json'
TOOLS_REG = 'app/api/db/repositories/visual-tools-registry.json'
INDEX_PATH = 'line2-concept-index.json'
# Section is a flag: python opa-map.py --section=probability [--apply]
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'linear-algebra')
TODAY = datetime.date.today().isoformat()

EXCLUDE = {'definitions', 'formulas', ''}

INDEX = json.load(io.open(INDEX_PATH, encoding='utf-8'))
TOOLS = json.load(io.open(TOOLS_REG, encoding='utf-8'))
CREG = json.load(io.open(CONTENT_REG, encoding='utf-8'))

SKIP = [
    re.compile(r'\$\$.*?\$\$', re.S),
    re.compile(r'\$[^$\n]*\$'),
    re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'),
    re.compile(r'@\[[^\]]*\]@'),
    re.compile(r'\[[^\]]*\]\([^)]*\)'),
    re.compile(r'`[^`\n]*`'),
]

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


def mask_regions(text):
    out = list(text)
    for pat in SKIP:
        for m in pat.finditer(text):
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
    rows = []
    for m in re.finditer(r"id\s*:\s*[`'\"]([^`'\"]+)[`'\"]", masked):
        window = masked[m.end():m.end() + 400]
        k = re.search(r"sectionsContent(?:\.(\w+)|\[\s*'(\w+)'\s*\])", window)
        if k:
            rows.append((m.group(1), k.group(1) or k.group(2)))
    return rows


def page_name(masked, slug):
    for pat in (r"title\s*:\s*[`'\"]([^`'\"]{4,120})[`'\"]\s*,\s*\n\s*description",
                r"<h1[^>]*>([^<]{4,120})</h1>",
                r"pageTitle\s*:\s*[`'\"]([^`'\"]{4,120})[`'\"]"):
        m = re.search(pat, masked)
        if m:
            return re.sub(r'\s*[|\-–—]\s*(Learn Math Class|LearnMathClass).*$', '',
                          m.group(1)).strip()
    return slug.split('/')[-1].replace('-', ' ').title()


# entity -> tools covering it, from the Line 2 ledger
covered = collections.defaultdict(list)
for tk, tv in TOOLS['tools'].items():
    if tv.get('section') != SECTION:
        continue
    for t in tv.get('relatedTerms') or []:
        if t.get('entity'):
            covered[t['entity']].append(tk)

CONCEPT_MAP = CREG['$meta'].get('$conceptToolMap', {})

pages = []
for root, dirs, files in os.walk('pages/' + SECTION):
    dirs[:] = [d for d in dirs if d not in ('visual-tools', 'calculators')]
    if 'index.jsx' in files:
        rel = root.replace(os.sep, '/')[len('pages/' + SECTION):].strip('/')
        if rel in EXCLUDE:
            continue
        pages.append((rel, root.replace(os.sep, '/') + '/index.jsx'))
pages.sort()

apply = '--apply' in sys.argv
rows = []
tot_terms = tot_pending = tot_deferred = 0

for slug, path in pages:
    masked = mask_comments(io.open(path, encoding='utf-8').read())
    blocks = sections_content(masked)
    ttl = titles(masked)
    ids = section_ids(masked)

    inventory = [sid for sid, key in ids if key in blocks]
    key_of = {sid: key for sid, key in ids if key in blocks}

    forms = sorted(INDEX, key=len, reverse=True)
    found = {}
    for sid in inventory:
        text = blocks[key_of[sid]]
        hay = mask_regions(text).lower()
        taken = []
        for form in forms:
            entry = INDEX[form]
            by = entry.get('bySection') or {}
            if SECTION not in by:
                continue                     # own-section scope; noise excluded
            chosen = by[SECTION]
            m = re.search(r'(?<![a-z0-9])' + re.escape(form) + r'(?![a-z0-9])', hay)
            if not m or any(a <= m.start() < b for a, b in taken):
                continue
            taken.append((m.start(), m.end()))
            rec = found.setdefault(chosen['entity'],
                                   {'term': form, 'entity': chosen['entity'], 'sections': []})
            if sid not in rec['sections']:
                rec['sections'].append(sid)

    terms = []
    for ent, rec in found.items():
        tools = covered.get(ent, [])
        out = {'term': rec['term'], 'entity': ent, 'sections': rec['sections']}
        if tools:
            out['status'] = 'pending'
            out['candidateTools'] = sorted(tools)
            if ent in CONCEPT_MAP:
                out['conceptToolMapWinner'] = CONCEPT_MAP[ent].get('tool')
        else:
            out['status'] = 'deferred'
            out['reason'] = ('No visual tool covers this concept today. Re-queryable '
                             'as tools are built and Line-2 processed.')
        terms.append(out)
    terms.sort(key=lambda t: (t['status'], t['term']))

    npend = sum(1 for t in terms if t['status'] == 'pending')
    tot_terms += len(terms); tot_pending += npend
    tot_deferred += len(terms) - npend
    rows.append((slug, len(inventory), len(terms), npend))

    if apply:
        CREG['pages'][SECTION + '/' + slug] = {
            'slug': slug,
            'name': page_name(masked, slug),
            'section': SECTION,
            'pagePath': path,
            'template': 'titled',
            'templateNote': ('Section anchors are numeric ids ("1".."n") with real '
                             'titles in sectionsContent; slugs are not derivable from '
                             'the titles on this template.'),
            'sections': inventory,
            'mapped': TODAY,
            'relatedTerms': terms,
        }

print('%-46s %6s %6s %8s %9s' % ('page', 'secs', 'terms', 'pending', 'deferred'))
for slug, ns, nt, npd in rows:
    print('%-46s %6d %6d %8d %9d' % (slug, ns, nt, npd, nt - npd))
print('-' * 80)
print('%-46s %6s %6d %8d %9d'
      % ('TOTAL (%d pages)' % len(rows), '', tot_terms, tot_pending, tot_deferred))

if apply:
    CREG['$meta']['operationA'] = CREG['$meta'].get('operationA', {})
    CREG['$meta']['operationA']['linearAlgebraMapped'] = TODAY
    CREG['$meta']['operationA']['note'] = (
        'Stage 1 mapping only: identity, section inventory and related-terms with '
        'candidate tools attached. No content page was edited, no link or '
        'demonstration unit planted, no $conceptToolMap decision recorded - those '
        'are Stage 2/3 and run one page per pass. /linear-algebra/definitions and '
        '/formulas are excluded as Operation B territory.')
    io.open(CONTENT_REG, 'w', encoding='utf-8').write(
        json.dumps(CREG, ensure_ascii=False, indent=2) + '\n')
    print('\nWRITTEN to %s' % CONTENT_REG)
else:
    print('\nDRY RUN - nothing written. Re-run with --apply.')
