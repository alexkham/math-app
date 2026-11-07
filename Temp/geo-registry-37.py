import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup37.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-07'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-hl-congruence'; slug = 'hl-congruence'
assert key not in T

def pending(term, sections):
    return {"term": term, "entity": None, "sections": sections, "status": "pending",
            "reason": "No geometry lesson, definitions or formulas page yet (content gap). Re-run Line 2 when /geometry lesson pages exist."}

names = {'geometry-proofs-triangle-angle-sum': 'triangle angle sum', 'geometry-proofs-exterior-angle': 'exterior angle theorem', 'geometry-proofs-exterior-angle-sum': 'sum of exterior angles', 'geometry-proofs-isosceles-base-angles': 'isosceles base angles', 'geometry-proofs-triangle-inequality': 'triangle inequality', 'geometry-proofs-larger-side-larger-angle': 'larger side, larger angle', 'geometry-proofs-perpendicular-shortest': 'perpendicular is shortest', 'geometry-proofs-thales-theorem': "Thales' theorem", 'geometry-proofs-vertical-angles': 'vertical angles', 'geometry-proofs-parallel-lines': 'parallel lines and a transversal', 'geometry-proofs-polygon-angle-sum': 'polygon angle sum', 'geometry-proofs-inscribed-angle': 'inscribed angle theorem', 'geometry-proofs-pythagorean-theorem': 'Pythagorean theorem', 'geometry-proofs-cyclic-quadrilateral': 'cyclic quadrilateral', 'geometry-proofs-tangent-radius': 'tangent perpendicular to radius', 'geometry-proofs-two-tangents': 'two tangents from a point', 'geometry-proofs-chord-bisector': 'perpendicular bisects the chord', 'geometry-proofs-parallelogram-sides': 'parallelogram opposite sides', 'geometry-proofs-parallelogram-diagonals': 'parallelogram diagonals', 'geometry-proofs-rhombus-diagonals': 'rhombus diagonals', 'geometry-proofs-rectangle-diagonals': 'rectangle diagonals', 'geometry-proofs-midsegment': 'midsegment theorem', 'geometry-proofs-varignon': "Varignon's theorem", 'geometry-proofs-trapezoid-midsegment': 'trapezoid midsegment', 'geometry-proofs-centroid': 'medians and the centroid', 'geometry-proofs-angle-bisector': 'angle bisector theorem', 'geometry-proofs-circumcentre': 'circumcentre', 'geometry-proofs-incentre': 'incentre', 'geometry-proofs-orthocentre': 'orthocentre', 'geometry-proofs-euler-line': 'Euler line', 'geometry-proofs-nine-point-circle': 'nine-point circle', 'geometry-proofs-intersecting-chords': 'intersecting chords', 'geometry-proofs-sss-congruence': 'SSS congruence', 'geometry-proofs-asa-congruence': 'ASA congruence', 'geometry-proofs-aas-congruence': 'AAS congruence', 'geometry-proofs-kite-diagonals': 'kite diagonals'}
intext = {'geometry-proofs-isosceles-base-angles': 'the-isosceles-triangle', 'geometry-proofs-aas-congruence': 'angle-angle-side', 'geometry-proofs-vertical-angles': 'a-straight-line', 'geometry-proofs-pythagorean-theorem': 'why-it-holds', 'geometry-proofs-sss-congruence': 'why-it-holds', 'geometry-proofs-two-tangents': 'consequences', 'geometry-proofs-chord-bisector': 'consequences', 'geometry-proofs-incentre': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['hlCongruence-' + x for x in ['given', 'line', 'iso', 'aas', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "HL Congruence Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "leg-to-leg", "a-straight-line", "the-isosceles-triangle", "angle-angle-side", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("congruent triangles", ["the-statement", "why-it-holds", "consequences"]),
                           pending("hypotenuse-leg criterion", ["the-statement", "why-it-holds", "consequences"]),
                           pending("right triangle", ["the-statement", "leg-to-leg"]),
                           pending("hypotenuse", ["the-statement", "the-isosceles-triangle"]),
                           pending("isosceles triangle", ["the-isosceles-triangle"]),
                           pending("AAS criterion", ["angle-angle-side"]),
                           pending("SSA", ["consequences"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "HL congruence", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok')
