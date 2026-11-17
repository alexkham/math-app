# Content for page 70, the bisectors of co-interior angles are perpendicular, read by geo-view-42-45.py (argument geo_pages_70)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='cointerior-bisectors', prev='incentre-excentre-lemma', prev_h1='The Incentre-Excentre Lemma', prev_key='incentreExcentre', prev_dragged='draggedIncentreExcentre',
    key='cointeriorBisectors', dragged='draggedCointeriorBisectors', dragged_comment='P slid to the right: the transversal leans the other way, still a right angle at R',
    dragged_expr="{ ...PROOFS.cointeriorBisectors.model, params: { ...PROOFS.cointeriorBisectors.model.params, tp: 0.45 } }",
    demo_drag="{ drag: '[data-handle=\"P\"]', dx: 14, dy: 0, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Bisectors of Co-interior Angles Are Perpendicular | Proof Step by Step',
    desc='Watch the proof that the bisectors of the two co-interior angles made by a transversal with two parallel lines meet at a right angle, by co-interior angles and the angle sum of a triangle, step by step. Then drag the transversal.',
    h1='Bisectors of Co-interior Angles', name='Co-interior Bisectors Proof',
    appdesc='Step-by-step interactive proof that the bisectors of co-interior angles between two parallel lines are perpendicular, with a draggable transversal and draggable lines.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="22" x2="74" y2="22" stroke="#E6F1FB" stroke-width="1.4"/><line x1="6" y1="58" x2="74" y2="58" stroke="#E6F1FB" stroke-width="1.4"/><line x1="24" y1="12" x2="34" y2="68" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="26,22 32,58 52,38" fill="#85B7EB" fill-opacity="0.3" stroke="#FAC775" stroke-width="1.4"/><polyline points="47,35 44,38 47,41" fill="none" stroke="#FAC775" stroke-width="1.2"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">β/2 + δ/2 = 90°</text></svg>',
    keywords=['bisectors of co-interior angles', 'co-interior angles bisectors perpendicular', 'same side interior angles bisectors', 'parallel lines transversal angle bisectors', 'co-interior angles', 'angle bisector', 'parallel lines', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'cointerior', 'halves', 'add', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $P$ or $Q$ along its line to tilt the transversal, or drag $A$, $B$ or $C$ to move the lines, and watch the angle at $R$ in the readout stay at $90°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Two parallel lines $AB$ and $CD$ are cut by a transversal at $P$ and $Q$. Between the parallels, on the same side of the transversal, lie the co-interior angles

$$\\beta = \\angle QPB, \\qquad \\delta = \\angle PQD$$

Bisect both of them; the bisectors meet at a point $R$. The theorem says

$$\\angle PRQ = 90°$$

the two bisectors are perpendicular, whatever the angle at which the transversal crosses. It is the twin of the [bisectors of a linear pair](!/geometry/visual-tools/linear-pair-bisectors) page, with two parallel lines in place of one straight line.

In the player $P$ and $Q$ slide along the two lines, the second line keeps the direction of the first, and $R$ is found where the bisectors cross; the readout shows $\\beta$, $\\delta$ and the angle at $R$."""),
        ('Co-interior Angles', r"""The angles $\\beta$ and $\\delta$ lie between the parallels and on the same side of the transversal. By the [parallel lines](!/geometry/visual-tools/parallel-lines) theorem co-interior angles are supplementary:

$$\\beta + \\delta = 180°$$"""),
        ('The Two Halves', r"""The line $PR$ bisects $\\beta$ and the line $QR$ bisects $\\delta$, so the triangle $PQR$ has the angles

$$\\angle QPR = \\frac{\\beta}{2}, \\qquad \\angle PQR = \\frac{\\delta}{2}$$

at $P$ and at $Q$. The other halves, between the bisectors and the lines, are equal to these and are drawn too."""),
        ('Adding the Halves', r"""Add the two angles of the triangle at $P$ and $Q$:

$$\\frac{\\beta}{2} + \\frac{\\delta}{2} = \\frac{\\beta + \\delta}{2} = \\frac{180°}{2} = 90°$$"""),
        ('Why It Holds', r"""The [angles of a triangle](!/geometry/visual-tools/triangle-angle-sum) add up to $180°$. Two of the angles of $PQR$ make $90°$, so the third is

$$\\angle PRQ = 180° - 90° = 90°$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, co-interior angles, the angle bisector, adding and the angle sum of a triangle.

So $R$ sees $PQ$ at a right angle, and by the converse of [Thales](!/geometry/visual-tools/thales-theorem) theorem it lies on the circle with diameter $PQ$."""),
        ('Dragging the Figure', r"""Drag $P$ or $Q$ along its line: the transversal tilts, $\\beta$ and $\\delta$ change, one growing as the other shrinks, and the readout keeps the angle at $R$ at $90°$. Drag $A$, $B$ or $C$ to move or tilt the lines; the second line always keeps the direction of the first, so they stay parallel.

The player keeps the co-interior angles between $60°$ and $120°$, the lines nearly level and far enough apart, and every point inside the frame, so the marks stay readable; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **A rectangle of bisectors.** Bisect all four interior angles at $P$ and $Q$, on both sides of the transversal. The four bisectors meet at right angles in pairs and make a rectangle.
• **The circle on PQ.** Since the angle at $R$ is right, $R$ lies on the circle with diameter $PQ$; the midpoint of $PQ$ is equally far from $P$, $Q$ and $R$, as on the [midpoint of the hypotenuse](!/geometry/visual-tools/midpoint-of-hypotenuse) page.
• **Parallelograms and trapezoids.** In a parallelogram, or in a trapezoid between its parallel sides, the bisectors of two angles on the same leg meet at a right angle; this follows from the [parallelogram angles](!/geometry/visual-tools/parallelogram-angles) page in the same way.
• **The converse.** If the bisectors of two angles on the same side of a transversal are perpendicular, those angles add up to $180°$, and the lines are parallel.
• **A linear pair.** Folding the two parallels onto one line turns the statement into the bisectors of a linear pair being perpendicular."""),
    ],
    order=[('the-statement', 'given'), ('co-interior-angles', 'cointerior'), ('the-two-halves', 'halves'), ('adding-the-halves', 'add'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Are the bisectors of co-interior angles perpendicular?', 'Yes. When two parallel lines are cut by a transversal, the bisectors of the two angles between the parallels on the same side of the transversal meet at a right angle.'),
        ('How is it proved?', 'Co-interior angles add up to 180°, so their halves add up to 90°. The halves are two angles of the triangle formed by the transversal and the two bisectors, so its third angle is 180° − 90° = 90°.'),
        ('Does it need the lines to be parallel?', 'Yes. If the lines are not parallel the two angles do not add up to 180°, and the angle between the bisectors is half their sum subtracted from 180°, which is not a right angle.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Two parallels, the transversal PQ and the two bisectors meeting at R.'),
            ('cointerior', 'Co-interior angles, frozen', 'β at P and δ at Q, adding up to 180°.'),
            ('halves', 'The two halves, frozen', 'β/2 at P and δ/2 at Q in the triangle PQR.'),
            ('add', 'Adding the halves, frozen', 'PQR shaded: β/2 + δ/2 = 90°.'),
            ('conclude', 'The conclusion, frozen', 'The right angle at R.')],
    dragged_cap='After dragging P, frozen', dragged_txt='P slid to the right: the transversal leans the other way, still a right angle at R.',
    notes=[('given', 'Drag P or Q: the angle at R stays right.', 'the-statement', 'Learn more about the statement'),
           ('cointerior', 'Two angles on the same side, between the parallels.', 'co-interior-angles', 'Learn more about co-interior angles'),
           ('halves', 'Each bisector halves its angle.', 'the-two-halves', 'Learn more about the halves'),
           ('add', 'Half of 180° is 90°.', 'adding-the-halves', 'Learn more about adding the halves'),
           ('conclude', 'Drag P or Q: the readout keeps ∠PRQ = 90°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $P$ or $Q$ along its line, or $A$, $B$ or $C$ to move the lines; the readout under the canvas shows $\\beta$, $\\delta$ and the angle at $R$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['CO-INTERIOR\nNext → : β + δ = 180°.',
               'HALVES\nThe bisectors cut β and δ in half.',
               'ADD\nβ/2 + δ/2 = 90°.',
               'RIGHT ANGLE\nThe third angle of PQR is 90°.'],
    demo_drag_say='DRAG P\nSlide P: the transversal tilts, the angle at R stays right.',
    drag_desc='P and Q slide along their lines, A, B and C move the lines; the hollow point R follows',
    readout_desc='the line under the figure: β, δ and the angle at R, live while you drag',
    p3top='120px', p3left='calc(25% + 40px)',
    frame2=[('The bisectors PR and QR', 'meeting at R between the parallels', '163px', 'calc(25% + 65px)'),
            ('The triangle PQR', 'shaded, with β/2 at P and δ/2 at Q', '183px', 'calc(25% - 95px)'),
            ('The right angle', 'the square mark at R', '200px', 'calc(25% + 58px)'),
            ('Justification tags', 'Given, Co-interior angles, Angle bisector, Adding, Angle sum', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the transversal and the lines are moved by dragging and R follows.',
    input_rows=[['$P$, $Q$', 'solid dot', 'slide along their lines; the transversal tilts'],
                ['$A$, $B$, $C$', 'solid dot', 'move or tilt the lines; $D$ keeps the second line parallel to the first'],
                ['$R$', 'hollow dot', 'cannot be dragged: where the two bisectors cross'],
                ['a co-interior angle under $60°$ or over $120°$, the lines too steep or too close, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $P$, $Q$, $R$',
    measures_desc="write each marked angle's size in degrees beside its arc: β, δ and the four halves",
    readout_short='β, δ and the angle at R', tags='**Given**, **Co-interior angles**, **Angle bisector**, **Adding**, **Angle sum**',
    beh1='The readout is a check, not a step of the proof. The argument uses co-interior angles and the angle sum, never the numbers, which is why the angle at R is right for every position you drag.',
    beh2t='R is found, not placed', beh2='R is computed as the crossing of the two bisectors; the player never makes the angle there right, so the 90° in the readout is a real check.',
)]
