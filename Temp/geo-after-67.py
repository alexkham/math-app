p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Equilateral triangle', '30-60-90 triangle']"
assert s.count(a) == 1
s = s.replace(a, "'Equilateral triangle', '30-60-90 triangle', 'Isosceles converse']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "so C and D stay on the major arc) is the sixty-sixth."
assert s.count(a) == 1
s = s.replace(a, a + " `isosceles-converse` (proof `isoscelesConverse`, Triangle group, 5 scenes, Euclid I.6: B and C free, A an `onLine` point on the perpendicular at the midpoint of BC (hidden M and Q), D a `bisectorFoot` from A; the bisector, AAS, corresponding parts; `isValid` keeps the base angles between 20° and 80°) is the sixty-seventh.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 66 2026-11-11:"
assert s.count(a) == 1
s = s.replace(a, "Page 67 2026-11-11: `/geometry/visual-tools/isosceles-converse` (owner said 'your pick'; Triangle group; data module geo_pages_67.py; data-file trap: no apostrophes inside single-quoted strings, run ast.parse before generating). 67 views: Triangle 29, Circle 16, Quadrilateral 12, Polygon 4, Lines and Angles 6. Next picks if asked again: angle bisector meets circumcircle at arc midpoint, widen Simson P range, Polygon or Lines and Angles gaps. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
