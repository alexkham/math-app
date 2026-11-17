p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Diagonals of a square', 'Bisectors of a parallelogram']"
assert s.count(a) == 1
s = s.replace(a, "'Diagonals of a square', 'Bisectors of a parallelogram', \"Pitot's theorem\"]")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "are named outward along them) is the seventy-ninth."
assert s.count(a) == 1
s = s.replace(a, a + " `pitot-theorem` (proof `pitot`, Quadrilateral group, 5 scenes: a fixed circle, the points of contact P, Q, R, S on `onCircle` params, the tangent at each from `perpAlongDist` and the vertices from `intersection`; two tangents, segment addition twice, combining; the eight tangent pieces coloured by vertex; labelCenter weighted off O so that O is not labelled on its own dot) is the eightieth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 79 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 80 2026-11-12: `/geometry/visual-tools/pitot-theorem` (owner said 'your pick'; Quadrilateral group; data module geo_pages_80.py; Temp/esmcheck/search6.mjs = search5 that reads its settings from a file, `@cfg.json`, because long sample lists overflow the command line). 80 views: Triangle 30, Circle 21, Quadrilateral 14, Polygon 7, Lines and Angles 8. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
