import os
BS = chr(92)
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
for a, b in [("params: { ...PROOFS.simsonLine.model.params, tp: 2.1 } }", "params: { ...PROOFS.simsonLine.model.params, tp: 2.02 } }"),
             ("{ drag: '[data-handle=\"P\"]', dx: -10, dy: -4, ms: 1400 },", "{ drag: '[data-handle=\"P\"]', dx: 8, dy: 3, ms: 1400 },"),
             ("DRAG P" + BS + "nSlide P round the arc: the feet stay on one line.", "DRAG P" + BS + "nSlide P round the arc towards C: the feet stay on one line.")]:
    assert s.count(a) == 1, a
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8', newline='').write(s)
q = os.path.join('Temp', 'geo_pages_56.py')
t = open(q, encoding='utf-8').read()
for a, b in [("tp: 2.1 } }", "tp: 2.02 } }"), ("dx: -10, dy: -4", "dx: 8, dy: 3"), ("Slide P round the arc: the feet stay on one line.", "Slide P round the arc towards C: the feet stay on one line.")]:
    assert t.count(a) == 1, a
    t = t.replace(a, b)
open(q, 'w', encoding='utf-8').write(t)
print('fix ok')
