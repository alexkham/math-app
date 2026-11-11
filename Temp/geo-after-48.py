# hub card, docs and memory for page 48
p = 'pages/geometry/index.jsx'
s = open(p, encoding='utf-8', newline='').read()
a = "'Secant and tangent', 'Two secants', \"Ptolemy's theorem\"]"
assert s.count(a) == 1
s = s.replace(a, "'Secant and tangent', 'Two secants', \"Ptolemy's theorem\", 'Tangent-chord angle']")
open(p, 'w', encoding='utf-8', newline='').write(s); print('hub ok')

p = 'app/components/geometry/proof-player/ProofPlayerDocs.md'
s = open(p, encoding='utf-8', newline='').read()
a = "shows CD² beside AD·DB and AC² beside AD·AB) is the forty-seventh."
assert s.count(a) == 1
s = s.replace(a, a + " `tangent-chord-angle` (proof `tangentChord`, Circle group, 6 scenes, Euclid III.32: O and A free, B and C `onCircle`, D = O + (O − A) via `pointAlongDist`, the tangent as a segment between two `perpAlongDist` ends T and a hidden T2; tangent ⟂ radius, Thales on the diameter AD, the angle sum makes ∠ADB and ∠TAB both 90° − φ, inscribed angles move it to C; the helper angle φ at A is drawn with `radius: 52` outside θ; `isValid` keeps B on the T side of AD and C on the far side of AB by cross-product signs) is the forty-eighth. The Angle primitive now rounds its arc and label coordinates to a thousandth of a pixel (2026-11-08): server and client differed in the last digit of the path on the altitude page and React logged a hydration warning on every load.")
open(p, 'w', encoding='utf-8', newline='').write(s); print('docs ok')

p = r'C:\Users\Alex\.claude\projects\D--next-js-my-projects-math-app\memory\geometry-proofs-section.md'
s = open(p, encoding='utf-8', newline='').read()
a = "Page 47 2026-11-08:"
assert s.count(a) == 1
s = s.replace(a, "Page 48 2026-11-08: `/geometry/visual-tools/tangent-chord-angle` (owner said 'your pick'; alternate segment theorem, Circle group; data module geo_pages_48.py). 48 views. Browser trap: in the hidden pane a page measures all rects as 0 until a screenshot is taken; take a screenshot first, then measure. Next picks if asked again: Simson line, law of sines (needs trig), equal chords equidistant from the centre, isosceles trapezoid. " + a)
open(p, 'w', encoding='utf-8', newline='').write(s); print('memory ok')
