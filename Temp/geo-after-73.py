p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Diagonals of a regular pentagon', 'Pentagon and the golden ratio']"
assert s.count(a) == 1
s = s.replace(a, "'Diagonals of a regular pentagon', 'Pentagon and the golden ratio', 'Angles of a pentagram']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "arc sizes from the `search` option of search5.mjs) is the seventy-second."
assert s.count(a) == 1
s = s.replace(a, a + " `pentagram-angles` (proof `pentagramAngles`, Polygon group, 5 scenes: five free points joined A → C → E → B → D, X and Y `intersection` points; exterior angle theorem twice, angle sum; the angles at X and Y are named θ and ψ because labels like γ+ε do not fit in the top triangle; `isValid` keeps convex order and the top point large) is the seventy-third.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 72 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 73 2026-11-12: `/geometry/visual-tools/pentagram-angles` (owner said 'your pick'; Polygon group; data module geo_pages_73.py; search5 option noMdrag scores drags without Measures). 73 views: Triangle 29, Circle 18, Quadrilateral 12, Polygon 7, Lines and Angles 7. Next picks if asked again: widen Simson P range, alternate angles converse, Quadrilateral or Circle gaps (e.g. Brahmagupta-free ones: kite angle, rhombus area). " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
