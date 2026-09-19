# Line 2 WRITE pass - plants the planned links into the tool pages.
#
# Reads the pending plans the ledger produced and wraps each term's surface form
# in the live prose as [surface form](!url), then flips the record to linked.
#
# DRY RUN by default. --apply writes pages + registry.
#
# v3 rules enforced here:
#   * `!` prefix always, plain markdown, surface case preserved, no styled chip.
#   * One link per concept per page, planted in plan.fromSection.
#   * Cap 5 links per section; overflow is dropped with a reason, longest and
#     most specific surface forms kept.
#   * Never inside $...$, $$...$$, `code`, @span[...]:[...]@ or an existing link.
#   * Never rewrites prose - the only edit is wrapping an existing occurrence.
#   * Cross-subject plans are skipped: that work is on hold.
#
# Offsets matter here in a way they did not for the ledger. The comment mask is
# LENGTH-PRESERVING (comment characters become \x00 rather than being deleted),
# so every offset found in the masked copy indexes the original file exactly.
# Edits are then applied right-to-left so earlier offsets stay valid.
#
# CRLF: files are read and written with newline='' so line endings survive
# untouched - no normalize-and-restore step, and no accidental whole-file diff.

import io, json, re, sys, datetime, collections

REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
# Section is a flag: python line2-write.py --section=probability [--apply]
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'linear-algebra')
CAP_PER_SECTION = 5
TODAY = datetime.date.today().isoformat()

REG = json.load(io.open(REG_PATH, encoding='utf-8'))

SKIP = [
    re.compile(r'\$\$.*?\$\$', re.S),
    re.compile(r'\$[^$\n]*\$'),
    re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'),
    re.compile(r'@\[[^\]]*\]@'),
    re.compile(r'\[[^\]]*\]\([^)]*\)'),
    re.compile(r'`[^`\n]*`'),
    # Bold runs. The Key Terms sections are written as "**Term** - definition",
    # so an unguarded match lands inside the bold and produces **[Term](!url)**.
    # never bold+link is a standing rule, and processContent does not render the
    # combination reliably either. Masking the whole run pushes the link to a
    # later plain-prose occurrence of the same term, which is where it belongs.
    re.compile(r'\*\*[^*\n]*\*\*'),
]

CONTENT = re.compile(r"\n\s*(obj\d+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")


def mask_comments(src):
    """Blank comments to \\x00 WITHOUT changing length, so offsets still index
    the original. Line comments first - a /* inside a // line must not open a
    block (it silently ate 28k chars of live prose in line2-scan.py)."""
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
    """Blank spans a link must never land in, preserving offsets."""
    out = list(text)
    for pat in SKIP:
        for m in pat.finditer(text):
            for i in range(m.start(), m.end()):
                out[i] = '\x00'
    return ''.join(out)


def content_spans(masked):
    """objN -> (start, end) offsets of the section's content template literal,
    scoped to sectionsContent so faqQuestions' identical obj keys cannot win."""
    spans = {}
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", masked):
        tail_start = m.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)",
                         masked[tail_start:])
        region_end = tail_start + (stop.start() if stop else len(masked) - tail_start)
        for c in CONTENT.finditer(masked, tail_start, region_end):
            spans.setdefault(c.group(1), (c.start(2), c.end(2)))
    return spans


def wired_sections(masked):
    rows = re.findall(r"\b[A-Za-z][A-Za-z0-9_]*\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked)
    if rows:
        return rows
    rows = re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked)
    if rows:
        return rows
    return [(m.group(2), m.group(1)) for m in
            re.finditer(r"id\s*:\s*'([a-z0-9\-]+)'[\s\S]{0,200}?sectionsContent(?:\.|\[')(\w+)", masked)]


def url_of(plan):
    t = plan['target']
    return t['path'] + ('#' + t['section'] if t.get('section') else '')


def process(tool_key):
    entry = REG['tools'][tool_key]
    page = entry['pagePath']
    raw = io.open(page, encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    spans = content_spans(masked)
    slug_of = {obj: slug for obj, slug in wired_sections(masked)}

    # pending, same-section plans grouped by the section they belong in
    by_section = collections.defaultdict(list)
    skipped_cross = 0
    for rec in entry['relatedTerms']:
        if rec['status'] != 'pending':
            continue
        if rec['plan'].get('crossSection'):
            skipped_cross += 1
            continue
        by_section[rec['plan']['fromSection']].append(rec)

    edits = []       # (start, end, replacement)
    planted = []     # (rec, surface, url, slug)
    overflow = []    # (rec, slug)
    unmatched = []   # (rec, slug, why)

    for obj, slug in slug_of.items():
        recs = by_section.get(slug)
        if not recs or obj not in spans:
            continue
        s, e = spans[obj]
        body = raw[s:e]
        guard = mask_regions(body).lower()

        # longest surface form first: "linear independence" must beat "independence"
        recs = sorted(recs, key=lambda r: -len(r['term']))
        taken = []
        kept = 0
        for rec in recs:
            if kept >= CAP_PER_SECTION:
                overflow.append((rec, slug))
                continue
            pat = r'(?<![a-z0-9])' + re.escape(rec['term']) + r'(?![a-z0-9])'
            m = re.search(pat, guard)
            if not m:
                # Distinguish "the word is not on the page" from "the word is
                # here but every occurrence is bold, inside math, inside code or
                # already linked". The second is common in Key Terms sections and
                # is a real editorial finding, not an absence - recording it as
                # "not found" would be false.
                blocked = re.search(pat, body.lower()) is not None
                unmatched.append((rec, slug,
                                  'every occurrence sits inside bold, math, code or an '
                                  'existing link; linking would require rewriting prose'
                                  if blocked else
                                  'surface form does not occur in the live prose'))
                continue
            if any(a < m.end() and m.start() < b for a, b in taken):
                unmatched.append((rec, slug, 'overlaps a link already planted here'))
                continue
            surface = body[m.start():m.end()]          # preserve original case
            url = url_of(rec['plan'])
            edits.append((s + m.start(), s + m.end(), '[%s](!%s)' % (surface, url)))
            taken.append((m.start(), m.end()))
            planted.append((rec, surface, url, slug))
            kept += 1

    new = raw
    for a, b, rep in sorted(edits, key=lambda x: -x[0]):
        new = new[:a] + rep + new[b:]

    return {'page': page, 'raw': raw, 'new': new, 'planted': planted,
            'overflow': overflow, 'unmatched': unmatched, 'cross': skipped_cross}


def main():
    apply = '--apply' in sys.argv
    keys = sorted(k for k, v in REG['tools'].items() if v.get('section') == SECTION)

    tp = to = tu = tc = 0
    print('%-44s %8s %9s %10s' % ('tool', 'planted', 'over-cap', 'unmatched'))
    for k in keys:
        r = process(k)
        tp += len(r['planted']); to += len(r['overflow'])
        tu += len(r['unmatched']); tc += r['cross']
        print('%-44s %8d %9d %10d'
              % (k.replace('linear-algebra-', ''), len(r['planted']),
                 len(r['overflow']), len(r['unmatched'])))

        if not apply:
            continue

        if r['new'] != r['raw']:
            io.open(r['page'], 'w', encoding='utf-8', newline='').write(r['new'])

        for rec, surface, url, slug in r['planted']:
            rec['status'] = 'linked'
            rec['links'] = [{
                'fromSection': slug,
                'surface': surface,
                'target': rec['plan']['target'],
                'method': rec['plan']['method'],
                'added': TODAY,
            }]
            rec.pop('plan', None)
        for rec, slug in r['overflow']:
            rec['status'] = 'dropped'
            rec['reason'] = ('Section "%s" already carries the maximum of %d links; '
                             'this term is the lower-specificity surplus. Re-queryable '
                             'if the section is split.' % (slug, CAP_PER_SECTION))
            rec.pop('plan', None)
        for rec, slug, why in r['unmatched']:
            rec['status'] = 'dropped'
            rec['reason'] = 'Not planted in "%s": %s.' % (slug, why)
            rec.pop('plan', None)

    print('-' * 76)
    print('%-44s %8d %9d %10d' % ('TOTAL', tp, to, tu))
    print('cross-subject plans left pending (on hold): %d' % tc)

    if apply:
        REG['$meta']['lineTwo']['linearAlgebraLinksWritten'] = TODAY
        io.open(REG_PATH, 'w', encoding='utf-8').write(
            json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
        print('\nWRITTEN: pages + %s' % REG_PATH)
    else:
        print('\nDRY RUN - nothing written. Re-run with --apply.')


if __name__ == '__main__':
    main()
