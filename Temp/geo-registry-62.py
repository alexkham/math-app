import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup62.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-11'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-square-diagonals'; slug = 'square-diagonals'
assert key not in T

def pending(term, sections):
    return {"term": term, "entity": None, "sections": sections, "status": "pending",
            "reason": "No geometry lesson, definitions or formulas page yet (content gap). Re-run Line 2 when /geometry lesson pages exist."}

# strip surface of every earlier page, read from the back-links already in the registry
names = {}
for k in par['viewEntries']:
    for rt in T[k]['relatedTools']:
        if rt['key'] not in names and rt['key'].startswith('geometry-proofs-'):
            names[rt['key']] = rt['surface']
names = {k: names[k] for k in par['viewEntries']}
intext = {'geometry-proofs-rectangle-diagonals': 'the-statement', 'geometry-proofs-rhombus-diagonals': 'the-statement', 'geometry-proofs-isosceles-base-angles': 'half-a-square', 'geometry-proofs-triangle-angle-sum': 'half-a-square', 'geometry-proofs-pythagorean-theorem': 'why-it-holds', 'geometry-proofs-parallelogram-diagonals': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['squareDiagonals-' + x for x in ['given', 'half', 'equal', 'perpendicular', 'bisect', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Square Diagonals Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "half-a-square", "equal-diagonals", "a-right-angle-at-the-centre", "the-diagonals-bisect-each-other", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("square", ["the-statement", "why-it-holds"]),
                           pending("diagonal", ["the-statement", "equal-diagonals"]),
                           pending("isosceles right triangle", ["half-a-square", "consequences"]),
                           pending("perpendicular lines", ["a-right-angle-at-the-centre"]),
                           pending("square root of 2", ["why-it-holds", "consequences"]),
                           pending("irrational number", ["consequences"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "square diagonals", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']), len(names))
