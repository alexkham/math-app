p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Bisector and the arc midpoint', 'Incentre-excentre lemma']"
assert s.count(a) == 1
s = s.replace(a, "'Bisector and the arc midpoint', 'Incentre-excentre lemma', 'Angle between two chords']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "so look at the figure too) is the seventy-fourth."
assert s.count(a) == 1
s = s.replace(a, a + " `angle-between-chords` (proof `chordsAngle`, Circle group, 5 scenes: four `onCircle` points and E an `intersection`; O is a `midpoint` of two hidden copies of the centre so that it is drawn hollow and cannot be dragged; exterior angle theorem, inscribed angle theorem twice; `isValid` only receives the points, so the arc order is computed from their angles about O) is the seventy-fifth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 74 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 75 2026-11-12: `/geometry/visual-tools/angle-between-chords` (owner said 'your pick'; Circle group; data module geo_pages_75.py; isValid gets only P, never params). 75 views: Triangle 29, Circle 19, Quadrilateral 13, Polygon 7, Lines and Angles 7. Next picks if asked again: angle between two secants outside (half the difference), widen Simson P range, alternate angles converse. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
