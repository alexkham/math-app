p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Right triangle altitude theorem', 'Midpoint of the hypotenuse']"
assert s.count(a) == 1
s = s.replace(a, "'Right triangle altitude theorem', 'Midpoint of the hypotenuse', 'Equilateral triangle']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "readout AC, BD, AB·√2, ∠AOB) is the sixty-second."
assert s.count(a) == 1
s = s.replace(a, a + " `equilateral-triangle` (proof `equilateralTriangle`, Triangle group, 6 scenes: A and B free, C = B turned about A by −60° via `rotateDeg`; isosceles base angles twice, the angle sum, and the converse by equal angles facing equal sides; readout gives the three angles and the side) is the sixty-third.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 62 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 63 2026-11-11: `/geometry/visual-tools/equilateral-triangle` (owner said 'your pick'; Triangle group; data module geo_pages_63.py). 63 views: Triangle 27, Circle 14, Quadrilateral 12, Polygon 4, Lines and Angles 6. Next picks if asked again: exterior angle of a cyclic quadrilateral, 30-60-90 triangle, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
