import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup66.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-11'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-angles-in-same-segment'; slug = 'angles-in-same-segment'
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
intext = {'geometry-proofs-inscribed-angle': 'the-statement', 'geometry-proofs-intersecting-chords': 'the-statement', 'geometry-proofs-two-secants': 'the-statement', 'geometry-proofs-ptolemy-theorem': 'the-statement', 'geometry-proofs-simson-line': 'the-statement', 'geometry-proofs-cyclic-quadrilateral': 'why-it-holds', 'geometry-proofs-thales-theorem': 'consequences', 'geometry-proofs-cyclic-exterior-angle': 'consequences', 'geometry-proofs-tangent-chord-angle': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['anglesSameSegment-' + x for x in ['given', 'central', 'first', 'second', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Angles in the Same Segment Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "the-central-angle", "the-first-inscribed-angle", "the-second-inscribed-angle", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("segment of a circle", ["the-statement"]),
                           pending("inscribed angle", ["the-first-inscribed-angle", "the-second-inscribed-angle"]),
                           pending("central angle", ["the-central-angle"]),
                           pending("chord", ["the-statement"]),
                           pending("concyclic points", ["consequences"]),
                           pending("locus", ["consequences"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "angles in the same segment", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']), len(names))
