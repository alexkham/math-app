p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Angle between two chords', 'Angle between two secants']"
assert s.count(a) == 1
s = s.replace(a, "'Angle between two chords', 'Angle between two secants', 'Tangent and secant angle']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "exterior angle theorem, inscribed angle theorem twice) is the seventy-sixth."
assert s.count(a) == 1
s = s.replace(a, a + " `tangent-secant-angle` (proof `tangentSecantAngle`, Circle group, 5 scenes: P free outside, T a `tangentPoint` (side −1, the upper one), B `onCircle` through T, A the `secondIntersection` of BP; exterior angle theorem, inscribed angle theorem, tangent-chord angle) is the seventy-seventh.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 76 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 77 2026-11-12: `/geometry/visual-tools/tangent-secant-angle` (owner said 'your pick'; Circle group; data module geo_pages_77.py). 77 views: Triangle 29, Circle 21, Quadrilateral 13, Polygon 7, Lines and Angles 7. Next picks if asked again: widen Simson P range, alternate angles converse, a Lines and Angles or Polygon gap. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
