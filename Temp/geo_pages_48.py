# Content for page 48, the tangent-chord angle, read by geo-view-42-45.py (argument geo_pages_48)
PAGES = [dict(
    slug='tangent-chord-angle', prev='right-triangle-altitude', prev_h1='Right Triangle Altitude Theorem', prev_key='altitudeTheorem', prev_dragged='draggedAltitude',
    key='tangentChord', dragged='draggedTangentChord', dragged_comment='B slid round towards D: a wider angle between the tangent and the chord, the same angle at C',
    dragged_expr="{ ...PROOFS.tangentChord.model, params: { ...PROOFS.tangentChord.model.params, tb: -0.2 } }",
    demo_drag="{ drag: '[data-handle=\"B\"]', dx: 10, dy: 15, ms: 1400 },",
    subCategory='Circle',
    title='Tangent-Chord Angle Theorem Proof | The Alternate Segment Step by Step',
    desc='Watch the proof of the tangent-chord angle theorem (alternate segment theorem): the angle between a tangent and a chord equals the inscribed angle on that chord in the alternate segment, by a diameter, Thales and inscribed angles, step by step. Then drag the points round the circle.',
    h1='Tangent-Chord Angle Theorem', name='Tangent-Chord Angle Theorem Proof',
    appdesc='Step-by-step interactive proof of the tangent-chord angle theorem (alternate segment theorem) with a diameter from the point of contact, the angle in the semicircle and inscribed angles, with draggable points on the circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="44" cy="40" r="28" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="16" y1="8" x2="16" y2="72" stroke="#FAC775" stroke-width="1.6"/><line x1="16" y1="40" x2="62" y2="20" stroke="#E6F1FB" stroke-width="1.4"/><line x1="16" y1="40" x2="60" y2="62" stroke="#E6F1FB" stroke-width="1.4"/><line x1="62" y1="20" x2="60" y2="62" stroke="#E6F1FB" stroke-width="1.4"/><path d="M16,28 A12,12 0 0 1 27,35" fill="none" stroke="#FAC775" stroke-width="1.4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">tangent-chord</text></svg>',
    keywords=['tangent chord angle', 'alternate segment theorem', 'tangent chord theorem proof', 'angle between tangent and chord', 'euclid iii.32', 'inscribed angle', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'diameter', 'thales', 'complement', 'inscribed', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $B$ or $C$ round the circle and watch the three angles in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A line touches a circle at $A$, and a chord $AB$ is drawn from the point of contact. The chord splits the circle into two segments; the one on the far side of the chord from the tangent ray $AT$ is called the alternate segment. The tangent-chord angle theorem (Euclid III.32, also the alternate segment theorem) says that the angle between the tangent and the chord equals the inscribed angle on the chord in the alternate segment: for any point $C$ of that segment,

$$\\angle TAB = \\angle ACB$$

It is the limiting case of the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle): slide one end of a chord towards the other and the chord becomes the tangent, while the inscribed angle on it keeps its value. The proof below does not use limits; it uses a diameter, [tangent perpendicular to radius](!/geometry/visual-tools/tangent-radius), [Thales' theorem](!/geometry/visual-tools/thales-theorem) and inscribed angles.

In the player $B$ and $C$ slide round the circle, $A$ sets the radius and $O$ moves the circle; the readout shows the angle at the tangent, the helper angle at $D$ and the angle at $C$."""),
        ('The Diameter AD', r"""Draw the diameter from the point of contact $A$ through the centre $O$ to the far point $D$. The [tangent is perpendicular to the radius](!/geometry/visual-tools/tangent-radius) at the point of contact, so

$$\\angle TAD = 90°$$

Call the angle between the chord and the diameter $\\varphi = \\angle BAD$. The angle we are after is the rest of the right angle: $\\theta = \\angle TAB = 90° - \\varphi$."""),
        ('The Angle in the Semicircle', r"""Join $B$ to $D$. The angle at $B$ stands on the diameter $AD$, so by [Thales' theorem](!/geometry/visual-tools/thales-theorem) it is right:

$$\\angle ABD = 90°$$

$ABD$ is a right triangle with the right angle at $B$, the hypotenuse $AD$ and the angle $\\varphi$ at $A$."""),
        ('The Complement', r"""In the right triangle $ABD$ the two acute angles add up to $90°$ ([angle sum](!/geometry/visual-tools/triangle-angle-sum)), so the angle at $D$ is

$$\\angle ADB = 90° - \\varphi$$

But $\\angle TAB$ is also $90° - \\varphi$, since together with $\\varphi$ it fills the right angle $TAD$. Two angles equal to the same thing are equal: $\\angle ADB = \\angle TAB = \\theta$. The angle between the tangent and the chord has been moved onto the circle, at $D$."""),
        ('Inscribed Angles', r"""The angles at $D$ and at $C$ both stand on the arc $AB$, and $D$ and $C$ lie on the same side of the chord $AB$: both are in the alternate segment, away from $T$. By the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) two inscribed angles on the same arc are equal:

$$\\angle ADB = \\angle ACB$$

The helper point $D$ has done its work: it carries the angle from the tangent to every point of the alternate segment."""),
        ('Why It Holds', r"""Chain the two equalities:

$$\\angle TAB = \\angle ADB = \\angle ACB$$

The first because both are the complement of $\\varphi$ in a right angle (the tangent's right angle at $A$, and the right triangle $ABD$), the second because both stand on the arc $AB$. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, tangent perpendicular to radius, Thales, the angle sum, inscribed angles, and combining.

The theorem also holds for the other angle at $A$, between the chord and the other half of the tangent: that angle is $180° - \\theta$, and so is the inscribed angle on $AB$ in the segment containing $T$, by the [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) page. So the tangent makes with the chord, on either side, the angle in the segment opposite to it."""),
        ('Dragging the Figure', r"""Drag $B$ round the circle: the chord swings, the angle between the tangent and the chord changes, and the angle at $C$ follows it; the helper angle at $D$ stays equal to both. Drag $C$ anywhere in the alternate segment: the angle at $C$ does not change at all, which is the inscribed angle theorem at work. Drag $A$ to change the radius or $O$ to move the circle; the tangent turns with $A$.

The player keeps $B$ on the same side of the diameter $AD$ as $T$, so that the angle between the tangent ray $AT$ and the chord is acute and the proof reads as written, and keeps $C$ in the alternate segment, away from $A$ and $B$. A drag that would break one of these, or carry a point out of the frame, is refused."""),
        ('Consequences', r"""• **Power of a point by similarity.** With the tangent-chord angle, the triangles $PAT$ and $PTB$ in the [secant and tangent](!/geometry/visual-tools/secant-tangent) figure are similar by AA, which gives $PT^2 = PA \\cdot PB$ in two lines; that page proves it by Pythagoras instead.
• **Constructing a tangent through a given angle.** To draw a circle through two points $A$, $B$ touching a given line at $A$, the theorem tells which inscribed angle the circle must carry on $AB$.
• **The converse.** If a line through $A$ makes with the chord $AB$ the angle in the alternate segment, the line is tangent to the circle; it is used to prove that a line touches a circle without finding the centre.
• **Equal tangent angles.** The two [tangents from a point](!/geometry/visual-tools/two-tangents) $P$ make equal angles with the chord of contact, both equal to the inscribed angle on that chord.
• **Mixtilinear and tangent circles.** When two circles touch at $A$, the common tangent at $A$ gives, through this theorem, equal angles in the two circles; that is the usual way to prove that a point of tangency sends chords to parallel chords."""),
    ],
    order=[('the-statement', 'given'), ('the-diameter-ad', 'diameter'), ('the-angle-in-the-semicircle', 'thales'), ('the-complement', 'complement'), ('inscribed-angles', 'inscribed'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does the tangent-chord angle theorem say?', 'The angle between a tangent to a circle and a chord drawn from the point of contact equals the inscribed angle on that chord in the alternate segment, the segment on the other side of the chord. It is also called the alternate segment theorem.'),
        ('How is the tangent-chord angle theorem proved?', 'Draw the diameter AD from the point of contact. The tangent is perpendicular to the radius, so angle TAD is right; by Thales angle ABD is right too. So angle TAB and angle ADB are both 90° minus angle BAD, and angle ADB equals angle ACB because both stand on the arc AB.'),
        ('Is the tangent-chord angle a special case of the inscribed angle theorem?', 'Yes, it is the limiting case where one end of a chord slides into the other and the chord becomes the tangent: the angle between tangent and chord equals half the arc cut off by the chord, like an inscribed angle.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The tangent at A, the chord AB and the angle θ at C in the alternate segment.'),
            ('diameter', 'The diameter AD, frozen', 'Tangent perpendicular to radius: ∠TAD = 90°; φ is the angle between the chord and the diameter.'),
            ('thales', 'The angle in the semicircle, frozen', 'ABD shaded: ∠ABD = 90° by Thales.'),
            ('complement', 'The complement, frozen', '∠ADB = 90° − φ = ∠TAB, both marked θ.'),
            ('inscribed', 'Inscribed angles, frozen', 'θ at D and θ at C stand on the same arc AB.'),
            ('conclude', 'The conclusion, frozen', '∠TAB = ∠ADB = ∠ACB.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B slid towards D: a wider angle at the tangent, the same angle at C.',
    notes=[('given', 'Drag B or C round the circle.', 'the-statement', 'Learn more about the statement'),
           ('diameter', 'The radius to the point of contact is perpendicular to the tangent.', 'the-diameter-ad', 'Learn more about the diameter'),
           ('thales', 'An angle on a diameter is right.', 'the-angle-in-the-semicircle', 'Learn more about the angle in the semicircle'),
           ('complement', 'Two complements of the same angle.', 'the-complement', 'Learn more about the complement'),
           ('inscribed', 'Same arc, same angle.', 'inscribed-angles', 'Learn more about the inscribed angles'),
           ('conclude', 'Drag B: the three angles in the readout stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $B$ or $C$ round the circle, $A$ for the radius or $O$ for the centre; the readout under the canvas shows $\\angle TAB$, $\\angle ADB$ and $\\angle ACB$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['DIAMETER\nNext → : the diameter AD; tangent ⟂ radius makes ∠TAD = 90°.',
               'THALES\nBD joined: the angle in the semicircle, ∠ABD = 90°.',
               'COMPLEMENT\n∠ADB = 90° − φ = ∠TAB.',
               'SAME ARC\n∠ADB = ∠ACB, both on the arc AB.',
               'COMBINE\n∠TAB = ∠ACB.'],
    demo_drag_say='DRAG B\nSlide B round the circle: the three angles change together.',
    drag_desc='B and C slide round the circle, A sets the radius and turns the tangent, O moves the circle; the hollow points D and T follow',
    readout_desc='the line under the figure: the angles at the tangent, at D and at C, live while you drag',
    p3top='94px', p3left='calc(25% + 28px)',
    frame2=[('The tangent and the chord', 'the line through A touching the circle, and the chord AB; θ between them', '150px', 'calc(25% - 160px)'),
            ('The diameter and the right angles', 'AD through the centre; square marks at A (tangent) and at B (Thales)', '110px', 'calc(25% + 60px)'),
            ('The three equal angles', 'θ at A, at D and at C; φ is the helper angle between chord and diameter', '262px', 'calc(25% + 30px)'),
            ('Justification tags', "Given, Tangent ⟂ radius, Thales' theorem, Angle sum, Inscribed angles, Combining", '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the chord and the point in the alternate segment are placed by dragging round the circle.',
    input_rows=[['$B$', 'solid dot', 'slides round the circle on the tangent side of the diameter $AD$; the chord and the angles follow'],
                ['$C$', 'solid dot', 'slides round the circle inside the alternate segment; its angle does not change'],
                ['$A$', 'solid dot', 'sets the radius; the tangent turns with it, $B$ and $C$ keep their places on the circle'],
                ['$O$', 'solid dot', 'moves the whole circle'],
                ['$D$, $T$', 'hollow dot', 'cannot be dragged: the far end of the diameter and a point of the tangent'],
                ['$B$ past the diameter, $C$ out of the alternate segment, points too close, or out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $O$, $T$',
    measures_desc="write each marked angle's size in degrees beside its arc: θ three times and φ",
    readout_short='the three angles', tags="**Given**, **Tangent ⟂ radius**, **Thales\' theorem**, **Angle sum**, **Inscribed angles**, **Combining**",
    beh1='The readout is a check, not a step of the proof. The argument uses tangent perpendicular to radius, Thales, the angle sum and inscribed angles, never the numbers, which is why the three angles agree for every position of B and C.',
    beh2t='The tangent is built in', beh2='T is placed on the perpendicular to the radius OA at A, which is the tangent by the tangent-radius theorem; D is the far end of the diameter through A.',
)]
