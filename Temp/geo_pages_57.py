# Content for page 57, the angles of a parallelogram, read by geo-view-42-45.py (argument geo_pages_57)
PAGES = [dict(
    slug='parallelogram-angles', prev='simson-line', prev_h1='Simson Line', prev_key='simsonLine', prev_dragged='draggedSimson',
    key='parallelogramAngles', dragged='draggedParallelogramAngles', dragged_comment='D moved to the right: sharper angles at A and C, the opposite angles still equal',
    dragged_expr="{ ...PROOFS.parallelogramAngles.model, points: { ...PROOFS.parallelogramAngles.model.points, D: { x: 260, y: 140 } } }",
    demo_drag="{ drag: '[data-handle=\"D\"]', dx: 16, dy: 0, ms: 1400 },",
    subCategory='Quadrilateral',
    title='Parallelogram Angles Proof | Opposite Angles Equal, Neighbours 180° Step by Step',
    desc='Watch the proof that the opposite angles of a parallelogram are equal and its neighbouring angles add up to 180°, by co-interior angles on the parallel sides, step by step. Then drag the vertices.',
    h1='Angles of a Parallelogram', name='Parallelogram Angles Proof',
    appdesc='Step-by-step interactive proof that a parallelogram has equal opposite angles and supplementary neighbouring angles, by co-interior angles on parallel lines, with draggable vertices.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><polygon points="8,62 52,62 72,20 28,20" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><path d="M20,62 A12,12 0 0 0 14,51" fill="none" stroke="#FAC775" stroke-width="1.6"/><path d="M60,20 A12,12 0 0 0 66,31" fill="none" stroke="#FAC775" stroke-width="1.6"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">α = γ</text></svg>',
    keywords=['parallelogram angles', 'opposite angles of a parallelogram', 'consecutive angles supplementary', 'co-interior angles', 'parallelogram properties', 'same-side interior angles', 'quadrilateral angles', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'first', 'second', 'opposite', 'third', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $A$, $B$ or $D$ ($C$ follows so the figure stays a parallelogram) and watch the four angles in the readout: opposite ones stay equal and neighbours keep adding up to $180°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""In a parallelogram $ABCD$, with $AB \\parallel DC$ and $AD \\parallel BC$, call the angles $\\alpha$ at $A$, $\\beta$ at $B$, $\\gamma$ at $C$ and $\\delta$ at $D$. The theorem has two parts:

$$\\alpha + \\beta = \\beta + \\gamma = \\gamma + \\delta = \\delta + \\alpha = 180°, \\qquad \\alpha = \\gamma, \\quad \\beta = \\delta$$

neighbouring angles are supplementary, and opposite angles are equal. It completes the picture of the [opposite sides](!/geometry/visual-tools/parallelogram-sides) and the [diagonals](!/geometry/visual-tools/parallelogram-diagonals) pages: a parallelogram has equal opposite sides, equal opposite angles, and diagonals that bisect each other.

The whole proof is one fact used three times, the co-interior angles of the [parallel lines](!/geometry/visual-tools/parallel-lines) page. In the player $A$, $B$, $D$ are free and $C$ is placed so that the figure stays a parallelogram; the readout shows the four angles and the sum of two neighbours."""),
        ('The First Pair of Neighbours', r"""The side $AB$ crosses the two parallel sides $AD$ and $BC$; it is a transversal of them. The angles $\\alpha$ at $A$ and $\\beta$ at $B$ both lie between the parallels and on the same side of $AB$: they are co-interior angles (also called same-side interior angles). On parallel lines co-interior angles add up to $180°$:

$$\\alpha + \\beta = 180°$$"""),
        ('The Second Pair of Neighbours', r"""Now take $BC$ as the transversal, crossing the other pair of parallels, $AB$ and $DC$. The angles $\\beta$ at $B$ and $\\gamma$ at $C$ are co-interior between them:

$$\\beta + \\gamma = 180°$$"""),
        ('The First Pair of Opposites', r"""The angles $\\alpha$ and $\\gamma$ both make $180°$ with the same angle $\\beta$:

$$\\alpha = 180° - \\beta = \\gamma$$

so the opposite angles at $A$ and $C$ are equal."""),
        ('The Third Pair of Neighbours', r"""The side $CD$ crosses $AD$ and $BC$, so $\\gamma$ and $\\delta$ are co-interior: $\\gamma + \\delta = 180°$. Then

$$\\delta = 180° - \\gamma = \\beta$$

and the opposite angles at $B$ and $D$ are equal too. The fourth pair, $\\delta + \\alpha = 180°$, follows from the others, or from $DA$ as a transversal."""),
        ('Why It Holds', r"""Every side of a parallelogram is a transversal of the other two sides, which are parallel, so the angles at its two ends are co-interior and add up to $180°$. Going round the figure, each angle is the supplement of both its neighbours, and two angles with the same supplement are equal:

$$\\alpha = \\gamma, \\qquad \\beta = \\delta, \\qquad \\alpha + \\beta = 180°$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, co-interior angles three times, a subtraction, and combining. As a check, the four angles add up to $2(\\alpha + \\beta) = 360°$, the [angle sum of a quadrilateral](!/geometry/visual-tools/polygon-angle-sum)."""),
        ('Dragging the Figure', r"""Drag $A$, $B$ or $D$: the parallelogram leans and stretches, $C$ moves so that both pairs of opposite sides stay parallel, and the readout shows the angles at $A$ and $C$ staying equal, the angles at $B$ and $D$ staying equal, and $\\alpha + \\beta$ staying at $180°$. Make the figure a rectangle and all four angles become $90°$.

The player keeps the parallelogram convex, with sides long enough for the angle marks and every angle between $25°$ and $155°$; a drag that would flatten it or carry a vertex out of the frame is refused."""),
        ('Consequences', r"""• **Rectangles.** If one angle of a parallelogram is right, all four are: its neighbours are $180° - 90°$ and its opposite equals it. That is why a parallelogram with one right angle is a rectangle, the starting point of the [rectangle diagonals](!/geometry/visual-tools/rectangle-diagonals) page.
• **The converse.** A quadrilateral with both pairs of opposite angles equal is a parallelogram: the angles add up to $360°$, so $\\alpha + \\beta = 180°$, and equal co-interior sums make the sides parallel.
• **Angle bisectors.** The bisectors of two neighbouring angles meet at a right angle, since half of $180°$ is $90°$, as for the [bisectors of a linear pair](!/geometry/visual-tools/linear-pair-bisectors); the four bisectors of a parallelogram enclose a rectangle.
• **Rhombus and kite.** In a rhombus each diagonal bisects the angles at its ends, and the equal opposite angles are split into equal halves; the [rhombus diagonals](!/geometry/visual-tools/rhombus-diagonals) page shows the diagonals are perpendicular.
• **Cyclic parallelograms.** A parallelogram is [cyclic](!/geometry/visual-tools/cyclic-quadrilateral) only if its opposite angles add up to $180°$; equal and supplementary means $90°$ each, so the only cyclic parallelograms are rectangles."""),
    ],
    order=[('the-statement', 'given'), ('the-first-pair-of-neighbours', 'first'), ('the-second-pair-of-neighbours', 'second'), ('the-first-pair-of-opposites', 'opposite'), ('the-third-pair-of-neighbours', 'third'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Are the opposite angles of a parallelogram equal?', 'Yes. Each side is a transversal of the other pair of parallel sides, so neighbouring angles add up to 180°; two opposite angles are supplements of the same neighbour, so they are equal.'),
        ('Why do neighbouring angles of a parallelogram add up to 180°?', 'The side joining them crosses two parallel sides, and the two angles at its ends are co-interior angles between those parallels; co-interior angles on parallel lines always add up to 180°.'),
        ('If one angle of a parallelogram is 70°, what are the others?', 'The opposite angle is also 70°, and the two neighbouring angles are 180° − 70° = 110° each.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The parallelogram with both pairs of parallel sides marked.'),
            ('first', 'The first pair of neighbours, frozen', 'α at A and β at B, co-interior along AB: α + β = 180°.'),
            ('second', 'The second pair of neighbours, frozen', 'β and γ, co-interior along BC: β + γ = 180°.'),
            ('opposite', 'The first pair of opposites, frozen', 'α and γ lit: both are 180° − β.'),
            ('third', 'The third pair of neighbours, frozen', 'γ + δ = 180° along CD, so δ = β.'),
            ('conclude', 'The conclusion, frozen', 'Opposite angles equal, neighbours supplementary.')],
    dragged_cap='After dragging D, frozen', dragged_txt='D moved to the right: sharper angles at A and C, the opposite angles still equal.',
    notes=[('given', 'Drag a vertex: C keeps the figure a parallelogram.', 'the-statement', 'Learn more about the statement'),
           ('first', 'AB crosses the parallels AD and BC.', 'the-first-pair-of-neighbours', 'Learn more about the first pair'),
           ('second', 'BC crosses the parallels AB and DC.', 'the-second-pair-of-neighbours', 'Learn more about the second pair'),
           ('opposite', 'Two supplements of the same angle.', 'the-first-pair-of-opposites', 'Learn more about the opposite angles'),
           ('third', 'CD crosses AD and BC: δ = β.', 'the-third-pair-of-neighbours', 'Learn more about the third pair'),
           ('conclude', 'Drag a vertex: the readout keeps the pattern.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$ or $D$ ($C$ follows); the readout under the canvas shows the four angles and the sum of two neighbours. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['NEIGHBOURS\nNext → : AB crosses the parallels AD and BC: α + β = 180°.',
               'NEXT PAIR\nBC crosses AB and DC: β + γ = 180°.',
               'OPPOSITES\nα and γ are both 180° − β: α = γ.',
               'THIRD PAIR\nγ + δ = 180°, so δ = β.',
               'CONCLUDE\nOpposite angles equal, neighbours add up to 180°.'],
    demo_drag_say='DRAG D\nLean the parallelogram: the pattern of angles stays.',
    drag_desc='A, B and D move freely; C follows so that both pairs of opposite sides stay parallel',
    readout_desc='the line under the figure: the four angles and the sum of two neighbours, live while you drag',
    p3top='150px', p3left='calc(25% - 70px)',
    frame2=[('The parallel sides', 'chevrons: one pair on AB and DC, two on AD and BC', '100px', 'calc(25% + 110px)'),
            ('The angles at A and C', 'α and γ, equal at the end', '236px', 'calc(25% - 100px)'),
            ('The angles at B and D', 'β and δ, equal at the end', '150px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Co-interior angles (three times), Subtracting, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the parallelogram is shaped by dragging and stays a parallelogram.',
    input_rows=[['$A$, $B$, $D$', 'solid dot', 'move freely; $C$ follows so that $DC \\parallel AB$ and $BC \\parallel AD$'],
                ['$C$', 'hollow dot', 'cannot be dragged: placed by the parallel sides'],
                ['a flattened figure, an angle under $25°$, or a vertex out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$',
    measures_desc="write each marked angle's size in degrees beside its arc: α, β, γ, δ",
    readout_short='the four angles and the sum of two neighbours', tags='**Given**, **Co-interior angles**, **Subtracting**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses only co-interior angles on parallel lines, never the numbers, which is why the pattern holds for every parallelogram you drag.',
    beh2t='The parallels are built in', beh2='C is placed at D + (B − A), which makes both pairs of opposite sides parallel whatever you drag; that is the hypothesis of the theorem, built into the figure.',
)]
