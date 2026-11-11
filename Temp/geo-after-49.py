# hub card, docs and memory for page 49
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "views: ['Polygon angle sum'],"
assert s.count(a) == 1
s = s.replace(a, "views: ['Polygon angle sum', 'Polygon exterior angles'],")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "by cross-product signs) is the forty-eighth."
assert s.count(a) == 1
s = s.replace(a, a + " `polygon-exterior-angles` (proof `polygonExteriorAngles`, Polygon group, 5 scenes: the polygon-angle-sum pentagon (the `polygon` composite with its interior angles) with each side continued past its far end by a `pointAlongDist` of scale 0.32 and an exterior angle α′…ε′ at every vertex; linear pairs, five straight angles, the polygon angle sum, subtraction; `isValid` keeps the pentagon convex with sides over 70 and all ten points in the frame; readout gives both sums) is the forty-ninth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 48 2026-11-08:"
assert s.count(a) == 1
s = s.replace(a, "Page 49 2026-11-08: `/geometry/visual-tools/polygon-exterior-angles` (owner said 'your pick'; Polygon group, second page there; data module geo_pages_49.py). 49 views. Group sizes now: Triangle 25, Circle 12, Quadrilateral 8, Polygon 2, Lines and Angles 2. Next picks if asked again: isosceles trapezoid (Quadrilateral), angle bisectors of a linear pair are perpendicular (Lines and Angles), Simson line. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
