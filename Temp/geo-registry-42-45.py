import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup42.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-08'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']

def pending(term, sections):
    return {"term": term, "entity": None, "sections": sections, "status": "pending",
            "reason": "No geometry lesson, definitions or formulas page yet (content gap). Re-run Line 2 when /geometry lesson pages exist."}

names = {'geometry-proofs-triangle-angle-sum': 'triangle angle sum', 'geometry-proofs-exterior-angle': 'exterior angle theorem', 'geometry-proofs-exterior-angle-sum': 'sum of exterior angles', 'geometry-proofs-isosceles-base-angles': 'isosceles base angles', 'geometry-proofs-triangle-inequality': 'triangle inequality', 'geometry-proofs-larger-side-larger-angle': 'larger side, larger angle', 'geometry-proofs-perpendicular-shortest': 'perpendicular is shortest', 'geometry-proofs-thales-theorem': "Thales' theorem", 'geometry-proofs-vertical-angles': 'vertical angles', 'geometry-proofs-parallel-lines': 'parallel lines and a transversal', 'geometry-proofs-polygon-angle-sum': 'polygon angle sum', 'geometry-proofs-inscribed-angle': 'inscribed angle theorem', 'geometry-proofs-pythagorean-theorem': 'Pythagorean theorem', 'geometry-proofs-cyclic-quadrilateral': 'cyclic quadrilateral', 'geometry-proofs-tangent-radius': 'tangent perpendicular to radius', 'geometry-proofs-two-tangents': 'two tangents from a point', 'geometry-proofs-chord-bisector': 'perpendicular bisects the chord', 'geometry-proofs-parallelogram-sides': 'parallelogram opposite sides', 'geometry-proofs-parallelogram-diagonals': 'parallelogram diagonals', 'geometry-proofs-rhombus-diagonals': 'rhombus diagonals', 'geometry-proofs-rectangle-diagonals': 'rectangle diagonals', 'geometry-proofs-midsegment': 'midsegment theorem', 'geometry-proofs-varignon': "Varignon's theorem", 'geometry-proofs-trapezoid-midsegment': 'trapezoid midsegment', 'geometry-proofs-centroid': 'medians and the centroid', 'geometry-proofs-angle-bisector': 'angle bisector theorem', 'geometry-proofs-circumcentre': 'circumcentre', 'geometry-proofs-incentre': 'incentre', 'geometry-proofs-orthocentre': 'orthocentre', 'geometry-proofs-euler-line': 'Euler line', 'geometry-proofs-nine-point-circle': 'nine-point circle', 'geometry-proofs-intersecting-chords': 'intersecting chords', 'geometry-proofs-sss-congruence': 'SSS congruence', 'geometry-proofs-asa-congruence': 'ASA congruence', 'geometry-proofs-aas-congruence': 'AAS congruence', 'geometry-proofs-kite-diagonals': 'kite diagonals', 'geometry-proofs-hl-congruence': 'HL congruence', 'geometry-proofs-secant-tangent': 'secant and tangent', 'geometry-proofs-two-secants': 'two secants', 'geometry-proofs-ceva-theorem': "Ceva's theorem", 'geometry-proofs-menelaus-theorem': "Menelaus' theorem"}

NEW = [
    dict(slug='intercept-theorem', name='Intercept Theorem Proof', surface='intercept theorem', key='interceptTheorem',
         phases=['given', 'equal', 'left', 'right', 'conclude'],
         sections=["getting-started", "the-statement", "equal-areas-between-parallels", "cutting-the-side-ab", "cutting-the-side-ac", "why-it-holds", "dragging-the-figure", "consequences"],
         terms=[("intercept theorem", ["the-statement", "why-it-holds"]), ("basic proportionality theorem", ["the-statement"]), ("parallel lines", ["equal-areas-between-parallels"]), ("area of a triangle", ["cutting-the-side-ab", "cutting-the-side-ac"]), ("ratio", ["why-it-holds"]), ("similar triangles", ["consequences"])],
         intext={'geometry-proofs-ceva-theorem': 'the-statement', 'geometry-proofs-menelaus-theorem': 'the-statement', 'geometry-proofs-angle-bisector': 'equal-areas-between-parallels', 'geometry-proofs-midsegment': 'consequences'}),
    dict(slug='aa-similarity', name='AA Similarity Proof', surface='AA similarity', key='aaSimilarity',
         phases=['given', 'parallel', 'asa', 'intercept', 'third', 'conclude'],
         sections=["getting-started", "the-statement", "the-parallel-through-d", "the-congruent-copy", "the-first-two-ratios", "the-third-ratio", "why-it-holds", "dragging-the-figure", "consequences"],
         terms=[("similar triangles", ["the-statement", "why-it-holds"]), ("AA similarity", ["the-statement", "why-it-holds", "consequences"]), ("corresponding angles", ["the-parallel-through-d"]), ("congruent triangles", ["the-congruent-copy"]), ("intercept theorem", ["the-first-two-ratios", "the-third-ratio"]), ("parallelogram", ["the-third-ratio"])],
         intext={'geometry-proofs-triangle-angle-sum': 'the-statement', 'geometry-proofs-parallel-lines': 'the-parallel-through-d', 'geometry-proofs-asa-congruence': 'the-congruent-copy', 'geometry-proofs-intercept-theorem': 'the-first-two-ratios', 'geometry-proofs-parallelogram-sides': 'the-third-ratio', 'geometry-proofs-midsegment': 'dragging-the-figure', 'geometry-proofs-pythagorean-theorem': 'consequences', 'geometry-proofs-angle-bisector': 'consequences', 'geometry-proofs-inscribed-angle': 'consequences', 'geometry-proofs-intersecting-chords': 'consequences', 'geometry-proofs-two-secants': 'consequences'}),
    dict(slug='sas-similarity', name='SAS Similarity Proof', surface='SAS similarity', key='sasSimilarity',
         phases=['given', 'left', 'right', 'equal', 'parallel', 'conclude'],
         sections=["getting-started", "the-statement", "cutting-the-side-ab", "cutting-the-side-ac", "equal-areas", "the-parallel", "why-it-holds", "dragging-the-figure", "consequences"],
         terms=[("similar triangles", ["the-statement", "why-it-holds"]), ("SAS similarity", ["the-statement", "why-it-holds", "consequences"]), ("included angle", ["the-statement"]), ("area of a triangle", ["cutting-the-side-ab", "cutting-the-side-ac", "equal-areas"]), ("converse of the intercept theorem", ["the-parallel", "consequences"]), ("dilation", ["consequences"])],
         intext={'geometry-proofs-aa-similarity': 'the-statement', 'geometry-proofs-sss-congruence': 'the-statement', 'geometry-proofs-intercept-theorem': 'the-statement', 'geometry-proofs-parallel-lines': 'why-it-holds', 'geometry-proofs-midsegment': 'consequences'}),
    dict(slug='sss-similarity', name='SSS Similarity Proof', surface='SSS similarity', key='sssSimilarity',
         phases=['given', 'sas', 'subst', 'sss', 'conclude'],
         sections=["getting-started", "the-statement", "sas-similarity-first", "the-third-side", "the-congruent-copy", "why-it-holds", "dragging-the-figure", "consequences"],
         terms=[("similar triangles", ["the-statement", "why-it-holds"]), ("SSS similarity", ["the-statement", "why-it-holds", "consequences"]), ("SAS similarity", ["sas-similarity-first"]), ("congruent triangles", ["the-congruent-copy"]), ("corresponding angles", ["why-it-holds"]), ("scale drawing", ["consequences"])],
         intext={'geometry-proofs-sss-congruence': 'the-statement', 'geometry-proofs-aa-similarity': 'the-statement', 'geometry-proofs-sas-similarity': 'the-statement', 'geometry-proofs-parallel-lines': 'why-it-holds', 'geometry-proofs-intercept-theorem': 'consequences', 'geometry-proofs-asa-congruence': 'consequences', 'geometry-proofs-hl-congruence': 'consequences'}),
]

for N in NEW:
    key = 'geometry-proofs-' + N['slug']; slug = N['slug']
    assert key not in T
    par['views'].append(slug); par['viewEntries'].append(key)
    st = [N['key'] + '-' + x for x in N['phases']]
    par['diagramStates'] += st
    intext = N['intext']
    for k in intext: assert k in names, k
    T[key] = {"slug": slug, "name": N['name'], "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
              "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st,
              "sections": N['sections'],
              "relatedTerms": [pending(t, secs) for t, secs in N['terms']],
              "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": names[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in names]}
    for other in names:
        T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": N['surface'], "method": "strip", "status": "linked", "added": added})
    names[key] = N['surface']

# the earlier pages of the group link forward in text to the later ones
forward = {'geometry-proofs-intercept-theorem': {'geometry-proofs-aa-similarity': 'the-statement', 'geometry-proofs-sas-similarity': 'why-it-holds'},
           'geometry-proofs-aa-similarity': {'geometry-proofs-sas-similarity': 'why-it-holds', 'geometry-proofs-sss-similarity': 'why-it-holds'},
           'geometry-proofs-sas-similarity': {'geometry-proofs-sss-similarity': 'consequences'}}
for src, targets in forward.items():
    for tgt, sec in targets.items():
        for rt in T[src]['relatedTools']:
            if rt['key'] == tgt:
                rt['fromSection'] = sec; rt['method'] = 'in-text'

s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok', len(par['views']))
