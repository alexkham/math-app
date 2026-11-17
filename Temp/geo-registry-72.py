import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup72.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-11'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-pentagon-golden-ratio'; slug = 'pentagon-golden-ratio'
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
intext = {'geometry-proofs-pentagon-diagonals': 'the-statement', 'geometry-proofs-isosceles-converse': 'the-statement', 'geometry-proofs-aa-similarity': 'two-similar-triangles', 'geometry-proofs-regular-polygon-angles': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['pentagonGoldenRatio-' + x for x in ['given', 'angles', 'apex', 'isosceles', 'similar', 'solve', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Pentagon Golden Ratio Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "the-36-angles", "the-triangle-ape", "the-triangle-abp", "two-similar-triangles", "solving-for-the-ratio", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("golden ratio", ["the-statement", "why-it-holds"]),
                           pending("regular pentagon", ["the-statement"]),
                           pending("diagonal", ["the-statement"]),
                           pending("similar triangles", ["two-similar-triangles"]),
                           pending("quadratic equation", ["solving-for-the-ratio"]),
                           pending("golden triangle", ["consequences"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "pentagon and the golden ratio", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']), len(names))
