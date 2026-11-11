p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Equal opposite sides make a parallelogram', 'Angles of a parallelogram']"
assert s.count(a) == 1
s = s.replace(a, "'Equal opposite sides make a parallelogram', 'Angles of a parallelogram', 'Diagonals of a square']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "and the feet on the drawn arms) is the sixty-first."
assert s.count(a) == 1
s = s.replace(a, a + " `square-diagonals` (proof `squareDiagonals`, Quadrilateral group, 6 scenes: A and B free, D a `perpAlongDist` at A, C = D + (B − A), O the `intersection` of the diagonals; isosceles right halves give 45°, SAS gives AC = BD, two 45° angles give the right angle at O and equal half diagonals, Pythagoras the length; readout AC, BD, AB·√2, ∠AOB) is the sixty-second.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 61 2026-11-10:"
assert s.count(a) == 1
s = s.replace(a, "Page 62 2026-11-11: `/geometry/visual-tools/square-diagonals` (owner said 'your pick'; Quadrilateral group; data module geo_pages_62.py). 62 views: Triangle 26, Circle 14, Quadrilateral 12, Polygon 4, Lines and Angles 6. Next picks if asked again: equilateral triangle angles, exterior angle of a cyclic quadrilateral, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
