# Line 2 scanner - DRY RUN by default. Reports what would be linked on one tool
# page; writes nothing unless --apply is passed (not implemented yet on purpose).
#
# Follows line-2-agent-instructions-v3.md, with two documented departures forced
# by the data (see the report footer):
#   * `siteReferences` / `isRecommendedResource` do not exist in either
#     repository, so destination priorities 1 and 2 are unreachable. The entry's
#     own `link.url` content page is used first, then its definitions anchor.
#   * v3 specifies an `outgoingLinks` registry block, but the registry's own
#     $meta contract and the one completed tool (angle-explorer) both use
#     relatedTerms[].links[]. The reference shape wins.

import io, json, re, sys

INDEX = json.load(io.open('line2-concept-index.json', encoding='utf-8'))
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))

MIN_CHARS = 200
CAP_PER_SECTION = 5

# regions where a match must never be wrapped
SKIP = [
    (re.compile(r'\$\$.*?\$\$', re.S), 'display math'),
    (re.compile(r'\$[^$\n]*\$'), 'inline math'),
    (re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'), 'styled span'),
    (re.compile(r'\[[^\]]*\]\([^)]*\)'), 'existing link'),
    (re.compile(r'`[^`\n]*`'), 'code span'),
]


def masked(text):
    """Blank out regions matches must not land in, preserving offsets."""
    out = list(text)
    for pat, _ in SKIP:
        for m in pat.finditer(text):
            for i in range(m.start(), m.end()):
                out[i] = '\x00'
    return ''.join(out)


CONTENT = re.compile(r"\n\s*(obj\d+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")


def section_prose(page_src):
    """Map objN -> content string from a page's sectionsContent.

    TWO TRAPS, both of which silently produced empty strings that read as
    "section too short to link" rather than as a parse failure:

    * faqQuestions uses the SAME obj1..objN keys as sectionsContent, but its
      entries hold question/answer, not content. An unscoped scan runs past them
      to the next content: it can find, and the later match overwrites the real
      section. Extraction is therefore scoped to sectionsContent regions only.
    * The template literal must be matched escape-aware; a hand-rolled scanner
      mis-terminated on prose containing backslashes.
    """
    regions = []
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", page_src):
        tail = page_src[m.end():]
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", tail)
        regions.append(tail[:stop.start()] if stop else tail)
    blocks = {}
    for region in regions:
        for c in CONTENT.finditer('\n' + region):
            blocks.setdefault(c.group(1), c.group(2))
    return blocks


def wired_sections(page_src):
    """(objN, slug) pairs in render order, for any builder shape."""
    rows = re.findall(r"\b[A-Za-z][A-Za-z0-9_]*\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", page_src)
    if rows:
        return rows
    rows = re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", page_src)
    if rows:
        return rows
    # array-literal shape: { id: 'slug', title: sectionsContent.objN.title, ... }
    return [(m.group(2), m.group(1)) for m in
            re.finditer(r"id\s*:\s*'([a-z0-9\-]+)'[\s\S]{0,200}?sectionsContent(?:\.|\[')(\w+)", page_src)]


def strip_comments(src):
    src = re.sub(r"/\*.*?\*/", '', src, flags=re.S)
    return '\n'.join(l for l in src.split('\n') if not l.lstrip().startswith('//'))


def resolve(entry, tool_section):
    """Pick the candidate for this tool's section, else signal cross-section.

    Returns (chosen_entry, is_cross_section) or (None, None) when the concept
    lives only in an unrelated section and should be dropped as noise.
    """
    by = entry.get('bySection') or {}
    if tool_section in by:
        return by[tool_section], False
    return entry, True


def destination(entry):
    """v3 priority with siteReferences absent: content page, then definitions."""
    for field, method in (('contentUrl', 'repository-link'), ('defUrl', 'repository')):
        url = entry.get(field)
        if url and '/visual-tools/' not in url and '/calculators/' not in url:
            return url, method
    return None, None


def scan(tool_key):
    entry = REG['tools'][tool_key]
    page = entry['pagePath']
    if not page.endswith('.jsx'):
        print('registry pagePath is a URL, not a file:', page)
        return
    src = strip_comments(io.open(page, encoding='utf-8').read())
    prose = section_prose(src)
    order = wired_sections(src)

    # longest surface forms first so "reference angle" beats "angle"
    forms = sorted(INDEX, key=len, reverse=True)

    print('=' * 78)
    print('TOOL  %s   (%s)' % (tool_key, entry.get('section')))
    print('PAGE  %s' % page)
    print('=' * 78)

    seen_global = set()
    total, gaps, dropped = 0, [], []
    for obj, slug in order:
        text = prose.get(obj, '')
        if len(text) < MIN_CHARS:
            print('\n  %-38s SKIPPED (%d chars, under %d)' % (slug, len(text), MIN_CHARS))
            continue
        hay = masked(text).lower()
        hits, taken = [], []
        for form in forms:
            if len(hits) >= CAP_PER_SECTION:
                break
            e = INDEX[form]
            if e['entity'] in seen_global:
                continue
            m = re.search(r'(?<![a-z0-9])' + re.escape(form) + r'(?![a-z0-9])', hay)
            if not m:
                continue
            if any(a < m.start() < b for a, b in taken):
                continue
            chosen, cross = resolve(e, entry.get('section'))
            # a single-word concept from an unrelated section is noise, not a
            # link: "corner" pointing at calculus differentiability, "relation"
            # at /functions, "reciprocals" at arithmetic fractions
            if cross and ' ' not in form:
                dropped.append((slug, form, chosen['section'], 'single-word cross-section'))
                continue
            url, method = destination(chosen)
            surface = text[m.start():m.end()]
            if not url:
                gaps.append((slug, form, chosen['entity']))
                continue
            hits.append((surface, chosen['entity'], url, method, chosen['section']))
            taken.append((m.start(), m.end()))
            seen_global.add(chosen['entity'])
        total += len(hits)
        print('\n  %-38s %d link(s)   [%d chars]' % (slug, len(hits), len(text)))
        for surface, ent, url, method, sec in hits:
            cross = '' if sec == entry.get('section') else '  <-- CROSS-SECTION (%s)' % sec
            print('      %-26s -> %-46s %s%s' % ('"%s"' % surface, url, method, cross))

    print('\n' + '-' * 78)
    print('TOTAL candidate links: %d   distinct concepts: %d' % (total, len(seen_global)))
    if gaps:
        print('CONTENT GAPS (matched but no valid destination):')
        for slug, form, ent in gaps:
            print('   %-34s %s (%s)' % (slug, form, ent))
    if dropped:
        print('DROPPED AS NOISE (%d):' % len(dropped))
        for slug, form, sec, why in dropped[:14]:
            print('   %-30s "%s" -> %s  (%s)' % (slug, form, sec, why))
    print('DRY RUN - nothing written.')


if __name__ == '__main__':
    for key in sys.argv[1:]:
        scan(key)
