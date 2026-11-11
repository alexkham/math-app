# Content for page 53, angles around a point, read by geo-view-42-45.py (argument geo_pages_53)
PAGES = [dict(
    slug='angles-around-a-point', prev='equal-chords', prev_h1='Equal Chords and the Centre', prev_key='equalChords', prev_dragged='draggedEqualChords',
    key='anglesAroundPoint', dragged='draggedAroundPoint', dragged_comment='B swung down: α larger and β smaller, the four still adding to 360°',
    dragged_expr="{ ...PROOFS.anglesAroundPoint.model, points: { ...PROOFS.anglesAroundPoint.model.points, B: { x: 440, y: 240 } } }",
    demo_drag="{ drag: '[data-handle=\"B\"]', dx: 4, dy: 22, ms: 1400 },",
    subCategory='Lines and Angles',
    title='Angles Around a Point Add Up to 360° | Proof Step by Step',
    desc='Watch the proof that the angles around a point add up to 360°: one ray extended through the point cuts the full turn into two straight angles, step by step. Then drag the rays.',
    h1='Angles Around a Point', name='Angles Around a Point Proof',
    appdesc='Step-by-step interactive proof that the angles around a point make a full turn of 360°, by extending one ray into a line and adding two straight angles, with draggable rays.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="40" x2="40" y2="8" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="40" x2="72" y2="28" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="40" x2="62" y2="68" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="40" x2="10" y2="58" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="40" x2="40" y2="70" stroke="#FAC775" stroke-width="1.4" stroke-dasharray="3 2"/><circle cx="40" cy="40" r="14" fill="none" stroke="#FAC775" stroke-width="1.6"/><text x="40" y="79" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">360°</text></svg>',
    keywords=['angles around a point', 'angles at a point sum 360', 'full turn', 'angles round a point proof', 'straight angle', 'adjacent angles', 'angle facts', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'extend', 'upper', 'lower', 'add', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag any of the four rays round $O$ and watch the four angles change while their sum in the readout stays at $360°$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""Several rays from one point $O$ cut the plane around $O$ into angles, one between each pair of neighbouring rays. The theorem says that these angles make a full turn:

$$\\alpha + \\beta + \\gamma + \\delta = 360°$$

for the four rays in the player, and the same for any number of rays. It is the companion of the straight angle: two angles on a line make $180°$, the angles all the way round make twice that. Together with the [vertical angles](!/geometry/visual-tools/vertical-angles) and the [bisectors of a linear pair](!/geometry/visual-tools/linear-pair-bisectors) pages it covers the basic angle facts at a point.

The proof reduces the full turn to two straight angles by one construction. In the player $A$, $B$, $C$, $D$ and $O$ are free; the readout shows the four angles and their sum."""),
        ('Extending One Ray', r"""Pick one ray, $OA$, and continue it beyond $O$ to a point $A'$ (dashed). The three points $A$, $O$, $A'$ lie on one straight line, and that line passes through one of the four angles, $\\gamma$, cutting it into two parts:

$$\\gamma_1 = \\angle COA', \\qquad \\gamma_2 = \\angle A'OD, \\qquad \\gamma_1 + \\gamma_2 = \\gamma$$

Every other angle lies wholly on one side of the line."""),
        ('One Side of the Line', r"""Look at the side of the line $AA'$ that contains $B$ and $C$. Going round from the ray $OA$ to the ray $OA'$ one meets $\\alpha$, $\\beta$ and $\\gamma_1$ in turn, side by side; together they fill the straight angle $AOA'$:

$$\\alpha + \\beta + \\gamma_1 = 180°$$"""),
        ('The Other Side', r"""On the other side of the line, going round from $OA'$ back to $OA$, one meets $\\gamma_2$ and $\\delta$. They fill the other straight angle:

$$\\gamma_2 + \\delta = 180°$$

Two straight angles, one on each side of the line, and every piece of the full turn is in exactly one of them."""),
        ('Adding the Two Sides', r"""Add the two equations:

$$\\alpha + \\beta + \\gamma_1 + \\gamma_2 + \\delta = 180° + 180° = 360°$$

and put the two pieces of $\\gamma$ back together, $\\gamma_1 + \\gamma_2 = \\gamma$."""),
        ('Why It Holds', r"""The result is

$$\\alpha + \\beta + \\gamma + \\delta = 360°$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, two straight angles, an addition and a substitution. Nothing in the proof used the number of rays: with any rays from $O$, one ray extended to a line gives two straight angles, and the angles on each side fill one of them.

The one thing to check is that the extension $OA'$ really falls inside one of the angles and not along another ray; if it lands on a ray, the two straight angles are already made of whole angles and there is nothing to split."""),
        ('Dragging the Figure', r"""Drag $A$, $B$, $C$ or $D$ round $O$: two neighbouring angles change, one growing as the other shrinks, and the sum in the readout stays at $360°$. Drag $A$ and the dashed extension turns with it, cutting $\\gamma$ at a different place; drag $O$ to move the whole figure.

The player keeps the four rays in their order round $O$, every angle at least $18°$, and the extension of $OA$ inside the angle $\\gamma$ so that the proof reads as written. A drag that would swap two rays, close an angle or carry a point out of the frame is refused."""),
        ('Consequences', r"""• **Exterior angles of a polygon.** Walking once round a convex polygon turns through every exterior angle in turn, and a full turn is $360°$: that is the picture behind the [polygon exterior angle sum](!/geometry/visual-tools/polygon-exterior-angles).
• **Regular divisions.** $n$ equal angles round a point are $360°/n$ each: $90°$ for four, $60°$ for six, $45°$ for eight; this is how the regular polygons and the tilings by equilateral triangles, squares and hexagons are set out round a vertex.
• **Vertical angles.** Two crossing lines make four angles round their crossing point; the straight angles on each line show that opposite ones are equal ([vertical angles](!/geometry/visual-tools/vertical-angles)).
• **The angle sum of a polygon by fanning.** Joining an interior point to every vertex of a polygon makes $n$ triangles whose angles at that point add up to $360°$; subtracting it from $n \\cdot 180°$ gives the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum) $(n - 2) \\cdot 180°$ a second way.
• **Clock angles.** The hour marks divide the full turn into twelve angles of $30°$; every clock-angle puzzle rests on this theorem."""),
    ],
    order=[('the-statement', 'given'), ('extending-one-ray', 'extend'), ('one-side-of-the-line', 'upper'), ('the-other-side', 'lower'), ('adding-the-two-sides', 'add'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the sum of the angles around a point?', '360°. Any number of rays from one point cut the plane around it into angles that together make one full turn, two straight angles.'),
        ('How is it proved that the angles around a point add up to 360°?', 'Extend one of the rays through the point to make a straight line. On each side of that line the angles fill a straight angle, 180°; the two sides together give 360°, and the one angle cut by the line is put back together from its two pieces.'),
        ('Why is a full turn 360°?', 'By convention: a straight angle is defined as 180°, and the angles on the two sides of a line make two straight angles. The number 360 itself comes from Babylonian astronomy, chosen for its many divisors.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'Four rays from O and the four angles α, β, γ, δ between them.'),
            ('extend', 'Extending one ray, frozen', 'AO continued to A′ (dashed), cutting γ into γ₁ and γ₂.'),
            ('upper', 'One side of the line, frozen', 'α, β and γ₁ lit: they fill the straight angle AOA′.'),
            ('lower', 'The other side, frozen', 'γ₂ and δ lit: the other straight angle.'),
            ('add', 'Adding the two sides, frozen', '180° + 180°, with γ₁ + γ₂ = γ.'),
            ('conclude', 'The conclusion, frozen', 'α + β + γ + δ = 360°.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B swung down: α larger, β smaller, the sum still 360°.',
    notes=[('given', 'Drag a ray: two angles change, the sum does not.', 'the-statement', 'Learn more about the statement'),
           ('extend', 'One ray made into a line.', 'extending-one-ray', 'Learn more about the extension'),
           ('upper', 'Three angles filling a straight angle.', 'one-side-of-the-line', 'Learn more about this side'),
           ('lower', 'Two angles filling the other straight angle.', 'the-other-side', 'Learn more about the other side'),
           ('add', 'Two straight angles make a full turn.', 'adding-the-two-sides', 'Learn more about adding the sides'),
           ('conclude', 'Drag any ray: the readout keeps the sum at 360°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $A$, $B$, $C$ or $D$ round $O$, or $O$ itself; the readout under the canvas shows the four angles and their sum. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['EXTEND\nNext → : AO continued to A′ makes a line through O and cuts γ into γ₁ and γ₂.',
               'ONE SIDE\nα + β + γ₁ fill the straight angle AOA′: 180°.',
               'OTHER SIDE\nγ₂ + δ fill the other straight angle: 180°.',
               'ADD\n180° + 180° = 360°, with γ₁ + γ₂ = γ.',
               'CONCLUDE\nα + β + γ + δ = 360°.'],
    demo_drag_say='DRAG B\nSwing a ray: two angles change, the sum does not.',
    drag_desc='A, B, C and D move freely round O (in order), O moves the whole figure; the hollow point A′ follows on the extension of AO',
    readout_desc='the line under the figure: the four angles and their sum, live while you drag',
    p3top='94px', p3left='calc(25% + 40px)',
    frame2=[('The four angles', 'α, β, γ, δ round O, each between two neighbouring rays', '150px', 'calc(25% - 120px)'),
            ('The extension', 'the dashed ray OA′ continuing AO, which cuts γ into γ₁ and γ₂', '262px', 'calc(25% + 30px)'),
            ('The two pieces of γ', 'γ₁ and γ₂ on either side of the dashed line, inside the larger arc of γ', '236px', 'calc(25% - 70px)'),
            ('Justification tags', 'Given, Construction, Straight angle (twice), Adding, Substituting', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the rays are placed by dragging and the extension follows.',
    input_rows=[['$A$, $B$, $C$, $D$', 'solid dot', 'move freely round $O$, keeping their order; the two angles at each ray change'],
                ['$O$', 'solid dot', 'moves the whole figure'],
                ["$A'$", 'hollow dot', 'cannot be dragged: on the extension of $AO$ beyond $O$'],
                ['two rays swapped, an angle under $18°$, the extension outside $\\gamma$, or a point out of the frame', '—', 'refused']],
    labels_desc="show or hide the point names $A$, $B$, $C$, $D$, $O$, $A'$",
    measures_desc="write each marked angle's size in degrees beside its arc: the four angles and the two pieces of γ",
    readout_short='the four angles and their sum', tags='**Given**, **Construction**, **Straight angle**, **Adding**, **Substituting**',
    beh1='The readout is a check, not a step of the proof. The argument uses only that the angles on one side of a line make 180°, never the numbers, which is why the sum is 360° for every position of the rays.',
    beh2t='Four rays stand for any number', beh2='The proof extends one ray and adds two straight angles; with more rays the same two straight angles are simply made of more pieces.',
)]
