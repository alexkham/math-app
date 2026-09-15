# Corrects `fromSection` on the Line 2 links that were reconciled from prose
# predating this workstream.
#
# The ledger pass recorded those links with fromSection = the term's FIRST
# occurrence, which is not the same thing as the section the link is actually
# written in. 39 of them therefore claim to be in key-terms while the markdown
# lives somewhere else entirely - matrix-determinant's Key Terms block holds
# only `square matrix`, yet three records point at it.
#
# This locates each link by its URL in the live prose, records the section it is
# genuinely in, and fills in the surface text that was never captured.
#
# DRY RUN by default. --apply writes the registry only - no page is touched.

import io, json, re, sys, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))

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


apply = '--apply' in sys.argv
fixed = already = gone = 0
moves = collections.Counter()

for key in sorted(k for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'):
    tool = REG['tools'][key]
    slug = key.replace('linear-algebra-', '')
    todo = [t for t in tool['relatedTerms']
            if t['status'] == 'linked' and not t['links'][0].get('surface')]
    if not todo:
        continue

    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    slug_of = {o: s for o, s in wired(masked)}

    for t in todo:
        L = t['links'][0]
        tgt = L['target']
        url = tgt['path'] + ('#' + tgt['section'] if tgt.get('section') else '')
        # Match on PATH, with the anchor optional. The reconciliation recorded
        # the repository's URL rather than the page's: the page carries
        # [matrix rank theory page](!/linear-algebra/matrix/rank) while the
        # registry claims /linear-algebra/matrix/rank#1. The page is the truth
        # about where the link goes, so the real URL is read back here too.
        pat = re.compile(r'\[([^\]\n]*)\]\(!' + re.escape(tgt['path']) +
                         r'(#[a-z0-9_\-]+)?\)')
        found = None
        for obj, (s, e) in sp.items():
            if obj not in slug_of:
                continue
            m = pat.search(raw[s:e])
            if m:
                found = (slug_of[obj], m.group(1), m.group(2))
                break
        if not found:
            gone += 1
            print('  GONE  %-30s %-22s %s' % (slug, t['term'], url))
            continue
        sec, surf, anchor = found
        real_anchor = anchor[1:] if anchor else None
        same_sec = (sec == L.get('fromSection'))
        same_anchor = (real_anchor == tgt.get('section'))
        if same_sec and same_anchor:
            already += 1
            continue
        moves[(L.get('fromSection'), sec)] += 1
        fixed += 1
        print('  FIX   %-28s %-20s  %-14s -> %-20s  anchor %s -> %s'
              % (slug, t['term'], L.get('fromSection'), sec,
                 tgt.get('section'), real_anchor))
        if apply:
            L['fromSection'] = sec
            L['surface'] = surf
            L['target'] = {'path': tgt['path'], 'section': real_anchor}
            L['corrected'] = ('Reconciliation had recorded the term\'s first occurrence as '
                              'the link\'s section and the repository URL as its target; '
                              'both are now read from the page itself.')

print('\ncorrected %d   already right %d   link not found on page %d' % (fixed, already, gone))
if moves:
    print('\nmost common corrections:')
    for (a, b), c in moves.most_common(8):
        print('   %-18s -> %-22s %d' % (a, b, c))

if apply:
    io.open(REG_PATH, 'w', encoding='utf-8').write(
        json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('\nWRITTEN to %s' % REG_PATH)
else:
    print('\nDRY RUN - nothing written.')
