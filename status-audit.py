# Honest per-section status. Counts only what is actually in the files.
#
#   python status-audit.py
#
# Line 1  : tools carrying a line1 block in the registry
# Line 2  : relatedTerms statuses (linked / dropped / pending)
# Line 3  : tools with a non-empty relatedTools AND a rendered strip on the page
# KeyTerms: tool pages that have a Key Terms block, and heads still bold in it

import io, json, os, re, sys, collections

sys.stdout.reconfigure(encoding='utf-8', errors='replace')
REG = json.load(io.open('app/api/db/repositories/visual-tools-registry.json', encoding='utf-8'))
CREG = json.load(io.open('app/api/db/repositories/content-pages-registry.json', encoding='utf-8'))

KT = re.compile(r"title:\s*`Key Terms`[\s\S]{0,200}?content:\s*`((?:[^`\\]|\\.)*)`")
HEAD = re.compile(r'(?:\*\*([^*\n]+)\*\*|\[([^\]\n]+)\]\(!([^)\n]+)\))'
                  r'((?:\s*\$[^$\n]*\$)*)(?=\s*(?:—|–|-|&mdash;)\s)')


def page_file(v):
    p = v['pagePath']
    return p if p.endswith('.jsx') else 'pages' + p + '/index.jsx'


rows = []
for sec in sorted({v.get('section') for v in REG['tools'].values() if v.get('section')}):
    tools = {k: v for k, v in REG['tools'].items() if v.get('section') == sec}
    l1 = sum(1 for v in tools.values() if v.get('line1'))
    st = collections.Counter()
    l3 = strip = ktpages = ktbold = ktlinked = 0
    dyn = 0
    for k, v in tools.items():
        for t in v.get('relatedTerms') or []:
            st[t['status']] += 1
        if v.get('relatedTools'):
            l3 += 1
        p = page_file(v)
        if '[' in p:
            dyn += 1
        if not os.path.exists(p):
            continue
        live = '\n'.join('' if l.lstrip().startswith('//') else l
                         for l in io.open(p, encoding='utf-8').read().split('\n'))
        if 'RelatedTools tools={relatedTools}' in live:
            strip += 1
        m = KT.search(live)
        if m:
            ktpages += 1
            for h in HEAD.finditer(m.group(1)):
                if h.group(1):
                    ktbold += 1
                else:
                    ktlinked += 1
    cpages = sum(1 for kk in CREG['pages'] if kk.startswith(sec + '/'))
    rows.append((sec, len(tools), dyn, l1, st['linked'], st['dropped'], st['pending'],
                 l3, strip, ktpages, ktlinked, ktbold, cpages))

hdr = ('section', 'tools', 'dyn', 'L1', 'L2lnk', 'L2drp', 'L2pnd', 'L3', 'strip',
       'KTpg', 'KTlnk', 'KTbold', 'ContentPgs')
print('%-16s %5s %4s %4s %6s %6s %6s %4s %6s %5s %6s %7s %11s' % hdr)
for r in rows:
    print('%-16s %5d %4d %4d %6d %6d %6d %4d %6d %5d %6d %7d %11d' % r)
