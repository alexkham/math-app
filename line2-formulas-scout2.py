# Second attempt at finding formulas-page spots, scanning the right way round.
#
# The first scout started from the concepts already in relatedTerms and asked
# where their formulas anchor could go. That produced almost nothing usable,
# because those anchors were derived from the entity mapping and often do not
# name the formula at all ("pythagorean theorem" resolving to #inner_product).
#
# This one starts from the FORMULAS REPOSITORY instead: 257 linear-algebra
# entries, each with a real name and its own anchor. For every tool-page section
# that states something in display maths, it looks for a formula whose name
# appears in that section's prose. That is the honest definition of "a spot that
# should go to the formulas page": the formula is on screen and named.
#
# Read-only.

import io, json, re, subprocess, sys, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
LA = {k: v for k, v in REG['tools'].items() if v.get('section') == 'linear-algebra'}

NODE = r'''
import fs from 'fs';
function load(file, varName) {
  let src = fs.readFileSync(file, 'utf8');
  src = src.replace(/export\s+default\s+\w+\s*;?\s*$/m, '')
           .replace(/module\.exports\s*=\s*\w+\s*;?\s*$/m, '');
  const fn = new Function(src + '\nreturn ' + varName + ';');
  return fn();
}
const forms = load('app/api/db/repositories/formulasRepository.js', 'formulasRepository');
console.log(JSON.stringify(forms.filter(f => f.section === 'linear-algebra')
  .map(f => ({name: f.name, entity: f.entity, url: f.formulaUrl}))));
'''

out = subprocess.run(['node', '--input-type=module', '-e', NODE],
                     capture_output=True, text=True, encoding='utf-8')
if out.returncode:
    print(out.stderr[:800]); sys.exit(1)
FORMULAS = json.loads(out.stdout)
print('linear-algebra formula entries: %d' % len(FORMULAS))

# surface forms worth matching: multi-word names only; single words are noise
NAMES = {}
for f in FORMULAS:
    n = (f['name'] or '').strip().lower()
    if len(n.split()) >= 2 and f.get('url'):
        NAMES.setdefault(n, f)
print('multi-word formula names usable as surface forms: %d\n' % len(NAMES))

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
DISPLAY = re.compile(r'\$\$.*?\$\$', re.S)
SKIP = [re.compile(r'\$\$.*?\$\$', re.S), re.compile(r'\$[^$\n]*\$'),
        re.compile(r'\[[^\]]*\]\([^)]*\)'), re.compile(r'`[^`\n]*`'),
        re.compile(r'\*\*[^*\n]*\*\*')]


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


def guard(text):
    o = list(text)
    for p in SKIP:
        for m in p.finditer(text):
            for i in range(m.start(), m.end()):
                o[i] = '\x00'
    return ''.join(o)


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


hits = []
forms_sorted = sorted(NAMES, key=len, reverse=True)
for key in sorted(LA):
    tool = LA[key]
    slug = key.replace('linear-algebra-', '')
    raw = io.open(tool['pagePath'], encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    sp = spans(masked)
    slug_of = {o: s for o, s in wired(masked)}
    load = collections.Counter()
    for t in tool['relatedTerms']:
        if t['status'] == 'linked':
            for L in t['links']:
                load[L.get('fromSection')] += 1

    seen = set()
    for obj, (s, e) in sp.items():
        sec = slug_of.get(obj)
        if not sec or sec == 'key-terms':
            continue
        body = raw[s:e]
        if not DISPLAY.search(body):
            continue
        g = guard(body).lower()
        for n in forms_sorted:
            if n in seen:
                continue
            m = re.search(r'(?<![a-z0-9])' + re.escape(n) + r'(?![a-z0-9])', g)
            if not m:
                continue
            seen.add(n)
            hits.append((slug, sec, body[m.start():m.end()], NAMES[n]['url'], load[sec]))

print('%-28s %-30s %-26s %s' % ('tool', 'section', 'surface', 'formulas anchor'))
for h in hits:
    print('%-28s %-30s %-26s %s   [section load %d]' % (h[0], h[1][:29], h[2][:25], h[3], h[4]))
print('\ncandidate formulas links: %d across %d tools'
      % (len(hits), len({h[0] for h in hits})))
