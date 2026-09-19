# Key Terms REGISTRY RECORDER - records what the tool pages already carry.
#
# The 45 linear-algebra tool pages were relinked by hand (2026-09-15 -> 19)
# while tooling was blocked. kt-relink.py re-decides each head from aliases and
# would overturn 30 hand judgements, so it is NOT the way to normalise the
# registry. This script never edits a page: it reads every Key Terms head that
# carries a link and writes/updates the matching relatedTerms record, replacing
# any earlier key-terms head record for the same term.
#
# DRY RUN by default. --apply writes visual-tools-registry.json only.

import io, json, re, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
DEFS = '/linear-algebra/definitions'
TODAY = datetime.date.today().isoformat()

REG = json.load(io.open(REG_PATH, encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

CONTENT = re.compile(r"\n\s*(obj\d+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
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


def clean(term):
    t = re.sub(r'\$[^$]*\$', ' ', term)
    t = re.sub(r'\s*\([^)]*\)', ' ', t)
    t = re.sub(r'[^A-Za-z0-9\'\-\s]', ' ', t)
    return re.sub(r'\s+', ' ', t).strip()


apply = '--apply' in sys.argv
stats = collections.Counter()

for key in sorted(LA):
    tool = LA[key]
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    obj_of = {s: o for o, s in wired(masked)}
    o = obj_of.get('key-terms')
    if o not in sp:
        stats['no key-terms section'] += 1
        continue
    ks, ke = sp[o]
    body = raw[ks:ke]

    new_records = []
    for h in HEAD.finditer(body):
        bold, label, url = h.group(1), h.group(2), h.group(3)
        if bold:
            stats['bold head (no record)'] += 1
            continue
        term = clean(label).lower()
        path, _, section = url.partition('#')
        if path.startswith('/linear-algebra/definitions'):
            role, method, entity = 'definition', 'key-terms-head', section or None
            stats['definitions head'] += 1
        elif '/definitions' in path:
            role, method, entity = 'definition', 'key-terms-head-cross', section or None
            stats['cross-subject definitions head'] += 1
        elif '/visual-tools/' in path:
            stats['tool link head (Line 3, skipped)'] += 1
            continue
        else:
            role, method, entity = 'lesson', 'key-terms-head-lesson', None
            stats['lesson head'] += 1
        new_records.append({
            'term': term, 'entity': entity, 'sections': ['key-terms'],
            'status': 'linked',
            'links': [{'fromSection': 'key-terms', 'surface': label.strip(),
                       'target': {'path': path, 'section': section or None},
                       'method': method, 'role': role, 'added': TODAY}],
        })

    if not apply:
        continue

    new_terms = {r['term'] for r in new_records}
    keep = []
    for t in tool['relatedTerms']:
        links = t.get('links') or []
        if (t['status'] == 'linked' and links
                and links[0].get('fromSection') == 'key-terms'
                and clean(links[0].get('surface') or t['term']).lower() in new_terms):
            stats['old head record replaced'] += 1
            continue
        keep.append(t)
    tool['relatedTerms'] = keep + new_records

print('\n'.join('%-36s %d' % (k, v) for k, v in stats.most_common()))
if apply:
    REG['$meta']['lineTwo']['keyTermsRecorded'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('\nWRITTEN %s' % REG_PATH)
else:
    print('\nDRY RUN - nothing written. Re-run with --apply.')
