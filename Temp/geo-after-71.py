p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Regular hexagon', 'Regular polygon angles']"
assert s.count(a) == 1
s = s.replace(a, "'Regular hexagon', 'Regular polygon angles', 'Diagonals of a regular pentagon']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "the halves at one vertex use different radii) is the seventieth."
assert s.count(a) == 1
s = s.replace(a, a + " `pentagon-diagonals` (proof `pentagonDiagonals`, Polygon group, 6 scenes: B to E are A turned about the hidden centre O by 72° with `rotateDeg`; polygon angle sum, two isosceles triangles, subtracting; labels checked with Temp/esmcheck/search5.mjs, a general version of the Node label check that reads every angle of a proof) is the seventy-first.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 70 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 71 2026-11-12: `/geometry/visual-tools/pentagon-diagonals` (owner said 'your pick'; Polygon group; data module geo_pages_71.py; general label check Temp/esmcheck/search5.mjs <module> <cfg json>). 71 views: Triangle 29, Circle 18, Quadrilateral 12, Polygon 5, Lines and Angles 7. Next picks if asked again: widen Simson P range, golden triangle / pentagon diagonal ratio, alternate angles converse. Data-module trap: text pasted in later needs double backslashes like the rest (\\angle). " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
