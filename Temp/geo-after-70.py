p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Perpendicular bisector', 'Angle bisector locus']"
assert s.count(a) == 1
s = s.replace(a, "'Perpendicular bisector', 'Angle bisector locus', 'Bisectors of co-interior angles']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "search the radii in Node before trying them in the browser."
assert s.count(a) == 1
s = s.replace(a, a + " `cointerior-bisectors` (proof `cointeriorBisectors`, Lines and Angles group, 5 scenes: P and Q `onLine` on two parallels, D a `pointAlongDist` copy of the first line, the bisector directions from `bisectorFoot` points and R an `intersection`; co-interior angles, bisectors, adding, angle sum; the halves at one vertex use different radii) is the seventieth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 69 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 70 2026-11-12: `/geometry/visual-tools/cointerior-bisectors` (owner said 'your pick'; Lines and Angles group; data module geo_pages_70.py; radii searched with Temp/esmcheck/search4.mjs). 70 views: Triangle 29, Circle 18, Quadrilateral 12, Polygon 4, Lines and Angles 7. Next picks if asked again: widen Simson P range, Polygon gaps (e.g. regular pentagon diagonals), alternate angles converse (needs a contradiction figure). " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
