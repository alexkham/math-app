# hub card, docs and memory for page 53
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "views: ['Vertical angles', 'Parallel lines and a transversal', 'Bisectors of a linear pair'],"
assert s.count(a) == 1
s = s.replace(a, "views: ['Vertical angles', 'Parallel lines and a transversal', 'Bisectors of a linear pair', 'Angles around a point'],")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "and both are listed now."
assert s.count(a) == 1
s = s.replace(a, a + " `angles-around-a-point` (proof `anglesAroundPoint`, Lines and Angles group, 6 scenes: O, A, B, C, D free, A′ = O + 0.85(O − A) via `pointAlongDist` with a prime label and a dashed `line` OA′; γ drawn with `radius: 62` and its two pieces γ₁, γ₂ with `radius: 30`; two straight angles added; `isValid` keeps the rays in order (the four angles add to 360°), each over 18°, and the extension inside γ) is the fifty-third.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 52 2026-11-08:"
assert s.count(a) == 1
s = s.replace(a, "Page 53 2026-11-09: `/geometry/visual-tools/angles-around-a-point` (owner said 'your pick'; Lines and Angles group; data module geo_pages_53.py). 53 views: Triangle 25, Circle 13, Quadrilateral 9, Polygon 2, Lines and Angles 4. Trap recorded 2026-11-09: a new point type must be added to render/registry.js too, or it is never drawn. Next picks if asked again: regular polygon in a circle (Polygon), rhombus angle bisection (Quadrilateral), Simson line. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
