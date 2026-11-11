import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup53.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-09'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']
key = 'geometry-proofs-angles-around-a-point'; slug = 'angles-around-a-point'
assert key not in T

def pending(term, sections):
    return {"term": term, "entity": None, "sections": sections, "status": "pending",
            "reason": "No geometry lesson, definitions or formulas page yet (content gap). Re-run Line 2 when /geometry lesson pages exist."}

surfaces = {'triangle-angle-sum': 'triangle angle sum', 'exterior-angle': 'exterior angle theorem', 'exterior-angle-sum': 'sum of exterior angles', 'isosceles-base-angles': 'isosceles base angles', 'triangle-inequality': 'triangle inequality', 'larger-side-larger-angle': 'larger side, larger angle', 'perpendicular-shortest': 'perpendicular is shortest', 'thales-theorem': "Thales' theorem", 'vertical-angles': 'vertical angles', 'parallel-lines': 'parallel lines and a transversal', 'polygon-angle-sum': 'polygon angle sum', 'inscribed-angle': 'inscribed angle theorem', 'pythagorean-theorem': 'Pythagorean theorem', 'cyclic-quadrilateral': 'cyclic quadrilateral', 'tangent-radius': 'tangent perpendicular to radius', 'two-tangents': 'two tangents from a point', 'chord-bisector': 'perpendicular bisects the chord', 'parallelogram-sides': 'parallelogram opposite sides', 'parallelogram-diagonals': 'parallelogram diagonals', 'rhombus-diagonals': 'rhombus diagonals', 'rectangle-diagonals': 'rectangle diagonals', 'midsegment': 'midsegment theorem', 'varignon': "Varignon's theorem", 'trapezoid-midsegment': 'trapezoid midsegment', 'centroid': 'medians and the centroid', 'angle-bisector': 'angle bisector theorem', 'circumcentre': 'circumcentre', 'incentre': 'incentre', 'orthocentre': 'orthocentre', 'euler-line': 'Euler line', 'nine-point-circle': 'nine-point circle', 'intersecting-chords': 'intersecting chords', 'sss-congruence': 'SSS congruence', 'asa-congruence': 'ASA congruence', 'aas-congruence': 'AAS congruence', 'kite-diagonals': 'kite diagonals', 'hl-congruence': 'HL congruence', 'secant-tangent': 'secant and tangent', 'two-secants': 'two secants', 'ceva-theorem': "Ceva's theorem", 'menelaus-theorem': "Menelaus' theorem", 'intercept-theorem': 'intercept theorem', 'aa-similarity': 'AA similarity', 'sas-similarity': 'SAS similarity', 'sss-similarity': 'SSS similarity', 'ptolemy-theorem': "Ptolemy's theorem", 'right-triangle-altitude': 'right triangle altitude theorem', 'tangent-chord-angle': 'tangent-chord angle', 'polygon-exterior-angles': 'polygon exterior angles', 'isosceles-trapezoid': 'isosceles trapezoid', 'linear-pair-bisectors': 'bisectors of a linear pair', 'equal-chords': 'equal chords'}
names = {'geometry-proofs-' + k: v for k, v in surfaces.items()}
assert set(names) == set(par['viewEntries']), set(par['viewEntries']) ^ set(names)
intext = {'geometry-proofs-vertical-angles': 'the-statement', 'geometry-proofs-linear-pair-bisectors': 'the-statement', 'geometry-proofs-polygon-exterior-angles': 'consequences', 'geometry-proofs-polygon-angle-sum': 'consequences'}

par['views'].append(slug); par['viewEntries'].append(key)
st = ['anglesAroundPoint-' + x for x in ['given', 'extend', 'upper', 'lower', 'add', 'conclude']]
par['diagramStates'] += st
T[key] = {"slug": slug, "name": "Angles Around a Point Proof", "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
          "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
          "sections": ["getting-started", "the-statement", "extending-one-ray", "one-side-of-the-line", "the-other-side", "adding-the-two-sides", "why-it-holds", "dragging-the-figure", "consequences"],
          "relatedTerms": [pending("full turn", ["the-statement", "why-it-holds"]),
                           pending("straight angle", ["one-side-of-the-line", "the-other-side"]),
                           pending("adjacent angles", ["the-statement"]),
                           pending("ray", ["extending-one-ray"]),
                           pending("degree", ["consequences"]),
                           pending("regular polygon", ["consequences"])],
          "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
for other in names:
    T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": "angles around a point", "method": "strip", "status": "linked", "added": added})
s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']))
