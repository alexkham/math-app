# Content for page 75, the angle between two crossing chords, read by geo-view-42-45.py (argument geo_pages_75)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='angle-between-chords', prev='parallelogram-bisectors', prev_h1='Angle Bisectors of a Parallelogram', prev_key='parallelogramBisectors', prev_dragged='draggedParallelogramBisectors',
    key='chordsAngle', dragged='draggedChordsAngle', dragged_comment='C slid down the circle: a new arc CD and a new angle at E, still half the sum',
    dragged_expr="{ ...PROOFS.chordsAngle.model, params: { ...PROOFS.chordsAngle.model.params, tc: -0.15 } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: -6, dy: 8, ms: 1400 },",
    subCategory='Circle',
    title='Angle Between Two Chords Theorem | Half the Sum of the Arcs Proof Step by Step',
    desc='Watch the proof that the angle between two chords crossing inside a circle is half the sum of the central angles of the arcs it cuts off, by the exterior angle theorem and the inscribed angle theorem, step by step. Then drag the points round the circle.',
    h1='The Angle Between Two Chords', name='Angle Between Chords Proof',
    appdesc='Step-by-step interactive proof that the angle formed by two intersecting chords equals half the sum of the intercepted arcs, with four draggable points on the circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><line x1="14" y1="24" x2="62" y2="58" stroke="#E6F1FB" stroke-width="1.4"/><line x1="66" y1="26" x2="28" y2="65" stroke="#E6F1FB" stroke-width="1.4"/><path d="M41,40 A8,8 0 0 1 52,38" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M14,24 A30,30 0 0 1 66,26" fill="none" stroke="#FAC775" stroke-width="2"/><path d="M62,58 A30,30 0 0 1 28,65" fill="none" stroke="#FAC775" stroke-width="2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">θ = ½(arc + arc)</text></svg>',
    keywords=['angle between two chords', 'intersecting chords angle theorem', 'angle formed by two chords half the sum of arcs', 'chord chord angle', 'intercepted arcs', 'inscribed angle theorem', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'exterior', 'first', 'second', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$, $B$, $C$ or $D$ round the circle and watch the readout: the angle at $E$ and half the sum of the two central angles stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $A$, $B$, $C$, $D$ lie on a circle with centre $O$, in that order, and let the chords $AC$ and $BD$ cross at a point $E$ inside the circle. The angle $\\theta = \\angle AEB$ and its vertical angle $\\angle CED$ cut off the arcs $AB$ and $CD$. The theorem says

$$\\theta = \\frac{1}{2}\\left(\\angle AOB + \\angle COD\\right)$$

the angle between the chords is half the sum of the central angles of the two arcs; in the language of arcs, half the sum of the intercepted arcs.

The proof uses the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) once and the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) twice. In the player the four points slide round the circle and $E$ is computed as the crossing; the readout shows $\\angle AEB$ and half the sum of the central angles."""),
        ('An Exterior Angle', r"""Join $A$ to $D$. In the triangle $AED$ the ray $EB$ continues the side $DE$ beyond $E$, so $\\theta = \\angle AEB$ is an exterior angle of $AED$. It equals the sum of the two remote interior angles:

$$\\theta = \\varphi + \\psi, \\qquad \\varphi = \\angle CAD, \\quad \\psi = \\angle BDA$$"""),
        ('The Arc AB', r"""The angle $\\psi = \\angle BDA$ has its vertex $D$ on the circle and its arms through $A$ and $B$: it is an inscribed angle standing on the arc $AB$. The central angle on the same arc is twice as large:

$$\\angle AOB = 2\\psi$$"""),
        ('The Arc CD', r"""In the same way $\\varphi = \\angle CAD$ is an inscribed angle standing on the arc $CD$, so

$$\\angle COD = 2\\varphi$$"""),
        ('Why It Holds', r"""Substituting the two halves:

$$\\theta = \\varphi + \\psi = \\frac{1}{2}\\angle COD + \\frac{1}{2}\\angle AOB = \\frac{1}{2}\\left(\\angle AOB + \\angle COD\\right)$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the exterior angle theorem, the inscribed angle theorem (twice) and combining.

The other angle at $E$, $\\angle BEC$, is $180° - \\theta$; by the same argument with the arcs $BC$ and $DA$ it is half the sum of their central angles, and the four arcs together make $360°$, which checks."""),
        ('Dragging the Figure', r"""Drag any of the four points round the circle: the chords move, $E$ moves with them, and the readout keeps the angle at $E$ equal to half the sum of the two central angles.

The player keeps the four points in the order $A$, $B$, $C$, $D$ so that the chords cross inside, keeps every arc above $40°$ and the arcs $AB$ and $CD$ under $170°$, keeps $E$ away from the centre so the marks stay readable, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **Through the centre.** If both chords are diameters, $E = O$ and the theorem says $\\angle AOB = \\frac{1}{2}(\\angle AOB + \\angle COD)$, true because vertical angles at $O$ are equal.
• **One arc shrinks to nothing.** When $C$ and $D$ come together, $E$ moves onto the circle and the formula becomes the inscribed angle theorem, $\\theta = \\frac{1}{2}\\angle AOB$.
• **Outside the circle.** For two secants meeting outside the circle the angle is half the difference of the two arcs instead of half the sum; the same exterior-angle argument proves it.
• **The lengths.** The same two chords also satisfy $AE \\cdot EC = BE \\cdot ED$, the [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem about lengths rather than angles.
• **Equal arcs.** If the arcs $AB$ and $CD$ are equal, the angle at $E$ equals the central angle of either of them."""),
    ],
    order=[('the-statement', 'given'), ('an-exterior-angle', 'exterior'), ('the-arc-ab', 'first'), ('the-arc-cd', 'second'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the angle between two intersecting chords?', 'It is half the sum of the two arcs it cuts off, that is, half the sum of the central angles of the arc between the arms of the angle and the arc between the arms of its vertical angle.'),
        ('How is the angle between two chords proved?', 'Join two ends of the chords to make a triangle in which the angle between the chords is an exterior angle. It equals the two remote angles, and each of those is an inscribed angle, half the central angle of its arc.'),
        ('What happens when the chords meet outside the circle?', 'Then the lines are secants and the angle between them is half the difference of the two arcs, not half the sum.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Two chords AC and BD crossing at E, with θ at E.'),
            ('exterior', 'An exterior angle, frozen', 'AED shaded: θ = φ + ψ.'),
            ('first', 'The arc AB, frozen', 'OA and OB drawn: ∠AOB = 2ψ.'),
            ('second', 'The arc CD, frozen', 'OC and OD drawn: ∠COD = 2φ.'),
            ('conclude', 'The conclusion, frozen', 'θ = ½(∠AOB + ∠COD).')],
    dragged_cap='After dragging C, frozen', dragged_txt='C slid down the circle: a new arc CD and a new angle at E, still half the sum.',
    notes=[('given', 'Drag a point: the readout keeps the two sides equal.', 'the-statement', 'Learn more about the statement'),
           ('exterior', 'An exterior angle of AED.', 'an-exterior-angle', 'Learn more about the exterior angle'),
           ('first', 'The central angle is twice the inscribed one.', 'the-arc-ab', 'Learn more about the arc AB'),
           ('second', 'The same for the arc CD.', 'the-arc-cd', 'Learn more about the arc CD'),
           ('conclude', 'Drag a point: θ stays half the sum.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$, $C$ or $D$ round the circle; the readout under the canvas shows $\\angle AEB$ and half the sum of the central angles. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['EXTERIOR\nNext → : θ is an exterior angle of AED, θ = φ + ψ.',
               'ARC AB\n∠AOB = 2ψ.',
               'ARC CD\n∠COD = 2φ.',
               'CONCLUDE\nθ = ½(∠AOB + ∠COD).'],
    demo_drag_say='DRAG C\nSlide C: θ changes, still half the sum.',
    drag_desc='A, B, C and D slide round the circle; the hollow crossing E follows',
    readout_desc='the line under the figure: ∠AEB and half the sum of the central angles, live while you drag',
    p3top='96px', p3left='calc(25% + 60px)',
    frame2=[('The crossing E', 'where the chords AC and BD meet, with θ', '140px', 'calc(25% + 58px)'),
            ('The triangle AED', 'shaded, with φ at A and ψ at D', '218px', 'calc(25% + 5px)'),
            ('The central angles', '2ψ on the arc AB and 2φ on the arc CD', '160px', 'calc(25% + 10px)'),
            ('Justification tags', 'Given, Exterior angle theorem, Inscribed angle theorem, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the chords are moved by dragging their ends round the circle.',
    input_rows=[['$A$, $B$, $C$, $D$', 'solid dot', 'slide round the circle, keeping their order'],
                ['$E$, $O$', 'hollow dot', 'cannot be dragged: the crossing of the chords, and the centre'],
                ['points out of order, an arc under $40°$, the arc $AB$ or $CD$ over $170°$, $E$ too close to $O$, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$, $O$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ, φ, ψ, 2ψ and 2φ",
    readout_short='∠AEB and half the sum of the central angles', tags='**Given**, **Exterior angle theorem**, **Inscribed angle theorem**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the exterior angle and inscribed angle theorems, never the numbers, which is why the two values agree for every position you drag.',
    beh2t='E is found, not placed', beh2='E is computed as the crossing of the chords AC and BD; nothing about the angle there is built into the figure, so the equality in the readout is a real check.',
)]
