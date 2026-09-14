# Prints the sentence a pending cross-subject term actually sits in, so the
# keep-or-drop call is made against the prose rather than against the term name.
# Read-only.

import io, json, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

WANT = set(sys.argv[1:])  # optional tool-slug filter


def live(src):
    src = '\n'.join('' if l.lstrip().startswith('//') else l for l in src.split('\n'))
    return re.sub(r'/\*.*?\*/', '', src, flags=re.S)


CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")

for key in sorted(LA):
    slug = key.replace('linear-algebra-', '')
    if WANT and slug not in WANT:
        continue
    pend = [t for t in LA[key]['relatedTerms'] if t['status'] == 'pending']
    if not pend:
        continue
    src = live(io.open(LA[key]['pagePath'], encoding='utf-8').read())
    blocks = {m.group(1): m.group(2) for m in CONTENT.finditer(src)}
    order = re.findall(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", src) or \
            re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", src)
    by_slug = {s: o for o, s in order}
    for t in pend:
        sec = t['plan']['fromSection']
        body = blocks.get(by_slug.get(sec, ''), '')
        m = re.search(r'[^.\n]*(?<![a-z0-9])' + re.escape(t['term']) + r'(?![a-z0-9])[^.\n]*\.', body, re.I)
        snip = ' '.join(m.group(0).split()) if m else '(sentence not located)'
        print('%-30s %-24s [%s]' % (slug, t['term'], sec))
        print('    %s' % snip[:300])
        print('    -> %s' % (t['plan']['target']['path'] +
                             ('#' + t['plan']['target']['section'] if t['plan']['target'].get('section') else '')))
        print()
