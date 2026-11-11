p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Tangent-chord angle', 'Equal chords']"
assert s.count(a) == 1
s = s.replace(a, "'Tangent-chord angle', 'Equal chords', 'Simson line']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "`rotateDeg` is listed in `render/registry.js` as well."
assert s.count(a) == 1
s = s.replace(a, a + " `simson-line` (proof `simsonLine`, Circle group, 6 scenes: hidden O and Z fix the circumcircle, A, B, C, P `onCircle`, D, E, F `foot`s, the two auxiliary circles as `circle` of [midpoint of PB or PC, P], the Simson line a dashed `line` between two `pointAlongDist` ends past F and E; inscribed angles in both small circles, the exterior angle of the cyclic quadrilateral ABPC, complements, vertical angles; `isValid` keeps the one case drawn (P on the arc BC away from A, D in BC, E in CA, F beyond B) by line parameters and a cross-product sign) is the fifty-sixth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 55 2026-11-09:"
assert s.count(a) == 1
s = s.replace(a, "Page 56 2026-11-09: `/geometry/visual-tools/simson-line` (owner said 'your pick'; Circle group; one configuration enforced by isValid; data module geo_pages_56.py). 56 views: Triangle 25, Circle 14, Quadrilateral 10, Polygon 3, Lines and Angles 4. Next picks if asked again: parallelogram opposite angles (Quadrilateral), regular polygon interior angle (Polygon), Napoleon or Varignon-like triangle results. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
