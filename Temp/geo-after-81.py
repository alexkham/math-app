p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Bisectors of co-interior angles', 'Bisectors of vertical angles']"
assert s.count(a) == 1
s = s.replace(a, "'Bisectors of co-interior angles', 'Bisectors of vertical angles', 'Bisectors of alternate angles']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "labelCenter weighted off O so that O is not labelled on its own dot) is the eightieth."
assert s.count(a) == 1
s = s.replace(a, a + " `alternate-angle-bisectors` (proof `alternateBisectors`, Lines and Angles group, 4 scenes: the co-interior setup with the transversal drawn only between the parallels so that P and Q are named straight up and down; alternate angles, bisector, alternate angles converse; the β names use the new optional angle setting `labelAt`, a fraction from 0 to 1 from `from` towards `to` (default 0.5, the bisector), because the bisectors PX and QY run through the middle of the angles they halve) is the eighty-first.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 80 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 81 2026-11-14: `/geometry/visual-tools/alternate-angle-bisectors` (owner said 'your pick'; Lines and Angles; geo_pages_81.py; added optional `labelAt` to Angle in render/primitives.jsx, default unchanged; search7.mjs = search6 that honours labelAt; lesson: one label centre cannot put two points in their wide gaps on a sloped line, so drop line stubs beyond the points instead). 81 views: Triangle 30, Circle 21, Quadrilateral 14, Polygon 7, Lines and Angles 9. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
