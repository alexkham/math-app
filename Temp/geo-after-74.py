p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Angles of a parallelogram', 'Diagonals of a square']"
assert s.count(a) == 1
s = s.replace(a, "'Angles of a parallelogram', 'Diagonals of a square', 'Bisectors of a parallelogram']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "`isValid` keeps convex order and the top point large) is the seventy-third."
assert s.count(a) == 1
s = s.replace(a, a + " `parallelogram-bisectors` (proof `parallelogramBisectors`, Quadrilateral group, 6 scenes: A, B, D free, C a `pointAlongDist` copy of AB from D, four `bisectorFoot` directions and four `intersection` crossings; co-interior angles, bisectors, angle sum, the same at the other corners (vertical angles at Q and S); `isValid` keeps AB between 1.45 and 1.85 times AD, because near a rhombus PQRS shrinks to a point and beyond twice it leaves the parallelogram) is the seventy-fourth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 73 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 74 2026-11-12: `/geometry/visual-tools/parallelogram-bisectors` (owner said 'your pick'; Quadrilateral group; data module geo_pages_74.py). 74 views: Triangle 29, Circle 18, Quadrilateral 13, Polygon 7, Lines and Angles 7. Next picks if asked again: widen Simson P range, alternate angles converse, bisectors of any quadrilateral form a cyclic quadrilateral. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
