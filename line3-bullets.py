# Line 3 - append the symmetry-closure sentences (method: added-sentence) to the
# related-concepts section of each tool page, in the page's own style.
#
#   python line3-bullets.py --section=trigonometry [--apply]
#
# Styles: "bullet"      -> "\n• <line>"                (most pages)
#         "para"        -> "\n\n<line>"                (basic-identities)
#         "para-title"  -> "\n\n<line>"                (supplementary; same as para)
#         "legacy-special" -> paragraph appended to sectionsContent.special.content
#                             on the legacy unit-circle page.
# Idempotent: a line whose bold lead-in already exists in the block is skipped.

import io, json, re, sys

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'trigonometry')
apply = '--apply' in sys.argv
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
PLAN = json.load(io.open('line3-bullets-%s.json' % SECTION, encoding='utf-8'))
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


def file_of(tool):
    p = tool['pagePath']
    return p if p.startswith('pages/') else 'pages' + p + '/index.jsx'


def block_span(masked, key):
    """(start, end) of sectionsContent.<key>.content template literal."""
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", masked):
        tail = m.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", masked[tail:])
        end = tail + (stop.start() if stop else len(masked) - tail)
        for c in CONTENT.finditer(masked, tail, end):
            if c.group(1) == key:
                return c.start(2), c.end(2)
    return None


def related_key(masked):
    live = masked[masked.rfind('const genericSections'):]
    m = re.search(r"id\s*:\s*[`'\"]related-concepts[a-z\-]*[`'\"]", live)
    if not m:
        return None
    k = re.search(r"sectionsContent(?:\.(\w+)|\[\s*'(\w+)'\s*\])", live[m.end():m.end() + 400])
    return (k.group(1) or k.group(2)) if k else None


total = 0
for key, plan in PLAN.items():
    if key.startswith('_'):
        continue
    tool = REG['tools'][key]
    path = file_of(tool)
    raw = io.open(path, encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    style = plan['style']
    okey = 'special' if style == 'legacy-special' else related_key(masked)
    span = block_span(masked, okey) if okey else None
    if not span:
        print('%-32s NO related block found' % key)
        continue
    s, e = span
    body = raw[s:e]
    adds = []
    for line in plan['add']:
        lead = re.match(r'\*\*([^*]+)\*\*', line)
        if lead and lead.group(1) in body:
            continue
        if style == 'legacy-special' and line[:40] in body:
            continue
        adds.append(line)
    if not adds:
        print('%-32s nothing to add' % key)
        continue
    if style == 'bullet':
        ins = ''.join('\n• ' + l for l in adds)
    elif style == 'legacy-special':
        ins = '\n\n' + '\n\n'.join(adds)
    else:
        ins = ''.join('\n\n' + l for l in adds)
    new_body = body.rstrip() + ins + ('\n' if body.endswith('\n') else '')
    print('%-32s +%d (%s -> %s)' % (key, len(adds), okey, style))
    total += len(adds)
    if apply:
        io.open(path, 'w', encoding='utf-8', newline='').write(raw[:s] + new_body + raw[e:])

print('\n%d sentence(s) %s' % (total, 'WRITTEN' if apply else 'planned - DRY RUN'))
