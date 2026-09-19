# Line 2 LEDGER pass - registry only, never touches a .jsx page.
#
# Reads each tool page's live prose, rebuilds the relatedTerms list from a full
# scan (no caps - $meta.completeness requires that a re-scan yield no missing
# term), resolves each term to a repository entity and a destination, and writes
# the dispositioned list back into visual-tools-registry.json.
#
# DRY RUN by default. Pass --apply to write.
#
# Relationship to line2-scan.py: that script is the LINKING scanner and is left
# untouched. This one reuses its extraction logic with three deliberate changes,
# each of which matters for a ledger rather than for a linking pass:
#
#   1. strip_comments order is FIXED. line2-scan.py removes /* */ blocks before
#      dropping // lines, so a /* appearing inside a // comment (e.g. a path
#      written as /linear-algebra/visual-tools/*) opens a false block comment.
#      On matrix-multiplication that silently discards 28,625 characters - the
#      whole live prose body - and it costs 428-642 characters on ten more
#      pages, 11 of 45 in total, with no error raised. Line comments are blanked
#      FIRST here, preserving line count, and only then are block comments cut.
#   2. No MIN_CHARS skip and no CAP_PER_SECTION. Those are linking-discipline
#      limits: they decide how many links a section should carry, not which
#      concepts occur in it. A ledger must record every occurrence.
#   3. All occurrences of a term are collected, not just the first, so
#      `sections` is the full occurrence list the contract asks for.
#
# Statuses written here:
#   linked  - the page already carries a live in-text link to this entity's
#             destination (the 48 pre-existing content links), reconciled in so a
#             later write pass does not double-link.
#   dropped - single-word cross-section noise (rule inherited from
#             line2-scan.py), or no usable theory destination (a content gap,
#             recorded with a backlog note in the angle-explorer style).
#   pending - should be linked; the write pass has not run yet. Each pending
#             term carries a `plan` holding exactly the link record that pass
#             would write, so the step is mechanical rather than a re-decision.
#
# `plan` is additive to the $meta contract (entity / sections / status /
# links[] | reason). If line-2-agent-instructions-v3.md names this field
# differently, rename it here - nothing else depends on the name.

import io, json, re, sys, datetime

REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
INDEX_PATH = 'line2-concept-index.json'
# Section is a flag now, so the next subject runs the same pass unchanged:
#   python line2-ledger.py --section=probability [--apply]
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'linear-algebra')
TODAY = datetime.date.today().isoformat()

INDEX = json.load(io.open(INDEX_PATH, encoding='utf-8'))
REG = json.load(io.open(REG_PATH, encoding='utf-8'))

# regions a term match must never be read out of
SKIP = [
    (re.compile(r'\$\$.*?\$\$', re.S), 'display math'),
    (re.compile(r'\$[^$\n]*\$'), 'inline math'),
    (re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'), 'styled span'),
    (re.compile(r'\[[^\]]*\]\([^)]*\)'), 'existing link'),
    (re.compile(r'`[^`\n]*`'), 'code span'),
]

CONTENT = re.compile(r"\n\s*(obj\d+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")


def strip_comments(src):
    """Line comments first, then block comments. Order is load-bearing."""
    src = '\n'.join('' if l.lstrip().startswith('//') else l
                    for l in src.split('\n'))
    return re.sub(r'/\*.*?\*/', '', src, flags=re.S)


def masked(text):
    out = list(text)
    for pat, _ in SKIP:
        for m in pat.finditer(text):
            for i in range(m.start(), m.end()):
                out[i] = '\x00'
    return ''.join(out)


def section_prose(page_src):
    """objN -> content string, scoped to sectionsContent so faqQuestions'
    identically-named obj keys cannot overwrite a real section."""
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
    rows = re.findall(r"\b[A-Za-z][A-Za-z0-9_]*\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", page_src)
    if rows:
        return rows
    rows = re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", page_src)
    if rows:
        return rows
    return [(m.group(2), m.group(1)) for m in
            re.finditer(r"id\s*:\s*'([a-z0-9\-]+)'[\s\S]{0,200}?sectionsContent(?:\.|\[')(\w+)", page_src)]


def resolve(entry, tool_section):
    by = entry.get('bySection') or {}
    if tool_section in by:
        return by[tool_section], False
    return entry, True


def destination(entry):
    """Content page first, then the definitions/formulas anchor.

    v3 priorities 1 and 2 (siteReferences / isRecommendedResource) do not exist
    in either repository, so they are unreachable - same departure line2-scan.py
    documents. A destination inside /visual-tools/ or /calculators/ is refused:
    tool-to-tool is Line 3's job and is already done for this section.
    """
    for field, method in (('contentUrl', 'repository-link'), ('defUrl', 'repository')):
        url = entry.get(field)
        if url and '/visual-tools/' not in url and '/calculators/' not in url:
            return url, method
    return None, None


def existing_links(page_src):
    """Live in-text content links already on the page: set of target paths,
    both with and without their #anchor, so a plan can be matched either way."""
    out = set()
    for m in re.finditer(r'\]\(!(/[a-z0-9\-/]+(?:#[a-z0-9_\-]+)?)\)', page_src):
        u = m.group(1)
        if '/visual-tools/' in u:
            continue
        out.add(u)
        out.add(u.split('#')[0])
    return out


def build(tool_key):
    entry = REG['tools'][tool_key]
    page = entry['pagePath']
    if not page.endswith('.jsx'):
        return None, 'pagePath is a URL, not a file: %s' % page

    raw = io.open(page, encoding='utf-8').read()
    src = strip_comments(raw)
    prose = section_prose(src)
    order = wired_sections(src)
    have = existing_links(src)

    # longest surface forms first so "reference angle" beats "angle"
    forms = sorted(INDEX, key=len, reverse=True)

    # entity -> record under construction
    found = {}
    for obj, slug in order:
        text = prose.get(obj, '')
        if not text:
            continue
        hay = masked(text).lower()
        taken = []
        for form in forms:
            m = re.search(r'(?<![a-z0-9])' + re.escape(form) + r'(?![a-z0-9])', hay)
            if not m:
                continue
            # a longer form already claimed this span
            if any(a <= m.start() < b for a, b in taken):
                continue
            chosen, cross = resolve(INDEX[form], entry.get('section'))
            ent = chosen['entity']
            taken.append((m.start(), m.end()))
            rec = found.get(ent)
            if rec is None:
                url, method = destination(chosen)
                rec = found[ent] = {
                    'term': form,
                    'entity': ent,
                    'sections': [],
                    'cross': cross,
                    'form_len': len(form),
                    'url': url,
                    'method': method,
                    'defurl': chosen.get('defUrl'),
                    'src_section': chosen.get('section'),
                }
            if slug not in rec['sections']:
                rec['sections'].append(slug)

    def def_target(r):
        """The definitions/formulas anchor for this entity, recorded alongside
        the lesson destination. Owner's decision 2026-09-13: lesson pages get
        linked first, definitions pages are a later pass - so the address is
        captured now rather than re-derived then. Omitted when it is the same
        place the lesson link already points."""
        u = r.get('defurl')
        if not u or u == r.get('url'):
            return None
        return {'path': u.split('#')[0],
                'section': (u.split('#')[1] if '#' in u else None)}

    terms = []
    for ent, r in found.items():
        rec = {'term': r['term'], 'entity': ent, 'sections': r['sections']}
        if r['cross'] and ' ' not in r['term']:
            rec['status'] = 'dropped'
            rec['reason'] = ('Single-word match resolving to the %s section; '
                             'ambiguous surface form, not a concept reference on '
                             'this page.' % r['src_section'])
        elif not r['url']:
            rec['status'] = 'dropped'
            rec['reason'] = ('No theory destination: the %s repository entry has '
                             'no content page or definitions anchor outside '
                             '/visual-tools/. Backlog: content page for %s.'
                             % (r['src_section'], ent))
        elif r['url'] in have or r['url'].split('#')[0] in have:
            rec['status'] = 'linked'
            rec['links'] = [{
                'fromSection': r['sections'][0] if r['sections'] else None,
                'target': {'path': r['url'].split('#')[0],
                           'section': (r['url'].split('#')[1] if '#' in r['url'] else None)},
                'method': 'pre-existing',
                'added': TODAY,
            }]
            dt = def_target(r)
            if dt:
                rec['definitionTarget'] = dt
        else:
            rec['status'] = 'pending'
            rec['plan'] = {
                'fromSection': r['sections'][0] if r['sections'] else None,
                'target': {'path': r['url'].split('#')[0],
                           'section': (r['url'].split('#')[1] if '#' in r['url'] else None)},
                'method': r['method'],
                'crossSection': r['src_section'] if r['cross'] else None,
            }
            dt = def_target(r)
            if dt:
                rec['definitionTarget'] = dt
        terms.append(rec)

    terms.sort(key=lambda t: (t['status'], t['term']))
    return terms, None


def main():
    apply = '--apply' in sys.argv
    keys = sorted(k for k, v in REG['tools'].items() if v.get('section') == SECTION)

    tot = {'linked': 0, 'dropped': 0, 'pending': 0}
    before = 0
    rows = []
    for k in keys:
        terms, err = build(k)
        if err:
            print('SKIP %s - %s' % (k, err))
            continue
        before += len(REG['tools'][k]['relatedTerms'])
        c = {'linked': 0, 'dropped': 0, 'pending': 0}
        for t in terms:
            c[t['status']] += 1
            tot[t['status']] += 1
        rows.append((k, len(REG['tools'][k]['relatedTerms']), len(terms), c))
        if apply:
            REG['tools'][k]['relatedTerms'] = terms

    print('%-44s %5s %5s   %6s %7s %7s' % ('tool', 'was', 'now', 'linked', 'dropped', 'pending'))
    for k, b, n, c in rows:
        print('%-44s %5d %5d   %6d %7d %7d'
              % (k.replace('linear-algebra-', ''), b, n, c['linked'], c['dropped'], c['pending']))
    print('-' * 80)
    print('%-44s %5d %5d   %6d %7d %7d'
          % ('TOTAL (%d tools)' % len(rows), before,
             sum(r[2] for r in rows), tot['linked'], tot['dropped'], tot['pending']))

    if apply:
        REG['$meta']['lineTwo'] = {
            'linearAlgebraLedgerFilled': TODAY,
            'note': ('Ledger-only pass: relatedTerms rebuilt from a full re-scan and '
                     'dispositioned. No page prose was edited. Pending entries carry a '
                     '`plan` holding the link record a Line 2 write pass would emit.'),
            'destinationPolicy': (
                'v3 destination priorities 1 and 2 are unreachable: siteReferences / '
                'isRecommendedResource exist on 0 of 1218 repository entries. Owner '
                'decision 2026-09-13: link lesson (theory) pages first, via the entry\'s '
                'link.url; definitions pages are a second pass. Each linked and pending '
                'term therefore also carries `definitionTarget`, the definitions or '
                'formulas anchor, so that pass needs no re-derivation.'),
            'knownDeviations': [
                'Record shape is relatedTerms[].links[] per the $meta contract and the '
                'angle-explorer reference, not v3 step 6\'s outgoingLinks block.',
                'No MIN_CHARS skip and no CAP_PER_SECTION at ledger stage - those are '
                'linking limits. 40 pending links across 21 sections exceed v3\'s cap of '
                '5 per section and must be trimmed by the write pass.',
                '33 pending terms resolve outside linear-algebra and carry '
                'plan.crossSection; cross-subject linking is on hold, so they are '
                'excluded from the same-section write queue pending review.',
            ],
        }
        io.open(REG_PATH, 'w', encoding='utf-8').write(
            json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
        print('\nWRITTEN to %s' % REG_PATH)
    else:
        print('\nDRY RUN - nothing written. Re-run with --apply.')


if __name__ == '__main__':
    main()
