# Static anchor/section check for Line 1 pages - no dev server needed.
#
# Collects the wired section slugs, then every in-page anchor target the page
# can emit (markdown (!#slug) links in section prose, slugs passed to the
# note()/MORE()/LNK() panel helpers, and raw <a href="#slug"> anchors used by
# the dangerouslySetInnerHTML components) and reports orphans, duplicate ids
# and leftover numeric ids.
#
# THREE SECTION-BUILDER SHAPES ARE RECOGNISED. Earlier versions only knew the
# first, which made pages using the others report "0 sections" with every anchor
# orphaned - a false negative that cost real time on trigonometry/angle-types
# and trigonometry/functions-signs before it was diagnosed.
#
#   A. helper calls      plain('obj3', 'slug') / stateRow('obj3', 'slug', 'unit')
#   B. per-view tuples   ['obj3', 'slug'] / ['obj3', 'slug', 'unitKey'] inside an
#                        orderByView / sectionOrder list
#   C. array literal     { id: 'slug', title: ..., content: [...] } written out
#                        inside the genericSections array
#
# Shape C ids are read only from the genericSections region, so `id:` fields that
# belong to schemas, FAQ entries or intro content are not mistaken for sections.

import re
import sys

# Any helper of the shape name('objN', 'slug', ...) counts as a wired section.
# Matching by SHAPE rather than by a fixed name list matters: `withAfter` was
# added on four set-theory pages and one algebra page long after the original
# list was written, and a name-based regex silently reported their anchors as
# orphans instead.
HELPER = re.compile(r"\b[A-Za-z][A-Za-z0-9_]*\(\s*'obj\d+'\s*,\s*'([^']+)'")
TUPLE = re.compile(r"\[\s*'obj\d+'\s*,\s*'([^']+)'(?:\s*,\s*'([^']+)')?\s*\]")
LITERAL_ID = re.compile(r"\bid\s*:\s*'([^']+)'")


VIEW_LIST = re.compile(r"^\s{4}'?([a-z0-9\-]+)'?\s*:\s*\[\s*$", re.M)

BLOCK_COMMENT = re.compile(r"/\*.*?\*/", re.S)


def strip_comments(src):
    """Drop commented-out code before any extraction.

    Every page in this repo carries a commented head that is a FULL earlier copy
    of the file, numeric section ids and all. Scanning it reports ids the page
    never emits and anchors it never links - which is where the 'leftover
    numeric ids 0-15' noise on the identities and complex-numbers pages came
    from. Line-level stripping is safe here: a URL's // never starts a line.
    """
    src = BLOCK_COMMENT.sub('', src)
    return '\n'.join(l for l in src.split('\n') if not l.lstrip().startswith('//'))


SLUG_MAP = re.compile(r"const\s+VIEW_SLUGS\s*=\s*\{(.*?)\n  \}", re.S)
SLUG_ENTRY = re.compile(r"'([a-z0-9\-]+)'\s*:\s*\[(.*?)\]", re.S)


def per_view_slug_map(src):
    """Shape E: a VIEW_SLUGS map read positionally as `slugs[n - 1]`.

    Used by algebra/identities, where the eight section slots are shared across
    views but named differently per view.
    """
    m = SLUG_MAP.search(src)
    if not m:
        return None
    views = {}
    for e in SLUG_ENTRY.finditer(m.group(1)):
        slugs = re.findall(r"'([a-z0-9\-]+)'", e.group(2))
        if slugs:
            views[e.group(1)] = [(s, None) for s in slugs]
    return views or None


def per_view_lists(src):
    """Split an orderByView map into one slug list per view.

    A dynamic [view].jsx route renders each view as a SEPARATE page, so the same
    slug appearing under two views is not a duplicate. Checking the flattened
    list reports false collisions on every multi-view route.
    """
    try:
        start = src.index('orderByView')
    except ValueError:
        return per_view_slug_map(src)
    end = src.find('\n  const ', start)
    if end == -1:
        end = len(src)
    region = src[start:end]
    views = {}
    for m in VIEW_LIST.finditer(region):
        name = m.group(1)
        tail = region[m.end():]
        stop = tail.find('\n    ],')
        body = tail[:stop] if stop != -1 else tail
        rows = TUPLE.findall(body)
        if rows:
            views[name] = rows
    return views or None


def section_ids(src):
    """Return (ids, unit_count, shape) for whichever builder the page uses."""
    ids = HELPER.findall(src)
    units = len(re.findall(r"[A-Za-z][A-Za-z0-9_]*\(\s*'obj\d+'\s*,\s*'[^']+'\s*,\s*'[^']+'", src))
    if ids:
        return ids, units, 'helpers'

    tuples = TUPLE.findall(src)
    if tuples:
        return [t[0] for t in tuples], sum(1 for t in tuples if t[1]), 'tuples'

    # shape C: read ids only from the genericSections region
    try:
        start = src.index('const genericSections')
    except ValueError:
        return [], 0, 'none'
    end = src.find('\n  return (', start)
    if end == -1:
        end = len(src)
    region = src[start:end]
    ids = LITERAL_ID.findall(region)
    units = len(set(re.findall(r"stateUnits\['([^']+)'\]", region)))
    return ids, units, 'array-literal'


def view_regions(src, view, all_views):
    """Concatenate every block keyed by `view`, up to the next view key.

    On a [view].jsx route the prose, the units and the panel-note helpers are all
    keyed by view name, and each view renders as its own page. Anchors written in
    one view's prose must be checked against THAT view's slugs, not the whole
    file's - otherwise every multi-view route reports false orphans.

    Blocks are delimited by the next view key rather than by brace matching:
    section prose is full of LaTeX braces inside template literals, so counting
    braces over-runs the block and swallows a neighbouring view.
    """
    key = lambda v: r"['\"]?" + re.escape(v) + r"['\"]?\s*:\s*[{\[]"
    starts = sorted(m.start() for v in all_views for m in re.finditer(key(v), src))
    out = []
    for m in re.finditer(key(view), src):
        nxt = next((p for p in starts if p > m.start()), len(src))
        out.append(src[m.start():nxt])
    return '\n'.join(out)


def anchor_targets(src):
    targets = set()
    targets |= {m for m in re.findall(r'\]\(!#([a-z0-9-]+)\)', src)}
    targets |= set(re.findall(r"(?:note|MORE|LNK)\(\s*'[^']*'\s*,\s*'([a-z0-9-]+)'", src))
    targets |= set(re.findall(r"(?:note|MORE|LNK)\(\s*'([a-z0-9-]+)'", src))
    targets |= set(re.findall(r'href="#([a-z0-9-]+)"', src))
    targets.discard('slug')   # placeholder inside the helper docs, not a real target
    return targets


def report(label, shape, ids, units, targets):
    """Check one page (or one view of one page) and print a line. Returns ok."""
    orphans = sorted(t for t in targets if t not in ids)
    dupes = sorted({i for i in ids if ids.count(i) > 1})
    numeric = sorted({i for i in ids if i.isdigit()})
    ok = not (orphans or dupes or numeric) and bool(ids)

    print('%s %-30s [%-13s] sections %3d  units %2d  anchor-targets %2d'
          % ('OK  ' if ok else 'FAIL', label, shape, len(ids), units, len(targets)))
    if orphans:
        print('       orphans:', orphans)
    if dupes:
        print('       duplicate ids:', dupes)
    if numeric:
        print('       leftover numeric ids:', numeric)
    if not ids:
        print('       no sections found - the page may use a builder shape this script '
              'does not recognise; check by hand before trusting this result')
    return ok


exit_code = 0
for path in sys.argv[1:]:
    src = strip_comments(open(path, encoding='utf-8').read())
    targets = anchor_targets(src)
    name = path.replace('\\', '/').split('/')[-2]

    views = per_view_lists(src)
    if views:
        # one page per view, so each view is checked on its own slug list
        for view, rows in views.items():
            ids = [r[0] for r in rows]
            units = sum(1 for r in rows if r[1])
            # anchors written under this view's own keys. Fall back to the whole
            # file only when the view has NO keyed blocks to scan - a view with
            # blocks but no anchors is a legitimate empty set, not a miss.
            region = view_regions(src, view, views.keys())
            scoped = anchor_targets(region) if region else targets
            if not report('%s/%s' % (name, view), 'per-view', ids, units, scoped):
                exit_code = 1
        continue

    ids, units, shape = section_ids(src)
    if not report(name, shape, ids, units, targets):
        exit_code = 1

sys.exit(exit_code)
