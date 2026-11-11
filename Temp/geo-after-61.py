p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Angles around a point', 'Perpendicular bisector'],"
assert s.count(a) == 1
s = s.replace(a, "'Angles around a point', 'Perpendicular bisector', 'Angle bisector locus'],")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "keeps A, B, P, Q, Q2 in the frame) is the sixtieth."
assert s.count(a) == 1
s = s.replace(a, a + " `angle-bisector-locus` (proof `angleBisectorLocus`, Lines and Angles group, 6 scenes: O, A, B free, a hidden `bisectorFoot` F0 gives the bisector direction and F = O + 0.9·|OA| along it, P an `onLine` point on O–F (0.3–0.92), D, E `foot`s on the arms; the two halves φ drawn with `radius: 64`; AAS forward, HL for the converse; `isValid` keeps the angle between 30° and 120° and the feet on the drawn arms) is the sixty-first.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 60 2026-11-10:"
assert s.count(a) == 1
s = s.replace(a, "Page 61 2026-11-10: `/geometry/visual-tools/angle-bisector-locus` (owner said 'your pick'; Lines and Angles group; data module geo_pages_61.py). 61 views: Triangle 26, Circle 14, Quadrilateral 11, Polygon 4, Lines and Angles 6. Next picks if asked again: square diagonals, equilateral triangle angles, widen Simson P range. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
