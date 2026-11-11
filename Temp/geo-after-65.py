p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Equal chords', 'Simson line']"
assert s.count(a) == 1
s = s.replace(a, "'Equal chords', 'Simson line', 'Cyclic exterior angle']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "readout compares BC with AB/2 and AC with AB·√3/2) is the sixty-fourth."
assert s.count(a) == 1
s = s.replace(a, a + " `cyclic-exterior-angle` (proof `cyclicExteriorAngle`, Circle group, 5 scenes: hidden O and Z fix the circle, A, B, C, D `onCircle`, E = B + 0.3·(B − A) on AB extended with a dashed `line` BE; linear pair, opposite angles of a cyclic quadrilateral, subtraction; `isValid` keeps the vertices in order, sides over 70 and the exterior angle between 25° and 155°) is the sixty-fifth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 64 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 65 2026-11-11: `/geometry/visual-tools/cyclic-exterior-angle` (owner said 'your pick'; Circle group; data module geo_pages_65.py). 65 views: Triangle 28, Circle 15, Quadrilateral 12, Polygon 4, Lines and Angles 6. Next picks if asked again: inscribed angle on a diameter converse, angles in the same segment, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
