p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Angle between two secants', 'Tangent and secant angle']"
assert s.count(a) == 1
s = s.replace(a, "'Angle between two secants', 'Tangent and secant angle', 'Chord of two concentric circles']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "labelCenter weighted towards A so that H and M are named well below BC) is the eighty-second."
assert s.count(a) == 1
s = s.replace(a, a + " `concentric-circles-chord` (proof `concentricChord`, Circle group, 5 scenes: O fixed, A on the larger circle through the free point E that sets its size, T from `tangentPoint` on the smaller circle of fixed radius r, B from `secondIntersection`; tangent and radius, radii, HL congruence, matching sides; labelCenter weighted off O towards T so that O is named on the side away from the chord) is the eighty-third.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 82 2026-11-14:"
assert s.count(a) == 1
s = s.replace(a, "Page 83 2026-11-14: `/geometry/visual-tools/concentric-circles-chord` (owner said 'your pick'; Circle; geo_pages_83.py). 83 views: Triangle 31, Circle 22, Quadrilateral 14, Polygon 7, Lines and Angles 9. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
