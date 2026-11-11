p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'SSS similarity', 'Right triangle altitude theorem']"
assert s.count(a) == 1
s = s.replace(a, "'SSS similarity', 'Right triangle altitude theorem', 'Midpoint of the hypotenuse']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "same `isValid`) is the fifty-seventh."
assert s.count(a) == 1
s = s.replace(a, a + " `midpoint-of-hypotenuse` (proof `midpointHypotenuse`, Triangle group, 6 scenes: C and A free, a hidden `perpAlongDist` end P at C and B an `onLine` point on C–P (0.4–0.85) keep the right angle without assuming the circle, D = A + (B − C), M the midpoint of AB; parallelogram, four right angles, equal diagonals, bisecting diagonals, the circle about M only at the last scene; `isValid` keeps the rectangle and the circle in the frame) is the fifty-eighth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 57 2026-11-10:"
assert s.count(a) == 1
s = s.replace(a, "Page 58 2026-11-10: `/geometry/visual-tools/midpoint-of-hypotenuse` (owner said 'your pick'; Triangle group; data module geo_pages_58.py). 58 views: Triangle 26, Circle 14, Quadrilateral 11, Polygon 3, Lines and Angles 4. Next picks if asked again: regular polygon interior angle (Polygon), equilateral triangle angles, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
