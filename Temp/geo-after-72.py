p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Regular polygon angles', 'Diagonals of a regular pentagon']"
assert s.count(a) == 1
s = s.replace(a, "'Regular polygon angles', 'Diagonals of a regular pentagon', 'Pentagon and the golden ratio']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "a general version of the Node label check that reads every angle of a proof) is the seventy-first."
assert s.count(a) == 1
s = s.replace(a, a + " `pentagon-golden-ratio` (proof `pentagonGoldenRatio`, Polygon group, 7 scenes: the same rotateDeg pentagon with P the `intersection` of AC and BE; 36° angles, isosceles converse twice, AA similarity, algebra; A kept within 20° of the top; arc sizes from the `search` option of search5.mjs) is the seventy-second.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 71 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 72 2026-11-12: `/geometry/visual-tools/pentagon-golden-ratio` (owner said 'your pick'; Polygon group; data module geo_pages_72.py; search5.mjs now has a search option: cfg {search:1}). 72 views: Triangle 29, Circle 18, Quadrilateral 12, Polygon 6, Lines and Angles 7. Next picks if asked again: widen Simson P range, alternate angles converse, pentagram angle sum 180°. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
