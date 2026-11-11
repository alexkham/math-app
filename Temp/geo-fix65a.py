p = 'Temp/geo_pages_65.py'
s = open(p, encoding='utf-8').read()
BS = chr(92); Q = chr(34)
reps = [("dragged_comment='B slid down round the circle: the exterior angle at B and the angle at D changed together'", "dragged_comment='C slid round the circle: the exterior angle at B and the angle at D changed together'"),
        ("params: { ...PROOFS.cyclicExteriorAngle.model.params, tb: -0.3 } }", "params: { ...PROOFS.cyclicExteriorAngle.model.params, tc: 1.1 } }"),
        ("data-handle=" + BS + Q + "B" + BS + Q + "]', dx: 4, dy: 14", "data-handle=" + BS + Q + "C" + BS + Q + "]', dx: -12, dy: 6"),
        ("dragged_cap='After dragging B, frozen', dragged_txt='B slid down round the circle: ε and δ changed together, still equal.'", "dragged_cap='After dragging C, frozen', dragged_txt='C slid round the circle: ε and δ changed together, still equal.'"),
        ("demo_drag_say='DRAG B" + BS + "nSlide B round the circle", "demo_drag_say='DRAG C" + BS + "nSlide C round the circle"),
        ("Moving $D$ round the arc changes nothing at all, since every position of $D$ on that arc sees $AC$ under the same angle.", "Both angles depend only on $A$ and $C$: moving $D$ along its arc, or $B$ along its arc, changes neither, since every point of an arc sees the chord $AC$ under the same angle."),
        ("Step through the proof, then drag any vertex round the circle and watch", "Step through the proof, then drag $A$ or $C$ round the circle and watch"),
        ("('given', 'Drag a vertex round the circle.', 'the-statement'", "('given', 'Drag A or C: ε and δ change together.', 'the-statement'"),
        ("('conclude', 'Drag a vertex: the readout keeps ε = δ.'", "('conclude', 'Drag A or C: the readout keeps ε = δ.'")]
for a, b in reps:
    assert s.count(a) == 1, a[:60]
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8').write(s); print('data fixed')
