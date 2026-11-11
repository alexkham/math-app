# hub card, docs and memory for page 50
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Trapezoid midsegment', 'Kite: diagonals are perpendicular']"
assert s.count(a) == 1
s = s.replace(a, "'Trapezoid midsegment', 'Kite: diagonals are perpendicular', 'Isosceles trapezoid']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "readout gives both sums) is the forty-ninth."
assert s.count(a) == 1
s = s.replace(a, a + " `isosceles-trapezoid` (proof `isoscelesTrapezoid`, Quadrilateral group, 6 scenes: A, B, D free, hidden F = `foot` of D on AB and M = `midpoint` of AB, C = D + 2(M − F) via `pointAlongDist` (scale 2 along F→M) so DC ∥ AB and BC = AD by symmetry, E = C + (A − D); the parallel CE makes AECD a parallelogram, EBC isosceles, corresponding angles give ∠A = ∠B, SAS on DAB and CBA gives AC = BD; `isValid` keeps D above AB with its foot between A and the midpoint so E lies inside AB; readout in units of 60 px) is the fiftieth.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 49 2026-11-08:"
assert s.count(a) == 1
s = s.replace(a, "Page 50 2026-11-08: `/geometry/visual-tools/isosceles-trapezoid` (owner said 'your pick'; Quadrilateral group; mirror-image construction for C; data module geo_pages_50.py). 50 views. Next picks if asked again: angle bisectors of a linear pair are perpendicular (Lines and Angles), Simson line, equal chords equidistant from the centre. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
