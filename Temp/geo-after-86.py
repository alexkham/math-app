p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Bisectors of vertical angles', 'Bisectors of alternate angles']"
assert s.count(a) == 1
s = s.replace(a, "'Bisectors of vertical angles', 'Bisectors of alternate angles', 'Angle at a bend between parallels']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "away from the marked angles, with `labelDist` 26) is the eighty-fifth."
assert s.count(a) == 1
s = s.replace(a, a + " `angle-at-a-bend` (proof `parallelBend`, Lines and Angles group, 5 scenes: B, A, D, E free, C keeps DC parallel to BA through `pointAlongDist`, F on the helper parallel through E; parallel through a point, alternate angles twice, adding angles; labelCenter between E, F, B and D so that E is named on its open right side and F on its left) is the eighty-sixth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 85 2026-11-14:"
assert s.count(a) == 1
s = s.replace(a, "Page 86 2026-11-14: `/geometry/visual-tools/angle-at-a-bend` (owner said 'your pick'; Lines and Angles; geo_pages_86.py). 86 views: Triangle 31, Circle 22, Quadrilateral 15, Polygon 8, Lines and Angles 10. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
