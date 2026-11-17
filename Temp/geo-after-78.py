p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Angle bisector locus', 'Bisectors of co-interior angles']"
assert s.count(a) == 1
s = s.replace(a, "'Angle bisector locus', 'Bisectors of co-interior angles', 'Bisectors of vertical angles']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "exterior angle theorem, inscribed angle theorem, tangent-chord angle) is the seventy-seventh."
assert s.count(a) == 1
s = s.replace(a, a + " `vertical-angle-bisectors` (proof `verticalBisectors`, Lines and Angles group, 5 scenes: O, A, C free, B and D their mirror images through `pointAlongDist`, the bisector ends from `bisectorFoot` directions; vertical angles, bisectors, straight angle, adding; labelCenter weighted off O so that O is not labelled on its own dot) is the seventy-eighth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 77 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 78 2026-11-12: `/geometry/visual-tools/vertical-angle-bisectors` (owner said 'your pick'; Lines and Angles group; data module geo_pages_78.py; search5 cfg tie keeps equal angles at equal radii). 78 views: Triangle 29, Circle 21, Quadrilateral 13, Polygon 7, Lines and Angles 8. Next picks if asked again: widen Simson P range, alternate angles converse, a Polygon gap. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
