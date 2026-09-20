# Line 3 WRITE - turns the scanned pairs into in-text links, registry records
# and the "Related tools" strip, for one section.
#
#   python line3-write.py --section=trigonometry [--apply]
#
# Reads line3-pairs-<section>.json (from line3-scan.py, run AFTER
# line3-bullets.py so the added sentences are in the pair table).
#
# Per source page:
#   1. each record's surface becomes [label](!/url) inside its fromSection
#      content. If the surface sits inside a **bold** run, the WHOLE bold run
#      becomes the label and the bold is dropped (never bold+link). Records
#      already linked (existing: true) are left as they are.
#   2. strip wiring, if absent: the two imports after the last live import,
#      `relatedTools: getRelatedTools('<key>'),` as the first prop, `relatedTools`
#      in the page component's destructuring, `<RelatedTools tools={relatedTools}/>`
#      immediately above the live `<Sections .../>`.
#   3. registry: relatedTools[] = records (priority order), status linked,
#      method scan | added-sentence (surface came from line3-bullets-<section>.json)
#      | reverse (legacy page).
#
# Offsets: comment mask is length-preserving; edits applied right-to-left.
# CRLF preserved (newline='').

import io, json, re, sys, datetime, os

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
SECTION = next((a.split('=', 1)[1] for a in sys.argv if a.startswith('--section=')), 'trigonometry')
apply = '--apply' in sys.argv
TODAY = datetime.date.today().isoformat()
REG_PATH = 'app/api/db/repositories/visual-tools-registry.json'
REG = json.load(io.open(REG_PATH, encoding='utf-8'))
PAIRS = json.load(io.open('line3-pairs-%s.json' % SECTION, encoding='utf-8'))
BULLETS = {}
if os.path.exists('line3-bullets-%s.json' % SECTION):
    for k, v in json.load(io.open('line3-bullets-%s.json' % SECTION, encoding='utf-8')).items():
        if not k.startswith('_'):
            BULLETS[k] = v
TOOLS = {k: v for k, v in REG['tools'].items() if v.get('section') == SECTION}

CONTENT = re.compile(r"\n\s*(\w+)\s*:\s*\{[\s\S]*?content\s*:\s*`((?:[^`\\]|\\.)*)`")
SKIP = [re.compile(r'\$\$.*?\$\$', re.S), re.compile(r'\$[^$\n]*\$'),
        re.compile(r'@span\[[^\]]*\]:\[[^\]]*\]@'), re.compile(r'@\[[^\]]*\]@'),
        re.compile(r'`[^`\n]*`'), re.compile(r'\[[^\]\n]+\]\(!?[^)\n]+\)')]
BOLD = re.compile(r'\*\*([^*\n]+)\*\*')


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
    for pat in SKIP:
        for m in pat.finditer(text):
            for i in range(m.start(), m.end()):
                out[i] = '\x00'
    return ''.join(out)


def url_of(tool):
    p = tool['pagePath']
    return p if not p.startswith('pages/') else '/' + p[len('pages/'):-len('/index.jsx')]


def file_of(tool):
    p = tool['pagePath']
    return p if p.startswith('pages/') else 'pages' + p + '/index.jsx'


def content_spans(masked):
    spans = {}
    for m in re.finditer(r"sectionsContent\s*[:=]\s*\{", masked):
        tail = m.end()
        stop = re.search(r"\n\s{0,4}\}\s*\n\s*(?:const|return|\}|faqQuestions)", masked[tail:])
        end = tail + (stop.start() if stop else len(masked) - tail)
        for c in CONTENT.finditer(masked, tail, end):
            spans.setdefault(c.group(1), (c.start(2), c.end(2)))
    return spans


def section_map(masked):
    out = {}
    live = masked[masked.rfind('const genericSections'):] if 'const genericSections' in masked else masked
    for m in re.finditer(r"id\s*:\s*[`'\"]([a-z0-9\-]+)[`'\"]", live):
        k = re.search(r"sectionsContent(?:\.(\w+)|\[\s*'(\w+)'\s*\])", live[m.end():m.end() + 400])
        if k:
            out.setdefault(m.group(1), k.group(1) or k.group(2))
    for o, s in re.findall(r"\b\w+\(\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked):
        out.setdefault(s, o)
    for o, s in re.findall(r"\[\s*'(obj\d+)'\s*,\s*'([a-z0-9\-]+)'", masked):
        out.setdefault(s, o)
    return out


def method_for(skey, surface):
    if TOOLS[skey].get('legacy'):
        return 'reverse'
    for line in (BULLETS.get(skey) or {}).get('add', []):
        if surface.lower() in line.lower():
            return 'added-sentence'
    return 'scan'


def wire_strip(raw, masked, key):
    """Return list of (start, end, replacement) edits adding the strip plumbing."""
    edits = []
    if 'getRelatedTools(' in masked:
        return edits
    # 1. imports after the last live import line
    last_imp = None
    for m in re.finditer(r'^import [^\n]*\n', masked, flags=re.M):
        last_imp = m
    if not last_imp:
        raise RuntimeError('no import line')
    nl = '\r\n' if raw[last_imp.end() - 2:last_imp.end()] == '\r\n' else '\n'
    edits.append((last_imp.end(), last_imp.end(),
                  "import RelatedTools from '@/app/components/related-tools/RelatedTools'" + nl +
                  "import { getRelatedTools } from '@/app/utils/getRelatedTools'" + nl))
    # 2. first live props object
    pm = re.search(r'props\s*:\s*\{', masked)
    if not pm:
        raise RuntimeError('no props object')
    edits.append((pm.end(), pm.end(), nl + "      relatedTools: getRelatedTools('%s')," % key))
    # 3. component signature
    sm = re.search(r'export default function \w+\s*\(\s*\{\s*', masked)
    if not sm:
        raise RuntimeError('no page component signature')
    edits.append((sm.end(), sm.end(), 'relatedTools, '))
    # 4. strip above the live <Sections .../>
    secs = list(re.finditer(r'<Sections\s+sections=\{[^}]+\}\s*/>', masked))
    if not secs:
        raise RuntimeError('no <Sections/>')
    s = secs[-1]
    line_start = masked.rfind('\n', 0, s.start()) + 1
    indent = raw[line_start:s.start()]
    edits.append((s.start(), s.start(), '<RelatedTools tools={relatedTools}/>' + nl + indent))
    return edits


tot_links = tot_existing = tot_strips = 0
for skey in sorted(TOOLS):
    tool = TOOLS[skey]
    recs = PAIRS.get(skey, [])
    path = file_of(tool)
    raw = io.open(path, encoding='utf-8', newline='').read()
    masked = mask_comments(raw)
    spans = content_spans(masked)
    smap = section_map(masked)
    edits = []
    out_records = []
    report = []
    for rec in recs:
        tkey = rec['key']
        turl = url_of(TOOLS[tkey])
        okey = smap.get(rec['fromSection'])
        if okey not in spans:
            report.append(('MISSING SECTION', tkey, rec['fromSection']))
            continue
        s, e = spans[okey]
        body = raw[s:e]
        label = rec['surface']
        if rec.get('existing'):
            tot_existing += 1
            status = 'linked'
            report.append(('kept', tkey, label))
        else:
            guard = mask_regions(body)
            m = re.search(r'(?<![A-Za-z0-9])' + re.escape(rec['surface']) + r'(?![A-Za-z0-9])', guard)
            if not m:
                report.append(('NOT FOUND', tkey, rec['surface']))
                continue
            a, b = m.start(), m.end()
            # inside a bold run? take the whole run as the label, drop the bold
            for bm in BOLD.finditer(body):
                if bm.start() <= a and b <= bm.end():
                    a, b = bm.start(), bm.end()
                    label = bm.group(1).strip()
                    break
            if '$' in label:
                report.append(('MATH IN LABEL', tkey, label))
                continue
            edits.append((s + a, s + b, '[%s](!%s)' % (label, turl)))
            status = 'linked'
            tot_links += 1
            report.append(('link', tkey, label))
        out_records.append({'key': tkey, 'fromSection': rec['fromSection'], 'surface': label,
                            'method': method_for(skey, rec['surface']), 'status': status,
                            'added': TODAY})
    try:
        strip = wire_strip(raw, masked, skey)
    except RuntimeError as ex:
        strip = []
        report.append(('STRIP FAILED', str(ex), ''))
    if strip:
        tot_strips += 1

    print('%s  (%d records, strip %s)' % (skey, len(out_records), 'add' if strip else 'present'))
    for kind, t, lab in report:
        print('   %-14s %-32s %s' % (kind, t, lab))

    if apply:
        new = raw
        for a, b, rep in sorted(edits + strip, key=lambda x: -x[0]):
            new = new[:a] + rep + new[b:]
        if new != raw:
            io.open(path, 'w', encoding='utf-8', newline='').write(new)
        tool['relatedTools'] = out_records

print('\nlinks to write %d, already linked %d, strips to add %d' % (tot_links, tot_existing, tot_strips))
if apply:
    REG['$meta'].setdefault('lineThree', {})['%sWritten' % SECTION] = TODAY
    io.open(REG_PATH, 'w', encoding='utf-8').write(json.dumps(REG, ensure_ascii=False, indent=2) + '\n')
    print('WRITTEN pages + registry')
else:
    print('DRY RUN - nothing written.')
