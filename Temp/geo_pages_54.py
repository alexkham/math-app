# Content for page 54, equal opposite sides make a parallelogram, read by geo-view-42-45.py (argument geo_pages_54)
PAGES = [dict(
    slug='parallelogram-from-sides', prev='angles-around-a-point', prev_h1='Angles Around a Point', prev_key='anglesAroundPoint', prev_dragged='draggedAroundPoint',
    key='parallelogramFromSides', dragged='draggedParallelogramSides', dragged_comment='D moved up and to the right: a more slanted figure, the alternate angles still equal in pairs',
    dragged_expr="{ ...PROOFS.parallelogramFromSides.model, points: { ...PROOFS.parallelogramFromSides.model.points, D: { x: 250, y: 120 } } }",
    demo_drag="{ drag: '[data-handle=\"D\"]', dx: 14, dy: -6, ms: 1400 },",
    subCategory='Quadrilateral',
    title='Equal Opposite Sides Make a Parallelogram | Proof Step by Step',
    desc='Watch the proof that a quadrilateral whose opposite sides are equal is a parallelogram: a diagonal, SSS congruence and equal alternate angles, step by step. Then drag the vertices.',
    h1='Equal Opposite Sides Make a Parallelogram', name='Parallelogram from Equal Sides Proof',
    appdesc='Step-by-step interactive proof of the converse of the parallelogram sides theorem: equal opposite sides give congruent triangles across a diagonal, equal alternate angles and parallel sides, with draggable vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,62 52,62 72,20 28,20" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="52" y1="62" x2="28" y2="20" stroke="#FAC775" stroke-width="1.6"/><line x1="28" y1="60" x2="32" y2="64" stroke="#E6F1FB" stroke-width="1.4"/><line x1="48" y1="18" x2="52" y2="22" stroke="#E6F1FB" stroke-width="1.4"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">SSS</text></svg>',
    keywords=['parallelogram converse', 'equal opposite sides parallelogram', 'quadrilateral with equal opposite sides', 'parallelogram test', 'sss congruence', 'alternate angles', 'parallelogram proof', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'diagonal', 'sss', 'alternate', 'parallel', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$, $B$ or $D$ ($C$ follows so that the opposite sides stay equal) and watch the two pairs of alternate angles in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""The [parallelogram sides](!/geometry/visual-tools/parallelogram-sides) page proves that a parallelogram has equal opposite sides. This page proves the converse: if a convex quadrilateral $ABCD$ has

$$AB = CD, \\qquad AD = CB$$

then it is a parallelogram, that is, $AB \\parallel DC$ and $AD \\parallel BC$. Together the two statements say that "opposite sides equal" is a test for a parallelogram, the one most often used in practice: measure the four sides and you know the shape.

The player keeps the hypothesis by construction: $C$ is placed so that $CD = AB$ and $CB = AD$ (the only convex quadrilateral with those four sides in that order). Drag $A$, $B$ or $D$; the readout shows the two pairs of alternate angles at the diagonal."""),
        ('The Diagonal', r"""Draw the diagonal $BD$. It cuts the quadrilateral into two triangles, $ABD$ on one side and $CDB$ on the other, and both of them contain the diagonal as a side. The whole proof is about these two triangles."""),
        ('Three Equal Sides', r"""Compare the triangles $ABD$ and $CDB$ side by side: $AB = CD$ and $AD = CB$ are given, and $BD$ is a side of both. Three pairs of equal sides, so by [SSS congruence](!/geometry/visual-tools/sss-congruence)

$$\\triangle ABD \\cong \\triangle CDB$$

with the vertices matched $A \\leftrightarrow C$, $B \\leftrightarrow D$, $D \\leftrightarrow B$."""),
        ('The Alternate Angles', r"""Congruent triangles have equal corresponding angles. The angle at $B$ in the first triangle, $\\angle ABD$, corresponds to the angle at $D$ in the second, $\\angle CDB$; both are opposite the equal sides $AD$ and $CB$. Likewise $\\angle ADB$ corresponds to $\\angle CBD$:

$$\\angle ABD = \\angle CDB = \\alpha, \\qquad \\angle ADB = \\angle CBD = \\beta$$

Each pair sits on opposite sides of the diagonal $BD$, between two of the sides of the quadrilateral: they are alternate angles for the transversal $BD$."""),
        ('Equal Alternate Angles Give Parallels', r"""The angles $\\alpha$ at $B$ and at $D$ are alternate angles between the lines $AB$ and $DC$ cut by $BD$, and they are equal. Equal alternate angles force the lines to be parallel (Euclid I.27): if $AB$ and $DC$ met at some point $X$ on one side of $BD$, the triangle $XBD$ would have at one of $B$, $D$ an exterior angle equal to the interior angle at the other, and the [exterior angle theorem](!/geometry/visual-tools/exterior-angle) says an exterior angle is always larger. So

$$AB \\parallel DC$$

and the equal angles $\\beta$ give $AD \\parallel BC$ in the same way. This is the converse direction of the [parallel lines](!/geometry/visual-tools/parallel-lines) page, which goes from parallels to equal angles."""),
        ('Why It Holds', r"""Both pairs of opposite sides are parallel, and that is what a parallelogram is:

$$ABCD \\text{ is a parallelogram}$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, SSS, corresponding parts, equal alternate angles, and the definition.

One diagonal, one congruence, two pairs of alternate angles: the same diagonal that proves a parallelogram has equal opposite sides proves the converse, with SSS in place of ASA."""),
        ('Dragging the Figure', r"""Drag $A$, $B$ or $D$: the quadrilateral changes shape, $C$ moves so that $CD = AB$ and $CB = AD$ stay true, the diagonal and the four marked angles follow, and the readout shows the two pairs of alternate angles staying equal. The figure stays a parallelogram throughout, as the theorem says it must.

The player keeps the quadrilateral convex and its sides long enough for the tick marks, and refuses a drag that would carry a vertex out of the frame or flatten the figure."""),
        ('Consequences', r"""• **Tests for a parallelogram.** Equal opposite sides, equal opposite angles, [diagonals that bisect each other](!/geometry/visual-tools/parallelogram-diagonals), or one pair of sides both equal and parallel: each is enough, and each has a proof of this shape.
• **Rhombus.** Four equal sides are in particular two pairs of equal opposite sides, so every rhombus is a parallelogram; the [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) page starts from this.
• **Constructing parallels.** To draw through a point $P$ a parallel to a line $AB$ with compasses: mark $C$ with $PC = AB$ and $BC = AP$ on the right side, and $PC \\parallel AB$ by this theorem.
• **Midsegments.** In the [midsegment theorem](!/geometry/visual-tools/midsegment) a parallelogram is recognised from two equal and parallel sides, the sister test of this one.
• **Vectors.** The theorem is why two equal and parallel arrows $\\overrightarrow{AB}$ and $\\overrightarrow{DC}$ represent the same vector: their endpoints form a parallelogram."""),
    ],
    order=[('the-statement', 'given'), ('the-diagonal', 'diagonal'), ('three-equal-sides', 'sss'), ('the-alternate-angles', 'alternate'), ('equal-alternate-angles-give-parallels', 'parallel'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('If the opposite sides of a quadrilateral are equal, is it a parallelogram?', 'Yes, for a convex quadrilateral: a diagonal cuts it into two triangles congruent by SSS, their equal angles at the diagonal are alternate angles, and equal alternate angles make both pairs of opposite sides parallel.'),
        ('Why do equal alternate angles make lines parallel?', 'If the two lines met, they would form a triangle with the transversal, and one of the alternate angles would be an exterior angle of that triangle equal to an interior opposite angle. The exterior angle theorem says an exterior angle is always larger, so the lines cannot meet.'),
        ('What are the ways to show a quadrilateral is a parallelogram?', 'Both pairs of opposite sides parallel (the definition), both pairs equal, both pairs of opposite angles equal, the diagonals bisecting each other, or one pair of opposite sides both equal and parallel.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'AB = CD (one tick) and AD = CB (two ticks).'),
            ('diagonal', 'The diagonal, frozen', 'BD drawn; the triangles ABD and CDB shaded.'),
            ('sss', 'Three equal sides, frozen', 'AB = CD, AD = CB, BD common: ABD ≅ CDB by SSS.'),
            ('alternate', 'The alternate angles, frozen', 'α at B and D, β at D and B: two pairs of equal alternate angles.'),
            ('parallel', 'Equal alternate angles give parallels, frozen', 'Chevrons on AB and DC, and on AD and BC.'),
            ('conclude', 'The conclusion, frozen', 'Both pairs of opposite sides parallel: a parallelogram.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D moved up and to the right: a more slanted figure, still a parallelogram.',
    notes=[('given', 'Drag A, B or D: C keeps the opposite sides equal.', 'the-statement', 'Learn more about the statement'),
           ('diagonal', 'One diagonal, two triangles.', 'the-diagonal', 'Learn more about the diagonal'),
           ('sss', 'Two given sides and the common diagonal.', 'three-equal-sides', 'Learn more about SSS'),
           ('alternate', 'Equal angles on opposite sides of the diagonal.', 'the-alternate-angles', 'Learn more about the alternate angles'),
           ('parallel', 'Equal alternate angles cannot come from lines that meet.', 'equal-alternate-angles-give-parallels', 'Learn more about the parallels'),
           ('conclude', 'Drag a vertex: the alternate angles in the readout stay equal in pairs.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$ or $D$ ($C$ follows); the readout under the canvas shows the two pairs of alternate angles at the diagonal. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['DIAGONAL\nNext → : BD cuts the quadrilateral into ABD and CDB.',
               'SSS\nAB = CD, AD = CB, BD common: the triangles are congruent.',
               'ALTERNATE ANGLES\nα at B and D, β at D and B: equal in pairs across the diagonal.',
               'PARALLELS\nEqual alternate angles: AB ∥ DC and AD ∥ BC.',
               'CONCLUDE\nBoth pairs parallel: ABCD is a parallelogram.'],
    demo_drag_say='DRAG D\nReshape the figure: the alternate angles stay equal in pairs.',
    drag_desc='A, B and D move freely; C follows so that CD = AB and CB = AD',
    readout_desc='the line under the figure: the two pairs of alternate angles at the diagonal, live while you drag',
    p3top='150px', p3left='calc(25% - 70px)',
    frame2=[('The two triangles', 'ABD and CDB, shaded on either side of the diagonal BD', '236px', 'calc(25% - 100px)'),
            ('The alternate angles', 'α at B and at D, β at D and at B, matched across the diagonal', '150px', 'calc(25% + 60px)'),
            ('The chevrons', 'one pair on AB and DC, two on AD and BC: the parallels found', '100px', 'calc(25% + 110px)'),
            ('Justification tags', 'Given, Construction, SSS, Corresponding parts, Equal alternate angles, Definition', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the quadrilateral is shaped by dragging and keeps its opposite sides equal.',
    input_rows=[['$A$, $B$, $D$', 'solid dot', 'move freely; $C$ follows so that $CD = AB$ and $CB = AD$'],
                ['$C$', 'hollow dot', 'cannot be dragged: placed by the equal sides'],
                ['a flattened or non-convex figure, a side too short for its ticks, or a vertex out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$',
    measures_desc="write each marked angle's size in degrees beside its arc: α and β, each twice",
    readout_short='the two pairs of alternate angles', tags='**Given**, **Construction**, **SSS**, **Corresponding parts**, **Equal alternate angles**, **Definition**',
    beh1='The readout is a check, not a step of the proof. The argument uses SSS, corresponding parts and equal alternate angles, never the numbers, which is why the angles agree in pairs for every shape you drag.',
    beh2t='The hypothesis is built in', beh2='C is placed so that CD = AB and CB = AD, which is the only convex figure with those four sides in that order; what the proof adds is that it is also a parallelogram.',
)]
