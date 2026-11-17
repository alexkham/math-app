p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Pentagon and the golden ratio', 'Angles of a pentagram']"
assert s.count(a) == 1
s = s.replace(a, "'Pentagon and the golden ratio', 'Angles of a pentagram', 'Area of a regular polygon']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "labelCenter weighted off O towards T so that O is named on the side away from the chord) is the eighty-third."
assert s.count(a) == 1
s = s.replace(a, a + " `regular-polygon-area` (proof `regularPolygonArea`, Polygon group, 5 scenes: O and A free, B to F from `rotateDeg`, M the midpoint of AB; area addition, SSS congruence, triangle area, combining; the six triangles are shown by alternating shades instead of drawn radii, so that the name of O is clear of lines; labelCenter weighted off O towards M) is the eighty-fourth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 83 2026-11-14:"
assert s.count(a) == 1
s = s.replace(a, "Page 84 2026-11-14: `/geometry/visual-tools/regular-polygon-area` (owner said 'your pick'; Polygon; geo_pages_84.py; general name check Temp/esmcheck/gen-check.mjs <module> <names> <samples.json> covers point names plus sideLabels; noticed: regular-polygon-angles and regular-hexagon still use labelCenter ['O'], O named on its own dot, not fixed, offered to owner). 84 views: Triangle 31, Circle 22, Quadrilateral 14, Polygon 8, Lines and Angles 9. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
