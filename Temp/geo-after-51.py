# hub card, docs and memory for page 51
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "views: ['Vertical angles', 'Parallel lines and a transversal'],"
assert s.count(a) == 1
s = s.replace(a, "views: ['Vertical angles', 'Parallel lines and a transversal', 'Bisectors of a linear pair'],")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "readout in units of 60 px) is the fiftieth."
assert s.count(a) == 1
s = s.replace(a, a + " `linear-pair-bisectors` (proof `linearPairBisectors`, Lines and Angles group, 5 scenes: A, B, C free, O `onLine` on AB (minParam/maxParam 0.25/0.75), hidden `bisectorFoot` points P0 on AC and Q0 on CB give the bisector directions and P, Q are `pointAlongDist` ends at 0.8·OC; α and β drawn with `radius: 64`, the four halves with `radius: 30` and labels α/2, β/2; straight angle, bisectors, (α + β)/2 = 90°, a `rightAngle` mark at the end; `isValid` keeps C above the line and both angles over 20°) is the fifty-first.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 50 2026-11-08:"
assert s.count(a) == 1
s = s.replace(a, "Page 51 2026-11-08: `/geometry/visual-tools/linear-pair-bisectors` (owner said 'your pick'; Lines and Angles group, third page there; data module geo_pages_51.py). 51 views: Triangle 25, Circle 12, Quadrilateral 9, Polygon 2, Lines and Angles 3. Next picks if asked again: equal chords equidistant from the centre (Circle), angles around a point (Lines and Angles), Simson line. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
