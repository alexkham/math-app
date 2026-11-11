p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Isosceles trapezoid', 'Equal opposite sides make a parallelogram']"
assert s.count(a) == 1
s = s.replace(a, "'Isosceles trapezoid', 'Equal opposite sides make a parallelogram', 'Angles of a parallelogram']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "A, B, C move as well) is the fifty-sixth."
assert s.count(a) == 1
s = s.replace(a, a + " `parallelogram-angles` (proof `parallelogramAngles`, Quadrilateral group, 6 scenes: the parallelogram-from-sides figure (A, B, D free, C = D + (B − A)) with angles α, β, γ, δ; co-interior angles along AB, BC and CD, subtraction for α = γ and β = δ; same `isValid`) is the fifty-seventh.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 56 2026-11-09:"
assert s.count(a) == 1
s = s.replace(a, "Page 57 2026-11-10: `/geometry/visual-tools/parallelogram-angles` (owner said 'your pick'; Quadrilateral group; data module geo_pages_57.py). 57 views: Triangle 25, Circle 14, Quadrilateral 11, Polygon 3, Lines and Angles 4. Next picks if asked again: regular polygon interior angle (Polygon), midpoint of the hypotenuse (Triangle), Simson P range could be widened by moving labels. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
