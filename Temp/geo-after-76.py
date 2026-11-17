p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Incentre-excentre lemma', 'Angle between two chords']"
assert s.count(a) == 1
s = s.replace(a, "'Incentre-excentre lemma', 'Angle between two chords', 'Angle between two secants']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "so the arc order is computed from their angles about O) is the seventy-fifth."
assert s.count(a) == 1
s = s.replace(a, a + " `angle-between-secants` (proof `secantsAngle`, Circle group, 5 scenes: P free outside, B and D `onCircle`, A and C the `secondIntersection` of BP and DP with the circle, O a fixed `midpoint`; exterior angle theorem, inscribed angle theorem twice) is the seventy-sixth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 75 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 76 2026-11-12: `/geometry/visual-tools/angle-between-secants` (owner said 'your pick'; Circle group; data module geo_pages_76.py). 76 views: Triangle 29, Circle 20, Quadrilateral 13, Polygon 7, Lines and Angles 7. Next picks if asked again: tangent-secant angle, widen Simson P range, alternate angles converse. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
