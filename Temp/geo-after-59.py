p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "views: ['Polygon angle sum', 'Polygon exterior angles', 'Regular hexagon'],"
assert s.count(a) == 1
s = s.replace(a, "views: ['Polygon angle sum', 'Polygon exterior angles', 'Regular hexagon', 'Regular polygon angles'],")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "the circle in the frame) is the fifty-eighth."
assert s.count(a) == 1
s = s.replace(a, a + " `regular-polygon-angles` (proof `regularPolygonAngles`, Polygon group, 6 scenes: the regular-hexagon construction with `rotateDeg` 72° steps for a pentagon; SSS, the full turn gives θ = 72°, isosceles base angles φ = 54°, two base angles at B make the interior angle 108° (drawn with `radius: 56` outside the two φ arcs); readout gives ∠AOB, ∠OBA, ∠ABC) is the fifty-ninth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 58 2026-11-10:"
assert s.count(a) == 1
s = s.replace(a, "Page 59 2026-11-10: `/geometry/visual-tools/regular-polygon-angles` (owner said 'your pick'; Polygon group; data module geo_pages_59.py). 59 views: Triangle 26, Circle 14, Quadrilateral 11, Polygon 4, Lines and Angles 4. Next picks if asked again: equilateral triangle angles, square diagonals, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
