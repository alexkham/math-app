# Line 2, definitions/formulas layer.
#
# Owner's scheme (2026-09-14), three routes per concept, no duplicates:
#
#   Key Terms entry      -> the definitions page (or the formulas page, when the
#                           concept's repository entry is a formula rather than
#                           a definition). This is the "I do not know this word
#                           at all" route.
#   Second occurrence    -> the lesson page. This is the "I want to understand
#   in the body prose       more about it" route.
#   Everything already   -> untouched. 249 links already sit in body prose and
#   linked outside                     already point at lessons.
#   Key Terms
#
# So this pass does two things to each of the 166 terms currently linked FROM a
# Key Terms entry: it re-points that link to the definitions/formulas anchor,
# and it plants the lesson link at a later occurrence in a different section.
#
# 17 of the 166 occur ONLY in Key Terms. Those keep the definitions link and
# lose the lesson one - recorded honestly rather than forced somewhere it does
# not belong.
#
# Guards are the same as every other Line 2 pass: length-preserving comment
# mask, never inside maths / code / bold / an existing link, `!` prefix, surface
# case preserved, five links per section.
#
# DRY RUN by default. --apply writes pages + registry.

import io, json, re, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
TODAY = datetime.date.today().isoformat()
CAP = 5

SKIP = [
    re.compile(r'\$\$.*?\$\$', re.S),
    re.compile(r'\$[^$\n]*\$'),
    re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'),
    re.compile(r'@\[[^\]]*\]@'),
    re.compile(r'\[[^\]]*\]\([^)]*\)'),
    re.compile(r'`[^`\n]*`'),
    re.compile(r'\*\*[^*\n]*\*\*'),
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


def content_spans(masked):
    spans = {}
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", masked):
        s = m.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", masked[s:])
        e = s + (stop.start() if stop else len(masked) - s)
        for c in CONTENT.finditer(masked, s, e):
            spans.setdefault(c.group(1), (c.start(2), c.end(2)))
    return spans


def wired(masked):
    rows = re.findall(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked)
    return rows or re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked)


def url_of(t):
    return t['path'] + ('#' + t['section'] if t.get('section') else '')


apply = '--apply' in sys.argv
repointed = moved = stranded = blocked = 0
by_dest = collections.Counter()

for key in sorted(k for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'):
    tool = REG['tools'][key]
    slug = key.replace('linear-algebra-', '')
    targets = [t for t in tool['relatedTerms']
               if t['status'] == 'linked'
               and (t['links'][0].get('fromSection') == 'key-terms')
               and t.get('definitionTarget')]
    if not targets:
        continue

    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    spans = content_spans(masked)
    slug_of = {o: s for o, s in wired(masked)}
    obj_of = {s: o for o, s in slug_of.items()}

    # how many links each section already carries, for the cap
    load = collections.Counter()
    for t in tool['relatedTerms']:
        if t['status'] == 'linked':
            load[t['links'][0].get('fromSection')] += 1

    edits = []
    for t in targets:
        L = t['links'][0]
        surface = L.get('surface')
        old_url = url_of(L['target'])
        def_url = url_of(t['definitionTarget'])

        # --- 1. re-point the Key Terms link to definitions / formulas --------
        kt_obj = obj_of.get('key-terms')
        if kt_obj not in spans:
            continue
        ks, ke = spans[kt_obj]

        if surface:
            old_md = '[%s](!%s)' % (surface, old_url)
            idx = raw.find(old_md, ks, ke)
        else:
            # Links reconciled from prose that predated this workstream carry no
            # recorded surface text. Locate them by their URL and read the label
            # back out of the page instead of guessing it.
            mm = re.search(r'\[([^\]\n]*)\]\(!' + re.escape(old_url) + r'\)', raw[ks:ke])
            if mm:
                surface = mm.group(1)
                old_md = mm.group(0)
                idx = ks + mm.start()
            else:
                idx = -1
        if idx < 0:
            blocked += 1
            print('  MISS  %-28s %-22s (key-terms link not found)' % (slug, t['term']))
            continue
        edits.append((idx, idx + len(old_md), '[%s](!%s)' % (surface, def_url)))
        repointed += 1
        by_dest['formulas' if '/formulas' in def_url else 'definitions'] += 1

        # --- 2. plant the lesson link at a later occurrence ------------------
        placed = None
        for sec in t['sections']:
            if sec == 'key-terms':
                continue
            obj = obj_of.get(sec)
            if obj not in spans or load[sec] >= CAP:
                continue
            s, e = spans[obj]
            body = raw[s:e]
            guard = mask_regions(body).lower()
            m = re.search(r'(?<![a-z0-9])' + re.escape(t['term']) + r'(?![a-z0-9])', guard)
            if not m:
                continue
            surf2 = body[m.start():m.end()]
            edits.append((s + m.start(), s + m.end(), '[%s](!%s)' % (surf2, old_url)))
            load[sec] += 1
            placed = (sec, surf2)
            break

        if placed:
            moved += 1
            print('  OK    %-28s %-22s  KT->%-34s  lesson->[%s]'
                  % (slug, t['term'], def_url.split('#')[0].rsplit('/', 1)[-1] + (
                      '#' + def_url.split('#')[1] if '#' in def_url else ''), placed[0]))
        else:
            stranded += 1
            print('  ONLY  %-28s %-22s  KT->definitions, no second occurrence'
                  % (slug, t['term']))

        if apply:
            links = [{
                'fromSection': 'key-terms',
                'surface': surface,
                'target': dict(t['definitionTarget']),
                'method': 'repository',
                'role': 'definition',
                'added': TODAY,
            }]
            if placed:
                links.append({
                    'fromSection': placed[0],
                    'surface': placed[1],
                    'target': L['target'],
                    'method': L.get('method', 'repository-link'),
                    'role': 'lesson',
                    'added': TODAY,
                })
            else:
                t['lessonLink'] = ('Not planted: the term occurs only in Key Terms on '
                                   'this page, so there is no second spot to carry it.')
            t['links'] = links

    if apply and edits:
        new = raw
        for a, b, rep in sorted(edits, key=lambda x: -x[0]):
            new = new[:a] + rep + new[b:]
        io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(new)

print('\nKey Terms links re-pointed : %d   (%s)' % (repointed, dict(by_dest)))
print('lesson links moved to body : %d' % moved)
print('definition-only (no 2nd)   : %d' % stranded)
print('not found / skipped        : %d' % blocked)
print('\n%s' % ('WRITTEN' if apply else 'DRY RUN - nothing written.'))

if apply:
    REG['$meta']['lineTwo']['definitionsLayer'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
