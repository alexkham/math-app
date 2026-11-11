# hub card, docs and memory for page 46
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Secant and tangent', 'Two secants']"
assert s.count(a) == 1
s = s.replace(a, "'Secant and tangent', 'Two secants', \"Ptolemy's theorem\"]")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Their readouts show the ratios and, where angles are marked, the angles at D and B."
assert s.count(a) == 1
s = s.replace(a, a + " `ptolemy-theorem` (proof `ptolemy`, Circle group, 6 scenes: the cyclic-quadrilateral figure (O and A free, B, C, D `onCircle`), K from the new `angleCopy` point type (at, from, toward, angle: [q, w, r], of: the ray at→from turned towards `toward` by the angle q-w-r, met with the line of[0]–of[1]); inscribed angles φ on the arc BC and ψ on the arc AB (the second ψ at D drawn with `radius: 52` to clear the φ label), ABK ~ DBC and KBC ~ ABD by AA, the two products add along the diagonal; `isValid` keeps the vertices in order with the centre inside, every side longer than 45 and K at least 20 from A and C; readout in units of 60 px) is the forty-sixth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Pages 42-45 2026-11-08"
assert s.count(a) == 1
s = s.replace(a, "Page 46 2026-11-08: `/geometry/visual-tools/ptolemy-theorem` (owner asked 'Ptolemy'; Circle group; new `angleCopy` point type in resolver.js; built with the generator geo-view-42-45.py + data module geo_pages_46.py). 46 views. Next picks if asked again: altitude on the hypotenuse / geometric mean, Ptolemy's inequality is prose only, Simson line (needs cyclic quad + more). " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
