# Content for page 77, the angle between a tangent and a secant from an outside point, read by geo-view-42-45.py (argument geo_pages_77)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='tangent-secant-angle', prev='angle-between-secants', prev_h1='The Angle Between Two Secants', prev_key='secantsAngle', prev_dragged='draggedSecantsAngle',
    key='tangentSecantAngle', dragged='draggedTangentSecantAngle', dragged_comment='P moved up: a new tangent point and a narrower angle, still half the difference',
    dragged_expr="{ ...PROOFS.tangentSecantAngle.model, points: { ...PROOFS.tangentSecantAngle.model.points, P: { x: 112, y: 150 } } }",
    demo_drag="{ drag: '[data-handle=\"P\"]', dx: 6, dy: -10, ms: 1400 },",
    subCategory='Circle',
    title='Angle Between a Tangent and a Secant | Half the Difference of the Arcs Proof Step by Step',
    desc='Watch the proof that the angle between a tangent and a secant drawn from a point outside a circle is half the difference of the central angles of the arcs they cut off, by the exterior angle theorem, the inscribed angle theorem and the tangent-chord angle, step by step. Then drag the point and the secant.',
    h1='The Angle Between a Tangent and a Secant', name='Tangent-Secant Angle Proof',
    appdesc='Step-by-step interactive proof that the angle formed by a tangent and a secant from an external point equals half the difference of the intercepted arcs, with a draggable external point and secant.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="42" r="22" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><line x1="6" y1="38" x2="44" y2="21" stroke="#E6F1FB" stroke-width="1.4"/><line x1="6" y1="38" x2="62" y2="61" stroke="#E6F1FB" stroke-width="1.4"/><path d="M18,33 A12,12 0 0 1 18,43" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M44,21 A22,22 0 0 1 62,61" fill="none" stroke="#FAC775" stroke-width="2"/><circle cx="44" cy="21" r="2" fill="#FAC775"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">θ = ½(arc − arc)</text></svg>',
    keywords=['angle between tangent and secant', 'tangent secant angle theorem', 'angle outside a circle half the difference', 'tangent and secant from external point', 'intercepted arcs', 'tangent chord angle', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'exterior', 'first', 'second', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$, or $B$ round the circle, and watch the readout: the angle at $P$ and half the difference of the two central angles stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $P$ be a point outside a circle with centre $O$. The tangent from $P$ touches the circle at $T$, and a secant from $P$ meets it at $A$ and then $B$. The angle $\\theta = \\angle TPB$ cuts off two arcs, the far arc $TB$ and the near arc $TA$. The theorem says

$$\\theta = \\frac{1}{2}\\left(\\angle TOB - \\angle TOA\\right)$$

half the difference of the central angles of the two arcs. It is the [angle between two secants](!/geometry/visual-tools/angle-between-secants) with one secant turned until it touches the circle.

The proof uses the [exterior angle theorem](!/geometry/visual-tools/exterior-angle), the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) and the [tangent-chord angle](!/geometry/visual-tools/tangent-chord-angle) theorem. In the player $P$ moves freely outside the circle, $T$ is computed as the point where the tangent from $P$ touches, $B$ slides round the circle and $A$ is where the line $BP$ meets the circle again."""),
        ('An Exterior Angle', r"""Join $T$ to $A$. In the triangle $PTA$ the ray $AB$ continues the side $PA$ beyond $A$, so $\\beta = \\angle TAB$ is an exterior angle of $PTA$. It equals the sum of the two remote interior angles, $\\theta$ at $P$ and $\\delta = \\angle PTA$ at $T$:

$$\\beta = \\theta + \\delta, \\qquad \\theta = \\beta - \\delta$$"""),
        ('The Far Arc', r"""The angle $\\beta = \\angle TAB$ has its vertex on the circle and stands on the far arc $TB$, so the central angle on that arc is twice as large:

$$\\angle TOB = 2\\beta$$"""),
        ('The Near Arc', r"""The angle $\\delta = \\angle PTA$ lies between the tangent $PT$ and the chord $TA$. By the [tangent-chord angle](!/geometry/visual-tools/tangent-chord-angle) theorem it is half the central angle on the arc $TA$ inside it:

$$\\angle TOA = 2\\delta$$"""),
        ('Why It Holds', r"""Substituting the two central angles:

$$\\theta = \\beta - \\delta = \\frac{1}{2}\\angle TOB - \\frac{1}{2}\\angle TOA = \\frac{1}{2}\\left(\\angle TOB - \\angle TOA\\right)$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the exterior angle theorem, the inscribed angle theorem, the tangent-chord angle and combining.

The proof is the two-secant proof with the inscribed angle at the near end replaced by the tangent-chord angle, which is what an inscribed angle becomes when one of its arms touches the circle."""),
        ('Dragging the Figure', r"""Drag $P$: the tangent point $T$ moves round the circle, the secant swings, and the readout keeps the angle at $P$ equal to half the difference. Drag $B$ round the circle to turn the secant about $P$.

The player keeps $P$ well outside the circle, the secant crossing it at two points far apart, the far arc under $170°$ so that the central angle is the one drawn, the angles large enough for their marks and the figure in the frame; a drag that would break one of these is refused. Moving $P$ down soon makes the far arc too large, so most of the room is upwards."""),
        ('Consequences', r"""• **Two tangents.** Turning the secant until it also touches the circle gives two tangents from $P$; the angle between them is $180°$ minus the central angle between the points of contact, as on the [two tangents](!/geometry/visual-tools/two-tangents) page.
• **The lengths.** The same tangent and secant satisfy $PT^2 = PA \\cdot PB$, the [secant and tangent](!/geometry/visual-tools/secant-tangent) theorem about lengths rather than angles.
• **P on the circle.** When $P$ comes down onto the circle at $T$, the near arc shrinks to nothing and the formula becomes the tangent-chord angle itself.
• **One rule for all three cases.** Two secants, a tangent and a secant, and two tangents from an outside point all give half the difference of the two arcs between their points on the circle.
• **Inside the circle.** For two chords crossing inside, the angle is half the sum instead, as on the [angle between two chords](!/geometry/visual-tools/angle-between-chords) page."""),
    ],
    order=[('the-statement', 'given'), ('an-exterior-angle', 'exterior'), ('the-far-arc', 'first'), ('the-near-arc', 'second'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the angle between a tangent and a secant from an outside point?', 'It is half the difference of the two arcs it cuts off: half the central angle of the far arc minus half the central angle of the near arc between the point of contact and the near end of the secant.'),
        ('How is the tangent-secant angle theorem proved?', 'Join the point of contact to the near end of the secant. The angle at that end is an exterior angle of the triangle with the outside point, so the angle at the outside point is the difference of an inscribed angle and a tangent-chord angle, each half the central angle of its arc.'),
        ('How is it related to the angle between two secants?', 'It is the same rule: half the difference of the arcs. A tangent is a secant whose two points on the circle have come together, and the inscribed angle at the near end becomes a tangent-chord angle.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The tangent PT and the secant PAB from P.'),
            ('exterior', 'An exterior angle, frozen', 'PTA shaded: β = θ + δ.'),
            ('first', 'The far arc, frozen', 'OT and OB drawn: ∠TOB = 2β.'),
            ('second', 'The near arc, frozen', 'OA drawn: ∠TOA = 2δ.'),
            ('conclude', 'The conclusion, frozen', 'θ = ½(∠TOB − ∠TOA).')],
    dragged_cap='After dragging P, frozen', dragged_txt='P moved up: a new tangent point and a narrower angle, still half the difference.',
    notes=[('given', 'Drag P: the readout keeps the two sides equal.', 'the-statement', 'Learn more about the statement'),
           ('exterior', 'An exterior angle of PTA.', 'an-exterior-angle', 'Learn more about the exterior angle'),
           ('first', 'Twice the inscribed angle on the far arc.', 'the-far-arc', 'Learn more about the far arc'),
           ('second', 'The tangent-chord angle on the near arc.', 'the-near-arc', 'Learn more about the near arc'),
           ('conclude', 'Drag P: θ stays half the difference.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$, or $B$ round the circle; the readout under the canvas shows $\\angle TPB$ and half the difference of the central angles. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['EXTERIOR\nNext → : β at A is an exterior angle of PTA, θ = β − δ.',
               'FAR ARC\n∠TOB = 2β.',
               'NEAR ARC\nThe tangent-chord angle: ∠TOA = 2δ.',
               'CONCLUDE\nθ = ½(∠TOB − ∠TOA).'],
    demo_drag_say='DRAG P\nMove P: T follows, θ stays half the difference.',
    drag_desc='P moves freely outside the circle and B slides round it; the hollow points T and A follow',
    readout_desc='the line under the figure: ∠TPB and half the difference of the central angles, live while you drag',
    p3top='130px', p3left='calc(25% - 150px)',
    frame2=[('The angle at P', 'θ between the tangent and the secant', '160px', 'calc(25% - 120px)'),
            ('The triangle PTA', 'shaded, with β at A and δ at T', '156px', 'calc(25% - 60px)'),
            ('The central angles', '2β on the far arc and 2δ on the near arc', '150px', 'calc(25% + 70px)'),
            ('Justification tags', 'Given, Exterior angle theorem, Inscribed angle theorem, Tangent-chord angle, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the tangent and the secant are moved by dragging the outside point and the far end of the secant.',
    input_rows=[['$P$', 'solid dot', 'moves freely outside the circle; the tangent point and the secant follow'],
                ['$B$', 'solid dot', 'slides round the circle; the secant turns about $P$'],
                ['$T$, $A$, $O$', 'hollow dot', 'cannot be dragged: the point of contact, the near end of the secant, and the centre'],
                ['$P$ too close to the circle, a secant that only grazes it, the far arc over $170°$, an angle too small, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $O$, $P$, $T$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ, β, δ, 2β and 2δ",
    readout_short='∠TPB and half the difference of the central angles', tags='**Given**, **Exterior angle theorem**, **Inscribed angle theorem**, **Tangent-chord angle**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the exterior angle, inscribed angle and tangent-chord theorems, never the numbers, which is why the two values agree for every position you drag.',
    beh2t='T and A are found, not placed', beh2='T is computed as the point where the tangent from P touches the circle and A as the second point of the line BP on the circle; nothing about the angle at P is built in, so the equality in the readout is a real check.',
)]
