# Content for page 52, equal chords equidistant from the centre, read by geo-view-42-45.py (argument geo_pages_52)
PAGES = [dict(
    slug='equal-chords', prev='linear-pair-bisectors', prev_h1='Bisectors of a Linear Pair', prev_key='linearPairBisectors', prev_dragged='draggedLinearPair',
    key='equalChords', dragged='draggedEqualChords', dragged_comment='B slid round the circle: both chords longer, both nearer the centre, still equally far',
    dragged_expr="{ ...PROOFS.equalChords.model, params: { ...PROOFS.equalChords.model.params, tb: -0.9 } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: -16, dy: 6, ms: 1400 },",
    subCategory='Circle',
    title='Equal Chords Are Equidistant from the Centre | Proof Step by Step',
    desc='Watch the proof that equal chords of a circle are the same distance from the centre, by the perpendicular bisecting each chord, equal radii and hypotenuse-leg congruence, step by step. Then drag the chords round the circle.',
    h1='Equal Chords and the Centre', name='Equal Chords Proof',
    appdesc='Step-by-step interactive proof that equal chords of a circle are equidistant from the centre (and conversely), with the perpendiculars from the centre, equal radii and HL congruence, and draggable chords.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="30" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><line x1="18" y1="22" x2="56" y2="13" stroke="#E6F1FB" stroke-width="1.4"/><line x1="24" y1="66" x2="62" y2="56" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="40" x2="37" y2="18" stroke="#FAC775" stroke-width="1.6"/><line x1="40" y1="40" x2="43" y2="61" stroke="#FAC775" stroke-width="1.6"/><circle cx="40" cy="40" r="2" fill="#E6F1FB"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">OM = ON</text></svg>',
    keywords=['equal chords', 'equal chords equidistant from the centre', 'chords and the centre proof', 'distance from centre to chord', 'euclid iii.14', 'hypotenuse leg', 'circle theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'feet', 'halves', 'radii', 'hl', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $B$ to change the length of the chords ($D$ follows so the second chord stays equal), or $C$ to move the second chord round the circle, and watch the two distances in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The distance from the centre of a circle to a chord is the length of the perpendicular from the centre to the chord. The theorem (Euclid III.14) says that equal chords are equidistant from the centre, and conversely chords equidistant from the centre are equal: for chords $AB$ and $CD$ with perpendiculars $OM$ and $ON$,

$$AB = CD \\iff OM = ON$$

It is the circle's version of a simple idea: a chord is determined, up to turning it about the centre, by how far it is from the centre. Longer chords are closer, the diameter passes through the centre itself.

In the player $D$ is built as $C$ turned about $O$ by the angle $AOB$, so the chord $CD$ is always equal to $AB$; drag $B$ to change both lengths at once, or $C$ to move the second chord. The readout shows the two chords and the two distances."""),
        ('The Perpendiculars from the Centre', r"""Drop the perpendicular from $O$ to each chord: $OM \\perp AB$ with $M$ on $AB$, and $ON \\perp CD$ with $N$ on $CD$. The square marks show the right angles. The claim to prove is now a statement about two segments:

$$OM = ON$$

Each is the shortest segment from $O$ to its chord, which is why it is called the distance ([the perpendicular is shortest](!/geometry/visual-tools/perpendicular-shortest))."""),
        ('Half of Each Chord', r"""The [perpendicular from the centre bisects the chord](!/geometry/visual-tools/chord-bisector): $M$ is the midpoint of $AB$ and $N$ the midpoint of $CD$. So

$$AM = \\tfrac12 AB = \\tfrac12 CD = CN$$

The two half-chords are equal (two ticks); they will be one pair of legs in a pair of right triangles."""),
        ('The Radii', r"""Join $O$ to $A$ and to $C$. Both are radii, so $OA = OC$ (three ticks). In the right triangles $OMA$ and $ONC$ these radii are the hypotenuses, opposite the right angles at $M$ and $N$; the half-chords $AM$ and $CN$ are one pair of legs, and the distances $OM$ and $ON$ are the other."""),
        ('Hypotenuse and Leg', r"""The triangles $OMA$ and $ONC$ are right-angled, with equal hypotenuses $OA = OC$ and equal legs $AM = CN$. By the [hypotenuse-leg criterion](!/geometry/visual-tools/hl-congruence) they are congruent:

$$\\triangle OMA \\cong \\triangle ONC$$

(Without HL: $OM^2 = OA^2 - AM^2 = OC^2 - CN^2 = ON^2$ by [Pythagoras](!/geometry/visual-tools/pythagorean-theorem), which proves the same thing in one line.)"""),
        ('Why It Holds', r"""Corresponding parts of congruent triangles are equal, so the remaining legs agree:

$$OM = ON$$

Equal chords are equidistant from the centre. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, the perpendicular bisecting the chord, equal radii, HL congruence and corresponding parts.

The converse uses the same picture read backwards: if $OM = ON$, the right triangles $OMA$ and $ONC$ have equal hypotenuses (the radii) and equal legs $OM = ON$, so they are congruent by HL, $AM = CN$, and doubling gives $AB = CD$."""),
        ('Dragging the Figure', r"""Drag $B$ round the circle: both chords change length together, since $D$ is placed so that $CD = AB$, and the two distances in the readout change together and stay equal; a longer chord sits closer to the centre. Drag $C$ to carry the second chord anywhere round the circle without changing its length. Drag $A$ to change the radius or $O$ to move the circle.

The player keeps the chords from passing through the centre (then $M$ and $N$ would coincide with $O$), keeps them apart from each other, and keeps the figure in the frame. A drag that would break one of these is refused."""),
        ('Consequences', r"""• **Longer is nearer.** The same right triangle gives $OM^2 = r^2 - (AB/2)^2$: of two unequal chords the longer is nearer the centre, and the diameter, the longest chord, passes through it (Euclid III.15).
• **The locus of midpoints.** The midpoints of all chords of a given length lie on a circle about $O$ of radius $OM$; each such chord is tangent to that inner circle ([tangent perpendicular to radius](!/geometry/visual-tools/tangent-radius)).
• **Regular polygons.** The sides of a regular polygon inscribed in a circle are equal chords, so they are all the same distance from the centre: that distance is the apothem, the radius of the inscribed circle.
• **Congruent arcs.** Equal chords cut off equal arcs and subtend equal angles at the centre; the [inscribed angle theorem](!/geometry/visual-tools/inscribed-angle) then makes them subtend equal angles at the circumference.
• **Equal tangents.** The [two tangents from a point](!/geometry/visual-tools/two-tangents) are proved equal by the same HL argument on the radii to the points of contact."""),
    ],
    order=[('the-statement', 'given'), ('the-perpendiculars-from-the-centre', 'feet'), ('half-of-each-chord', 'halves'), ('the-radii', 'radii'), ('hypotenuse-and-leg', 'hl'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What does it mean for chords to be equidistant from the centre?', 'The distance from the centre to a chord is the length of the perpendicular from the centre to the chord. Two chords are equidistant from the centre when these two perpendiculars are equal.'),
        ('Why are equal chords equidistant from the centre?', 'The perpendicular from the centre bisects each chord, so equal chords have equal half-chords. Together with the equal radii as hypotenuses, the two right triangles formed are congruent by hypotenuse-leg, so the perpendiculars are equal.'),
        ('Is the converse true?', 'Yes. If two chords are the same distance from the centre, the right triangles have equal hypotenuses (the radii) and equal legs (the distances), so they are congruent and the half-chords, hence the chords, are equal.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Two equal chords AB and CD, one tick each.'),
            ('feet', 'The perpendiculars from the centre, frozen', 'OM ⟂ AB and ON ⟂ CD, with square marks at M and N.'),
            ('halves', 'Half of each chord, frozen', 'AM = CN, two ticks: the perpendicular bisects each chord.'),
            ('radii', 'The radii, frozen', 'OA = OC, three ticks; the right triangles OMA and ONC shaded.'),
            ('hl', 'Hypotenuse and leg, frozen', 'Equal hypotenuses, equal legs: OMA ≅ ONC.'),
            ('conclude', 'The conclusion, frozen', 'OM = ON: equal chords are equidistant from the centre.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B slid round the circle: both chords longer and both nearer the centre, still equally far.',
    notes=[('given', 'Drag B: both chords change length together.', 'the-statement', 'Learn more about the statement'),
           ('feet', 'The distance to a chord is the perpendicular.', 'the-perpendiculars-from-the-centre', 'Learn more about the perpendiculars'),
           ('halves', 'The perpendicular from the centre bisects the chord.', 'half-of-each-chord', 'Learn more about the half-chords'),
           ('radii', 'Two radii, the hypotenuses of two right triangles.', 'the-radii', 'Learn more about the radii'),
           ('hl', 'Right angle, hypotenuse, leg: congruent.', 'hypotenuse-and-leg', 'Learn more about HL'),
           ('conclude', 'Drag B or C: the two distances in the readout stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $B$ to change the chord length ($D$ follows), $C$ to move the second chord, $A$ for the radius or $O$ for the centre; the readout under the canvas shows the two chords and the two distances. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['PERPENDICULARS\nNext → : OM ⟂ AB and ON ⟂ CD, the distances to the chords.',
               'HALF-CHORDS\nThe perpendicular bisects each chord: AM = CN.',
               'RADII\nOA = OC, the hypotenuses of the right triangles OMA and ONC.',
               'HL\nEqual hypotenuses, equal legs: OMA ≅ ONC.',
               'CONCLUDE\nOM = ON: equal chords, equal distances.'],
    demo_drag_say='DRAG C\nCarry the second chord round the circle: still as far from O.',
    drag_desc='B slides round the circle and sets the length of both chords, C carries the second chord round, A sets the radius, O moves the circle; the hollow points D, M and N follow',
    readout_desc='the line under the figure: the two chords and the two distances OM and ON, live while you drag',
    p3top='150px', p3left='calc(25% + 60px)',
    frame2=[('The two right triangles', 'OMA and ONC shaded, with the square marks at M and N', '150px', 'calc(25% - 70px)'),
            ('The ticks', 'one tick for the equal chords, two for the half-chords AM = CN, three for the radii OA = OC', '262px', 'calc(25% + 110px)'),
            ('The two distances', 'OM and ON, the perpendiculars from the centre, equal at the end', '200px', 'calc(25% + 30px)'),
            ('Justification tags', 'Given, Construction, Perpendicular bisects the chord, Equal radii, HL congruence, Corresponding parts', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the chords are placed by dragging round the circle and the second chord stays equal to the first.',
    input_rows=[['$B$', 'solid dot', 'slides round the circle: the chord $AB$ changes length and $CD$ follows, staying equal'],
                ['$C$', 'solid dot', 'slides round the circle and carries the chord $CD$ with it'],
                ['$A$', 'solid dot', 'sets the radius; the other points keep their places on the circle'],
                ['$O$', 'solid dot', 'moves the whole circle'],
                ['$D$, $M$, $N$', 'hollow dot', 'cannot be dragged: $C$ turned by the angle $AOB$, and the feet of the perpendiculars'],
                ['a chord through the centre, chords touching each other, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $M$, $N$, $O$',
    measures_desc="write each marked angle's size in degrees beside its arc (this proof marks only right angles)",
    readout_short='the two chords and the two distances', tags='**Given**, **Construction**, **Perpendicular bisects the chord**, **Equal radii**, **HL congruence**, **Corresponding parts**',
    beh1='The readout is a check, not a step of the proof. The argument uses the chord bisector theorem, equal radii and HL congruence, never the numbers, which is why the two distances agree for every pair of equal chords.',
    beh2t='The second chord is kept equal', beh2='D is C turned about the centre by the angle AOB, so CD is always a copy of AB; that is the hypothesis of the theorem, built into the figure.',
)]
