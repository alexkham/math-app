# Line 3 SCAN - tool -> tool mentions inside one section's visual-tool pages.
#
# Read-only. Produces the pair table (doc step 2), the asymmetry list (step 3)
# and the thin-strip list, and saves the candidates to line3-pairs-<section>.json
# for line3-write.py. Nothing is written to pages or the registry here.
#
#   python line3-scan.py --section=trigonometry
#
# Matching: each target tool has aliases (name minus "Explorer/Visualizer/...",
# slug words, plus the per-section ALIASES table). Search priority per source
# page: related-concepts(-and-tools) section -> key-terms -> a sentence that
# gestures at a tool ("tool", "explorer", "visualizer") -> plain body. One record
# per (source, target); the highest-priority occurrence wins. Existing links to
# the target URL count as already-linked records.
#
# Masking follows line2-write.py: never match inside $..$, $$..$$, code spans,
# @span[..]:[..]@, or an existing link. Bold is NOT masked - the bold lead-ins in
# Related Concepts are exactly the candidates, and the bold is dropped when the
# term becomes the link. Comments are masked length-preservingly.

import io, json, re, sys, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'trigonometry')

REG = json.load(io.open(REG_PATH, encoding='utf-8'))
TOOLS = {k: v for k, v in REG['tools'].items() if v.get('section') == SECTION}

STRIP_WORDS = {'explorer', 'visualizer', 'visualiser', 'calculator', 'generator', 'interactive',
               'tool', 'trigonometric', 'trigonometry', 'the'}

ALIASES = {
    'trigonometry': {
        'angle-explorer': ['angle explorer'],
        'basic-identities': ['basic identities', 'basic trigonometric identities', 'reciprocal and quotient identities'],
        'double-angle-identities': ['double angle identities', 'double-angle identities', 'double angle identity',
                                    'double-angle identity', 'double angle formulas', 'double-angle formulas'],
        'half-angle-identities': ['half angle identities', 'half-angle identities', 'half angle identity',
                                  'half-angle identity', 'half angle formulas', 'half-angle formulas'],
        'functions-graphs': ['functions graphs', 'function graphs', 'trigonometric functions graphs',
                             'graphs of trigonometric functions', 'graphs of the trigonometric functions',
                             'trigonometric graphs', 'trig function graphs', 'graphing trigonometric functions',
                             'interactive trigonometric functions graphs', 'trigonometric function graphs'],
        'basic-identities': ['basic identities', 'basic trigonometric identities', 'reciprocal and quotient identities'],
        'pythagorean-identities': ['pythagorean identities', 'pythagorean identity'],
        'supplementary-angle-identities': ['supplementary angle identities', 'supplementary-angle identities',
                                           'supplementary angle identity', 'supplementary-angle identity'],
        'negative-angle-identities': ['negative angle identities', 'negative-angle identities',
                                      'negative angle identity', 'negative-angle identity', 'even-odd identities',
                                      'even odd identities', 'opposite angle identities'],
        'trigonometry-unit-circle': ['unit circle visualizer', 'unit circle'],
        'triangle-explorer': ['triangle explorer', 'interactive triangle explorer'],
        'trigonometry-angle-types': ['angle types', 'angle types explorer', 'types of angles', 'angle classifications',
                                     'angle classification'],
        'trigonometry-functions-signs': ['function signs', 'functions signs', 'function signs by quadrant',
                                         'signs of trigonometric functions', 'signs of the trigonometric functions',
                                         'signs by quadrant', 'astc', 'quadrant signs', 'sign chart'],
    },
    'functions': {
        'functions-asymptotes': ['asymptote', 'asymptotes', 'function asymptotes',
                                 'vertical asymptote', 'horizontal asymptote', 'oblique asymptote'],
        'functions-composition': ['composition', 'function composition', 'composite function',
                                  'composing functions'],
        'functions-domain': ['domain', 'function domain', 'domain of a function'],
        'functions-inverse': ['inverse function', 'inverse functions', 'inverse of a function',
                              'inverse function visualizer'],
        'functions-piecewise': ['piecewise function', 'piecewise functions', 'piecewise',
                                'piecewise function builder'],
        'functions-range': ['range', 'function range', 'range of a function'],
        'functions-reflections': ['reflection', 'reflections', 'function reflections'],
        'functions-symmetry': ['symmetry', 'function symmetry', 'even and odd symmetry',
                               'even odd symmetry'],
        'functions-tangent-line': ['tangent line', 'tangent lines', 'tangent line visualizer'],
        'functions-transformations': ['transformation', 'transformations', 'function transformations',
                                      'graph transformations'],
        'functions-types': ['function family', 'function families', 'families gallery',
                            'functions families gallery', 'function types', 'families of functions'],
    },
    'complex-numbers': {
        'addition-subtraction': ['addition and subtraction', 'complex addition', 'complex subtraction',
                                 'addition & subtraction', 'adding and subtracting complex numbers',
                                 'complex addition & subtraction'],
        'complex-conjugate': ['complex conjugate', 'conjugate and modulus', 'conjugates',
                              'complex conjugate and modulus'],
        'complex-explorer': ['complex explorer', 'complex number explorer', 'complex plane explorer'],
        'demoivre-visualizer': ["de moivre's theorem", 'de moivre theorem', 'de moivre', "demoivre's theorem",
                                "de moivre's formula"],
        'distance-midpoint': ['distance and midpoint', 'distance & midpoint', 'complex distance',
                              'distance between complex numbers', 'midpoint'],
        'division': ['complex division', 'division of complex numbers', 'dividing complex numbers',
                     'division visualizer'],
        'euler-formula': ["euler's formula", 'euler formula', "euler's identity", 'exponential form'],
        'i-powers': ['powers of i', 'powers of $i$', 'cyclic powers', 'i powers'],
        'multiplication': ['complex multiplication', 'multiplication of complex numbers',
                           'multiplying complex numbers'],
        'polar-rectangular': ['polar-rectangular', 'polar and rectangular', 'polar rectangular converter',
                              'polar form', 'rectangular form', 'polar-rectangular converter'],
    },
    'calculus': {
        'calculus-average-rate-of-change': ['average rate of change', 'average rate', 'secant slope'],
        'calculus-continuity': ['continuity', 'continuity checker', 'continuous function',
                                'discontinuity', 'discontinuities'],
        'calculus-derivative': ['derivative', 'derivatives', 'derivative explorer',
                                'instantaneous rate of change'],
        'calculus-fundamental-theorem': ['fundamental theorem of calculus', 'fundamental theorem',
                                         'ftc'],
        'calculus-inflection-points': ['inflection point', 'inflection points', 'concavity',
                                       'concavity and inflection points', 'second derivative test'],
        'calculus-limit': ['limit', 'limits', 'limit explorer', 'one-sided limit', 'one-sided limits'],
        'calculus-mean-value-theorem': ['mean value theorem', 'mvt', "rolle's theorem"],
        'calculus-newtons-method': ["newton's method", 'newton method', 'newton-raphson',
                                    "newton's method visualizer"],
        'calculus-optimization': ['optimization', 'critical point', 'critical points',
                                  'first derivative test', 'maxima and minima', 'extrema'],
        'calculus-riemann-sum': ['riemann sum', 'riemann sums', 'definite integral', 'area under the curve'],
        'calculus-tangent-line': ['tangent line', 'tangent lines', 'tangent line at a point'],
    },
}

SKIP = [
    re.compile(r'\$\$.*?\$\$', re.S),
    re.compile(r'\$[^$\n]*\$'),
    re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'),
    re.compile(r'@\[[^\]]*\]@'),
    re.compile(r'`[^`\n]*`'),
]
LINK = re.compile(r'\[([^\]\n]+)\]\(!?([^)\n]+)\)')
CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")


def url_of(tool):
    p = tool['pagePath']
    return p if not p.startswith('pages/') else '/' + p[len('pages/'):-len('/index.jsx')]


def file_of(tool):
    p = tool['pagePath']
    return p if p.startswith('pages/') else 'pages' + p + '/index.jsx'


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
    for pat in SKIP + [LINK]:
        for m in pat.finditer(text):
            for i in range(m.start(), m.end()):
                out[i] = '\x00'
    return ''.join(out)


def content_blocks(masked):
    """key -> content text, scoped to sectionsContent."""
    blocks = {}
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", masked):
        tail = m.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", masked[tail:])
        end = tail + (stop.start() if stop else len(masked) - tail)
        for c in CONTENT.finditer(masked, tail, end):
            blocks.setdefault(c.group(1), c.group(2))
    return blocks


def section_map(masked):
    """slug -> sectionsContent key, from the LIVE genericSections."""
    out = {}
    live = masked[masked.rfind('const genericSections'):] if 'const genericSections' in masked else masked
    for m in re.finditer(r"id\s*:\s*[`'\"]([a-z0-9\-]+)[`'\"]", live):
        window = live[m.end():m.end() + 400]
        k = re.search(r"sectionsContent(?:\.(\w+)|\[\s*'(\w+)'\s*\])", window)
        if k:
            out.setdefault(m.group(1), k.group(1) or k.group(2))
    # Case C wiring: plain('objN', 'slug') / ['objN','slug']
    for o, s in re.findall(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked):
        out.setdefault(s, o)
    for o, s in re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked):
        out.setdefault(s, o)
    return out


def aliases_for(key, tool):
    words = [w for w in re.sub(r'[^a-z0-9 ]', ' ', tool['name'].lower()).split() if w not in STRIP_WORDS]
    base = ' '.join(words)
    # a one-word base ("angle", "triangle") matches everything - only keep it
    # when it is at least two words; single words must come from ALIASES.
    al = {tool['name'].lower()} | ({base} if len(words) >= 2 else set())
    al |= set(ALIASES.get(SECTION, {}).get(key, []))
    return sorted((a for a in al if len(a) >= 5), key=len, reverse=True)


def priority(slug, text_around):
    if slug.startswith('related-concepts'):
        return 0
    if slug == 'key-terms':
        return 1
    if re.search(r'\b(tool|explorer|visuali[sz]er|calculator)\b', text_around, re.I):
        return 2
    return 3


pairs = {}          # (src, tgt) -> record
for skey, stool in sorted(TOOLS.items()):
    raw = io.open(file_of(stool), encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    blocks = content_blocks(masked)
    smap = section_map(masked)
    for tkey, ttool in TOOLS.items():
        if tkey == skey:
            continue
        turl = url_of(ttool)
        best = None
        for slug, okey in smap.items():
            text = blocks.get(okey)
            if not text:
                continue
            # already linked to the target from this section?
            for lm in LINK.finditer(text):
                if lm.group(2).rstrip('/') == turl:
                    cand = (-1, slug, lm.group(1), True)
                    if best is None or cand[0] < best[0]:
                        best = cand
            guard = mask_regions(text).lower()
            for a in aliases_for(tkey, ttool):
                m = re.search(r'(?<![a-z0-9])' + re.escape(a) + r'(?![a-z0-9])', guard)
                if not m:
                    continue
                around = text[max(0, m.start() - 80):m.end() + 80]
                pr = priority(slug, around)
                cand = (pr, slug, text[m.start():m.end()], False)
                if best is None or cand[0] < best[0]:
                    best = cand
                break
        if best:
            pr, slug, surface, existing = best
            pairs[(skey, tkey)] = {'key': tkey, 'fromSection': slug, 'surface': surface,
                                   'method': 'scan', 'existing': existing, 'priority': pr}

# ---- report -----------------------------------------------------------------
out = collections.defaultdict(list)
for (s, t), rec in pairs.items():
    out[s].append(rec)

print('PAIR TABLE - %s (%d tools)' % (SECTION, len(TOOLS)))
for skey in sorted(TOOLS):
    recs = sorted(out.get(skey, []), key=lambda r: (r['priority'], r['key']))
    print('\n%s  (%d outgoing)' % (skey, len(recs)))
    for r in recs:
        print('   -> %-32s %-32s %-40s %s' % (r['key'], r['fromSection'][:32], repr(r['surface'])[:40],
                                            'LINKED' if r['existing'] else 'p%d' % r['priority']))

print('\nASYMMETRIC EDGES (A->B without B->A)')
for (s, t) in sorted(pairs):
    if (t, s) not in pairs:
        print('   %-32s -> %-32s   (no reverse)' % (s, t))

print('\nTHIN STRIPS (< 3 outgoing)')
for skey in sorted(TOOLS):
    if len(out.get(skey, [])) < 3:
        print('   %-32s %d' % (skey, len(out.get(skey, []))))

save = {s: sorted(recs, key=lambda r: (r['priority'], r['key'])) for s, recs in out.items()}
io.open('line3-pairs-%s.json' % SECTION, 'w', encoding='utf-8').write(
    json.dumps(save, ensure_ascii=False, indent=2) + '\n')
print('\nsaved line3-pairs-%s.json  (%d pairs)' % (SECTION, len(pairs)))
