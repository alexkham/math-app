p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Bisectors of a parallelogram', \"Pitot's theorem\"]"
assert s.count(a) == 1
s = s.replace(a, "'Bisectors of a parallelogram', \"Pitot's theorem\", 'Diagonals that bisect each other']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "because three texts of about 40 px share it."
assert s.count(a) == 1
s = s.replace(a, a + " `diagonals-bisect-converse` (proof `diagonalsBisectConverse`, Quadrilateral group, 5 scenes: O, A, B free, C and D their mirror images through `pointAlongDist`; vertical angles, SAS, alternate angles converse, combining; labelCenter weighted off O towards AD so that O is named in the angle BOC, away from the marked angles, with `labelDist` 26) is the eighty-fifth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Fix 2026-11-14 (owner: 'fix the two pages'):"
assert s.count(a) == 1
s = s.replace(a, "Page 85 2026-11-14: `/geometry/visual-tools/diagonals-bisect-converse` (owner said 'your pick'; Quadrilateral; geo_pages_85.py; no SAS congruence page exists, so SAS is not linked). 85 views: Triangle 31, Circle 22, Quadrilateral 15, Polygon 8, Lines and Angles 9. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
