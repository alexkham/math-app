# Content for page 51, the bisectors of a linear pair, read by geo-view-42-45.py (argument geo_pages_51)
PAGES = [dict(
    slug='linear-pair-bisectors', prev='isosceles-trapezoid', prev_h1='Isosceles Trapezoid', prev_key='isoscelesTrapezoid', prev_dragged='draggedIsoTrapezoid',
    key='linearPairBisectors', dragged='draggedLinearPair', dragged_comment='C leaned to the left: a bigger α and a smaller β, the bisectors still at a right angle',
    dragged_expr="{ ...PROOFS.linearPairBisectors.model, points: { ...PROOFS.linearPairBisectors.model.points, C: { x: 200, y: 130 } } }",
    demo_drag="{ drag: '[data-handle=\"C\"]', dx: -22, dy: 4, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Bisectors of a Linear Pair Are Perpendicular | Proof Step by Step',
    desc='Watch the proof that the bisectors of a linear pair of angles are perpendicular: half of a straight angle is a right angle, step by step. Then drag the ray and the point on the line.',
    h1='Bisectors of a Linear Pair', name='Bisectors of a Linear Pair Proof',
    appdesc='Step-by-step interactive proof that the bisectors of two adjacent angles on a straight line are perpendicular, with a draggable ray and a draggable vertex on the line.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="60" x2="74" y2="60" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="60" x2="56" y2="14" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="60" x2="8" y2="30" stroke="#FAC775" stroke-width="1.6"/><line x1="40" y1="60" x2="74" y2="36" stroke="#FAC775" stroke-width="1.6"/><polyline points="33,54 40,48 47,54" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">90°</text></svg>',
    keywords=['linear pair', 'angle bisectors perpendicular', 'bisectors of a linear pair', 'adjacent angles on a straight line', 'supplementary angles', 'right angle proof', 'angle bisector', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'linear', 'halves', 'add', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $C$ to change the two angles, or slide $O$ along the line, and watch the angle between the two bisectors in the readout stay at $90°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Two angles form a linear pair when they share one arm and their other arms lie along one straight line, on either side of the common arm. In the player the ray $OC$ stands on the line $AB$ at $O$, and $\\alpha = \\angle AOC$ and $\\beta = \\angle COB$ are a linear pair. The theorem says that their bisectors are perpendicular:

$$\\angle POQ = 90°$$

where $OP$ bisects $\\alpha$ and $OQ$ bisects $\\beta$. It is a two-line proof, and it is the reason behind several facts about triangles and circles: the internal and external bisectors at a vertex of a triangle are perpendicular, which is where the [excentres](!/geometry/visual-tools/incentre) and some right-angle constructions come from.

$C$, $A$ and $B$ are free and $O$ slides along the line; the readout shows $\\alpha$, $\\beta$ and the angle between the bisectors."""),
        ('A Straight Angle', r"""The angles $\\alpha$ and $\\beta$ sit side by side along the line $AB$ and together fill the straight angle $AOB$, so they are supplementary:

$$\\alpha + \\beta = 180°$$

This is the same fact that drives the [vertical angles](!/geometry/visual-tools/vertical-angles) page, where two linear pairs share an angle."""),
        ('The Two Halves', r"""The bisector $OP$ cuts $\\alpha$ into two equal parts, $\\angle AOP = \\angle POC = \\alpha/2$, and the bisector $OQ$ cuts $\\beta$ into $\\angle COQ = \\angle QOB = \\beta/2$. The angle between the two bisectors is made of the two halves that touch the common arm $OC$:

$$\\angle POQ = \\angle POC + \\angle COQ = \\frac{\\alpha}{2} + \\frac{\\beta}{2}$$"""),
        ('Adding the Halves', r"""Half of $\\alpha$ plus half of $\\beta$ is half of their sum:

$$\\angle POQ = \\frac{\\alpha}{2} + \\frac{\\beta}{2} = \\frac{\\alpha + \\beta}{2}$$

The two angles may be anything; only their sum enters, and the sum is fixed by the straight line."""),
        ('Why It Holds', r"""Put in $\\alpha + \\beta = 180°$:

$$\\angle POQ = \\frac{180°}{2} = 90°$$

The bisectors of a linear pair are perpendicular, whatever the two angles are. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a straight angle, the bisectors, an addition and a substitution.

In words: halving two angles halves their sum, and half of a straight angle is a right angle."""),
        ('Dragging the Figure', r"""Drag $C$: the ray $OC$ swings, $\\alpha$ grows as $\\beta$ shrinks (or the other way round), both bisectors turn, and the angle between them in the readout stays at $90°$. Slide $O$ along the line, or drag $A$ or $B$, to change the picture without changing the argument.

The player keeps $C$ above the line and both angles at least $20°$, so that all the marked angles stay readable, and keeps the bisector rays inside the frame. A drag that would break one of these is refused."""),
        ('Consequences', r"""• **Internal and external bisectors.** At a vertex of a triangle the interior angle and its exterior angle are a linear pair, so the internal and external bisectors are perpendicular; the [incentre](!/geometry/visual-tools/incentre) and the three excentres form a triangle whose altitudes are the internal bisectors.
• **Perpendicular lines from any angle.** To draw a perpendicular at a point of a line without a set square, draw any ray there and bisect the two angles it makes; either bisector is perpendicular to the other.
• **The angle bisectors of a parallelogram.** The bisectors of two consecutive angles of a parallelogram meet at a right angle, because consecutive angles are supplementary, like a linear pair.
• **Vertical angles.** The bisectors of two vertical angles lie on one line, since each makes equal angles with the bisector of the adjacent angle between them, by this theorem.
• **Supplementary angles in general.** The proof never used that the two angles are adjacent, only that they add up to $180°$: any two supplementary angles with a common arm have perpendicular bisectors."""),
    ],
    order=[('the-statement', 'given'), ('a-straight-angle', 'linear'), ('the-two-halves', 'halves'), ('adding-the-halves', 'add'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is a linear pair of angles?', 'Two adjacent angles whose non-common arms lie along one straight line. They always add up to 180°.'),
        ('Why are the bisectors of a linear pair perpendicular?', 'The two angles add up to 180°. Each bisector halves its angle, so the angle between the bisectors is half of one plus half of the other, that is half of 180°, which is 90°.'),
        ('Does the result hold for any two supplementary angles?', 'Yes, as long as they share an arm: the proof only uses that the two angles add up to 180°, so the bisectors of any two adjacent supplementary angles are perpendicular.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The ray OC on the line AB; α and β a linear pair; the bisectors OP and OQ.'),
            ('linear', 'A straight angle, frozen', 'α and β lit: together they fill the straight angle AOB.'),
            ('halves', 'The two halves, frozen', 'α/2 twice and β/2 twice; the two halves next to OC make ∠POQ.'),
            ('add', 'Adding the halves, frozen', '∠POQ = α/2 + β/2 = (α + β)/2.'),
            ('conclude', 'The conclusion, frozen', 'Half of 180° is 90°: the square mark between the bisectors.')],
    dragged_cap='After dragging C, frozen', dragged_txt='C leaned to the left: α larger, β smaller, the bisectors still perpendicular.',
    notes=[('given', 'Drag C: the bisectors turn, the angle between them does not.', 'the-statement', 'Learn more about the statement'),
           ('linear', 'Two angles along a line: 180°.', 'a-straight-angle', 'Learn more about the straight angle'),
           ('halves', 'Each bisector halves its angle.', 'the-two-halves', 'Learn more about the halves'),
           ('add', 'Half of α plus half of β is half of the sum.', 'adding-the-halves', 'Learn more about adding the halves'),
           ('conclude', 'Drag C: the readout keeps ∠POQ = 90°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $C$ to change the two angles, slide $O$ along the line, or drag $A$ or $B$; the readout under the canvas shows $\\alpha$, $\\beta$ and the angle between the bisectors. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['STRAIGHT ANGLE\nNext → : α and β fill the straight angle AOB: α + β = 180°.',
               'HALVES\nOP halves α, OQ halves β; ∠POQ is α/2 + β/2.',
               'ADD\nα/2 + β/2 = (α + β)/2.',
               'SUBSTITUTE\n(α + β)/2 = 90°: the bisectors are perpendicular.'],
    demo_drag_say='DRAG C\nSwing the ray: α and β change, ∠POQ stays 90°.',
    drag_desc='C moves freely and sets the two angles, O slides along the line, A and B move its ends; the hollow points P and Q follow on the bisectors',
    readout_desc='the line under the figure: α, β and the angle between the bisectors, live while you drag',
    p3top='96px', p3left='calc(25% + 70px)',
    frame2=[('The two bisectors', 'OP halves α, OQ halves β; the square mark between them is the right angle', '96px', 'calc(25% - 110px)'),
            ('The halves', 'α/2 twice and β/2 twice around O, inside the larger arcs of α and β', '200px', 'calc(25% + 60px)'),
            ('The straight angle', 'the line AB through O: α and β together make 180°', '290px', 'calc(25% - 150px)'),
            ('Justification tags', 'Given, Straight angle, Bisectors, Adding, Substituting', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the ray and the line are placed by dragging and the bisectors follow.',
    input_rows=[['$C$', 'solid dot', 'moves freely; the ray $OC$ swings and both bisectors turn with it'],
                ['$O$', 'solid dot', 'slides along the line $AB$'],
                ['$A$, $B$', 'solid dot', 'move the ends of the line'],
                ['$P$, $Q$', 'hollow dot', 'cannot be dragged: on the bisectors of $\\alpha$ and $\\beta$'],
                ['$C$ below the line, an angle under $20°$, or a point out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $O$, $P$, $Q$',
    measures_desc="write each marked angle's size in degrees beside its arc: α, β and the four halves",
    readout_short='the two angles and the angle between the bisectors', tags='**Given**, **Straight angle**, **Bisectors**, **Adding**, **Substituting**',
    beh1='The readout is a check, not a step of the proof. The argument uses only that the two angles add up to 180° and that a bisector halves an angle, never the numbers.',
    beh2t='The bisectors are computed', beh2='P and Q lie on the bisectors of the two angles, placed at a fixed distance from O so the rays stay the same length while you drag; the player recomputes them at every move.',
)]
