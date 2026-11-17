# Content for page 86, the angle at a bend between two parallel lines, read by geo-view-42-45.py (argument geo_pages_86)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='angle-at-a-bend', prev='diagonals-bisect-converse', prev_h1='Diagonals That Bisect Each Other', prev_key='diagonalsBisectConverse', prev_dragged='draggedDiagonalsBisectConverse',
    key='parallelBend', dragged='draggedParallelBend', dragged_comment='E moved to the right: a sharper bend, still the sum of the two angles',
    dragged_expr="{ ...PROOFS.parallelBend.model, points: { ...PROOFS.parallelBend.model.points, E: { x: 280, y: 230 } } }",
    demo_drag="{ drag: '[data-handle=\"E\"]', dx: 12, dy: -8, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Angle at a Bend Between Parallel Lines | Proof Step by Step',
    desc='Watch the proof that the angle at a bend between two parallel lines equals the sum of the angles the two arms make with the parallels, by drawing a third parallel and using alternate angles, step by step. Then drag the bend and the lines.',
    h1='The Angle at a Bend Between Parallels', name='Angle at a Bend Proof',
    appdesc='Step-by-step interactive proof that for a point between two parallel lines the angle at the point equals the sum of the two alternate angles, with a draggable bend point and parallel lines.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="10" y1="16" x2="72" y2="16" stroke="#E6F1FB" stroke-width="1.4"/><line x1="10" y1="60" x2="72" y2="60" stroke="#E6F1FB" stroke-width="1.4"/><polyline points="14,16 40,38 16,60" fill="none" stroke="#FAC775" stroke-width="1.8"/><line x1="40" y1="38" x2="18" y2="38" stroke="#E6F1FB" stroke-width="1" stroke-dasharray="3 2"/><circle cx="40" cy="38" r="2" fill="#FAC775"/><text x="40" y="76" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">∠E = α + β</text></svg>',
    keywords=['angle between parallel lines point between', 'angle at a bend between parallel lines', 'zigzag angle parallel lines', 'parallel lines angle sum', 'alternate angles', 'auxiliary parallel line', 'lines and angles', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'parallel', 'top', 'bottom', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $E$ to change the bend, or $B$, $A$ or $D$ to move the lines, and watch the readout: the angle at $E$ always equals the sum of the two angles at $B$ and $D$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Two parallel rays $BA$ and $DC$ point the same way, and a point $E$ lies between them, on the same side as $A$ and $C$. The path from $B$ to $E$ to $D$ bends at $E$. Call the angles the two arms make with the parallels $\\alpha = \\angle ABE$ and $\\beta = \\angle CDE$. The theorem says

$$\\angle BED = \\alpha + \\beta$$

In the player $B$, $A$, $D$ and $E$ can be dragged; $C$ is computed so that $DC$ stays parallel to $BA$, and the readout shows $\\angle ABE + \\angle CDE$ and $\\angle BED$."""),
        ('A Third Parallel', r"""Draw the line $EF$ through $E$ parallel to $AB$, with $F$ on the side away from $A$ and $C$. Two lines parallel to the same line are parallel to each other, so

$$EF \\parallel AB \\parallel CD$$"""),
        ('The Upper Angle', r"""$BE$ crosses the parallels $AB$ and $EF$. The angles $\\angle ABE$ and $\\angle BEF$ lie on opposite sides of $BE$, between those parallels, so they are alternate angles, equal by the [parallel lines and a transversal](!/geometry/visual-tools/parallel-lines) theorem:

$$\\angle BEF = \\alpha$$"""),
        ('The Lower Angle', r"""In the same way $ED$ crosses the parallels $EF$ and $CD$, and the alternate angles are equal:

$$\\angle FED = \\beta$$"""),
        ('Why It Holds', r"""The ray $EF$ lies inside the angle $BED$ and splits it into two parts:

$$\\angle BED = \\angle BEF + \\angle FED = \\alpha + \\beta$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the parallel through a point, alternate angles (twice) and adding angles.

The helper line $EF$ is the whole idea: it carries each angle from the parallels to the bend."""),
        ('Dragging the Figure', r"""Drag $E$ up, down, left or right between the lines: $\\alpha$ and $\\beta$ change, and the readout keeps the angle at $E$ equal to their sum. Drag $B$ or $A$ to turn the upper line, or $D$ to move the lower one; $C$ follows so that the lines stay parallel.

The player keeps the lines long, nearly level and apart, keeps $E$ well between them and to the side of $A$ and $C$, keeps $\\alpha$ and $\\beta$ between $25°$ and $75°$ so that their marks stay readable, and keeps the figure in the frame; a drag that would break one of these is refused."""),
        ('Consequences', r"""• **A second proof.** Extend $BE$ until it meets the line $CD$ at $G$. The angle at $E$ is an exterior angle of the triangle $EGD$, so it equals the angle at $G$, which is $\\alpha$ by alternate angles, plus the angle at $D$, which is $\\beta$, as on the [exterior angle](!/geometry/visual-tools/exterior-angle) page.
• **Bending the other way.** If $E$ lies on the side away from $A$ and $C$, the three angles at $B$, $E$ and $D$ add up to $360°$ instead, because the same helper line now meets co-interior angles.
• **A right-angled bend.** The bend is a right angle exactly when $\\alpha + \\beta = 90°$; the [bisectors of co-interior angles](!/geometry/visual-tools/cointerior-bisectors) are an example, with $\\alpha$ and $\\beta$ the halves of two angles that add up to $180°$.
• **Zigzags.** For a path with several bends between two parallels, the angles at the bends pointing one way add up to the angles pointing the other way, by drawing a parallel through every bend."""),
    ],
    order=[('the-statement', 'given'), ('a-third-parallel', 'parallel'), ('the-upper-angle', 'top'), ('the-lower-angle', 'bottom'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the angle at a bend between two parallel lines?', 'If a point lies between two parallel lines and is joined to a point on each, the angle at the point equals the sum of the two angles the joining segments make with the parallels, measured on the same side.'),
        ('How is it proved?', 'Draw a line through the bend parallel to the two lines. It splits the angle at the bend into two parts, and each part equals one of the angles at the parallels, because they are alternate angles.'),
        ('What if the point is on the other side?', 'Then the angle at the point and the two angles at the parallels add up to 360°, because the helper line meets co-interior angles instead of alternate ones.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The parallels AB and CD and the bend at E, with α and β.'),
            ('parallel', 'A third parallel, frozen', 'EF through E, parallel to both.'),
            ('top', 'The upper angle, frozen', '∠BEF = α.'),
            ('bottom', 'The lower angle, frozen', '∠FED = β.'),
            ('conclude', 'The conclusion, frozen', '∠BED = α + β.')],
    dragged_cap='After dragging E, frozen', dragged_txt='E moved to the right: a sharper bend, still the sum of the two angles.',
    notes=[('given', 'Drag E: the angle at E stays α + β.', 'the-statement', 'Learn more about the statement'),
           ('parallel', 'A helper line through the bend.', 'a-third-parallel', 'Learn more about the third parallel'),
           ('top', 'Alternate angles at the upper line.', 'the-upper-angle', 'Learn more about the upper angle'),
           ('bottom', 'Alternate angles at the lower line.', 'the-lower-angle', 'Learn more about the lower angle'),
           ('conclude', 'Drag E: the readout keeps the two sides equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $E$ to change the bend, or $B$, $A$ or $D$ to move the lines; the readout under the canvas shows $\\angle ABE + \\angle CDE$ and $\\angle BED$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['PARALLEL\nNext → : a helper line EF through E, parallel to both.',
               'UPPER\nAlternate angles: ∠BEF = α.',
               'LOWER\nAlternate angles: ∠FED = β.',
               'CONCLUDE\n∠BED = α + β.'],
    demo_drag_say='DRAG E\nMove the bend: the angle at E stays α + β.',
    drag_desc='E moves the bend, B and A turn the upper line and D moves the lower one; the hollow points C and F follow',
    readout_desc='the line under the figure: ∠ABE + ∠CDE and ∠BED, live while you drag',
    p3top='150px', p3left='calc(25% - 40px)',
    frame2=[('The helper line EF', 'dashed, parallel to AB and CD', '177px', 'calc(25% - 96px)'),
            ('The angles α', 'at B and at E, alternate angles', '122px', 'calc(25% - 46px)'),
            ('The angles β', 'at D and at E, alternate angles', '242px', 'calc(25% - 36px)'),
            ('Justification tags', 'Given, Parallel through a point, Alternate angles, Adding angles', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the bend and the lines are moved by dragging.',
    input_rows=[['$E$', 'solid dot', 'moves the bend between the lines'],
                ['$B$, $A$', 'solid dot', 'move and turn the upper line'],
                ['$D$', 'solid dot', 'moves the lower line, which stays parallel'],
                ['$C$, $F$', 'hollow dot', 'cannot be dragged: $C$ keeps $DC$ parallel to $BA$, $F$ is on the helper line'],
                ['$E$ too close to a line or to the ends, $\\alpha$ or $\\beta$ under $25°$ or over $75°$, lines too short, steep or close, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$ to $F$',
    measures_desc="write each marked angle's size in degrees beside its arc: α twice and β twice",
    readout_short='∠ABE + ∠CDE and ∠BED', tags='**Given**, **Parallel through a point**, **Alternate angles**, **Adding angles**',
    beh1='The readout is a check, not a step of the proof. The argument uses alternate angles, never the numbers, which is why the two values agree for every position you drag.',
    beh2t='The angles are measured', beh2='The three angles in the readout are measured from the positions of the points; nothing makes the angle at E equal the sum, so the agreement in the readout is a real check.',
)]
