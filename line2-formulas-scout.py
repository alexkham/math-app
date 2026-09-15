# Scouts spots that should link to the formulas page.
#
# A formulas link belongs where the formula is actually ON SCREEN - a section
# that states the identity in display maths - not merely where the concept is
# named. So this reports, per formula-type concept, the sections that both
# mention the term and carry display maths, and whether that section already
# spends a Line 2 link on the term.
#
# Read-only.

import io, json, re, sys, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
DISPLAY = re.compile(r'\$\$.*?\$\$', re.S)


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


cands = []
already = 0
for key in sorted(LA):
    tool = LA[key]
    slug = key.replace('linear-algebra-', '')
    fterms = [t for t in tool['relatedTerms']
              if t['status'] == 'linked' and t.get('definitionTarget')
              and t['definitionTarget']['path'].endswith('/formulas')]
    if not fterms:
        continue
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    slug_of = {o: s for o, s in wired(masked)}

    for t in fterms:
        # already pointing at the formulas page?
        if any(L['target']['path'].endswith('/formulas') for L in t['links']):
            already += 1
            continue
        used = {L.get('fromSection') for L in t['links']}
        hits = []
        for obj, (s, e) in sp.items():
            sec = slug_of.get(obj)
            if not sec:
                continue
            body = raw[s:e]
            if not DISPLAY.search(body):
                continue
            if not re.search(r'(?<![a-z0-9])' + re.escape(t['term']) + r'(?![a-z0-9])',
                             body.lower()):
                continue
            hits.append((sec, sec in used, len(DISPLAY.findall(body))))
        if hits:
            free = [h for h in hits if not h[1]]
            cands.append((slug, t['term'], t['definitionTarget'], hits, free))

print('formula-type concepts already linked to /formulas: %d' % already)
print('formula-type concepts with a display-maths section available: %d\n' % len(cands))
print('%-30s %-24s %-34s %s' % ('tool', 'term', 'formulas anchor', 'sections with display maths'))
for slug, term, dt, hits, free in cands:
    marks = ', '.join('%s%s' % (s, '' if not u else ' (link already here)') for s, u, n in hits)
    print('%-30s %-24s %-34s %s' % (slug, term, '#' + (dt.get('section') or '?'), marks[:70]))
print('\nconcepts with at least one FREE display-maths section: %d'
      % sum(1 for c in cands if c[4]))
