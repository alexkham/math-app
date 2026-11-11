# Content for page 55, the regular hexagon, read by geo-view-42-45.py (argument geo_pages_55)
PAGES = [dict(
    slug='regular-hexagon', prev='parallelogram-from-sides', prev_h1='Equal Opposite Sides Make a Parallelogram', prev_key='parallelogramFromSides', prev_dragged='draggedParallelogramSides',
    key='regularHexagon', dragged='draggedHexagon', dragged_comment='A moved: the hexagon turned and grew, its side still equal to the radius',
    dragged_expr="{ ...PROOFS.regularHexagon.model, points: { ...PROOFS.regularHexagon.model.points, A: { x: 175, y: 128 } } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: 10, dy: -8, ms: 1400 },",
    subCategory='Polygon',
    title='Regular Hexagon: Side Equals Radius | Proof Step by Step',
    desc='Watch the proof that the side of a regular hexagon equals the radius of its circle: six congruent triangles, six 60° angles at the centre, and an equilateral triangle, step by step. Then drag the hexagon.',
    h1='Regular Hexagon: Side Equals Radius', name='Regular Hexagon Proof',
    appdesc='Step-by-step interactive proof that the side of a regular hexagon equals its circumradius, by six congruent triangles, angles around the centre and an equilateral triangle, with a draggable hexagon.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="40,8 66,23 66,53 40,68 14,53 14,23" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="40,38 40,8 66,23" fill="#FAC775" fill-opacity="0.5" stroke="#FAC775" stroke-width="1.4"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">side = r</text></svg>',
    keywords=['regular hexagon', 'side of a regular hexagon equals radius', 'hexagon inscribed in a circle', 'regular polygon', 'equilateral triangles', 'central angle', 'circumradius', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'radii', 'central', 'isosceles', 'equilateral', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ to turn and resize the hexagon, or $O$ to move it, and watch the side and the radius in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A regular hexagon has six equal sides and six equal angles, and its vertices lie on a circle, the circumscribed circle, with centre $O$. The theorem says that its side is exactly the radius of that circle:

$$AB = OA$$

This is the fact behind the oldest ruler-and-compass construction of a regular polygon: keep the compass at the radius and step it six times round the circle, and you come back to the start. It is also the first estimate of $\\pi$: the hexagon's perimeter $6r$ is less than the circle's $2\\pi r$, so $\\pi > 3$.

The proof needs only earlier pages: SSS, the [angles around a point](!/geometry/visual-tools/angles-around-a-point), the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles) and the [angle sum](!/geometry/visual-tools/triangle-angle-sum). In the player $O$ and $A$ are free, and $B$ to $F$ are $A$ turned about $O$ by $60°$ at a time; the readout shows the side, the radius and the angle at the centre."""),
        ('Six Congruent Triangles', r"""Join $O$ to each of the six vertices. The six segments are radii, so they are all equal. They cut the hexagon into six triangles $OAB$, $OBC$, $OCD$, $ODE$, $OEF$, $OFA$, and each has two radii and one side of the hexagon. The sides are equal because the hexagon is regular, so the six triangles have the same three side lengths, and by [SSS](!/geometry/visual-tools/sss-congruence) they are congruent."""),
        ('The Angles at the Centre', r"""Congruent triangles have equal angles, so the six angles at $O$ are equal, $\\theta$ each. Together they fill the full turn round $O$, which is $360°$ by the [angles around a point](!/geometry/visual-tools/angles-around-a-point) page:

$$6\\theta = 360°, \\qquad \\theta = 60°$$"""),
        ('The Base Angles', r"""In the triangle $OAB$ the sides $OA$ and $OB$ are radii, so the triangle is isosceles with apex $O$ and its [base angles](!/geometry/visual-tools/isosceles-base-angles) at $A$ and $B$ are equal, $\\varphi$ each. The [angle sum](!/geometry/visual-tools/triangle-angle-sum) of the triangle gives

$$\\theta + 2\\varphi = 180°, \\qquad \\varphi = \\frac{180° - 60°}{2} = 60°$$"""),
        ('An Equilateral Triangle', r"""All three angles of $OAB$ are $60°$. In a triangle equal angles face equal sides: if two sides facing equal angles were unequal, the [larger side would face the larger angle](!/geometry/visual-tools/larger-side-larger-angle). The angle at $O$ faces $AB$ and the angle at $A$ faces $OB$, so $AB = OB$; and $OB = OA$ as radii. So

$$OA = OB = AB$$

and the triangle is equilateral."""),
        ('Why It Holds', r"""The side $AB$ equals the radius $OA$, and since all six triangles are congruent, the same holds for every side:

$$AB = BC = CD = DE = EF = FA = OA$$

A regular hexagon is six equilateral triangles meeting at its centre. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, SSS, angles around a point, isosceles base angles, equal angles facing equal sides, and combining.

The number six is what makes it work: only for six sides is the central angle $60°$, the one angle that makes the isosceles triangle on each side equilateral. For a square the central angle is $90°$ and the side is $r\\sqrt2$; for a regular $n$-gon it is $2r\\sin(180°/n)$."""),
        ('Dragging the Figure', r"""Drag $A$: the whole hexagon turns with it and grows or shrinks, since $B$ to $F$ are always $A$ turned about $O$ by $60°$ steps, and in the readout the side stays equal to the radius while the angle at the centre stays at $60°$. Drag $O$ to move the circle; $A$ stays where it is, so the hexagon turns and resizes about the new centre.

The player keeps the radius between about one and a half and two and a half readout units, so that the six angle marks at the centre stay readable and the hexagon stays in the frame; a drag outside that range is refused."""),
        ('Consequences', r"""• **The compass construction.** With the compass opened to the radius, six steps round a circle mark the vertices of a regular hexagon; every second mark gives an equilateral triangle, and bisecting the arcs gives the regular 12-gon.
• **A first bound for π.** The hexagon's perimeter is $6r$ and it lies inside the circle, so $6r < 2\\pi r$ and $\\pi > 3$. Archimedes doubled the sides to 96 and found $3\\tfrac{10}{71} < \\pi < 3\\tfrac17$.
• **Area.** Six equilateral triangles of side $r$ give the area $\\tfrac{3\\sqrt3}{2} r^2$, by the [Pythagorean theorem](!/geometry/visual-tools/pythagorean-theorem) in half of one triangle.
• **Tiling and honeycombs.** The interior angle is $120°$ (also from the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum), $720°/6$), so three hexagons meet round a point: the honeycomb tiling.
• **Chords of 60°.** A chord that subtends $60°$ at the centre equals the radius; it is the entry Ptolemy started his table of chords from, together with the [equal chords](!/geometry/visual-tools/equal-chords) page's fact that equal arcs have equal chords."""),
    ],
    order=[('the-statement', 'given'), ('six-congruent-triangles', 'radii'), ('the-angles-at-the-centre', 'central'), ('the-base-angles', 'isosceles'), ('an-equilateral-triangle', 'equilateral'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Why is the side of a regular hexagon equal to its radius?', 'The radii cut the hexagon into six congruent triangles whose angles at the centre fill 360°, so each is 60°. Each triangle is isosceles with two radii, so its base angles are 60° too; with all angles 60° the triangle is equilateral and its third side, the hexagon side, equals the radius.'),
        ('How do you construct a regular hexagon with a compass?', 'Draw a circle, keep the compass opening equal to the radius, and step it round the circle from any point: the six marks are the vertices of a regular hexagon, because the side of a regular hexagon equals the radius.'),
        ('What are the angles of a regular hexagon?', 'Each interior angle is 120° (two base angles of 60° meet at every vertex), the angles at the centre are 60°, and the exterior angles are 60°.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The regular hexagon ABCDEF in its circle, six equal sides.'),
            ('radii', 'Six congruent triangles, frozen', 'Six equal radii: six triangles congruent by SSS.'),
            ('central', 'The angles at the centre, frozen', 'Six equal angles θ round O: θ = 60°.'),
            ('isosceles', 'The base angles, frozen', 'OAB shaded: base angles φ = (180° − 60°)/2 = 60°.'),
            ('equilateral', 'An equilateral triangle, frozen', 'All three angles 60°: OA = OB = AB.'),
            ('conclude', 'The conclusion, frozen', 'The side of the hexagon equals the radius.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved: the hexagon turned and grew, its side still equal to the radius.',
    notes=[('given', 'Drag A: the hexagon turns and resizes.', 'the-statement', 'Learn more about the statement'),
           ('radii', 'Two radii and a side in every triangle.', 'six-congruent-triangles', 'Learn more about the six triangles'),
           ('central', 'Six equal angles make a full turn.', 'the-angles-at-the-centre', 'Learn more about the angles at the centre'),
           ('isosceles', 'Two radii: equal base angles.', 'the-base-angles', 'Learn more about the base angles'),
           ('equilateral', 'Equal angles face equal sides.', 'an-equilateral-triangle', 'Learn more about the equilateral triangle'),
           ('conclude', 'Drag A: the side and the radius in the readout stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ to turn and resize the hexagon, or $O$ to move it; the readout under the canvas shows the side, the radius and the angle at the centre. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['RADII\nNext → : six equal radii cut the hexagon into six congruent triangles.',
               'CENTRE\nSix equal angles round O: each is 60°.',
               'BASE ANGLES\nOAB is isosceles: its base angles are (180° − 60°)/2 = 60°.',
               'EQUILATERAL\nAll angles 60°: OA = OB = AB.',
               'CONCLUDE\nThe side of the hexagon equals the radius.'],
    demo_drag_say='DRAG A\nTurn the hexagon: the side still equals the radius.',
    drag_desc='A turns and resizes the hexagon, O moves the circle; the hollow points B to F follow, 60° apart',
    readout_desc='the line under the figure: the side AB, the radius OA and the angle at the centre, live while you drag',
    p3top='170px', p3left='calc(25% - 40px)',
    frame2=[('The six radii', 'equal, one tick each, cutting the hexagon into six triangles', '250px', 'calc(25% - 70px)'),
            ('The angles at the centre', 'six angles θ round O, 60° each', '120px', 'calc(25% + 60px)'),
            ('The triangle OAB', 'shaded, with base angles φ at A and B: all three angles 60°', '96px', 'calc(25% - 110px)'),
            ('Justification tags', 'Given, SSS, Angles around a point, Isosceles base angles, Equal angles equal sides, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the hexagon is turned, resized and moved by dragging, and stays regular.',
    input_rows=[['$A$', 'solid dot', 'turns and resizes the hexagon; the other five vertices follow'],
                ['$O$', 'solid dot', 'moves the centre; $A$ stays put, so the hexagon turns about the new centre'],
                ['$B$ to $F$', 'hollow dot', 'cannot be dragged: $A$ turned about $O$ by $60°$, $120°$, and so on'],
                ['a radius too small or too large for the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$ to $F$ and $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: the six angles θ and the base angles φ",
    readout_short='the side, the radius and the angle at the centre', tags='**Given**, **SSS**, **Angles around a point**, **Isosceles base angles**, **Equal angles, equal sides**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses SSS, the full turn, isosceles base angles and the angle sum, never the numbers, which is why the side equals the radius for every hexagon you drag.',
    beh2t='The hexagon is regular by construction', beh2='B to F are A turned about the centre by 60° steps, so the six sides are equal and the vertices lie on the circle; that is the hypothesis, built into the figure.',
)]
