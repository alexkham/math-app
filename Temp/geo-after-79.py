p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Equilateral triangle', '30-60-90 triangle', 'Isosceles converse']"
assert s.count(a) == 1
s = s.replace(a, "'Equilateral triangle', '30-60-90 triangle', 'Isosceles converse', \"Viviani's theorem\"]")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "labelCenter weighted off O so that O is not labelled on its own dot) is the seventy-eighth."
assert s.count(a) == 1
s = s.replace(a, a + " `viviani-theorem` (proof `viviani`, Triangle group, 5 scenes: A, B, P free, C from `rotateDeg`, the feet D, E, F from `foot`; area addition, triangle area twice, combining; the height drawn as a bar beside the triangle so that it never runs through P; labelCenter a hidden point K just below P, so that P is always named straight up between its perpendiculars and D, E, F are named outward along them) is the seventy-ninth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 78 2026-11-12:"
assert s.count(a) == 1
s = s.replace(a, "Page 79 2026-11-12: `/geometry/visual-tools/viviani-theorem` (owner said 'your pick'; Triangle group; data module geo_pages_79.py; label check Temp/esmcheck/vv-check.mjs covers names plus a side label, which search5 does not; trick: a label centre that follows the free point keeps its name off its own lines). 79 views: Triangle 30, Circle 21, Quadrilateral 13, Polygon 7, Lines and Angles 8. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
