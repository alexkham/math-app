p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Bisectors of a linear pair', 'Angles around a point'],"
assert s.count(a) == 1
s = s.replace(a, "'Bisectors of a linear pair', 'Angles around a point', 'Perpendicular bisector'],")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "readout gives ∠AOB, ∠OBA, ∠ABC) is the fifty-ninth."
assert s.count(a) == 1
s = s.replace(a, a + " `perpendicular-bisector` (proof `perpendicularBisector`, Lines and Angles group, 6 scenes: A and B free, M the midpoint, the dashed bisector a `line` between two hidden `perpAlongDist` ends Q (0.75·AB up) and Q2 (0.15·AB down), P an `onLine` point on M–Q (0.3–0.95); SAS forward, SSS and the linear pair for the converse; `isValid` keeps A, B, P, Q, Q2 in the frame) is the sixtieth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 59 2026-11-10:"
assert s.count(a) == 1
s = s.replace(a, "Page 60 2026-11-10: `/geometry/visual-tools/perpendicular-bisector` (owner said 'your pick'; Lines and Angles group; data module geo_pages_60.py). 60 views: Triangle 26, Circle 14, Quadrilateral 11, Polygon 4, Lines and Angles 5. Next picks if asked again: square diagonals, angle bisector locus (equidistant from two lines), widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
