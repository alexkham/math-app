import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup55.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-09'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-regular-hexagon'; slug = 'regular-hexagon'
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
intext = {'geometry-proofs-angles-around-a-point': 'the-statement', 'geometry-proofs-isosceles-base-angles': 'the-statement', 'geometry-proofs-triangle-angle-sum': 'the-statement', 'geometry-proofs-sss-congruence': 'six-congruent-triangles', 'geometry-proofs-larger-side-larger-angle': 'an-equilateral-triangle', 'geometry-proofs-pythagorean-theorem': 'consequences', 'geometry-proofs-polygon-angle-sum': 'consequences', 'geometry-proofs-equal-chords': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['regularHexagon-' + x for x in ['given', 'radii', 'central', 'isosceles', 'equilateral', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Regular Hexagon Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "six-congruent-triangles", "the-angles-at-the-centre", "the-base-angles", "an-equilateral-triangle", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("regular hexagon", ["the-statement", "why-it-holds"]),
                           pending("regular polygon", ["the-statement", "consequences"]),
                           pending("circumscribed circle", ["the-statement"]),
                           pending("central angle", ["the-angles-at-the-centre"]),
                           pending("equilateral triangle", ["an-equilateral-triangle"]),
                           pending("pi", ["consequences"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "regular hexagon", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']), len(names))
