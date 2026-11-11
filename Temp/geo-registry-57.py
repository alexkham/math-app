import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup57.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-10'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-parallelogram-angles'; slug = 'parallelogram-angles'
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
intext = {'geometry-proofs-parallelogram-sides': 'the-statement', 'geometry-proofs-parallelogram-diagonals': 'the-statement', 'geometry-proofs-parallel-lines': 'the-statement', 'geometry-proofs-polygon-angle-sum': 'why-it-holds', 'geometry-proofs-rectangle-diagonals': 'consequences', 'geometry-proofs-linear-pair-bisectors': 'consequences', 'geometry-proofs-rhombus-diagonals': 'consequences', 'geometry-proofs-cyclic-quadrilateral': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['parallelogramAngles-' + x for x in ['given', 'first', 'second', 'opposite', 'third', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Parallelogram Angles Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "the-first-pair-of-neighbours", "the-second-pair-of-neighbours", "the-first-pair-of-opposites", "the-third-pair-of-neighbours", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("parallelogram", ["the-statement", "why-it-holds"]),
                           pending("co-interior angles", ["the-first-pair-of-neighbours", "the-second-pair-of-neighbours"]),
                           pending("supplementary angles", ["the-statement", "the-first-pair-of-opposites"]),
                           pending("opposite angles", ["the-first-pair-of-opposites", "the-third-pair-of-neighbours"]),
                           pending("transversal", ["the-first-pair-of-neighbours"]),
                           pending("rectangle", ["consequences"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "parallelogram angles", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']), len(names))
