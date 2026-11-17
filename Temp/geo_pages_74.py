# Content for page 74, the angle bisectors of a parallelogram enclose a rectangle, read by geo-view-42-45.py (argument geo_pages_74)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='parallelogram-bisectors', prev='pentagram-angles', prev_h1='The Angles of a Pentagram', prev_key='pentagramAngles', prev_dragged='draggedPentagramAngles',
    key='parallelogramBisectors', dragged='draggedParallelogramBisectors', dragged_comment='D moved to the left: a new parallelogram, still four right angles in PQRS',
    dragged_expr="{ ...PROOFS.parallelogramBisectors.model, points: { ...PROOFS.parallelogramBisectors.model.points, D: { x: 175, y: 172 } } }",
    demo_drag="{ drag: '[data-handle=\"D\"]', dx: -8, dy: 0, ms: 1400 },",
    subCategory='Quadrilateral',
    title='Angle Bisectors of a Parallelogram Form a Rectangle | Proof Step by Step',
    desc='Watch the proof that the four angle bisectors of a parallelogram enclose a rectangle, by co-interior angles and the angle sum of a triangle, step by step. Then drag the parallelogram.',
    h1='Angle Bisectors of a Parallelogram', name='Parallelogram Bisectors Proof',
    appdesc='Step-by-step interactive proof that the angle bisectors of a parallelogram meet in four right angles and enclose a rectangle, with draggable vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="6,60 54,60 74,24 26,24" fill="#85B7EB" fill-opacity="0.25" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="44,30 50,40 36,50 30,40" fill="#FAC775" fill-opacity="0.5" stroke="#FAC775" stroke-width="1.2"/><line x1="6" y1="60" x2="44" y2="30" stroke="#E6F1FB" stroke-width="1"/><line x1="54" y1="60" x2="44" y2="30" stroke="#E6F1FB" stroke-width="1"/><line x1="74" y1="24" x2="36" y2="50" stroke="#E6F1FB" stroke-width="1"/><line x1="26" y1="24" x2="36" y2="50" stroke="#E6F1FB" stroke-width="1"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">four right angles</text></svg>',
    keywords=['angle bisectors of a parallelogram', 'parallelogram angle bisectors form a rectangle', 'bisectors of parallelogram rectangle proof', 'co-interior angles', 'parallelogram angles', 'rectangle', 'quadrilateral', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'cointerior', 'halves', 'right', 'others', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$, $B$ or $D$ to change the parallelogram and watch the four angles of $PQRS$ in the readout stay at $90°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Let $ABCD$ be a parallelogram, with $AB \\parallel DC$ and $AD \\parallel BC$. Draw the bisectors of its four angles. Neighbouring bisectors cross at four points: $P$ (from $A$ and $B$), $Q$ (from $B$ and $C$), $R$ (from $C$ and $D$) and $S$ (from $D$ and $A$). The theorem says

$$PQRS \\text{ is a rectangle}$$

It is the [bisectors of co-interior angles](!/geometry/visual-tools/cointerior-bisectors) theorem used four times, once for each pair of neighbouring angles.

In the player $A$, $B$ and $D$ are free and $C$ is placed so that $ABCD$ stays a parallelogram; the four crossings are computed, and the readout shows the four angles of $PQRS$."""),
        ('Neighbouring Angles', r"""The sides $AD$ and $BC$ are parallel and $AB$ crosses both, so the angles $\\alpha$ at $A$ and $\\beta$ at $B$ lie between the parallels on the same side of $AB$. By the [parallel lines](!/geometry/visual-tools/parallel-lines) theorem they are co-interior angles:

$$\\alpha + \\beta = 180°$$

the same fact as on the [angles of a parallelogram](!/geometry/visual-tools/parallelogram-angles) page."""),
        ('The Two Halves', r"""The bisector $AP$ halves $\\alpha$ and $BP$ halves $\\beta$, so the triangle $ABP$ has the angles

$$\\angle PAB = \\frac{\\alpha}{2}, \\qquad \\angle PBA = \\frac{\\beta}{2}, \\qquad \\frac{\\alpha}{2} + \\frac{\\beta}{2} = 90°$$"""),
        ('The Right Angle at P', r"""The [angles of a triangle](!/geometry/visual-tools/triangle-angle-sum) add up to $180°$, so the third angle of $ABP$ is

$$\\angle APB = 180° - 90° = 90°$$

At $P$ the sides of $PQRS$ run along $PA$ (through $S$) and $PB$ (through $Q$), so this is the angle of $PQRS$ at $P$."""),
        ('The Other Three Corners', r"""Every two neighbouring angles of a parallelogram are co-interior: $B$ and $C$ along $BC$, $C$ and $D$ along $CD$, $D$ and $A$ along $DA$. The same argument gives a right angle where each pair of neighbouring bisectors cross:

$$\\angle BQC = \\angle CRD = \\angle DSA = 90°$$

At $R$ this is the angle of $PQRS$ directly. At $Q$ and $S$ the sides of $PQRS$ run the other way along the bisectors, so the angle of $PQRS$ there is the [vertical angle](!/geometry/visual-tools/vertical-angles), also $90°$."""),
        ('Why It Holds', r"""The quadrilateral $PQRS$ has four right angles, so it is a rectangle:

$$\\angle P = \\angle Q = \\angle R = \\angle S = 90°$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, co-interior angles, the angle bisector, the angle sum of a triangle, the same argument at the other corners and the definition of a rectangle."""),
        ('Dragging the Figure', r"""Drag $A$, $B$ or $D$: the parallelogram changes and $C$ follows, keeping the opposite sides parallel. The bisectors move with it and the readout keeps all four angles of $PQRS$ at $90°$; the rectangle changes its size and shape.

The player keeps the long side at least $1.45$ times the short side, $P$ and $R$ far enough from the sides $DC$ and $AB$ for their names, the angle at $A$ between $55°$ and $115°$ and the figure in the frame. Closer to a rhombus the rectangle shrinks towards a point; with the long side more than twice the short one its corners leave the parallelogram. A drag that would break one of these is refused."""),
        ('Consequences', r"""• **The diagonals of PQRS.** The diagonal $QS$ is parallel to $AB$ and $PR$ is parallel to $AD$, and both have the length $AB - AD$, the difference of two neighbouring sides.
• **A rhombus.** When $AB = AD$ the four bisectors are the two diagonals and meet in one point, so the rectangle shrinks to the centre, as on the [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) page.
• **A rectangle.** For a rectangle $ABCD$ the bisectors make $45°$ with the sides, and $PQRS$ is a square.
• **Any quadrilateral.** In any convex quadrilateral the four angle bisectors enclose a quadrilateral whose opposite angles add up to $180°$, a [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral); the parallelogram is the case where every angle of it is $90°$.
• **Equal distances.** Every point of the bisector from $A$ is equally far from $AB$ and $AD$, by the [angle bisector locus](!/geometry/visual-tools/angle-bisector-locus); so $P$ is equally far from $AD$, $AB$ and $BC$."""),
    ],
    order=[('the-statement', 'given'), ('neighbouring-angles', 'cointerior'), ('the-two-halves', 'halves'), ('the-right-angle-at-p', 'right'), ('the-other-three-corners', 'others'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What shape do the angle bisectors of a parallelogram form?', 'A rectangle. The four bisectors cross in four points, and the quadrilateral with those corners has four right angles.'),
        ('Why do the bisectors of two neighbouring angles of a parallelogram meet at a right angle?', 'Neighbouring angles of a parallelogram add up to 180°, so their halves add up to 90°. The halves are two angles of the triangle formed by the side and the two bisectors, so its third angle is 90°.'),
        ('When do the bisectors of a parallelogram form a square or a single point?', 'For a rectangle the bisectors enclose a square; for a rhombus they all pass through the centre, so the rectangle shrinks to a point.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The parallelogram ABCD with its four angle bisectors.'),
            ('cointerior', 'Neighbouring angles, frozen', 'α at A and β at B, adding up to 180°.'),
            ('halves', 'The two halves, frozen', 'α/2 at A and β/2 at B in the triangle ABP.'),
            ('right', 'The right angle at P, frozen', 'ABP shaded: the right angle at P.'),
            ('others', 'The other three corners, frozen', 'Right angles at Q, R and S.'),
            ('conclude', 'The conclusion, frozen', 'PQRS shaded: a rectangle.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D moved to the left: a new parallelogram, still four right angles in PQRS.',
    notes=[('given', 'Drag A, B or D: PQRS keeps its right angles.', 'the-statement', 'Learn more about the statement'),
           ('cointerior', 'Two angles on the same side between parallels.', 'neighbouring-angles', 'Learn more about neighbouring angles'),
           ('halves', 'Half of 180° is 90°.', 'the-two-halves', 'Learn more about the halves'),
           ('right', 'The third angle of ABP.', 'the-right-angle-at-p', 'Learn more about the right angle at P'),
           ('others', 'The same at every pair of neighbours.', 'the-other-three-corners', 'Learn more about the other corners'),
           ('conclude', 'Drag A, B or D: the readout keeps four 90° angles.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$ or $D$ to change the parallelogram; the readout under the canvas shows the four angles of $PQRS$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['NEIGHBOURS\nNext → : α + β = 180°.',
               'HALVES\nThe bisectors halve α and β: α/2 + β/2 = 90°.',
               'RIGHT ANGLE\nThe third angle of ABP is 90°.',
               'ALL FOUR\nThe same at Q, R and S.',
               'CONCLUDE\nPQRS is a rectangle.'],
    demo_drag_say='DRAG D\nChange the parallelogram: PQRS stays a rectangle.',
    drag_desc='A, B and D move the parallelogram; C follows so that the opposite sides stay parallel, and the hollow points P, Q, R, S follow',
    readout_desc='the line under the figure: the four angles of PQRS, live while you drag',
    p3top='110px', p3left='calc(25% - 80px)',
    frame2=[('The crossing P', 'where the bisectors from A and B meet', '152px', 'calc(25% + 24px)'),
            ('The triangle ABP', 'shaded, with α/2 at A and β/2 at B', '218px', 'calc(25% - 5px)'),
            ('The rectangle PQRS', 'with a right-angle mark at each corner', '178px', 'calc(25% - 20px)'),
            ('Justification tags', 'Given, Co-interior angles, Angle bisector, Angle sum, Same argument, Definition of a rectangle', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the parallelogram is shaped by dragging three of its vertices.',
    input_rows=[['$A$, $B$, $D$', 'solid dot', 'move the parallelogram'],
                ['$C$', 'hollow dot', 'cannot be dragged: $D$ moved by $AB$, so $ABCD$ stays a parallelogram'],
                ['$P$, $Q$, $R$, $S$', 'hollow dot', 'cannot be dragged: where neighbouring bisectors cross'],
                ['sides too close to equal, $P$ or $R$ too close to a side, the angle at $A$ outside $55°$ to $115°$, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $P$, $Q$, $R$, $S$',
    measures_desc="write each marked angle's size in degrees beside its arc: α, β, α/2 and β/2",
    readout_short='the four angles of PQRS', tags='**Given**, **Co-interior angles**, **Angle bisector**, **Angle sum**, **Same argument**, **Definition of a rectangle**',
    beh1='The readout is a check, not a step of the proof. The argument uses co-interior angles and the angle sum, never the numbers, which is why the four angles are right for every parallelogram you drag.',
    beh2t='The crossings are computed', beh2='P, Q, R and S are found where the computed bisectors cross; the player never makes their angles right, so the four 90° in the readout are a real check.',
)]
