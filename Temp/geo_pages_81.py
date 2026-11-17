# Content for page 81, the bisectors of alternate angles are parallel, read by geo-view-42-45.py (argument geo_pages_81)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='alternate-angle-bisectors', prev='pitot-theorem', prev_h1="Pitot's Theorem", prev_key='pitot', prev_dragged='draggedPitot',
    key='alternateBisectors', dragged='draggedAlternateBisectors', dragged_comment='Q moved left: the transversal leans the other way, the bisectors still parallel',
    dragged_expr="{ ...PROOFS.alternateBisectors.model, params: { ...PROOFS.alternateBisectors.model.params, tq: 0.29 } }",
    demo_drag="{ drag: '[data-handle=\"Q\"]', dx: -20, dy: 0, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Bisectors of Alternate Angles Are Parallel | Proof Step by Step',
    desc='Watch the proof that the bisectors of two alternate angles formed by parallel lines and a transversal are parallel, by alternate angles and their converse, step by step. Then drag the transversal and the lines.',
    h1='Bisectors of Alternate Angles', name='Alternate Angle Bisectors Proof',
    appdesc='Step-by-step interactive proof that the angle bisectors of a pair of alternate interior angles are parallel, with a draggable transversal and parallel lines.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="18" x2="74" y2="18" stroke="#E6F1FB" stroke-width="1.4"/><line x1="6" y1="56" x2="74" y2="56" stroke="#E6F1FB" stroke-width="1.4"/><line x1="34" y1="18" x2="44" y2="56" stroke="#E6F1FB" stroke-width="1.4"/><line x1="34" y1="18" x2="60" y2="40" stroke="#FAC775" stroke-width="1.8"/><line x1="44" y1="56" x2="18" y2="34" stroke="#FAC775" stroke-width="1.8"/><text x="40" y="74" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">PX ∥ QY</text></svg>',
    keywords=['bisectors of alternate angles', 'bisectors of alternate interior angles are parallel', 'alternate angles', 'alternate angles converse', 'parallel lines and a transversal', 'angle bisector', 'lines and angles', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'alternate', 'halves', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$ or $Q$ along its line to tilt the transversal, or $A$, $B$ or $C$ to move the parallels, and watch the readout: the two halves stay equal and the angle between the bisectors stays $0°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Two parallel lines $AB$ and $CD$ are cut by a transversal at $P$ and $Q$. The angles $\\angle QPB$ and $\\angle PQC$ lie between the parallels on opposite sides of the transversal: they are alternate angles. Draw the bisector $PX$ of $\\angle QPB$ and the bisector $QY$ of $\\angle PQC$. The theorem says

$$PX \\parallel QY$$

It is the partner of the [bisectors of co-interior angles](!/geometry/visual-tools/cointerior-bisectors) page, where the two bisectors meet at a right angle instead.

The proof uses the [parallel lines and a transversal](!/geometry/visual-tools/parallel-lines) theorem twice: once forwards, to get equal alternate angles from parallel lines, and once backwards, to get parallel lines from equal alternate angles. In the player $P$ and $Q$ slide along their lines, $A$, $B$ and $C$ move the lines, and the bisectors are computed; the readout shows the two halves next to $PQ$ and the angle between $PX$ and $QY$."""),
        ('Alternate Angles', r"""The lines $AB$ and $CD$ are parallel and $PQ$ crosses them, so the alternate angles are equal:

$$\\angle QPB = \\angle PQC = \\beta$$"""),
        ('The Two Halves', r"""$PX$ halves $\\angle QPB$ and $QY$ halves $\\angle PQC$. The halves next to the transversal are

$$\\angle QPX = \\angle PQY = \\frac{\\beta}{2}$$"""),
        ('Why It Holds', r"""Now forget $AB$ and $CD$ and look at the lines $PX$ and $QY$, cut by the transversal $PQ$. The angles $\\angle QPX$ and $\\angle PQY$ lie on opposite sides of $PQ$, between the two lines, so they are alternate angles for $PX$ and $QY$. They are equal, and equal alternate angles make two lines parallel:

$$PX \\parallel QY$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, alternate angles, the angle bisector and the alternate angles converse.

The converse holds because two lines that met would form a triangle with $PQ$, and the exterior angle of that triangle would have to be larger than the interior angle opposite it, as on the [exterior angle](!/geometry/visual-tools/exterior-angle) page; equal alternate angles leave no room for such a triangle."""),
        ('Dragging the Figure', r"""Drag $P$ or $Q$ along its line: the transversal tilts, $\\beta$ changes, and the bisectors turn with it, but the readout keeps the two halves equal and the angle between $PX$ and $QY$ at $0°$. Drag $A$, $B$ or $C$ to move or turn the parallels; $D$ follows so that $CD$ stays parallel to $AB$.

The player keeps $\\beta$ between $70°$ and $110°$ so that every mark stays readable, keeps the lines long, nearly level and apart, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **Co-interior bisectors.** The bisectors of the two co-interior angles $\\angle QPB$ and $\\angle PQD$ meet at a right angle instead, as on the [bisectors of co-interior angles](!/geometry/visual-tools/cointerior-bisectors) page.
• **A rectangle of bisectors.** At $P$ the bisectors of $\\angle QPB$ and $\\angle APQ$ are perpendicular, as for any [linear pair](!/geometry/visual-tools/linear-pair-bisectors); the same holds at $Q$. With $PX \\parallel QY$ and the other two bisectors parallel as well, the four bisectors make a rectangle.
• **Corresponding angles.** The same argument with corresponding angles shows that the bisectors of two corresponding angles are parallel too.
• **Vertical angles.** At a single crossing the bisectors of two vertical angles lie on one line, as on the [bisectors of vertical angles](!/geometry/visual-tools/vertical-angle-bisectors) page; here the two angles sit at different crossings, and the bisectors are parallel instead."""),
    ],
    order=[('the-statement', 'given'), ('alternate-angles', 'alternate'), ('the-two-halves', 'halves'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Are the bisectors of alternate angles parallel?', 'Yes. When two parallel lines are cut by a transversal, the bisectors of a pair of alternate interior angles are parallel to each other.'),
        ('How is it proved?', 'The alternate angles are equal, so their halves next to the transversal are equal too. Those halves are alternate angles for the two bisectors, and equal alternate angles make two lines parallel.'),
        ('What about the bisectors of co-interior angles?', 'The bisectors of two co-interior angles meet at a right angle, because the two angles add up to 180° and their halves add up to 90°.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Two parallels, the transversal PQ and the bisectors PX and QY.'),
            ('alternate', 'Alternate angles, frozen', 'β at P and β at Q.'),
            ('halves', 'The two halves, frozen', 'β/2 next to PQ at P and at Q.'),
            ('conclude', 'The conclusion, frozen', 'PX ∥ QY, with double arrow marks.')],
    dragged_cap='After dragging Q, frozen', dragged_txt='Q moved left: the transversal leans the other way, the bisectors still parallel.',
    notes=[('given', 'Drag P or Q: PX and QY stay parallel.', 'the-statement', 'Learn more about the statement'),
           ('alternate', 'Alternate angles between parallels.', 'alternate-angles', 'Learn more about alternate angles'),
           ('halves', 'Each bisector halves its angle.', 'the-two-halves', 'Learn more about the halves'),
           ('conclude', 'Drag P or Q: the angle between the bisectors stays 0°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$ or $Q$ along its line, or $A$, $B$ or $C$ to move the lines; the readout under the canvas shows the two halves and the angle between $PX$ and $QY$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['ALTERNATE\nNext → : the alternate angles are equal, β and β.',
               'HALVES\nThe bisectors make β/2 next to PQ.',
               'CONCLUDE\nEqual alternate angles: PX ∥ QY.'],
    demo_drag_say='DRAG Q\nTilt the transversal: PX and QY stay parallel.',
    drag_desc='P and Q slide along their lines, A, B and C move the lines; D follows to keep CD parallel, and the hollow points X and Y follow',
    readout_desc='the line under the figure: the two halves and the angle between PX and QY, live while you drag',
    p3top='120px', p3left='calc(25% + 40px)',
    frame2=[('The bisector PX', 'halving the angle QPB', '163px', 'calc(25% + 65px)'),
            ('The bisector QY', 'halving the alternate angle PQC', '154px', 'calc(25% - 124px)'),
            ('The parallel marks', 'double arrows on PX and QY', '200px', 'calc(25% + 58px)'),
            ('Justification tags', 'Given, Alternate angles, Angle bisector, Alternate angles converse', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the lines and the transversal are moved by dragging.',
    input_rows=[['$P$, $Q$', 'solid dot', 'slide along their lines; the transversal tilts'],
                ['$A$, $B$, $C$', 'solid dot', 'move and turn the parallel lines'],
                ['$D$, $X$, $Y$', 'hollow dot', 'cannot be dragged: $D$ keeps $CD$ parallel to $AB$, $X$ and $Y$ are the ends of the bisectors'],
                ['$\\beta$ under $70°$ or over $110°$, lines too short, too steep or too close, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $P$, $Q$, $X$, $Y$',
    measures_desc="write each marked angle's size in degrees beside its arc: β twice and β/2 twice",
    readout_short='the two halves and the angle between PX and QY', tags='**Given**, **Alternate angles**, **Angle bisector**, **Alternate angles converse**',
    beh1='The readout is a check, not a step of the proof. The argument uses alternate angles and their converse, never the numbers, which is why the angle between the bisectors is 0° for every position you drag.',
    beh2t='The bisectors are computed', beh2='X and Y are found along the computed bisectors of the two alternate angles; nothing makes PX and QY parallel, so the 0° in the readout is a real check.',
)]
