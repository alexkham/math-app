# Content for page 76, the angle between two secants from an outside point, read by geo-view-42-45.py (argument geo_pages_76)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='angle-between-secants', prev='angle-between-chords', prev_h1='The Angle Between Two Chords', prev_key='chordsAngle', prev_dragged='draggedChordsAngle',
    key='secantsAngle', dragged='draggedSecantsAngle', dragged_comment='P moved up and to the right: a wider angle, still half the difference',
    dragged_expr="{ ...PROOFS.secantsAngle.model, points: { ...PROOFS.secantsAngle.model.points, P: { x: 110, y: 206 } } }",
    demo_drag="{ drag: '[data-handle=\"P\"]', dx: 8, dy: -8, ms: 1400 },",
    subCategory='Circle',
    title='Angle Between Two Secants Theorem | Half the Difference of the Arcs Proof Step by Step',
    desc='Watch the proof that the angle between two secants drawn from a point outside a circle is half the difference of the central angles of the arcs they cut off, by the exterior angle theorem and the inscribed angle theorem, step by step. Then drag the point and the secants.',
    h1='The Angle Between Two Secants', name='Angle Between Secants Proof',
    appdesc='Step-by-step interactive proof that the angle formed by two secants from an external point equals half the difference of the intercepted arcs, with a draggable external point and draggable secants.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="40" r="24" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><line x1="6" y1="42" x2="62" y2="19" stroke="#E6F1FB" stroke-width="1.4"/><line x1="6" y1="42" x2="60" y2="62" stroke="#E6F1FB" stroke-width="1.4"/><path d="M18,37 A12,12 0 0 1 18,46" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M62,19 A24,24 0 0 1 60,62" fill="none" stroke="#FAC775" stroke-width="2"/><path d="M30,32 A24,24 0 0 0 31,51" fill="none" stroke="#FAC775" stroke-width="1.2" stroke-dasharray="2 2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">θ = ½(arc − arc)</text></svg>',
    keywords=['angle between two secants', 'secant secant angle theorem', 'angle outside a circle half the difference of arcs', 'external angle of a circle', 'intercepted arcs', 'inscribed angle theorem', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'exterior', 'first', 'second', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$, or $B$ or $D$ round the circle, and watch the readout: the angle at $P$ and half the difference of the two central angles stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $P$ be a point outside a circle with centre $O$. Two lines from $P$ cut the circle: the first meets it at $A$ and then $B$, the second at $C$ and then $D$. The angle $\\theta = \\angle BPD$ between the secants cuts off two arcs, the far arc $BD$ and the near arc $AC$. The theorem says

$$\\theta = \\frac{1}{2}\\left(\\angle BOD - \\angle AOC\\right)$$

half the difference of the central angles of the two arcs. It is the outside version of the [angle between two chords](!/geometry/visual-tools/angle-between-chords), where the chords cross inside and the angle is half the sum.

The proof uses the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) once and the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) twice. In the player $P$ moves freely outside the circle, $B$ and $D$ slide round it, and $A$, $C$ are found where the lines meet the circle again; the readout shows $\\angle BPD$ and half the difference."""),
        ('An Exterior Angle', r"""Join $A$ to $D$. In the triangle $PAD$ the ray $AB$ continues the side $PA$ beyond $A$, so $\\beta = \\angle BAD$ is an exterior angle of $PAD$. It equals the sum of the two remote interior angles, $\\theta$ at $P$ and $\\delta = \\angle ADC$ at $D$:

$$\\beta = \\theta + \\delta, \\qquad \\theta = \\beta - \\delta$$"""),
        ('The Far Arc', r"""The angle $\\beta = \\angle BAD$ has its vertex on the circle and stands on the far arc $BD$. The central angle on the same arc is twice as large:

$$\\angle BOD = 2\\beta$$"""),
        ('The Near Arc', r"""The angle $\\delta = \\angle ADC$ stands on the near arc $AC$, so

$$\\angle AOC = 2\\delta$$"""),
        ('Why It Holds', r"""Substituting the two central angles:

$$\\theta = \\beta - \\delta = \\frac{1}{2}\\angle BOD - \\frac{1}{2}\\angle AOC = \\frac{1}{2}\\left(\\angle BOD - \\angle AOC\\right)$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the exterior angle theorem, the inscribed angle theorem (twice) and combining.

The only change from the chords theorem is where the crossing lies: inside the circle the second arc adds to the first, outside it is taken away."""),
        ('Dragging the Figure', r"""Drag $P$: the secants swing, $A$ and $C$ move along the circle, and the readout keeps the angle at $P$ equal to half the difference. Drag $B$ or $D$ round the circle to change one secant at a time.

The player keeps $P$ well outside the circle, both lines crossing it at two points far enough apart, the far arc under $170°$ so that the central angle is the one drawn, the angles large enough for their marks and the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **A tangent and a secant.** When $C$ and $D$ come together the second line becomes a tangent, and the angle is half the difference of the arcs between the tangent point and $A$, $B$; the [tangent-chord angle](!/geometry/visual-tools/tangent-chord-angle) is the limiting case at the circle.
• **Two tangents.** With both lines tangent, the angle at $P$ is half the difference of the two arcs between the points of contact, so it is $180°$ minus the central angle between them, as on the [two tangents](!/geometry/visual-tools/two-tangents) page.
• **P on the circle.** When $P$ reaches the circle the near arc shrinks to nothing and the formula becomes the inscribed angle theorem.
• **The lengths.** The same two secants satisfy $PA \\cdot PB = PC \\cdot PD$, the [two secants](!/geometry/visual-tools/two-secants) theorem about lengths rather than angles.
• **Inside, on and outside.** The three cases fit one rule: the angle is half the sum of the arcs when the lines cross inside, the inscribed angle when they cross on the circle, and half the difference when they cross outside."""),
    ],
    order=[('the-statement', 'given'), ('an-exterior-angle', 'exterior'), ('the-far-arc', 'first'), ('the-near-arc', 'second'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the angle between two secants from an outside point?', 'It is half the difference of the two arcs it cuts off: half the central angle of the far arc minus half the central angle of the near arc.'),
        ('How is the secant angle theorem proved?', 'Join the near point of one secant to the far point of the other. The angle at the near point is an exterior angle of the triangle with the outside point, so the angle between the secants is the difference of two inscribed angles, each half the central angle of its arc.'),
        ('How does it differ from the angle between two chords?', 'For chords crossing inside a circle the angle is half the sum of the arcs; for secants meeting outside it is half the difference.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Two secants from P meeting the circle at A, B and C, D.'),
            ('exterior', 'An exterior angle, frozen', 'PAD shaded: β = θ + δ.'),
            ('first', 'The far arc, frozen', 'OB and OD drawn: ∠BOD = 2β.'),
            ('second', 'The near arc, frozen', 'OA and OC drawn: ∠AOC = 2δ.'),
            ('conclude', 'The conclusion, frozen', 'θ = ½(∠BOD − ∠AOC).')],
    dragged_cap='After dragging P, frozen', dragged_txt='P moved up and to the right: a wider angle, still half the difference.',
    notes=[('given', 'Drag P: the readout keeps the two sides equal.', 'the-statement', 'Learn more about the statement'),
           ('exterior', 'An exterior angle of PAD.', 'an-exterior-angle', 'Learn more about the exterior angle'),
           ('first', 'Twice the inscribed angle on the far arc.', 'the-far-arc', 'Learn more about the far arc'),
           ('second', 'Twice the inscribed angle on the near arc.', 'the-near-arc', 'Learn more about the near arc'),
           ('conclude', 'Drag P: θ stays half the difference.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$, or $B$ or $D$ round the circle; the readout under the canvas shows $\\angle BPD$ and half the difference of the central angles. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['EXTERIOR\nNext → : β at A is an exterior angle of PAD, θ = β − δ.',
               'FAR ARC\n∠BOD = 2β.',
               'NEAR ARC\n∠AOC = 2δ.',
               'CONCLUDE\nθ = ½(∠BOD − ∠AOC).'],
    demo_drag_say='DRAG P\nMove P: θ changes, still half the difference.',
    drag_desc='P moves freely outside the circle, B and D slide round it; the hollow points A and C follow',
    readout_desc='the line under the figure: ∠BPD and half the difference of the central angles, live while you drag',
    p3top='150px', p3left='calc(25% - 150px)',
    frame2=[('The angle at P', 'θ between the two secants', '170px', 'calc(25% - 120px)'),
            ('The triangle PAD', 'shaded, with β at A and δ at D', '196px', 'calc(25% - 45px)'),
            ('The central angles', '2β on the far arc and 2δ on the near arc', '160px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Exterior angle theorem, Inscribed angle theorem, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the secants are moved by dragging the outside point and their far ends.',
    input_rows=[['$P$', 'solid dot', 'moves freely outside the circle; both secants swing'],
                ['$B$, $D$', 'solid dot', 'slide round the circle; one secant turns about $P$'],
                ['$A$, $C$, $O$', 'hollow dot', 'cannot be dragged: where the secants meet the circle again, and the centre'],
                ['$P$ too close to the circle, a secant that only grazes it, the far arc over $170°$, an angle too small, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $O$, $P$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ, β, δ, 2β and 2δ",
    readout_short='∠BPD and half the difference of the central angles', tags='**Given**, **Exterior angle theorem**, **Inscribed angle theorem**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the exterior angle and inscribed angle theorems, never the numbers, which is why the two values agree for every position you drag.',
    beh2t='A and C are found, not placed', beh2='A and C are computed as the second points where the lines from B and D towards P meet the circle; nothing about the angle at P is built in, so the equality in the readout is a real check.',
)]
