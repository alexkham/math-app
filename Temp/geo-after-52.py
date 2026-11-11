# hub card, docs and memory for page 52
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Two secants', \"Ptolemy's theorem\", 'Tangent-chord angle']"
assert s.count(a) == 1
s = s.replace(a, "'Two secants', \"Ptolemy's theorem\", 'Tangent-chord angle', 'Equal chords']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "keeps C above the line and both angles over 20°) is the fifty-first."
assert s.count(a) == 1
s = s.replace(a, a + " `equal-chords` (proof `equalChords`, Circle group, 6 scenes, Euclid III.14: O and A free, B and C `onCircle`, D from the new `rotateBy` point type (about, of, angle: [q, w, r]: `of` turned about `about` by the signed angle from q to r as seen from w, so CD is always a copy of AB), M and N `foot`s; perpendicular bisects the chord, equal radii, HL on OMA and ONC; ticks n: 1 chords, n: 2 half-chords, n: 3 radii; `isValid` keeps the chords off the centre, apart, and shorter than 1.85 radii) is the fifty-second.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 51 2026-11-08:"
assert s.count(a) == 1
s = s.replace(a, "Page 52 2026-11-08: `/geometry/visual-tools/equal-chords` (owner said 'your pick'; Circle group; new `rotateBy` point type; data module geo_pages_52.py). 52 views: Triangle 25, Circle 13, Quadrilateral 9, Polygon 2, Lines and Angles 3. Next picks if asked again: angles around a point (Lines and Angles), Simson line, rhombus/parallelogram angle facts (Quadrilateral), regular polygon in a circle (Polygon). " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
