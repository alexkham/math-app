import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup38.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-07'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-secant-tangent'; slug = 'secant-tangent'
assert key not in T

def pending(term, sections):
    return {"term": term, "entity": None, "sections": sections, "status": "pending",
            "reason": "No geometry lesson, definitions or formulas page yet (content gap). Re-run Line 2 when /geometry lesson pages exist."}

names = {'geometry-proofs-triangle-angle-sum': 'triangle angle sum', 'geometry-proofs-exterior-angle': 'exterior angle theorem', 'geometry-proofs-exterior-angle-sum': 'sum of exterior angles', 'geometry-proofs-isosceles-base-angles': 'isosceles base angles', 'geometry-proofs-triangle-inequality': 'triangle inequality', 'geometry-proofs-larger-side-larger-angle': 'larger side, larger angle', 'geometry-proofs-perpendicular-shortest': 'perpendicular is shortest', 'geometry-proofs-thales-theorem': "Thales' theorem", 'geometry-proofs-vertical-angles': 'vertical angles', 'geometry-proofs-parallel-lines': 'parallel lines and a transversal', 'geometry-proofs-polygon-angle-sum': 'polygon angle sum', 'geometry-proofs-inscribed-angle': 'inscribed angle theorem', 'geometry-proofs-pythagorean-theorem': 'Pythagorean theorem', 'geometry-proofs-cyclic-quadrilateral': 'cyclic quadrilateral', 'geometry-proofs-tangent-radius': 'tangent perpendicular to radius', 'geometry-proofs-two-tangents': 'two tangents from a point', 'geometry-proofs-chord-bisector': 'perpendicular bisects the chord', 'geometry-proofs-parallelogram-sides': 'parallelogram opposite sides', 'geometry-proofs-parallelogram-diagonals': 'parallelogram diagonals', 'geometry-proofs-rhombus-diagonals': 'rhombus diagonals', 'geometry-proofs-rectangle-diagonals': 'rectangle diagonals', 'geometry-proofs-midsegment': 'midsegment theorem', 'geometry-proofs-varignon': "Varignon's theorem", 'geometry-proofs-trapezoid-midsegment': 'trapezoid midsegment', 'geometry-proofs-centroid': 'medians and the centroid', 'geometry-proofs-angle-bisector': 'angle bisector theorem', 'geometry-proofs-circumcentre': 'circumcentre', 'geometry-proofs-incentre': 'incentre', 'geometry-proofs-orthocentre': 'orthocentre', 'geometry-proofs-euler-line': 'Euler line', 'geometry-proofs-nine-point-circle': 'nine-point circle', 'geometry-proofs-intersecting-chords': 'intersecting chords', 'geometry-proofs-sss-congruence': 'SSS congruence', 'geometry-proofs-asa-congruence': 'ASA congruence', 'geometry-proofs-aas-congruence': 'AAS congruence', 'geometry-proofs-kite-diagonals': 'kite diagonals', 'geometry-proofs-hl-congruence': 'HL congruence'}
intext = {'geometry-proofs-intersecting-chords': 'the-statement', 'geometry-proofs-chord-bisector': 'the-midpoint-of-the-chord', 'geometry-proofs-pythagorean-theorem': 'two-right-triangles', 'geometry-proofs-tangent-radius': 'the-tangent', 'geometry-proofs-two-tangents': 'consequences', 'geometry-proofs-hl-congruence': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['secantTangent-' + x for x in ['given', 'foot', 'squares', 'pyth', 'tangent', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Secant-Tangent Theorem Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "the-midpoint-of-the-chord", "a-difference-of-squares", "two-right-triangles", "the-tangent", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("secant", ["the-statement", "why-it-holds"]),
                           pending("tangent", ["the-statement", "the-tangent"]),
                           pending("power of a point", ["the-statement", "why-it-holds", "consequences"]),
                           pending("chord", ["the-midpoint-of-the-chord"]),
                           pending("difference of squares", ["a-difference-of-squares"]),
                           pending("Pythagorean theorem", ["two-right-triangles", "the-tangent"]),
                           pending("Euclid's Elements", ["the-statement"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "secant and tangent", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok')
