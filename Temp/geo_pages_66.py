# Content for page 66, angles in the same segment, read by geo-view-42-45.py (argument geo_pages_66)
PAGES = [dict(
    slug='angles-in-same-segment', prev='cyclic-exterior-angle', prev_h1='Exterior Angle of a Cyclic Quadrilateral', prev_key='cyclicExteriorAngle', prev_dragged='draggedCyclicExterior',
    key='anglesSameSegment', dragged='draggedSameSegment', dragged_comment='D slid along the arc: a different point, the same angle',
    dragged_expr="{ ...PROOFS.anglesSameSegment.model, params: { ...PROOFS.anglesSameSegment.model.params, td: -1.3 } }",
    demo_drag="{ drag: '[data-handle=\"D\"]', dx: -18, dy: -6, ms: 1400 },",
    subCategory='Circle',
    title='Angles in the Same Segment Proof | Equal Inscribed Angles Step by Step',
    desc='Watch the proof that angles in the same segment of a circle are equal: two points on the same arc see a chord under the same angle, each half the central angle, step by step. Then drag the points round the circle.',
    h1='Angles in the Same Segment', name='Angles in the Same Segment Proof',
    appdesc='Step-by-step interactive proof that inscribed angles standing on the same chord from the same side are equal, by the inscribed angle theorem, with draggable points on the circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><line x1="16" y1="56" x2="64" y2="56" stroke="#E6F1FB" stroke-width="1.4"/><line x1="24" y1="12" x2="16" y2="56" stroke="#E6F1FB" stroke-width="1.2"/><line x1="24" y1="12" x2="64" y2="56" stroke="#E6F1FB" stroke-width="1.2"/><line x1="58" y1="14" x2="16" y2="56" stroke="#FAC775" stroke-width="1.2"/><line x1="58" y1="14" x2="64" y2="56" stroke="#FAC775" stroke-width="1.2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">θ₁ = θ₂</text></svg>',
    keywords=['angles in the same segment', 'angles in the same segment are equal', 'inscribed angles on the same arc', 'angles subtended by the same chord', 'euclid iii.21', 'inscribed angle theorem', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'central', 'first', 'second', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $C$ or $D$ along the arc, or $A$ or $B$ round the circle, and watch the two angles in the readout stay equal to each other and to half the central angle. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A chord $AB$ cuts a circle into two segments. Take two points $C$ and $D$ on the same arc, in the same segment. The theorem (Euclid III.21) says that they see the chord under the same angle:

$$\\angle ACB = \\angle ADB$$

All points of one arc see the chord $AB$ under one fixed angle. It is a corollary of the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle), and it is the form of that theorem used most often: in the [intersecting chords](!/geometry/visual-tools/intersecting-chords) and [two secants](!/geometry/visual-tools/two-secants) arguments by similarity, in [Ptolemy's theorem](!/geometry/visual-tools/ptolemy-theorem) and in the [Simson line](!/geometry/visual-tools/simson-line).

In the player the four points slide round the circle, with $C$ and $D$ kept on the arc on the same side of $AB$ as the centre $O$; the readout shows both angles and half the central angle."""),
        ('The Central Angle', r"""Join the centre $O$ to $A$ and to $B$. The angle $\\omega = \\angle AOB$ is the central angle standing on the arc $AB$, the arc on the far side of the chord from $C$ and $D$. Both inscribed angles will be compared with it."""),
        ('The First Inscribed Angle', r"""The angle $ACB$ at the circumference and the angle $AOB$ at the centre stand on the same arc $AB$. The [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) says that the angle at the circumference is half the angle at the centre:

$$\\theta_1 = \\angle ACB = \\frac{\\omega}{2}$$"""),
        ('The Second Inscribed Angle', r"""The point $D$ is on the same arc as $C$, so the angle $ADB$ stands on the same arc $AB$ and the same theorem applies:

$$\\theta_2 = \\angle ADB = \\frac{\\omega}{2}$$"""),
        ('Why It Holds', r"""Both angles are half of the same central angle:

$$\\theta_1 = \\frac{\\omega}{2} = \\theta_2$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, the inscribed angle theorem twice, and combining. The player shows the case with the centre inside both angles; when it is outside, the inscribed angle theorem still gives half the central angle (by subtraction instead of addition), so the result is the same.

Points on the other arc, in the other segment, see the chord under the supplementary angle $180° - \\theta_1$: with $C$ on one arc and $E$ on the other, $ACBE$ is a [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) and its opposite angles add up to $180°$."""),
        ('Dragging the Figure', r"""Drag $C$ or $D$ along the arc: the lines from it to $A$ and $B$ swing, but the angle between them, shown in the readout, does not change at all. Drag $A$ or $B$ to change the chord: both angles change, together, and stay equal to half the central angle.

The player keeps $C$ and $D$ on the arc on the centre's side of the chord, with the centre inside both angles, and keeps the points apart and in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **The converse: a locus.** The points on one side of $AB$ that see it under a fixed angle $\\theta$ fill an arc of a circle through $A$ and $B$. For $\\theta = 90°$ this is the semicircle of [Thales' theorem](!/geometry/visual-tools/thales-theorem).
• **Concyclic points.** If $C$ and $D$ on the same side of $AB$ see it under equal angles, then $A$, $B$, $C$, $D$ lie on one circle; this is the test behind many cyclic-quadrilateral proofs, alongside the [exterior angle](!/geometry/visual-tools/cyclic-exterior-angle) test.
• **Similar triangles from chords.** Two chords $AC$ and $BD$ crossing at $P$ make the triangles $PAB$ and $PDC$ similar, since $\\angle PAB = \\angle PDC$ (same segment); that gives $PA \\cdot PC = PB \\cdot PD$, the [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem.
• **The tangent case.** When $D$ slides into $B$, the line $DB$ becomes the tangent at $B$ and the equal angle becomes the [tangent-chord angle](!/geometry/visual-tools/tangent-chord-angle).
• **Drawing a circle through three points with a given angle.** To find all points that see a segment under $60°$, draw the arcs through its ends on which the inscribed angle is $60°$; they are used to locate a ship from the angle between two lighthouses."""),
    ],
    order=[('the-statement', 'given'), ('the-central-angle', 'central'), ('the-first-inscribed-angle', 'first'), ('the-second-inscribed-angle', 'second'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does it mean that angles in the same segment are equal?', 'If two points lie on the same arc cut off by a chord AB, the angles they make with A and B are equal. Every point of that arc sees the chord under the same angle.'),
        ('How is the theorem proved?', 'Each of the two inscribed angles stands on the same arc as the central angle AOB, so by the inscribed angle theorem each is half of it. Two halves of the same angle are equal.'),
        ('What about points in the other segment?', 'Points on the other arc see the chord under the supplementary angle, 180° minus the first; together with a point of the first arc they form a cyclic quadrilateral, whose opposite angles add up to 180°.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The chord AB and two points C, D on the same arc, with the angles θ₁ and θ₂.'),
            ('central', 'The central angle, frozen', 'OA and OB drawn: the central angle ω on the arc AB.'),
            ('first', 'The first inscribed angle, frozen', 'ACB shaded: θ₁ = ω/2.'),
            ('second', 'The second inscribed angle, frozen', 'ADB shaded: θ₂ = ω/2.'),
            ('conclude', 'The conclusion, frozen', 'θ₁ = θ₂: the same angle from every point of the arc.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D slid along the arc: a different point, the same angle.',
    notes=[('given', 'Drag C or D along the arc: the angle stays.', 'the-statement', 'Learn more about the statement'),
           ('central', 'The angle at the centre on the same arc.', 'the-central-angle', 'Learn more about the central angle'),
           ('first', 'Half the central angle.', 'the-first-inscribed-angle', 'Learn more about the first angle'),
           ('second', 'Half the same central angle.', 'the-second-inscribed-angle', 'Learn more about the second angle'),
           ('conclude', 'Drag a point: the readout keeps θ₁ = θ₂.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $C$ or $D$ along the arc, or $A$ or $B$ round the circle; the readout under the canvas shows both angles and half the central angle. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['CENTRE\nNext → : OA and OB drawn: the central angle ω on the arc AB.',
               'FIRST\nThe inscribed angle at C is half of ω.',
               'SECOND\nThe inscribed angle at D is half of ω too.',
               'CONCLUDE\nBoth are half of ω: θ₁ = θ₂.'],
    demo_drag_say='DRAG D\nSlide D along the arc: its angle does not change.',
    drag_desc='C and D slide along the arc, A and B round the circle; the centre O stays fixed',
    readout_desc='the line under the figure: θ₁, θ₂ and half the central angle, live while you drag',
    p3top='94px', p3left='calc(25% + 28px)',
    frame2=[('The two inscribed angles', 'θ₁ at C and θ₂ at D, both on the chord AB', '96px', 'calc(25% - 80px)'),
            ('The central angle', 'ω at O between the radii OA and OB', '200px', 'calc(25% + 30px)'),
            ('The chord AB', 'the common base of the two shaded triangles', '300px', 'calc(25% + 10px)'),
            ('Justification tags', 'Given, Construction, Inscribed angle theorem (twice), Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the chord and the two points are placed by dragging round the circle.',
    input_rows=[['$C$, $D$', 'solid dot', 'slide along the arc on the same side of $AB$ as the centre; their angles do not change'],
                ['$A$, $B$', 'solid dot', 'slide round the circle and change the chord; both angles change together'],
                ['$O$', 'hollow dot', 'the centre of the circle'],
                ['$C$ or $D$ on the other arc, the centre outside an angle, points too close, or out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ₁, θ₂ and ω",
    readout_short='both angles and half the central angle', tags='**Given**, **Construction**, **Inscribed angle theorem**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses only the inscribed angle theorem, never the numbers, which is why the two angles agree wherever you drag the points.',
    beh2t='The circle is built in', beh2='All four points are kept on one fixed circle, which is the hypothesis; O is its centre, drawn only from the second step on.',
)]
