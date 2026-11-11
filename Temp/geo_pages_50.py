# Content for page 50, the isosceles trapezoid, read by geo-view-42-45.py (argument geo_pages_50)
PAGES = [dict(
    slug='isosceles-trapezoid', prev='polygon-exterior-angles', prev_h1='Polygon Exterior Angle Sum', prev_key='polygonExteriorAngles', prev_dragged='draggedPolygonExterior',
    key='isoscelesTrapezoid', dragged='draggedIsoTrapezoid', dragged_comment='D moved up and to the right: a shorter top base and steeper legs, the base angles still equal',
    dragged_expr="{ ...PROOFS.isoscelesTrapezoid.model, points: { ...PROOFS.isoscelesTrapezoid.model.points, D: { x: 225, y: 135 } } }",
    demo_drag="{ drag: '[data-handle=\"D\"]', dx: 14, dy: -8, ms: 1400 },",
    subCategory='Quadrilateral',
    title='Isosceles Trapezoid Proof | Equal Base Angles and Equal Diagonals Step by Step',
    desc='Watch the proof that a trapezoid with equal legs has equal base angles and equal diagonals: a parallel through one vertex, an isosceles triangle, corresponding angles and SAS, step by step. Then drag the vertices.',
    h1='Isosceles Trapezoid', name='Isosceles Trapezoid Proof',
    appdesc='Step-by-step interactive proof that an isosceles trapezoid has equal base angles and equal diagonals, with a parallel through a vertex, an isosceles triangle and SAS, and draggable vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,64 72,64 56,22 24,22" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="8" y1="64" x2="56" y2="22" stroke="#FAC775" stroke-width="1.4"/><line x1="72" y1="64" x2="24" y2="22" stroke="#FAC775" stroke-width="1.4"/><path d="M20,64 A12,12 0 0 0 16,57" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><path d="M60,64 A12,12 0 0 1 64,57" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">isosceles</text></svg>',
    keywords=['isosceles trapezoid', 'isosceles trapezoid proof', 'base angles of a trapezoid', 'diagonals of an isosceles trapezoid', 'equal legs', 'trapezium', 'parallelogram construction', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'parallel', 'isosceles', 'corresponding', 'angles', 'diagonals'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $D$ to reshape the trapezoid ($C$ follows so the legs stay equal), or drag $A$ or $B$, and watch the two base angles and the two diagonals in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A trapezoid is a quadrilateral with one pair of parallel sides, the bases; the other two sides are the legs. When the legs are equal the trapezoid is isosceles, and two things follow:

$$\\angle DAB = \\angle CBA, \\qquad AC = BD$$

the angles at each base are equal, and the diagonals are equal. (The converse holds too: equal base angles, or equal diagonals, make the legs equal.) The player's trapezoid has $AB \\parallel DC$ and $AD = BC$; $D$ is free, and $C$ is placed as its mirror image across the perpendicular bisector of $AB$, which is exactly what keeps the legs equal.

The proof is a chain of four earlier pages: a [parallelogram](!/geometry/visual-tools/parallelogram-sides), the [isosceles base angles](!/geometry/visual-tools/isosceles-base-angles), [parallel lines](!/geometry/visual-tools/parallel-lines) and SAS. The readout shows the two base angles and the two diagonals."""),
        ('A Parallel Through C', r"""The trick is to move the leg $AD$ next to the leg $BC$. Through $C$ draw the line parallel to $AD$; it meets the long base $AB$ at $E$. In the quadrilateral $AECD$ both pairs of opposite sides are parallel, $AE \\parallel DC$ (the bases) and $EC \\parallel AD$ (by construction), so it is a parallelogram and its [opposite sides are equal](!/geometry/visual-tools/parallelogram-sides):

$$CE = AD = BC$$

The two legs now meet at $C$, as the two equal sides of the triangle $EBC$."""),
        ('An Isosceles Triangle', r"""The triangle $EBC$ has $CE = CB$, so it is isosceles with apex $C$, and its [base angles are equal](!/geometry/visual-tools/isosceles-base-angles):

$$\\angle CEB = \\angle CBE = \\beta$$

The angle at $B$ is the base angle of the trapezoid itself; the angle at $E$ is a copy of it, waiting to be moved to $A$."""),
        ('Corresponding Angles', r"""The lines $DA$ and $CE$ are parallel, and the base $AB$ crosses both. The angles they make with it on the same side are corresponding angles, and [corresponding angles on parallel lines](!/geometry/visual-tools/parallel-lines) are equal:

$$\\angle DAB = \\angle CEB = \\beta$$"""),
        ('The Base Angles', r"""Chain the two equalities: $\\angle DAB = \\angle CEB$ and $\\angle CEB = \\angle CBA$, so

$$\\angle DAB = \\angle CBA = \\beta$$

The angles at the other base follow at once: $\\angle ADC$ and $\\angle DAB$ are co-interior angles between the parallels $DC$ and $AB$, so $\\angle ADC = 180° - \\beta$, and likewise $\\angle BCD = 180° - \\beta$. Each base of an isosceles trapezoid carries a pair of equal angles."""),
        ('Why It Holds', r"""The diagonals come from one congruence. Compare the triangles $DAB$ and $CBA$: they have $AD = BC$ (the legs), the base $AB$ in common, and the included angles $\\angle DAB = \\angle CBA$ just proved. By SAS they are congruent, and the sides opposite the equal angles are equal:

$$BD = AC$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a parallelogram, isosceles base angles, parallel lines, combining, and SAS.

The one idea worth remembering is the parallel through $C$: it turns the two legs into the two equal sides of one triangle, and from there everything is a theorem already proved."""),
        ('Dragging the Figure', r"""Drag $D$: the top base slides and tilts, $C$ moves as the mirror image of $D$ so that the legs stay equal, the point $E$ and the parallel through $C$ follow, and in the readout the two base angles stay equal and the two diagonals stay equal. Drag $A$ or $B$ to change the long base; the figure stays symmetric about its perpendicular bisector.

The player keeps $D$ above $AB$ and its foot between $A$ and the midpoint of $AB$, so that $DC$ is the shorter base and $E$ falls inside $AB$ as in the proof. A drag that would carry a point out of the frame, flatten the trapezoid or push $E$ past $B$ is refused."""),
        ('Consequences', r"""• **The converses.** A trapezoid with equal base angles is isosceles (the same parallel through $C$ makes $EBC$ isosceles the other way round), and so is a trapezoid with equal diagonals (SSS on $DAB$ and $CBA$ gives equal base angles first).
• **Cyclic.** An isosceles trapezoid is the only trapezoid that is [cyclic](!/geometry/visual-tools/cyclic-quadrilateral): its opposite angles are $\\beta$ and $180° - \\beta$, which add up to $180°$. Every cyclic trapezoid is isosceles.
• **An axis of symmetry.** The perpendicular bisector of the bases is a line of symmetry; the diagonals cross on it, and the [midsegment](!/geometry/visual-tools/trapezoid-midsegment) is perpendicular to it.
• **Rectangles.** A rectangle is an isosceles trapezoid with both pairs of sides parallel; the [equal diagonals of a rectangle](!/geometry/visual-tools/rectangle-diagonals) are the special case $\\beta = 90°$.
• **Regular polygons.** Any four consecutive vertices of a regular polygon form an isosceles trapezoid, which is why the diagonals of a regular pentagon are all equal."""),
    ],
    order=[('the-statement', 'given'), ('a-parallel-through-c', 'parallel'), ('an-isosceles-triangle', 'isosceles'), ('corresponding-angles', 'corresponding'), ('the-base-angles', 'angles'), ('why-it-holds', 'diagonals'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is true of an isosceles trapezoid?', 'A trapezoid whose legs are equal has equal angles at each base and equal diagonals; it is symmetric about the perpendicular bisector of its bases, and it is the only kind of trapezoid that can be inscribed in a circle.'),
        ('How is it proved that the base angles of an isosceles trapezoid are equal?', 'Through C draw the parallel to the leg AD, meeting the base AB at E. AECD is a parallelogram, so CE = AD = BC and the triangle EBC is isosceles with equal base angles at E and B. The angle at E equals the angle at A as corresponding angles on the parallels, so the angles at A and B are equal.'),
        ('Why are the diagonals of an isosceles trapezoid equal?', 'The triangles DAB and CBA have equal legs AD = BC, the common base AB and equal included base angles, so they are congruent by SAS, and their third sides, the diagonals BD and AC, are equal.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The trapezoid: AB ∥ DC with chevrons, AD = BC with ticks.'),
            ('parallel', 'A parallel through C, frozen', 'CE ∥ AD; AECD shaded as a parallelogram, so CE = AD = BC.'),
            ('isosceles', 'An isosceles triangle, frozen', 'EBC shaded: CE = CB, so the base angles at E and B are both β.'),
            ('corresponding', 'Corresponding angles, frozen', 'β at A as well: DA ∥ CE with the transversal AB.'),
            ('angles', 'The base angles, frozen', '∠DAB = ∠CBA = β.'),
            ('diagonals', 'The conclusion, frozen', 'The diagonals drawn: DAB ≅ CBA by SAS, so AC = BD.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D moved up and to the right: steeper legs and a shorter top base, the base angles and diagonals still equal.',
    notes=[('given', 'Drag D: C follows and the legs stay equal.', 'the-statement', 'Learn more about the statement'),
           ('parallel', 'A parallelogram carries the leg AD over to C.', 'a-parallel-through-c', 'Learn more about the parallel'),
           ('isosceles', 'Two equal sides at C: equal base angles.', 'an-isosceles-triangle', 'Learn more about the isosceles triangle'),
           ('corresponding', 'Parallels DA and CE, transversal AB.', 'corresponding-angles', 'Learn more about the corresponding angles'),
           ('angles', 'Drag D: the two base angles in the readout stay equal.', 'the-base-angles', 'Learn more about the base angles'),
           ('diagonals', 'Two sides and the included angle: equal diagonals.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $D$ to reshape the trapezoid ($C$ follows), or $A$ or $B$; the readout under the canvas shows the two base angles and the two diagonals. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['PARALLEL\nNext → : CE ∥ AD makes AECD a parallelogram, so CE = AD = BC.',
               'ISOSCELES\nEBC has CE = CB: equal base angles β at E and B.',
               'CORRESPONDING\nDA ∥ CE, so the angle at A is β too.',
               'BASE ANGLES\n∠DAB = ∠CBA = β.',
               'SAS\nAD = BC, AB common, equal included angles: AC = BD.'],
    demo_drag_say='DRAG D\nReshape the trapezoid: the angles and the diagonals stay equal.',
    drag_desc='D moves freely and C follows as its mirror image, so the legs stay equal; A and B move the long base; the hollow point E follows',
    readout_desc='the line under the figure: the two base angles and the two diagonals, live while you drag',
    p3top='150px', p3left='calc(25% - 70px)',
    frame2=[('The parallelogram AECD', 'shaded: CE ∥ AD carries the leg over, CE = AD', '200px', 'calc(25% - 60px)'),
            ('The isosceles triangle EBC', 'shaded: CE = CB, base angles β at E and B', '236px', 'calc(25% + 80px)'),
            ('The diagonals', 'AC and BD, equal by SAS on DAB and CBA', '150px', 'calc(25% + 20px)'),
            ('Justification tags', 'Given, Parallelogram, Isosceles base angles, Parallel lines, Combining, SAS', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the trapezoid is shaped by dragging and stays isosceles by construction.',
    input_rows=[['$D$', 'solid dot', 'moves freely; $C$ follows as the mirror image of $D$ across the perpendicular bisector of $AB$, so $AD = BC$'],
                ['$A$, $B$', 'solid dot', 'move the ends of the long base; the figure stays symmetric'],
                ['$C$, $E$', 'hollow dot', 'cannot be dragged: the mirror image of $D$, and where the parallel through $C$ meets $AB$'],
                ['$D$ below $AB$ or past the midpoint, a flattened trapezoid, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $E$',
    measures_desc="write each marked angle's size in degrees beside its arc: β at E, B and A",
    readout_short='the two base angles and the two diagonals', tags='**Given**, **Parallelogram**, **Isosceles base angles**, **Parallel lines**, **Combining**, **SAS**',
    beh1='The readout is a check, not a step of the proof. The argument uses a parallelogram, isosceles base angles, parallel lines and SAS, never the numbers, which is why the angles and the diagonals agree for every shape you drag.',
    beh2t='The legs are equal by construction', beh2='C is the reflection of D in the perpendicular bisector of AB, so DC is parallel to AB and BC equals AD whatever you drag; that is the hypothesis of the theorem, built into the figure.',
)]
