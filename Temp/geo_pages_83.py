# Content for page 83, a chord of the larger of two concentric circles that touches the smaller is bisected, read by geo-view-42-45.py (argument geo_pages_83)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='concentric-circles-chord', prev='median-halves-area', prev_h1='A Median Halves the Area', prev_key='medianArea', prev_dragged='draggedMedianArea',
    key='concentricChord', dragged='draggedConcentricChord', dragged_comment='A moved round the larger circle: a new chord, still bisected at T',
    dragged_expr="{ ...PROOFS.concentricChord.model, params: { ...PROOFS.concentricChord.model.params, ta: 100 * Math.PI / 180 } }",
    demo_drag="{ drag: '[data-handle=\"A\"]', dx: 6, dy: 12, ms: 1400 },",
    subCategory='Circle',
    title='Chord of Two Concentric Circles Touching the Inner Circle | Proof Step by Step',
    desc='Watch the proof that in two concentric circles a chord of the larger circle that touches the smaller one is bisected at the point of contact, by the tangent and radius and HL congruence, step by step. Then drag the chord and resize the circle.',
    h1='A Chord of Two Concentric Circles', name='Concentric Circles Chord Proof',
    appdesc='Step-by-step interactive proof that a chord of the outer of two concentric circles tangent to the inner circle is bisected at the point of tangency, with a draggable chord and outer circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="36" r="27" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><circle cx="40" cy="36" r="14" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><line x1="17" y1="50" x2="63" y2="50" stroke="#FAC775" stroke-width="1.8"/><line x1="40" y1="36" x2="40" y2="50" stroke="#E6F1FB" stroke-width="1.2"/><circle cx="40" cy="50" r="2" fill="#FAC775"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">AT = TB</text></svg>',
    keywords=['concentric circles chord', 'chord of outer circle tangent to inner circle', 'chord bisected at point of contact', 'concentric circles theorem', 'tangent and radius', 'HL congruence', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'tangent', 'radii', 'congruent', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$ round the larger circle, or $E$ to resize it, and watch the readout: the chord moves and changes length, but $AT$ and $TB$ stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Two circles are concentric: they have the same centre $O$. A chord $AB$ of the larger circle touches the smaller circle at a single point $T$. The theorem says

$$AT = TB$$

so the point of contact is the midpoint of the chord.

In the player $O$ and the smaller circle are fixed. $A$ slides round the larger circle and $E$ sets its size; $T$ is computed as the point where the tangent from $A$ touches the smaller circle, and $B$ as the point where the line $AT$ meets the larger circle again. The readout shows $AT$ and $TB$, in units of $60$ pixels."""),
        ('The Tangent and the Radius', r"""$AB$ touches the smaller circle at $T$, and $OT$ is the radius of the smaller circle to that point. By the [tangent and radius](!/geometry/visual-tools/tangent-radius) theorem a tangent is perpendicular to the radius at the point of contact:

$$OT \\perp AB$$"""),
        ('Equal Radii', r"""$A$ and $B$ both lie on the larger circle, so $OA$ and $OB$ are radii of it:

$$OA = OB$$"""),
        ('Two Congruent Triangles', r"""The triangles $OTA$ and $OTB$ have right angles at $T$, equal hypotenuses $OA = OB$ and the shared leg $OT$. By [HL congruence](!/geometry/visual-tools/hl-congruence):

$$\\triangle OTA \\cong \\triangle OTB$$"""),
        ('Why It Holds', r"""In the congruent triangles the remaining legs match:

$$AT = TB$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the tangent and radius theorem, radii, HL congruence and matching sides.

The last two steps are the [perpendicular bisects a chord](!/geometry/visual-tools/chord-bisector) theorem for the larger circle: the line from the centre square to a chord cuts it in half. What the smaller circle adds is that this line meets the chord exactly at the point of contact."""),
        ('Dragging the Figure', r"""Drag $A$ round the larger circle: the chord turns about the centre, always touching the smaller circle, and the readout keeps $AT = TB$. Drag $E$ to make the larger circle bigger or smaller: the chord grows or shrinks, and the two halves stay equal.

The player keeps the larger circle between about $1.6$ and $2$ times the size of the smaller one so that the figure stays clear and in the frame, and keeps $E$ away from $A$ and $B$ so that their names do not meet; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **All such chords are equal.** By Pythagoras in the triangle $OTA$, $AT^2 = OA^2 - OT^2 = R^2 - r^2$ for the two radii $R$ and $r$, so every chord of the larger circle that touches the smaller one has the length $2\\sqrt{R^2 - r^2}$. This fits the [equal chords](!/geometry/visual-tools/equal-chords) page: chords at the same distance $r$ from the centre are equal.
• **The area of the ring.** The ring between the circles has the area $\\pi R^2 - \\pi r^2 = \\pi \\cdot AT^2$, the area of a circle with the chord $AB$ as its diameter. The ring can be measured with a single chord, without knowing either radius.
• **Two tangents.** From $A$ the two tangents to the smaller circle are equal, as on the [two tangents](!/geometry/visual-tools/two-tangents) page; the chord $AB$ uses one of them.
• **The product of the pieces.** For any chord through $T$ of the larger circle, $AT \\cdot TB = R^2 - r^2$, an instance of the [intersecting chords](!/geometry/visual-tools/intersecting-chords) theorem; for the chord square to $OT$ the two pieces are equal."""),
    ],
    order=[('the-statement', 'given'), ('the-tangent-and-the-radius', 'tangent'), ('equal-radii', 'radii'), ('two-congruent-triangles', 'congruent'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Is a chord of the outer circle that touches the inner circle bisected?', 'Yes. In two concentric circles, a chord of the larger circle that touches the smaller circle is cut in half at the point of contact.'),
        ('How is it proved?', 'The radius to the point of contact is perpendicular to the chord. With the two radii of the larger circle equal and that radius shared, the two right triangles are congruent by HL, so the two halves of the chord are equal.'),
        ('How long is such a chord?', 'Twice the square root of R squared minus r squared, where R and r are the radii of the larger and smaller circle. Every such chord has the same length.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Two circles with centre O and the chord AB touching the smaller one at T.'),
            ('tangent', 'The tangent and the radius, frozen', 'OT drawn, square to AB.'),
            ('radii', 'Equal radii, frozen', 'OA and OB with two ticks each.'),
            ('congruent', 'Two congruent triangles, frozen', 'OTA and OTB shaded.'),
            ('conclude', 'The conclusion, frozen', 'AT = TB, one tick each.')],
    dragged_cap='After dragging A, frozen', dragged_txt='A moved round the larger circle: a new chord, still bisected at T.',
    notes=[('given', 'Drag A: the chord moves, T stays in the middle.', 'the-statement', 'Learn more about the statement'),
           ('tangent', 'A tangent is square to the radius.', 'the-tangent-and-the-radius', 'Learn more about the tangent and radius'),
           ('radii', 'Two radii of the larger circle.', 'equal-radii', 'Learn more about the radii'),
           ('congruent', 'Right angle, hypotenuse and a leg.', 'two-congruent-triangles', 'Learn more about the congruent triangles'),
           ('conclude', 'Drag A or E: the readout keeps AT = TB.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$ round the larger circle, or $E$ to resize it; the readout under the canvas shows $AT$ and $TB$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['TANGENT\nNext → : OT is square to the chord.',
               'RADII\nOA = OB, radii of the larger circle.',
               'CONGRUENT\nHL: OTA ≅ OTB.',
               'CONCLUDE\nAT = TB.'],
    demo_drag_say='DRAG A\nMove the chord: T stays its midpoint.',
    drag_desc='A slides round the larger circle and E resizes it; the hollow points T and B follow',
    readout_desc='the line under the figure: AT and TB, live while you drag',
    p3top='150px', p3left='calc(25% - 40px)',
    frame2=[('The radius OT', 'square to the chord AB', '210px', 'calc(25% + 13px)'),
            ('The triangles OTA and OTB', 'shaded, congruent by HL', '216px', 'calc(25% - 30px)'),
            ('The equal halves', 'AT and TB, one tick each', '254px', 'calc(25% + 28px)'),
            ('Justification tags', 'Given, Tangent and radius, Radii, HL congruence, Matching sides', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the chord and the larger circle are changed by dragging.',
    input_rows=[['$A$', 'solid dot', 'slides round the larger circle; the chord turns'],
                ['$E$', 'solid dot', 'resizes the larger circle'],
                ['$T$, $B$, $O$', 'hollow dot', 'cannot be dragged: the point of contact, the other end of the chord, and the centre'],
                ['a larger circle too small or too big, or $E$ too close to $A$ or $B$', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $E$, $O$, $T$',
    measures_desc='this figure has no marked angles, so Measures changes nothing',
    readout_short='AT and TB', tags='**Given**, **Tangent and radius**, **Radii**, **HL congruence**, **Matching sides**',
    beh1='The readout is a check, not a step of the proof. The argument uses the tangent and radius theorem and HL congruence, never the numbers, which is why the two halves agree for every position you drag.',
    beh2t='T and B are found, not placed', beh2='T is computed as the point where the tangent from A touches the smaller circle and B as the second point of the line AT on the larger circle; nothing makes T the midpoint, so the equality in the readout is a real check.',
)]
