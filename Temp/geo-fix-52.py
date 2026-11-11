import os
p = os.path.join('pages', 'geometry', 'visual-tools', '[view].jsx')
s = open(p, encoding='utf-8', newline='').read()
nl = '\r\n' if '\r\n' in s else '\n'
reps = [("const draggedEqualChords = { ...PROOFS.equalChords.model, params: { ...PROOFS.equalChords.model.params, tc: 1.45 } }",
         "const draggedEqualChords = { ...PROOFS.equalChords.model, params: { ...PROOFS.equalChords.model.params, tb: -0.9 } }"),
        ("  // C slid round the circle: the second chord moved, still equal to the first and still as far from the centre",
         "  // B slid round the circle: both chords longer, both nearer the centre, still equally far"),
        ("'After dragging C, frozen',\n        'The second chord carried round the circle: still equal to AB, still as far from O.'),".replace('\n', nl),
         "'After dragging B, frozen',\n        'B slid round the circle: both chords longer and both nearer the centre, still equally far.'),".replace('\n', nl)),
        ("{ n: 3, label: 'Draggable points', desc: 'B slides round the circle and sets the length of both chords, C carries the second chord round, A sets the radius, O moves the circle; the hollow points D, M and N follow', pos: { top: '94px', left: 'calc(25% + 28px)' } },",
         "{ n: 3, label: 'Draggable points', desc: 'B slides round the circle and sets the length of both chords, C carries the second chord round, A sets the radius, O moves the circle; the hollow points D, M and N follow', pos: { top: '150px', left: 'calc(25% + 60px)' } },")]
for a, b in reps:
    assert s.count(a) == 1, a[:70]
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8', newline='').write(s); print('view fixed')
q = os.path.join('Temp', 'geo_pages_52.py')
t = open(q, encoding='utf-8').read()
for a, b in [("tc: 1.45 } }", "tb: -0.9 } }"), ("dragged_comment='C slid round the circle: the second chord moved, still equal to the first and still as far from the centre'", "dragged_comment='B slid round the circle: both chords longer, both nearer the centre, still equally far'"), ("dragged_cap='After dragging C, frozen', dragged_txt='The second chord carried round the circle: still equal to AB, still as far from O.'", "dragged_cap='After dragging B, frozen', dragged_txt='B slid round the circle: both chords longer and both nearer the centre, still equally far.'"), ("p3top='94px', p3left='calc(25% + 28px)'", "p3top='150px', p3left='calc(25% + 60px)'")]:
    assert t.count(a) == 1, a[:50]
    t = t.replace(a, b)
open(q, 'w', encoding='utf-8').write(t); print('data fixed')
