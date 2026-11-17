p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Cyclic exterior angle', 'Angles in the same segment']"
assert s.count(a) == 1
s = s.replace(a, "'Cyclic exterior angle', 'Angles in the same segment', 'Bisector and the arc midpoint']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "`isValid` keeps the base angles between 20° and 80°) is the sixty-seventh."
assert s.count(a) == 1
s = s.replace(a, a + " `bisector-arc-midpoint` (proof `arcMidpoint`, Circle group, 5 scenes: O free and a hidden Z fix the circle, A, B, C `onCircle`, a hidden `bisectorFoot` D from A and M from the new `secondIntersection` point type (center, from, toward: the second point where the line from a point of the circle towards another point meets the circle again; listed in `render/registry.js` too), so M is found, not placed; halves, central angles 2φ, SAS on the radii; `isValid` keeps A on the larger arc) is the sixty-eighth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 67 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 68 2026-11-11: `/geometry/visual-tools/bisector-arc-midpoint` (owner said 'your pick'; Circle group; new `secondIntersection` point type; data module geo_pages_68.py). 68 views: Triangle 29, Circle 17, Quadrilateral 12, Polygon 4, Lines and Angles 6. Next picks if asked again: incentre-excentre lemma (MB = MI), widen Simson P range, Polygon or Lines and Angles gaps. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
