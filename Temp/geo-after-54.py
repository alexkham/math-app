# hub card, docs and memory for page 54
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Kite: diagonals are perpendicular', 'Isosceles trapezoid']"
assert s.count(a) == 1
s = s.replace(a, "'Kite: diagonals are perpendicular', 'Isosceles trapezoid', 'Equal opposite sides make a parallelogram']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "and the extension inside γ) is the fifty-third."
assert s.count(a) == 1
s = s.replace(a, a + " `parallelogram-from-sides` (proof `parallelogramFromSides`, Quadrilateral group, 6 scenes, the converse of parallelogram sides: A, B, D free, C = D + (B − A) via `pointAlongDist` (the only convex quadrilateral with those sides in that order), diagonal BD, SSS, corresponding angles α, β marked at B and D, equal alternate angles give the parallels (Euclid I.27 argued in prose from the exterior angle theorem), chevrons n: 1 and n: 2; `isValid` keeps the figure convex with sides over 90 and the angle at A between 25° and 155°) is the fifty-fourth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 53 2026-11-09:"
assert s.count(a) == 1
s = s.replace(a, "Page 54 2026-11-09: `/geometry/visual-tools/parallelogram-from-sides` (owner said 'your pick'; Quadrilateral group, converse of parallelogram sides; data module geo_pages_54.py). 54 views: Triangle 25, Circle 13, Quadrilateral 10, Polygon 2, Lines and Angles 4. Next picks if asked again: regular polygon in a circle (Polygon), parallelogram opposite angles / one pair equal and parallel (Quadrilateral), Simson line. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
