import json, shutil, os, tempfile
p = 'app/api/db/repositories/visual-tools-registry.json'
shutil.copy(p, os.path.join(tempfile.gettempdir(), 'vtr-backup27.json'))
raw = open(p, 'rb').read(); crlf = b'\r\n' in raw
d = json.loads(raw.decode('utf-8')); T = d['tools']
added = '2026-11-05'; page = 'pages/geometry/visual-tools/[view].jsx'
par = T['geometry-proofs']

def linked(term, entity, sections, fromSection, surface, path, section, defn=None):
    r = {"term": term, "entity": entity, "sections": sections, "status": "linked",
         "links": [{"fromSection": fromSection, "surface": surface, "target": {"path": path, "section": section}, "method": "line2-hand", "crossSection": "trigonometry", "added": added}]}
    if defn: r["definitionTarget"] = {"path": "/trigonometry/definitions", "section": defn}
    return r

def pending(term, sections):
    return {"term": term, "entity": None, "sections": sections, "status": "pending",
            "reason": "No geometry lesson, definitions or formulas page yet (content gap). Re-run Line 2 when /geometry lesson pages exist."}

names = {'geometry-proofs-triangle-angle-sum': 'triangle angle sum', 'geometry-proofs-exterior-angle': 'exterior angle theorem', 'geometry-proofs-exterior-angle-sum': 'sum of exterior angles', 'geometry-proofs-isosceles-base-angles': 'isosceles base angles', 'geometry-proofs-triangle-inequality': 'triangle inequality', 'geometry-proofs-larger-side-larger-angle': 'larger side, larger angle', 'geometry-proofs-perpendicular-shortest': 'perpendicular is shortest', 'geometry-proofs-thales-theorem': "Thales' theorem", 'geometry-proofs-vertical-angles': 'vertical angles', 'geometry-proofs-parallel-lines': 'parallel lines and a transversal', 'geometry-proofs-polygon-angle-sum': 'polygon angle sum', 'geometry-proofs-inscribed-angle': 'inscribed angle theorem', 'geometry-proofs-pythagorean-theorem': 'Pythagorean theorem', 'geometry-proofs-cyclic-quadrilateral': 'cyclic quadrilateral', 'geometry-proofs-tangent-radius': 'tangent perpendicular to radius', 'geometry-proofs-two-tangents': 'two tangents from a point', 'geometry-proofs-chord-bisector': 'perpendicular bisects the chord', 'geometry-proofs-parallelogram-sides': 'parallelogram opposite sides', 'geometry-proofs-parallelogram-diagonals': 'parallelogram diagonals', 'geometry-proofs-rhombus-diagonals': 'rhombus diagonals', 'geometry-proofs-rectangle-diagonals': 'rectangle diagonals', 'geometry-proofs-midsegment': 'midsegment theorem', 'geometry-proofs-varignon': "Varignon's theorem", 'geometry-proofs-trapezoid-midsegment': 'trapezoid midsegment', 'geometry-proofs-centroid': 'medians and the centroid', 'geometry-proofs-angle-bisector': 'angle bisector theorem'}

def add(key, slug, proofKey, name, phases, sections, terms, intext, surface, extra_names):
    assert key not in T
    par['views'].append(slug); par['viewEntries'].append(key)
    st = [proofKey + '-' + x for x in phases]
    par['diagramStates'] += st
    nm = dict(names); nm.update(extra_names)
    T[key] = {"slug": slug, "name": name, "section": "geometry", "pagePath": page, "view": slug, "parent": "geometry-proofs",
              "component": par['component'], "diagramsModule": par['diagramsModule'], "diagramStates": st, "sections": sections, "relatedTerms": terms,
              "relatedTools": [{"key": k, "fromSection": intext.get(k, 'consequences'), "surface": nm[k], "method": ("in-text" if k in intext else "strip"), "status": "linked", "added": added} for k in nm]}
    for other in nm:
        T[other]['relatedTools'].append({"key": key, "fromSection": "consequences", "surface": surface, "method": "strip", "status": "linked", "added": added})

add('geometry-proofs-circumcentre', 'circumcentre', 'circumcentre', 'Circumcentre Proof', ['given', 'sas1', 'sas2', 'equal', 'third', 'conclude'],
    ["getting-started", "the-statement", "the-first-bisector", "the-second-bisector", "three-equal-distances", "the-third-bisector", "why-it-holds", "dragging-the-figure", "consequences"],
    [linked("Law of Sines", "law of sines", ["consequences"], "consequences", "Law of Sines", "/trigonometry/sines-cosines-law", "2"),
     pending("circumcentre", ["the-statement", "why-it-holds", "dragging-the-figure", "consequences"]),
     pending("perpendicular bisector", ["the-statement", "the-first-bisector", "the-third-bisector"]),
     pending("circumcircle", ["the-statement", "why-it-holds", "consequences"]),
     pending("circumradius", ["consequences"]),
     pending("concurrent lines", ["the-statement", "the-third-bisector"]),
     pending("Euler line", ["consequences"])],
    {'geometry-proofs-chord-bisector': 'the-statement', 'geometry-proofs-rhombus-diagonals': 'the-third-bisector', 'geometry-proofs-thales-theorem': 'dragging-the-figure', 'geometry-proofs-inscribed-angle': 'consequences', 'geometry-proofs-centroid': 'consequences'},
    'circumcentre', {})

add('geometry-proofs-incentre', 'incentre', 'incentre', 'Incentre Proof', ['given', 'feet', 'aas1', 'aas2', 'third', 'conclude'],
    ["getting-started", "the-statement", "the-feet-of-the-perpendiculars", "the-first-bisector", "the-second-bisector", "the-third-bisector", "why-it-holds", "dragging-the-figure", "consequences"],
    [linked("Heron's formula", "heron's formula", ["consequences"], "consequences", "Heron's formula", "/trigonometry/sines-cosines-law", "9"),
     pending("incentre", ["the-statement", "why-it-holds", "dragging-the-figure", "consequences"]),
     pending("angle bisector", ["the-statement", "the-first-bisector", "the-third-bisector"]),
     pending("incircle", ["the-statement", "why-it-holds", "consequences"]),
     pending("inradius", ["consequences"]),
     pending("excircle", ["consequences"]),
     pending("concurrent lines", ["the-statement", "the-third-bisector"])],
    {'geometry-proofs-circumcentre': 'the-statement', 'geometry-proofs-angle-bisector': 'the-statement', 'geometry-proofs-perpendicular-shortest': 'the-feet-of-the-perpendiculars', 'geometry-proofs-triangle-angle-sum': 'the-first-bisector', 'geometry-proofs-pythagorean-theorem': 'the-third-bisector', 'geometry-proofs-tangent-radius': 'why-it-holds', 'geometry-proofs-two-tangents': 'consequences'},
    'incentre', {'geometry-proofs-circumcentre': 'circumcentre'})

s = json.dumps(d, ensure_ascii=False, indent=2)
if crlf: s = s.replace('\n', '\r\n')
s += '\r\n' if crlf else '\n'
open(p, 'wb').write(s.encode('utf-8')); print('registry ok')
