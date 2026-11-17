import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup74.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-11'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-parallelogram-bisectors'; slug = 'parallelogram-bisectors'
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
intext = {'geometry-proofs-cointerior-bisectors': 'the-statement', 'geometry-proofs-parallel-lines': 'neighbouring-angles', 'geometry-proofs-parallelogram-angles': 'neighbouring-angles', 'geometry-proofs-triangle-angle-sum': 'the-right-angle-at-p', 'geometry-proofs-vertical-angles': 'the-other-three-corners', 'geometry-proofs-rhombus-diagonals': 'consequences', 'geometry-proofs-cyclic-quadrilateral': 'consequences', 'geometry-proofs-angle-bisector-locus': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['parallelogramBisectors-' + x for x in ['given', 'cointerior', 'halves', 'right', 'others', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Parallelogram Bisectors Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "neighbouring-angles", "the-two-halves", "the-right-angle-at-p", "the-other-three-corners", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("parallelogram", ["the-statement"]),
                           pending("angle bisector", ["the-statement", "the-two-halves"]),
                           pending("co-interior angles", ["neighbouring-angles"]),
                           pending("rectangle", ["why-it-holds"]),
                           pending("vertical angles", ["the-other-three-corners"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "bisectors of a parallelogram", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']), len(names))
