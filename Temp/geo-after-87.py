p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Angles of a pentagram', 'Area of a regular polygon']"
assert s.count(a) == 1
s = s.replace(a, "'Angles of a pentagram', 'Area of a regular polygon', 'Angles of a cyclic hexagon']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "so that E is named on its open right side and F on its left) is the eighty-sixth."
assert s.count(a) == 1
s = s.replace(a, a + " `cyclic-hexagon-angles` (proof `cyclicHexagon`, Polygon group, 5 scenes: a fixed circle with O never shown, the six vertices on `onCircle` params; angle sum, cyclic quadrilateral twice, combining; all six angle arcs at radius 16 and each arc between neighbours at least 45° so that the names at neighbouring vertices stay apart) is the eighty-seventh.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 86 2026-11-14:"
assert s.count(a) == 1
s = s.replace(a, "Page 87 2026-11-14: `/geometry/visual-tools/cyclic-hexagon-angles` (owner said 'your pick'; Polygon; geo_pages_87.py). 87 views: Triangle 31, Circle 22, Quadrilateral 15, Polygon 9, Lines and Angles 10. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
