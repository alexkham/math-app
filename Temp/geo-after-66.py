p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Simson line', 'Cyclic exterior angle']"
assert s.count(a) == 1
s = s.replace(a, "'Simson line', 'Cyclic exterior angle', 'Angles in the same segment']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "and all 65 pages were fetched again afterwards."
assert s.count(a) == 1
s = s.replace(a, a + " `angles-in-same-segment` (proof `anglesSameSegment`, Circle group, 5 scenes, Euclid III.21: O free and a hidden Z fix the circle, A, B, C, D `onCircle`; the central angle ω, the inscribed angle theorem twice; `isValid` keeps O inside both triangles ACB and ADB, so C and D stay on the major arc) is the sixty-sixth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 65 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 66 2026-11-11: `/geometry/visual-tools/angles-in-same-segment` (owner said 'your pick'; Circle group; data module geo_pages_66.py). 66 views: Triangle 28, Circle 16, Quadrilateral 12, Polygon 4, Lines and Angles 6. Engine: resolve() rounds every point (2026-11-11). Next picks if asked again: alternate segment converse, angle bisector meets circumcircle at arc midpoint, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
