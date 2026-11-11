p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Midpoint of the hypotenuse', 'Equilateral triangle']"
assert s.count(a) == 1
s = s.replace(a, "'Midpoint of the hypotenuse', 'Equilateral triangle', '30-60-90 triangle']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "readout gives the three angles and the side) is the sixty-third."
assert s.count(a) == 1
s = s.replace(a, a + " `30-60-90-triangle` (proof `triangle306090`, Triangle group, 6 scenes: C and A free, B a `perpAlongDist` at C with scale 1/√3 so the angle at A is 30°, B′ = C + (C − B) with a prime label; reflection, SAS, the equilateral triangle ABB′, halving, Pythagoras; readout compares BC with AB/2 and AC with AB·√3/2) is the sixty-fourth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 63 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 64 2026-11-11: `/geometry/visual-tools/30-60-90-triangle` (owner said 'your pick'; Triangle group; proof key triangle306090; data module geo_pages_64.py). 64 views: Triangle 28, Circle 14, Quadrilateral 12, Polygon 4, Lines and Angles 6. Next picks if asked again: exterior angle of a cyclic quadrilateral, angle in a semicircle converse, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
