# Content for page 87, alternate angles of a cyclic hexagon add up to 360 degrees, read by geo-view-42-45.py (argument geo_pages_87)
# Strings in single quotes must not contain an apostrophe.
PAGES = [dict(
    slug='cyclic-hexagon-angles', prev='angle-at-a-bend', prev_h1='The Angle at a Bend Between Parallels', prev_key='parallelBend', prev_dragged='draggedParallelBend',
    key='cyclicHexagon', dragged='draggedCyclicHexagon', dragged_comment='B moved round the circle: new angles, the alternate sum still 360 degrees',
    dragged_expr="{ ...PROOFS.cyclicHexagon.model, params: { ...PROOFS.cyclicHexagon.model.params, tb: 265 * Math.PI / 180 } }",
    demo_drag="{ drag: '[data-handle=\"B\"]', dx: 10, dy: -2, ms: 1400 },",
    subCategory='Polygon',
    title='Angles of a Cyclic Hexagon | Alternate Angles Add Up to 360° Proof Step by Step',
    desc='Watch the proof that in a hexagon drawn in a circle the alternate angles add up to 360°, by a triangle of diagonals and three cyclic quadrilaterals, step by step. Then drag the vertices round the circle.',
    h1='Angles of a Cyclic Hexagon', name='Cyclic Hexagon Angles Proof',
    appdesc='Step-by-step interactive proof that the alternate interior angles of a cyclic hexagon sum to 360 degrees, with vertices draggable round the circle.',
    svg='<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="36" r="27" fill="none" stroke="#E6F1FB" stroke-width="1.2"/><polygon points="14,30 28,12 58,15 66,40 46,62 20,52" fill="none" stroke="#E6F1FB" stroke-width="1.4"/><polygon points="14,30 58,15 46,62" fill="#FAC775" fill-opacity="0.3" stroke="#FAC775" stroke-width="1.2"/><text x="40" y="77" font-family="Georgia,serif" font-size="8" fill="#E6F1FB" text-anchor="middle" font-style="italic">B + D + F = 360°</text></svg>',
    keywords=['cyclic hexagon angles', 'alternate angles of a cyclic hexagon sum to 360', 'hexagon inscribed in a circle', 'cyclic polygon angle sum', 'cyclic quadrilateral', 'inscribed hexagon', 'polygon theorems', 'geometry proof visualizer', 'interactive geometry proof'],
    phases=['given', 'triangle', 'first', 'others', 'conclude'],
    sections=[
        ('Getting Started with the Visualizer', r"""Step through the proof, then drag any vertex round the circle and watch the readout: the angles at $B$, $D$ and $F$ change, but they always add up to $360°$, and so do the angles at $A$, $C$ and $E$. The picture below is the player with its parts numbered; the other tabs list what can be dragged, what each control does and what the step log shows."""),
        ('The Statement', r"""A hexagon $ABCDEF$ is cyclic when its six vertices lie on one circle. Call its angles at $B$, $D$ and $F$ $\\beta$, $\\delta$ and $\\varphi$. The theorem says that every other angle adds up to a full turn:

$$\\beta + \\delta + \\varphi = 360°$$

and in the same way $\\angle A + \\angle C + \\angle E = 360°$. It extends the [cyclic quadrilateral](!/geometry/visual-tools/cyclic-quadrilateral) theorem, where opposite angles add up to $180°$.

In the player the circle is fixed and the six vertices slide round it; the readout shows both sums of alternate angles."""),
        ('The Triangle of Diagonals', r"""Draw the diagonals $AC$, $CE$ and $EA$. They make the triangle $ACE$, with angles $p$ at $E$, $q$ at $A$ and $r$ at $C$. By the [triangle angle sum](!/geometry/visual-tools/triangle-angle-sum):

$$p + q + r = 180°$$"""),
        ('The First Quadrilateral', r"""$A$, $B$, $C$ and $E$ all lie on the circle, so $ABCE$ is a cyclic quadrilateral. Its angles at $B$ and $E$ are opposite, and opposite angles of a cyclic quadrilateral add up to $180°$:

$$\\beta + p = 180°$$"""),
        ('The Other Two', r"""In the same way $CDEA$ is cyclic with $D$ opposite $A$, and $EFAC$ is cyclic with $F$ opposite $C$:

$$\\delta + q = 180°, \\qquad \\varphi + r = 180°$$"""),
        ('Why It Holds', r"""Add the three equations:

$$\\beta + \\delta + \\varphi + (p + q + r) = 540°$$

and put in $p + q + r = 180°$:

$$\\beta + \\delta + \\varphi = 360°$$

The end-of-proof mark ∎ in the log closes the argument. The tags name the facts used: the given figure, the angle sum of a triangle, the cyclic quadrilateral theorem (twice) and combining. Starting from the triangle $BDF$ instead gives $\\angle A + \\angle C + \\angle E = 360°$."""),
        ('Dragging the Figure', r"""Drag any vertex round the circle: the hexagon changes shape, the three marked angles change, and the readout keeps both sums at $360°$.

The player keeps the vertices in order round the circle and each arc between neighbours between $45°$ and $100°$, so that every mark stays readable; a drag that would break this is refused."""),
        ('Consequences', r"""• **All six angles.** The two sums together give $720°$, the angle sum of any hexagon from the [polygon angle sum](!/geometry/visual-tools/polygon-angle-sum); being cyclic splits that total evenly between the two sets of alternate angles.
• **Any even number of sides.** For a cyclic polygon with $2n$ sides, the alternate angles add up to $(n - 1) \\cdot 180°$: $180°$ for a quadrilateral, $360°$ for a hexagon, $540°$ for an octagon.
• **Through inscribed angles.** Each angle of the hexagon is an [inscribed angle](!/geometry/visual-tools/inscribed-angle) standing on the arc opposite it; in the three alternate angles every arc between neighbours is used exactly twice, which is another way to see the $360°$.
• **No converse.** For a quadrilateral, opposite angles adding up to $180°$ make it cyclic. For a hexagon, alternate angles adding up to $360°$ is not enough: many hexagons that are not cyclic have this property too.
• **The regular hexagon.** Its angles are all $120°$, and $3 \\cdot 120° = 360°$, as on the [regular hexagon](!/geometry/visual-tools/regular-hexagon) page."""),
    ],
    order=[('the-statement', 'given'), ('the-triangle-of-diagonals', 'triangle'), ('the-first-quadrilateral', 'first'), ('the-other-two', 'others'), ('why-it-holds', 'conclude'), ('dragging-the-figure', 'dragged'), ('consequences', None)],
    faq=[
        ('What is the sum of alternate angles of a cyclic hexagon?', 'In a hexagon whose vertices lie on a circle, every other angle adds up to 360 degrees: the angles at B, D and F, and also the angles at A, C and E.'),
        ('How is it proved?', 'The diagonals AC, CE and EA make a triangle and three cyclic quadrilaterals. Each quadrilateral pairs one hexagon angle with an angle of the triangle to make 180 degrees; the three pairs give 540 degrees, and the triangle takes 180 of them.'),
        ('Does a hexagon with alternate angles summing to 360 degrees have to be cyclic?', 'No. Unlike the cyclic quadrilateral test, this condition does not force the six vertices onto one circle.'),
    ],
    stills=[('given', 'Opening scene, frozen', 'The hexagon in its circle with β, δ and φ.'),
            ('triangle', 'The triangle of diagonals, frozen', 'ACE shaded with p, q and r.'),
            ('first', 'The first quadrilateral, frozen', 'ABCE shaded: β + p = 180°.'),
            ('others', 'The other two, frozen', 'δ + q = 180° and φ + r = 180°.'),
            ('conclude', 'The conclusion, frozen', 'β + δ + φ = 360°.')],
    dragged_cap='After dragging B, frozen', dragged_txt='B moved round the circle: new angles, the alternate sum still 360°.',
    notes=[('given', 'Drag a vertex: the sum stays 360°.', 'the-statement', 'Learn more about the statement'),
           ('triangle', 'A triangle of three diagonals.', 'the-triangle-of-diagonals', 'Learn more about the triangle'),
           ('first', 'Opposite angles of a cyclic quadrilateral.', 'the-first-quadrilateral', 'Learn more about the first quadrilateral'),
           ('others', 'The same for the other two.', 'the-other-two', 'Learn more about the other two'),
           ('conclude', 'Drag a vertex: the readout keeps both sums at 360°.', 'why-it-holds', 'Learn more about why it holds')],
    instr2='Drag any vertex round the circle; the readout under the canvas shows the sums of alternate angles. [Learn more about why it holds](!#why-it-holds)',
    demo_says=['TRIANGLE\nNext → : the diagonals make ACE, p + q + r = 180°.',
               'FIRST\nABCE is cyclic: β + p = 180°.',
               'OTHERS\nδ + q = 180°, φ + r = 180°.',
               'CONCLUDE\nβ + δ + φ = 360°.'],
    demo_drag_say='DRAG B\nMove a vertex: the sum stays 360°.',
    drag_desc='all six vertices slide round the circle',
    readout_desc='the line under the figure: ∠B + ∠D + ∠F and ∠A + ∠C + ∠E, live while you drag',
    p3top='150px', p3left='calc(25% - 40px)',
    frame2=[('The triangle ACE', 'shaded, with p, q and r', '163px', 'calc(25% + 20px)'),
            ('The quadrilateral ABCE', 'shaded, cyclic', '132px', 'calc(25% + 9px)'),
            ('The angles β, δ, φ', 'every other angle of the hexagon', '250px', 'calc(25% + 60px)'),
            ('Justification tags', 'Given, Angle sum, Cyclic quadrilateral, Combining', '126px', 'calc(50% + 40px)'),
            ('Replay', 'at the last step Play becomes Replay and Next is off', '340px', 'calc(25% - 150px)')],
    intro='The figure is the only input. Nothing is typed; the hexagon is changed by dragging its vertices round the circle.',
    input_rows=[['$A$ to $F$', 'solid dot', 'slide round the circle'],
                ['vertices out of order, or an arc between neighbours under $45°$ or over $100°$', '—', 'refused']],
    labels_desc='show or hide the point names $A$ to $F$',
    measures_desc="write each marked angle's size in degrees beside its arc: β, δ, φ, p, q and r",
    readout_short='the two sums of alternate angles', tags='**Given**, **Angle sum**, **Cyclic quadrilateral**, **Combining**',
    beh1='The readout is a check, not a step of the proof. The argument uses the triangle angle sum and cyclic quadrilaterals, never the numbers, which is why both sums stay at 360° for every position you drag.',
    beh2t='The angles are measured', beh2='The six angles in the readout are measured from the positions of the vertices; nothing makes them add up, so the 360° in the readout is a real check.',
)]
