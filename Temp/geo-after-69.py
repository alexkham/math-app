p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Angles in the same segment', 'Bisector and the arc midpoint']"
assert s.count(a) == 1
s = s.replace(a, "'Angles in the same segment', 'Bisector and the arc midpoint', 'Incentre-excentre lemma']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "`isValid` keeps A on the larger arc) is the sixty-eighth."
assert s.count(a) == 1
s = s.replace(a, a + " `incentre-excentre-lemma` (proof `incentreExcentre`, Circle group, 6 scenes, the trillium theorem: the arc-midpoint figure with I an `incentre` point and M the `secondIntersection` of AI with the circle; same segment, bisector at B, adding, exterior angle of ABI, isosceles converse; the circle about M is described, not drawn, because it would fall mostly outside the canvas) is the sixty-ninth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 68 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 69 2026-11-11: `/geometry/visual-tools/incentre-excentre-lemma` (owner said 'your pick'; Circle group; data module geo_pages_69.py). 69 views: Triangle 29, Circle 18, Quadrilateral 12, Polygon 4, Lines and Angles 6. Next picks if asked again: widen Simson P range, Polygon or Lines and Angles gaps (e.g. corresponding angles converse, interior angles of a hexagon tiling). " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
