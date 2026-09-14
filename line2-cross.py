# Line 2, cross-subject pass. Closes out the 33 terms held back when
# cross-subject linking was on hold.
#
# Each was judged against the sentence it actually sits in, not against its name
# (line2-context.py prints those sentences). KEEP lists the ones where the term
# is used in the sense the destination teaches; everything else is dropped with
# the reason it failed.
#
# Same planting rules as line2-write.py: length-preserving comment mask, never
# inside maths / code / bold / an existing link, `!` prefix, surface case kept.
#
# DRY RUN by default. --apply writes pages + registry.

import io, json, re, sys, datetime, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
TODAY = datetime.date.today().isoformat()

# (tool slug, term) -> why it earns the link
KEEP = {
    ('gauss-elimination', 'solution set'):
        'Row operations are defined here as the moves that preserve the solution set; '
        'the destination is where that term is defined.',
    ('linear-system-solutions', 'equivalent equation'):
        'The section turns on each operation replacing an equation by an equivalent '
        'one - the exact idea the algebra page teaches.',
    ('linear-transformation-2d', 'complex conjugates'):
        'Eigenvalues are listed as a +/- bi pairs here, so the reader needs the '
        'conjugate concept at that moment.',
    ('linear-transformation-2d', 'unit circle'):
        'The section reads the transformed unit circle directly.',
    ('singular-value-decomposition', 'unit circle'):
        'The worked example maps the unit circle to an ellipse.',
    ('complex-eigenvalues-2d', 'complex number'):
        'The tool exists because the eigenvalues are complex; the term is load-bearing.',
    ('complex-eigenvalues-2d', 'real and imaginary parts'):
        'The controls are described in terms of real and imaginary parts.',
    ('eigenvalues-eigenvectors', 'quadratic formula'):
        'The 2x2 characteristic polynomial is solved with it in this section.',
}

# term -> reason, for everything not kept
def drop_reason(tool, term, sec, target, cross):
    if 'related-concepts' in (sec or ''):
        return ('Related Concepts is a structural section reserved for the Line 3 '
                'tool-to-tool mesh and takes no Line 2 links.')
    if term in ('signed area', 'addition rule', 'critical point', 'perfect square'):
        return ('False match: in linear algebra this phrase means something other than '
                'the %s concept at %s. Linking it would send the reader somewhere '
                'unrelated.' % (cross, target))
    if term in ('absolute value', 'square root', 'square roots', 'exponent rules',
                'binomial coefficients', 'finite set', 'linear function'):
        return ('Prerequisite vocabulary used in passing; a reader at this point in '
                'linear algebra does not need the %s page for it.' % cross)
    if term == 'solution set':
        return ('The same destination is already linked from this section via a more '
                'specific term; one link per destination per section.')
    return 'Cross-subject candidate judged to add no value at this point in the prose.'


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


apply = '--apply' in sys.argv
planted = dropped = blocked = 0

for key in sorted(k for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'):
    tool = REG['tools'][key]
    slug = key.replace('linear-algebra-', '')
    pend = [t for t in tool['relatedTerms'] if t['status'] == 'pending']
    if not pend:
        continue

    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    spans = content_spans(masked)
    obj_of = {s: o for o, s in wired(masked)}
    edits = []

    for t in pend:
        term, plan = t['term'], t['plan']
        sec = plan['fromSection']
        tgt = plan['target']
        url = tgt['path'] + ('#' + tgt['section'] if tgt.get('section') else '')
        if (slug, term) not in KEEP:
            dropped += 1
            print('  DROP  %-30s %-24s' % (slug, term))
            if apply:
                t['status'] = 'dropped'
                t['reason'] = drop_reason(slug, term, sec, url, plan.get('crossSection'))
                t.pop('plan', None)
            continue

        obj = obj_of.get(sec)
        if obj not in spans:
            blocked += 1
            print('  BLOCK %-30s %-24s (section not found)' % (slug, term))
            if apply:
                t['status'] = 'dropped'
                t['reason'] = 'Section "%s" is not wired into the rendered page.' % sec
                t.pop('plan', None)
            continue
        s, e = spans[obj]
        body = raw[s:e]
        guard = mask_regions(body).lower()
        m = re.search(r'(?<![a-z0-9])' + re.escape(term) + r'(?![a-z0-9])', guard)
        if not m:
            blocked += 1
            print('  BLOCK %-30s %-24s (only in bold/maths/link)' % (slug, term))
            if apply:
                t['status'] = 'dropped'
                t['reason'] = ('Every occurrence sits inside bold, maths, code or an '
                               'existing link; linking would require rewriting prose.')
                t.pop('plan', None)
            continue

        surface = body[m.start():m.end()]
        edits.append((s + m.start(), s + m.end(), '[%s](!%s)' % (surface, url)))
        planted += 1
        print('  KEEP  %-30s %-24s -> %s' % (slug, term, url))
        if apply:
            t['status'] = 'linked'
            t['links'] = [{
                'fromSection': sec, 'surface': surface, 'target': tgt,
                'method': plan['method'], 'crossSubject': plan.get('crossSection'),
                'rationale': KEEP[(slug, term)], 'added': TODAY,
            }]
            t.pop('plan', None)

    if apply and edits:
        new = raw
        for a, b, rep in sorted(edits, key=lambda x: -x[0]):
            new = new[:a] + rep + new[b:]
        io.open(tool['pagePath'], 'w', encoding='utf-8', newline='').write(new)

print('\nplanted %d   dropped %d   blocked %d' % (planted, dropped, blocked))
if apply:
    REG['$meta']['lineTwo']['crossSubjectClosed'] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('WRITTEN')
else:
    print('DRY RUN - nothing written.')
