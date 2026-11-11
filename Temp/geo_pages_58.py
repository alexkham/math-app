# Content for page 58, the midpoint of the hypotenuse, read by geo-view-42-45.py (argument geo_pages_58)
PAGES = [dict(
    slug='midpoint-of-hypotenuse', prev='parallelogram-angles', prev_h1='Angles of a Parallelogram', prev_key='parallelogramAngles', prev_dragged='draggedParallelogramAngles',
    key='midpointHypotenuse', dragged='draggedMidHyp', dragged_comment='B slid down its leg: a flatter triangle, M still equally far from all three vertices',
    dragged_expr="{ ...PROOFS.midpointHypotenuse.model, params: { ...PROOFS.midpointHypotenuse.model.params, t: 0.5 } }",
    demo_drag="{ drag: '[data-handle=\"B\"]', dx: 0, dy: 12, ms: 1400 },",
    subCategory='Triangle',
    title='Midpoint of the Hypotenuse Proof | Equidistant from All Three Vertices Step by Step',
    desc='Watch the proof that the midpoint of the hypotenuse of a right triangle is equally far from all three vertices, by completing the triangle to a rectangle and using its diagonals, step by step. Then drag the triangle.',
    h1='Midpoint of the Hypotenuse', name='Midpoint of the Hypotenuse Proof',
    appdesc='Step-by-step interactive proof that the midpoint of the hypotenuse of a right triangle is equidistant from the three vertices, by a rectangle and its equal, bisecting diagonals, with a draggable right triangle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="38" r="28" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="17,54 63,54 17,22" fill="#85B7EB" fill-opacity="0.3" stroke="#E6F1FB" stroke-width="1.4"/><line x1="40" y1="38" x2="17" y2="54" stroke="#FAC775" stroke-width="1.6"/><circle cx="40" cy="38" r="2.4" fill="#FAC775"/><polyline points="17,48 23,48 23,54" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><text x="40" y="78" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">MA = MB = MC</text></svg>',
    keywords=['midpoint of the hypotenuse', 'median to the hypotenuse', 'right triangle circumcentre', 'midpoint equidistant from vertices', 'median half the hypotenuse', 'converse of thales', 'rectangle diagonals', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'complete', 'rectangle', 'diagonals', 'bisect', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag $B$ along its leg, or $A$ or $C$ (the angle at $C$ stays right), and watch the three distances from $M$ in the readout stay equal. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""In a right triangle $ABC$ with the right angle at $C$, let $M$ be the midpoint of the hypotenuse $AB$. Then $M$ is the same distance from all three vertices:

$$MC = MA = MB = \\tfrac12 AB$$

In other words, the median to the hypotenuse is half the hypotenuse, and $M$ is the circumcentre of the triangle. This is the converse direction of [Thales' theorem](!/geometry/visual-tools/thales-theorem): Thales says an angle standing on a diameter is right, this page says the hypotenuse of a right triangle is a diameter of its circumcircle.

The proof completes the triangle to a rectangle and reads the answer off its diagonals, using the [parallelogram angles](!/geometry/visual-tools/parallelogram-angles), [rectangle diagonals](!/geometry/visual-tools/rectangle-diagonals) and [parallelogram diagonals](!/geometry/visual-tools/parallelogram-diagonals) pages. In the player $C$ and $A$ are free and $B$ slides along the perpendicular to $CA$ at $C$, so the angle at $C$ stays right without assuming any circle; the readout shows the three distances from $M$."""),
        ('Completing the Rectangle', r"""Through $A$ draw the line parallel to $CB$, and through $B$ the line parallel to $CA$; they meet at a point $D$. The quadrilateral $CADB$ has both pairs of opposite sides parallel (the chevrons), so it is a parallelogram. The triangle is half of it, cut off by the diagonal $AB$."""),
        ('Four Right Angles', r"""Neighbouring angles of a parallelogram add up to $180°$ ([parallelogram angles](!/geometry/visual-tools/parallelogram-angles)). The angle at $C$ is $90°$, so its neighbours at $A$ and $B$ are $180° - 90° = 90°$, and the angle at $D$, opposite $C$, equals it. All four angles are right:

$$CADB \\text{ is a rectangle}$$"""),
        ('Equal Diagonals', r"""Draw the second diagonal $CD$. The diagonals of a rectangle are equal ([rectangle diagonals](!/geometry/visual-tools/rectangle-diagonals)):

$$CD = AB$$"""),
        ('The Diagonals Bisect Each Other', r"""A rectangle is a parallelogram, and the diagonals of a parallelogram bisect each other ([parallelogram diagonals](!/geometry/visual-tools/parallelogram-diagonals)): they cross at a point that is the midpoint of both. The midpoint of $AB$ is $M$, so the crossing point is $M$, the diagonal $CD$ passes through $M$, and

$$MC = MD = \\tfrac12 CD$$"""),
        ('Why It Holds', r"""Put the pieces together:

$$MC = \\tfrac12 CD = \\tfrac12 AB = MA = MB$$

$M$ is equally far from $A$, $B$ and $C$, so the circle about $M$ through $A$ passes through $B$ and $C$: the hypotenuse is a diameter of the circumcircle. The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, a construction, parallelogram angles, rectangle diagonals, parallelogram diagonals and combining.

The rectangle is the whole idea: a right triangle is half a rectangle, and the centre of a rectangle is equally far from its four corners."""),
        ('Dragging the Figure', r"""Drag $B$ along its leg: the triangle grows taller or flatter, the rectangle and its centre $M$ follow, and in the readout $MA$, $MB$ and $MC$ stay equal while the angle at $C$ stays $90°$. Drag $A$ or $C$ to stretch or move the triangle; $B$ keeps its place along the perpendicular at $C$.

The player keeps the legs long enough for the marks and keeps the rectangle and the circle about $M$ inside the frame; a drag that would push them out is refused."""),
        ('Consequences', r"""• **The circumcentre of a right triangle** is the midpoint of the hypotenuse, and the [circumcentre](!/geometry/visual-tools/circumcentre) lies on a side exactly when the triangle is right-angled.
• **Thales both ways.** Together with [Thales' theorem](!/geometry/visual-tools/thales-theorem): the angle at $C$ is right if and only if $C$ lies on the circle with diameter $AB$.
• **The median is half the hypotenuse.** In a right triangle the median from the right angle has length $c/2$; conversely, a triangle in which one median is half the side it meets is right-angled at the vertex it comes from.
• **Two isosceles triangles.** $MC = MA$ and $MC = MB$ split the right triangle into two isosceles triangles, so the median from $C$ makes with the legs the same angles as the hypotenuse does at $A$ and $B$.
• **Nine-point circle.** The feet of the altitudes see the sides of a triangle at right angles, so by this theorem they lie on circles about the side midpoints; that is the key step of the [nine-point circle](!/geometry/visual-tools/nine-point-circle) page."""),
    ],
    order=[('the-statement', 'given'), ('completing-the-rectangle', 'complete'), ('four-right-angles', 'rectangle'), ('equal-diagonals', 'diagonals'), ('the-diagonals-bisect-each-other', 'bisect'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('Why is the midpoint of the hypotenuse equidistant from the three vertices?', 'Complete the right triangle to a rectangle by drawing parallels to the legs. The hypotenuse is one diagonal of the rectangle; the diagonals are equal and bisect each other, so the midpoint of the hypotenuse is the centre of the rectangle, equally far from all four corners, and in particular from the three vertices of the triangle.'),
        ('How long is the median to the hypotenuse?', 'Half the hypotenuse. In a right triangle with hypotenuse c, the median from the right angle has length c/2.'),
        ('Where is the circumcentre of a right triangle?', 'At the midpoint of the hypotenuse; the hypotenuse is a diameter of the circumcircle.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The right triangle ABC and the midpoint M of the hypotenuse, MA = MB.'),
            ('complete', 'Completing the rectangle, frozen', 'Parallels through A and B meet at D: CADB is a parallelogram.'),
            ('rectangle', 'Four right angles, frozen', 'One right angle makes all four right: a rectangle.'),
            ('diagonals', 'Equal diagonals, frozen', 'The second diagonal CD, equal to AB.'),
            ('bisect', 'The diagonals bisect each other, frozen', 'CD passes through M: MC = MD.'),
            ('conclude', 'The conclusion, frozen', 'MC = MA = MB: the circle about M passes through all three vertices.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B slid down its leg: a flatter triangle, M still equally far from all three vertices.',
    notes=[('given', 'Drag B: the angle at C stays right.', 'the-statement', 'Learn more about the statement'),
           ('complete', 'Two parallels make a parallelogram.', 'completing-the-rectangle', 'Learn more about the construction'),
           ('rectangle', 'One right angle makes four.', 'four-right-angles', 'Learn more about the right angles'),
           ('diagonals', 'A rectangle has equal diagonals.', 'equal-diagonals', 'Learn more about the diagonals'),
           ('bisect', 'The diagonals cross at their midpoints.', 'the-diagonals-bisect-each-other', 'Learn more about the bisection'),
           ('conclude', 'Drag a vertex: the three distances stay equal.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag $B$ along its leg, or $A$ or $C$; the readout under the canvas shows $MA$, $MB$, $MC$ and the angle at $C$. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['COMPLETE\nNext → : parallels through A and B meet at D: a parallelogram.',
               'RECTANGLE\nOne right angle at C makes all four right.',
               'DIAGONALS\nThe rectangle has equal diagonals: CD = AB.',
               'BISECT\nThe diagonals cross at their midpoints: CD passes through M.',
               'CONCLUDE\nMC = MA = MB: M is the centre of the circle through A, B, C.'],
    demo_drag_say='DRAG B\nSlide B along its leg: the three distances stay equal.',
    drag_desc='B slides along the perpendicular to CA at C, A and C move freely; the hollow points D and M follow',
    readout_desc='the line under the figure: MA, MB, MC and the angle at C, live while you drag',
    p3top='96px', p3left='calc(25% - 110px)',
    frame2=[('The rectangle CADB', 'shaded, with a right angle at each corner', '250px', 'calc(25% + 40px)'),
            ('The two diagonals', 'AB and CD, equal and crossing at M', '150px', 'calc(25% + 10px)'),
            ('The circle about M', 'through A, B and C: the hypotenuse is a diameter', '76px', 'calc(25% + 120px)'),
            ('Justification tags', 'Given, Construction, Parallelogram angles, Rectangle diagonals, Parallelogram diagonals, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the right triangle is shaped by dragging and keeps its right angle.',
    input_rows=[['$B$', 'solid dot', 'slides along the perpendicular to $CA$ at $C$, so the angle at $C$ stays right'],
                ['$A$, $C$', 'solid dot', 'move freely; $B$ keeps its place along the perpendicular at $C$'],
                ['$D$, $M$', 'hollow dot', 'cannot be dragged: the fourth corner of the rectangle and the midpoint of $AB$'],
                ['a leg too short, or the rectangle or the circle out of the frame', '—', 'refused']],
    labels_desc='show or hide the point names $A$, $B$, $C$, $D$, $M$',
    measures_desc="write each marked angle's size in degrees beside its arc (this proof marks only right angles)",
    readout_short='the three distances from M and the angle at C', tags='**Given**, **Construction**, **Parallelogram angles**, **Rectangle diagonals**, **Parallelogram diagonals**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the angles and diagonals of parallelograms and rectangles, never the numbers, which is why the three distances agree for every right triangle you drag.',
    beh2t='The right angle is built in, the circle is not', beh2='B is kept on the perpendicular to CA at C, so the angle at C is right whatever you drag; the circle about M appears only at the end, as the conclusion.',
)]
