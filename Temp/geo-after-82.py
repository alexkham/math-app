p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Isosceles converse', \"Viviani's theorem\"]"
assert s.count(a) == 1
s = s.replace(a, "'Isosceles converse', \"Viviani's theorem\", 'A median halves the area']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')
p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "because the bisectors PX and QY run through the middle of the angles they halve) is the eighty-first."
assert s.count(a) == 1
s = s.replace(a, a + " `median-halves-area` (proof `medianArea`, Triangle group, 4 scenes: A, B, C free, M the midpoint and H the foot of the altitude; altitude, triangle area, midpoint; the height is written AH rather than given its own name, because a separate h beside AH crowded AB when A moved left; labelCenter weighted towards A so that H and M are named well below BC) is the eighty-second.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')
p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 81 2026-11-14:"
assert s.count(a) == 1
s = s.replace(a, "Page 82 2026-11-14: `/geometry/visual-tools/median-halves-area` (owner said 'your pick'; Triangle; geo_pages_82.py; label check Temp/esmcheck/ma-check.mjs). 82 views: Triangle 31, Circle 21, Quadrilateral 14, Polygon 7, Lines and Angles 9. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
