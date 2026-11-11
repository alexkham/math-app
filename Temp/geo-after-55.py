# hub card, docs and memory for page 55
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "views: ['Polygon angle sum', 'Polygon exterior angles'],"
assert s.count(a) == 1
s = s.replace(a, "views: ['Polygon angle sum', 'Polygon exterior angles', 'Regular hexagon'],")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "and the angle at A between 25° and 155°) is the fifty-fourth."
assert s.count(a) == 1
s = s.replace(a, a + " `regular-hexagon` (proof `regularHexagon`, Polygon group, 6 scenes: O and A free, B…F from the new `rotateDeg` point type (about, of, deg: `of` turned about `about` by a fixed number of degrees, clockwise on screen), chained 60° at a time; SSS on the six triangles, the full turn gives θ = 60°, isosceles base angles φ = 60°, equal angles face equal sides; `isValid` keeps the radius between 90 and 152) is the fifty-fifth. `rotateDeg` is listed in `render/registry.js` as well.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 54 2026-11-09:"
assert s.count(a) == 1
s = s.replace(a, "Page 55 2026-11-09: `/geometry/visual-tools/regular-hexagon` (owner said 'your pick'; Polygon group; new `rotateDeg` point type; registry script now reads strip surfaces from the registry instead of a hand list; data module geo_pages_55.py). 55 views: Triangle 25, Circle 13, Quadrilateral 10, Polygon 3, Lines and Angles 4. Next picks if asked again: parallelogram opposite angles (Quadrilateral), Simson line, regular polygon interior angle. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
