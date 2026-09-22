# Full per-tool audit of the three matrix-multiplication picture tools.
#
#   python three-audit.py
#
# Answers "are these actually finished" across every workstream, from the files:
# registry identity, Line 1 block + on-page anchor health, Line 2 statuses,
# Line 3 records + symmetry + rendered strip, Key Terms, hub listing, and
# whether any content page links back to them (Operation A).

import io, json, os, re, sys, urllib.request

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
KEYS = ['linear-algebra-matrix-multiplication-columns',
        'linear-algebra-matrix-multiplication-rows',
        'linear-algebra-matrix-multiplication-rows-columns']
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
CREG = json.load(io.open('app/api/db/repositories/content-pages-registry.json', encoding='utf-8'))


def live(src):
    s = '\n'.join('' if l.lstrip().startswith('//') else l for l in src.split('\n'))
    return re.sub(r'/\*.*?\*/', '', s, flags=re.S)


def url_of(v):
    p = v['pagePath']
    return p if not p.startswith('pages/') else '/' + p[len('pages/'):-len('/index.jsx')]


# who links to these tools, anywhere in pages/
inbound = {k: [] for k in KEYS}
for root, d, f in os.walk('pages'):
    if 'index.jsx' not in f:
        continue
    p = root.replace(os.sep, '/') + '/index.jsx'
    src = live(io.open(p, encoding='utf-8').read())
    for k in KEYS:
        u = url_of(REG['tools'][k])
        if '(!%s)' % u in src and p != REG['tools'][k]['pagePath']:
            inbound[k].append(p)

for k in KEYS:
    v = REG['tools'][k]
    p = v['pagePath']
    src = io.open(p, encoding='utf-8').read()
    lv = live(src)
    u = url_of(v)
    print('=' * 78)
    print(k)
    print('  identity     : slug=%s name=%s' % (v.get('slug'), v.get('name')))
    miss = [f for f in ('slug', 'name', 'section', 'pagePath', 'component') if not v.get(f)]
    print('  registry     : missing fields: %s' % (miss or 'none'))

    l1 = v.get('line1') or {}
    print('  Line 1       : %s' % (json.dumps(l1) if l1 else 'ABSENT'))
    anchors = set(re.findall(r'\]\(!#([a-z0-9\-]+)\)', lv))
    ids = set(re.findall(r"\b\w+\(\s*'obj\d+'\s*,\s*'([a-z0-9\-]+)'", lv))
    print('  on-page mesh : %d anchors, %d sections, orphan anchors: %s'
          % (len(anchors), len(ids), sorted(anchors - ids) or 'none'))

    terms = v.get('relatedTerms') or []
    st = {}
    for t in terms:
        st[t['status']] = st.get(t['status'], 0) + 1
    print('  Line 2       : %d terms %s' % (len(terms), st))

    rt = v.get('relatedTools') or []
    back = [x for x in KEYS + ['linear-algebra-matrix-multiplication'] if x != k
            and not any(r['key'] == x for r in rt)]
    print('  Line 3       : %d records -> %s' % (len(rt), [r['key'].replace('linear-algebra-', '') for r in rt]))
    print('                 missing outgoing to: %s' % ([b.replace('linear-algebra-', '') for b in back] or 'none'))
    rev = [x for x in KEYS + ['linear-algebra-matrix-multiplication'] if x != k
           and not any(r['key'] == k for r in (REG['tools'][x].get('relatedTools') or []))]
    print('                 missing inbound from: %s' % ([r.replace('linear-algebra-', '') for r in rev] or 'none'))
    print('  strip wired  : %s' % ('RelatedTools tools={relatedTools}' in lv))

    print('  Key Terms    : %s' % ('present' if re.search(r"title:\s*`Key Terms`", lv) else 'none (by design on these pages)'))
    print('  inbound links: %d page(s) %s' % (len(inbound[k]), [x.replace('pages/', '') for x in inbound[k]]))
    cp = [x for x in inbound[k] if '/visual-tools/' not in x]
    print('  from CONTENT : %s' % ([x.replace('pages/', '') for x in cp] or 'NONE - Operation A not done'))

    try:
        h = urllib.request.urlopen('http://localhost:3000' + u, timeout=240).read().decode('utf-8', 'replace')
        vis = h[:h.find('__NEXT_DATA__')]
        print('  rendered     : 200, strip=%s, related links=%d'
              % ('Related tools' in vis, len(set(re.findall(r'href="(/[a-z-]*/?visual-tools/[a-z-]+)"', vis)))))
    except Exception as ex:
        print('  rendered     : ERROR %s' % ex)

print('=' * 78)
hub = 'pages/linear-algebra/visual-tools/index.jsx'
hs = live(io.open(hub, encoding='utf-8').read()) if os.path.exists(hub) else ''
for k in KEYS:
    u = url_of(REG['tools'][k])
    print('hub lists %-52s %s' % (u, u in hs))
