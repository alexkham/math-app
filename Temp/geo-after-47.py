# hub card, docs and memory for page 47
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Intercept theorem', 'AA similarity', 'SAS similarity', 'SSS similarity']"
assert s.count(a) == 1
s = s.replace(a, "'Intercept theorem', 'AA similarity', 'SAS similarity', 'SSS similarity', 'Right triangle altitude theorem']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "readout in units of 60 px) is the forty-sixth."
assert s.count(a) == 1
s = s.replace(a, a + " `right-triangle-altitude` (proof `altitudeTheorem`, Triangle group, 6 scenes, Euclid VI.8: A and B free, a hidden `midpoint` M and C `onCircle` about M through A so the angle at C stays right by Thales, D the `foot` of C on AB; the angle sum copies α and β into the small triangles, AA three times gives CD² = AD·DB, AC² = AD·AB, BC² = BD·AB, and the leg theorems add to Pythagoras; `isValid` keeps C above AB, the foot 30 from either end and the altitude longer than 40; readout in units of 60 px shows CD² beside AD·DB and AC² beside AD·AB) is the forty-seventh.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 46 2026-11-08:"
assert s.count(a) == 1
s = s.replace(a, "Page 47 2026-11-08: `/geometry/visual-tools/right-triangle-altitude` (owner said 'your pick'; altitude theorem + leg theorems + Pythagoras by similarity; generator data module geo_pages_47.py). 47 views. Next picks if asked again: Simson line, Euler's inequality R >= 2r, the law of sines via the circumcircle, Heron needs more algebra. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
